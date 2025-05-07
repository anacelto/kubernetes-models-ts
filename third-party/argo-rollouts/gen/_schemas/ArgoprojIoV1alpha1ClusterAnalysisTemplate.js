import { formats } from "@kubernetes-models/validate";
export const validate = validate230;
const schema66 = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "$ref": "h09q0hLDPhAtdaNAbTOec47bnHUwYEDqp6bGKWiGUQ"
    },
    "kind": {
      "$ref": "ya4pohDFzcjOyRR1txFPwo6qZQkwvWPybBm4QlkLw"
    },
    "metadata": {
      "$ref": "a6f0oUEaFqHmymdwnqPORTNOTU7GczWAkwGD0uYU"
    },
    "spec": {
      "$ref": "dccVib6iscOo9aL7kRxgGfHfetsaqkOcXJYLwVCAns"
    }
  },
  "required": ["spec", "apiVersion", "kind"],
  "$id": "argoproj.io.v1alpha1.ClusterAnalysisTemplate"
};
const schema67 = {
  "type": "string",
  "enum": ["argoproj.io/v1alpha1"]
};
function validate231(data, {
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
  if (!(data === "argoproj.io/v1alpha1")) {
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
  validate231.errors = vErrors;
  return errors === 0;
}
const schema68 = {
  "type": "string",
  "enum": ["ClusterAnalysisTemplate"]
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
  if (!(data === "ClusterAnalysisTemplate")) {
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
  validate233.errors = vErrors;
  return errors === 0;
}
const schema69 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
};
const schema70 = {};
import { validate as validate236 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
function validate235(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate236(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate236.errors : vErrors.concat(validate236.errors);
      errors = vErrors.length;
    }
  }
  validate235.errors = vErrors;
  return errors === 0;
}
const schema71 = {
  "properties": {
    "args": {
      "$ref": "8yXBcJgWtUWOy0QZKvhWVb4z3oNdknL91kqgfM54rI"
    },
    "dryRun": {
      "$ref": "h9wfPocVNaA2zv4SBteqVzEYMfAfveFD8WhoC0fg"
    },
    "measurementRetention": {
      "$ref": "IBpetfIxMbHIPVMz9E7ZhKNpoKRPPJrEXZsSYB2QkTs"
    },
    "metrics": {
      "$ref": "AXqogyuf8TBAOJqqFWQpir9AXwAh9xsxZirip4pi4"
    }
  },
  "required": ["metrics"],
  "type": "object"
};
const schema72 = {
  "items": {
    "$ref": "Epkpw8QlHYbZbjEIWfante1vdyioA1QpA9ksY7Lk54"
  },
  "type": "array",
  "nullable": true
};
const schema73 = {
  "properties": {
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "value": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "valueFrom": {
      "$ref": "CSILjbYJ9suqDFJ0Xl1cSebTwkSnjnoMgwxZAzAXDeI"
    }
  },
  "required": ["name"],
  "type": "object"
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
const schema74 = {
  "properties": {
    "fieldRef": {
      "$ref": "cpnRUZd0lPRa8MWNCNzoMwq6hjYd2qJ67OWAtaAZfq0"
    },
    "secretKeyRef": {
      "$ref": "wd4FMUZLeOmt41IoDi5IBmDiWCYLWSdr70R9KuyLJIY"
    }
  },
  "type": "object",
  "nullable": true
};
const schema75 = {
  "properties": {
    "fieldPath": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["fieldPath"],
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
    if (data.fieldPath !== undefined) {
      if (!validate21(data.fieldPath, {
        instancePath: instancePath + "/fieldPath",
        parentData: data,
        parentDataProperty: "fieldPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate245.errors = vErrors;
  return errors === 0;
}
const schema76 = {
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
function validate248(data, {
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
  validate248.errors = vErrors;
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
    if (data.fieldRef !== undefined) {
      if (!validate245(data.fieldRef, {
        instancePath: instancePath + "/fieldRef",
        parentData: data,
        parentDataProperty: "fieldRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate245.errors : vErrors.concat(validate245.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretKeyRef !== undefined) {
      if (!validate248(data.secretKeyRef, {
        instancePath: instancePath + "/secretKeyRef",
        parentData: data,
        parentDataProperty: "secretKeyRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate248.errors : vErrors.concat(validate248.errors);
        errors = vErrors.length;
      }
    }
  }
  validate244.errors = vErrors;
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
      if (!validate26(data.value, {
        instancePath: instancePath + "/value",
        parentData: data,
        parentDataProperty: "value",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.valueFrom !== undefined) {
      if (!validate244(data.valueFrom, {
        instancePath: instancePath + "/valueFrom",
        parentData: data,
        parentDataProperty: "valueFrom",
        rootData
      })) {
        vErrors = vErrors === null ? validate244.errors : vErrors.concat(validate244.errors);
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
  validate241.errors = vErrors;
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
      if (!validate241(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate241.errors : vErrors.concat(validate241.errors);
        errors = vErrors.length;
      }
    }
  }
  validate240.errors = vErrors;
  return errors === 0;
}
const schema77 = {
  "items": {
    "$ref": "V1WhnjJT0wSgRKTsgaRN1yPMt8zKAkaY3vc8zzax6Q"
  },
  "type": "array",
  "nullable": true
};
const schema78 = {
  "properties": {
    "metricName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["metricName"],
  "type": "object"
};
function validate256(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.metricName === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "metricName"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.metricName !== undefined) {
      if (!validate21(data.metricName, {
        instancePath: instancePath + "/metricName",
        parentData: data,
        parentDataProperty: "metricName",
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
  validate256.errors = vErrors;
  return errors === 0;
}
function validate255(data, {
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
      if (!validate256(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate256.errors : vErrors.concat(validate256.errors);
        errors = vErrors.length;
      }
    }
  }
  validate255.errors = vErrors;
  return errors === 0;
}
const schema79 = {
  "items": {
    "$ref": "lWh3MlVfSzKHP11V0InxnNrzqBttIlHDHnARTWfSy4"
  },
  "type": "array",
  "nullable": true
};
const schema80 = {
  "properties": {
    "limit": {
      "$ref": "ppOMqvYEA3GSH3ozhOJ2Wta6ImWhzC9DOYsjidshCYo"
    },
    "metricName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["limit", "metricName"],
  "type": "object"
};
const schema13 = {
  "format": "int32",
  "type": "integer"
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
  validate31.errors = vErrors;
  return errors === 0;
}
function validate261(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.limit === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "limit"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.metricName === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "metricName"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.limit !== undefined) {
      if (!validate31(data.limit, {
        instancePath: instancePath + "/limit",
        parentData: data,
        parentDataProperty: "limit",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
    if (data.metricName !== undefined) {
      if (!validate21(data.metricName, {
        instancePath: instancePath + "/metricName",
        parentData: data,
        parentDataProperty: "metricName",
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
  validate261.errors = vErrors;
  return errors === 0;
}
function validate260(data, {
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
      if (!validate261(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate261.errors : vErrors.concat(validate261.errors);
        errors = vErrors.length;
      }
    }
  }
  validate260.errors = vErrors;
  return errors === 0;
}
const schema81 = {
  "items": {
    "$ref": "9OrsAPvAZDUe3xrZJfS7i3D1emSupZqziQyfCrWmRgc"
  },
  "type": "array"
};
const schema82 = {
  "properties": {
    "consecutiveErrorLimit": {
      "$ref": "uJPY5JwdoQeyZsG50sBXB6uBQV8ScD7PtRRAnILoI3A"
    },
    "count": {
      "$ref": "uJPY5JwdoQeyZsG50sBXB6uBQV8ScD7PtRRAnILoI3A"
    },
    "failureCondition": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "failureLimit": {
      "$ref": "uJPY5JwdoQeyZsG50sBXB6uBQV8ScD7PtRRAnILoI3A"
    },
    "inconclusiveLimit": {
      "$ref": "uJPY5JwdoQeyZsG50sBXB6uBQV8ScD7PtRRAnILoI3A"
    },
    "initialDelay": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "interval": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "provider": {
      "$ref": "AQtr00Y8jO9R0WdFJFoT7FS4riNU3J7o08isWEKzex4"
    },
    "successCondition": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["name", "provider"],
  "type": "object"
};
const schema7 = {
  "anyOf": [{
    "$ref": "vMERCWCezVsdN7cIwlJvWJTP5QRRevuFDHNM3fdV8Q"
  }, {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  }]
};
const schema8 = {
  "type": "integer"
};
function validate23(data, {
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
  const _errs0 = errors;
  let valid0 = false;
  const _errs1 = errors;
  if (!validate23(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs2 = errors;
    if (!validate21(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
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
  validate22.errors = vErrors;
  return errors === 0;
}
const schema83 = {
  "properties": {
    "cloudWatch": {
      "$ref": "vxJevJic0DejrAZYQ4huSzUbzWNAyg7fXwa7XrKaFas"
    },
    "datadog": {
      "$ref": "rQU4Xku85gFQTh1oilmV4GK5z2L5Rnj7ZO2sCMS9I"
    },
    "graphite": {
      "$ref": "5qj9uhoCgbgZ8zoaAQ52sJY7T0eLe6HyaCF2c5hfEI"
    },
    "influxdb": {
      "$ref": "M9spBuc5mf975mfDZkbCstKlsbRnVHp03Idwit4"
    },
    "job": {
      "$ref": "g1V92unC9swnSmrfIt84PBnlKHhmgA50nhLDFk16Q"
    },
    "kayenta": {
      "$ref": "Sqyq7aG5gggoJKQErw3VPqmhBpNVmxUqyJQRZwEbHc"
    },
    "newRelic": {
      "$ref": "mIbk1wYd5EGbsqD4kYMytASozJEsAW8VXjU36eVq8"
    },
    "plugin": {
      "$ref": "wnCl8zCvz1PLbyEivJTcktRgDZuzOGT9FYulvrA2T8w"
    },
    "prometheus": {
      "$ref": "5qj9uhoCgbgZ8zoaAQ52sJY7T0eLe6HyaCF2c5hfEI"
    },
    "skywalking": {
      "$ref": "fMHCPeAxMwo3SVC0qHtYwm9zgb5owvsufWQxnQk"
    },
    "wavefront": {
      "$ref": "5qj9uhoCgbgZ8zoaAQ52sJY7T0eLe6HyaCF2c5hfEI"
    },
    "web": {
      "$ref": "XHTZSLjb4687JuVgUuiE5Rd2cresOIrhhP6V1iTi9nc"
    }
  },
  "type": "object"
};
const schema84 = {
  "properties": {
    "interval": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "metricDataQueries": {
      "$ref": "RwYQtRLyxWROc0OoPPGBLfDkYPHftUueHmvaUZuB2g"
    }
  },
  "required": ["metricDataQueries"],
  "type": "object",
  "nullable": true
};
const schema85 = {
  "items": {
    "$ref": "D2S8WJXqvUixIK5chs6oWwo74lcPmPUxvdfclxo"
  },
  "type": "array"
};
const schema86 = {
  "properties": {
    "expression": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "id": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "label": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "metricStat": {
      "$ref": "iJRLhgh8k7wbSk4rzKQXLHHFxsweaubbKQCqjp6Je4"
    },
    "period": {
      "$ref": "uJPY5JwdoQeyZsG50sBXB6uBQV8ScD7PtRRAnILoI3A"
    },
    "returnData": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "type": "object"
};
const schema87 = {
  "properties": {
    "metric": {
      "$ref": "gn8SngClPHsTDrSpRuHic8d402yeVxmsCjRXAid7HTk"
    },
    "period": {
      "$ref": "uJPY5JwdoQeyZsG50sBXB6uBQV8ScD7PtRRAnILoI3A"
    },
    "stat": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "unit": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema88 = {
  "properties": {
    "dimensions": {
      "$ref": "3dFlzwy8zGt7y3hMWXnwInffukRQoHbmEF3xGVNI"
    },
    "metricName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema37 = {
  "items": {
    "$ref": "sWfncG59c1XfNxmkMXW89j5rdj0YnP54Zpfo5QkH10"
  },
  "type": "array",
  "nullable": true
};
const schema38 = {
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
function validate108(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
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
    if (data.value !== undefined) {
      if (!validate26(data.value, {
        instancePath: instancePath + "/value",
        parentData: data,
        parentDataProperty: "value",
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
function validate285(data, {
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
    if (data.dimensions !== undefined) {
      if (!validate107(data.dimensions, {
        instancePath: instancePath + "/dimensions",
        parentData: data,
        parentDataProperty: "dimensions",
        rootData
      })) {
        vErrors = vErrors === null ? validate107.errors : vErrors.concat(validate107.errors);
        errors = vErrors.length;
      }
    }
    if (data.metricName !== undefined) {
      if (!validate26(data.metricName, {
        instancePath: instancePath + "/metricName",
        parentData: data,
        parentDataProperty: "metricName",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespace !== undefined) {
      if (!validate26(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate285.errors = vErrors;
  return errors === 0;
}
function validate284(data, {
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
    if (data.metric !== undefined) {
      if (!validate285(data.metric, {
        instancePath: instancePath + "/metric",
        parentData: data,
        parentDataProperty: "metric",
        rootData
      })) {
        vErrors = vErrors === null ? validate285.errors : vErrors.concat(validate285.errors);
        errors = vErrors.length;
      }
    }
    if (data.period !== undefined) {
      if (!validate22(data.period, {
        instancePath: instancePath + "/period",
        parentData: data,
        parentDataProperty: "period",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.stat !== undefined) {
      if (!validate26(data.stat, {
        instancePath: instancePath + "/stat",
        parentData: data,
        parentDataProperty: "stat",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.unit !== undefined) {
      if (!validate26(data.unit, {
        instancePath: instancePath + "/unit",
        parentData: data,
        parentDataProperty: "unit",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate284.errors = vErrors;
  return errors === 0;
}
const schema12 = {
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
function validate280(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.expression !== undefined) {
      if (!validate26(data.expression, {
        instancePath: instancePath + "/expression",
        parentData: data,
        parentDataProperty: "expression",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.id !== undefined) {
      if (!validate26(data.id, {
        instancePath: instancePath + "/id",
        parentData: data,
        parentDataProperty: "id",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.label !== undefined) {
      if (!validate26(data.label, {
        instancePath: instancePath + "/label",
        parentData: data,
        parentDataProperty: "label",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.metricStat !== undefined) {
      if (!validate284(data.metricStat, {
        instancePath: instancePath + "/metricStat",
        parentData: data,
        parentDataProperty: "metricStat",
        rootData
      })) {
        vErrors = vErrors === null ? validate284.errors : vErrors.concat(validate284.errors);
        errors = vErrors.length;
      }
    }
    if (data.period !== undefined) {
      if (!validate22(data.period, {
        instancePath: instancePath + "/period",
        parentData: data,
        parentDataProperty: "period",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.returnData !== undefined) {
      if (!validate30(data.returnData, {
        instancePath: instancePath + "/returnData",
        parentData: data,
        parentDataProperty: "returnData",
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
  validate280.errors = vErrors;
  return errors === 0;
}
function validate279(data, {
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
      if (!validate280(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate280.errors : vErrors.concat(validate280.errors);
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
  validate279.errors = vErrors;
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
    if (data.metricDataQueries === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "metricDataQueries"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.interval !== undefined) {
      if (!validate26(data.interval, {
        instancePath: instancePath + "/interval",
        parentData: data,
        parentDataProperty: "interval",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.metricDataQueries !== undefined) {
      if (!validate279(data.metricDataQueries, {
        instancePath: instancePath + "/metricDataQueries",
        parentData: data,
        parentDataProperty: "metricDataQueries",
        rootData
      })) {
        vErrors = vErrors === null ? validate279.errors : vErrors.concat(validate279.errors);
        errors = vErrors.length;
      }
    }
  }
  validate277.errors = vErrors;
  return errors === 0;
}
const schema89 = {
  "properties": {
    "apiVersion": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "interval": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "query": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["query"],
  "type": "object",
  "nullable": true
};
function validate299(data, {
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
    if (data.query === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "query"
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
      if (!validate26(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.interval !== undefined) {
      if (!validate26(data.interval, {
        instancePath: instancePath + "/interval",
        parentData: data,
        parentDataProperty: "interval",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.query !== undefined) {
      if (!validate21(data.query, {
        instancePath: instancePath + "/query",
        parentData: data,
        parentDataProperty: "query",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate299.errors = vErrors;
  return errors === 0;
}
const schema64 = {
  "properties": {
    "address": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "query": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate226(data, {
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
    if (data.address !== undefined) {
      if (!validate26(data.address, {
        instancePath: instancePath + "/address",
        parentData: data,
        parentDataProperty: "address",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.query !== undefined) {
      if (!validate26(data.query, {
        instancePath: instancePath + "/query",
        parentData: data,
        parentDataProperty: "query",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate226.errors = vErrors;
  return errors === 0;
}
const schema90 = {
  "properties": {
    "profile": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "query": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate305(data, {
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
    if (data.profile !== undefined) {
      if (!validate26(data.profile, {
        instancePath: instancePath + "/profile",
        parentData: data,
        parentDataProperty: "profile",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.query !== undefined) {
      if (!validate26(data.query, {
        instancePath: instancePath + "/query",
        parentData: data,
        parentDataProperty: "query",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate305.errors = vErrors;
  return errors === 0;
}
const schema91 = {
  "properties": {
    "metadata": {
      "$ref": "igJYwSZYrBtVsRmcMsQYdB7Q50xFQbahYKwITLXw0"
    },
    "spec": {
      "$ref": "3kyReaGqAk59m9kqpUIy1AsQZUkUnMIKRk7JSbEsc"
    }
  },
  "required": ["spec"],
  "type": "object",
  "nullable": true
};
const schema14 = {
  "properties": {
    "annotations": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "labels": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
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
  validate27.errors = vErrors;
  return errors === 0;
}
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
  }
  validate32.errors = vErrors;
  return errors === 0;
}
const schema92 = {
  "properties": {
    "activeDeadlineSeconds": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "backoffLimit": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "completionMode": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "completions": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "manualSelector": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "parallelism": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "podFailurePolicy": {
      "$ref": "xK7DltUtmBnRgQCdypsHu3ydyLnMWOOtdOUfORKU"
    },
    "selector": {
      "$ref": "Zjt3HFRfql15zSZzpouBNTusTEhVu3UqWLOK7EP6U"
    },
    "suspend": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "template": {
      "$ref": "ojdXm8a38PfB736CthNRDjEl0QOWShfA4umoivPapk"
    },
    "ttlSecondsAfterFinished": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    }
  },
  "required": ["template"],
  "type": "object"
};
const schema15 = {
  "format": "int64",
  "type": "integer",
  "nullable": true
};
const formats4 = formats.int64;
function validate35(data, {
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
    if (!formats4.validate(data)) {
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
  validate35.errors = vErrors;
  return errors === 0;
}
const schema11 = {
  "format": "int32",
  "type": "integer",
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
  validate29.errors = vErrors;
  return errors === 0;
}
const schema93 = {
  "properties": {
    "rules": {
      "$ref": "k2jT35erGslCusx0NuYO6bL87ZEUIwpAevHsLB9B4"
    }
  },
  "required": ["rules"],
  "type": "object",
  "nullable": true
};
const schema94 = {
  "items": {
    "$ref": "yJu2dkJCETOZoeIekMuEclZRprtLtCTqwMHSpi9bwk"
  },
  "type": "array"
};
const schema95 = {
  "properties": {
    "action": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "onExitCodes": {
      "$ref": "cB1vJLL58zL7tso468E6rIJbswH7AKW7PPVQtFILewQ"
    },
    "onPodConditions": {
      "$ref": "ETQYwTG7UCkg6c1rFROm2YnhlmJ6JqhcudNGH88k3gw"
    }
  },
  "required": ["action", "onPodConditions"],
  "type": "object"
};
const schema96 = {
  "properties": {
    "containerName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "operator": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "values": {
      "$ref": "yXZknTO64r88FhMQLfCvzFdz4fRGUuru3whrgC4mVEg"
    }
  },
  "required": ["operator", "values"],
  "type": "object",
  "nullable": true
};
const schema97 = {
  "items": {
    "$ref": "ppOMqvYEA3GSH3ozhOJ2Wta6ImWhzC9DOYsjidshCYo"
  },
  "type": "array"
};
function validate325(data, {
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
      if (!validate31(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
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
  validate325.errors = vErrors;
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
    if (data.values === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "values"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.containerName !== undefined) {
      if (!validate26(data.containerName, {
        instancePath: instancePath + "/containerName",
        parentData: data,
        parentDataProperty: "containerName",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
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
      if (!validate325(data.values, {
        instancePath: instancePath + "/values",
        parentData: data,
        parentDataProperty: "values",
        rootData
      })) {
        vErrors = vErrors === null ? validate325.errors : vErrors.concat(validate325.errors);
        errors = vErrors.length;
      }
    }
  }
  validate322.errors = vErrors;
  return errors === 0;
}
const schema98 = {
  "items": {
    "$ref": "POEUzNufOLVomghwVR744VnMB02XT4J9J13rGT6SU"
  },
  "type": "array"
};
const schema99 = {
  "properties": {
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
function validate330(data, {
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
  validate330.errors = vErrors;
  return errors === 0;
}
function validate329(data, {
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
      if (!validate330(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate330.errors : vErrors.concat(validate330.errors);
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
  validate329.errors = vErrors;
  return errors === 0;
}
function validate320(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.action === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "action"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.onPodConditions === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "onPodConditions"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.action !== undefined) {
      if (!validate21(data.action, {
        instancePath: instancePath + "/action",
        parentData: data,
        parentDataProperty: "action",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.onExitCodes !== undefined) {
      if (!validate322(data.onExitCodes, {
        instancePath: instancePath + "/onExitCodes",
        parentData: data,
        parentDataProperty: "onExitCodes",
        rootData
      })) {
        vErrors = vErrors === null ? validate322.errors : vErrors.concat(validate322.errors);
        errors = vErrors.length;
      }
    }
    if (data.onPodConditions !== undefined) {
      if (!validate329(data.onPodConditions, {
        instancePath: instancePath + "/onPodConditions",
        parentData: data,
        parentDataProperty: "onPodConditions",
        rootData
      })) {
        vErrors = vErrors === null ? validate329.errors : vErrors.concat(validate329.errors);
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
  validate320.errors = vErrors;
  return errors === 0;
}
function validate319(data, {
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
      if (!validate320(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate320.errors : vErrors.concat(validate320.errors);
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
  validate319.errors = vErrors;
  return errors === 0;
}
function validate318(data, {
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
    if (data.rules === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "rules"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.rules !== undefined) {
      if (!validate319(data.rules, {
        instancePath: instancePath + "/rules",
        parentData: data,
        parentDataProperty: "rules",
        rootData
      })) {
        vErrors = vErrors === null ? validate319.errors : vErrors.concat(validate319.errors);
        errors = vErrors.length;
      }
    }
  }
  validate318.errors = vErrors;
  return errors === 0;
}
const schema20 = {
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
const schema16 = {
  "items": {
    "$ref": "MkwwSDeYoT1APit7w8qsvbKCw8OynjINdeojyPgpPQ"
  },
  "type": "array",
  "nullable": true
};
const schema17 = {
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
const schema18 = {
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "array",
  "nullable": true
};
function validate40(data, {
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
  validate40.errors = vErrors;
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
      if (!validate40(data.values, {
        instancePath: instancePath + "/values",
        parentData: data,
        parentDataProperty: "values",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
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
function validate47(data, {
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
  validate47.errors = vErrors;
  return errors === 0;
}
const schema100 = {
  "properties": {
    "metadata": {
      "$ref": "igJYwSZYrBtVsRmcMsQYdB7Q50xFQbahYKwITLXw0"
    },
    "spec": {
      "$ref": "8FJpM9Cb69MexqTR7dxbXJPjK1lefo55UJqhQd0zcA"
    }
  },
  "type": "object"
};
const schema101 = {
  "properties": {
    "activeDeadlineSeconds": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "affinity": {
      "$ref": "eQnLjitsrTSVTFasXcHSNJf2f0CZ2KykATo6mjrpT2c"
    },
    "automountServiceAccountToken": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "containers": {
      "$ref": "LUKXEp0Qa9F4MiArgqKoo9uIOTJHSEAzfBa7NbY"
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
      "$ref": "RbRoqGzyuVsKhEmFNl6p7Gcigcd7JeDvb5a2MWFOHas"
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
      "$ref": "wz6A5b39ELSywwQuUexGl9l3Ioo9zuLM8dOOdCb0xsI"
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
    "restartPolicy": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "runtimeClassName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "schedulerName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
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
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    }
  },
  "required": ["containers"],
  "type": "object",
  "nullable": true
};
const schema102 = {
  "properties": {
    "nodeAffinity": {
      "$ref": "ilIeGX7cSHMmL7ioNwzODU6lYXSv4jarxIX2s8IW4"
    },
    "podAffinity": {
      "$ref": "DsNsWuYn4nQkINJhcnI8fvpFfqQQ9s1oRdKm3W5Q8"
    },
    "podAntiAffinity": {
      "$ref": "DsNsWuYn4nQkINJhcnI8fvpFfqQQ9s1oRdKm3W5Q8"
    }
  },
  "type": "object",
  "nullable": true
};
const schema103 = {
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
const schema104 = {
  "items": {
    "$ref": "KT8yO8lY4mlKxs74BP1LG0T6VlK79euyrEXXie1TQM"
  },
  "type": "array",
  "nullable": true
};
const schema105 = {
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
const schema19 = {
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
function validate44(data, {
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
  validate44.errors = vErrors;
  return errors === 0;
}
function validate347(data, {
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
      if (!validate44(data.preference, {
        instancePath: instancePath + "/preference",
        parentData: data,
        parentDataProperty: "preference",
        rootData
      })) {
        vErrors = vErrors === null ? validate44.errors : vErrors.concat(validate44.errors);
        errors = vErrors.length;
      }
    }
    if (data.weight !== undefined) {
      if (!validate31(data.weight, {
        instancePath: instancePath + "/weight",
        parentData: data,
        parentDataProperty: "weight",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
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
const schema106 = {
  "properties": {
    "nodeSelectorTerms": {
      "$ref": "hVQp5aNt5Ip0WaaRBpcUfl5xvhWH5vfkg8VQq1is"
    }
  },
  "required": ["nodeSelectorTerms"],
  "type": "object",
  "nullable": true
};
const schema107 = {
  "items": {
    "$ref": "tydPzboPRD4fGreI5KQTJcmvoGoGl0gxaSYfabYh8UI"
  },
  "type": "array"
};
function validate353(data, {
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
  validate353.errors = vErrors;
  return errors === 0;
}
function validate352(data, {
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
      if (!validate353(data.nodeSelectorTerms, {
        instancePath: instancePath + "/nodeSelectorTerms",
        parentData: data,
        parentDataProperty: "nodeSelectorTerms",
        rootData
      })) {
        vErrors = vErrors === null ? validate353.errors : vErrors.concat(validate353.errors);
        errors = vErrors.length;
      }
    }
  }
  validate352.errors = vErrors;
  return errors === 0;
}
function validate345(data, {
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
      if (!validate346(data.preferredDuringSchedulingIgnoredDuringExecution, {
        instancePath: instancePath + "/preferredDuringSchedulingIgnoredDuringExecution",
        parentData: data,
        parentDataProperty: "preferredDuringSchedulingIgnoredDuringExecution",
        rootData
      })) {
        vErrors = vErrors === null ? validate346.errors : vErrors.concat(validate346.errors);
        errors = vErrors.length;
      }
    }
    if (data.requiredDuringSchedulingIgnoredDuringExecution !== undefined) {
      if (!validate352(data.requiredDuringSchedulingIgnoredDuringExecution, {
        instancePath: instancePath + "/requiredDuringSchedulingIgnoredDuringExecution",
        parentData: data,
        parentDataProperty: "requiredDuringSchedulingIgnoredDuringExecution",
        rootData
      })) {
        vErrors = vErrors === null ? validate352.errors : vErrors.concat(validate352.errors);
        errors = vErrors.length;
      }
    }
  }
  validate345.errors = vErrors;
  return errors === 0;
}
const schema22 = {
  "properties": {
    "preferredDuringSchedulingIgnoredDuringExecution": {
      "$ref": "ZBNBJIKcYw9b6ByZ1oTCFen775p3KptAtSEBMtqSVs0"
    },
    "requiredDuringSchedulingIgnoredDuringExecution": {
      "$ref": "CjCL5qmBxS14UT2XOnRAFXR6PuszqYeDmNJIZczJIY"
    }
  },
  "type": "object",
  "nullable": true
};
const schema23 = {
  "items": {
    "$ref": "64RujE3HVgf5cYEsps9MsJqnpxPv9cJ7O3IzJ0HKyQ"
  },
  "type": "array",
  "nullable": true
};
const schema24 = {
  "properties": {
    "podAffinityTerm": {
      "$ref": "QPoXPP8srfYyWaiKzJR4gjGUBOGS8eomxnzjd9M39E"
    },
    "weight": {
      "$ref": "ppOMqvYEA3GSH3ozhOJ2Wta6ImWhzC9DOYsjidshCYo"
    }
  },
  "required": ["podAffinityTerm", "weight"],
  "type": "object"
};
const schema21 = {
  "properties": {
    "labelSelector": {
      "$ref": "Zjt3HFRfql15zSZzpouBNTusTEhVu3UqWLOK7EP6U"
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
function validate50(data, {
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
      if (!validate47(data.labelSelector, {
        instancePath: instancePath + "/labelSelector",
        parentData: data,
        parentDataProperty: "labelSelector",
        rootData
      })) {
        vErrors = vErrors === null ? validate47.errors : vErrors.concat(validate47.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespaceSelector !== undefined) {
      if (!validate47(data.namespaceSelector, {
        instancePath: instancePath + "/namespaceSelector",
        parentData: data,
        parentDataProperty: "namespaceSelector",
        rootData
      })) {
        vErrors = vErrors === null ? validate47.errors : vErrors.concat(validate47.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespaces !== undefined) {
      if (!validate40(data.namespaces, {
        instancePath: instancePath + "/namespaces",
        parentData: data,
        parentDataProperty: "namespaces",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
    if (data.topologyKey !== undefined) {
      if (!validate21(data.topologyKey, {
        instancePath: instancePath + "/topologyKey",
        parentData: data,
        parentDataProperty: "topologyKey",
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
  validate50.errors = vErrors;
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
      if (!validate50(data.podAffinityTerm, {
        instancePath: instancePath + "/podAffinityTerm",
        parentData: data,
        parentDataProperty: "podAffinityTerm",
        rootData
      })) {
        vErrors = vErrors === null ? validate50.errors : vErrors.concat(validate50.errors);
        errors = vErrors.length;
      }
    }
    if (data.weight !== undefined) {
      if (!validate31(data.weight, {
        instancePath: instancePath + "/weight",
        parentData: data,
        parentDataProperty: "weight",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
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
  validate57.errors = vErrors;
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
      if (!validate57(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate57.errors : vErrors.concat(validate57.errors);
        errors = vErrors.length;
      }
    }
  }
  validate56.errors = vErrors;
  return errors === 0;
}
const schema25 = {
  "items": {
    "$ref": "QPoXPP8srfYyWaiKzJR4gjGUBOGS8eomxnzjd9M39E"
  },
  "type": "array",
  "nullable": true
};
function validate62(data, {
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
      if (!validate50(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate50.errors : vErrors.concat(validate50.errors);
        errors = vErrors.length;
      }
    }
  }
  validate62.errors = vErrors;
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
      if (!validate56(data.preferredDuringSchedulingIgnoredDuringExecution, {
        instancePath: instancePath + "/preferredDuringSchedulingIgnoredDuringExecution",
        parentData: data,
        parentDataProperty: "preferredDuringSchedulingIgnoredDuringExecution",
        rootData
      })) {
        vErrors = vErrors === null ? validate56.errors : vErrors.concat(validate56.errors);
        errors = vErrors.length;
      }
    }
    if (data.requiredDuringSchedulingIgnoredDuringExecution !== undefined) {
      if (!validate62(data.requiredDuringSchedulingIgnoredDuringExecution, {
        instancePath: instancePath + "/requiredDuringSchedulingIgnoredDuringExecution",
        parentData: data,
        parentDataProperty: "requiredDuringSchedulingIgnoredDuringExecution",
        rootData
      })) {
        vErrors = vErrors === null ? validate62.errors : vErrors.concat(validate62.errors);
        errors = vErrors.length;
      }
    }
  }
  validate55.errors = vErrors;
  return errors === 0;
}
function validate344(data, {
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
      if (!validate345(data.nodeAffinity, {
        instancePath: instancePath + "/nodeAffinity",
        parentData: data,
        parentDataProperty: "nodeAffinity",
        rootData
      })) {
        vErrors = vErrors === null ? validate345.errors : vErrors.concat(validate345.errors);
        errors = vErrors.length;
      }
    }
    if (data.podAffinity !== undefined) {
      if (!validate55(data.podAffinity, {
        instancePath: instancePath + "/podAffinity",
        parentData: data,
        parentDataProperty: "podAffinity",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
    if (data.podAntiAffinity !== undefined) {
      if (!validate55(data.podAntiAffinity, {
        instancePath: instancePath + "/podAntiAffinity",
        parentData: data,
        parentDataProperty: "podAntiAffinity",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
  }
  validate344.errors = vErrors;
  return errors === 0;
}
const schema108 = {
  "items": {
    "$ref": "FoG0UatxzHXRdx9Fzv03npPGwZsPc6umHVBdPQvw"
  },
  "type": "array"
};
const schema61 = {
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
      "$ref": "W7vrlsSZWp7rggEIEZsVRoja8Xamzter4HOa8m2lRw"
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
    "resources": {
      "$ref": "8W2YFMh6tizd8oQP26X8ug1o98mntgXW2JlTv74YQ"
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
const schema26 = {
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
    if (data.optional !== undefined) {
      if (!validate30(data.optional, {
        instancePath: instancePath + "/optional",
        parentData: data,
        parentDataProperty: "optional",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
  }
  validate65.errors = vErrors;
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
      if (!validate26(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.fieldPath !== undefined) {
      if (!validate21(data.fieldPath, {
        instancePath: instancePath + "/fieldPath",
        parentData: data,
        parentDataProperty: "fieldPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate118.errors = vErrors;
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
const schema44 = {
  "anyOf": [{
    "$ref": "vMERCWCezVsdN7cIwlJvWJTP5QRRevuFDHNM3fdV8Q"
  }, {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  }],
  "pattern": "^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$"
};
const pattern0 = new RegExp("^(\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))(([KMGTPE]i)|[numkMGTPE]|([eE](\\+|-)?(([0-9]+(\\.[0-9]*)?)|(\\.[0-9]+))))?$", "u");
function validate124(data, {
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
  if (!validate23(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs2 = errors;
    if (!validate21(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
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
  validate124.errors = vErrors;
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
      if (!validate26(data.containerName, {
        instancePath: instancePath + "/containerName",
        parentData: data,
        parentDataProperty: "containerName",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.divisor !== undefined) {
      if (!validate124(data.divisor, {
        instancePath: instancePath + "/divisor",
        parentData: data,
        parentDataProperty: "divisor",
        rootData
      })) {
        vErrors = vErrors === null ? validate124.errors : vErrors.concat(validate124.errors);
        errors = vErrors.length;
      }
    }
    if (data.resource !== undefined) {
      if (!validate21(data.resource, {
        instancePath: instancePath + "/resource",
        parentData: data,
        parentDataProperty: "resource",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate122.errors = vErrors;
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
    if (data.configMapKeyRef !== undefined) {
      if (!validate65(data.configMapKeyRef, {
        instancePath: instancePath + "/configMapKeyRef",
        parentData: data,
        parentDataProperty: "configMapKeyRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate65.errors : vErrors.concat(validate65.errors);
        errors = vErrors.length;
      }
    }
    if (data.fieldRef !== undefined) {
      if (!validate118(data.fieldRef, {
        instancePath: instancePath + "/fieldRef",
        parentData: data,
        parentDataProperty: "fieldRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate118.errors : vErrors.concat(validate118.errors);
        errors = vErrors.length;
      }
    }
    if (data.resourceFieldRef !== undefined) {
      if (!validate122(data.resourceFieldRef, {
        instancePath: instancePath + "/resourceFieldRef",
        parentData: data,
        parentDataProperty: "resourceFieldRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate122.errors : vErrors.concat(validate122.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretKeyRef !== undefined) {
      if (!validate65(data.secretKeyRef, {
        instancePath: instancePath + "/secretKeyRef",
        parentData: data,
        parentDataProperty: "secretKeyRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate65.errors : vErrors.concat(validate65.errors);
        errors = vErrors.length;
      }
    }
  }
  validate116.errors = vErrors;
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
      if (!validate26(data.value, {
        instancePath: instancePath + "/value",
        parentData: data,
        parentDataProperty: "value",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.valueFrom !== undefined) {
      if (!validate116(data.valueFrom, {
        instancePath: instancePath + "/valueFrom",
        parentData: data,
        parentDataProperty: "valueFrom",
        rootData
      })) {
        vErrors = vErrors === null ? validate116.errors : vErrors.concat(validate116.errors);
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
const schema45 = {
  "items": {
    "$ref": "ikCIlFtFemCnMYeJtAt3NRQIkZLQNIKIbJvxkO8"
  },
  "type": "array",
  "nullable": true
};
const schema46 = {
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
const schema27 = {
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
    if (data.optional !== undefined) {
      if (!validate30(data.optional, {
        instancePath: instancePath + "/optional",
        parentData: data,
        parentDataProperty: "optional",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
  }
  validate69.errors = vErrors;
  return errors === 0;
}
function validate134(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.configMapRef !== undefined) {
      if (!validate69(data.configMapRef, {
        instancePath: instancePath + "/configMapRef",
        parentData: data,
        parentDataProperty: "configMapRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate69.errors : vErrors.concat(validate69.errors);
        errors = vErrors.length;
      }
    }
    if (data.prefix !== undefined) {
      if (!validate26(data.prefix, {
        instancePath: instancePath + "/prefix",
        parentData: data,
        parentDataProperty: "prefix",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate69(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate69.errors : vErrors.concat(validate69.errors);
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
  validate134.errors = vErrors;
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
      if (!validate134(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate134.errors : vErrors.concat(validate134.errors);
        errors = vErrors.length;
      }
    }
  }
  validate133.errors = vErrors;
  return errors === 0;
}
const schema47 = {
  "properties": {
    "postStart": {
      "$ref": "HAlIObuw5PJ7yBUQZzkLyysWvHHLun7gu5WuCZhfGfY"
    },
    "preStop": {
      "$ref": "HAlIObuw5PJ7yBUQZzkLyysWvHHLun7gu5WuCZhfGfY"
    }
  },
  "type": "object",
  "nullable": true
};
const schema28 = {
  "properties": {
    "exec": {
      "$ref": "moEpOLb1kgFxaUouQajnrop3umuZQh81JqXQh7AIVQ"
    },
    "httpGet": {
      "$ref": "mmlyBLvRl7v3o5Pp55N1xeaHQ9tDWZHs5C7b5GfLN8"
    },
    "tcpSocket": {
      "$ref": "1ZbuYUyDXQSaxhnkO1WtAhRTjyp3DzYi9wa2Pdpoow"
    }
  },
  "type": "object",
  "nullable": true
};
const schema29 = {
  "properties": {
    "command": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    }
  },
  "type": "object",
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
      if (!validate40(data.command, {
        instancePath: instancePath + "/command",
        parentData: data,
        parentDataProperty: "command",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
  }
  validate73.errors = vErrors;
  return errors === 0;
}
const schema30 = {
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
const schema31 = {
  "items": {
    "$ref": "RI8VVk8l4SnLWK7FbWs0RBoAVoSBUKkroMUjUfsI"
  },
  "type": "array",
  "nullable": true
};
const schema32 = {
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
function validate79(data, {
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
  validate79.errors = vErrors;
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
      if (!validate79(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate79.errors : vErrors.concat(validate79.errors);
        errors = vErrors.length;
      }
    }
  }
  validate78.errors = vErrors;
  return errors === 0;
}
function validate76(data, {
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
    if (data.httpHeaders !== undefined) {
      if (!validate78(data.httpHeaders, {
        instancePath: instancePath + "/httpHeaders",
        parentData: data,
        parentDataProperty: "httpHeaders",
        rootData
      })) {
        vErrors = vErrors === null ? validate78.errors : vErrors.concat(validate78.errors);
        errors = vErrors.length;
      }
    }
    if (data.path !== undefined) {
      if (!validate26(data.path, {
        instancePath: instancePath + "/path",
        parentData: data,
        parentDataProperty: "path",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.port !== undefined) {
      if (!validate22(data.port, {
        instancePath: instancePath + "/port",
        parentData: data,
        parentDataProperty: "port",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.scheme !== undefined) {
      if (!validate26(data.scheme, {
        instancePath: instancePath + "/scheme",
        parentData: data,
        parentDataProperty: "scheme",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate76.errors = vErrors;
  return errors === 0;
}
const schema33 = {
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
      if (!validate22(data.port, {
        instancePath: instancePath + "/port",
        parentData: data,
        parentDataProperty: "port",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate88.errors = vErrors;
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
    if (data.exec !== undefined) {
      if (!validate73(data.exec, {
        instancePath: instancePath + "/exec",
        parentData: data,
        parentDataProperty: "exec",
        rootData
      })) {
        vErrors = vErrors === null ? validate73.errors : vErrors.concat(validate73.errors);
        errors = vErrors.length;
      }
    }
    if (data.httpGet !== undefined) {
      if (!validate76(data.httpGet, {
        instancePath: instancePath + "/httpGet",
        parentData: data,
        parentDataProperty: "httpGet",
        rootData
      })) {
        vErrors = vErrors === null ? validate76.errors : vErrors.concat(validate76.errors);
        errors = vErrors.length;
      }
    }
    if (data.tcpSocket !== undefined) {
      if (!validate88(data.tcpSocket, {
        instancePath: instancePath + "/tcpSocket",
        parentData: data,
        parentDataProperty: "tcpSocket",
        rootData
      })) {
        vErrors = vErrors === null ? validate88.errors : vErrors.concat(validate88.errors);
        errors = vErrors.length;
      }
    }
  }
  validate72.errors = vErrors;
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
    if (data.postStart !== undefined) {
      if (!validate72(data.postStart, {
        instancePath: instancePath + "/postStart",
        parentData: data,
        parentDataProperty: "postStart",
        rootData
      })) {
        vErrors = vErrors === null ? validate72.errors : vErrors.concat(validate72.errors);
        errors = vErrors.length;
      }
    }
    if (data.preStop !== undefined) {
      if (!validate72(data.preStop, {
        instancePath: instancePath + "/preStop",
        parentData: data,
        parentDataProperty: "preStop",
        rootData
      })) {
        vErrors = vErrors === null ? validate72.errors : vErrors.concat(validate72.errors);
        errors = vErrors.length;
      }
    }
  }
  validate139.errors = vErrors;
  return errors === 0;
}
const schema34 = {
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
const schema35 = {
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
      if (!validate31(data.port, {
        instancePath: instancePath + "/port",
        parentData: data,
        parentDataProperty: "port",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
    if (data.service !== undefined) {
      if (!validate26(data.service, {
        instancePath: instancePath + "/service",
        parentData: data,
        parentDataProperty: "service",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate95.errors = vErrors;
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
    if (data.exec !== undefined) {
      if (!validate73(data.exec, {
        instancePath: instancePath + "/exec",
        parentData: data,
        parentDataProperty: "exec",
        rootData
      })) {
        vErrors = vErrors === null ? validate73.errors : vErrors.concat(validate73.errors);
        errors = vErrors.length;
      }
    }
    if (data.failureThreshold !== undefined) {
      if (!validate29(data.failureThreshold, {
        instancePath: instancePath + "/failureThreshold",
        parentData: data,
        parentDataProperty: "failureThreshold",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.grpc !== undefined) {
      if (!validate95(data.grpc, {
        instancePath: instancePath + "/grpc",
        parentData: data,
        parentDataProperty: "grpc",
        rootData
      })) {
        vErrors = vErrors === null ? validate95.errors : vErrors.concat(validate95.errors);
        errors = vErrors.length;
      }
    }
    if (data.httpGet !== undefined) {
      if (!validate76(data.httpGet, {
        instancePath: instancePath + "/httpGet",
        parentData: data,
        parentDataProperty: "httpGet",
        rootData
      })) {
        vErrors = vErrors === null ? validate76.errors : vErrors.concat(validate76.errors);
        errors = vErrors.length;
      }
    }
    if (data.initialDelaySeconds !== undefined) {
      if (!validate29(data.initialDelaySeconds, {
        instancePath: instancePath + "/initialDelaySeconds",
        parentData: data,
        parentDataProperty: "initialDelaySeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.periodSeconds !== undefined) {
      if (!validate29(data.periodSeconds, {
        instancePath: instancePath + "/periodSeconds",
        parentData: data,
        parentDataProperty: "periodSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.successThreshold !== undefined) {
      if (!validate29(data.successThreshold, {
        instancePath: instancePath + "/successThreshold",
        parentData: data,
        parentDataProperty: "successThreshold",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.tcpSocket !== undefined) {
      if (!validate88(data.tcpSocket, {
        instancePath: instancePath + "/tcpSocket",
        parentData: data,
        parentDataProperty: "tcpSocket",
        rootData
      })) {
        vErrors = vErrors === null ? validate88.errors : vErrors.concat(validate88.errors);
        errors = vErrors.length;
      }
    }
    if (data.terminationGracePeriodSeconds !== undefined) {
      if (!validate35(data.terminationGracePeriodSeconds, {
        instancePath: instancePath + "/terminationGracePeriodSeconds",
        parentData: data,
        parentDataProperty: "terminationGracePeriodSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.timeoutSeconds !== undefined) {
      if (!validate29(data.timeoutSeconds, {
        instancePath: instancePath + "/timeoutSeconds",
        parentData: data,
        parentDataProperty: "timeoutSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
  }
  validate92.errors = vErrors;
  return errors === 0;
}
const schema48 = {
  "items": {
    "$ref": "WxMipWUqqSfo29Ftt21K0qdNOM8gEudjMjxXtvA"
  },
  "type": "array",
  "nullable": true
};
const schema49 = {
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
const schema50 = {
  "default": "TCP",
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
      if (!validate31(data.containerPort, {
        instancePath: instancePath + "/containerPort",
        parentData: data,
        parentDataProperty: "containerPort",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostIP !== undefined) {
      if (!validate26(data.hostIP, {
        instancePath: instancePath + "/hostIP",
        parentData: data,
        parentDataProperty: "hostIP",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostPort !== undefined) {
      if (!validate29(data.hostPort, {
        instancePath: instancePath + "/hostPort",
        parentData: data,
        parentDataProperty: "hostPort",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
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
    if (data.protocol !== undefined) {
      if (!validate148(data.protocol, {
        instancePath: instancePath + "/protocol",
        parentData: data,
        parentDataProperty: "protocol",
        rootData
      })) {
        vErrors = vErrors === null ? validate148.errors : vErrors.concat(validate148.errors);
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
  }
  validate142.errors = vErrors;
  return errors === 0;
}
const schema51 = {
  "properties": {
    "limits": {
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    },
    "requests": {
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    }
  },
  "type": "object",
  "nullable": true
};
const schema36 = {};
function validate106(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  validate106.errors = null;
  return true;
}
function validate151(data, {
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
      if (!validate106(data.limits, {
        instancePath: instancePath + "/limits",
        parentData: data,
        parentDataProperty: "limits",
        rootData
      })) {
        vErrors = vErrors === null ? validate106.errors : vErrors.concat(validate106.errors);
        errors = vErrors.length;
      }
    }
    if (data.requests !== undefined) {
      if (!validate106(data.requests, {
        instancePath: instancePath + "/requests",
        parentData: data,
        parentDataProperty: "requests",
        rootData
      })) {
        vErrors = vErrors === null ? validate106.errors : vErrors.concat(validate106.errors);
        errors = vErrors.length;
      }
    }
  }
  validate151.errors = vErrors;
  return errors === 0;
}
const schema52 = {
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
const schema53 = {
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
    if (data.add !== undefined) {
      if (!validate40(data.add, {
        instancePath: instancePath + "/add",
        parentData: data,
        parentDataProperty: "add",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
    if (data.drop !== undefined) {
      if (!validate40(data.drop, {
        instancePath: instancePath + "/drop",
        parentData: data,
        parentDataProperty: "drop",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
  }
  validate156.errors = vErrors;
  return errors === 0;
}
const schema54 = {
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
function validate166(data, {
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
      if (!validate26(data.level, {
        instancePath: instancePath + "/level",
        parentData: data,
        parentDataProperty: "level",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.role !== undefined) {
      if (!validate26(data.role, {
        instancePath: instancePath + "/role",
        parentData: data,
        parentDataProperty: "role",
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
    if (data.user !== undefined) {
      if (!validate26(data.user, {
        instancePath: instancePath + "/user",
        parentData: data,
        parentDataProperty: "user",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate166.errors = vErrors;
  return errors === 0;
}
const schema55 = {
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
      if (!validate26(data.localhostProfile, {
        instancePath: instancePath + "/localhostProfile",
        parentData: data,
        parentDataProperty: "localhostProfile",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
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
  validate172.errors = vErrors;
  return errors === 0;
}
const schema56 = {
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
function validate176(data, {
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
      if (!validate26(data.gmsaCredentialSpec, {
        instancePath: instancePath + "/gmsaCredentialSpec",
        parentData: data,
        parentDataProperty: "gmsaCredentialSpec",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.gmsaCredentialSpecName !== undefined) {
      if (!validate26(data.gmsaCredentialSpecName, {
        instancePath: instancePath + "/gmsaCredentialSpecName",
        parentData: data,
        parentDataProperty: "gmsaCredentialSpecName",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostProcess !== undefined) {
      if (!validate30(data.hostProcess, {
        instancePath: instancePath + "/hostProcess",
        parentData: data,
        parentDataProperty: "hostProcess",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.runAsUserName !== undefined) {
      if (!validate26(data.runAsUserName, {
        instancePath: instancePath + "/runAsUserName",
        parentData: data,
        parentDataProperty: "runAsUserName",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate176.errors = vErrors;
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
    if (data.allowPrivilegeEscalation !== undefined) {
      if (!validate30(data.allowPrivilegeEscalation, {
        instancePath: instancePath + "/allowPrivilegeEscalation",
        parentData: data,
        parentDataProperty: "allowPrivilegeEscalation",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.capabilities !== undefined) {
      if (!validate156(data.capabilities, {
        instancePath: instancePath + "/capabilities",
        parentData: data,
        parentDataProperty: "capabilities",
        rootData
      })) {
        vErrors = vErrors === null ? validate156.errors : vErrors.concat(validate156.errors);
        errors = vErrors.length;
      }
    }
    if (data.privileged !== undefined) {
      if (!validate30(data.privileged, {
        instancePath: instancePath + "/privileged",
        parentData: data,
        parentDataProperty: "privileged",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.procMount !== undefined) {
      if (!validate26(data.procMount, {
        instancePath: instancePath + "/procMount",
        parentData: data,
        parentDataProperty: "procMount",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnlyRootFilesystem !== undefined) {
      if (!validate30(data.readOnlyRootFilesystem, {
        instancePath: instancePath + "/readOnlyRootFilesystem",
        parentData: data,
        parentDataProperty: "readOnlyRootFilesystem",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.runAsGroup !== undefined) {
      if (!validate35(data.runAsGroup, {
        instancePath: instancePath + "/runAsGroup",
        parentData: data,
        parentDataProperty: "runAsGroup",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.runAsNonRoot !== undefined) {
      if (!validate30(data.runAsNonRoot, {
        instancePath: instancePath + "/runAsNonRoot",
        parentData: data,
        parentDataProperty: "runAsNonRoot",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.runAsUser !== undefined) {
      if (!validate35(data.runAsUser, {
        instancePath: instancePath + "/runAsUser",
        parentData: data,
        parentDataProperty: "runAsUser",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.seLinuxOptions !== undefined) {
      if (!validate166(data.seLinuxOptions, {
        instancePath: instancePath + "/seLinuxOptions",
        parentData: data,
        parentDataProperty: "seLinuxOptions",
        rootData
      })) {
        vErrors = vErrors === null ? validate166.errors : vErrors.concat(validate166.errors);
        errors = vErrors.length;
      }
    }
    if (data.seccompProfile !== undefined) {
      if (!validate172(data.seccompProfile, {
        instancePath: instancePath + "/seccompProfile",
        parentData: data,
        parentDataProperty: "seccompProfile",
        rootData
      })) {
        vErrors = vErrors === null ? validate172.errors : vErrors.concat(validate172.errors);
        errors = vErrors.length;
      }
    }
    if (data.windowsOptions !== undefined) {
      if (!validate176(data.windowsOptions, {
        instancePath: instancePath + "/windowsOptions",
        parentData: data,
        parentDataProperty: "windowsOptions",
        rootData
      })) {
        vErrors = vErrors === null ? validate176.errors : vErrors.concat(validate176.errors);
        errors = vErrors.length;
      }
    }
  }
  validate154.errors = vErrors;
  return errors === 0;
}
const schema57 = {
  "items": {
    "$ref": "RyMynCzjYAPHCEQqWFiO4dTDXuIMC11XbOjI4iorY"
  },
  "type": "array",
  "nullable": true
};
const schema58 = {
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
function validate183(data, {
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
      if (!validate21(data.devicePath, {
        instancePath: instancePath + "/devicePath",
        parentData: data,
        parentDataProperty: "devicePath",
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
  validate183.errors = vErrors;
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
      if (!validate183(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate183.errors : vErrors.concat(validate183.errors);
        errors = vErrors.length;
      }
    }
  }
  validate182.errors = vErrors;
  return errors === 0;
}
const schema59 = {
  "items": {
    "$ref": "h2ndxqWzuqLEMmnwolMtxbUY8H7jzoghc2HBeqRAw"
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
function validate188(data, {
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
    if (data.mountPropagation !== undefined) {
      if (!validate26(data.mountPropagation, {
        instancePath: instancePath + "/mountPropagation",
        parentData: data,
        parentDataProperty: "mountPropagation",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
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
    if (data.subPath !== undefined) {
      if (!validate26(data.subPath, {
        instancePath: instancePath + "/subPath",
        parentData: data,
        parentDataProperty: "subPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.subPathExpr !== undefined) {
      if (!validate26(data.subPathExpr, {
        instancePath: instancePath + "/subPathExpr",
        parentData: data,
        parentDataProperty: "subPathExpr",
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
  validate188.errors = vErrors;
  return errors === 0;
}
function validate187(data, {
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
      if (!validate188(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate188.errors : vErrors.concat(validate188.errors);
        errors = vErrors.length;
      }
    }
  }
  validate187.errors = vErrors;
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
      if (!validate40(data.args, {
        instancePath: instancePath + "/args",
        parentData: data,
        parentDataProperty: "args",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
    if (data.command !== undefined) {
      if (!validate40(data.command, {
        instancePath: instancePath + "/command",
        parentData: data,
        parentDataProperty: "command",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
    if (data.env !== undefined) {
      if (!validate112(data.env, {
        instancePath: instancePath + "/env",
        parentData: data,
        parentDataProperty: "env",
        rootData
      })) {
        vErrors = vErrors === null ? validate112.errors : vErrors.concat(validate112.errors);
        errors = vErrors.length;
      }
    }
    if (data.envFrom !== undefined) {
      if (!validate133(data.envFrom, {
        instancePath: instancePath + "/envFrom",
        parentData: data,
        parentDataProperty: "envFrom",
        rootData
      })) {
        vErrors = vErrors === null ? validate133.errors : vErrors.concat(validate133.errors);
        errors = vErrors.length;
      }
    }
    if (data.image !== undefined) {
      if (!validate26(data.image, {
        instancePath: instancePath + "/image",
        parentData: data,
        parentDataProperty: "image",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.imagePullPolicy !== undefined) {
      if (!validate26(data.imagePullPolicy, {
        instancePath: instancePath + "/imagePullPolicy",
        parentData: data,
        parentDataProperty: "imagePullPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.lifecycle !== undefined) {
      if (!validate139(data.lifecycle, {
        instancePath: instancePath + "/lifecycle",
        parentData: data,
        parentDataProperty: "lifecycle",
        rootData
      })) {
        vErrors = vErrors === null ? validate139.errors : vErrors.concat(validate139.errors);
        errors = vErrors.length;
      }
    }
    if (data.livenessProbe !== undefined) {
      if (!validate92(data.livenessProbe, {
        instancePath: instancePath + "/livenessProbe",
        parentData: data,
        parentDataProperty: "livenessProbe",
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
    if (data.ports !== undefined) {
      if (!validate142(data.ports, {
        instancePath: instancePath + "/ports",
        parentData: data,
        parentDataProperty: "ports",
        rootData
      })) {
        vErrors = vErrors === null ? validate142.errors : vErrors.concat(validate142.errors);
        errors = vErrors.length;
      }
    }
    if (data.readinessProbe !== undefined) {
      if (!validate92(data.readinessProbe, {
        instancePath: instancePath + "/readinessProbe",
        parentData: data,
        parentDataProperty: "readinessProbe",
        rootData
      })) {
        vErrors = vErrors === null ? validate92.errors : vErrors.concat(validate92.errors);
        errors = vErrors.length;
      }
    }
    if (data.resources !== undefined) {
      if (!validate151(data.resources, {
        instancePath: instancePath + "/resources",
        parentData: data,
        parentDataProperty: "resources",
        rootData
      })) {
        vErrors = vErrors === null ? validate151.errors : vErrors.concat(validate151.errors);
        errors = vErrors.length;
      }
    }
    if (data.securityContext !== undefined) {
      if (!validate154(data.securityContext, {
        instancePath: instancePath + "/securityContext",
        parentData: data,
        parentDataProperty: "securityContext",
        rootData
      })) {
        vErrors = vErrors === null ? validate154.errors : vErrors.concat(validate154.errors);
        errors = vErrors.length;
      }
    }
    if (data.startupProbe !== undefined) {
      if (!validate92(data.startupProbe, {
        instancePath: instancePath + "/startupProbe",
        parentData: data,
        parentDataProperty: "startupProbe",
        rootData
      })) {
        vErrors = vErrors === null ? validate92.errors : vErrors.concat(validate92.errors);
        errors = vErrors.length;
      }
    }
    if (data.stdin !== undefined) {
      if (!validate30(data.stdin, {
        instancePath: instancePath + "/stdin",
        parentData: data,
        parentDataProperty: "stdin",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.stdinOnce !== undefined) {
      if (!validate30(data.stdinOnce, {
        instancePath: instancePath + "/stdinOnce",
        parentData: data,
        parentDataProperty: "stdinOnce",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.terminationMessagePath !== undefined) {
      if (!validate26(data.terminationMessagePath, {
        instancePath: instancePath + "/terminationMessagePath",
        parentData: data,
        parentDataProperty: "terminationMessagePath",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.terminationMessagePolicy !== undefined) {
      if (!validate26(data.terminationMessagePolicy, {
        instancePath: instancePath + "/terminationMessagePolicy",
        parentData: data,
        parentDataProperty: "terminationMessagePolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.tty !== undefined) {
      if (!validate30(data.tty, {
        instancePath: instancePath + "/tty",
        parentData: data,
        parentDataProperty: "tty",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeDevices !== undefined) {
      if (!validate182(data.volumeDevices, {
        instancePath: instancePath + "/volumeDevices",
        parentData: data,
        parentDataProperty: "volumeDevices",
        rootData
      })) {
        vErrors = vErrors === null ? validate182.errors : vErrors.concat(validate182.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeMounts !== undefined) {
      if (!validate187(data.volumeMounts, {
        instancePath: instancePath + "/volumeMounts",
        parentData: data,
        parentDataProperty: "volumeMounts",
        rootData
      })) {
        vErrors = vErrors === null ? validate187.errors : vErrors.concat(validate187.errors);
        errors = vErrors.length;
      }
    }
    if (data.workingDir !== undefined) {
      if (!validate26(data.workingDir, {
        instancePath: instancePath + "/workingDir",
        parentData: data,
        parentDataProperty: "workingDir",
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
  validate196.errors = vErrors;
  return errors === 0;
}
function validate362(data, {
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
  validate362.errors = vErrors;
  return errors === 0;
}
const schema109 = {
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
function validate365(data, {
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
      if (!validate40(data.nameservers, {
        instancePath: instancePath + "/nameservers",
        parentData: data,
        parentDataProperty: "nameservers",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
    if (data.options !== undefined) {
      if (!validate107(data.options, {
        instancePath: instancePath + "/options",
        parentData: data,
        parentDataProperty: "options",
        rootData
      })) {
        vErrors = vErrors === null ? validate107.errors : vErrors.concat(validate107.errors);
        errors = vErrors.length;
      }
    }
    if (data.searches !== undefined) {
      if (!validate40(data.searches, {
        instancePath: instancePath + "/searches",
        parentData: data,
        parentDataProperty: "searches",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
  }
  validate365.errors = vErrors;
  return errors === 0;
}
const schema110 = {
  "items": {
    "$ref": "63UWbGKceVU2qS2kgTWomHtI9pS0gLlpfoRbGm5w"
  },
  "type": "array",
  "nullable": true
};
const schema111 = {
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
      "$ref": "W7vrlsSZWp7rggEIEZsVRoja8Xamzter4HOa8m2lRw"
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
    "resources": {
      "$ref": "8W2YFMh6tizd8oQP26X8ug1o98mntgXW2JlTv74YQ"
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
function validate373(data, {
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
      if (!validate40(data.args, {
        instancePath: instancePath + "/args",
        parentData: data,
        parentDataProperty: "args",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
    if (data.command !== undefined) {
      if (!validate40(data.command, {
        instancePath: instancePath + "/command",
        parentData: data,
        parentDataProperty: "command",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
    if (data.env !== undefined) {
      if (!validate112(data.env, {
        instancePath: instancePath + "/env",
        parentData: data,
        parentDataProperty: "env",
        rootData
      })) {
        vErrors = vErrors === null ? validate112.errors : vErrors.concat(validate112.errors);
        errors = vErrors.length;
      }
    }
    if (data.envFrom !== undefined) {
      if (!validate133(data.envFrom, {
        instancePath: instancePath + "/envFrom",
        parentData: data,
        parentDataProperty: "envFrom",
        rootData
      })) {
        vErrors = vErrors === null ? validate133.errors : vErrors.concat(validate133.errors);
        errors = vErrors.length;
      }
    }
    if (data.image !== undefined) {
      if (!validate26(data.image, {
        instancePath: instancePath + "/image",
        parentData: data,
        parentDataProperty: "image",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.imagePullPolicy !== undefined) {
      if (!validate26(data.imagePullPolicy, {
        instancePath: instancePath + "/imagePullPolicy",
        parentData: data,
        parentDataProperty: "imagePullPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.lifecycle !== undefined) {
      if (!validate139(data.lifecycle, {
        instancePath: instancePath + "/lifecycle",
        parentData: data,
        parentDataProperty: "lifecycle",
        rootData
      })) {
        vErrors = vErrors === null ? validate139.errors : vErrors.concat(validate139.errors);
        errors = vErrors.length;
      }
    }
    if (data.livenessProbe !== undefined) {
      if (!validate92(data.livenessProbe, {
        instancePath: instancePath + "/livenessProbe",
        parentData: data,
        parentDataProperty: "livenessProbe",
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
    if (data.ports !== undefined) {
      if (!validate142(data.ports, {
        instancePath: instancePath + "/ports",
        parentData: data,
        parentDataProperty: "ports",
        rootData
      })) {
        vErrors = vErrors === null ? validate142.errors : vErrors.concat(validate142.errors);
        errors = vErrors.length;
      }
    }
    if (data.readinessProbe !== undefined) {
      if (!validate92(data.readinessProbe, {
        instancePath: instancePath + "/readinessProbe",
        parentData: data,
        parentDataProperty: "readinessProbe",
        rootData
      })) {
        vErrors = vErrors === null ? validate92.errors : vErrors.concat(validate92.errors);
        errors = vErrors.length;
      }
    }
    if (data.resources !== undefined) {
      if (!validate151(data.resources, {
        instancePath: instancePath + "/resources",
        parentData: data,
        parentDataProperty: "resources",
        rootData
      })) {
        vErrors = vErrors === null ? validate151.errors : vErrors.concat(validate151.errors);
        errors = vErrors.length;
      }
    }
    if (data.securityContext !== undefined) {
      if (!validate154(data.securityContext, {
        instancePath: instancePath + "/securityContext",
        parentData: data,
        parentDataProperty: "securityContext",
        rootData
      })) {
        vErrors = vErrors === null ? validate154.errors : vErrors.concat(validate154.errors);
        errors = vErrors.length;
      }
    }
    if (data.startupProbe !== undefined) {
      if (!validate92(data.startupProbe, {
        instancePath: instancePath + "/startupProbe",
        parentData: data,
        parentDataProperty: "startupProbe",
        rootData
      })) {
        vErrors = vErrors === null ? validate92.errors : vErrors.concat(validate92.errors);
        errors = vErrors.length;
      }
    }
    if (data.stdin !== undefined) {
      if (!validate30(data.stdin, {
        instancePath: instancePath + "/stdin",
        parentData: data,
        parentDataProperty: "stdin",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.stdinOnce !== undefined) {
      if (!validate30(data.stdinOnce, {
        instancePath: instancePath + "/stdinOnce",
        parentData: data,
        parentDataProperty: "stdinOnce",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.targetContainerName !== undefined) {
      if (!validate26(data.targetContainerName, {
        instancePath: instancePath + "/targetContainerName",
        parentData: data,
        parentDataProperty: "targetContainerName",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.terminationMessagePath !== undefined) {
      if (!validate26(data.terminationMessagePath, {
        instancePath: instancePath + "/terminationMessagePath",
        parentData: data,
        parentDataProperty: "terminationMessagePath",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.terminationMessagePolicy !== undefined) {
      if (!validate26(data.terminationMessagePolicy, {
        instancePath: instancePath + "/terminationMessagePolicy",
        parentData: data,
        parentDataProperty: "terminationMessagePolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.tty !== undefined) {
      if (!validate30(data.tty, {
        instancePath: instancePath + "/tty",
        parentData: data,
        parentDataProperty: "tty",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeDevices !== undefined) {
      if (!validate182(data.volumeDevices, {
        instancePath: instancePath + "/volumeDevices",
        parentData: data,
        parentDataProperty: "volumeDevices",
        rootData
      })) {
        vErrors = vErrors === null ? validate182.errors : vErrors.concat(validate182.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeMounts !== undefined) {
      if (!validate187(data.volumeMounts, {
        instancePath: instancePath + "/volumeMounts",
        parentData: data,
        parentDataProperty: "volumeMounts",
        rootData
      })) {
        vErrors = vErrors === null ? validate187.errors : vErrors.concat(validate187.errors);
        errors = vErrors.length;
      }
    }
    if (data.workingDir !== undefined) {
      if (!validate26(data.workingDir, {
        instancePath: instancePath + "/workingDir",
        parentData: data,
        parentDataProperty: "workingDir",
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
  validate373.errors = vErrors;
  return errors === 0;
}
function validate372(data, {
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
      if (!validate373(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate373.errors : vErrors.concat(validate373.errors);
        errors = vErrors.length;
      }
    }
  }
  validate372.errors = vErrors;
  return errors === 0;
}
const schema112 = {
  "items": {
    "$ref": "yiLo38WDwKGtINzmSW6jxETeZwoUuCRIqevG22DYxc"
  },
  "type": "array",
  "nullable": true
};
const schema113 = {
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
function validate400(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.hostnames !== undefined) {
      if (!validate40(data.hostnames, {
        instancePath: instancePath + "/hostnames",
        parentData: data,
        parentDataProperty: "hostnames",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
    if (data.ip !== undefined) {
      if (!validate26(data.ip, {
        instancePath: instancePath + "/ip",
        parentData: data,
        parentDataProperty: "ip",
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
const schema114 = {
  "items": {
    "$ref": "qgtTuDaNsImr24YNCUVN3pDpwYXcxIDVFjAvxPkh8"
  },
  "type": "array",
  "nullable": true
};
const schema115 = {
  "properties": {
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
function validate411(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
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
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate411.errors = vErrors;
  return errors === 0;
}
function validate410(data, {
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
      if (!validate411(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate411.errors : vErrors.concat(validate411.errors);
        errors = vErrors.length;
      }
    }
  }
  validate410.errors = vErrors;
  return errors === 0;
}
const schema116 = {
  "items": {
    "$ref": "FoG0UatxzHXRdx9Fzv03npPGwZsPc6umHVBdPQvw"
  },
  "type": "array",
  "nullable": true
};
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
  validate415.errors = vErrors;
  return errors === 0;
}
const schema117 = {
  "properties": {
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["name"],
  "type": "object",
  "nullable": true
};
function validate420(data, {
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
  validate420.errors = vErrors;
  return errors === 0;
}
const schema118 = {
  "additionalProperties": {
    "$ref": "l7oaIcmo24pLi7XxCQ3euA6o54Bu2nt1fJ44v0vO04"
  },
  "type": "object",
  "properties": {},
  "nullable": true
};
function validate423(data, {
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
      if (!validate124(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
        rootData
      })) {
        vErrors = vErrors === null ? validate124.errors : vErrors.concat(validate124.errors);
        errors = vErrors.length;
      }
    }
  }
  validate423.errors = vErrors;
  return errors === 0;
}
const schema119 = {
  "items": {
    "$ref": "7b4jhx4uNqXqCFn2w8NkgAjv38EtTlcang4jjJrU"
  },
  "type": "array",
  "nullable": true
};
const schema120 = {
  "properties": {
    "conditionType": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["conditionType"],
  "type": "object"
};
function validate430(data, {
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
      if (!validate21(data.conditionType, {
        instancePath: instancePath + "/conditionType",
        parentData: data,
        parentDataProperty: "conditionType",
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
  validate430.errors = vErrors;
  return errors === 0;
}
function validate429(data, {
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
      if (!validate430(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate430.errors : vErrors.concat(validate430.errors);
        errors = vErrors.length;
      }
    }
  }
  validate429.errors = vErrors;
  return errors === 0;
}
const schema121 = {
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
const schema122 = {
  "items": {
    "$ref": "icwF9bpzvIS3QxC52v2XvqrjjaZnFwyMbHUnptLeEQ"
  },
  "type": "array",
  "nullable": true
};
const schema62 = {
  "format": "int64",
  "type": "integer"
};
function validate219(data, {
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
    if (!formats4.validate(data)) {
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
  validate219.errors = vErrors;
  return errors === 0;
}
function validate445(data, {
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
      if (!validate219(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate219.errors : vErrors.concat(validate219.errors);
        errors = vErrors.length;
      }
    }
  }
  validate445.errors = vErrors;
  return errors === 0;
}
function validate437(data, {
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
      if (!validate35(data.fsGroup, {
        instancePath: instancePath + "/fsGroup",
        parentData: data,
        parentDataProperty: "fsGroup",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.fsGroupChangePolicy !== undefined) {
      if (!validate26(data.fsGroupChangePolicy, {
        instancePath: instancePath + "/fsGroupChangePolicy",
        parentData: data,
        parentDataProperty: "fsGroupChangePolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.runAsGroup !== undefined) {
      if (!validate35(data.runAsGroup, {
        instancePath: instancePath + "/runAsGroup",
        parentData: data,
        parentDataProperty: "runAsGroup",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.runAsNonRoot !== undefined) {
      if (!validate30(data.runAsNonRoot, {
        instancePath: instancePath + "/runAsNonRoot",
        parentData: data,
        parentDataProperty: "runAsNonRoot",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.runAsUser !== undefined) {
      if (!validate35(data.runAsUser, {
        instancePath: instancePath + "/runAsUser",
        parentData: data,
        parentDataProperty: "runAsUser",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.seLinuxOptions !== undefined) {
      if (!validate166(data.seLinuxOptions, {
        instancePath: instancePath + "/seLinuxOptions",
        parentData: data,
        parentDataProperty: "seLinuxOptions",
        rootData
      })) {
        vErrors = vErrors === null ? validate166.errors : vErrors.concat(validate166.errors);
        errors = vErrors.length;
      }
    }
    if (data.seccompProfile !== undefined) {
      if (!validate172(data.seccompProfile, {
        instancePath: instancePath + "/seccompProfile",
        parentData: data,
        parentDataProperty: "seccompProfile",
        rootData
      })) {
        vErrors = vErrors === null ? validate172.errors : vErrors.concat(validate172.errors);
        errors = vErrors.length;
      }
    }
    if (data.supplementalGroups !== undefined) {
      if (!validate445(data.supplementalGroups, {
        instancePath: instancePath + "/supplementalGroups",
        parentData: data,
        parentDataProperty: "supplementalGroups",
        rootData
      })) {
        vErrors = vErrors === null ? validate445.errors : vErrors.concat(validate445.errors);
        errors = vErrors.length;
      }
    }
    if (data.sysctls !== undefined) {
      if (!validate78(data.sysctls, {
        instancePath: instancePath + "/sysctls",
        parentData: data,
        parentDataProperty: "sysctls",
        rootData
      })) {
        vErrors = vErrors === null ? validate78.errors : vErrors.concat(validate78.errors);
        errors = vErrors.length;
      }
    }
    if (data.windowsOptions !== undefined) {
      if (!validate176(data.windowsOptions, {
        instancePath: instancePath + "/windowsOptions",
        parentData: data,
        parentDataProperty: "windowsOptions",
        rootData
      })) {
        vErrors = vErrors === null ? validate176.errors : vErrors.concat(validate176.errors);
        errors = vErrors.length;
      }
    }
  }
  validate437.errors = vErrors;
  return errors === 0;
}
const schema123 = {
  "items": {
    "$ref": "Me3dAzCevo9JgluOcBf4PX5XcjXOHICBlAsWQglc"
  },
  "type": "array",
  "nullable": true
};
const schema124 = {
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
function validate458(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.effect !== undefined) {
      if (!validate26(data.effect, {
        instancePath: instancePath + "/effect",
        parentData: data,
        parentDataProperty: "effect",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
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
    if (data.tolerationSeconds !== undefined) {
      if (!validate35(data.tolerationSeconds, {
        instancePath: instancePath + "/tolerationSeconds",
        parentData: data,
        parentDataProperty: "tolerationSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.value !== undefined) {
      if (!validate26(data.value, {
        instancePath: instancePath + "/value",
        parentData: data,
        parentDataProperty: "value",
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
  validate458.errors = vErrors;
  return errors === 0;
}
function validate457(data, {
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
      if (!validate458(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate458.errors : vErrors.concat(validate458.errors);
        errors = vErrors.length;
      }
    }
  }
  validate457.errors = vErrors;
  return errors === 0;
}
const schema125 = {
  "items": {
    "$ref": "PMEoIw3F1IPZaI9o7ckqeodb7BJ6q7Y2F6PDUm9sk"
  },
  "type": "array",
  "nullable": true
};
const schema126 = {
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
function validate467(data, {
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
      if (!validate47(data.labelSelector, {
        instancePath: instancePath + "/labelSelector",
        parentData: data,
        parentDataProperty: "labelSelector",
        rootData
      })) {
        vErrors = vErrors === null ? validate47.errors : vErrors.concat(validate47.errors);
        errors = vErrors.length;
      }
    }
    if (data.matchLabelKeys !== undefined) {
      if (!validate40(data.matchLabelKeys, {
        instancePath: instancePath + "/matchLabelKeys",
        parentData: data,
        parentDataProperty: "matchLabelKeys",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
    if (data.maxSkew !== undefined) {
      if (!validate31(data.maxSkew, {
        instancePath: instancePath + "/maxSkew",
        parentData: data,
        parentDataProperty: "maxSkew",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
    if (data.minDomains !== undefined) {
      if (!validate29(data.minDomains, {
        instancePath: instancePath + "/minDomains",
        parentData: data,
        parentDataProperty: "minDomains",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodeAffinityPolicy !== undefined) {
      if (!validate26(data.nodeAffinityPolicy, {
        instancePath: instancePath + "/nodeAffinityPolicy",
        parentData: data,
        parentDataProperty: "nodeAffinityPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodeTaintsPolicy !== undefined) {
      if (!validate26(data.nodeTaintsPolicy, {
        instancePath: instancePath + "/nodeTaintsPolicy",
        parentData: data,
        parentDataProperty: "nodeTaintsPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.topologyKey !== undefined) {
      if (!validate21(data.topologyKey, {
        instancePath: instancePath + "/topologyKey",
        parentData: data,
        parentDataProperty: "topologyKey",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.whenUnsatisfiable !== undefined) {
      if (!validate21(data.whenUnsatisfiable, {
        instancePath: instancePath + "/whenUnsatisfiable",
        parentData: data,
        parentDataProperty: "whenUnsatisfiable",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
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
  validate467.errors = vErrors;
  return errors === 0;
}
function validate466(data, {
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
      if (!validate467(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate467.errors : vErrors.concat(validate467.errors);
        errors = vErrors.length;
      }
    }
  }
  validate466.errors = vErrors;
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
      if (!validate35(data.activeDeadlineSeconds, {
        instancePath: instancePath + "/activeDeadlineSeconds",
        parentData: data,
        parentDataProperty: "activeDeadlineSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.affinity !== undefined) {
      if (!validate344(data.affinity, {
        instancePath: instancePath + "/affinity",
        parentData: data,
        parentDataProperty: "affinity",
        rootData
      })) {
        vErrors = vErrors === null ? validate344.errors : vErrors.concat(validate344.errors);
        errors = vErrors.length;
      }
    }
    if (data.automountServiceAccountToken !== undefined) {
      if (!validate30(data.automountServiceAccountToken, {
        instancePath: instancePath + "/automountServiceAccountToken",
        parentData: data,
        parentDataProperty: "automountServiceAccountToken",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.containers !== undefined) {
      if (!validate362(data.containers, {
        instancePath: instancePath + "/containers",
        parentData: data,
        parentDataProperty: "containers",
        rootData
      })) {
        vErrors = vErrors === null ? validate362.errors : vErrors.concat(validate362.errors);
        errors = vErrors.length;
      }
    }
    if (data.dnsConfig !== undefined) {
      if (!validate365(data.dnsConfig, {
        instancePath: instancePath + "/dnsConfig",
        parentData: data,
        parentDataProperty: "dnsConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate365.errors : vErrors.concat(validate365.errors);
        errors = vErrors.length;
      }
    }
    if (data.dnsPolicy !== undefined) {
      if (!validate26(data.dnsPolicy, {
        instancePath: instancePath + "/dnsPolicy",
        parentData: data,
        parentDataProperty: "dnsPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.enableServiceLinks !== undefined) {
      if (!validate30(data.enableServiceLinks, {
        instancePath: instancePath + "/enableServiceLinks",
        parentData: data,
        parentDataProperty: "enableServiceLinks",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.ephemeralContainers !== undefined) {
      if (!validate372(data.ephemeralContainers, {
        instancePath: instancePath + "/ephemeralContainers",
        parentData: data,
        parentDataProperty: "ephemeralContainers",
        rootData
      })) {
        vErrors = vErrors === null ? validate372.errors : vErrors.concat(validate372.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostAliases !== undefined) {
      if (!validate399(data.hostAliases, {
        instancePath: instancePath + "/hostAliases",
        parentData: data,
        parentDataProperty: "hostAliases",
        rootData
      })) {
        vErrors = vErrors === null ? validate399.errors : vErrors.concat(validate399.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostIPC !== undefined) {
      if (!validate30(data.hostIPC, {
        instancePath: instancePath + "/hostIPC",
        parentData: data,
        parentDataProperty: "hostIPC",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
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
    if (data.hostPID !== undefined) {
      if (!validate30(data.hostPID, {
        instancePath: instancePath + "/hostPID",
        parentData: data,
        parentDataProperty: "hostPID",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostUsers !== undefined) {
      if (!validate30(data.hostUsers, {
        instancePath: instancePath + "/hostUsers",
        parentData: data,
        parentDataProperty: "hostUsers",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostname !== undefined) {
      if (!validate26(data.hostname, {
        instancePath: instancePath + "/hostname",
        parentData: data,
        parentDataProperty: "hostname",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.imagePullSecrets !== undefined) {
      if (!validate410(data.imagePullSecrets, {
        instancePath: instancePath + "/imagePullSecrets",
        parentData: data,
        parentDataProperty: "imagePullSecrets",
        rootData
      })) {
        vErrors = vErrors === null ? validate410.errors : vErrors.concat(validate410.errors);
        errors = vErrors.length;
      }
    }
    if (data.initContainers !== undefined) {
      if (!validate415(data.initContainers, {
        instancePath: instancePath + "/initContainers",
        parentData: data,
        parentDataProperty: "initContainers",
        rootData
      })) {
        vErrors = vErrors === null ? validate415.errors : vErrors.concat(validate415.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodeName !== undefined) {
      if (!validate26(data.nodeName, {
        instancePath: instancePath + "/nodeName",
        parentData: data,
        parentDataProperty: "nodeName",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodeSelector !== undefined) {
      if (!validate27(data.nodeSelector, {
        instancePath: instancePath + "/nodeSelector",
        parentData: data,
        parentDataProperty: "nodeSelector",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.os !== undefined) {
      if (!validate420(data.os, {
        instancePath: instancePath + "/os",
        parentData: data,
        parentDataProperty: "os",
        rootData
      })) {
        vErrors = vErrors === null ? validate420.errors : vErrors.concat(validate420.errors);
        errors = vErrors.length;
      }
    }
    if (data.overhead !== undefined) {
      if (!validate423(data.overhead, {
        instancePath: instancePath + "/overhead",
        parentData: data,
        parentDataProperty: "overhead",
        rootData
      })) {
        vErrors = vErrors === null ? validate423.errors : vErrors.concat(validate423.errors);
        errors = vErrors.length;
      }
    }
    if (data.preemptionPolicy !== undefined) {
      if (!validate26(data.preemptionPolicy, {
        instancePath: instancePath + "/preemptionPolicy",
        parentData: data,
        parentDataProperty: "preemptionPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.priority !== undefined) {
      if (!validate29(data.priority, {
        instancePath: instancePath + "/priority",
        parentData: data,
        parentDataProperty: "priority",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.priorityClassName !== undefined) {
      if (!validate26(data.priorityClassName, {
        instancePath: instancePath + "/priorityClassName",
        parentData: data,
        parentDataProperty: "priorityClassName",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.readinessGates !== undefined) {
      if (!validate429(data.readinessGates, {
        instancePath: instancePath + "/readinessGates",
        parentData: data,
        parentDataProperty: "readinessGates",
        rootData
      })) {
        vErrors = vErrors === null ? validate429.errors : vErrors.concat(validate429.errors);
        errors = vErrors.length;
      }
    }
    if (data.restartPolicy !== undefined) {
      if (!validate26(data.restartPolicy, {
        instancePath: instancePath + "/restartPolicy",
        parentData: data,
        parentDataProperty: "restartPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.runtimeClassName !== undefined) {
      if (!validate26(data.runtimeClassName, {
        instancePath: instancePath + "/runtimeClassName",
        parentData: data,
        parentDataProperty: "runtimeClassName",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.schedulerName !== undefined) {
      if (!validate26(data.schedulerName, {
        instancePath: instancePath + "/schedulerName",
        parentData: data,
        parentDataProperty: "schedulerName",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.securityContext !== undefined) {
      if (!validate437(data.securityContext, {
        instancePath: instancePath + "/securityContext",
        parentData: data,
        parentDataProperty: "securityContext",
        rootData
      })) {
        vErrors = vErrors === null ? validate437.errors : vErrors.concat(validate437.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAccount !== undefined) {
      if (!validate26(data.serviceAccount, {
        instancePath: instancePath + "/serviceAccount",
        parentData: data,
        parentDataProperty: "serviceAccount",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAccountName !== undefined) {
      if (!validate26(data.serviceAccountName, {
        instancePath: instancePath + "/serviceAccountName",
        parentData: data,
        parentDataProperty: "serviceAccountName",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.setHostnameAsFQDN !== undefined) {
      if (!validate30(data.setHostnameAsFQDN, {
        instancePath: instancePath + "/setHostnameAsFQDN",
        parentData: data,
        parentDataProperty: "setHostnameAsFQDN",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.shareProcessNamespace !== undefined) {
      if (!validate30(data.shareProcessNamespace, {
        instancePath: instancePath + "/shareProcessNamespace",
        parentData: data,
        parentDataProperty: "shareProcessNamespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.subdomain !== undefined) {
      if (!validate26(data.subdomain, {
        instancePath: instancePath + "/subdomain",
        parentData: data,
        parentDataProperty: "subdomain",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.terminationGracePeriodSeconds !== undefined) {
      if (!validate35(data.terminationGracePeriodSeconds, {
        instancePath: instancePath + "/terminationGracePeriodSeconds",
        parentData: data,
        parentDataProperty: "terminationGracePeriodSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.tolerations !== undefined) {
      if (!validate457(data.tolerations, {
        instancePath: instancePath + "/tolerations",
        parentData: data,
        parentDataProperty: "tolerations",
        rootData
      })) {
        vErrors = vErrors === null ? validate457.errors : vErrors.concat(validate457.errors);
        errors = vErrors.length;
      }
    }
    if (data.topologySpreadConstraints !== undefined) {
      if (!validate466(data.topologySpreadConstraints, {
        instancePath: instancePath + "/topologySpreadConstraints",
        parentData: data,
        parentDataProperty: "topologySpreadConstraints",
        rootData
      })) {
        vErrors = vErrors === null ? validate466.errors : vErrors.concat(validate466.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumes !== undefined) {
      if (!validate106(data.volumes, {
        instancePath: instancePath + "/volumes",
        parentData: data,
        parentDataProperty: "volumes",
        rootData
      })) {
        vErrors = vErrors === null ? validate106.errors : vErrors.concat(validate106.errors);
        errors = vErrors.length;
      }
    }
  }
  validate342.errors = vErrors;
  return errors === 0;
}
function validate340(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.metadata !== undefined) {
      if (!validate32(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate342(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate342.errors : vErrors.concat(validate342.errors);
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
  validate340.errors = vErrors;
  return errors === 0;
}
function validate311(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.template === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "template"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.activeDeadlineSeconds !== undefined) {
      if (!validate35(data.activeDeadlineSeconds, {
        instancePath: instancePath + "/activeDeadlineSeconds",
        parentData: data,
        parentDataProperty: "activeDeadlineSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.backoffLimit !== undefined) {
      if (!validate29(data.backoffLimit, {
        instancePath: instancePath + "/backoffLimit",
        parentData: data,
        parentDataProperty: "backoffLimit",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.completionMode !== undefined) {
      if (!validate26(data.completionMode, {
        instancePath: instancePath + "/completionMode",
        parentData: data,
        parentDataProperty: "completionMode",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.completions !== undefined) {
      if (!validate29(data.completions, {
        instancePath: instancePath + "/completions",
        parentData: data,
        parentDataProperty: "completions",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.manualSelector !== undefined) {
      if (!validate30(data.manualSelector, {
        instancePath: instancePath + "/manualSelector",
        parentData: data,
        parentDataProperty: "manualSelector",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.parallelism !== undefined) {
      if (!validate29(data.parallelism, {
        instancePath: instancePath + "/parallelism",
        parentData: data,
        parentDataProperty: "parallelism",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.podFailurePolicy !== undefined) {
      if (!validate318(data.podFailurePolicy, {
        instancePath: instancePath + "/podFailurePolicy",
        parentData: data,
        parentDataProperty: "podFailurePolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate318.errors : vErrors.concat(validate318.errors);
        errors = vErrors.length;
      }
    }
    if (data.selector !== undefined) {
      if (!validate47(data.selector, {
        instancePath: instancePath + "/selector",
        parentData: data,
        parentDataProperty: "selector",
        rootData
      })) {
        vErrors = vErrors === null ? validate47.errors : vErrors.concat(validate47.errors);
        errors = vErrors.length;
      }
    }
    if (data.suspend !== undefined) {
      if (!validate30(data.suspend, {
        instancePath: instancePath + "/suspend",
        parentData: data,
        parentDataProperty: "suspend",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.template !== undefined) {
      if (!validate340(data.template, {
        instancePath: instancePath + "/template",
        parentData: data,
        parentDataProperty: "template",
        rootData
      })) {
        vErrors = vErrors === null ? validate340.errors : vErrors.concat(validate340.errors);
        errors = vErrors.length;
      }
    }
    if (data.ttlSecondsAfterFinished !== undefined) {
      if (!validate29(data.ttlSecondsAfterFinished, {
        instancePath: instancePath + "/ttlSecondsAfterFinished",
        parentData: data,
        parentDataProperty: "ttlSecondsAfterFinished",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
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
  validate311.errors = vErrors;
  return errors === 0;
}
function validate309(data, {
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
      if (!validate32(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate311(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate311.errors : vErrors.concat(validate311.errors);
        errors = vErrors.length;
      }
    }
  }
  validate309.errors = vErrors;
  return errors === 0;
}
const schema127 = {
  "properties": {
    "address": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "application": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "canaryConfigName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "configurationAccountName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "metricsAccountName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "scopes": {
      "$ref": "znHgtchA543qr9CX6yCX4smFSGtBD4n1zeJKBwxHck"
    },
    "storageAccountName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "threshold": {
      "$ref": "6lYd75rMJ9WNkNOwxu2FZ0ap2YkHhR3C1piadcvg"
    }
  },
  "required": ["address", "application", "canaryConfigName", "configurationAccountName", "metricsAccountName", "scopes", "storageAccountName", "threshold"],
  "type": "object",
  "nullable": true
};
const schema128 = {
  "items": {
    "$ref": "A3BsBG7a0VKmUSlZLF1N3qS1NxGJWFNEaw4iCi3PE"
  },
  "type": "array"
};
const schema129 = {
  "properties": {
    "controlScope": {
      "$ref": "VuuxwGkPYycTbIv62OGh8xL1y9PFBAVte1RO36JeFg8"
    },
    "experimentScope": {
      "$ref": "VuuxwGkPYycTbIv62OGh8xL1y9PFBAVte1RO36JeFg8"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["controlScope", "experimentScope", "name"],
  "type": "object"
};
const schema63 = {
  "properties": {
    "end": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "region": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "scope": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "start": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "step": {
      "$ref": "icwF9bpzvIS3QxC52v2XvqrjjaZnFwyMbHUnptLeEQ"
    }
  },
  "required": ["end", "region", "scope", "start", "step"],
  "type": "object"
};
function validate220(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.end === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "end"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.region === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "region"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.scope === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "scope"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.start === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "start"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.step === undefined) {
      const err4 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "step"
        }
      };
      if (vErrors === null) {
        vErrors = [err4];
      } else {
        vErrors.push(err4);
      }
      errors++;
    }
    if (data.end !== undefined) {
      if (!validate21(data.end, {
        instancePath: instancePath + "/end",
        parentData: data,
        parentDataProperty: "end",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.region !== undefined) {
      if (!validate21(data.region, {
        instancePath: instancePath + "/region",
        parentData: data,
        parentDataProperty: "region",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.scope !== undefined) {
      if (!validate21(data.scope, {
        instancePath: instancePath + "/scope",
        parentData: data,
        parentDataProperty: "scope",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.start !== undefined) {
      if (!validate21(data.start, {
        instancePath: instancePath + "/start",
        parentData: data,
        parentDataProperty: "start",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.step !== undefined) {
      if (!validate219(data.step, {
        instancePath: instancePath + "/step",
        parentData: data,
        parentDataProperty: "step",
        rootData
      })) {
        vErrors = vErrors === null ? validate219.errors : vErrors.concat(validate219.errors);
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
  validate220.errors = vErrors;
  return errors === 0;
}
function validate491(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.controlScope === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "controlScope"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.experimentScope === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "experimentScope"
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
    if (data.controlScope !== undefined) {
      if (!validate220(data.controlScope, {
        instancePath: instancePath + "/controlScope",
        parentData: data,
        parentDataProperty: "controlScope",
        rootData
      })) {
        vErrors = vErrors === null ? validate220.errors : vErrors.concat(validate220.errors);
        errors = vErrors.length;
      }
    }
    if (data.experimentScope !== undefined) {
      if (!validate220(data.experimentScope, {
        instancePath: instancePath + "/experimentScope",
        parentData: data,
        parentDataProperty: "experimentScope",
        rootData
      })) {
        vErrors = vErrors === null ? validate220.errors : vErrors.concat(validate220.errors);
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
  validate491.errors = vErrors;
  return errors === 0;
}
function validate490(data, {
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
      if (!validate491(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate491.errors : vErrors.concat(validate491.errors);
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
  validate490.errors = vErrors;
  return errors === 0;
}
const schema130 = {
  "properties": {
    "marginal": {
      "$ref": "icwF9bpzvIS3QxC52v2XvqrjjaZnFwyMbHUnptLeEQ"
    },
    "pass": {
      "$ref": "icwF9bpzvIS3QxC52v2XvqrjjaZnFwyMbHUnptLeEQ"
    }
  },
  "required": ["marginal", "pass"],
  "type": "object"
};
function validate498(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.marginal === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "marginal"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.pass === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "pass"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.marginal !== undefined) {
      if (!validate219(data.marginal, {
        instancePath: instancePath + "/marginal",
        parentData: data,
        parentDataProperty: "marginal",
        rootData
      })) {
        vErrors = vErrors === null ? validate219.errors : vErrors.concat(validate219.errors);
        errors = vErrors.length;
      }
    }
    if (data.pass !== undefined) {
      if (!validate219(data.pass, {
        instancePath: instancePath + "/pass",
        parentData: data,
        parentDataProperty: "pass",
        rootData
      })) {
        vErrors = vErrors === null ? validate219.errors : vErrors.concat(validate219.errors);
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
  validate498.errors = vErrors;
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
    if (data.address === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "address"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.application === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "application"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.canaryConfigName === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "canaryConfigName"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.configurationAccountName === undefined) {
      const err4 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "configurationAccountName"
        }
      };
      if (vErrors === null) {
        vErrors = [err4];
      } else {
        vErrors.push(err4);
      }
      errors++;
    }
    if (data.metricsAccountName === undefined) {
      const err5 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "metricsAccountName"
        }
      };
      if (vErrors === null) {
        vErrors = [err5];
      } else {
        vErrors.push(err5);
      }
      errors++;
    }
    if (data.scopes === undefined) {
      const err6 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "scopes"
        }
      };
      if (vErrors === null) {
        vErrors = [err6];
      } else {
        vErrors.push(err6);
      }
      errors++;
    }
    if (data.storageAccountName === undefined) {
      const err7 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "storageAccountName"
        }
      };
      if (vErrors === null) {
        vErrors = [err7];
      } else {
        vErrors.push(err7);
      }
      errors++;
    }
    if (data.threshold === undefined) {
      const err8 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "threshold"
        }
      };
      if (vErrors === null) {
        vErrors = [err8];
      } else {
        vErrors.push(err8);
      }
      errors++;
    }
    if (data.address !== undefined) {
      if (!validate21(data.address, {
        instancePath: instancePath + "/address",
        parentData: data,
        parentDataProperty: "address",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.application !== undefined) {
      if (!validate21(data.application, {
        instancePath: instancePath + "/application",
        parentData: data,
        parentDataProperty: "application",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.canaryConfigName !== undefined) {
      if (!validate21(data.canaryConfigName, {
        instancePath: instancePath + "/canaryConfigName",
        parentData: data,
        parentDataProperty: "canaryConfigName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.configurationAccountName !== undefined) {
      if (!validate21(data.configurationAccountName, {
        instancePath: instancePath + "/configurationAccountName",
        parentData: data,
        parentDataProperty: "configurationAccountName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.metricsAccountName !== undefined) {
      if (!validate21(data.metricsAccountName, {
        instancePath: instancePath + "/metricsAccountName",
        parentData: data,
        parentDataProperty: "metricsAccountName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.scopes !== undefined) {
      if (!validate490(data.scopes, {
        instancePath: instancePath + "/scopes",
        parentData: data,
        parentDataProperty: "scopes",
        rootData
      })) {
        vErrors = vErrors === null ? validate490.errors : vErrors.concat(validate490.errors);
        errors = vErrors.length;
      }
    }
    if (data.storageAccountName !== undefined) {
      if (!validate21(data.storageAccountName, {
        instancePath: instancePath + "/storageAccountName",
        parentData: data,
        parentDataProperty: "storageAccountName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.threshold !== undefined) {
      if (!validate498(data.threshold, {
        instancePath: instancePath + "/threshold",
        parentData: data,
        parentDataProperty: "threshold",
        rootData
      })) {
        vErrors = vErrors === null ? validate498.errors : vErrors.concat(validate498.errors);
        errors = vErrors.length;
      }
    }
  }
  validate484.errors = vErrors;
  return errors === 0;
}
const schema131 = {
  "properties": {
    "profile": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "query": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["query"],
  "type": "object",
  "nullable": true
};
function validate503(data, {
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
    if (data.query === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "query"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.profile !== undefined) {
      if (!validate26(data.profile, {
        instancePath: instancePath + "/profile",
        parentData: data,
        parentDataProperty: "profile",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.query !== undefined) {
      if (!validate21(data.query, {
        instancePath: instancePath + "/query",
        parentData: data,
        parentDataProperty: "query",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate503.errors = vErrors;
  return errors === 0;
}
const schema65 = {
  "type": "object",
  "properties": {},
  "nullable": true
};
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
  validate229.errors = vErrors;
  return errors === 0;
}
const schema132 = {
  "properties": {
    "address": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "interval": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "query": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate509(data, {
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
    if (data.address !== undefined) {
      if (!validate26(data.address, {
        instancePath: instancePath + "/address",
        parentData: data,
        parentDataProperty: "address",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.interval !== undefined) {
      if (!validate26(data.interval, {
        instancePath: instancePath + "/interval",
        parentData: data,
        parentDataProperty: "interval",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.query !== undefined) {
      if (!validate26(data.query, {
        instancePath: instancePath + "/query",
        parentData: data,
        parentDataProperty: "query",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate509.errors = vErrors;
  return errors === 0;
}
const schema133 = {
  "properties": {
    "body": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "headers": {
      "$ref": "39wzsI9nsPXgQVE8Vah8f3692SdXajARO0migPVw18"
    },
    "insecure": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "jsonBody": {
      "$ref": "wnCl8zCvz1PLbyEivJTcktRgDZuzOGT9FYulvrA2T8w"
    },
    "jsonPath": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "method": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "timeoutSeconds": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "url": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["url"],
  "type": "object",
  "nullable": true
};
const schema134 = {
  "items": {
    "$ref": "rJ4XK5quRiGa2JrAKUdyctsofnFc3PjWJtxxZx64VOA"
  },
  "type": "array",
  "nullable": true
};
const schema135 = {
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
function validate518(data, {
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
  validate518.errors = vErrors;
  return errors === 0;
}
function validate517(data, {
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
      if (!validate518(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate518.errors : vErrors.concat(validate518.errors);
        errors = vErrors.length;
      }
    }
  }
  validate517.errors = vErrors;
  return errors === 0;
}
function validate515(data, {
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
    if (data.body !== undefined) {
      if (!validate26(data.body, {
        instancePath: instancePath + "/body",
        parentData: data,
        parentDataProperty: "body",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.headers !== undefined) {
      if (!validate517(data.headers, {
        instancePath: instancePath + "/headers",
        parentData: data,
        parentDataProperty: "headers",
        rootData
      })) {
        vErrors = vErrors === null ? validate517.errors : vErrors.concat(validate517.errors);
        errors = vErrors.length;
      }
    }
    if (data.insecure !== undefined) {
      if (!validate30(data.insecure, {
        instancePath: instancePath + "/insecure",
        parentData: data,
        parentDataProperty: "insecure",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.jsonBody !== undefined) {
      if (!validate229(data.jsonBody, {
        instancePath: instancePath + "/jsonBody",
        parentData: data,
        parentDataProperty: "jsonBody",
        rootData
      })) {
        vErrors = vErrors === null ? validate229.errors : vErrors.concat(validate229.errors);
        errors = vErrors.length;
      }
    }
    if (data.jsonPath !== undefined) {
      if (!validate26(data.jsonPath, {
        instancePath: instancePath + "/jsonPath",
        parentData: data,
        parentDataProperty: "jsonPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
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
    if (data.timeoutSeconds !== undefined) {
      if (!validate35(data.timeoutSeconds, {
        instancePath: instancePath + "/timeoutSeconds",
        parentData: data,
        parentDataProperty: "timeoutSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.url !== undefined) {
      if (!validate21(data.url, {
        instancePath: instancePath + "/url",
        parentData: data,
        parentDataProperty: "url",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate515.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.cloudWatch !== undefined) {
      if (!validate277(data.cloudWatch, {
        instancePath: instancePath + "/cloudWatch",
        parentData: data,
        parentDataProperty: "cloudWatch",
        rootData
      })) {
        vErrors = vErrors === null ? validate277.errors : vErrors.concat(validate277.errors);
        errors = vErrors.length;
      }
    }
    if (data.datadog !== undefined) {
      if (!validate299(data.datadog, {
        instancePath: instancePath + "/datadog",
        parentData: data,
        parentDataProperty: "datadog",
        rootData
      })) {
        vErrors = vErrors === null ? validate299.errors : vErrors.concat(validate299.errors);
        errors = vErrors.length;
      }
    }
    if (data.graphite !== undefined) {
      if (!validate226(data.graphite, {
        instancePath: instancePath + "/graphite",
        parentData: data,
        parentDataProperty: "graphite",
        rootData
      })) {
        vErrors = vErrors === null ? validate226.errors : vErrors.concat(validate226.errors);
        errors = vErrors.length;
      }
    }
    if (data.influxdb !== undefined) {
      if (!validate305(data.influxdb, {
        instancePath: instancePath + "/influxdb",
        parentData: data,
        parentDataProperty: "influxdb",
        rootData
      })) {
        vErrors = vErrors === null ? validate305.errors : vErrors.concat(validate305.errors);
        errors = vErrors.length;
      }
    }
    if (data.job !== undefined) {
      if (!validate309(data.job, {
        instancePath: instancePath + "/job",
        parentData: data,
        parentDataProperty: "job",
        rootData
      })) {
        vErrors = vErrors === null ? validate309.errors : vErrors.concat(validate309.errors);
        errors = vErrors.length;
      }
    }
    if (data.kayenta !== undefined) {
      if (!validate484(data.kayenta, {
        instancePath: instancePath + "/kayenta",
        parentData: data,
        parentDataProperty: "kayenta",
        rootData
      })) {
        vErrors = vErrors === null ? validate484.errors : vErrors.concat(validate484.errors);
        errors = vErrors.length;
      }
    }
    if (data.newRelic !== undefined) {
      if (!validate503(data.newRelic, {
        instancePath: instancePath + "/newRelic",
        parentData: data,
        parentDataProperty: "newRelic",
        rootData
      })) {
        vErrors = vErrors === null ? validate503.errors : vErrors.concat(validate503.errors);
        errors = vErrors.length;
      }
    }
    if (data.plugin !== undefined) {
      if (!validate229(data.plugin, {
        instancePath: instancePath + "/plugin",
        parentData: data,
        parentDataProperty: "plugin",
        rootData
      })) {
        vErrors = vErrors === null ? validate229.errors : vErrors.concat(validate229.errors);
        errors = vErrors.length;
      }
    }
    if (data.prometheus !== undefined) {
      if (!validate226(data.prometheus, {
        instancePath: instancePath + "/prometheus",
        parentData: data,
        parentDataProperty: "prometheus",
        rootData
      })) {
        vErrors = vErrors === null ? validate226.errors : vErrors.concat(validate226.errors);
        errors = vErrors.length;
      }
    }
    if (data.skywalking !== undefined) {
      if (!validate509(data.skywalking, {
        instancePath: instancePath + "/skywalking",
        parentData: data,
        parentDataProperty: "skywalking",
        rootData
      })) {
        vErrors = vErrors === null ? validate509.errors : vErrors.concat(validate509.errors);
        errors = vErrors.length;
      }
    }
    if (data.wavefront !== undefined) {
      if (!validate226(data.wavefront, {
        instancePath: instancePath + "/wavefront",
        parentData: data,
        parentDataProperty: "wavefront",
        rootData
      })) {
        vErrors = vErrors === null ? validate226.errors : vErrors.concat(validate226.errors);
        errors = vErrors.length;
      }
    }
    if (data.web !== undefined) {
      if (!validate515(data.web, {
        instancePath: instancePath + "/web",
        parentData: data,
        parentDataProperty: "web",
        rootData
      })) {
        vErrors = vErrors === null ? validate515.errors : vErrors.concat(validate515.errors);
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
  validate276.errors = vErrors;
  return errors === 0;
}
function validate267(data, {
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
    if (data.provider === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "provider"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.consecutiveErrorLimit !== undefined) {
      if (!validate22(data.consecutiveErrorLimit, {
        instancePath: instancePath + "/consecutiveErrorLimit",
        parentData: data,
        parentDataProperty: "consecutiveErrorLimit",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.count !== undefined) {
      if (!validate22(data.count, {
        instancePath: instancePath + "/count",
        parentData: data,
        parentDataProperty: "count",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.failureCondition !== undefined) {
      if (!validate26(data.failureCondition, {
        instancePath: instancePath + "/failureCondition",
        parentData: data,
        parentDataProperty: "failureCondition",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.failureLimit !== undefined) {
      if (!validate22(data.failureLimit, {
        instancePath: instancePath + "/failureLimit",
        parentData: data,
        parentDataProperty: "failureLimit",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.inconclusiveLimit !== undefined) {
      if (!validate22(data.inconclusiveLimit, {
        instancePath: instancePath + "/inconclusiveLimit",
        parentData: data,
        parentDataProperty: "inconclusiveLimit",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.initialDelay !== undefined) {
      if (!validate26(data.initialDelay, {
        instancePath: instancePath + "/initialDelay",
        parentData: data,
        parentDataProperty: "initialDelay",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.interval !== undefined) {
      if (!validate26(data.interval, {
        instancePath: instancePath + "/interval",
        parentData: data,
        parentDataProperty: "interval",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
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
    if (data.provider !== undefined) {
      if (!validate276(data.provider, {
        instancePath: instancePath + "/provider",
        parentData: data,
        parentDataProperty: "provider",
        rootData
      })) {
        vErrors = vErrors === null ? validate276.errors : vErrors.concat(validate276.errors);
        errors = vErrors.length;
      }
    }
    if (data.successCondition !== undefined) {
      if (!validate26(data.successCondition, {
        instancePath: instancePath + "/successCondition",
        parentData: data,
        parentDataProperty: "successCondition",
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
  validate267.errors = vErrors;
  return errors === 0;
}
function validate266(data, {
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
      if (!validate267(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate267.errors : vErrors.concat(validate267.errors);
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
  validate266.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.metrics === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "metrics"
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
      if (!validate240(data.args, {
        instancePath: instancePath + "/args",
        parentData: data,
        parentDataProperty: "args",
        rootData
      })) {
        vErrors = vErrors === null ? validate240.errors : vErrors.concat(validate240.errors);
        errors = vErrors.length;
      }
    }
    if (data.dryRun !== undefined) {
      if (!validate255(data.dryRun, {
        instancePath: instancePath + "/dryRun",
        parentData: data,
        parentDataProperty: "dryRun",
        rootData
      })) {
        vErrors = vErrors === null ? validate255.errors : vErrors.concat(validate255.errors);
        errors = vErrors.length;
      }
    }
    if (data.measurementRetention !== undefined) {
      if (!validate260(data.measurementRetention, {
        instancePath: instancePath + "/measurementRetention",
        parentData: data,
        parentDataProperty: "measurementRetention",
        rootData
      })) {
        vErrors = vErrors === null ? validate260.errors : vErrors.concat(validate260.errors);
        errors = vErrors.length;
      }
    }
    if (data.metrics !== undefined) {
      if (!validate266(data.metrics, {
        instancePath: instancePath + "/metrics",
        parentData: data,
        parentDataProperty: "metrics",
        rootData
      })) {
        vErrors = vErrors === null ? validate266.errors : vErrors.concat(validate266.errors);
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
function validate230(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="argoproj.io.v1alpha1.ClusterAnalysisTemplate" */;
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
      if (!validate231(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate231.errors : vErrors.concat(validate231.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate233(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate233.errors : vErrors.concat(validate233.errors);
        errors = vErrors.length;
      }
    }
    if (data.metadata !== undefined) {
      if (!validate235(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate235.errors : vErrors.concat(validate235.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate239(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate239.errors : vErrors.concat(validate239.errors);
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
  validate230.errors = vErrors;
  return errors === 0;
}