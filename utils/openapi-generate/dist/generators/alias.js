"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_util_1 = require("@kubernetes-models/string-util");
const string_1 = require("../string.js");
const path_1 = require("path");
const generate_1 = require("@kubernetes-models/generate");
const utils_1 = require("../utils.js");
function getIndexPath(key) {
    return [key, "index.ts"].filter(Boolean).join("/");
}
function default_1({ getDefinitionPath }) {
    return async (definitions) => {
        const kindPathMap = new Map();
        const indexPathMap = new Map();
        const output = [];
        // Build the map of (definition folder, array of kinds)
        for (const def of definitions) {
            const defPath = getDefinitionPath(def.schemaId);
            const dir = path_1.posix.dirname(defPath);
            const kind = (0, string_1.getShortClassName)(def.schemaId);
            const values = kindPathMap.get(dir) ?? [];
            const gvks = def.gvk;
            if (!values.includes(kind)) {
                kindPathMap.set(dir, [...values, kind]);
            }
            // Some definitions have multiple GVKs. Here we map the extra GVKs to the
            // path of the first GVK.
            if (gvks && gvks.length > 1) {
                for (let i = 1; i < gvks.length; i++) {
                    const gvk = gvks[i];
                    const aliasPath = `${(0, generate_1.getAPIVersion)(gvk)}/${gvk.kind}.ts`;
                    output.push({
                        path: aliasPath,
                        content: `export * from "${(0, utils_1.getRelativePath)(aliasPath, defPath)}/index";`
                    });
                }
            }
        }
        // Build the map of (folder, alias folders)
        for (const [key] of kindPathMap) {
            const keys = key.split("/");
            for (let i = 0; i < keys.length; i++) {
                const path = keys.slice(0, i).join("/");
                const values = indexPathMap.get(path) ?? [];
                if (!values.includes(keys[i])) {
                    indexPathMap.set(path, [...values, keys[i]]);
                }
            }
        }
        for (const [key, values] of kindPathMap) {
            output.push({
                path: getIndexPath(key),
                content: values.map((v) => `export * from "./${v}";`).join("\n")
            });
        }
        for (const [key, values] of indexPathMap) {
            output.push({
                path: getIndexPath(key),
                content: values
                    .map((v) => {
                    const exportedName = (0, string_util_1.camelCase)(v, ".-");
                    return `export * as ${exportedName} from "./${v}/index";`;
                })
                    .join("\n")
            });
        }
        return output;
    };
}
exports.default = default_1;
//# sourceMappingURL=alias.js.map