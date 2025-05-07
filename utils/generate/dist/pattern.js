"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ajv_1 = require("ajv");
const re2_wasm_1 = require("re2-wasm");
// https://github.com/ajv-validator/ajv/blob/c8b37f448f77448656222a5a5e279432857f7e9f/lib/vocabularies/validation/pattern.ts
const keyword = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    error: {
        message: ({ schemaCode }) => (0, ajv_1.str) `must match pattern "${schemaCode}"`,
        params: ({ schemaCode }) => (0, ajv_1._) `{pattern: ${schemaCode}}`
    },
    code(cxt) {
        const { data, schema, it, gen } = cxt;
        const u = it.opts.unicodeRegExp ? "u" : "";
        let pattern;
        try {
            const re = new RegExp(schema, u);
            pattern = gen.scopeValue("pattern", {
                key: schema,
                ref: re,
                code: (0, ajv_1._) `new RegExp(${schema}, ${u})`
            });
        }
        catch {
            const re = new re2_wasm_1.RE2(schema, u);
            const func = gen.scopeValue("func", {
                ref: re2_wasm_1.RE2,
                code: (0, ajv_1._) `require("ajv/dist/runtime/re2").default`
            });
            pattern = gen.scopeValue("pattern", {
                key: schema,
                ref: re,
                code: (0, ajv_1._) `new ${func}(${schema}, ${u})`
            });
        }
        cxt.fail((0, ajv_1._) `!${pattern}.test(${data})`);
    }
};
exports.default = keyword;
//# sourceMappingURL=pattern.js.map