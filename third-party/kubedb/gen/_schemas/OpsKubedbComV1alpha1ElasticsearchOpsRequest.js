import { formats } from "@kubernetes-models/validate";
export const validate = validate45;
const schema19 = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "$ref": "tOKIii1es0CH6TXjRywXDJJtBSPOANK8Ge5TCIJmoMw"
    },
    "kind": {
      "$ref": "8jEeUQctmxl8dP0yCMeFRtIDTqUlV99IsASFj3Xw"
    },
    "metadata": {
      "$ref": "a6f0oUEaFqHmymdwnqPORTNOTU7GczWAkwGD0uYU"
    },
    "spec": {
      "$ref": "BmKjRX7EiGkcp7nvwJcRJs59Rw53yubpMZWWTt4hK40"
    },
    "status": {
      "$ref": "kJxsAI43XxKS0yJmhTXQxKG4iRE1y46Og36O3Yq9ug"
    }
  },
  "required": ["apiVersion", "kind"],
  "$id": "ops.kubedb.com.v1alpha1.ElasticsearchOpsRequest"
};
const schema20 = {
  "type": "string",
  "enum": ["ops.kubedb.com/v1alpha1"]
};
function validate46(data, {
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
  if (!(data === "ops.kubedb.com/v1alpha1")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema20.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate46.errors = vErrors;
  return errors === 0;
}
const schema21 = {
  "type": "string",
  "enum": ["ElasticsearchOpsRequest"]
};
function validate48(data, {
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
  if (!(data === "ElasticsearchOpsRequest")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema21.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate48.errors = vErrors;
  return errors === 0;
}
const schema22 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
};
const schema23 = {};
import { validate as validate51 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
function validate50(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate51(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate51.errors : vErrors.concat(validate51.errors);
      errors = vErrors.length;
    }
  }
  validate50.errors = vErrors;
  return errors === 0;
}
const schema24 = {
  "properties": {
    "apply": {
      "$ref": "n1n5qN2doWc0p06JSUoUXsVgl0Gh5itkTxrV9jb4"
    },
    "configuration": {
      "$ref": "K1BcW9fnYiMTFRot5oOYmXxgdi7EEkyjGPhQY"
    },
    "databaseRef": {
      "$ref": "qgtTuDaNsImr24YNCUVN3pDpwYXcxIDVFjAvxPkh8"
    },
    "horizontalScaling": {
      "$ref": "6dHbg2iYTtz3nM8597wh09vevcCr7dNZvTGTdPhJId4"
    },
    "restart": {
      "$ref": "wnCl8zCvz1PLbyEivJTcktRgDZuzOGT9FYulvrA2T8w"
    },
    "timeout": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "tls": {
      "$ref": "74EqVC8JvTssxREL1cPyNhVdaR4qxt7QMW0fOVXhdE"
    },
    "type": {
      "$ref": "vlReVoZjr81bq2wcz945liV4EPCnm9AdUklkwZkrbM"
    },
    "updateVersion": {
      "$ref": "amACOfVrNBqXLDAB6AUWzQYONNCfXtE0ifYia55EkM"
    },
    "upgrade": {
      "$ref": "amACOfVrNBqXLDAB6AUWzQYONNCfXtE0ifYia55EkM"
    },
    "verticalScaling": {
      "$ref": "JaLl2MztUFOvbM7zRbAOUXJMrGc4zYyh0UxJlN17pN8"
    },
    "volumeExpansion": {
      "$ref": "tISwI7ZKL2FtBBqsP3xDyH1yu1fymFBpeuY4IJnP4"
    }
  },
  "required": ["databaseRef", "type"],
  "type": "object",
  "nullable": true
};
const schema25 = {
  "default": "IfReady",
  "enum": ["IfReady", "Always"],
  "type": "string",
  "nullable": true
};
function validate55(data, {
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
  if (!(data === "IfReady" || data === "Always")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema25.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate55.errors = vErrors;
  return errors === 0;
}
const schema26 = {
  "properties": {
    "applyConfig": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "configSecret": {
      "$ref": "2ktcR1INTbBpwSoz9kGFj8xkRezz1YNsTRJ6NRhvk"
    },
    "removeCustomConfig": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "removeSecureCustomConfig": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "secureConfigSecret": {
      "$ref": "2ktcR1INTbBpwSoz9kGFj8xkRezz1YNsTRJ6NRhvk"
    }
  },
  "type": "object",
  "nullable": true
};
const schema27 = {
  "additionalProperties": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "object",
  "properties": {},
  "nullable": true
};
const schema10 = {
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
  validate58.errors = vErrors;
  return errors === 0;
}
const schema7 = {
  "properties": {
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
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
  }
  validate22.errors = vErrors;
  return errors === 0;
}
const schema6 = {
  "type": "boolean",
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
  validate21.errors = vErrors;
  return errors === 0;
}
function validate57(data, {
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
    if (data.applyConfig !== undefined) {
      if (!validate58(data.applyConfig, {
        instancePath: instancePath + "/applyConfig",
        parentData: data,
        parentDataProperty: "applyConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.configSecret !== undefined) {
      if (!validate22(data.configSecret, {
        instancePath: instancePath + "/configSecret",
        parentData: data,
        parentDataProperty: "configSecret",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.removeCustomConfig !== undefined) {
      if (!validate21(data.removeCustomConfig, {
        instancePath: instancePath + "/removeCustomConfig",
        parentData: data,
        parentDataProperty: "removeCustomConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.removeSecureCustomConfig !== undefined) {
      if (!validate21(data.removeSecureCustomConfig, {
        instancePath: instancePath + "/removeSecureCustomConfig",
        parentData: data,
        parentDataProperty: "removeSecureCustomConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.secureConfigSecret !== undefined) {
      if (!validate22(data.secureConfigSecret, {
        instancePath: instancePath + "/secureConfigSecret",
        parentData: data,
        parentDataProperty: "secureConfigSecret",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate57.errors = vErrors;
  return errors === 0;
}
const schema28 = {
  "properties": {
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
function validate66(data, {
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
  validate66.errors = vErrors;
  return errors === 0;
}
const schema29 = {
  "properties": {
    "node": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "topology": {
      "$ref": "e9WCCRo97Jt7k9JoTS45M6lTRkM76TAW5nq9s6V4qc"
    }
  },
  "type": "object",
  "nullable": true
};
const schema9 = {
  "format": "int32",
  "type": "integer",
  "nullable": true
};
const formats0 = formats.int32;
function validate25(data, {
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
  validate25.errors = vErrors;
  return errors === 0;
}
const schema30 = {
  "properties": {
    "coordinating": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "data": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "dataCold": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "dataContent": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "dataFrozen": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "dataHot": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "dataWarm": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "ingest": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "master": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "ml": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "transform": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    }
  },
  "type": "object",
  "nullable": true
};
function validate71(data, {
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
    if (data.coordinating !== undefined) {
      if (!validate25(data.coordinating, {
        instancePath: instancePath + "/coordinating",
        parentData: data,
        parentDataProperty: "coordinating",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.data !== undefined) {
      if (!validate25(data.data, {
        instancePath: instancePath + "/data",
        parentData: data,
        parentDataProperty: "data",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.dataCold !== undefined) {
      if (!validate25(data.dataCold, {
        instancePath: instancePath + "/dataCold",
        parentData: data,
        parentDataProperty: "dataCold",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.dataContent !== undefined) {
      if (!validate25(data.dataContent, {
        instancePath: instancePath + "/dataContent",
        parentData: data,
        parentDataProperty: "dataContent",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.dataFrozen !== undefined) {
      if (!validate25(data.dataFrozen, {
        instancePath: instancePath + "/dataFrozen",
        parentData: data,
        parentDataProperty: "dataFrozen",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.dataHot !== undefined) {
      if (!validate25(data.dataHot, {
        instancePath: instancePath + "/dataHot",
        parentData: data,
        parentDataProperty: "dataHot",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.dataWarm !== undefined) {
      if (!validate25(data.dataWarm, {
        instancePath: instancePath + "/dataWarm",
        parentData: data,
        parentDataProperty: "dataWarm",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.ingest !== undefined) {
      if (!validate25(data.ingest, {
        instancePath: instancePath + "/ingest",
        parentData: data,
        parentDataProperty: "ingest",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.master !== undefined) {
      if (!validate25(data.master, {
        instancePath: instancePath + "/master",
        parentData: data,
        parentDataProperty: "master",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.ml !== undefined) {
      if (!validate25(data.ml, {
        instancePath: instancePath + "/ml",
        parentData: data,
        parentDataProperty: "ml",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.transform !== undefined) {
      if (!validate25(data.transform, {
        instancePath: instancePath + "/transform",
        parentData: data,
        parentDataProperty: "transform",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate71.errors = vErrors;
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
    if (data.node !== undefined) {
      if (!validate25(data.node, {
        instancePath: instancePath + "/node",
        parentData: data,
        parentDataProperty: "node",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.topology !== undefined) {
      if (!validate71(data.topology, {
        instancePath: instancePath + "/topology",
        parentData: data,
        parentDataProperty: "topology",
        rootData
      })) {
        vErrors = vErrors === null ? validate71.errors : vErrors.concat(validate71.errors);
        errors = vErrors.length;
      }
    }
  }
  validate69.errors = vErrors;
  return errors === 0;
}
const schema31 = {
  "type": "object",
  "properties": {},
  "nullable": true
};
function validate85(data, {
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
  validate85.errors = vErrors;
  return errors === 0;
}
const schema32 = {
  "properties": {
    "certificates": {
      "$ref": "PknbmeLDiTXpUqrQnAnS40N0QpVxfIcgOf2k4jEUus"
    },
    "issuerRef": {
      "$ref": "Ie9aGhSpjw6Qzf2P1NWEJFaL4kYcEsKAtQUYsudcc"
    },
    "remove": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "rotateCertificates": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "type": "object",
  "nullable": true
};
const schema33 = {
  "items": {
    "$ref": "yo4wDVYlXYuRXHbLWkSGn2WfFXgDUbPgdmXMRQXCs"
  },
  "type": "array",
  "nullable": true
};
const schema34 = {
  "properties": {
    "alias": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "dnsNames": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "duration": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "emailAddresses": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "ipAddresses": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "issuerRef": {
      "$ref": "Ie9aGhSpjw6Qzf2P1NWEJFaL4kYcEsKAtQUYsudcc"
    },
    "privateKey": {
      "$ref": "GmYBcRds7KsIrlKee8I2k60HNsmisJnsk4iqu2fyGvw"
    },
    "renewBefore": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "secretName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "subject": {
      "$ref": "ItE1nTluhbCJODiMBOJZE70Kf4lzwqJRKbJvApNjPA"
    },
    "uris": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    }
  },
  "required": ["alias"],
  "type": "object"
};
const schema11 = {
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "array",
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
  validate27.errors = vErrors;
  return errors === 0;
}
const schema12 = {
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
  validate29.errors = vErrors;
  return errors === 0;
}
const schema35 = {
  "properties": {
    "encoding": {
      "$ref": "P261LAT2tH9c2iIQYdCvklAujNLE2uLH6tsv4scFZc"
    }
  },
  "type": "object",
  "nullable": true
};
const schema36 = {
  "enum": ["PKCS1", "PKCS8"],
  "type": "string",
  "nullable": true
};
function validate98(data, {
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
  if (!(data === "PKCS1" || data === "PKCS8")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema36.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate98.errors = vErrors;
  return errors === 0;
}
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
    if (data.encoding !== undefined) {
      if (!validate98(data.encoding, {
        instancePath: instancePath + "/encoding",
        parentData: data,
        parentDataProperty: "encoding",
        rootData
      })) {
        vErrors = vErrors === null ? validate98.errors : vErrors.concat(validate98.errors);
        errors = vErrors.length;
      }
    }
  }
  validate97.errors = vErrors;
  return errors === 0;
}
const schema37 = {
  "properties": {
    "countries": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "localities": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "organizationalUnits": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "organizations": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "postalCodes": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "provinces": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "serialNumber": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "streetAddresses": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    }
  },
  "type": "object",
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
    if (data.countries !== undefined) {
      if (!validate27(data.countries, {
        instancePath: instancePath + "/countries",
        parentData: data,
        parentDataProperty: "countries",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.localities !== undefined) {
      if (!validate27(data.localities, {
        instancePath: instancePath + "/localities",
        parentData: data,
        parentDataProperty: "localities",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.organizationalUnits !== undefined) {
      if (!validate27(data.organizationalUnits, {
        instancePath: instancePath + "/organizationalUnits",
        parentData: data,
        parentDataProperty: "organizationalUnits",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.organizations !== undefined) {
      if (!validate27(data.organizations, {
        instancePath: instancePath + "/organizations",
        parentData: data,
        parentDataProperty: "organizations",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.postalCodes !== undefined) {
      if (!validate27(data.postalCodes, {
        instancePath: instancePath + "/postalCodes",
        parentData: data,
        parentDataProperty: "postalCodes",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.provinces !== undefined) {
      if (!validate27(data.provinces, {
        instancePath: instancePath + "/provinces",
        parentData: data,
        parentDataProperty: "provinces",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.serialNumber !== undefined) {
      if (!validate23(data.serialNumber, {
        instancePath: instancePath + "/serialNumber",
        parentData: data,
        parentDataProperty: "serialNumber",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.streetAddresses !== undefined) {
      if (!validate27(data.streetAddresses, {
        instancePath: instancePath + "/streetAddresses",
        parentData: data,
        parentDataProperty: "streetAddresses",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
  }
  validate103.errors = vErrors;
  return errors === 0;
}
function validate90(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.alias === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "alias"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.alias !== undefined) {
      if (!validate26(data.alias, {
        instancePath: instancePath + "/alias",
        parentData: data,
        parentDataProperty: "alias",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.dnsNames !== undefined) {
      if (!validate27(data.dnsNames, {
        instancePath: instancePath + "/dnsNames",
        parentData: data,
        parentDataProperty: "dnsNames",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.duration !== undefined) {
      if (!validate23(data.duration, {
        instancePath: instancePath + "/duration",
        parentData: data,
        parentDataProperty: "duration",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.emailAddresses !== undefined) {
      if (!validate27(data.emailAddresses, {
        instancePath: instancePath + "/emailAddresses",
        parentData: data,
        parentDataProperty: "emailAddresses",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.ipAddresses !== undefined) {
      if (!validate27(data.ipAddresses, {
        instancePath: instancePath + "/ipAddresses",
        parentData: data,
        parentDataProperty: "ipAddresses",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.issuerRef !== undefined) {
      if (!validate29(data.issuerRef, {
        instancePath: instancePath + "/issuerRef",
        parentData: data,
        parentDataProperty: "issuerRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.privateKey !== undefined) {
      if (!validate97(data.privateKey, {
        instancePath: instancePath + "/privateKey",
        parentData: data,
        parentDataProperty: "privateKey",
        rootData
      })) {
        vErrors = vErrors === null ? validate97.errors : vErrors.concat(validate97.errors);
        errors = vErrors.length;
      }
    }
    if (data.renewBefore !== undefined) {
      if (!validate23(data.renewBefore, {
        instancePath: instancePath + "/renewBefore",
        parentData: data,
        parentDataProperty: "renewBefore",
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
    if (data.subject !== undefined) {
      if (!validate103(data.subject, {
        instancePath: instancePath + "/subject",
        parentData: data,
        parentDataProperty: "subject",
        rootData
      })) {
        vErrors = vErrors === null ? validate103.errors : vErrors.concat(validate103.errors);
        errors = vErrors.length;
      }
    }
    if (data.uris !== undefined) {
      if (!validate27(data.uris, {
        instancePath: instancePath + "/uris",
        parentData: data,
        parentDataProperty: "uris",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
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
  validate90.errors = vErrors;
  return errors === 0;
}
function validate89(data, {
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
      if (!validate90(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate90.errors : vErrors.concat(validate90.errors);
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
    if (data.certificates !== undefined) {
      if (!validate89(data.certificates, {
        instancePath: instancePath + "/certificates",
        parentData: data,
        parentDataProperty: "certificates",
        rootData
      })) {
        vErrors = vErrors === null ? validate89.errors : vErrors.concat(validate89.errors);
        errors = vErrors.length;
      }
    }
    if (data.issuerRef !== undefined) {
      if (!validate29(data.issuerRef, {
        instancePath: instancePath + "/issuerRef",
        parentData: data,
        parentDataProperty: "issuerRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.remove !== undefined) {
      if (!validate21(data.remove, {
        instancePath: instancePath + "/remove",
        parentData: data,
        parentDataProperty: "remove",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.rotateCertificates !== undefined) {
      if (!validate21(data.rotateCertificates, {
        instancePath: instancePath + "/rotateCertificates",
        parentData: data,
        parentDataProperty: "rotateCertificates",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate88.errors = vErrors;
  return errors === 0;
}
const schema38 = {
  "enum": ["Upgrade", "UpdateVersion", "HorizontalScaling", "VerticalScaling", "VolumeExpansion", "Restart", "Reconfigure", "ReconfigureTLS"],
  "type": "string"
};
function validate120(data, {
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
  if (!(data === "Upgrade" || data === "UpdateVersion" || data === "HorizontalScaling" || data === "VerticalScaling" || data === "VolumeExpansion" || data === "Restart" || data === "Reconfigure" || data === "ReconfigureTLS")) {
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
  validate120.errors = vErrors;
  return errors === 0;
}
const schema13 = {
  "properties": {
    "targetVersion": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
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
    if (data.targetVersion !== undefined) {
      if (!validate23(data.targetVersion, {
        instancePath: instancePath + "/targetVersion",
        parentData: data,
        parentDataProperty: "targetVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate33.errors = vErrors;
  return errors === 0;
}
const schema39 = {
  "properties": {
    "exporter": {
      "$ref": "7WXa2aF6GMGgfmkZvnQ0mQJTzClD5QYxEdLx0dV7xuQ"
    },
    "node": {
      "$ref": "7WXa2aF6GMGgfmkZvnQ0mQJTzClD5QYxEdLx0dV7xuQ"
    },
    "topology": {
      "$ref": "QgBKTGAzAGnIaycvcbbxGGNroMFkdwQBUbeoPxucM"
    }
  },
  "type": "object",
  "nullable": true
};
const schema17 = {
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
const schema14 = {
  "additionalProperties": {
    "$ref": "l7oaIcmo24pLi7XxCQ3euA6o54Bu2nt1fJ44v0vO04"
  },
  "type": "object",
  "properties": {},
  "nullable": true
};
const schema15 = {
  "anyOf": [{
    "$ref": "vMERCWCezVsdN7cIwlJvWJTP5QRRevuFDHNM3fdV8Q"
  }, {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  }],
  "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
};
const schema16 = {
  "type": "integer"
};
function validate37(data, {
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
  validate37.errors = vErrors;
  return errors === 0;
}
const pattern0 = new RegExp("^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$", "u");
function validate36(data, {
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
  if (!validate37(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
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
  validate36.errors = vErrors;
  return errors === 0;
}
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
      if (!validate36(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
        rootData
      })) {
        vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
        errors = vErrors.length;
      }
    }
  }
  validate35.errors = vErrors;
  return errors === 0;
}
function validate41(data, {
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
      if (!validate35(data.limits, {
        instancePath: instancePath + "/limits",
        parentData: data,
        parentDataProperty: "limits",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.requests !== undefined) {
      if (!validate35(data.requests, {
        instancePath: instancePath + "/requests",
        parentData: data,
        parentDataProperty: "requests",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
  }
  validate41.errors = vErrors;
  return errors === 0;
}
const schema40 = {
  "properties": {
    "coordinating": {
      "$ref": "7WXa2aF6GMGgfmkZvnQ0mQJTzClD5QYxEdLx0dV7xuQ"
    },
    "data": {
      "$ref": "7WXa2aF6GMGgfmkZvnQ0mQJTzClD5QYxEdLx0dV7xuQ"
    },
    "dataCold": {
      "$ref": "7WXa2aF6GMGgfmkZvnQ0mQJTzClD5QYxEdLx0dV7xuQ"
    },
    "dataContent": {
      "$ref": "7WXa2aF6GMGgfmkZvnQ0mQJTzClD5QYxEdLx0dV7xuQ"
    },
    "dataFrozen": {
      "$ref": "7WXa2aF6GMGgfmkZvnQ0mQJTzClD5QYxEdLx0dV7xuQ"
    },
    "dataHot": {
      "$ref": "7WXa2aF6GMGgfmkZvnQ0mQJTzClD5QYxEdLx0dV7xuQ"
    },
    "dataWarm": {
      "$ref": "7WXa2aF6GMGgfmkZvnQ0mQJTzClD5QYxEdLx0dV7xuQ"
    },
    "ingest": {
      "$ref": "7WXa2aF6GMGgfmkZvnQ0mQJTzClD5QYxEdLx0dV7xuQ"
    },
    "master": {
      "$ref": "7WXa2aF6GMGgfmkZvnQ0mQJTzClD5QYxEdLx0dV7xuQ"
    },
    "ml": {
      "$ref": "7WXa2aF6GMGgfmkZvnQ0mQJTzClD5QYxEdLx0dV7xuQ"
    },
    "transform": {
      "$ref": "7WXa2aF6GMGgfmkZvnQ0mQJTzClD5QYxEdLx0dV7xuQ"
    }
  },
  "type": "object",
  "nullable": true
};
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
    if (data.coordinating !== undefined) {
      if (!validate41(data.coordinating, {
        instancePath: instancePath + "/coordinating",
        parentData: data,
        parentDataProperty: "coordinating",
        rootData
      })) {
        vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
        errors = vErrors.length;
      }
    }
    if (data.data !== undefined) {
      if (!validate41(data.data, {
        instancePath: instancePath + "/data",
        parentData: data,
        parentDataProperty: "data",
        rootData
      })) {
        vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
        errors = vErrors.length;
      }
    }
    if (data.dataCold !== undefined) {
      if (!validate41(data.dataCold, {
        instancePath: instancePath + "/dataCold",
        parentData: data,
        parentDataProperty: "dataCold",
        rootData
      })) {
        vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
        errors = vErrors.length;
      }
    }
    if (data.dataContent !== undefined) {
      if (!validate41(data.dataContent, {
        instancePath: instancePath + "/dataContent",
        parentData: data,
        parentDataProperty: "dataContent",
        rootData
      })) {
        vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
        errors = vErrors.length;
      }
    }
    if (data.dataFrozen !== undefined) {
      if (!validate41(data.dataFrozen, {
        instancePath: instancePath + "/dataFrozen",
        parentData: data,
        parentDataProperty: "dataFrozen",
        rootData
      })) {
        vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
        errors = vErrors.length;
      }
    }
    if (data.dataHot !== undefined) {
      if (!validate41(data.dataHot, {
        instancePath: instancePath + "/dataHot",
        parentData: data,
        parentDataProperty: "dataHot",
        rootData
      })) {
        vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
        errors = vErrors.length;
      }
    }
    if (data.dataWarm !== undefined) {
      if (!validate41(data.dataWarm, {
        instancePath: instancePath + "/dataWarm",
        parentData: data,
        parentDataProperty: "dataWarm",
        rootData
      })) {
        vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
        errors = vErrors.length;
      }
    }
    if (data.ingest !== undefined) {
      if (!validate41(data.ingest, {
        instancePath: instancePath + "/ingest",
        parentData: data,
        parentDataProperty: "ingest",
        rootData
      })) {
        vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
        errors = vErrors.length;
      }
    }
    if (data.master !== undefined) {
      if (!validate41(data.master, {
        instancePath: instancePath + "/master",
        parentData: data,
        parentDataProperty: "master",
        rootData
      })) {
        vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
        errors = vErrors.length;
      }
    }
    if (data.ml !== undefined) {
      if (!validate41(data.ml, {
        instancePath: instancePath + "/ml",
        parentData: data,
        parentDataProperty: "ml",
        rootData
      })) {
        vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
        errors = vErrors.length;
      }
    }
    if (data.transform !== undefined) {
      if (!validate41(data.transform, {
        instancePath: instancePath + "/transform",
        parentData: data,
        parentDataProperty: "transform",
        rootData
      })) {
        vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
        errors = vErrors.length;
      }
    }
  }
  validate127.errors = vErrors;
  return errors === 0;
}
function validate124(data, {
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
    if (data.exporter !== undefined) {
      if (!validate41(data.exporter, {
        instancePath: instancePath + "/exporter",
        parentData: data,
        parentDataProperty: "exporter",
        rootData
      })) {
        vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
        errors = vErrors.length;
      }
    }
    if (data.node !== undefined) {
      if (!validate41(data.node, {
        instancePath: instancePath + "/node",
        parentData: data,
        parentDataProperty: "node",
        rootData
      })) {
        vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
        errors = vErrors.length;
      }
    }
    if (data.topology !== undefined) {
      if (!validate127(data.topology, {
        instancePath: instancePath + "/topology",
        parentData: data,
        parentDataProperty: "topology",
        rootData
      })) {
        vErrors = vErrors === null ? validate127.errors : vErrors.concat(validate127.errors);
        errors = vErrors.length;
      }
    }
  }
  validate124.errors = vErrors;
  return errors === 0;
}
const schema41 = {
  "properties": {
    "mode": {
      "$ref": "4TX4X09cQmp6wIS0lgiMQh8nAQuDsZpxsWk7u0vxkIk"
    },
    "node": {
      "$ref": "l7oaIcmo24pLi7XxCQ3euA6o54Bu2nt1fJ44v0vO04"
    },
    "topology": {
      "$ref": "5UeSC1PsyamOdeFyVFJGxVvtH3XYZRctlwKcbMhlPw"
    }
  },
  "type": "object",
  "nullable": true
};
const schema42 = {
  "default": "Online",
  "enum": ["Offline", "Online"],
  "type": "string",
  "nullable": true
};
function validate142(data, {
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
  if (!(data === "Offline" || data === "Online")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema42.enum
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
const schema43 = {
  "properties": {
    "coordinating": {
      "$ref": "l7oaIcmo24pLi7XxCQ3euA6o54Bu2nt1fJ44v0vO04"
    },
    "data": {
      "$ref": "l7oaIcmo24pLi7XxCQ3euA6o54Bu2nt1fJ44v0vO04"
    },
    "dataCold": {
      "$ref": "l7oaIcmo24pLi7XxCQ3euA6o54Bu2nt1fJ44v0vO04"
    },
    "dataContent": {
      "$ref": "l7oaIcmo24pLi7XxCQ3euA6o54Bu2nt1fJ44v0vO04"
    },
    "dataFrozen": {
      "$ref": "l7oaIcmo24pLi7XxCQ3euA6o54Bu2nt1fJ44v0vO04"
    },
    "dataHot": {
      "$ref": "l7oaIcmo24pLi7XxCQ3euA6o54Bu2nt1fJ44v0vO04"
    },
    "dataWarm": {
      "$ref": "l7oaIcmo24pLi7XxCQ3euA6o54Bu2nt1fJ44v0vO04"
    },
    "ingest": {
      "$ref": "l7oaIcmo24pLi7XxCQ3euA6o54Bu2nt1fJ44v0vO04"
    },
    "master": {
      "$ref": "l7oaIcmo24pLi7XxCQ3euA6o54Bu2nt1fJ44v0vO04"
    },
    "ml": {
      "$ref": "l7oaIcmo24pLi7XxCQ3euA6o54Bu2nt1fJ44v0vO04"
    },
    "transform": {
      "$ref": "l7oaIcmo24pLi7XxCQ3euA6o54Bu2nt1fJ44v0vO04"
    }
  },
  "type": "object",
  "nullable": true
};
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
    if (data.coordinating !== undefined) {
      if (!validate36(data.coordinating, {
        instancePath: instancePath + "/coordinating",
        parentData: data,
        parentDataProperty: "coordinating",
        rootData
      })) {
        vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
        errors = vErrors.length;
      }
    }
    if (data.data !== undefined) {
      if (!validate36(data.data, {
        instancePath: instancePath + "/data",
        parentData: data,
        parentDataProperty: "data",
        rootData
      })) {
        vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
        errors = vErrors.length;
      }
    }
    if (data.dataCold !== undefined) {
      if (!validate36(data.dataCold, {
        instancePath: instancePath + "/dataCold",
        parentData: data,
        parentDataProperty: "dataCold",
        rootData
      })) {
        vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
        errors = vErrors.length;
      }
    }
    if (data.dataContent !== undefined) {
      if (!validate36(data.dataContent, {
        instancePath: instancePath + "/dataContent",
        parentData: data,
        parentDataProperty: "dataContent",
        rootData
      })) {
        vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
        errors = vErrors.length;
      }
    }
    if (data.dataFrozen !== undefined) {
      if (!validate36(data.dataFrozen, {
        instancePath: instancePath + "/dataFrozen",
        parentData: data,
        parentDataProperty: "dataFrozen",
        rootData
      })) {
        vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
        errors = vErrors.length;
      }
    }
    if (data.dataHot !== undefined) {
      if (!validate36(data.dataHot, {
        instancePath: instancePath + "/dataHot",
        parentData: data,
        parentDataProperty: "dataHot",
        rootData
      })) {
        vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
        errors = vErrors.length;
      }
    }
    if (data.dataWarm !== undefined) {
      if (!validate36(data.dataWarm, {
        instancePath: instancePath + "/dataWarm",
        parentData: data,
        parentDataProperty: "dataWarm",
        rootData
      })) {
        vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
        errors = vErrors.length;
      }
    }
    if (data.ingest !== undefined) {
      if (!validate36(data.ingest, {
        instancePath: instancePath + "/ingest",
        parentData: data,
        parentDataProperty: "ingest",
        rootData
      })) {
        vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
        errors = vErrors.length;
      }
    }
    if (data.master !== undefined) {
      if (!validate36(data.master, {
        instancePath: instancePath + "/master",
        parentData: data,
        parentDataProperty: "master",
        rootData
      })) {
        vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
        errors = vErrors.length;
      }
    }
    if (data.ml !== undefined) {
      if (!validate36(data.ml, {
        instancePath: instancePath + "/ml",
        parentData: data,
        parentDataProperty: "ml",
        rootData
      })) {
        vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
        errors = vErrors.length;
      }
    }
    if (data.transform !== undefined) {
      if (!validate36(data.transform, {
        instancePath: instancePath + "/transform",
        parentData: data,
        parentDataProperty: "transform",
        rootData
      })) {
        vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
        errors = vErrors.length;
      }
    }
  }
  validate145.errors = vErrors;
  return errors === 0;
}
function validate141(data, {
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
    if (data.mode !== undefined) {
      if (!validate142(data.mode, {
        instancePath: instancePath + "/mode",
        parentData: data,
        parentDataProperty: "mode",
        rootData
      })) {
        vErrors = vErrors === null ? validate142.errors : vErrors.concat(validate142.errors);
        errors = vErrors.length;
      }
    }
    if (data.node !== undefined) {
      if (!validate36(data.node, {
        instancePath: instancePath + "/node",
        parentData: data,
        parentDataProperty: "node",
        rootData
      })) {
        vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
        errors = vErrors.length;
      }
    }
    if (data.topology !== undefined) {
      if (!validate145(data.topology, {
        instancePath: instancePath + "/topology",
        parentData: data,
        parentDataProperty: "topology",
        rootData
      })) {
        vErrors = vErrors === null ? validate145.errors : vErrors.concat(validate145.errors);
        errors = vErrors.length;
      }
    }
  }
  validate141.errors = vErrors;
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
    if (data.databaseRef === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "databaseRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.type === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "type"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.apply !== undefined) {
      if (!validate55(data.apply, {
        instancePath: instancePath + "/apply",
        parentData: data,
        parentDataProperty: "apply",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
    if (data.configuration !== undefined) {
      if (!validate57(data.configuration, {
        instancePath: instancePath + "/configuration",
        parentData: data,
        parentDataProperty: "configuration",
        rootData
      })) {
        vErrors = vErrors === null ? validate57.errors : vErrors.concat(validate57.errors);
        errors = vErrors.length;
      }
    }
    if (data.databaseRef !== undefined) {
      if (!validate66(data.databaseRef, {
        instancePath: instancePath + "/databaseRef",
        parentData: data,
        parentDataProperty: "databaseRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate66.errors : vErrors.concat(validate66.errors);
        errors = vErrors.length;
      }
    }
    if (data.horizontalScaling !== undefined) {
      if (!validate69(data.horizontalScaling, {
        instancePath: instancePath + "/horizontalScaling",
        parentData: data,
        parentDataProperty: "horizontalScaling",
        rootData
      })) {
        vErrors = vErrors === null ? validate69.errors : vErrors.concat(validate69.errors);
        errors = vErrors.length;
      }
    }
    if (data.restart !== undefined) {
      if (!validate85(data.restart, {
        instancePath: instancePath + "/restart",
        parentData: data,
        parentDataProperty: "restart",
        rootData
      })) {
        vErrors = vErrors === null ? validate85.errors : vErrors.concat(validate85.errors);
        errors = vErrors.length;
      }
    }
    if (data.timeout !== undefined) {
      if (!validate23(data.timeout, {
        instancePath: instancePath + "/timeout",
        parentData: data,
        parentDataProperty: "timeout",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.tls !== undefined) {
      if (!validate88(data.tls, {
        instancePath: instancePath + "/tls",
        parentData: data,
        parentDataProperty: "tls",
        rootData
      })) {
        vErrors = vErrors === null ? validate88.errors : vErrors.concat(validate88.errors);
        errors = vErrors.length;
      }
    }
    if (data.type !== undefined) {
      if (!validate120(data.type, {
        instancePath: instancePath + "/type",
        parentData: data,
        parentDataProperty: "type",
        rootData
      })) {
        vErrors = vErrors === null ? validate120.errors : vErrors.concat(validate120.errors);
        errors = vErrors.length;
      }
    }
    if (data.updateVersion !== undefined) {
      if (!validate33(data.updateVersion, {
        instancePath: instancePath + "/updateVersion",
        parentData: data,
        parentDataProperty: "updateVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data.upgrade !== undefined) {
      if (!validate33(data.upgrade, {
        instancePath: instancePath + "/upgrade",
        parentData: data,
        parentDataProperty: "upgrade",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data.verticalScaling !== undefined) {
      if (!validate124(data.verticalScaling, {
        instancePath: instancePath + "/verticalScaling",
        parentData: data,
        parentDataProperty: "verticalScaling",
        rootData
      })) {
        vErrors = vErrors === null ? validate124.errors : vErrors.concat(validate124.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeExpansion !== undefined) {
      if (!validate141(data.volumeExpansion, {
        instancePath: instancePath + "/volumeExpansion",
        parentData: data,
        parentDataProperty: "volumeExpansion",
        rootData
      })) {
        vErrors = vErrors === null ? validate141.errors : vErrors.concat(validate141.errors);
        errors = vErrors.length;
      }
    }
  }
  validate54.errors = vErrors;
  return errors === 0;
}
const schema44 = {
  "properties": {
    "conditions": {
      "$ref": "TLxG8xMLlgL183pGp7ZxVEWaqnWoFeUOcpD1Gl6f58w"
    },
    "observedGeneration": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "phase": {
      "$ref": "8pKnqAXuKDxCCmakQL9ijy9VamY4fxcJqbMTiYSzKc"
    }
  },
  "type": "object",
  "nullable": true
};
const schema45 = {
  "items": {
    "$ref": "EqwK2G1nL34jDaOOxTSguH9S7ankPAfgqi40DZNyEo"
  },
  "type": "array",
  "nullable": true
};
const schema46 = {
  "properties": {
    "lastTransitionTime": {
      "$ref": "KrhXBWKB1pK8JptMQRXbBg5co4bpZWZnIUkdeEo37wY"
    },
    "message": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "observedGeneration": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "reason": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "status": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "type": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["lastTransitionTime", "message", "reason", "status", "type"],
  "type": "object"
};
const schema47 = {
  "format": "date-time",
  "type": "string"
};
const formats4 = formats["date-time"];
function validate163(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!formats4.validate(data)) {
      const err0 = {
        instancePath,
        schemaPath: "#/format",
        keyword: "format",
        params: {
          format: "date-time"
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
  validate163.errors = vErrors;
  return errors === 0;
}
const schema18 = {
  "format": "int64",
  "type": "integer",
  "nullable": true
};
const formats2 = formats.int64;
function validate44(data, {
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
  validate44.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.lastTransitionTime === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "lastTransitionTime"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.message === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "message"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.reason === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "reason"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.status === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "status"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.type === undefined) {
      const err4 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "type"
        }
      };
      if (vErrors === null) {
        vErrors = [err4];
      } else {
        vErrors.push(err4);
      }
      errors++;
    }
    if (data.lastTransitionTime !== undefined) {
      if (!validate163(data.lastTransitionTime, {
        instancePath: instancePath + "/lastTransitionTime",
        parentData: data,
        parentDataProperty: "lastTransitionTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate163.errors : vErrors.concat(validate163.errors);
        errors = vErrors.length;
      }
    }
    if (data.message !== undefined) {
      if (!validate26(data.message, {
        instancePath: instancePath + "/message",
        parentData: data,
        parentDataProperty: "message",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.observedGeneration !== undefined) {
      if (!validate44(data.observedGeneration, {
        instancePath: instancePath + "/observedGeneration",
        parentData: data,
        parentDataProperty: "observedGeneration",
        rootData
      })) {
        vErrors = vErrors === null ? validate44.errors : vErrors.concat(validate44.errors);
        errors = vErrors.length;
      }
    }
    if (data.reason !== undefined) {
      if (!validate26(data.reason, {
        instancePath: instancePath + "/reason",
        parentData: data,
        parentDataProperty: "reason",
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
    const err5 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err5];
    } else {
      vErrors.push(err5);
    }
    errors++;
  }
  validate162.errors = vErrors;
  return errors === 0;
}
function validate161(data, {
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
      if (!validate162(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate162.errors : vErrors.concat(validate162.errors);
        errors = vErrors.length;
      }
    }
  }
  validate161.errors = vErrors;
  return errors === 0;
}
const schema48 = {
  "enum": ["Pending", "Progressing", "Successful", "WaitingForApproval", "Failed", "Approved", "Denied", "Skipped"],
  "type": "string",
  "nullable": true
};
function validate173(data, {
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
  if (!(data === "Pending" || data === "Progressing" || data === "Successful" || data === "WaitingForApproval" || data === "Failed" || data === "Approved" || data === "Denied" || data === "Skipped")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema48.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate173.errors = vErrors;
  return errors === 0;
}
function validate160(data, {
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
    if (data.conditions !== undefined) {
      if (!validate161(data.conditions, {
        instancePath: instancePath + "/conditions",
        parentData: data,
        parentDataProperty: "conditions",
        rootData
      })) {
        vErrors = vErrors === null ? validate161.errors : vErrors.concat(validate161.errors);
        errors = vErrors.length;
      }
    }
    if (data.observedGeneration !== undefined) {
      if (!validate44(data.observedGeneration, {
        instancePath: instancePath + "/observedGeneration",
        parentData: data,
        parentDataProperty: "observedGeneration",
        rootData
      })) {
        vErrors = vErrors === null ? validate44.errors : vErrors.concat(validate44.errors);
        errors = vErrors.length;
      }
    }
    if (data.phase !== undefined) {
      if (!validate173(data.phase, {
        instancePath: instancePath + "/phase",
        parentData: data,
        parentDataProperty: "phase",
        rootData
      })) {
        vErrors = vErrors === null ? validate173.errors : vErrors.concat(validate173.errors);
        errors = vErrors.length;
      }
    }
  }
  validate160.errors = vErrors;
  return errors === 0;
}
function validate45(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="ops.kubedb.com.v1alpha1.ElasticsearchOpsRequest" */;
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
      if (!validate46(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate48(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
        errors = vErrors.length;
      }
    }
    if (data.metadata !== undefined) {
      if (!validate50(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate50.errors : vErrors.concat(validate50.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate54(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate160(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate160.errors : vErrors.concat(validate160.errors);
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
  validate45.errors = vErrors;
  return errors === 0;
}