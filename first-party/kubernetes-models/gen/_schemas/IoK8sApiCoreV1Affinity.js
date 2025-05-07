export const validate = validate21;
const schema6 = {
  "properties": {
    "nodeAffinity": {
      "$ref": "rUaHR3wi7PYnTktrchEsHwOpPk5qcVkz5RGgX2mLk"
    },
    "podAffinity": {
      "$ref": "71HYoIc9C0L4lnrpJuQb5CqP1PIrTRJvtJgBmEOeTJU"
    },
    "podAntiAffinity": {
      "$ref": "2AQyRRJsZ5HxDJivQOl4KA1p1d0ijj9SGoQ6sMao"
    }
  },
  "type": "object",
  "$id": "io.k8s.api.core.v1.Affinity"
};
const schema7 = {
  "nullableRef": "io.k8s.api.core.v1.NodeAffinity#"
};
const schema8 = {};
import { validate as validate23 } from "./IoK8sApiCoreV1NodeAffinity";
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
  "nullableRef": "io.k8s.api.core.v1.PodAffinity#"
};
const schema10 = {};
import { validate as validate27 } from "./IoK8sApiCoreV1PodAffinity";
function validate26(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate27(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
      errors = vErrors.length;
    }
  }
  validate26.errors = vErrors;
  return errors === 0;
}
const schema11 = {
  "nullableRef": "io.k8s.api.core.v1.PodAntiAffinity#"
};
const schema12 = {};
import { validate as validate31 } from "./IoK8sApiCoreV1PodAntiAffinity";
function validate30(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate31(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
      errors = vErrors.length;
    }
  }
  validate30.errors = vErrors;
  return errors === 0;
}
function validate21(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.core.v1.Affinity" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.nodeAffinity !== undefined) {
      if (!validate22(data.nodeAffinity, {
        instancePath: instancePath + "/nodeAffinity",
        parentData: data,
        parentDataProperty: "nodeAffinity",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.podAffinity !== undefined) {
      if (!validate26(data.podAffinity, {
        instancePath: instancePath + "/podAffinity",
        parentData: data,
        parentDataProperty: "podAffinity",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.podAntiAffinity !== undefined) {
      if (!validate30(data.podAntiAffinity, {
        instancePath: instancePath + "/podAntiAffinity",
        parentData: data,
        parentDataProperty: "podAntiAffinity",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
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
  validate21.errors = vErrors;
  return errors === 0;
}