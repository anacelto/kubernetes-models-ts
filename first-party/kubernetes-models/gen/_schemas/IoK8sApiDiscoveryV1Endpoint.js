export const validate = validate23;
const schema8 = {
  "properties": {
    "addresses": {
      "$ref": "YwrI9eYeYzQIcdsUXH7isPYE3sgVab9JvcdpSK4GQ"
    },
    "conditions": {
      "$ref": "VnVrh4fEsENbeF5A6y9kK9IXaBuN8VDaZsvv2T32Lc"
    },
    "deprecatedTopology": {
      "$ref": "PjfGsuuTJKGenMIMVIBhy6BRB0YdhUzGFe2gewFJPT8"
    },
    "hints": {
      "$ref": "9xTniiSGSSXdlNsbsIJJdKeesIXVvMfOx2CQ0yBrPQ"
    },
    "hostname": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "nodeName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "targetRef": {
      "$ref": "jYn9JZbz65AwwugWuS6edUEOxbECgF62vZXknFUOk"
    },
    "zone": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["addresses"],
  "type": "object",
  "$id": "io.k8s.api.discovery.v1.Endpoint"
};
const schema9 = {
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "array"
};
const schema6 = {
  "type": "string"
};
function validate21(data, {
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
  validate21.errors = vErrors;
  return errors === 0;
}
function validate24(data, {
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
      if (!validate21(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
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
  validate24.errors = vErrors;
  return errors === 0;
}
const schema10 = {
  "nullableRef": "io.k8s.api.discovery.v1.EndpointConditions#"
};
const schema11 = {};
import { validate as validate28 } from "./IoK8sApiDiscoveryV1EndpointConditions";
function validate27(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate28(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
      errors = vErrors.length;
    }
  }
  validate27.errors = vErrors;
  return errors === 0;
}
const schema12 = {
  "additionalProperties": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "object",
  "nullable": true
};
function validate31(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    for (const key0 in data) {
      if (!validate21(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate31.errors = vErrors;
  return errors === 0;
}
const schema13 = {
  "nullableRef": "io.k8s.api.discovery.v1.EndpointHints#"
};
const schema14 = {};
import { validate as validate35 } from "./IoK8sApiDiscoveryV1EndpointHints";
function validate34(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate35(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
      errors = vErrors.length;
    }
  }
  validate34.errors = vErrors;
  return errors === 0;
}
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
const schema15 = {
  "nullableRef": "io.k8s.api.core.v1.ObjectReference#"
};
const schema16 = {};
import { validate as validate41 } from "./IoK8sApiCoreV1ObjectReference";
function validate40(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate41(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
      errors = vErrors.length;
    }
  }
  validate40.errors = vErrors;
  return errors === 0;
}
function validate23(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.discovery.v1.Endpoint" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.addresses === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "addresses"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.addresses !== undefined) {
      if (!validate24(data.addresses, {
        instancePath: instancePath + "/addresses",
        parentData: data,
        parentDataProperty: "addresses",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.conditions !== undefined) {
      if (!validate27(data.conditions, {
        instancePath: instancePath + "/conditions",
        parentData: data,
        parentDataProperty: "conditions",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.deprecatedTopology !== undefined) {
      if (!validate31(data.deprecatedTopology, {
        instancePath: instancePath + "/deprecatedTopology",
        parentData: data,
        parentDataProperty: "deprecatedTopology",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
    if (data.hints !== undefined) {
      if (!validate34(data.hints, {
        instancePath: instancePath + "/hints",
        parentData: data,
        parentDataProperty: "hints",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostname !== undefined) {
      if (!validate22(data.hostname, {
        instancePath: instancePath + "/hostname",
        parentData: data,
        parentDataProperty: "hostname",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodeName !== undefined) {
      if (!validate22(data.nodeName, {
        instancePath: instancePath + "/nodeName",
        parentData: data,
        parentDataProperty: "nodeName",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.targetRef !== undefined) {
      if (!validate40(data.targetRef, {
        instancePath: instancePath + "/targetRef",
        parentData: data,
        parentDataProperty: "targetRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
    if (data.zone !== undefined) {
      if (!validate22(data.zone, {
        instancePath: instancePath + "/zone",
        parentData: data,
        parentDataProperty: "zone",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
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
  validate23.errors = vErrors;
  return errors === 0;
}