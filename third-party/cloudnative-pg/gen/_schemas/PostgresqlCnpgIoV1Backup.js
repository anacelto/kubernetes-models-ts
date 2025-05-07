import { formats } from "@kubernetes-models/validate";
export const validate = validate29;
const schema12 = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "$ref": "kPCo7q64qkvZZZepms7vWJLwhdVUYocinMXZE0f1EFI"
    },
    "kind": {
      "$ref": "FMUt0VDSOe6mO0FvSQtdojKGIxV1r9KcT0u3rkXs"
    },
    "metadata": {
      "$ref": "F8UXVl2B8ROl9kb045E2at1pE3IVL8xPdYnpnYIkb0"
    },
    "spec": {
      "$ref": "j02YaPv4Z4qm1g38pZwRMEthLWB9QRg9nAcpn8zI"
    },
    "status": {
      "$ref": "CldXljX5WNt7DsiyABnCLeAB4MYXwLT6DasJLZ0YFQ"
    }
  },
  "required": ["metadata", "spec", "apiVersion", "kind"],
  "$id": "postgresql.cnpg.io.v1.Backup"
};
const schema13 = {
  "type": "string",
  "enum": ["postgresql.cnpg.io/v1"]
};
function validate30(data, {
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
  if (!(data === "postgresql.cnpg.io/v1")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema13.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate30.errors = vErrors;
  return errors === 0;
}
const schema14 = {
  "type": "string",
  "enum": ["Backup"]
};
function validate32(data, {
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
  if (!(data === "Backup")) {
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
  validate32.errors = vErrors;
  return errors === 0;
}
const schema15 = {
  "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
};
const schema16 = {};
import { validate as validate35 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
function validate34(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate35(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
    errors = vErrors.length;
  }
  validate34.errors = vErrors;
  return errors === 0;
}
const schema17 = {
  "properties": {
    "cluster": {
      "$ref": "HN5PKMIdyNeW2tH5k7qzNtrzheocymAho1Vd1ZpPn9c"
    },
    "method": {
      "$ref": "z2D8X5CJqfYeayY0dl2sV2eLFrgkOy7ksNrpcoeTy0"
    },
    "online": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "onlineConfiguration": {
      "$ref": "OlNBDff6CDocbJdFbxwesvJ2evuVGoLt9tZrQ"
    },
    "pluginConfiguration": {
      "$ref": "LUmVCNZt0y4GZlc7ExL63HS8nChULt3D8Ud0zcAtg"
    },
    "target": {
      "$ref": "u7QMKDiJ8qgF0kk6CDqY6BUrLvJNL1oBO9WTbFIYy7g"
    }
  },
  "required": ["cluster"],
  "type": "object"
};
const schema18 = {
  "properties": {
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["name"],
  "type": "object"
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
function validate39(data, {
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
  validate39.errors = vErrors;
  return errors === 0;
}
const schema19 = {
  "default": "barmanObjectStore",
  "enum": ["barmanObjectStore", "volumeSnapshot", "plugin"],
  "type": "string",
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
  if (!(data === "barmanObjectStore" || data === "volumeSnapshot" || data === "plugin")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema19.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate42.errors = vErrors;
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
const schema20 = {
  "properties": {
    "immediateCheckpoint": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "waitForArchive": {
      "$ref": "XI8SHPWBW6IRtzOhSeom8NHPNafxnM7Xgk3N9ZeNk"
    }
  },
  "type": "object",
  "nullable": true
};
const schema21 = {
  "default": true,
  "type": "boolean",
  "nullable": true
};
function validate47(data, {
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
  validate47.errors = vErrors;
  return errors === 0;
}
function validate45(data, {
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
    if (data.immediateCheckpoint !== undefined) {
      if (!validate21(data.immediateCheckpoint, {
        instancePath: instancePath + "/immediateCheckpoint",
        parentData: data,
        parentDataProperty: "immediateCheckpoint",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.waitForArchive !== undefined) {
      if (!validate47(data.waitForArchive, {
        instancePath: instancePath + "/waitForArchive",
        parentData: data,
        parentDataProperty: "waitForArchive",
        rootData
      })) {
        vErrors = vErrors === null ? validate47.errors : vErrors.concat(validate47.errors);
        errors = vErrors.length;
      }
    }
  }
  validate45.errors = vErrors;
  return errors === 0;
}
const schema22 = {
  "properties": {
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "parameters": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    }
  },
  "required": ["name"],
  "type": "object",
  "nullable": true
};
const schema23 = {
  "additionalProperties": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "object",
  "properties": {},
  "nullable": true
};
function validate52(data, {
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
  validate52.errors = vErrors;
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
    if (data.parameters !== undefined) {
      if (!validate52(data.parameters, {
        instancePath: instancePath + "/parameters",
        parentData: data,
        parentDataProperty: "parameters",
        rootData
      })) {
        vErrors = vErrors === null ? validate52.errors : vErrors.concat(validate52.errors);
        errors = vErrors.length;
      }
    }
  }
  validate50.errors = vErrors;
  return errors === 0;
}
const schema24 = {
  "enum": ["primary", "prefer-standby"],
  "type": "string",
  "nullable": true
};
function validate56(data, {
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
  if (!(data === "primary" || data === "prefer-standby")) {
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
  validate56.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.cluster === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "cluster"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.cluster !== undefined) {
      if (!validate39(data.cluster, {
        instancePath: instancePath + "/cluster",
        parentData: data,
        parentDataProperty: "cluster",
        rootData
      })) {
        vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
        errors = vErrors.length;
      }
    }
    if (data.method !== undefined) {
      if (!validate42(data.method, {
        instancePath: instancePath + "/method",
        parentData: data,
        parentDataProperty: "method",
        rootData
      })) {
        vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
        errors = vErrors.length;
      }
    }
    if (data.online !== undefined) {
      if (!validate21(data.online, {
        instancePath: instancePath + "/online",
        parentData: data,
        parentDataProperty: "online",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.onlineConfiguration !== undefined) {
      if (!validate45(data.onlineConfiguration, {
        instancePath: instancePath + "/onlineConfiguration",
        parentData: data,
        parentDataProperty: "onlineConfiguration",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.pluginConfiguration !== undefined) {
      if (!validate50(data.pluginConfiguration, {
        instancePath: instancePath + "/pluginConfiguration",
        parentData: data,
        parentDataProperty: "pluginConfiguration",
        rootData
      })) {
        vErrors = vErrors === null ? validate50.errors : vErrors.concat(validate50.errors);
        errors = vErrors.length;
      }
    }
    if (data.target !== undefined) {
      if (!validate56(data.target, {
        instancePath: instancePath + "/target",
        parentData: data,
        parentDataProperty: "target",
        rootData
      })) {
        vErrors = vErrors === null ? validate56.errors : vErrors.concat(validate56.errors);
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
  validate38.errors = vErrors;
  return errors === 0;
}
const schema25 = {
  "properties": {
    "azureCredentials": {
      "$ref": "i4D2g5tfj74s0kwb0GNZ9ZCLk0yfVX2hud4Tgs99oOM"
    },
    "backupId": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "backupLabelFile": {
      "$ref": "0d0YjoHtjtI7p6BAHkZ9AtqFZvdnJ29AdGDpfxXc"
    },
    "backupName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "beginLSN": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "beginWal": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "commandError": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "commandOutput": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "destinationPath": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "encryption": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "endLSN": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "endWal": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "endpointCA": {
      "$ref": "wd4FMUZLeOmt41IoDi5IBmDiWCYLWSdr70R9KuyLJIY"
    },
    "endpointURL": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "error": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "googleCredentials": {
      "$ref": "CENKtq3KCgNiAqrR2DZR7QJxyGqDkcByxKDdM4mbdmI"
    },
    "instanceID": {
      "$ref": "NvPaUL6E4CPFxcHOx16PocSxAg3LEdCIpJoy60VE"
    },
    "method": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "online": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "phase": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "s3Credentials": {
      "$ref": "8hTUO4uPoKjUD9fJISHvJ5lNiMgZ4s5pFjKKMG2xI"
    },
    "serverName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "snapshotBackupStatus": {
      "$ref": "CbpwHVWOMn9RCJW3FYMI3v4urhEYFiokRnwKJUNrr9Q"
    },
    "startedAt": {
      "$ref": "thZzwpySeU7LsVtTYjwqN1mWUAwFAnezim8OMie8k"
    },
    "stoppedAt": {
      "$ref": "thZzwpySeU7LsVtTYjwqN1mWUAwFAnezim8OMie8k"
    },
    "tablespaceMapFile": {
      "$ref": "0d0YjoHtjtI7p6BAHkZ9AtqFZvdnJ29AdGDpfxXc"
    }
  },
  "type": "object",
  "nullable": true
};
const schema26 = {
  "properties": {
    "connectionString": {
      "$ref": "wd4FMUZLeOmt41IoDi5IBmDiWCYLWSdr70R9KuyLJIY"
    },
    "inheritFromAzureAD": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "storageAccount": {
      "$ref": "wd4FMUZLeOmt41IoDi5IBmDiWCYLWSdr70R9KuyLJIY"
    },
    "storageKey": {
      "$ref": "wd4FMUZLeOmt41IoDi5IBmDiWCYLWSdr70R9KuyLJIY"
    },
    "storageSasToken": {
      "$ref": "wd4FMUZLeOmt41IoDi5IBmDiWCYLWSdr70R9KuyLJIY"
    }
  },
  "type": "object",
  "nullable": true
};
const schema8 = {
  "properties": {
    "key": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["key", "name"],
  "type": "object",
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
    if (data.key === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "key"
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
  validate23.errors = vErrors;
  return errors === 0;
}
function validate60(data, {
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
    if (data.connectionString !== undefined) {
      if (!validate23(data.connectionString, {
        instancePath: instancePath + "/connectionString",
        parentData: data,
        parentDataProperty: "connectionString",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.inheritFromAzureAD !== undefined) {
      if (!validate21(data.inheritFromAzureAD, {
        instancePath: instancePath + "/inheritFromAzureAD",
        parentData: data,
        parentDataProperty: "inheritFromAzureAD",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.storageAccount !== undefined) {
      if (!validate23(data.storageAccount, {
        instancePath: instancePath + "/storageAccount",
        parentData: data,
        parentDataProperty: "storageAccount",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.storageKey !== undefined) {
      if (!validate23(data.storageKey, {
        instancePath: instancePath + "/storageKey",
        parentData: data,
        parentDataProperty: "storageKey",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.storageSasToken !== undefined) {
      if (!validate23(data.storageSasToken, {
        instancePath: instancePath + "/storageSasToken",
        parentData: data,
        parentDataProperty: "storageSasToken",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate60.errors = vErrors;
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
const schema11 = {
  "format": "byte",
  "type": "string",
  "nullable": true
};
const formats2 = formats.byte;
function validate28(data, {
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
    if (!formats2.validate(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/format",
        keyword: "format",
        params: {
          format: "byte"
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
const schema27 = {
  "properties": {
    "applicationCredentials": {
      "$ref": "wd4FMUZLeOmt41IoDi5IBmDiWCYLWSdr70R9KuyLJIY"
    },
    "gkeEnvironment": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "type": "object",
  "nullable": true
};
function validate81(data, {
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
    if (data.applicationCredentials !== undefined) {
      if (!validate23(data.applicationCredentials, {
        instancePath: instancePath + "/applicationCredentials",
        parentData: data,
        parentDataProperty: "applicationCredentials",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.gkeEnvironment !== undefined) {
      if (!validate21(data.gkeEnvironment, {
        instancePath: instancePath + "/gkeEnvironment",
        parentData: data,
        parentDataProperty: "gkeEnvironment",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate81.errors = vErrors;
  return errors === 0;
}
const schema28 = {
  "properties": {
    "ContainerID": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "podName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.ContainerID !== undefined) {
      if (!validate26(data.ContainerID, {
        instancePath: instancePath + "/ContainerID",
        parentData: data,
        parentDataProperty: "ContainerID",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.podName !== undefined) {
      if (!validate26(data.podName, {
        instancePath: instancePath + "/podName",
        parentData: data,
        parentDataProperty: "podName",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate85.errors = vErrors;
  return errors === 0;
}
const schema29 = {
  "properties": {
    "accessKeyId": {
      "$ref": "wd4FMUZLeOmt41IoDi5IBmDiWCYLWSdr70R9KuyLJIY"
    },
    "inheritFromIAMRole": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "region": {
      "$ref": "wd4FMUZLeOmt41IoDi5IBmDiWCYLWSdr70R9KuyLJIY"
    },
    "secretAccessKey": {
      "$ref": "wd4FMUZLeOmt41IoDi5IBmDiWCYLWSdr70R9KuyLJIY"
    },
    "sessionToken": {
      "$ref": "wd4FMUZLeOmt41IoDi5IBmDiWCYLWSdr70R9KuyLJIY"
    }
  },
  "type": "object",
  "nullable": true
};
function validate92(data, {
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
    if (data.accessKeyId !== undefined) {
      if (!validate23(data.accessKeyId, {
        instancePath: instancePath + "/accessKeyId",
        parentData: data,
        parentDataProperty: "accessKeyId",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.inheritFromIAMRole !== undefined) {
      if (!validate21(data.inheritFromIAMRole, {
        instancePath: instancePath + "/inheritFromIAMRole",
        parentData: data,
        parentDataProperty: "inheritFromIAMRole",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.region !== undefined) {
      if (!validate23(data.region, {
        instancePath: instancePath + "/region",
        parentData: data,
        parentDataProperty: "region",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretAccessKey !== undefined) {
      if (!validate23(data.secretAccessKey, {
        instancePath: instancePath + "/secretAccessKey",
        parentData: data,
        parentDataProperty: "secretAccessKey",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.sessionToken !== undefined) {
      if (!validate23(data.sessionToken, {
        instancePath: instancePath + "/sessionToken",
        parentData: data,
        parentDataProperty: "sessionToken",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate92.errors = vErrors;
  return errors === 0;
}
const schema30 = {
  "properties": {
    "elements": {
      "$ref": "9cyiNsLU2QgDUC3sOopf482EwzMpSrm2w9bT2AymMw"
    }
  },
  "type": "object",
  "nullable": true
};
const schema31 = {
  "items": {
    "$ref": "nRusa7B9URm9ry1XHSjzajxYirzTMhd3u7D0SLwtb70"
  },
  "type": "array",
  "nullable": true
};
const schema32 = {
  "properties": {
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "tablespaceName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "type": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["name", "type"],
  "type": "object"
};
function validate102(data, {
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
    if (data.tablespaceName !== undefined) {
      if (!validate26(data.tablespaceName, {
        instancePath: instancePath + "/tablespaceName",
        parentData: data,
        parentDataProperty: "tablespaceName",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.type !== undefined) {
      if (!validate22(data.type, {
        instancePath: instancePath + "/type",
        parentData: data,
        parentDataProperty: "type",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
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
  validate102.errors = vErrors;
  return errors === 0;
}
function validate101(data, {
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
      if (!validate102(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate102.errors : vErrors.concat(validate102.errors);
        errors = vErrors.length;
      }
    }
  }
  validate101.errors = vErrors;
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
    if (data.elements !== undefined) {
      if (!validate101(data.elements, {
        instancePath: instancePath + "/elements",
        parentData: data,
        parentDataProperty: "elements",
        rootData
      })) {
        vErrors = vErrors === null ? validate101.errors : vErrors.concat(validate101.errors);
        errors = vErrors.length;
      }
    }
  }
  validate100.errors = vErrors;
  return errors === 0;
}
const schema10 = {
  "format": "date-time",
  "type": "string",
  "nullable": true
};
const formats0 = formats["date-time"];
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
  if (typeof data === "string") {
    if (!formats0.validate(data)) {
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
  validate27.errors = vErrors;
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
    if (data.azureCredentials !== undefined) {
      if (!validate60(data.azureCredentials, {
        instancePath: instancePath + "/azureCredentials",
        parentData: data,
        parentDataProperty: "azureCredentials",
        rootData
      })) {
        vErrors = vErrors === null ? validate60.errors : vErrors.concat(validate60.errors);
        errors = vErrors.length;
      }
    }
    if (data.backupId !== undefined) {
      if (!validate26(data.backupId, {
        instancePath: instancePath + "/backupId",
        parentData: data,
        parentDataProperty: "backupId",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.backupLabelFile !== undefined) {
      if (!validate28(data.backupLabelFile, {
        instancePath: instancePath + "/backupLabelFile",
        parentData: data,
        parentDataProperty: "backupLabelFile",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.backupName !== undefined) {
      if (!validate26(data.backupName, {
        instancePath: instancePath + "/backupName",
        parentData: data,
        parentDataProperty: "backupName",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.beginLSN !== undefined) {
      if (!validate26(data.beginLSN, {
        instancePath: instancePath + "/beginLSN",
        parentData: data,
        parentDataProperty: "beginLSN",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.beginWal !== undefined) {
      if (!validate26(data.beginWal, {
        instancePath: instancePath + "/beginWal",
        parentData: data,
        parentDataProperty: "beginWal",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.commandError !== undefined) {
      if (!validate26(data.commandError, {
        instancePath: instancePath + "/commandError",
        parentData: data,
        parentDataProperty: "commandError",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.commandOutput !== undefined) {
      if (!validate26(data.commandOutput, {
        instancePath: instancePath + "/commandOutput",
        parentData: data,
        parentDataProperty: "commandOutput",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.destinationPath !== undefined) {
      if (!validate26(data.destinationPath, {
        instancePath: instancePath + "/destinationPath",
        parentData: data,
        parentDataProperty: "destinationPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.encryption !== undefined) {
      if (!validate26(data.encryption, {
        instancePath: instancePath + "/encryption",
        parentData: data,
        parentDataProperty: "encryption",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.endLSN !== undefined) {
      if (!validate26(data.endLSN, {
        instancePath: instancePath + "/endLSN",
        parentData: data,
        parentDataProperty: "endLSN",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.endWal !== undefined) {
      if (!validate26(data.endWal, {
        instancePath: instancePath + "/endWal",
        parentData: data,
        parentDataProperty: "endWal",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.endpointCA !== undefined) {
      if (!validate23(data.endpointCA, {
        instancePath: instancePath + "/endpointCA",
        parentData: data,
        parentDataProperty: "endpointCA",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.endpointURL !== undefined) {
      if (!validate26(data.endpointURL, {
        instancePath: instancePath + "/endpointURL",
        parentData: data,
        parentDataProperty: "endpointURL",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.error !== undefined) {
      if (!validate26(data.error, {
        instancePath: instancePath + "/error",
        parentData: data,
        parentDataProperty: "error",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.googleCredentials !== undefined) {
      if (!validate81(data.googleCredentials, {
        instancePath: instancePath + "/googleCredentials",
        parentData: data,
        parentDataProperty: "googleCredentials",
        rootData
      })) {
        vErrors = vErrors === null ? validate81.errors : vErrors.concat(validate81.errors);
        errors = vErrors.length;
      }
    }
    if (data.instanceID !== undefined) {
      if (!validate85(data.instanceID, {
        instancePath: instancePath + "/instanceID",
        parentData: data,
        parentDataProperty: "instanceID",
        rootData
      })) {
        vErrors = vErrors === null ? validate85.errors : vErrors.concat(validate85.errors);
        errors = vErrors.length;
      }
    }
    if (data.method !== undefined) {
      if (!validate26(data.method, {
        instancePath: instancePath + "/method",
        parentData: data,
        parentDataProperty: "method",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.online !== undefined) {
      if (!validate21(data.online, {
        instancePath: instancePath + "/online",
        parentData: data,
        parentDataProperty: "online",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.phase !== undefined) {
      if (!validate26(data.phase, {
        instancePath: instancePath + "/phase",
        parentData: data,
        parentDataProperty: "phase",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.s3Credentials !== undefined) {
      if (!validate92(data.s3Credentials, {
        instancePath: instancePath + "/s3Credentials",
        parentData: data,
        parentDataProperty: "s3Credentials",
        rootData
      })) {
        vErrors = vErrors === null ? validate92.errors : vErrors.concat(validate92.errors);
        errors = vErrors.length;
      }
    }
    if (data.serverName !== undefined) {
      if (!validate26(data.serverName, {
        instancePath: instancePath + "/serverName",
        parentData: data,
        parentDataProperty: "serverName",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.snapshotBackupStatus !== undefined) {
      if (!validate100(data.snapshotBackupStatus, {
        instancePath: instancePath + "/snapshotBackupStatus",
        parentData: data,
        parentDataProperty: "snapshotBackupStatus",
        rootData
      })) {
        vErrors = vErrors === null ? validate100.errors : vErrors.concat(validate100.errors);
        errors = vErrors.length;
      }
    }
    if (data.startedAt !== undefined) {
      if (!validate27(data.startedAt, {
        instancePath: instancePath + "/startedAt",
        parentData: data,
        parentDataProperty: "startedAt",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.stoppedAt !== undefined) {
      if (!validate27(data.stoppedAt, {
        instancePath: instancePath + "/stoppedAt",
        parentData: data,
        parentDataProperty: "stoppedAt",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.tablespaceMapFile !== undefined) {
      if (!validate28(data.tablespaceMapFile, {
        instancePath: instancePath + "/tablespaceMapFile",
        parentData: data,
        parentDataProperty: "tablespaceMapFile",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
  }
  validate59.errors = vErrors;
  return errors === 0;
}
function validate29(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="postgresql.cnpg.io.v1.Backup" */;
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
      if (!validate30(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate32(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
        errors = vErrors.length;
      }
    }
    if (data.metadata !== undefined) {
      if (!validate34(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate38(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate59(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate59.errors : vErrors.concat(validate59.errors);
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
  validate29.errors = vErrors;
  return errors === 0;
}