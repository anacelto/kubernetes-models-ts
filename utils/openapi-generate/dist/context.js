"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildContext = void 0;
const generate_1 = require("@kubernetes-models/generate");
const string_util_1 = require("@kubernetes-models/string-util");
const lodash_1 = require("lodash");
const string_1 = require("./string.js");
function getIdPrefix(id) {
    return id.split(".").slice(0, -1).join(".");
}
function buildContext(definitions, { rewriteDefinitionPath = lodash_1.identity, externalAPIMachinery }) {
    const apiVersionMap = new Map();
    for (const def of definitions) {
        if (def.gvk?.length === 1) {
            const idPrefix = getIdPrefix(def.schemaId);
            const apiVersion = (0, generate_1.getAPIVersion)(def.gvk?.[0]);
            const existingValue = apiVersionMap.get(idPrefix);
            if (existingValue && existingValue !== apiVersion) {
                throw new Error(`API version of "${idPrefix}" has already been set as ${existingValue}, but the definition ID "${def.schemaId}" has different API version "${apiVersion}"`);
            }
            apiVersionMap.set(idPrefix, apiVersion);
        }
    }
    return {
        externalAPIMachinery,
        getDefinitionPath(id) {
            const apiVersion = apiVersionMap.get(getIdPrefix(id));
            if (apiVersion) {
                return `${apiVersion}/${(0, string_1.getShortClassName)(id)}.ts`;
            }
            const path = (0, string_util_1.trimPrefix)(id, "io.k8s.").split(".").join("/") + ".ts";
            return rewriteDefinitionPath(path);
        }
    };
}
exports.buildContext = buildContext;
//# sourceMappingURL=context.js.map