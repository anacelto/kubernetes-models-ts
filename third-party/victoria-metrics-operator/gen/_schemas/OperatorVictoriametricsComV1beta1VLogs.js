import { formats } from "@kubernetes-models/validate";
export const validate = validate49;
const schema22 = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "$ref": "7JkRgKIU61RDA2KaYizbbUZAuqom514Kz85N2Qznlo"
    },
    "kind": {
      "$ref": "caqwAJt3wP5sE1eKJtbEMotAKwZ65oXqIUc0BNUvd8"
    },
    "metadata": {
      "$ref": "a6f0oUEaFqHmymdwnqPORTNOTU7GczWAkwGD0uYU"
    },
    "spec": {
      "$ref": "lgcGGJaLcVS7CNPzaXcsqNpbndVNcXrdEgq4OBSng"
    },
    "status": {
      "$ref": "K0y4JEuaGD6XzvEXcJBgXCjnaXa1oZSnIynuZvoqI"
    }
  },
  "required": ["apiVersion", "kind"],
  "$id": "operator.victoriametrics.com.v1beta1.VLogs"
};
const schema23 = {
  "type": "string",
  "enum": ["operator.victoriametrics.com/v1beta1"]
};
function validate50(data, {
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
  if (!(data === "operator.victoriametrics.com/v1beta1")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema23.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate50.errors = vErrors;
  return errors === 0;
}
const schema24 = {
  "type": "string",
  "enum": ["VLogs"]
};
function validate52(data, {
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
  if (!(data === "VLogs")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema24.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate52.errors = vErrors;
  return errors === 0;
}
const schema25 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
};
const schema26 = {};
import { validate as validate55 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
function validate54(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate55(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
      errors = vErrors.length;
    }
  }
  validate54.errors = vErrors;
  return errors === 0;
}
const schema27 = {
  "properties": {
    "affinity": {
      "$ref": "wnCl8zCvz1PLbyEivJTcktRgDZuzOGT9FYulvrA2T8w"
    },
    "configMaps": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "containers": {
      "$ref": "pCS7T8aV05giunb7s9B6L9KXKhsAHJlzSFxVcbmWgs"
    },
    "disableSelfServiceScrape": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "dnsConfig": {
      "$ref": "dk9zWAxRKxR0xWoqRQ6GT7JLCixi47gW8OXMrFt3s"
    },
    "dnsPolicy": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "extraArgs": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "extraEnvs": {
      "$ref": "TRiLWexGqzFHZSGEondlotuMC7q1zqv6RPK5B3ccE"
    },
    "futureRetention": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "host_aliases": {
      "$ref": "5MWDwEVEHtLj7phXIhfn8FkfVDV2GrmVP2upiAixU"
    },
    "hostAliases": {
      "$ref": "5MWDwEVEHtLj7phXIhfn8FkfVDV2GrmVP2upiAixU"
    },
    "hostNetwork": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "image": {
      "$ref": "ADwpFonH56gDbsq9jykBKGcSt8tY1TPu5FE99huvJk"
    },
    "imagePullSecrets": {
      "$ref": "wYb0JT25mTSwRer7ZdQj9ETTR3jt94ISSvAy2nuU"
    },
    "initContainers": {
      "$ref": "pCS7T8aV05giunb7s9B6L9KXKhsAHJlzSFxVcbmWgs"
    },
    "livenessProbe": {
      "$ref": "wnCl8zCvz1PLbyEivJTcktRgDZuzOGT9FYulvrA2T8w"
    },
    "logFormat": {
      "$ref": "rfOH5CQS63FjQHP5kdmERfXWNXAo26IMBpjy4UFuE"
    },
    "logIngestedRows": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "logLevel": {
      "$ref": "NkLIEjSwjZtu62Y858iatewqF7dyiC33RIdnZuvpTs"
    },
    "logNewStreams": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "minReadySeconds": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "nodeSelector": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "paused": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "podMetadata": {
      "$ref": "dw9Aj87JbDhskFYjQ9xyC2ziWVIvXd7xite3XAESo4"
    },
    "port": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "priorityClassName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "readinessGates": {
      "$ref": "Q6N7tALrvkRTPyPygAPvBhRBXKuUnzIstnLvap8aNpo"
    },
    "readinessProbe": {
      "$ref": "wnCl8zCvz1PLbyEivJTcktRgDZuzOGT9FYulvrA2T8w"
    },
    "removePvcAfterDelete": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "replicaCount": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "resources": {
      "$ref": "MwxOFQf7SDwNxgfa7EwX9dt7776AqT8sAlMcBeXt9HM"
    },
    "retentionPeriod": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "revisionHistoryLimitCount": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "runtimeClassName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "schedulerName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "secrets": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "securityContext": {
      "$ref": "wnCl8zCvz1PLbyEivJTcktRgDZuzOGT9FYulvrA2T8w"
    },
    "serviceAccountName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "serviceScrapeSpec": {
      "$ref": "JNKnKcB2KLS6rAod2MAjg7GlQCSnnFmLaS0yB9CJ0"
    },
    "serviceSpec": {
      "$ref": "CbMofI2Qobm7mz4YkKQVA5ogPMB2jCfEqTx3opXG4"
    },
    "startupProbe": {
      "$ref": "wnCl8zCvz1PLbyEivJTcktRgDZuzOGT9FYulvrA2T8w"
    },
    "storage": {
      "$ref": "Pu53kDxV14dTJYrDJY7xCXfFCsREC2Sce5Hplm4dVM"
    },
    "storageDataPath": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "storageMetadata": {
      "$ref": "dw9Aj87JbDhskFYjQ9xyC2ziWVIvXd7xite3XAESo4"
    },
    "terminationGracePeriodSeconds": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "tolerations": {
      "$ref": "0n4c9hC8BjWXgqJPcgtzXIbgzIfyT58Oy1pU5nsoec"
    },
    "topologySpreadConstraints": {
      "$ref": "gslmF32OJlVA9ZUQp2003pMWfgCADgoVphxh18JKMlA"
    },
    "useDefaultResources": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "useStrictSecurity": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "volumeMounts": {
      "$ref": "MwEW3cXYTOIY2SDIx0pDe3kixu4eIgg9HqehegFCM"
    },
    "volumes": {
      "$ref": "pCS7T8aV05giunb7s9B6L9KXKhsAHJlzSFxVcbmWgs"
    }
  },
  "required": ["retentionPeriod"],
  "type": "object",
  "nullable": true
};
const schema14 = {
  "type": "object",
  "properties": {},
  "nullable": true
};
function validate34(data, {
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
  validate34.errors = vErrors;
  return errors === 0;
}
const schema6 = {
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "array",
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
const schema12 = {
  "items": {
    "$ref": "fSDKJG8EfYEriX1dMRcwLAlVMmg19XmSkESlSfFyEo"
  },
  "type": "array",
  "nullable": true
};
const schema13 = {
  "required": ["name"],
  "type": "object",
  "properties": {}
};
function validate32(data, {
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
  validate32.errors = vErrors;
  return errors === 0;
}
function validate31(data, {
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
      if (!validate32(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
        errors = vErrors.length;
      }
    }
  }
  validate31.errors = vErrors;
  return errors === 0;
}
const schema11 = {
  "type": "boolean",
  "nullable": true
};
function validate30(data, {
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
  validate30.errors = vErrors;
  return errors === 0;
}
const schema28 = {
  "items": {
    "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
  },
  "properties": {
    "nameservers": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "options": {
      "$ref": "3dFlzwy8zGt7y3hMWXnwInffukRQoHbmEF3xGVNI"
    },
    "searches": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    }
  },
  "type": "object",
  "nullable": true
};
const schema29 = {};
function validate64(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  validate64.errors = null;
  return true;
}
const schema30 = {
  "items": {
    "$ref": "sWfncG59c1XfNxmkMXW89j5rdj0YnP54Zpfo5QkH10"
  },
  "type": "array",
  "nullable": true
};
const schema31 = {
  "properties": {
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "value": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
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
function validate68(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
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
    if (data.value !== undefined) {
      if (!validate24(data.value, {
        instancePath: instancePath + "/value",
        parentData: data,
        parentDataProperty: "value",
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
  validate68.errors = vErrors;
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
      if (!validate68(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate68.errors : vErrors.concat(validate68.errors);
        errors = vErrors.length;
      }
    }
  }
  validate67.errors = vErrors;
  return errors === 0;
}
function validate63(data, {
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
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate64(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate64.errors : vErrors.concat(validate64.errors);
        errors = vErrors.length;
      }
    }
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.nameservers !== undefined) {
      if (!validate21(data.nameservers, {
        instancePath: instancePath + "/nameservers",
        parentData: data,
        parentDataProperty: "nameservers",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.options !== undefined) {
      if (!validate67(data.options, {
        instancePath: instancePath + "/options",
        parentData: data,
        parentDataProperty: "options",
        rootData
      })) {
        vErrors = vErrors === null ? validate67.errors : vErrors.concat(validate67.errors);
        errors = vErrors.length;
      }
    }
    if (data.searches !== undefined) {
      if (!validate21(data.searches, {
        instancePath: instancePath + "/searches",
        parentData: data,
        parentDataProperty: "searches",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate63.errors = vErrors;
  return errors === 0;
}
const schema15 = {
  "additionalProperties": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "object",
  "properties": {},
  "nullable": true
};
function validate35(data, {
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
  validate35.errors = vErrors;
  return errors === 0;
}
const schema32 = {
  "items": {
    "$ref": "LOFEJ9Bix8H95Xag7L6Ux3aSRaP4D4gyiAmzGwzc"
  },
  "type": "array",
  "nullable": true
};
const schema33 = {
  "properties": {
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "value": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["name"],
  "type": "object"
};
function validate78(data, {
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
      if (!validate22(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.value !== undefined) {
      if (!validate24(data.value, {
        instancePath: instancePath + "/value",
        parentData: data,
        parentDataProperty: "value",
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
  validate78.errors = vErrors;
  return errors === 0;
}
function validate77(data, {
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
      if (!validate78(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate78.errors : vErrors.concat(validate78.errors);
        errors = vErrors.length;
      }
    }
  }
  validate77.errors = vErrors;
  return errors === 0;
}
const schema9 = {
  "items": {
    "$ref": "IX3OlwxoKRMSjhCltCPJOVjPaBEO4EyMsvYuOuXjxQg"
  },
  "type": "array",
  "nullable": true
};
const schema10 = {
  "properties": {
    "hostnames": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "ip": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["ip"],
  "type": "object"
};
function validate26(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.ip === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "ip"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.hostnames !== undefined) {
      if (!validate21(data.hostnames, {
        instancePath: instancePath + "/hostnames",
        parentData: data,
        parentDataProperty: "hostnames",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.ip !== undefined) {
      if (!validate22(data.ip, {
        instancePath: instancePath + "/ip",
        parentData: data,
        parentDataProperty: "ip",
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
  validate26.errors = vErrors;
  return errors === 0;
}
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
  validate25.errors = vErrors;
  return errors === 0;
}
const schema34 = {
  "properties": {
    "pullPolicy": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "repository": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "tag": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate87(data, {
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
    if (data.pullPolicy !== undefined) {
      if (!validate24(data.pullPolicy, {
        instancePath: instancePath + "/pullPolicy",
        parentData: data,
        parentDataProperty: "pullPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.repository !== undefined) {
      if (!validate24(data.repository, {
        instancePath: instancePath + "/repository",
        parentData: data,
        parentDataProperty: "repository",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.tag !== undefined) {
      if (!validate24(data.tag, {
        instancePath: instancePath + "/tag",
        parentData: data,
        parentDataProperty: "tag",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate87.errors = vErrors;
  return errors === 0;
}
const schema35 = {
  "items": {
    "$ref": "lX4IaYIZZv1DIKZ67DpEDlNr31ePF1qx2EUDHqZRM4"
  },
  "type": "array",
  "nullable": true
};
const schema36 = {
  "properties": {
    "name": {
      "$ref": "ylFKgRADFnj8zsAqNcbZrvIOQI64FUWlOFS2V8uyo"
    }
  },
  "type": "object"
};
const schema37 = {
  "default": "",
  "type": "string",
  "nullable": true
};
function validate94(data, {
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
  validate94.errors = vErrors;
  return errors === 0;
}
function validate93(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.name !== undefined) {
      if (!validate94(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate94.errors : vErrors.concat(validate94.errors);
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
  validate93.errors = vErrors;
  return errors === 0;
}
function validate92(data, {
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
      if (!validate93(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate93.errors : vErrors.concat(validate93.errors);
        errors = vErrors.length;
      }
    }
  }
  validate92.errors = vErrors;
  return errors === 0;
}
const schema38 = {
  "enum": ["default", "json"],
  "type": "string",
  "nullable": true
};
function validate100(data, {
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
  if (!(data === "default" || data === "json")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema38.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate100.errors = vErrors;
  return errors === 0;
}
const schema39 = {
  "enum": ["INFO", "WARN", "ERROR", "FATAL", "PANIC"],
  "type": "string",
  "nullable": true
};
function validate103(data, {
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
  if (!(data === "INFO" || data === "WARN" || data === "ERROR" || data === "FATAL" || data === "PANIC")) {
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
  validate103.errors = vErrors;
  return errors === 0;
}
const schema16 = {
  "format": "int32",
  "type": "integer",
  "nullable": true
};
const formats0 = formats.int32;
function validate37(data, {
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
  validate37.errors = vErrors;
  return errors === 0;
}
const schema20 = {
  "properties": {
    "annotations": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "labels": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate44(data, {
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
      if (!validate35(data.annotations, {
        instancePath: instancePath + "/annotations",
        parentData: data,
        parentDataProperty: "annotations",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.labels !== undefined) {
      if (!validate35(data.labels, {
        instancePath: instancePath + "/labels",
        parentData: data,
        parentDataProperty: "labels",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
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
  }
  validate44.errors = vErrors;
  return errors === 0;
}
const schema40 = {
  "items": {
    "$ref": "7b4jhx4uNqXqCFn2w8NkgAjv38EtTlcang4jjJrU"
  },
  "type": "array",
  "nullable": true
};
const schema41 = {
  "properties": {
    "conditionType": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["conditionType"],
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
    if (data.conditionType === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "conditionType"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.conditionType !== undefined) {
      if (!validate22(data.conditionType, {
        instancePath: instancePath + "/conditionType",
        parentData: data,
        parentDataProperty: "conditionType",
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
const schema42 = {
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
const schema43 = {
  "items": {
    "$ref": "HN5PKMIdyNeW2tH5k7qzNtrzheocymAho1Vd1ZpPn9c"
  },
  "type": "array",
  "nullable": true
};
const schema44 = {
  "properties": {
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["name"],
  "type": "object"
};
function validate122(data, {
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
      if (!validate22(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
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
  validate122.errors = vErrors;
  return errors === 0;
}
function validate121(data, {
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
      if (!validate122(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate122.errors : vErrors.concat(validate122.errors);
        errors = vErrors.length;
      }
    }
  }
  validate121.errors = vErrors;
  return errors === 0;
}
const schema17 = {
  "additionalProperties": {
    "$ref": "l7oaIcmo24pLi7XxCQ3euA6o54Bu2nt1fJ44v0vO04"
  },
  "type": "object",
  "properties": {},
  "nullable": true
};
const schema18 = {
  "anyOf": [{
    "$ref": "vMERCWCezVsdN7cIwlJvWJTP5QRRevuFDHNM3fdV8Q"
  }, {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  }],
  "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
};
const schema19 = {
  "type": "integer"
};
function validate40(data, {
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
  validate40.errors = vErrors;
  return errors === 0;
}
const pattern0 = new RegExp("^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$", "u");
function validate39(data, {
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
  if (!validate40(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs2 = errors;
    if (!validate22(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
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
  validate39.errors = vErrors;
  return errors === 0;
}
function validate38(data, {
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
      if (!validate39(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
        rootData
      })) {
        vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
        errors = vErrors.length;
      }
    }
  }
  validate38.errors = vErrors;
  return errors === 0;
}
function validate120(data, {
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
      if (!validate121(data.claims, {
        instancePath: instancePath + "/claims",
        parentData: data,
        parentDataProperty: "claims",
        rootData
      })) {
        vErrors = vErrors === null ? validate121.errors : vErrors.concat(validate121.errors);
        errors = vErrors.length;
      }
    }
    if (data.limits !== undefined) {
      if (!validate38(data.limits, {
        instancePath: instancePath + "/limits",
        parentData: data,
        parentDataProperty: "limits",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
        errors = vErrors.length;
      }
    }
    if (data.requests !== undefined) {
      if (!validate38(data.requests, {
        instancePath: instancePath + "/requests",
        parentData: data,
        parentDataProperty: "requests",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
        errors = vErrors.length;
      }
    }
  }
  validate120.errors = vErrors;
  return errors === 0;
}
const schema45 = {
  "required": ["endpoints"],
  "type": "object",
  "properties": {},
  "nullable": true
};
function validate136(data, {
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
    if (data.endpoints === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "endpoints"
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
  validate136.errors = vErrors;
  return errors === 0;
}
const schema46 = {
  "properties": {
    "metadata": {
      "$ref": "dw9Aj87JbDhskFYjQ9xyC2ziWVIvXd7xite3XAESo4"
    },
    "spec": {
      "$ref": "LHTa3xan4hAuiiV93WwpRLsGuslSrjGnUiRd62GaY"
    },
    "useAsDefault": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "required": ["spec"],
  "type": "object",
  "nullable": true
};
const schema47 = {
  "type": "object",
  "properties": {}
};
function validate140(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data))) {
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
    if (data.metadata !== undefined) {
      if (!validate44(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate44.errors : vErrors.concat(validate44.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate140(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate140.errors : vErrors.concat(validate140.errors);
        errors = vErrors.length;
      }
    }
    if (data.useAsDefault !== undefined) {
      if (!validate30(data.useAsDefault, {
        instancePath: instancePath + "/useAsDefault",
        parentData: data,
        parentDataProperty: "useAsDefault",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
  }
  validate138.errors = vErrors;
  return errors === 0;
}
const schema48 = {
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
      "$ref": "7WXa2aF6GMGgfmkZvnQ0mQJTzClD5QYxEdLx0dV7xuQ"
    },
    "selector": {
      "$ref": "Zjt3HFRfql15zSZzpouBNTusTEhVu3UqWLOK7EP6U"
    },
    "storageClassName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "volumeAttributesClassName": {
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
const schema49 = {
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
function validate147(data, {
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
      if (!validate24(data.apiGroup, {
        instancePath: instancePath + "/apiGroup",
        parentData: data,
        parentDataProperty: "apiGroup",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate22(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate22(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate147.errors = vErrors;
  return errors === 0;
}
const schema50 = {
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
function validate152(data, {
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
      if (!validate24(data.apiGroup, {
        instancePath: instancePath + "/apiGroup",
        parentData: data,
        parentDataProperty: "apiGroup",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate22(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate22(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
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
  validate152.errors = vErrors;
  return errors === 0;
}
const schema51 = {
  "properties": {
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
function validate158(data, {
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
    if (data.limits !== undefined) {
      if (!validate38(data.limits, {
        instancePath: instancePath + "/limits",
        parentData: data,
        parentDataProperty: "limits",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
        errors = vErrors.length;
      }
    }
    if (data.requests !== undefined) {
      if (!validate38(data.requests, {
        instancePath: instancePath + "/requests",
        parentData: data,
        parentDataProperty: "requests",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
        errors = vErrors.length;
      }
    }
  }
  validate158.errors = vErrors;
  return errors === 0;
}
const schema52 = {
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
const schema53 = {
  "items": {
    "$ref": "MkwwSDeYoT1APit7w8qsvbKCw8OynjINdeojyPgpPQ"
  },
  "type": "array",
  "nullable": true
};
const schema54 = {
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
function validate164(data, {
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
      if (!validate22(data.key, {
        instancePath: instancePath + "/key",
        parentData: data,
        parentDataProperty: "key",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.operator !== undefined) {
      if (!validate22(data.operator, {
        instancePath: instancePath + "/operator",
        parentData: data,
        parentDataProperty: "operator",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.values !== undefined) {
      if (!validate21(data.values, {
        instancePath: instancePath + "/values",
        parentData: data,
        parentDataProperty: "values",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
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
  validate164.errors = vErrors;
  return errors === 0;
}
function validate163(data, {
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
      if (!validate164(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate164.errors : vErrors.concat(validate164.errors);
        errors = vErrors.length;
      }
    }
  }
  validate163.errors = vErrors;
  return errors === 0;
}
function validate162(data, {
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
      if (!validate163(data.matchExpressions, {
        instancePath: instancePath + "/matchExpressions",
        parentData: data,
        parentDataProperty: "matchExpressions",
        rootData
      })) {
        vErrors = vErrors === null ? validate163.errors : vErrors.concat(validate163.errors);
        errors = vErrors.length;
      }
    }
    if (data.matchLabels !== undefined) {
      if (!validate35(data.matchLabels, {
        instancePath: instancePath + "/matchLabels",
        parentData: data,
        parentDataProperty: "matchLabels",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
  }
  validate162.errors = vErrors;
  return errors === 0;
}
function validate145(data, {
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
      if (!validate21(data.accessModes, {
        instancePath: instancePath + "/accessModes",
        parentData: data,
        parentDataProperty: "accessModes",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.dataSource !== undefined) {
      if (!validate147(data.dataSource, {
        instancePath: instancePath + "/dataSource",
        parentData: data,
        parentDataProperty: "dataSource",
        rootData
      })) {
        vErrors = vErrors === null ? validate147.errors : vErrors.concat(validate147.errors);
        errors = vErrors.length;
      }
    }
    if (data.dataSourceRef !== undefined) {
      if (!validate152(data.dataSourceRef, {
        instancePath: instancePath + "/dataSourceRef",
        parentData: data,
        parentDataProperty: "dataSourceRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate152.errors : vErrors.concat(validate152.errors);
        errors = vErrors.length;
      }
    }
    if (data.resources !== undefined) {
      if (!validate158(data.resources, {
        instancePath: instancePath + "/resources",
        parentData: data,
        parentDataProperty: "resources",
        rootData
      })) {
        vErrors = vErrors === null ? validate158.errors : vErrors.concat(validate158.errors);
        errors = vErrors.length;
      }
    }
    if (data.selector !== undefined) {
      if (!validate162(data.selector, {
        instancePath: instancePath + "/selector",
        parentData: data,
        parentDataProperty: "selector",
        rootData
      })) {
        vErrors = vErrors === null ? validate162.errors : vErrors.concat(validate162.errors);
        errors = vErrors.length;
      }
    }
    if (data.storageClassName !== undefined) {
      if (!validate24(data.storageClassName, {
        instancePath: instancePath + "/storageClassName",
        parentData: data,
        parentDataProperty: "storageClassName",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeAttributesClassName !== undefined) {
      if (!validate24(data.volumeAttributesClassName, {
        instancePath: instancePath + "/volumeAttributesClassName",
        parentData: data,
        parentDataProperty: "volumeAttributesClassName",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeMode !== undefined) {
      if (!validate24(data.volumeMode, {
        instancePath: instancePath + "/volumeMode",
        parentData: data,
        parentDataProperty: "volumeMode",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeName !== undefined) {
      if (!validate24(data.volumeName, {
        instancePath: instancePath + "/volumeName",
        parentData: data,
        parentDataProperty: "volumeName",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate145.errors = vErrors;
  return errors === 0;
}
const schema21 = {
  "format": "int64",
  "type": "integer",
  "nullable": true
};
const formats2 = formats.int64;
function validate48(data, {
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
    if (!formats2.validate(data)) {
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
  validate48.errors = vErrors;
  return errors === 0;
}
const schema55 = {
  "items": {
    "$ref": "Me3dAzCevo9JgluOcBf4PX5XcjXOHICBlAsWQglc"
  },
  "type": "array",
  "nullable": true
};
const schema56 = {
  "properties": {
    "effect": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "key": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "operator": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "tolerationSeconds": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "value": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
function validate181(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.effect !== undefined) {
      if (!validate24(data.effect, {
        instancePath: instancePath + "/effect",
        parentData: data,
        parentDataProperty: "effect",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.key !== undefined) {
      if (!validate24(data.key, {
        instancePath: instancePath + "/key",
        parentData: data,
        parentDataProperty: "key",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.operator !== undefined) {
      if (!validate24(data.operator, {
        instancePath: instancePath + "/operator",
        parentData: data,
        parentDataProperty: "operator",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.tolerationSeconds !== undefined) {
      if (!validate48(data.tolerationSeconds, {
        instancePath: instancePath + "/tolerationSeconds",
        parentData: data,
        parentDataProperty: "tolerationSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
        errors = vErrors.length;
      }
    }
    if (data.value !== undefined) {
      if (!validate24(data.value, {
        instancePath: instancePath + "/value",
        parentData: data,
        parentDataProperty: "value",
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
  validate181.errors = vErrors;
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
      if (!validate181(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate181.errors : vErrors.concat(validate181.errors);
        errors = vErrors.length;
      }
    }
  }
  validate180.errors = vErrors;
  return errors === 0;
}
const schema57 = {
  "items": {
    "$ref": "kpgvgMooaJ0LJr5JjYboYev2bQATBijsyFFlBuQ"
  },
  "type": "array",
  "nullable": true
};
const schema58 = {
  "required": ["maxSkew", "topologyKey", "whenUnsatisfiable"],
  "type": "object",
  "properties": {}
};
function validate190(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.maxSkew === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "maxSkew"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.topologyKey === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "topologyKey"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.whenUnsatisfiable === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "whenUnsatisfiable"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
  } else {
    const err3 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err3];
    } else {
      vErrors.push(err3);
    }
    errors++;
  }
  validate190.errors = vErrors;
  return errors === 0;
}
function validate189(data, {
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
      if (!validate190(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate190.errors : vErrors.concat(validate190.errors);
        errors = vErrors.length;
      }
    }
  }
  validate189.errors = vErrors;
  return errors === 0;
}
const schema59 = {
  "items": {
    "$ref": "SEp18EkqjgXWMJk6uDMmapPUotqVJbrnxhdiX2GuEY"
  },
  "type": "array",
  "nullable": true
};
const schema60 = {
  "properties": {
    "mountPath": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "mountPropagation": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "recursiveReadOnly": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "subPath": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "subPathExpr": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["mountPath", "name"],
  "type": "object"
};
function validate196(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.mountPath === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "mountPath"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
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
    if (data.mountPath !== undefined) {
      if (!validate22(data.mountPath, {
        instancePath: instancePath + "/mountPath",
        parentData: data,
        parentDataProperty: "mountPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.mountPropagation !== undefined) {
      if (!validate24(data.mountPropagation, {
        instancePath: instancePath + "/mountPropagation",
        parentData: data,
        parentDataProperty: "mountPropagation",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate22(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate30(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.recursiveReadOnly !== undefined) {
      if (!validate24(data.recursiveReadOnly, {
        instancePath: instancePath + "/recursiveReadOnly",
        parentData: data,
        parentDataProperty: "recursiveReadOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.subPath !== undefined) {
      if (!validate24(data.subPath, {
        instancePath: instancePath + "/subPath",
        parentData: data,
        parentDataProperty: "subPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.subPathExpr !== undefined) {
      if (!validate24(data.subPathExpr, {
        instancePath: instancePath + "/subPathExpr",
        parentData: data,
        parentDataProperty: "subPathExpr",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
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
  validate196.errors = vErrors;
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
      if (!validate196(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate196.errors : vErrors.concat(validate196.errors);
        errors = vErrors.length;
      }
    }
  }
  validate195.errors = vErrors;
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
    if (data.retentionPeriod === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "retentionPeriod"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.affinity !== undefined) {
      if (!validate34(data.affinity, {
        instancePath: instancePath + "/affinity",
        parentData: data,
        parentDataProperty: "affinity",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.configMaps !== undefined) {
      if (!validate21(data.configMaps, {
        instancePath: instancePath + "/configMaps",
        parentData: data,
        parentDataProperty: "configMaps",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.containers !== undefined) {
      if (!validate31(data.containers, {
        instancePath: instancePath + "/containers",
        parentData: data,
        parentDataProperty: "containers",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
    if (data.disableSelfServiceScrape !== undefined) {
      if (!validate30(data.disableSelfServiceScrape, {
        instancePath: instancePath + "/disableSelfServiceScrape",
        parentData: data,
        parentDataProperty: "disableSelfServiceScrape",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.dnsConfig !== undefined) {
      if (!validate63(data.dnsConfig, {
        instancePath: instancePath + "/dnsConfig",
        parentData: data,
        parentDataProperty: "dnsConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate63.errors : vErrors.concat(validate63.errors);
        errors = vErrors.length;
      }
    }
    if (data.dnsPolicy !== undefined) {
      if (!validate24(data.dnsPolicy, {
        instancePath: instancePath + "/dnsPolicy",
        parentData: data,
        parentDataProperty: "dnsPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.extraArgs !== undefined) {
      if (!validate35(data.extraArgs, {
        instancePath: instancePath + "/extraArgs",
        parentData: data,
        parentDataProperty: "extraArgs",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.extraEnvs !== undefined) {
      if (!validate77(data.extraEnvs, {
        instancePath: instancePath + "/extraEnvs",
        parentData: data,
        parentDataProperty: "extraEnvs",
        rootData
      })) {
        vErrors = vErrors === null ? validate77.errors : vErrors.concat(validate77.errors);
        errors = vErrors.length;
      }
    }
    if (data.futureRetention !== undefined) {
      if (!validate24(data.futureRetention, {
        instancePath: instancePath + "/futureRetention",
        parentData: data,
        parentDataProperty: "futureRetention",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.host_aliases !== undefined) {
      if (!validate25(data.host_aliases, {
        instancePath: instancePath + "/host_aliases",
        parentData: data,
        parentDataProperty: "host_aliases",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostAliases !== undefined) {
      if (!validate25(data.hostAliases, {
        instancePath: instancePath + "/hostAliases",
        parentData: data,
        parentDataProperty: "hostAliases",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostNetwork !== undefined) {
      if (!validate30(data.hostNetwork, {
        instancePath: instancePath + "/hostNetwork",
        parentData: data,
        parentDataProperty: "hostNetwork",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.image !== undefined) {
      if (!validate87(data.image, {
        instancePath: instancePath + "/image",
        parentData: data,
        parentDataProperty: "image",
        rootData
      })) {
        vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
        errors = vErrors.length;
      }
    }
    if (data.imagePullSecrets !== undefined) {
      if (!validate92(data.imagePullSecrets, {
        instancePath: instancePath + "/imagePullSecrets",
        parentData: data,
        parentDataProperty: "imagePullSecrets",
        rootData
      })) {
        vErrors = vErrors === null ? validate92.errors : vErrors.concat(validate92.errors);
        errors = vErrors.length;
      }
    }
    if (data.initContainers !== undefined) {
      if (!validate31(data.initContainers, {
        instancePath: instancePath + "/initContainers",
        parentData: data,
        parentDataProperty: "initContainers",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
    if (data.livenessProbe !== undefined) {
      if (!validate34(data.livenessProbe, {
        instancePath: instancePath + "/livenessProbe",
        parentData: data,
        parentDataProperty: "livenessProbe",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.logFormat !== undefined) {
      if (!validate100(data.logFormat, {
        instancePath: instancePath + "/logFormat",
        parentData: data,
        parentDataProperty: "logFormat",
        rootData
      })) {
        vErrors = vErrors === null ? validate100.errors : vErrors.concat(validate100.errors);
        errors = vErrors.length;
      }
    }
    if (data.logIngestedRows !== undefined) {
      if (!validate30(data.logIngestedRows, {
        instancePath: instancePath + "/logIngestedRows",
        parentData: data,
        parentDataProperty: "logIngestedRows",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.logLevel !== undefined) {
      if (!validate103(data.logLevel, {
        instancePath: instancePath + "/logLevel",
        parentData: data,
        parentDataProperty: "logLevel",
        rootData
      })) {
        vErrors = vErrors === null ? validate103.errors : vErrors.concat(validate103.errors);
        errors = vErrors.length;
      }
    }
    if (data.logNewStreams !== undefined) {
      if (!validate30(data.logNewStreams, {
        instancePath: instancePath + "/logNewStreams",
        parentData: data,
        parentDataProperty: "logNewStreams",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.minReadySeconds !== undefined) {
      if (!validate37(data.minReadySeconds, {
        instancePath: instancePath + "/minReadySeconds",
        parentData: data,
        parentDataProperty: "minReadySeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodeSelector !== undefined) {
      if (!validate35(data.nodeSelector, {
        instancePath: instancePath + "/nodeSelector",
        parentData: data,
        parentDataProperty: "nodeSelector",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.paused !== undefined) {
      if (!validate30(data.paused, {
        instancePath: instancePath + "/paused",
        parentData: data,
        parentDataProperty: "paused",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.podMetadata !== undefined) {
      if (!validate44(data.podMetadata, {
        instancePath: instancePath + "/podMetadata",
        parentData: data,
        parentDataProperty: "podMetadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate44.errors : vErrors.concat(validate44.errors);
        errors = vErrors.length;
      }
    }
    if (data.port !== undefined) {
      if (!validate24(data.port, {
        instancePath: instancePath + "/port",
        parentData: data,
        parentDataProperty: "port",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.priorityClassName !== undefined) {
      if (!validate24(data.priorityClassName, {
        instancePath: instancePath + "/priorityClassName",
        parentData: data,
        parentDataProperty: "priorityClassName",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.readinessGates !== undefined) {
      if (!validate112(data.readinessGates, {
        instancePath: instancePath + "/readinessGates",
        parentData: data,
        parentDataProperty: "readinessGates",
        rootData
      })) {
        vErrors = vErrors === null ? validate112.errors : vErrors.concat(validate112.errors);
        errors = vErrors.length;
      }
    }
    if (data.readinessProbe !== undefined) {
      if (!validate34(data.readinessProbe, {
        instancePath: instancePath + "/readinessProbe",
        parentData: data,
        parentDataProperty: "readinessProbe",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.removePvcAfterDelete !== undefined) {
      if (!validate30(data.removePvcAfterDelete, {
        instancePath: instancePath + "/removePvcAfterDelete",
        parentData: data,
        parentDataProperty: "removePvcAfterDelete",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.replicaCount !== undefined) {
      if (!validate37(data.replicaCount, {
        instancePath: instancePath + "/replicaCount",
        parentData: data,
        parentDataProperty: "replicaCount",
        rootData
      })) {
        vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
        errors = vErrors.length;
      }
    }
    if (data.resources !== undefined) {
      if (!validate120(data.resources, {
        instancePath: instancePath + "/resources",
        parentData: data,
        parentDataProperty: "resources",
        rootData
      })) {
        vErrors = vErrors === null ? validate120.errors : vErrors.concat(validate120.errors);
        errors = vErrors.length;
      }
    }
    if (data.retentionPeriod !== undefined) {
      if (!validate22(data.retentionPeriod, {
        instancePath: instancePath + "/retentionPeriod",
        parentData: data,
        parentDataProperty: "retentionPeriod",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.revisionHistoryLimitCount !== undefined) {
      if (!validate37(data.revisionHistoryLimitCount, {
        instancePath: instancePath + "/revisionHistoryLimitCount",
        parentData: data,
        parentDataProperty: "revisionHistoryLimitCount",
        rootData
      })) {
        vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
        errors = vErrors.length;
      }
    }
    if (data.runtimeClassName !== undefined) {
      if (!validate24(data.runtimeClassName, {
        instancePath: instancePath + "/runtimeClassName",
        parentData: data,
        parentDataProperty: "runtimeClassName",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.schedulerName !== undefined) {
      if (!validate24(data.schedulerName, {
        instancePath: instancePath + "/schedulerName",
        parentData: data,
        parentDataProperty: "schedulerName",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.secrets !== undefined) {
      if (!validate21(data.secrets, {
        instancePath: instancePath + "/secrets",
        parentData: data,
        parentDataProperty: "secrets",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.securityContext !== undefined) {
      if (!validate34(data.securityContext, {
        instancePath: instancePath + "/securityContext",
        parentData: data,
        parentDataProperty: "securityContext",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAccountName !== undefined) {
      if (!validate24(data.serviceAccountName, {
        instancePath: instancePath + "/serviceAccountName",
        parentData: data,
        parentDataProperty: "serviceAccountName",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceScrapeSpec !== undefined) {
      if (!validate136(data.serviceScrapeSpec, {
        instancePath: instancePath + "/serviceScrapeSpec",
        parentData: data,
        parentDataProperty: "serviceScrapeSpec",
        rootData
      })) {
        vErrors = vErrors === null ? validate136.errors : vErrors.concat(validate136.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceSpec !== undefined) {
      if (!validate138(data.serviceSpec, {
        instancePath: instancePath + "/serviceSpec",
        parentData: data,
        parentDataProperty: "serviceSpec",
        rootData
      })) {
        vErrors = vErrors === null ? validate138.errors : vErrors.concat(validate138.errors);
        errors = vErrors.length;
      }
    }
    if (data.startupProbe !== undefined) {
      if (!validate34(data.startupProbe, {
        instancePath: instancePath + "/startupProbe",
        parentData: data,
        parentDataProperty: "startupProbe",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.storage !== undefined) {
      if (!validate145(data.storage, {
        instancePath: instancePath + "/storage",
        parentData: data,
        parentDataProperty: "storage",
        rootData
      })) {
        vErrors = vErrors === null ? validate145.errors : vErrors.concat(validate145.errors);
        errors = vErrors.length;
      }
    }
    if (data.storageDataPath !== undefined) {
      if (!validate24(data.storageDataPath, {
        instancePath: instancePath + "/storageDataPath",
        parentData: data,
        parentDataProperty: "storageDataPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.storageMetadata !== undefined) {
      if (!validate44(data.storageMetadata, {
        instancePath: instancePath + "/storageMetadata",
        parentData: data,
        parentDataProperty: "storageMetadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate44.errors : vErrors.concat(validate44.errors);
        errors = vErrors.length;
      }
    }
    if (data.terminationGracePeriodSeconds !== undefined) {
      if (!validate48(data.terminationGracePeriodSeconds, {
        instancePath: instancePath + "/terminationGracePeriodSeconds",
        parentData: data,
        parentDataProperty: "terminationGracePeriodSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
        errors = vErrors.length;
      }
    }
    if (data.tolerations !== undefined) {
      if (!validate180(data.tolerations, {
        instancePath: instancePath + "/tolerations",
        parentData: data,
        parentDataProperty: "tolerations",
        rootData
      })) {
        vErrors = vErrors === null ? validate180.errors : vErrors.concat(validate180.errors);
        errors = vErrors.length;
      }
    }
    if (data.topologySpreadConstraints !== undefined) {
      if (!validate189(data.topologySpreadConstraints, {
        instancePath: instancePath + "/topologySpreadConstraints",
        parentData: data,
        parentDataProperty: "topologySpreadConstraints",
        rootData
      })) {
        vErrors = vErrors === null ? validate189.errors : vErrors.concat(validate189.errors);
        errors = vErrors.length;
      }
    }
    if (data.useDefaultResources !== undefined) {
      if (!validate30(data.useDefaultResources, {
        instancePath: instancePath + "/useDefaultResources",
        parentData: data,
        parentDataProperty: "useDefaultResources",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.useStrictSecurity !== undefined) {
      if (!validate30(data.useStrictSecurity, {
        instancePath: instancePath + "/useStrictSecurity",
        parentData: data,
        parentDataProperty: "useStrictSecurity",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeMounts !== undefined) {
      if (!validate195(data.volumeMounts, {
        instancePath: instancePath + "/volumeMounts",
        parentData: data,
        parentDataProperty: "volumeMounts",
        rootData
      })) {
        vErrors = vErrors === null ? validate195.errors : vErrors.concat(validate195.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumes !== undefined) {
      if (!validate31(data.volumes, {
        instancePath: instancePath + "/volumes",
        parentData: data,
        parentDataProperty: "volumes",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
  }
  validate58.errors = vErrors;
  return errors === 0;
}
const schema61 = {
  "properties": {
    "availableReplicas": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "reason": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "replicas": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "status": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "unavailableReplicas": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "updatedReplicas": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    }
  },
  "type": "object",
  "nullable": true
};
function validate208(data, {
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
    if (data.availableReplicas !== undefined) {
      if (!validate37(data.availableReplicas, {
        instancePath: instancePath + "/availableReplicas",
        parentData: data,
        parentDataProperty: "availableReplicas",
        rootData
      })) {
        vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
        errors = vErrors.length;
      }
    }
    if (data.reason !== undefined) {
      if (!validate24(data.reason, {
        instancePath: instancePath + "/reason",
        parentData: data,
        parentDataProperty: "reason",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.replicas !== undefined) {
      if (!validate37(data.replicas, {
        instancePath: instancePath + "/replicas",
        parentData: data,
        parentDataProperty: "replicas",
        rootData
      })) {
        vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate24(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.unavailableReplicas !== undefined) {
      if (!validate37(data.unavailableReplicas, {
        instancePath: instancePath + "/unavailableReplicas",
        parentData: data,
        parentDataProperty: "unavailableReplicas",
        rootData
      })) {
        vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
        errors = vErrors.length;
      }
    }
    if (data.updatedReplicas !== undefined) {
      if (!validate37(data.updatedReplicas, {
        instancePath: instancePath + "/updatedReplicas",
        parentData: data,
        parentDataProperty: "updatedReplicas",
        rootData
      })) {
        vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
        errors = vErrors.length;
      }
    }
  }
  validate208.errors = vErrors;
  return errors === 0;
}
function validate49(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="operator.victoriametrics.com.v1beta1.VLogs" */;
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
      if (!validate50(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate50.errors : vErrors.concat(validate50.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate52(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate52.errors : vErrors.concat(validate52.errors);
        errors = vErrors.length;
      }
    }
    if (data.metadata !== undefined) {
      if (!validate54(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate58(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate208(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate208.errors : vErrors.concat(validate208.errors);
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
  validate49.errors = vErrors;
  return errors === 0;
}