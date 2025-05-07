export const validate = validate21;
const schema6 = {
  "properties": {
    "resource": {
      "$ref": "BSWgjJXU9d3cJ3z9NrZpZN368bO4U0qURJIV7KwE9k"
    },
    "service": {
      "$ref": "tcfZXh2rdFWX6My06XmeZciNOIcKDqyslzQrg1fG3k"
    }
  },
  "type": "object",
  "$id": "io.k8s.api.networking.v1.IngressBackend"
};
const schema7 = {
  "nullableRef": "io.k8s.api.core.v1.TypedLocalObjectReference#"
};
const schema8 = {};
import { validate as validate23 } from "./IoK8sApiCoreV1TypedLocalObjectReference";
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
  "nullableRef": "io.k8s.api.networking.v1.IngressServiceBackend#"
};
const schema10 = {};
import { validate as validate27 } from "./IoK8sApiNetworkingV1IngressServiceBackend";
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
  /*# sourceURL="io.k8s.api.networking.v1.IngressBackend" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.resource !== undefined) {
      if (!validate22(data.resource, {
        instancePath: instancePath + "/resource",
        parentData: data,
        parentDataProperty: "resource",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.service !== undefined) {
      if (!validate26(data.service, {
        instancePath: instancePath + "/service",
        parentData: data,
        parentDataProperty: "service",
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