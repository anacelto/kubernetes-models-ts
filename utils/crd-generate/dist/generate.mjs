import { parseAllDocuments } from "yaml";
import { mapValues } from "lodash";
import { composeGenerators, writeOutputFiles, getAPIVersion } from "@kubernetes-models/generate";
import generateDefinitions from "./generators/definition.mjs";
import generateAliases from "./generators/alias.mjs";
import generateSchemas from "./generators/schema.mjs";
function fixMissingSchemaType(schema) {
    if (!schema.type) {
        if (schema.properties) {
            schema.type = "object";
        }
        else if (schema.items) {
            schema.type = "array";
        }
    }
}
function formatSchema(schema) {
    fixMissingSchemaType(schema);
    switch (schema.type) {
        case "object": {
            const { properties = {}, additionalProperties } = schema;
            return {
                ...schema,
                properties: mapValues(properties, (prop) => formatSchema(prop)),
                ...(additionalProperties && {
                    additionalProperties: formatSchema(additionalProperties)
                })
            };
        }
        case "array":
            return {
                ...schema,
                ...(schema.items && { items: formatSchema(schema.items) })
            };
    }
    return schema;
}
function generateDefinition(gvk, validation) {
    const { properties = {}, required = [], ...schema } = formatSchema(validation.openAPIV3Schema);
    schema.properties = {
        ...properties,
        apiVersion: {
            ...properties.apiVersion,
            type: "string",
            enum: [getAPIVersion(gvk)]
        },
        kind: {
            ...properties.kind,
            type: "string",
            enum: [gvk.kind]
        },
        metadata: {
            $ref: "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
        }
    };
    schema.required = [...new Set([...required, "apiVersion", "kind"])];
    return {
        gvk: [gvk],
        schemaId: `${gvk.group}.${gvk.version}.${gvk.kind}`,
        schema
    };
}
function gvkToString(gvk) {
    return [gvk.group, gvk.version, gvk.kind].join("/");
}
function dedupeDefinitions(definitions) {
    const map = {};
    for (const def of definitions) {
        if (!def.gvk)
            continue;
        for (const gvk of def.gvk) {
            // We don't need to check if the definition exists in the map or not.
            // Values which come first should always be overridden.
            map[gvkToString(gvk)] = def;
        }
    }
    return Object.values(map);
}
const generator = composeGenerators([
    generateDefinitions,
    generateSchemas,
    generateAliases
]);
export async function generate(options) {
    const data = parseAllDocuments(options.input, {
        version: options.yamlVersion ?? "1.2"
    })
        .map((doc) => doc.toJSON())
        .filter((x) => x != null && typeof x === "object")
        .filter(({ apiVersion }) => ["apiextensions.k8s.io/v1beta1", "apiextensions.k8s.io/v1"].includes(apiVersion))
        .filter(({ kind }) => kind === "CustomResourceDefinition");
    const definitions = [];
    for (const crd of data) {
        const group = crd.spec.group;
        const kind = crd.spec.names.kind;
        if (Array.isArray(crd.spec.versions) && crd.spec.versions.length) {
            for (const version of crd.spec.versions) {
                const validation = version.schema || crd.spec.validation;
                const gvk = {
                    group,
                    version: version.name,
                    kind
                };
                if (validation) {
                    definitions.push(generateDefinition(gvk, validation));
                }
            }
        }
        else if (crd.spec.version) {
            const validation = crd.spec.validation;
            const gvk = {
                group,
                kind,
                version: crd.spec.version
            };
            if (validation) {
                definitions.push(generateDefinition(gvk, validation));
            }
        }
    }
    const files = await generator(dedupeDefinitions(definitions));
    await writeOutputFiles(options.outputPath, files);
}
//# sourceMappingURL=generate.mjs.map