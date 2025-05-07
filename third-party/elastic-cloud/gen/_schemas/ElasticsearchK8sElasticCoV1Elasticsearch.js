import { formats } from "@kubernetes-models/validate";
export const validate = validate113;
const schema38 = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "$ref": "Mn1RldqUymdXUBGfkc7j9DyQBFhnplz22ffOQTaCA"
    },
    "kind": {
      "$ref": "7Y89NfKm378AieU7tSnKyCPfDGJN19pIy7mmCwlKAGg"
    },
    "metadata": {
      "$ref": "a6f0oUEaFqHmymdwnqPORTNOTU7GczWAkwGD0uYU"
    },
    "spec": {
      "$ref": "7bxznfJf4E5cjegtnghPgrrJYjyYssKA0SYSWtMhA4"
    },
    "status": {
      "$ref": "1LAqujFHAEQHDbxMajEiBFS4YzROmBWUHXhOreDu8U"
    }
  },
  "required": ["apiVersion", "kind"],
  "$id": "elasticsearch.k8s.elastic.co.v1.Elasticsearch"
};
const schema39 = {
  "type": "string",
  "enum": ["elasticsearch.k8s.elastic.co/v1"]
};
function validate114(data, {
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
  if (!(data === "elasticsearch.k8s.elastic.co/v1")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema39.enum
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
const schema40 = {
  "type": "string",
  "enum": ["Elasticsearch"]
};
function validate116(data, {
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
  if (!(data === "Elasticsearch")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema40.enum
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
const schema41 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
};
const schema42 = {};
import { validate as validate119 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
function validate118(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate119(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate119.errors : vErrors.concat(validate119.errors);
      errors = vErrors.length;
    }
  }
  validate118.errors = vErrors;
  return errors === 0;
}
const schema43 = {
  "properties": {
    "auth": {
      "$ref": "xAJe2Hz6OqVfOfg7ACRs8TKivN74aNkOPK2zAkUuI"
    },
    "http": {
      "$ref": "3l04AsFKC6dyjpAKAC5TwfhgCODShoWL9rn5pmJ6cHQ"
    },
    "image": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "monitoring": {
      "$ref": "3GfLqogsZKvervDbbUJ6dlkRDWRXnTGBkFRzQEMM"
    },
    "nodeSets": {
      "$ref": "N7vhKXwP2wrXdiitxZlnvDNKHFEp7nODtAE1gk2ok"
    },
    "podDisruptionBudget": {
      "$ref": "Gi10Q7m3nqvbCZNYgpAS713rBiGr61BlFr1QIht70"
    },
    "remoteClusters": {
      "$ref": "cbxFj3fsjgxKoeCNVydCZaRfPpFeFo2j7FeMir6y4"
    },
    "revisionHistoryLimit": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "secureSettings": {
      "$ref": "jvVMyt7MUibhj0B5ZguUbRoZ4wBzu8YgJD57xCt1n0"
    },
    "serviceAccountName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "transport": {
      "$ref": "4MoezsXBOYfHoM2qpCIph8mwnwDsicnD8xLbOeSYuk"
    },
    "updateStrategy": {
      "$ref": "Yhoo5lPdYBInBtZLGqv3aMyFa0haQEgAOYtzbc"
    },
    "version": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "volumeClaimDeletePolicy": {
      "$ref": "LcW1OHZjyCh8V7csf8Nwws9D6Va5ZRSPyH9fdDNppYA"
    }
  },
  "required": ["nodeSets", "version"],
  "type": "object",
  "nullable": true
};
const schema44 = {
  "properties": {
    "fileRealm": {
      "$ref": "an9PPc3bsMqlUyipKkz4v5idAZQVYEqX6FBBfGZU"
    },
    "roles": {
      "$ref": "an9PPc3bsMqlUyipKkz4v5idAZQVYEqX6FBBfGZU"
    }
  },
  "type": "object",
  "nullable": true
};
const schema6 = {
  "items": {
    "$ref": "7bPCyU4F6ecKsV2dYuEA6zne9uY3s62jz4wz5vz48A"
  },
  "type": "array",
  "nullable": true
};
const schema7 = {
  "properties": {
    "secretName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
const schema8 = {
  "type": "string",
  "nullable": true
};
function validate23(data, {
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.secretName !== undefined) {
      if (!validate23(data.secretName, {
        instancePath: instancePath + "/secretName",
        parentData: data,
        parentDataProperty: "secretName",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
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
  validate22.errors = vErrors;
  return errors === 0;
}
function validate21(data, {
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
  validate21.errors = vErrors;
  return errors === 0;
}
function validate123(data, {
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
    if (data.fileRealm !== undefined) {
      if (!validate21(data.fileRealm, {
        instancePath: instancePath + "/fileRealm",
        parentData: data,
        parentDataProperty: "fileRealm",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.roles !== undefined) {
      if (!validate21(data.roles, {
        instancePath: instancePath + "/roles",
        parentData: data,
        parentDataProperty: "roles",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate123.errors = vErrors;
  return errors === 0;
}
const schema45 = {
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
const schema26 = {
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
const schema18 = {
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
const schema10 = {
  "additionalProperties": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "object",
  "properties": {},
  "nullable": true
};
const schema9 = {
  "type": "string"
};
function validate26(data, {
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
  validate26.errors = vErrors;
  return errors === 0;
}
function validate27(data, {
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
      if (!validate26(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate27.errors = vErrors;
  return errors === 0;
}
const schema11 = {
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "array",
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
      if (!validate26(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate29.errors = vErrors;
  return errors === 0;
}
function validate43(data, {
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
      if (!validate27(data.annotations, {
        instancePath: instancePath + "/annotations",
        parentData: data,
        parentDataProperty: "annotations",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.finalizers !== undefined) {
      if (!validate29(data.finalizers, {
        instancePath: instancePath + "/finalizers",
        parentData: data,
        parentDataProperty: "finalizers",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.labels !== undefined) {
      if (!validate27(data.labels, {
        instancePath: instancePath + "/labels",
        parentData: data,
        parentDataProperty: "labels",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate23(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespace !== undefined) {
      if (!validate23(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate43.errors = vErrors;
  return errors === 0;
}
const schema27 = {
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
const schema13 = {
  "type": "boolean",
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
  validate32.errors = vErrors;
  return errors === 0;
}
const schema12 = {
  "format": "int32",
  "type": "integer",
  "nullable": true
};
const formats0 = formats.int32;
function validate31(data, {
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
  validate31.errors = vErrors;
  return errors === 0;
}
const schema28 = {
  "items": {
    "$ref": "YrMa0SligBQG7H1KsBWtS9yEcJGoQ9rHo6jDDsIJ4"
  },
  "type": "array",
  "nullable": true
};
const schema29 = {
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
const schema30 = {
  "format": "int32",
  "type": "integer"
};
function validate88(data, {
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
  validate88.errors = vErrors;
  return errors === 0;
}
const schema31 = {
  "default": "TCP",
  "type": "string",
  "nullable": true
};
function validate90(data, {
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
  validate90.errors = vErrors;
  return errors === 0;
}
const schema22 = {
  "anyOf": [{
    "$ref": "vMERCWCezVsdN7cIwlJvWJTP5QRRevuFDHNM3fdV8Q"
  }, {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  }]
};
const schema19 = {
  "type": "integer"
};
function validate49(data, {
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
  validate49.errors = vErrors;
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
  const _errs0 = errors;
  let valid0 = false;
  const _errs1 = errors;
  if (!validate49(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs2 = errors;
    if (!validate26(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
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
  validate55.errors = vErrors;
  return errors === 0;
}
function validate84(data, {
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
      if (!validate23(data.appProtocol, {
        instancePath: instancePath + "/appProtocol",
        parentData: data,
        parentDataProperty: "appProtocol",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate23(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodePort !== undefined) {
      if (!validate31(data.nodePort, {
        instancePath: instancePath + "/nodePort",
        parentData: data,
        parentDataProperty: "nodePort",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
    if (data.port !== undefined) {
      if (!validate88(data.port, {
        instancePath: instancePath + "/port",
        parentData: data,
        parentDataProperty: "port",
        rootData
      })) {
        vErrors = vErrors === null ? validate88.errors : vErrors.concat(validate88.errors);
        errors = vErrors.length;
      }
    }
    if (data.protocol !== undefined) {
      if (!validate90(data.protocol, {
        instancePath: instancePath + "/protocol",
        parentData: data,
        parentDataProperty: "protocol",
        rootData
      })) {
        vErrors = vErrors === null ? validate90.errors : vErrors.concat(validate90.errors);
        errors = vErrors.length;
      }
    }
    if (data.targetPort !== undefined) {
      if (!validate55(data.targetPort, {
        instancePath: instancePath + "/targetPort",
        parentData: data,
        parentDataProperty: "targetPort",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
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
  validate84.errors = vErrors;
  return errors === 0;
}
function validate83(data, {
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
      if (!validate84(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate84.errors : vErrors.concat(validate84.errors);
        errors = vErrors.length;
      }
    }
  }
  validate83.errors = vErrors;
  return errors === 0;
}
const schema32 = {
  "properties": {
    "clientIP": {
      "$ref": "aaSpr2hGERhMIE31wZXyuABaoTmTMBhznfEJfFWeQg"
    }
  },
  "type": "object",
  "nullable": true
};
const schema33 = {
  "properties": {
    "timeoutSeconds": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    }
  },
  "type": "object",
  "nullable": true
};
function validate99(data, {
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
      if (!validate31(data.timeoutSeconds, {
        instancePath: instancePath + "/timeoutSeconds",
        parentData: data,
        parentDataProperty: "timeoutSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
  }
  validate99.errors = vErrors;
  return errors === 0;
}
function validate98(data, {
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
      if (!validate99(data.clientIP, {
        instancePath: instancePath + "/clientIP",
        parentData: data,
        parentDataProperty: "clientIP",
        rootData
      })) {
        vErrors = vErrors === null ? validate99.errors : vErrors.concat(validate99.errors);
        errors = vErrors.length;
      }
    }
  }
  validate98.errors = vErrors;
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
      if (!validate32(data.allocateLoadBalancerNodePorts, {
        instancePath: instancePath + "/allocateLoadBalancerNodePorts",
        parentData: data,
        parentDataProperty: "allocateLoadBalancerNodePorts",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
        errors = vErrors.length;
      }
    }
    if (data.clusterIP !== undefined) {
      if (!validate23(data.clusterIP, {
        instancePath: instancePath + "/clusterIP",
        parentData: data,
        parentDataProperty: "clusterIP",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.clusterIPs !== undefined) {
      if (!validate29(data.clusterIPs, {
        instancePath: instancePath + "/clusterIPs",
        parentData: data,
        parentDataProperty: "clusterIPs",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.externalIPs !== undefined) {
      if (!validate29(data.externalIPs, {
        instancePath: instancePath + "/externalIPs",
        parentData: data,
        parentDataProperty: "externalIPs",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.externalName !== undefined) {
      if (!validate23(data.externalName, {
        instancePath: instancePath + "/externalName",
        parentData: data,
        parentDataProperty: "externalName",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.externalTrafficPolicy !== undefined) {
      if (!validate23(data.externalTrafficPolicy, {
        instancePath: instancePath + "/externalTrafficPolicy",
        parentData: data,
        parentDataProperty: "externalTrafficPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.healthCheckNodePort !== undefined) {
      if (!validate31(data.healthCheckNodePort, {
        instancePath: instancePath + "/healthCheckNodePort",
        parentData: data,
        parentDataProperty: "healthCheckNodePort",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
    if (data.internalTrafficPolicy !== undefined) {
      if (!validate23(data.internalTrafficPolicy, {
        instancePath: instancePath + "/internalTrafficPolicy",
        parentData: data,
        parentDataProperty: "internalTrafficPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.ipFamilies !== undefined) {
      if (!validate29(data.ipFamilies, {
        instancePath: instancePath + "/ipFamilies",
        parentData: data,
        parentDataProperty: "ipFamilies",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.ipFamilyPolicy !== undefined) {
      if (!validate23(data.ipFamilyPolicy, {
        instancePath: instancePath + "/ipFamilyPolicy",
        parentData: data,
        parentDataProperty: "ipFamilyPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.loadBalancerClass !== undefined) {
      if (!validate23(data.loadBalancerClass, {
        instancePath: instancePath + "/loadBalancerClass",
        parentData: data,
        parentDataProperty: "loadBalancerClass",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.loadBalancerIP !== undefined) {
      if (!validate23(data.loadBalancerIP, {
        instancePath: instancePath + "/loadBalancerIP",
        parentData: data,
        parentDataProperty: "loadBalancerIP",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.loadBalancerSourceRanges !== undefined) {
      if (!validate29(data.loadBalancerSourceRanges, {
        instancePath: instancePath + "/loadBalancerSourceRanges",
        parentData: data,
        parentDataProperty: "loadBalancerSourceRanges",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.ports !== undefined) {
      if (!validate83(data.ports, {
        instancePath: instancePath + "/ports",
        parentData: data,
        parentDataProperty: "ports",
        rootData
      })) {
        vErrors = vErrors === null ? validate83.errors : vErrors.concat(validate83.errors);
        errors = vErrors.length;
      }
    }
    if (data.publishNotReadyAddresses !== undefined) {
      if (!validate32(data.publishNotReadyAddresses, {
        instancePath: instancePath + "/publishNotReadyAddresses",
        parentData: data,
        parentDataProperty: "publishNotReadyAddresses",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
        errors = vErrors.length;
      }
    }
    if (data.selector !== undefined) {
      if (!validate27(data.selector, {
        instancePath: instancePath + "/selector",
        parentData: data,
        parentDataProperty: "selector",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.sessionAffinity !== undefined) {
      if (!validate23(data.sessionAffinity, {
        instancePath: instancePath + "/sessionAffinity",
        parentData: data,
        parentDataProperty: "sessionAffinity",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.sessionAffinityConfig !== undefined) {
      if (!validate98(data.sessionAffinityConfig, {
        instancePath: instancePath + "/sessionAffinityConfig",
        parentData: data,
        parentDataProperty: "sessionAffinityConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate98.errors : vErrors.concat(validate98.errors);
        errors = vErrors.length;
      }
    }
    if (data.type !== undefined) {
      if (!validate23(data.type, {
        instancePath: instancePath + "/type",
        parentData: data,
        parentDataProperty: "type",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate69.errors = vErrors;
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
      if (!validate69(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate69.errors : vErrors.concat(validate69.errors);
        errors = vErrors.length;
      }
    }
  }
  validate67.errors = vErrors;
  return errors === 0;
}
const schema46 = {
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
const schema34 = {
  "properties": {
    "secretName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
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
    if (data.secretName !== undefined) {
      if (!validate23(data.secretName, {
        instancePath: instancePath + "/secretName",
        parentData: data,
        parentDataProperty: "secretName",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate105.errors = vErrors;
  return errors === 0;
}
const schema47 = {
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
function validate108(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.dns !== undefined) {
      if (!validate23(data.dns, {
        instancePath: instancePath + "/dns",
        parentData: data,
        parentDataProperty: "dns",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.ip !== undefined) {
      if (!validate23(data.ip, {
        instancePath: instancePath + "/ip",
        parentData: data,
        parentDataProperty: "ip",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
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
  validate108.errors = vErrors;
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
      if (!validate108(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate108.errors : vErrors.concat(validate108.errors);
        errors = vErrors.length;
      }
    }
  }
  validate107.errors = vErrors;
  return errors === 0;
}
function validate131(data, {
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
      if (!validate32(data.disabled, {
        instancePath: instancePath + "/disabled",
        parentData: data,
        parentDataProperty: "disabled",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
        errors = vErrors.length;
      }
    }
    if (data.subjectAltNames !== undefined) {
      if (!validate107(data.subjectAltNames, {
        instancePath: instancePath + "/subjectAltNames",
        parentData: data,
        parentDataProperty: "subjectAltNames",
        rootData
      })) {
        vErrors = vErrors === null ? validate107.errors : vErrors.concat(validate107.errors);
        errors = vErrors.length;
      }
    }
  }
  validate131.errors = vErrors;
  return errors === 0;
}
function validate129(data, {
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
      if (!validate105(data.certificate, {
        instancePath: instancePath + "/certificate",
        parentData: data,
        parentDataProperty: "certificate",
        rootData
      })) {
        vErrors = vErrors === null ? validate105.errors : vErrors.concat(validate105.errors);
        errors = vErrors.length;
      }
    }
    if (data.selfSignedCertificate !== undefined) {
      if (!validate131(data.selfSignedCertificate, {
        instancePath: instancePath + "/selfSignedCertificate",
        parentData: data,
        parentDataProperty: "selfSignedCertificate",
        rootData
      })) {
        vErrors = vErrors === null ? validate131.errors : vErrors.concat(validate131.errors);
        errors = vErrors.length;
      }
    }
  }
  validate129.errors = vErrors;
  return errors === 0;
}
function validate127(data, {
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
      if (!validate67(data.service, {
        instancePath: instancePath + "/service",
        parentData: data,
        parentDataProperty: "service",
        rootData
      })) {
        vErrors = vErrors === null ? validate67.errors : vErrors.concat(validate67.errors);
        errors = vErrors.length;
      }
    }
    if (data.tls !== undefined) {
      if (!validate129(data.tls, {
        instancePath: instancePath + "/tls",
        parentData: data,
        parentDataProperty: "tls",
        rootData
      })) {
        vErrors = vErrors === null ? validate129.errors : vErrors.concat(validate129.errors);
        errors = vErrors.length;
      }
    }
  }
  validate127.errors = vErrors;
  return errors === 0;
}
const schema48 = {
  "properties": {
    "logs": {
      "$ref": "r80y3xzPaDwLfYPfFxnPIIezvOn90W3YeJQyIl7kOJs"
    },
    "metrics": {
      "$ref": "r80y3xzPaDwLfYPfFxnPIIezvOn90W3YeJQyIl7kOJs"
    }
  },
  "type": "object",
  "nullable": true
};
const schema14 = {
  "properties": {
    "elasticsearchRefs": {
      "$ref": "eUQvcgx0PkvHULJzcI94iogpJOt2SAPV3o2gbPnmk"
    }
  },
  "type": "object",
  "nullable": true
};
const schema15 = {
  "items": {
    "$ref": "puRFBT6AdsYwXHnyoXHAVfyAoJOnxDlXF3l4zTrFfgw"
  },
  "type": "array",
  "nullable": true
};
const schema16 = {
  "properties": {
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "secretName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "serviceName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
function validate35(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.name !== undefined) {
      if (!validate23(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespace !== undefined) {
      if (!validate23(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretName !== undefined) {
      if (!validate23(data.secretName, {
        instancePath: instancePath + "/secretName",
        parentData: data,
        parentDataProperty: "secretName",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceName !== undefined) {
      if (!validate23(data.serviceName, {
        instancePath: instancePath + "/serviceName",
        parentData: data,
        parentDataProperty: "serviceName",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
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
    if (data.elasticsearchRefs !== undefined) {
      if (!validate34(data.elasticsearchRefs, {
        instancePath: instancePath + "/elasticsearchRefs",
        parentData: data,
        parentDataProperty: "elasticsearchRefs",
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
function validate138(data, {
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
    if (data.logs !== undefined) {
      if (!validate33(data.logs, {
        instancePath: instancePath + "/logs",
        parentData: data,
        parentDataProperty: "logs",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data.metrics !== undefined) {
      if (!validate33(data.metrics, {
        instancePath: instancePath + "/metrics",
        parentData: data,
        parentDataProperty: "metrics",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
  }
  validate138.errors = vErrors;
  return errors === 0;
}
const schema49 = {
  "items": {
    "$ref": "okKUsaqclHqY138cxibV4sl0Njv1FURktY1CQ9rCPk"
  },
  "minItems": 1,
  "type": "array"
};
const schema50 = {
  "properties": {
    "config": {
      "$ref": "wnCl8zCvz1PLbyEivJTcktRgDZuzOGT9FYulvrA2T8w"
    },
    "count": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "name": {
      "$ref": "C8p7Q9xIufeLbe6rzLXexIF8E5cid83aXfZQExUI"
    },
    "podTemplate": {
      "$ref": "wnCl8zCvz1PLbyEivJTcktRgDZuzOGT9FYulvrA2T8w"
    },
    "volumeClaimTemplates": {
      "$ref": "pA1SGXBkCbwgzhXsoBbQclaUpEySJMSzSIzuagGijA"
    }
  },
  "required": ["name"],
  "type": "object"
};
const schema17 = {
  "type": "object",
  "properties": {},
  "nullable": true
};
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
  validate42.errors = vErrors;
  return errors === 0;
}
const schema51 = {
  "maxLength": 23,
  "pattern": "[a-zA-Z0-9-]+",
  "type": "string"
};
import func2 from "@kubernetes-models/validate/runtime/ucs2length";
const pattern1 = new RegExp("[a-zA-Z0-9-]+", "u");
function validate146(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (func2(data) > 23) {
      const err0 = {
        instancePath,
        schemaPath: "#/maxLength",
        keyword: "maxLength",
        params: {
          limit: 23
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (!pattern1.test(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "[a-zA-Z0-9-]+"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
  } else {
    const err2 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "string"
      }
    };
    if (vErrors === null) {
      vErrors = [err2];
    } else {
      vErrors.push(err2);
    }
    errors++;
  }
  validate146.errors = vErrors;
  return errors === 0;
}
const schema52 = {
  "items": {
    "$ref": "HR88O8arBd6cgX5pCT8FNm4jFK8GG3dfA7ySvIBI"
  },
  "type": "array",
  "nullable": true
};
const schema53 = {
  "properties": {
    "apiVersion": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "kind": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "metadata": {
      "$ref": "jynRVyKr0doMQvLMloozBEYX7ZohkIlAIqCnjwO8"
    },
    "spec": {
      "$ref": "VsZpL2wyRG3wHcd2e8FzsxjjkeCkUp4ubCpwpsy0Jz0"
    }
  },
  "type": "object"
};
const schema54 = {
  "properties": {
    "accessModes": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "dataSource": {
      "$ref": "Ie9aGhSpjw6Qzf2P1NWEJFaL4kYcEsKAtQUYsudcc"
    },
    "dataSourceRef": {
      "$ref": "seic9XJ3fvP984RfDF5jrMD1wbt6uQwMb0CTu47W2I"
    },
    "resources": {
      "$ref": "MwxOFQf7SDwNxgfa7EwX9dt7776AqT8sAlMcBeXt9HM"
    },
    "selector": {
      "$ref": "Zjt3HFRfql15zSZzpouBNTusTEhVu3UqWLOK7EP6U"
    },
    "storageClassName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "volumeMode": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "volumeName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema55 = {
  "properties": {
    "apiGroup": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "kind": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["kind", "name"],
  "type": "object",
  "nullable": true
};
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
    if (data.name === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "name"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.apiGroup !== undefined) {
      if (!validate23(data.apiGroup, {
        instancePath: instancePath + "/apiGroup",
        parentData: data,
        parentDataProperty: "apiGroup",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate26(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate26(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate156.errors = vErrors;
  return errors === 0;
}
const schema56 = {
  "properties": {
    "apiGroup": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "kind": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["kind", "name"],
  "type": "object",
  "nullable": true
};
function validate161(data, {
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
    if (data.name === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "name"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.apiGroup !== undefined) {
      if (!validate23(data.apiGroup, {
        instancePath: instancePath + "/apiGroup",
        parentData: data,
        parentDataProperty: "apiGroup",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate26(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate26(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespace !== undefined) {
      if (!validate23(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate161.errors = vErrors;
  return errors === 0;
}
const schema57 = {
  "properties": {
    "claims": {
      "$ref": "xcpG1cEijhhVdOeFxCi8O2nBHHEkNfBU2rvTOFs7LU"
    },
    "limits": {
      "$ref": "gjo16z3NV0NSVrHi0ow9dEFkpRekg7uAIyza4KmU"
    },
    "requests": {
      "$ref": "gjo16z3NV0NSVrHi0ow9dEFkpRekg7uAIyza4KmU"
    }
  },
  "type": "object",
  "nullable": true
};
const schema58 = {
  "items": {
    "$ref": "HN5PKMIdyNeW2tH5k7qzNtrzheocymAho1Vd1ZpPn9c"
  },
  "type": "array",
  "nullable": true
};
const schema59 = {
  "properties": {
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["name"],
  "type": "object"
};
function validate169(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.name === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "name"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.name !== undefined) {
      if (!validate26(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
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
  validate169.errors = vErrors;
  return errors === 0;
}
function validate168(data, {
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
      if (!validate169(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate169.errors : vErrors.concat(validate169.errors);
        errors = vErrors.length;
      }
    }
  }
  validate168.errors = vErrors;
  return errors === 0;
}
const schema20 = {
  "additionalProperties": {
    "$ref": "l7oaIcmo24pLi7XxCQ3euA6o54Bu2nt1fJ44v0vO04"
  },
  "type": "object",
  "properties": {},
  "nullable": true
};
const schema21 = {
  "anyOf": [{
    "$ref": "vMERCWCezVsdN7cIwlJvWJTP5QRRevuFDHNM3fdV8Q"
  }, {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  }],
  "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
};
const pattern0 = new RegExp("^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$", "u");
function validate51(data, {
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
  if (!validate49(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs2 = errors;
    if (!validate26(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
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
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
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
  validate51.errors = vErrors;
  return errors === 0;
}
function validate50(data, {
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
      if (!validate51(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
        rootData
      })) {
        vErrors = vErrors === null ? validate51.errors : vErrors.concat(validate51.errors);
        errors = vErrors.length;
      }
    }
  }
  validate50.errors = vErrors;
  return errors === 0;
}
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
    if (data.claims !== undefined) {
      if (!validate168(data.claims, {
        instancePath: instancePath + "/claims",
        parentData: data,
        parentDataProperty: "claims",
        rootData
      })) {
        vErrors = vErrors === null ? validate168.errors : vErrors.concat(validate168.errors);
        errors = vErrors.length;
      }
    }
    if (data.limits !== undefined) {
      if (!validate50(data.limits, {
        instancePath: instancePath + "/limits",
        parentData: data,
        parentDataProperty: "limits",
        rootData
      })) {
        vErrors = vErrors === null ? validate50.errors : vErrors.concat(validate50.errors);
        errors = vErrors.length;
      }
    }
    if (data.requests !== undefined) {
      if (!validate50(data.requests, {
        instancePath: instancePath + "/requests",
        parentData: data,
        parentDataProperty: "requests",
        rootData
      })) {
        vErrors = vErrors === null ? validate50.errors : vErrors.concat(validate50.errors);
        errors = vErrors.length;
      }
    }
  }
  validate167.errors = vErrors;
  return errors === 0;
}
const schema23 = {
  "properties": {
    "matchExpressions": {
      "$ref": "9BW0WuIp1SxhBT4vHohXPUikn0YuwzPq2mNUBC1NsE"
    },
    "matchLabels": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    }
  },
  "type": "object",
  "nullable": true
};
const schema24 = {
  "items": {
    "$ref": "MkwwSDeYoT1APit7w8qsvbKCw8OynjINdeojyPgpPQ"
  },
  "type": "array",
  "nullable": true
};
const schema25 = {
  "properties": {
    "key": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "operator": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "values": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    }
  },
  "required": ["key", "operator"],
  "type": "object"
};
function validate60(data, {
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
    if (data.operator === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "operator"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.key !== undefined) {
      if (!validate26(data.key, {
        instancePath: instancePath + "/key",
        parentData: data,
        parentDataProperty: "key",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.operator !== undefined) {
      if (!validate26(data.operator, {
        instancePath: instancePath + "/operator",
        parentData: data,
        parentDataProperty: "operator",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.values !== undefined) {
      if (!validate29(data.values, {
        instancePath: instancePath + "/values",
        parentData: data,
        parentDataProperty: "values",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
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
  validate60.errors = vErrors;
  return errors === 0;
}
function validate59(data, {
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
      if (!validate60(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate60.errors : vErrors.concat(validate60.errors);
        errors = vErrors.length;
      }
    }
  }
  validate59.errors = vErrors;
  return errors === 0;
}
function validate58(data, {
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
    if (data.matchExpressions !== undefined) {
      if (!validate59(data.matchExpressions, {
        instancePath: instancePath + "/matchExpressions",
        parentData: data,
        parentDataProperty: "matchExpressions",
        rootData
      })) {
        vErrors = vErrors === null ? validate59.errors : vErrors.concat(validate59.errors);
        errors = vErrors.length;
      }
    }
    if (data.matchLabels !== undefined) {
      if (!validate27(data.matchLabels, {
        instancePath: instancePath + "/matchLabels",
        parentData: data,
        parentDataProperty: "matchLabels",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
  }
  validate58.errors = vErrors;
  return errors === 0;
}
function validate154(data, {
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
    if (data.accessModes !== undefined) {
      if (!validate29(data.accessModes, {
        instancePath: instancePath + "/accessModes",
        parentData: data,
        parentDataProperty: "accessModes",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.dataSource !== undefined) {
      if (!validate156(data.dataSource, {
        instancePath: instancePath + "/dataSource",
        parentData: data,
        parentDataProperty: "dataSource",
        rootData
      })) {
        vErrors = vErrors === null ? validate156.errors : vErrors.concat(validate156.errors);
        errors = vErrors.length;
      }
    }
    if (data.dataSourceRef !== undefined) {
      if (!validate161(data.dataSourceRef, {
        instancePath: instancePath + "/dataSourceRef",
        parentData: data,
        parentDataProperty: "dataSourceRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate161.errors : vErrors.concat(validate161.errors);
        errors = vErrors.length;
      }
    }
    if (data.resources !== undefined) {
      if (!validate167(data.resources, {
        instancePath: instancePath + "/resources",
        parentData: data,
        parentDataProperty: "resources",
        rootData
      })) {
        vErrors = vErrors === null ? validate167.errors : vErrors.concat(validate167.errors);
        errors = vErrors.length;
      }
    }
    if (data.selector !== undefined) {
      if (!validate58(data.selector, {
        instancePath: instancePath + "/selector",
        parentData: data,
        parentDataProperty: "selector",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.storageClassName !== undefined) {
      if (!validate23(data.storageClassName, {
        instancePath: instancePath + "/storageClassName",
        parentData: data,
        parentDataProperty: "storageClassName",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeMode !== undefined) {
      if (!validate23(data.volumeMode, {
        instancePath: instancePath + "/volumeMode",
        parentData: data,
        parentDataProperty: "volumeMode",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeName !== undefined) {
      if (!validate23(data.volumeName, {
        instancePath: instancePath + "/volumeName",
        parentData: data,
        parentDataProperty: "volumeName",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate154.errors = vErrors;
  return errors === 0;
}
function validate150(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.apiVersion !== undefined) {
      if (!validate23(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate23(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
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
      if (!validate154(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate154.errors : vErrors.concat(validate154.errors);
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
  validate150.errors = vErrors;
  return errors === 0;
}
function validate149(data, {
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
      if (!validate150(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate150.errors : vErrors.concat(validate150.errors);
        errors = vErrors.length;
      }
    }
  }
  validate149.errors = vErrors;
  return errors === 0;
}
function validate143(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.name === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "name"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.config !== undefined) {
      if (!validate42(data.config, {
        instancePath: instancePath + "/config",
        parentData: data,
        parentDataProperty: "config",
        rootData
      })) {
        vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
        errors = vErrors.length;
      }
    }
    if (data.count !== undefined) {
      if (!validate31(data.count, {
        instancePath: instancePath + "/count",
        parentData: data,
        parentDataProperty: "count",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate146(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate146.errors : vErrors.concat(validate146.errors);
        errors = vErrors.length;
      }
    }
    if (data.podTemplate !== undefined) {
      if (!validate42(data.podTemplate, {
        instancePath: instancePath + "/podTemplate",
        parentData: data,
        parentDataProperty: "podTemplate",
        rootData
      })) {
        vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeClaimTemplates !== undefined) {
      if (!validate149(data.volumeClaimTemplates, {
        instancePath: instancePath + "/volumeClaimTemplates",
        parentData: data,
        parentDataProperty: "volumeClaimTemplates",
        rootData
      })) {
        vErrors = vErrors === null ? validate149.errors : vErrors.concat(validate149.errors);
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
  validate143.errors = vErrors;
  return errors === 0;
}
function validate142(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    if (data.length < 1) {
      const err0 = {
        instancePath,
        schemaPath: "#/minItems",
        keyword: "minItems",
        params: {
          limit: 1
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate143(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate143.errors : vErrors.concat(validate143.errors);
        errors = vErrors.length;
      }
    }
  } else {
    const err1 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate142.errors = vErrors;
  return errors === 0;
}
const schema60 = {
  "properties": {
    "metadata": {
      "$ref": "jynRVyKr0doMQvLMloozBEYX7ZohkIlAIqCnjwO8"
    },
    "spec": {
      "$ref": "OKkOZ06yttFYwQB5NypaoIN8vOMNZt2SaM7FqGwEg"
    }
  },
  "type": "object",
  "nullable": true
};
const schema61 = {
  "properties": {
    "maxUnavailable": {
      "$ref": "uJPY5JwdoQeyZsG50sBXB6uBQV8ScD7PtRRAnILoI3A"
    },
    "minAvailable": {
      "$ref": "uJPY5JwdoQeyZsG50sBXB6uBQV8ScD7PtRRAnILoI3A"
    },
    "selector": {
      "$ref": "Zjt3HFRfql15zSZzpouBNTusTEhVu3UqWLOK7EP6U"
    },
    "unhealthyPodEvictionPolicy": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate187(data, {
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
    if (data.maxUnavailable !== undefined) {
      if (!validate55(data.maxUnavailable, {
        instancePath: instancePath + "/maxUnavailable",
        parentData: data,
        parentDataProperty: "maxUnavailable",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
    if (data.minAvailable !== undefined) {
      if (!validate55(data.minAvailable, {
        instancePath: instancePath + "/minAvailable",
        parentData: data,
        parentDataProperty: "minAvailable",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
    if (data.selector !== undefined) {
      if (!validate58(data.selector, {
        instancePath: instancePath + "/selector",
        parentData: data,
        parentDataProperty: "selector",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.unhealthyPodEvictionPolicy !== undefined) {
      if (!validate23(data.unhealthyPodEvictionPolicy, {
        instancePath: instancePath + "/unhealthyPodEvictionPolicy",
        parentData: data,
        parentDataProperty: "unhealthyPodEvictionPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate187.errors = vErrors;
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
      if (!validate187(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate187.errors : vErrors.concat(validate187.errors);
        errors = vErrors.length;
      }
    }
  }
  validate185.errors = vErrors;
  return errors === 0;
}
const schema62 = {
  "items": {
    "$ref": "R2YUqmN1xuljrhyMlzjp4GgaG7Podqidh58gBXIXj8"
  },
  "type": "array",
  "nullable": true
};
const schema63 = {
  "properties": {
    "elasticsearchRef": {
      "$ref": "Xg136TLrw5fFTUuRAfz0Rz5VqKL6jHe00pGzyr1Ek8"
    },
    "name": {
      "$ref": "98nkBGIQ3d7odskENdXv2JAKmhWIJZNaSjyBGu9gdA"
    }
  },
  "required": ["name"],
  "type": "object"
};
const schema64 = {
  "properties": {
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "serviceName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate196(data, {
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
    if (data.name !== undefined) {
      if (!validate23(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespace !== undefined) {
      if (!validate23(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceName !== undefined) {
      if (!validate23(data.serviceName, {
        instancePath: instancePath + "/serviceName",
        parentData: data,
        parentDataProperty: "serviceName",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate196.errors = vErrors;
  return errors === 0;
}
const schema65 = {
  "minLength": 1,
  "type": "string"
};
function validate201(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (func2(data) < 1) {
      const err0 = {
        instancePath,
        schemaPath: "#/minLength",
        keyword: "minLength",
        params: {
          limit: 1
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
  } else {
    const err1 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "string"
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate201.errors = vErrors;
  return errors === 0;
}
function validate195(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.name === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "name"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.elasticsearchRef !== undefined) {
      if (!validate196(data.elasticsearchRef, {
        instancePath: instancePath + "/elasticsearchRef",
        parentData: data,
        parentDataProperty: "elasticsearchRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate196.errors : vErrors.concat(validate196.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate201(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate201.errors : vErrors.concat(validate201.errors);
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
  validate195.errors = vErrors;
  return errors === 0;
}
function validate194(data, {
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
      if (!validate195(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate195.errors : vErrors.concat(validate195.errors);
        errors = vErrors.length;
      }
    }
  }
  validate194.errors = vErrors;
  return errors === 0;
}
const schema66 = {
  "items": {
    "$ref": "aNaJePrdXUOT1869zAoTrE7CR0zOOi8H8ReImuiSVg"
  },
  "type": "array",
  "nullable": true
};
const schema67 = {
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
const schema68 = {
  "items": {
    "$ref": "G50YyuoAmh7laRmRGIWXREIqPPvqHTQbkoji0JWXzE"
  },
  "type": "array",
  "nullable": true
};
const schema69 = {
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
function validate209(data, {
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
      if (!validate26(data.key, {
        instancePath: instancePath + "/key",
        parentData: data,
        parentDataProperty: "key",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.path !== undefined) {
      if (!validate23(data.path, {
        instancePath: instancePath + "/path",
        parentData: data,
        parentDataProperty: "path",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
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
  validate209.errors = vErrors;
  return errors === 0;
}
function validate208(data, {
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
      if (!validate209(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate209.errors : vErrors.concat(validate209.errors);
        errors = vErrors.length;
      }
    }
  }
  validate208.errors = vErrors;
  return errors === 0;
}
function validate207(data, {
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
      if (!validate208(data.entries, {
        instancePath: instancePath + "/entries",
        parentData: data,
        parentDataProperty: "entries",
        rootData
      })) {
        vErrors = vErrors === null ? validate208.errors : vErrors.concat(validate208.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretName !== undefined) {
      if (!validate26(data.secretName, {
        instancePath: instancePath + "/secretName",
        parentData: data,
        parentDataProperty: "secretName",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
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
  validate207.errors = vErrors;
  return errors === 0;
}
function validate206(data, {
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
      if (!validate207(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate207.errors : vErrors.concat(validate207.errors);
        errors = vErrors.length;
      }
    }
  }
  validate206.errors = vErrors;
  return errors === 0;
}
const schema70 = {
  "properties": {
    "service": {
      "$ref": "8lxBKzrwwH7r0H5rvUw97WJQbjpDUa8c45R1q2jYP0o"
    },
    "tls": {
      "$ref": "5kmPA9sBW9jTnQE1002Kx4EsWY8MyIICzbKbQ8Pgas8"
    }
  },
  "type": "object",
  "nullable": true
};
const schema71 = {
  "properties": {
    "certificate": {
      "$ref": "h7s7ZnEZ5b2epThDOJOuHWxm9t8bDA7yYrqpy6E71uo"
    },
    "certificateAuthorities": {
      "$ref": "ZmZ5SxBcdURr6Ip8UaUjlDrFeYEAkeBYIMhwJSEFo"
    },
    "otherNameSuffix": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "subjectAltNames": {
      "$ref": "Xe5Metcfhjd3odl7YrpapIIvpPiVCrMJGJ3btfgB0"
    }
  },
  "type": "object",
  "nullable": true
};
const schema72 = {
  "properties": {
    "configMapName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate222(data, {
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
    if (data.configMapName !== undefined) {
      if (!validate23(data.configMapName, {
        instancePath: instancePath + "/configMapName",
        parentData: data,
        parentDataProperty: "configMapName",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate222.errors = vErrors;
  return errors === 0;
}
function validate220(data, {
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
      if (!validate105(data.certificate, {
        instancePath: instancePath + "/certificate",
        parentData: data,
        parentDataProperty: "certificate",
        rootData
      })) {
        vErrors = vErrors === null ? validate105.errors : vErrors.concat(validate105.errors);
        errors = vErrors.length;
      }
    }
    if (data.certificateAuthorities !== undefined) {
      if (!validate222(data.certificateAuthorities, {
        instancePath: instancePath + "/certificateAuthorities",
        parentData: data,
        parentDataProperty: "certificateAuthorities",
        rootData
      })) {
        vErrors = vErrors === null ? validate222.errors : vErrors.concat(validate222.errors);
        errors = vErrors.length;
      }
    }
    if (data.otherNameSuffix !== undefined) {
      if (!validate23(data.otherNameSuffix, {
        instancePath: instancePath + "/otherNameSuffix",
        parentData: data,
        parentDataProperty: "otherNameSuffix",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.subjectAltNames !== undefined) {
      if (!validate107(data.subjectAltNames, {
        instancePath: instancePath + "/subjectAltNames",
        parentData: data,
        parentDataProperty: "subjectAltNames",
        rootData
      })) {
        vErrors = vErrors === null ? validate107.errors : vErrors.concat(validate107.errors);
        errors = vErrors.length;
      }
    }
  }
  validate220.errors = vErrors;
  return errors === 0;
}
function validate218(data, {
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
      if (!validate67(data.service, {
        instancePath: instancePath + "/service",
        parentData: data,
        parentDataProperty: "service",
        rootData
      })) {
        vErrors = vErrors === null ? validate67.errors : vErrors.concat(validate67.errors);
        errors = vErrors.length;
      }
    }
    if (data.tls !== undefined) {
      if (!validate220(data.tls, {
        instancePath: instancePath + "/tls",
        parentData: data,
        parentDataProperty: "tls",
        rootData
      })) {
        vErrors = vErrors === null ? validate220.errors : vErrors.concat(validate220.errors);
        errors = vErrors.length;
      }
    }
  }
  validate218.errors = vErrors;
  return errors === 0;
}
const schema73 = {
  "properties": {
    "changeBudget": {
      "$ref": "Hwwm8RyU0bLhbHYGGZYy3Gh9PDmcmOC6r7DEE2aI"
    }
  },
  "type": "object",
  "nullable": true
};
const schema74 = {
  "properties": {
    "maxSurge": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "maxUnavailable": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    }
  },
  "type": "object",
  "nullable": true
};
function validate230(data, {
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
    if (data.maxSurge !== undefined) {
      if (!validate31(data.maxSurge, {
        instancePath: instancePath + "/maxSurge",
        parentData: data,
        parentDataProperty: "maxSurge",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
    if (data.maxUnavailable !== undefined) {
      if (!validate31(data.maxUnavailable, {
        instancePath: instancePath + "/maxUnavailable",
        parentData: data,
        parentDataProperty: "maxUnavailable",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
  }
  validate230.errors = vErrors;
  return errors === 0;
}
function validate229(data, {
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
    if (data.changeBudget !== undefined) {
      if (!validate230(data.changeBudget, {
        instancePath: instancePath + "/changeBudget",
        parentData: data,
        parentDataProperty: "changeBudget",
        rootData
      })) {
        vErrors = vErrors === null ? validate230.errors : vErrors.concat(validate230.errors);
        errors = vErrors.length;
      }
    }
  }
  validate229.errors = vErrors;
  return errors === 0;
}
const schema75 = {
  "enum": ["DeleteOnScaledownOnly", "DeleteOnScaledownAndClusterDeletion"],
  "type": "string",
  "nullable": true
};
function validate236(data, {
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
  if (!(data === "DeleteOnScaledownOnly" || data === "DeleteOnScaledownAndClusterDeletion")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema75.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate236.errors = vErrors;
  return errors === 0;
}
function validate122(data, {
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
    if (data.nodeSets === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "nodeSets"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.version === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "version"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.auth !== undefined) {
      if (!validate123(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate123.errors : vErrors.concat(validate123.errors);
        errors = vErrors.length;
      }
    }
    if (data.http !== undefined) {
      if (!validate127(data.http, {
        instancePath: instancePath + "/http",
        parentData: data,
        parentDataProperty: "http",
        rootData
      })) {
        vErrors = vErrors === null ? validate127.errors : vErrors.concat(validate127.errors);
        errors = vErrors.length;
      }
    }
    if (data.image !== undefined) {
      if (!validate23(data.image, {
        instancePath: instancePath + "/image",
        parentData: data,
        parentDataProperty: "image",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.monitoring !== undefined) {
      if (!validate138(data.monitoring, {
        instancePath: instancePath + "/monitoring",
        parentData: data,
        parentDataProperty: "monitoring",
        rootData
      })) {
        vErrors = vErrors === null ? validate138.errors : vErrors.concat(validate138.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodeSets !== undefined) {
      if (!validate142(data.nodeSets, {
        instancePath: instancePath + "/nodeSets",
        parentData: data,
        parentDataProperty: "nodeSets",
        rootData
      })) {
        vErrors = vErrors === null ? validate142.errors : vErrors.concat(validate142.errors);
        errors = vErrors.length;
      }
    }
    if (data.podDisruptionBudget !== undefined) {
      if (!validate185(data.podDisruptionBudget, {
        instancePath: instancePath + "/podDisruptionBudget",
        parentData: data,
        parentDataProperty: "podDisruptionBudget",
        rootData
      })) {
        vErrors = vErrors === null ? validate185.errors : vErrors.concat(validate185.errors);
        errors = vErrors.length;
      }
    }
    if (data.remoteClusters !== undefined) {
      if (!validate194(data.remoteClusters, {
        instancePath: instancePath + "/remoteClusters",
        parentData: data,
        parentDataProperty: "remoteClusters",
        rootData
      })) {
        vErrors = vErrors === null ? validate194.errors : vErrors.concat(validate194.errors);
        errors = vErrors.length;
      }
    }
    if (data.revisionHistoryLimit !== undefined) {
      if (!validate31(data.revisionHistoryLimit, {
        instancePath: instancePath + "/revisionHistoryLimit",
        parentData: data,
        parentDataProperty: "revisionHistoryLimit",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
    if (data.secureSettings !== undefined) {
      if (!validate206(data.secureSettings, {
        instancePath: instancePath + "/secureSettings",
        parentData: data,
        parentDataProperty: "secureSettings",
        rootData
      })) {
        vErrors = vErrors === null ? validate206.errors : vErrors.concat(validate206.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAccountName !== undefined) {
      if (!validate23(data.serviceAccountName, {
        instancePath: instancePath + "/serviceAccountName",
        parentData: data,
        parentDataProperty: "serviceAccountName",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.transport !== undefined) {
      if (!validate218(data.transport, {
        instancePath: instancePath + "/transport",
        parentData: data,
        parentDataProperty: "transport",
        rootData
      })) {
        vErrors = vErrors === null ? validate218.errors : vErrors.concat(validate218.errors);
        errors = vErrors.length;
      }
    }
    if (data.updateStrategy !== undefined) {
      if (!validate229(data.updateStrategy, {
        instancePath: instancePath + "/updateStrategy",
        parentData: data,
        parentDataProperty: "updateStrategy",
        rootData
      })) {
        vErrors = vErrors === null ? validate229.errors : vErrors.concat(validate229.errors);
        errors = vErrors.length;
      }
    }
    if (data.version !== undefined) {
      if (!validate26(data.version, {
        instancePath: instancePath + "/version",
        parentData: data,
        parentDataProperty: "version",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeClaimDeletePolicy !== undefined) {
      if (!validate236(data.volumeClaimDeletePolicy, {
        instancePath: instancePath + "/volumeClaimDeletePolicy",
        parentData: data,
        parentDataProperty: "volumeClaimDeletePolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate236.errors : vErrors.concat(validate236.errors);
        errors = vErrors.length;
      }
    }
  }
  validate122.errors = vErrors;
  return errors === 0;
}
const schema76 = {
  "properties": {
    "availableNodes": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "conditions": {
      "$ref": "QMo71c8yF8mHWf5aKfC2S1PAcne8EpTv1EJTDeYQ4"
    },
    "health": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "inProgressOperations": {
      "$ref": "rEL9LsMOSOLeRfxiZ8QLFfcbNnSxZGMQSkbshCfaw"
    },
    "monitoringAssociationStatus": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "observedGeneration": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "phase": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "version": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema77 = {
  "items": {
    "$ref": "lDcpaFrQzSICs2VpwkoJyMGHuoDpWZshwNz0P96Lc"
  },
  "type": "array",
  "nullable": true
};
const schema78 = {
  "properties": {
    "lastTransitionTime": {
      "$ref": "thZzwpySeU7LsVtTYjwqN1mWUAwFAnezim8OMie8k"
    },
    "message": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "status": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "type": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["status", "type"],
  "type": "object"
};
const schema37 = {
  "format": "date-time",
  "type": "string",
  "nullable": true
};
const formats4 = formats["date-time"];
function validate112(data, {
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
  if (typeof data === "string") {
    if (!formats4.validate(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/format",
        keyword: "format",
        params: {
          format: "date-time"
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
  validate112.errors = vErrors;
  return errors === 0;
}
function validate242(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.status === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "status"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.type === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "type"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.lastTransitionTime !== undefined) {
      if (!validate112(data.lastTransitionTime, {
        instancePath: instancePath + "/lastTransitionTime",
        parentData: data,
        parentDataProperty: "lastTransitionTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate112.errors : vErrors.concat(validate112.errors);
        errors = vErrors.length;
      }
    }
    if (data.message !== undefined) {
      if (!validate23(data.message, {
        instancePath: instancePath + "/message",
        parentData: data,
        parentDataProperty: "message",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate26(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.type !== undefined) {
      if (!validate26(data.type, {
        instancePath: instancePath + "/type",
        parentData: data,
        parentDataProperty: "type",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
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
  validate242.errors = vErrors;
  return errors === 0;
}
function validate241(data, {
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
      if (!validate242(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate242.errors : vErrors.concat(validate242.errors);
        errors = vErrors.length;
      }
    }
  }
  validate241.errors = vErrors;
  return errors === 0;
}
const schema79 = {
  "properties": {
    "downscale": {
      "$ref": "rxJOKH7kNeTvMw4Op4goHW4bo2AfBkTBrwQlkg8ZX4"
    },
    "upgrade": {
      "$ref": "Hw2qvM5YBC4BlBbEp8SUdHQZAQTu4LoQXNmQglNrM"
    },
    "upscale": {
      "$ref": "gmQnAE1JJNkF49KoUWZ3OqElbT0MEaJCWkTSmqHwPFg"
    }
  },
  "required": ["downscale", "upgrade", "upscale"],
  "type": "object",
  "nullable": true
};
const schema80 = {
  "properties": {
    "lastUpdatedTime": {
      "$ref": "thZzwpySeU7LsVtTYjwqN1mWUAwFAnezim8OMie8k"
    },
    "nodes": {
      "$ref": "45pav0sjU3GEzb4ceQCD5TORUteMg8mFjaQnxhay5E"
    },
    "stalled": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "type": "object"
};
const schema81 = {
  "items": {
    "$ref": "1K7gL9WfoHYf9nIbLANjswD5o6ryAY5bev8eNIk"
  },
  "type": "array",
  "nullable": true
};
const schema82 = {
  "properties": {
    "explanation": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "shutdownStatus": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["name", "shutdownStatus"],
  "type": "object"
};
function validate254(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.name === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "name"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.shutdownStatus === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "shutdownStatus"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.explanation !== undefined) {
      if (!validate23(data.explanation, {
        instancePath: instancePath + "/explanation",
        parentData: data,
        parentDataProperty: "explanation",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate26(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.shutdownStatus !== undefined) {
      if (!validate26(data.shutdownStatus, {
        instancePath: instancePath + "/shutdownStatus",
        parentData: data,
        parentDataProperty: "shutdownStatus",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
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
  validate254.errors = vErrors;
  return errors === 0;
}
function validate253(data, {
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
      if (!validate254(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate254.errors : vErrors.concat(validate254.errors);
        errors = vErrors.length;
      }
    }
  }
  validate253.errors = vErrors;
  return errors === 0;
}
function validate251(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.lastUpdatedTime !== undefined) {
      if (!validate112(data.lastUpdatedTime, {
        instancePath: instancePath + "/lastUpdatedTime",
        parentData: data,
        parentDataProperty: "lastUpdatedTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate112.errors : vErrors.concat(validate112.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodes !== undefined) {
      if (!validate253(data.nodes, {
        instancePath: instancePath + "/nodes",
        parentData: data,
        parentDataProperty: "nodes",
        rootData
      })) {
        vErrors = vErrors === null ? validate253.errors : vErrors.concat(validate253.errors);
        errors = vErrors.length;
      }
    }
    if (data.stalled !== undefined) {
      if (!validate32(data.stalled, {
        instancePath: instancePath + "/stalled",
        parentData: data,
        parentDataProperty: "stalled",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
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
  validate251.errors = vErrors;
  return errors === 0;
}
const schema83 = {
  "properties": {
    "lastUpdatedTime": {
      "$ref": "thZzwpySeU7LsVtTYjwqN1mWUAwFAnezim8OMie8k"
    },
    "nodes": {
      "$ref": "eOApNAXAAbPLX6jxHyRSyP5eSkqhPwdsVULqwCnqlPc"
    }
  },
  "type": "object"
};
const schema84 = {
  "items": {
    "$ref": "DM82U0RuO6hg2BWhcd3HxWnZ3tFw4y7ztGx5iupbY"
  },
  "type": "array",
  "nullable": true
};
const schema85 = {
  "properties": {
    "message": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "predicate": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "status": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["name", "status"],
  "type": "object"
};
function validate265(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.name === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "name"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.status === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "status"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.message !== undefined) {
      if (!validate23(data.message, {
        instancePath: instancePath + "/message",
        parentData: data,
        parentDataProperty: "message",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate26(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.predicate !== undefined) {
      if (!validate23(data.predicate, {
        instancePath: instancePath + "/predicate",
        parentData: data,
        parentDataProperty: "predicate",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate26(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
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
  validate265.errors = vErrors;
  return errors === 0;
}
function validate264(data, {
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
      if (!validate265(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate265.errors : vErrors.concat(validate265.errors);
        errors = vErrors.length;
      }
    }
  }
  validate264.errors = vErrors;
  return errors === 0;
}
function validate262(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.lastUpdatedTime !== undefined) {
      if (!validate112(data.lastUpdatedTime, {
        instancePath: instancePath + "/lastUpdatedTime",
        parentData: data,
        parentDataProperty: "lastUpdatedTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate112.errors : vErrors.concat(validate112.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodes !== undefined) {
      if (!validate264(data.nodes, {
        instancePath: instancePath + "/nodes",
        parentData: data,
        parentDataProperty: "nodes",
        rootData
      })) {
        vErrors = vErrors === null ? validate264.errors : vErrors.concat(validate264.errors);
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
  validate262.errors = vErrors;
  return errors === 0;
}
const schema86 = {
  "properties": {
    "lastUpdatedTime": {
      "$ref": "thZzwpySeU7LsVtTYjwqN1mWUAwFAnezim8OMie8k"
    },
    "nodes": {
      "$ref": "lKQilSOTRm1KqEfhlKtGoUknSYyuNkAP9x10JK56HM"
    }
  },
  "type": "object"
};
const schema87 = {
  "items": {
    "$ref": "X9VmrBIcEV0XZmJ8IoJd5nQcUJ9vr9ynNtlE1pnSdI"
  },
  "type": "array",
  "nullable": true
};
const schema88 = {
  "properties": {
    "message": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "status": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["name", "status"],
  "type": "object"
};
function validate276(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.name === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "name"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.status === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "status"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.message !== undefined) {
      if (!validate23(data.message, {
        instancePath: instancePath + "/message",
        parentData: data,
        parentDataProperty: "message",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate26(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate26(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
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
  validate276.errors = vErrors;
  return errors === 0;
}
function validate275(data, {
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
      if (!validate276(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate276.errors : vErrors.concat(validate276.errors);
        errors = vErrors.length;
      }
    }
  }
  validate275.errors = vErrors;
  return errors === 0;
}
function validate273(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.lastUpdatedTime !== undefined) {
      if (!validate112(data.lastUpdatedTime, {
        instancePath: instancePath + "/lastUpdatedTime",
        parentData: data,
        parentDataProperty: "lastUpdatedTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate112.errors : vErrors.concat(validate112.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodes !== undefined) {
      if (!validate275(data.nodes, {
        instancePath: instancePath + "/nodes",
        parentData: data,
        parentDataProperty: "nodes",
        rootData
      })) {
        vErrors = vErrors === null ? validate275.errors : vErrors.concat(validate275.errors);
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
  validate273.errors = vErrors;
  return errors === 0;
}
function validate250(data, {
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
    if (data.downscale === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "downscale"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.upgrade === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "upgrade"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.upscale === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "upscale"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.downscale !== undefined) {
      if (!validate251(data.downscale, {
        instancePath: instancePath + "/downscale",
        parentData: data,
        parentDataProperty: "downscale",
        rootData
      })) {
        vErrors = vErrors === null ? validate251.errors : vErrors.concat(validate251.errors);
        errors = vErrors.length;
      }
    }
    if (data.upgrade !== undefined) {
      if (!validate262(data.upgrade, {
        instancePath: instancePath + "/upgrade",
        parentData: data,
        parentDataProperty: "upgrade",
        rootData
      })) {
        vErrors = vErrors === null ? validate262.errors : vErrors.concat(validate262.errors);
        errors = vErrors.length;
      }
    }
    if (data.upscale !== undefined) {
      if (!validate273(data.upscale, {
        instancePath: instancePath + "/upscale",
        parentData: data,
        parentDataProperty: "upscale",
        rootData
      })) {
        vErrors = vErrors === null ? validate273.errors : vErrors.concat(validate273.errors);
        errors = vErrors.length;
      }
    }
  }
  validate250.errors = vErrors;
  return errors === 0;
}
const schema89 = {
  "format": "int64",
  "type": "integer",
  "nullable": true
};
const formats6 = formats.int64;
function validate285(data, {
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
    if (!formats6.validate(data)) {
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
  validate285.errors = vErrors;
  return errors === 0;
}
function validate239(data, {
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
    if (data.availableNodes !== undefined) {
      if (!validate31(data.availableNodes, {
        instancePath: instancePath + "/availableNodes",
        parentData: data,
        parentDataProperty: "availableNodes",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
    if (data.conditions !== undefined) {
      if (!validate241(data.conditions, {
        instancePath: instancePath + "/conditions",
        parentData: data,
        parentDataProperty: "conditions",
        rootData
      })) {
        vErrors = vErrors === null ? validate241.errors : vErrors.concat(validate241.errors);
        errors = vErrors.length;
      }
    }
    if (data.health !== undefined) {
      if (!validate23(data.health, {
        instancePath: instancePath + "/health",
        parentData: data,
        parentDataProperty: "health",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.inProgressOperations !== undefined) {
      if (!validate250(data.inProgressOperations, {
        instancePath: instancePath + "/inProgressOperations",
        parentData: data,
        parentDataProperty: "inProgressOperations",
        rootData
      })) {
        vErrors = vErrors === null ? validate250.errors : vErrors.concat(validate250.errors);
        errors = vErrors.length;
      }
    }
    if (data.monitoringAssociationStatus !== undefined) {
      if (!validate27(data.monitoringAssociationStatus, {
        instancePath: instancePath + "/monitoringAssociationStatus",
        parentData: data,
        parentDataProperty: "monitoringAssociationStatus",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.observedGeneration !== undefined) {
      if (!validate285(data.observedGeneration, {
        instancePath: instancePath + "/observedGeneration",
        parentData: data,
        parentDataProperty: "observedGeneration",
        rootData
      })) {
        vErrors = vErrors === null ? validate285.errors : vErrors.concat(validate285.errors);
        errors = vErrors.length;
      }
    }
    if (data.phase !== undefined) {
      if (!validate23(data.phase, {
        instancePath: instancePath + "/phase",
        parentData: data,
        parentDataProperty: "phase",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.version !== undefined) {
      if (!validate23(data.version, {
        instancePath: instancePath + "/version",
        parentData: data,
        parentDataProperty: "version",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate239.errors = vErrors;
  return errors === 0;
}
function validate113(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="elasticsearch.k8s.elastic.co.v1.Elasticsearch" */;
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
      if (!validate114(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate114.errors : vErrors.concat(validate114.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate116(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate116.errors : vErrors.concat(validate116.errors);
        errors = vErrors.length;
      }
    }
    if (data.metadata !== undefined) {
      if (!validate118(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate118.errors : vErrors.concat(validate118.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate122(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate122.errors : vErrors.concat(validate122.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate239(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate239.errors : vErrors.concat(validate239.errors);
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
  validate113.errors = vErrors;
  return errors === 0;
}