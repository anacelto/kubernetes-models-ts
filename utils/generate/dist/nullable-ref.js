"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ajv_1 = require("ajv");
const ref_1 = tslib_1.__importDefault(require("ajv/dist/vocabularies/core/ref"));
const keyword = {
    keyword: "nullableRef",
    schemaType: "string",
    errors: false,
    code(cxt) {
        const { gen, data } = cxt;
        gen.if((0, ajv_1._) `${data} !== null`);
        ref_1.default.code(cxt);
        gen.endIf();
    }
};
exports.default = keyword;
//# sourceMappingURL=nullable-ref.js.map