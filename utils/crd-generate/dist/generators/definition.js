"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generate_1 = require("@kubernetes-models/generate");
const string_util_1 = require("@kubernetes-models/string-util");
const utils_1 = require("../utils.js");
function getFieldType(key) {
    if (key.length === 1 && key[0] === "metadata") {
        return "IObjectMeta";
    }
}
function generateDefinition(gvk, def) {
    const apiVersion = (0, generate_1.getAPIVersion)(gvk);
    const className = gvk.kind;
    const interfaceName = `I${className}`;
    const imports = [];
    const interfaceContent = (0, generate_1.generateInterface)(def.schema, {
        includeDescription: true,
        getFieldType
    });
    const path = `${apiVersion}/${className}.ts`;
    let classContent = (0, generate_1.generateInterface)(def.schema, {
        getFieldType(key) {
            if (key.length === 1) {
                return `${interfaceName}${JSON.stringify(key)}`;
            }
        }
    });
    let comment = "";
    classContent =
        (0, string_util_1.trimSuffix)(classContent, "}") +
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
        path: (0, utils_1.getRelativePath)(path, (0, utils_1.getSchemaPath)(def.schemaId))
    });
    if (def.schema.description) {
        comment = (0, string_util_1.formatComment)(def.schema.description, {
            deprecated: /^deprecated/i.test(def.schema.description)
        });
    }
    return {
        path,
        content: `${(0, generate_1.generateImports)(imports)}

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
exports.default = generateDefinitions;
//# sourceMappingURL=definition.js.map