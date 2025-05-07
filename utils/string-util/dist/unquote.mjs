const QUOTES = `'"`;
export function unquote(s) {
    const first = s[0];
    if (QUOTES.indexOf(first) === -1)
        return s;
    if (s[s.length - 1] !== first)
        return s;
    return s.substring(1, s.length - 1);
}
//# sourceMappingURL=unquote.mjs.map