"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const string_util_1 = require("@kubernetes-models/string-util");
function generate(map, parent = "") {
    const path = parent + "index.ts";
    let children = [];
    let content = "";
    for (const key of Object.keys(map)) {
        const val = map[key];
        if (typeof val === "string") {
            content += `export * from "./${val}";\n`;
        }
        else {
            const exportedName = (0, string_util_1.camelCase)(key, ".-");
            content += `export * as ${exportedName} from "./${key}/index";\n`;
            children = children.concat(generate(val, parent + key + "/"));
        }
    }
    return [{ path, content }, ...children];
}
const generateAliases = async (definitions) => {
    const map = {};
    for (const def of definitions) {
        for (const gvk of def.gvk || []) {
            (0, lodash_1.set)(map, [gvk.group, gvk.version, gvk.kind], gvk.kind);
        }
    }
    return generate(map);
};
exports.default = generateAliases;
//# sourceMappingURL=alias.js.map