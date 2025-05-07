"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const tslib_1 = require("tslib");
const generate_1 = require("@kubernetes-models/generate");
const definition_1 = tslib_1.__importDefault(require("./generators/definition.js"));
const schema_1 = tslib_1.__importDefault(require("./generators/schema.js"));
const alias_1 = tslib_1.__importDefault(require("./generators/alias.js"));
const lodash_1 = require("lodash");
const context_1 = require("./context.js");
function load(input) {
    const { definitions } = JSON.parse(input);
    return Object.keys(definitions)
        .filter((id) => !id.startsWith("io.k8s.kubernetes."))
        .map((id) => {
        let schema = definitions[id];
        switch (id) {
            case "io.k8s.apimachinery.pkg.api.resource.Quantity":
                schema = {
                    oneOf: [{ type: "number" }, { type: "string", format: "quantity" }]
                };
        }
        const gvks = schema["x-kubernetes-group-version-kind"] || [];
        if (!schema.type && !schema.$ref && !schema.oneOf) {
            schema.type = "object";
        }
        if (schema.type === "object" && gvks.length) {
            const { properties = {}, required = [] } = schema;
            schema.properties = {
                ...properties,
                apiVersion: {
                    ...properties.apiVersion,
                    type: "string",
                    enum: (0, lodash_1.uniq)(gvks.map((x) => (0, generate_1.getAPIVersion)(x)))
                },
                kind: {
                    ...properties.kind,
                    type: "string",
                    enum: (0, lodash_1.uniq)(gvks.map((x) => x.kind))
                }
            };
            schema.required = [...new Set([...required, "apiVersion", "kind"])];
        }
        return {
            gvk: gvks,
            schema,
            schemaId: id
        };
    });
}
async function generate({ input, outputPath, ...contextOptions }) {
    const definitions = load(input);
    const ctx = (0, context_1.buildContext)(definitions, contextOptions);
    const generator = (0, generate_1.composeGenerators)([
        (0, definition_1.default)(ctx),
        (0, schema_1.default)(ctx),
        (0, alias_1.default)(ctx)
    ]);
    const files = await generator(definitions);
    await (0, generate_1.writeOutputFiles)(outputPath, files);
}
exports.generate = generate;
//# sourceMappingURL=generate.js.map