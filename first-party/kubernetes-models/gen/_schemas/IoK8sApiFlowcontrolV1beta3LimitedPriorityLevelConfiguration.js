import { formats } from "@kubernetes-models/validate";
export const validate = validate22;
const schema7 = {
  "properties": {
    "borrowingLimitPercent": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "lendablePercent": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "limitResponse": {
      "$ref": "eB6akYfJMpxsro81FL27wRMJ8ba60vuC3995MbzLsH8"
    },
    "nominalConcurrencyShares": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    }
  },
  "type": "object",
  "$id": "io.k8s.api.flowcontrol.v1beta3.LimitedPriorityLevelConfiguration"
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
  "nullableRef": "io.k8s.api.flowcontrol.v1beta3.LimitResponse#"
};
const schema9 = {};
import { validate as validate26 } from "./IoK8sApiFlowcontrolV1beta3LimitResponse";
function validate25(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate26(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
      errors = vErrors.length;
    }
  }
  validate25.errors = vErrors;
  return errors === 0;
}
function validate22(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.flowcontrol.v1beta3.LimitedPriorityLevelConfiguration" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
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
      if (!validate25(data.limitResponse, {
        instancePath: instancePath + "/limitResponse",
        parentData: data,
        parentDataProperty: "limitResponse",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.nominalConcurrencyShares !== undefined) {
      if (!validate21(data.nominalConcurrencyShares, {
        instancePath: instancePath + "/nominalConcurrencyShares",
        parentData: data,
        parentDataProperty: "nominalConcurrencyShares",
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
  validate22.errors = vErrors;
  return errors === 0;
}