"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimSuffix = exports.trimPrefix = exports.camelCase = exports.lowerFirst = exports.upperFirst = void 0;
function upperFirst(s) {
    return s[0].toUpperCase() + s.substring(1);
}
exports.upperFirst = upperFirst;
function lowerFirst(s) {
    return s[0].toLowerCase() + s.substring(1);
}
exports.lowerFirst = lowerFirst;
function camelCase(input, chars) {
    let output = "";
    let upper = false;
    for (const s of input) {
        if (chars.includes(s)) {
            upper = true;
        }
        else {
            output += upper ? s.toUpperCase() : s;
            upper = false;
        }
    }
    return output;
}
exports.camelCase = camelCase;
function trimPrefix(s, prefix) {
    if (s.substring(0, prefix.length) === prefix) {
        return s.substring(prefix.length);
    }
    return s;
}
exports.trimPrefix = trimPrefix;
function trimSuffix(s, suffix) {
    const end = s.length - suffix.length;
    if (s.substring(end) === suffix) {
        return s.substring(0, end);
    }
    return s;
}
exports.trimSuffix = trimSuffix;
//# sourceMappingURL=string.js.map