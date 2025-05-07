import { collectRefs, transformSchema as baseTransformSchema, compileSchema } from "@kubernetes-models/generate";
import { trimSuffix } from "@kubernetes-models/string-util";
import { getClassName, trimRefPrefix } from "../string.mjs";
import { getSchemaPath, isAPIMachineryID } from "../utils.mjs";
function replaceRef(schema) {
    if (typeof schema.$ref === "string") {
        const ref = trimRefPrefix(schema.$ref);
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
            schema = baseTransformSchema(def.schema, [replaceRef]);
    }
    return { ...schema, $id: def.schemaId };
}
export default function ({ externalAPIMachinery }) {
    function getSchemaImportPath(ref) {
        if (externalAPIMachinery && isAPIMachineryID(ref)) {
            return `@kubernetes-models/apimachinery/${trimSuffix(getSchemaPath(ref), ".js")}`;
        }
        return `./${getClassName(ref)}`;
    }
    return async (definitions) => {
        const files = [];
        for (const def of definitions) {
            const schema = transformSchema(def);
            const refIds = collectRefs(def.schema)
                .map(trimRefPrefix)
                .filter((ref) => ref !== def.schemaId);
            const refPaths = Object.fromEntries(refIds.map((ref) => [ref, getSchemaImportPath(ref)]));
            files.push({
                path: getSchemaPath(def.schemaId),
                content: await compileSchema(schema, refPaths)
            }, {
                path: trimSuffix(getSchemaPath(def.schemaId), ".js") + ".d.ts",
                content: `export function validate(data: unknown): boolean;`
            });
        }
        return files;
    };
}
//# sourceMappingURL=schema.mjs.map