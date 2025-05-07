"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRelativePath = exports.getSchemaPath = exports.getClassName = void 0;
const string_util_1 = require("@kubernetes-models/string-util");
const string_util_2 = require("@kubernetes-models/string-util");
const path_1 = require("path");
// TODO: Move to @kubernetes-models/generate
function getClassName(s) {
    return (0, string_util_1.upperFirst)((0, string_util_1.camelCase)(s, ".-"));
}
exports.getClassName = getClassName;
// TODO: Move to @kubernetes-models/generate
function getSchemaPath(id) {
    return `_schemas/${getClassName(id)}.js`;
}
exports.getSchemaPath = getSchemaPath;
// TODO: Move to @kubernetes-models/generate
function getRelativePath(from, to) {
    const ext = path_1.posix.extname(to);
    const path = (0, string_util_2.trimSuffix)(path_1.posix.relative(path_1.posix.dirname(from), to), ext);
    if (!path.startsWith(".")) {
        return `./${path}`;
    }
    return path;
}
exports.getRelativePath = getRelativePath;
//# sourceMappingURL=utils.js.map