"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generate_1 = require("@kubernetes-models/generate");
const utils_1 = require("../utils.js");
const string_util_1 = require("@kubernetes-models/string-util");
const generateSchemas = async (definitions) => {
    const files = [];
    for (const def of definitions) {
        const schema = { ...(0, generate_1.transformSchema)(def.schema), $id: def.schemaId };
        files.push({
            path: (0, utils_1.getSchemaPath)(def.schemaId),
            content: await (0, generate_1.compileSchema)(schema, {
                "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta": "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta"
            })
        }, 
        // TODO: Move this to @kubernetes-models/generate
        {
            path: (0, string_util_1.trimSuffix)((0, utils_1.getSchemaPath)(def.schemaId), ".js") + ".d.ts",
            content: `export function validate(data: unknown): boolean;`
        });
    }
    return files;
};
exports.default = generateSchemas;
//# sourceMappingURL=schema.js.map