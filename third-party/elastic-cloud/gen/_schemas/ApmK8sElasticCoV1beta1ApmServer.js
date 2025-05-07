import { formats } from "@kubernetes-models/validate";
export const validate = validate30;
const schema13 = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "$ref": "dK1XXYBaL9mc1tao93xsCL9TrqnSwsJDgb78SADUJic"
    },
    "kind": {
      "$ref": "5XP5FsAatJ7gld51voHHhD8uNezQrKIZdXdIo7d7JY"
    },
    "metadata": {
      "$ref": "a6f0oUEaFqHmymdwnqPORTNOTU7GczWAkwGD0uYU"
    },
    "spec": {
      "$ref": "2c4Y7mtgzY5Ozv2kDoyIqFPFYR5FMBaMjfXF3nbUA"
    },
    "status": {
      "$ref": "PpmDEiJEQXVec1rYsPTTFPYir8voiBMZORnn0imCP0Q"
    }
  },
  "required": ["apiVersion", "kind"],
  "$id": "apm.k8s.elastic.co.v1beta1.ApmServer"
};
const schema14 = {
  "type": "string",
  "enum": ["apm.k8s.elastic.co/v1beta1"]
};
function validate31(data, {
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
  if (!(data === "apm.k8s.elastic.co/v1beta1")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema14.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate31.errors = vErrors;
  return errors === 0;
}
const schema15 = {
  "type": "string",
  "enum": ["ApmServer"]
};
function validate33(data, {
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
  if (!(data === "ApmServer")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema15.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate33.errors = vErrors;
  return errors === 0;
}
const schema16 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
};
const schema17 = {};
import { validate as validate36 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
function validate35(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate36(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
      errors = vErrors.length;
    }
  }
  validate35.errors = vErrors;
  return errors === 0;
}
const schema18 = {
  "properties": {
    "config": {
      "$ref": "wnCl8zCvz1PLbyEivJTcktRgDZuzOGT9FYulvrA2T8w"
    },
    "count": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "elasticsearchRef": {
      "$ref": "zMfPjcFiq4d9d2xiKLIdbsmk6yvakCWP8UUZNzXNc0"
    },
    "http": {
      "$ref": "3l04AsFKC6dyjpAKAC5TwfhgCODShoWL9rn5pmJ6cHQ"
    },
    "image": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "podTemplate": {
      "$ref": "wnCl8zCvz1PLbyEivJTcktRgDZuzOGT9FYulvrA2T8w"
    },
    "secureSettings": {
      "$ref": "jvVMyt7MUibhj0B5ZguUbRoZ4wBzu8YgJD57xCt1n0"
    },
    "version": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema12 = {
  "type": "object",
  "properties": {},
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
  validate29.errors = vErrors;
  return errors === 0;
}
const schema10 = {
  "format": "int32",
  "type": "integer",
  "nullable": true
};
const formats0 = formats.int32;
function validate27(data, {
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
  validate27.errors = vErrors;
  return errors === 0;
}
const schema19 = {
  "properties": {
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["name"],
  "type": "object",
  "nullable": true
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
const schema8 = {
  "type": "string",
  "nullable": true
};
function validate24(data, {
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
  validate24.errors = vErrors;
  return errors === 0;
}
function validate42(data, {
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
    if (data.name === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "name"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
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
    if (data.namespace !== undefined) {
      if (!validate24(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate42.errors = vErrors;
  return errors === 0;
}
const schema20 = {
  "properties": {
    "service": {
      "$ref": "8lxBKzrwwH7r0H5rvUw97WJQbjpDUa8c45R1q2jYP0o"
    },
    "tls": {
      "$ref": "NwFRECi8jXOCtkLZZDajI3wC8ZIDYtX08oeVWdq8"
    }
  },
  "type": "object",
  "nullable": true
};
const schema21 = {
  "properties": {
    "metadata": {
      "$ref": "jynRVyKr0doMQvLMloozBEYX7ZohkIlAIqCnjwO8"
    },
    "spec": {
      "$ref": "CnPgUDSX1MN48gMfkTKRe4eanJ55zYjAjA6e93CeMo"
    }
  },
  "type": "object",
  "nullable": true
};
const schema22 = {
  "properties": {
    "annotations": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "finalizers": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "labels": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema7 = {
  "additionalProperties": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "object",
  "properties": {},
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
  validate22.errors = vErrors;
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
  }
  validate25.errors = vErrors;
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
    if (data.annotations !== undefined) {
      if (!validate22(data.annotations, {
        instancePath: instancePath + "/annotations",
        parentData: data,
        parentDataProperty: "annotations",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.finalizers !== undefined) {
      if (!validate25(data.finalizers, {
        instancePath: instancePath + "/finalizers",
        parentData: data,
        parentDataProperty: "finalizers",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.labels !== undefined) {
      if (!validate22(data.labels, {
        instancePath: instancePath + "/labels",
        parentData: data,
        parentDataProperty: "labels",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate24(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespace !== undefined) {
      if (!validate24(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate48.errors = vErrors;
  return errors === 0;
}
const schema23 = {
  "properties": {
    "allocateLoadBalancerNodePorts": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "clusterIP": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "clusterIPs": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "externalIPs": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "externalName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "externalTrafficPolicy": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "healthCheckNodePort": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "internalTrafficPolicy": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "ipFamilies": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "ipFamilyPolicy": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "loadBalancerClass": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "loadBalancerIP": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "loadBalancerSourceRanges": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "ports": {
      "$ref": "SqBULl0vMcVFrR5Md87frbwK0OODVOdZMC8FJ8194"
    },
    "publishNotReadyAddresses": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "selector": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "sessionAffinity": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "sessionAffinityConfig": {
      "$ref": "NOK6MWSOT5985EMnNlqjFCoVS2If0F128C501hFtQ"
    },
    "type": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema11 = {
  "type": "boolean",
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
  validate28.errors = vErrors;
  return errors === 0;
}
const schema24 = {
  "items": {
    "$ref": "YrMa0SligBQG7H1KsBWtS9yEcJGoQ9rHo6jDDsIJ4"
  },
  "type": "array",
  "nullable": true
};
const schema25 = {
  "properties": {
    "appProtocol": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "nodePort": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "port": {
      "$ref": "ppOMqvYEA3GSH3ozhOJ2Wta6ImWhzC9DOYsjidshCYo"
    },
    "protocol": {
      "$ref": "WjWl4gI0zAjaPoQiailk8NsLbKtD9AmRfEZB1lmJptc"
    },
    "targetPort": {
      "$ref": "uJPY5JwdoQeyZsG50sBXB6uBQV8ScD7PtRRAnILoI3A"
    }
  },
  "required": ["port"],
  "type": "object"
};
const schema26 = {
  "format": "int32",
  "type": "integer"
};
function validate74(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(typeof data == "number" && !(data % 1) && !isNaN(data) && isFinite(data))) {
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
  validate74.errors = vErrors;
  return errors === 0;
}
const schema27 = {
  "default": "TCP",
  "type": "string",
  "nullable": true
};
function validate76(data, {
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
  validate76.errors = vErrors;
  return errors === 0;
}
const schema28 = {
  "anyOf": [{
    "$ref": "vMERCWCezVsdN7cIwlJvWJTP5QRRevuFDHNM3fdV8Q"
  }, {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  }]
};
const schema29 = {
  "type": "integer"
};
function validate79(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(typeof data == "number" && !(data % 1) && !isNaN(data) && isFinite(data))) {
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
  validate79.errors = vErrors;
  return errors === 0;
}
function validate78(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  let valid0 = false;
  const _errs1 = errors;
  if (!validate79(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate79.errors : vErrors.concat(validate79.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs2 = errors;
    if (!validate21(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
      errors = vErrors.length;
    }
    var _valid0 = _errs2 === errors;
    valid0 = valid0 || _valid0;
  }
  if (!valid0) {
    const err0 = {
      instancePath,
      schemaPath: "#/anyOf",
      keyword: "anyOf",
      params: {}
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate78.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.port === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "port"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.appProtocol !== undefined) {
      if (!validate24(data.appProtocol, {
        instancePath: instancePath + "/appProtocol",
        parentData: data,
        parentDataProperty: "appProtocol",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate24(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodePort !== undefined) {
      if (!validate27(data.nodePort, {
        instancePath: instancePath + "/nodePort",
        parentData: data,
        parentDataProperty: "nodePort",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.port !== undefined) {
      if (!validate74(data.port, {
        instancePath: instancePath + "/port",
        parentData: data,
        parentDataProperty: "port",
        rootData
      })) {
        vErrors = vErrors === null ? validate74.errors : vErrors.concat(validate74.errors);
        errors = vErrors.length;
      }
    }
    if (data.protocol !== undefined) {
      if (!validate76(data.protocol, {
        instancePath: instancePath + "/protocol",
        parentData: data,
        parentDataProperty: "protocol",
        rootData
      })) {
        vErrors = vErrors === null ? validate76.errors : vErrors.concat(validate76.errors);
        errors = vErrors.length;
      }
    }
    if (data.targetPort !== undefined) {
      if (!validate78(data.targetPort, {
        instancePath: instancePath + "/targetPort",
        parentData: data,
        parentDataProperty: "targetPort",
        rootData
      })) {
        vErrors = vErrors === null ? validate78.errors : vErrors.concat(validate78.errors);
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
  validate70.errors = vErrors;
  return errors === 0;
}
function validate69(data, {
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
      if (!validate70(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate70.errors : vErrors.concat(validate70.errors);
        errors = vErrors.length;
      }
    }
  }
  validate69.errors = vErrors;
  return errors === 0;
}
const schema30 = {
  "properties": {
    "clientIP": {
      "$ref": "aaSpr2hGERhMIE31wZXyuABaoTmTMBhznfEJfFWeQg"
    }
  },
  "type": "object",
  "nullable": true
};
const schema31 = {
  "properties": {
    "timeoutSeconds": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    }
  },
  "type": "object",
  "nullable": true
};
function validate89(data, {
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
    if (data.timeoutSeconds !== undefined) {
      if (!validate27(data.timeoutSeconds, {
        instancePath: instancePath + "/timeoutSeconds",
        parentData: data,
        parentDataProperty: "timeoutSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
  }
  validate89.errors = vErrors;
  return errors === 0;
}
function validate88(data, {
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
    if (data.clientIP !== undefined) {
      if (!validate89(data.clientIP, {
        instancePath: instancePath + "/clientIP",
        parentData: data,
        parentDataProperty: "clientIP",
        rootData
      })) {
        vErrors = vErrors === null ? validate89.errors : vErrors.concat(validate89.errors);
        errors = vErrors.length;
      }
    }
  }
  validate88.errors = vErrors;
  return errors === 0;
}
function validate55(data, {
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
    if (data.allocateLoadBalancerNodePorts !== undefined) {
      if (!validate28(data.allocateLoadBalancerNodePorts, {
        instancePath: instancePath + "/allocateLoadBalancerNodePorts",
        parentData: data,
        parentDataProperty: "allocateLoadBalancerNodePorts",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.clusterIP !== undefined) {
      if (!validate24(data.clusterIP, {
        instancePath: instancePath + "/clusterIP",
        parentData: data,
        parentDataProperty: "clusterIP",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.clusterIPs !== undefined) {
      if (!validate25(data.clusterIPs, {
        instancePath: instancePath + "/clusterIPs",
        parentData: data,
        parentDataProperty: "clusterIPs",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.externalIPs !== undefined) {
      if (!validate25(data.externalIPs, {
        instancePath: instancePath + "/externalIPs",
        parentData: data,
        parentDataProperty: "externalIPs",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.externalName !== undefined) {
      if (!validate24(data.externalName, {
        instancePath: instancePath + "/externalName",
        parentData: data,
        parentDataProperty: "externalName",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.externalTrafficPolicy !== undefined) {
      if (!validate24(data.externalTrafficPolicy, {
        instancePath: instancePath + "/externalTrafficPolicy",
        parentData: data,
        parentDataProperty: "externalTrafficPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.healthCheckNodePort !== undefined) {
      if (!validate27(data.healthCheckNodePort, {
        instancePath: instancePath + "/healthCheckNodePort",
        parentData: data,
        parentDataProperty: "healthCheckNodePort",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.internalTrafficPolicy !== undefined) {
      if (!validate24(data.internalTrafficPolicy, {
        instancePath: instancePath + "/internalTrafficPolicy",
        parentData: data,
        parentDataProperty: "internalTrafficPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.ipFamilies !== undefined) {
      if (!validate25(data.ipFamilies, {
        instancePath: instancePath + "/ipFamilies",
        parentData: data,
        parentDataProperty: "ipFamilies",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.ipFamilyPolicy !== undefined) {
      if (!validate24(data.ipFamilyPolicy, {
        instancePath: instancePath + "/ipFamilyPolicy",
        parentData: data,
        parentDataProperty: "ipFamilyPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.loadBalancerClass !== undefined) {
      if (!validate24(data.loadBalancerClass, {
        instancePath: instancePath + "/loadBalancerClass",
        parentData: data,
        parentDataProperty: "loadBalancerClass",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.loadBalancerIP !== undefined) {
      if (!validate24(data.loadBalancerIP, {
        instancePath: instancePath + "/loadBalancerIP",
        parentData: data,
        parentDataProperty: "loadBalancerIP",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.loadBalancerSourceRanges !== undefined) {
      if (!validate25(data.loadBalancerSourceRanges, {
        instancePath: instancePath + "/loadBalancerSourceRanges",
        parentData: data,
        parentDataProperty: "loadBalancerSourceRanges",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.ports !== undefined) {
      if (!validate69(data.ports, {
        instancePath: instancePath + "/ports",
        parentData: data,
        parentDataProperty: "ports",
        rootData
      })) {
        vErrors = vErrors === null ? validate69.errors : vErrors.concat(validate69.errors);
        errors = vErrors.length;
      }
    }
    if (data.publishNotReadyAddresses !== undefined) {
      if (!validate28(data.publishNotReadyAddresses, {
        instancePath: instancePath + "/publishNotReadyAddresses",
        parentData: data,
        parentDataProperty: "publishNotReadyAddresses",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.selector !== undefined) {
      if (!validate22(data.selector, {
        instancePath: instancePath + "/selector",
        parentData: data,
        parentDataProperty: "selector",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.sessionAffinity !== undefined) {
      if (!validate24(data.sessionAffinity, {
        instancePath: instancePath + "/sessionAffinity",
        parentData: data,
        parentDataProperty: "sessionAffinity",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.sessionAffinityConfig !== undefined) {
      if (!validate88(data.sessionAffinityConfig, {
        instancePath: instancePath + "/sessionAffinityConfig",
        parentData: data,
        parentDataProperty: "sessionAffinityConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate88.errors : vErrors.concat(validate88.errors);
        errors = vErrors.length;
      }
    }
    if (data.type !== undefined) {
      if (!validate24(data.type, {
        instancePath: instancePath + "/type",
        parentData: data,
        parentDataProperty: "type",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate55.errors = vErrors;
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
    if (data.metadata !== undefined) {
      if (!validate48(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate55(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
  }
  validate47.errors = vErrors;
  return errors === 0;
}
const schema32 = {
  "properties": {
    "certificate": {
      "$ref": "h7s7ZnEZ5b2epThDOJOuHWxm9t8bDA7yYrqpy6E71uo"
    },
    "selfSignedCertificate": {
      "$ref": "DBxYuDt7eZYhEqpdYVpi0STdmyaK8TRydk7Yo32quM"
    }
  },
  "type": "object",
  "nullable": true
};
const schema33 = {
  "properties": {
    "secretName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate97(data, {
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
    if (data.secretName !== undefined) {
      if (!validate24(data.secretName, {
        instancePath: instancePath + "/secretName",
        parentData: data,
        parentDataProperty: "secretName",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate97.errors = vErrors;
  return errors === 0;
}
const schema34 = {
  "properties": {
    "disabled": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "subjectAltNames": {
      "$ref": "Xe5Metcfhjd3odl7YrpapIIvpPiVCrMJGJ3btfgB0"
    }
  },
  "type": "object",
  "nullable": true
};
const schema35 = {
  "items": {
    "$ref": "bK7BOXLsimpmcovs9uIv8BChCW0bNXeW4R38ts"
  },
  "type": "array",
  "nullable": true
};
const schema36 = {
  "properties": {
    "dns": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "ip": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
function validate103(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.dns !== undefined) {
      if (!validate24(data.dns, {
        instancePath: instancePath + "/dns",
        parentData: data,
        parentDataProperty: "dns",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.ip !== undefined) {
      if (!validate24(data.ip, {
        instancePath: instancePath + "/ip",
        parentData: data,
        parentDataProperty: "ip",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
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
  validate103.errors = vErrors;
  return errors === 0;
}
function validate102(data, {
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
      if (!validate103(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate103.errors : vErrors.concat(validate103.errors);
        errors = vErrors.length;
      }
    }
  }
  validate102.errors = vErrors;
  return errors === 0;
}
function validate100(data, {
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
    if (data.disabled !== undefined) {
      if (!validate28(data.disabled, {
        instancePath: instancePath + "/disabled",
        parentData: data,
        parentDataProperty: "disabled",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.subjectAltNames !== undefined) {
      if (!validate102(data.subjectAltNames, {
        instancePath: instancePath + "/subjectAltNames",
        parentData: data,
        parentDataProperty: "subjectAltNames",
        rootData
      })) {
        vErrors = vErrors === null ? validate102.errors : vErrors.concat(validate102.errors);
        errors = vErrors.length;
      }
    }
  }
  validate100.errors = vErrors;
  return errors === 0;
}
function validate96(data, {
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
    if (data.certificate !== undefined) {
      if (!validate97(data.certificate, {
        instancePath: instancePath + "/certificate",
        parentData: data,
        parentDataProperty: "certificate",
        rootData
      })) {
        vErrors = vErrors === null ? validate97.errors : vErrors.concat(validate97.errors);
        errors = vErrors.length;
      }
    }
    if (data.selfSignedCertificate !== undefined) {
      if (!validate100(data.selfSignedCertificate, {
        instancePath: instancePath + "/selfSignedCertificate",
        parentData: data,
        parentDataProperty: "selfSignedCertificate",
        rootData
      })) {
        vErrors = vErrors === null ? validate100.errors : vErrors.concat(validate100.errors);
        errors = vErrors.length;
      }
    }
  }
  validate96.errors = vErrors;
  return errors === 0;
}
function validate46(data, {
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
    if (data.service !== undefined) {
      if (!validate47(data.service, {
        instancePath: instancePath + "/service",
        parentData: data,
        parentDataProperty: "service",
        rootData
      })) {
        vErrors = vErrors === null ? validate47.errors : vErrors.concat(validate47.errors);
        errors = vErrors.length;
      }
    }
    if (data.tls !== undefined) {
      if (!validate96(data.tls, {
        instancePath: instancePath + "/tls",
        parentData: data,
        parentDataProperty: "tls",
        rootData
      })) {
        vErrors = vErrors === null ? validate96.errors : vErrors.concat(validate96.errors);
        errors = vErrors.length;
      }
    }
  }
  validate46.errors = vErrors;
  return errors === 0;
}
const schema37 = {
  "items": {
    "$ref": "aNaJePrdXUOT1869zAoTrE7CR0zOOi8H8ReImuiSVg"
  },
  "type": "array",
  "nullable": true
};
const schema38 = {
  "properties": {
    "entries": {
      "$ref": "A8w36VsI6UM4OM4PtO2N7CBzyVa7XGbe2WO7Td8Hk"
    },
    "secretName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["secretName"],
  "type": "object"
};
const schema39 = {
  "items": {
    "$ref": "G50YyuoAmh7laRmRGIWXREIqPPvqHTQbkoji0JWXzE"
  },
  "type": "array",
  "nullable": true
};
const schema40 = {
  "properties": {
    "key": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "path": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["key"],
  "type": "object"
};
function validate116(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.key === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "key"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.key !== undefined) {
      if (!validate21(data.key, {
        instancePath: instancePath + "/key",
        parentData: data,
        parentDataProperty: "key",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.path !== undefined) {
      if (!validate24(data.path, {
        instancePath: instancePath + "/path",
        parentData: data,
        parentDataProperty: "path",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
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
  validate116.errors = vErrors;
  return errors === 0;
}
function validate115(data, {
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
      if (!validate116(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate116.errors : vErrors.concat(validate116.errors);
        errors = vErrors.length;
      }
    }
  }
  validate115.errors = vErrors;
  return errors === 0;
}
function validate114(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.secretName === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "secretName"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.entries !== undefined) {
      if (!validate115(data.entries, {
        instancePath: instancePath + "/entries",
        parentData: data,
        parentDataProperty: "entries",
        rootData
      })) {
        vErrors = vErrors === null ? validate115.errors : vErrors.concat(validate115.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretName !== undefined) {
      if (!validate21(data.secretName, {
        instancePath: instancePath + "/secretName",
        parentData: data,
        parentDataProperty: "secretName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
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
  validate114.errors = vErrors;
  return errors === 0;
}
function validate113(data, {
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
      if (!validate114(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate114.errors : vErrors.concat(validate114.errors);
        errors = vErrors.length;
      }
    }
  }
  validate113.errors = vErrors;
  return errors === 0;
}
function validate39(data, {
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
    if (data.config !== undefined) {
      if (!validate29(data.config, {
        instancePath: instancePath + "/config",
        parentData: data,
        parentDataProperty: "config",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.count !== undefined) {
      if (!validate27(data.count, {
        instancePath: instancePath + "/count",
        parentData: data,
        parentDataProperty: "count",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.elasticsearchRef !== undefined) {
      if (!validate42(data.elasticsearchRef, {
        instancePath: instancePath + "/elasticsearchRef",
        parentData: data,
        parentDataProperty: "elasticsearchRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
        errors = vErrors.length;
      }
    }
    if (data.http !== undefined) {
      if (!validate46(data.http, {
        instancePath: instancePath + "/http",
        parentData: data,
        parentDataProperty: "http",
        rootData
      })) {
        vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
        errors = vErrors.length;
      }
    }
    if (data.image !== undefined) {
      if (!validate24(data.image, {
        instancePath: instancePath + "/image",
        parentData: data,
        parentDataProperty: "image",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.podTemplate !== undefined) {
      if (!validate29(data.podTemplate, {
        instancePath: instancePath + "/podTemplate",
        parentData: data,
        parentDataProperty: "podTemplate",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.secureSettings !== undefined) {
      if (!validate113(data.secureSettings, {
        instancePath: instancePath + "/secureSettings",
        parentData: data,
        parentDataProperty: "secureSettings",
        rootData
      })) {
        vErrors = vErrors === null ? validate113.errors : vErrors.concat(validate113.errors);
        errors = vErrors.length;
      }
    }
    if (data.version !== undefined) {
      if (!validate24(data.version, {
        instancePath: instancePath + "/version",
        parentData: data,
        parentDataProperty: "version",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate39.errors = vErrors;
  return errors === 0;
}
const schema41 = {
  "properties": {
    "associationStatus": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "availableNodes": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "health": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "secretTokenSecret": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "service": {
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
    if (data.associationStatus !== undefined) {
      if (!validate24(data.associationStatus, {
        instancePath: instancePath + "/associationStatus",
        parentData: data,
        parentDataProperty: "associationStatus",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.availableNodes !== undefined) {
      if (!validate27(data.availableNodes, {
        instancePath: instancePath + "/availableNodes",
        parentData: data,
        parentDataProperty: "availableNodes",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.health !== undefined) {
      if (!validate24(data.health, {
        instancePath: instancePath + "/health",
        parentData: data,
        parentDataProperty: "health",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretTokenSecret !== undefined) {
      if (!validate24(data.secretTokenSecret, {
        instancePath: instancePath + "/secretTokenSecret",
        parentData: data,
        parentDataProperty: "secretTokenSecret",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.service !== undefined) {
      if (!validate24(data.service, {
        instancePath: instancePath + "/service",
        parentData: data,
        parentDataProperty: "service",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate126.errors = vErrors;
  return errors === 0;
}
function validate30(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="apm.k8s.elastic.co.v1beta1.ApmServer" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.apiVersion === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "apiVersion"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.kind === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "kind"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.apiVersion !== undefined) {
      if (!validate31(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate33(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data.metadata !== undefined) {
      if (!validate35(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate39(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate126(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate126.errors : vErrors.concat(validate126.errors);
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
  validate30.errors = vErrors;
  return errors === 0;
}