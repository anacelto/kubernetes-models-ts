export const validate = validate24;
const schema8 = {
  "properties": {
    "maxUnavailable": {
      "$ref": "hbuFgDwfSBwAZPffdgJB2a6tMRXSaSIHVYgCpOJlo"
    },
    "minAvailable": {
      "$ref": "hbuFgDwfSBwAZPffdgJB2a6tMRXSaSIHVYgCpOJlo"
    },
    "selector": {
      "$ref": "Am3gJXrJDlim5pEjXjCk4qB5T1njejh9RaIGwx5cLKg"
    },
    "unhealthyPodEvictionPolicy": {
      "$ref": "9ucjHLCA7dw809SoxA1OuA4vjdbCqGJfKKLjveVA5k"
    }
  },
  "type": "object",
  "$id": "io.k8s.api.policy.v1.PodDisruptionBudgetSpec"
};
const schema6 = {
  "nullableRef": "io.k8s.apimachinery.pkg.util.intstr.IntOrString#"
};
const schema7 = {};
import { validate as validate22 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgUtilIntstrIntOrString";
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
const schema9 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"
};
const schema10 = {};
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
const schema11 = {
  "enum": ["AlwaysAllow", "IfHealthyBudget"],
  "type": "string",
  "nullable": true
};
function validate31(data, {
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
  if (!(data === "AlwaysAllow" || data === "IfHealthyBudget")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema11.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate31.errors = vErrors;
  return errors === 0;
}
function validate24(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.policy.v1.PodDisruptionBudgetSpec" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.maxUnavailable !== undefined) {
      if (!validate21(data.maxUnavailable, {
        instancePath: instancePath + "/maxUnavailable",
        parentData: data,
        parentDataProperty: "maxUnavailable",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.minAvailable !== undefined) {
      if (!validate21(data.minAvailable, {
        instancePath: instancePath + "/minAvailable",
        parentData: data,
        parentDataProperty: "minAvailable",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.selector !== undefined) {
      if (!validate27(data.selector, {
        instancePath: instancePath + "/selector",
        parentData: data,
        parentDataProperty: "selector",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.unhealthyPodEvictionPolicy !== undefined) {
      if (!validate31(data.unhealthyPodEvictionPolicy, {
        instancePath: instancePath + "/unhealthyPodEvictionPolicy",
        parentData: data,
        parentDataProperty: "unhealthyPodEvictionPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
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