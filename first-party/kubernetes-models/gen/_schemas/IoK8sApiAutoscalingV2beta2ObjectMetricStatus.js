export const validate = validate21;
const schema6 = {
  "properties": {
    "current": {
      "$ref": "54UQ3WnM4mo0QQykSMU2gfaIapqWpVqFEnjXJKlzBo"
    },
    "describedObject": {
      "$ref": "bSMcYBIBflmFY2lahQVEXSvdIo777vgPu5aqcsmHE"
    },
    "metric": {
      "$ref": "pfdnib1Ps964tK2x0Ktj4VYudi3h1W6ldL8hyso8uw"
    }
  },
  "required": ["metric", "current", "describedObject"],
  "type": "object",
  "$id": "io.k8s.api.autoscaling.v2beta2.ObjectMetricStatus"
};
const schema7 = {
  "$ref": "io.k8s.api.autoscaling.v2beta2.MetricValueStatus#"
};
const schema8 = {};
import { validate as validate23 } from "./IoK8sApiAutoscalingV2beta2MetricValueStatus";
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
  "$ref": "io.k8s.api.autoscaling.v2beta2.CrossVersionObjectReference#"
};
const schema10 = {};
import { validate as validate27 } from "./IoK8sApiAutoscalingV2beta2CrossVersionObjectReference";
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
const schema11 = {
  "$ref": "io.k8s.api.autoscaling.v2beta2.MetricIdentifier#"
};
const schema12 = {};
import { validate as validate31 } from "./IoK8sApiAutoscalingV2beta2MetricIdentifier";
function validate30(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate31(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
    errors = vErrors.length;
  }
  validate30.errors = vErrors;
  return errors === 0;
}
function validate21(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.autoscaling.v2beta2.ObjectMetricStatus" */;
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
    if (data.describedObject === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "describedObject"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
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
    if (data.describedObject !== undefined) {
      if (!validate26(data.describedObject, {
        instancePath: instancePath + "/describedObject",
        parentData: data,
        parentDataProperty: "describedObject",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.metric !== undefined) {
      if (!validate30(data.metric, {
        instancePath: instancePath + "/metric",
        parentData: data,
        parentDataProperty: "metric",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err3 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err3];
    } else {
      vErrors.push(err3);
    }
    errors++;
  }
  validate21.errors = vErrors;
  return errors === 0;
}