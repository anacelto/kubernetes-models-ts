import { upperFirst, camelCase, trimPrefix } from "@kubernetes-models/string-util";
export function getClassName(s) {
    return upperFirst(camelCase(s, ".-"));
}
export function getInterfaceName(s) {
    return "I" + getClassName(s);
}
export function getShortClassName(s) {
    const arr = s.split(".");
    return arr[arr.length - 1];
}
export function getShortInterfaceName(s) {
    return "I" + getShortClassName(s);
}
export function trimRefPrefix(ref) {
    return trimPrefix(ref, "#/definitions/");
}
//# sourceMappingURL=string.mjs.map