export const validate = validate21;
const schema6 = {
  "properties": {
    "resource": {
      "$ref": "BSWgjJXU9d3cJ3z9NrZpZN368bO4U0qURJIV7KwE9k"
    },
    "serviceName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "servicePort": {
      "$ref": "hbuFgDwfSBwAZPffdgJB2a6tMRXSaSIHVYgCpOJlo"
    }
  },
  "type": "object",
  "$id": "io.k8s.api.extensions.v1beta1.IngressBackend"
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
  "type": "string",
  "nullable": true
};
function validate26(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string" && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "string"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate26.errors = vErrors;
  return errors === 0;
}
const schema10 = {
  "nullableRef": "io.k8s.apimachinery.pkg.util.intstr.IntOrString#"
};
const schema11 = {};
import { validate as validate29 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgUtilIntstrIntOrString";
function validate28(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate29(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
      errors = vErrors.length;
    }
  }
  validate28.errors = vErrors;
  return errors === 0;
}
function validate21(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.extensions.v1beta1.IngressBackend" */;
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
    if (data.serviceName !== undefined) {
      if (!validate26(data.serviceName, {
        instancePath: instancePath + "/serviceName",
        parentData: data,
        parentDataProperty: "serviceName",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.servicePort !== undefined) {
      if (!validate28(data.servicePort, {
        instancePath: instancePath + "/servicePort",
        parentData: data,
        parentDataProperty: "servicePort",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
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