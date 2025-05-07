"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readInput = void 0;
const tslib_1 = require("tslib");
const get_stdin_1 = tslib_1.__importDefault(require("get-stdin"));
const promises_1 = require("fs/promises");
const http_1 = require("./http.js");
const urlRegex = /^https?:\/\//;
async function readInput(path) {
    if (path === "-") {
        return (0, get_stdin_1.default)();
    }
    if (urlRegex.test(path)) {
        return (0, http_1.httpGet)(path);
    }
    return (0, promises_1.readFile)(path, "utf8");
}
exports.readInput = readInput;
//# sourceMappingURL=read.js.map