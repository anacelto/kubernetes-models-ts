import { formats } from "@kubernetes-models/validate";
export const validate = validate22;
const schema7 = {
  "properties": {
    "assuredConcurrencyShares": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "borrowingLimitPercent": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "lendablePercent": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "limitResponse": {
      "$ref": "NFBLbZ6deziVk1hPPcNh7WPh9qkMJHBScmG1KOrxtk"
    }
  },
  "type": "object",
  "$id": "io.k8s.api.flowcontrol.v1beta2.LimitedPriorityLevelConfiguration"
};
const schema6 = {
  "format": "int32",
  "type": "integer",
  "nullable": true
};
const formats0 = formats.int32;
function validate21(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(typeof data == "number" && !(data % 1) && !isNaN(data) && isFinite(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "integer"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (typeof data == "number" && isFinite(data)) {
    if (!formats0.validate(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/format",
        keyword: "format",
        params: {
          format: "int32"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
  }
  validate21.errors = vErrors;
  return errors === 0;
}
const schema8 = {
  "nullableRef": "io.k8s.api.flowcontrol.v1beta2.LimitResponse#"
};
const schema9 = {};
import { validate as validate27 } from "./IoK8sApiFlowcontrolV1beta2LimitResponse";
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
function validate22(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.flowcontrol.v1beta2.LimitedPriorityLevelConfiguration" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.assuredConcurrencyShares !== undefined) {
      if (!validate21(data.assuredConcurrencyShares, {
        instancePath: instancePath + "/assuredConcurrencyShares",
        parentData: data,
        parentDataProperty: "assuredConcurrencyShares",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.borrowingLimitPercent !== undefined) {
      if (!validate21(data.borrowingLimitPercent, {
        instancePath: instancePath + "/borrowingLimitPercent",
        parentData: data,
        parentDataProperty: "borrowingLimitPercent",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.lendablePercent !== undefined) {
      if (!validate21(data.lendablePercent, {
        instancePath: instancePath + "/lendablePercent",
        parentData: data,
        parentDataProperty: "lendablePercent",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.limitResponse !== undefined) {
      if (!validate26(data.limitResponse, {
        instancePath: instancePath + "/limitResponse",
        parentData: data,
        parentDataProperty: "limitResponse",
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
  validate22.errors = vErrors;
  return errors === 0;
}