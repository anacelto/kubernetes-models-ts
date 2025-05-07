import { formats } from "@kubernetes-models/validate";
export const validate = validate21;
const schema6 = {
  "properties": {
    "behavior": {
      "$ref": "NXXRk4faMndHZioPsl3FAGSlwKauFgWCYPurDo75j4"
    },
    "maxReplicas": {
      "$ref": "ppOMqvYEA3GSH3ozhOJ2Wta6ImWhzC9DOYsjidshCYo"
    },
    "metrics": {
      "$ref": "Vzw6GCAw3cjpBxwHphxmIFA7BRjzAuTTQWRYiJ8F4TE"
    },
    "minReplicas": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "scaleTargetRef": {
      "$ref": "bSMcYBIBflmFY2lahQVEXSvdIo777vgPu5aqcsmHE"
    }
  },
  "required": ["scaleTargetRef", "maxReplicas"],
  "type": "object",
  "$id": "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerSpec"
};
const schema7 = {
  "nullableRef": "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerBehavior#"
};
const schema8 = {};
import { validate as validate23 } from "./IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerBehavior";
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
  "format": "int32",
  "type": "integer"
};
const formats0 = formats.int32;
function validate26(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(typeof data == "number" && !(data % 1) && !isNaN(data) && isFinite(data))) {
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
  validate26.errors = vErrors;
  return errors === 0;
}
const schema10 = {
  "items": {
    "$ref": "b1lnMFHtgO0I6idlewCPHlLkoEd1QExohUHrUlWl6SE"
  },
  "type": "array",
  "nullable": true
};
const schema11 = {
  "$ref": "io.k8s.api.autoscaling.v2beta2.MetricSpec#"
};
const schema12 = {};
import { validate as validate30 } from "./IoK8sApiAutoscalingV2beta2MetricSpec";
function validate29(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate30(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
    errors = vErrors.length;
  }
  validate29.errors = vErrors;
  return errors === 0;
}
function validate28(data, {
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
      if (!validate29(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
  }
  validate28.errors = vErrors;
  return errors === 0;
}
const schema13 = {
  "format": "int32",
  "type": "integer",
  "nullable": true
};
function validate34(data, {
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
  validate34.errors = vErrors;
  return errors === 0;
}
const schema14 = {
  "$ref": "io.k8s.api.autoscaling.v2beta2.CrossVersionObjectReference#"
};
const schema15 = {};
import { validate as validate37 } from "./IoK8sApiAutoscalingV2beta2CrossVersionObjectReference";
function validate36(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate37(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
    errors = vErrors.length;
  }
  validate36.errors = vErrors;
  return errors === 0;
}
function validate21(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerSpec" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.scaleTargetRef === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "scaleTargetRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.maxReplicas === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "maxReplicas"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.behavior !== undefined) {
      if (!validate22(data.behavior, {
        instancePath: instancePath + "/behavior",
        parentData: data,
        parentDataProperty: "behavior",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.maxReplicas !== undefined) {
      if (!validate26(data.maxReplicas, {
        instancePath: instancePath + "/maxReplicas",
        parentData: data,
        parentDataProperty: "maxReplicas",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.metrics !== undefined) {
      if (!validate28(data.metrics, {
        instancePath: instancePath + "/metrics",
        parentData: data,
        parentDataProperty: "metrics",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.minReplicas !== undefined) {
      if (!validate34(data.minReplicas, {
        instancePath: instancePath + "/minReplicas",
        parentData: data,
        parentDataProperty: "minReplicas",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.scaleTargetRef !== undefined) {
      if (!validate36(data.scaleTargetRef, {
        instancePath: instancePath + "/scaleTargetRef",
        parentData: data,
        parentDataProperty: "scaleTargetRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
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