export const validate = validate21;
const schema6 = {
  "properties": {
    "configMapKeyRef": {
      "$ref": "hIRRwjQbZZBTXo64vLpgEdsBjzy8uimgSgKXWJUvy0"
    },
    "fieldRef": {
      "$ref": "6rijSVxbAFjbrp4nPLtsAn1Q9EcM0W28IedvuCtfNVM"
    },
    "resourceFieldRef": {
      "$ref": "X2grhBvDjtRMhCyFrUPGLWirCoHdCDjwcaYpqYu9BE4"
    },
    "secretKeyRef": {
      "$ref": "lj1fa9zQ2I2gDk4WVTKHIRkwTGQDhXXZyvjQeKbY"
    }
  },
  "type": "object",
  "$id": "io.k8s.api.core.v1.EnvVarSource"
};
const schema7 = {
  "nullableRef": "io.k8s.api.core.v1.ConfigMapKeySelector#"
};
const schema8 = {};
import { validate as validate23 } from "./IoK8sApiCoreV1ConfigMapKeySelector";
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
  "nullableRef": "io.k8s.api.core.v1.ObjectFieldSelector#"
};
const schema10 = {};
import { validate as validate27 } from "./IoK8sApiCoreV1ObjectFieldSelector";
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
const schema11 = {
  "nullableRef": "io.k8s.api.core.v1.ResourceFieldSelector#"
};
const schema12 = {};
import { validate as validate31 } from "./IoK8sApiCoreV1ResourceFieldSelector";
function validate30(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate31(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
      errors = vErrors.length;
    }
  }
  validate30.errors = vErrors;
  return errors === 0;
}
const schema13 = {
  "nullableRef": "io.k8s.api.core.v1.SecretKeySelector#"
};
const schema14 = {};
import { validate as validate35 } from "./IoK8sApiCoreV1SecretKeySelector";
function validate34(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate35(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
      errors = vErrors.length;
    }
  }
  validate34.errors = vErrors;
  return errors === 0;
}
function validate21(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.core.v1.EnvVarSource" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.configMapKeyRef !== undefined) {
      if (!validate22(data.configMapKeyRef, {
        instancePath: instancePath + "/configMapKeyRef",
        parentData: data,
        parentDataProperty: "configMapKeyRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.fieldRef !== undefined) {
      if (!validate26(data.fieldRef, {
        instancePath: instancePath + "/fieldRef",
        parentData: data,
        parentDataProperty: "fieldRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.resourceFieldRef !== undefined) {
      if (!validate30(data.resourceFieldRef, {
        instancePath: instancePath + "/resourceFieldRef",
        parentData: data,
        parentDataProperty: "resourceFieldRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretKeyRef !== undefined) {
      if (!validate34(data.secretKeyRef, {
        instancePath: instancePath + "/secretKeyRef",
        parentData: data,
        parentDataProperty: "secretKeyRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
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