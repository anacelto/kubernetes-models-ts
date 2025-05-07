import { formats } from "@kubernetes-models/validate";
export const validate = validate21;
const schema6 = {
  "format": "date-time",
  "type": "string",
  "$id": "io.k8s.apimachinery.pkg.apis.meta.v1.MicroTime"
};
const formats0 = formats["date-time"];
function validate21(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.apimachinery.pkg.apis.meta.v1.MicroTime" */;
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!formats0.validate(data)) {
      const err0 = {
        instancePath,
        schemaPath: "#/format",
        keyword: "format",
        params: {
          format: "date-time"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
  } else {
    const err1 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "string"
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate21.errors = vErrors;
  return errors === 0;
}