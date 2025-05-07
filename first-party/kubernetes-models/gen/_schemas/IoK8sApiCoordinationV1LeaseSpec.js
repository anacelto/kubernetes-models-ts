import { formats } from "@kubernetes-models/validate";
export const validate = validate25;
const schema9 = {
  "properties": {
    "acquireTime": {
      "$ref": "T9rD6jOSJvkqKbdLnZWkaYX8NyELVx90BUXErPwo7e4"
    },
    "holderIdentity": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "leaseDurationSeconds": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "leaseTransitions": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "renewTime": {
      "$ref": "T9rD6jOSJvkqKbdLnZWkaYX8NyELVx90BUXErPwo7e4"
    }
  },
  "type": "object",
  "$id": "io.k8s.api.coordination.v1.LeaseSpec"
};
const schema7 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.MicroTime#"
};
const schema8 = {};
import { validate as validate23 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1MicroTime";
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
const schema10 = {
  "type": "string",
  "nullable": true
};
function validate27(data, {
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
  validate27.errors = vErrors;
  return errors === 0;
}
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
function validate25(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.coordination.v1.LeaseSpec" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.acquireTime !== undefined) {
      if (!validate22(data.acquireTime, {
        instancePath: instancePath + "/acquireTime",
        parentData: data,
        parentDataProperty: "acquireTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.holderIdentity !== undefined) {
      if (!validate27(data.holderIdentity, {
        instancePath: instancePath + "/holderIdentity",
        parentData: data,
        parentDataProperty: "holderIdentity",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.leaseDurationSeconds !== undefined) {
      if (!validate21(data.leaseDurationSeconds, {
        instancePath: instancePath + "/leaseDurationSeconds",
        parentData: data,
        parentDataProperty: "leaseDurationSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.leaseTransitions !== undefined) {
      if (!validate21(data.leaseTransitions, {
        instancePath: instancePath + "/leaseTransitions",
        parentData: data,
        parentDataProperty: "leaseTransitions",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.renewTime !== undefined) {
      if (!validate22(data.renewTime, {
        instancePath: instancePath + "/renewTime",
        parentData: data,
        parentDataProperty: "renewTime",
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
  validate25.errors = vErrors;
  return errors === 0;
}