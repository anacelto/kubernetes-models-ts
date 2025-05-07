export function upperFirst(s) {
    return s[0].toUpperCase() + s.substring(1);
}
export function lowerFirst(s) {
    return s[0].toLowerCase() + s.substring(1);
}
export function camelCase(input, chars) {
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
export function trimPrefix(s, prefix) {
    if (s.substring(0, prefix.length) === prefix) {
        return s.substring(prefix.length);
    }
    return s;
}
export function trimSuffix(s, suffix) {
    const end = s.length - suffix.length;
    if (s.substring(end) === suffix) {
        return s.substring(0, end);
    }
    return s;
}
//# sourceMappingURL=string.mjs.map