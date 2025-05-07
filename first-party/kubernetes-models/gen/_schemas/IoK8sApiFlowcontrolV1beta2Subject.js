export const validate = validate21;
const schema6 = {
  "properties": {
    "group": {
      "$ref": "LXV7Fj11RMrKh5q0VlBmklf98VHQyttolH2VQB6Llbo"
    },
    "kind": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "serviceAccount": {
      "$ref": "iGeMfns49uBlLr0Rinz78o87jttIDuQzyfou8qSoE"
    },
    "user": {
      "$ref": "4NCgYj4v0mBWrOGP4T2nPCGrYbzrf79d9WcAzut2X0Q"
    }
  },
  "required": ["kind"],
  "type": "object",
  "$id": "io.k8s.api.flowcontrol.v1beta2.Subject"
};
const schema7 = {
  "nullableRef": "io.k8s.api.flowcontrol.v1beta2.GroupSubject#"
};
const schema8 = {};
import { validate as validate23 } from "./IoK8sApiFlowcontrolV1beta2GroupSubject";
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
  "type": "string"
};
function validate26(data, {
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
  validate26.errors = vErrors;
  return errors === 0;
}
const schema10 = {
  "nullableRef": "io.k8s.api.flowcontrol.v1beta2.ServiceAccountSubject#"
};
const schema11 = {};
import { validate as validate29 } from "./IoK8sApiFlowcontrolV1beta2ServiceAccountSubject";
function validate28(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate29(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
      errors = vErrors.length;
    }
  }
  validate28.errors = vErrors;
  return errors === 0;
}
const schema12 = {
  "nullableRef": "io.k8s.api.flowcontrol.v1beta2.UserSubject#"
};
const schema13 = {};
import { validate as validate33 } from "./IoK8sApiFlowcontrolV1beta2UserSubject";
function validate32(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate33(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
      errors = vErrors.length;
    }
  }
  validate32.errors = vErrors;
  return errors === 0;
}
function validate21(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.flowcontrol.v1beta2.Subject" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.kind === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "kind"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.group !== undefined) {
      if (!validate22(data.group, {
        instancePath: instancePath + "/group",
        parentData: data,
        parentDataProperty: "group",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate26(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAccount !== undefined) {
      if (!validate28(data.serviceAccount, {
        instancePath: instancePath + "/serviceAccount",
        parentData: data,
        parentDataProperty: "serviceAccount",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.user !== undefined) {
      if (!validate32(data.user, {
        instancePath: instancePath + "/user",
        parentData: data,
        parentDataProperty: "user",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
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
  validate21.errors = vErrors;
  return errors === 0;
}