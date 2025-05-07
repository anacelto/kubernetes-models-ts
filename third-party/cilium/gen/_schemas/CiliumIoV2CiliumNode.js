import { formats } from "@kubernetes-models/validate";
export const validate = validate38;
const schema16 = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "$ref": "yqtiQyDpmxWL3eu5fshw82JjuRIDtgHjwBeA13J6Vjo"
    },
    "kind": {
      "$ref": "iNpuQnt0SkNhpQbyLTQWBujMZADIzekBHHxWXM6yI"
    },
    "metadata": {
      "$ref": "F8UXVl2B8ROl9kb045E2at1pE3IVL8xPdYnpnYIkb0"
    },
    "spec": {
      "$ref": "DrvD4vUMHpjmwWT4ZAemV1UNuKvSVCcavnTul4uHLg"
    },
    "status": {
      "$ref": "GWDjdOv2Co6P6nZ4MFUh2KG0V3WkKavWGnIOg9ASE"
    }
  },
  "required": ["metadata", "spec", "apiVersion", "kind"],
  "$id": "cilium.io.v2.CiliumNode"
};
const schema17 = {
  "type": "string",
  "enum": ["cilium.io/v2"]
};
function validate39(data, {
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
  if (!(data === "cilium.io/v2")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema17.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate39.errors = vErrors;
  return errors === 0;
}
const schema18 = {
  "type": "string",
  "enum": ["CiliumNode"]
};
function validate41(data, {
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
  if (!(data === "CiliumNode")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema18.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate41.errors = vErrors;
  return errors === 0;
}
const schema19 = {
  "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
};
const schema20 = {};
import { validate as validate44 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
function validate43(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate44(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate44.errors : vErrors.concat(validate44.errors);
    errors = vErrors.length;
  }
  validate43.errors = vErrors;
  return errors === 0;
}
const schema21 = {
  "properties": {
    "addresses": {
      "$ref": "xbkZzXaoIfqd0beLElsyi8wp9Z3PpOBwctRZxaU"
    },
    "alibaba-cloud": {
      "$ref": "RilsJESqtCwmQVSle7TSZEk9x3OWN3u0ftPIU26lPw"
    },
    "azure": {
      "$ref": "l282bqIXjKu6B1n8uSE8wWrNi55iAu3R1d3jJkSmEmk"
    },
    "encryption": {
      "$ref": "TMTfaAEq0nxbh8Vcr03sZVq4TBxLN8qKLzrW9jyk"
    },
    "eni": {
      "$ref": "1CbySWCE3EDAwQuPNf8dRuyGASXA7g7UUswjmvo"
    },
    "health": {
      "$ref": "OfrM3iqp3pPHTSrJoyR0jjCJkHbQOHXGi4CuwWzts"
    },
    "ingress": {
      "$ref": "OfrM3iqp3pPHTSrJoyR0jjCJkHbQOHXGi4CuwWzts"
    },
    "instance-id": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "ipam": {
      "$ref": "HvMmZXyv96d7FUP7K9vDFWHUPUKlU76rOQaFgcxu4"
    },
    "nodeidentity": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    }
  },
  "type": "object"
};
const schema22 = {
  "items": {
    "$ref": "GDayCntl0bcQuqSrXuDwT4cZQJ7h7dYWHWXreqRKzYo"
  },
  "type": "array",
  "nullable": true
};
const schema23 = {
  "properties": {
    "ip": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "type": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
const schema6 = {
  "type": "string",
  "nullable": true
};
function validate21(data, {
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
  validate21.errors = vErrors;
  return errors === 0;
}
function validate49(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.ip !== undefined) {
      if (!validate21(data.ip, {
        instancePath: instancePath + "/ip",
        parentData: data,
        parentDataProperty: "ip",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.type !== undefined) {
      if (!validate21(data.type, {
        instancePath: instancePath + "/type",
        parentData: data,
        parentDataProperty: "type",
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
  validate49.errors = vErrors;
  return errors === 0;
}
function validate48(data, {
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
      if (!validate49(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
        errors = vErrors.length;
      }
    }
  }
  validate48.errors = vErrors;
  return errors === 0;
}
const schema24 = {
  "properties": {
    "availability-zone": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "cidr-block": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "instance-type": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "security-group-tags": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "security-groups": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "vpc-id": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "vswitch-tags": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "vswitches": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    }
  },
  "type": "object",
  "nullable": true
};
const schema8 = {
  "additionalProperties": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "object",
  "properties": {},
  "nullable": true
};
const schema7 = {
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
  validate22.errors = vErrors;
  return errors === 0;
}
function validate23(data, {
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
      if (!validate22(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate23.errors = vErrors;
  return errors === 0;
}
const schema9 = {
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "array",
  "nullable": true
};
function validate25(data, {
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
      if (!validate22(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate25.errors = vErrors;
  return errors === 0;
}
function validate54(data, {
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
    if (data["availability-zone"] !== undefined) {
      if (!validate21(data["availability-zone"], {
        instancePath: instancePath + "/availability-zone",
        parentData: data,
        parentDataProperty: "availability-zone",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data["cidr-block"] !== undefined) {
      if (!validate21(data["cidr-block"], {
        instancePath: instancePath + "/cidr-block",
        parentData: data,
        parentDataProperty: "cidr-block",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data["instance-type"] !== undefined) {
      if (!validate21(data["instance-type"], {
        instancePath: instancePath + "/instance-type",
        parentData: data,
        parentDataProperty: "instance-type",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data["security-group-tags"] !== undefined) {
      if (!validate23(data["security-group-tags"], {
        instancePath: instancePath + "/security-group-tags",
        parentData: data,
        parentDataProperty: "security-group-tags",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data["security-groups"] !== undefined) {
      if (!validate25(data["security-groups"], {
        instancePath: instancePath + "/security-groups",
        parentData: data,
        parentDataProperty: "security-groups",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data["vpc-id"] !== undefined) {
      if (!validate21(data["vpc-id"], {
        instancePath: instancePath + "/vpc-id",
        parentData: data,
        parentDataProperty: "vpc-id",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data["vswitch-tags"] !== undefined) {
      if (!validate23(data["vswitch-tags"], {
        instancePath: instancePath + "/vswitch-tags",
        parentData: data,
        parentDataProperty: "vswitch-tags",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.vswitches !== undefined) {
      if (!validate25(data.vswitches, {
        instancePath: instancePath + "/vswitches",
        parentData: data,
        parentDataProperty: "vswitches",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate54.errors = vErrors;
  return errors === 0;
}
const schema25 = {
  "properties": {
    "interface-name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate64(data, {
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
    if (data["interface-name"] !== undefined) {
      if (!validate21(data["interface-name"], {
        instancePath: instancePath + "/interface-name",
        parentData: data,
        parentDataProperty: "interface-name",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate64.errors = vErrors;
  return errors === 0;
}
const schema26 = {
  "properties": {
    "key": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    }
  },
  "type": "object",
  "nullable": true
};
const schema13 = {
  "type": "integer",
  "nullable": true
};
function validate32(data, {
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
  validate32.errors = vErrors;
  return errors === 0;
}
function validate67(data, {
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
    if (data.key !== undefined) {
      if (!validate32(data.key, {
        instancePath: instancePath + "/key",
        parentData: data,
        parentDataProperty: "key",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
        errors = vErrors.length;
      }
    }
  }
  validate67.errors = vErrors;
  return errors === 0;
}
const schema27 = {
  "properties": {
    "availability-zone": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "delete-on-termination": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "disable-prefix-delegation": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "exclude-interface-tags": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "first-interface-index": {
      "$ref": "ITjqUtBxFMhIL0CCAFrAl6QqD4mS4WHHo1GQBLww"
    },
    "instance-id": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "instance-type": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "max-above-watermark": {
      "$ref": "ITjqUtBxFMhIL0CCAFrAl6QqD4mS4WHHo1GQBLww"
    },
    "min-allocate": {
      "$ref": "ITjqUtBxFMhIL0CCAFrAl6QqD4mS4WHHo1GQBLww"
    },
    "pre-allocate": {
      "$ref": "ITjqUtBxFMhIL0CCAFrAl6QqD4mS4WHHo1GQBLww"
    },
    "security-group-tags": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "security-groups": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "subnet-ids": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "subnet-tags": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "use-primary-address": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "vpc-id": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema10 = {
  "type": "boolean",
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
  if (typeof data !== "boolean" && data !== null) {
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
  validate27.errors = vErrors;
  return errors === 0;
}
const schema11 = {
  "type": "integer",
  "minimum": 0,
  "nullable": true
};
function validate28(data, {
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
    if (data < 0 || isNaN(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/minimum",
        keyword: "minimum",
        params: {
          comparison: ">=",
          limit: 0
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
  validate28.errors = vErrors;
  return errors === 0;
}
function validate70(data, {
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
    if (data["availability-zone"] !== undefined) {
      if (!validate21(data["availability-zone"], {
        instancePath: instancePath + "/availability-zone",
        parentData: data,
        parentDataProperty: "availability-zone",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data["delete-on-termination"] !== undefined) {
      if (!validate27(data["delete-on-termination"], {
        instancePath: instancePath + "/delete-on-termination",
        parentData: data,
        parentDataProperty: "delete-on-termination",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data["disable-prefix-delegation"] !== undefined) {
      if (!validate27(data["disable-prefix-delegation"], {
        instancePath: instancePath + "/disable-prefix-delegation",
        parentData: data,
        parentDataProperty: "disable-prefix-delegation",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data["exclude-interface-tags"] !== undefined) {
      if (!validate23(data["exclude-interface-tags"], {
        instancePath: instancePath + "/exclude-interface-tags",
        parentData: data,
        parentDataProperty: "exclude-interface-tags",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data["first-interface-index"] !== undefined) {
      if (!validate28(data["first-interface-index"], {
        instancePath: instancePath + "/first-interface-index",
        parentData: data,
        parentDataProperty: "first-interface-index",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data["instance-id"] !== undefined) {
      if (!validate21(data["instance-id"], {
        instancePath: instancePath + "/instance-id",
        parentData: data,
        parentDataProperty: "instance-id",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data["instance-type"] !== undefined) {
      if (!validate21(data["instance-type"], {
        instancePath: instancePath + "/instance-type",
        parentData: data,
        parentDataProperty: "instance-type",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data["max-above-watermark"] !== undefined) {
      if (!validate28(data["max-above-watermark"], {
        instancePath: instancePath + "/max-above-watermark",
        parentData: data,
        parentDataProperty: "max-above-watermark",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data["min-allocate"] !== undefined) {
      if (!validate28(data["min-allocate"], {
        instancePath: instancePath + "/min-allocate",
        parentData: data,
        parentDataProperty: "min-allocate",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data["pre-allocate"] !== undefined) {
      if (!validate28(data["pre-allocate"], {
        instancePath: instancePath + "/pre-allocate",
        parentData: data,
        parentDataProperty: "pre-allocate",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data["security-group-tags"] !== undefined) {
      if (!validate23(data["security-group-tags"], {
        instancePath: instancePath + "/security-group-tags",
        parentData: data,
        parentDataProperty: "security-group-tags",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data["security-groups"] !== undefined) {
      if (!validate25(data["security-groups"], {
        instancePath: instancePath + "/security-groups",
        parentData: data,
        parentDataProperty: "security-groups",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data["subnet-ids"] !== undefined) {
      if (!validate25(data["subnet-ids"], {
        instancePath: instancePath + "/subnet-ids",
        parentData: data,
        parentDataProperty: "subnet-ids",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data["subnet-tags"] !== undefined) {
      if (!validate23(data["subnet-tags"], {
        instancePath: instancePath + "/subnet-tags",
        parentData: data,
        parentDataProperty: "subnet-tags",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data["use-primary-address"] !== undefined) {
      if (!validate27(data["use-primary-address"], {
        instancePath: instancePath + "/use-primary-address",
        parentData: data,
        parentDataProperty: "use-primary-address",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data["vpc-id"] !== undefined) {
      if (!validate21(data["vpc-id"], {
        instancePath: instancePath + "/vpc-id",
        parentData: data,
        parentDataProperty: "vpc-id",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate70.errors = vErrors;
  return errors === 0;
}
const schema12 = {
  "properties": {
    "ipv4": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "ipv6": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate29(data, {
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
    if (data.ipv4 !== undefined) {
      if (!validate21(data.ipv4, {
        instancePath: instancePath + "/ipv4",
        parentData: data,
        parentDataProperty: "ipv4",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.ipv6 !== undefined) {
      if (!validate21(data.ipv6, {
        instancePath: instancePath + "/ipv6",
        parentData: data,
        parentDataProperty: "ipv6",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate29.errors = vErrors;
  return errors === 0;
}
const schema28 = {
  "properties": {
    "max-above-watermark": {
      "$ref": "ITjqUtBxFMhIL0CCAFrAl6QqD4mS4WHHo1GQBLww"
    },
    "max-allocate": {
      "$ref": "ITjqUtBxFMhIL0CCAFrAl6QqD4mS4WHHo1GQBLww"
    },
    "min-allocate": {
      "$ref": "ITjqUtBxFMhIL0CCAFrAl6QqD4mS4WHHo1GQBLww"
    },
    "pod-cidr-allocation-threshold": {
      "$ref": "ITjqUtBxFMhIL0CCAFrAl6QqD4mS4WHHo1GQBLww"
    },
    "pod-cidr-release-threshold": {
      "$ref": "ITjqUtBxFMhIL0CCAFrAl6QqD4mS4WHHo1GQBLww"
    },
    "podCIDRs": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "pool": {
      "$ref": "x8UkvDiDCfTdTFquKS5Ud56rLvMYjuX7uDVYPnmayA"
    },
    "pre-allocate": {
      "$ref": "ITjqUtBxFMhIL0CCAFrAl6QqD4mS4WHHo1GQBLww"
    }
  },
  "type": "object",
  "nullable": true
};
const schema14 = {
  "additionalProperties": {
    "$ref": "oP95Hqms1bRoXAl3E5GH2hZgDMuuHI70SbB0fF0"
  },
  "type": "object",
  "properties": {},
  "nullable": true
};
const schema15 = {
  "properties": {
    "owner": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "resource": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
function validate34(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.owner !== undefined) {
      if (!validate21(data.owner, {
        instancePath: instancePath + "/owner",
        parentData: data,
        parentDataProperty: "owner",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.resource !== undefined) {
      if (!validate21(data.resource, {
        instancePath: instancePath + "/resource",
        parentData: data,
        parentDataProperty: "resource",
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
  validate34.errors = vErrors;
  return errors === 0;
}
function validate33(data, {
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
      if (!validate34(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
  }
  validate33.errors = vErrors;
  return errors === 0;
}
function validate91(data, {
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
    if (data["max-above-watermark"] !== undefined) {
      if (!validate28(data["max-above-watermark"], {
        instancePath: instancePath + "/max-above-watermark",
        parentData: data,
        parentDataProperty: "max-above-watermark",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data["max-allocate"] !== undefined) {
      if (!validate28(data["max-allocate"], {
        instancePath: instancePath + "/max-allocate",
        parentData: data,
        parentDataProperty: "max-allocate",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data["min-allocate"] !== undefined) {
      if (!validate28(data["min-allocate"], {
        instancePath: instancePath + "/min-allocate",
        parentData: data,
        parentDataProperty: "min-allocate",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data["pod-cidr-allocation-threshold"] !== undefined) {
      if (!validate28(data["pod-cidr-allocation-threshold"], {
        instancePath: instancePath + "/pod-cidr-allocation-threshold",
        parentData: data,
        parentDataProperty: "pod-cidr-allocation-threshold",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data["pod-cidr-release-threshold"] !== undefined) {
      if (!validate28(data["pod-cidr-release-threshold"], {
        instancePath: instancePath + "/pod-cidr-release-threshold",
        parentData: data,
        parentDataProperty: "pod-cidr-release-threshold",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.podCIDRs !== undefined) {
      if (!validate25(data.podCIDRs, {
        instancePath: instancePath + "/podCIDRs",
        parentData: data,
        parentDataProperty: "podCIDRs",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.pool !== undefined) {
      if (!validate33(data.pool, {
        instancePath: instancePath + "/pool",
        parentData: data,
        parentDataProperty: "pool",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data["pre-allocate"] !== undefined) {
      if (!validate28(data["pre-allocate"], {
        instancePath: instancePath + "/pre-allocate",
        parentData: data,
        parentDataProperty: "pre-allocate",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
  }
  validate91.errors = vErrors;
  return errors === 0;
}
const schema29 = {
  "format": "int64",
  "type": "integer",
  "nullable": true
};
const formats0 = formats.int64;
function validate101(data, {
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
          format: "int64"
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
  validate101.errors = vErrors;
  return errors === 0;
}
function validate47(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.addresses !== undefined) {
      if (!validate48(data.addresses, {
        instancePath: instancePath + "/addresses",
        parentData: data,
        parentDataProperty: "addresses",
        rootData
      })) {
        vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
        errors = vErrors.length;
      }
    }
    if (data["alibaba-cloud"] !== undefined) {
      if (!validate54(data["alibaba-cloud"], {
        instancePath: instancePath + "/alibaba-cloud",
        parentData: data,
        parentDataProperty: "alibaba-cloud",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.azure !== undefined) {
      if (!validate64(data.azure, {
        instancePath: instancePath + "/azure",
        parentData: data,
        parentDataProperty: "azure",
        rootData
      })) {
        vErrors = vErrors === null ? validate64.errors : vErrors.concat(validate64.errors);
        errors = vErrors.length;
      }
    }
    if (data.encryption !== undefined) {
      if (!validate67(data.encryption, {
        instancePath: instancePath + "/encryption",
        parentData: data,
        parentDataProperty: "encryption",
        rootData
      })) {
        vErrors = vErrors === null ? validate67.errors : vErrors.concat(validate67.errors);
        errors = vErrors.length;
      }
    }
    if (data.eni !== undefined) {
      if (!validate70(data.eni, {
        instancePath: instancePath + "/eni",
        parentData: data,
        parentDataProperty: "eni",
        rootData
      })) {
        vErrors = vErrors === null ? validate70.errors : vErrors.concat(validate70.errors);
        errors = vErrors.length;
      }
    }
    if (data.health !== undefined) {
      if (!validate29(data.health, {
        instancePath: instancePath + "/health",
        parentData: data,
        parentDataProperty: "health",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.ingress !== undefined) {
      if (!validate29(data.ingress, {
        instancePath: instancePath + "/ingress",
        parentData: data,
        parentDataProperty: "ingress",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data["instance-id"] !== undefined) {
      if (!validate21(data["instance-id"], {
        instancePath: instancePath + "/instance-id",
        parentData: data,
        parentDataProperty: "instance-id",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.ipam !== undefined) {
      if (!validate91(data.ipam, {
        instancePath: instancePath + "/ipam",
        parentData: data,
        parentDataProperty: "ipam",
        rootData
      })) {
        vErrors = vErrors === null ? validate91.errors : vErrors.concat(validate91.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodeidentity !== undefined) {
      if (!validate101(data.nodeidentity, {
        instancePath: instancePath + "/nodeidentity",
        parentData: data,
        parentDataProperty: "nodeidentity",
        rootData
      })) {
        vErrors = vErrors === null ? validate101.errors : vErrors.concat(validate101.errors);
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
  validate47.errors = vErrors;
  return errors === 0;
}
const schema30 = {
  "properties": {
    "alibaba-cloud": {
      "$ref": "OmxhypCiF4Eo2T6GYSID3q77cPvVjeikHoFHX5zszs"
    },
    "azure": {
      "$ref": "UvHz279fKODAK3xM9CArfjvMK7zhwjKN25kiCyDbv4"
    },
    "eni": {
      "$ref": "krgBfCGF7JuxLmlyq5bxMIEVSFJCD4JMNJiAVOAdM"
    },
    "ipam": {
      "$ref": "ykGGt1kldNJNdTnRJh3X2RdzC6utnInLa4TOcJw4"
    }
  },
  "type": "object",
  "nullable": true
};
const schema31 = {
  "properties": {
    "enis": {
      "$ref": "hZhAj6qUTYVOBtRCQCxtbGgF8NilFjrR3EZ6rdlZo"
    }
  },
  "type": "object",
  "nullable": true
};
const schema32 = {
  "additionalProperties": {
    "$ref": "TxANYcXp0YYATOXW4dqIPdNIxvArdkN6RbNnMeQf5Tk"
  },
  "type": "object",
  "properties": {},
  "nullable": true
};
const schema33 = {
  "properties": {
    "instance-id": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "mac-address": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "network-interface-id": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "primary-ip-address": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "private-ipsets": {
      "$ref": "szop8lrVWVRpHixSR17acVk2scZJQ75fUiC8HR1vJE"
    },
    "security-groupids": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "tags": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "type": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "vpc": {
      "$ref": "Ef2qiZb53AUeAFRhzvIEgTuJ7uKg3FINASMUoBA"
    },
    "vswitch": {
      "$ref": "9LUo4aLnmVYrUNoqFnelYj7urLNpDZgnNzrvEUhPUc"
    },
    "zone-id": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
const schema34 = {
  "items": {
    "$ref": "EZuyEanqGjqmLZyLH5TkIlTfAivUYTDgHwNV45PbE"
  },
  "type": "array",
  "nullable": true
};
const schema35 = {
  "properties": {
    "primary": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "private-ip-address": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
function validate113(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.primary !== undefined) {
      if (!validate27(data.primary, {
        instancePath: instancePath + "/primary",
        parentData: data,
        parentDataProperty: "primary",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data["private-ip-address"] !== undefined) {
      if (!validate21(data["private-ip-address"], {
        instancePath: instancePath + "/private-ip-address",
        parentData: data,
        parentDataProperty: "private-ip-address",
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
  validate113.errors = vErrors;
  return errors === 0;
}
function validate112(data, {
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
      if (!validate113(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate113.errors : vErrors.concat(validate113.errors);
        errors = vErrors.length;
      }
    }
  }
  validate112.errors = vErrors;
  return errors === 0;
}
const schema36 = {
  "properties": {
    "cidr": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "ipv6-cidr": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "vpc-id": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate121(data, {
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
    if (data.cidr !== undefined) {
      if (!validate21(data.cidr, {
        instancePath: instancePath + "/cidr",
        parentData: data,
        parentDataProperty: "cidr",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data["ipv6-cidr"] !== undefined) {
      if (!validate21(data["ipv6-cidr"], {
        instancePath: instancePath + "/ipv6-cidr",
        parentData: data,
        parentDataProperty: "ipv6-cidr",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data["vpc-id"] !== undefined) {
      if (!validate21(data["vpc-id"], {
        instancePath: instancePath + "/vpc-id",
        parentData: data,
        parentDataProperty: "vpc-id",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate121.errors = vErrors;
  return errors === 0;
}
const schema37 = {
  "properties": {
    "cidr": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "ipv6-cidr": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "vswitch-id": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate126(data, {
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
    if (data.cidr !== undefined) {
      if (!validate21(data.cidr, {
        instancePath: instancePath + "/cidr",
        parentData: data,
        parentDataProperty: "cidr",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data["ipv6-cidr"] !== undefined) {
      if (!validate21(data["ipv6-cidr"], {
        instancePath: instancePath + "/ipv6-cidr",
        parentData: data,
        parentDataProperty: "ipv6-cidr",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data["vswitch-id"] !== undefined) {
      if (!validate21(data["vswitch-id"], {
        instancePath: instancePath + "/vswitch-id",
        parentData: data,
        parentDataProperty: "vswitch-id",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate126.errors = vErrors;
  return errors === 0;
}
function validate107(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data["instance-id"] !== undefined) {
      if (!validate21(data["instance-id"], {
        instancePath: instancePath + "/instance-id",
        parentData: data,
        parentDataProperty: "instance-id",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data["mac-address"] !== undefined) {
      if (!validate21(data["mac-address"], {
        instancePath: instancePath + "/mac-address",
        parentData: data,
        parentDataProperty: "mac-address",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data["network-interface-id"] !== undefined) {
      if (!validate21(data["network-interface-id"], {
        instancePath: instancePath + "/network-interface-id",
        parentData: data,
        parentDataProperty: "network-interface-id",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data["primary-ip-address"] !== undefined) {
      if (!validate21(data["primary-ip-address"], {
        instancePath: instancePath + "/primary-ip-address",
        parentData: data,
        parentDataProperty: "primary-ip-address",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data["private-ipsets"] !== undefined) {
      if (!validate112(data["private-ipsets"], {
        instancePath: instancePath + "/private-ipsets",
        parentData: data,
        parentDataProperty: "private-ipsets",
        rootData
      })) {
        vErrors = vErrors === null ? validate112.errors : vErrors.concat(validate112.errors);
        errors = vErrors.length;
      }
    }
    if (data["security-groupids"] !== undefined) {
      if (!validate25(data["security-groupids"], {
        instancePath: instancePath + "/security-groupids",
        parentData: data,
        parentDataProperty: "security-groupids",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.tags !== undefined) {
      if (!validate23(data.tags, {
        instancePath: instancePath + "/tags",
        parentData: data,
        parentDataProperty: "tags",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.type !== undefined) {
      if (!validate21(data.type, {
        instancePath: instancePath + "/type",
        parentData: data,
        parentDataProperty: "type",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.vpc !== undefined) {
      if (!validate121(data.vpc, {
        instancePath: instancePath + "/vpc",
        parentData: data,
        parentDataProperty: "vpc",
        rootData
      })) {
        vErrors = vErrors === null ? validate121.errors : vErrors.concat(validate121.errors);
        errors = vErrors.length;
      }
    }
    if (data.vswitch !== undefined) {
      if (!validate126(data.vswitch, {
        instancePath: instancePath + "/vswitch",
        parentData: data,
        parentDataProperty: "vswitch",
        rootData
      })) {
        vErrors = vErrors === null ? validate126.errors : vErrors.concat(validate126.errors);
        errors = vErrors.length;
      }
    }
    if (data["zone-id"] !== undefined) {
      if (!validate21(data["zone-id"], {
        instancePath: instancePath + "/zone-id",
        parentData: data,
        parentDataProperty: "zone-id",
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
  validate107.errors = vErrors;
  return errors === 0;
}
function validate106(data, {
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
      if (!validate107(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
        rootData
      })) {
        vErrors = vErrors === null ? validate107.errors : vErrors.concat(validate107.errors);
        errors = vErrors.length;
      }
    }
  }
  validate106.errors = vErrors;
  return errors === 0;
}
function validate105(data, {
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
    if (data.enis !== undefined) {
      if (!validate106(data.enis, {
        instancePath: instancePath + "/enis",
        parentData: data,
        parentDataProperty: "enis",
        rootData
      })) {
        vErrors = vErrors === null ? validate106.errors : vErrors.concat(validate106.errors);
        errors = vErrors.length;
      }
    }
  }
  validate105.errors = vErrors;
  return errors === 0;
}
const schema38 = {
  "properties": {
    "interfaces": {
      "$ref": "NRG0Tmsp6nqYkPYR37209Vbk7suY98AiqYIpD0TiQUQ"
    }
  },
  "type": "object",
  "nullable": true
};
const schema39 = {
  "items": {
    "$ref": "OU09A9wgXUlkm1AbVzSuSEkABmZoiI3wyn5SFYydvg"
  },
  "type": "array",
  "nullable": true
};
const schema40 = {
  "properties": {
    "GatewayIP": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "addresses": {
      "$ref": "wtjmG8kKSziypIJWa44SbMSgCwLKvcOdJU2QgbybFuc"
    },
    "cidr": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "gateway": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "id": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "mac": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "security-group": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "state": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
const schema41 = {
  "items": {
    "$ref": "nPsCCnZjsuDJfe88yt9JrXddcJPhAq1JhdHX3nak"
  },
  "type": "array",
  "nullable": true
};
const schema42 = {
  "properties": {
    "ip": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "state": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "subnet": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
function validate140(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.ip !== undefined) {
      if (!validate21(data.ip, {
        instancePath: instancePath + "/ip",
        parentData: data,
        parentDataProperty: "ip",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.state !== undefined) {
      if (!validate21(data.state, {
        instancePath: instancePath + "/state",
        parentData: data,
        parentDataProperty: "state",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.subnet !== undefined) {
      if (!validate21(data.subnet, {
        instancePath: instancePath + "/subnet",
        parentData: data,
        parentDataProperty: "subnet",
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
  validate140.errors = vErrors;
  return errors === 0;
}
function validate139(data, {
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
      if (!validate140(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate140.errors : vErrors.concat(validate140.errors);
        errors = vErrors.length;
      }
    }
  }
  validate139.errors = vErrors;
  return errors === 0;
}
function validate137(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.GatewayIP !== undefined) {
      if (!validate21(data.GatewayIP, {
        instancePath: instancePath + "/GatewayIP",
        parentData: data,
        parentDataProperty: "GatewayIP",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.addresses !== undefined) {
      if (!validate139(data.addresses, {
        instancePath: instancePath + "/addresses",
        parentData: data,
        parentDataProperty: "addresses",
        rootData
      })) {
        vErrors = vErrors === null ? validate139.errors : vErrors.concat(validate139.errors);
        errors = vErrors.length;
      }
    }
    if (data.cidr !== undefined) {
      if (!validate21(data.cidr, {
        instancePath: instancePath + "/cidr",
        parentData: data,
        parentDataProperty: "cidr",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.gateway !== undefined) {
      if (!validate21(data.gateway, {
        instancePath: instancePath + "/gateway",
        parentData: data,
        parentDataProperty: "gateway",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.id !== undefined) {
      if (!validate21(data.id, {
        instancePath: instancePath + "/id",
        parentData: data,
        parentDataProperty: "id",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.mac !== undefined) {
      if (!validate21(data.mac, {
        instancePath: instancePath + "/mac",
        parentData: data,
        parentDataProperty: "mac",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate21(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data["security-group"] !== undefined) {
      if (!validate21(data["security-group"], {
        instancePath: instancePath + "/security-group",
        parentData: data,
        parentDataProperty: "security-group",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.state !== undefined) {
      if (!validate21(data.state, {
        instancePath: instancePath + "/state",
        parentData: data,
        parentDataProperty: "state",
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
  validate137.errors = vErrors;
  return errors === 0;
}
function validate136(data, {
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
      if (!validate137(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate137.errors : vErrors.concat(validate137.errors);
        errors = vErrors.length;
      }
    }
  }
  validate136.errors = vErrors;
  return errors === 0;
}
function validate135(data, {
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
    if (data.interfaces !== undefined) {
      if (!validate136(data.interfaces, {
        instancePath: instancePath + "/interfaces",
        parentData: data,
        parentDataProperty: "interfaces",
        rootData
      })) {
        vErrors = vErrors === null ? validate136.errors : vErrors.concat(validate136.errors);
        errors = vErrors.length;
      }
    }
  }
  validate135.errors = vErrors;
  return errors === 0;
}
const schema43 = {
  "properties": {
    "enis": {
      "$ref": "IwOFMqM12t2SxZ6l5rj6uRlwwQBiJgwCkV3L1RI9E"
    }
  },
  "type": "object",
  "nullable": true
};
const schema44 = {
  "additionalProperties": {
    "$ref": "gDOtijJMnio6ioPhuCqgbKPivbYfX1Wp5f6uULyU"
  },
  "type": "object",
  "properties": {},
  "nullable": true
};
const schema45 = {
  "properties": {
    "addresses": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "availability-zone": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "id": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "ip": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "mac": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "number": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "prefixes": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "security-groups": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "subnet": {
      "$ref": "YEPGT8kMJ306h1iYqiOjeR5KgQtScHC9rvyz6SFgshc"
    },
    "tags": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "vpc": {
      "$ref": "25IHW4fJDvVSVjD5Ds6gN8r1feyYGBlcg1fFN2EHRY"
    }
  },
  "type": "object"
};
const schema46 = {
  "properties": {
    "cidr": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "id": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate167(data, {
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
    if (data.cidr !== undefined) {
      if (!validate21(data.cidr, {
        instancePath: instancePath + "/cidr",
        parentData: data,
        parentDataProperty: "cidr",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.id !== undefined) {
      if (!validate21(data.id, {
        instancePath: instancePath + "/id",
        parentData: data,
        parentDataProperty: "id",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate167.errors = vErrors;
  return errors === 0;
}
const schema47 = {
  "properties": {
    "cidrs": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "id": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "primary-cidr": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate172(data, {
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
    if (data.cidrs !== undefined) {
      if (!validate25(data.cidrs, {
        instancePath: instancePath + "/cidrs",
        parentData: data,
        parentDataProperty: "cidrs",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.id !== undefined) {
      if (!validate21(data.id, {
        instancePath: instancePath + "/id",
        parentData: data,
        parentDataProperty: "id",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data["primary-cidr"] !== undefined) {
      if (!validate21(data["primary-cidr"], {
        instancePath: instancePath + "/primary-cidr",
        parentData: data,
        parentDataProperty: "primary-cidr",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate172.errors = vErrors;
  return errors === 0;
}
function validate158(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.addresses !== undefined) {
      if (!validate25(data.addresses, {
        instancePath: instancePath + "/addresses",
        parentData: data,
        parentDataProperty: "addresses",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data["availability-zone"] !== undefined) {
      if (!validate21(data["availability-zone"], {
        instancePath: instancePath + "/availability-zone",
        parentData: data,
        parentDataProperty: "availability-zone",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.id !== undefined) {
      if (!validate21(data.id, {
        instancePath: instancePath + "/id",
        parentData: data,
        parentDataProperty: "id",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.ip !== undefined) {
      if (!validate21(data.ip, {
        instancePath: instancePath + "/ip",
        parentData: data,
        parentDataProperty: "ip",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.mac !== undefined) {
      if (!validate21(data.mac, {
        instancePath: instancePath + "/mac",
        parentData: data,
        parentDataProperty: "mac",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.number !== undefined) {
      if (!validate32(data.number, {
        instancePath: instancePath + "/number",
        parentData: data,
        parentDataProperty: "number",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
        errors = vErrors.length;
      }
    }
    if (data.prefixes !== undefined) {
      if (!validate25(data.prefixes, {
        instancePath: instancePath + "/prefixes",
        parentData: data,
        parentDataProperty: "prefixes",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data["security-groups"] !== undefined) {
      if (!validate25(data["security-groups"], {
        instancePath: instancePath + "/security-groups",
        parentData: data,
        parentDataProperty: "security-groups",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.subnet !== undefined) {
      if (!validate167(data.subnet, {
        instancePath: instancePath + "/subnet",
        parentData: data,
        parentDataProperty: "subnet",
        rootData
      })) {
        vErrors = vErrors === null ? validate167.errors : vErrors.concat(validate167.errors);
        errors = vErrors.length;
      }
    }
    if (data.tags !== undefined) {
      if (!validate23(data.tags, {
        instancePath: instancePath + "/tags",
        parentData: data,
        parentDataProperty: "tags",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.vpc !== undefined) {
      if (!validate172(data.vpc, {
        instancePath: instancePath + "/vpc",
        parentData: data,
        parentDataProperty: "vpc",
        rootData
      })) {
        vErrors = vErrors === null ? validate172.errors : vErrors.concat(validate172.errors);
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
  validate158.errors = vErrors;
  return errors === 0;
}
function validate157(data, {
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
      if (!validate158(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
        rootData
      })) {
        vErrors = vErrors === null ? validate158.errors : vErrors.concat(validate158.errors);
        errors = vErrors.length;
      }
    }
  }
  validate157.errors = vErrors;
  return errors === 0;
}
function validate156(data, {
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
    if (data.enis !== undefined) {
      if (!validate157(data.enis, {
        instancePath: instancePath + "/enis",
        parentData: data,
        parentDataProperty: "enis",
        rootData
      })) {
        vErrors = vErrors === null ? validate157.errors : vErrors.concat(validate157.errors);
        errors = vErrors.length;
      }
    }
  }
  validate156.errors = vErrors;
  return errors === 0;
}
const schema48 = {
  "properties": {
    "operator-status": {
      "$ref": "nZrQT5mns11WtjfZ8hyEsqKLNWXSDousRIWRIkUBpHA"
    },
    "pod-cidrs": {
      "$ref": "HyZiEqGwrSTeAOjXwtFpjeN97e79kSixCKRG3XEoEc"
    },
    "release-ips": {
      "$ref": "2Ip6N6AzBZE1N1EACBFVGFodpBq4ORJtkgnB31ZT29c"
    },
    "used": {
      "$ref": "x8UkvDiDCfTdTFquKS5Ud56rLvMYjuX7uDVYPnmayA"
    }
  },
  "type": "object",
  "nullable": true
};
const schema49 = {
  "properties": {
    "error": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate181(data, {
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
    if (data.error !== undefined) {
      if (!validate21(data.error, {
        instancePath: instancePath + "/error",
        parentData: data,
        parentDataProperty: "error",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate181.errors = vErrors;
  return errors === 0;
}
const schema50 = {
  "additionalProperties": {
    "$ref": "vZW7TLOA6VgHL98pQ7BbF6NgkyoLS861nidKzdP4"
  },
  "type": "object",
  "properties": {},
  "nullable": true
};
const schema51 = {
  "properties": {
    "status": {
      "$ref": "zRoQod8YCRAfEEEUBKMCINtH5U4SW0QCWrWZaYzpI"
    }
  },
  "type": "object"
};
const schema52 = {
  "enum": ["released", "depleted", "in-use"],
  "type": "string",
  "nullable": true
};
function validate186(data, {
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
  if (!(data === "released" || data === "depleted" || data === "in-use")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema52.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate186.errors = vErrors;
  return errors === 0;
}
function validate185(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.status !== undefined) {
      if (!validate186(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate186.errors : vErrors.concat(validate186.errors);
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
  validate185.errors = vErrors;
  return errors === 0;
}
function validate184(data, {
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
      if (!validate185(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
        rootData
      })) {
        vErrors = vErrors === null ? validate185.errors : vErrors.concat(validate185.errors);
        errors = vErrors.length;
      }
    }
  }
  validate184.errors = vErrors;
  return errors === 0;
}
const schema53 = {
  "additionalProperties": {
    "$ref": "HfXsgdjnAkFYmCNDjJUWkmPX6FfHf3bPysRCiAY1s"
  },
  "type": "object",
  "properties": {},
  "nullable": true
};
const schema54 = {
  "enum": ["marked-for-release", "ready-for-release", "do-not-release", "released"],
  "type": "string"
};
function validate191(data, {
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
  if (!(data === "marked-for-release" || data === "ready-for-release" || data === "do-not-release" || data === "released")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema54.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate191.errors = vErrors;
  return errors === 0;
}
function validate190(data, {
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
      if (!validate191(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
        rootData
      })) {
        vErrors = vErrors === null ? validate191.errors : vErrors.concat(validate191.errors);
        errors = vErrors.length;
      }
    }
  }
  validate190.errors = vErrors;
  return errors === 0;
}
function validate180(data, {
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
    if (data["operator-status"] !== undefined) {
      if (!validate181(data["operator-status"], {
        instancePath: instancePath + "/operator-status",
        parentData: data,
        parentDataProperty: "operator-status",
        rootData
      })) {
        vErrors = vErrors === null ? validate181.errors : vErrors.concat(validate181.errors);
        errors = vErrors.length;
      }
    }
    if (data["pod-cidrs"] !== undefined) {
      if (!validate184(data["pod-cidrs"], {
        instancePath: instancePath + "/pod-cidrs",
        parentData: data,
        parentDataProperty: "pod-cidrs",
        rootData
      })) {
        vErrors = vErrors === null ? validate184.errors : vErrors.concat(validate184.errors);
        errors = vErrors.length;
      }
    }
    if (data["release-ips"] !== undefined) {
      if (!validate190(data["release-ips"], {
        instancePath: instancePath + "/release-ips",
        parentData: data,
        parentDataProperty: "release-ips",
        rootData
      })) {
        vErrors = vErrors === null ? validate190.errors : vErrors.concat(validate190.errors);
        errors = vErrors.length;
      }
    }
    if (data.used !== undefined) {
      if (!validate33(data.used, {
        instancePath: instancePath + "/used",
        parentData: data,
        parentDataProperty: "used",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
  }
  validate180.errors = vErrors;
  return errors === 0;
}
function validate104(data, {
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
    if (data["alibaba-cloud"] !== undefined) {
      if (!validate105(data["alibaba-cloud"], {
        instancePath: instancePath + "/alibaba-cloud",
        parentData: data,
        parentDataProperty: "alibaba-cloud",
        rootData
      })) {
        vErrors = vErrors === null ? validate105.errors : vErrors.concat(validate105.errors);
        errors = vErrors.length;
      }
    }
    if (data.azure !== undefined) {
      if (!validate135(data.azure, {
        instancePath: instancePath + "/azure",
        parentData: data,
        parentDataProperty: "azure",
        rootData
      })) {
        vErrors = vErrors === null ? validate135.errors : vErrors.concat(validate135.errors);
        errors = vErrors.length;
      }
    }
    if (data.eni !== undefined) {
      if (!validate156(data.eni, {
        instancePath: instancePath + "/eni",
        parentData: data,
        parentDataProperty: "eni",
        rootData
      })) {
        vErrors = vErrors === null ? validate156.errors : vErrors.concat(validate156.errors);
        errors = vErrors.length;
      }
    }
    if (data.ipam !== undefined) {
      if (!validate180(data.ipam, {
        instancePath: instancePath + "/ipam",
        parentData: data,
        parentDataProperty: "ipam",
        rootData
      })) {
        vErrors = vErrors === null ? validate180.errors : vErrors.concat(validate180.errors);
        errors = vErrors.length;
      }
    }
  }
  validate104.errors = vErrors;
  return errors === 0;
}
function validate38(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="cilium.io.v2.CiliumNode" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.metadata === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "metadata"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.spec === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "spec"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.apiVersion === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "apiVersion"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.kind === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "kind"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.apiVersion !== undefined) {
      if (!validate39(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate41(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
        errors = vErrors.length;
      }
    }
    if (data.metadata !== undefined) {
      if (!validate43(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate47(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate47.errors : vErrors.concat(validate47.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate104(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate104.errors : vErrors.concat(validate104.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err4 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err4];
    } else {
      vErrors.push(err4);
    }
    errors++;
  }
  validate38.errors = vErrors;
  return errors === 0;
}