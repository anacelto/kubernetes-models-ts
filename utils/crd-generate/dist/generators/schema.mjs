import { transformSchema, compileSchema } from "@kubernetes-models/generate";
import { getSchemaPath } from "../utils.mjs";
import { trimSuffix } from "@kubernetes-models/string-util";
const generateSchemas = async (definitions) => {
    const files = [];
    for (const def of definitions) {
        const schema = { ...transformSchema(def.schema), $id: def.schemaId };
        files.push({
            path: getSchemaPath(def.schemaId),
            content: await compileSchema(schema, {
                "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta": "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta"
            })
        }, 
        // TODO: Move this to @kubernetes-models/generate
        {
            path: trimSuffix(getSchemaPath(def.schemaId), ".js") + ".d.ts",
            content: `export function validate(data: unknown): boolean;`
        });
    }
    return files;
};
export default generateSchemas;
//# sourceMappingURL=schema.mjs.map