import { trimSuffix } from "@kubernetes-models/string-util";
import { posix } from "path";
import { getClassName } from "./string.mjs";
export function mergeOpenAPISpecs(specs) {
    let result = {};
    for (const spec of specs) {
        result = {
            ...spec,
            definitions: {
                ...result.definitions,
                ...spec.definitions
            }
        };
    }
    return result;
}
export function getSchemaPath(id) {
    return `_schemas/${getClassName(id)}.js`;
}
export function getRelativePath(from, to) {
    const ext = posix.extname(to);
    const path = trimSuffix(posix.relative(posix.dirname(from), to), ext);
    if (!path.startsWith(".")) {
        return `./${path}`;
    }
    return path;
}
export function isAPIMachineryID(id) {
    return id.startsWith("io.k8s.apimachinery.");
}
//# sourceMappingURL=utils.mjs.map