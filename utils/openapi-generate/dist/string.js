"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimRefPrefix = exports.getShortInterfaceName = exports.getShortClassName = exports.getInterfaceName = exports.getClassName = void 0;
const string_util_1 = require("@kubernetes-models/string-util");
function getClassName(s) {
    return (0, string_util_1.upperFirst)((0, string_util_1.camelCase)(s, ".-"));
}
exports.getClassName = getClassName;
function getInterfaceName(s) {
    return "I" + getClassName(s);
}
exports.getInterfaceName = getInterfaceName;
function getShortClassName(s) {
    const arr = s.split(".");
    return arr[arr.length - 1];
}
exports.getShortClassName = getShortClassName;
function getShortInterfaceName(s) {
    return "I" + getShortClassName(s);
}
exports.getShortInterfaceName = getShortInterfaceName;
function trimRefPrefix(ref) {
    return (0, string_util_1.trimPrefix)(ref, "#/definitions/");
}
exports.trimRefPrefix = trimRefPrefix;
//# sourceMappingURL=string.js.map