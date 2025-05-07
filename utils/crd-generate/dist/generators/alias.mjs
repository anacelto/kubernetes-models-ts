import { set } from "lodash";
import { camelCase } from "@kubernetes-models/string-util";
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
            const exportedName = camelCase(key, ".-");
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
            set(map, [gvk.group, gvk.version, gvk.kind], gvk.kind);
        }
    }
    return generate(map);
};
export default generateAliases;
//# sourceMappingURL=alias.mjs.map