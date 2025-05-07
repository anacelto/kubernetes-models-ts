import { formats } from "@kubernetes-models/validate";
export const validate = validate51;
const schema21 = {
  "type": "object",
  "properties": {
    "kind": {
      "$ref": "lLbb4uyonFkPiFlzsYEYtP6rfeqGVBLyHGKYcfhk"
    },
    "apiVersion": {
      "$ref": "zMc9FKcEiJ0jMIRxr8K2ZJESnPo8cuNwkxR0cMhnEe0"
    },
    "spec": {
      "$ref": "JEPJro7sRIj2XVKpNDGzx8uA7GMeAzI3VgS3g1dqVU"
    },
    "status": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "metadata": {
      "$ref": "a6f0oUEaFqHmymdwnqPORTNOTU7GczWAkwGD0uYU"
    }
  },
  "required": ["kind", "apiVersion", "spec"],
  "$id": "acid.zalan.do.v1.postgresql"
};
const schema22 = {
  "type": "string",
  "enum": ["postgresql"]
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
  if (!(data === "postgresql")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema22.enum
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
const schema23 = {
  "type": "string",
  "enum": ["acid.zalan.do/v1"]
};
function validate54(data, {
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
  if (!(data === "acid.zalan.do/v1")) {
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
  validate54.errors = vErrors;
  return errors === 0;
}
const schema24 = {
  "type": "object",
  "required": ["numberOfInstances", "teamId", "postgresql", "volume"],
  "properties": {
    "additionalVolumes": {
      "$ref": "pJaFdLJmLHfjdVh8MqM14URJQNEUBj8bSPxYzKxDGJI"
    },
    "allowedSourceRanges": {
      "$ref": "66esCeO4R7Pb78BQWfjRYAGWPaJ4ocrzX9FGDKDhak0"
    },
    "clone": {
      "$ref": "kVv2xiUUepJzDLbvFyvaxqisvMI2stBinxHSq8"
    },
    "connectionPooler": {
      "$ref": "ZuFBtJFTlg94tReiZgjd9f5uuapNdiQusXt8y2UhHcI"
    },
    "databases": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "dockerImage": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "enableConnectionPooler": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "enableReplicaConnectionPooler": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "enableLogicalBackup": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "enableMasterLoadBalancer": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "enableMasterPoolerLoadBalancer": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "enableReplicaLoadBalancer": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "enableReplicaPoolerLoadBalancer": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "enableShmVolume": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "env": {
      "$ref": "TvsDOhdSgsJPYJYYOLR0VS9CTDl7VugOo2gQX7MeM"
    },
    "init_containers": {
      "$ref": "TvsDOhdSgsJPYJYYOLR0VS9CTDl7VugOo2gQX7MeM"
    },
    "initContainers": {
      "$ref": "TvsDOhdSgsJPYJYYOLR0VS9CTDl7VugOo2gQX7MeM"
    },
    "logicalBackupSchedule": {
      "$ref": "kJiqzyfmfr0XMKXBv3qLXsPNFz7viyk2lmGvJOa1o1w"
    },
    "maintenanceWindows": {
      "$ref": "23zxDqyOmoo6hxoJBXC13EMr3P8UfbQ4FSDoWPio"
    },
    "masterServiceAnnotations": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "nodeAffinity": {
      "$ref": "ilIeGX7cSHMmL7ioNwzODU6lYXSv4jarxIX2s8IW4"
    },
    "numberOfInstances": {
      "$ref": "lUZqDB1t3N4x2sAYY6SWklYZyKg6au7Of9UhEiDuZA"
    },
    "patroni": {
      "$ref": "IYQRA8YRXLbsHs7tjzi0ynxd4Nd3FQXH4lje7izMcDQ"
    },
    "podAnnotations": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "pod_priority_class_name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "podPriorityClassName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "postgresql": {
      "$ref": "cO0FJgAwwtHgYXJz7aLBgTxmJT06FUxxHRzxYn5qScY"
    },
    "preparedDatabases": {
      "$ref": "65Lr9K9dDOfYFB4Kx4TB810nMkH97az649PwQ03q4"
    },
    "replicaLoadBalancer": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "replicaServiceAnnotations": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "resources": {
      "$ref": "RV0rut2FApmFSP8FNubwafvGE7kSkZPSI2zeVDy6nCE"
    },
    "schedulerName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "serviceAnnotations": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "sidecars": {
      "$ref": "TvsDOhdSgsJPYJYYOLR0VS9CTDl7VugOo2gQX7MeM"
    },
    "spiloRunAsUser": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "spiloRunAsGroup": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "spiloFSGroup": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "standby": {
      "$ref": "zFMhgVScPZWz6yjvDqyUKReTFkkUmHlUdVINN4Arx0"
    },
    "streams": {
      "$ref": "7IAF1M7PgKhUbIBJ8rYvRwxT7A5yqFB2gAVKdw6u5A"
    },
    "teamId": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "tls": {
      "$ref": "epwaxHi4BbJkebBizrVzasbxib2dNzNikxWdPcEehQ"
    },
    "tolerations": {
      "$ref": "kgEtZA2OxCzisaHwwnCNzMZVbYaogFzB2rKhufSQuE"
    },
    "useLoadBalancer": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "users": {
      "$ref": "IT7267iJL4BGqOA9vTQkFUtGzcWv8XkllBm5ffiPs"
    },
    "usersIgnoringSecretRotation": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "usersWithInPlaceSecretRotation": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "usersWithSecretRotation": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "volume": {
      "$ref": "M7byGuXsxd3PGubVerbGNzZYrN1O6Oaf17vQf8o"
    }
  }
};
const schema25 = {
  "type": "array",
  "items": {
    "$ref": "EUrtOZGGZeI6kETzcr2pOSlUqQPvrgJE8FCVsQNW8"
  },
  "nullable": true
};
const schema26 = {
  "type": "object",
  "required": ["name", "mountPath", "volumeSource"],
  "properties": {
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "mountPath": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "targetContainers": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "volumeSource": {
      "$ref": "LHTa3xan4hAuiiV93WwpRLsGuslSrjGnUiRd62GaY"
    },
    "subPath": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  }
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
const schema15 = {
  "type": "array",
  "nullable": true,
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  }
};
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
  validate34.errors = vErrors;
  return errors === 0;
}
const schema12 = {
  "type": "object",
  "properties": {}
};
function validate29(data, {
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
  validate29.errors = vErrors;
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
function validate58(data, {
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
    if (data.mountPath === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "mountPath"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.volumeSource === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "volumeSource"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
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
    if (data.mountPath !== undefined) {
      if (!validate21(data.mountPath, {
        instancePath: instancePath + "/mountPath",
        parentData: data,
        parentDataProperty: "mountPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.targetContainers !== undefined) {
      if (!validate34(data.targetContainers, {
        instancePath: instancePath + "/targetContainers",
        parentData: data,
        parentDataProperty: "targetContainers",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeSource !== undefined) {
      if (!validate29(data.volumeSource, {
        instancePath: instancePath + "/volumeSource",
        parentData: data,
        parentDataProperty: "volumeSource",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.subPath !== undefined) {
      if (!validate22(data.subPath, {
        instancePath: instancePath + "/subPath",
        parentData: data,
        parentDataProperty: "subPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
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
  validate58.errors = vErrors;
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
      if (!validate58(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
  }
  validate57.errors = vErrors;
  return errors === 0;
}
const schema27 = {
  "type": "array",
  "nullable": true,
  "items": {
    "$ref": "FQeDhlsSna54bJ689mbFeJStGrOg7MLWIWdDv9U"
  }
};
const schema28 = {
  "type": "string",
  "pattern": "^(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\/(\\d|[1-2]\\d|3[0-2])$"
};
const pattern2 = new RegExp("^(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\/(\\d|[1-2]\\d|3[0-2])$", "u");
function validate67(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern2.test(data)) {
      const err0 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\/(\\d|[1-2]\\d|3[0-2])$"
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
  validate67.errors = vErrors;
  return errors === 0;
}
function validate66(data, {
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
      if (!validate67(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate67.errors : vErrors.concat(validate67.errors);
        errors = vErrors.length;
      }
    }
  }
  validate66.errors = vErrors;
  return errors === 0;
}
const schema29 = {
  "type": "object",
  "required": ["cluster"],
  "properties": {
    "cluster": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "s3_endpoint": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "s3_access_key_id": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "s3_secret_access_key": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "s3_force_path_style": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "s3_wal_path": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "timestamp": {
      "$ref": "AlN8qcf22gquqZKYsfX8jEUZuQTIkYqRsYzsrxxrOV8"
    },
    "uid": {
      "$ref": "6BugyxAJOr4o3rcxs3K5v4Z99iBIndjHqairi2vUa68"
    }
  },
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
const schema30 = {
  "type": "string",
  "pattern": "^([0-9]+)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])[Tt]([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\\.[0-9]+)?(([+-]([01][0-9]|2[0-3]):[0-5][0-9]))$",
  "nullable": true
};
const pattern3 = new RegExp("^([0-9]+)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])[Tt]([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\\.[0-9]+)?(([+-]([01][0-9]|2[0-3]):[0-5][0-9]))$", "u");
function validate77(data, {
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
    if (!pattern3.test(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^([0-9]+)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])[Tt]([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\\.[0-9]+)?(([+-]([01][0-9]|2[0-3]):[0-5][0-9]))$"
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
  validate77.errors = vErrors;
  return errors === 0;
}
const schema31 = {
  "format": "uuid",
  "type": "string",
  "nullable": true
};
const formats0 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
function validate79(data, {
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
    if (!formats0.test(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/format",
        keyword: "format",
        params: {
          format: "uuid"
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
  validate79.errors = vErrors;
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
    if (data.cluster === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "cluster"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.cluster !== undefined) {
      if (!validate21(data.cluster, {
        instancePath: instancePath + "/cluster",
        parentData: data,
        parentDataProperty: "cluster",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.s3_endpoint !== undefined) {
      if (!validate22(data.s3_endpoint, {
        instancePath: instancePath + "/s3_endpoint",
        parentData: data,
        parentDataProperty: "s3_endpoint",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.s3_access_key_id !== undefined) {
      if (!validate22(data.s3_access_key_id, {
        instancePath: instancePath + "/s3_access_key_id",
        parentData: data,
        parentDataProperty: "s3_access_key_id",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.s3_secret_access_key !== undefined) {
      if (!validate22(data.s3_secret_access_key, {
        instancePath: instancePath + "/s3_secret_access_key",
        parentData: data,
        parentDataProperty: "s3_secret_access_key",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.s3_force_path_style !== undefined) {
      if (!validate28(data.s3_force_path_style, {
        instancePath: instancePath + "/s3_force_path_style",
        parentData: data,
        parentDataProperty: "s3_force_path_style",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.s3_wal_path !== undefined) {
      if (!validate22(data.s3_wal_path, {
        instancePath: instancePath + "/s3_wal_path",
        parentData: data,
        parentDataProperty: "s3_wal_path",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.timestamp !== undefined) {
      if (!validate77(data.timestamp, {
        instancePath: instancePath + "/timestamp",
        parentData: data,
        parentDataProperty: "timestamp",
        rootData
      })) {
        vErrors = vErrors === null ? validate77.errors : vErrors.concat(validate77.errors);
        errors = vErrors.length;
      }
    }
    if (data.uid !== undefined) {
      if (!validate79(data.uid, {
        instancePath: instancePath + "/uid",
        parentData: data,
        parentDataProperty: "uid",
        rootData
      })) {
        vErrors = vErrors === null ? validate79.errors : vErrors.concat(validate79.errors);
        errors = vErrors.length;
      }
    }
  }
  validate70.errors = vErrors;
  return errors === 0;
}
const schema32 = {
  "type": "object",
  "properties": {
    "dockerImage": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "maxDBConnections": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "mode": {
      "$ref": "AfxDSWq8B9s5fejlT6XLpX1JWYAAYjILInHG13bYug"
    },
    "numberOfInstances": {
      "$ref": "W0lpfNpopiiryJpdaW8T5ftPu9NVFOx3spCwCqsKM0"
    },
    "resources": {
      "$ref": "7oTwtnj2Pj4S6HMMIvyeOAZnEpoPiwnlbhvOOPNQw"
    },
    "schema": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "user": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "nullable": true
};
const schema19 = {
  "type": "integer",
  "nullable": true
};
function validate45(data, {
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
  validate45.errors = vErrors;
  return errors === 0;
}
const schema33 = {
  "type": "string",
  "enum": ["session", "transaction"],
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
  if (!(data === "session" || data === "transaction")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema33.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate85.errors = vErrors;
  return errors === 0;
}
const schema34 = {
  "type": "integer",
  "minimum": 1,
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
    if (data < 1 || isNaN(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/minimum",
        keyword: "minimum",
        params: {
          comparison: ">=",
          limit: 1
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
  validate87.errors = vErrors;
  return errors === 0;
}
const schema35 = {
  "type": "object",
  "properties": {
    "limits": {
      "$ref": "keZ9IihQTesUvl5yj5Ie7AVXSHsYUro04dysnR7bJHw"
    },
    "requests": {
      "$ref": "keZ9IihQTesUvl5yj5Ie7AVXSHsYUro04dysnR7bJHw"
    }
  },
  "nullable": true
};
const schema8 = {
  "type": "object",
  "properties": {
    "cpu": {
      "$ref": "Xza6d5tCDZnfRjeGH4WtAhdgrn4ZuStbFa8NJOGbU"
    },
    "memory": {
      "$ref": "Gu1Ixp344g2pD0UPUtyhcYbZCE1cAfJ068GTt7bYlA0"
    }
  },
  "nullable": true
};
const schema9 = {
  "type": "string",
  "pattern": "^(\\d+m|\\d+(\\.\\d{1,3})?)$",
  "nullable": true
};
const pattern0 = new RegExp("^(\\d+m|\\d+(\\.\\d{1,3})?)$", "u");
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
  if (typeof data === "string") {
    if (!pattern0.test(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^(\\d+m|\\d+(\\.\\d{1,3})?)$"
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
  validate24.errors = vErrors;
  return errors === 0;
}
const schema10 = {
  "type": "string",
  "pattern": "^(\\d+(e\\d+)?|\\d+(\\.\\d+)?(e\\d+)?[EPTGMK]i?)$",
  "nullable": true
};
const pattern1 = new RegExp("^(\\d+(e\\d+)?|\\d+(\\.\\d+)?(e\\d+)?[EPTGMK]i?)$", "u");
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
  if (typeof data === "string") {
    if (!pattern1.test(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^(\\d+(e\\d+)?|\\d+(\\.\\d+)?(e\\d+)?[EPTGMK]i?)$"
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
  validate26.errors = vErrors;
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
    if (data.cpu !== undefined) {
      if (!validate24(data.cpu, {
        instancePath: instancePath + "/cpu",
        parentData: data,
        parentDataProperty: "cpu",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.memory !== undefined) {
      if (!validate26(data.memory, {
        instancePath: instancePath + "/memory",
        parentData: data,
        parentDataProperty: "memory",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate23.errors = vErrors;
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
      if (!validate23(data.limits, {
        instancePath: instancePath + "/limits",
        parentData: data,
        parentDataProperty: "limits",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.requests !== undefined) {
      if (!validate23(data.requests, {
        instancePath: instancePath + "/requests",
        parentData: data,
        parentDataProperty: "requests",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate89.errors = vErrors;
  return errors === 0;
}
function validate82(data, {
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
    if (data.dockerImage !== undefined) {
      if (!validate22(data.dockerImage, {
        instancePath: instancePath + "/dockerImage",
        parentData: data,
        parentDataProperty: "dockerImage",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.maxDBConnections !== undefined) {
      if (!validate45(data.maxDBConnections, {
        instancePath: instancePath + "/maxDBConnections",
        parentData: data,
        parentDataProperty: "maxDBConnections",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.mode !== undefined) {
      if (!validate85(data.mode, {
        instancePath: instancePath + "/mode",
        parentData: data,
        parentDataProperty: "mode",
        rootData
      })) {
        vErrors = vErrors === null ? validate85.errors : vErrors.concat(validate85.errors);
        errors = vErrors.length;
      }
    }
    if (data.numberOfInstances !== undefined) {
      if (!validate87(data.numberOfInstances, {
        instancePath: instancePath + "/numberOfInstances",
        parentData: data,
        parentDataProperty: "numberOfInstances",
        rootData
      })) {
        vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
        errors = vErrors.length;
      }
    }
    if (data.resources !== undefined) {
      if (!validate89(data.resources, {
        instancePath: instancePath + "/resources",
        parentData: data,
        parentDataProperty: "resources",
        rootData
      })) {
        vErrors = vErrors === null ? validate89.errors : vErrors.concat(validate89.errors);
        errors = vErrors.length;
      }
    }
    if (data.schema !== undefined) {
      if (!validate22(data.schema, {
        instancePath: instancePath + "/schema",
        parentData: data,
        parentDataProperty: "schema",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.user !== undefined) {
      if (!validate22(data.user, {
        instancePath: instancePath + "/user",
        parentData: data,
        parentDataProperty: "user",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate82.errors = vErrors;
  return errors === 0;
}
const schema14 = {
  "type": "object",
  "additionalProperties": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "properties": {},
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
  validate32.errors = vErrors;
  return errors === 0;
}
const schema13 = {
  "type": "array",
  "nullable": true,
  "items": {
    "$ref": "LHTa3xan4hAuiiV93WwpRLsGuslSrjGnUiRd62GaY"
  }
};
function validate30(data, {
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
      if (!validate29(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
  }
  validate30.errors = vErrors;
  return errors === 0;
}
const schema36 = {
  "type": "string",
  "pattern": "^(\\d+|\\*)(/\\d+)?(\\s+(\\d+|\\*)(/\\d+)?){4}$",
  "nullable": true
};
const pattern4 = new RegExp("^(\\d+|\\*)(/\\d+)?(\\s+(\\d+|\\*)(/\\d+)?){4}$", "u");
function validate109(data, {
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
    if (!pattern4.test(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^(\\d+|\\*)(/\\d+)?(\\s+(\\d+|\\*)(/\\d+)?){4}$"
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
  validate109.errors = vErrors;
  return errors === 0;
}
const schema37 = {
  "type": "array",
  "items": {
    "$ref": "6RlrDEQf4XcygInjjjRx4in5JibkI58EyKT8jfQ"
  },
  "nullable": true
};
const schema38 = {
  "type": "string",
  "pattern": "^\\ *((Mon|Tue|Wed|Thu|Fri|Sat|Sun):(2[0-3]|[01]?\\d):([0-5]?\\d)|(2[0-3]|[01]?\\d):([0-5]?\\d))-((Mon|Tue|Wed|Thu|Fri|Sat|Sun):(2[0-3]|[01]?\\d):([0-5]?\\d)|(2[0-3]|[01]?\\d):([0-5]?\\d))\\ *$"
};
import func2 from "@kubernetes-models/validate/runtime/re2";
const pattern5 = new func2("^\\ *((Mon|Tue|Wed|Thu|Fri|Sat|Sun):(2[0-3]|[01]?\\d):([0-5]?\\d)|(2[0-3]|[01]?\\d):([0-5]?\\d))-((Mon|Tue|Wed|Thu|Fri|Sat|Sun):(2[0-3]|[01]?\\d):([0-5]?\\d)|(2[0-3]|[01]?\\d):([0-5]?\\d))\\ *$", "u");
function validate112(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern5.test(data)) {
      const err0 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^\\ *((Mon|Tue|Wed|Thu|Fri|Sat|Sun):(2[0-3]|[01]?\\d):([0-5]?\\d)|(2[0-3]|[01]?\\d):([0-5]?\\d))-((Mon|Tue|Wed|Thu|Fri|Sat|Sun):(2[0-3]|[01]?\\d):([0-5]?\\d)|(2[0-3]|[01]?\\d):([0-5]?\\d))\\ *$"
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
  validate112.errors = vErrors;
  return errors === 0;
}
function validate111(data, {
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
      if (!validate112(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate112.errors : vErrors.concat(validate112.errors);
        errors = vErrors.length;
      }
    }
  }
  validate111.errors = vErrors;
  return errors === 0;
}
const schema39 = {
  "type": "object",
  "properties": {
    "preferredDuringSchedulingIgnoredDuringExecution": {
      "$ref": "HC615OS3o4FaxIeSsZYUiEWpRFwokElNCDLKZWAw"
    },
    "requiredDuringSchedulingIgnoredDuringExecution": {
      "$ref": "yWknb7dT7ue0rjnNXkPUrp1WPuHKhs0S6rXzUG4qQHM"
    }
  },
  "nullable": true
};
const schema40 = {
  "type": "array",
  "items": {
    "$ref": "KT8yO8lY4mlKxs74BP1LG0T6VlK79euyrEXXie1TQM"
  },
  "nullable": true
};
const schema41 = {
  "type": "object",
  "required": ["preference", "weight"],
  "properties": {
    "preference": {
      "$ref": "tydPzboPRD4fGreI5KQTJcmvoGoGl0gxaSYfabYh8UI"
    },
    "weight": {
      "$ref": "ppOMqvYEA3GSH3ozhOJ2Wta6ImWhzC9DOYsjidshCYo"
    }
  }
};
const schema18 = {
  "type": "object",
  "properties": {
    "matchExpressions": {
      "$ref": "9BW0WuIp1SxhBT4vHohXPUikn0YuwzPq2mNUBC1NsE"
    },
    "matchFields": {
      "$ref": "9BW0WuIp1SxhBT4vHohXPUikn0YuwzPq2mNUBC1NsE"
    }
  }
};
const schema16 = {
  "type": "array",
  "items": {
    "$ref": "MkwwSDeYoT1APit7w8qsvbKCw8OynjINdeojyPgpPQ"
  },
  "nullable": true
};
const schema17 = {
  "type": "object",
  "required": ["key", "operator"],
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
  }
};
function validate37(data, {
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
    if (data.operator !== undefined) {
      if (!validate21(data.operator, {
        instancePath: instancePath + "/operator",
        parentData: data,
        parentDataProperty: "operator",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.values !== undefined) {
      if (!validate34(data.values, {
        instancePath: instancePath + "/values",
        parentData: data,
        parentDataProperty: "values",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
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
  validate37.errors = vErrors;
  return errors === 0;
}
function validate36(data, {
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
      if (!validate37(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
        errors = vErrors.length;
      }
    }
  }
  validate36.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.matchExpressions !== undefined) {
      if (!validate36(data.matchExpressions, {
        instancePath: instancePath + "/matchExpressions",
        parentData: data,
        parentDataProperty: "matchExpressions",
        rootData
      })) {
        vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
        errors = vErrors.length;
      }
    }
    if (data.matchFields !== undefined) {
      if (!validate36(data.matchFields, {
        instancePath: instancePath + "/matchFields",
        parentData: data,
        parentDataProperty: "matchFields",
        rootData
      })) {
        vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
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
  validate42.errors = vErrors;
  return errors === 0;
}
const schema42 = {
  "format": "int32",
  "type": "integer"
};
const formats2 = formats.int32;
function validate120(data, {
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
    if (!formats2.validate(data)) {
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
  validate120.errors = vErrors;
  return errors === 0;
}
function validate118(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.preference === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "preference"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.weight === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "weight"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.preference !== undefined) {
      if (!validate42(data.preference, {
        instancePath: instancePath + "/preference",
        parentData: data,
        parentDataProperty: "preference",
        rootData
      })) {
        vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
        errors = vErrors.length;
      }
    }
    if (data.weight !== undefined) {
      if (!validate120(data.weight, {
        instancePath: instancePath + "/weight",
        parentData: data,
        parentDataProperty: "weight",
        rootData
      })) {
        vErrors = vErrors === null ? validate120.errors : vErrors.concat(validate120.errors);
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
  validate118.errors = vErrors;
  return errors === 0;
}
function validate117(data, {
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
      if (!validate118(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate118.errors : vErrors.concat(validate118.errors);
        errors = vErrors.length;
      }
    }
  }
  validate117.errors = vErrors;
  return errors === 0;
}
const schema43 = {
  "type": "object",
  "required": ["nodeSelectorTerms"],
  "properties": {
    "nodeSelectorTerms": {
      "$ref": "hVQp5aNt5Ip0WaaRBpcUfl5xvhWH5vfkg8VQq1is"
    }
  },
  "nullable": true
};
const schema44 = {
  "type": "array",
  "items": {
    "$ref": "tydPzboPRD4fGreI5KQTJcmvoGoGl0gxaSYfabYh8UI"
  }
};
function validate125(data, {
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
      if (!validate42(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
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
  validate125.errors = vErrors;
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
    if (data.nodeSelectorTerms === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "nodeSelectorTerms"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.nodeSelectorTerms !== undefined) {
      if (!validate125(data.nodeSelectorTerms, {
        instancePath: instancePath + "/nodeSelectorTerms",
        parentData: data,
        parentDataProperty: "nodeSelectorTerms",
        rootData
      })) {
        vErrors = vErrors === null ? validate125.errors : vErrors.concat(validate125.errors);
        errors = vErrors.length;
      }
    }
  }
  validate124.errors = vErrors;
  return errors === 0;
}
function validate116(data, {
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
    if (data.preferredDuringSchedulingIgnoredDuringExecution !== undefined) {
      if (!validate117(data.preferredDuringSchedulingIgnoredDuringExecution, {
        instancePath: instancePath + "/preferredDuringSchedulingIgnoredDuringExecution",
        parentData: data,
        parentDataProperty: "preferredDuringSchedulingIgnoredDuringExecution",
        rootData
      })) {
        vErrors = vErrors === null ? validate117.errors : vErrors.concat(validate117.errors);
        errors = vErrors.length;
      }
    }
    if (data.requiredDuringSchedulingIgnoredDuringExecution !== undefined) {
      if (!validate124(data.requiredDuringSchedulingIgnoredDuringExecution, {
        instancePath: instancePath + "/requiredDuringSchedulingIgnoredDuringExecution",
        parentData: data,
        parentDataProperty: "requiredDuringSchedulingIgnoredDuringExecution",
        rootData
      })) {
        vErrors = vErrors === null ? validate124.errors : vErrors.concat(validate124.errors);
        errors = vErrors.length;
      }
    }
  }
  validate116.errors = vErrors;
  return errors === 0;
}
const schema45 = {
  "type": "integer",
  "minimum": 0
};
function validate130(data, {
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
  validate130.errors = vErrors;
  return errors === 0;
}
const schema46 = {
  "type": "object",
  "properties": {
    "failsafe_mode": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "initdb": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "loop_wait": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "maximum_lag_on_failover": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "pg_hba": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "retry_timeout": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "slots": {
      "$ref": "K6sVCVNk6KuJIeSoURfshJEGRV2GEGeya7jyehrKc4"
    },
    "synchronous_mode": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "synchronous_mode_strict": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "synchronous_node_count": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "ttl": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    }
  },
  "nullable": true
};
const schema47 = {
  "type": "object",
  "additionalProperties": {
    "$ref": "7ypTXGu169g2YEFZECay28baIMTu0duuTg4S6VaFV8"
  },
  "properties": {},
  "nullable": true
};
const schema48 = {
  "type": "object",
  "additionalProperties": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
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
      if (!validate140(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
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
function validate132(data, {
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
    if (data.failsafe_mode !== undefined) {
      if (!validate28(data.failsafe_mode, {
        instancePath: instancePath + "/failsafe_mode",
        parentData: data,
        parentDataProperty: "failsafe_mode",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.initdb !== undefined) {
      if (!validate32(data.initdb, {
        instancePath: instancePath + "/initdb",
        parentData: data,
        parentDataProperty: "initdb",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
        errors = vErrors.length;
      }
    }
    if (data.loop_wait !== undefined) {
      if (!validate45(data.loop_wait, {
        instancePath: instancePath + "/loop_wait",
        parentData: data,
        parentDataProperty: "loop_wait",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.maximum_lag_on_failover !== undefined) {
      if (!validate45(data.maximum_lag_on_failover, {
        instancePath: instancePath + "/maximum_lag_on_failover",
        parentData: data,
        parentDataProperty: "maximum_lag_on_failover",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.pg_hba !== undefined) {
      if (!validate34(data.pg_hba, {
        instancePath: instancePath + "/pg_hba",
        parentData: data,
        parentDataProperty: "pg_hba",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.retry_timeout !== undefined) {
      if (!validate45(data.retry_timeout, {
        instancePath: instancePath + "/retry_timeout",
        parentData: data,
        parentDataProperty: "retry_timeout",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.slots !== undefined) {
      if (!validate139(data.slots, {
        instancePath: instancePath + "/slots",
        parentData: data,
        parentDataProperty: "slots",
        rootData
      })) {
        vErrors = vErrors === null ? validate139.errors : vErrors.concat(validate139.errors);
        errors = vErrors.length;
      }
    }
    if (data.synchronous_mode !== undefined) {
      if (!validate28(data.synchronous_mode, {
        instancePath: instancePath + "/synchronous_mode",
        parentData: data,
        parentDataProperty: "synchronous_mode",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.synchronous_mode_strict !== undefined) {
      if (!validate28(data.synchronous_mode_strict, {
        instancePath: instancePath + "/synchronous_mode_strict",
        parentData: data,
        parentDataProperty: "synchronous_mode_strict",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.synchronous_node_count !== undefined) {
      if (!validate45(data.synchronous_node_count, {
        instancePath: instancePath + "/synchronous_node_count",
        parentData: data,
        parentDataProperty: "synchronous_node_count",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.ttl !== undefined) {
      if (!validate45(data.ttl, {
        instancePath: instancePath + "/ttl",
        parentData: data,
        parentDataProperty: "ttl",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
  }
  validate132.errors = vErrors;
  return errors === 0;
}
const schema49 = {
  "type": "object",
  "required": ["version"],
  "properties": {
    "version": {
      "$ref": "ZZlv39qUFUT5GpMSwJbELp4dgiYR8U9iCO6IbRrR1Hg"
    },
    "parameters": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    }
  }
};
const schema50 = {
  "type": "string",
  "enum": ["11", "12", "13", "14", "15", "16"]
};
function validate153(data, {
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
  if (!(data === "11" || data === "12" || data === "13" || data === "14" || data === "15" || data === "16")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema50.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate153.errors = vErrors;
  return errors === 0;
}
function validate152(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.version === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "version"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.version !== undefined) {
      if (!validate153(data.version, {
        instancePath: instancePath + "/version",
        parentData: data,
        parentDataProperty: "version",
        rootData
      })) {
        vErrors = vErrors === null ? validate153.errors : vErrors.concat(validate153.errors);
        errors = vErrors.length;
      }
    }
    if (data.parameters !== undefined) {
      if (!validate32(data.parameters, {
        instancePath: instancePath + "/parameters",
        parentData: data,
        parentDataProperty: "parameters",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
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
  validate152.errors = vErrors;
  return errors === 0;
}
const schema51 = {
  "type": "object",
  "additionalProperties": {
    "$ref": "CYu9DxsCSrUq8i1D6QesRM5vzWd6eW4D1LaBWvABw"
  },
  "properties": {},
  "nullable": true
};
const schema52 = {
  "type": "object",
  "properties": {
    "defaultUsers": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "extensions": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "schemas": {
      "$ref": "VyE3NJHs4pyJSmnSvLetiQ4GsZgjSyDnQ4Na3SS0I"
    },
    "secretNamespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  }
};
const schema53 = {
  "type": "object",
  "additionalProperties": {
    "$ref": "9eJEMr2KZack55j8ihkt5LDMOD6xAkNpwBId1h3JrQ"
  },
  "properties": {},
  "nullable": true
};
const schema54 = {
  "type": "object",
  "properties": {
    "defaultUsers": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "defaultRoles": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  }
};
function validate162(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.defaultUsers !== undefined) {
      if (!validate28(data.defaultUsers, {
        instancePath: instancePath + "/defaultUsers",
        parentData: data,
        parentDataProperty: "defaultUsers",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.defaultRoles !== undefined) {
      if (!validate28(data.defaultRoles, {
        instancePath: instancePath + "/defaultRoles",
        parentData: data,
        parentDataProperty: "defaultRoles",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
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
      if (!validate162(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
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
function validate158(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.defaultUsers !== undefined) {
      if (!validate28(data.defaultUsers, {
        instancePath: instancePath + "/defaultUsers",
        parentData: data,
        parentDataProperty: "defaultUsers",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.extensions !== undefined) {
      if (!validate32(data.extensions, {
        instancePath: instancePath + "/extensions",
        parentData: data,
        parentDataProperty: "extensions",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
        errors = vErrors.length;
      }
    }
    if (data.schemas !== undefined) {
      if (!validate161(data.schemas, {
        instancePath: instancePath + "/schemas",
        parentData: data,
        parentDataProperty: "schemas",
        rootData
      })) {
        vErrors = vErrors === null ? validate161.errors : vErrors.concat(validate161.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretNamespace !== undefined) {
      if (!validate22(data.secretNamespace, {
        instancePath: instancePath + "/secretNamespace",
        parentData: data,
        parentDataProperty: "secretNamespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
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
const schema55 = {
  "type": "object",
  "properties": {
    "limits": {
      "$ref": "Ep8sqtqIB4OmtIrwmX69LUC8yPfFKQJ58fo1cVG8Bo"
    },
    "requests": {
      "$ref": "Ep8sqtqIB4OmtIrwmX69LUC8yPfFKQJ58fo1cVG8Bo"
    }
  },
  "nullable": true
};
const schema20 = {
  "type": "object",
  "properties": {
    "cpu": {
      "$ref": "Xza6d5tCDZnfRjeGH4WtAhdgrn4ZuStbFa8NJOGbU"
    },
    "memory": {
      "$ref": "Gu1Ixp344g2pD0UPUtyhcYbZCE1cAfJ068GTt7bYlA0"
    },
    "hugepages-2Mi": {
      "$ref": "Gu1Ixp344g2pD0UPUtyhcYbZCE1cAfJ068GTt7bYlA0"
    },
    "hugepages-1Gi": {
      "$ref": "Gu1Ixp344g2pD0UPUtyhcYbZCE1cAfJ068GTt7bYlA0"
    }
  },
  "nullable": true
};
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
    if (data.cpu !== undefined) {
      if (!validate24(data.cpu, {
        instancePath: instancePath + "/cpu",
        parentData: data,
        parentDataProperty: "cpu",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.memory !== undefined) {
      if (!validate26(data.memory, {
        instancePath: instancePath + "/memory",
        parentData: data,
        parentDataProperty: "memory",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data["hugepages-2Mi"] !== undefined) {
      if (!validate26(data["hugepages-2Mi"], {
        instancePath: instancePath + "/hugepages-2Mi",
        parentData: data,
        parentDataProperty: "hugepages-2Mi",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data["hugepages-1Gi"] !== undefined) {
      if (!validate26(data["hugepages-1Gi"], {
        instancePath: instancePath + "/hugepages-1Gi",
        parentData: data,
        parentDataProperty: "hugepages-1Gi",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate46.errors = vErrors;
  return errors === 0;
}
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
    if (data.limits !== undefined) {
      if (!validate46(data.limits, {
        instancePath: instancePath + "/limits",
        parentData: data,
        parentDataProperty: "limits",
        rootData
      })) {
        vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
        errors = vErrors.length;
      }
    }
    if (data.requests !== undefined) {
      if (!validate46(data.requests, {
        instancePath: instancePath + "/requests",
        parentData: data,
        parentDataProperty: "requests",
        rootData
      })) {
        vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
        errors = vErrors.length;
      }
    }
  }
  validate172.errors = vErrors;
  return errors === 0;
}
const schema56 = {
  "type": "object",
  "properties": {
    "s3_wal_path": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "gs_wal_path": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "standby_host": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "standby_port": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "oneOf": [{
    "$ref": "ODjPMIMK0Snj3HzO3hK75Dd1G1G4bPrCJP8quo9HK4"
  }, {
    "$ref": "bANTXQvyIc0iXZWLCsVJvWEaXZvmIWrZIj5sxZucyhs"
  }, {
    "$ref": "eBrxoaAZW71A1mmAG4yaAR6FbqtVbjiQSr1FXYnb64"
  }],
  "nullable": true
};
const schema57 = {
  "required": ["s3_wal_path"]
};
function validate183(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.s3_wal_path === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "s3_wal_path"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
  }
  validate183.errors = vErrors;
  return errors === 0;
}
const schema58 = {
  "required": ["gs_wal_path"]
};
function validate185(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.gs_wal_path === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "gs_wal_path"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
  }
  validate185.errors = vErrors;
  return errors === 0;
}
const schema59 = {
  "required": ["standby_host"]
};
function validate187(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.standby_host === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "standby_host"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
  }
  validate187.errors = vErrors;
  return errors === 0;
}
function validate182(data, {
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
  const _errs2 = errors;
  let valid0 = false;
  let passing0 = null;
  const _errs3 = errors;
  if (!validate183(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate183.errors : vErrors.concat(validate183.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs3 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
  }
  const _errs4 = errors;
  if (!validate185(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate185.errors : vErrors.concat(validate185.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs4 === errors;
  if (_valid0 && valid0) {
    valid0 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid0 = true;
      passing0 = 1;
    }
    const _errs5 = errors;
    if (!validate187(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate187.errors : vErrors.concat(validate187.errors);
      errors = vErrors.length;
    }
    var _valid0 = _errs5 === errors;
    if (_valid0 && valid0) {
      valid0 = false;
      passing0 = [passing0, 2];
    } else {
      if (_valid0) {
        valid0 = true;
        passing0 = 2;
      }
    }
  }
  if (!valid0) {
    const err1 = {
      instancePath,
      schemaPath: "#/oneOf",
      keyword: "oneOf",
      params: {
        passingSchemas: passing0
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  } else {
    errors = _errs2;
    if (vErrors !== null) {
      if (_errs2) {
        vErrors.length = _errs2;
      } else {
        vErrors = null;
      }
    }
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.s3_wal_path !== undefined) {
      if (!validate22(data.s3_wal_path, {
        instancePath: instancePath + "/s3_wal_path",
        parentData: data,
        parentDataProperty: "s3_wal_path",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.gs_wal_path !== undefined) {
      if (!validate22(data.gs_wal_path, {
        instancePath: instancePath + "/gs_wal_path",
        parentData: data,
        parentDataProperty: "gs_wal_path",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.standby_host !== undefined) {
      if (!validate22(data.standby_host, {
        instancePath: instancePath + "/standby_host",
        parentData: data,
        parentDataProperty: "standby_host",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.standby_port !== undefined) {
      if (!validate22(data.standby_port, {
        instancePath: instancePath + "/standby_port",
        parentData: data,
        parentDataProperty: "standby_port",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate182.errors = vErrors;
  return errors === 0;
}
const schema60 = {
  "type": "array",
  "items": {
    "$ref": "uW14T4f9WNOJRdXhaFTZlqGAe7ex54Ws6H0Pj3vY9oQ"
  },
  "nullable": true
};
const schema61 = {
  "type": "object",
  "required": ["applicationId", "database", "tables"],
  "properties": {
    "applicationId": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "batchSize": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "database": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "enableRecovery": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "filter": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "tables": {
      "$ref": "qn0VUxKquqGKW3ABBJFtLiUEBOVGDB9YS0z7vjv5c"
    }
  }
};
const schema62 = {
  "type": "object",
  "additionalProperties": {
    "$ref": "2wTQyYHsvHb86CzWExOAQaf7EtDBD0IZSZBt9rxpc"
  },
  "properties": {}
};
const schema63 = {
  "type": "object",
  "required": ["eventType"],
  "properties": {
    "eventType": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "idColumn": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "payloadColumn": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "recoveryEventType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  }
};
function validate202(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.eventType === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "eventType"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.eventType !== undefined) {
      if (!validate21(data.eventType, {
        instancePath: instancePath + "/eventType",
        parentData: data,
        parentDataProperty: "eventType",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.idColumn !== undefined) {
      if (!validate22(data.idColumn, {
        instancePath: instancePath + "/idColumn",
        parentData: data,
        parentDataProperty: "idColumn",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.payloadColumn !== undefined) {
      if (!validate22(data.payloadColumn, {
        instancePath: instancePath + "/payloadColumn",
        parentData: data,
        parentDataProperty: "payloadColumn",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.recoveryEventType !== undefined) {
      if (!validate22(data.recoveryEventType, {
        instancePath: instancePath + "/recoveryEventType",
        parentData: data,
        parentDataProperty: "recoveryEventType",
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
  validate202.errors = vErrors;
  return errors === 0;
}
function validate201(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    for (const key0 in data) {
      if (!validate202(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
        rootData
      })) {
        vErrors = vErrors === null ? validate202.errors : vErrors.concat(validate202.errors);
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
    if (data.applicationId === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "applicationId"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.database === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "database"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.tables === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "tables"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.applicationId !== undefined) {
      if (!validate21(data.applicationId, {
        instancePath: instancePath + "/applicationId",
        parentData: data,
        parentDataProperty: "applicationId",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.batchSize !== undefined) {
      if (!validate45(data.batchSize, {
        instancePath: instancePath + "/batchSize",
        parentData: data,
        parentDataProperty: "batchSize",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.database !== undefined) {
      if (!validate21(data.database, {
        instancePath: instancePath + "/database",
        parentData: data,
        parentDataProperty: "database",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.enableRecovery !== undefined) {
      if (!validate28(data.enableRecovery, {
        instancePath: instancePath + "/enableRecovery",
        parentData: data,
        parentDataProperty: "enableRecovery",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.filter !== undefined) {
      if (!validate32(data.filter, {
        instancePath: instancePath + "/filter",
        parentData: data,
        parentDataProperty: "filter",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
        errors = vErrors.length;
      }
    }
    if (data.tables !== undefined) {
      if (!validate201(data.tables, {
        instancePath: instancePath + "/tables",
        parentData: data,
        parentDataProperty: "tables",
        rootData
      })) {
        vErrors = vErrors === null ? validate201.errors : vErrors.concat(validate201.errors);
        errors = vErrors.length;
      }
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
const schema64 = {
  "type": "object",
  "required": ["secretName"],
  "properties": {
    "secretName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "certificateFile": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "privateKeyFile": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "caFile": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "caSecretName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "nullable": true
};
function validate212(data, {
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
    if (data.secretName === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "secretName"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
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
    if (data.certificateFile !== undefined) {
      if (!validate22(data.certificateFile, {
        instancePath: instancePath + "/certificateFile",
        parentData: data,
        parentDataProperty: "certificateFile",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.privateKeyFile !== undefined) {
      if (!validate22(data.privateKeyFile, {
        instancePath: instancePath + "/privateKeyFile",
        parentData: data,
        parentDataProperty: "privateKeyFile",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.caFile !== undefined) {
      if (!validate22(data.caFile, {
        instancePath: instancePath + "/caFile",
        parentData: data,
        parentDataProperty: "caFile",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.caSecretName !== undefined) {
      if (!validate22(data.caSecretName, {
        instancePath: instancePath + "/caSecretName",
        parentData: data,
        parentDataProperty: "caSecretName",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate212.errors = vErrors;
  return errors === 0;
}
const schema65 = {
  "type": "array",
  "items": {
    "$ref": "VQD2Qp4R6bOeuOKYdGncTMHqJqBF2zbNNJN0eRMTN4"
  },
  "nullable": true
};
const schema66 = {
  "type": "object",
  "properties": {
    "key": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "operator": {
      "$ref": "37lD9ohICt5eH3t6o13RSKilJ7j74satEQTWg9sZIc"
    },
    "value": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "effect": {
      "$ref": "1K9Nj6EHP7xXEXoFklZWeY5spPfsgP22J3YNUsVQcc"
    },
    "tolerationSeconds": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    }
  }
};
const schema67 = {
  "type": "string",
  "enum": ["Equal", "Exists"],
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
  if (!(data === "Equal" || data === "Exists")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema67.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate222.errors = vErrors;
  return errors === 0;
}
const schema68 = {
  "type": "string",
  "enum": ["NoExecute", "NoSchedule", "PreferNoSchedule"],
  "nullable": true
};
function validate225(data, {
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
  if (!(data === "NoExecute" || data === "NoSchedule" || data === "PreferNoSchedule")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema68.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate225.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
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
      if (!validate222(data.operator, {
        instancePath: instancePath + "/operator",
        parentData: data,
        parentDataProperty: "operator",
        rootData
      })) {
        vErrors = vErrors === null ? validate222.errors : vErrors.concat(validate222.errors);
        errors = vErrors.length;
      }
    }
    if (data.value !== undefined) {
      if (!validate22(data.value, {
        instancePath: instancePath + "/value",
        parentData: data,
        parentDataProperty: "value",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.effect !== undefined) {
      if (!validate225(data.effect, {
        instancePath: instancePath + "/effect",
        parentData: data,
        parentDataProperty: "effect",
        rootData
      })) {
        vErrors = vErrors === null ? validate225.errors : vErrors.concat(validate225.errors);
        errors = vErrors.length;
      }
    }
    if (data.tolerationSeconds !== undefined) {
      if (!validate45(data.tolerationSeconds, {
        instancePath: instancePath + "/tolerationSeconds",
        parentData: data,
        parentDataProperty: "tolerationSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
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
  validate220.errors = vErrors;
  return errors === 0;
}
function validate219(data, {
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
      if (!validate220(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate220.errors : vErrors.concat(validate220.errors);
        errors = vErrors.length;
      }
    }
  }
  validate219.errors = vErrors;
  return errors === 0;
}
const schema69 = {
  "type": "object",
  "additionalProperties": {
    "$ref": "MotIrtEmZ0pFFmevg93UUlVkqKlJ0Kkt2lK7SPh6s"
  },
  "properties": {},
  "nullable": true
};
const schema70 = {
  "type": "array",
  "nullable": true,
  "items": {
    "$ref": "Q4s1JsMi9vb8yaqOuIuGUik4AXlkm0ztzQB0UkQa1Q"
  }
};
const schema71 = {
  "type": "string",
  "enum": ["bypassrls", "BYPASSRLS", "nobypassrls", "NOBYPASSRLS", "createdb", "CREATEDB", "nocreatedb", "NOCREATEDB", "createrole", "CREATEROLE", "nocreaterole", "NOCREATEROLE", "inherit", "INHERIT", "noinherit", "NOINHERIT", "login", "LOGIN", "nologin", "NOLOGIN", "replication", "REPLICATION", "noreplication", "NOREPLICATION", "superuser", "SUPERUSER", "nosuperuser", "NOSUPERUSER"]
};
function validate233(data, {
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
  if (!(data === "bypassrls" || data === "BYPASSRLS" || data === "nobypassrls" || data === "NOBYPASSRLS" || data === "createdb" || data === "CREATEDB" || data === "nocreatedb" || data === "NOCREATEDB" || data === "createrole" || data === "CREATEROLE" || data === "nocreaterole" || data === "NOCREATEROLE" || data === "inherit" || data === "INHERIT" || data === "noinherit" || data === "NOINHERIT" || data === "login" || data === "LOGIN" || data === "nologin" || data === "NOLOGIN" || data === "replication" || data === "REPLICATION" || data === "noreplication" || data === "NOREPLICATION" || data === "superuser" || data === "SUPERUSER" || data === "nosuperuser" || data === "NOSUPERUSER")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema71.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate233.errors = vErrors;
  return errors === 0;
}
function validate232(data, {
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
      if (!validate233(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate233.errors : vErrors.concat(validate233.errors);
        errors = vErrors.length;
      }
    }
  }
  validate232.errors = vErrors;
  return errors === 0;
}
function validate231(data, {
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
      if (!validate232(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
        rootData
      })) {
        vErrors = vErrors === null ? validate232.errors : vErrors.concat(validate232.errors);
        errors = vErrors.length;
      }
    }
  }
  validate231.errors = vErrors;
  return errors === 0;
}
const schema72 = {
  "type": "object",
  "required": ["size"],
  "properties": {
    "iops": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "selector": {
      "$ref": "33xh5ORFGhFggt4t6hOuwu423jvBO3Mbhwo1F6olVo"
    },
    "size": {
      "$ref": "GOWJtInrVdP7hgL1en0pRRZN8gkK3rxxe3Yv24FNZA"
    },
    "storageClass": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "subPath": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "throughput": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    }
  }
};
const schema73 = {
  "type": "object",
  "properties": {
    "matchExpressions": {
      "$ref": "uYKYzcwl5N1umK73fmY4lH91UgZ6dSeDgm2xAWERTI"
    },
    "matchLabels": {
      "$ref": "wnCl8zCvz1PLbyEivJTcktRgDZuzOGT9FYulvrA2T8w"
    }
  },
  "nullable": true
};
const schema74 = {
  "type": "array",
  "items": {
    "$ref": "LVSmyMEuraeFQbPKjrbaLFocjUxmosBxJS6mfHEEweM"
  },
  "nullable": true
};
const schema75 = {
  "type": "object",
  "required": ["key", "operator"],
  "properties": {
    "key": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "operator": {
      "$ref": "UwkoNc7OsxQFd5VJ1o6vkm5ojg5zVtohd46DJscScVM"
    },
    "values": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    }
  }
};
const schema76 = {
  "type": "string",
  "enum": ["DoesNotExist", "Exists", "In", "NotIn"]
};
function validate246(data, {
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
  if (!(data === "DoesNotExist" || data === "Exists" || data === "In" || data === "NotIn")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema76.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate246.errors = vErrors;
  return errors === 0;
}
function validate244(data, {
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
    if (data.operator !== undefined) {
      if (!validate246(data.operator, {
        instancePath: instancePath + "/operator",
        parentData: data,
        parentDataProperty: "operator",
        rootData
      })) {
        vErrors = vErrors === null ? validate246.errors : vErrors.concat(validate246.errors);
        errors = vErrors.length;
      }
    }
    if (data.values !== undefined) {
      if (!validate34(data.values, {
        instancePath: instancePath + "/values",
        parentData: data,
        parentDataProperty: "values",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
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
  validate244.errors = vErrors;
  return errors === 0;
}
function validate243(data, {
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
      if (!validate244(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate244.errors : vErrors.concat(validate244.errors);
        errors = vErrors.length;
      }
    }
  }
  validate243.errors = vErrors;
  return errors === 0;
}
const schema77 = {
  "type": "object",
  "properties": {},
  "nullable": true
};
function validate251(data, {
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
  validate251.errors = vErrors;
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
      if (!validate243(data.matchExpressions, {
        instancePath: instancePath + "/matchExpressions",
        parentData: data,
        parentDataProperty: "matchExpressions",
        rootData
      })) {
        vErrors = vErrors === null ? validate243.errors : vErrors.concat(validate243.errors);
        errors = vErrors.length;
      }
    }
    if (data.matchLabels !== undefined) {
      if (!validate251(data.matchLabels, {
        instancePath: instancePath + "/matchLabels",
        parentData: data,
        parentDataProperty: "matchLabels",
        rootData
      })) {
        vErrors = vErrors === null ? validate251.errors : vErrors.concat(validate251.errors);
        errors = vErrors.length;
      }
    }
  }
  validate242.errors = vErrors;
  return errors === 0;
}
const schema78 = {
  "type": "string",
  "pattern": "^(\\d+(e\\d+)?|\\d+(\\.\\d+)?(e\\d+)?[EPTGMK]i?)$"
};
function validate254(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!pattern1.test(data)) {
      const err0 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^(\\d+(e\\d+)?|\\d+(\\.\\d+)?(e\\d+)?[EPTGMK]i?)$"
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
  validate254.errors = vErrors;
  return errors === 0;
}
function validate240(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.size === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "size"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.iops !== undefined) {
      if (!validate45(data.iops, {
        instancePath: instancePath + "/iops",
        parentData: data,
        parentDataProperty: "iops",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.selector !== undefined) {
      if (!validate242(data.selector, {
        instancePath: instancePath + "/selector",
        parentData: data,
        parentDataProperty: "selector",
        rootData
      })) {
        vErrors = vErrors === null ? validate242.errors : vErrors.concat(validate242.errors);
        errors = vErrors.length;
      }
    }
    if (data.size !== undefined) {
      if (!validate254(data.size, {
        instancePath: instancePath + "/size",
        parentData: data,
        parentDataProperty: "size",
        rootData
      })) {
        vErrors = vErrors === null ? validate254.errors : vErrors.concat(validate254.errors);
        errors = vErrors.length;
      }
    }
    if (data.storageClass !== undefined) {
      if (!validate22(data.storageClass, {
        instancePath: instancePath + "/storageClass",
        parentData: data,
        parentDataProperty: "storageClass",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.subPath !== undefined) {
      if (!validate22(data.subPath, {
        instancePath: instancePath + "/subPath",
        parentData: data,
        parentDataProperty: "subPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.throughput !== undefined) {
      if (!validate45(data.throughput, {
        instancePath: instancePath + "/throughput",
        parentData: data,
        parentDataProperty: "throughput",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
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
  validate240.errors = vErrors;
  return errors === 0;
}
function validate56(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.numberOfInstances === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "numberOfInstances"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.teamId === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "teamId"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.postgresql === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "postgresql"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.volume === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "volume"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.additionalVolumes !== undefined) {
      if (!validate57(data.additionalVolumes, {
        instancePath: instancePath + "/additionalVolumes",
        parentData: data,
        parentDataProperty: "additionalVolumes",
        rootData
      })) {
        vErrors = vErrors === null ? validate57.errors : vErrors.concat(validate57.errors);
        errors = vErrors.length;
      }
    }
    if (data.allowedSourceRanges !== undefined) {
      if (!validate66(data.allowedSourceRanges, {
        instancePath: instancePath + "/allowedSourceRanges",
        parentData: data,
        parentDataProperty: "allowedSourceRanges",
        rootData
      })) {
        vErrors = vErrors === null ? validate66.errors : vErrors.concat(validate66.errors);
        errors = vErrors.length;
      }
    }
    if (data.clone !== undefined) {
      if (!validate70(data.clone, {
        instancePath: instancePath + "/clone",
        parentData: data,
        parentDataProperty: "clone",
        rootData
      })) {
        vErrors = vErrors === null ? validate70.errors : vErrors.concat(validate70.errors);
        errors = vErrors.length;
      }
    }
    if (data.connectionPooler !== undefined) {
      if (!validate82(data.connectionPooler, {
        instancePath: instancePath + "/connectionPooler",
        parentData: data,
        parentDataProperty: "connectionPooler",
        rootData
      })) {
        vErrors = vErrors === null ? validate82.errors : vErrors.concat(validate82.errors);
        errors = vErrors.length;
      }
    }
    if (data.databases !== undefined) {
      if (!validate32(data.databases, {
        instancePath: instancePath + "/databases",
        parentData: data,
        parentDataProperty: "databases",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
        errors = vErrors.length;
      }
    }
    if (data.dockerImage !== undefined) {
      if (!validate22(data.dockerImage, {
        instancePath: instancePath + "/dockerImage",
        parentData: data,
        parentDataProperty: "dockerImage",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.enableConnectionPooler !== undefined) {
      if (!validate28(data.enableConnectionPooler, {
        instancePath: instancePath + "/enableConnectionPooler",
        parentData: data,
        parentDataProperty: "enableConnectionPooler",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.enableReplicaConnectionPooler !== undefined) {
      if (!validate28(data.enableReplicaConnectionPooler, {
        instancePath: instancePath + "/enableReplicaConnectionPooler",
        parentData: data,
        parentDataProperty: "enableReplicaConnectionPooler",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.enableLogicalBackup !== undefined) {
      if (!validate28(data.enableLogicalBackup, {
        instancePath: instancePath + "/enableLogicalBackup",
        parentData: data,
        parentDataProperty: "enableLogicalBackup",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.enableMasterLoadBalancer !== undefined) {
      if (!validate28(data.enableMasterLoadBalancer, {
        instancePath: instancePath + "/enableMasterLoadBalancer",
        parentData: data,
        parentDataProperty: "enableMasterLoadBalancer",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.enableMasterPoolerLoadBalancer !== undefined) {
      if (!validate28(data.enableMasterPoolerLoadBalancer, {
        instancePath: instancePath + "/enableMasterPoolerLoadBalancer",
        parentData: data,
        parentDataProperty: "enableMasterPoolerLoadBalancer",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.enableReplicaLoadBalancer !== undefined) {
      if (!validate28(data.enableReplicaLoadBalancer, {
        instancePath: instancePath + "/enableReplicaLoadBalancer",
        parentData: data,
        parentDataProperty: "enableReplicaLoadBalancer",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.enableReplicaPoolerLoadBalancer !== undefined) {
      if (!validate28(data.enableReplicaPoolerLoadBalancer, {
        instancePath: instancePath + "/enableReplicaPoolerLoadBalancer",
        parentData: data,
        parentDataProperty: "enableReplicaPoolerLoadBalancer",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.enableShmVolume !== undefined) {
      if (!validate28(data.enableShmVolume, {
        instancePath: instancePath + "/enableShmVolume",
        parentData: data,
        parentDataProperty: "enableShmVolume",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.env !== undefined) {
      if (!validate30(data.env, {
        instancePath: instancePath + "/env",
        parentData: data,
        parentDataProperty: "env",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.init_containers !== undefined) {
      if (!validate30(data.init_containers, {
        instancePath: instancePath + "/init_containers",
        parentData: data,
        parentDataProperty: "init_containers",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.initContainers !== undefined) {
      if (!validate30(data.initContainers, {
        instancePath: instancePath + "/initContainers",
        parentData: data,
        parentDataProperty: "initContainers",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.logicalBackupSchedule !== undefined) {
      if (!validate109(data.logicalBackupSchedule, {
        instancePath: instancePath + "/logicalBackupSchedule",
        parentData: data,
        parentDataProperty: "logicalBackupSchedule",
        rootData
      })) {
        vErrors = vErrors === null ? validate109.errors : vErrors.concat(validate109.errors);
        errors = vErrors.length;
      }
    }
    if (data.maintenanceWindows !== undefined) {
      if (!validate111(data.maintenanceWindows, {
        instancePath: instancePath + "/maintenanceWindows",
        parentData: data,
        parentDataProperty: "maintenanceWindows",
        rootData
      })) {
        vErrors = vErrors === null ? validate111.errors : vErrors.concat(validate111.errors);
        errors = vErrors.length;
      }
    }
    if (data.masterServiceAnnotations !== undefined) {
      if (!validate32(data.masterServiceAnnotations, {
        instancePath: instancePath + "/masterServiceAnnotations",
        parentData: data,
        parentDataProperty: "masterServiceAnnotations",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodeAffinity !== undefined) {
      if (!validate116(data.nodeAffinity, {
        instancePath: instancePath + "/nodeAffinity",
        parentData: data,
        parentDataProperty: "nodeAffinity",
        rootData
      })) {
        vErrors = vErrors === null ? validate116.errors : vErrors.concat(validate116.errors);
        errors = vErrors.length;
      }
    }
    if (data.numberOfInstances !== undefined) {
      if (!validate130(data.numberOfInstances, {
        instancePath: instancePath + "/numberOfInstances",
        parentData: data,
        parentDataProperty: "numberOfInstances",
        rootData
      })) {
        vErrors = vErrors === null ? validate130.errors : vErrors.concat(validate130.errors);
        errors = vErrors.length;
      }
    }
    if (data.patroni !== undefined) {
      if (!validate132(data.patroni, {
        instancePath: instancePath + "/patroni",
        parentData: data,
        parentDataProperty: "patroni",
        rootData
      })) {
        vErrors = vErrors === null ? validate132.errors : vErrors.concat(validate132.errors);
        errors = vErrors.length;
      }
    }
    if (data.podAnnotations !== undefined) {
      if (!validate32(data.podAnnotations, {
        instancePath: instancePath + "/podAnnotations",
        parentData: data,
        parentDataProperty: "podAnnotations",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
        errors = vErrors.length;
      }
    }
    if (data.pod_priority_class_name !== undefined) {
      if (!validate22(data.pod_priority_class_name, {
        instancePath: instancePath + "/pod_priority_class_name",
        parentData: data,
        parentDataProperty: "pod_priority_class_name",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.podPriorityClassName !== undefined) {
      if (!validate22(data.podPriorityClassName, {
        instancePath: instancePath + "/podPriorityClassName",
        parentData: data,
        parentDataProperty: "podPriorityClassName",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.postgresql !== undefined) {
      if (!validate152(data.postgresql, {
        instancePath: instancePath + "/postgresql",
        parentData: data,
        parentDataProperty: "postgresql",
        rootData
      })) {
        vErrors = vErrors === null ? validate152.errors : vErrors.concat(validate152.errors);
        errors = vErrors.length;
      }
    }
    if (data.preparedDatabases !== undefined) {
      if (!validate157(data.preparedDatabases, {
        instancePath: instancePath + "/preparedDatabases",
        parentData: data,
        parentDataProperty: "preparedDatabases",
        rootData
      })) {
        vErrors = vErrors === null ? validate157.errors : vErrors.concat(validate157.errors);
        errors = vErrors.length;
      }
    }
    if (data.replicaLoadBalancer !== undefined) {
      if (!validate28(data.replicaLoadBalancer, {
        instancePath: instancePath + "/replicaLoadBalancer",
        parentData: data,
        parentDataProperty: "replicaLoadBalancer",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.replicaServiceAnnotations !== undefined) {
      if (!validate32(data.replicaServiceAnnotations, {
        instancePath: instancePath + "/replicaServiceAnnotations",
        parentData: data,
        parentDataProperty: "replicaServiceAnnotations",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
        errors = vErrors.length;
      }
    }
    if (data.resources !== undefined) {
      if (!validate172(data.resources, {
        instancePath: instancePath + "/resources",
        parentData: data,
        parentDataProperty: "resources",
        rootData
      })) {
        vErrors = vErrors === null ? validate172.errors : vErrors.concat(validate172.errors);
        errors = vErrors.length;
      }
    }
    if (data.schedulerName !== undefined) {
      if (!validate22(data.schedulerName, {
        instancePath: instancePath + "/schedulerName",
        parentData: data,
        parentDataProperty: "schedulerName",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAnnotations !== undefined) {
      if (!validate32(data.serviceAnnotations, {
        instancePath: instancePath + "/serviceAnnotations",
        parentData: data,
        parentDataProperty: "serviceAnnotations",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
        errors = vErrors.length;
      }
    }
    if (data.sidecars !== undefined) {
      if (!validate30(data.sidecars, {
        instancePath: instancePath + "/sidecars",
        parentData: data,
        parentDataProperty: "sidecars",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.spiloRunAsUser !== undefined) {
      if (!validate45(data.spiloRunAsUser, {
        instancePath: instancePath + "/spiloRunAsUser",
        parentData: data,
        parentDataProperty: "spiloRunAsUser",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.spiloRunAsGroup !== undefined) {
      if (!validate45(data.spiloRunAsGroup, {
        instancePath: instancePath + "/spiloRunAsGroup",
        parentData: data,
        parentDataProperty: "spiloRunAsGroup",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.spiloFSGroup !== undefined) {
      if (!validate45(data.spiloFSGroup, {
        instancePath: instancePath + "/spiloFSGroup",
        parentData: data,
        parentDataProperty: "spiloFSGroup",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.standby !== undefined) {
      if (!validate182(data.standby, {
        instancePath: instancePath + "/standby",
        parentData: data,
        parentDataProperty: "standby",
        rootData
      })) {
        vErrors = vErrors === null ? validate182.errors : vErrors.concat(validate182.errors);
        errors = vErrors.length;
      }
    }
    if (data.streams !== undefined) {
      if (!validate194(data.streams, {
        instancePath: instancePath + "/streams",
        parentData: data,
        parentDataProperty: "streams",
        rootData
      })) {
        vErrors = vErrors === null ? validate194.errors : vErrors.concat(validate194.errors);
        errors = vErrors.length;
      }
    }
    if (data.teamId !== undefined) {
      if (!validate21(data.teamId, {
        instancePath: instancePath + "/teamId",
        parentData: data,
        parentDataProperty: "teamId",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.tls !== undefined) {
      if (!validate212(data.tls, {
        instancePath: instancePath + "/tls",
        parentData: data,
        parentDataProperty: "tls",
        rootData
      })) {
        vErrors = vErrors === null ? validate212.errors : vErrors.concat(validate212.errors);
        errors = vErrors.length;
      }
    }
    if (data.tolerations !== undefined) {
      if (!validate219(data.tolerations, {
        instancePath: instancePath + "/tolerations",
        parentData: data,
        parentDataProperty: "tolerations",
        rootData
      })) {
        vErrors = vErrors === null ? validate219.errors : vErrors.concat(validate219.errors);
        errors = vErrors.length;
      }
    }
    if (data.useLoadBalancer !== undefined) {
      if (!validate28(data.useLoadBalancer, {
        instancePath: instancePath + "/useLoadBalancer",
        parentData: data,
        parentDataProperty: "useLoadBalancer",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.users !== undefined) {
      if (!validate231(data.users, {
        instancePath: instancePath + "/users",
        parentData: data,
        parentDataProperty: "users",
        rootData
      })) {
        vErrors = vErrors === null ? validate231.errors : vErrors.concat(validate231.errors);
        errors = vErrors.length;
      }
    }
    if (data.usersIgnoringSecretRotation !== undefined) {
      if (!validate34(data.usersIgnoringSecretRotation, {
        instancePath: instancePath + "/usersIgnoringSecretRotation",
        parentData: data,
        parentDataProperty: "usersIgnoringSecretRotation",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.usersWithInPlaceSecretRotation !== undefined) {
      if (!validate34(data.usersWithInPlaceSecretRotation, {
        instancePath: instancePath + "/usersWithInPlaceSecretRotation",
        parentData: data,
        parentDataProperty: "usersWithInPlaceSecretRotation",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.usersWithSecretRotation !== undefined) {
      if (!validate34(data.usersWithSecretRotation, {
        instancePath: instancePath + "/usersWithSecretRotation",
        parentData: data,
        parentDataProperty: "usersWithSecretRotation",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.volume !== undefined) {
      if (!validate240(data.volume, {
        instancePath: instancePath + "/volume",
        parentData: data,
        parentDataProperty: "volume",
        rootData
      })) {
        vErrors = vErrors === null ? validate240.errors : vErrors.concat(validate240.errors);
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
  validate56.errors = vErrors;
  return errors === 0;
}
const schema79 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
};
const schema80 = {};
import { validate as validate263 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
function validate262(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate263(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate263.errors : vErrors.concat(validate263.errors);
      errors = vErrors.length;
    }
  }
  validate262.errors = vErrors;
  return errors === 0;
}
function validate51(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="acid.zalan.do.v1.postgresql" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.kind === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "kind"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.apiVersion === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "apiVersion"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.spec === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "spec"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
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
    if (data.apiVersion !== undefined) {
      if (!validate54(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate56(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate56.errors : vErrors.concat(validate56.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate32(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
        errors = vErrors.length;
      }
    }
    if (data.metadata !== undefined) {
      if (!validate262(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate262.errors : vErrors.concat(validate262.errors);
        errors = vErrors.length;
      }
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
  validate51.errors = vErrors;
  return errors === 0;
}