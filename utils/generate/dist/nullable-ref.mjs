import { _ } from "ajv";
import ref from "ajv/dist/vocabularies/core/ref";
const keyword = {
    keyword: "nullableRef",
    schemaType: "string",
    errors: false,
    code(cxt) {
        const { gen, data } = cxt;
        gen.if(_ `${data} !== null`);
        ref.code(cxt);
        gen.endIf();
    }
};
export default keyword;
//# sourceMappingURL=nullable-ref.mjs.map