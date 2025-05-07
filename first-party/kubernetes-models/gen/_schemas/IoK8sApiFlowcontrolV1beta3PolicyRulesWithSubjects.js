export const validate = validate21;
const schema6 = {
  "properties": {
    "nonResourceRules": {
      "$ref": "xYUR9NA823PcCHAG8KBhJlZ2JYG9syA3XHzbOJRtA"
    },
    "resourceRules": {
      "$ref": "eVVOVSjistE02E9eIYFr4OeEvW03ELwUFWCexdWX0"
    },
    "subjects": {
      "$ref": "DzXarZGCUJP3M7i1phEqKQAQqPkGAJEO7mRLvEco"
    }
  },
  "required": ["subjects"],
  "type": "object",
  "$id": "io.k8s.api.flowcontrol.v1beta3.PolicyRulesWithSubjects"
};
const schema7 = {
  "items": {
    "$ref": "ZWQ9qGLENn47bcaIRbH2NtEFDNmxGDmkvpml3IMIa8"
  },
  "type": "array",
  "nullable": true
};
const schema8 = {
  "$ref": "io.k8s.api.flowcontrol.v1beta3.NonResourcePolicyRule#"
};
const schema9 = {};
import { validate as validate24 } from "./IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule";
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
    "$ref": "ynTEQJy2WVkCP9gqBV3pEjSQvncVu561pJruaXUok"
  },
  "type": "array",
  "nullable": true
};
const schema11 = {
  "$ref": "io.k8s.api.flowcontrol.v1beta3.ResourcePolicyRule#"
};
const schema12 = {};
import { validate as validate30 } from "./IoK8sApiFlowcontrolV1beta3ResourcePolicyRule";
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
    "$ref": "fkcPhMnkGrrUNP59WcTR4cccC4g2hW3EGMAZwdvIcEg"
  },
  "type": "array"
};
const schema14 = {
  "$ref": "io.k8s.api.flowcontrol.v1beta3.Subject#"
};
const schema15 = {};
import { validate as validate36 } from "./IoK8sApiFlowcontrolV1beta3Subject";
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
  /*# sourceURL="io.k8s.api.flowcontrol.v1beta3.PolicyRulesWithSubjects" */;
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