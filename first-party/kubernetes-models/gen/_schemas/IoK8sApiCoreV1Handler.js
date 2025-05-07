export const validate = validate21;
const schema6 = {
  "properties": {
    "exec": {
      "$ref": "WXT8BZt5q88FehUjP8HFeOsq2HLJsrBu9hJQOq8E"
    },
    "httpGet": {
      "$ref": "day5XWGPKQlnV5sdMmh8DNoZwoL78ZYk4CSdKtPhEZk"
    },
    "tcpSocket": {
      "$ref": "acaJaAADeuS5twOXFTJOCJSR5sPGCuIg22Zk8bSuw"
    }
  },
  "type": "object",
  "$id": "io.k8s.api.core.v1.Handler"
};
const schema7 = {
  "nullableRef": "io.k8s.api.core.v1.ExecAction#"
};
const schema8 = {};
import { validate as validate23 } from "./IoK8sApiCoreV1ExecAction";
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
  "nullableRef": "io.k8s.api.core.v1.HTTPGetAction#"
};
const schema10 = {};
import { validate as validate27 } from "./IoK8sApiCoreV1HTTPGetAction";
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
  "nullableRef": "io.k8s.api.core.v1.TCPSocketAction#"
};
const schema12 = {};
import { validate as validate31 } from "./IoK8sApiCoreV1TCPSocketAction";
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
function validate21(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.core.v1.Handler" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.exec !== undefined) {
      if (!validate22(data.exec, {
        instancePath: instancePath + "/exec",
        parentData: data,
        parentDataProperty: "exec",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.httpGet !== undefined) {
      if (!validate26(data.httpGet, {
        instancePath: instancePath + "/httpGet",
        parentData: data,
        parentDataProperty: "httpGet",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.tcpSocket !== undefined) {
      if (!validate30(data.tcpSocket, {
        instancePath: instancePath + "/tcpSocket",
        parentData: data,
        parentDataProperty: "tcpSocket",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
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