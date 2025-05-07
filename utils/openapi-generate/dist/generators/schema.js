"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generate_1 = require("@kubernetes-models/generate");
const string_util_1 = require("@kubernetes-models/string-util");
const string_1 = require("../string.js");
const utils_1 = require("../utils.js");
function replaceRef(schema) {
    if (typeof schema.$ref === "string") {
        const ref = (0, string_1.trimRefPrefix)(schema.$ref);
        return { ...schema, $ref: `${ref}#` };
    }
    return schema;
}
function transformSchema(def) {
    let schema = {};
    // Rewrite schemas for some special types
    switch (def.schemaId) {
        case "io.k8s.apimachinery.pkg.util.intstr.IntOrString":
            schema = {
                oneOf: [{ type: "string" }, { type: "integer", format: "int32" }]
            };
            break;
        case "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSON":
        case "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSON":
            schema = {};
            break;
        default:
            schema = (0, generate_1.transformSchema)(def.schema, [replaceRef]);
    }
    return { ...schema, $id: def.schemaId };
}
function default_1({ externalAPIMachinery }) {
    function getSchemaImportPath(ref) {
        if (externalAPIMachinery && (0, utils_1.isAPIMachineryID)(ref)) {
            return `@kubernetes-models/apimachinery/${(0, string_util_1.trimSuffix)((0, utils_1.getSchemaPath)(ref), ".js")}`;
        }
        return `./${(0, string_1.getClassName)(ref)}`;
    }
    return async (definitions) => {
        const files = [];
        for (const def of definitions) {
            const schema = transformSchema(def);
            const refIds = (0, generate_1.collectRefs)(def.schema)
                .map(string_1.trimRefPrefix)
                .filter((ref) => ref !== def.schemaId);
            const refPaths = Object.fromEntries(refIds.map((ref) => [ref, getSchemaImportPath(ref)]));
            files.push({
                path: (0, utils_1.getSchemaPath)(def.schemaId),
                content: await (0, generate_1.compileSchema)(schema, refPaths)
            }, {
                path: (0, string_util_1.trimSuffix)((0, utils_1.getSchemaPath)(def.schemaId), ".js") + ".d.ts",
                content: `export function validate(data: unknown): boolean;`
            });
        }
        return files;
    };
}
exports.default = default_1;
//# sourceMappingURL=schema.js.map