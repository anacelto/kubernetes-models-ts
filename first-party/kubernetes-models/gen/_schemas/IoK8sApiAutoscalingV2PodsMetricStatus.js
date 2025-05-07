export const validate = validate21;
const schema6 = {
  "properties": {
    "current": {
      "$ref": "eRlEDJPHHyubdR5RanmKlgWaxtvZVwR9tDpq8UkAQO4"
    },
    "metric": {
      "$ref": "dhpYu9SJPs0qaUujCOmKcxelamA6zMPHuZnqDDLLRwk"
    }
  },
  "required": ["metric", "current"],
  "type": "object",
  "$id": "io.k8s.api.autoscaling.v2.PodsMetricStatus"
};
const schema7 = {
  "$ref": "io.k8s.api.autoscaling.v2.MetricValueStatus#"
};
const schema8 = {};
import { validate as validate23 } from "./IoK8sApiAutoscalingV2MetricValueStatus";
function validate22(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate23(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
    errors = vErrors.length;
  }
  validate22.errors = vErrors;
  return errors === 0;
}
const schema9 = {
  "$ref": "io.k8s.api.autoscaling.v2.MetricIdentifier#"
};
const schema10 = {};
import { validate as validate27 } from "./IoK8sApiAutoscalingV2MetricIdentifier";
function validate26(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate27(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
    errors = vErrors.length;
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
  /*# sourceURL="io.k8s.api.autoscaling.v2.PodsMetricStatus" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.metric === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "metric"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.current === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "current"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.current !== undefined) {
      if (!validate22(data.current, {
        instancePath: instancePath + "/current",
        parentData: data,
        parentDataProperty: "current",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.metric !== undefined) {
      if (!validate26(data.metric, {
        instancePath: instancePath + "/metric",
        parentData: data,
        parentDataProperty: "metric",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err2 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err2];
    } else {
      vErrors.push(err2);
    }
    errors++;
  }
  validate21.errors = vErrors;
  return errors === 0;
}