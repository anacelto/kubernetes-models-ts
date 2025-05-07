export const validate = validate24;
const schema8 = {
  "properties": {
    "maxSurge": {
      "$ref": "hbuFgDwfSBwAZPffdgJB2a6tMRXSaSIHVYgCpOJlo"
    },
    "maxUnavailable": {
      "$ref": "hbuFgDwfSBwAZPffdgJB2a6tMRXSaSIHVYgCpOJlo"
    }
  },
  "type": "object",
  "$id": "io.k8s.api.apps.v1beta1.RollingUpdateDeployment"
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
function validate24(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.apps.v1beta1.RollingUpdateDeployment" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.maxSurge !== undefined) {
      if (!validate21(data.maxSurge, {
        instancePath: instancePath + "/maxSurge",
        parentData: data,
        parentDataProperty: "maxSurge",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
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