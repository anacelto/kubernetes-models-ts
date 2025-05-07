"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileSchema = exports.transformSchema = exports.collectRefs = void 0;
const tslib_1 = require("tslib");
const lodash_1 = require("lodash");
const ajv_1 = tslib_1.__importStar(require("ajv"));
const standalone_1 = tslib_1.__importDefault(require("ajv/dist/standalone"));
const assert_1 = tslib_1.__importDefault(require("assert"));
const validate_1 = require("@kubernetes-models/validate");
const parser_1 = require("@babel/parser");
const traverse_1 = tslib_1.__importDefault(require("@babel/traverse"));
const t = tslib_1.__importStar(require("@babel/types"));
const generator_1 = tslib_1.__importDefault(require("@babel/generator"));
const ohash_1 = require("ohash");
const nullable_ref_1 = tslib_1.__importDefault(require("./nullable-ref.js"));
const pattern_1 = tslib_1.__importDefault(require("./pattern.js"));
const ajv = new ajv_1.default();
const AJV_RUNTIME_PREFIX = "ajv/dist/runtime/";
function collectRefs(data) {
    const refs = Object.keys(data).map((key) => {
        const val = data[key];
        if (key === "$ref" && typeof val === "string") {
            return [val];
        }
        if (typeof val === "object" && !Array.isArray(val)) {
            return collectRefs(val);
        }
        return [];
    });
    return (0, lodash_1.uniq)(refs.reduce((acc, x) => acc.concat(x), []));
}
exports.collectRefs = collectRefs;
function allowNull(schema) {
    if (schema.type !== "object")
        return schema;
    const { properties, required = [] } = schema;
    if (!properties)
        return schema;
    const newProps = {};
    for (const [k, v] of Object.entries(properties)) {
        if (required.includes(k)) {
            newProps[k] = v;
        }
        else if (v.type) {
            newProps[k] = { ...v, nullable: true };
        }
        else if (v.$ref) {
            const { $ref, ...rest } = v;
            newProps[k] = { ...rest, nullableRef: $ref };
        }
        else {
            newProps[k] = v;
        }
    }
    return {
        ...schema,
        properties: newProps
    };
}
function omitDescription(schema) {
    return (0, lodash_1.omit)(schema, ["description"]);
}
function omitKubernetesFields(schema) {
    return (0, lodash_1.omitBy)(schema, (v, k) => k.startsWith("x-kubernetes-"));
}
function uniqEnum(schema) {
    if (Array.isArray(schema.enum)) {
        return { ...schema, enum: (0, lodash_1.uniq)(schema.enum) };
    }
    return schema;
}
function setExclusiveNumber(schema) {
    if (schema.type !== "number" && schema.type !== "integer")
        return schema;
    const { minimum, maximum, exclusiveMinimum, exclusiveMaximum, ...rest } = schema;
    return {
        ...rest,
        ...(exclusiveMinimum === true
            ? { exclusiveMinimum: minimum }
            : { exclusiveMinimum, minimum }),
        ...(exclusiveMaximum === true
            ? { exclusiveMaximum: maximum }
            : { exclusiveMaximum, maximum })
    };
}
function doTransformSchema(schema, transformers) {
    const output = {};
    for (const [k, v] of Object.entries(schema)) {
        if (Array.isArray(v)) {
            output[k] = v.map((x) => {
                if (typeof x === "object" && !Array.isArray(x)) {
                    return doTransformSchema(x, transformers);
                }
                return x;
            });
        }
        else if (typeof v === "object") {
            output[k] = doTransformSchema(v, transformers);
        }
        else {
            output[k] = v;
        }
    }
    return transformers.reduce((acc, transform) => transform(acc), output);
}
/**
 * Converts the input schema into a valid JSON schema.
 */
function transformSchema(schema, transformers = []) {
    const output = doTransformSchema(schema, [
        omitDescription,
        omitKubernetesFields,
        allowNull,
        uniqEnum,
        setExclusiveNumber,
        ...transformers
    ]);
    ajv.validateSchema(output, true);
    return output;
}
exports.transformSchema = transformSchema;
function addChildSchema(ajv, schema) {
    const hash = (0, ohash_1.sha256base64)((0, ohash_1.objectHash)(schema));
    if (!ajv.getSchema(hash)) {
        ajv.addSchema(schema, hash);
        splitSchema(ajv, schema);
    }
    return { $ref: hash };
}
// TODO: Try not to modify the schema in place
function splitSchema(ajv, schema) {
    if (schema.properties) {
        for (const [key, value] of Object.entries(schema.properties)) {
            schema.properties[key] = addChildSchema(ajv, value);
        }
    }
    if (schema.items) {
        schema.items = addChildSchema(ajv, schema.items);
    }
    if (schema.additionalProperties) {
        schema.additionalProperties = addChildSchema(ajv, schema.additionalProperties);
    }
    if (schema.not) {
        schema.not = addChildSchema(ajv, schema.not);
    }
    if (schema.oneOf) {
        schema.oneOf = schema.oneOf.map((x) => addChildSchema(ajv, x));
    }
    if (schema.anyOf) {
        schema.anyOf = schema.anyOf.map((x) => addChildSchema(ajv, x));
    }
    if (schema.allOf) {
        schema.allOf = schema.allOf.map((x) => addChildSchema(ajv, x));
    }
}
function collectValidateNames(refs) {
    const names = new Map();
    const seenIds = new Set();
    function collect(refs) {
        for (const value of Object.values(refs)) {
            const ref = value;
            if (!ref)
                continue;
            const id = ref.baseId;
            if (seenIds.has(id))
                continue;
            seenIds.add(id);
            if (ref.validateName) {
                names.set(ref.validateName.str, id);
            }
            if (ref.refs) {
                collect(ref.refs);
            }
        }
    }
    collect(refs);
    return names;
}
/**
 * Remove `"use strict"` directive.
 */
