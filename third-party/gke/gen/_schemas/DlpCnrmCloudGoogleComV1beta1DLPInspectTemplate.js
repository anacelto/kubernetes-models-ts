import { formats } from "@kubernetes-models/validate";
export const validate = validate63;
const schema28 = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "$ref": "wHv1XaRXx7Wdyh4GYzPP8NeOvt10u4peFV4E9d011o"
    },
    "kind": {
      "$ref": "2UBUuQ95tCtl6tVk3na68olbQwhpfFJeSQWHvuoGZo"
    },
    "metadata": {
      "$ref": "a6f0oUEaFqHmymdwnqPORTNOTU7GczWAkwGD0uYU"
    },
    "spec": {
      "$ref": "VzbFW2AUZk01a1cfmRWoUoBYx4TukaumSTFBfDqsDvE"
    },
    "status": {
      "$ref": "RYjetoDSiCy2gr7c2pDtC9CEabhSVPnSJyfWvKwQuCY"
    }
  },
  "required": ["apiVersion", "kind"],
  "$id": "dlp.cnrm.cloud.google.com.v1beta1.DLPInspectTemplate"
};
const schema29 = {
  "type": "string",
  "enum": ["dlp.cnrm.cloud.google.com/v1beta1"]
};
function validate64(data, {
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
  if (!(data === "dlp.cnrm.cloud.google.com/v1beta1")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema29.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate64.errors = vErrors;
  return errors === 0;
}
const schema30 = {
  "type": "string",
  "enum": ["DLPInspectTemplate"]
};
function validate66(data, {
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
  if (!(data === "DLPInspectTemplate")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema30.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate66.errors = vErrors;
  return errors === 0;
}
const schema31 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
};
const schema32 = {};
import { validate as validate69 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
function validate68(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate69(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate69.errors : vErrors.concat(validate69.errors);
      errors = vErrors.length;
    }
  }
  validate68.errors = vErrors;
  return errors === 0;
}
const schema33 = {
  "oneOf": [{
    "$ref": "ZC3plzJH1E4rXaCqvof6wclZ9G5wxX2Dg7u7GFA3U"
  }, {
    "$ref": "1GjhUBnjTXA89hqWok9NTzHhGWn5PUL2IQBTNZCCU4"
  }],
  "properties": {
    "displayName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "inspectConfig": {
      "$ref": "EWNgJr7bSGCcRp6BfvXVLSVqCyTmmmnSzGi48MMPY"
    },
    "location": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "organizationRef": {
      "$ref": "FqwG3fNQDV94n3ssyud4YO0vSjAbQTxNuU0XWG96Y"
    },
    "projectRef": {
      "$ref": "FqwG3fNQDV94n3ssyud4YO0vSjAbQTxNuU0XWG96Y"
    },
    "resourceID": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema34 = {
  "required": ["organizationRef"]
};
function validate73(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.organizationRef === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "organizationRef"
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
  validate73.errors = vErrors;
  return errors === 0;
}
const schema35 = {
  "required": ["projectRef"]
};
function validate75(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.projectRef === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "projectRef"
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
  validate75.errors = vErrors;
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
const schema36 = {
  "properties": {
    "contentOptions": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "customInfoTypes": {
      "$ref": "oR36snv3o5Y02ulveQeJHDnE9Nc2bTQzCGiw67Qc"
    },
    "excludeInfoTypes": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "includeQuote": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "infoTypes": {
      "$ref": "0pzBTE76xYFsQtoMToT048kLLDNrLQ4wQvdw1GHVrQ"
    },
    "limits": {
      "$ref": "6GsegD41j6Ij0LOlJ1q5LnrNXfh4RRpqgeJ28Unco"
    },
    "minLikelihood": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "ruleSet": {
      "$ref": "jWiDc7RDmpBcFZLGRMaMJSATBEKgFacBT8JMk2KOt9E"
    }
  },
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
const schema37 = {
  "items": {
    "$ref": "v70yJvRRiQxOAtdheZk65DJg50PuQZvQI5nao1G0PJA"
  },
  "type": "array",
  "nullable": true
};
const schema38 = {
  "properties": {
    "dictionary": {
      "$ref": "W3DbtRTVluxTbidC5OwOXqp2581iX7OuKYn5dHKu9M"
    },
    "exclusionType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "infoType": {
      "$ref": "2ktcR1INTbBpwSoz9kGFj8xkRezz1YNsTRJ6NRhvk"
    },
    "likelihood": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "regex": {
      "$ref": "yqAjfo3rKhuAio3c3I3ixEcI1GKdrnZ5XGPDKSsq3M"
    },
    "storedType": {
      "$ref": "xmzHSHY6YS1nltSx1uyfQTmQZwWqYPjpKMe4Llmjlw"
    },
    "surrogateType": {
      "$ref": "wnCl8zCvz1PLbyEivJTcktRgDZuzOGT9FYulvrA2T8w"
    }
  },
  "type": "object"
};
const schema14 = {
  "properties": {
    "cloudStoragePath": {
      "$ref": "2bCDTZJwR33AJj40VYKGmCIedj2GkHTOP942I2qxF0"
    },
    "wordList": {
      "$ref": "Kbd1BuupW5r8zOiBVuhFAscDSfyJ9YRCIE47uBLdU"
    }
  },
  "type": "object",
  "nullable": true
};
const schema15 = {
  "properties": {
    "path": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
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
  }
  validate34.errors = vErrors;
  return errors === 0;
}
const schema16 = {
  "properties": {
    "words": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    }
  },
  "type": "object",
  "nullable": true
};
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
    if (data.words !== undefined) {
      if (!validate22(data.words, {
        instancePath: instancePath + "/words",
        parentData: data,
        parentDataProperty: "words",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate37.errors = vErrors;
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
    if (data.cloudStoragePath !== undefined) {
      if (!validate34(data.cloudStoragePath, {
        instancePath: instancePath + "/cloudStoragePath",
        parentData: data,
        parentDataProperty: "cloudStoragePath",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.wordList !== undefined) {
      if (!validate37(data.wordList, {
        instancePath: instancePath + "/wordList",
        parentData: data,
        parentDataProperty: "wordList",
        rootData
      })) {
        vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
        errors = vErrors.length;
      }
    }
  }
  validate33.errors = vErrors;
  return errors === 0;
}
const schema10 = {
  "properties": {
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
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
  validate26.errors = vErrors;
  return errors === 0;
}
const schema17 = {
  "properties": {
    "groupIndexes": {
      "$ref": "Q576bBYbJ1AGPeiGBGrCfpIOdAY4EluWm7uSP5Hk"
    },
    "pattern": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema18 = {
  "items": {
    "$ref": "icwF9bpzvIS3QxC52v2XvqrjjaZnFwyMbHUnptLeEQ"
  },
  "type": "array",
  "nullable": true
};
const schema19 = {
  "format": "int64",
  "type": "integer"
};
const formats0 = formats.int64;
function validate42(data, {
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
  validate42.errors = vErrors;
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
  }
  validate41.errors = vErrors;
  return errors === 0;
}
function validate40(data, {
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
    if (data.groupIndexes !== undefined) {
      if (!validate41(data.groupIndexes, {
        instancePath: instancePath + "/groupIndexes",
        parentData: data,
        parentDataProperty: "groupIndexes",
        rootData
      })) {
        vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
        errors = vErrors.length;
      }
    }
    if (data.pattern !== undefined) {
      if (!validate21(data.pattern, {
        instancePath: instancePath + "/pattern",
        parentData: data,
        parentDataProperty: "pattern",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate40.errors = vErrors;
  return errors === 0;
}
const schema39 = {
  "properties": {
    "createTime": {
      "$ref": "thZzwpySeU7LsVtTYjwqN1mWUAwFAnezim8OMie8k"
    },
    "nameRef": {
      "$ref": "FqwG3fNQDV94n3ssyud4YO0vSjAbQTxNuU0XWG96Y"
    }
  },
  "type": "object",
  "nullable": true
};
const schema27 = {
  "format": "date-time",
  "type": "string",
  "nullable": true
};
const formats4 = formats["date-time"];
function validate62(data, {
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
  validate62.errors = vErrors;
  return errors === 0;
}
const schema20 = {
  "oneOf": [{
    "$ref": "TP0HlAomAhuoHxGcwDH5nIMfXTdCd2wpTkBBhDMfvI"
  }, {
    "$ref": "VpyYFefwI40SHDACwIQNLmpaK0uHx6sDsoXmn8Onlo"
  }],
  "properties": {
    "external": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
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
const schema21 = {
  "not": {
    "$ref": "E3gBqlpCwbMTBUs4tUySAeMS9H0IGajx8nJUP5kbI"
  },
  "required": ["name"]
};
const schema22 = {
  "required": ["external"]
};
function validate48(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.external === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "external"
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
  validate48.errors = vErrors;
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
  const _errs0 = errors;
  const _errs1 = errors;
  if (!validate48(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
    errors = vErrors.length;
  }
  var valid0 = _errs1 === errors;
  if (valid0) {
    const err0 = {
      instancePath,
      schemaPath: "#/not",
      keyword: "not",
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
  }
  validate47.errors = vErrors;
  return errors === 0;
}
const schema23 = {
  "not": {
    "$ref": "EqTqX33Du5bAJtWsgJb92GpEFPm7IzHlXlL4P70hKU"
  },
  "required": ["external"]
};
const schema24 = {
  "anyOf": [{
    "$ref": "jlDywjT39Daewt4pR8iklp0WQGiXrTvk7rSwYAnnhk"
  }, {
    "$ref": "goU1TBqg14R3DWHhRpqRdXGhPF1y45WKM1UaT0gwwP8"
  }]
};
const schema25 = {
  "required": ["name"]
};
function validate53(data, {
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
  }
  validate53.errors = vErrors;
  return errors === 0;
}
const schema26 = {
  "required": ["namespace"]
};
function validate55(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.namespace === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "namespace"
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
  validate55.errors = vErrors;
  return errors === 0;
}
function validate52(data, {
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
  if (!validate53(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate53.errors : vErrors.concat(validate53.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs2 = errors;
    if (!validate55(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
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
  validate52.errors = vErrors;
  return errors === 0;
}
function validate51(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  const _errs1 = errors;
  if (!validate52(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate52.errors : vErrors.concat(validate52.errors);
    errors = vErrors.length;
  }
  var valid0 = _errs1 === errors;
  if (valid0) {
    const err0 = {
      instancePath,
      schemaPath: "#/not",
      keyword: "not",
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.external === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "external"
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
  const _errs2 = errors;
  let valid0 = false;
  let passing0 = null;
  const _errs3 = errors;
  if (!validate47(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate47.errors : vErrors.concat(validate47.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs3 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
  }
  const _errs4 = errors;
  if (!validate51(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate51.errors : vErrors.concat(validate51.errors);
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
    if (data.external !== undefined) {
      if (!validate21(data.external, {
        instancePath: instancePath + "/external",
        parentData: data,
        parentDataProperty: "external",
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
  validate46.errors = vErrors;
  return errors === 0;
}
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
    if (data.createTime !== undefined) {
      if (!validate62(data.createTime, {
        instancePath: instancePath + "/createTime",
        parentData: data,
        parentDataProperty: "createTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate62.errors : vErrors.concat(validate62.errors);
        errors = vErrors.length;
      }
    }
    if (data.nameRef !== undefined) {
      if (!validate46(data.nameRef, {
        instancePath: instancePath + "/nameRef",
        parentData: data,
        parentDataProperty: "nameRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
        errors = vErrors.length;
      }
    }
  }
  validate87.errors = vErrors;
  return errors === 0;
}
const schema40 = {
  "type": "object",
  "properties": {},
  "nullable": true
};
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
  validate91.errors = vErrors;
  return errors === 0;
}
function validate81(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.dictionary !== undefined) {
      if (!validate33(data.dictionary, {
        instancePath: instancePath + "/dictionary",
        parentData: data,
        parentDataProperty: "dictionary",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data.exclusionType !== undefined) {
      if (!validate21(data.exclusionType, {
        instancePath: instancePath + "/exclusionType",
        parentData: data,
        parentDataProperty: "exclusionType",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.infoType !== undefined) {
      if (!validate26(data.infoType, {
        instancePath: instancePath + "/infoType",
        parentData: data,
        parentDataProperty: "infoType",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.likelihood !== undefined) {
      if (!validate21(data.likelihood, {
        instancePath: instancePath + "/likelihood",
        parentData: data,
        parentDataProperty: "likelihood",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.regex !== undefined) {
      if (!validate40(data.regex, {
        instancePath: instancePath + "/regex",
        parentData: data,
        parentDataProperty: "regex",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
    if (data.storedType !== undefined) {
      if (!validate87(data.storedType, {
        instancePath: instancePath + "/storedType",
        parentData: data,
        parentDataProperty: "storedType",
        rootData
      })) {
        vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
        errors = vErrors.length;
      }
    }
    if (data.surrogateType !== undefined) {
      if (!validate91(data.surrogateType, {
        instancePath: instancePath + "/surrogateType",
        parentData: data,
        parentDataProperty: "surrogateType",
        rootData
      })) {
        vErrors = vErrors === null ? validate91.errors : vErrors.concat(validate91.errors);
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
  validate81.errors = vErrors;
  return errors === 0;
}
function validate80(data, {
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
      if (!validate81(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate81.errors : vErrors.concat(validate81.errors);
        errors = vErrors.length;
      }
    }
  }
  validate80.errors = vErrors;
  return errors === 0;
}
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
const schema12 = {
  "items": {
    "$ref": "qgtTuDaNsImr24YNCUVN3pDpwYXcxIDVFjAvxPkh8"
  },
  "type": "array",
  "nullable": true
};
const schema13 = {
  "properties": {
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
function validate30(data, {
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
  validate30.errors = vErrors;
  return errors === 0;
}
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
      if (!validate30(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
  }
  validate29.errors = vErrors;
  return errors === 0;
}
const schema41 = {
  "properties": {
    "maxFindingsPerInfoType": {
      "$ref": "R5OofsEZGb7E18uRyjlb0qmjc20zAXRxyVpy49VOKM"
    },
    "maxFindingsPerItem": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "maxFindingsPerRequest": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    }
  },
  "type": "object",
  "nullable": true
};
const schema42 = {
  "items": {
    "$ref": "aPvEHtRGmo8z1myohmHZYp5jtTFFzlMFOgU1tAqEfuE"
  },
  "type": "array",
  "nullable": true
};
const schema43 = {
  "properties": {
    "infoType": {
      "$ref": "2ktcR1INTbBpwSoz9kGFj8xkRezz1YNsTRJ6NRhvk"
    },
    "maxFindings": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    }
  },
  "type": "object"
};
const schema11 = {
  "format": "int64",
  "type": "integer",
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
  validate28.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.infoType !== undefined) {
      if (!validate26(data.infoType, {
        instancePath: instancePath + "/infoType",
        parentData: data,
        parentDataProperty: "infoType",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.maxFindings !== undefined) {
      if (!validate28(data.maxFindings, {
        instancePath: instancePath + "/maxFindings",
        parentData: data,
        parentDataProperty: "maxFindings",
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
  validate100.errors = vErrors;
  return errors === 0;
}
function validate99(data, {
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
      if (!validate100(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate100.errors : vErrors.concat(validate100.errors);
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
    if (data.maxFindingsPerInfoType !== undefined) {
      if (!validate99(data.maxFindingsPerInfoType, {
        instancePath: instancePath + "/maxFindingsPerInfoType",
        parentData: data,
        parentDataProperty: "maxFindingsPerInfoType",
        rootData
      })) {
        vErrors = vErrors === null ? validate99.errors : vErrors.concat(validate99.errors);
        errors = vErrors.length;
      }
    }
    if (data.maxFindingsPerItem !== undefined) {
      if (!validate28(data.maxFindingsPerItem, {
        instancePath: instancePath + "/maxFindingsPerItem",
        parentData: data,
        parentDataProperty: "maxFindingsPerItem",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.maxFindingsPerRequest !== undefined) {
      if (!validate28(data.maxFindingsPerRequest, {
        instancePath: instancePath + "/maxFindingsPerRequest",
        parentData: data,
        parentDataProperty: "maxFindingsPerRequest",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
  }
  validate98.errors = vErrors;
  return errors === 0;
}
const schema44 = {
  "items": {
    "$ref": "MpSJCfAFq4k30VqZY9C9ps7VTz8swHHxUuWWaqy2H08"
  },
  "type": "array",
  "nullable": true
};
const schema45 = {
  "properties": {
    "infoTypes": {
      "$ref": "0pzBTE76xYFsQtoMToT048kLLDNrLQ4wQvdw1GHVrQ"
    },
    "rules": {
      "$ref": "Rr2KPfPjg30503I29HncRpl93FMRBQy1uopaNF1Cas"
    }
  },
  "type": "object"
};
const schema46 = {
  "items": {
    "$ref": "mXFKcYzBphkrXoDJTXuR15t6AJ08hf1sRCFfF52oM"
  },
  "type": "array",
  "nullable": true
};
const schema47 = {
  "properties": {
    "exclusionRule": {
      "$ref": "SIrc8hiStf9YclKF86oyiBxGzA2lpYyRq0wx92Z4mQ"
    },
    "hotwordRule": {
      "$ref": "LouU92EnHCOOiMNr5ALYR23QqNIsD3HHvsGVE7TnE"
    }
  },
  "type": "object"
};
const schema48 = {
  "properties": {
    "dictionary": {
      "$ref": "W3DbtRTVluxTbidC5OwOXqp2581iX7OuKYn5dHKu9M"
    },
    "excludeInfoTypes": {
      "$ref": "rJUCnnCjGfjGya45jjMLlg06D3pjOJEf6xqaLSeE"
    },
    "matchingType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "regex": {
      "$ref": "yqAjfo3rKhuAio3c3I3ixEcI1GKdrnZ5XGPDKSsq3M"
    }
  },
  "type": "object",
  "nullable": true
};
const schema49 = {
  "properties": {
    "infoTypes": {
      "$ref": "0pzBTE76xYFsQtoMToT048kLLDNrLQ4wQvdw1GHVrQ"
    }
  },
  "type": "object",
  "nullable": true
};
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
    if (data.infoTypes !== undefined) {
      if (!validate29(data.infoTypes, {
        instancePath: instancePath + "/infoTypes",
        parentData: data,
        parentDataProperty: "infoTypes",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
  }
  validate116.errors = vErrors;
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
    if (data.dictionary !== undefined) {
      if (!validate33(data.dictionary, {
        instancePath: instancePath + "/dictionary",
        parentData: data,
        parentDataProperty: "dictionary",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data.excludeInfoTypes !== undefined) {
      if (!validate116(data.excludeInfoTypes, {
        instancePath: instancePath + "/excludeInfoTypes",
        parentData: data,
        parentDataProperty: "excludeInfoTypes",
        rootData
      })) {
        vErrors = vErrors === null ? validate116.errors : vErrors.concat(validate116.errors);
        errors = vErrors.length;
      }
    }
    if (data.matchingType !== undefined) {
      if (!validate21(data.matchingType, {
        instancePath: instancePath + "/matchingType",
        parentData: data,
        parentDataProperty: "matchingType",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.regex !== undefined) {
      if (!validate40(data.regex, {
        instancePath: instancePath + "/regex",
        parentData: data,
        parentDataProperty: "regex",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
  }
  validate114.errors = vErrors;
  return errors === 0;
}
const schema50 = {
  "properties": {
    "hotwordRegex": {
      "$ref": "yqAjfo3rKhuAio3c3I3ixEcI1GKdrnZ5XGPDKSsq3M"
    },
    "likelihoodAdjustment": {
      "$ref": "FFN0412ynXREPznPMKq5jXPBRJuRaBXaxPKSMSXgfrA"
    },
    "proximity": {
      "$ref": "3rlH6XAUT6yiHA9ua4SRXoFbb65aBOonIQdXX7rxtU"
    }
  },
  "type": "object",
  "nullable": true
};
const schema51 = {
  "properties": {
    "fixedLikelihood": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "relativeLikelihood": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    }
  },
  "type": "object",
  "nullable": true
};
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
    if (data.fixedLikelihood !== undefined) {
      if (!validate21(data.fixedLikelihood, {
        instancePath: instancePath + "/fixedLikelihood",
        parentData: data,
        parentDataProperty: "fixedLikelihood",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.relativeLikelihood !== undefined) {
      if (!validate28(data.relativeLikelihood, {
        instancePath: instancePath + "/relativeLikelihood",
        parentData: data,
        parentDataProperty: "relativeLikelihood",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
  }
  validate124.errors = vErrors;
  return errors === 0;
}
const schema52 = {
  "properties": {
    "windowAfter": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "windowBefore": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    }
  },
  "type": "object",
  "nullable": true
};
function validate128(data, {
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
    if (data.windowAfter !== undefined) {
      if (!validate28(data.windowAfter, {
        instancePath: instancePath + "/windowAfter",
        parentData: data,
        parentDataProperty: "windowAfter",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.windowBefore !== undefined) {
      if (!validate28(data.windowBefore, {
        instancePath: instancePath + "/windowBefore",
        parentData: data,
        parentDataProperty: "windowBefore",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
  }
  validate128.errors = vErrors;
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
    if (data.hotwordRegex !== undefined) {
      if (!validate40(data.hotwordRegex, {
        instancePath: instancePath + "/hotwordRegex",
        parentData: data,
        parentDataProperty: "hotwordRegex",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
    if (data.likelihoodAdjustment !== undefined) {
      if (!validate124(data.likelihoodAdjustment, {
        instancePath: instancePath + "/likelihoodAdjustment",
        parentData: data,
        parentDataProperty: "likelihoodAdjustment",
        rootData
      })) {
        vErrors = vErrors === null ? validate124.errors : vErrors.concat(validate124.errors);
        errors = vErrors.length;
      }
    }
    if (data.proximity !== undefined) {
      if (!validate128(data.proximity, {
        instancePath: instancePath + "/proximity",
        parentData: data,
        parentDataProperty: "proximity",
        rootData
      })) {
        vErrors = vErrors === null ? validate128.errors : vErrors.concat(validate128.errors);
        errors = vErrors.length;
      }
    }
  }
  validate122.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.exclusionRule !== undefined) {
      if (!validate114(data.exclusionRule, {
        instancePath: instancePath + "/exclusionRule",
        parentData: data,
        parentDataProperty: "exclusionRule",
        rootData
      })) {
        vErrors = vErrors === null ? validate114.errors : vErrors.concat(validate114.errors);
        errors = vErrors.length;
      }
    }
    if (data.hotwordRule !== undefined) {
      if (!validate122(data.hotwordRule, {
        instancePath: instancePath + "/hotwordRule",
        parentData: data,
        parentDataProperty: "hotwordRule",
        rootData
      })) {
        vErrors = vErrors === null ? validate122.errors : vErrors.concat(validate122.errors);
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
function validate110(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.infoTypes !== undefined) {
      if (!validate29(data.infoTypes, {
        instancePath: instancePath + "/infoTypes",
        parentData: data,
        parentDataProperty: "infoTypes",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.rules !== undefined) {
      if (!validate112(data.rules, {
        instancePath: instancePath + "/rules",
        parentData: data,
        parentDataProperty: "rules",
        rootData
      })) {
        vErrors = vErrors === null ? validate112.errors : vErrors.concat(validate112.errors);
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
  validate110.errors = vErrors;
  return errors === 0;
}
function validate109(data, {
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
      if (!validate110(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate110.errors : vErrors.concat(validate110.errors);
        errors = vErrors.length;
      }
    }
  }
  validate109.errors = vErrors;
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
    if (data.contentOptions !== undefined) {
      if (!validate22(data.contentOptions, {
        instancePath: instancePath + "/contentOptions",
        parentData: data,
        parentDataProperty: "contentOptions",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.customInfoTypes !== undefined) {
      if (!validate80(data.customInfoTypes, {
        instancePath: instancePath + "/customInfoTypes",
        parentData: data,
        parentDataProperty: "customInfoTypes",
        rootData
      })) {
        vErrors = vErrors === null ? validate80.errors : vErrors.concat(validate80.errors);
        errors = vErrors.length;
      }
    }
    if (data.excludeInfoTypes !== undefined) {
      if (!validate25(data.excludeInfoTypes, {
        instancePath: instancePath + "/excludeInfoTypes",
        parentData: data,
        parentDataProperty: "excludeInfoTypes",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.includeQuote !== undefined) {
      if (!validate25(data.includeQuote, {
        instancePath: instancePath + "/includeQuote",
        parentData: data,
        parentDataProperty: "includeQuote",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.infoTypes !== undefined) {
      if (!validate29(data.infoTypes, {
        instancePath: instancePath + "/infoTypes",
        parentData: data,
        parentDataProperty: "infoTypes",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.limits !== undefined) {
      if (!validate98(data.limits, {
        instancePath: instancePath + "/limits",
        parentData: data,
        parentDataProperty: "limits",
        rootData
      })) {
        vErrors = vErrors === null ? validate98.errors : vErrors.concat(validate98.errors);
        errors = vErrors.length;
      }
    }
    if (data.minLikelihood !== undefined) {
      if (!validate21(data.minLikelihood, {
        instancePath: instancePath + "/minLikelihood",
        parentData: data,
        parentDataProperty: "minLikelihood",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.ruleSet !== undefined) {
      if (!validate109(data.ruleSet, {
        instancePath: instancePath + "/ruleSet",
        parentData: data,
        parentDataProperty: "ruleSet",
        rootData
      })) {
        vErrors = vErrors === null ? validate109.errors : vErrors.concat(validate109.errors);
        errors = vErrors.length;
      }
    }
  }
  validate78.errors = vErrors;
  return errors === 0;
}
function validate72(data, {
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
  if (!validate73(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate73.errors : vErrors.concat(validate73.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs3 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
  }
  const _errs4 = errors;
  if (!validate75(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate75.errors : vErrors.concat(validate75.errors);
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
    if (data.displayName !== undefined) {
      if (!validate21(data.displayName, {
        instancePath: instancePath + "/displayName",
        parentData: data,
        parentDataProperty: "displayName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.inspectConfig !== undefined) {
      if (!validate78(data.inspectConfig, {
        instancePath: instancePath + "/inspectConfig",
        parentData: data,
        parentDataProperty: "inspectConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate78.errors : vErrors.concat(validate78.errors);
        errors = vErrors.length;
      }
    }
    if (data.location !== undefined) {
      if (!validate21(data.location, {
        instancePath: instancePath + "/location",
        parentData: data,
        parentDataProperty: "location",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.organizationRef !== undefined) {
      if (!validate46(data.organizationRef, {
        instancePath: instancePath + "/organizationRef",
        parentData: data,
        parentDataProperty: "organizationRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
        errors = vErrors.length;
      }
    }
    if (data.projectRef !== undefined) {
      if (!validate46(data.projectRef, {
        instancePath: instancePath + "/projectRef",
        parentData: data,
        parentDataProperty: "projectRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
        errors = vErrors.length;
      }
    }
    if (data.resourceID !== undefined) {
      if (!validate21(data.resourceID, {
        instancePath: instancePath + "/resourceID",
        parentData: data,
        parentDataProperty: "resourceID",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate72.errors = vErrors;
  return errors === 0;
}
const schema53 = {
  "properties": {
    "conditions": {
      "$ref": "RvbK8dihXzqIiwj8RM4YmVn1uSZhkVfj7vnGjt1dGc"
    },
    "createTime": {
      "$ref": "thZzwpySeU7LsVtTYjwqN1mWUAwFAnezim8OMie8k"
    },
    "locationId": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "observedGeneration": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "updateTime": {
      "$ref": "thZzwpySeU7LsVtTYjwqN1mWUAwFAnezim8OMie8k"
    }
  },
  "type": "object",
  "nullable": true
};
const schema54 = {
  "items": {
    "$ref": "Qz3R3JEF6xPpjvqMgAwCgL3twD5Cg2JiwRwbQx8RAA"
  },
  "type": "array",
  "nullable": true
};
const schema55 = {
  "properties": {
    "lastTransitionTime": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "message": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "reason": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "status": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "type": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
function validate145(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.lastTransitionTime !== undefined) {
      if (!validate21(data.lastTransitionTime, {
        instancePath: instancePath + "/lastTransitionTime",
        parentData: data,
        parentDataProperty: "lastTransitionTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.message !== undefined) {
      if (!validate21(data.message, {
        instancePath: instancePath + "/message",
        parentData: data,
        parentDataProperty: "message",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.reason !== undefined) {
      if (!validate21(data.reason, {
        instancePath: instancePath + "/reason",
        parentData: data,
        parentDataProperty: "reason",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate21(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
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
  validate145.errors = vErrors;
  return errors === 0;
}
function validate144(data, {
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
      if (!validate145(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate145.errors : vErrors.concat(validate145.errors);
        errors = vErrors.length;
      }
    }
  }
  validate144.errors = vErrors;
  return errors === 0;
}
const schema56 = {
  "type": "integer",
  "nullable": true
};
function validate155(data, {
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
  validate155.errors = vErrors;
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
      if (!validate144(data.conditions, {
        instancePath: instancePath + "/conditions",
        parentData: data,
        parentDataProperty: "conditions",
        rootData
      })) {
        vErrors = vErrors === null ? validate144.errors : vErrors.concat(validate144.errors);
        errors = vErrors.length;
      }
    }
    if (data.createTime !== undefined) {
      if (!validate62(data.createTime, {
        instancePath: instancePath + "/createTime",
        parentData: data,
        parentDataProperty: "createTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate62.errors : vErrors.concat(validate62.errors);
        errors = vErrors.length;
      }
    }
    if (data.locationId !== undefined) {
      if (!validate21(data.locationId, {
        instancePath: instancePath + "/locationId",
        parentData: data,
        parentDataProperty: "locationId",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.observedGeneration !== undefined) {
      if (!validate155(data.observedGeneration, {
        instancePath: instancePath + "/observedGeneration",
        parentData: data,
        parentDataProperty: "observedGeneration",
        rootData
      })) {
        vErrors = vErrors === null ? validate155.errors : vErrors.concat(validate155.errors);
        errors = vErrors.length;
      }
    }
    if (data.updateTime !== undefined) {
      if (!validate62(data.updateTime, {
        instancePath: instancePath + "/updateTime",
        parentData: data,
        parentDataProperty: "updateTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate62.errors : vErrors.concat(validate62.errors);
        errors = vErrors.length;
      }
    }
  }
  validate143.errors = vErrors;
  return errors === 0;
}
function validate63(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="dlp.cnrm.cloud.google.com.v1beta1.DLPInspectTemplate" */;
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
      if (!validate64(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate64.errors : vErrors.concat(validate64.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate66(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate66.errors : vErrors.concat(validate66.errors);
        errors = vErrors.length;
      }
    }
    if (data.metadata !== undefined) {
      if (!validate68(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate68.errors : vErrors.concat(validate68.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate72(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate72.errors : vErrors.concat(validate72.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate143(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate143.errors : vErrors.concat(validate143.errors);
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
  validate63.errors = vErrors;
  return errors === 0;
}