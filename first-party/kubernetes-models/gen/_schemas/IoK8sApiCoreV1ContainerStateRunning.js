export const validate = validate21;
const schema6 = {
  "properties": {
    "startedAt": {
      "$ref": "efMa3HbO6ty0x2gJ9IwMyqkxxXYWjHbWZ0jaadlBc"
    }
  },
  "type": "object",
  "$id": "io.k8s.api.core.v1.ContainerStateRunning"
};
const schema7 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.Time#"
};
const schema8 = {};
import { validate as validate23 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1Time";
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
  /*# sourceURL="io.k8s.api.core.v1.ContainerStateRunning" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.startedAt !== undefined) {
      if (!validate22(data.startedAt, {
        instancePath: instancePath + "/startedAt",
        parentData: data,
        parentDataProperty: "startedAt",
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