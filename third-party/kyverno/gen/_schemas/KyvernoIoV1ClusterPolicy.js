import { formats } from "@kubernetes-models/validate";
export const validate = validate443;
const schema123 = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "$ref": "p0Zr7kcNvM0MRPVZLLCHlah7ukEWWkOS52BuqZkH8"
    },
    "kind": {
      "$ref": "r3KeLsT3bPoEQdzLTdKctsPcix5IDoDmWvsaWDKybs"
    },
    "metadata": {
      "$ref": "a6f0oUEaFqHmymdwnqPORTNOTU7GczWAkwGD0uYU"
    },
    "spec": {
      "$ref": "qZLWwNybw9PBri2jerZt9cRVIopk6HGoPK2lW4eEcI"
    },
    "status": {
      "$ref": "OEQ64cnkYMQWywK5b9CiyJwnuXefK5R1vn2Fq3AG8"
    }
  },
  "required": ["spec", "apiVersion", "kind"],
  "$id": "kyverno.io.v1.ClusterPolicy"
};
const schema124 = {
  "type": "string",
  "enum": ["kyverno.io/v1"]
};
function validate444(data, {
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
  if (!(data === "kyverno.io/v1")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema124.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate444.errors = vErrors;
  return errors === 0;
}
const schema125 = {
  "type": "string",
  "enum": ["ClusterPolicy"]
};
function validate446(data, {
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
  if (!(data === "ClusterPolicy")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema125.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate446.errors = vErrors;
  return errors === 0;
}
const schema126 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
};
const schema127 = {};
import { validate as validate449 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
function validate448(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate449(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate449.errors : vErrors.concat(validate449.errors);
      errors = vErrors.length;
    }
  }
  validate448.errors = vErrors;
  return errors === 0;
}
const schema128 = {
  "properties": {
    "admission": {
      "$ref": "XI8SHPWBW6IRtzOhSeom8NHPNafxnM7Xgk3N9ZeNk"
    },
    "applyRules": {
      "$ref": "R3dNVqESxO1qZAItEh1hYeVuXCxvaHswdHIhFIzKjfg"
    },
    "background": {
      "$ref": "XI8SHPWBW6IRtzOhSeom8NHPNafxnM7Xgk3N9ZeNk"
    },
    "emitWarning": {
      "$ref": "gEUOOhuZefzFQPAU2P6REZY1YYmpGc0TVbLahK1eos"
    },
    "failurePolicy": {
      "$ref": "dHAOdOh62nTVhS32NtIVOFNlzIJna9nDJPFWJ4SNU"
    },
    "generateExisting": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "generateExistingOnPolicyUpdate": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "mutateExistingOnPolicyUpdate": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "rules": {
      "$ref": "DPxdOCMgUw5yEtXB9xMUIiV983gtZKkVInRFxOD5x9s"
    },
    "schemaValidation": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "useServerSideApply": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "validationFailureAction": {
      "$ref": "t2yZBFcy0AnLqmcoOKcMcHsTt8neCn9hTZ1iIndiik4"
    },
    "validationFailureActionOverrides": {
      "$ref": "8iO2DySW0k6A2lniI1JrfeHVALJTY3jFhPn2b2lZs"
    },
    "webhookConfiguration": {
      "$ref": "TUHM17BHtkr5l4biJR5QH1coZk3EIZY8tegns464Rs"
    },
    "webhookTimeoutSeconds": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    }
  },
  "type": "object"
};
const schema6 = {
  "default": true,
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
const schema129 = {
  "enum": ["All", "One"],
  "type": "string",
  "nullable": true
};
function validate454(data, {
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
  if (!(data === "All" || data === "One")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema129.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate454.errors = vErrors;
  return errors === 0;
}
const schema52 = {
  "default": false,
  "type": "boolean",
  "nullable": true
};
function validate148(data, {
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
  validate148.errors = vErrors;
  return errors === 0;
}
const schema72 = {
  "enum": ["Ignore", "Fail"],
  "type": "string",
  "nullable": true
};
function validate213(data, {
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
  if (!(data === "Ignore" || data === "Fail")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema72.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate213.errors = vErrors;
  return errors === 0;
}
const schema7 = {
  "type": "boolean",
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
  validate22.errors = vErrors;
  return errors === 0;
}
const schema74 = {
  "items": {
    "$ref": "OIyxpEUsCIgv9nQq2DcLhPEf7NMqEJJvkAOhL9tRv9I"
  },
  "type": "array",
  "nullable": true
};
const schema75 = {
  "properties": {
    "celPreconditions": {
      "$ref": "bxlmPT3tMA6XyUHA7UtqO7C8DLouzgYedqVNg1I30"
    },
    "context": {
      "$ref": "xGIbk6JE1HQMM9t1lPlRnT3Qhel3Z3fnt1HDPE0t1Hk"
    },
    "exclude": {
      "$ref": "OoxIJAhKlP0HLPMauaDVNF1n6BEL05utJSDrQusGU"
    },
    "generate": {
      "$ref": "JTWiCjsTi9y2cNloT3fINS9HWUqAk9rKMeAjybRKM"
    },
    "imageExtractors": {
      "$ref": "ZB0mtpdUBipJZ34FIo8jEoIspHeDwZuJisy7avp0yno"
    },
    "match": {
      "$ref": "2Gm4p6JaWeW2Yw6P9xLbAVkZliExT9RdIotol9cxY"
    },
    "mutate": {
      "$ref": "LGJqc1pylXYshM5AZL5nxA4LB0ynMwDvY1xMrMsF0"
    },
    "name": {
      "$ref": "kVhKoEkFCpYCBOsP5OvTsXJ39WdjdMwyyhXvIyCOTok"
    },
    "preconditions": {
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    },
    "reportProperties": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "skipBackgroundRequests": {
      "$ref": "XI8SHPWBW6IRtzOhSeom8NHPNafxnM7Xgk3N9ZeNk"
    },
    "validate": {
      "$ref": "Rno7SZD0xWGLftsA1Rcd78CPDiLCcntP5rYuF4ScU"
    },
    "verifyImages": {
      "$ref": "Jo0qbFJ1Jr21XcAepukR23nSsyE02XirRBg5NijG8n4"
    }
  },
  "required": ["match", "name"],
  "type": "object"
};
const schema53 = {
  "items": {
    "$ref": "G1qAW9wb1R05uvb2h7fDeCA7JeEBx17YxwuPvCBM"
  },
  "type": "array",
  "nullable": true
};
const schema54 = {
  "properties": {
    "expression": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["expression", "name"],
  "type": "object"
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
function validate150(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.expression === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "expression"
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
    if (data.expression !== undefined) {
      if (!validate23(data.expression, {
        instancePath: instancePath + "/expression",
        parentData: data,
        parentDataProperty: "expression",
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
const schema26 = {
  "items": {
    "$ref": "vOfr762QOgOPGkVS3cLyV7hNY8i2IxvszkuzkLtyrgk"
  },
  "type": "array",
  "nullable": true
};
const schema27 = {
  "oneOf": [{
    "$ref": "aNI5GPL9pES1xiMU9VDQWVWzOPy47INiAFWVK22dIIQ"
  }, {
    "$ref": "sNHncEdlP5PatsH51j0KJw3P7cpqFo4nMia4XNNgVA"
  }, {
    "$ref": "rJhQjbEM4bXYrJO3zzQK233O6OfwPb66JEHal5h0xAw"
  }, {
    "$ref": "ZyLBd1euIlQuPgL0yiVnFMI0y1WOPVUzEpMdMLI9JI"
  }, {
    "$ref": "P7SH1WfZs8x33eZzIHJUAzfuTYkZV6TDjayISRHxo0"
  }],
  "properties": {
    "apiCall": {
      "$ref": "VIBKqaynu5MGqCbJoCBe61cMmGvZW5cZiIPPNvVtFnI"
    },
    "configMap": {
      "$ref": "zMfPjcFiq4d9d2xiKLIdbsmk6yvakCWP8UUZNzXNc0"
    },
    "globalReference": {
      "$ref": "wycwEzfXpGm19nU8Etp4pGBPOWzqTcHauwTo4O500GY"
    },
    "imageRegistry": {
      "$ref": "0zrNOA3FfZndIup04cJN6Y9xWfQXgb2HGdRj5qmpObw"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "variable": {
      "$ref": "pqS7WwsTPMkTiDwlZjczyP6zndZf44G6OzBSUjyIA"
    }
  },
  "required": ["name"],
  "type": "object"
};
const schema28 = {
  "required": ["configMap"]
};
function validate76(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.configMap === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "configMap"
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
  validate76.errors = vErrors;
  return errors === 0;
}
const schema29 = {
  "required": ["apiCall"]
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
    if (data.apiCall === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "apiCall"
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
  validate78.errors = vErrors;
  return errors === 0;
}
const schema30 = {
  "required": ["imageRegistry"]
};
function validate80(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.imageRegistry === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "imageRegistry"
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
  validate80.errors = vErrors;
  return errors === 0;
}
const schema31 = {
  "required": ["variable"]
};
function validate82(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.variable === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "variable"
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
  validate82.errors = vErrors;
  return errors === 0;
}
const schema32 = {
  "required": ["globalReference"]
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
    if (data.globalReference === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "globalReference"
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
  validate84.errors = vErrors;
  return errors === 0;
}
const schema33 = {
  "properties": {
    "data": {
      "$ref": "dc0qyCNj1vtjSHSueVDF9yYAMsdbvuGCZHAJRml3Y"
    },
    "default": {
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    },
    "jmesPath": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "method": {
      "$ref": "Y8w6fxvpdM0tC7cq9L50TD8X5cUsl1PGiOLHJ8niaJA"
    },
    "service": {
      "$ref": "CiYS04fiZnW5wtz8uByMlXnWl2Lq0pG4U2kSRTYUgk"
    },
    "urlPath": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema34 = {
  "items": {
    "$ref": "UNtpD5l0dJaimauv2WTyFwfJhxb1k87BLic7shI"
  },
  "type": "array",
  "nullable": true
};
const schema35 = {
  "properties": {
    "key": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "value": {
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    }
  },
  "required": ["key", "value"],
  "type": "object"
};
const schema9 = {};
function validate24(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  validate24.errors = null;
  return true;
}
function validate88(data, {
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
  validate88.errors = vErrors;
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
      if (!validate88(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate88.errors : vErrors.concat(validate88.errors);
        errors = vErrors.length;
      }
    }
  }
  validate87.errors = vErrors;
  return errors === 0;
}
const schema10 = {
  "type": "string",
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
  validate25.errors = vErrors;
  return errors === 0;
}
const schema36 = {
  "default": "GET",
  "enum": ["GET", "POST"],
  "type": "string",
  "nullable": true
};
function validate95(data, {
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
  if (!(data === "GET" || data === "POST")) {
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
  validate95.errors = vErrors;
  return errors === 0;
}
const schema37 = {
  "properties": {
    "caBundle": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "headers": {
      "$ref": "39wzsI9nsPXgQVE8Vah8f3692SdXajARO0migPVw18"
    },
    "url": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["url"],
  "type": "object",
  "nullable": true
};
const schema38 = {
  "items": {
    "$ref": "rJ4XK5quRiGa2JrAKUdyctsofnFc3PjWJtxxZx64VOA"
  },
  "type": "array",
  "nullable": true
};
const schema39 = {
  "properties": {
    "key": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "value": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["key", "value"],
  "type": "object"
};
function validate100(data, {
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
    if (data.url === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "url"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.caBundle !== undefined) {
      if (!validate25(data.caBundle, {
        instancePath: instancePath + "/caBundle",
        parentData: data,
        parentDataProperty: "caBundle",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.headers !== undefined) {
      if (!validate99(data.headers, {
        instancePath: instancePath + "/headers",
        parentData: data,
        parentDataProperty: "headers",
        rootData
      })) {
        vErrors = vErrors === null ? validate99.errors : vErrors.concat(validate99.errors);
        errors = vErrors.length;
      }
    }
    if (data.url !== undefined) {
      if (!validate23(data.url, {
        instancePath: instancePath + "/url",
        parentData: data,
        parentDataProperty: "url",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate97.errors = vErrors;
  return errors === 0;
}
function validate86(data, {
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
    if (data.data !== undefined) {
      if (!validate87(data.data, {
        instancePath: instancePath + "/data",
        parentData: data,
        parentDataProperty: "data",
        rootData
      })) {
        vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
        errors = vErrors.length;
      }
    }
    if (data.default !== undefined) {
      if (!validate24(data.default, {
        instancePath: instancePath + "/default",
        parentData: data,
        parentDataProperty: "default",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.jmesPath !== undefined) {
      if (!validate25(data.jmesPath, {
        instancePath: instancePath + "/jmesPath",
        parentData: data,
        parentDataProperty: "jmesPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.method !== undefined) {
      if (!validate95(data.method, {
        instancePath: instancePath + "/method",
        parentData: data,
        parentDataProperty: "method",
        rootData
      })) {
        vErrors = vErrors === null ? validate95.errors : vErrors.concat(validate95.errors);
        errors = vErrors.length;
      }
    }
    if (data.service !== undefined) {
      if (!validate97(data.service, {
        instancePath: instancePath + "/service",
        parentData: data,
        parentDataProperty: "service",
        rootData
      })) {
        vErrors = vErrors === null ? validate97.errors : vErrors.concat(validate97.errors);
        errors = vErrors.length;
      }
    }
    if (data.urlPath !== undefined) {
      if (!validate25(data.urlPath, {
        instancePath: instancePath + "/urlPath",
        parentData: data,
        parentDataProperty: "urlPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate86.errors = vErrors;
  return errors === 0;
}
const schema40 = {
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
function validate109(data, {
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
    if (data.namespace !== undefined) {
      if (!validate25(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate109.errors = vErrors;
  return errors === 0;
}
const schema41 = {
  "properties": {
    "jmesPath": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["name"],
  "type": "object",
  "nullable": true
};
function validate113(data, {
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
    if (data.jmesPath !== undefined) {
      if (!validate25(data.jmesPath, {
        instancePath: instancePath + "/jmesPath",
        parentData: data,
        parentDataProperty: "jmesPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
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
  validate113.errors = vErrors;
  return errors === 0;
}
const schema42 = {
  "properties": {
    "imageRegistryCredentials": {
      "$ref": "F0794A6YCgBrJnwYowOyi0F0OdNYdnZIY6W45Lp4"
    },
    "jmesPath": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "reference": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["reference"],
  "type": "object",
  "nullable": true
};
const schema43 = {
  "properties": {
    "allowInsecureRegistry": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "providers": {
      "$ref": "HDBQ04S2pFVJEE5yBMwsmtQFrirDJzERMmFL6Ou1M"
    },
    "secrets": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    }
  },
  "type": "object",
  "nullable": true
};
const schema44 = {
  "items": {
    "$ref": "Jux1IKVMAFV8UVpKSF3PhnD5Sdf2AUAdOJ0ViTw6PIY"
  },
  "type": "array",
  "nullable": true
};
const schema45 = {
  "enum": ["default", "amazon", "azure", "google", "github"],
  "type": "string"
};
function validate121(data, {
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
  if (!(data === "default" || data === "amazon" || data === "azure" || data === "google" || data === "github")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema45.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate121.errors = vErrors;
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
      if (!validate121(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate121.errors : vErrors.concat(validate121.errors);
        errors = vErrors.length;
      }
    }
  }
  validate120.errors = vErrors;
  return errors === 0;
}
const schema11 = {
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "array",
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
  validate26.errors = vErrors;
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
    if (data.allowInsecureRegistry !== undefined) {
      if (!validate22(data.allowInsecureRegistry, {
        instancePath: instancePath + "/allowInsecureRegistry",
        parentData: data,
        parentDataProperty: "allowInsecureRegistry",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.providers !== undefined) {
      if (!validate120(data.providers, {
        instancePath: instancePath + "/providers",
        parentData: data,
        parentDataProperty: "providers",
        rootData
      })) {
        vErrors = vErrors === null ? validate120.errors : vErrors.concat(validate120.errors);
        errors = vErrors.length;
      }
    }
    if (data.secrets !== undefined) {
      if (!validate26(data.secrets, {
        instancePath: instancePath + "/secrets",
        parentData: data,
        parentDataProperty: "secrets",
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
function validate117(data, {
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
    if (data.reference === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "reference"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.imageRegistryCredentials !== undefined) {
      if (!validate118(data.imageRegistryCredentials, {
        instancePath: instancePath + "/imageRegistryCredentials",
        parentData: data,
        parentDataProperty: "imageRegistryCredentials",
        rootData
      })) {
        vErrors = vErrors === null ? validate118.errors : vErrors.concat(validate118.errors);
        errors = vErrors.length;
      }
    }
    if (data.jmesPath !== undefined) {
      if (!validate25(data.jmesPath, {
        instancePath: instancePath + "/jmesPath",
        parentData: data,
        parentDataProperty: "jmesPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.reference !== undefined) {
      if (!validate23(data.reference, {
        instancePath: instancePath + "/reference",
        parentData: data,
        parentDataProperty: "reference",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate117.errors = vErrors;
  return errors === 0;
}
const schema46 = {
  "properties": {
    "default": {
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    },
    "jmesPath": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "value": {
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    }
  },
  "type": "object",
  "nullable": true
};
function validate130(data, {
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
    if (data.default !== undefined) {
      if (!validate24(data.default, {
        instancePath: instancePath + "/default",
        parentData: data,
        parentDataProperty: "default",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.jmesPath !== undefined) {
      if (!validate25(data.jmesPath, {
        instancePath: instancePath + "/jmesPath",
        parentData: data,
        parentDataProperty: "jmesPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
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
  }
  validate130.errors = vErrors;
  return errors === 0;
}
function validate75(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  const _errs1 = errors;
  let valid0 = false;
  let passing0 = null;
  const _errs2 = errors;
  if (!validate76(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate76.errors : vErrors.concat(validate76.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs2 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
  }
  const _errs3 = errors;
  if (!validate78(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate78.errors : vErrors.concat(validate78.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs3 === errors;
  if (_valid0 && valid0) {
    valid0 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid0 = true;
      passing0 = 1;
    }
    const _errs4 = errors;
    if (!validate80(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate80.errors : vErrors.concat(validate80.errors);
      errors = vErrors.length;
    }
    var _valid0 = _errs4 === errors;
    if (_valid0 && valid0) {
      valid0 = false;
      passing0 = [passing0, 2];
    } else {
      if (_valid0) {
        valid0 = true;
        passing0 = 2;
      }
      const _errs5 = errors;
      if (!validate82(data, {
        instancePath,
        parentData,
        parentDataProperty,
        rootData
      })) {
        vErrors = vErrors === null ? validate82.errors : vErrors.concat(validate82.errors);
        errors = vErrors.length;
      }
      var _valid0 = _errs5 === errors;
      if (_valid0 && valid0) {
        valid0 = false;
        passing0 = [passing0, 3];
      } else {
        if (_valid0) {
          valid0 = true;
          passing0 = 3;
        }
        const _errs6 = errors;
        if (!validate84(data, {
          instancePath,
          parentData,
          parentDataProperty,
          rootData
        })) {
          vErrors = vErrors === null ? validate84.errors : vErrors.concat(validate84.errors);
          errors = vErrors.length;
        }
        var _valid0 = _errs6 === errors;
        if (_valid0 && valid0) {
          valid0 = false;
          passing0 = [passing0, 4];
        } else {
          if (_valid0) {
            valid0 = true;
            passing0 = 4;
          }
        }
      }
    }
  }
  if (!valid0) {
    const err0 = {
      instancePath,
      schemaPath: "#/oneOf",
      keyword: "oneOf",
      params: {
        passingSchemas: passing0
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  } else {
    errors = _errs1;
    if (vErrors !== null) {
      if (_errs1) {
        vErrors.length = _errs1;
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
    if (data.apiCall !== undefined) {
      if (!validate86(data.apiCall, {
        instancePath: instancePath + "/apiCall",
        parentData: data,
        parentDataProperty: "apiCall",
        rootData
      })) {
        vErrors = vErrors === null ? validate86.errors : vErrors.concat(validate86.errors);
        errors = vErrors.length;
      }
    }
    if (data.configMap !== undefined) {
      if (!validate109(data.configMap, {
        instancePath: instancePath + "/configMap",
        parentData: data,
        parentDataProperty: "configMap",
        rootData
      })) {
        vErrors = vErrors === null ? validate109.errors : vErrors.concat(validate109.errors);
        errors = vErrors.length;
      }
    }
    if (data.globalReference !== undefined) {
      if (!validate113(data.globalReference, {
        instancePath: instancePath + "/globalReference",
        parentData: data,
        parentDataProperty: "globalReference",
        rootData
      })) {
        vErrors = vErrors === null ? validate113.errors : vErrors.concat(validate113.errors);
        errors = vErrors.length;
      }
    }
    if (data.imageRegistry !== undefined) {
      if (!validate117(data.imageRegistry, {
        instancePath: instancePath + "/imageRegistry",
        parentData: data,
        parentDataProperty: "imageRegistry",
        rootData
      })) {
        vErrors = vErrors === null ? validate117.errors : vErrors.concat(validate117.errors);
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
    if (data.variable !== undefined) {
      if (!validate130(data.variable, {
        instancePath: instancePath + "/variable",
        parentData: data,
        parentDataProperty: "variable",
        rootData
      })) {
        vErrors = vErrors === null ? validate130.errors : vErrors.concat(validate130.errors);
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
  validate75.errors = vErrors;
  return errors === 0;
}
function validate74(data, {
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
      if (!validate75(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate75.errors : vErrors.concat(validate75.errors);
        errors = vErrors.length;
      }
    }
  }
  validate74.errors = vErrors;
  return errors === 0;
}
const schema76 = {
  "not": {
    "$ref": "ERkthRjW4tDljQYVaSx8j3O2rnfggiWsqL37UFquE"
  },
  "properties": {
    "all": {
      "$ref": "fPeaiY21LfUd4lzEmPO3TteUw7OnDJxNq6LbErOgUE"
    },
    "any": {
      "$ref": "fPeaiY21LfUd4lzEmPO3TteUw7OnDJxNq6LbErOgUE"
    },
    "clusterRoles": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "resources": {
      "$ref": "DDhhL3iprDaNLCfEkv1mQHbg3iJnl4wTB1ylFZTds"
    },
    "roles": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "subjects": {
      "$ref": "xUepciIhBHqZbBa0C8azGn2RUs5gTIsx7BeiBxL8JNs"
    }
  },
  "type": "object",
  "nullable": true
};
const schema50 = {
  "required": ["any", "all"]
};
function validate144(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.any === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "any"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.all === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "all"
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
  validate144.errors = vErrors;
  return errors === 0;
}
const schema16 = {
  "items": {
    "$ref": "SCgK5E5XIiE5VnSleyEo8VAaRsm563YsGP0Q8YZD5g"
  },
  "type": "array",
  "nullable": true
};
const schema17 = {
  "properties": {
    "clusterRoles": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "resources": {
      "$ref": "DDhhL3iprDaNLCfEkv1mQHbg3iJnl4wTB1ylFZTds"
    },
    "roles": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "subjects": {
      "$ref": "xUepciIhBHqZbBa0C8azGn2RUs5gTIsx7BeiBxL8JNs"
    }
  },
  "type": "object"
};
const schema18 = {
  "not": {
    "$ref": "rbfm9cqDcumJljTGpqf0CFgHrBMtYZSgb005Uebf0"
  },
  "properties": {
    "annotations": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "kinds": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "names": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "namespaceSelector": {
      "$ref": "Zjt3HFRfql15zSZzpouBNTusTEhVu3UqWLOK7EP6U"
    },
    "namespaces": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "operations": {
      "$ref": "sOddqIbV4JobYyIioim7MzPz0uqZRwkKnxHjO36dJpk"
    },
    "selector": {
      "$ref": "Zjt3HFRfql15zSZzpouBNTusTEhVu3UqWLOK7EP6U"
    }
  },
  "type": "object",
  "nullable": true
};
const schema19 = {
  "required": ["name", "names"]
};
function validate43(data, {
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
    if (data.names === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "names"
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
  validate43.errors = vErrors;
  return errors === 0;
}
const schema12 = {
  "additionalProperties": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "object",
  "properties": {},
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
  validate28.errors = vErrors;
  return errors === 0;
}
const schema13 = {
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
const schema14 = {
  "items": {
    "$ref": "MkwwSDeYoT1APit7w8qsvbKCw8OynjINdeojyPgpPQ"
  },
  "type": "array",
  "nullable": true
};
const schema15 = {
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
function validate32(data, {
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
      if (!validate26(data.values, {
        instancePath: instancePath + "/values",
        parentData: data,
        parentDataProperty: "values",
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
    if (data.matchExpressions !== undefined) {
      if (!validate31(data.matchExpressions, {
        instancePath: instancePath + "/matchExpressions",
        parentData: data,
        parentDataProperty: "matchExpressions",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
    if (data.matchLabels !== undefined) {
      if (!validate28(data.matchLabels, {
        instancePath: instancePath + "/matchLabels",
        parentData: data,
        parentDataProperty: "matchLabels",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
  }
  validate30.errors = vErrors;
  return errors === 0;
}
const schema20 = {
  "items": {
    "$ref": "hZlbY7eS47YE4K5yYunTq8woglmGyhyvM8WYDP8"
  },
  "type": "array",
  "nullable": true
};
const schema21 = {
  "enum": ["CREATE", "CONNECT", "UPDATE", "DELETE"],
  "type": "string"
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
  if (!(data === "CREATE" || data === "CONNECT" || data === "UPDATE" || data === "DELETE")) {
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
      if (!validate52(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate52.errors : vErrors.concat(validate52.errors);
        errors = vErrors.length;
      }
    }
  }
  validate51.errors = vErrors;
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
  const _errs2 = errors;
  const _errs3 = errors;
  if (!validate43(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
    errors = vErrors.length;
  }
  var valid0 = _errs3 === errors;
  if (valid0) {
    const err1 = {
      instancePath,
      schemaPath: "#/not",
      keyword: "not",
      params: {}
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
    if (data.annotations !== undefined) {
      if (!validate28(data.annotations, {
        instancePath: instancePath + "/annotations",
        parentData: data,
        parentDataProperty: "annotations",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.kinds !== undefined) {
      if (!validate26(data.kinds, {
        instancePath: instancePath + "/kinds",
        parentData: data,
        parentDataProperty: "kinds",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate25(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.names !== undefined) {
      if (!validate26(data.names, {
        instancePath: instancePath + "/names",
        parentData: data,
        parentDataProperty: "names",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespaceSelector !== undefined) {
      if (!validate30(data.namespaceSelector, {
        instancePath: instancePath + "/namespaceSelector",
        parentData: data,
        parentDataProperty: "namespaceSelector",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespaces !== undefined) {
      if (!validate26(data.namespaces, {
        instancePath: instancePath + "/namespaces",
        parentData: data,
        parentDataProperty: "namespaces",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.operations !== undefined) {
      if (!validate51(data.operations, {
        instancePath: instancePath + "/operations",
        parentData: data,
        parentDataProperty: "operations",
        rootData
      })) {
        vErrors = vErrors === null ? validate51.errors : vErrors.concat(validate51.errors);
        errors = vErrors.length;
      }
    }
    if (data.selector !== undefined) {
      if (!validate30(data.selector, {
        instancePath: instancePath + "/selector",
        parentData: data,
        parentDataProperty: "selector",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
  }
  validate42.errors = vErrors;
  return errors === 0;
}
const schema22 = {
  "items": {
    "$ref": "gmYActB26e0hl9ypIjn0NqjZMUMpqW0L7TbY7sgpyE"
  },
  "type": "array",
  "nullable": true
};
const schema23 = {
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
  "type": "object"
};
function validate59(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
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
    if (data.apiGroup !== undefined) {
      if (!validate25(data.apiGroup, {
        instancePath: instancePath + "/apiGroup",
        parentData: data,
        parentDataProperty: "apiGroup",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
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
      if (!validate25(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
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
      if (!validate59(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate59.errors : vErrors.concat(validate59.errors);
        errors = vErrors.length;
      }
    }
  }
  validate58.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.clusterRoles !== undefined) {
      if (!validate26(data.clusterRoles, {
        instancePath: instancePath + "/clusterRoles",
        parentData: data,
        parentDataProperty: "clusterRoles",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.resources !== undefined) {
      if (!validate42(data.resources, {
        instancePath: instancePath + "/resources",
        parentData: data,
        parentDataProperty: "resources",
        rootData
      })) {
        vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
        errors = vErrors.length;
      }
    }
    if (data.roles !== undefined) {
      if (!validate26(data.roles, {
        instancePath: instancePath + "/roles",
        parentData: data,
        parentDataProperty: "roles",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.subjects !== undefined) {
      if (!validate58(data.subjects, {
        instancePath: instancePath + "/subjects",
        parentData: data,
        parentDataProperty: "subjects",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
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
  validate40.errors = vErrors;
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
      if (!validate40(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
  }
  validate39.errors = vErrors;
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
  const _errs3 = errors;
  if (!validate144(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate144.errors : vErrors.concat(validate144.errors);
    errors = vErrors.length;
  }
  var valid0 = _errs3 === errors;
  if (valid0) {
    const err1 = {
      instancePath,
      schemaPath: "#/not",
      keyword: "not",
      params: {}
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
    if (data.all !== undefined) {
      if (!validate39(data.all, {
        instancePath: instancePath + "/all",
        parentData: data,
        parentDataProperty: "all",
        rootData
      })) {
        vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
        errors = vErrors.length;
      }
    }
    if (data.any !== undefined) {
      if (!validate39(data.any, {
        instancePath: instancePath + "/any",
        parentData: data,
        parentDataProperty: "any",
        rootData
      })) {
        vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
        errors = vErrors.length;
      }
    }
    if (data.clusterRoles !== undefined) {
      if (!validate26(data.clusterRoles, {
        instancePath: instancePath + "/clusterRoles",
        parentData: data,
        parentDataProperty: "clusterRoles",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.resources !== undefined) {
      if (!validate42(data.resources, {
        instancePath: instancePath + "/resources",
        parentData: data,
        parentDataProperty: "resources",
        rootData
      })) {
        vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
        errors = vErrors.length;
      }
    }
    if (data.roles !== undefined) {
      if (!validate26(data.roles, {
        instancePath: instancePath + "/roles",
        parentData: data,
        parentDataProperty: "roles",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.subjects !== undefined) {
      if (!validate58(data.subjects, {
        instancePath: instancePath + "/subjects",
        parentData: data,
        parentDataProperty: "subjects",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
  }
  validate219.errors = vErrors;
  return errors === 0;
}
const schema77 = {
  "properties": {
    "apiVersion": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "clone": {
      "$ref": "72sTWX3sNrntf2YKDz1ZQMfE4mRnxbiGgAspqh4gVc"
    },
    "cloneList": {
      "$ref": "cnaDSkpe2gGPKUSFgIssriAKdxBtqrYPhgBUtKmQ8"
    },
    "data": {
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    },
    "foreach": {
      "$ref": "9WdGH58heTRRH6mTPqbZIeKQpzIRcQOH3GYGIRk"
    },
    "generateExisting": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "kind": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "orphanDownstreamOnPolicyDelete": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "synchronize": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "uid": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema24 = {
  "properties": {
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
    if (data.name !== undefined) {
      if (!validate25(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespace !== undefined) {
      if (!validate25(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate67.errors = vErrors;
  return errors === 0;
}
const schema25 = {
  "properties": {
    "kinds": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "selector": {
      "$ref": "Zjt3HFRfql15zSZzpouBNTusTEhVu3UqWLOK7EP6U"
    }
  },
  "type": "object",
  "nullable": true
};
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
    if (data.kinds !== undefined) {
      if (!validate26(data.kinds, {
        instancePath: instancePath + "/kinds",
        parentData: data,
        parentDataProperty: "kinds",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespace !== undefined) {
      if (!validate25(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.selector !== undefined) {
      if (!validate30(data.selector, {
        instancePath: instancePath + "/selector",
        parentData: data,
        parentDataProperty: "selector",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
  }
  validate70.errors = vErrors;
  return errors === 0;
}
const schema78 = {
  "items": {
    "$ref": "NFkL5siy2Wc6uNnYrIoDOeIODVAfrOwtKAzFZLzidv0"
  },
  "type": "array",
  "nullable": true
};
const schema79 = {
  "properties": {
    "apiVersion": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "clone": {
      "$ref": "72sTWX3sNrntf2YKDz1ZQMfE4mRnxbiGgAspqh4gVc"
    },
    "cloneList": {
      "$ref": "cnaDSkpe2gGPKUSFgIssriAKdxBtqrYPhgBUtKmQ8"
    },
    "context": {
      "$ref": "xGIbk6JE1HQMM9t1lPlRnT3Qhel3Z3fnt1HDPE0t1Hk"
    },
    "data": {
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    },
    "kind": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "list": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "preconditions": {
      "$ref": "8ejS6G8Z1YqFKNfapt2fl1tv6p05ZCWwPfWINsb4ilc"
    },
    "uid": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
const schema51 = {
  "properties": {
    "all": {
      "$ref": "OluIzmGeNT1MkdNRf7A6Wx792FdYLXt1XHwjVQsc"
    },
    "any": {
      "$ref": "OluIzmGeNT1MkdNRf7A6Wx792FdYLXt1XHwjVQsc"
    }
  },
  "type": "object",
  "nullable": true
};
const schema47 = {
  "items": {
    "$ref": "Fg427VzB1WtLTxRePfKOBKmRWBScEHUD3mV7To7hGJY"
  },
  "type": "array",
  "nullable": true
};
const schema48 = {
  "properties": {
    "key": {
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    },
    "message": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "operator": {
      "$ref": "HzMKP7DNkYXATOuqQKNZqKq1BaDXOo85gjFKLlQ9ZE"
    },
    "value": {
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    }
  },
  "type": "object"
};
const schema49 = {
  "enum": ["Equals", "NotEquals", "In", "AnyIn", "AllIn", "NotIn", "AnyNotIn", "AllNotIn", "GreaterThanOrEquals", "GreaterThan", "LessThanOrEquals", "LessThan", "DurationGreaterThanOrEquals", "DurationGreaterThan", "DurationLessThanOrEquals", "DurationLessThan"],
  "type": "string",
  "nullable": true
};
function validate140(data, {
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
  if (!(data === "Equals" || data === "NotEquals" || data === "In" || data === "AnyIn" || data === "AllIn" || data === "NotIn" || data === "AnyNotIn" || data === "AllNotIn" || data === "GreaterThanOrEquals" || data === "GreaterThan" || data === "LessThanOrEquals" || data === "LessThan" || data === "DurationGreaterThanOrEquals" || data === "DurationGreaterThan" || data === "DurationLessThanOrEquals" || data === "DurationLessThan")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema49.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate140.errors = vErrors;
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
    if (data.message !== undefined) {
      if (!validate25(data.message, {
        instancePath: instancePath + "/message",
        parentData: data,
        parentDataProperty: "message",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.operator !== undefined) {
      if (!validate140(data.operator, {
        instancePath: instancePath + "/operator",
        parentData: data,
        parentDataProperty: "operator",
        rootData
      })) {
        vErrors = vErrors === null ? validate140.errors : vErrors.concat(validate140.errors);
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
    if (data.all !== undefined) {
      if (!validate136(data.all, {
        instancePath: instancePath + "/all",
        parentData: data,
        parentDataProperty: "all",
        rootData
      })) {
        vErrors = vErrors === null ? validate136.errors : vErrors.concat(validate136.errors);
        errors = vErrors.length;
      }
    }
    if (data.any !== undefined) {
      if (!validate136(data.any, {
        instancePath: instancePath + "/any",
        parentData: data,
        parentDataProperty: "any",
        rootData
      })) {
        vErrors = vErrors === null ? validate136.errors : vErrors.concat(validate136.errors);
        errors = vErrors.length;
      }
    }
  }
  validate145.errors = vErrors;
  return errors === 0;
}
function validate234(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.apiVersion !== undefined) {
      if (!validate25(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.clone !== undefined) {
      if (!validate67(data.clone, {
        instancePath: instancePath + "/clone",
        parentData: data,
        parentDataProperty: "clone",
        rootData
      })) {
        vErrors = vErrors === null ? validate67.errors : vErrors.concat(validate67.errors);
        errors = vErrors.length;
      }
    }
    if (data.cloneList !== undefined) {
      if (!validate70(data.cloneList, {
        instancePath: instancePath + "/cloneList",
        parentData: data,
        parentDataProperty: "cloneList",
        rootData
      })) {
        vErrors = vErrors === null ? validate70.errors : vErrors.concat(validate70.errors);
        errors = vErrors.length;
      }
    }
    if (data.context !== undefined) {
      if (!validate74(data.context, {
        instancePath: instancePath + "/context",
        parentData: data,
        parentDataProperty: "context",
        rootData
      })) {
        vErrors = vErrors === null ? validate74.errors : vErrors.concat(validate74.errors);
        errors = vErrors.length;
      }
    }
    if (data.data !== undefined) {
      if (!validate24(data.data, {
        instancePath: instancePath + "/data",
        parentData: data,
        parentDataProperty: "data",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate25(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.list !== undefined) {
      if (!validate25(data.list, {
        instancePath: instancePath + "/list",
        parentData: data,
        parentDataProperty: "list",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate25(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespace !== undefined) {
      if (!validate25(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.preconditions !== undefined) {
      if (!validate145(data.preconditions, {
        instancePath: instancePath + "/preconditions",
        parentData: data,
        parentDataProperty: "preconditions",
        rootData
      })) {
        vErrors = vErrors === null ? validate145.errors : vErrors.concat(validate145.errors);
        errors = vErrors.length;
      }
    }
    if (data.uid !== undefined) {
      if (!validate25(data.uid, {
        instancePath: instancePath + "/uid",
        parentData: data,
        parentDataProperty: "uid",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
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
  validate234.errors = vErrors;
  return errors === 0;
}
function validate233(data, {
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
      if (!validate234(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate234.errors : vErrors.concat(validate234.errors);
        errors = vErrors.length;
      }
    }
  }
  validate233.errors = vErrors;
  return errors === 0;
}
function validate228(data, {
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
    if (data.apiVersion !== undefined) {
      if (!validate25(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.clone !== undefined) {
      if (!validate67(data.clone, {
        instancePath: instancePath + "/clone",
        parentData: data,
        parentDataProperty: "clone",
        rootData
      })) {
        vErrors = vErrors === null ? validate67.errors : vErrors.concat(validate67.errors);
        errors = vErrors.length;
      }
    }
    if (data.cloneList !== undefined) {
      if (!validate70(data.cloneList, {
        instancePath: instancePath + "/cloneList",
        parentData: data,
        parentDataProperty: "cloneList",
        rootData
      })) {
        vErrors = vErrors === null ? validate70.errors : vErrors.concat(validate70.errors);
        errors = vErrors.length;
      }
    }
    if (data.data !== undefined) {
      if (!validate24(data.data, {
        instancePath: instancePath + "/data",
        parentData: data,
        parentDataProperty: "data",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.foreach !== undefined) {
      if (!validate233(data.foreach, {
        instancePath: instancePath + "/foreach",
        parentData: data,
        parentDataProperty: "foreach",
        rootData
      })) {
        vErrors = vErrors === null ? validate233.errors : vErrors.concat(validate233.errors);
        errors = vErrors.length;
      }
    }
    if (data.generateExisting !== undefined) {
      if (!validate22(data.generateExisting, {
        instancePath: instancePath + "/generateExisting",
        parentData: data,
        parentDataProperty: "generateExisting",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate25(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate25(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespace !== undefined) {
      if (!validate25(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.orphanDownstreamOnPolicyDelete !== undefined) {
      if (!validate22(data.orphanDownstreamOnPolicyDelete, {
        instancePath: instancePath + "/orphanDownstreamOnPolicyDelete",
        parentData: data,
        parentDataProperty: "orphanDownstreamOnPolicyDelete",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.synchronize !== undefined) {
      if (!validate22(data.synchronize, {
        instancePath: instancePath + "/synchronize",
        parentData: data,
        parentDataProperty: "synchronize",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.uid !== undefined) {
      if (!validate25(data.uid, {
        instancePath: instancePath + "/uid",
        parentData: data,
        parentDataProperty: "uid",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate228.errors = vErrors;
  return errors === 0;
}
const schema80 = {
  "additionalProperties": {
    "$ref": "t6JQR09LcjocjpXZahDyK5tFA1ucxEZFFboHkD2w"
  },
  "type": "object",
  "properties": {},
  "nullable": true
};
const schema81 = {
  "items": {
    "$ref": "YsizQE0YHQ8b37K6Zp1MY8F7oTghwbwTXxrblwRjvO8"
  },
  "type": "array"
};
const schema82 = {
  "properties": {
    "jmesPath": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "key": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "path": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "value": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["path"],
  "type": "object"
};
function validate258(data, {
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
    if (data.jmesPath !== undefined) {
      if (!validate25(data.jmesPath, {
        instancePath: instancePath + "/jmesPath",
        parentData: data,
        parentDataProperty: "jmesPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.key !== undefined) {
      if (!validate25(data.key, {
        instancePath: instancePath + "/key",
        parentData: data,
        parentDataProperty: "key",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate25(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
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
    if (data.value !== undefined) {
      if (!validate25(data.value, {
        instancePath: instancePath + "/value",
        parentData: data,
        parentDataProperty: "value",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
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
  validate258.errors = vErrors;
  return errors === 0;
}
function validate257(data, {
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
      if (!validate258(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate258.errors : vErrors.concat(validate258.errors);
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
  validate257.errors = vErrors;
  return errors === 0;
}
function validate256(data, {
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
      if (!validate257(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
        rootData
      })) {
        vErrors = vErrors === null ? validate257.errors : vErrors.concat(validate257.errors);
        errors = vErrors.length;
      }
    }
  }
  validate256.errors = vErrors;
  return errors === 0;
}
const schema83 = {
  "not": {
    "$ref": "ERkthRjW4tDljQYVaSx8j3O2rnfggiWsqL37UFquE"
  },
  "properties": {
    "all": {
      "$ref": "fPeaiY21LfUd4lzEmPO3TteUw7OnDJxNq6LbErOgUE"
    },
    "any": {
      "$ref": "fPeaiY21LfUd4lzEmPO3TteUw7OnDJxNq6LbErOgUE"
    },
    "clusterRoles": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "resources": {
      "$ref": "DDhhL3iprDaNLCfEkv1mQHbg3iJnl4wTB1ylFZTds"
    },
    "roles": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "subjects": {
      "$ref": "xUepciIhBHqZbBa0C8azGn2RUs5gTIsx7BeiBxL8JNs"
    }
  },
  "type": "object"
};
function validate267(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  const _errs1 = errors;
  const _errs2 = errors;
  if (!validate144(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate144.errors : vErrors.concat(validate144.errors);
    errors = vErrors.length;
  }
  var valid0 = _errs2 === errors;
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
    errors = _errs1;
    if (vErrors !== null) {
      if (_errs1) {
        vErrors.length = _errs1;
      } else {
        vErrors = null;
      }
    }
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.all !== undefined) {
      if (!validate39(data.all, {
        instancePath: instancePath + "/all",
        parentData: data,
        parentDataProperty: "all",
        rootData
      })) {
        vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
        errors = vErrors.length;
      }
    }
    if (data.any !== undefined) {
      if (!validate39(data.any, {
        instancePath: instancePath + "/any",
        parentData: data,
        parentDataProperty: "any",
        rootData
      })) {
        vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
        errors = vErrors.length;
      }
    }
    if (data.clusterRoles !== undefined) {
      if (!validate26(data.clusterRoles, {
        instancePath: instancePath + "/clusterRoles",
        parentData: data,
        parentDataProperty: "clusterRoles",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.resources !== undefined) {
      if (!validate42(data.resources, {
        instancePath: instancePath + "/resources",
        parentData: data,
        parentDataProperty: "resources",
        rootData
      })) {
        vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
        errors = vErrors.length;
      }
    }
    if (data.roles !== undefined) {
      if (!validate26(data.roles, {
        instancePath: instancePath + "/roles",
        parentData: data,
        parentDataProperty: "roles",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.subjects !== undefined) {
      if (!validate58(data.subjects, {
        instancePath: instancePath + "/subjects",
        parentData: data,
        parentDataProperty: "subjects",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
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
  validate267.errors = vErrors;
  return errors === 0;
}
const schema84 = {
  "properties": {
    "foreach": {
      "$ref": "vqrHPbWRWpy7K6UkznhLrQFqkn6fV4Z7jDIJi4zH8"
    },
    "mutateExistingOnPolicyUpdate": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "patchStrategicMerge": {
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    },
    "patchesJson6902": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "targets": {
      "$ref": "h9bZDrmw26nv7iTKn89S9WycXI0RepkmdgnW9HyM"
    }
  },
  "type": "object",
  "nullable": true
};
const schema85 = {
  "items": {
    "$ref": "cHiEl7ygJ1NjNlGHzrEgCdWqVhwZQBFrRUZWqLHQI2c"
  },
  "type": "array",
  "nullable": true
};
const schema86 = {
  "properties": {
    "context": {
      "$ref": "xGIbk6JE1HQMM9t1lPlRnT3Qhel3Z3fnt1HDPE0t1Hk"
    },
    "foreach": {
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    },
    "list": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "order": {
      "$ref": "bBCcWFcQQsEsqrUpg1Jv3sOiBqFpnI5IX4RyjEvK3g"
    },
    "patchStrategicMerge": {
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    },
    "patchesJson6902": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "preconditions": {
      "$ref": "8ejS6G8Z1YqFKNfapt2fl1tv6p05ZCWwPfWINsb4ilc"
    }
  },
  "type": "object"
};
const schema87 = {
  "enum": ["Ascending", "Descending"],
  "type": "string",
  "nullable": true
};
function validate282(data, {
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
  if (!(data === "Ascending" || data === "Descending")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema87.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate282.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.context !== undefined) {
      if (!validate74(data.context, {
        instancePath: instancePath + "/context",
        parentData: data,
        parentDataProperty: "context",
        rootData
      })) {
        vErrors = vErrors === null ? validate74.errors : vErrors.concat(validate74.errors);
        errors = vErrors.length;
      }
    }
    if (data.foreach !== undefined) {
      if (!validate24(data.foreach, {
        instancePath: instancePath + "/foreach",
        parentData: data,
        parentDataProperty: "foreach",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.list !== undefined) {
      if (!validate25(data.list, {
        instancePath: instancePath + "/list",
        parentData: data,
        parentDataProperty: "list",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.order !== undefined) {
      if (!validate282(data.order, {
        instancePath: instancePath + "/order",
        parentData: data,
        parentDataProperty: "order",
        rootData
      })) {
        vErrors = vErrors === null ? validate282.errors : vErrors.concat(validate282.errors);
        errors = vErrors.length;
      }
    }
    if (data.patchStrategicMerge !== undefined) {
      if (!validate24(data.patchStrategicMerge, {
        instancePath: instancePath + "/patchStrategicMerge",
        parentData: data,
        parentDataProperty: "patchStrategicMerge",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.patchesJson6902 !== undefined) {
      if (!validate25(data.patchesJson6902, {
        instancePath: instancePath + "/patchesJson6902",
        parentData: data,
        parentDataProperty: "patchesJson6902",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.preconditions !== undefined) {
      if (!validate145(data.preconditions, {
        instancePath: instancePath + "/preconditions",
        parentData: data,
        parentDataProperty: "preconditions",
        rootData
      })) {
        vErrors = vErrors === null ? validate145.errors : vErrors.concat(validate145.errors);
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
  validate278.errors = vErrors;
  return errors === 0;
}
function validate277(data, {
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
      if (!validate278(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate278.errors : vErrors.concat(validate278.errors);
        errors = vErrors.length;
      }
    }
  }
  validate277.errors = vErrors;
  return errors === 0;
}
const schema88 = {
  "items": {
    "$ref": "Rmbd9VRJgnEY9fwwq29EU7Tmmotg7oW5SgTpopvxc"
  },
  "type": "array",
  "nullable": true
};
const schema89 = {
  "properties": {
    "apiVersion": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "context": {
      "$ref": "xGIbk6JE1HQMM9t1lPlRnT3Qhel3Z3fnt1HDPE0t1Hk"
    },
    "kind": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "preconditions": {
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    },
    "selector": {
      "$ref": "Zjt3HFRfql15zSZzpouBNTusTEhVu3UqWLOK7EP6U"
    },
    "uid": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
function validate293(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.apiVersion !== undefined) {
      if (!validate25(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.context !== undefined) {
      if (!validate74(data.context, {
        instancePath: instancePath + "/context",
        parentData: data,
        parentDataProperty: "context",
        rootData
      })) {
        vErrors = vErrors === null ? validate74.errors : vErrors.concat(validate74.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate25(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate25(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespace !== undefined) {
      if (!validate25(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.preconditions !== undefined) {
      if (!validate24(data.preconditions, {
        instancePath: instancePath + "/preconditions",
        parentData: data,
        parentDataProperty: "preconditions",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.selector !== undefined) {
      if (!validate30(data.selector, {
        instancePath: instancePath + "/selector",
        parentData: data,
        parentDataProperty: "selector",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.uid !== undefined) {
      if (!validate25(data.uid, {
        instancePath: instancePath + "/uid",
        parentData: data,
        parentDataProperty: "uid",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
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
  validate293.errors = vErrors;
  return errors === 0;
}
function validate292(data, {
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
      if (!validate293(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate293.errors : vErrors.concat(validate293.errors);
        errors = vErrors.length;
      }
    }
  }
  validate292.errors = vErrors;
  return errors === 0;
}
function validate276(data, {
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
    if (data.foreach !== undefined) {
      if (!validate277(data.foreach, {
        instancePath: instancePath + "/foreach",
        parentData: data,
        parentDataProperty: "foreach",
        rootData
      })) {
        vErrors = vErrors === null ? validate277.errors : vErrors.concat(validate277.errors);
        errors = vErrors.length;
      }
    }
    if (data.mutateExistingOnPolicyUpdate !== undefined) {
      if (!validate22(data.mutateExistingOnPolicyUpdate, {
        instancePath: instancePath + "/mutateExistingOnPolicyUpdate",
        parentData: data,
        parentDataProperty: "mutateExistingOnPolicyUpdate",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.patchStrategicMerge !== undefined) {
      if (!validate24(data.patchStrategicMerge, {
        instancePath: instancePath + "/patchStrategicMerge",
        parentData: data,
        parentDataProperty: "patchStrategicMerge",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.patchesJson6902 !== undefined) {
      if (!validate25(data.patchesJson6902, {
        instancePath: instancePath + "/patchesJson6902",
        parentData: data,
        parentDataProperty: "patchesJson6902",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.targets !== undefined) {
      if (!validate292(data.targets, {
        instancePath: instancePath + "/targets",
        parentData: data,
        parentDataProperty: "targets",
        rootData
      })) {
        vErrors = vErrors === null ? validate292.errors : vErrors.concat(validate292.errors);
        errors = vErrors.length;
      }
    }
  }
  validate276.errors = vErrors;
  return errors === 0;
}
const schema90 = {
  "maxLength": 63,
  "type": "string"
};
import func2 from "@kubernetes-models/validate/runtime/ucs2length";
function validate305(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (func2(data) > 63) {
      const err0 = {
        instancePath,
        schemaPath: "#/maxLength",
        keyword: "maxLength",
        params: {
          limit: 63
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
  validate305.errors = vErrors;
  return errors === 0;
}
const schema91 = {
  "properties": {
    "allowExistingViolations": {
      "$ref": "XI8SHPWBW6IRtzOhSeom8NHPNafxnM7Xgk3N9ZeNk"
    },
    "anyPattern": {
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    },
    "assert": {
      "$ref": "wnCl8zCvz1PLbyEivJTcktRgDZuzOGT9FYulvrA2T8w"
    },
    "cel": {
      "$ref": "AagBJHVo6ekoRWAnZbZR5PPsRCvzRrlp2FmBVynDlk"
    },
    "deny": {
      "$ref": "6uExuTeWoJhQaNitm2nStvJUTdSFi08cx3h8rTustGg"
    },
    "failureAction": {
      "$ref": "SHhFpSPnXWXMxwDPH3mDzj8HSTlYspEQZjmJQty4bCk"
    },
    "failureActionOverrides": {
      "$ref": "8iO2DySW0k6A2lniI1JrfeHVALJTY3jFhPn2b2lZs"
    },
    "foreach": {
      "$ref": "gtzn4LQuBXUVwVZtVgVUUBZNZuFWWXZbM5m5FXq1Sc"
    },
    "manifests": {
      "$ref": "bzUERAikpYYvF5iQ5SPYf76ndXULXcXLOxTofXj04"
    },
    "message": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "pattern": {
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    },
    "podSecurity": {
      "$ref": "aYPnZvi10uLXc1Uim0y3nLpRUehvL1QoDN5jf51Qoc"
    }
  },
  "type": "object",
  "nullable": true
};
const schema92 = {
  "type": "object",
  "properties": {},
  "nullable": true
};
function validate313(data, {
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
  validate313.errors = vErrors;
  return errors === 0;
}
const schema93 = {
  "properties": {
    "auditAnnotations": {
      "$ref": "bMa2QDFggjISa5u3yJeBcHDb08zdI43mvHNAmu35Os"
    },
    "expressions": {
      "$ref": "6PHB9YJQzxGxU34HQ9jQWX0UXGIkrO9eD6JKleaU"
    },
    "generate": {
      "$ref": "gEUOOhuZefzFQPAU2P6REZY1YYmpGc0TVbLahK1eos"
    },
    "paramKind": {
      "$ref": "1jJ8oAgwx7hKcGIgfYEaWWwm9qrhy2TeBMHX67nA"
    },
    "paramRef": {
      "$ref": "IAIvos7CNhQTwOVcNWuZNYaYyUF7CB45eLfo0vZlA"
    },
    "variables": {
      "$ref": "bxlmPT3tMA6XyUHA7UtqO7C8DLouzgYedqVNg1I30"
    }
  },
  "type": "object",
  "nullable": true
};
const schema94 = {
  "items": {
    "$ref": "xZOYWZkLRJ4abKweFczHLWvriGoLLUBtQWFuNjoQBYU"
  },
  "type": "array",
  "nullable": true
};
const schema95 = {
  "properties": {
    "key": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "valueExpression": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["key", "valueExpression"],
  "type": "object"
};
function validate317(data, {
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
    if (data.valueExpression === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "valueExpression"
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
    if (data.valueExpression !== undefined) {
      if (!validate23(data.valueExpression, {
        instancePath: instancePath + "/valueExpression",
        parentData: data,
        parentDataProperty: "valueExpression",
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
  validate317.errors = vErrors;
  return errors === 0;
}
function validate316(data, {
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
      if (!validate317(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate317.errors : vErrors.concat(validate317.errors);
        errors = vErrors.length;
      }
    }
  }
  validate316.errors = vErrors;
  return errors === 0;
}
const schema96 = {
  "items": {
    "$ref": "6GRveVda6xcoAF1kyHI9z1H6N1liGqksiGix1VmHQ"
  },
  "type": "array",
  "nullable": true
};
const schema97 = {
  "properties": {
    "expression": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "message": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "messageExpression": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "reason": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["expression"],
  "type": "object"
};
function validate323(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.expression === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "expression"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.expression !== undefined) {
      if (!validate23(data.expression, {
        instancePath: instancePath + "/expression",
        parentData: data,
        parentDataProperty: "expression",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.message !== undefined) {
      if (!validate25(data.message, {
        instancePath: instancePath + "/message",
        parentData: data,
        parentDataProperty: "message",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.messageExpression !== undefined) {
      if (!validate25(data.messageExpression, {
        instancePath: instancePath + "/messageExpression",
        parentData: data,
        parentDataProperty: "messageExpression",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.reason !== undefined) {
      if (!validate25(data.reason, {
        instancePath: instancePath + "/reason",
        parentData: data,
        parentDataProperty: "reason",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
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
  validate323.errors = vErrors;
  return errors === 0;
}
function validate322(data, {
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
      if (!validate323(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate323.errors : vErrors.concat(validate323.errors);
        errors = vErrors.length;
      }
    }
  }
  validate322.errors = vErrors;
  return errors === 0;
}
const schema98 = {
  "properties": {
    "apiVersion": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "kind": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate331(data, {
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
    if (data.apiVersion !== undefined) {
      if (!validate25(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate25(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate331.errors = vErrors;
  return errors === 0;
}
const schema99 = {
  "properties": {
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "parameterNotFoundAction": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "selector": {
      "$ref": "Zjt3HFRfql15zSZzpouBNTusTEhVu3UqWLOK7EP6U"
    }
  },
  "type": "object",
  "nullable": true
};
function validate335(data, {
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
      if (!validate25(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespace !== undefined) {
      if (!validate25(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.parameterNotFoundAction !== undefined) {
      if (!validate25(data.parameterNotFoundAction, {
        instancePath: instancePath + "/parameterNotFoundAction",
        parentData: data,
        parentDataProperty: "parameterNotFoundAction",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.selector !== undefined) {
      if (!validate30(data.selector, {
        instancePath: instancePath + "/selector",
        parentData: data,
        parentDataProperty: "selector",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
  }
  validate335.errors = vErrors;
  return errors === 0;
}
function validate315(data, {
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
    if (data.auditAnnotations !== undefined) {
      if (!validate316(data.auditAnnotations, {
        instancePath: instancePath + "/auditAnnotations",
        parentData: data,
        parentDataProperty: "auditAnnotations",
        rootData
      })) {
        vErrors = vErrors === null ? validate316.errors : vErrors.concat(validate316.errors);
        errors = vErrors.length;
      }
    }
    if (data.expressions !== undefined) {
      if (!validate322(data.expressions, {
        instancePath: instancePath + "/expressions",
        parentData: data,
        parentDataProperty: "expressions",
        rootData
      })) {
        vErrors = vErrors === null ? validate322.errors : vErrors.concat(validate322.errors);
        errors = vErrors.length;
      }
    }
    if (data.generate !== undefined) {
      if (!validate148(data.generate, {
        instancePath: instancePath + "/generate",
        parentData: data,
        parentDataProperty: "generate",
        rootData
      })) {
        vErrors = vErrors === null ? validate148.errors : vErrors.concat(validate148.errors);
        errors = vErrors.length;
      }
    }
    if (data.paramKind !== undefined) {
      if (!validate331(data.paramKind, {
        instancePath: instancePath + "/paramKind",
        parentData: data,
        parentDataProperty: "paramKind",
        rootData
      })) {
        vErrors = vErrors === null ? validate331.errors : vErrors.concat(validate331.errors);
        errors = vErrors.length;
      }
    }
    if (data.paramRef !== undefined) {
      if (!validate335(data.paramRef, {
        instancePath: instancePath + "/paramRef",
        parentData: data,
        parentDataProperty: "paramRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate335.errors : vErrors.concat(validate335.errors);
        errors = vErrors.length;
      }
    }
    if (data.variables !== undefined) {
      if (!validate149(data.variables, {
        instancePath: instancePath + "/variables",
        parentData: data,
        parentDataProperty: "variables",
        rootData
      })) {
        vErrors = vErrors === null ? validate149.errors : vErrors.concat(validate149.errors);
        errors = vErrors.length;
      }
    }
  }
  validate315.errors = vErrors;
  return errors === 0;
}
const schema55 = {
  "properties": {
    "conditions": {
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    }
  },
  "type": "object",
  "nullable": true
};
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
    if (data.conditions !== undefined) {
      if (!validate24(data.conditions, {
        instancePath: instancePath + "/conditions",
        parentData: data,
        parentDataProperty: "conditions",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate154.errors = vErrors;
  return errors === 0;
}
const schema68 = {
  "enum": ["Audit", "Enforce"],
  "type": "string",
  "nullable": true
};
function validate205(data, {
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
  if (!(data === "Audit" || data === "Enforce")) {
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
  validate205.errors = vErrors;
  return errors === 0;
}
const schema69 = {
  "items": {
    "$ref": "nl8oVLPV5NF5YFOgwyKGiwKpXpRFvsTs4GwJsZkn4EU"
  },
  "type": "array",
  "nullable": true
};
const schema70 = {
  "properties": {
    "action": {
      "$ref": "qrk0VuWyFguLNq4cUWPUXvMYGqMJ3aqiMXmymfokEM"
    },
    "namespaceSelector": {
      "$ref": "Zjt3HFRfql15zSZzpouBNTusTEhVu3UqWLOK7EP6U"
    },
    "namespaces": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    }
  },
  "type": "object"
};
const schema71 = {
  "enum": ["audit", "enforce", "Audit", "Enforce"],
  "type": "string",
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
  if (!(data === "audit" || data === "enforce" || data === "Audit" || data === "Enforce")) {
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
    if (data.action !== undefined) {
      if (!validate208(data.action, {
        instancePath: instancePath + "/action",
        parentData: data,
        parentDataProperty: "action",
        rootData
      })) {
        vErrors = vErrors === null ? validate208.errors : vErrors.concat(validate208.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespaceSelector !== undefined) {
      if (!validate30(data.namespaceSelector, {
        instancePath: instancePath + "/namespaceSelector",
        parentData: data,
        parentDataProperty: "namespaceSelector",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespaces !== undefined) {
      if (!validate26(data.namespaces, {
        instancePath: instancePath + "/namespaces",
        parentData: data,
        parentDataProperty: "namespaces",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
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
const schema100 = {
  "items": {
    "$ref": "gaCZoUrK1fnzGkumtc4vJhaBEw2Yz7wfeBp2JJAPjU"
  },
  "type": "array",
  "nullable": true
};
const schema101 = {
  "properties": {
    "anyPattern": {
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    },
    "context": {
      "$ref": "xGIbk6JE1HQMM9t1lPlRnT3Qhel3Z3fnt1HDPE0t1Hk"
    },
    "deny": {
      "$ref": "6uExuTeWoJhQaNitm2nStvJUTdSFi08cx3h8rTustGg"
    },
    "elementScope": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "foreach": {
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    },
    "list": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "pattern": {
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    },
    "preconditions": {
      "$ref": "8ejS6G8Z1YqFKNfapt2fl1tv6p05ZCWwPfWINsb4ilc"
    }
  },
  "type": "object"
};
function validate347(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.anyPattern !== undefined) {
      if (!validate24(data.anyPattern, {
        instancePath: instancePath + "/anyPattern",
        parentData: data,
        parentDataProperty: "anyPattern",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.context !== undefined) {
      if (!validate74(data.context, {
        instancePath: instancePath + "/context",
        parentData: data,
        parentDataProperty: "context",
        rootData
      })) {
        vErrors = vErrors === null ? validate74.errors : vErrors.concat(validate74.errors);
        errors = vErrors.length;
      }
    }
    if (data.deny !== undefined) {
      if (!validate154(data.deny, {
        instancePath: instancePath + "/deny",
        parentData: data,
        parentDataProperty: "deny",
        rootData
      })) {
        vErrors = vErrors === null ? validate154.errors : vErrors.concat(validate154.errors);
        errors = vErrors.length;
      }
    }
    if (data.elementScope !== undefined) {
      if (!validate22(data.elementScope, {
        instancePath: instancePath + "/elementScope",
        parentData: data,
        parentDataProperty: "elementScope",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.foreach !== undefined) {
      if (!validate24(data.foreach, {
        instancePath: instancePath + "/foreach",
        parentData: data,
        parentDataProperty: "foreach",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.list !== undefined) {
      if (!validate25(data.list, {
        instancePath: instancePath + "/list",
        parentData: data,
        parentDataProperty: "list",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.pattern !== undefined) {
      if (!validate24(data.pattern, {
        instancePath: instancePath + "/pattern",
        parentData: data,
        parentDataProperty: "pattern",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.preconditions !== undefined) {
      if (!validate145(data.preconditions, {
        instancePath: instancePath + "/preconditions",
        parentData: data,
        parentDataProperty: "preconditions",
        rootData
      })) {
        vErrors = vErrors === null ? validate145.errors : vErrors.concat(validate145.errors);
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
  validate347.errors = vErrors;
  return errors === 0;
}
function validate346(data, {
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
      if (!validate347(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate347.errors : vErrors.concat(validate347.errors);
        errors = vErrors.length;
      }
    }
  }
  validate346.errors = vErrors;
  return errors === 0;
}
const schema102 = {
  "properties": {
    "annotationDomain": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "attestors": {
      "$ref": "FJ6MbBkGby32y1AvSodcYPVf8uHWOPtIgwhyzQiWnM"
    },
    "dryRun": {
      "$ref": "4jf72efG0HPYQv9gqBMTlXugOgnCTmutPeRHa6LpAs"
    },
    "ignoreFields": {
      "$ref": "BKoNvwN9fJqpFEAKRHpMESGkA8n6nAAkvb5Dh8WLQ8"
    },
    "repository": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema59 = {
  "items": {
    "$ref": "YpgydXGPXkKeGZgXcIHhR0UZBFsbituxbEtfOqq8"
  },
  "type": "array",
  "nullable": true
};
const schema60 = {
  "properties": {
    "count": {
      "$ref": "W0lpfNpopiiryJpdaW8T5ftPu9NVFOx3spCwCqsKM0"
    },
    "entries": {
      "$ref": "LhfY6LxEB3tTVRESrEheo7CMbphV0sPREaAHAHZXJek"
    }
  },
  "type": "object"
};
const schema61 = {
  "type": "integer",
  "minimum": 1,
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
  validate167.errors = vErrors;
  return errors === 0;
}
const schema62 = {
  "items": {
    "$ref": "ULkNivYXVq5mn49g4GNOtwlFVnbTPfJQJGIkNGHJA"
  },
  "type": "array",
  "nullable": true
};
const schema63 = {
  "properties": {
    "annotations": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "attestor": {
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    },
    "certificates": {
      "$ref": "FWRxaKVwPLGLygj14DpqEFEpYI8MctONKMzVAT5t3Jg"
    },
    "keyless": {
      "$ref": "JzdLZApGQRym4CMRINeRor2afICt5LQ9Jq7UAsHWMR0"
    },
    "keys": {
      "$ref": "r2lvsmooLHLd5TgUqXcqq2jtMf5FTFybMraQRyynE"
    },
    "repository": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "signatureAlgorithm": {
      "$ref": "NwCUMg2Y6FdMBZqdXsjp9wWhlBw5IuWxZqpDi09lEI"
    }
  },
  "type": "object"
};
const schema64 = {
  "properties": {
    "cert": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "certChain": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "ctlog": {
      "$ref": "Ei4aLFBGyOUoy1KFX4jXsZclL1H6dZmd3TxhNcaHQ"
    },
    "rekor": {
      "$ref": "B9VxjMwzDo11pGw7gwazGXpV9NgYYafuaO9JY0AkGpM"
    }
  },
  "type": "object",
  "nullable": true
};
const schema56 = {
  "properties": {
    "ignoreSCT": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "pubkey": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "tsaCertChain": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
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
    if (data.ignoreSCT !== undefined) {
      if (!validate22(data.ignoreSCT, {
        instancePath: instancePath + "/ignoreSCT",
        parentData: data,
        parentDataProperty: "ignoreSCT",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.pubkey !== undefined) {
      if (!validate25(data.pubkey, {
        instancePath: instancePath + "/pubkey",
        parentData: data,
        parentDataProperty: "pubkey",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.tsaCertChain !== undefined) {
      if (!validate25(data.tsaCertChain, {
        instancePath: instancePath + "/tsaCertChain",
        parentData: data,
        parentDataProperty: "tsaCertChain",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate156.errors = vErrors;
  return errors === 0;
}
const schema57 = {
  "properties": {
    "ignoreTlog": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "pubkey": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "url": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
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
    if (data.ignoreTlog !== undefined) {
      if (!validate22(data.ignoreTlog, {
        instancePath: instancePath + "/ignoreTlog",
        parentData: data,
        parentDataProperty: "ignoreTlog",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.pubkey !== undefined) {
      if (!validate25(data.pubkey, {
        instancePath: instancePath + "/pubkey",
        parentData: data,
        parentDataProperty: "pubkey",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.url !== undefined) {
      if (!validate25(data.url, {
        instancePath: instancePath + "/url",
        parentData: data,
        parentDataProperty: "url",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate160.errors = vErrors;
  return errors === 0;
}
function validate173(data, {
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
    if (data.cert !== undefined) {
      if (!validate25(data.cert, {
        instancePath: instancePath + "/cert",
        parentData: data,
        parentDataProperty: "cert",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.certChain !== undefined) {
      if (!validate25(data.certChain, {
        instancePath: instancePath + "/certChain",
        parentData: data,
        parentDataProperty: "certChain",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.ctlog !== undefined) {
      if (!validate156(data.ctlog, {
        instancePath: instancePath + "/ctlog",
        parentData: data,
        parentDataProperty: "ctlog",
        rootData
      })) {
        vErrors = vErrors === null ? validate156.errors : vErrors.concat(validate156.errors);
        errors = vErrors.length;
      }
    }
    if (data.rekor !== undefined) {
      if (!validate160(data.rekor, {
        instancePath: instancePath + "/rekor",
        parentData: data,
        parentDataProperty: "rekor",
        rootData
      })) {
        vErrors = vErrors === null ? validate160.errors : vErrors.concat(validate160.errors);
        errors = vErrors.length;
      }
    }
  }
  validate173.errors = vErrors;
  return errors === 0;
}
const schema65 = {
  "properties": {
    "additionalExtensions": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "ctlog": {
      "$ref": "Ei4aLFBGyOUoy1KFX4jXsZclL1H6dZmd3TxhNcaHQ"
    },
    "issuer": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "issuerRegExp": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "rekor": {
      "$ref": "B9VxjMwzDo11pGw7gwazGXpV9NgYYafuaO9JY0AkGpM"
    },
    "roots": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "subject": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "subjectRegExp": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate179(data, {
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
    if (data.additionalExtensions !== undefined) {
      if (!validate28(data.additionalExtensions, {
        instancePath: instancePath + "/additionalExtensions",
        parentData: data,
        parentDataProperty: "additionalExtensions",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.ctlog !== undefined) {
      if (!validate156(data.ctlog, {
        instancePath: instancePath + "/ctlog",
        parentData: data,
        parentDataProperty: "ctlog",
        rootData
      })) {
        vErrors = vErrors === null ? validate156.errors : vErrors.concat(validate156.errors);
        errors = vErrors.length;
      }
    }
    if (data.issuer !== undefined) {
      if (!validate25(data.issuer, {
        instancePath: instancePath + "/issuer",
        parentData: data,
        parentDataProperty: "issuer",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.issuerRegExp !== undefined) {
      if (!validate25(data.issuerRegExp, {
        instancePath: instancePath + "/issuerRegExp",
        parentData: data,
        parentDataProperty: "issuerRegExp",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.rekor !== undefined) {
      if (!validate160(data.rekor, {
        instancePath: instancePath + "/rekor",
        parentData: data,
        parentDataProperty: "rekor",
        rootData
      })) {
        vErrors = vErrors === null ? validate160.errors : vErrors.concat(validate160.errors);
        errors = vErrors.length;
      }
    }
    if (data.roots !== undefined) {
      if (!validate25(data.roots, {
        instancePath: instancePath + "/roots",
        parentData: data,
        parentDataProperty: "roots",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.subject !== undefined) {
      if (!validate25(data.subject, {
        instancePath: instancePath + "/subject",
        parentData: data,
        parentDataProperty: "subject",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.subjectRegExp !== undefined) {
      if (!validate25(data.subjectRegExp, {
        instancePath: instancePath + "/subjectRegExp",
        parentData: data,
        parentDataProperty: "subjectRegExp",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate179.errors = vErrors;
  return errors === 0;
}
const schema66 = {
  "properties": {
    "ctlog": {
      "$ref": "Ei4aLFBGyOUoy1KFX4jXsZclL1H6dZmd3TxhNcaHQ"
    },
    "kms": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "publicKeys": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "rekor": {
      "$ref": "B9VxjMwzDo11pGw7gwazGXpV9NgYYafuaO9JY0AkGpM"
    },
    "secret": {
      "$ref": "K4n8m2gxzQbI01KjvUk3z4aItBxoV2jR9C8qwDadqg"
    },
    "signatureAlgorithm": {
      "$ref": "NwCUMg2Y6FdMBZqdXsjp9wWhlBw5IuWxZqpDi09lEI"
    }
  },
  "type": "object",
  "nullable": true
};
const schema67 = {
  "properties": {
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "namespace": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["name", "namespace"],
  "type": "object",
  "nullable": true
};
function validate194(data, {
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
    if (data.namespace === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "namespace"
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
  validate194.errors = vErrors;
  return errors === 0;
}
const schema58 = {
  "default": "sha256",
  "type": "string",
  "nullable": true
};
function validate164(data, {
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
  validate164.errors = vErrors;
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
    if (data.ctlog !== undefined) {
      if (!validate156(data.ctlog, {
        instancePath: instancePath + "/ctlog",
        parentData: data,
        parentDataProperty: "ctlog",
        rootData
      })) {
        vErrors = vErrors === null ? validate156.errors : vErrors.concat(validate156.errors);
        errors = vErrors.length;
      }
    }
    if (data.kms !== undefined) {
      if (!validate25(data.kms, {
        instancePath: instancePath + "/kms",
        parentData: data,
        parentDataProperty: "kms",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.publicKeys !== undefined) {
      if (!validate25(data.publicKeys, {
        instancePath: instancePath + "/publicKeys",
        parentData: data,
        parentDataProperty: "publicKeys",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.rekor !== undefined) {
      if (!validate160(data.rekor, {
        instancePath: instancePath + "/rekor",
        parentData: data,
        parentDataProperty: "rekor",
        rootData
      })) {
        vErrors = vErrors === null ? validate160.errors : vErrors.concat(validate160.errors);
        errors = vErrors.length;
      }
    }
    if (data.secret !== undefined) {
      if (!validate194(data.secret, {
        instancePath: instancePath + "/secret",
        parentData: data,
        parentDataProperty: "secret",
        rootData
      })) {
        vErrors = vErrors === null ? validate194.errors : vErrors.concat(validate194.errors);
        errors = vErrors.length;
      }
    }
    if (data.signatureAlgorithm !== undefined) {
      if (!validate164(data.signatureAlgorithm, {
        instancePath: instancePath + "/signatureAlgorithm",
        parentData: data,
        parentDataProperty: "signatureAlgorithm",
        rootData
      })) {
        vErrors = vErrors === null ? validate164.errors : vErrors.concat(validate164.errors);
        errors = vErrors.length;
      }
    }
  }
  validate189.errors = vErrors;
  return errors === 0;
}
function validate170(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.annotations !== undefined) {
      if (!validate28(data.annotations, {
        instancePath: instancePath + "/annotations",
        parentData: data,
        parentDataProperty: "annotations",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.attestor !== undefined) {
      if (!validate24(data.attestor, {
        instancePath: instancePath + "/attestor",
        parentData: data,
        parentDataProperty: "attestor",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.certificates !== undefined) {
      if (!validate173(data.certificates, {
        instancePath: instancePath + "/certificates",
        parentData: data,
        parentDataProperty: "certificates",
        rootData
      })) {
        vErrors = vErrors === null ? validate173.errors : vErrors.concat(validate173.errors);
        errors = vErrors.length;
      }
    }
    if (data.keyless !== undefined) {
      if (!validate179(data.keyless, {
        instancePath: instancePath + "/keyless",
        parentData: data,
        parentDataProperty: "keyless",
        rootData
      })) {
        vErrors = vErrors === null ? validate179.errors : vErrors.concat(validate179.errors);
        errors = vErrors.length;
      }
    }
    if (data.keys !== undefined) {
      if (!validate189(data.keys, {
        instancePath: instancePath + "/keys",
        parentData: data,
        parentDataProperty: "keys",
        rootData
      })) {
        vErrors = vErrors === null ? validate189.errors : vErrors.concat(validate189.errors);
        errors = vErrors.length;
      }
    }
    if (data.repository !== undefined) {
      if (!validate25(data.repository, {
        instancePath: instancePath + "/repository",
        parentData: data,
        parentDataProperty: "repository",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.signatureAlgorithm !== undefined) {
      if (!validate164(data.signatureAlgorithm, {
        instancePath: instancePath + "/signatureAlgorithm",
        parentData: data,
        parentDataProperty: "signatureAlgorithm",
        rootData
      })) {
        vErrors = vErrors === null ? validate164.errors : vErrors.concat(validate164.errors);
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
  validate170.errors = vErrors;
  return errors === 0;
}
function validate169(data, {
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
      if (!validate170(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate170.errors : vErrors.concat(validate170.errors);
        errors = vErrors.length;
      }
    }
  }
  validate169.errors = vErrors;
  return errors === 0;
}
function validate166(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.count !== undefined) {
      if (!validate167(data.count, {
        instancePath: instancePath + "/count",
        parentData: data,
        parentDataProperty: "count",
        rootData
      })) {
        vErrors = vErrors === null ? validate167.errors : vErrors.concat(validate167.errors);
        errors = vErrors.length;
      }
    }
    if (data.entries !== undefined) {
      if (!validate169(data.entries, {
        instancePath: instancePath + "/entries",
        parentData: data,
        parentDataProperty: "entries",
        rootData
      })) {
        vErrors = vErrors === null ? validate169.errors : vErrors.concat(validate169.errors);
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
  validate166.errors = vErrors;
  return errors === 0;
}
function validate165(data, {
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
      if (!validate166(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate166.errors : vErrors.concat(validate166.errors);
        errors = vErrors.length;
      }
    }
  }
  validate165.errors = vErrors;
  return errors === 0;
}
const schema103 = {
  "properties": {
    "enable": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
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
    if (data.enable !== undefined) {
      if (!validate22(data.enable, {
        instancePath: instancePath + "/enable",
        parentData: data,
        parentDataProperty: "enable",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespace !== undefined) {
      if (!validate25(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate361.errors = vErrors;
  return errors === 0;
}
const schema104 = {
  "items": {
    "$ref": "H9pIp5oacCuf26T9hTnddvs0NiZd7FBILGvsuLkCs"
  },
  "type": "array",
  "nullable": true
};
const schema105 = {
  "properties": {
    "fields": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "objects": {
      "$ref": "wzYY0CI8Jm3Bqtd41gmBzbus1QqDGfoRD5wQDWjg"
    }
  },
  "type": "object"
};
const schema106 = {
  "items": {
    "$ref": "c7WjVSNMtfMRZxhaxmDoTXvZDI2Q8DuPY6SDLeKjjY"
  },
  "type": "array",
  "nullable": true
};
const schema107 = {
  "properties": {
    "group": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "kind": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "version": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
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
    if (data.group !== undefined) {
      if (!validate25(data.group, {
        instancePath: instancePath + "/group",
        parentData: data,
        parentDataProperty: "group",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate25(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate25(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespace !== undefined) {
      if (!validate25(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.version !== undefined) {
      if (!validate25(data.version, {
        instancePath: instancePath + "/version",
        parentData: data,
        parentDataProperty: "version",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
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
function validate366(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.fields !== undefined) {
      if (!validate26(data.fields, {
        instancePath: instancePath + "/fields",
        parentData: data,
        parentDataProperty: "fields",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.objects !== undefined) {
      if (!validate368(data.objects, {
        instancePath: instancePath + "/objects",
        parentData: data,
        parentDataProperty: "objects",
        rootData
      })) {
        vErrors = vErrors === null ? validate368.errors : vErrors.concat(validate368.errors);
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
  validate366.errors = vErrors;
  return errors === 0;
}
function validate365(data, {
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
      if (!validate366(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate366.errors : vErrors.concat(validate366.errors);
        errors = vErrors.length;
      }
    }
  }
  validate365.errors = vErrors;
  return errors === 0;
}
function validate358(data, {
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
    if (data.annotationDomain !== undefined) {
      if (!validate25(data.annotationDomain, {
        instancePath: instancePath + "/annotationDomain",
        parentData: data,
        parentDataProperty: "annotationDomain",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.attestors !== undefined) {
      if (!validate165(data.attestors, {
        instancePath: instancePath + "/attestors",
        parentData: data,
        parentDataProperty: "attestors",
        rootData
      })) {
        vErrors = vErrors === null ? validate165.errors : vErrors.concat(validate165.errors);
        errors = vErrors.length;
      }
    }
    if (data.dryRun !== undefined) {
      if (!validate361(data.dryRun, {
        instancePath: instancePath + "/dryRun",
        parentData: data,
        parentDataProperty: "dryRun",
        rootData
      })) {
        vErrors = vErrors === null ? validate361.errors : vErrors.concat(validate361.errors);
        errors = vErrors.length;
      }
    }
    if (data.ignoreFields !== undefined) {
      if (!validate365(data.ignoreFields, {
        instancePath: instancePath + "/ignoreFields",
        parentData: data,
        parentDataProperty: "ignoreFields",
        rootData
      })) {
        vErrors = vErrors === null ? validate365.errors : vErrors.concat(validate365.errors);
        errors = vErrors.length;
      }
    }
    if (data.repository !== undefined) {
      if (!validate25(data.repository, {
        instancePath: instancePath + "/repository",
        parentData: data,
        parentDataProperty: "repository",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate358.errors = vErrors;
  return errors === 0;
}
const schema108 = {
  "properties": {
    "exclude": {
      "$ref": "QOBuENV1KE8mpR29jYZgpTQpE5k1Qztfb5AjZ9fnTnI"
    },
    "level": {
      "$ref": "oM76r6gwUdc6xmP0w9zXHVL1zx82lZZr9vEiPqTI5CA"
    },
    "version": {
      "$ref": "LgpFm3zOCdcWpE8WOptdgS3jF06mlAkUakjLjr7Dhw"
    }
  },
  "type": "object",
  "nullable": true
};
const schema109 = {
  "items": {
    "$ref": "QI6gMitrrylxiaCM15mADAMDg44UuTZe7eY7Lj1Qt4"
  },
  "type": "array",
  "nullable": true
};
const schema110 = {
  "properties": {
    "controlName": {
      "$ref": "DYSMdqIGrl9kIiafGQMervgIUP8UdxZrkLgInChOIJc"
    },
    "images": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "restrictedField": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "values": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    }
  },
  "required": ["controlName"],
  "type": "object"
};
const schema111 = {
  "enum": ["HostProcess", "Host Namespaces", "Privileged Containers", "Capabilities", "HostPath Volumes", "Host Ports", "AppArmor", "SELinux", "/proc Mount Type", "Seccomp", "Sysctls", "Volume Types", "Privilege Escalation", "Running as Non-root", "Running as Non-root user"],
  "type": "string"
};
function validate386(data, {
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
  if (!(data === "HostProcess" || data === "Host Namespaces" || data === "Privileged Containers" || data === "Capabilities" || data === "HostPath Volumes" || data === "Host Ports" || data === "AppArmor" || data === "SELinux" || data === "/proc Mount Type" || data === "Seccomp" || data === "Sysctls" || data === "Volume Types" || data === "Privilege Escalation" || data === "Running as Non-root" || data === "Running as Non-root user")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema111.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate386.errors = vErrors;
  return errors === 0;
}
function validate385(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.controlName === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "controlName"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.controlName !== undefined) {
      if (!validate386(data.controlName, {
        instancePath: instancePath + "/controlName",
        parentData: data,
        parentDataProperty: "controlName",
        rootData
      })) {
        vErrors = vErrors === null ? validate386.errors : vErrors.concat(validate386.errors);
        errors = vErrors.length;
      }
    }
    if (data.images !== undefined) {
      if (!validate26(data.images, {
        instancePath: instancePath + "/images",
        parentData: data,
        parentDataProperty: "images",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.restrictedField !== undefined) {
      if (!validate25(data.restrictedField, {
        instancePath: instancePath + "/restrictedField",
        parentData: data,
        parentDataProperty: "restrictedField",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.values !== undefined) {
      if (!validate26(data.values, {
        instancePath: instancePath + "/values",
        parentData: data,
        parentDataProperty: "values",
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
  validate385.errors = vErrors;
  return errors === 0;
}
function validate384(data, {
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
      if (!validate385(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate385.errors : vErrors.concat(validate385.errors);
        errors = vErrors.length;
      }
    }
  }
  validate384.errors = vErrors;
  return errors === 0;
}
const schema112 = {
  "enum": ["privileged", "baseline", "restricted"],
  "type": "string",
  "nullable": true
};
function validate393(data, {
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
  if (!(data === "privileged" || data === "baseline" || data === "restricted")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema112.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate393.errors = vErrors;
  return errors === 0;
}
const schema113 = {
  "enum": ["v1.19", "v1.20", "v1.21", "v1.22", "v1.23", "v1.24", "v1.25", "v1.26", "v1.27", "v1.28", "v1.29", "latest"],
  "type": "string",
  "nullable": true
};
function validate395(data, {
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
  if (!(data === "v1.19" || data === "v1.20" || data === "v1.21" || data === "v1.22" || data === "v1.23" || data === "v1.24" || data === "v1.25" || data === "v1.26" || data === "v1.27" || data === "v1.28" || data === "v1.29" || data === "latest")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema113.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate395.errors = vErrors;
  return errors === 0;
}
function validate383(data, {
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
    if (data.exclude !== undefined) {
      if (!validate384(data.exclude, {
        instancePath: instancePath + "/exclude",
        parentData: data,
        parentDataProperty: "exclude",
        rootData
      })) {
        vErrors = vErrors === null ? validate384.errors : vErrors.concat(validate384.errors);
        errors = vErrors.length;
      }
    }
    if (data.level !== undefined) {
      if (!validate393(data.level, {
        instancePath: instancePath + "/level",
        parentData: data,
        parentDataProperty: "level",
        rootData
      })) {
        vErrors = vErrors === null ? validate393.errors : vErrors.concat(validate393.errors);
        errors = vErrors.length;
      }
    }
    if (data.version !== undefined) {
      if (!validate395(data.version, {
        instancePath: instancePath + "/version",
        parentData: data,
        parentDataProperty: "version",
        rootData
      })) {
        vErrors = vErrors === null ? validate395.errors : vErrors.concat(validate395.errors);
        errors = vErrors.length;
      }
    }
  }
  validate383.errors = vErrors;
  return errors === 0;
}
function validate310(data, {
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
    if (data.allowExistingViolations !== undefined) {
      if (!validate21(data.allowExistingViolations, {
        instancePath: instancePath + "/allowExistingViolations",
        parentData: data,
        parentDataProperty: "allowExistingViolations",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.anyPattern !== undefined) {
      if (!validate24(data.anyPattern, {
        instancePath: instancePath + "/anyPattern",
        parentData: data,
        parentDataProperty: "anyPattern",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.assert !== undefined) {
      if (!validate313(data.assert, {
        instancePath: instancePath + "/assert",
        parentData: data,
        parentDataProperty: "assert",
        rootData
      })) {
        vErrors = vErrors === null ? validate313.errors : vErrors.concat(validate313.errors);
        errors = vErrors.length;
      }
    }
    if (data.cel !== undefined) {
      if (!validate315(data.cel, {
        instancePath: instancePath + "/cel",
        parentData: data,
        parentDataProperty: "cel",
        rootData
      })) {
        vErrors = vErrors === null ? validate315.errors : vErrors.concat(validate315.errors);
        errors = vErrors.length;
      }
    }
    if (data.deny !== undefined) {
      if (!validate154(data.deny, {
        instancePath: instancePath + "/deny",
        parentData: data,
        parentDataProperty: "deny",
        rootData
      })) {
        vErrors = vErrors === null ? validate154.errors : vErrors.concat(validate154.errors);
        errors = vErrors.length;
      }
    }
    if (data.failureAction !== undefined) {
      if (!validate205(data.failureAction, {
        instancePath: instancePath + "/failureAction",
        parentData: data,
        parentDataProperty: "failureAction",
        rootData
      })) {
        vErrors = vErrors === null ? validate205.errors : vErrors.concat(validate205.errors);
        errors = vErrors.length;
      }
    }
    if (data.failureActionOverrides !== undefined) {
      if (!validate206(data.failureActionOverrides, {
        instancePath: instancePath + "/failureActionOverrides",
        parentData: data,
        parentDataProperty: "failureActionOverrides",
        rootData
      })) {
        vErrors = vErrors === null ? validate206.errors : vErrors.concat(validate206.errors);
        errors = vErrors.length;
      }
    }
    if (data.foreach !== undefined) {
      if (!validate346(data.foreach, {
        instancePath: instancePath + "/foreach",
        parentData: data,
        parentDataProperty: "foreach",
        rootData
      })) {
        vErrors = vErrors === null ? validate346.errors : vErrors.concat(validate346.errors);
        errors = vErrors.length;
      }
    }
    if (data.manifests !== undefined) {
      if (!validate358(data.manifests, {
        instancePath: instancePath + "/manifests",
        parentData: data,
        parentDataProperty: "manifests",
        rootData
      })) {
        vErrors = vErrors === null ? validate358.errors : vErrors.concat(validate358.errors);
        errors = vErrors.length;
      }
    }
    if (data.message !== undefined) {
      if (!validate25(data.message, {
        instancePath: instancePath + "/message",
        parentData: data,
        parentDataProperty: "message",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.pattern !== undefined) {
      if (!validate24(data.pattern, {
        instancePath: instancePath + "/pattern",
        parentData: data,
        parentDataProperty: "pattern",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.podSecurity !== undefined) {
      if (!validate383(data.podSecurity, {
        instancePath: instancePath + "/podSecurity",
        parentData: data,
        parentDataProperty: "podSecurity",
        rootData
      })) {
        vErrors = vErrors === null ? validate383.errors : vErrors.concat(validate383.errors);
        errors = vErrors.length;
      }
    }
  }
  validate310.errors = vErrors;
  return errors === 0;
}
const schema114 = {
  "items": {
    "$ref": "flLlGCYpEbyoIT1lQH5IrNFMYlKh7SuZzcOUd3Ec"
  },
  "type": "array",
  "nullable": true
};
const schema115 = {
  "properties": {
    "additionalExtensions": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "annotations": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "attestations": {
      "$ref": "tbERKommkIfFYKNcBy9k2mgznmqhtVD1FXjs6uxc"
    },
    "attestors": {
      "$ref": "FJ6MbBkGby32y1AvSodcYPVf8uHWOPtIgwhyzQiWnM"
    },
    "cosignOCI11": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "failureAction": {
      "$ref": "SHhFpSPnXWXMxwDPH3mDzj8HSTlYspEQZjmJQty4bCk"
    },
    "image": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "imageReferences": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "imageRegistryCredentials": {
      "$ref": "F0794A6YCgBrJnwYowOyi0F0OdNYdnZIY6W45Lp4"
    },
    "issuer": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "key": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "mutateDigest": {
      "$ref": "XI8SHPWBW6IRtzOhSeom8NHPNafxnM7Xgk3N9ZeNk"
    },
    "repository": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "required": {
      "$ref": "XI8SHPWBW6IRtzOhSeom8NHPNafxnM7Xgk3N9ZeNk"
    },
    "roots": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "skipImageReferences": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "subject": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "type": {
      "$ref": "siRnfLxnRKXIM9PDr40yPs6z9m0EIvI9FIBn8DsSbE"
    },
    "useCache": {
      "$ref": "XI8SHPWBW6IRtzOhSeom8NHPNafxnM7Xgk3N9ZeNk"
    },
    "validate": {
      "$ref": "d12SnVXpAJhVHqOvioAVMWN7FB1x7IxZVzOmhJUL4Ck"
    },
    "verifyDigest": {
      "$ref": "XI8SHPWBW6IRtzOhSeom8NHPNafxnM7Xgk3N9ZeNk"
    }
  },
  "type": "object"
};
const schema116 = {
  "items": {
    "$ref": "sSpdH4eOXEkMFzyy15ODbzaScyjdQ2hVsjsVsBAA2PY"
  },
  "type": "array",
  "nullable": true
};
const schema117 = {
  "properties": {
    "attestors": {
      "$ref": "FJ6MbBkGby32y1AvSodcYPVf8uHWOPtIgwhyzQiWnM"
    },
    "conditions": {
      "$ref": "wP84GcbU3XIrTNyoDBqTJBJ1KsJLPalLUxEwuRQXaPo"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "predicateType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "type": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
const schema118 = {
  "items": {
    "$ref": "uqrr0OtZCjpSf0ssOgQ03H0C3YVX0DP0YxNZZQGc"
  },
  "type": "array",
  "nullable": true
};
const schema119 = {
  "properties": {
    "all": {
      "$ref": "OluIzmGeNT1MkdNRf7A6Wx792FdYLXt1XHwjVQsc"
    },
    "any": {
      "$ref": "OluIzmGeNT1MkdNRf7A6Wx792FdYLXt1XHwjVQsc"
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
    if (data.all !== undefined) {
      if (!validate136(data.all, {
        instancePath: instancePath + "/all",
        parentData: data,
        parentDataProperty: "all",
        rootData
      })) {
        vErrors = vErrors === null ? validate136.errors : vErrors.concat(validate136.errors);
        errors = vErrors.length;
      }
    }
    if (data.any !== undefined) {
      if (!validate136(data.any, {
        instancePath: instancePath + "/any",
        parentData: data,
        parentDataProperty: "any",
        rootData
      })) {
        vErrors = vErrors === null ? validate136.errors : vErrors.concat(validate136.errors);
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
function validate404(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.attestors !== undefined) {
      if (!validate165(data.attestors, {
        instancePath: instancePath + "/attestors",
        parentData: data,
        parentDataProperty: "attestors",
        rootData
      })) {
        vErrors = vErrors === null ? validate165.errors : vErrors.concat(validate165.errors);
        errors = vErrors.length;
      }
    }
    if (data.conditions !== undefined) {
      if (!validate406(data.conditions, {
        instancePath: instancePath + "/conditions",
        parentData: data,
        parentDataProperty: "conditions",
        rootData
      })) {
        vErrors = vErrors === null ? validate406.errors : vErrors.concat(validate406.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate25(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.predicateType !== undefined) {
      if (!validate25(data.predicateType, {
        instancePath: instancePath + "/predicateType",
        parentData: data,
        parentDataProperty: "predicateType",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.type !== undefined) {
      if (!validate25(data.type, {
        instancePath: instancePath + "/type",
        parentData: data,
        parentDataProperty: "type",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
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
  validate404.errors = vErrors;
  return errors === 0;
}
function validate403(data, {
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
      if (!validate404(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate404.errors : vErrors.concat(validate404.errors);
        errors = vErrors.length;
      }
    }
  }
  validate403.errors = vErrors;
  return errors === 0;
}
const schema120 = {
  "enum": ["Cosign", "SigstoreBundle", "Notary"],
  "type": "string",
  "nullable": true
};
function validate431(data, {
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
  if (!(data === "Cosign" || data === "SigstoreBundle" || data === "Notary")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema120.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate431.errors = vErrors;
  return errors === 0;
}
const schema121 = {
  "properties": {
    "deny": {
      "$ref": "6uExuTeWoJhQaNitm2nStvJUTdSFi08cx3h8rTustGg"
    },
    "message": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate434(data, {
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
    if (data.deny !== undefined) {
      if (!validate154(data.deny, {
        instancePath: instancePath + "/deny",
        parentData: data,
        parentDataProperty: "deny",
        rootData
      })) {
        vErrors = vErrors === null ? validate154.errors : vErrors.concat(validate154.errors);
        errors = vErrors.length;
      }
    }
    if (data.message !== undefined) {
      if (!validate25(data.message, {
        instancePath: instancePath + "/message",
        parentData: data,
        parentDataProperty: "message",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate434.errors = vErrors;
  return errors === 0;
}
function validate400(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.additionalExtensions !== undefined) {
      if (!validate28(data.additionalExtensions, {
        instancePath: instancePath + "/additionalExtensions",
        parentData: data,
        parentDataProperty: "additionalExtensions",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.annotations !== undefined) {
      if (!validate28(data.annotations, {
        instancePath: instancePath + "/annotations",
        parentData: data,
        parentDataProperty: "annotations",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.attestations !== undefined) {
      if (!validate403(data.attestations, {
        instancePath: instancePath + "/attestations",
        parentData: data,
        parentDataProperty: "attestations",
        rootData
      })) {
        vErrors = vErrors === null ? validate403.errors : vErrors.concat(validate403.errors);
        errors = vErrors.length;
      }
    }
    if (data.attestors !== undefined) {
      if (!validate165(data.attestors, {
        instancePath: instancePath + "/attestors",
        parentData: data,
        parentDataProperty: "attestors",
        rootData
      })) {
        vErrors = vErrors === null ? validate165.errors : vErrors.concat(validate165.errors);
        errors = vErrors.length;
      }
    }
    if (data.cosignOCI11 !== undefined) {
      if (!validate22(data.cosignOCI11, {
        instancePath: instancePath + "/cosignOCI11",
        parentData: data,
        parentDataProperty: "cosignOCI11",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.failureAction !== undefined) {
      if (!validate205(data.failureAction, {
        instancePath: instancePath + "/failureAction",
        parentData: data,
        parentDataProperty: "failureAction",
        rootData
      })) {
        vErrors = vErrors === null ? validate205.errors : vErrors.concat(validate205.errors);
        errors = vErrors.length;
      }
    }
    if (data.image !== undefined) {
      if (!validate25(data.image, {
        instancePath: instancePath + "/image",
        parentData: data,
        parentDataProperty: "image",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.imageReferences !== undefined) {
      if (!validate26(data.imageReferences, {
        instancePath: instancePath + "/imageReferences",
        parentData: data,
        parentDataProperty: "imageReferences",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.imageRegistryCredentials !== undefined) {
      if (!validate118(data.imageRegistryCredentials, {
        instancePath: instancePath + "/imageRegistryCredentials",
        parentData: data,
        parentDataProperty: "imageRegistryCredentials",
        rootData
      })) {
        vErrors = vErrors === null ? validate118.errors : vErrors.concat(validate118.errors);
        errors = vErrors.length;
      }
    }
    if (data.issuer !== undefined) {
      if (!validate25(data.issuer, {
        instancePath: instancePath + "/issuer",
        parentData: data,
        parentDataProperty: "issuer",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.key !== undefined) {
      if (!validate25(data.key, {
        instancePath: instancePath + "/key",
        parentData: data,
        parentDataProperty: "key",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.mutateDigest !== undefined) {
      if (!validate21(data.mutateDigest, {
        instancePath: instancePath + "/mutateDigest",
        parentData: data,
        parentDataProperty: "mutateDigest",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.repository !== undefined) {
      if (!validate25(data.repository, {
        instancePath: instancePath + "/repository",
        parentData: data,
        parentDataProperty: "repository",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.required !== undefined) {
      if (!validate21(data.required, {
        instancePath: instancePath + "/required",
        parentData: data,
        parentDataProperty: "required",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.roots !== undefined) {
      if (!validate25(data.roots, {
        instancePath: instancePath + "/roots",
        parentData: data,
        parentDataProperty: "roots",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.skipImageReferences !== undefined) {
      if (!validate26(data.skipImageReferences, {
        instancePath: instancePath + "/skipImageReferences",
        parentData: data,
        parentDataProperty: "skipImageReferences",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.subject !== undefined) {
      if (!validate25(data.subject, {
        instancePath: instancePath + "/subject",
        parentData: data,
        parentDataProperty: "subject",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.type !== undefined) {
      if (!validate431(data.type, {
        instancePath: instancePath + "/type",
        parentData: data,
        parentDataProperty: "type",
        rootData
      })) {
        vErrors = vErrors === null ? validate431.errors : vErrors.concat(validate431.errors);
        errors = vErrors.length;
      }
    }
    if (data.useCache !== undefined) {
      if (!validate21(data.useCache, {
        instancePath: instancePath + "/useCache",
        parentData: data,
        parentDataProperty: "useCache",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.validate !== undefined) {
      if (!validate434(data.validate, {
        instancePath: instancePath + "/validate",
        parentData: data,
        parentDataProperty: "validate",
        rootData
      })) {
        vErrors = vErrors === null ? validate434.errors : vErrors.concat(validate434.errors);
        errors = vErrors.length;
      }
    }
    if (data.verifyDigest !== undefined) {
      if (!validate21(data.verifyDigest, {
        instancePath: instancePath + "/verifyDigest",
        parentData: data,
        parentDataProperty: "verifyDigest",
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
  validate400.errors = vErrors;
  return errors === 0;
}
function validate399(data, {
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
      if (!validate400(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate400.errors : vErrors.concat(validate400.errors);
        errors = vErrors.length;
      }
    }
  }
  validate399.errors = vErrors;
  return errors === 0;
}
function validate216(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.match === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "match"
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
    if (data.celPreconditions !== undefined) {
      if (!validate149(data.celPreconditions, {
        instancePath: instancePath + "/celPreconditions",
        parentData: data,
        parentDataProperty: "celPreconditions",
        rootData
      })) {
        vErrors = vErrors === null ? validate149.errors : vErrors.concat(validate149.errors);
        errors = vErrors.length;
      }
    }
    if (data.context !== undefined) {
      if (!validate74(data.context, {
        instancePath: instancePath + "/context",
        parentData: data,
        parentDataProperty: "context",
        rootData
      })) {
        vErrors = vErrors === null ? validate74.errors : vErrors.concat(validate74.errors);
        errors = vErrors.length;
      }
    }
    if (data.exclude !== undefined) {
      if (!validate219(data.exclude, {
        instancePath: instancePath + "/exclude",
        parentData: data,
        parentDataProperty: "exclude",
        rootData
      })) {
        vErrors = vErrors === null ? validate219.errors : vErrors.concat(validate219.errors);
        errors = vErrors.length;
      }
    }
    if (data.generate !== undefined) {
      if (!validate228(data.generate, {
        instancePath: instancePath + "/generate",
        parentData: data,
        parentDataProperty: "generate",
        rootData
      })) {
        vErrors = vErrors === null ? validate228.errors : vErrors.concat(validate228.errors);
        errors = vErrors.length;
      }
    }
    if (data.imageExtractors !== undefined) {
      if (!validate256(data.imageExtractors, {
        instancePath: instancePath + "/imageExtractors",
        parentData: data,
        parentDataProperty: "imageExtractors",
        rootData
      })) {
        vErrors = vErrors === null ? validate256.errors : vErrors.concat(validate256.errors);
        errors = vErrors.length;
      }
    }
    if (data.match !== undefined) {
      if (!validate267(data.match, {
        instancePath: instancePath + "/match",
        parentData: data,
        parentDataProperty: "match",
        rootData
      })) {
        vErrors = vErrors === null ? validate267.errors : vErrors.concat(validate267.errors);
        errors = vErrors.length;
      }
    }
    if (data.mutate !== undefined) {
      if (!validate276(data.mutate, {
        instancePath: instancePath + "/mutate",
        parentData: data,
        parentDataProperty: "mutate",
        rootData
      })) {
        vErrors = vErrors === null ? validate276.errors : vErrors.concat(validate276.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate305(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate305.errors : vErrors.concat(validate305.errors);
        errors = vErrors.length;
      }
    }
    if (data.preconditions !== undefined) {
      if (!validate24(data.preconditions, {
        instancePath: instancePath + "/preconditions",
        parentData: data,
        parentDataProperty: "preconditions",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.reportProperties !== undefined) {
      if (!validate28(data.reportProperties, {
        instancePath: instancePath + "/reportProperties",
        parentData: data,
        parentDataProperty: "reportProperties",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.skipBackgroundRequests !== undefined) {
      if (!validate21(data.skipBackgroundRequests, {
        instancePath: instancePath + "/skipBackgroundRequests",
        parentData: data,
        parentDataProperty: "skipBackgroundRequests",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.validate !== undefined) {
      if (!validate310(data.validate, {
        instancePath: instancePath + "/validate",
        parentData: data,
        parentDataProperty: "validate",
        rootData
      })) {
        vErrors = vErrors === null ? validate310.errors : vErrors.concat(validate310.errors);
        errors = vErrors.length;
      }
    }
    if (data.verifyImages !== undefined) {
      if (!validate399(data.verifyImages, {
        instancePath: instancePath + "/verifyImages",
        parentData: data,
        parentDataProperty: "verifyImages",
        rootData
      })) {
        vErrors = vErrors === null ? validate399.errors : vErrors.concat(validate399.errors);
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
  validate216.errors = vErrors;
  return errors === 0;
}
function validate215(data, {
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
      if (!validate216(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate216.errors : vErrors.concat(validate216.errors);
        errors = vErrors.length;
      }
    }
  }
  validate215.errors = vErrors;
  return errors === 0;
}
const schema130 = {
  "default": "Audit",
  "enum": ["audit", "enforce", "Audit", "Enforce"],
  "type": "string",
  "nullable": true
};
function validate465(data, {
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
  if (!(data === "audit" || data === "enforce" || data === "Audit" || data === "Enforce")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema130.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate465.errors = vErrors;
  return errors === 0;
}
const schema131 = {
  "properties": {
    "failurePolicy": {
      "$ref": "dHAOdOh62nTVhS32NtIVOFNlzIJna9nDJPFWJ4SNU"
    },
    "matchConditions": {
      "$ref": "bxlmPT3tMA6XyUHA7UtqO7C8DLouzgYedqVNg1I30"
    },
    "timeoutSeconds": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    }
  },
  "type": "object",
  "nullable": true
};
const schema73 = {
  "format": "int32",
  "type": "integer",
  "nullable": true
};
const formats0 = formats.int32;
function validate214(data, {
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
  validate214.errors = vErrors;
  return errors === 0;
}
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
    if (data.failurePolicy !== undefined) {
      if (!validate213(data.failurePolicy, {
        instancePath: instancePath + "/failurePolicy",
        parentData: data,
        parentDataProperty: "failurePolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate213.errors : vErrors.concat(validate213.errors);
        errors = vErrors.length;
      }
    }
    if (data.matchConditions !== undefined) {
      if (!validate149(data.matchConditions, {
        instancePath: instancePath + "/matchConditions",
        parentData: data,
        parentDataProperty: "matchConditions",
        rootData
      })) {
        vErrors = vErrors === null ? validate149.errors : vErrors.concat(validate149.errors);
        errors = vErrors.length;
      }
    }
    if (data.timeoutSeconds !== undefined) {
      if (!validate214(data.timeoutSeconds, {
        instancePath: instancePath + "/timeoutSeconds",
        parentData: data,
        parentDataProperty: "timeoutSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate214.errors : vErrors.concat(validate214.errors);
        errors = vErrors.length;
      }
    }
  }
  validate468.errors = vErrors;
  return errors === 0;
}
function validate452(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.admission !== undefined) {
      if (!validate21(data.admission, {
        instancePath: instancePath + "/admission",
        parentData: data,
        parentDataProperty: "admission",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.applyRules !== undefined) {
      if (!validate454(data.applyRules, {
        instancePath: instancePath + "/applyRules",
        parentData: data,
        parentDataProperty: "applyRules",
        rootData
      })) {
        vErrors = vErrors === null ? validate454.errors : vErrors.concat(validate454.errors);
        errors = vErrors.length;
      }
    }
    if (data.background !== undefined) {
      if (!validate21(data.background, {
        instancePath: instancePath + "/background",
        parentData: data,
        parentDataProperty: "background",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.emitWarning !== undefined) {
      if (!validate148(data.emitWarning, {
        instancePath: instancePath + "/emitWarning",
        parentData: data,
        parentDataProperty: "emitWarning",
        rootData
      })) {
        vErrors = vErrors === null ? validate148.errors : vErrors.concat(validate148.errors);
        errors = vErrors.length;
      }
    }
    if (data.failurePolicy !== undefined) {
      if (!validate213(data.failurePolicy, {
        instancePath: instancePath + "/failurePolicy",
        parentData: data,
        parentDataProperty: "failurePolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate213.errors : vErrors.concat(validate213.errors);
        errors = vErrors.length;
      }
    }
    if (data.generateExisting !== undefined) {
      if (!validate22(data.generateExisting, {
        instancePath: instancePath + "/generateExisting",
        parentData: data,
        parentDataProperty: "generateExisting",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.generateExistingOnPolicyUpdate !== undefined) {
      if (!validate22(data.generateExistingOnPolicyUpdate, {
        instancePath: instancePath + "/generateExistingOnPolicyUpdate",
        parentData: data,
        parentDataProperty: "generateExistingOnPolicyUpdate",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.mutateExistingOnPolicyUpdate !== undefined) {
      if (!validate22(data.mutateExistingOnPolicyUpdate, {
        instancePath: instancePath + "/mutateExistingOnPolicyUpdate",
        parentData: data,
        parentDataProperty: "mutateExistingOnPolicyUpdate",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.rules !== undefined) {
      if (!validate215(data.rules, {
        instancePath: instancePath + "/rules",
        parentData: data,
        parentDataProperty: "rules",
        rootData
      })) {
        vErrors = vErrors === null ? validate215.errors : vErrors.concat(validate215.errors);
        errors = vErrors.length;
      }
    }
    if (data.schemaValidation !== undefined) {
      if (!validate22(data.schemaValidation, {
        instancePath: instancePath + "/schemaValidation",
        parentData: data,
        parentDataProperty: "schemaValidation",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.useServerSideApply !== undefined) {
      if (!validate22(data.useServerSideApply, {
        instancePath: instancePath + "/useServerSideApply",
        parentData: data,
        parentDataProperty: "useServerSideApply",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.validationFailureAction !== undefined) {
      if (!validate465(data.validationFailureAction, {
        instancePath: instancePath + "/validationFailureAction",
        parentData: data,
        parentDataProperty: "validationFailureAction",
        rootData
      })) {
        vErrors = vErrors === null ? validate465.errors : vErrors.concat(validate465.errors);
        errors = vErrors.length;
      }
    }
    if (data.validationFailureActionOverrides !== undefined) {
      if (!validate206(data.validationFailureActionOverrides, {
        instancePath: instancePath + "/validationFailureActionOverrides",
        parentData: data,
        parentDataProperty: "validationFailureActionOverrides",
        rootData
      })) {
        vErrors = vErrors === null ? validate206.errors : vErrors.concat(validate206.errors);
        errors = vErrors.length;
      }
    }
    if (data.webhookConfiguration !== undefined) {
      if (!validate468(data.webhookConfiguration, {
        instancePath: instancePath + "/webhookConfiguration",
        parentData: data,
        parentDataProperty: "webhookConfiguration",
        rootData
      })) {
        vErrors = vErrors === null ? validate468.errors : vErrors.concat(validate468.errors);
        errors = vErrors.length;
      }
    }
    if (data.webhookTimeoutSeconds !== undefined) {
      if (!validate214(data.webhookTimeoutSeconds, {
        instancePath: instancePath + "/webhookTimeoutSeconds",
        parentData: data,
        parentDataProperty: "webhookTimeoutSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate214.errors : vErrors.concat(validate214.errors);
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
  validate452.errors = vErrors;
  return errors === 0;
}
const schema132 = {
  "properties": {
    "autogen": {
      "$ref": "aPxkGTQMB5Wa1miOyBKeJO4iWeZGy8Gxbm1H3KavQ"
    },
    "conditions": {
      "$ref": "zBl6OiSXSxQ6tDeBlQ4suXy9oTADY8BgOSRVMsB44"
    },
    "ready": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "rulecount": {
      "$ref": "hCy3bWmNze42l6UBkPrwYMYZOktu09bAm39huPk9x4w"
    },
    "validatingadmissionpolicy": {
      "$ref": "ZxSSlM7UzQInsrjleXMFj2U4DFyPAJPMyC1Whetznw"
    }
  },
  "type": "object",
  "nullable": true
};
const schema133 = {
  "properties": {
    "rules": {
      "$ref": "DPxdOCMgUw5yEtXB9xMUIiV983gtZKkVInRFxOD5x9s"
    }
  },
  "type": "object",
  "nullable": true
};
function validate476(data, {
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
    if (data.rules !== undefined) {
      if (!validate215(data.rules, {
        instancePath: instancePath + "/rules",
        parentData: data,
        parentDataProperty: "rules",
        rootData
      })) {
        vErrors = vErrors === null ? validate215.errors : vErrors.concat(validate215.errors);
        errors = vErrors.length;
      }
    }
  }
  validate476.errors = vErrors;
  return errors === 0;
}
const schema134 = {
  "items": {
    "$ref": "qF2xzAbTxVDKuLvsNu75Dkz2iJf8KcuXclF0tKipnn0"
  },
  "type": "array",
  "nullable": true
};
const schema135 = {
  "properties": {
    "lastTransitionTime": {
      "$ref": "KrhXBWKB1pK8JptMQRXbBg5co4bpZWZnIUkdeEo37wY"
    },
    "message": {
      "$ref": "Kduwl8DcA0kMznK9kNMJ5ZDKDZL9GH04F46AbIesag"
    },
    "observedGeneration": {
      "$ref": "Sg5VMnp9PeciTWOOocDxVZ8KL974mKlNPE7Z3LxfFY"
    },
    "reason": {
      "$ref": "ffwvxWNmgAw4j3J98OozNWe0YovCdcCVbNeffpYY"
    },
    "status": {
      "$ref": "pxfc6xQekz8UJRTLhQQLAy8qHcx9lW4EsDEEbdf5fxA"
    },
    "type": {
      "$ref": "abwpMDY1BocHdDN72xQbiDERuNabmToRz3D0GKn0D4"
    }
  },
  "required": ["lastTransitionTime", "message", "reason", "status", "type"],
  "type": "object"
};
const schema136 = {
  "format": "date-time",
  "type": "string"
};
const formats2 = formats["date-time"];
function validate481(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!formats2.validate(data)) {
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
  validate481.errors = vErrors;
  return errors === 0;
}
const schema137 = {
  "maxLength": 32768,
  "type": "string"
};
function validate483(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (func2(data) > 32768) {
      const err0 = {
        instancePath,
        schemaPath: "#/maxLength",
        keyword: "maxLength",
        params: {
          limit: 32768
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
  validate483.errors = vErrors;
  return errors === 0;
}
const schema138 = {
  "format": "int64",
  "type": "integer",
  "minimum": 0,
  "nullable": true
};
const formats4 = formats.int64;
function validate485(data, {
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
    if (!formats4.validate(data)) {
      const err2 = {
        instancePath,
        schemaPath: "#/format",
        keyword: "format",
        params: {
          format: "int64"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
  }
  validate485.errors = vErrors;
  return errors === 0;
}
const schema139 = {
  "maxLength": 1024,
  "minLength": 1,
  "pattern": "^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$",
  "type": "string"
};
const pattern0 = new RegExp("^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$", "u");
function validate487(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (func2(data) > 1024) {
      const err0 = {
        instancePath,
        schemaPath: "#/maxLength",
        keyword: "maxLength",
        params: {
          limit: 1024
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (func2(data) < 1) {
      const err1 = {
        instancePath,
        schemaPath: "#/minLength",
        keyword: "minLength",
        params: {
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
    if (!pattern0.test(data)) {
      const err2 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$"
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
        type: "string"
      }
    };
    if (vErrors === null) {
      vErrors = [err3];
    } else {
      vErrors.push(err3);
    }
    errors++;
  }
  validate487.errors = vErrors;
  return errors === 0;
}
const schema140 = {
  "enum": ["True", "False", "Unknown"],
  "type": "string"
};
function validate489(data, {
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
  if (!(data === "True" || data === "False" || data === "Unknown")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema140.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate489.errors = vErrors;
  return errors === 0;
}
const schema141 = {
  "maxLength": 316,
  "pattern": "^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$",
  "type": "string"
};
const pattern1 = new RegExp("^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$", "u");
function validate491(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (func2(data) > 316) {
      const err0 = {
        instancePath,
        schemaPath: "#/maxLength",
        keyword: "maxLength",
        params: {
          limit: 316
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
          pattern: "^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$"
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
  validate491.errors = vErrors;
  return errors === 0;
}
function validate480(data, {
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
      if (!validate481(data.lastTransitionTime, {
        instancePath: instancePath + "/lastTransitionTime",
        parentData: data,
        parentDataProperty: "lastTransitionTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate481.errors : vErrors.concat(validate481.errors);
        errors = vErrors.length;
      }
    }
    if (data.message !== undefined) {
      if (!validate483(data.message, {
        instancePath: instancePath + "/message",
        parentData: data,
        parentDataProperty: "message",
        rootData
      })) {
        vErrors = vErrors === null ? validate483.errors : vErrors.concat(validate483.errors);
        errors = vErrors.length;
      }
    }
    if (data.observedGeneration !== undefined) {
      if (!validate485(data.observedGeneration, {
        instancePath: instancePath + "/observedGeneration",
        parentData: data,
        parentDataProperty: "observedGeneration",
        rootData
      })) {
        vErrors = vErrors === null ? validate485.errors : vErrors.concat(validate485.errors);
        errors = vErrors.length;
      }
    }
    if (data.reason !== undefined) {
      if (!validate487(data.reason, {
        instancePath: instancePath + "/reason",
        parentData: data,
        parentDataProperty: "reason",
        rootData
      })) {
        vErrors = vErrors === null ? validate487.errors : vErrors.concat(validate487.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate489(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate489.errors : vErrors.concat(validate489.errors);
        errors = vErrors.length;
      }
    }
    if (data.type !== undefined) {
      if (!validate491(data.type, {
        instancePath: instancePath + "/type",
        parentData: data,
        parentDataProperty: "type",
        rootData
      })) {
        vErrors = vErrors === null ? validate491.errors : vErrors.concat(validate491.errors);
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
  validate480.errors = vErrors;
  return errors === 0;
}
function validate479(data, {
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
      if (!validate480(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate480.errors : vErrors.concat(validate480.errors);
        errors = vErrors.length;
      }
    }
  }
  validate479.errors = vErrors;
  return errors === 0;
}
const schema142 = {
  "properties": {
    "generate": {
      "$ref": "vMERCWCezVsdN7cIwlJvWJTP5QRRevuFDHNM3fdV8Q"
    },
    "mutate": {
      "$ref": "vMERCWCezVsdN7cIwlJvWJTP5QRRevuFDHNM3fdV8Q"
    },
    "validate": {
      "$ref": "vMERCWCezVsdN7cIwlJvWJTP5QRRevuFDHNM3fdV8Q"
    },
    "verifyimages": {
      "$ref": "vMERCWCezVsdN7cIwlJvWJTP5QRRevuFDHNM3fdV8Q"
    }
  },
  "required": ["generate", "mutate", "validate", "verifyimages"],
  "type": "object",
  "nullable": true
};
const schema122 = {
  "type": "integer"
};
function validate442(data, {
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
  validate442.errors = vErrors;
  return errors === 0;
}
function validate496(data, {
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
    if (data.generate === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "generate"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.mutate === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "mutate"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.validate === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "validate"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.verifyimages === undefined) {
      const err4 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "verifyimages"
        }
      };
      if (vErrors === null) {
        vErrors = [err4];
      } else {
        vErrors.push(err4);
      }
      errors++;
    }
    if (data.generate !== undefined) {
      if (!validate442(data.generate, {
        instancePath: instancePath + "/generate",
        parentData: data,
        parentDataProperty: "generate",
        rootData
      })) {
        vErrors = vErrors === null ? validate442.errors : vErrors.concat(validate442.errors);
        errors = vErrors.length;
      }
    }
    if (data.mutate !== undefined) {
      if (!validate442(data.mutate, {
        instancePath: instancePath + "/mutate",
        parentData: data,
        parentDataProperty: "mutate",
        rootData
      })) {
        vErrors = vErrors === null ? validate442.errors : vErrors.concat(validate442.errors);
        errors = vErrors.length;
      }
    }
    if (data.validate !== undefined) {
      if (!validate442(data.validate, {
        instancePath: instancePath + "/validate",
        parentData: data,
        parentDataProperty: "validate",
        rootData
      })) {
        vErrors = vErrors === null ? validate442.errors : vErrors.concat(validate442.errors);
        errors = vErrors.length;
      }
    }
    if (data.verifyimages !== undefined) {
      if (!validate442(data.verifyimages, {
        instancePath: instancePath + "/verifyimages",
        parentData: data,
        parentDataProperty: "verifyimages",
        rootData
      })) {
        vErrors = vErrors === null ? validate442.errors : vErrors.concat(validate442.errors);
        errors = vErrors.length;
      }
    }
  }
  validate496.errors = vErrors;
  return errors === 0;
}
const schema143 = {
  "properties": {
    "generated": {
      "$ref": "384TuUg7xQOu4Fi6u32QopECSxjPv91aOGoUUSEznpE"
    },
    "message": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["generated", "message"],
  "type": "object",
  "nullable": true
};
const schema144 = {
  "type": "boolean"
};
function validate503(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "boolean") {
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
  validate503.errors = vErrors;
  return errors === 0;
}
function validate502(data, {
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
    if (data.generated === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "generated"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.message === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "message"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.generated !== undefined) {
      if (!validate503(data.generated, {
        instancePath: instancePath + "/generated",
        parentData: data,
        parentDataProperty: "generated",
        rootData
      })) {
        vErrors = vErrors === null ? validate503.errors : vErrors.concat(validate503.errors);
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
  }
  validate502.errors = vErrors;
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
    if (data.autogen !== undefined) {
      if (!validate476(data.autogen, {
        instancePath: instancePath + "/autogen",
        parentData: data,
        parentDataProperty: "autogen",
        rootData
      })) {
        vErrors = vErrors === null ? validate476.errors : vErrors.concat(validate476.errors);
        errors = vErrors.length;
      }
    }
    if (data.conditions !== undefined) {
      if (!validate479(data.conditions, {
        instancePath: instancePath + "/conditions",
        parentData: data,
        parentDataProperty: "conditions",
        rootData
      })) {
        vErrors = vErrors === null ? validate479.errors : vErrors.concat(validate479.errors);
        errors = vErrors.length;
      }
    }
    if (data.ready !== undefined) {
      if (!validate22(data.ready, {
        instancePath: instancePath + "/ready",
        parentData: data,
        parentDataProperty: "ready",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.rulecount !== undefined) {
      if (!validate496(data.rulecount, {
        instancePath: instancePath + "/rulecount",
        parentData: data,
        parentDataProperty: "rulecount",
        rootData
      })) {
        vErrors = vErrors === null ? validate496.errors : vErrors.concat(validate496.errors);
        errors = vErrors.length;
      }
    }
    if (data.validatingadmissionpolicy !== undefined) {
      if (!validate502(data.validatingadmissionpolicy, {
        instancePath: instancePath + "/validatingadmissionpolicy",
        parentData: data,
        parentDataProperty: "validatingadmissionpolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate502.errors : vErrors.concat(validate502.errors);
        errors = vErrors.length;
      }
    }
  }
  validate475.errors = vErrors;
  return errors === 0;
}
function validate443(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="kyverno.io.v1.ClusterPolicy" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.spec === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "spec"
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
    if (data.kind === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "kind"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.apiVersion !== undefined) {
      if (!validate444(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate444.errors : vErrors.concat(validate444.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate446(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate446.errors : vErrors.concat(validate446.errors);
        errors = vErrors.length;
      }
    }
    if (data.metadata !== undefined) {
      if (!validate448(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate448.errors : vErrors.concat(validate448.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate452(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate452.errors : vErrors.concat(validate452.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate475(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate475.errors : vErrors.concat(validate475.errors);
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
  validate443.errors = vErrors;
  return errors === 0;
}