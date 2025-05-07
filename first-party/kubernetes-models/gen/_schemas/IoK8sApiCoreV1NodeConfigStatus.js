export const validate = validate24;
const schema8 = {
  "properties": {
    "active": {
      "$ref": "uPj1tUMd0h3bicZqWONifZA1KzzUthmmmI3yuZ5C98"
    },
    "assigned": {
      "$ref": "uPj1tUMd0h3bicZqWONifZA1KzzUthmmmI3yuZ5C98"
    },
    "error": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "lastKnownGood": {
      "$ref": "uPj1tUMd0h3bicZqWONifZA1KzzUthmmmI3yuZ5C98"
    }
  },
  "type": "object",
  "$id": "io.k8s.api.core.v1.NodeConfigStatus"
};
const schema6 = {
  "nullableRef": "io.k8s.api.core.v1.NodeConfigSource#"
};
const schema7 = {};
import { validate as validate22 } from "./IoK8sApiCoreV1NodeConfigSource";
function validate21(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate22(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
      errors = vErrors.length;
    }
  }
  validate21.errors = vErrors;
  return errors === 0;
}
const schema9 = {
  "type": "string",
  "nullable": true
};
function validate27(data, {
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
  validate27.errors = vErrors;
  return errors === 0;
}
function validate24(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.core.v1.NodeConfigStatus" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.active !== undefined) {
      if (!validate21(data.active, {
        instancePath: instancePath + "/active",
        parentData: data,
        parentDataProperty: "active",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.assigned !== undefined) {
      if (!validate21(data.assigned, {
        instancePath: instancePath + "/assigned",
        parentData: data,
        parentDataProperty: "assigned",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.error !== undefined) {
      if (!validate27(data.error, {
        instancePath: instancePath + "/error",
        parentData: data,
        parentDataProperty: "error",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.lastKnownGood !== undefined) {
      if (!validate21(data.lastKnownGood, {
        instancePath: instancePath + "/lastKnownGood",
        parentData: data,
        parentDataProperty: "lastKnownGood",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
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
  validate24.errors = vErrors;
  return errors === 0;
}