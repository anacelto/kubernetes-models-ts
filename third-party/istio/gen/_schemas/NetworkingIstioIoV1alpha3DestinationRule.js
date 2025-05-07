import { formats } from "@kubernetes-models/validate";
export const validate = validate176;
const schema57 = {
  "type": "object",
  "properties": {
    "spec": {
      "$ref": "C5SbHp2Kj38e3Bzeg0xlIpdD0L0YLl6KPoje2NHkY"
    },
    "status": {
      "$ref": "wnCl8zCvz1PLbyEivJTcktRgDZuzOGT9FYulvrA2T8w"
    },
    "apiVersion": {
      "$ref": "j2UH91UemQtfhakIPexgb1idEFq2rrimWrqm2ofw"
    },
    "kind": {
      "$ref": "WqInEx8Ybq9iZlrSXEtuuRaNw1YlnhbkuBLaqusw"
    },
    "metadata": {
      "$ref": "a6f0oUEaFqHmymdwnqPORTNOTU7GczWAkwGD0uYU"
    }
  },
  "required": ["apiVersion", "kind"],
  "$id": "networking.istio.io.v1alpha3.DestinationRule"
};
const schema58 = {
  "properties": {
    "exportTo": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "host": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "subsets": {
      "$ref": "JASrm3Gck2Wu7rqU3JlbMGcgAdJRLbLxTXYH7lCNcns"
    },
    "trafficPolicy": {
      "$ref": "d9tjRRevUre9swmujhz6Q7cJqovwgYIdDbbMRUyEgE"
    },
    "workloadSelector": {
      "$ref": "UwmeMeYGR49aXbZH5LTaedhzMMH0dmhMIaCBQARZmgU"
    }
  },
  "type": "object",
  "nullable": true
};
const schema11 = {
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "array",
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
  validate26.errors = vErrors;
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
const schema59 = {
  "items": {
    "$ref": "yqxPb5G0PlgtR7jXDW9OOBWoRVdOUcQ1tNKaKTKFHQQ"
  },
  "type": "array",
  "nullable": true
};
const schema60 = {
  "properties": {
    "labels": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "trafficPolicy": {
      "$ref": "d9tjRRevUre9swmujhz6Q7cJqovwgYIdDbbMRUyEgE"
    }
  },
  "type": "object"
};
const schema56 = {
  "additionalProperties": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "object",
  "properties": {},
  "nullable": true
};
function validate174(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
  validate174.errors = vErrors;
  return errors === 0;
}
const schema51 = {
  "properties": {
    "connectionPool": {
      "$ref": "eNQdvHTL6VyO3AkzomkLpaUJQAcfSucfYjbOYhf6QM"
    },
    "loadBalancer": {
      "$ref": "vlSQK4JBQZ3jVxCRZKBmFxUW0Io6HVyngUR9PJZI"
    },
    "outlierDetection": {
      "$ref": "6Yw3jI5ewlpftfh3MVc8F7VusMGyYbN0MzFAAowMwJg"
    },
    "portLevelSettings": {
      "$ref": "gWTGGs5ypc60Z6kLBAfTMDgSHwk3Hebuk14YmF2E"
    },
    "tls": {
      "$ref": "tmfcQfNZnF8yKIE8k0LdlahQbwYCfjQVisCBjY3KrI"
    },
    "tunnel": {
      "$ref": "3bySJWtZN6YlKnJFNwqTvPOm25e3pJwknDQ4MFEdgi8"
    }
  },
  "type": "object",
  "nullable": true
};
const schema28 = {
  "properties": {
    "http": {
      "$ref": "mFbTr0BiRXh9KXZyERM7muE7Icgnlm4e2hOPcg2BPo"
    },
    "tcp": {
      "$ref": "QzrwUFv5TK44WKbumi3gCkgkoqmPHN5Mc8uuPzB374"
    }
  },
  "type": "object",
  "nullable": true
};
const schema29 = {
  "properties": {
    "h2UpgradePolicy": {
      "$ref": "5tdtWJDUOOeRsgBgOE7KDy2WFbqvPg57ia8TvR4bvc"
    },
    "http1MaxPendingRequests": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "http2MaxRequests": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "idleTimeout": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "maxRequestsPerConnection": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "maxRetries": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "useClientProtocol": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "type": "object",
  "nullable": true
};
const schema30 = {
  "enum": ["DEFAULT", "DO_NOT_UPGRADE", "UPGRADE"],
  "type": "string",
  "nullable": true
};
function validate66(data, {
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
  if (!(data === "DEFAULT" || data === "DO_NOT_UPGRADE" || data === "UPGRADE")) {
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
const schema8 = {
  "format": "int32",
  "type": "integer",
  "nullable": true
};
const formats0 = formats.int32;
function validate23(data, {
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
  validate23.errors = vErrors;
  return errors === 0;
}
const schema10 = {
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
function validate65(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.h2UpgradePolicy !== undefined) {
      if (!validate66(data.h2UpgradePolicy, {
        instancePath: instancePath + "/h2UpgradePolicy",
        parentData: data,
        parentDataProperty: "h2UpgradePolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate66.errors : vErrors.concat(validate66.errors);
        errors = vErrors.length;
      }
    }
    if (data.http1MaxPendingRequests !== undefined) {
      if (!validate23(data.http1MaxPendingRequests, {
        instancePath: instancePath + "/http1MaxPendingRequests",
        parentData: data,
        parentDataProperty: "http1MaxPendingRequests",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.http2MaxRequests !== undefined) {
      if (!validate23(data.http2MaxRequests, {
        instancePath: instancePath + "/http2MaxRequests",
        parentData: data,
        parentDataProperty: "http2MaxRequests",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.idleTimeout !== undefined) {
      if (!validate22(data.idleTimeout, {
        instancePath: instancePath + "/idleTimeout",
        parentData: data,
        parentDataProperty: "idleTimeout",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.maxRequestsPerConnection !== undefined) {
      if (!validate23(data.maxRequestsPerConnection, {
        instancePath: instancePath + "/maxRequestsPerConnection",
        parentData: data,
        parentDataProperty: "maxRequestsPerConnection",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.maxRetries !== undefined) {
      if (!validate23(data.maxRetries, {
        instancePath: instancePath + "/maxRetries",
        parentData: data,
        parentDataProperty: "maxRetries",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.useClientProtocol !== undefined) {
      if (!validate25(data.useClientProtocol, {
        instancePath: instancePath + "/useClientProtocol",
        parentData: data,
        parentDataProperty: "useClientProtocol",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate65.errors = vErrors;
  return errors === 0;
}
const schema31 = {
  "properties": {
    "connectTimeout": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "maxConnectionDuration": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "maxConnections": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "tcpKeepalive": {
      "$ref": "ZOyeYjYANnicyUCBoPrmAfQrVi1XeaT808M3Uzwzd9c"
    }
  },
  "type": "object",
  "nullable": true
};
const schema32 = {
  "properties": {
    "interval": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "probes": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "time": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema9 = {
  "type": "integer",
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
  validate24.errors = vErrors;
  return errors === 0;
}
function validate79(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.interval !== undefined) {
      if (!validate22(data.interval, {
        instancePath: instancePath + "/interval",
        parentData: data,
        parentDataProperty: "interval",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.probes !== undefined) {
      if (!validate24(data.probes, {
        instancePath: instancePath + "/probes",
        parentData: data,
        parentDataProperty: "probes",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.time !== undefined) {
      if (!validate22(data.time, {
        instancePath: instancePath + "/time",
        parentData: data,
        parentDataProperty: "time",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate79.errors = vErrors;
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.connectTimeout !== undefined) {
      if (!validate22(data.connectTimeout, {
        instancePath: instancePath + "/connectTimeout",
        parentData: data,
        parentDataProperty: "connectTimeout",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.maxConnectionDuration !== undefined) {
      if (!validate22(data.maxConnectionDuration, {
        instancePath: instancePath + "/maxConnectionDuration",
        parentData: data,
        parentDataProperty: "maxConnectionDuration",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.maxConnections !== undefined) {
      if (!validate23(data.maxConnections, {
        instancePath: instancePath + "/maxConnections",
        parentData: data,
        parentDataProperty: "maxConnections",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.tcpKeepalive !== undefined) {
      if (!validate79(data.tcpKeepalive, {
        instancePath: instancePath + "/tcpKeepalive",
        parentData: data,
        parentDataProperty: "tcpKeepalive",
        rootData
      })) {
        vErrors = vErrors === null ? validate79.errors : vErrors.concat(validate79.errors);
        errors = vErrors.length;
      }
    }
  }
  validate75.errors = vErrors;
  return errors === 0;
}
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
    if (data.http !== undefined) {
      if (!validate65(data.http, {
        instancePath: instancePath + "/http",
        parentData: data,
        parentDataProperty: "http",
        rootData
      })) {
        vErrors = vErrors === null ? validate65.errors : vErrors.concat(validate65.errors);
        errors = vErrors.length;
      }
    }
    if (data.tcp !== undefined) {
      if (!validate75(data.tcp, {
        instancePath: instancePath + "/tcp",
        parentData: data,
        parentDataProperty: "tcp",
        rootData
      })) {
        vErrors = vErrors === null ? validate75.errors : vErrors.concat(validate75.errors);
        errors = vErrors.length;
      }
    }
  }
  validate64.errors = vErrors;
  return errors === 0;
}
const schema33 = {
  "oneOf": [{
    "$ref": "W557pNdPA9M3qFuJ7GB4lEfhZscqMYjzCzoVec5RHI"
  }, {
    "$ref": "W7dmm8Oz9h61hjclphbusgxEolJ5GhO3szPuWo7i4"
  }, {
    "$ref": "xV6nnkkKsoxhDY8C3W8niobUtNsA3iIWLuiaVSTAlo"
  }],
  "properties": {
    "consistentHash": {
      "$ref": "3NFUZ50r2W6KVB3HUv32kD9uX5rVxMVTtkSQeWYGyw"
    },
    "localityLbSetting": {
      "$ref": "w4ndDWCrZmubjKEimEtUW2FcBEp1hbpOWFgMO8pC4o"
    },
    "simple": {
      "$ref": "pGvrSEFN0moKLQagQ0oHgCUtkOTwpAh6rWq5IvpQ7Q"
    },
    "warmupDurationSecs": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema34 = {
  "not": {
    "$ref": "qj7gK8PgRkcY2lrCdgmkIiK0GZUteD60aT9RghOHegE"
  }
};
const schema35 = {
  "anyOf": [{
    "$ref": "W7dmm8Oz9h61hjclphbusgxEolJ5GhO3szPuWo7i4"
  }, {
    "$ref": "xV6nnkkKsoxhDY8C3W8niobUtNsA3iIWLuiaVSTAlo"
  }]
};
const schema18 = {
  "required": ["simple"]
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
    if (data.simple === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "simple"
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
  validate34.errors = vErrors;
  return errors === 0;
}
const schema19 = {
  "properties": {
    "consistentHash": {
      "$ref": "5dCcEYgcjNcNMvtlGJmh2fdfkv98RBLKWbK8Hdsvls"
    }
  },
  "required": ["consistentHash"]
};
const schema20 = {
  "allOf": [{
    "$ref": "DOxUZj6vwqFF9IuYDkVBVgB7K8Aj9TtPFHkfrDsUo"
  }, {
    "$ref": "ZX6ReOhResC0K6iU7RzqjT7SZCCpjodTbJ4obFiQ3fw"
  }],
  "properties": {
    "minimumRingSize": {
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    }
  }
};
const schema21 = {
  "oneOf": [{
    "$ref": "UVDuw6xebRDqiTUz4GP4MDNPNIUnhPeucSuCNVJg"
  }, {
    "$ref": "vLGCkrNCawTxfAp4f9mTnULixwt10QHKDt9Cnd8EYU"
  }, {
    "$ref": "KI9YBgPTrzwpTzueEEeaxrti4SjZFb1QXUaLihcsY00"
  }, {
    "$ref": "PvOfc0vxF8jnuWtz7LKqaT2iyGD2IOfGEpD3eSpwg9g"
  }, {
    "$ref": "9cKjAkzNIbLV2Mml2ER3SjyHCaLGbXm1fe4Cvqycw"
  }]
};
const schema22 = {
  "not": {
    "$ref": "TuwYjyWy9qrfN3K4UPMMplzkZdSZCVmj7xIqd57BQ"
  }
};
const schema23 = {
  "anyOf": [{
    "$ref": "vLGCkrNCawTxfAp4f9mTnULixwt10QHKDt9Cnd8EYU"
  }, {
    "$ref": "KI9YBgPTrzwpTzueEEeaxrti4SjZFb1QXUaLihcsY00"
  }, {
    "$ref": "PvOfc0vxF8jnuWtz7LKqaT2iyGD2IOfGEpD3eSpwg9g"
  }, {
    "$ref": "9cKjAkzNIbLV2Mml2ER3SjyHCaLGbXm1fe4Cvqycw"
  }]
};
const schema12 = {
  "required": ["httpHeaderName"]
};
function validate28(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.httpHeaderName === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "httpHeaderName"
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
  validate28.errors = vErrors;
  return errors === 0;
}
const schema13 = {
  "required": ["httpCookie"]
};
function validate29(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.httpCookie === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "httpCookie"
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
  validate29.errors = vErrors;
  return errors === 0;
}
const schema14 = {
  "required": ["useSourceIp"]
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
    if (data.useSourceIp === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "useSourceIp"
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
  validate30.errors = vErrors;
  return errors === 0;
}
const schema15 = {
  "required": ["httpQueryParameterName"]
};
function validate31(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.httpQueryParameterName === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "httpQueryParameterName"
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
  validate31.errors = vErrors;
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
  const _errs0 = errors;
  let valid0 = false;
  const _errs1 = errors;
  if (!validate28(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs2 = errors;
    if (!validate29(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
      errors = vErrors.length;
    }
    var _valid0 = _errs2 === errors;
    valid0 = valid0 || _valid0;
    if (!valid0) {
      const _errs3 = errors;
      if (!validate30(data, {
        instancePath,
        parentData,
        parentDataProperty,
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
      var _valid0 = _errs3 === errors;
      valid0 = valid0 || _valid0;
      if (!valid0) {
        const _errs4 = errors;
        if (!validate31(data, {
          instancePath,
          parentData,
          parentDataProperty,
          rootData
        })) {
          vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
          errors = vErrors.length;
        }
        var _valid0 = _errs4 === errors;
        valid0 = valid0 || _valid0;
      }
    }
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
  const _errs0 = errors;
  const _errs1 = errors;
  if (!validate39(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
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
  validate38.errors = vErrors;
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
  const _errs0 = errors;
  let valid0 = false;
  let passing0 = null;
  const _errs1 = errors;
  if (!validate38(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs1 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
  }
  const _errs2 = errors;
  if (!validate28(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs2 === errors;
  if (_valid0 && valid0) {
    valid0 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid0 = true;
      passing0 = 1;
    }
    const _errs3 = errors;
    if (!validate29(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
      errors = vErrors.length;
    }
    var _valid0 = _errs3 === errors;
    if (_valid0 && valid0) {
      valid0 = false;
      passing0 = [passing0, 2];
    } else {
      if (_valid0) {
        valid0 = true;
        passing0 = 2;
      }
      const _errs4 = errors;
      if (!validate30(data, {
        instancePath,
        parentData,
        parentDataProperty,
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
      var _valid0 = _errs4 === errors;
      if (_valid0 && valid0) {
        valid0 = false;
        passing0 = [passing0, 3];
      } else {
        if (_valid0) {
          valid0 = true;
          passing0 = 3;
        }
        const _errs5 = errors;
        if (!validate31(data, {
          instancePath,
          parentData,
          parentDataProperty,
          rootData
        })) {
          vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
          errors = vErrors.length;
        }
        var _valid0 = _errs5 === errors;
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
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate37.errors = vErrors;
  return errors === 0;
}
const schema24 = {
  "oneOf": [{
    "$ref": "cJOOaIk4Jtjstp8d2ZbUCwAKmuex6JS758dxzlX5vA"
  }, {
    "$ref": "VW3oXgvxBW2jWybJWqd0sh375VbGGiYv11Y9voEims"
  }, {
    "$ref": "GZ6AujELxdVyLwPuWFZHLodC422cbSCMT7LYPe71c"
  }]
};
const schema25 = {
  "not": {
    "$ref": "9ja7BQjpnfjNDsbr9hQ1rndlEdhUGuy9SyjzdYgbYFs"
  }
};
const schema26 = {
  "anyOf": [{
    "$ref": "VW3oXgvxBW2jWybJWqd0sh375VbGGiYv11Y9voEims"
  }, {
    "$ref": "GZ6AujELxdVyLwPuWFZHLodC422cbSCMT7LYPe71c"
  }]
};
const schema16 = {
  "required": ["ringHash"]
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
    if (data.ringHash === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "ringHash"
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
  validate32.errors = vErrors;
  return errors === 0;
}
const schema17 = {
  "required": ["maglev"]
};
function validate33(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.maglev === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "maglev"
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
  validate33.errors = vErrors;
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
  const _errs0 = errors;
  let valid0 = false;
  const _errs1 = errors;
  if (!validate32(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs2 = errors;
    if (!validate33(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
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
  validate53.errors = vErrors;
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
  let valid0 = false;
  let passing0 = null;
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
  var _valid0 = _errs1 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
  }
  const _errs2 = errors;
  if (!validate32(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs2 === errors;
  if (_valid0 && valid0) {
    valid0 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid0 = true;
      passing0 = 1;
    }
    const _errs3 = errors;
    if (!validate33(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
      errors = vErrors.length;
    }
    var _valid0 = _errs3 === errors;
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
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate51.errors = vErrors;
  return errors === 0;
}
const schema27 = {};
function validate61(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  validate61.errors = null;
  return true;
}
function validate36(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate37(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
    errors = vErrors.length;
  }
  if (!validate51(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate51.errors : vErrors.concat(validate51.errors);
    errors = vErrors.length;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.minimumRingSize !== undefined) {
      if (!validate61(data.minimumRingSize, {
        instancePath: instancePath + "/minimumRingSize",
        parentData: data,
        parentDataProperty: "minimumRingSize",
        rootData
      })) {
        vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
        errors = vErrors.length;
      }
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.consistentHash === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "consistentHash"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.consistentHash !== undefined) {
      if (!validate36(data.consistentHash, {
        instancePath: instancePath + "/consistentHash",
        parentData: data,
        parentDataProperty: "consistentHash",
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
function validate87(data, {
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
  if (!validate34(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs2 = errors;
    if (!validate35(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
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
  validate87.errors = vErrors;
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
  const _errs0 = errors;
  const _errs1 = errors;
  if (!validate87(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
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
  validate86.errors = vErrors;
  return errors === 0;
}
const schema36 = {
  "properties": {
    "httpCookie": {
      "$ref": "esDEViR3aYEE6JiVP5wpKDFixxtxNdFlT5xGkxxgOU"
    },
    "httpHeaderName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "httpQueryParameterName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "maglev": {
      "$ref": "U66Os6lCL2W3CsJoikC6BeaTMb9sYGUKpV653PbNs4"
    },
    "minimumRingSize": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "ringHash": {
      "$ref": "V8Wsr7RQTWzOXGKn66ld5u8pJMFeGPA1wYKMNxHO7s"
    },
    "useSourceIp": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "type": "object",
  "nullable": true
};
const schema37 = {
  "properties": {
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "path": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "ttl": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.path !== undefined) {
      if (!validate22(data.path, {
        instancePath: instancePath + "/path",
        parentData: data,
        parentDataProperty: "path",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.ttl !== undefined) {
      if (!validate22(data.ttl, {
        instancePath: instancePath + "/ttl",
        parentData: data,
        parentDataProperty: "ttl",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate95.errors = vErrors;
  return errors === 0;
}
const schema38 = {
  "properties": {
    "tableSize": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    }
  },
  "type": "object",
  "nullable": true
};
function validate102(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.tableSize !== undefined) {
      if (!validate24(data.tableSize, {
        instancePath: instancePath + "/tableSize",
        parentData: data,
        parentDataProperty: "tableSize",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate102.errors = vErrors;
  return errors === 0;
}
const schema39 = {
  "properties": {
    "minimumRingSize": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    }
  },
  "type": "object",
  "nullable": true
};
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
    if (data.minimumRingSize !== undefined) {
      if (!validate24(data.minimumRingSize, {
        instancePath: instancePath + "/minimumRingSize",
        parentData: data,
        parentDataProperty: "minimumRingSize",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate106.errors = vErrors;
  return errors === 0;
}
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
    if (data.httpCookie !== undefined) {
      if (!validate95(data.httpCookie, {
        instancePath: instancePath + "/httpCookie",
        parentData: data,
        parentDataProperty: "httpCookie",
        rootData
      })) {
        vErrors = vErrors === null ? validate95.errors : vErrors.concat(validate95.errors);
        errors = vErrors.length;
      }
    }
    if (data.httpHeaderName !== undefined) {
      if (!validate22(data.httpHeaderName, {
        instancePath: instancePath + "/httpHeaderName",
        parentData: data,
        parentDataProperty: "httpHeaderName",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.httpQueryParameterName !== undefined) {
      if (!validate22(data.httpQueryParameterName, {
        instancePath: instancePath + "/httpQueryParameterName",
        parentData: data,
        parentDataProperty: "httpQueryParameterName",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.maglev !== undefined) {
      if (!validate102(data.maglev, {
        instancePath: instancePath + "/maglev",
        parentData: data,
        parentDataProperty: "maglev",
        rootData
      })) {
        vErrors = vErrors === null ? validate102.errors : vErrors.concat(validate102.errors);
        errors = vErrors.length;
      }
    }
    if (data.minimumRingSize !== undefined) {
      if (!validate24(data.minimumRingSize, {
        instancePath: instancePath + "/minimumRingSize",
        parentData: data,
        parentDataProperty: "minimumRingSize",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.ringHash !== undefined) {
      if (!validate106(data.ringHash, {
        instancePath: instancePath + "/ringHash",
        parentData: data,
        parentDataProperty: "ringHash",
        rootData
      })) {
        vErrors = vErrors === null ? validate106.errors : vErrors.concat(validate106.errors);
        errors = vErrors.length;
      }
    }
    if (data.useSourceIp !== undefined) {
      if (!validate25(data.useSourceIp, {
        instancePath: instancePath + "/useSourceIp",
        parentData: data,
        parentDataProperty: "useSourceIp",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate94.errors = vErrors;
  return errors === 0;
}
const schema40 = {
  "properties": {
    "distribute": {
      "$ref": "45SJC2qFoLdXiNJN7XJzOQLm166iLFWXlKAgoBjIw"
    },
    "enabled": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "failover": {
      "$ref": "lQ6UjEWjvbsj7NDDu7xChzyE1k8L4tIrovA7qfg2jk"
    },
    "failoverPriority": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    }
  },
  "type": "object",
  "nullable": true
};
const schema41 = {
  "items": {
    "$ref": "dst1cTNRzqyQhGwNkeH8ieKNE1P37ELi8t8d5JBHk"
  },
  "type": "array",
  "nullable": true
};
const schema42 = {
  "properties": {
    "from": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "to": {
      "$ref": "y4ZglQDJZeARDXSGqA503sZlCmNNaAwx3p0VSrNG8"
    }
  },
  "type": "object"
};
const schema43 = {
  "additionalProperties": {
    "$ref": "vMERCWCezVsdN7cIwlJvWJTP5QRRevuFDHNM3fdV8Q"
  },
  "type": "object",
  "properties": {},
  "nullable": true
};
const schema44 = {
  "type": "integer"
};
function validate116(data, {
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
      if (!validate116(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
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
function validate113(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.from !== undefined) {
      if (!validate22(data.from, {
        instancePath: instancePath + "/from",
        parentData: data,
        parentDataProperty: "from",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.to !== undefined) {
      if (!validate115(data.to, {
        instancePath: instancePath + "/to",
        parentData: data,
        parentDataProperty: "to",
        rootData
      })) {
        vErrors = vErrors === null ? validate115.errors : vErrors.concat(validate115.errors);
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
const schema45 = {
  "items": {
    "$ref": "RC7dBFGn70pSnIqIQOuhhYGxJ6OJgtwpiiGrIu36AM"
  },
  "type": "array",
  "nullable": true
};
const schema46 = {
  "properties": {
    "from": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "to": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
function validate123(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.from !== undefined) {
      if (!validate22(data.from, {
        instancePath: instancePath + "/from",
        parentData: data,
        parentDataProperty: "from",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.to !== undefined) {
      if (!validate22(data.to, {
        instancePath: instancePath + "/to",
        parentData: data,
        parentDataProperty: "to",
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
  validate123.errors = vErrors;
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
      if (!validate123(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate123.errors : vErrors.concat(validate123.errors);
        errors = vErrors.length;
      }
    }
  }
  validate122.errors = vErrors;
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.distribute !== undefined) {
      if (!validate112(data.distribute, {
        instancePath: instancePath + "/distribute",
        parentData: data,
        parentDataProperty: "distribute",
        rootData
      })) {
        vErrors = vErrors === null ? validate112.errors : vErrors.concat(validate112.errors);
        errors = vErrors.length;
      }
    }
    if (data.enabled !== undefined) {
      if (!validate25(data.enabled, {
        instancePath: instancePath + "/enabled",
        parentData: data,
        parentDataProperty: "enabled",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.failover !== undefined) {
      if (!validate122(data.failover, {
        instancePath: instancePath + "/failover",
        parentData: data,
        parentDataProperty: "failover",
        rootData
      })) {
        vErrors = vErrors === null ? validate122.errors : vErrors.concat(validate122.errors);
        errors = vErrors.length;
      }
    }
    if (data.failoverPriority !== undefined) {
      if (!validate26(data.failoverPriority, {
        instancePath: instancePath + "/failoverPriority",
        parentData: data,
        parentDataProperty: "failoverPriority",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate111.errors = vErrors;
  return errors === 0;
}
const schema47 = {
  "enum": ["UNSPECIFIED", "LEAST_CONN", "RANDOM", "PASSTHROUGH", "ROUND_ROBIN", "LEAST_REQUEST"],
  "type": "string",
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
  if (!(data === "UNSPECIFIED" || data === "LEAST_CONN" || data === "RANDOM" || data === "PASSTHROUGH" || data === "ROUND_ROBIN" || data === "LEAST_REQUEST")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema47.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate130.errors = vErrors;
  return errors === 0;
}
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
  const _errs2 = errors;
  let valid0 = false;
  let passing0 = null;
  const _errs3 = errors;
  if (!validate86(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate86.errors : vErrors.concat(validate86.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs3 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
  }
  const _errs4 = errors;
  if (!validate34(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
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
    if (!validate35(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
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
    if (data.consistentHash !== undefined) {
      if (!validate94(data.consistentHash, {
        instancePath: instancePath + "/consistentHash",
        parentData: data,
        parentDataProperty: "consistentHash",
        rootData
      })) {
        vErrors = vErrors === null ? validate94.errors : vErrors.concat(validate94.errors);
        errors = vErrors.length;
      }
    }
    if (data.localityLbSetting !== undefined) {
      if (!validate111(data.localityLbSetting, {
        instancePath: instancePath + "/localityLbSetting",
        parentData: data,
        parentDataProperty: "localityLbSetting",
        rootData
      })) {
        vErrors = vErrors === null ? validate111.errors : vErrors.concat(validate111.errors);
        errors = vErrors.length;
      }
    }
    if (data.simple !== undefined) {
      if (!validate130(data.simple, {
        instancePath: instancePath + "/simple",
        parentData: data,
        parentDataProperty: "simple",
        rootData
      })) {
        vErrors = vErrors === null ? validate130.errors : vErrors.concat(validate130.errors);
        errors = vErrors.length;
      }
    }
    if (data.warmupDurationSecs !== undefined) {
      if (!validate22(data.warmupDurationSecs, {
        instancePath: instancePath + "/warmupDurationSecs",
        parentData: data,
        parentDataProperty: "warmupDurationSecs",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate85.errors = vErrors;
  return errors === 0;
}
const schema48 = {
  "properties": {
    "baseEjectionTime": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "consecutive5xxErrors": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "consecutiveErrors": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "consecutiveGatewayErrors": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "consecutiveLocalOriginFailures": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "interval": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "maxEjectionPercent": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "minHealthPercent": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "splitExternalLocalOriginErrors": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "type": "object",
  "nullable": true
};
function validate133(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.baseEjectionTime !== undefined) {
      if (!validate22(data.baseEjectionTime, {
        instancePath: instancePath + "/baseEjectionTime",
        parentData: data,
        parentDataProperty: "baseEjectionTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.consecutive5xxErrors !== undefined) {
      if (!validate24(data.consecutive5xxErrors, {
        instancePath: instancePath + "/consecutive5xxErrors",
        parentData: data,
        parentDataProperty: "consecutive5xxErrors",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.consecutiveErrors !== undefined) {
      if (!validate23(data.consecutiveErrors, {
        instancePath: instancePath + "/consecutiveErrors",
        parentData: data,
        parentDataProperty: "consecutiveErrors",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.consecutiveGatewayErrors !== undefined) {
      if (!validate24(data.consecutiveGatewayErrors, {
        instancePath: instancePath + "/consecutiveGatewayErrors",
        parentData: data,
        parentDataProperty: "consecutiveGatewayErrors",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.consecutiveLocalOriginFailures !== undefined) {
      if (!validate24(data.consecutiveLocalOriginFailures, {
        instancePath: instancePath + "/consecutiveLocalOriginFailures",
        parentData: data,
        parentDataProperty: "consecutiveLocalOriginFailures",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.interval !== undefined) {
      if (!validate22(data.interval, {
        instancePath: instancePath + "/interval",
        parentData: data,
        parentDataProperty: "interval",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.maxEjectionPercent !== undefined) {
      if (!validate23(data.maxEjectionPercent, {
        instancePath: instancePath + "/maxEjectionPercent",
        parentData: data,
        parentDataProperty: "maxEjectionPercent",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.minHealthPercent !== undefined) {
      if (!validate23(data.minHealthPercent, {
        instancePath: instancePath + "/minHealthPercent",
        parentData: data,
        parentDataProperty: "minHealthPercent",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.splitExternalLocalOriginErrors !== undefined) {
      if (!validate25(data.splitExternalLocalOriginErrors, {
        instancePath: instancePath + "/splitExternalLocalOriginErrors",
        parentData: data,
        parentDataProperty: "splitExternalLocalOriginErrors",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
  }
  validate133.errors = vErrors;
  return errors === 0;
}
const schema52 = {
  "items": {
    "$ref": "3xwHvOyDSuke5da1uaDiVND50bjqvZlU8CDz00i7Yw"
  },
  "type": "array",
  "nullable": true
};
const schema53 = {
  "properties": {
    "connectionPool": {
      "$ref": "eNQdvHTL6VyO3AkzomkLpaUJQAcfSucfYjbOYhf6QM"
    },
    "loadBalancer": {
      "$ref": "vlSQK4JBQZ3jVxCRZKBmFxUW0Io6HVyngUR9PJZI"
    },
    "outlierDetection": {
      "$ref": "6Yw3jI5ewlpftfh3MVc8F7VusMGyYbN0MzFAAowMwJg"
    },
    "port": {
      "$ref": "Go3TPyc1mSK8ywdOHd7vCihKnRgASpsr7uTL8OYk"
    },
    "tls": {
      "$ref": "tmfcQfNZnF8yKIE8k0LdlahQbwYCfjQVisCBjY3KrI"
    }
  },
  "type": "object"
};
const schema54 = {
  "properties": {
    "number": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    }
  },
  "type": "object",
  "nullable": true
};
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
    if (data.number !== undefined) {
      if (!validate24(data.number, {
        instancePath: instancePath + "/number",
        parentData: data,
        parentDataProperty: "number",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate162.errors = vErrors;
  return errors === 0;
}
const schema49 = {
  "properties": {
    "caCertificates": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "clientCertificate": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "credentialName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "insecureSkipVerify": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "mode": {
      "$ref": "JDCGuYV9DcAz9CBztqhSeJk6KO7NMklzhNTNlsU1lc"
    },
    "privateKey": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "sni": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "subjectAltNames": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    }
  },
  "type": "object",
  "nullable": true
};
const schema50 = {
  "enum": ["DISABLE", "SIMPLE", "MUTUAL", "ISTIO_MUTUAL"],
  "type": "string",
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
  if (!(data === "DISABLE" || data === "SIMPLE" || data === "MUTUAL" || data === "ISTIO_MUTUAL")) {
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
  validate148.errors = vErrors;
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
    if (data.caCertificates !== undefined) {
      if (!validate22(data.caCertificates, {
        instancePath: instancePath + "/caCertificates",
        parentData: data,
        parentDataProperty: "caCertificates",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.clientCertificate !== undefined) {
      if (!validate22(data.clientCertificate, {
        instancePath: instancePath + "/clientCertificate",
        parentData: data,
        parentDataProperty: "clientCertificate",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.credentialName !== undefined) {
      if (!validate22(data.credentialName, {
        instancePath: instancePath + "/credentialName",
        parentData: data,
        parentDataProperty: "credentialName",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.insecureSkipVerify !== undefined) {
      if (!validate25(data.insecureSkipVerify, {
        instancePath: instancePath + "/insecureSkipVerify",
        parentData: data,
        parentDataProperty: "insecureSkipVerify",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.mode !== undefined) {
      if (!validate148(data.mode, {
        instancePath: instancePath + "/mode",
        parentData: data,
        parentDataProperty: "mode",
        rootData
      })) {
        vErrors = vErrors === null ? validate148.errors : vErrors.concat(validate148.errors);
        errors = vErrors.length;
      }
    }
    if (data.privateKey !== undefined) {
      if (!validate22(data.privateKey, {
        instancePath: instancePath + "/privateKey",
        parentData: data,
        parentDataProperty: "privateKey",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.sni !== undefined) {
      if (!validate22(data.sni, {
        instancePath: instancePath + "/sni",
        parentData: data,
        parentDataProperty: "sni",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.subjectAltNames !== undefined) {
      if (!validate26(data.subjectAltNames, {
        instancePath: instancePath + "/subjectAltNames",
        parentData: data,
        parentDataProperty: "subjectAltNames",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate143.errors = vErrors;
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
    if (data.connectionPool !== undefined) {
      if (!validate64(data.connectionPool, {
        instancePath: instancePath + "/connectionPool",
        parentData: data,
        parentDataProperty: "connectionPool",
        rootData
      })) {
        vErrors = vErrors === null ? validate64.errors : vErrors.concat(validate64.errors);
        errors = vErrors.length;
      }
    }
    if (data.loadBalancer !== undefined) {
      if (!validate85(data.loadBalancer, {
        instancePath: instancePath + "/loadBalancer",
        parentData: data,
        parentDataProperty: "loadBalancer",
        rootData
      })) {
        vErrors = vErrors === null ? validate85.errors : vErrors.concat(validate85.errors);
        errors = vErrors.length;
      }
    }
    if (data.outlierDetection !== undefined) {
      if (!validate133(data.outlierDetection, {
        instancePath: instancePath + "/outlierDetection",
        parentData: data,
        parentDataProperty: "outlierDetection",
        rootData
      })) {
        vErrors = vErrors === null ? validate133.errors : vErrors.concat(validate133.errors);
        errors = vErrors.length;
      }
    }
    if (data.port !== undefined) {
      if (!validate162(data.port, {
        instancePath: instancePath + "/port",
        parentData: data,
        parentDataProperty: "port",
        rootData
      })) {
        vErrors = vErrors === null ? validate162.errors : vErrors.concat(validate162.errors);
        errors = vErrors.length;
      }
    }
    if (data.tls !== undefined) {
      if (!validate143(data.tls, {
        instancePath: instancePath + "/tls",
        parentData: data,
        parentDataProperty: "tls",
        rootData
      })) {
        vErrors = vErrors === null ? validate143.errors : vErrors.concat(validate143.errors);
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
      if (!validate158(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
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
  "properties": {
    "protocol": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "targetHost": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "targetPort": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    }
  },
  "type": "object",
  "nullable": true
};
function validate169(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.protocol !== undefined) {
      if (!validate22(data.protocol, {
        instancePath: instancePath + "/protocol",
        parentData: data,
        parentDataProperty: "protocol",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.targetHost !== undefined) {
      if (!validate22(data.targetHost, {
        instancePath: instancePath + "/targetHost",
        parentData: data,
        parentDataProperty: "targetHost",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.targetPort !== undefined) {
      if (!validate24(data.targetPort, {
        instancePath: instancePath + "/targetPort",
        parentData: data,
        parentDataProperty: "targetPort",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate169.errors = vErrors;
  return errors === 0;
}
function validate153(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.connectionPool !== undefined) {
      if (!validate64(data.connectionPool, {
        instancePath: instancePath + "/connectionPool",
        parentData: data,
        parentDataProperty: "connectionPool",
        rootData
      })) {
        vErrors = vErrors === null ? validate64.errors : vErrors.concat(validate64.errors);
        errors = vErrors.length;
      }
    }
    if (data.loadBalancer !== undefined) {
      if (!validate85(data.loadBalancer, {
        instancePath: instancePath + "/loadBalancer",
        parentData: data,
        parentDataProperty: "loadBalancer",
        rootData
      })) {
        vErrors = vErrors === null ? validate85.errors : vErrors.concat(validate85.errors);
        errors = vErrors.length;
      }
    }
    if (data.outlierDetection !== undefined) {
      if (!validate133(data.outlierDetection, {
        instancePath: instancePath + "/outlierDetection",
        parentData: data,
        parentDataProperty: "outlierDetection",
        rootData
      })) {
        vErrors = vErrors === null ? validate133.errors : vErrors.concat(validate133.errors);
        errors = vErrors.length;
      }
    }
    if (data.portLevelSettings !== undefined) {
      if (!validate157(data.portLevelSettings, {
        instancePath: instancePath + "/portLevelSettings",
        parentData: data,
        parentDataProperty: "portLevelSettings",
        rootData
      })) {
        vErrors = vErrors === null ? validate157.errors : vErrors.concat(validate157.errors);
        errors = vErrors.length;
      }
    }
    if (data.tls !== undefined) {
      if (!validate143(data.tls, {
        instancePath: instancePath + "/tls",
        parentData: data,
        parentDataProperty: "tls",
        rootData
      })) {
        vErrors = vErrors === null ? validate143.errors : vErrors.concat(validate143.errors);
        errors = vErrors.length;
      }
    }
    if (data.tunnel !== undefined) {
      if (!validate169(data.tunnel, {
        instancePath: instancePath + "/tunnel",
        parentData: data,
        parentDataProperty: "tunnel",
        rootData
      })) {
        vErrors = vErrors === null ? validate169.errors : vErrors.concat(validate169.errors);
        errors = vErrors.length;
      }
    }
  }
  validate153.errors = vErrors;
  return errors === 0;
}
function validate181(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.labels !== undefined) {
      if (!validate174(data.labels, {
        instancePath: instancePath + "/labels",
        parentData: data,
        parentDataProperty: "labels",
        rootData
      })) {
        vErrors = vErrors === null ? validate174.errors : vErrors.concat(validate174.errors);
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
    if (data.trafficPolicy !== undefined) {
      if (!validate153(data.trafficPolicy, {
        instancePath: instancePath + "/trafficPolicy",
        parentData: data,
        parentDataProperty: "trafficPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate153.errors : vErrors.concat(validate153.errors);
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
const schema61 = {
  "properties": {
    "matchLabels": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    }
  },
  "type": "object",
  "nullable": true
};
function validate188(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.matchLabels !== undefined) {
      if (!validate174(data.matchLabels, {
        instancePath: instancePath + "/matchLabels",
        parentData: data,
        parentDataProperty: "matchLabels",
        rootData
      })) {
        vErrors = vErrors === null ? validate174.errors : vErrors.concat(validate174.errors);
        errors = vErrors.length;
      }
    }
  }
  validate188.errors = vErrors;
  return errors === 0;
}
function validate177(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.exportTo !== undefined) {
      if (!validate26(data.exportTo, {
        instancePath: instancePath + "/exportTo",
        parentData: data,
        parentDataProperty: "exportTo",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.host !== undefined) {
      if (!validate22(data.host, {
        instancePath: instancePath + "/host",
        parentData: data,
        parentDataProperty: "host",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.subsets !== undefined) {
      if (!validate180(data.subsets, {
        instancePath: instancePath + "/subsets",
        parentData: data,
        parentDataProperty: "subsets",
        rootData
      })) {
        vErrors = vErrors === null ? validate180.errors : vErrors.concat(validate180.errors);
        errors = vErrors.length;
      }
    }
    if (data.trafficPolicy !== undefined) {
      if (!validate153(data.trafficPolicy, {
        instancePath: instancePath + "/trafficPolicy",
        parentData: data,
        parentDataProperty: "trafficPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate153.errors : vErrors.concat(validate153.errors);
        errors = vErrors.length;
      }
    }
    if (data.workloadSelector !== undefined) {
      if (!validate188(data.workloadSelector, {
        instancePath: instancePath + "/workloadSelector",
        parentData: data,
        parentDataProperty: "workloadSelector",
        rootData
      })) {
        vErrors = vErrors === null ? validate188.errors : vErrors.concat(validate188.errors);
        errors = vErrors.length;
      }
    }
  }
  validate177.errors = vErrors;
  return errors === 0;
}
const schema62 = {
  "type": "object",
  "properties": {},
  "nullable": true
};
function validate192(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate192.errors = vErrors;
  return errors === 0;
}
const schema63 = {
  "type": "string",
  "enum": ["networking.istio.io/v1alpha3"]
};
function validate194(data, {
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
  if (!(data === "networking.istio.io/v1alpha3")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema63.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate194.errors = vErrors;
  return errors === 0;
}
const schema64 = {
  "type": "string",
  "enum": ["DestinationRule"]
};
function validate196(data, {
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
  if (!(data === "DestinationRule")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema64.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate196.errors = vErrors;
  return errors === 0;
}
const schema65 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
};
const schema66 = {};
import { validate as validate199 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
function validate198(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate199(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate199.errors : vErrors.concat(validate199.errors);
      errors = vErrors.length;
    }
  }
  validate198.errors = vErrors;
  return errors === 0;
}
function validate176(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="networking.istio.io.v1alpha3.DestinationRule" */;
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
    if (data.spec !== undefined) {
      if (!validate177(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate177.errors : vErrors.concat(validate177.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate192(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate192.errors : vErrors.concat(validate192.errors);
        errors = vErrors.length;
      }
    }
    if (data.apiVersion !== undefined) {
      if (!validate194(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate194.errors : vErrors.concat(validate194.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate196(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate196.errors : vErrors.concat(validate196.errors);
        errors = vErrors.length;
      }
    }
    if (data.metadata !== undefined) {
      if (!validate198(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate198.errors : vErrors.concat(validate198.errors);
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
  validate176.errors = vErrors;
  return errors === 0;
}