export const validate = validate21;
const schema6 = {
  "properties": {
    "inlineVolumeSpec": {
      "$ref": "2hbE7dp32FygsdN2YO8PD2S9oacz8sTxPJal3tHxeLQ"
    },
    "persistentVolumeName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "$id": "io.k8s.api.storage.v1.VolumeAttachmentSource"
};
const schema7 = {
  "nullableRef": "io.k8s.api.core.v1.PersistentVolumeSpec#"
};
const schema8 = {};
import { validate as validate23 } from "./IoK8sApiCoreV1PersistentVolumeSpec";
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
  "type": "string",
  "nullable": true
};
function validate26(data, {
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
  validate26.errors = vErrors;
  return errors === 0;
}
function validate21(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.storage.v1.VolumeAttachmentSource" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.inlineVolumeSpec !== undefined) {
      if (!validate22(data.inlineVolumeSpec, {
        instancePath: instancePath + "/inlineVolumeSpec",
        parentData: data,
        parentDataProperty: "inlineVolumeSpec",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.persistentVolumeName !== undefined) {
      if (!validate26(data.persistentVolumeName, {
        instancePath: instancePath + "/persistentVolumeName",
        parentData: data,
        parentDataProperty: "persistentVolumeName",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
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