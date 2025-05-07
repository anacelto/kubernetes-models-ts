"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unquote = void 0;
const QUOTES = `'"`;
function unquote(s) {
    const first = s[0];
    if (QUOTES.indexOf(first) === -1)
        return s;
    if (s[s.length - 1] !== first)
        return s;
    return s.substring(1, s.length - 1);
}
exports.unquote = unquote;
//# sourceMappingURL=unquote.js.map