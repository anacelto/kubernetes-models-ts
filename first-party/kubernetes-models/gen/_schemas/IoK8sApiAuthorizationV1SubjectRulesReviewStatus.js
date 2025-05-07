export const validate = validate21;
const schema6 = {
  "properties": {
    "evaluationError": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "incomplete": {
      "$ref": "384TuUg7xQOu4Fi6u32QopECSxjPv91aOGoUUSEznpE"
    },
    "nonResourceRules": {
      "$ref": "yF2SBdQJyys8ygmXacleR0C798zEvgK98YD5MHVrFs"
    },
    "resourceRules": {
      "$ref": "Pupp15NhBoIFv6qapWWFCsQ9u5hrl1RkCRQFWH8E0gw"
    }
  },
  "required": ["resourceRules", "nonResourceRules", "incomplete"],
  "type": "object",
  "$id": "io.k8s.api.authorization.v1.SubjectRulesReviewStatus"
};
const schema7 = {
  "type": "string",
  "nullable": true
};
function validate22(data, {
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
  validate22.errors = vErrors;
  return errors === 0;
}
const schema8 = {
  "type": "boolean"
};
function validate24(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "boolean") {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "boolean"
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
const schema9 = {
  "items": {
    "$ref": "Pnyt9DoDn5FSLL1VzAvDw9X2qG7lBfX6RpgQJAcfh20"
  },
  "type": "array"
};
const schema10 = {
  "$ref": "io.k8s.api.authorization.v1.NonResourceRule#"
};
const schema11 = {};
import { validate as validate28 } from "./IoK8sApiAuthorizationV1NonResourceRule";
function validate27(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate28(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
    errors = vErrors.length;
  }
  validate27.errors = vErrors;
  return errors === 0;
}
function validate26(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate27(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
  } else {
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
  validate26.errors = vErrors;
  return errors === 0;
}
const schema12 = {
  "items": {
    "$ref": "G6ulNghWyCsiiwWwvZZMXe9eKFTOiV0NmO4xeHQcyNU"
  },
  "type": "array"
};
const schema13 = {
  "$ref": "io.k8s.api.authorization.v1.ResourceRule#"
};
const schema14 = {};
import { validate as validate34 } from "./IoK8sApiAuthorizationV1ResourceRule";
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
  } else {
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
  validate32.errors = vErrors;
  return errors === 0;
}
function validate21(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.authorization.v1.SubjectRulesReviewStatus" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.resourceRules === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "resourceRules"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.nonResourceRules === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "nonResourceRules"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.incomplete === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "incomplete"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.evaluationError !== undefined) {
      if (!validate22(data.evaluationError, {
        instancePath: instancePath + "/evaluationError",
        parentData: data,
        parentDataProperty: "evaluationError",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.incomplete !== undefined) {
      if (!validate24(data.incomplete, {
        instancePath: instancePath + "/incomplete",
        parentData: data,
        parentDataProperty: "incomplete",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.nonResourceRules !== undefined) {
      if (!validate26(data.nonResourceRules, {
        instancePath: instancePath + "/nonResourceRules",
        parentData: data,
        parentDataProperty: "nonResourceRules",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.resourceRules !== undefined) {
      if (!validate32(data.resourceRules, {
        instancePath: instancePath + "/resourceRules",
        parentData: data,
        parentDataProperty: "resourceRules",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
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
  validate21.errors = vErrors;
  return errors === 0;
}