export const validate = validate24;
const schema8 = {
  "properties": {
    "metricName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "metricSelector": {
      "$ref": "Am3gJXrJDlim5pEjXjCk4qB5T1njejh9RaIGwx5cLKg"
    },
    "targetAverageValue": {
      "$ref": "50gMT3lC6as5wpGQ6OdxGULh23AbwddvRp7U8ML3o"
    },
    "targetValue": {
      "$ref": "50gMT3lC6as5wpGQ6OdxGULh23AbwddvRp7U8ML3o"
    }
  },
  "required": ["metricName"],
  "type": "object",
  "$id": "io.k8s.api.autoscaling.v2beta1.ExternalMetricSource"
};
const schema9 = {
  "type": "string"
};
function validate25(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
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
  validate25.errors = vErrors;
  return errors === 0;
}
const schema10 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"
};
const schema11 = {};
import { validate as validate28 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1LabelSelector";
function validate27(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate28(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
      errors = vErrors.length;
    }
  }
  validate27.errors = vErrors;
  return errors === 0;
}
const schema6 = {
  "nullableRef": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
};
const schema7 = {};
import { validate as validate22 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApiResourceQuantity";
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
  /*# sourceURL="io.k8s.api.autoscaling.v2beta1.ExternalMetricSource" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.metricName === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "metricName"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.metricName !== undefined) {
      if (!validate25(data.metricName, {
        instancePath: instancePath + "/metricName",
        parentData: data,
        parentDataProperty: "metricName",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.metricSelector !== undefined) {
      if (!validate27(data.metricSelector, {
        instancePath: instancePath + "/metricSelector",
        parentData: data,
        parentDataProperty: "metricSelector",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.targetAverageValue !== undefined) {
      if (!validate21(data.targetAverageValue, {
        instancePath: instancePath + "/targetAverageValue",
        parentData: data,
        parentDataProperty: "targetAverageValue",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.targetValue !== undefined) {
      if (!validate21(data.targetValue, {
        instancePath: instancePath + "/targetValue",
        parentData: data,
        parentDataProperty: "targetValue",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err1 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate24.errors = vErrors;
  return errors === 0;
}