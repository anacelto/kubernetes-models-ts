import { generateImports, generateInterface, getAPIVersion } from "@kubernetes-models/generate";
import { formatComment, trimSuffix } from "@kubernetes-models/string-util";
import { getRelativePath, getSchemaPath } from "../utils.mjs";
function getFieldType(key) {
    if (key.length === 1 && key[0] === "metadata") {
        return "IObjectMeta";
    }
}
function generateDefinition(gvk, def) {
    const apiVersion = getAPIVersion(gvk);
    const className = gvk.kind;
    const interfaceName = `I${className}`;
    const imports = [];
    const interfaceContent = generateInterface(def.schema, {
        includeDescription: true,
        getFieldType
    });
    const path = `${apiVersion}/${className}.ts`;
    let classContent = generateInterface(def.schema, {
        getFieldType(key) {
            if (key.length === 1) {
                return `${interfaceName}${JSON.stringify(key)}`;
            }
        }
    });
    let comment = "";
    classContent =
        trimSuffix(classContent, "}") +
            `
static apiVersion: ${interfaceName}["apiVersion"] = ${JSON.stringify(apiVersion)};
static kind: ${interfaceName}["kind"] = ${JSON.stringify(gvk.kind)};
static is = createTypeMetaGuard<${interfaceName}>(${className});

constructor(data?: ModelData<${interfaceName}>) {
  super();

  this.setDefinedProps({
    apiVersion: ${className}.apiVersion,
    kind: ${className}.kind,
    ...data
  } as ${interfaceName});
}
}
`;
    imports.push({
        name: "IObjectMeta",
        path: "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta"
    });
    imports.push({
        name: "Model",
        path: "@kubernetes-models/base"
    });
    imports.push({
        name: "ModelData",
        path: "@kubernetes-models/base"
    });
    imports.push({
        name: "setValidateFunc",
        path: "@kubernetes-models/base"
    });
    imports.push({
        name: "createTypeMetaGuard",
        path: "@kubernetes-models/base"
    });
    imports.push({
        name: "ValidateFunc",
        path: "@kubernetes-models/validate"
    });
    imports.push({
        name: "validate",
        path: getRelativePath(path, getSchemaPath(def.schemaId))
    });
    if (def.schema.description) {
        comment = formatComment(def.schema.description, {
            deprecated: /^deprecated/i.test(def.schema.description)
        });
    }
    return {
        path,
        content: `${generateImports(imports)}

${comment}export interface ${interfaceName} ${interfaceContent}

${comment}export class ${className} extends Model<${interfaceName}> implements ${interfaceName} ${classContent}

setValidateFunc(${className}, validate as ValidateFunc<${interfaceName}>);
`
    };
}
const generateDefinitions = async (definitions) => {
    const output = [];
    for (const def of definitions) {
        const gvks = def.gvk;
        if (gvks && gvks.length) {
            output.push(generateDefinition(gvks[0], def));
        }
    }
    return output;
};
export default generateDefinitions;
//# sourceMappingURL=definition.mjs.map