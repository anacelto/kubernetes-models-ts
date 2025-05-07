export const validate = validate24;
const schema8 = {
  "properties": {
    "scaleDown": {
      "$ref": "9v3CfWkE020YboKeJ0l8QKBxumeYX5hvarKShCCvStQ"
    },
    "scaleUp": {
      "$ref": "9v3CfWkE020YboKeJ0l8QKBxumeYX5hvarKShCCvStQ"
    }
  },
  "type": "object",
  "$id": "io.k8s.api.autoscaling.v2.HorizontalPodAutoscalerBehavior"
};
const schema6 = {
  "nullableRef": "io.k8s.api.autoscaling.v2.HPAScalingRules#"
};
const schema7 = {};
import { validate as validate22 } from "./IoK8sApiAutoscalingV2HPAScalingRules";
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
  /*# sourceURL="io.k8s.api.autoscaling.v2.HorizontalPodAutoscalerBehavior" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.scaleDown !== undefined) {
      if (!validate21(data.scaleDown, {
        instancePath: instancePath + "/scaleDown",
        parentData: data,
        parentDataProperty: "scaleDown",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.scaleUp !== undefined) {
      if (!validate21(data.scaleUp, {
        instancePath: instancePath + "/scaleUp",
        parentData: data,
        parentDataProperty: "scaleUp",
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