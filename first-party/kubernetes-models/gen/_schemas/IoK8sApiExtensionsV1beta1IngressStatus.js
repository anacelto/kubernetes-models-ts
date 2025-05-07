export const validate = validate21;
const schema6 = {
  "properties": {
    "loadBalancer": {
      "$ref": "CydK5iCspkqknkjqinCMpaDnhdENB0SsXTZAQLhYT8"
    }
  },
  "type": "object",
  "$id": "io.k8s.api.extensions.v1beta1.IngressStatus"
};
const schema7 = {
  "nullableRef": "io.k8s.api.core.v1.LoadBalancerStatus#"
};
const schema8 = {};
import { validate as validate23 } from "./IoK8sApiCoreV1LoadBalancerStatus";
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
function validate21(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.extensions.v1beta1.IngressStatus" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.loadBalancer !== undefined) {
      if (!validate22(data.loadBalancer, {
        instancePath: instancePath + "/loadBalancer",
        parentData: data,
        parentDataProperty: "loadBalancer",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
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