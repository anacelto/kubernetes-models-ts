"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripComment = exports.formatComment = void 0;
function formatComment(content, props = {}) {
    let output = "/**\n";
    for (const line of content.split("\n")) {
        output +=
            " * " + line.replace(/\*/g, "\\*").replace(/\*\//g, "*\\/") + "\n";
    }
    for (const key of Object.keys(props)) {
        if (props[key])
            output += ` * @${key}\n`;
    }
    output += " */\n";
    return output;
}
exports.formatComment = formatComment;
function stripComment(s) {
    return s.replace(/\/\*{2}[\s\S]+?\*\//g, "");
}
exports.stripComment = stripComment;
//# sourceMappingURL=comment.js.map