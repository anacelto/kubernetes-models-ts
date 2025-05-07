export const validate = validate21;
const schema6 = {
  "properties": {
    "nonResourceAttributes": {
      "$ref": "TK2GbAgprSEd7SYENF1Zr3Vd32Ql3Qeqt8Zu1YpTZWY"
    },
    "resourceAttributes": {
      "$ref": "2e02KHq8NO7yr0zqzCWx6ZxgFjvXnAbRTKZqbHAWo"
    }
  },
  "type": "object",
  "$id": "io.k8s.api.authorization.v1.SelfSubjectAccessReviewSpec"
};
const schema7 = {
  "nullableRef": "io.k8s.api.authorization.v1.NonResourceAttributes#"
};
const schema8 = {};
import { validate as validate23 } from "./IoK8sApiAuthorizationV1NonResourceAttributes";
function validate22(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate23(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
      errors = vErrors.length;
    }
  }
  validate22.errors = vErrors;
  return errors === 0;
}
const schema9 = {
  "nullableRef": "io.k8s.api.authorization.v1.ResourceAttributes#"
};
const schema10 = {};
import { validate as validate27 } from "./IoK8sApiAuthorizationV1ResourceAttributes";
function validate26(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate27(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
      errors = vErrors.length;
    }
  }
  validate26.errors = vErrors;
  return errors === 0;
}
function validate21(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.authorization.v1.SelfSubjectAccessReviewSpec" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.nonResourceAttributes !== undefined) {
      if (!validate22(data.nonResourceAttributes, {
        instancePath: instancePath + "/nonResourceAttributes",
        parentData: data,
        parentDataProperty: "nonResourceAttributes",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.resourceAttributes !== undefined) {
      if (!validate26(data.resourceAttributes, {
        instancePath: instancePath + "/resourceAttributes",
        parentData: data,
        parentDataProperty: "resourceAttributes",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
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
  validate21.errors = vErrors;
  return errors === 0;
}