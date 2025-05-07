export const validate = validate21;
const schema6 = {
  "properties": {
    "scale": {
      "$ref": "vcGIyHCrcO7cX2EU63QvruZVmwu2zH0hBss5zMWpw"
    },
    "status": {
      "$ref": "WNX5K81mQZRgD6i2U26gpkF5eolEkd8VAK77czSC4"
    }
  },
  "type": "object",
  "$id": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresources"
};
const schema7 = {
  "nullableRef": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresourceScale#"
};
const schema8 = {};
import { validate as validate23 } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale";
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
  "nullableRef": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresourceStatus#"
};
const schema10 = {};
import { validate as validate27 } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceStatus";
function validate26(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate27(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
      errors = vErrors.length;
    }
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
  /*# sourceURL="io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresources" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.scale !== undefined) {
      if (!validate22(data.scale, {
        instancePath: instancePath + "/scale",
        parentData: data,
        parentDataProperty: "scale",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate26(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
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