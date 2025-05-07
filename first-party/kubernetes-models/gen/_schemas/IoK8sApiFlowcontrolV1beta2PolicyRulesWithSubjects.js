export const validate = validate21;
const schema6 = {
  "properties": {
    "nonResourceRules": {
      "$ref": "51f5oVC1IrHN9DN2IePhKBeAEAu1wiwAFnwQTMcak"
    },
    "resourceRules": {
      "$ref": "ooYWcxSR5sh1WcMEBZKQI4SZTHKKuhDlq6fJqe7SJw"
    },
    "subjects": {
      "$ref": "QfOwLT7FBi8VaIn0x5MMVe04waWzewjW6vZC6064C4"
    }
  },
  "required": ["subjects"],
  "type": "object",
  "$id": "io.k8s.api.flowcontrol.v1beta2.PolicyRulesWithSubjects"
};
const schema7 = {
  "items": {
    "$ref": "DGV9WbLfi37cLWuIhqvL8jEp6nE83JnodvNDdLx17w"
  },
  "type": "array",
  "nullable": true
};
const schema8 = {
  "$ref": "io.k8s.api.flowcontrol.v1beta2.NonResourcePolicyRule#"
};
const schema9 = {};
import { validate as validate24 } from "./IoK8sApiFlowcontrolV1beta2NonResourcePolicyRule";
function validate23(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate24(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
    errors = vErrors.length;
  }
  validate23.errors = vErrors;
  return errors === 0;
}
function validate22(data, {
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
      if (!validate23(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate22.errors = vErrors;
  return errors === 0;
}
const schema10 = {
  "items": {
    "$ref": "wMFAy6V7c3bZpOVhuk0kPJHeAsGLSeeW0N2B6vrBQ"
  },
  "type": "array",
  "nullable": true
};
const schema11 = {
  "$ref": "io.k8s.api.flowcontrol.v1beta2.ResourcePolicyRule#"
};
const schema12 = {};
import { validate as validate30 } from "./IoK8sApiFlowcontrolV1beta2ResourcePolicyRule";
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
  "items": {
    "$ref": "PNTd5Nhj9fYf5QbPnHEUkwHgSJwdCQwOCFK9OlZY"
  },
  "type": "array"
};
const schema14 = {
  "$ref": "io.k8s.api.flowcontrol.v1beta2.Subject#"
};
const schema15 = {};
import { validate as validate36 } from "./IoK8sApiFlowcontrolV1beta2Subject";
function validate35(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate36(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
    errors = vErrors.length;
  }
  validate35.errors = vErrors;
  return errors === 0;
}
function validate34(data, {
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
      if (!validate35(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
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
  validate34.errors = vErrors;
  return errors === 0;
}
function validate21(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.flowcontrol.v1beta2.PolicyRulesWithSubjects" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.subjects === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "subjects"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.nonResourceRules !== undefined) {
      if (!validate22(data.nonResourceRules, {
        instancePath: instancePath + "/nonResourceRules",
        parentData: data,
        parentDataProperty: "nonResourceRules",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.resourceRules !== undefined) {
      if (!validate28(data.resourceRules, {
        instancePath: instancePath + "/resourceRules",
        parentData: data,
        parentDataProperty: "resourceRules",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.subjects !== undefined) {
      if (!validate34(data.subjects, {
        instancePath: instancePath + "/subjects",
        parentData: data,
        parentDataProperty: "subjects",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
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