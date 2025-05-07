export const validate = validate21;
const schema6 = {
  "properties": {
    "metricName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "selector": {
      "$ref": "Am3gJXrJDlim5pEjXjCk4qB5T1njejh9RaIGwx5cLKg"
    },
    "targetAverageValue": {
      "$ref": "XtCS7FYvqoPp05TaNACrQJgsQuQQ1HbhFGV5p2hg"
    }
  },
  "required": ["metricName", "targetAverageValue"],
  "type": "object",
  "$id": "io.k8s.api.autoscaling.v2beta1.PodsMetricSource"
};
const schema7 = {
  "type": "string"
};
function validate22(data, {
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
  validate22.errors = vErrors;
  return errors === 0;
}
const schema8 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"
};
const schema9 = {};
import { validate as validate25 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1LabelSelector";
function validate24(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate25(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
      errors = vErrors.length;
    }
  }
  validate24.errors = vErrors;
  return errors === 0;
}
const schema10 = {
  "$ref": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
};
const schema11 = {};
import { validate as validate29 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApiResourceQuantity";
function validate28(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate29(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
    errors = vErrors.length;
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
  /*# sourceURL="io.k8s.api.autoscaling.v2beta1.PodsMetricSource" */;
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
    if (data.targetAverageValue === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "targetAverageValue"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.metricName !== undefined) {
      if (!validate22(data.metricName, {
        instancePath: instancePath + "/metricName",
        parentData: data,
        parentDataProperty: "metricName",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.selector !== undefined) {
      if (!validate24(data.selector, {
        instancePath: instancePath + "/selector",
        parentData: data,
        parentDataProperty: "selector",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.targetAverageValue !== undefined) {
      if (!validate28(data.targetAverageValue, {
        instancePath: instancePath + "/targetAverageValue",
        parentData: data,
        parentDataProperty: "targetAverageValue",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
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