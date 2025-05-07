"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateInterface = void 0;
const tslib_1 = require("tslib");
const string_util_1 = require("@kubernetes-models/string-util");
const indent_string_1 = tslib_1.__importDefault(require("indent-string"));
const lodash_1 = require("lodash");
const FALLBACK_TYPE = "any";
const WILDCARD_FIELD = "*";
function _generateInterface(schema, options, parentKeys) {
    const { getRefType, getFieldType, includeDescription } = options;
    if (getFieldType) {
        const result = getFieldType(parentKeys, schema);
        if (result)
            return result;
    }
    if (typeof schema.$ref === "string") {
        if (!getRefType)
            throw new Error("options.getRefType is undefined");
        return getRefType(schema.$ref);
    }
    if (schema.enum && schema.enum.length) {
        return schema.enum.map((x) => JSON.stringify(x)).join(" | ");
    }
    if (schema.not) {
        return `Exclude<${_generateInterface((0, lodash_1.omit)(schema, ["not"]), options, parentKeys)}, ${_generateInterface({ ...(0, lodash_1.omit)(schema, ["not"]), ...schema.not }, options, parentKeys)}>`;
    }
    const result = (() => {
        switch (schema.type) {
            case "object": {
                const { required = [], properties = {}, additionalProperties } = schema;
                let output = "";
                for (const key of Object.keys(properties)) {
                    const prop = properties[key];
                    if (includeDescription && typeof prop.description === "string") {
                        output += (0, string_util_1.formatComment)(prop.description);
                    }
                    output += `${JSON.stringify(key)}`;
                    if (!required.includes(key))
                        output += "?";
                    output +=
                        ": " +
                            _generateInterface(prop, options, [...parentKeys, key]) +
                            ";\n";
                }
                if (additionalProperties) {
                    output += `[key: string]: ${_generateInterface(additionalProperties, options, [...parentKeys, WILDCARD_FIELD])};\n`;
                }
                return "{\n" + (0, indent_string_1.default)(output, 2) + "}";
            }
            case "number":
            case "integer":
                return "number";
            case "string":
                switch (schema.format) {
                    case "int-or-string":
                        return "string | number";
                    default:
                        return "string";
                }
            case "boolean":
                return "boolean";
            case "array":
                if (schema.items) {
                    return `Array<${_generateInterface(schema.items, options, [
                        ...parentKeys,
                        WILDCARD_FIELD
                    ])}>`;
                }
                return `${FALLBACK_TYPE}[]`;
            case "null":
                return "null";
        }
        return "";
    })();
    if (schema.oneOf) {
        return intersectType(result, schema.oneOf
            .map((x) => _generateInterface({ ...(0, lodash_1.omit)(schema, ["oneOf"]), ...x }, options, parentKeys))
            .join(" | "));
    }
    if (schema.anyOf) {
        return intersectType(result, schema.anyOf
            .map((x) => _generateInterface({ ...(0, lodash_1.omit)(schema, ["anyOf"]), ...x }, options, parentKeys))
            .join(" | "));
    }
    if (schema.allOf) {
        return intersectType(result, schema.allOf
            .map((x) => _generateInterface({ ...(0, lodash_1.omit)(schema, ["allOf"]), ...x }, options, parentKeys))
            .join(" & "));
    }
    return result || FALLBACK_TYPE;
}
function intersectType(base, patch) {
    if (base) {
        return `${base} & (${patch})`;
    }
    return patch;
}
function generateInterface(schema, options = {}) {
    return _generateInterface(schema, options, []);
}
exports.generateInterface = generateInterface;
//# sourceMappingURL=interface.js.map