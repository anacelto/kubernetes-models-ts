"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAPIMachineryID = exports.getRelativePath = exports.getSchemaPath = exports.mergeOpenAPISpecs = void 0;
const string_util_1 = require("@kubernetes-models/string-util");
const path_1 = require("path");
const string_1 = require("./string.js");
function mergeOpenAPISpecs(specs) {
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
exports.mergeOpenAPISpecs = mergeOpenAPISpecs;
function getSchemaPath(id) {
    return `_schemas/${(0, string_1.getClassName)(id)}.js`;
}
exports.getSchemaPath = getSchemaPath;
function getRelativePath(from, to) {
    const ext = path_1.posix.extname(to);
    const path = (0, string_util_1.trimSuffix)(path_1.posix.relative(path_1.posix.dirname(from), to), ext);
    if (!path.startsWith(".")) {
        return `./${path}`;
    }
    return path;
}
exports.getRelativePath = getRelativePath;
function isAPIMachineryID(id) {
    return id.startsWith("io.k8s.apimachinery.");
}
exports.isAPIMachineryID = isAPIMachineryID;
//# sourceMappingURL=utils.js.map