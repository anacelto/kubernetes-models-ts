export const validate = validate21;
const schema6 = {
  "properties": {
    "action": {
      "$ref": "6ILXqpW3zAxNUjUYKEkw8Q9bqAC6tknCE5Rml7Bj84M"
    },
    "onExitCodes": {
      "$ref": "qUWJuo3eADXnhVFTSg8LrLmrmCsJhCAxnShPY0M6No"
    },
    "onPodConditions": {
      "$ref": "moAv7P4t5gpt7aYGR3vHj5SgpjlgmHRpTOqiBLKI"
    }
  },
  "required": ["action", "onPodConditions"],
  "type": "object",
  "$id": "io.k8s.api.batch.v1.PodFailurePolicyRule"
};
const schema7 = {
  "enum": ["Count", "FailJob", "Ignore"],
  "type": "string"
};
function validate22(data, {
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
  if (!(data === "Count" || data === "FailJob" || data === "Ignore")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema7.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate22.errors = vErrors;
  return errors === 0;
}
const schema8 = {
  "nullableRef": "io.k8s.api.batch.v1.PodFailurePolicyOnExitCodesRequirement#"
};
const schema9 = {};
import { validate as validate25 } from "./IoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirement";
function validate24(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate25(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
      errors = vErrors.length;
    }
  }
  validate24.errors = vErrors;
  return errors === 0;
}
const schema10 = {
  "items": {
    "$ref": "CqvjqF4B06jvovcT7KX5OhgoGJXHWOEUkgVDvzwwKg"
  },
  "type": "array"
};
const schema11 = {
  "$ref": "io.k8s.api.batch.v1.PodFailurePolicyOnPodConditionsPattern#"
};
const schema12 = {};
import { validate as validate30 } from "./IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern";
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
  validate28.errors = vErrors;
  return errors === 0;
}
function validate21(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.batch.v1.PodFailurePolicyRule" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.action === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "action"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.onPodConditions === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "onPodConditions"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.action !== undefined) {
      if (!validate22(data.action, {
        instancePath: instancePath + "/action",
        parentData: data,
        parentDataProperty: "action",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.onExitCodes !== undefined) {
      if (!validate24(data.onExitCodes, {
        instancePath: instancePath + "/onExitCodes",
        parentData: data,
        parentDataProperty: "onExitCodes",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.onPodConditions !== undefined) {
      if (!validate28(data.onPodConditions, {
        instancePath: instancePath + "/onPodConditions",
        parentData: data,
        parentDataProperty: "onPodConditions",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
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