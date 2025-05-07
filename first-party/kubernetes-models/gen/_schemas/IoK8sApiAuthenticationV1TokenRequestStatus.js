export const validate = validate21;
const schema6 = {
  "properties": {
    "expirationTimestamp": {
      "$ref": "fPXD4Wd4h8tkfGAPnmSw4St5NhgU3eLTQMnVESKnU"
    },
    "token": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["token", "expirationTimestamp"],
  "type": "object",
  "$id": "io.k8s.api.authentication.v1.TokenRequestStatus"
};
const schema7 = {
  "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.Time#"
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
  if (!validate23(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
    errors = vErrors.length;
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
function validate21(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.authentication.v1.TokenRequestStatus" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.token === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "token"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.expirationTimestamp === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "expirationTimestamp"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.expirationTimestamp !== undefined) {
      if (!validate22(data.expirationTimestamp, {
        instancePath: instancePath + "/expirationTimestamp",
        parentData: data,
        parentDataProperty: "expirationTimestamp",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.token !== undefined) {
      if (!validate26(data.token, {
        instancePath: instancePath + "/token",
        parentData: data,
        parentDataProperty: "token",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
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