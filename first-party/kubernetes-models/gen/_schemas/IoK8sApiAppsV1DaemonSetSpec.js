import { formats } from "@kubernetes-models/validate";
export const validate = validate22;
const schema7 = {
  "properties": {
    "minReadySeconds": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "revisionHistoryLimit": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "selector": {
      "$ref": "deWUWq08eYKCFWQ7jT71dMhrfOGDoyKjiUyTNZEcYY"
    },
    "template": {
      "$ref": "zwa1HnTqJNVb5px9KlkMO3PEDoFXnh4zV5PpPcls9yw"
    },
    "updateStrategy": {
      "$ref": "FmPJvqIEEsEyQUSuntGzoz0HPl2pz6U6hI3ytW3raQ"
    }
  },
  "required": ["selector", "template"],
  "type": "object",
  "$id": "io.k8s.api.apps.v1.DaemonSetSpec"
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
  "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"
};
const schema9 = {};
import { validate as validate26 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1LabelSelector";
function validate25(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate26(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
    errors = vErrors.length;
  }
  validate25.errors = vErrors;
  return errors === 0;
}
const schema10 = {
  "$ref": "io.k8s.api.core.v1.PodTemplateSpec#"
};
const schema11 = {};
import { validate as validate30 } from "./IoK8sApiCoreV1PodTemplateSpec";
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
const schema12 = {
  "nullableRef": "io.k8s.api.apps.v1.DaemonSetUpdateStrategy#"
};
const schema13 = {};
import { validate as validate34 } from "./IoK8sApiAppsV1DaemonSetUpdateStrategy";
function validate33(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate34(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
      errors = vErrors.length;
    }
  }
  validate33.errors = vErrors;
  return errors === 0;
}
function validate22(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.apps.v1.DaemonSetSpec" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.selector === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "selector"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.template === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "template"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.minReadySeconds !== undefined) {
      if (!validate21(data.minReadySeconds, {
        instancePath: instancePath + "/minReadySeconds",
        parentData: data,
        parentDataProperty: "minReadySeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.revisionHistoryLimit !== undefined) {
      if (!validate21(data.revisionHistoryLimit, {
        instancePath: instancePath + "/revisionHistoryLimit",
        parentData: data,
        parentDataProperty: "revisionHistoryLimit",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.selector !== undefined) {
      if (!validate25(data.selector, {
        instancePath: instancePath + "/selector",
        parentData: data,
        parentDataProperty: "selector",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.template !== undefined) {
      if (!validate29(data.template, {
        instancePath: instancePath + "/template",
        parentData: data,
        parentDataProperty: "template",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.updateStrategy !== undefined) {
      if (!validate33(data.updateStrategy, {
        instancePath: instancePath + "/updateStrategy",
        parentData: data,
        parentDataProperty: "updateStrategy",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
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
  validate22.errors = vErrors;
  return errors === 0;
}