"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpGet = void 0;
const tslib_1 = require("tslib");
const make_fetch_happen_1 = tslib_1.__importDefault(require("make-fetch-happen"));
const find_cache_dir_1 = tslib_1.__importDefault(require("find-cache-dir"));
async function httpGet(url) {
    const res = await (0, make_fetch_happen_1.default)(url, {
        cachePath: (0, find_cache_dir_1.default)({ name: "kubernetes-models-read-input" })
    });
    if (!res.ok) {
        throw new Error(`Request "${url}" failed: ${res.status} ${res.statusText}`);
    }
    return res.text();
}
exports.httpGet = httpGet;
//# sourceMappingURL=http.js.map