function removeDirectives(ast) {
    (0, traverse_1.default)(ast, {
        Program(path) {
            path.node.directives = [];
        }
    });
}
/**
 * Remove `export default` declaration.
 */
function removeDefaultExport(ast) {
    (0, traverse_1.default)(ast, {
        ExportDefaultDeclaration(path) {
            path.remove();
        }
    });
}
/**
 * Replace validate function of referenced schemas with import statement.
 */
function replaceValidateFunction(ast, names, refs) {
    (0, traverse_1.default)(ast, {
        FunctionDeclaration(path) {
            if (!path.node.id)
                return;
            const id = names.get(path.node.id.name);
            if (!id)
                return;
            const ref = refs[id];
            if (!ref)
                return;
            path.replaceWith(t.importDeclaration([
                t.importSpecifier(t.identifier(path.node.id.name), t.identifier("validate"))
            ], t.stringLiteral(ref)));
        }
    });
}
/**
 * Replace `const func = require("ajv/dist/runtime/*")` with import statement.
 */
function replaceRuntimeRequire(ast) {
    (0, traverse_1.default)(ast, {
        VariableDeclaration(path) {
            const filtered = new Set();
            for (let i = 0; i < path.node.declarations.length; i++) {
                const { id, init } = path.node.declarations[i];
                if (!t.isIdentifier(id) ||
                    !t.isMemberExpression(init) ||
                    !t.isCallExpression(init.object) ||
                    !t.isIdentifier(init.property) ||
                    !t.isIdentifier(init.object.callee) ||
                    init.object.callee.name !== "require" ||
                    init.object.arguments.length !== 1 ||
                    !t.isStringLiteral(init.object.arguments[0])) {
                    continue;
                }
                const importPath = init.object.arguments[0].value;
                if (!importPath.startsWith(AJV_RUNTIME_PREFIX))
                    continue;
                filtered.add(i);
                path.insertBefore(t.importDeclaration([
                    init.property.name === "default"
                        ? t.importDefaultSpecifier(id)
                        : t.importSpecifier(id, init.property)
                ], t.stringLiteral("@kubernetes-models/validate/runtime/" +
                    importPath.substring(AJV_RUNTIME_PREFIX.length))));
            }
            if (!filtered.size)
                return;
            const vars = path.node.declarations.filter((_, i) => !filtered.has(i));
            if (vars.length) {
                path.replaceWith(t.variableDeclaration(path.node.kind, vars));
            }
            else {
                path.remove();
            }
        }
    });
}
/**
 * Replace `require("FORMATS")` with import statement.
 */
function replaceFormatRequire(ast) {
    let formatsImported = false;
    (0, traverse_1.default)(ast, {
        CallExpression(path) {
            if (t.isIdentifier(path.node.callee) &&
                path.node.callee.name === "require" &&
                path.node.arguments.length === 1 &&
                t.isStringLiteral(path.node.arguments[0]) &&
                path.node.arguments[0].value === "FORMATS") {
                if (!formatsImported) {
                    formatsImported = true;
                    ast.program.body.unshift(t.importDeclaration([
                        t.importSpecifier(t.identifier("formats"), t.identifier("formats"))
                    ], t.stringLiteral("@kubernetes-models/validate")));
                }
                path.replaceWith(t.identifier("formats"));
            }
        }
    });
}
async function compileSchema(schema, refs) {
    const ajv = new ajv_1.default({
        strictTypes: false,
        allErrors: true,
        code: {
            source: true,
            esm: true,
            formats: (0, ajv_1._) `require("FORMATS")`,
            lines: true
        },
        inlineRefs: false,
        keywords: [
            // example keyword is used by grafana-operator
            "example"
        ],
        formats: validate_1.formats,
        messages: false
    });
    // Override the default pattern keyword to support RE2.
    // The reason we don't use `code.regExp` option is because we only want to
    // use RE2 for patterns that JavaScript can't handle.
    ajv.removeKeyword("pattern");
    ajv.addKeyword(pattern_1.default);
    // Add keywords
    ajv.addKeyword(nullable_ref_1.default);
    // Add self reference
    ajv.addSchema(schema);
    // Add referenced schemas
    for (const key of Object.keys(refs)) {
        ajv.addSchema({}, key);
    }
    // Split the schema
    splitSchema(ajv, schema);
    // Compile the schema
    const validate = ajv.compile(schema);
    // Ensure the source code is generated
    (0, assert_1.default)(validate.source);
    const validateNames = collectValidateNames(validate.schemaEnv.refs);
    // Generate standalone code
    const code = (0, standalone_1.default)(ajv, validate);
    const ast = (0, parser_1.parse)(code, { sourceType: "module" });
    removeDirectives(ast);
    removeDefaultExport(ast);
    replaceValidateFunction(ast, validateNames, refs);
    replaceRuntimeRequire(ast);
    replaceFormatRequire(ast);
    const result = (0, generator_1.default)(ast, {}, code);
    return result.code;
}
exports.compileSchema = compileSchema;
//# sourceMappingURL=schema.js.map