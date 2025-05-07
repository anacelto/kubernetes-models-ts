export const validate = validate21;
const schema6 = {
  "properties": {
    "currentAverageValue": {
      "$ref": "50gMT3lC6as5wpGQ6OdxGULh23AbwddvRp7U8ML3o"
    },
    "currentValue": {
      "$ref": "XtCS7FYvqoPp05TaNACrQJgsQuQQ1HbhFGV5p2hg"
    },
    "metricName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "metricSelector": {
      "$ref": "Am3gJXrJDlim5pEjXjCk4qB5T1njejh9RaIGwx5cLKg"
    }
  },
  "required": ["metricName", "currentValue"],
  "type": "object",
  "$id": "io.k8s.api.autoscaling.v2beta1.ExternalMetricStatus"
};
const schema7 = {
  "nullableRef": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
};
const schema8 = {};
import { validate as validate23 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApiResourceQuantity";
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
  "$ref": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
};
function validate26(data, {
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
  validate26.errors = vErrors;
  return errors === 0;
}
const schema10 = {
  "type": "string"
};
function validate29(data, {
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
  validate29.errors = vErrors;
  return errors === 0;
}
const schema11 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"
};
const schema12 = {};
import { validate as validate32 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1LabelSelector";
function validate31(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate32(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
      errors = vErrors.length;
    }
  }
  validate31.errors = vErrors;
  return errors === 0;
}
function validate21(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.autoscaling.v2beta1.ExternalMetricStatus" */;
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
    if (data.currentValue === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "currentValue"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.currentAverageValue !== undefined) {
      if (!validate22(data.currentAverageValue, {
        instancePath: instancePath + "/currentAverageValue",
        parentData: data,
        parentDataProperty: "currentAverageValue",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.currentValue !== undefined) {
      if (!validate26(data.currentValue, {
        instancePath: instancePath + "/currentValue",
        parentData: data,
        parentDataProperty: "currentValue",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.metricName !== undefined) {
      if (!validate29(data.metricName, {
        instancePath: instancePath + "/metricName",
        parentData: data,
        parentDataProperty: "metricName",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.metricSelector !== undefined) {
      if (!validate31(data.metricSelector, {
        instancePath: instancePath + "/metricSelector",
        parentData: data,
        parentDataProperty: "metricSelector",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
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