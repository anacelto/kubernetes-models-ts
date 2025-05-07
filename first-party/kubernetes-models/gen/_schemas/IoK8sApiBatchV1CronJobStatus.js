export const validate = validate24;
const schema8 = {
  "properties": {
    "active": {
      "$ref": "3sgcQllLODg5uhzde1Dyfu4ZCT2EWclzbtWpdSaPyL8"
    },
    "lastScheduleTime": {
      "$ref": "efMa3HbO6ty0x2gJ9IwMyqkxxXYWjHbWZ0jaadlBc"
    },
    "lastSuccessfulTime": {
      "$ref": "efMa3HbO6ty0x2gJ9IwMyqkxxXYWjHbWZ0jaadlBc"
    }
  },
  "type": "object",
  "$id": "io.k8s.api.batch.v1.CronJobStatus"
};
const schema9 = {
  "items": {
    "$ref": "eTRWiPtYmAuKr2dHcmphzOU5TPRejuTdt6HuhIfqrw"
  },
  "type": "array",
  "nullable": true
};
const schema10 = {
  "$ref": "io.k8s.api.core.v1.ObjectReference#"
};
const schema11 = {};
import { validate as validate27 } from "./IoK8sApiCoreV1ObjectReference";
function validate26(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate27(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
    errors = vErrors.length;
  }
  validate26.errors = vErrors;
  return errors === 0;
}
function validate25(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!Array.isArray(data) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate26(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate25.errors = vErrors;
  return errors === 0;
}
const schema6 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.Time#"
};
const schema7 = {};
import { validate as validate22 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1Time";
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
  /*# sourceURL="io.k8s.api.batch.v1.CronJobStatus" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.active !== undefined) {
      if (!validate25(data.active, {
        instancePath: instancePath + "/active",
        parentData: data,
        parentDataProperty: "active",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.lastScheduleTime !== undefined) {
      if (!validate21(data.lastScheduleTime, {
        instancePath: instancePath + "/lastScheduleTime",
        parentData: data,
        parentDataProperty: "lastScheduleTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.lastSuccessfulTime !== undefined) {
      if (!validate21(data.lastSuccessfulTime, {
        instancePath: instancePath + "/lastSuccessfulTime",
        parentData: data,
        parentDataProperty: "lastSuccessfulTime",
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