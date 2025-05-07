import { formats } from "@kubernetes-models/validate";
export const validate = validate21;
const schema6 = {
  "properties": {
    "distinguisherMethod": {
      "$ref": "uSTKk0VYgl60uGSplc6tlDx1vYaXEQbtFlfhGELY"
    },
    "matchingPrecedence": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "priorityLevelConfiguration": {
      "$ref": "mlAaLvKzNJxoGl66p5lnRAjcwxz8liltiA0IoLxr4c"
    },
    "rules": {
      "$ref": "mLaIleUUsUlCC3hnuhJZps8dkdotRN4ccw7sT4zgsUc"
    }
  },
  "required": ["priorityLevelConfiguration"],
  "type": "object",
  "$id": "io.k8s.api.flowcontrol.v1beta2.FlowSchemaSpec"
};
const schema7 = {
  "nullableRef": "io.k8s.api.flowcontrol.v1beta2.FlowDistinguisherMethod#"
};
const schema8 = {};
import { validate as validate23 } from "./IoK8sApiFlowcontrolV1beta2FlowDistinguisherMethod";
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
  "type": "integer",
  "nullable": true
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
  validate26.errors = vErrors;
  return errors === 0;
}
const schema10 = {
  "$ref": "io.k8s.api.flowcontrol.v1beta2.PriorityLevelConfigurationReference#"
};
const schema11 = {};
import { validate as validate29 } from "./IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationReference";
function validate28(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate29(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
    errors = vErrors.length;
  }
  validate28.errors = vErrors;
  return errors === 0;
}
const schema12 = {
  "items": {
    "$ref": "sNR0Fd3PUjdFPks9F09e0G1uAfq1uLimvNJwX6IMU"
  },
  "type": "array",
  "nullable": true
};
const schema13 = {
  "$ref": "io.k8s.api.flowcontrol.v1beta2.PolicyRulesWithSubjects#"
};
const schema14 = {};
import { validate as validate34 } from "./IoK8sApiFlowcontrolV1beta2PolicyRulesWithSubjects";
function validate33(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate34(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
    errors = vErrors.length;
  }
  validate33.errors = vErrors;
  return errors === 0;
}
function validate32(data, {
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
      if (!validate33(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
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
  /*# sourceURL="io.k8s.api.flowcontrol.v1beta2.FlowSchemaSpec" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.priorityLevelConfiguration === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "priorityLevelConfiguration"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.distinguisherMethod !== undefined) {
      if (!validate22(data.distinguisherMethod, {
        instancePath: instancePath + "/distinguisherMethod",
        parentData: data,
        parentDataProperty: "distinguisherMethod",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.matchingPrecedence !== undefined) {
      if (!validate26(data.matchingPrecedence, {
        instancePath: instancePath + "/matchingPrecedence",
        parentData: data,
        parentDataProperty: "matchingPrecedence",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.priorityLevelConfiguration !== undefined) {
      if (!validate28(data.priorityLevelConfiguration, {
        instancePath: instancePath + "/priorityLevelConfiguration",
        parentData: data,
        parentDataProperty: "priorityLevelConfiguration",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.rules !== undefined) {
      if (!validate32(data.rules, {
        instancePath: instancePath + "/rules",
        parentData: data,
        parentDataProperty: "rules",
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