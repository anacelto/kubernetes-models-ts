export const validate = validate24;
const schema8 = {
  "properties": {
    "postStart": {
      "$ref": "totFxX9xqbFvsvobfF779KLFwbdMwV5oq3cdqeM"
    },
    "preStop": {
      "$ref": "totFxX9xqbFvsvobfF779KLFwbdMwV5oq3cdqeM"
    }
  },
  "type": "object",
  "$id": "io.k8s.api.core.v1.Lifecycle"
};
const schema6 = {
  "nullableRef": "io.k8s.api.core.v1.LifecycleHandler#"
};
const schema7 = {};
import { validate as validate22 } from "./IoK8sApiCoreV1LifecycleHandler";
function validate21(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate22(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
      errors = vErrors.length;
    }
  }
  validate21.errors = vErrors;
  return errors === 0;
}
function validate24(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.core.v1.Lifecycle" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.postStart !== undefined) {
      if (!validate21(data.postStart, {
        instancePath: instancePath + "/postStart",
        parentData: data,
        parentDataProperty: "postStart",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.preStop !== undefined) {
      if (!validate21(data.preStop, {
        instancePath: instancePath + "/preStop",
        parentData: data,
        parentDataProperty: "preStop",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate24.errors = vErrors;
  return errors === 0;
}