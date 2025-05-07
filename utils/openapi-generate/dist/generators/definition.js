"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generate_1 = require("@kubernetes-models/generate");
const string_util_1 = require("@kubernetes-models/string-util");
const lodash_1 = require("lodash");
const string_1 = require("../string.js");
const utils_1 = require("../utils.js");
function omitTypeMetaDescription(schema) {
    const { properties, ...rest } = schema;
    if (!properties)
        return schema;
    return {
        ...rest,
        properties: (0, lodash_1.mapValues)(properties, (prop, key) => {
            if (["apiVersion", "kind"].includes(key)) {
                return (0, lodash_1.omit)(prop, "description");
            }
            return prop;
        })
    };
}
function default_1({ getDefinitionPath, externalAPIMachinery }) {
    return async (definitions) => {
        return definitions.map((def) => {
            const interfaceName = (0, string_1.getInterfaceName)(def.schemaId);
            const className = (0, string_1.getClassName)(def.schemaId);
            const shortInterfaceName = (0, string_1.getShortInterfaceName)(def.schemaId);
            const shortClassName = (0, string_1.getShortClassName)(def.schemaId);
            const refs = (0, generate_1.collectRefs)(def.schema)
                .map(string_1.trimRefPrefix)
                .filter((ref) => ref !== def.schemaId);
            const imports = [];
            const gvk = def.gvk?.[0];
            const typing = (0, generate_1.generateInterface)(gvk ? omitTypeMetaDescription(def.schema) : def.schema, {
                getRefType,
                includeDescription: true
            });
            const path = getDefinitionPath(def.schemaId);
            const schemaPath = (0, utils_1.getRelativePath)(path, (0, utils_1.getSchemaPath)(def.schemaId));
            let content = "";
            let comment = "";
            function getRefType(ref) {
                const id = (0, string_1.trimRefPrefix)(ref);
                // Return the shortInterfaceName if it is a self reference.
                if (id === def.schemaId) {
                    return shortInterfaceName;
                }
                return (0, string_1.getInterfaceName)(id);
            }
            if (def.schema.description) {
                comment = (0, string_util_1.formatComment)(def.schema.description, {
                    deprecated: /deprecated/i.test(def.schema.description)
                });
            }
            for (const ref of refs) {
                const name = (0, string_1.getInterfaceName)(ref);
                if (externalAPIMachinery && (0, utils_1.isAPIMachineryID)(ref)) {
                    imports.push({
                        name,
                        path: `@kubernetes-models/apimachinery/${(0, string_util_1.trimPrefix)(ref, "io.k8s.apimachinery.pkg.")
                            .split(".")
                            .join("/")}`
                    });
                }
                else {
                    imports.push({
                        name,
                        path: (0, utils_1.getRelativePath)(path, getDefinitionPath(ref))
                    });
                }
            }
            if (def.schema.type === "object") {
                let classContent = (0, generate_1.generateInterface)(def.schema, {
                    getRefType,
                    getFieldType(key) {
                        // Rewrite types of apiVersion/kind to the interface type.
                        switch (key[0]) {
                            case "apiVersion":
                            case "kind":
                                return `${shortInterfaceName}["${key[0]}"]`;
                        }
                    }
                });
                imports.push({
                    name: "ModelData",
                    path: "@kubernetes-models/base"
                });
                if (gvk) {
                    imports.push({
                        name: "TypeMeta",
                        path: "@kubernetes-models/base"
                    });
                    imports.push({
                        name: "createTypeMetaGuard",
                        path: "@kubernetes-models/base"
                    });
                    classContent = `${(0, string_util_1.trimSuffix)(classContent, "}")}
static apiVersion: ${shortInterfaceName}["apiVersion"] = "${(0, generate_1.getAPIVersion)(gvk)}";
static kind: ${shortInterfaceName}["kind"] = "${gvk.kind}";
static is = createTypeMetaGuard<${shortInterfaceName}>(${shortClassName});

constructor(data?: ModelData<${shortInterfaceName}>) {
  super();

  this.setDefinedProps({
    apiVersion: ${shortClassName}.apiVersion,
    kind: ${shortClassName}.kind,
    ...data
  } as ${shortInterfaceName});
}
}`;
                }
                else {
                    classContent = `${(0, string_util_1.trimSuffix)(classContent, "}")}
constructor(data?: ModelData<${shortInterfaceName}>) {
  super();

  this.setDefinedProps(data);
}
}`;
                }
                imports.push({ name: "Model", path: "@kubernetes-models/base" });
                imports.push({
                    name: "setValidateFunc",
                    path: "@kubernetes-models/base"
                });
                imports.push({
                    name: "ValidateFunc",
                    path: "@kubernetes-models/validate"
                });
                imports.push({ name: "validate", path: schemaPath });
                content += `
${comment}export interface ${shortInterfaceName}${gvk ? " extends TypeMeta " : " "}${typing}

${comment}export class ${shortClassName} extends Model<${shortInterfaceName}> implements ${shortInterfaceName} ${classContent}

setValidateFunc(${shortClassName}, validate as ValidateFunc<${shortInterfaceName}>);
`;
            }
            else {
                content += `
${comment}export type ${shortInterfaceName} = ${typing};

export type ${shortClassName} = ${shortInterfaceName};
`;
            }
            content += `
export {
  ${shortInterfaceName} as ${interfaceName},
  ${shortClassName} as ${className}
};
`;
            if (imports.length) {
                content = (0, generate_1.generateImports)(imports) + "\n" + content;
            }
            return {
                path,
                content
            };
        });
    };
}
exports.default = default_1;
//# sourceMappingURL=definition.js.map