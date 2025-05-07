import { formats } from "@kubernetes-models/validate";
export const validate = validate657;
const schema145 = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "$ref": "JISp2S0OJQXPcrweXgeTDs4t4BUZFSmEalR1vOVGVs"
    },
    "kind": {
      "$ref": "ov91Ql8VVNntbnY5lQoDaC0GnNwejgp7Yoxua9pS0s"
    },
    "metadata": {
      "$ref": "F8UXVl2B8ROl9kb045E2at1pE3IVL8xPdYnpnYIkb0"
    },
    "spec": {
      "$ref": "14RoxlEsHSIx2zb1yvXN8NCwW2XeONU8b0ztWr8rwPo"
    }
  },
  "required": ["metadata", "spec", "apiVersion", "kind"],
  "$id": "fission.io.v1.Environment"
};
const schema146 = {
  "type": "string",
  "enum": ["fission.io/v1"]
};
function validate658(data, {
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
  if (!(data === "fission.io/v1")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema146.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate658.errors = vErrors;
  return errors === 0;
}
const schema147 = {
  "type": "string",
  "enum": ["Environment"]
};
function validate660(data, {
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
  if (!(data === "Environment")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema147.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate660.errors = vErrors;
  return errors === 0;
}
const schema148 = {
  "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
};
const schema149 = {};
import { validate as validate663 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
function validate662(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate663(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate663.errors : vErrors.concat(validate663.errors);
    errors = vErrors.length;
  }
  validate662.errors = vErrors;
  return errors === 0;
}
const schema150 = {
  "properties": {
    "allowAccessToExternalNetwork": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "allowedFunctionsPerContainer": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "builder": {
      "$ref": "p5pYSMQ5i3DVrxsJWgBkFha0WgUyrYzm4wfP5jKAnw"
    },
    "imagepullsecret": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "keeparchive": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "poolsize": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "resources": {
      "$ref": "MwxOFQf7SDwNxgfa7EwX9dt7776AqT8sAlMcBeXt9HM"
    },
    "runtime": {
      "$ref": "ZfKvCZRsclcCVmJEtBSv6mFDifCQJUwnOraYJPzSQE"
    },
    "terminationGracePeriod": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "version": {
      "$ref": "vMERCWCezVsdN7cIwlJvWJTP5QRRevuFDHNM3fdV8Q"
    }
  },
  "required": ["runtime", "version"],
  "type": "object"
};
const schema9 = {
  "type": "boolean",
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
  validate25.errors = vErrors;
  return errors === 0;
}
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
const schema151 = {
  "properties": {
    "command": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "container": {
      "$ref": "kIJShI5ZkQEwzLZpnFKxFFFY7oronng1IPQ5i5eyr8"
    },
    "image": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "podspec": {
      "$ref": "7ZiS98ojisMqzzi1TeRdSdiotj4fpoogBM7Vak02E"
    }
  },
  "type": "object",
  "nullable": true
};
const schema73 = {
  "properties": {
    "args": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "command": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "env": {
      "$ref": "3Jp76g3FDGxGCRhB4rdsXV0CN3ViAXzNmXiWQNaiI"
    },
    "envFrom": {
      "$ref": "EkD1nTzAjmtgIszfzhU32HU6RJWgWl1E3sZihaaYJk"
    },
    "image": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "imagePullPolicy": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "lifecycle": {
      "$ref": "RFdx2XZbMwDJdMr2aIABLWh6wm9pXrmT36F8JegfkcE"
    },
    "livenessProbe": {
      "$ref": "6hcGsOxaLbPw8KjDNduwssgl3ObU2WuOLGRodXs"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "ports": {
      "$ref": "QkG34wpgMYTMO9YE77bfWKFLDRsUlPeO44VNnszt7Qs"
    },
    "readinessProbe": {
      "$ref": "6hcGsOxaLbPw8KjDNduwssgl3ObU2WuOLGRodXs"
    },
    "resizePolicy": {
      "$ref": "6GSWrpaVmXpudv48RvtoxAgwJVMPod1ZDpz48dxmpTE"
    },
    "resources": {
      "$ref": "MwxOFQf7SDwNxgfa7EwX9dt7776AqT8sAlMcBeXt9HM"
    },
    "restartPolicy": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "securityContext": {
      "$ref": "aND3ea1LG5u3n1ujZMr0x8VV9erWu8SezMfn5zIpYm8"
    },
    "startupProbe": {
      "$ref": "6hcGsOxaLbPw8KjDNduwssgl3ObU2WuOLGRodXs"
    },
    "stdin": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "stdinOnce": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "terminationMessagePath": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "terminationMessagePolicy": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "tty": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "volumeDevices": {
      "$ref": "mBDhRX59TxMU0NTk7LfnSYRWB6jHAhliJbubNaMjM"
    },
    "volumeMounts": {
      "$ref": "ploEHy7cvuqU434uo1rYaAhc9iU5NKdsYBUm8wDO6M"
    },
    "workingDir": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["name"],
  "type": "object",
  "nullable": true
};
const schema7 = {
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "array",
  "nullable": true
};
const schema8 = {
  "type": "string"
};
function validate23(data, {
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
      if (!validate23(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
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
const schema39 = {
  "items": {
    "$ref": "2DnvY3OSiQGeFcfEmVdJwRWMJ3q6DrZzvMYtV2fkz3c"
  },
  "type": "array",
  "nullable": true
};
const schema40 = {
  "properties": {
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "value": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "valueFrom": {
      "$ref": "eVznl7xSuOWb5hNtuDmy3lZLEJ73zFoxWn3ubwkt8"
    }
  },
  "required": ["name"],
  "type": "object"
};
const schema41 = {
  "properties": {
    "configMapKeyRef": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    },
    "fieldRef": {
      "$ref": "B5jNtau7CpFJjYJrsYhyzxmI9XsIag7F9u7xksrgmQk"
    },
    "resourceFieldRef": {
      "$ref": "D7PNj4ec9vScD68sAz7HLGzoBiyO7djP09KZXUzl2Y4"
    },
    "secretKeyRef": {
      "$ref": "x26QodATlAKAbVHY8OAiKcXxRvkJ1C7FwJivAEeHMY"
    }
  },
  "type": "object",
  "nullable": true
};
const schema10 = {
  "properties": {
    "key": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "optional": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "required": ["key"],
  "type": "object",
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
    if (data.key !== undefined) {
      if (!validate23(data.key, {
        instancePath: instancePath + "/key",
        parentData: data,
        parentDataProperty: "key",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
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
    if (data.optional !== undefined) {
      if (!validate25(data.optional, {
        instancePath: instancePath + "/optional",
        parentData: data,
        parentDataProperty: "optional",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate26.errors = vErrors;
  return errors === 0;
}
const schema42 = {
  "properties": {
    "apiVersion": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "fieldPath": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["fieldPath"],
  "type": "object",
  "nullable": true
};
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
    if (data.fieldPath === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "fieldPath"
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
      if (!validate21(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.fieldPath !== undefined) {
      if (!validate23(data.fieldPath, {
        instancePath: instancePath + "/fieldPath",
        parentData: data,
        parentDataProperty: "fieldPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate120.errors = vErrors;
  return errors === 0;
}
const schema43 = {
  "properties": {
    "containerName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "divisor": {
      "$ref": "l7oaIcmo24pLi7XxCQ3euA6o54Bu2nt1fJ44v0vO04"
    },
    "resource": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["resource"],
  "type": "object",
  "nullable": true
};
const schema27 = {
  "anyOf": [{
    "$ref": "vMERCWCezVsdN7cIwlJvWJTP5QRRevuFDHNM3fdV8Q"
  }, {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  }],
  "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
};
const schema12 = {
  "type": "integer"
};
function validate33(data, {
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
  validate33.errors = vErrors;
  return errors === 0;
}
const pattern0 = new RegExp("^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$", "u");
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
  if (!validate33(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs2 = errors;
    if (!validate23(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
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
  validate78.errors = vErrors;
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
    if (data.resource === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "resource"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.containerName !== undefined) {
      if (!validate21(data.containerName, {
        instancePath: instancePath + "/containerName",
        parentData: data,
        parentDataProperty: "containerName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.divisor !== undefined) {
      if (!validate78(data.divisor, {
        instancePath: instancePath + "/divisor",
        parentData: data,
        parentDataProperty: "divisor",
        rootData
      })) {
        vErrors = vErrors === null ? validate78.errors : vErrors.concat(validate78.errors);
        errors = vErrors.length;
      }
    }
    if (data.resource !== undefined) {
      if (!validate23(data.resource, {
        instancePath: instancePath + "/resource",
        parentData: data,
        parentDataProperty: "resource",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate124.errors = vErrors;
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
    if (data.configMapKeyRef !== undefined) {
      if (!validate26(data.configMapKeyRef, {
        instancePath: instancePath + "/configMapKeyRef",
        parentData: data,
        parentDataProperty: "configMapKeyRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.fieldRef !== undefined) {
      if (!validate120(data.fieldRef, {
        instancePath: instancePath + "/fieldRef",
        parentData: data,
        parentDataProperty: "fieldRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate120.errors : vErrors.concat(validate120.errors);
        errors = vErrors.length;
      }
    }
    if (data.resourceFieldRef !== undefined) {
      if (!validate124(data.resourceFieldRef, {
        instancePath: instancePath + "/resourceFieldRef",
        parentData: data,
        parentDataProperty: "resourceFieldRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate124.errors : vErrors.concat(validate124.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretKeyRef !== undefined) {
      if (!validate26(data.secretKeyRef, {
        instancePath: instancePath + "/secretKeyRef",
        parentData: data,
        parentDataProperty: "secretKeyRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate118.errors = vErrors;
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
    if (data.value !== undefined) {
      if (!validate21(data.value, {
        instancePath: instancePath + "/value",
        parentData: data,
        parentDataProperty: "value",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.valueFrom !== undefined) {
      if (!validate118(data.valueFrom, {
        instancePath: instancePath + "/valueFrom",
        parentData: data,
        parentDataProperty: "valueFrom",
        rootData
      })) {
        vErrors = vErrors === null ? validate118.errors : vErrors.concat(validate118.errors);
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
      if (!validate115(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate115.errors : vErrors.concat(validate115.errors);
        errors = vErrors.length;
      }
    }
  }
  validate114.errors = vErrors;
  return errors === 0;
}
const schema44 = {
  "items": {
    "$ref": "ikCIlFtFemCnMYeJtAt3NRQIkZLQNIKIbJvxkO8"
  },
  "type": "array",
  "nullable": true
};
const schema45 = {
  "properties": {
    "configMapRef": {
      "$ref": "vIMX5TuwLUjrF4xwcBzJKsRoDuvJXyODQDaulgLLL4"
    },
    "prefix": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "secretRef": {
      "$ref": "vIMX5TuwLUjrF4xwcBzJKsRoDuvJXyODQDaulgLLL4"
    }
  },
  "type": "object"
};
const schema11 = {
  "properties": {
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "optional": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "type": "object",
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
    if (data.optional !== undefined) {
      if (!validate25(data.optional, {
        instancePath: instancePath + "/optional",
        parentData: data,
        parentDataProperty: "optional",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate30.errors = vErrors;
  return errors === 0;
}
function validate133(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.configMapRef !== undefined) {
      if (!validate30(data.configMapRef, {
        instancePath: instancePath + "/configMapRef",
        parentData: data,
        parentDataProperty: "configMapRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.prefix !== undefined) {
      if (!validate21(data.prefix, {
        instancePath: instancePath + "/prefix",
        parentData: data,
        parentDataProperty: "prefix",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate30(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
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
  validate133.errors = vErrors;
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
      if (!validate133(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate133.errors : vErrors.concat(validate133.errors);
        errors = vErrors.length;
      }
    }
  }
  validate132.errors = vErrors;
  return errors === 0;
}
const schema46 = {
  "properties": {
    "postStart": {
      "$ref": "G29yhCt6zCEjqe0gdZcfsDrOST0tQlucjrHZckS9DrM"
    },
    "preStop": {
      "$ref": "G29yhCt6zCEjqe0gdZcfsDrOST0tQlucjrHZckS9DrM"
    }
  },
  "type": "object",
  "nullable": true
};
const schema14 = {
  "properties": {
    "exec": {
      "$ref": "moEpOLb1kgFxaUouQajnrop3umuZQh81JqXQh7AIVQ"
    },
    "httpGet": {
      "$ref": "mmlyBLvRl7v3o5Pp55N1xeaHQ9tDWZHs5C7b5GfLN8"
    },
    "sleep": {
      "$ref": "ofdWEnL8lX9o1QCeF8oRkYTFr4DaNPrRjjEnvvp1ljA"
    },
    "tcpSocket": {
      "$ref": "1ZbuYUyDXQSaxhnkO1WtAhRTjyp3DzYi9wa2Pdpoow"
    }
  },
  "type": "object",
  "nullable": true
};
const schema15 = {
  "properties": {
    "command": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    }
  },
  "type": "object",
  "nullable": true
};
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
    if (data.command !== undefined) {
      if (!validate22(data.command, {
        instancePath: instancePath + "/command",
        parentData: data,
        parentDataProperty: "command",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate38.errors = vErrors;
  return errors === 0;
}
const schema16 = {
  "properties": {
    "host": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "httpHeaders": {
      "$ref": "wOtvUyP8xBMF8YvP9G2nZ7hpGeMpOckdRUXrDPgLUY"
    },
    "path": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "port": {
      "$ref": "uJPY5JwdoQeyZsG50sBXB6uBQV8ScD7PtRRAnILoI3A"
    },
    "scheme": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["port"],
  "type": "object",
  "nullable": true
};
const schema17 = {
  "items": {
    "$ref": "RI8VVk8l4SnLWK7FbWs0RBoAVoSBUKkroMUjUfsI"
  },
  "type": "array",
  "nullable": true
};
const schema18 = {
  "properties": {
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "value": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["name", "value"],
  "type": "object"
};
function validate44(data, {
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
    if (data.value === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "value"
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
    if (data.value !== undefined) {
      if (!validate23(data.value, {
        instancePath: instancePath + "/value",
        parentData: data,
        parentDataProperty: "value",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
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
  validate44.errors = vErrors;
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
      if (!validate44(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate44.errors : vErrors.concat(validate44.errors);
        errors = vErrors.length;
      }
    }
  }
  validate43.errors = vErrors;
  return errors === 0;
}
const schema13 = {
  "anyOf": [{
    "$ref": "vMERCWCezVsdN7cIwlJvWJTP5QRRevuFDHNM3fdV8Q"
  }, {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  }]
};
function validate34(data, {
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
  if (!validate33(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs2 = errors;
    if (!validate23(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
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
  validate34.errors = vErrors;
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
    if (data.port === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "port"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.host !== undefined) {
      if (!validate21(data.host, {
        instancePath: instancePath + "/host",
        parentData: data,
        parentDataProperty: "host",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.httpHeaders !== undefined) {
      if (!validate43(data.httpHeaders, {
        instancePath: instancePath + "/httpHeaders",
        parentData: data,
        parentDataProperty: "httpHeaders",
        rootData
      })) {
        vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
        errors = vErrors.length;
      }
    }
    if (data.path !== undefined) {
      if (!validate21(data.path, {
        instancePath: instancePath + "/path",
        parentData: data,
        parentDataProperty: "path",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.port !== undefined) {
      if (!validate34(data.port, {
        instancePath: instancePath + "/port",
        parentData: data,
        parentDataProperty: "port",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.scheme !== undefined) {
      if (!validate21(data.scheme, {
        instancePath: instancePath + "/scheme",
        parentData: data,
        parentDataProperty: "scheme",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate41.errors = vErrors;
  return errors === 0;
}
const schema19 = {
  "properties": {
    "seconds": {
      "$ref": "icwF9bpzvIS3QxC52v2XvqrjjaZnFwyMbHUnptLeEQ"
    }
  },
  "required": ["seconds"],
  "type": "object",
  "nullable": true
};
const schema20 = {
  "format": "int64",
  "type": "integer"
};
const formats0 = formats.int64;
function validate54(data, {
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
  validate54.errors = vErrors;
  return errors === 0;
}
function validate53(data, {
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
    if (data.seconds === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "seconds"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.seconds !== undefined) {
      if (!validate54(data.seconds, {
        instancePath: instancePath + "/seconds",
        parentData: data,
        parentDataProperty: "seconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
  }
  validate53.errors = vErrors;
  return errors === 0;
}
const schema21 = {
  "properties": {
    "host": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "port": {
      "$ref": "uJPY5JwdoQeyZsG50sBXB6uBQV8ScD7PtRRAnILoI3A"
    }
  },
  "required": ["port"],
  "type": "object",
  "nullable": true
};
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
    if (data.port === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "port"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.host !== undefined) {
      if (!validate21(data.host, {
        instancePath: instancePath + "/host",
        parentData: data,
        parentDataProperty: "host",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.port !== undefined) {
      if (!validate34(data.port, {
        instancePath: instancePath + "/port",
        parentData: data,
        parentDataProperty: "port",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
  }
  validate57.errors = vErrors;
  return errors === 0;
}
function validate37(data, {
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
    if (data.exec !== undefined) {
      if (!validate38(data.exec, {
        instancePath: instancePath + "/exec",
        parentData: data,
        parentDataProperty: "exec",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
        errors = vErrors.length;
      }
    }
    if (data.httpGet !== undefined) {
      if (!validate41(data.httpGet, {
        instancePath: instancePath + "/httpGet",
        parentData: data,
        parentDataProperty: "httpGet",
        rootData
      })) {
        vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
        errors = vErrors.length;
      }
    }
    if (data.sleep !== undefined) {
      if (!validate53(data.sleep, {
        instancePath: instancePath + "/sleep",
        parentData: data,
        parentDataProperty: "sleep",
        rootData
      })) {
        vErrors = vErrors === null ? validate53.errors : vErrors.concat(validate53.errors);
        errors = vErrors.length;
      }
    }
    if (data.tcpSocket !== undefined) {
      if (!validate57(data.tcpSocket, {
        instancePath: instancePath + "/tcpSocket",
        parentData: data,
        parentDataProperty: "tcpSocket",
        rootData
      })) {
        vErrors = vErrors === null ? validate57.errors : vErrors.concat(validate57.errors);
        errors = vErrors.length;
      }
    }
  }
  validate37.errors = vErrors;
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
    if (data.postStart !== undefined) {
      if (!validate37(data.postStart, {
        instancePath: instancePath + "/postStart",
        parentData: data,
        parentDataProperty: "postStart",
        rootData
      })) {
        vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
        errors = vErrors.length;
      }
    }
    if (data.preStop !== undefined) {
      if (!validate37(data.preStop, {
        instancePath: instancePath + "/preStop",
        parentData: data,
        parentDataProperty: "preStop",
        rootData
      })) {
        vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
        errors = vErrors.length;
      }
    }
  }
  validate138.errors = vErrors;
  return errors === 0;
}
const schema24 = {
  "properties": {
    "exec": {
      "$ref": "moEpOLb1kgFxaUouQajnrop3umuZQh81JqXQh7AIVQ"
    },
    "failureThreshold": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "grpc": {
      "$ref": "zimiYgliSEzKY1uy0jBGUTkFkVFtyXIMNBOoeBFfpI"
    },
    "httpGet": {
      "$ref": "mmlyBLvRl7v3o5Pp55N1xeaHQ9tDWZHs5C7b5GfLN8"
    },
    "initialDelaySeconds": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "periodSeconds": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "successThreshold": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "tcpSocket": {
      "$ref": "1ZbuYUyDXQSaxhnkO1WtAhRTjyp3DzYi9wa2Pdpoow"
    },
    "terminationGracePeriodSeconds": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "timeoutSeconds": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    }
  },
  "type": "object",
  "nullable": true
};
const schema22 = {
  "format": "int32",
  "type": "integer",
  "nullable": true
};
const formats2 = formats.int32;
function validate61(data, {
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
  validate61.errors = vErrors;
  return errors === 0;
}
const schema25 = {
  "properties": {
    "port": {
      "$ref": "ppOMqvYEA3GSH3ozhOJ2Wta6ImWhzC9DOYsjidshCYo"
    },
    "service": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["port"],
  "type": "object",
  "nullable": true
};
const schema23 = {
  "format": "int32",
  "type": "integer"
};
function validate62(data, {
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
  validate62.errors = vErrors;
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
    if (data.port === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "port"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.port !== undefined) {
      if (!validate62(data.port, {
        instancePath: instancePath + "/port",
        parentData: data,
        parentDataProperty: "port",
        rootData
      })) {
        vErrors = vErrors === null ? validate62.errors : vErrors.concat(validate62.errors);
        errors = vErrors.length;
      }
    }
    if (data.service !== undefined) {
      if (!validate21(data.service, {
        instancePath: instancePath + "/service",
        parentData: data,
        parentDataProperty: "service",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate66.errors = vErrors;
  return errors === 0;
}
const schema26 = {
  "format": "int64",
  "type": "integer",
  "nullable": true
};
function validate75(data, {
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
  validate75.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.exec !== undefined) {
      if (!validate38(data.exec, {
        instancePath: instancePath + "/exec",
        parentData: data,
        parentDataProperty: "exec",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
        errors = vErrors.length;
      }
    }
    if (data.failureThreshold !== undefined) {
      if (!validate61(data.failureThreshold, {
        instancePath: instancePath + "/failureThreshold",
        parentData: data,
        parentDataProperty: "failureThreshold",
        rootData
      })) {
        vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
        errors = vErrors.length;
      }
    }
    if (data.grpc !== undefined) {
      if (!validate66(data.grpc, {
        instancePath: instancePath + "/grpc",
        parentData: data,
        parentDataProperty: "grpc",
        rootData
      })) {
        vErrors = vErrors === null ? validate66.errors : vErrors.concat(validate66.errors);
        errors = vErrors.length;
      }
    }
    if (data.httpGet !== undefined) {
      if (!validate41(data.httpGet, {
        instancePath: instancePath + "/httpGet",
        parentData: data,
        parentDataProperty: "httpGet",
        rootData
      })) {
        vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
        errors = vErrors.length;
      }
    }
    if (data.initialDelaySeconds !== undefined) {
      if (!validate61(data.initialDelaySeconds, {
        instancePath: instancePath + "/initialDelaySeconds",
        parentData: data,
        parentDataProperty: "initialDelaySeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
        errors = vErrors.length;
      }
    }
    if (data.periodSeconds !== undefined) {
      if (!validate61(data.periodSeconds, {
        instancePath: instancePath + "/periodSeconds",
        parentData: data,
        parentDataProperty: "periodSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
        errors = vErrors.length;
      }
    }
    if (data.successThreshold !== undefined) {
      if (!validate61(data.successThreshold, {
        instancePath: instancePath + "/successThreshold",
        parentData: data,
        parentDataProperty: "successThreshold",
        rootData
      })) {
        vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
        errors = vErrors.length;
      }
    }
    if (data.tcpSocket !== undefined) {
      if (!validate57(data.tcpSocket, {
        instancePath: instancePath + "/tcpSocket",
        parentData: data,
        parentDataProperty: "tcpSocket",
        rootData
      })) {
        vErrors = vErrors === null ? validate57.errors : vErrors.concat(validate57.errors);
        errors = vErrors.length;
      }
    }
    if (data.terminationGracePeriodSeconds !== undefined) {
      if (!validate75(data.terminationGracePeriodSeconds, {
        instancePath: instancePath + "/terminationGracePeriodSeconds",
        parentData: data,
        parentDataProperty: "terminationGracePeriodSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate75.errors : vErrors.concat(validate75.errors);
        errors = vErrors.length;
      }
    }
    if (data.timeoutSeconds !== undefined) {
      if (!validate61(data.timeoutSeconds, {
        instancePath: instancePath + "/timeoutSeconds",
        parentData: data,
        parentDataProperty: "timeoutSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
        errors = vErrors.length;
      }
    }
  }
  validate63.errors = vErrors;
  return errors === 0;
}
const schema47 = {
  "items": {
    "$ref": "WxMipWUqqSfo29Ftt21K0qdNOM8gEudjMjxXtvA"
  },
  "type": "array",
  "nullable": true
};
const schema48 = {
  "properties": {
    "containerPort": {
      "$ref": "ppOMqvYEA3GSH3ozhOJ2Wta6ImWhzC9DOYsjidshCYo"
    },
    "hostIP": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "hostPort": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "protocol": {
      "$ref": "WjWl4gI0zAjaPoQiailk8NsLbKtD9AmRfEZB1lmJptc"
    }
  },
  "required": ["containerPort"],
  "type": "object"
};
const schema49 = {
  "default": "TCP",
  "type": "string",
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
  validate147.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.containerPort === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "containerPort"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.containerPort !== undefined) {
      if (!validate62(data.containerPort, {
        instancePath: instancePath + "/containerPort",
        parentData: data,
        parentDataProperty: "containerPort",
        rootData
      })) {
        vErrors = vErrors === null ? validate62.errors : vErrors.concat(validate62.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostIP !== undefined) {
      if (!validate21(data.hostIP, {
        instancePath: instancePath + "/hostIP",
        parentData: data,
        parentDataProperty: "hostIP",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostPort !== undefined) {
      if (!validate61(data.hostPort, {
        instancePath: instancePath + "/hostPort",
        parentData: data,
        parentDataProperty: "hostPort",
        rootData
      })) {
        vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
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
    if (data.protocol !== undefined) {
      if (!validate147(data.protocol, {
        instancePath: instancePath + "/protocol",
        parentData: data,
        parentDataProperty: "protocol",
        rootData
      })) {
        vErrors = vErrors === null ? validate147.errors : vErrors.concat(validate147.errors);
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
  validate142.errors = vErrors;
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
      if (!validate142(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate142.errors : vErrors.concat(validate142.errors);
        errors = vErrors.length;
      }
    }
  }
  validate141.errors = vErrors;
  return errors === 0;
}
const schema50 = {
  "items": {
    "$ref": "py5O7Ijenwl6ADj0winHxKN3Jkr54XSAOEcDPZUos"
  },
  "type": "array",
  "nullable": true
};
const schema51 = {
  "properties": {
    "resourceName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "restartPolicy": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["resourceName", "restartPolicy"],
  "type": "object"
};
function validate151(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.resourceName === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "resourceName"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.restartPolicy === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "restartPolicy"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.resourceName !== undefined) {
      if (!validate23(data.resourceName, {
        instancePath: instancePath + "/resourceName",
        parentData: data,
        parentDataProperty: "resourceName",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.restartPolicy !== undefined) {
      if (!validate23(data.restartPolicy, {
        instancePath: instancePath + "/restartPolicy",
        parentData: data,
        parentDataProperty: "restartPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
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
  validate151.errors = vErrors;
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
      if (!validate151(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate151.errors : vErrors.concat(validate151.errors);
        errors = vErrors.length;
      }
    }
  }
  validate150.errors = vErrors;
  return errors === 0;
}
const schema52 = {
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
const schema53 = {
  "items": {
    "$ref": "HN5PKMIdyNeW2tH5k7qzNtrzheocymAho1Vd1ZpPn9c"
  },
  "type": "array",
  "nullable": true
};
const schema54 = {
  "properties": {
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["name"],
  "type": "object"
};
function validate157(data, {
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
      if (!validate157(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
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
const schema28 = {
  "additionalProperties": {
    "$ref": "l7oaIcmo24pLi7XxCQ3euA6o54Bu2nt1fJ44v0vO04"
  },
  "type": "object",
  "properties": {},
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
    for (const key0 in data) {
      if (!validate78(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
        rootData
      })) {
        vErrors = vErrors === null ? validate78.errors : vErrors.concat(validate78.errors);
        errors = vErrors.length;
      }
    }
  }
  validate81.errors = vErrors;
  return errors === 0;
}
function validate155(data, {
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
      if (!validate156(data.claims, {
        instancePath: instancePath + "/claims",
        parentData: data,
        parentDataProperty: "claims",
        rootData
      })) {
        vErrors = vErrors === null ? validate156.errors : vErrors.concat(validate156.errors);
        errors = vErrors.length;
      }
    }
    if (data.limits !== undefined) {
      if (!validate81(data.limits, {
        instancePath: instancePath + "/limits",
        parentData: data,
        parentDataProperty: "limits",
        rootData
      })) {
        vErrors = vErrors === null ? validate81.errors : vErrors.concat(validate81.errors);
        errors = vErrors.length;
      }
    }
    if (data.requests !== undefined) {
      if (!validate81(data.requests, {
        instancePath: instancePath + "/requests",
        parentData: data,
        parentDataProperty: "requests",
        rootData
      })) {
        vErrors = vErrors === null ? validate81.errors : vErrors.concat(validate81.errors);
        errors = vErrors.length;
      }
    }
  }
  validate155.errors = vErrors;
  return errors === 0;
}
const schema55 = {
  "properties": {
    "allowPrivilegeEscalation": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "capabilities": {
      "$ref": "YMgmBIl6G2AJbxo7TKvMvLiTTIxtMfc8CdiHqBKE"
    },
    "privileged": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "procMount": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "readOnlyRootFilesystem": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "runAsGroup": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "runAsNonRoot": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "runAsUser": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "seLinuxOptions": {
      "$ref": "HxCShOIxXvAeZcVxGCTBWSblLv24k535dp3HuWUtqq0"
    },
    "seccompProfile": {
      "$ref": "YbnajYi6rBqhVSaUKuHSP0DlX7N4UdiS6tIv3THy4"
    },
    "windowsOptions": {
      "$ref": "sWfrXDJM9xHwLEX7HYTegXP1RJ5T3eXzwt07iJjKI"
    }
  },
  "type": "object",
  "nullable": true
};
const schema56 = {
  "properties": {
    "add": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "drop": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    }
  },
  "type": "object",
  "nullable": true
};
function validate165(data, {
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
    if (data.add !== undefined) {
      if (!validate22(data.add, {
        instancePath: instancePath + "/add",
        parentData: data,
        parentDataProperty: "add",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.drop !== undefined) {
      if (!validate22(data.drop, {
        instancePath: instancePath + "/drop",
        parentData: data,
        parentDataProperty: "drop",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate165.errors = vErrors;
  return errors === 0;
}
const schema57 = {
  "properties": {
    "level": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "role": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "type": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "user": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate175(data, {
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
    if (data.level !== undefined) {
      if (!validate21(data.level, {
        instancePath: instancePath + "/level",
        parentData: data,
        parentDataProperty: "level",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.role !== undefined) {
      if (!validate21(data.role, {
        instancePath: instancePath + "/role",
        parentData: data,
        parentDataProperty: "role",
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
    if (data.user !== undefined) {
      if (!validate21(data.user, {
        instancePath: instancePath + "/user",
        parentData: data,
        parentDataProperty: "user",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate175.errors = vErrors;
  return errors === 0;
}
const schema58 = {
  "properties": {
    "localhostProfile": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "type": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["type"],
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
    if (data.localhostProfile !== undefined) {
      if (!validate21(data.localhostProfile, {
        instancePath: instancePath + "/localhostProfile",
        parentData: data,
        parentDataProperty: "localhostProfile",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
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
  validate181.errors = vErrors;
  return errors === 0;
}
const schema59 = {
  "properties": {
    "gmsaCredentialSpec": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "gmsaCredentialSpecName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "hostProcess": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "runAsUserName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
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
    if (data.gmsaCredentialSpec !== undefined) {
      if (!validate21(data.gmsaCredentialSpec, {
        instancePath: instancePath + "/gmsaCredentialSpec",
        parentData: data,
        parentDataProperty: "gmsaCredentialSpec",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.gmsaCredentialSpecName !== undefined) {
      if (!validate21(data.gmsaCredentialSpecName, {
        instancePath: instancePath + "/gmsaCredentialSpecName",
        parentData: data,
        parentDataProperty: "gmsaCredentialSpecName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostProcess !== undefined) {
      if (!validate25(data.hostProcess, {
        instancePath: instancePath + "/hostProcess",
        parentData: data,
        parentDataProperty: "hostProcess",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.runAsUserName !== undefined) {
      if (!validate21(data.runAsUserName, {
        instancePath: instancePath + "/runAsUserName",
        parentData: data,
        parentDataProperty: "runAsUserName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate185.errors = vErrors;
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
    if (data.allowPrivilegeEscalation !== undefined) {
      if (!validate25(data.allowPrivilegeEscalation, {
        instancePath: instancePath + "/allowPrivilegeEscalation",
        parentData: data,
        parentDataProperty: "allowPrivilegeEscalation",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.capabilities !== undefined) {
      if (!validate165(data.capabilities, {
        instancePath: instancePath + "/capabilities",
        parentData: data,
        parentDataProperty: "capabilities",
        rootData
      })) {
        vErrors = vErrors === null ? validate165.errors : vErrors.concat(validate165.errors);
        errors = vErrors.length;
      }
    }
    if (data.privileged !== undefined) {
      if (!validate25(data.privileged, {
        instancePath: instancePath + "/privileged",
        parentData: data,
        parentDataProperty: "privileged",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.procMount !== undefined) {
      if (!validate21(data.procMount, {
        instancePath: instancePath + "/procMount",
        parentData: data,
        parentDataProperty: "procMount",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnlyRootFilesystem !== undefined) {
      if (!validate25(data.readOnlyRootFilesystem, {
        instancePath: instancePath + "/readOnlyRootFilesystem",
        parentData: data,
        parentDataProperty: "readOnlyRootFilesystem",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.runAsGroup !== undefined) {
      if (!validate75(data.runAsGroup, {
        instancePath: instancePath + "/runAsGroup",
        parentData: data,
        parentDataProperty: "runAsGroup",
        rootData
      })) {
        vErrors = vErrors === null ? validate75.errors : vErrors.concat(validate75.errors);
        errors = vErrors.length;
      }
    }
    if (data.runAsNonRoot !== undefined) {
      if (!validate25(data.runAsNonRoot, {
        instancePath: instancePath + "/runAsNonRoot",
        parentData: data,
        parentDataProperty: "runAsNonRoot",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.runAsUser !== undefined) {
      if (!validate75(data.runAsUser, {
        instancePath: instancePath + "/runAsUser",
        parentData: data,
        parentDataProperty: "runAsUser",
        rootData
      })) {
        vErrors = vErrors === null ? validate75.errors : vErrors.concat(validate75.errors);
        errors = vErrors.length;
      }
    }
    if (data.seLinuxOptions !== undefined) {
      if (!validate175(data.seLinuxOptions, {
        instancePath: instancePath + "/seLinuxOptions",
        parentData: data,
        parentDataProperty: "seLinuxOptions",
        rootData
      })) {
        vErrors = vErrors === null ? validate175.errors : vErrors.concat(validate175.errors);
        errors = vErrors.length;
      }
    }
    if (data.seccompProfile !== undefined) {
      if (!validate181(data.seccompProfile, {
        instancePath: instancePath + "/seccompProfile",
        parentData: data,
        parentDataProperty: "seccompProfile",
        rootData
      })) {
        vErrors = vErrors === null ? validate181.errors : vErrors.concat(validate181.errors);
        errors = vErrors.length;
      }
    }
    if (data.windowsOptions !== undefined) {
      if (!validate185(data.windowsOptions, {
        instancePath: instancePath + "/windowsOptions",
        parentData: data,
        parentDataProperty: "windowsOptions",
        rootData
      })) {
        vErrors = vErrors === null ? validate185.errors : vErrors.concat(validate185.errors);
        errors = vErrors.length;
      }
    }
  }
  validate163.errors = vErrors;
  return errors === 0;
}
const schema60 = {
  "items": {
    "$ref": "RyMynCzjYAPHCEQqWFiO4dTDXuIMC11XbOjI4iorY"
  },
  "type": "array",
  "nullable": true
};
const schema61 = {
  "properties": {
    "devicePath": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["devicePath", "name"],
  "type": "object"
};
function validate192(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.devicePath === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "devicePath"
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
    if (data.devicePath !== undefined) {
      if (!validate23(data.devicePath, {
        instancePath: instancePath + "/devicePath",
        parentData: data,
        parentDataProperty: "devicePath",
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
  validate192.errors = vErrors;
  return errors === 0;
}
function validate191(data, {
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
      if (!validate192(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate192.errors : vErrors.concat(validate192.errors);
        errors = vErrors.length;
      }
    }
  }
  validate191.errors = vErrors;
  return errors === 0;
}
const schema62 = {
  "items": {
    "$ref": "h2ndxqWzuqLEMmnwolMtxbUY8H7jzoghc2HBeqRAw"
  },
  "type": "array",
  "nullable": true
};
const schema63 = {
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
function validate197(data, {
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
      if (!validate23(data.mountPath, {
        instancePath: instancePath + "/mountPath",
        parentData: data,
        parentDataProperty: "mountPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.mountPropagation !== undefined) {
      if (!validate21(data.mountPropagation, {
        instancePath: instancePath + "/mountPropagation",
        parentData: data,
        parentDataProperty: "mountPropagation",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
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
    if (data.readOnly !== undefined) {
      if (!validate25(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.subPath !== undefined) {
      if (!validate21(data.subPath, {
        instancePath: instancePath + "/subPath",
        parentData: data,
        parentDataProperty: "subPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.subPathExpr !== undefined) {
      if (!validate21(data.subPathExpr, {
        instancePath: instancePath + "/subPathExpr",
        parentData: data,
        parentDataProperty: "subPathExpr",
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
  validate197.errors = vErrors;
  return errors === 0;
}
function validate196(data, {
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
      if (!validate197(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate197.errors : vErrors.concat(validate197.errors);
        errors = vErrors.length;
      }
    }
  }
  validate196.errors = vErrors;
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
    if (data.args !== undefined) {
      if (!validate22(data.args, {
        instancePath: instancePath + "/args",
        parentData: data,
        parentDataProperty: "args",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.command !== undefined) {
      if (!validate22(data.command, {
        instancePath: instancePath + "/command",
        parentData: data,
        parentDataProperty: "command",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.env !== undefined) {
      if (!validate114(data.env, {
        instancePath: instancePath + "/env",
        parentData: data,
        parentDataProperty: "env",
        rootData
      })) {
        vErrors = vErrors === null ? validate114.errors : vErrors.concat(validate114.errors);
        errors = vErrors.length;
      }
    }
    if (data.envFrom !== undefined) {
      if (!validate132(data.envFrom, {
        instancePath: instancePath + "/envFrom",
        parentData: data,
        parentDataProperty: "envFrom",
        rootData
      })) {
        vErrors = vErrors === null ? validate132.errors : vErrors.concat(validate132.errors);
        errors = vErrors.length;
      }
    }
    if (data.image !== undefined) {
      if (!validate21(data.image, {
        instancePath: instancePath + "/image",
        parentData: data,
        parentDataProperty: "image",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.imagePullPolicy !== undefined) {
      if (!validate21(data.imagePullPolicy, {
        instancePath: instancePath + "/imagePullPolicy",
        parentData: data,
        parentDataProperty: "imagePullPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.lifecycle !== undefined) {
      if (!validate138(data.lifecycle, {
        instancePath: instancePath + "/lifecycle",
        parentData: data,
        parentDataProperty: "lifecycle",
        rootData
      })) {
        vErrors = vErrors === null ? validate138.errors : vErrors.concat(validate138.errors);
        errors = vErrors.length;
      }
    }
    if (data.livenessProbe !== undefined) {
      if (!validate63(data.livenessProbe, {
        instancePath: instancePath + "/livenessProbe",
        parentData: data,
        parentDataProperty: "livenessProbe",
        rootData
      })) {
        vErrors = vErrors === null ? validate63.errors : vErrors.concat(validate63.errors);
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
    if (data.ports !== undefined) {
      if (!validate141(data.ports, {
        instancePath: instancePath + "/ports",
        parentData: data,
        parentDataProperty: "ports",
        rootData
      })) {
        vErrors = vErrors === null ? validate141.errors : vErrors.concat(validate141.errors);
        errors = vErrors.length;
      }
    }
    if (data.readinessProbe !== undefined) {
      if (!validate63(data.readinessProbe, {
        instancePath: instancePath + "/readinessProbe",
        parentData: data,
        parentDataProperty: "readinessProbe",
        rootData
      })) {
        vErrors = vErrors === null ? validate63.errors : vErrors.concat(validate63.errors);
        errors = vErrors.length;
      }
    }
    if (data.resizePolicy !== undefined) {
      if (!validate150(data.resizePolicy, {
        instancePath: instancePath + "/resizePolicy",
        parentData: data,
        parentDataProperty: "resizePolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate150.errors : vErrors.concat(validate150.errors);
        errors = vErrors.length;
      }
    }
    if (data.resources !== undefined) {
      if (!validate155(data.resources, {
        instancePath: instancePath + "/resources",
        parentData: data,
        parentDataProperty: "resources",
        rootData
      })) {
        vErrors = vErrors === null ? validate155.errors : vErrors.concat(validate155.errors);
        errors = vErrors.length;
      }
    }
    if (data.restartPolicy !== undefined) {
      if (!validate21(data.restartPolicy, {
        instancePath: instancePath + "/restartPolicy",
        parentData: data,
        parentDataProperty: "restartPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.securityContext !== undefined) {
      if (!validate163(data.securityContext, {
        instancePath: instancePath + "/securityContext",
        parentData: data,
        parentDataProperty: "securityContext",
        rootData
      })) {
        vErrors = vErrors === null ? validate163.errors : vErrors.concat(validate163.errors);
        errors = vErrors.length;
      }
    }
    if (data.startupProbe !== undefined) {
      if (!validate63(data.startupProbe, {
        instancePath: instancePath + "/startupProbe",
        parentData: data,
        parentDataProperty: "startupProbe",
        rootData
      })) {
        vErrors = vErrors === null ? validate63.errors : vErrors.concat(validate63.errors);
        errors = vErrors.length;
      }
    }
    if (data.stdin !== undefined) {
      if (!validate25(data.stdin, {
        instancePath: instancePath + "/stdin",
        parentData: data,
        parentDataProperty: "stdin",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.stdinOnce !== undefined) {
      if (!validate25(data.stdinOnce, {
        instancePath: instancePath + "/stdinOnce",
        parentData: data,
        parentDataProperty: "stdinOnce",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.terminationMessagePath !== undefined) {
      if (!validate21(data.terminationMessagePath, {
        instancePath: instancePath + "/terminationMessagePath",
        parentData: data,
        parentDataProperty: "terminationMessagePath",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.terminationMessagePolicy !== undefined) {
      if (!validate21(data.terminationMessagePolicy, {
        instancePath: instancePath + "/terminationMessagePolicy",
        parentData: data,
        parentDataProperty: "terminationMessagePolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.tty !== undefined) {
      if (!validate25(data.tty, {
        instancePath: instancePath + "/tty",
        parentData: data,
        parentDataProperty: "tty",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeDevices !== undefined) {
      if (!validate191(data.volumeDevices, {
        instancePath: instancePath + "/volumeDevices",
        parentData: data,
        parentDataProperty: "volumeDevices",
        rootData
      })) {
        vErrors = vErrors === null ? validate191.errors : vErrors.concat(validate191.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeMounts !== undefined) {
      if (!validate196(data.volumeMounts, {
        instancePath: instancePath + "/volumeMounts",
        parentData: data,
        parentDataProperty: "volumeMounts",
        rootData
      })) {
        vErrors = vErrors === null ? validate196.errors : vErrors.concat(validate196.errors);
        errors = vErrors.length;
      }
    }
    if (data.workingDir !== undefined) {
      if (!validate21(data.workingDir, {
        instancePath: instancePath + "/workingDir",
        parentData: data,
        parentDataProperty: "workingDir",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate253.errors = vErrors;
  return errors === 0;
}
const schema74 = {
  "properties": {
    "activeDeadlineSeconds": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "affinity": {
      "$ref": "NaNeXKn0QKRMisXuVeCRDHK1E3tk7kcciv2xStV5SY"
    },
    "automountServiceAccountToken": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "containers": {
      "$ref": "NbpBppgN1VwjmnBbIM6o7Acs33k6obCbcjEXN1mifbU"
    },
    "dnsConfig": {
      "$ref": "MuIQELsc9ogGvxi1N5Z0YKzi8GEYeh1nfmhTlrQQEA"
    },
    "dnsPolicy": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "enableServiceLinks": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "ephemeralContainers": {
      "$ref": "kqrcV51g4SmphenD0oNT2GVl33MWWiQW4Pa66JB4fCo"
    },
    "hostAliases": {
      "$ref": "SZ72R0UUac89T8ToQgWDMMBoLu4zXDkXF2OEw4Dd7k"
    },
    "hostIPC": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "hostNetwork": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "hostPID": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "hostUsers": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "hostname": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "imagePullSecrets": {
      "$ref": "0pzBTE76xYFsQtoMToT048kLLDNrLQ4wQvdw1GHVrQ"
    },
    "initContainers": {
      "$ref": "qo7rcSebTiv4JRxauJA7wt3xiUvy9YcQFENnTX5IuQc"
    },
    "nodeName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "nodeSelector": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "os": {
      "$ref": "OAgQGC3YN1FICnXF5ReeaD1QWt6Riug0pHBXOEYs"
    },
    "overhead": {
      "$ref": "gjo16z3NV0NSVrHi0ow9dEFkpRekg7uAIyza4KmU"
    },
    "preemptionPolicy": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "priority": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "priorityClassName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "readinessGates": {
      "$ref": "Q6N7tALrvkRTPyPygAPvBhRBXKuUnzIstnLvap8aNpo"
    },
    "resourceClaims": {
      "$ref": "TRsWGKWqAXoezQRUk1H9jhjSkXj5ve05Dt0ZW2ljU"
    },
    "restartPolicy": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "runtimeClassName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "schedulerName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "schedulingGates": {
      "$ref": "xcpG1cEijhhVdOeFxCi8O2nBHHEkNfBU2rvTOFs7LU"
    },
    "securityContext": {
      "$ref": "ddB3tD2SHT4OKxzQFKXJhd51Fb7wlsxB2LqTtT1VQY"
    },
    "serviceAccount": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "serviceAccountName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "setHostnameAsFQDN": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "shareProcessNamespace": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "subdomain": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "terminationGracePeriodSeconds": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "tolerations": {
      "$ref": "0n4c9hC8BjWXgqJPcgtzXIbgzIfyT58Oy1pU5nsoec"
    },
    "topologySpreadConstraints": {
      "$ref": "41mgk2SDFjdQwKv2VPdOODZzv1bDMOctKEj0z6qFY"
    },
    "volumes": {
      "$ref": "NK9XRmrJZhXlsQeh5h7LWvintQYlBIham5Lya3T8"
    }
  },
  "required": ["containers"],
  "type": "object",
  "nullable": true
};
const schema75 = {
  "properties": {
    "nodeAffinity": {
      "$ref": "ilIeGX7cSHMmL7ioNwzODU6lYXSv4jarxIX2s8IW4"
    },
    "podAffinity": {
      "$ref": "ylEmtwtSwg82hhEoqDrbiteTjVi6TsrDIUlC8rMoQaQ"
    },
    "podAntiAffinity": {
      "$ref": "ylEmtwtSwg82hhEoqDrbiteTjVi6TsrDIUlC8rMoQaQ"
    }
  },
  "type": "object",
  "nullable": true
};
const schema76 = {
  "properties": {
    "preferredDuringSchedulingIgnoredDuringExecution": {
      "$ref": "HC615OS3o4FaxIeSsZYUiEWpRFwokElNCDLKZWAw"
    },
    "requiredDuringSchedulingIgnoredDuringExecution": {
      "$ref": "yWknb7dT7ue0rjnNXkPUrp1WPuHKhs0S6rXzUG4qQHM"
    }
  },
  "type": "object",
  "nullable": true
};
const schema77 = {
  "items": {
    "$ref": "KT8yO8lY4mlKxs74BP1LG0T6VlK79euyrEXXie1TQM"
  },
  "type": "array",
  "nullable": true
};
const schema78 = {
  "properties": {
    "preference": {
      "$ref": "tydPzboPRD4fGreI5KQTJcmvoGoGl0gxaSYfabYh8UI"
    },
    "weight": {
      "$ref": "ppOMqvYEA3GSH3ozhOJ2Wta6ImWhzC9DOYsjidshCYo"
    }
  },
  "required": ["preference", "weight"],
  "type": "object"
};
const schema31 = {
  "properties": {
    "matchExpressions": {
      "$ref": "9BW0WuIp1SxhBT4vHohXPUikn0YuwzPq2mNUBC1NsE"
    },
    "matchFields": {
      "$ref": "9BW0WuIp1SxhBT4vHohXPUikn0YuwzPq2mNUBC1NsE"
    }
  },
  "type": "object"
};
const schema29 = {
  "items": {
    "$ref": "MkwwSDeYoT1APit7w8qsvbKCw8OynjINdeojyPgpPQ"
  },
  "type": "array",
  "nullable": true
};
const schema30 = {
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
function validate84(data, {
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
      if (!validate23(data.key, {
        instancePath: instancePath + "/key",
        parentData: data,
        parentDataProperty: "key",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.operator !== undefined) {
      if (!validate23(data.operator, {
        instancePath: instancePath + "/operator",
        parentData: data,
        parentDataProperty: "operator",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.values !== undefined) {
      if (!validate22(data.values, {
        instancePath: instancePath + "/values",
        parentData: data,
        parentDataProperty: "values",
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
function validate89(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.matchExpressions !== undefined) {
      if (!validate83(data.matchExpressions, {
        instancePath: instancePath + "/matchExpressions",
        parentData: data,
        parentDataProperty: "matchExpressions",
        rootData
      })) {
        vErrors = vErrors === null ? validate83.errors : vErrors.concat(validate83.errors);
        errors = vErrors.length;
      }
    }
    if (data.matchFields !== undefined) {
      if (!validate83(data.matchFields, {
        instancePath: instancePath + "/matchFields",
        parentData: data,
        parentDataProperty: "matchFields",
        rootData
      })) {
        vErrors = vErrors === null ? validate83.errors : vErrors.concat(validate83.errors);
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
  validate89.errors = vErrors;
  return errors === 0;
}
function validate283(data, {
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
      if (!validate89(data.preference, {
        instancePath: instancePath + "/preference",
        parentData: data,
        parentDataProperty: "preference",
        rootData
      })) {
        vErrors = vErrors === null ? validate89.errors : vErrors.concat(validate89.errors);
        errors = vErrors.length;
      }
    }
    if (data.weight !== undefined) {
      if (!validate62(data.weight, {
        instancePath: instancePath + "/weight",
        parentData: data,
        parentDataProperty: "weight",
        rootData
      })) {
        vErrors = vErrors === null ? validate62.errors : vErrors.concat(validate62.errors);
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
  validate283.errors = vErrors;
  return errors === 0;
}
function validate282(data, {
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
      if (!validate283(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate283.errors : vErrors.concat(validate283.errors);
        errors = vErrors.length;
      }
    }
  }
  validate282.errors = vErrors;
  return errors === 0;
}
const schema79 = {
  "properties": {
    "nodeSelectorTerms": {
      "$ref": "hVQp5aNt5Ip0WaaRBpcUfl5xvhWH5vfkg8VQq1is"
    }
  },
  "required": ["nodeSelectorTerms"],
  "type": "object",
  "nullable": true
};
const schema80 = {
  "items": {
    "$ref": "tydPzboPRD4fGreI5KQTJcmvoGoGl0gxaSYfabYh8UI"
  },
  "type": "array"
};
function validate289(data, {
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
      if (!validate89(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate89.errors : vErrors.concat(validate89.errors);
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
  validate289.errors = vErrors;
  return errors === 0;
}
function validate288(data, {
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
      if (!validate289(data.nodeSelectorTerms, {
        instancePath: instancePath + "/nodeSelectorTerms",
        parentData: data,
        parentDataProperty: "nodeSelectorTerms",
        rootData
      })) {
        vErrors = vErrors === null ? validate289.errors : vErrors.concat(validate289.errors);
        errors = vErrors.length;
      }
    }
  }
  validate288.errors = vErrors;
  return errors === 0;
}
function validate281(data, {
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
      if (!validate282(data.preferredDuringSchedulingIgnoredDuringExecution, {
        instancePath: instancePath + "/preferredDuringSchedulingIgnoredDuringExecution",
        parentData: data,
        parentDataProperty: "preferredDuringSchedulingIgnoredDuringExecution",
        rootData
      })) {
        vErrors = vErrors === null ? validate282.errors : vErrors.concat(validate282.errors);
        errors = vErrors.length;
      }
    }
    if (data.requiredDuringSchedulingIgnoredDuringExecution !== undefined) {
      if (!validate288(data.requiredDuringSchedulingIgnoredDuringExecution, {
        instancePath: instancePath + "/requiredDuringSchedulingIgnoredDuringExecution",
        parentData: data,
        parentDataProperty: "requiredDuringSchedulingIgnoredDuringExecution",
        rootData
      })) {
        vErrors = vErrors === null ? validate288.errors : vErrors.concat(validate288.errors);
        errors = vErrors.length;
      }
    }
  }
  validate281.errors = vErrors;
  return errors === 0;
}
const schema35 = {
  "properties": {
    "preferredDuringSchedulingIgnoredDuringExecution": {
      "$ref": "ktW8omwsdv4h1ZUVBdxEhxZhXj5nxkm43N9pcvJrrM"
    },
    "requiredDuringSchedulingIgnoredDuringExecution": {
      "$ref": "ktctqYOAsMHIixg2Gm2aXkNpxOJnHjW8wto3QV1AUxA"
    }
  },
  "type": "object",
  "nullable": true
};
const schema36 = {
  "items": {
    "$ref": "LepDbJcwPnCcyZ7mVuZvtxVde3n1waMDxZcCV0sNkA"
  },
  "type": "array",
  "nullable": true
};
const schema37 = {
  "properties": {
    "podAffinityTerm": {
      "$ref": "GyfMzSslA4sUTVEUXrenLtQzpQAdbyIramP0NI208y8"
    },
    "weight": {
      "$ref": "ppOMqvYEA3GSH3ozhOJ2Wta6ImWhzC9DOYsjidshCYo"
    }
  },
  "required": ["podAffinityTerm", "weight"],
  "type": "object"
};
const schema34 = {
  "properties": {
    "labelSelector": {
      "$ref": "Zjt3HFRfql15zSZzpouBNTusTEhVu3UqWLOK7EP6U"
    },
    "matchLabelKeys": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "mismatchLabelKeys": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "namespaceSelector": {
      "$ref": "Zjt3HFRfql15zSZzpouBNTusTEhVu3UqWLOK7EP6U"
    },
    "namespaces": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "topologyKey": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["topologyKey"],
  "type": "object"
};
const schema32 = {
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
const schema33 = {
  "additionalProperties": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "object",
  "properties": {},
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
      if (!validate23(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate94.errors = vErrors;
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
      if (!validate83(data.matchExpressions, {
        instancePath: instancePath + "/matchExpressions",
        parentData: data,
        parentDataProperty: "matchExpressions",
        rootData
      })) {
        vErrors = vErrors === null ? validate83.errors : vErrors.concat(validate83.errors);
        errors = vErrors.length;
      }
    }
    if (data.matchLabels !== undefined) {
      if (!validate94(data.matchLabels, {
        instancePath: instancePath + "/matchLabels",
        parentData: data,
        parentDataProperty: "matchLabels",
        rootData
      })) {
        vErrors = vErrors === null ? validate94.errors : vErrors.concat(validate94.errors);
        errors = vErrors.length;
      }
    }
  }
  validate92.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.topologyKey === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "topologyKey"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.labelSelector !== undefined) {
      if (!validate92(data.labelSelector, {
        instancePath: instancePath + "/labelSelector",
        parentData: data,
        parentDataProperty: "labelSelector",
        rootData
      })) {
        vErrors = vErrors === null ? validate92.errors : vErrors.concat(validate92.errors);
        errors = vErrors.length;
      }
    }
    if (data.matchLabelKeys !== undefined) {
      if (!validate22(data.matchLabelKeys, {
        instancePath: instancePath + "/matchLabelKeys",
        parentData: data,
        parentDataProperty: "matchLabelKeys",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.mismatchLabelKeys !== undefined) {
      if (!validate22(data.mismatchLabelKeys, {
        instancePath: instancePath + "/mismatchLabelKeys",
        parentData: data,
        parentDataProperty: "mismatchLabelKeys",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespaceSelector !== undefined) {
      if (!validate92(data.namespaceSelector, {
        instancePath: instancePath + "/namespaceSelector",
        parentData: data,
        parentDataProperty: "namespaceSelector",
        rootData
      })) {
        vErrors = vErrors === null ? validate92.errors : vErrors.concat(validate92.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespaces !== undefined) {
      if (!validate22(data.namespaces, {
        instancePath: instancePath + "/namespaces",
        parentData: data,
        parentDataProperty: "namespaces",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.topologyKey !== undefined) {
      if (!validate23(data.topologyKey, {
        instancePath: instancePath + "/topologyKey",
        parentData: data,
        parentDataProperty: "topologyKey",
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
  validate97.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.podAffinityTerm === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "podAffinityTerm"
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
    if (data.podAffinityTerm !== undefined) {
      if (!validate97(data.podAffinityTerm, {
        instancePath: instancePath + "/podAffinityTerm",
        parentData: data,
        parentDataProperty: "podAffinityTerm",
        rootData
      })) {
        vErrors = vErrors === null ? validate97.errors : vErrors.concat(validate97.errors);
        errors = vErrors.length;
      }
    }
    if (data.weight !== undefined) {
      if (!validate62(data.weight, {
        instancePath: instancePath + "/weight",
        parentData: data,
        parentDataProperty: "weight",
        rootData
      })) {
        vErrors = vErrors === null ? validate62.errors : vErrors.concat(validate62.errors);
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
      if (!validate106(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
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
  "items": {
    "$ref": "GyfMzSslA4sUTVEUXrenLtQzpQAdbyIramP0NI208y8"
  },
  "type": "array",
  "nullable": true
};
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
      if (!validate97(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate97.errors : vErrors.concat(validate97.errors);
        errors = vErrors.length;
      }
    }
  }
  validate111.errors = vErrors;
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
    if (data.preferredDuringSchedulingIgnoredDuringExecution !== undefined) {
      if (!validate105(data.preferredDuringSchedulingIgnoredDuringExecution, {
        instancePath: instancePath + "/preferredDuringSchedulingIgnoredDuringExecution",
        parentData: data,
        parentDataProperty: "preferredDuringSchedulingIgnoredDuringExecution",
        rootData
      })) {
        vErrors = vErrors === null ? validate105.errors : vErrors.concat(validate105.errors);
        errors = vErrors.length;
      }
    }
    if (data.requiredDuringSchedulingIgnoredDuringExecution !== undefined) {
      if (!validate111(data.requiredDuringSchedulingIgnoredDuringExecution, {
        instancePath: instancePath + "/requiredDuringSchedulingIgnoredDuringExecution",
        parentData: data,
        parentDataProperty: "requiredDuringSchedulingIgnoredDuringExecution",
        rootData
      })) {
        vErrors = vErrors === null ? validate111.errors : vErrors.concat(validate111.errors);
        errors = vErrors.length;
      }
    }
  }
  validate104.errors = vErrors;
  return errors === 0;
}
function validate280(data, {
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
    if (data.nodeAffinity !== undefined) {
      if (!validate281(data.nodeAffinity, {
        instancePath: instancePath + "/nodeAffinity",
        parentData: data,
        parentDataProperty: "nodeAffinity",
        rootData
      })) {
        vErrors = vErrors === null ? validate281.errors : vErrors.concat(validate281.errors);
        errors = vErrors.length;
      }
    }
    if (data.podAffinity !== undefined) {
      if (!validate104(data.podAffinity, {
        instancePath: instancePath + "/podAffinity",
        parentData: data,
        parentDataProperty: "podAffinity",
        rootData
      })) {
        vErrors = vErrors === null ? validate104.errors : vErrors.concat(validate104.errors);
        errors = vErrors.length;
      }
    }
    if (data.podAntiAffinity !== undefined) {
      if (!validate104(data.podAntiAffinity, {
        instancePath: instancePath + "/podAntiAffinity",
        parentData: data,
        parentDataProperty: "podAntiAffinity",
        rootData
      })) {
        vErrors = vErrors === null ? validate104.errors : vErrors.concat(validate104.errors);
        errors = vErrors.length;
      }
    }
  }
  validate280.errors = vErrors;
  return errors === 0;
}
const schema81 = {
  "items": {
    "$ref": "oVEOhwOMmt9BLoj9bhflz02vtQtPiUNNrdxrgJVRAmA"
  },
  "type": "array"
};
const schema64 = {
  "properties": {
    "args": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "command": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "env": {
      "$ref": "3Jp76g3FDGxGCRhB4rdsXV0CN3ViAXzNmXiWQNaiI"
    },
    "envFrom": {
      "$ref": "EkD1nTzAjmtgIszfzhU32HU6RJWgWl1E3sZihaaYJk"
    },
    "image": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "imagePullPolicy": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "lifecycle": {
      "$ref": "RFdx2XZbMwDJdMr2aIABLWh6wm9pXrmT36F8JegfkcE"
    },
    "livenessProbe": {
      "$ref": "6hcGsOxaLbPw8KjDNduwssgl3ObU2WuOLGRodXs"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "ports": {
      "$ref": "QkG34wpgMYTMO9YE77bfWKFLDRsUlPeO44VNnszt7Qs"
    },
    "readinessProbe": {
      "$ref": "6hcGsOxaLbPw8KjDNduwssgl3ObU2WuOLGRodXs"
    },
    "resizePolicy": {
      "$ref": "6GSWrpaVmXpudv48RvtoxAgwJVMPod1ZDpz48dxmpTE"
    },
    "resources": {
      "$ref": "MwxOFQf7SDwNxgfa7EwX9dt7776AqT8sAlMcBeXt9HM"
    },
    "restartPolicy": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "securityContext": {
      "$ref": "aND3ea1LG5u3n1ujZMr0x8VV9erWu8SezMfn5zIpYm8"
    },
    "startupProbe": {
      "$ref": "6hcGsOxaLbPw8KjDNduwssgl3ObU2WuOLGRodXs"
    },
    "stdin": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "stdinOnce": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "terminationMessagePath": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "terminationMessagePolicy": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "tty": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "volumeDevices": {
      "$ref": "mBDhRX59TxMU0NTk7LfnSYRWB6jHAhliJbubNaMjM"
    },
    "volumeMounts": {
      "$ref": "ploEHy7cvuqU434uo1rYaAhc9iU5NKdsYBUm8wDO6M"
    },
    "workingDir": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["name"],
  "type": "object"
};
function validate205(data, {
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
    if (data.args !== undefined) {
      if (!validate22(data.args, {
        instancePath: instancePath + "/args",
        parentData: data,
        parentDataProperty: "args",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.command !== undefined) {
      if (!validate22(data.command, {
        instancePath: instancePath + "/command",
        parentData: data,
        parentDataProperty: "command",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.env !== undefined) {
      if (!validate114(data.env, {
        instancePath: instancePath + "/env",
        parentData: data,
        parentDataProperty: "env",
        rootData
      })) {
        vErrors = vErrors === null ? validate114.errors : vErrors.concat(validate114.errors);
        errors = vErrors.length;
      }
    }
    if (data.envFrom !== undefined) {
      if (!validate132(data.envFrom, {
        instancePath: instancePath + "/envFrom",
        parentData: data,
        parentDataProperty: "envFrom",
        rootData
      })) {
        vErrors = vErrors === null ? validate132.errors : vErrors.concat(validate132.errors);
        errors = vErrors.length;
      }
    }
    if (data.image !== undefined) {
      if (!validate21(data.image, {
        instancePath: instancePath + "/image",
        parentData: data,
        parentDataProperty: "image",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.imagePullPolicy !== undefined) {
      if (!validate21(data.imagePullPolicy, {
        instancePath: instancePath + "/imagePullPolicy",
        parentData: data,
        parentDataProperty: "imagePullPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.lifecycle !== undefined) {
      if (!validate138(data.lifecycle, {
        instancePath: instancePath + "/lifecycle",
        parentData: data,
        parentDataProperty: "lifecycle",
        rootData
      })) {
        vErrors = vErrors === null ? validate138.errors : vErrors.concat(validate138.errors);
        errors = vErrors.length;
      }
    }
    if (data.livenessProbe !== undefined) {
      if (!validate63(data.livenessProbe, {
        instancePath: instancePath + "/livenessProbe",
        parentData: data,
        parentDataProperty: "livenessProbe",
        rootData
      })) {
        vErrors = vErrors === null ? validate63.errors : vErrors.concat(validate63.errors);
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
    if (data.ports !== undefined) {
      if (!validate141(data.ports, {
        instancePath: instancePath + "/ports",
        parentData: data,
        parentDataProperty: "ports",
        rootData
      })) {
        vErrors = vErrors === null ? validate141.errors : vErrors.concat(validate141.errors);
        errors = vErrors.length;
      }
    }
    if (data.readinessProbe !== undefined) {
      if (!validate63(data.readinessProbe, {
        instancePath: instancePath + "/readinessProbe",
        parentData: data,
        parentDataProperty: "readinessProbe",
        rootData
      })) {
        vErrors = vErrors === null ? validate63.errors : vErrors.concat(validate63.errors);
        errors = vErrors.length;
      }
    }
    if (data.resizePolicy !== undefined) {
      if (!validate150(data.resizePolicy, {
        instancePath: instancePath + "/resizePolicy",
        parentData: data,
        parentDataProperty: "resizePolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate150.errors : vErrors.concat(validate150.errors);
        errors = vErrors.length;
      }
    }
    if (data.resources !== undefined) {
      if (!validate155(data.resources, {
        instancePath: instancePath + "/resources",
        parentData: data,
        parentDataProperty: "resources",
        rootData
      })) {
        vErrors = vErrors === null ? validate155.errors : vErrors.concat(validate155.errors);
        errors = vErrors.length;
      }
    }
    if (data.restartPolicy !== undefined) {
      if (!validate21(data.restartPolicy, {
        instancePath: instancePath + "/restartPolicy",
        parentData: data,
        parentDataProperty: "restartPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.securityContext !== undefined) {
      if (!validate163(data.securityContext, {
        instancePath: instancePath + "/securityContext",
        parentData: data,
        parentDataProperty: "securityContext",
        rootData
      })) {
        vErrors = vErrors === null ? validate163.errors : vErrors.concat(validate163.errors);
        errors = vErrors.length;
      }
    }
    if (data.startupProbe !== undefined) {
      if (!validate63(data.startupProbe, {
        instancePath: instancePath + "/startupProbe",
        parentData: data,
        parentDataProperty: "startupProbe",
        rootData
      })) {
        vErrors = vErrors === null ? validate63.errors : vErrors.concat(validate63.errors);
        errors = vErrors.length;
      }
    }
    if (data.stdin !== undefined) {
      if (!validate25(data.stdin, {
        instancePath: instancePath + "/stdin",
        parentData: data,
        parentDataProperty: "stdin",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.stdinOnce !== undefined) {
      if (!validate25(data.stdinOnce, {
        instancePath: instancePath + "/stdinOnce",
        parentData: data,
        parentDataProperty: "stdinOnce",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.terminationMessagePath !== undefined) {
      if (!validate21(data.terminationMessagePath, {
        instancePath: instancePath + "/terminationMessagePath",
        parentData: data,
        parentDataProperty: "terminationMessagePath",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.terminationMessagePolicy !== undefined) {
      if (!validate21(data.terminationMessagePolicy, {
        instancePath: instancePath + "/terminationMessagePolicy",
        parentData: data,
        parentDataProperty: "terminationMessagePolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.tty !== undefined) {
      if (!validate25(data.tty, {
        instancePath: instancePath + "/tty",
        parentData: data,
        parentDataProperty: "tty",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeDevices !== undefined) {
      if (!validate191(data.volumeDevices, {
        instancePath: instancePath + "/volumeDevices",
        parentData: data,
        parentDataProperty: "volumeDevices",
        rootData
      })) {
        vErrors = vErrors === null ? validate191.errors : vErrors.concat(validate191.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeMounts !== undefined) {
      if (!validate196(data.volumeMounts, {
        instancePath: instancePath + "/volumeMounts",
        parentData: data,
        parentDataProperty: "volumeMounts",
        rootData
      })) {
        vErrors = vErrors === null ? validate196.errors : vErrors.concat(validate196.errors);
        errors = vErrors.length;
      }
    }
    if (data.workingDir !== undefined) {
      if (!validate21(data.workingDir, {
        instancePath: instancePath + "/workingDir",
        parentData: data,
        parentDataProperty: "workingDir",
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
  validate205.errors = vErrors;
  return errors === 0;
}
function validate298(data, {
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
      if (!validate205(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate205.errors : vErrors.concat(validate205.errors);
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
  validate298.errors = vErrors;
  return errors === 0;
}
const schema82 = {
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
const schema83 = {
  "items": {
    "$ref": "sWfncG59c1XfNxmkMXW89j5rdj0YnP54Zpfo5QkH10"
  },
  "type": "array",
  "nullable": true
};
const schema84 = {
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
function validate304(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
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
    if (data.value !== undefined) {
      if (!validate21(data.value, {
        instancePath: instancePath + "/value",
        parentData: data,
        parentDataProperty: "value",
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
  validate304.errors = vErrors;
  return errors === 0;
}
function validate303(data, {
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
      if (!validate304(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate304.errors : vErrors.concat(validate304.errors);
        errors = vErrors.length;
      }
    }
  }
  validate303.errors = vErrors;
  return errors === 0;
}
function validate301(data, {
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
    if (data.nameservers !== undefined) {
      if (!validate22(data.nameservers, {
        instancePath: instancePath + "/nameservers",
        parentData: data,
        parentDataProperty: "nameservers",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.options !== undefined) {
      if (!validate303(data.options, {
        instancePath: instancePath + "/options",
        parentData: data,
        parentDataProperty: "options",
        rootData
      })) {
        vErrors = vErrors === null ? validate303.errors : vErrors.concat(validate303.errors);
        errors = vErrors.length;
      }
    }
    if (data.searches !== undefined) {
      if (!validate22(data.searches, {
        instancePath: instancePath + "/searches",
        parentData: data,
        parentDataProperty: "searches",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate301.errors = vErrors;
  return errors === 0;
}
const schema85 = {
  "items": {
    "$ref": "a1sSMa5snLDUfUFVbluHYvWUBeGxGruh2IBRwXWI28"
  },
  "type": "array",
  "nullable": true
};
const schema86 = {
  "properties": {
    "args": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "command": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "env": {
      "$ref": "3Jp76g3FDGxGCRhB4rdsXV0CN3ViAXzNmXiWQNaiI"
    },
    "envFrom": {
      "$ref": "EkD1nTzAjmtgIszfzhU32HU6RJWgWl1E3sZihaaYJk"
    },
    "image": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "imagePullPolicy": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "lifecycle": {
      "$ref": "RFdx2XZbMwDJdMr2aIABLWh6wm9pXrmT36F8JegfkcE"
    },
    "livenessProbe": {
      "$ref": "6hcGsOxaLbPw8KjDNduwssgl3ObU2WuOLGRodXs"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "ports": {
      "$ref": "QkG34wpgMYTMO9YE77bfWKFLDRsUlPeO44VNnszt7Qs"
    },
    "readinessProbe": {
      "$ref": "6hcGsOxaLbPw8KjDNduwssgl3ObU2WuOLGRodXs"
    },
    "resizePolicy": {
      "$ref": "6GSWrpaVmXpudv48RvtoxAgwJVMPod1ZDpz48dxmpTE"
    },
    "resources": {
      "$ref": "MwxOFQf7SDwNxgfa7EwX9dt7776AqT8sAlMcBeXt9HM"
    },
    "restartPolicy": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "securityContext": {
      "$ref": "aND3ea1LG5u3n1ujZMr0x8VV9erWu8SezMfn5zIpYm8"
    },
    "startupProbe": {
      "$ref": "6hcGsOxaLbPw8KjDNduwssgl3ObU2WuOLGRodXs"
    },
    "stdin": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "stdinOnce": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "targetContainerName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "terminationMessagePath": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "terminationMessagePolicy": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "tty": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "volumeDevices": {
      "$ref": "mBDhRX59TxMU0NTk7LfnSYRWB6jHAhliJbubNaMjM"
    },
    "volumeMounts": {
      "$ref": "ploEHy7cvuqU434uo1rYaAhc9iU5NKdsYBUm8wDO6M"
    },
    "workingDir": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["name"],
  "type": "object"
};
function validate314(data, {
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
    if (data.args !== undefined) {
      if (!validate22(data.args, {
        instancePath: instancePath + "/args",
        parentData: data,
        parentDataProperty: "args",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.command !== undefined) {
      if (!validate22(data.command, {
        instancePath: instancePath + "/command",
        parentData: data,
        parentDataProperty: "command",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.env !== undefined) {
      if (!validate114(data.env, {
        instancePath: instancePath + "/env",
        parentData: data,
        parentDataProperty: "env",
        rootData
      })) {
        vErrors = vErrors === null ? validate114.errors : vErrors.concat(validate114.errors);
        errors = vErrors.length;
      }
    }
    if (data.envFrom !== undefined) {
      if (!validate132(data.envFrom, {
        instancePath: instancePath + "/envFrom",
        parentData: data,
        parentDataProperty: "envFrom",
        rootData
      })) {
        vErrors = vErrors === null ? validate132.errors : vErrors.concat(validate132.errors);
        errors = vErrors.length;
      }
    }
    if (data.image !== undefined) {
      if (!validate21(data.image, {
        instancePath: instancePath + "/image",
        parentData: data,
        parentDataProperty: "image",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.imagePullPolicy !== undefined) {
      if (!validate21(data.imagePullPolicy, {
        instancePath: instancePath + "/imagePullPolicy",
        parentData: data,
        parentDataProperty: "imagePullPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.lifecycle !== undefined) {
      if (!validate138(data.lifecycle, {
        instancePath: instancePath + "/lifecycle",
        parentData: data,
        parentDataProperty: "lifecycle",
        rootData
      })) {
        vErrors = vErrors === null ? validate138.errors : vErrors.concat(validate138.errors);
        errors = vErrors.length;
      }
    }
    if (data.livenessProbe !== undefined) {
      if (!validate63(data.livenessProbe, {
        instancePath: instancePath + "/livenessProbe",
        parentData: data,
        parentDataProperty: "livenessProbe",
        rootData
      })) {
        vErrors = vErrors === null ? validate63.errors : vErrors.concat(validate63.errors);
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
    if (data.ports !== undefined) {
      if (!validate141(data.ports, {
        instancePath: instancePath + "/ports",
        parentData: data,
        parentDataProperty: "ports",
        rootData
      })) {
        vErrors = vErrors === null ? validate141.errors : vErrors.concat(validate141.errors);
        errors = vErrors.length;
      }
    }
    if (data.readinessProbe !== undefined) {
      if (!validate63(data.readinessProbe, {
        instancePath: instancePath + "/readinessProbe",
        parentData: data,
        parentDataProperty: "readinessProbe",
        rootData
      })) {
        vErrors = vErrors === null ? validate63.errors : vErrors.concat(validate63.errors);
        errors = vErrors.length;
      }
    }
    if (data.resizePolicy !== undefined) {
      if (!validate150(data.resizePolicy, {
        instancePath: instancePath + "/resizePolicy",
        parentData: data,
        parentDataProperty: "resizePolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate150.errors : vErrors.concat(validate150.errors);
        errors = vErrors.length;
      }
    }
    if (data.resources !== undefined) {
      if (!validate155(data.resources, {
        instancePath: instancePath + "/resources",
        parentData: data,
        parentDataProperty: "resources",
        rootData
      })) {
        vErrors = vErrors === null ? validate155.errors : vErrors.concat(validate155.errors);
        errors = vErrors.length;
      }
    }
    if (data.restartPolicy !== undefined) {
      if (!validate21(data.restartPolicy, {
        instancePath: instancePath + "/restartPolicy",
        parentData: data,
        parentDataProperty: "restartPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.securityContext !== undefined) {
      if (!validate163(data.securityContext, {
        instancePath: instancePath + "/securityContext",
        parentData: data,
        parentDataProperty: "securityContext",
        rootData
      })) {
        vErrors = vErrors === null ? validate163.errors : vErrors.concat(validate163.errors);
        errors = vErrors.length;
      }
    }
    if (data.startupProbe !== undefined) {
      if (!validate63(data.startupProbe, {
        instancePath: instancePath + "/startupProbe",
        parentData: data,
        parentDataProperty: "startupProbe",
        rootData
      })) {
        vErrors = vErrors === null ? validate63.errors : vErrors.concat(validate63.errors);
        errors = vErrors.length;
      }
    }
    if (data.stdin !== undefined) {
      if (!validate25(data.stdin, {
        instancePath: instancePath + "/stdin",
        parentData: data,
        parentDataProperty: "stdin",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.stdinOnce !== undefined) {
      if (!validate25(data.stdinOnce, {
        instancePath: instancePath + "/stdinOnce",
        parentData: data,
        parentDataProperty: "stdinOnce",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.targetContainerName !== undefined) {
      if (!validate21(data.targetContainerName, {
        instancePath: instancePath + "/targetContainerName",
        parentData: data,
        parentDataProperty: "targetContainerName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.terminationMessagePath !== undefined) {
      if (!validate21(data.terminationMessagePath, {
        instancePath: instancePath + "/terminationMessagePath",
        parentData: data,
        parentDataProperty: "terminationMessagePath",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.terminationMessagePolicy !== undefined) {
      if (!validate21(data.terminationMessagePolicy, {
        instancePath: instancePath + "/terminationMessagePolicy",
        parentData: data,
        parentDataProperty: "terminationMessagePolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.tty !== undefined) {
      if (!validate25(data.tty, {
        instancePath: instancePath + "/tty",
        parentData: data,
        parentDataProperty: "tty",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeDevices !== undefined) {
      if (!validate191(data.volumeDevices, {
        instancePath: instancePath + "/volumeDevices",
        parentData: data,
        parentDataProperty: "volumeDevices",
        rootData
      })) {
        vErrors = vErrors === null ? validate191.errors : vErrors.concat(validate191.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeMounts !== undefined) {
      if (!validate196(data.volumeMounts, {
        instancePath: instancePath + "/volumeMounts",
        parentData: data,
        parentDataProperty: "volumeMounts",
        rootData
      })) {
        vErrors = vErrors === null ? validate196.errors : vErrors.concat(validate196.errors);
        errors = vErrors.length;
      }
    }
    if (data.workingDir !== undefined) {
      if (!validate21(data.workingDir, {
        instancePath: instancePath + "/workingDir",
        parentData: data,
        parentDataProperty: "workingDir",
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
  validate314.errors = vErrors;
  return errors === 0;
}
function validate313(data, {
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
      if (!validate314(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate314.errors : vErrors.concat(validate314.errors);
        errors = vErrors.length;
      }
    }
  }
  validate313.errors = vErrors;
  return errors === 0;
}
const schema87 = {
  "items": {
    "$ref": "yiLo38WDwKGtINzmSW6jxETeZwoUuCRIqevG22DYxc"
  },
  "type": "array",
  "nullable": true
};
const schema88 = {
  "properties": {
    "hostnames": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "ip": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
function validate343(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.hostnames !== undefined) {
      if (!validate22(data.hostnames, {
        instancePath: instancePath + "/hostnames",
        parentData: data,
        parentDataProperty: "hostnames",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
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
  validate343.errors = vErrors;
  return errors === 0;
}
function validate342(data, {
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
      if (!validate343(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate343.errors : vErrors.concat(validate343.errors);
        errors = vErrors.length;
      }
    }
  }
  validate342.errors = vErrors;
  return errors === 0;
}
const schema89 = {
  "items": {
    "$ref": "qgtTuDaNsImr24YNCUVN3pDpwYXcxIDVFjAvxPkh8"
  },
  "type": "array",
  "nullable": true
};
const schema72 = {
  "properties": {
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
function validate251(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
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
function validate353(data, {
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
      if (!validate251(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate251.errors : vErrors.concat(validate251.errors);
        errors = vErrors.length;
      }
    }
  }
  validate353.errors = vErrors;
  return errors === 0;
}
const schema90 = {
  "items": {
    "$ref": "oVEOhwOMmt9BLoj9bhflz02vtQtPiUNNrdxrgJVRAmA"
  },
  "type": "array",
  "nullable": true
};
function validate356(data, {
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
      if (!validate205(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate205.errors : vErrors.concat(validate205.errors);
        errors = vErrors.length;
      }
    }
  }
  validate356.errors = vErrors;
  return errors === 0;
}
const schema91 = {
  "properties": {
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["name"],
  "type": "object",
  "nullable": true
};
function validate361(data, {
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
  validate361.errors = vErrors;
  return errors === 0;
}
const schema92 = {
  "items": {
    "$ref": "7b4jhx4uNqXqCFn2w8NkgAjv38EtTlcang4jjJrU"
  },
  "type": "array",
  "nullable": true
};
const schema93 = {
  "properties": {
    "conditionType": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["conditionType"],
  "type": "object"
};
function validate369(data, {
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
      if (!validate23(data.conditionType, {
        instancePath: instancePath + "/conditionType",
        parentData: data,
        parentDataProperty: "conditionType",
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
  validate369.errors = vErrors;
  return errors === 0;
}
function validate368(data, {
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
      if (!validate369(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate369.errors : vErrors.concat(validate369.errors);
        errors = vErrors.length;
      }
    }
  }
  validate368.errors = vErrors;
  return errors === 0;
}
const schema94 = {
  "items": {
    "$ref": "BKInMJ58tz4WvH5Bqy0cjn4ePTUjeVNA5RgT7Y0AIE"
  },
  "type": "array",
  "nullable": true
};
const schema95 = {
  "properties": {
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "source": {
      "$ref": "oSOkpen4qJFvkvnsQWHBGC9GFFLyotqN3DeSA6eO5IM"
    }
  },
  "required": ["name"],
  "type": "object"
};
const schema96 = {
  "properties": {
    "resourceClaimName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "resourceClaimTemplateName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate376(data, {
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
    if (data.resourceClaimName !== undefined) {
      if (!validate21(data.resourceClaimName, {
        instancePath: instancePath + "/resourceClaimName",
        parentData: data,
        parentDataProperty: "resourceClaimName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.resourceClaimTemplateName !== undefined) {
      if (!validate21(data.resourceClaimTemplateName, {
        instancePath: instancePath + "/resourceClaimTemplateName",
        parentData: data,
        parentDataProperty: "resourceClaimTemplateName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate376.errors = vErrors;
  return errors === 0;
}
function validate374(data, {
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
    if (data.source !== undefined) {
      if (!validate376(data.source, {
        instancePath: instancePath + "/source",
        parentData: data,
        parentDataProperty: "source",
        rootData
      })) {
        vErrors = vErrors === null ? validate376.errors : vErrors.concat(validate376.errors);
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
  validate374.errors = vErrors;
  return errors === 0;
}
function validate373(data, {
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
      if (!validate374(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate374.errors : vErrors.concat(validate374.errors);
        errors = vErrors.length;
      }
    }
  }
  validate373.errors = vErrors;
  return errors === 0;
}
const schema97 = {
  "properties": {
    "fsGroup": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "fsGroupChangePolicy": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "runAsGroup": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "runAsNonRoot": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "runAsUser": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "seLinuxOptions": {
      "$ref": "HxCShOIxXvAeZcVxGCTBWSblLv24k535dp3HuWUtqq0"
    },
    "seccompProfile": {
      "$ref": "YbnajYi6rBqhVSaUKuHSP0DlX7N4UdiS6tIv3THy4"
    },
    "supplementalGroups": {
      "$ref": "Q576bBYbJ1AGPeiGBGrCfpIOdAY4EluWm7uSP5Hk"
    },
    "sysctls": {
      "$ref": "wOtvUyP8xBMF8YvP9G2nZ7hpGeMpOckdRUXrDPgLUY"
    },
    "windowsOptions": {
      "$ref": "sWfrXDJM9xHwLEX7HYTegXP1RJ5T3eXzwt07iJjKI"
    }
  },
  "type": "object",
  "nullable": true
};
const schema98 = {
  "items": {
    "$ref": "icwF9bpzvIS3QxC52v2XvqrjjaZnFwyMbHUnptLeEQ"
  },
  "type": "array",
  "nullable": true
};
function validate394(data, {
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
      if (!validate54(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
  }
  validate394.errors = vErrors;
  return errors === 0;
}
function validate386(data, {
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
    if (data.fsGroup !== undefined) {
      if (!validate75(data.fsGroup, {
        instancePath: instancePath + "/fsGroup",
        parentData: data,
        parentDataProperty: "fsGroup",
        rootData
      })) {
        vErrors = vErrors === null ? validate75.errors : vErrors.concat(validate75.errors);
        errors = vErrors.length;
      }
    }
    if (data.fsGroupChangePolicy !== undefined) {
      if (!validate21(data.fsGroupChangePolicy, {
        instancePath: instancePath + "/fsGroupChangePolicy",
        parentData: data,
        parentDataProperty: "fsGroupChangePolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.runAsGroup !== undefined) {
      if (!validate75(data.runAsGroup, {
        instancePath: instancePath + "/runAsGroup",
        parentData: data,
        parentDataProperty: "runAsGroup",
        rootData
      })) {
        vErrors = vErrors === null ? validate75.errors : vErrors.concat(validate75.errors);
        errors = vErrors.length;
      }
    }
    if (data.runAsNonRoot !== undefined) {
      if (!validate25(data.runAsNonRoot, {
        instancePath: instancePath + "/runAsNonRoot",
        parentData: data,
        parentDataProperty: "runAsNonRoot",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.runAsUser !== undefined) {
      if (!validate75(data.runAsUser, {
        instancePath: instancePath + "/runAsUser",
        parentData: data,
        parentDataProperty: "runAsUser",
        rootData
      })) {
        vErrors = vErrors === null ? validate75.errors : vErrors.concat(validate75.errors);
        errors = vErrors.length;
      }
    }
    if (data.seLinuxOptions !== undefined) {
      if (!validate175(data.seLinuxOptions, {
        instancePath: instancePath + "/seLinuxOptions",
        parentData: data,
        parentDataProperty: "seLinuxOptions",
        rootData
      })) {
        vErrors = vErrors === null ? validate175.errors : vErrors.concat(validate175.errors);
        errors = vErrors.length;
      }
    }
    if (data.seccompProfile !== undefined) {
      if (!validate181(data.seccompProfile, {
        instancePath: instancePath + "/seccompProfile",
        parentData: data,
        parentDataProperty: "seccompProfile",
        rootData
      })) {
        vErrors = vErrors === null ? validate181.errors : vErrors.concat(validate181.errors);
        errors = vErrors.length;
      }
    }
    if (data.supplementalGroups !== undefined) {
      if (!validate394(data.supplementalGroups, {
        instancePath: instancePath + "/supplementalGroups",
        parentData: data,
        parentDataProperty: "supplementalGroups",
        rootData
      })) {
        vErrors = vErrors === null ? validate394.errors : vErrors.concat(validate394.errors);
        errors = vErrors.length;
      }
    }
    if (data.sysctls !== undefined) {
      if (!validate43(data.sysctls, {
        instancePath: instancePath + "/sysctls",
        parentData: data,
        parentDataProperty: "sysctls",
        rootData
      })) {
        vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
        errors = vErrors.length;
      }
    }
    if (data.windowsOptions !== undefined) {
      if (!validate185(data.windowsOptions, {
        instancePath: instancePath + "/windowsOptions",
        parentData: data,
        parentDataProperty: "windowsOptions",
        rootData
      })) {
        vErrors = vErrors === null ? validate185.errors : vErrors.concat(validate185.errors);
        errors = vErrors.length;
      }
    }
  }
  validate386.errors = vErrors;
  return errors === 0;
}
const schema99 = {
  "items": {
    "$ref": "Me3dAzCevo9JgluOcBf4PX5XcjXOHICBlAsWQglc"
  },
  "type": "array",
  "nullable": true
};
const schema100 = {
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
function validate407(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.effect !== undefined) {
      if (!validate21(data.effect, {
        instancePath: instancePath + "/effect",
        parentData: data,
        parentDataProperty: "effect",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
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
    if (data.tolerationSeconds !== undefined) {
      if (!validate75(data.tolerationSeconds, {
        instancePath: instancePath + "/tolerationSeconds",
        parentData: data,
        parentDataProperty: "tolerationSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate75.errors : vErrors.concat(validate75.errors);
        errors = vErrors.length;
      }
    }
    if (data.value !== undefined) {
      if (!validate21(data.value, {
        instancePath: instancePath + "/value",
        parentData: data,
        parentDataProperty: "value",
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
  validate407.errors = vErrors;
  return errors === 0;
}
function validate406(data, {
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
      if (!validate407(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate407.errors : vErrors.concat(validate407.errors);
        errors = vErrors.length;
      }
    }
  }
  validate406.errors = vErrors;
  return errors === 0;
}
const schema101 = {
  "items": {
    "$ref": "PMEoIw3F1IPZaI9o7ckqeodb7BJ6q7Y2F6PDUm9sk"
  },
  "type": "array",
  "nullable": true
};
const schema102 = {
  "properties": {
    "labelSelector": {
      "$ref": "Zjt3HFRfql15zSZzpouBNTusTEhVu3UqWLOK7EP6U"
    },
    "matchLabelKeys": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "maxSkew": {
      "$ref": "ppOMqvYEA3GSH3ozhOJ2Wta6ImWhzC9DOYsjidshCYo"
    },
    "minDomains": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "nodeAffinityPolicy": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "nodeTaintsPolicy": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "topologyKey": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "whenUnsatisfiable": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["maxSkew", "topologyKey", "whenUnsatisfiable"],
  "type": "object"
};
function validate416(data, {
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
    if (data.labelSelector !== undefined) {
      if (!validate92(data.labelSelector, {
        instancePath: instancePath + "/labelSelector",
        parentData: data,
        parentDataProperty: "labelSelector",
        rootData
      })) {
        vErrors = vErrors === null ? validate92.errors : vErrors.concat(validate92.errors);
        errors = vErrors.length;
      }
    }
    if (data.matchLabelKeys !== undefined) {
      if (!validate22(data.matchLabelKeys, {
        instancePath: instancePath + "/matchLabelKeys",
        parentData: data,
        parentDataProperty: "matchLabelKeys",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.maxSkew !== undefined) {
      if (!validate62(data.maxSkew, {
        instancePath: instancePath + "/maxSkew",
        parentData: data,
        parentDataProperty: "maxSkew",
        rootData
      })) {
        vErrors = vErrors === null ? validate62.errors : vErrors.concat(validate62.errors);
        errors = vErrors.length;
      }
    }
    if (data.minDomains !== undefined) {
      if (!validate61(data.minDomains, {
        instancePath: instancePath + "/minDomains",
        parentData: data,
        parentDataProperty: "minDomains",
        rootData
      })) {
        vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodeAffinityPolicy !== undefined) {
      if (!validate21(data.nodeAffinityPolicy, {
        instancePath: instancePath + "/nodeAffinityPolicy",
        parentData: data,
        parentDataProperty: "nodeAffinityPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodeTaintsPolicy !== undefined) {
      if (!validate21(data.nodeTaintsPolicy, {
        instancePath: instancePath + "/nodeTaintsPolicy",
        parentData: data,
        parentDataProperty: "nodeTaintsPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.topologyKey !== undefined) {
      if (!validate23(data.topologyKey, {
        instancePath: instancePath + "/topologyKey",
        parentData: data,
        parentDataProperty: "topologyKey",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.whenUnsatisfiable !== undefined) {
      if (!validate23(data.whenUnsatisfiable, {
        instancePath: instancePath + "/whenUnsatisfiable",
        parentData: data,
        parentDataProperty: "whenUnsatisfiable",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
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
  validate416.errors = vErrors;
  return errors === 0;
}
function validate415(data, {
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
      if (!validate416(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate416.errors : vErrors.concat(validate416.errors);
        errors = vErrors.length;
      }
    }
  }
  validate415.errors = vErrors;
  return errors === 0;
}
const schema103 = {
  "items": {
    "$ref": "D7lL8RTfo5fgpdV9M2BJFGWkzAtzL4OwEdauZX748"
  },
  "type": "array",
  "nullable": true
};
const schema104 = {
  "properties": {
    "awsElasticBlockStore": {
      "$ref": "UQa7Lhw5iGFLfJlygIJgmJ6Hywcu6Xn7okVNibWnms"
    },
    "azureDisk": {
      "$ref": "rC5tEafGGt3ojJcfb2HAk0agKW5AulefVOZ7BJtc4"
    },
    "azureFile": {
      "$ref": "aGoyELjKgVZB0zHZY20WHspFt5yRjdEGhBhP64tI"
    },
    "cephfs": {
      "$ref": "MgHYLawNC9z2IYbSqTCcZLojkVKAVMGr6mosPoBQFg"
    },
    "cinder": {
      "$ref": "ybgi1TOJloZ01od6IO6LreMR2QkRj5OpBKkz3BiCs"
    },
    "configMap": {
      "$ref": "uaNQZQ5Y2Z6Ub2O5DPWZhhjzGE3qjh8E610dBIrU"
    },
    "csi": {
      "$ref": "QZukoubHHGDv9FmbnqMQ4MaAii2eYFz3eQKZUKawY"
    },
    "downwardAPI": {
      "$ref": "v1PCMNdiugdUmkd4iDaUiI9TBLV0ysLSufqr22m0o"
    },
    "emptyDir": {
      "$ref": "oCPGk3BkJBAY5rCBWsfjLE97smSw378DNB3pJ2yQdAU"
    },
    "ephemeral": {
      "$ref": "F33o8wSGJ18vDfqucSoToaBqfNIBWwTh74atN5tP21M"
    },
    "fc": {
      "$ref": "Uqzx5kAIsGKjouiuawWN56EiOBK7WDkCQLJuJNuomA"
    },
    "flexVolume": {
      "$ref": "2xnNZ6lM8Qvbll0NBnCh2PSbjJAziUDze6AN2ziQU"
    },
    "flocker": {
      "$ref": "w8yctXjkRqJ0HFoiSOCeruXgyckAOlH3vZnofJ7L9A"
    },
    "gcePersistentDisk": {
      "$ref": "BPpBEgv3BVu3XQEyaunhHFel5nn4hFMSM9gwTMBvVNk"
    },
    "gitRepo": {
      "$ref": "xgKgqYAOLgMggltl93ltgU0mQzey55818D1mM5ydodc"
    },
    "glusterfs": {
      "$ref": "wrr3iOTI9cIafNHBkruOIMvmrMkQJyVegxJz4i6A1P8"
    },
    "hostPath": {
      "$ref": "cDEhPXL8pA6Ec187LOICpIpwh0q9lmBY4g5Xl43cQ"
    },
    "iscsi": {
      "$ref": "EEWm4ienK1GnW5NvsYl36uxiHtJte2GQhMbdFQ3XGE"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "nfs": {
      "$ref": "PTIHrR7ObpFSHfpEsbwkaEt6QpgouCTgsczNTv3E"
    },
    "persistentVolumeClaim": {
      "$ref": "STKrnHXjnhmUK8ywI96Co95jk513Kd6B4STnaeRjE8"
    },
    "photonPersistentDisk": {
      "$ref": "jIbK1AyqFiR5cG5FK2IbibPooMO9NkEUicdeVu1KKoE"
    },
    "portworxVolume": {
      "$ref": "LeJeuVcoPGROifOKwaoW7nJYZwqn7pYot9GYlUELPI"
    },
    "projected": {
      "$ref": "E09smpne2UMELXBpyzZmZzZHVx5m3KxAVI5nnUMZSI"
    },
    "quobyte": {
      "$ref": "LclMJcQIFOPOzptOLn5YycJLDZRCMgkHoMHc4wzDY"
    },
    "rbd": {
      "$ref": "2OdQTwSqJbxEssVjlVmDCT2pODyt3EOdXUUvFVWCYU"
    },
    "scaleIO": {
      "$ref": "p3kfzGQWHqXUqRf3MrQeIK0WccM8HyA8lb8tzqvgsLo"
    },
    "secret": {
      "$ref": "7hoi1hZ13HUjcnY6nweLgqKxHiHpOSs0cLYzJyXZdI"
    },
    "storageos": {
      "$ref": "WUKw4y9z6XPmOPKp3Gu6bjss6o344upeD3tzEF06hA"
    },
    "vsphereVolume": {
      "$ref": "EhgFSGj2dHoIO7ucsQk2Dn5PpCIdUW0wfSO8b6GRc"
    }
  },
  "required": ["name"],
  "type": "object"
};
const schema105 = {
  "properties": {
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "partition": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "volumeID": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["volumeID"],
  "type": "object",
  "nullable": true
};
function validate429(data, {
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
    if (data.volumeID === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "volumeID"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.fsType !== undefined) {
      if (!validate21(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.partition !== undefined) {
      if (!validate61(data.partition, {
        instancePath: instancePath + "/partition",
        parentData: data,
        parentDataProperty: "partition",
        rootData
      })) {
        vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate25(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeID !== undefined) {
      if (!validate23(data.volumeID, {
        instancePath: instancePath + "/volumeID",
        parentData: data,
        parentDataProperty: "volumeID",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate429.errors = vErrors;
  return errors === 0;
}
const schema106 = {
  "properties": {
    "cachingMode": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "diskName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "diskURI": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "kind": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "required": ["diskName", "diskURI"],
  "type": "object",
  "nullable": true
};
function validate435(data, {
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
    if (data.diskName === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "diskName"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.diskURI === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "diskURI"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.cachingMode !== undefined) {
      if (!validate21(data.cachingMode, {
        instancePath: instancePath + "/cachingMode",
        parentData: data,
        parentDataProperty: "cachingMode",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.diskName !== undefined) {
      if (!validate23(data.diskName, {
        instancePath: instancePath + "/diskName",
        parentData: data,
        parentDataProperty: "diskName",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.diskURI !== undefined) {
      if (!validate23(data.diskURI, {
        instancePath: instancePath + "/diskURI",
        parentData: data,
        parentDataProperty: "diskURI",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.fsType !== undefined) {
      if (!validate21(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate21(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate25(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate435.errors = vErrors;
  return errors === 0;
}
const schema107 = {
  "properties": {
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "secretName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "shareName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["secretName", "shareName"],
  "type": "object",
  "nullable": true
};
function validate443(data, {
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
    if (data.shareName === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "shareName"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.readOnly !== undefined) {
      if (!validate25(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
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
    if (data.shareName !== undefined) {
      if (!validate23(data.shareName, {
        instancePath: instancePath + "/shareName",
        parentData: data,
        parentDataProperty: "shareName",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate443.errors = vErrors;
  return errors === 0;
}
const schema108 = {
  "properties": {
    "monitors": {
      "$ref": "YwrI9eYeYzQIcdsUXH7isPYE3sgVab9JvcdpSK4GQ"
    },
    "path": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "secretFile": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "secretRef": {
      "$ref": "2ktcR1INTbBpwSoz9kGFj8xkRezz1YNsTRJ6NRhvk"
    },
    "user": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["monitors"],
  "type": "object",
  "nullable": true
};
const schema71 = {
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "array"
};
function validate249(data, {
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
      if (!validate23(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
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
  validate249.errors = vErrors;
  return errors === 0;
}
const schema65 = {
  "properties": {
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
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
  }
  validate230.errors = vErrors;
  return errors === 0;
}
function validate448(data, {
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
    if (data.monitors === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "monitors"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.monitors !== undefined) {
      if (!validate249(data.monitors, {
        instancePath: instancePath + "/monitors",
        parentData: data,
        parentDataProperty: "monitors",
        rootData
      })) {
        vErrors = vErrors === null ? validate249.errors : vErrors.concat(validate249.errors);
        errors = vErrors.length;
      }
    }
    if (data.path !== undefined) {
      if (!validate21(data.path, {
        instancePath: instancePath + "/path",
        parentData: data,
        parentDataProperty: "path",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate25(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretFile !== undefined) {
      if (!validate21(data.secretFile, {
        instancePath: instancePath + "/secretFile",
        parentData: data,
        parentDataProperty: "secretFile",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate230(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate230.errors : vErrors.concat(validate230.errors);
        errors = vErrors.length;
      }
    }
    if (data.user !== undefined) {
      if (!validate21(data.user, {
        instancePath: instancePath + "/user",
        parentData: data,
        parentDataProperty: "user",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate448.errors = vErrors;
  return errors === 0;
}
const schema109 = {
  "properties": {
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "secretRef": {
      "$ref": "2ktcR1INTbBpwSoz9kGFj8xkRezz1YNsTRJ6NRhvk"
    },
    "volumeID": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["volumeID"],
  "type": "object",
  "nullable": true
};
function validate456(data, {
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
    if (data.volumeID === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "volumeID"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.fsType !== undefined) {
      if (!validate21(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate25(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate230(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate230.errors : vErrors.concat(validate230.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeID !== undefined) {
      if (!validate23(data.volumeID, {
        instancePath: instancePath + "/volumeID",
        parentData: data,
        parentDataProperty: "volumeID",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate456.errors = vErrors;
  return errors === 0;
}
const schema110 = {
  "properties": {
    "defaultMode": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "items": {
      "$ref": "bOfN3l1QF0mww6to6sM7AuvRsOk8kXQng6eAelVIQlw"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "optional": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "type": "object",
  "nullable": true
};
const schema66 = {
  "items": {
    "$ref": "KZm4JRWtb68G65niEVa35cCfAyEYRWGkoaumd8EY"
  },
  "type": "array",
  "nullable": true
};
const schema67 = {
  "properties": {
    "key": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "mode": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "path": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["key", "path"],
  "type": "object"
};
function validate233(data, {
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
    if (data.path === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "path"
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
      if (!validate23(data.key, {
        instancePath: instancePath + "/key",
        parentData: data,
        parentDataProperty: "key",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.mode !== undefined) {
      if (!validate61(data.mode, {
        instancePath: instancePath + "/mode",
        parentData: data,
        parentDataProperty: "mode",
        rootData
      })) {
        vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
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
function validate462(data, {
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
    if (data.defaultMode !== undefined) {
      if (!validate61(data.defaultMode, {
        instancePath: instancePath + "/defaultMode",
        parentData: data,
        parentDataProperty: "defaultMode",
        rootData
      })) {
        vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
        errors = vErrors.length;
      }
    }
    if (data.items !== undefined) {
      if (!validate232(data.items, {
        instancePath: instancePath + "/items",
        parentData: data,
        parentDataProperty: "items",
        rootData
      })) {
        vErrors = vErrors === null ? validate232.errors : vErrors.concat(validate232.errors);
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
    if (data.optional !== undefined) {
      if (!validate25(data.optional, {
        instancePath: instancePath + "/optional",
        parentData: data,
        parentDataProperty: "optional",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate462.errors = vErrors;
  return errors === 0;
}
const schema111 = {
  "properties": {
    "driver": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "nodePublishSecretRef": {
      "$ref": "2ktcR1INTbBpwSoz9kGFj8xkRezz1YNsTRJ6NRhvk"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "volumeAttributes": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    }
  },
  "required": ["driver"],
  "type": "object",
  "nullable": true
};
function validate468(data, {
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
    if (data.driver === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "driver"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.driver !== undefined) {
      if (!validate23(data.driver, {
        instancePath: instancePath + "/driver",
        parentData: data,
        parentDataProperty: "driver",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.fsType !== undefined) {
      if (!validate21(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodePublishSecretRef !== undefined) {
      if (!validate230(data.nodePublishSecretRef, {
        instancePath: instancePath + "/nodePublishSecretRef",
        parentData: data,
        parentDataProperty: "nodePublishSecretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate230.errors : vErrors.concat(validate230.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate25(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeAttributes !== undefined) {
      if (!validate94(data.volumeAttributes, {
        instancePath: instancePath + "/volumeAttributes",
        parentData: data,
        parentDataProperty: "volumeAttributes",
        rootData
      })) {
        vErrors = vErrors === null ? validate94.errors : vErrors.concat(validate94.errors);
        errors = vErrors.length;
      }
    }
  }
  validate468.errors = vErrors;
  return errors === 0;
}
const schema112 = {
  "properties": {
    "defaultMode": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "items": {
      "$ref": "TQHsoKhmMfGdgQZTETcM93nSDALohOZ36ZiSXicyxhU"
    }
  },
  "type": "object",
  "nullable": true
};
const schema68 = {
  "items": {
    "$ref": "83t6EKcTjvzxVMR8ob3sMZu0lIqxm1azYctskfY5Ks4"
  },
  "type": "array",
  "nullable": true
};
const schema69 = {
  "properties": {
    "fieldRef": {
      "$ref": "B5jNtau7CpFJjYJrsYhyzxmI9XsIag7F9u7xksrgmQk"
    },
    "mode": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "path": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "resourceFieldRef": {
      "$ref": "D7PNj4ec9vScD68sAz7HLGzoBiyO7djP09KZXUzl2Y4"
    }
  },
  "required": ["path"],
  "type": "object"
};
function validate239(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.path === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "path"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.fieldRef !== undefined) {
      if (!validate120(data.fieldRef, {
        instancePath: instancePath + "/fieldRef",
        parentData: data,
        parentDataProperty: "fieldRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate120.errors : vErrors.concat(validate120.errors);
        errors = vErrors.length;
      }
    }
    if (data.mode !== undefined) {
      if (!validate61(data.mode, {
        instancePath: instancePath + "/mode",
        parentData: data,
        parentDataProperty: "mode",
        rootData
      })) {
        vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
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
    if (data.resourceFieldRef !== undefined) {
      if (!validate124(data.resourceFieldRef, {
        instancePath: instancePath + "/resourceFieldRef",
        parentData: data,
        parentDataProperty: "resourceFieldRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate124.errors : vErrors.concat(validate124.errors);
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
  validate239.errors = vErrors;
  return errors === 0;
}
function validate238(data, {
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
      if (!validate239(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate239.errors : vErrors.concat(validate239.errors);
        errors = vErrors.length;
      }
    }
  }
  validate238.errors = vErrors;
  return errors === 0;
}
function validate475(data, {
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
    if (data.defaultMode !== undefined) {
      if (!validate61(data.defaultMode, {
        instancePath: instancePath + "/defaultMode",
        parentData: data,
        parentDataProperty: "defaultMode",
        rootData
      })) {
        vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
        errors = vErrors.length;
      }
    }
    if (data.items !== undefined) {
      if (!validate238(data.items, {
        instancePath: instancePath + "/items",
        parentData: data,
        parentDataProperty: "items",
        rootData
      })) {
        vErrors = vErrors === null ? validate238.errors : vErrors.concat(validate238.errors);
        errors = vErrors.length;
      }
    }
  }
  validate475.errors = vErrors;
  return errors === 0;
}
const schema113 = {
  "properties": {
    "medium": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "sizeLimit": {
      "$ref": "l7oaIcmo24pLi7XxCQ3euA6o54Bu2nt1fJ44v0vO04"
    }
  },
  "type": "object",
  "nullable": true
};
function validate479(data, {
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
    if (data.medium !== undefined) {
      if (!validate21(data.medium, {
        instancePath: instancePath + "/medium",
        parentData: data,
        parentDataProperty: "medium",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.sizeLimit !== undefined) {
      if (!validate78(data.sizeLimit, {
        instancePath: instancePath + "/sizeLimit",
        parentData: data,
        parentDataProperty: "sizeLimit",
        rootData
      })) {
        vErrors = vErrors === null ? validate78.errors : vErrors.concat(validate78.errors);
        errors = vErrors.length;
      }
    }
  }
  validate479.errors = vErrors;
  return errors === 0;
}
const schema114 = {
  "properties": {
    "volumeClaimTemplate": {
      "$ref": "xb6jOpxUoWocQky4M600KAxBjfS2rTZzW5qx1Nz1pZo"
    }
  },
  "type": "object",
  "nullable": true
};
const schema115 = {
  "properties": {
    "metadata": {
      "$ref": "wnCl8zCvz1PLbyEivJTcktRgDZuzOGT9FYulvrA2T8w"
    },
    "spec": {
      "$ref": "f0I4fry9NXtZiuhiSg8mrXiKL7enZzVDgFLm5gYsdM"
    }
  },
  "required": ["spec"],
  "type": "object",
  "nullable": true
};
const schema116 = {
  "type": "object",
  "properties": {},
  "nullable": true
};
function validate485(data, {
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
  validate485.errors = vErrors;
  return errors === 0;
}
const schema117 = {
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
  "type": "object"
};
const schema118 = {
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
function validate489(data, {
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
      if (!validate21(data.apiGroup, {
        instancePath: instancePath + "/apiGroup",
        parentData: data,
        parentDataProperty: "apiGroup",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
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
  validate489.errors = vErrors;
  return errors === 0;
}
const schema119 = {
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
function validate494(data, {
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
      if (!validate21(data.apiGroup, {
        instancePath: instancePath + "/apiGroup",
        parentData: data,
        parentDataProperty: "apiGroup",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
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
      if (!validate21(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate494.errors = vErrors;
  return errors === 0;
}
const schema120 = {
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
function validate500(data, {
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
      if (!validate81(data.limits, {
        instancePath: instancePath + "/limits",
        parentData: data,
        parentDataProperty: "limits",
        rootData
      })) {
        vErrors = vErrors === null ? validate81.errors : vErrors.concat(validate81.errors);
        errors = vErrors.length;
      }
    }
    if (data.requests !== undefined) {
      if (!validate81(data.requests, {
        instancePath: instancePath + "/requests",
        parentData: data,
        parentDataProperty: "requests",
        rootData
      })) {
        vErrors = vErrors === null ? validate81.errors : vErrors.concat(validate81.errors);
        errors = vErrors.length;
      }
    }
  }
  validate500.errors = vErrors;
  return errors === 0;
}
function validate487(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.accessModes !== undefined) {
      if (!validate22(data.accessModes, {
        instancePath: instancePath + "/accessModes",
        parentData: data,
        parentDataProperty: "accessModes",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.dataSource !== undefined) {
      if (!validate489(data.dataSource, {
        instancePath: instancePath + "/dataSource",
        parentData: data,
        parentDataProperty: "dataSource",
        rootData
      })) {
        vErrors = vErrors === null ? validate489.errors : vErrors.concat(validate489.errors);
        errors = vErrors.length;
      }
    }
    if (data.dataSourceRef !== undefined) {
      if (!validate494(data.dataSourceRef, {
        instancePath: instancePath + "/dataSourceRef",
        parentData: data,
        parentDataProperty: "dataSourceRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate494.errors : vErrors.concat(validate494.errors);
        errors = vErrors.length;
      }
    }
    if (data.resources !== undefined) {
      if (!validate500(data.resources, {
        instancePath: instancePath + "/resources",
        parentData: data,
        parentDataProperty: "resources",
        rootData
      })) {
        vErrors = vErrors === null ? validate500.errors : vErrors.concat(validate500.errors);
        errors = vErrors.length;
      }
    }
    if (data.selector !== undefined) {
      if (!validate92(data.selector, {
        instancePath: instancePath + "/selector",
        parentData: data,
        parentDataProperty: "selector",
        rootData
      })) {
        vErrors = vErrors === null ? validate92.errors : vErrors.concat(validate92.errors);
        errors = vErrors.length;
      }
    }
    if (data.storageClassName !== undefined) {
      if (!validate21(data.storageClassName, {
        instancePath: instancePath + "/storageClassName",
        parentData: data,
        parentDataProperty: "storageClassName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeAttributesClassName !== undefined) {
      if (!validate21(data.volumeAttributesClassName, {
        instancePath: instancePath + "/volumeAttributesClassName",
        parentData: data,
        parentDataProperty: "volumeAttributesClassName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeMode !== undefined) {
      if (!validate21(data.volumeMode, {
        instancePath: instancePath + "/volumeMode",
        parentData: data,
        parentDataProperty: "volumeMode",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeName !== undefined) {
      if (!validate21(data.volumeName, {
        instancePath: instancePath + "/volumeName",
        parentData: data,
        parentDataProperty: "volumeName",
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
  validate487.errors = vErrors;
  return errors === 0;
}
function validate484(data, {
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
      if (!validate485(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate485.errors : vErrors.concat(validate485.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate487(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate487.errors : vErrors.concat(validate487.errors);
        errors = vErrors.length;
      }
    }
  }
  validate484.errors = vErrors;
  return errors === 0;
}
function validate483(data, {
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
    if (data.volumeClaimTemplate !== undefined) {
      if (!validate484(data.volumeClaimTemplate, {
        instancePath: instancePath + "/volumeClaimTemplate",
        parentData: data,
        parentDataProperty: "volumeClaimTemplate",
        rootData
      })) {
        vErrors = vErrors === null ? validate484.errors : vErrors.concat(validate484.errors);
        errors = vErrors.length;
      }
    }
  }
  validate483.errors = vErrors;
  return errors === 0;
}
const schema121 = {
  "properties": {
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "lun": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "targetWWNs": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "wwids": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    }
  },
  "type": "object",
  "nullable": true
};
function validate512(data, {
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
    if (data.fsType !== undefined) {
      if (!validate21(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.lun !== undefined) {
      if (!validate61(data.lun, {
        instancePath: instancePath + "/lun",
        parentData: data,
        parentDataProperty: "lun",
        rootData
      })) {
        vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate25(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.targetWWNs !== undefined) {
      if (!validate22(data.targetWWNs, {
        instancePath: instancePath + "/targetWWNs",
        parentData: data,
        parentDataProperty: "targetWWNs",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.wwids !== undefined) {
      if (!validate22(data.wwids, {
        instancePath: instancePath + "/wwids",
        parentData: data,
        parentDataProperty: "wwids",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate512.errors = vErrors;
  return errors === 0;
}
const schema122 = {
  "properties": {
    "driver": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "options": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "secretRef": {
      "$ref": "2ktcR1INTbBpwSoz9kGFj8xkRezz1YNsTRJ6NRhvk"
    }
  },
  "required": ["driver"],
  "type": "object",
  "nullable": true
};
function validate519(data, {
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
    if (data.driver === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "driver"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.driver !== undefined) {
      if (!validate23(data.driver, {
        instancePath: instancePath + "/driver",
        parentData: data,
        parentDataProperty: "driver",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.fsType !== undefined) {
      if (!validate21(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.options !== undefined) {
      if (!validate94(data.options, {
        instancePath: instancePath + "/options",
        parentData: data,
        parentDataProperty: "options",
        rootData
      })) {
        vErrors = vErrors === null ? validate94.errors : vErrors.concat(validate94.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate25(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate230(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate230.errors : vErrors.concat(validate230.errors);
        errors = vErrors.length;
      }
    }
  }
  validate519.errors = vErrors;
  return errors === 0;
}
const schema123 = {
  "properties": {
    "datasetName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "datasetUUID": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate526(data, {
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
    if (data.datasetName !== undefined) {
      if (!validate21(data.datasetName, {
        instancePath: instancePath + "/datasetName",
        parentData: data,
        parentDataProperty: "datasetName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.datasetUUID !== undefined) {
      if (!validate21(data.datasetUUID, {
        instancePath: instancePath + "/datasetUUID",
        parentData: data,
        parentDataProperty: "datasetUUID",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate526.errors = vErrors;
  return errors === 0;
}
const schema124 = {
  "properties": {
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "partition": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "pdName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "required": ["pdName"],
  "type": "object",
  "nullable": true
};
function validate530(data, {
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
    if (data.pdName === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "pdName"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.fsType !== undefined) {
      if (!validate21(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.partition !== undefined) {
      if (!validate61(data.partition, {
        instancePath: instancePath + "/partition",
        parentData: data,
        parentDataProperty: "partition",
        rootData
      })) {
        vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
        errors = vErrors.length;
      }
    }
    if (data.pdName !== undefined) {
      if (!validate23(data.pdName, {
        instancePath: instancePath + "/pdName",
        parentData: data,
        parentDataProperty: "pdName",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate25(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate530.errors = vErrors;
  return errors === 0;
}
const schema125 = {
  "properties": {
    "directory": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "repository": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "revision": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["repository"],
  "type": "object",
  "nullable": true
};
function validate536(data, {
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
    if (data.repository === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "repository"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.directory !== undefined) {
      if (!validate21(data.directory, {
        instancePath: instancePath + "/directory",
        parentData: data,
        parentDataProperty: "directory",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.repository !== undefined) {
      if (!validate23(data.repository, {
        instancePath: instancePath + "/repository",
        parentData: data,
        parentDataProperty: "repository",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.revision !== undefined) {
      if (!validate21(data.revision, {
        instancePath: instancePath + "/revision",
        parentData: data,
        parentDataProperty: "revision",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate536.errors = vErrors;
  return errors === 0;
}
const schema126 = {
  "properties": {
    "endpoints": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "path": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "required": ["endpoints", "path"],
  "type": "object",
  "nullable": true
};
function validate541(data, {
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
    if (data.path === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "path"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.endpoints !== undefined) {
      if (!validate23(data.endpoints, {
        instancePath: instancePath + "/endpoints",
        parentData: data,
        parentDataProperty: "endpoints",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
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
    if (data.readOnly !== undefined) {
      if (!validate25(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate541.errors = vErrors;
  return errors === 0;
}
const schema127 = {
  "properties": {
    "path": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "type": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["path"],
  "type": "object",
  "nullable": true
};
function validate546(data, {
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
    if (data.path === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "path"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
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
  }
  validate546.errors = vErrors;
  return errors === 0;
}
const schema128 = {
  "properties": {
    "chapAuthDiscovery": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "chapAuthSession": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "initiatorName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "iqn": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "iscsiInterface": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "lun": {
      "$ref": "ppOMqvYEA3GSH3ozhOJ2Wta6ImWhzC9DOYsjidshCYo"
    },
    "portals": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "secretRef": {
      "$ref": "2ktcR1INTbBpwSoz9kGFj8xkRezz1YNsTRJ6NRhvk"
    },
    "targetPortal": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["iqn", "lun", "targetPortal"],
  "type": "object",
  "nullable": true
};
function validate550(data, {
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
    if (data.iqn === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "iqn"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.lun === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "lun"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.targetPortal === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "targetPortal"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.chapAuthDiscovery !== undefined) {
      if (!validate25(data.chapAuthDiscovery, {
        instancePath: instancePath + "/chapAuthDiscovery",
        parentData: data,
        parentDataProperty: "chapAuthDiscovery",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.chapAuthSession !== undefined) {
      if (!validate25(data.chapAuthSession, {
        instancePath: instancePath + "/chapAuthSession",
        parentData: data,
        parentDataProperty: "chapAuthSession",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.fsType !== undefined) {
      if (!validate21(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.initiatorName !== undefined) {
      if (!validate21(data.initiatorName, {
        instancePath: instancePath + "/initiatorName",
        parentData: data,
        parentDataProperty: "initiatorName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.iqn !== undefined) {
      if (!validate23(data.iqn, {
        instancePath: instancePath + "/iqn",
        parentData: data,
        parentDataProperty: "iqn",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.iscsiInterface !== undefined) {
      if (!validate21(data.iscsiInterface, {
        instancePath: instancePath + "/iscsiInterface",
        parentData: data,
        parentDataProperty: "iscsiInterface",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.lun !== undefined) {
      if (!validate62(data.lun, {
        instancePath: instancePath + "/lun",
        parentData: data,
        parentDataProperty: "lun",
        rootData
      })) {
        vErrors = vErrors === null ? validate62.errors : vErrors.concat(validate62.errors);
        errors = vErrors.length;
      }
    }
    if (data.portals !== undefined) {
      if (!validate22(data.portals, {
        instancePath: instancePath + "/portals",
        parentData: data,
        parentDataProperty: "portals",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate25(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate230(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate230.errors : vErrors.concat(validate230.errors);
        errors = vErrors.length;
      }
    }
    if (data.targetPortal !== undefined) {
      if (!validate23(data.targetPortal, {
        instancePath: instancePath + "/targetPortal",
        parentData: data,
        parentDataProperty: "targetPortal",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate550.errors = vErrors;
  return errors === 0;
}
const schema129 = {
  "properties": {
    "path": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "server": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["path", "server"],
  "type": "object",
  "nullable": true
};
function validate564(data, {
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
    if (data.path === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "path"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.server === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "server"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
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
    if (data.readOnly !== undefined) {
      if (!validate25(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.server !== undefined) {
      if (!validate23(data.server, {
        instancePath: instancePath + "/server",
        parentData: data,
        parentDataProperty: "server",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate564.errors = vErrors;
  return errors === 0;
}
const schema130 = {
  "properties": {
    "claimName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "required": ["claimName"],
  "type": "object",
  "nullable": true
};
function validate569(data, {
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
    if (data.claimName === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "claimName"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.claimName !== undefined) {
      if (!validate23(data.claimName, {
        instancePath: instancePath + "/claimName",
        parentData: data,
        parentDataProperty: "claimName",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate25(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate569.errors = vErrors;
  return errors === 0;
}
const schema131 = {
  "properties": {
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "pdID": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["pdID"],
  "type": "object",
  "nullable": true
};
function validate573(data, {
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
    if (data.pdID === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "pdID"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.fsType !== undefined) {
      if (!validate21(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.pdID !== undefined) {
      if (!validate23(data.pdID, {
        instancePath: instancePath + "/pdID",
        parentData: data,
        parentDataProperty: "pdID",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate573.errors = vErrors;
  return errors === 0;
}
const schema132 = {
  "properties": {
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "volumeID": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["volumeID"],
  "type": "object",
  "nullable": true
};
function validate577(data, {
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
    if (data.volumeID === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "volumeID"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.fsType !== undefined) {
      if (!validate21(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate25(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeID !== undefined) {
      if (!validate23(data.volumeID, {
        instancePath: instancePath + "/volumeID",
        parentData: data,
        parentDataProperty: "volumeID",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate577.errors = vErrors;
  return errors === 0;
}
const schema133 = {
  "properties": {
    "defaultMode": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "sources": {
      "$ref": "zyfs1wM4H2avqpaVmBIm7hBY9MVXR3021g26Tdh68w"
    }
  },
  "type": "object",
  "nullable": true
};
const schema134 = {
  "items": {
    "$ref": "ID8pfdr7RA6gZpqaBd5laAB0gGL7b54Ulay7vkXjVnU"
  },
  "type": "array",
  "nullable": true
};
const schema135 = {
  "properties": {
    "clusterTrustBundle": {
      "$ref": "ixT8Q9NkDjrHRzk0hbKjZoTqxW8SVHnDUv4FKaevD8"
    },
    "configMap": {
      "$ref": "EteiDSJOuKMG18J9HxNrDRvj8atSKjCtJCRkmm8S5Q"
    },
    "downwardAPI": {
      "$ref": "jT5EAzotOiaS75BFqVTEtfS83Rl5cvFYVcMxbvOETU"
    },
    "secret": {
      "$ref": "EteiDSJOuKMG18J9HxNrDRvj8atSKjCtJCRkmm8S5Q"
    },
    "serviceAccountToken": {
      "$ref": "0BsTGqumYwSj0foZkstB2wsVBt1d0Yb7yN2zIsVfc"
    }
  },
  "type": "object"
};
const schema136 = {
  "properties": {
    "labelSelector": {
      "$ref": "Zjt3HFRfql15zSZzpouBNTusTEhVu3UqWLOK7EP6U"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "optional": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "path": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "signerName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["path"],
  "type": "object",
  "nullable": true
};
function validate586(data, {
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
    if (data.path === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "path"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.labelSelector !== undefined) {
      if (!validate92(data.labelSelector, {
        instancePath: instancePath + "/labelSelector",
        parentData: data,
        parentDataProperty: "labelSelector",
        rootData
      })) {
        vErrors = vErrors === null ? validate92.errors : vErrors.concat(validate92.errors);
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
    if (data.optional !== undefined) {
      if (!validate25(data.optional, {
        instancePath: instancePath + "/optional",
        parentData: data,
        parentDataProperty: "optional",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
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
    if (data.signerName !== undefined) {
      if (!validate21(data.signerName, {
        instancePath: instancePath + "/signerName",
        parentData: data,
        parentDataProperty: "signerName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate586.errors = vErrors;
  return errors === 0;
}
const schema70 = {
  "properties": {
    "items": {
      "$ref": "bOfN3l1QF0mww6to6sM7AuvRsOk8kXQng6eAelVIQlw"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "optional": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "type": "object",
  "nullable": true
};
function validate245(data, {
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
    if (data.items !== undefined) {
      if (!validate232(data.items, {
        instancePath: instancePath + "/items",
        parentData: data,
        parentDataProperty: "items",
        rootData
      })) {
        vErrors = vErrors === null ? validate232.errors : vErrors.concat(validate232.errors);
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
    if (data.optional !== undefined) {
      if (!validate25(data.optional, {
        instancePath: instancePath + "/optional",
        parentData: data,
        parentDataProperty: "optional",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate245.errors = vErrors;
  return errors === 0;
}
const schema137 = {
  "properties": {
    "items": {
      "$ref": "TQHsoKhmMfGdgQZTETcM93nSDALohOZ36ZiSXicyxhU"
    }
  },
  "type": "object",
  "nullable": true
};
function validate594(data, {
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
    if (data.items !== undefined) {
      if (!validate238(data.items, {
        instancePath: instancePath + "/items",
        parentData: data,
        parentDataProperty: "items",
        rootData
      })) {
        vErrors = vErrors === null ? validate238.errors : vErrors.concat(validate238.errors);
        errors = vErrors.length;
      }
    }
  }
  validate594.errors = vErrors;
  return errors === 0;
}
const schema138 = {
  "properties": {
    "audience": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "expirationSeconds": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "path": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["path"],
  "type": "object",
  "nullable": true
};
function validate598(data, {
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
    if (data.path === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "path"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.audience !== undefined) {
      if (!validate21(data.audience, {
        instancePath: instancePath + "/audience",
        parentData: data,
        parentDataProperty: "audience",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.expirationSeconds !== undefined) {
      if (!validate75(data.expirationSeconds, {
        instancePath: instancePath + "/expirationSeconds",
        parentData: data,
        parentDataProperty: "expirationSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate75.errors : vErrors.concat(validate75.errors);
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
  }
  validate598.errors = vErrors;
  return errors === 0;
}
function validate585(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.clusterTrustBundle !== undefined) {
      if (!validate586(data.clusterTrustBundle, {
        instancePath: instancePath + "/clusterTrustBundle",
        parentData: data,
        parentDataProperty: "clusterTrustBundle",
        rootData
      })) {
        vErrors = vErrors === null ? validate586.errors : vErrors.concat(validate586.errors);
        errors = vErrors.length;
      }
    }
    if (data.configMap !== undefined) {
      if (!validate245(data.configMap, {
        instancePath: instancePath + "/configMap",
        parentData: data,
        parentDataProperty: "configMap",
        rootData
      })) {
        vErrors = vErrors === null ? validate245.errors : vErrors.concat(validate245.errors);
        errors = vErrors.length;
      }
    }
    if (data.downwardAPI !== undefined) {
      if (!validate594(data.downwardAPI, {
        instancePath: instancePath + "/downwardAPI",
        parentData: data,
        parentDataProperty: "downwardAPI",
        rootData
      })) {
        vErrors = vErrors === null ? validate594.errors : vErrors.concat(validate594.errors);
        errors = vErrors.length;
      }
    }
    if (data.secret !== undefined) {
      if (!validate245(data.secret, {
        instancePath: instancePath + "/secret",
        parentData: data,
        parentDataProperty: "secret",
        rootData
      })) {
        vErrors = vErrors === null ? validate245.errors : vErrors.concat(validate245.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAccountToken !== undefined) {
      if (!validate598(data.serviceAccountToken, {
        instancePath: instancePath + "/serviceAccountToken",
        parentData: data,
        parentDataProperty: "serviceAccountToken",
        rootData
      })) {
        vErrors = vErrors === null ? validate598.errors : vErrors.concat(validate598.errors);
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
  validate585.errors = vErrors;
  return errors === 0;
}
function validate584(data, {
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
      if (!validate585(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate585.errors : vErrors.concat(validate585.errors);
        errors = vErrors.length;
      }
    }
  }
  validate584.errors = vErrors;
  return errors === 0;
}
function validate582(data, {
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
    if (data.defaultMode !== undefined) {
      if (!validate61(data.defaultMode, {
        instancePath: instancePath + "/defaultMode",
        parentData: data,
        parentDataProperty: "defaultMode",
        rootData
      })) {
        vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
        errors = vErrors.length;
      }
    }
    if (data.sources !== undefined) {
      if (!validate584(data.sources, {
        instancePath: instancePath + "/sources",
        parentData: data,
        parentDataProperty: "sources",
        rootData
      })) {
        vErrors = vErrors === null ? validate584.errors : vErrors.concat(validate584.errors);
        errors = vErrors.length;
      }
    }
  }
  validate582.errors = vErrors;
  return errors === 0;
}
const schema139 = {
  "properties": {
    "group": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "registry": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "tenant": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "user": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "volume": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["registry", "volume"],
  "type": "object",
  "nullable": true
};
function validate606(data, {
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
    if (data.registry === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "registry"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.volume === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "volume"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.group !== undefined) {
      if (!validate21(data.group, {
        instancePath: instancePath + "/group",
        parentData: data,
        parentDataProperty: "group",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate25(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.registry !== undefined) {
      if (!validate23(data.registry, {
        instancePath: instancePath + "/registry",
        parentData: data,
        parentDataProperty: "registry",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.tenant !== undefined) {
      if (!validate21(data.tenant, {
        instancePath: instancePath + "/tenant",
        parentData: data,
        parentDataProperty: "tenant",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.user !== undefined) {
      if (!validate21(data.user, {
        instancePath: instancePath + "/user",
        parentData: data,
        parentDataProperty: "user",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.volume !== undefined) {
      if (!validate23(data.volume, {
        instancePath: instancePath + "/volume",
        parentData: data,
        parentDataProperty: "volume",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate606.errors = vErrors;
  return errors === 0;
}
const schema140 = {
  "properties": {
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "image": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "keyring": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "monitors": {
      "$ref": "YwrI9eYeYzQIcdsUXH7isPYE3sgVab9JvcdpSK4GQ"
    },
    "pool": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "secretRef": {
      "$ref": "2ktcR1INTbBpwSoz9kGFj8xkRezz1YNsTRJ6NRhvk"
    },
    "user": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["image", "monitors"],
  "type": "object",
  "nullable": true
};
function validate614(data, {
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
    if (data.image === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "image"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.monitors === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "monitors"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.fsType !== undefined) {
      if (!validate21(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
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
    if (data.keyring !== undefined) {
      if (!validate21(data.keyring, {
        instancePath: instancePath + "/keyring",
        parentData: data,
        parentDataProperty: "keyring",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.monitors !== undefined) {
      if (!validate249(data.monitors, {
        instancePath: instancePath + "/monitors",
        parentData: data,
        parentDataProperty: "monitors",
        rootData
      })) {
        vErrors = vErrors === null ? validate249.errors : vErrors.concat(validate249.errors);
        errors = vErrors.length;
      }
    }
    if (data.pool !== undefined) {
      if (!validate21(data.pool, {
        instancePath: instancePath + "/pool",
        parentData: data,
        parentDataProperty: "pool",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate25(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate230(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate230.errors : vErrors.concat(validate230.errors);
        errors = vErrors.length;
      }
    }
    if (data.user !== undefined) {
      if (!validate21(data.user, {
        instancePath: instancePath + "/user",
        parentData: data,
        parentDataProperty: "user",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate614.errors = vErrors;
  return errors === 0;
}
const schema141 = {
  "properties": {
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "gateway": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "protectionDomain": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "secretRef": {
      "$ref": "qgtTuDaNsImr24YNCUVN3pDpwYXcxIDVFjAvxPkh8"
    },
    "sslEnabled": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "storageMode": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "storagePool": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "system": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "volumeName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["gateway", "secretRef", "system"],
  "type": "object",
  "nullable": true
};
function validate624(data, {
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
    if (data.gateway === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "gateway"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.secretRef === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "secretRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.system === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "system"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.fsType !== undefined) {
      if (!validate21(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.gateway !== undefined) {
      if (!validate23(data.gateway, {
        instancePath: instancePath + "/gateway",
        parentData: data,
        parentDataProperty: "gateway",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.protectionDomain !== undefined) {
      if (!validate21(data.protectionDomain, {
        instancePath: instancePath + "/protectionDomain",
        parentData: data,
        parentDataProperty: "protectionDomain",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate25(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate251(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate251.errors : vErrors.concat(validate251.errors);
        errors = vErrors.length;
      }
    }
    if (data.sslEnabled !== undefined) {
      if (!validate25(data.sslEnabled, {
        instancePath: instancePath + "/sslEnabled",
        parentData: data,
        parentDataProperty: "sslEnabled",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.storageMode !== undefined) {
      if (!validate21(data.storageMode, {
        instancePath: instancePath + "/storageMode",
        parentData: data,
        parentDataProperty: "storageMode",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.storagePool !== undefined) {
      if (!validate21(data.storagePool, {
        instancePath: instancePath + "/storagePool",
        parentData: data,
        parentDataProperty: "storagePool",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.system !== undefined) {
      if (!validate23(data.system, {
        instancePath: instancePath + "/system",
        parentData: data,
        parentDataProperty: "system",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeName !== undefined) {
      if (!validate21(data.volumeName, {
        instancePath: instancePath + "/volumeName",
        parentData: data,
        parentDataProperty: "volumeName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate624.errors = vErrors;
  return errors === 0;
}
const schema142 = {
  "properties": {
    "defaultMode": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "items": {
      "$ref": "bOfN3l1QF0mww6to6sM7AuvRsOk8kXQng6eAelVIQlw"
    },
    "optional": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "secretName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate636(data, {
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
    if (data.defaultMode !== undefined) {
      if (!validate61(data.defaultMode, {
        instancePath: instancePath + "/defaultMode",
        parentData: data,
        parentDataProperty: "defaultMode",
        rootData
      })) {
        vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
        errors = vErrors.length;
      }
    }
    if (data.items !== undefined) {
      if (!validate232(data.items, {
        instancePath: instancePath + "/items",
        parentData: data,
        parentDataProperty: "items",
        rootData
      })) {
        vErrors = vErrors === null ? validate232.errors : vErrors.concat(validate232.errors);
        errors = vErrors.length;
      }
    }
    if (data.optional !== undefined) {
      if (!validate25(data.optional, {
        instancePath: instancePath + "/optional",
        parentData: data,
        parentDataProperty: "optional",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
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
  }
  validate636.errors = vErrors;
  return errors === 0;
}
const schema143 = {
  "properties": {
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "readOnly": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "secretRef": {
      "$ref": "2ktcR1INTbBpwSoz9kGFj8xkRezz1YNsTRJ6NRhvk"
    },
    "volumeName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "volumeNamespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate642(data, {
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
    if (data.fsType !== undefined) {
      if (!validate21(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnly !== undefined) {
      if (!validate25(data.readOnly, {
        instancePath: instancePath + "/readOnly",
        parentData: data,
        parentDataProperty: "readOnly",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate230(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate230.errors : vErrors.concat(validate230.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeName !== undefined) {
      if (!validate21(data.volumeName, {
        instancePath: instancePath + "/volumeName",
        parentData: data,
        parentDataProperty: "volumeName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeNamespace !== undefined) {
      if (!validate21(data.volumeNamespace, {
        instancePath: instancePath + "/volumeNamespace",
        parentData: data,
        parentDataProperty: "volumeNamespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate642.errors = vErrors;
  return errors === 0;
}
const schema144 = {
  "properties": {
    "fsType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "storagePolicyID": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "storagePolicyName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "volumePath": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["volumePath"],
  "type": "object",
  "nullable": true
};
function validate649(data, {
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
    if (data.volumePath === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "volumePath"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.fsType !== undefined) {
      if (!validate21(data.fsType, {
        instancePath: instancePath + "/fsType",
        parentData: data,
        parentDataProperty: "fsType",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.storagePolicyID !== undefined) {
      if (!validate21(data.storagePolicyID, {
        instancePath: instancePath + "/storagePolicyID",
        parentData: data,
        parentDataProperty: "storagePolicyID",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.storagePolicyName !== undefined) {
      if (!validate21(data.storagePolicyName, {
        instancePath: instancePath + "/storagePolicyName",
        parentData: data,
        parentDataProperty: "storagePolicyName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumePath !== undefined) {
      if (!validate23(data.volumePath, {
        instancePath: instancePath + "/volumePath",
        parentData: data,
        parentDataProperty: "volumePath",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate649.errors = vErrors;
  return errors === 0;
}
function validate428(data, {
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
    if (data.awsElasticBlockStore !== undefined) {
      if (!validate429(data.awsElasticBlockStore, {
        instancePath: instancePath + "/awsElasticBlockStore",
        parentData: data,
        parentDataProperty: "awsElasticBlockStore",
        rootData
      })) {
        vErrors = vErrors === null ? validate429.errors : vErrors.concat(validate429.errors);
        errors = vErrors.length;
      }
    }
    if (data.azureDisk !== undefined) {
      if (!validate435(data.azureDisk, {
        instancePath: instancePath + "/azureDisk",
        parentData: data,
        parentDataProperty: "azureDisk",
        rootData
      })) {
        vErrors = vErrors === null ? validate435.errors : vErrors.concat(validate435.errors);
        errors = vErrors.length;
      }
    }
    if (data.azureFile !== undefined) {
      if (!validate443(data.azureFile, {
        instancePath: instancePath + "/azureFile",
        parentData: data,
        parentDataProperty: "azureFile",
        rootData
      })) {
        vErrors = vErrors === null ? validate443.errors : vErrors.concat(validate443.errors);
        errors = vErrors.length;
      }
    }
    if (data.cephfs !== undefined) {
      if (!validate448(data.cephfs, {
        instancePath: instancePath + "/cephfs",
        parentData: data,
        parentDataProperty: "cephfs",
        rootData
      })) {
        vErrors = vErrors === null ? validate448.errors : vErrors.concat(validate448.errors);
        errors = vErrors.length;
      }
    }
    if (data.cinder !== undefined) {
      if (!validate456(data.cinder, {
        instancePath: instancePath + "/cinder",
        parentData: data,
        parentDataProperty: "cinder",
        rootData
      })) {
        vErrors = vErrors === null ? validate456.errors : vErrors.concat(validate456.errors);
        errors = vErrors.length;
      }
    }
    if (data.configMap !== undefined) {
      if (!validate462(data.configMap, {
        instancePath: instancePath + "/configMap",
        parentData: data,
        parentDataProperty: "configMap",
        rootData
      })) {
        vErrors = vErrors === null ? validate462.errors : vErrors.concat(validate462.errors);
        errors = vErrors.length;
      }
    }
    if (data.csi !== undefined) {
      if (!validate468(data.csi, {
        instancePath: instancePath + "/csi",
        parentData: data,
        parentDataProperty: "csi",
        rootData
      })) {
        vErrors = vErrors === null ? validate468.errors : vErrors.concat(validate468.errors);
        errors = vErrors.length;
      }
    }
    if (data.downwardAPI !== undefined) {
      if (!validate475(data.downwardAPI, {
        instancePath: instancePath + "/downwardAPI",
        parentData: data,
        parentDataProperty: "downwardAPI",
        rootData
      })) {
        vErrors = vErrors === null ? validate475.errors : vErrors.concat(validate475.errors);
        errors = vErrors.length;
      }
    }
    if (data.emptyDir !== undefined) {
      if (!validate479(data.emptyDir, {
        instancePath: instancePath + "/emptyDir",
        parentData: data,
        parentDataProperty: "emptyDir",
        rootData
      })) {
        vErrors = vErrors === null ? validate479.errors : vErrors.concat(validate479.errors);
        errors = vErrors.length;
      }
    }
    if (data.ephemeral !== undefined) {
      if (!validate483(data.ephemeral, {
        instancePath: instancePath + "/ephemeral",
        parentData: data,
        parentDataProperty: "ephemeral",
        rootData
      })) {
        vErrors = vErrors === null ? validate483.errors : vErrors.concat(validate483.errors);
        errors = vErrors.length;
      }
    }
    if (data.fc !== undefined) {
      if (!validate512(data.fc, {
        instancePath: instancePath + "/fc",
        parentData: data,
        parentDataProperty: "fc",
        rootData
      })) {
        vErrors = vErrors === null ? validate512.errors : vErrors.concat(validate512.errors);
        errors = vErrors.length;
      }
    }
    if (data.flexVolume !== undefined) {
      if (!validate519(data.flexVolume, {
        instancePath: instancePath + "/flexVolume",
        parentData: data,
        parentDataProperty: "flexVolume",
        rootData
      })) {
        vErrors = vErrors === null ? validate519.errors : vErrors.concat(validate519.errors);
        errors = vErrors.length;
      }
    }
    if (data.flocker !== undefined) {
      if (!validate526(data.flocker, {
        instancePath: instancePath + "/flocker",
        parentData: data,
        parentDataProperty: "flocker",
        rootData
      })) {
        vErrors = vErrors === null ? validate526.errors : vErrors.concat(validate526.errors);
        errors = vErrors.length;
      }
    }
    if (data.gcePersistentDisk !== undefined) {
      if (!validate530(data.gcePersistentDisk, {
        instancePath: instancePath + "/gcePersistentDisk",
        parentData: data,
        parentDataProperty: "gcePersistentDisk",
        rootData
      })) {
        vErrors = vErrors === null ? validate530.errors : vErrors.concat(validate530.errors);
        errors = vErrors.length;
      }
    }
    if (data.gitRepo !== undefined) {
      if (!validate536(data.gitRepo, {
        instancePath: instancePath + "/gitRepo",
        parentData: data,
        parentDataProperty: "gitRepo",
        rootData
      })) {
        vErrors = vErrors === null ? validate536.errors : vErrors.concat(validate536.errors);
        errors = vErrors.length;
      }
    }
    if (data.glusterfs !== undefined) {
      if (!validate541(data.glusterfs, {
        instancePath: instancePath + "/glusterfs",
        parentData: data,
        parentDataProperty: "glusterfs",
        rootData
      })) {
        vErrors = vErrors === null ? validate541.errors : vErrors.concat(validate541.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostPath !== undefined) {
      if (!validate546(data.hostPath, {
        instancePath: instancePath + "/hostPath",
        parentData: data,
        parentDataProperty: "hostPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate546.errors : vErrors.concat(validate546.errors);
        errors = vErrors.length;
      }
    }
    if (data.iscsi !== undefined) {
      if (!validate550(data.iscsi, {
        instancePath: instancePath + "/iscsi",
        parentData: data,
        parentDataProperty: "iscsi",
        rootData
      })) {
        vErrors = vErrors === null ? validate550.errors : vErrors.concat(validate550.errors);
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
    if (data.nfs !== undefined) {
      if (!validate564(data.nfs, {
        instancePath: instancePath + "/nfs",
        parentData: data,
        parentDataProperty: "nfs",
        rootData
      })) {
        vErrors = vErrors === null ? validate564.errors : vErrors.concat(validate564.errors);
        errors = vErrors.length;
      }
    }
    if (data.persistentVolumeClaim !== undefined) {
      if (!validate569(data.persistentVolumeClaim, {
        instancePath: instancePath + "/persistentVolumeClaim",
        parentData: data,
        parentDataProperty: "persistentVolumeClaim",
        rootData
      })) {
        vErrors = vErrors === null ? validate569.errors : vErrors.concat(validate569.errors);
        errors = vErrors.length;
      }
    }
    if (data.photonPersistentDisk !== undefined) {
      if (!validate573(data.photonPersistentDisk, {
        instancePath: instancePath + "/photonPersistentDisk",
        parentData: data,
        parentDataProperty: "photonPersistentDisk",
        rootData
      })) {
        vErrors = vErrors === null ? validate573.errors : vErrors.concat(validate573.errors);
        errors = vErrors.length;
      }
    }
    if (data.portworxVolume !== undefined) {
      if (!validate577(data.portworxVolume, {
        instancePath: instancePath + "/portworxVolume",
        parentData: data,
        parentDataProperty: "portworxVolume",
        rootData
      })) {
        vErrors = vErrors === null ? validate577.errors : vErrors.concat(validate577.errors);
        errors = vErrors.length;
      }
    }
    if (data.projected !== undefined) {
      if (!validate582(data.projected, {
        instancePath: instancePath + "/projected",
        parentData: data,
        parentDataProperty: "projected",
        rootData
      })) {
        vErrors = vErrors === null ? validate582.errors : vErrors.concat(validate582.errors);
        errors = vErrors.length;
      }
    }
    if (data.quobyte !== undefined) {
      if (!validate606(data.quobyte, {
        instancePath: instancePath + "/quobyte",
        parentData: data,
        parentDataProperty: "quobyte",
        rootData
      })) {
        vErrors = vErrors === null ? validate606.errors : vErrors.concat(validate606.errors);
        errors = vErrors.length;
      }
    }
    if (data.rbd !== undefined) {
      if (!validate614(data.rbd, {
        instancePath: instancePath + "/rbd",
        parentData: data,
        parentDataProperty: "rbd",
        rootData
      })) {
        vErrors = vErrors === null ? validate614.errors : vErrors.concat(validate614.errors);
        errors = vErrors.length;
      }
    }
    if (data.scaleIO !== undefined) {
      if (!validate624(data.scaleIO, {
        instancePath: instancePath + "/scaleIO",
        parentData: data,
        parentDataProperty: "scaleIO",
        rootData
      })) {
        vErrors = vErrors === null ? validate624.errors : vErrors.concat(validate624.errors);
        errors = vErrors.length;
      }
    }
    if (data.secret !== undefined) {
      if (!validate636(data.secret, {
        instancePath: instancePath + "/secret",
        parentData: data,
        parentDataProperty: "secret",
        rootData
      })) {
        vErrors = vErrors === null ? validate636.errors : vErrors.concat(validate636.errors);
        errors = vErrors.length;
      }
    }
    if (data.storageos !== undefined) {
      if (!validate642(data.storageos, {
        instancePath: instancePath + "/storageos",
        parentData: data,
        parentDataProperty: "storageos",
        rootData
      })) {
        vErrors = vErrors === null ? validate642.errors : vErrors.concat(validate642.errors);
        errors = vErrors.length;
      }
    }
    if (data.vsphereVolume !== undefined) {
      if (!validate649(data.vsphereVolume, {
        instancePath: instancePath + "/vsphereVolume",
        parentData: data,
        parentDataProperty: "vsphereVolume",
        rootData
      })) {
        vErrors = vErrors === null ? validate649.errors : vErrors.concat(validate649.errors);
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
  validate428.errors = vErrors;
  return errors === 0;
}
function validate427(data, {
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
      if (!validate428(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate428.errors : vErrors.concat(validate428.errors);
        errors = vErrors.length;
      }
    }
  }
  validate427.errors = vErrors;
  return errors === 0;
}
function validate278(data, {
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
    if (data.containers === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "containers"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.activeDeadlineSeconds !== undefined) {
      if (!validate75(data.activeDeadlineSeconds, {
        instancePath: instancePath + "/activeDeadlineSeconds",
        parentData: data,
        parentDataProperty: "activeDeadlineSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate75.errors : vErrors.concat(validate75.errors);
        errors = vErrors.length;
      }
    }
    if (data.affinity !== undefined) {
      if (!validate280(data.affinity, {
        instancePath: instancePath + "/affinity",
        parentData: data,
        parentDataProperty: "affinity",
        rootData
      })) {
        vErrors = vErrors === null ? validate280.errors : vErrors.concat(validate280.errors);
        errors = vErrors.length;
      }
    }
    if (data.automountServiceAccountToken !== undefined) {
      if (!validate25(data.automountServiceAccountToken, {
        instancePath: instancePath + "/automountServiceAccountToken",
        parentData: data,
        parentDataProperty: "automountServiceAccountToken",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.containers !== undefined) {
      if (!validate298(data.containers, {
        instancePath: instancePath + "/containers",
        parentData: data,
        parentDataProperty: "containers",
        rootData
      })) {
        vErrors = vErrors === null ? validate298.errors : vErrors.concat(validate298.errors);
        errors = vErrors.length;
      }
    }
    if (data.dnsConfig !== undefined) {
      if (!validate301(data.dnsConfig, {
        instancePath: instancePath + "/dnsConfig",
        parentData: data,
        parentDataProperty: "dnsConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate301.errors : vErrors.concat(validate301.errors);
        errors = vErrors.length;
      }
    }
    if (data.dnsPolicy !== undefined) {
      if (!validate21(data.dnsPolicy, {
        instancePath: instancePath + "/dnsPolicy",
        parentData: data,
        parentDataProperty: "dnsPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.enableServiceLinks !== undefined) {
      if (!validate25(data.enableServiceLinks, {
        instancePath: instancePath + "/enableServiceLinks",
        parentData: data,
        parentDataProperty: "enableServiceLinks",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.ephemeralContainers !== undefined) {
      if (!validate313(data.ephemeralContainers, {
        instancePath: instancePath + "/ephemeralContainers",
        parentData: data,
        parentDataProperty: "ephemeralContainers",
        rootData
      })) {
        vErrors = vErrors === null ? validate313.errors : vErrors.concat(validate313.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostAliases !== undefined) {
      if (!validate342(data.hostAliases, {
        instancePath: instancePath + "/hostAliases",
        parentData: data,
        parentDataProperty: "hostAliases",
        rootData
      })) {
        vErrors = vErrors === null ? validate342.errors : vErrors.concat(validate342.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostIPC !== undefined) {
      if (!validate25(data.hostIPC, {
        instancePath: instancePath + "/hostIPC",
        parentData: data,
        parentDataProperty: "hostIPC",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostNetwork !== undefined) {
      if (!validate25(data.hostNetwork, {
        instancePath: instancePath + "/hostNetwork",
        parentData: data,
        parentDataProperty: "hostNetwork",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostPID !== undefined) {
      if (!validate25(data.hostPID, {
        instancePath: instancePath + "/hostPID",
        parentData: data,
        parentDataProperty: "hostPID",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostUsers !== undefined) {
      if (!validate25(data.hostUsers, {
        instancePath: instancePath + "/hostUsers",
        parentData: data,
        parentDataProperty: "hostUsers",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostname !== undefined) {
      if (!validate21(data.hostname, {
        instancePath: instancePath + "/hostname",
        parentData: data,
        parentDataProperty: "hostname",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.imagePullSecrets !== undefined) {
      if (!validate353(data.imagePullSecrets, {
        instancePath: instancePath + "/imagePullSecrets",
        parentData: data,
        parentDataProperty: "imagePullSecrets",
        rootData
      })) {
        vErrors = vErrors === null ? validate353.errors : vErrors.concat(validate353.errors);
        errors = vErrors.length;
      }
    }
    if (data.initContainers !== undefined) {
      if (!validate356(data.initContainers, {
        instancePath: instancePath + "/initContainers",
        parentData: data,
        parentDataProperty: "initContainers",
        rootData
      })) {
        vErrors = vErrors === null ? validate356.errors : vErrors.concat(validate356.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodeName !== undefined) {
      if (!validate21(data.nodeName, {
        instancePath: instancePath + "/nodeName",
        parentData: data,
        parentDataProperty: "nodeName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodeSelector !== undefined) {
      if (!validate94(data.nodeSelector, {
        instancePath: instancePath + "/nodeSelector",
        parentData: data,
        parentDataProperty: "nodeSelector",
        rootData
      })) {
        vErrors = vErrors === null ? validate94.errors : vErrors.concat(validate94.errors);
        errors = vErrors.length;
      }
    }
    if (data.os !== undefined) {
      if (!validate361(data.os, {
        instancePath: instancePath + "/os",
        parentData: data,
        parentDataProperty: "os",
        rootData
      })) {
        vErrors = vErrors === null ? validate361.errors : vErrors.concat(validate361.errors);
        errors = vErrors.length;
      }
    }
    if (data.overhead !== undefined) {
      if (!validate81(data.overhead, {
        instancePath: instancePath + "/overhead",
        parentData: data,
        parentDataProperty: "overhead",
        rootData
      })) {
        vErrors = vErrors === null ? validate81.errors : vErrors.concat(validate81.errors);
        errors = vErrors.length;
      }
    }
    if (data.preemptionPolicy !== undefined) {
      if (!validate21(data.preemptionPolicy, {
        instancePath: instancePath + "/preemptionPolicy",
        parentData: data,
        parentDataProperty: "preemptionPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.priority !== undefined) {
      if (!validate61(data.priority, {
        instancePath: instancePath + "/priority",
        parentData: data,
        parentDataProperty: "priority",
        rootData
      })) {
        vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
        errors = vErrors.length;
      }
    }
    if (data.priorityClassName !== undefined) {
      if (!validate21(data.priorityClassName, {
        instancePath: instancePath + "/priorityClassName",
        parentData: data,
        parentDataProperty: "priorityClassName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.readinessGates !== undefined) {
      if (!validate368(data.readinessGates, {
        instancePath: instancePath + "/readinessGates",
        parentData: data,
        parentDataProperty: "readinessGates",
        rootData
      })) {
        vErrors = vErrors === null ? validate368.errors : vErrors.concat(validate368.errors);
        errors = vErrors.length;
      }
    }
    if (data.resourceClaims !== undefined) {
      if (!validate373(data.resourceClaims, {
        instancePath: instancePath + "/resourceClaims",
        parentData: data,
        parentDataProperty: "resourceClaims",
        rootData
      })) {
        vErrors = vErrors === null ? validate373.errors : vErrors.concat(validate373.errors);
        errors = vErrors.length;
      }
    }
    if (data.restartPolicy !== undefined) {
      if (!validate21(data.restartPolicy, {
        instancePath: instancePath + "/restartPolicy",
        parentData: data,
        parentDataProperty: "restartPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.runtimeClassName !== undefined) {
      if (!validate21(data.runtimeClassName, {
        instancePath: instancePath + "/runtimeClassName",
        parentData: data,
        parentDataProperty: "runtimeClassName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.schedulerName !== undefined) {
      if (!validate21(data.schedulerName, {
        instancePath: instancePath + "/schedulerName",
        parentData: data,
        parentDataProperty: "schedulerName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.schedulingGates !== undefined) {
      if (!validate156(data.schedulingGates, {
        instancePath: instancePath + "/schedulingGates",
        parentData: data,
        parentDataProperty: "schedulingGates",
        rootData
      })) {
        vErrors = vErrors === null ? validate156.errors : vErrors.concat(validate156.errors);
        errors = vErrors.length;
      }
    }
    if (data.securityContext !== undefined) {
      if (!validate386(data.securityContext, {
        instancePath: instancePath + "/securityContext",
        parentData: data,
        parentDataProperty: "securityContext",
        rootData
      })) {
        vErrors = vErrors === null ? validate386.errors : vErrors.concat(validate386.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAccount !== undefined) {
      if (!validate21(data.serviceAccount, {
        instancePath: instancePath + "/serviceAccount",
        parentData: data,
        parentDataProperty: "serviceAccount",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAccountName !== undefined) {
      if (!validate21(data.serviceAccountName, {
        instancePath: instancePath + "/serviceAccountName",
        parentData: data,
        parentDataProperty: "serviceAccountName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.setHostnameAsFQDN !== undefined) {
      if (!validate25(data.setHostnameAsFQDN, {
        instancePath: instancePath + "/setHostnameAsFQDN",
        parentData: data,
        parentDataProperty: "setHostnameAsFQDN",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.shareProcessNamespace !== undefined) {
      if (!validate25(data.shareProcessNamespace, {
        instancePath: instancePath + "/shareProcessNamespace",
        parentData: data,
        parentDataProperty: "shareProcessNamespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.subdomain !== undefined) {
      if (!validate21(data.subdomain, {
        instancePath: instancePath + "/subdomain",
        parentData: data,
        parentDataProperty: "subdomain",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.terminationGracePeriodSeconds !== undefined) {
      if (!validate75(data.terminationGracePeriodSeconds, {
        instancePath: instancePath + "/terminationGracePeriodSeconds",
        parentData: data,
        parentDataProperty: "terminationGracePeriodSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate75.errors : vErrors.concat(validate75.errors);
        errors = vErrors.length;
      }
    }
    if (data.tolerations !== undefined) {
      if (!validate406(data.tolerations, {
        instancePath: instancePath + "/tolerations",
        parentData: data,
        parentDataProperty: "tolerations",
        rootData
      })) {
        vErrors = vErrors === null ? validate406.errors : vErrors.concat(validate406.errors);
        errors = vErrors.length;
      }
    }
    if (data.topologySpreadConstraints !== undefined) {
      if (!validate415(data.topologySpreadConstraints, {
        instancePath: instancePath + "/topologySpreadConstraints",
        parentData: data,
        parentDataProperty: "topologySpreadConstraints",
        rootData
      })) {
        vErrors = vErrors === null ? validate415.errors : vErrors.concat(validate415.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumes !== undefined) {
      if (!validate427(data.volumes, {
        instancePath: instancePath + "/volumes",
        parentData: data,
        parentDataProperty: "volumes",
        rootData
      })) {
        vErrors = vErrors === null ? validate427.errors : vErrors.concat(validate427.errors);
        errors = vErrors.length;
      }
    }
  }
  validate278.errors = vErrors;
  return errors === 0;
}
function validate669(data, {
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
    if (data.command !== undefined) {
      if (!validate21(data.command, {
        instancePath: instancePath + "/command",
        parentData: data,
        parentDataProperty: "command",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.container !== undefined) {
      if (!validate253(data.container, {
        instancePath: instancePath + "/container",
        parentData: data,
        parentDataProperty: "container",
        rootData
      })) {
        vErrors = vErrors === null ? validate253.errors : vErrors.concat(validate253.errors);
        errors = vErrors.length;
      }
    }
    if (data.image !== undefined) {
      if (!validate21(data.image, {
        instancePath: instancePath + "/image",
        parentData: data,
        parentDataProperty: "image",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.podspec !== undefined) {
      if (!validate278(data.podspec, {
        instancePath: instancePath + "/podspec",
        parentData: data,
        parentDataProperty: "podspec",
        rootData
      })) {
        vErrors = vErrors === null ? validate278.errors : vErrors.concat(validate278.errors);
        errors = vErrors.length;
      }
    }
  }
  validate669.errors = vErrors;
  return errors === 0;
}
const schema152 = {
  "type": "integer",
  "nullable": true
};
function validate677(data, {
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
  validate677.errors = vErrors;
  return errors === 0;
}
const schema153 = {
  "properties": {
    "container": {
      "$ref": "kIJShI5ZkQEwzLZpnFKxFFFY7oronng1IPQ5i5eyr8"
    },
    "image": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "podspec": {
      "$ref": "7ZiS98ojisMqzzi1TeRdSdiotj4fpoogBM7Vak02E"
    }
  },
  "required": ["image"],
  "type": "object"
};
function validate680(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.image === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "image"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.container !== undefined) {
      if (!validate253(data.container, {
        instancePath: instancePath + "/container",
        parentData: data,
        parentDataProperty: "container",
        rootData
      })) {
        vErrors = vErrors === null ? validate253.errors : vErrors.concat(validate253.errors);
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
    if (data.podspec !== undefined) {
      if (!validate278(data.podspec, {
        instancePath: instancePath + "/podspec",
        parentData: data,
        parentDataProperty: "podspec",
        rootData
      })) {
        vErrors = vErrors === null ? validate278.errors : vErrors.concat(validate278.errors);
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
  validate680.errors = vErrors;
  return errors === 0;
}
function validate666(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.runtime === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "runtime"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.version === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "version"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.allowAccessToExternalNetwork !== undefined) {
      if (!validate25(data.allowAccessToExternalNetwork, {
        instancePath: instancePath + "/allowAccessToExternalNetwork",
        parentData: data,
        parentDataProperty: "allowAccessToExternalNetwork",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.allowedFunctionsPerContainer !== undefined) {
      if (!validate21(data.allowedFunctionsPerContainer, {
        instancePath: instancePath + "/allowedFunctionsPerContainer",
        parentData: data,
        parentDataProperty: "allowedFunctionsPerContainer",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.builder !== undefined) {
      if (!validate669(data.builder, {
        instancePath: instancePath + "/builder",
        parentData: data,
        parentDataProperty: "builder",
        rootData
      })) {
        vErrors = vErrors === null ? validate669.errors : vErrors.concat(validate669.errors);
        errors = vErrors.length;
      }
    }
    if (data.imagepullsecret !== undefined) {
      if (!validate21(data.imagepullsecret, {
        instancePath: instancePath + "/imagepullsecret",
        parentData: data,
        parentDataProperty: "imagepullsecret",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.keeparchive !== undefined) {
      if (!validate25(data.keeparchive, {
        instancePath: instancePath + "/keeparchive",
        parentData: data,
        parentDataProperty: "keeparchive",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.poolsize !== undefined) {
      if (!validate677(data.poolsize, {
        instancePath: instancePath + "/poolsize",
        parentData: data,
        parentDataProperty: "poolsize",
        rootData
      })) {
        vErrors = vErrors === null ? validate677.errors : vErrors.concat(validate677.errors);
        errors = vErrors.length;
      }
    }
    if (data.resources !== undefined) {
      if (!validate155(data.resources, {
        instancePath: instancePath + "/resources",
        parentData: data,
        parentDataProperty: "resources",
        rootData
      })) {
        vErrors = vErrors === null ? validate155.errors : vErrors.concat(validate155.errors);
        errors = vErrors.length;
      }
    }
    if (data.runtime !== undefined) {
      if (!validate680(data.runtime, {
        instancePath: instancePath + "/runtime",
        parentData: data,
        parentDataProperty: "runtime",
        rootData
      })) {
        vErrors = vErrors === null ? validate680.errors : vErrors.concat(validate680.errors);
        errors = vErrors.length;
      }
    }
    if (data.terminationGracePeriod !== undefined) {
      if (!validate75(data.terminationGracePeriod, {
        instancePath: instancePath + "/terminationGracePeriod",
        parentData: data,
        parentDataProperty: "terminationGracePeriod",
        rootData
      })) {
        vErrors = vErrors === null ? validate75.errors : vErrors.concat(validate75.errors);
        errors = vErrors.length;
      }
    }
    if (data.version !== undefined) {
      if (!validate33(data.version, {
        instancePath: instancePath + "/version",
        parentData: data,
        parentDataProperty: "version",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
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
  validate666.errors = vErrors;
  return errors === 0;
}
function validate657(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="fission.io.v1.Environment" */;
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
      if (!validate658(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate658.errors : vErrors.concat(validate658.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate660(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate660.errors : vErrors.concat(validate660.errors);
        errors = vErrors.length;
      }
    }
    if (data.metadata !== undefined) {
      if (!validate662(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate662.errors : vErrors.concat(validate662.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate666(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate666.errors : vErrors.concat(validate666.errors);
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
  validate657.errors = vErrors;
  return errors === 0;
}