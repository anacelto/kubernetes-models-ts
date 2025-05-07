import { formats } from "@kubernetes-models/validate";
export const validate = validate38;
const schema16 = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "$ref": "yqJOH5rGMSQQ7RPtPnENpviz13Byf5q2sSJy2lV4"
    },
    "kind": {
      "$ref": "wPQ3UiecLgbsvaL6Zjsr834ENvegfYOtkPoK6lq6A"
    },
    "metadata": {
      "$ref": "a6f0oUEaFqHmymdwnqPORTNOTU7GczWAkwGD0uYU"
    },
    "spec": {
      "$ref": "7NfcXg7cRv81WAFJ5qkzfVbxcmGGdODuktDsJ7PoGUY"
    },
    "status": {
      "$ref": "R3G4siyGYTEw1bHCYbAhVzXpZKD1VlgmBXAK3Rvq0Pk"
    }
  },
  "required": ["spec", "apiVersion", "kind"],
  "$id": "networking.gke.io.v1.HealthCheckPolicy"
};
const schema17 = {
  "type": "string",
  "enum": ["networking.gke.io/v1"]
};
function validate39(data, {
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
  if (!(data === "networking.gke.io/v1")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema17.enum
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
const schema18 = {
  "type": "string",
  "enum": ["HealthCheckPolicy"]
};
function validate41(data, {
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
  if (!(data === "HealthCheckPolicy")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema18.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate41.errors = vErrors;
  return errors === 0;
}
const schema19 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
};
const schema20 = {};
import { validate as validate44 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
function validate43(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate44(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate44.errors : vErrors.concat(validate44.errors);
      errors = vErrors.length;
    }
  }
  validate43.errors = vErrors;
  return errors === 0;
}
const schema21 = {
  "properties": {
    "default": {
      "$ref": "8D1I9omNfx4hySkM7xwRv77m2KJsnRKXOinMf13U3U"
    },
    "targetRef": {
      "$ref": "D1xlpX2Flyd4dcQGTikrHugbsPbDWRHArm4TPmHOoDI"
    }
  },
  "required": ["targetRef"],
  "type": "object"
};
const schema22 = {
  "properties": {
    "checkIntervalSec": {
      "$ref": "arknXTrQUmaS816UNJ03uvVtemlNpwMHoSSehl26lRA"
    },
    "config": {
      "$ref": "kTVmyE44Q4voAsFLl16KyWDKBtBbtyl34qZfnw8fJw"
    },
    "healthyThreshold": {
      "$ref": "moEkpWELltbhx3n87WZ6sQBNeVXYw1Gs58lx9bPp1Wo"
    },
    "logConfig": {
      "$ref": "jGnVHu3UZIESVSbmGsblHm4RqAftnIrItcRlvqGcAs"
    },
    "timeoutSec": {
      "$ref": "arknXTrQUmaS816UNJ03uvVtemlNpwMHoSSehl26lRA"
    },
    "unhealthyThreshold": {
      "$ref": "moEkpWELltbhx3n87WZ6sQBNeVXYw1Gs58lx9bPp1Wo"
    }
  },
  "type": "object",
  "nullable": true
};
const schema14 = {
  "format": "int64",
  "type": "integer",
  "minimum": 1,
  "maximum": 300,
  "nullable": true
};
const formats0 = formats.int64;
function validate36(data, {
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
    if (data > 300 || isNaN(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/maximum",
        keyword: "maximum",
        params: {
          comparison: "<=",
          limit: 300
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data < 1 || isNaN(data)) {
      const err2 = {
        instancePath,
        schemaPath: "#/minimum",
        keyword: "minimum",
        params: {
          comparison: ">=",
          limit: 1
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (!formats0.validate(data)) {
      const err3 = {
        instancePath,
        schemaPath: "#/format",
        keyword: "format",
        params: {
          format: "int64"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
  }
  validate36.errors = vErrors;
  return errors === 0;
}
const schema23 = {
  "maxProperties": 2,
  "minProperties": 2,
  "properties": {
    "grpcHealthCheck": {
      "$ref": "2IDIeC95tugJOlbq6hNZCl4mvpCI8ZLInZhoHHjZc"
    },
    "http2HealthCheck": {
      "$ref": "e9TtK3ljbISvIWePHwgNybLnXXyEon375WK0GSQwVk"
    },
    "httpHealthCheck": {
      "$ref": "e9TtK3ljbISvIWePHwgNybLnXXyEon375WK0GSQwVk"
    },
    "httpsHealthCheck": {
      "$ref": "e9TtK3ljbISvIWePHwgNybLnXXyEon375WK0GSQwVk"
    },
    "tcpHealthCheck": {
      "$ref": "4SseDWGAQlEcySPeXvG01n52P7xWuPksMQeorWYYo"
    },
    "type": {
      "$ref": "9lV5DONy5xvmIET0Mb3xiGzd3dAxH9sfYAWGY8zGc"
    }
  },
  "type": "object",
  "nullable": true
};
const schema24 = {
  "properties": {
    "grpcServiceName": {
      "$ref": "qZjV3sexnGq7oXlwaWqVCmRRTAPRNVXteshwCOWg"
    },
    "port": {
      "$ref": "D24BXYgDgJioOqUvqhH0SRACUApuUddBgwK7MFJ8"
    },
    "portName": {
      "$ref": "DVDrVtPXMWYgoJxbvae8Xn7GRgFNY5lEhLqi3YsME"
    },
    "portSpecification": {
      "$ref": "PRAzM3aA0LqBTonFyjssVF9fPwEI1PWXIprEZ0nR4c"
    }
  },
  "type": "object",
  "nullable": true
};
const schema9 = {
  "maxLength": 1024,
  "pattern": "[\\x00-\\xFF]+",
  "type": "string",
  "nullable": true
};
import func2 from "@kubernetes-models/validate/runtime/ucs2length";
const pattern1 = new RegExp("[\\x00-\\xFF]+", "u");
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
    if (func2(data) > 1024) {
      const err1 = {
        instancePath,
        schemaPath: "#/maxLength",
        keyword: "maxLength",
        params: {
          limit: 1024
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (!pattern1.test(data)) {
      const err2 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "[\\x00-\\xFF]+"
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
  validate24.errors = vErrors;
  return errors === 0;
}
const schema6 = {
  "format": "int64",
  "type": "integer",
  "minimum": 1,
  "maximum": 65535,
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
    if (data > 65535 || isNaN(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/maximum",
        keyword: "maximum",
        params: {
          comparison: "<=",
          limit: 65535
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data < 1 || isNaN(data)) {
      const err2 = {
        instancePath,
        schemaPath: "#/minimum",
        keyword: "minimum",
        params: {
          comparison: ">=",
          limit: 1
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (!formats0.validate(data)) {
      const err3 = {
        instancePath,
        schemaPath: "#/format",
        keyword: "format",
        params: {
          format: "int64"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
  }
  validate21.errors = vErrors;
  return errors === 0;
}
const schema7 = {
  "maxLength": 63,
  "pattern": "[a-z]([-a-z0-9]*[a-z0-9])?",
  "type": "string",
  "nullable": true
};
const pattern0 = new RegExp("[a-z]([-a-z0-9]*[a-z0-9])?", "u");
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
  if (typeof data === "string") {
    if (func2(data) > 63) {
      const err1 = {
        instancePath,
        schemaPath: "#/maxLength",
        keyword: "maxLength",
        params: {
          limit: 63
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
          pattern: "[a-z]([-a-z0-9]*[a-z0-9])?"
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
  validate22.errors = vErrors;
  return errors === 0;
}
const schema8 = {
  "enum": ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"],
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
  if (!(data === "USE_FIXED_PORT" || data === "USE_NAMED_PORT" || data === "USE_SERVING_PORT")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema8.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate23.errors = vErrors;
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
    if (data.grpcServiceName !== undefined) {
      if (!validate24(data.grpcServiceName, {
        instancePath: instancePath + "/grpcServiceName",
        parentData: data,
        parentDataProperty: "grpcServiceName",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.port !== undefined) {
      if (!validate21(data.port, {
        instancePath: instancePath + "/port",
        parentData: data,
        parentDataProperty: "port",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.portName !== undefined) {
      if (!validate22(data.portName, {
        instancePath: instancePath + "/portName",
        parentData: data,
        parentDataProperty: "portName",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.portSpecification !== undefined) {
      if (!validate23(data.portSpecification, {
        instancePath: instancePath + "/portSpecification",
        parentData: data,
        parentDataProperty: "portSpecification",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate51.errors = vErrors;
  return errors === 0;
}
const schema10 = {
  "properties": {
    "host": {
      "$ref": "sfJdumy9NtfzWGI2NOWNsLHcgxempgp5MJaDMhtOmQ"
    },
    "port": {
      "$ref": "D24BXYgDgJioOqUvqhH0SRACUApuUddBgwK7MFJ8"
    },
    "portName": {
      "$ref": "DVDrVtPXMWYgoJxbvae8Xn7GRgFNY5lEhLqi3YsME"
    },
    "portSpecification": {
      "$ref": "PRAzM3aA0LqBTonFyjssVF9fPwEI1PWXIprEZ0nR4c"
    },
    "proxyHeader": {
      "$ref": "HBXMrmc8HxPyQigAYzRzyyDhMT83gGHbi2rZBXnI"
    },
    "requestPath": {
      "$ref": "wVA5iDJwo1qjZq89v2Cfz0mh0IE0CTbHwVHyoQMQtnI"
    },
    "response": {
      "$ref": "qZjV3sexnGq7oXlwaWqVCmRRTAPRNVXteshwCOWg"
    }
  },
  "type": "object",
  "nullable": true
};
const schema11 = {
  "maxLength": 2048,
  "pattern": "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
  "type": "string",
  "nullable": true
};
const pattern2 = new RegExp("^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$", "u");
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
    if (func2(data) > 2048) {
      const err1 = {
        instancePath,
        schemaPath: "#/maxLength",
        keyword: "maxLength",
        params: {
          limit: 2048
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (!pattern2.test(data)) {
      const err2 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$"
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
  validate26.errors = vErrors;
  return errors === 0;
}
const schema12 = {
  "enum": ["NONE", "PROXY_V1"],
  "type": "string",
  "nullable": true
};
function validate31(data, {
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
  if (!(data === "NONE" || data === "PROXY_V1")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema12.enum
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
const schema13 = {
  "maxLength": 2048,
  "pattern": "\\/[A-Za-z0-9\\/\\-._~%!?$&'()*+,;=:]*$",
  "type": "string",
  "nullable": true
};
const pattern3 = new RegExp("\\/[A-Za-z0-9\\/\\-._~%!?$&'()*+,;=:]*$", "u");
function validate33(data, {
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
    if (func2(data) > 2048) {
      const err1 = {
        instancePath,
        schemaPath: "#/maxLength",
        keyword: "maxLength",
        params: {
          limit: 2048
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (!pattern3.test(data)) {
      const err2 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "\\/[A-Za-z0-9\\/\\-._~%!?$&'()*+,;=:]*$"
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
  validate33.errors = vErrors;
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
    if (data.host !== undefined) {
      if (!validate26(data.host, {
        instancePath: instancePath + "/host",
        parentData: data,
        parentDataProperty: "host",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.port !== undefined) {
      if (!validate21(data.port, {
        instancePath: instancePath + "/port",
        parentData: data,
        parentDataProperty: "port",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.portName !== undefined) {
      if (!validate22(data.portName, {
        instancePath: instancePath + "/portName",
        parentData: data,
        parentDataProperty: "portName",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.portSpecification !== undefined) {
      if (!validate23(data.portSpecification, {
        instancePath: instancePath + "/portSpecification",
        parentData: data,
        parentDataProperty: "portSpecification",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.proxyHeader !== undefined) {
      if (!validate31(data.proxyHeader, {
        instancePath: instancePath + "/proxyHeader",
        parentData: data,
        parentDataProperty: "proxyHeader",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
    if (data.requestPath !== undefined) {
      if (!validate33(data.requestPath, {
        instancePath: instancePath + "/requestPath",
        parentData: data,
        parentDataProperty: "requestPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data.response !== undefined) {
      if (!validate24(data.response, {
        instancePath: instancePath + "/response",
        parentData: data,
        parentDataProperty: "response",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate25.errors = vErrors;
  return errors === 0;
}
const schema25 = {
  "properties": {
    "port": {
      "$ref": "D24BXYgDgJioOqUvqhH0SRACUApuUddBgwK7MFJ8"
    },
    "portName": {
      "$ref": "DVDrVtPXMWYgoJxbvae8Xn7GRgFNY5lEhLqi3YsME"
    },
    "portSpecification": {
      "$ref": "PRAzM3aA0LqBTonFyjssVF9fPwEI1PWXIprEZ0nR4c"
    },
    "proxyHeader": {
      "$ref": "HBXMrmc8HxPyQigAYzRzyyDhMT83gGHbi2rZBXnI"
    },
    "request": {
      "$ref": "qZjV3sexnGq7oXlwaWqVCmRRTAPRNVXteshwCOWg"
    },
    "response": {
      "$ref": "qZjV3sexnGq7oXlwaWqVCmRRTAPRNVXteshwCOWg"
    }
  },
  "type": "object",
  "nullable": true
};
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
    if (data.port !== undefined) {
      if (!validate21(data.port, {
        instancePath: instancePath + "/port",
        parentData: data,
        parentDataProperty: "port",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.portName !== undefined) {
      if (!validate22(data.portName, {
        instancePath: instancePath + "/portName",
        parentData: data,
        parentDataProperty: "portName",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.portSpecification !== undefined) {
      if (!validate23(data.portSpecification, {
        instancePath: instancePath + "/portSpecification",
        parentData: data,
        parentDataProperty: "portSpecification",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.proxyHeader !== undefined) {
      if (!validate31(data.proxyHeader, {
        instancePath: instancePath + "/proxyHeader",
        parentData: data,
        parentDataProperty: "proxyHeader",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
    if (data.request !== undefined) {
      if (!validate24(data.request, {
        instancePath: instancePath + "/request",
        parentData: data,
        parentDataProperty: "request",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.response !== undefined) {
      if (!validate24(data.response, {
        instancePath: instancePath + "/response",
        parentData: data,
        parentDataProperty: "response",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate60.errors = vErrors;
  return errors === 0;
}
const schema26 = {
  "enum": ["TCP", "HTTP", "HTTPS", "HTTP2", "GRPC"],
  "type": "string",
  "nullable": true
};
function validate68(data, {
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
  if (!(data === "TCP" || data === "HTTP" || data === "HTTPS" || data === "HTTP2" || data === "GRPC")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema26.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate68.errors = vErrors;
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
    if (Object.keys(data).length > 2) {
      const err1 = {
        instancePath,
        schemaPath: "#/maxProperties",
        keyword: "maxProperties",
        params: {
          limit: 2
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (Object.keys(data).length < 2) {
      const err2 = {
        instancePath,
        schemaPath: "#/minProperties",
        keyword: "minProperties",
        params: {
          limit: 2
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.grpcHealthCheck !== undefined) {
      if (!validate51(data.grpcHealthCheck, {
        instancePath: instancePath + "/grpcHealthCheck",
        parentData: data,
        parentDataProperty: "grpcHealthCheck",
        rootData
      })) {
        vErrors = vErrors === null ? validate51.errors : vErrors.concat(validate51.errors);
        errors = vErrors.length;
      }
    }
    if (data.http2HealthCheck !== undefined) {
      if (!validate25(data.http2HealthCheck, {
        instancePath: instancePath + "/http2HealthCheck",
        parentData: data,
        parentDataProperty: "http2HealthCheck",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.httpHealthCheck !== undefined) {
      if (!validate25(data.httpHealthCheck, {
        instancePath: instancePath + "/httpHealthCheck",
        parentData: data,
        parentDataProperty: "httpHealthCheck",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.httpsHealthCheck !== undefined) {
      if (!validate25(data.httpsHealthCheck, {
        instancePath: instancePath + "/httpsHealthCheck",
        parentData: data,
        parentDataProperty: "httpsHealthCheck",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.tcpHealthCheck !== undefined) {
      if (!validate60(data.tcpHealthCheck, {
        instancePath: instancePath + "/tcpHealthCheck",
        parentData: data,
        parentDataProperty: "tcpHealthCheck",
        rootData
      })) {
        vErrors = vErrors === null ? validate60.errors : vErrors.concat(validate60.errors);
        errors = vErrors.length;
      }
    }
    if (data.type !== undefined) {
      if (!validate68(data.type, {
        instancePath: instancePath + "/type",
        parentData: data,
        parentDataProperty: "type",
        rootData
      })) {
        vErrors = vErrors === null ? validate68.errors : vErrors.concat(validate68.errors);
        errors = vErrors.length;
      }
    }
  }
  validate50.errors = vErrors;
  return errors === 0;
}
const schema15 = {
  "format": "int64",
  "type": "integer",
  "minimum": 1,
  "maximum": 10,
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
    if (data > 10 || isNaN(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/maximum",
        keyword: "maximum",
        params: {
          comparison: "<=",
          limit: 10
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data < 1 || isNaN(data)) {
      const err2 = {
        instancePath,
        schemaPath: "#/minimum",
        keyword: "minimum",
        params: {
          comparison: ">=",
          limit: 1
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (!formats0.validate(data)) {
      const err3 = {
        instancePath,
        schemaPath: "#/format",
        keyword: "format",
        params: {
          format: "int64"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
  }
  validate37.errors = vErrors;
  return errors === 0;
}
const schema27 = {
  "properties": {
    "enabled": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "type": "object",
  "nullable": true
};
const schema28 = {
  "type": "boolean",
  "nullable": true
};
function validate73(data, {
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
  validate73.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.enabled !== undefined) {
      if (!validate73(data.enabled, {
        instancePath: instancePath + "/enabled",
        parentData: data,
        parentDataProperty: "enabled",
        rootData
      })) {
        vErrors = vErrors === null ? validate73.errors : vErrors.concat(validate73.errors);
        errors = vErrors.length;
      }
    }
  }
  validate72.errors = vErrors;
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
    if (data.checkIntervalSec !== undefined) {
      if (!validate36(data.checkIntervalSec, {
        instancePath: instancePath + "/checkIntervalSec",
        parentData: data,
        parentDataProperty: "checkIntervalSec",
        rootData
      })) {
        vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
        errors = vErrors.length;
      }
    }
    if (data.config !== undefined) {
      if (!validate50(data.config, {
        instancePath: instancePath + "/config",
        parentData: data,
        parentDataProperty: "config",
        rootData
      })) {
        vErrors = vErrors === null ? validate50.errors : vErrors.concat(validate50.errors);
        errors = vErrors.length;
      }
    }
    if (data.healthyThreshold !== undefined) {
      if (!validate37(data.healthyThreshold, {
        instancePath: instancePath + "/healthyThreshold",
        parentData: data,
        parentDataProperty: "healthyThreshold",
        rootData
      })) {
        vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
        errors = vErrors.length;
      }
    }
    if (data.logConfig !== undefined) {
      if (!validate72(data.logConfig, {
        instancePath: instancePath + "/logConfig",
        parentData: data,
        parentDataProperty: "logConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate72.errors : vErrors.concat(validate72.errors);
        errors = vErrors.length;
      }
    }
    if (data.timeoutSec !== undefined) {
      if (!validate36(data.timeoutSec, {
        instancePath: instancePath + "/timeoutSec",
        parentData: data,
        parentDataProperty: "timeoutSec",
        rootData
      })) {
        vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
        errors = vErrors.length;
      }
    }
    if (data.unhealthyThreshold !== undefined) {
      if (!validate37(data.unhealthyThreshold, {
        instancePath: instancePath + "/unhealthyThreshold",
        parentData: data,
        parentDataProperty: "unhealthyThreshold",
        rootData
      })) {
        vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
        errors = vErrors.length;
      }
    }
  }
  validate48.errors = vErrors;
  return errors === 0;
}
const schema29 = {
  "properties": {
    "group": {
      "$ref": "LLmBAKMEHxCQnlH1ZodmJojMDIuUyAf0lQ04bymmXA"
    },
    "kind": {
      "$ref": "5BBoRfrZrwyRu9wJwHnK0wHJ0kUoAmhsYhy9Vpr0bks"
    },
    "name": {
      "$ref": "xwpijLRhjUEJllEse3cgJuQz6UsEYqfhm0t12sQjFe4"
    },
    "namespace": {
      "$ref": "Akj54RI3dyfFlv1La3cxax8Lq4MO2H4UuEjMhXZW4"
    }
  },
  "required": ["group", "kind", "name"],
  "type": "object"
};
const schema30 = {
  "maxLength": 253,
  "pattern": "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
  "type": "string"
};
const pattern4 = new RegExp("^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$", "u");
function validate80(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (func2(data) > 253) {
      const err0 = {
        instancePath,
        schemaPath: "#/maxLength",
        keyword: "maxLength",
        params: {
          limit: 253
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (!pattern4.test(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$"
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
  validate80.errors = vErrors;
  return errors === 0;
}
const schema31 = {
  "maxLength": 63,
  "minLength": 1,
  "pattern": "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
  "type": "string"
};
const pattern5 = new RegExp("^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$", "u");
function validate82(data, {
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
    if (!pattern5.test(data)) {
      const err2 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$"
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
  validate82.errors = vErrors;
  return errors === 0;
}
const schema32 = {
  "maxLength": 253,
  "minLength": 1,
  "type": "string"
};
function validate84(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (func2(data) > 253) {
      const err0 = {
        instancePath,
        schemaPath: "#/maxLength",
        keyword: "maxLength",
        params: {
          limit: 253
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
  validate84.errors = vErrors;
  return errors === 0;
}
const schema33 = {
  "maxLength": 63,
  "minLength": 1,
  "pattern": "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$",
  "type": "string",
  "nullable": true
};
const pattern6 = new RegExp("^[a-z0-9]([-a-z0-9]*[a-z0-9])?$", "u");
function validate86(data, {
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
    if (func2(data) > 63) {
      const err1 = {
        instancePath,
        schemaPath: "#/maxLength",
        keyword: "maxLength",
        params: {
          limit: 63
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (func2(data) < 1) {
      const err2 = {
        instancePath,
        schemaPath: "#/minLength",
        keyword: "minLength",
        params: {
          limit: 1
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (!pattern6.test(data)) {
      const err3 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
  }
  validate86.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.group === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "group"
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
    if (data.group !== undefined) {
      if (!validate80(data.group, {
        instancePath: instancePath + "/group",
        parentData: data,
        parentDataProperty: "group",
        rootData
      })) {
        vErrors = vErrors === null ? validate80.errors : vErrors.concat(validate80.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate82(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate82.errors : vErrors.concat(validate82.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate84(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate84.errors : vErrors.concat(validate84.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespace !== undefined) {
      if (!validate86(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate86.errors : vErrors.concat(validate86.errors);
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
  validate79.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.targetRef === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "targetRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.default !== undefined) {
      if (!validate48(data.default, {
        instancePath: instancePath + "/default",
        parentData: data,
        parentDataProperty: "default",
        rootData
      })) {
        vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
        errors = vErrors.length;
      }
    }
    if (data.targetRef !== undefined) {
      if (!validate79(data.targetRef, {
        instancePath: instancePath + "/targetRef",
        parentData: data,
        parentDataProperty: "targetRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate79.errors : vErrors.concat(validate79.errors);
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
  validate47.errors = vErrors;
  return errors === 0;
}
const schema34 = {
  "properties": {
    "conditions": {
      "$ref": "nQofwLxUARIAm7lPjJtjxdH4cK8B2hcYU44fk9SqLQ"
    }
  },
  "type": "object",
  "nullable": true
};
const schema35 = {
  "items": {
    "$ref": "qF2xzAbTxVDKuLvsNu75Dkz2iJf8KcuXclF0tKipnn0"
  },
  "maxItems": 8,
  "type": "array",
  "nullable": true
};
const schema36 = {
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
const schema37 = {
  "format": "date-time",
  "type": "string"
};
const formats6 = formats["date-time"];
function validate93(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (!formats6.validate(data)) {
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
  validate93.errors = vErrors;
  return errors === 0;
}
const schema38 = {
  "maxLength": 32768,
  "type": "string"
};
function validate95(data, {
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
  validate95.errors = vErrors;
  return errors === 0;
}
const schema39 = {
  "format": "int64",
  "type": "integer",
  "minimum": 0,
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
    if (!formats0.validate(data)) {
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
  validate97.errors = vErrors;
  return errors === 0;
}
const schema40 = {
  "maxLength": 1024,
  "minLength": 1,
  "pattern": "^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$",
  "type": "string"
};
const pattern7 = new RegExp("^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$", "u");
function validate99(data, {
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
    if (!pattern7.test(data)) {
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
  validate99.errors = vErrors;
  return errors === 0;
}
const schema41 = {
  "enum": ["True", "False", "Unknown"],
  "type": "string"
};
function validate101(data, {
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
        allowedValues: schema41.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate101.errors = vErrors;
  return errors === 0;
}
const schema42 = {
  "maxLength": 316,
  "pattern": "^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$",
  "type": "string"
};
const pattern8 = new RegExp("^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$", "u");
function validate103(data, {
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
    if (!pattern8.test(data)) {
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
  validate103.errors = vErrors;
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
      if (!validate93(data.lastTransitionTime, {
        instancePath: instancePath + "/lastTransitionTime",
        parentData: data,
        parentDataProperty: "lastTransitionTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate93.errors : vErrors.concat(validate93.errors);
        errors = vErrors.length;
      }
    }
    if (data.message !== undefined) {
      if (!validate95(data.message, {
        instancePath: instancePath + "/message",
        parentData: data,
        parentDataProperty: "message",
        rootData
      })) {
        vErrors = vErrors === null ? validate95.errors : vErrors.concat(validate95.errors);
        errors = vErrors.length;
      }
    }
    if (data.observedGeneration !== undefined) {
      if (!validate97(data.observedGeneration, {
        instancePath: instancePath + "/observedGeneration",
        parentData: data,
        parentDataProperty: "observedGeneration",
        rootData
      })) {
        vErrors = vErrors === null ? validate97.errors : vErrors.concat(validate97.errors);
        errors = vErrors.length;
      }
    }
    if (data.reason !== undefined) {
      if (!validate99(data.reason, {
        instancePath: instancePath + "/reason",
        parentData: data,
        parentDataProperty: "reason",
        rootData
      })) {
        vErrors = vErrors === null ? validate99.errors : vErrors.concat(validate99.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate101(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate101.errors : vErrors.concat(validate101.errors);
        errors = vErrors.length;
      }
    }
    if (data.type !== undefined) {
      if (!validate103(data.type, {
        instancePath: instancePath + "/type",
        parentData: data,
        parentDataProperty: "type",
        rootData
      })) {
        vErrors = vErrors === null ? validate103.errors : vErrors.concat(validate103.errors);
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
  validate92.errors = vErrors;
  return errors === 0;
}
function validate91(data, {
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
    if (data.length > 8) {
      const err1 = {
        instancePath,
        schemaPath: "#/maxItems",
        keyword: "maxItems",
        params: {
          limit: 8
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate92(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate92.errors : vErrors.concat(validate92.errors);
        errors = vErrors.length;
      }
    }
  }
  validate91.errors = vErrors;
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
      if (!validate91(data.conditions, {
        instancePath: instancePath + "/conditions",
        parentData: data,
        parentDataProperty: "conditions",
        rootData
      })) {
        vErrors = vErrors === null ? validate91.errors : vErrors.concat(validate91.errors);
        errors = vErrors.length;
      }
    }
  }
  validate90.errors = vErrors;
  return errors === 0;
}
function validate38(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="networking.gke.io.v1.HealthCheckPolicy" */;
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
      if (!validate39(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate41(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
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
      if (!validate47(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate47.errors : vErrors.concat(validate47.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate90(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate90.errors : vErrors.concat(validate90.errors);
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
  validate38.errors = vErrors;
  return errors === 0;
}