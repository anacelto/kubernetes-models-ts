export const validate = validate21;
const schema6 = {
  "properties": {
    "running": {
      "$ref": "EmPaULhMBiDBjvtlId0eJRiuNDceH7Iow4U3xHX3I"
    },
    "terminated": {
      "$ref": "ZWwUaC2hXpv5Xlz1uebbh8HAy9wrTO0RsBieMS7joQ"
    },
    "waiting": {
      "$ref": "RPc141SPmc9RKVukJnkgJDRqmfYJ0C1Mp6DFxWn9iuE"
    }
  },
  "type": "object",
  "$id": "io.k8s.api.core.v1.ContainerState"
};
const schema7 = {
  "nullableRef": "io.k8s.api.core.v1.ContainerStateRunning#"
};
const schema8 = {};
import { validate as validate23 } from "./IoK8sApiCoreV1ContainerStateRunning";
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
  "nullableRef": "io.k8s.api.core.v1.ContainerStateTerminated#"
};
const schema10 = {};
import { validate as validate27 } from "./IoK8sApiCoreV1ContainerStateTerminated";
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
  "nullableRef": "io.k8s.api.core.v1.ContainerStateWaiting#"
};
const schema12 = {};
import { validate as validate31 } from "./IoK8sApiCoreV1ContainerStateWaiting";
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
  /*# sourceURL="io.k8s.api.core.v1.ContainerState" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.running !== undefined) {
      if (!validate22(data.running, {
        instancePath: instancePath + "/running",
        parentData: data,
        parentDataProperty: "running",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.terminated !== undefined) {
      if (!validate26(data.terminated, {
        instancePath: instancePath + "/terminated",
        parentData: data,
        parentDataProperty: "terminated",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.waiting !== undefined) {
      if (!validate30(data.waiting, {
        instancePath: instancePath + "/waiting",
        parentData: data,
        parentDataProperty: "waiting",
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