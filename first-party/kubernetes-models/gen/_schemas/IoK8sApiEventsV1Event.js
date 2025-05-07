import { formats } from "@kubernetes-models/validate";
export const validate = validate28;
const schema11 = {
  "properties": {
    "action": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "apiVersion": {
      "$ref": "yGBRjeZ7INF0MuL2vmRJCajZzUSuqRxcPCVDdBIT6pg"
    },
    "deprecatedCount": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "deprecatedFirstTimestamp": {
      "$ref": "efMa3HbO6ty0x2gJ9IwMyqkxxXYWjHbWZ0jaadlBc"
    },
    "deprecatedLastTimestamp": {
      "$ref": "efMa3HbO6ty0x2gJ9IwMyqkxxXYWjHbWZ0jaadlBc"
    },
    "deprecatedSource": {
      "$ref": "GlDYUIbwkY95SfZTtuNlhSbtINaloMWwVIhu2RYZkk"
    },
    "eventTime": {
      "$ref": "hxrPoYmVIZji39kHzP1Ifa6i5Y0ak8yJjXmmRkCeM"
    },
    "kind": {
      "$ref": "1xrFlSFl0iJaMzRb52pEj2Qf5VFZ0MQiscpLrLzl4"
    },
    "metadata": {
      "$ref": "a6f0oUEaFqHmymdwnqPORTNOTU7GczWAkwGD0uYU"
    },
    "note": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "reason": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "regarding": {
      "$ref": "jYn9JZbz65AwwugWuS6edUEOxbECgF62vZXknFUOk"
    },
    "related": {
      "$ref": "jYn9JZbz65AwwugWuS6edUEOxbECgF62vZXknFUOk"
    },
    "reportingController": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "reportingInstance": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "series": {
      "$ref": "L5ey1uVcaSVM7tkOZ5zn2wiwvMMnokFNU4uNjX1Y"
    },
    "type": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["eventTime", "apiVersion", "kind"],
  "type": "object",
  "$id": "io.k8s.api.events.v1.Event"
};
const schema8 = {
  "type": "string",
  "nullable": true
};
function validate24(data, {
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
  validate24.errors = vErrors;
  return errors === 0;
}
const schema12 = {
  "type": "string",
  "enum": ["events.k8s.io/v1"]
};
function validate30(data, {
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
  if (!(data === "events.k8s.io/v1")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema12.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate30.errors = vErrors;
  return errors === 0;
}
const schema13 = {
  "format": "int32",
  "type": "integer",
  "nullable": true
};
const formats0 = formats.int32;
function validate32(data, {
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
  validate32.errors = vErrors;
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
const schema14 = {
  "nullableRef": "io.k8s.api.core.v1.EventSource#"
};
const schema15 = {};
import { validate as validate37 } from "./IoK8sApiCoreV1EventSource";
function validate36(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate37(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
      errors = vErrors.length;
    }
  }
  validate36.errors = vErrors;
  return errors === 0;
}
const schema16 = {
  "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.MicroTime#"
};
const schema17 = {};
import { validate as validate41 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1MicroTime";
function validate40(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate41(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
    errors = vErrors.length;
  }
  validate40.errors = vErrors;
  return errors === 0;
}
const schema18 = {
  "type": "string",
  "enum": ["Event"]
};
function validate44(data, {
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
  if (!(data === "Event")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema18.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate44.errors = vErrors;
  return errors === 0;
}
const schema19 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
};
const schema20 = {};
import { validate as validate47 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
function validate46(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate47(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate47.errors : vErrors.concat(validate47.errors);
      errors = vErrors.length;
    }
  }
  validate46.errors = vErrors;
  return errors === 0;
}
const schema9 = {
  "nullableRef": "io.k8s.api.core.v1.ObjectReference#"
};
const schema10 = {};
import { validate as validate26 } from "./IoK8sApiCoreV1ObjectReference";
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
const schema21 = {
  "nullableRef": "io.k8s.api.events.v1.EventSeries#"
};
const schema22 = {};
import { validate as validate57 } from "./IoK8sApiEventsV1EventSeries";
function validate56(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate57(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate57.errors : vErrors.concat(validate57.errors);
      errors = vErrors.length;
    }
  }
  validate56.errors = vErrors;
  return errors === 0;
}
function validate28(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.events.v1.Event" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.eventTime === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "eventTime"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.apiVersion === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "apiVersion"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.kind === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "kind"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.action !== undefined) {
      if (!validate24(data.action, {
        instancePath: instancePath + "/action",
        parentData: data,
        parentDataProperty: "action",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.apiVersion !== undefined) {
      if (!validate30(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.deprecatedCount !== undefined) {
      if (!validate32(data.deprecatedCount, {
        instancePath: instancePath + "/deprecatedCount",
        parentData: data,
        parentDataProperty: "deprecatedCount",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
        errors = vErrors.length;
      }
    }
    if (data.deprecatedFirstTimestamp !== undefined) {
      if (!validate21(data.deprecatedFirstTimestamp, {
        instancePath: instancePath + "/deprecatedFirstTimestamp",
        parentData: data,
        parentDataProperty: "deprecatedFirstTimestamp",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.deprecatedLastTimestamp !== undefined) {
      if (!validate21(data.deprecatedLastTimestamp, {
        instancePath: instancePath + "/deprecatedLastTimestamp",
        parentData: data,
        parentDataProperty: "deprecatedLastTimestamp",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.deprecatedSource !== undefined) {
      if (!validate36(data.deprecatedSource, {
        instancePath: instancePath + "/deprecatedSource",
        parentData: data,
        parentDataProperty: "deprecatedSource",
        rootData
      })) {
        vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
        errors = vErrors.length;
      }
    }
    if (data.eventTime !== undefined) {
      if (!validate40(data.eventTime, {
        instancePath: instancePath + "/eventTime",
        parentData: data,
        parentDataProperty: "eventTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate44(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate44.errors : vErrors.concat(validate44.errors);
        errors = vErrors.length;
      }
    }
    if (data.metadata !== undefined) {
      if (!validate46(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
        errors = vErrors.length;
      }
    }
    if (data.note !== undefined) {
      if (!validate24(data.note, {
        instancePath: instancePath + "/note",
        parentData: data,
        parentDataProperty: "note",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.reason !== undefined) {
      if (!validate24(data.reason, {
        instancePath: instancePath + "/reason",
        parentData: data,
        parentDataProperty: "reason",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.regarding !== undefined) {
      if (!validate25(data.regarding, {
        instancePath: instancePath + "/regarding",
        parentData: data,
        parentDataProperty: "regarding",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.related !== undefined) {
      if (!validate25(data.related, {
        instancePath: instancePath + "/related",
        parentData: data,
        parentDataProperty: "related",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.reportingController !== undefined) {
      if (!validate24(data.reportingController, {
        instancePath: instancePath + "/reportingController",
        parentData: data,
        parentDataProperty: "reportingController",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.reportingInstance !== undefined) {
      if (!validate24(data.reportingInstance, {
        instancePath: instancePath + "/reportingInstance",
        parentData: data,
        parentDataProperty: "reportingInstance",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.series !== undefined) {
      if (!validate56(data.series, {
        instancePath: instancePath + "/series",
        parentData: data,
        parentDataProperty: "series",
        rootData
      })) {
        vErrors = vErrors === null ? validate56.errors : vErrors.concat(validate56.errors);
        errors = vErrors.length;
      }
    }
    if (data.type !== undefined) {
      if (!validate24(data.type, {
        instancePath: instancePath + "/type",
        parentData: data,
        parentDataProperty: "type",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err3 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err3];
    } else {
      vErrors.push(err3);
    }
    errors++;
  }
  validate28.errors = vErrors;
  return errors === 0;
}