import { formats } from "@kubernetes-models/validate";
export const validate = validate91;
const schema28 = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "$ref": "7JkRgKIU61RDA2KaYizbbUZAuqom514Kz85N2Qznlo"
    },
    "kind": {
      "$ref": "d9jSk8B0bJscQUzGP9RYPgWD29pJePQbpWaVjCSwv8"
    },
    "metadata": {
      "$ref": "a6f0oUEaFqHmymdwnqPORTNOTU7GczWAkwGD0uYU"
    },
    "spec": {
      "$ref": "6sq6ZDjgKBCdbZ03qcElMYLZGoisyQO3vYR48kDfWxc"
    },
    "status": {
      "$ref": "2Bj9NGabz8lQRqX8sPbmHz3w0GH1ph2cmnhXDDx90"
    }
  },
  "required": ["apiVersion", "kind"],
  "$id": "operator.victoriametrics.com.v1beta1.VMScrapeConfig"
};
const schema29 = {
  "type": "string",
  "enum": ["operator.victoriametrics.com/v1beta1"]
};
function validate92(data, {
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
  validate92.errors = vErrors;
  return errors === 0;
}
const schema30 = {
  "type": "string",
  "enum": ["VMScrapeConfig"]
};
function validate94(data, {
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
  if (!(data === "VMScrapeConfig")) {
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
  validate94.errors = vErrors;
  return errors === 0;
}
const schema31 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
};
const schema32 = {};
import { validate as validate97 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
function validate96(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate97(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate97.errors : vErrors.concat(validate97.errors);
      errors = vErrors.length;
    }
  }
  validate96.errors = vErrors;
  return errors === 0;
}
const schema33 = {
  "properties": {
    "authorization": {
      "$ref": "16inftC6ytNhZoZUXAN3DSMoti7Dn6xzqohnWXNHgI"
    },
    "azureSDConfigs": {
      "$ref": "rYkViZ5CcDM8TlFPlP0txjJFtSG0fUKcXh4sOfnLzU"
    },
    "basicAuth": {
      "$ref": "SQDhLlsFG4ZunzjvRpwgMfTgy4dJhGB0Ot358xQIQ2I"
    },
    "bearerTokenFile": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "bearerTokenSecret": {
      "$ref": "kyPWonKd9RiqYcLV5gZX8H1ko7ZDPDNnaoO3ShQds"
    },
    "consulSDConfigs": {
      "$ref": "g9Oeb3wOa8zk47Gre7N23fqvHeAji38LBJTof9KVyk"
    },
    "digitalOceanSDConfigs": {
      "$ref": "3n2njx4hkuNhWaFPwo3C288H5dcaSiShSDnYPEt1E"
    },
    "dnsSDConfigs": {
      "$ref": "ysZEnVR9FzxFP5WwjEretra28Gf5KzTcq0QMePhNf0"
    },
    "ec2SDConfigs": {
      "$ref": "2qZN7m9MjMFGosW5LmbZ2rikxN3dbu1gbKJLnPpQg8"
    },
    "fileSDConfigs": {
      "$ref": "O2uFQ46MKLqA8QAL9B44J7PwBvbowRjyrpyCaoEkXs"
    },
    "follow_redirects": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "gceSDConfigs": {
      "$ref": "OyfZyXtGPci6v2T9cUqI0a0TFxIicjZQ3D8z1UNqk"
    },
    "honorLabels": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "honorTimestamps": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "httpSDConfigs": {
      "$ref": "fQB8vjUf6xcndru27HsGrwMMCF5lbkqwFAIVYVt2UE"
    },
    "interval": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "kubernetesSDConfigs": {
      "$ref": "8pYzuqbYXcRvb39e4oqLWdKendltur8d4BXTtrxBG8"
    },
    "max_scrape_size": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "metricRelabelConfigs": {
      "$ref": "On9NfdBVKyc2cVXkyz6gn8W3D8t5qRzTqFokQexTk"
    },
    "oauth2": {
      "$ref": "HLBaFkTRpdb7zon6zuH82ZULuIfEsB0NKblVUHd5A"
    },
    "openstackSDConfigs": {
      "$ref": "wJi0R43bb99lh30HuqjZfOUgIqiuiXwjLZKLHvME4FU"
    },
    "params": {
      "$ref": "ncLWlwbtl3cSbF3zqsKUZaT6tJUM1shfqUnXEqh3fWA"
    },
    "path": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "proxyURL": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "relabelConfigs": {
      "$ref": "On9NfdBVKyc2cVXkyz6gn8W3D8t5qRzTqFokQexTk"
    },
    "sampleLimit": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "scheme": {
      "$ref": "ONvkt9cBMFhRHaNuTciNyxKZwDOMAKscVfT4vUqbHX0"
    },
    "scrape_interval": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "scrapeTimeout": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "seriesLimit": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "staticConfigs": {
      "$ref": "SkqrVxT1NQHaYc6cI3Y5NO57xgqiqjH0YdWOaeJfig"
    },
    "tlsConfig": {
      "$ref": "vLtFgntD2JPhs9eViShvAOVTS9lNBZheNZjY4274sTY"
    },
    "vm_scrape_params": {
      "$ref": "66ajiruyhAVudogy9Cgmk0TyDzVLYJr2ep26XsmvY8"
    }
  },
  "type": "object",
  "nullable": true
};
const schema11 = {
  "properties": {
    "credentials": {
      "$ref": "kyPWonKd9RiqYcLV5gZX8H1ko7ZDPDNnaoO3ShQds"
    },
    "credentialsFile": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "type": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema7 = {
  "properties": {
    "key": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "name": {
      "$ref": "ylFKgRADFnj8zsAqNcbZrvIOQI64FUWlOFS2V8uyo"
    },
    "optional": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "required": ["key"],
  "type": "object",
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
const schema9 = {
  "default": "",
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
const schema10 = {
  "type": "boolean",
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
  validate27.errors = vErrors;
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
    if (data.optional !== undefined) {
      if (!validate27(data.optional, {
        instancePath: instancePath + "/optional",
        parentData: data,
        parentDataProperty: "optional",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
  }
  validate22.errors = vErrors;
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
    if (data.credentials !== undefined) {
      if (!validate22(data.credentials, {
        instancePath: instancePath + "/credentials",
        parentData: data,
        parentDataProperty: "credentials",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.credentialsFile !== undefined) {
      if (!validate21(data.credentialsFile, {
        instancePath: instancePath + "/credentialsFile",
        parentData: data,
        parentDataProperty: "credentialsFile",
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
  }
  validate29.errors = vErrors;
  return errors === 0;
}
const schema34 = {
  "items": {
    "$ref": "ZdIYmwGMNhwJ7MfzI3ASfHxvf2FdDoYhUjGl9gc"
  },
  "type": "array",
  "nullable": true
};
const schema35 = {
  "properties": {
    "authenticationMethod": {
      "$ref": "iR8y9XeVBgQTHYK152C7tCfBYFKSwbsPBg1G1WDW8"
    },
    "clientID": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "clientSecret": {
      "$ref": "kyPWonKd9RiqYcLV5gZX8H1ko7ZDPDNnaoO3ShQds"
    },
    "environment": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "port": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "resourceGroup": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "subscriptionID": {
      "$ref": "98nkBGIQ3d7odskENdXv2JAKmhWIJZNaSjyBGu9gdA"
    },
    "tenantID": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["subscriptionID"],
  "type": "object"
};
const schema36 = {
  "enum": ["OAuth", "ManagedIdentity"],
  "type": "string",
  "nullable": true
};
function validate104(data, {
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
  if (!(data === "OAuth" || data === "ManagedIdentity")) {
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
  validate104.errors = vErrors;
  return errors === 0;
}
const schema20 = {
  "type": "integer",
  "nullable": true
};
function validate64(data, {
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
  validate64.errors = vErrors;
  return errors === 0;
}
const schema14 = {
  "minLength": 1,
  "type": "string"
};
import func2 from "@kubernetes-models/validate/runtime/ucs2length";
function validate39(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (func2(data) < 1) {
      const err0 = {
        instancePath,
        schemaPath: "#/minLength",
        keyword: "minLength",
        params: {
          limit: 1
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
  validate39.errors = vErrors;
  return errors === 0;
}
function validate103(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.subscriptionID === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "subscriptionID"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.authenticationMethod !== undefined) {
      if (!validate104(data.authenticationMethod, {
        instancePath: instancePath + "/authenticationMethod",
        parentData: data,
        parentDataProperty: "authenticationMethod",
        rootData
      })) {
        vErrors = vErrors === null ? validate104.errors : vErrors.concat(validate104.errors);
        errors = vErrors.length;
      }
    }
    if (data.clientID !== undefined) {
      if (!validate21(data.clientID, {
        instancePath: instancePath + "/clientID",
        parentData: data,
        parentDataProperty: "clientID",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.clientSecret !== undefined) {
      if (!validate22(data.clientSecret, {
        instancePath: instancePath + "/clientSecret",
        parentData: data,
        parentDataProperty: "clientSecret",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.environment !== undefined) {
      if (!validate21(data.environment, {
        instancePath: instancePath + "/environment",
        parentData: data,
        parentDataProperty: "environment",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.port !== undefined) {
      if (!validate64(data.port, {
        instancePath: instancePath + "/port",
        parentData: data,
        parentDataProperty: "port",
        rootData
      })) {
        vErrors = vErrors === null ? validate64.errors : vErrors.concat(validate64.errors);
        errors = vErrors.length;
      }
    }
    if (data.resourceGroup !== undefined) {
      if (!validate21(data.resourceGroup, {
        instancePath: instancePath + "/resourceGroup",
        parentData: data,
        parentDataProperty: "resourceGroup",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.subscriptionID !== undefined) {
      if (!validate39(data.subscriptionID, {
        instancePath: instancePath + "/subscriptionID",
        parentData: data,
        parentDataProperty: "subscriptionID",
        rootData
      })) {
        vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
        errors = vErrors.length;
      }
    }
    if (data.tenantID !== undefined) {
      if (!validate21(data.tenantID, {
        instancePath: instancePath + "/tenantID",
        parentData: data,
        parentDataProperty: "tenantID",
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
  validate103.errors = vErrors;
  return errors === 0;
}
function validate102(data, {
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
      if (!validate103(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate103.errors : vErrors.concat(validate103.errors);
        errors = vErrors.length;
      }
    }
  }
  validate102.errors = vErrors;
  return errors === 0;
}
const schema12 = {
  "properties": {
    "password": {
      "$ref": "kyPWonKd9RiqYcLV5gZX8H1ko7ZDPDNnaoO3ShQds"
    },
    "password_file": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "username": {
      "$ref": "kyPWonKd9RiqYcLV5gZX8H1ko7ZDPDNnaoO3ShQds"
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
    if (data.password !== undefined) {
      if (!validate22(data.password, {
        instancePath: instancePath + "/password",
        parentData: data,
        parentDataProperty: "password",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.password_file !== undefined) {
      if (!validate21(data.password_file, {
        instancePath: instancePath + "/password_file",
        parentData: data,
        parentDataProperty: "password_file",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.username !== undefined) {
      if (!validate22(data.username, {
        instancePath: instancePath + "/username",
        parentData: data,
        parentDataProperty: "username",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate33.errors = vErrors;
  return errors === 0;
}
const schema37 = {
  "items": {
    "$ref": "Hd63A6xE0GchDIWYWNJNvqHlKTTi684Qz6VrqMb66U"
  },
  "type": "array",
  "nullable": true
};
const schema38 = {
  "properties": {
    "allowStale": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "authorization": {
      "$ref": "16inftC6ytNhZoZUXAN3DSMoti7Dn6xzqohnWXNHgI"
    },
    "basicAuth": {
      "$ref": "SQDhLlsFG4ZunzjvRpwgMfTgy4dJhGB0Ot358xQIQ2I"
    },
    "datacenter": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "followRedirects": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "nodeMeta": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "oauth2": {
      "$ref": "HLBaFkTRpdb7zon6zuH82ZULuIfEsB0NKblVUHd5A"
    },
    "partition": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "proxy_client_config": {
      "$ref": "M4TytmNwqBP6kH2BPYiJhNgJOq8pu5wRQvGCalheoc"
    },
    "proxyURL": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "scheme": {
      "$ref": "cgpq8o0WTOMHKpoHVcXEU3drgaNRmuUV6RUVOw7XC0"
    },
    "server": {
      "$ref": "98nkBGIQ3d7odskENdXv2JAKmhWIJZNaSjyBGu9gdA"
    },
    "services": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "tagSeparator": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "tags": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "tlsConfig": {
      "$ref": "vLtFgntD2JPhs9eViShvAOVTS9lNBZheNZjY4274sTY"
    },
    "tokenRef": {
      "$ref": "kyPWonKd9RiqYcLV5gZX8H1ko7ZDPDNnaoO3ShQds"
    }
  },
  "required": ["server"],
  "type": "object"
};
const schema13 = {
  "additionalProperties": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "object",
  "properties": {},
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
  validate37.errors = vErrors;
  return errors === 0;
}
const schema18 = {
  "properties": {
    "client_id": {
      "$ref": "eReQeFQL93JMdOWk0QpSKSvquP41At1xLTmCh0"
    },
    "client_secret": {
      "$ref": "kyPWonKd9RiqYcLV5gZX8H1ko7ZDPDNnaoO3ShQds"
    },
    "client_secret_file": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "endpoint_params": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "scopes": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "token_url": {
      "$ref": "98nkBGIQ3d7odskENdXv2JAKmhWIJZNaSjyBGu9gdA"
    }
  },
  "required": ["client_id", "token_url"],
  "type": "object",
  "nullable": true
};
const schema19 = {
  "properties": {
    "configMap": {
      "$ref": "kyPWonKd9RiqYcLV5gZX8H1ko7ZDPDNnaoO3ShQds"
    },
    "secret": {
      "$ref": "kyPWonKd9RiqYcLV5gZX8H1ko7ZDPDNnaoO3ShQds"
    }
  },
  "type": "object"
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
    if (data.configMap !== undefined) {
      if (!validate22(data.configMap, {
        instancePath: instancePath + "/configMap",
        parentData: data,
        parentDataProperty: "configMap",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.secret !== undefined) {
      if (!validate22(data.secret, {
        instancePath: instancePath + "/secret",
        parentData: data,
        parentDataProperty: "secret",
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
  validate55.errors = vErrors;
  return errors === 0;
}
const schema16 = {
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "array",
  "nullable": true
};
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
  validate43.errors = vErrors;
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
    if (data.client_id === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "client_id"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.token_url === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "token_url"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.client_id !== undefined) {
      if (!validate55(data.client_id, {
        instancePath: instancePath + "/client_id",
        parentData: data,
        parentDataProperty: "client_id",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
    if (data.client_secret !== undefined) {
      if (!validate22(data.client_secret, {
        instancePath: instancePath + "/client_secret",
        parentData: data,
        parentDataProperty: "client_secret",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.client_secret_file !== undefined) {
      if (!validate21(data.client_secret_file, {
        instancePath: instancePath + "/client_secret_file",
        parentData: data,
        parentDataProperty: "client_secret_file",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.endpoint_params !== undefined) {
      if (!validate37(data.endpoint_params, {
        instancePath: instancePath + "/endpoint_params",
        parentData: data,
        parentDataProperty: "endpoint_params",
        rootData
      })) {
        vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
        errors = vErrors.length;
      }
    }
    if (data.scopes !== undefined) {
      if (!validate43(data.scopes, {
        instancePath: instancePath + "/scopes",
        parentData: data,
        parentDataProperty: "scopes",
        rootData
      })) {
        vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
        errors = vErrors.length;
      }
    }
    if (data.token_url !== undefined) {
      if (!validate39(data.token_url, {
        instancePath: instancePath + "/token_url",
        parentData: data,
        parentDataProperty: "token_url",
        rootData
      })) {
        vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
        errors = vErrors.length;
      }
    }
  }
  validate54.errors = vErrors;
  return errors === 0;
}
const schema21 = {
  "properties": {
    "basic_auth": {
      "$ref": "SQDhLlsFG4ZunzjvRpwgMfTgy4dJhGB0Ot358xQIQ2I"
    },
    "bearer_token": {
      "$ref": "kyPWonKd9RiqYcLV5gZX8H1ko7ZDPDNnaoO3ShQds"
    },
    "bearer_token_file": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "tls_config": {
      "$ref": "vLtFgntD2JPhs9eViShvAOVTS9lNBZheNZjY4274sTY"
    }
  },
  "type": "object",
  "nullable": true
};
const schema17 = {
  "properties": {
    "ca": {
      "$ref": "Fb2qIFIMXd0iz0Zehc7yJ1g83bUIAf6IcdpmMakZQM"
    },
    "caFile": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "cert": {
      "$ref": "Fb2qIFIMXd0iz0Zehc7yJ1g83bUIAf6IcdpmMakZQM"
    },
    "certFile": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "insecureSkipVerify": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "keyFile": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "keySecret": {
      "$ref": "kyPWonKd9RiqYcLV5gZX8H1ko7ZDPDNnaoO3ShQds"
    },
    "serverName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema15 = {
  "properties": {
    "configMap": {
      "$ref": "kyPWonKd9RiqYcLV5gZX8H1ko7ZDPDNnaoO3ShQds"
    },
    "secret": {
      "$ref": "kyPWonKd9RiqYcLV5gZX8H1ko7ZDPDNnaoO3ShQds"
    }
  },
  "type": "object",
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.configMap !== undefined) {
      if (!validate22(data.configMap, {
        instancePath: instancePath + "/configMap",
        parentData: data,
        parentDataProperty: "configMap",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.secret !== undefined) {
      if (!validate22(data.secret, {
        instancePath: instancePath + "/secret",
        parentData: data,
        parentDataProperty: "secret",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate40.errors = vErrors;
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
    if (data.ca !== undefined) {
      if (!validate40(data.ca, {
        instancePath: instancePath + "/ca",
        parentData: data,
        parentDataProperty: "ca",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
    if (data.caFile !== undefined) {
      if (!validate21(data.caFile, {
        instancePath: instancePath + "/caFile",
        parentData: data,
        parentDataProperty: "caFile",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.cert !== undefined) {
      if (!validate40(data.cert, {
        instancePath: instancePath + "/cert",
        parentData: data,
        parentDataProperty: "cert",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
    if (data.certFile !== undefined) {
      if (!validate21(data.certFile, {
        instancePath: instancePath + "/certFile",
        parentData: data,
        parentDataProperty: "certFile",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.insecureSkipVerify !== undefined) {
      if (!validate27(data.insecureSkipVerify, {
        instancePath: instancePath + "/insecureSkipVerify",
        parentData: data,
        parentDataProperty: "insecureSkipVerify",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.keyFile !== undefined) {
      if (!validate21(data.keyFile, {
        instancePath: instancePath + "/keyFile",
        parentData: data,
        parentDataProperty: "keyFile",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.keySecret !== undefined) {
      if (!validate22(data.keySecret, {
        instancePath: instancePath + "/keySecret",
        parentData: data,
        parentDataProperty: "keySecret",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.serverName !== undefined) {
      if (!validate21(data.serverName, {
        instancePath: instancePath + "/serverName",
        parentData: data,
        parentDataProperty: "serverName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate45.errors = vErrors;
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
    if (data.basic_auth !== undefined) {
      if (!validate33(data.basic_auth, {
        instancePath: instancePath + "/basic_auth",
        parentData: data,
        parentDataProperty: "basic_auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data.bearer_token !== undefined) {
      if (!validate22(data.bearer_token, {
        instancePath: instancePath + "/bearer_token",
        parentData: data,
        parentDataProperty: "bearer_token",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.bearer_token_file !== undefined) {
      if (!validate21(data.bearer_token_file, {
        instancePath: instancePath + "/bearer_token_file",
        parentData: data,
        parentDataProperty: "bearer_token_file",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.tls_config !== undefined) {
      if (!validate45(data.tls_config, {
        instancePath: instancePath + "/tls_config",
        parentData: data,
        parentDataProperty: "tls_config",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
  }
  validate65.errors = vErrors;
  return errors === 0;
}
const schema39 = {
  "enum": ["HTTP", "HTTPS"],
  "type": "string",
  "nullable": true
};
function validate131(data, {
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
  if (!(data === "HTTP" || data === "HTTPS")) {
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
  validate131.errors = vErrors;
  return errors === 0;
}
function validate119(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.server === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "server"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.allowStale !== undefined) {
      if (!validate27(data.allowStale, {
        instancePath: instancePath + "/allowStale",
        parentData: data,
        parentDataProperty: "allowStale",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.authorization !== undefined) {
      if (!validate29(data.authorization, {
        instancePath: instancePath + "/authorization",
        parentData: data,
        parentDataProperty: "authorization",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.basicAuth !== undefined) {
      if (!validate33(data.basicAuth, {
        instancePath: instancePath + "/basicAuth",
        parentData: data,
        parentDataProperty: "basicAuth",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data.datacenter !== undefined) {
      if (!validate21(data.datacenter, {
        instancePath: instancePath + "/datacenter",
        parentData: data,
        parentDataProperty: "datacenter",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.followRedirects !== undefined) {
      if (!validate27(data.followRedirects, {
        instancePath: instancePath + "/followRedirects",
        parentData: data,
        parentDataProperty: "followRedirects",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
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
    if (data.nodeMeta !== undefined) {
      if (!validate37(data.nodeMeta, {
        instancePath: instancePath + "/nodeMeta",
        parentData: data,
        parentDataProperty: "nodeMeta",
        rootData
      })) {
        vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
        errors = vErrors.length;
      }
    }
    if (data.oauth2 !== undefined) {
      if (!validate54(data.oauth2, {
        instancePath: instancePath + "/oauth2",
        parentData: data,
        parentDataProperty: "oauth2",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.partition !== undefined) {
      if (!validate21(data.partition, {
        instancePath: instancePath + "/partition",
        parentData: data,
        parentDataProperty: "partition",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.proxy_client_config !== undefined) {
      if (!validate65(data.proxy_client_config, {
        instancePath: instancePath + "/proxy_client_config",
        parentData: data,
        parentDataProperty: "proxy_client_config",
        rootData
      })) {
        vErrors = vErrors === null ? validate65.errors : vErrors.concat(validate65.errors);
        errors = vErrors.length;
      }
    }
    if (data.proxyURL !== undefined) {
      if (!validate21(data.proxyURL, {
        instancePath: instancePath + "/proxyURL",
        parentData: data,
        parentDataProperty: "proxyURL",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.scheme !== undefined) {
      if (!validate131(data.scheme, {
        instancePath: instancePath + "/scheme",
        parentData: data,
        parentDataProperty: "scheme",
        rootData
      })) {
        vErrors = vErrors === null ? validate131.errors : vErrors.concat(validate131.errors);
        errors = vErrors.length;
      }
    }
    if (data.server !== undefined) {
      if (!validate39(data.server, {
        instancePath: instancePath + "/server",
        parentData: data,
        parentDataProperty: "server",
        rootData
      })) {
        vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
        errors = vErrors.length;
      }
    }
    if (data.services !== undefined) {
      if (!validate43(data.services, {
        instancePath: instancePath + "/services",
        parentData: data,
        parentDataProperty: "services",
        rootData
      })) {
        vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
        errors = vErrors.length;
      }
    }
    if (data.tagSeparator !== undefined) {
      if (!validate21(data.tagSeparator, {
        instancePath: instancePath + "/tagSeparator",
        parentData: data,
        parentDataProperty: "tagSeparator",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.tags !== undefined) {
      if (!validate43(data.tags, {
        instancePath: instancePath + "/tags",
        parentData: data,
        parentDataProperty: "tags",
        rootData
      })) {
        vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
        errors = vErrors.length;
      }
    }
    if (data.tlsConfig !== undefined) {
      if (!validate45(data.tlsConfig, {
        instancePath: instancePath + "/tlsConfig",
        parentData: data,
        parentDataProperty: "tlsConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.tokenRef !== undefined) {
      if (!validate22(data.tokenRef, {
        instancePath: instancePath + "/tokenRef",
        parentData: data,
        parentDataProperty: "tokenRef",
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
  validate119.errors = vErrors;
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
      if (!validate119(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate119.errors : vErrors.concat(validate119.errors);
        errors = vErrors.length;
      }
    }
  }
  validate118.errors = vErrors;
  return errors === 0;
}
const schema40 = {
  "items": {
    "$ref": "nRt6MiYvrffj8dVmYM7KA1l27AWiVBUECFq20mSM2M"
  },
  "type": "array",
  "nullable": true
};
const schema41 = {
  "properties": {
    "authorization": {
      "$ref": "16inftC6ytNhZoZUXAN3DSMoti7Dn6xzqohnWXNHgI"
    },
    "followRedirects": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "oauth2": {
      "$ref": "HLBaFkTRpdb7zon6zuH82ZULuIfEsB0NKblVUHd5A"
    },
    "port": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "proxy_client_config": {
      "$ref": "M4TytmNwqBP6kH2BPYiJhNgJOq8pu5wRQvGCalheoc"
    },
    "proxyURL": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "tlsConfig": {
      "$ref": "vLtFgntD2JPhs9eViShvAOVTS9lNBZheNZjY4274sTY"
    }
  },
  "type": "object"
};
function validate142(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.authorization !== undefined) {
      if (!validate29(data.authorization, {
        instancePath: instancePath + "/authorization",
        parentData: data,
        parentDataProperty: "authorization",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.followRedirects !== undefined) {
      if (!validate27(data.followRedirects, {
        instancePath: instancePath + "/followRedirects",
        parentData: data,
        parentDataProperty: "followRedirects",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.oauth2 !== undefined) {
      if (!validate54(data.oauth2, {
        instancePath: instancePath + "/oauth2",
        parentData: data,
        parentDataProperty: "oauth2",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.port !== undefined) {
      if (!validate64(data.port, {
        instancePath: instancePath + "/port",
        parentData: data,
        parentDataProperty: "port",
        rootData
      })) {
        vErrors = vErrors === null ? validate64.errors : vErrors.concat(validate64.errors);
        errors = vErrors.length;
      }
    }
    if (data.proxy_client_config !== undefined) {
      if (!validate65(data.proxy_client_config, {
        instancePath: instancePath + "/proxy_client_config",
        parentData: data,
        parentDataProperty: "proxy_client_config",
        rootData
      })) {
        vErrors = vErrors === null ? validate65.errors : vErrors.concat(validate65.errors);
        errors = vErrors.length;
      }
    }
    if (data.proxyURL !== undefined) {
      if (!validate21(data.proxyURL, {
        instancePath: instancePath + "/proxyURL",
        parentData: data,
        parentDataProperty: "proxyURL",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.tlsConfig !== undefined) {
      if (!validate45(data.tlsConfig, {
        instancePath: instancePath + "/tlsConfig",
        parentData: data,
        parentDataProperty: "tlsConfig",
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
const schema42 = {
  "items": {
    "$ref": "DSJ12QAhzBunVB5ZyR5rYzefFGNeFj9uZuyMCcgUfxk"
  },
  "type": "array",
  "nullable": true
};
const schema43 = {
  "properties": {
    "names": {
      "$ref": "PS9OU1fGUVuUsYkSKZFxvqiyESXrgU9nyw0qcvResAk"
    },
    "port": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "type": {
      "$ref": "DTiiYAKoLyRe7E7waldb0JMkebUBxT6cC5cjC7NmYg"
    }
  },
  "required": ["names"],
  "type": "object"
};
const schema22 = {
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "minItems": 1,
  "type": "array"
};
function validate70(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    if (data.length < 1) {
      const err0 = {
        instancePath,
        schemaPath: "#/minItems",
        keyword: "minItems",
        params: {
          limit: 1
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
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
    const err1 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "array"
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate70.errors = vErrors;
  return errors === 0;
}
const schema44 = {
  "enum": ["SRV", "A", "AAAA", "MX"],
  "type": "string",
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
  if (!(data === "SRV" || data === "A" || data === "AAAA" || data === "MX")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema44.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate156.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.names === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "names"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.names !== undefined) {
      if (!validate70(data.names, {
        instancePath: instancePath + "/names",
        parentData: data,
        parentDataProperty: "names",
        rootData
      })) {
        vErrors = vErrors === null ? validate70.errors : vErrors.concat(validate70.errors);
        errors = vErrors.length;
      }
    }
    if (data.port !== undefined) {
      if (!validate64(data.port, {
        instancePath: instancePath + "/port",
        parentData: data,
        parentDataProperty: "port",
        rootData
      })) {
        vErrors = vErrors === null ? validate64.errors : vErrors.concat(validate64.errors);
        errors = vErrors.length;
      }
    }
    if (data.type !== undefined) {
      if (!validate156(data.type, {
        instancePath: instancePath + "/type",
        parentData: data,
        parentDataProperty: "type",
        rootData
      })) {
        vErrors = vErrors === null ? validate156.errors : vErrors.concat(validate156.errors);
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
      if (!validate153(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate153.errors : vErrors.concat(validate153.errors);
        errors = vErrors.length;
      }
    }
  }
  validate152.errors = vErrors;
  return errors === 0;
}
const schema45 = {
  "items": {
    "$ref": "hOzbo0qLEw00WEm3H65YWpV2lwST8vYptRlzVc0uzqA"
  },
  "type": "array",
  "nullable": true
};
const schema46 = {
  "properties": {
    "accessKey": {
      "$ref": "kyPWonKd9RiqYcLV5gZX8H1ko7ZDPDNnaoO3ShQds"
    },
    "filters": {
      "$ref": "zOjXQGVnXcFyTd8ImWCIm9gGoAufIQQdE4zvR0T5BY"
    },
    "port": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "region": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "roleARN": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "secretKey": {
      "$ref": "kyPWonKd9RiqYcLV5gZX8H1ko7ZDPDNnaoO3ShQds"
    }
  },
  "type": "object"
};
const schema47 = {
  "items": {
    "$ref": "h0JzukKZsbWLI2PlcpQrlRyS5Hwswha1yWu1FxcyWCA"
  },
  "type": "array",
  "nullable": true
};
const schema48 = {
  "properties": {
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "values": {
      "$ref": "YwrI9eYeYzQIcdsUXH7isPYE3sgVab9JvcdpSK4GQ"
    }
  },
  "required": ["name", "values"],
  "type": "object"
};
const schema24 = {
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "array"
};
function validate73(data, {
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
  validate73.errors = vErrors;
  return errors === 0;
}
function validate164(data, {
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
    if (data.values === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "values"
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
    if (data.values !== undefined) {
      if (!validate73(data.values, {
        instancePath: instancePath + "/values",
        parentData: data,
        parentDataProperty: "values",
        rootData
      })) {
        vErrors = vErrors === null ? validate73.errors : vErrors.concat(validate73.errors);
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
function validate161(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.accessKey !== undefined) {
      if (!validate22(data.accessKey, {
        instancePath: instancePath + "/accessKey",
        parentData: data,
        parentDataProperty: "accessKey",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.filters !== undefined) {
      if (!validate163(data.filters, {
        instancePath: instancePath + "/filters",
        parentData: data,
        parentDataProperty: "filters",
        rootData
      })) {
        vErrors = vErrors === null ? validate163.errors : vErrors.concat(validate163.errors);
        errors = vErrors.length;
      }
    }
    if (data.port !== undefined) {
      if (!validate64(data.port, {
        instancePath: instancePath + "/port",
        parentData: data,
        parentDataProperty: "port",
        rootData
      })) {
        vErrors = vErrors === null ? validate64.errors : vErrors.concat(validate64.errors);
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
    if (data.roleARN !== undefined) {
      if (!validate21(data.roleARN, {
        instancePath: instancePath + "/roleARN",
        parentData: data,
        parentDataProperty: "roleARN",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretKey !== undefined) {
      if (!validate22(data.secretKey, {
        instancePath: instancePath + "/secretKey",
        parentData: data,
        parentDataProperty: "secretKey",
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
  validate161.errors = vErrors;
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
      if (!validate161(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate161.errors : vErrors.concat(validate161.errors);
        errors = vErrors.length;
      }
    }
  }
  validate160.errors = vErrors;
  return errors === 0;
}
const schema49 = {
  "items": {
    "$ref": "BY5Cs4i9yiem4BVffhfljpYQMjj8nKKzLNW3YhKQ7U"
  },
  "type": "array",
  "nullable": true
};
const schema50 = {
  "properties": {
    "files": {
      "$ref": "PS9OU1fGUVuUsYkSKZFxvqiyESXrgU9nyw0qcvResAk"
    }
  },
  "required": ["files"],
  "type": "object"
};
function validate176(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.files === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "files"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.files !== undefined) {
      if (!validate70(data.files, {
        instancePath: instancePath + "/files",
        parentData: data,
        parentDataProperty: "files",
        rootData
      })) {
        vErrors = vErrors === null ? validate70.errors : vErrors.concat(validate70.errors);
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
  validate176.errors = vErrors;
  return errors === 0;
}
function validate175(data, {
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
      if (!validate176(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate176.errors : vErrors.concat(validate176.errors);
        errors = vErrors.length;
      }
    }
  }
  validate175.errors = vErrors;
  return errors === 0;
}
const schema51 = {
  "items": {
    "$ref": "dfXt2zmfh0vsKcueQwe3aJLEojcKvNNZQV0fvSL1H8"
  },
  "type": "array",
  "nullable": true
};
const schema52 = {
  "properties": {
    "filter": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "port": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "project": {
      "$ref": "98nkBGIQ3d7odskENdXv2JAKmhWIJZNaSjyBGu9gdA"
    },
    "tagSeparator": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "zone": {
      "$ref": "98nkBGIQ3d7odskENdXv2JAKmhWIJZNaSjyBGu9gdA"
    }
  },
  "required": ["project", "zone"],
  "type": "object"
};
function validate182(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.project === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "project"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.zone === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "zone"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.filter !== undefined) {
      if (!validate21(data.filter, {
        instancePath: instancePath + "/filter",
        parentData: data,
        parentDataProperty: "filter",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.port !== undefined) {
      if (!validate64(data.port, {
        instancePath: instancePath + "/port",
        parentData: data,
        parentDataProperty: "port",
        rootData
      })) {
        vErrors = vErrors === null ? validate64.errors : vErrors.concat(validate64.errors);
        errors = vErrors.length;
      }
    }
    if (data.project !== undefined) {
      if (!validate39(data.project, {
        instancePath: instancePath + "/project",
        parentData: data,
        parentDataProperty: "project",
        rootData
      })) {
        vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
        errors = vErrors.length;
      }
    }
    if (data.tagSeparator !== undefined) {
      if (!validate21(data.tagSeparator, {
        instancePath: instancePath + "/tagSeparator",
        parentData: data,
        parentDataProperty: "tagSeparator",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.zone !== undefined) {
      if (!validate39(data.zone, {
        instancePath: instancePath + "/zone",
        parentData: data,
        parentDataProperty: "zone",
        rootData
      })) {
        vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
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
  validate182.errors = vErrors;
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
      if (!validate182(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate182.errors : vErrors.concat(validate182.errors);
        errors = vErrors.length;
      }
    }
  }
  validate181.errors = vErrors;
  return errors === 0;
}
const schema53 = {
  "items": {
    "$ref": "uK4CUtczjwBFzUJMy6Z9dWC33MDYG9a45A7r6NrQ"
  },
  "type": "array",
  "nullable": true
};
const schema54 = {
  "properties": {
    "authorization": {
      "$ref": "16inftC6ytNhZoZUXAN3DSMoti7Dn6xzqohnWXNHgI"
    },
    "basicAuth": {
      "$ref": "SQDhLlsFG4ZunzjvRpwgMfTgy4dJhGB0Ot358xQIQ2I"
    },
    "proxy_client_config": {
      "$ref": "M4TytmNwqBP6kH2BPYiJhNgJOq8pu5wRQvGCalheoc"
    },
    "proxyURL": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "tlsConfig": {
      "$ref": "vLtFgntD2JPhs9eViShvAOVTS9lNBZheNZjY4274sTY"
    },
    "url": {
      "$ref": "M3yJeY21yxOw7R8ELfwBihkY6SnI5XvLXGYwLFh1vY"
    }
  },
  "required": ["url"],
  "type": "object"
};
const schema55 = {
  "minLength": 1,
  "pattern": "^http(s)?://.+$",
  "type": "string"
};
const pattern0 = new RegExp("^http(s)?://.+$", "u");
function validate199(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (typeof data === "string") {
    if (func2(data) < 1) {
      const err0 = {
        instancePath,
        schemaPath: "#/minLength",
        keyword: "minLength",
        params: {
          limit: 1
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (!pattern0.test(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^http(s)?://.+$"
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
  validate199.errors = vErrors;
  return errors === 0;
}
function validate193(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.url === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "url"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.authorization !== undefined) {
      if (!validate29(data.authorization, {
        instancePath: instancePath + "/authorization",
        parentData: data,
        parentDataProperty: "authorization",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.basicAuth !== undefined) {
      if (!validate33(data.basicAuth, {
        instancePath: instancePath + "/basicAuth",
        parentData: data,
        parentDataProperty: "basicAuth",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data.proxy_client_config !== undefined) {
      if (!validate65(data.proxy_client_config, {
        instancePath: instancePath + "/proxy_client_config",
        parentData: data,
        parentDataProperty: "proxy_client_config",
        rootData
      })) {
        vErrors = vErrors === null ? validate65.errors : vErrors.concat(validate65.errors);
        errors = vErrors.length;
      }
    }
    if (data.proxyURL !== undefined) {
      if (!validate21(data.proxyURL, {
        instancePath: instancePath + "/proxyURL",
        parentData: data,
        parentDataProperty: "proxyURL",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.tlsConfig !== undefined) {
      if (!validate45(data.tlsConfig, {
        instancePath: instancePath + "/tlsConfig",
        parentData: data,
        parentDataProperty: "tlsConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.url !== undefined) {
      if (!validate199(data.url, {
        instancePath: instancePath + "/url",
        parentData: data,
        parentDataProperty: "url",
        rootData
      })) {
        vErrors = vErrors === null ? validate199.errors : vErrors.concat(validate199.errors);
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
  validate193.errors = vErrors;
  return errors === 0;
}
function validate192(data, {
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
      if (!validate193(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate193.errors : vErrors.concat(validate193.errors);
        errors = vErrors.length;
      }
    }
  }
  validate192.errors = vErrors;
  return errors === 0;
}
const schema56 = {
  "items": {
    "$ref": "bn8nsCOeKPP6JhVe1JsdISiH5GlJfeNjyTCYKNTvNQs"
  },
  "type": "array",
  "nullable": true
};
const schema57 = {
  "properties": {
    "apiServer": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "attach_metadata": {
      "$ref": "xbFpaWUV61URYgTRaScVPUwKb4bw1n70VG3khIlT90"
    },
    "authorization": {
      "$ref": "16inftC6ytNhZoZUXAN3DSMoti7Dn6xzqohnWXNHgI"
    },
    "basicAuth": {
      "$ref": "SQDhLlsFG4ZunzjvRpwgMfTgy4dJhGB0Ot358xQIQ2I"
    },
    "followRedirects": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "namespaces": {
      "$ref": "rtOcL2H8Xe7liOv8nfioZtSQXtgAqbZFqOGr4InlFo"
    },
    "oauth2": {
      "$ref": "HLBaFkTRpdb7zon6zuH82ZULuIfEsB0NKblVUHd5A"
    },
    "proxy_client_config": {
      "$ref": "M4TytmNwqBP6kH2BPYiJhNgJOq8pu5wRQvGCalheoc"
    },
    "proxyURL": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "role": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "selectors": {
      "$ref": "ckMD15c507dWN2MGe8dcO9aVNQGNDjL8weUITAcxA"
    },
    "tlsConfig": {
      "$ref": "vLtFgntD2JPhs9eViShvAOVTS9lNBZheNZjY4274sTY"
    }
  },
  "required": ["role"],
  "type": "object"
};
const schema58 = {
  "properties": {
    "node": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "type": "object",
  "nullable": true
};
function validate207(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
      if (!validate27(data.node, {
        instancePath: instancePath + "/node",
        parentData: data,
        parentDataProperty: "node",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
  }
  validate207.errors = vErrors;
  return errors === 0;
}
const schema59 = {
  "properties": {
    "names": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "ownNamespace": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "type": "object",
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.names !== undefined) {
      if (!validate43(data.names, {
        instancePath: instancePath + "/names",
        parentData: data,
        parentDataProperty: "names",
        rootData
      })) {
        vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
        errors = vErrors.length;
      }
    }
    if (data.ownNamespace !== undefined) {
      if (!validate27(data.ownNamespace, {
        instancePath: instancePath + "/ownNamespace",
        parentData: data,
        parentDataProperty: "ownNamespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
  }
  validate213.errors = vErrors;
  return errors === 0;
}
const schema60 = {
  "items": {
    "$ref": "Gvl1yQzSILKzmG403D9MEYw8YpQnkHbuaKY2iUnMs"
  },
  "type": "array",
  "nullable": true
};
const schema61 = {
  "properties": {
    "field": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "label": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "role": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["role"],
  "type": "object"
};
function validate222(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.role === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "role"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.field !== undefined) {
      if (!validate21(data.field, {
        instancePath: instancePath + "/field",
        parentData: data,
        parentDataProperty: "field",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.label !== undefined) {
      if (!validate21(data.label, {
        instancePath: instancePath + "/label",
        parentData: data,
        parentDataProperty: "label",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.role !== undefined) {
      if (!validate23(data.role, {
        instancePath: instancePath + "/role",
        parentData: data,
        parentDataProperty: "role",
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
  validate222.errors = vErrors;
  return errors === 0;
}
function validate221(data, {
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
      if (!validate222(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate222.errors : vErrors.concat(validate222.errors);
        errors = vErrors.length;
      }
    }
  }
  validate221.errors = vErrors;
  return errors === 0;
}
function validate205(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.role === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "role"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.apiServer !== undefined) {
      if (!validate21(data.apiServer, {
        instancePath: instancePath + "/apiServer",
        parentData: data,
        parentDataProperty: "apiServer",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.attach_metadata !== undefined) {
      if (!validate207(data.attach_metadata, {
        instancePath: instancePath + "/attach_metadata",
        parentData: data,
        parentDataProperty: "attach_metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate207.errors : vErrors.concat(validate207.errors);
        errors = vErrors.length;
      }
    }
    if (data.authorization !== undefined) {
      if (!validate29(data.authorization, {
        instancePath: instancePath + "/authorization",
        parentData: data,
        parentDataProperty: "authorization",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.basicAuth !== undefined) {
      if (!validate33(data.basicAuth, {
        instancePath: instancePath + "/basicAuth",
        parentData: data,
        parentDataProperty: "basicAuth",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data.followRedirects !== undefined) {
      if (!validate27(data.followRedirects, {
        instancePath: instancePath + "/followRedirects",
        parentData: data,
        parentDataProperty: "followRedirects",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespaces !== undefined) {
      if (!validate213(data.namespaces, {
        instancePath: instancePath + "/namespaces",
        parentData: data,
        parentDataProperty: "namespaces",
        rootData
      })) {
        vErrors = vErrors === null ? validate213.errors : vErrors.concat(validate213.errors);
        errors = vErrors.length;
      }
    }
    if (data.oauth2 !== undefined) {
      if (!validate54(data.oauth2, {
        instancePath: instancePath + "/oauth2",
        parentData: data,
        parentDataProperty: "oauth2",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.proxy_client_config !== undefined) {
      if (!validate65(data.proxy_client_config, {
        instancePath: instancePath + "/proxy_client_config",
        parentData: data,
        parentDataProperty: "proxy_client_config",
        rootData
      })) {
        vErrors = vErrors === null ? validate65.errors : vErrors.concat(validate65.errors);
        errors = vErrors.length;
      }
    }
    if (data.proxyURL !== undefined) {
      if (!validate21(data.proxyURL, {
        instancePath: instancePath + "/proxyURL",
        parentData: data,
        parentDataProperty: "proxyURL",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.role !== undefined) {
      if (!validate23(data.role, {
        instancePath: instancePath + "/role",
        parentData: data,
        parentDataProperty: "role",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.selectors !== undefined) {
      if (!validate221(data.selectors, {
        instancePath: instancePath + "/selectors",
        parentData: data,
        parentDataProperty: "selectors",
        rootData
      })) {
        vErrors = vErrors === null ? validate221.errors : vErrors.concat(validate221.errors);
        errors = vErrors.length;
      }
    }
    if (data.tlsConfig !== undefined) {
      if (!validate45(data.tlsConfig, {
        instancePath: instancePath + "/tlsConfig",
        parentData: data,
        parentDataProperty: "tlsConfig",
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
  validate205.errors = vErrors;
  return errors === 0;
}
function validate204(data, {
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
  validate204.errors = vErrors;
  return errors === 0;
}
const schema25 = {
  "items": {
    "$ref": "1FymtilprPWWg43ZbzWvQi1S1rSE61ejpfX07tQtAQ"
  },
  "type": "array",
  "nullable": true
};
const schema26 = {
  "properties": {
    "action": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "if": {
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    },
    "labels": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "match": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "modulus": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "regex": {
      "$ref": "PV5SIH4Pb4Rd3cOKB0TmpocWXJ4M8i9zrFifAtVgtUQ"
    },
    "replacement": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "separator": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "source_labels": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "sourceLabels": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "target_label": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "targetLabel": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
const schema23 = {};
function validate72(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  validate72.errors = null;
  return true;
}
const schema27 = {
  "format": "int64",
  "type": "integer",
  "nullable": true
};
const formats0 = formats.int64;
function validate81(data, {
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
  validate81.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
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
    if (data.if !== undefined) {
      if (!validate72(data.if, {
        instancePath: instancePath + "/if",
        parentData: data,
        parentDataProperty: "if",
        rootData
      })) {
        vErrors = vErrors === null ? validate72.errors : vErrors.concat(validate72.errors);
        errors = vErrors.length;
      }
    }
    if (data.labels !== undefined) {
      if (!validate37(data.labels, {
        instancePath: instancePath + "/labels",
        parentData: data,
        parentDataProperty: "labels",
        rootData
      })) {
        vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
        errors = vErrors.length;
      }
    }
    if (data.match !== undefined) {
      if (!validate21(data.match, {
        instancePath: instancePath + "/match",
        parentData: data,
        parentDataProperty: "match",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.modulus !== undefined) {
      if (!validate81(data.modulus, {
        instancePath: instancePath + "/modulus",
        parentData: data,
        parentDataProperty: "modulus",
        rootData
      })) {
        vErrors = vErrors === null ? validate81.errors : vErrors.concat(validate81.errors);
        errors = vErrors.length;
      }
    }
    if (data.regex !== undefined) {
      if (!validate72(data.regex, {
        instancePath: instancePath + "/regex",
        parentData: data,
        parentDataProperty: "regex",
        rootData
      })) {
        vErrors = vErrors === null ? validate72.errors : vErrors.concat(validate72.errors);
        errors = vErrors.length;
      }
    }
    if (data.replacement !== undefined) {
      if (!validate21(data.replacement, {
        instancePath: instancePath + "/replacement",
        parentData: data,
        parentDataProperty: "replacement",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.separator !== undefined) {
      if (!validate21(data.separator, {
        instancePath: instancePath + "/separator",
        parentData: data,
        parentDataProperty: "separator",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.source_labels !== undefined) {
      if (!validate43(data.source_labels, {
        instancePath: instancePath + "/source_labels",
        parentData: data,
        parentDataProperty: "source_labels",
        rootData
      })) {
        vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
        errors = vErrors.length;
      }
    }
    if (data.sourceLabels !== undefined) {
      if (!validate43(data.sourceLabels, {
        instancePath: instancePath + "/sourceLabels",
        parentData: data,
        parentDataProperty: "sourceLabels",
        rootData
      })) {
        vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
        errors = vErrors.length;
      }
    }
    if (data.target_label !== undefined) {
      if (!validate21(data.target_label, {
        instancePath: instancePath + "/target_label",
        parentData: data,
        parentDataProperty: "target_label",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.targetLabel !== undefined) {
      if (!validate21(data.targetLabel, {
        instancePath: instancePath + "/targetLabel",
        parentData: data,
        parentDataProperty: "targetLabel",
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
  validate76.errors = vErrors;
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
      if (!validate76(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate76.errors : vErrors.concat(validate76.errors);
        errors = vErrors.length;
      }
    }
  }
  validate75.errors = vErrors;
  return errors === 0;
}
const schema62 = {
  "items": {
    "$ref": "g2rD243v85zAYFYZBWfcK9qK6osL3J2e9EfNdsGM"
  },
  "type": "array",
  "nullable": true
};
const schema63 = {
  "properties": {
    "allTenants": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "applicationCredentialId": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "applicationCredentialName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "applicationCredentialSecret": {
      "$ref": "kyPWonKd9RiqYcLV5gZX8H1ko7ZDPDNnaoO3ShQds"
    },
    "availability": {
      "$ref": "jdv1qisAs3aP0LKMtcMuQjuKQ8jUsIpvUwpH09f52k"
    },
    "domainID": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "domainName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "identityEndpoint": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "password": {
      "$ref": "kyPWonKd9RiqYcLV5gZX8H1ko7ZDPDNnaoO3ShQds"
    },
    "port": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "projectID": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "projectName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "region": {
      "$ref": "98nkBGIQ3d7odskENdXv2JAKmhWIJZNaSjyBGu9gdA"
    },
    "role": {
      "$ref": "Mf4zy35naUVXWlXyFgdRPbIG9umhDKxa7rVNydKwRw"
    },
    "tlsConfig": {
      "$ref": "vLtFgntD2JPhs9eViShvAOVTS9lNBZheNZjY4274sTY"
    },
    "userid": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "username": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["region", "role"],
  "type": "object"
};
const schema64 = {
  "enum": ["Public", "public", "Admin", "admin", "Internal", "internal"],
  "type": "string",
  "nullable": true
};
function validate240(data, {
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
  if (!(data === "Public" || data === "public" || data === "Admin" || data === "admin" || data === "Internal" || data === "internal")) {
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
  validate240.errors = vErrors;
  return errors === 0;
}
const schema65 = {
  "enum": ["Instance", "instance", "Hypervisor", "hypervisor"],
  "type": "string"
};
function validate250(data, {
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
  if (!(data === "Instance" || data === "instance" || data === "Hypervisor" || data === "hypervisor")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema65.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate250.errors = vErrors;
  return errors === 0;
}
function validate235(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.region === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "region"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.role === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "role"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.allTenants !== undefined) {
      if (!validate27(data.allTenants, {
        instancePath: instancePath + "/allTenants",
        parentData: data,
        parentDataProperty: "allTenants",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.applicationCredentialId !== undefined) {
      if (!validate21(data.applicationCredentialId, {
        instancePath: instancePath + "/applicationCredentialId",
        parentData: data,
        parentDataProperty: "applicationCredentialId",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.applicationCredentialName !== undefined) {
      if (!validate21(data.applicationCredentialName, {
        instancePath: instancePath + "/applicationCredentialName",
        parentData: data,
        parentDataProperty: "applicationCredentialName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.applicationCredentialSecret !== undefined) {
      if (!validate22(data.applicationCredentialSecret, {
        instancePath: instancePath + "/applicationCredentialSecret",
        parentData: data,
        parentDataProperty: "applicationCredentialSecret",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.availability !== undefined) {
      if (!validate240(data.availability, {
        instancePath: instancePath + "/availability",
        parentData: data,
        parentDataProperty: "availability",
        rootData
      })) {
        vErrors = vErrors === null ? validate240.errors : vErrors.concat(validate240.errors);
        errors = vErrors.length;
      }
    }
    if (data.domainID !== undefined) {
      if (!validate21(data.domainID, {
        instancePath: instancePath + "/domainID",
        parentData: data,
        parentDataProperty: "domainID",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.domainName !== undefined) {
      if (!validate21(data.domainName, {
        instancePath: instancePath + "/domainName",
        parentData: data,
        parentDataProperty: "domainName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.identityEndpoint !== undefined) {
      if (!validate21(data.identityEndpoint, {
        instancePath: instancePath + "/identityEndpoint",
        parentData: data,
        parentDataProperty: "identityEndpoint",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.password !== undefined) {
      if (!validate22(data.password, {
        instancePath: instancePath + "/password",
        parentData: data,
        parentDataProperty: "password",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.port !== undefined) {
      if (!validate64(data.port, {
        instancePath: instancePath + "/port",
        parentData: data,
        parentDataProperty: "port",
        rootData
      })) {
        vErrors = vErrors === null ? validate64.errors : vErrors.concat(validate64.errors);
        errors = vErrors.length;
      }
    }
    if (data.projectID !== undefined) {
      if (!validate21(data.projectID, {
        instancePath: instancePath + "/projectID",
        parentData: data,
        parentDataProperty: "projectID",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.projectName !== undefined) {
      if (!validate21(data.projectName, {
        instancePath: instancePath + "/projectName",
        parentData: data,
        parentDataProperty: "projectName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.region !== undefined) {
      if (!validate39(data.region, {
        instancePath: instancePath + "/region",
        parentData: data,
        parentDataProperty: "region",
        rootData
      })) {
        vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
        errors = vErrors.length;
      }
    }
    if (data.role !== undefined) {
      if (!validate250(data.role, {
        instancePath: instancePath + "/role",
        parentData: data,
        parentDataProperty: "role",
        rootData
      })) {
        vErrors = vErrors === null ? validate250.errors : vErrors.concat(validate250.errors);
        errors = vErrors.length;
      }
    }
    if (data.tlsConfig !== undefined) {
      if (!validate45(data.tlsConfig, {
        instancePath: instancePath + "/tlsConfig",
        parentData: data,
        parentDataProperty: "tlsConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.userid !== undefined) {
      if (!validate21(data.userid, {
        instancePath: instancePath + "/userid",
        parentData: data,
        parentDataProperty: "userid",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.username !== undefined) {
      if (!validate21(data.username, {
        instancePath: instancePath + "/username",
        parentData: data,
        parentDataProperty: "username",
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
  validate235.errors = vErrors;
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
      if (!validate235(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate235.errors : vErrors.concat(validate235.errors);
        errors = vErrors.length;
      }
    }
  }
  validate234.errors = vErrors;
  return errors === 0;
}
const schema66 = {
  "additionalProperties": {
    "$ref": "YwrI9eYeYzQIcdsUXH7isPYE3sgVab9JvcdpSK4GQ"
  },
  "type": "object",
  "properties": {},
  "nullable": true
};
function validate257(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
      if (!validate73(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
        rootData
      })) {
        vErrors = vErrors === null ? validate73.errors : vErrors.concat(validate73.errors);
        errors = vErrors.length;
      }
    }
  }
  validate257.errors = vErrors;
  return errors === 0;
}
const schema67 = {
  "enum": ["http", "https", "HTTPS", "HTTP"],
  "type": "string",
  "nullable": true
};
function validate264(data, {
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
  if (!(data === "http" || data === "https" || data === "HTTPS" || data === "HTTP")) {
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
  validate264.errors = vErrors;
  return errors === 0;
}
const schema68 = {
  "items": {
    "$ref": "mJL0BxKu9bTTUIUAY5sahRBrHnTr7JgNao9X880QQww"
  },
  "type": "array",
  "nullable": true
};
const schema69 = {
  "properties": {
    "labels": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "targets": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    }
  },
  "type": "object"
};
function validate270(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.labels !== undefined) {
      if (!validate37(data.labels, {
        instancePath: instancePath + "/labels",
        parentData: data,
        parentDataProperty: "labels",
        rootData
      })) {
        vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
        errors = vErrors.length;
      }
    }
    if (data.targets !== undefined) {
      if (!validate43(data.targets, {
        instancePath: instancePath + "/targets",
        parentData: data,
        parentDataProperty: "targets",
        rootData
      })) {
        vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
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
  validate270.errors = vErrors;
  return errors === 0;
}
function validate269(data, {
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
      if (!validate270(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate270.errors : vErrors.concat(validate270.errors);
        errors = vErrors.length;
      }
    }
  }
  validate269.errors = vErrors;
  return errors === 0;
}
const schema70 = {
  "properties": {
    "disable_compression": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "disable_keep_alive": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "headers": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "no_stale_markers": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "proxy_client_config": {
      "$ref": "M4TytmNwqBP6kH2BPYiJhNgJOq8pu5wRQvGCalheoc"
    },
    "scrape_align_interval": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "scrape_offset": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "stream_parse": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "type": "object",
  "nullable": true
};
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
    if (data.disable_compression !== undefined) {
      if (!validate27(data.disable_compression, {
        instancePath: instancePath + "/disable_compression",
        parentData: data,
        parentDataProperty: "disable_compression",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.disable_keep_alive !== undefined) {
      if (!validate27(data.disable_keep_alive, {
        instancePath: instancePath + "/disable_keep_alive",
        parentData: data,
        parentDataProperty: "disable_keep_alive",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.headers !== undefined) {
      if (!validate43(data.headers, {
        instancePath: instancePath + "/headers",
        parentData: data,
        parentDataProperty: "headers",
        rootData
      })) {
        vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
        errors = vErrors.length;
      }
    }
    if (data.no_stale_markers !== undefined) {
      if (!validate27(data.no_stale_markers, {
        instancePath: instancePath + "/no_stale_markers",
        parentData: data,
        parentDataProperty: "no_stale_markers",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.proxy_client_config !== undefined) {
      if (!validate65(data.proxy_client_config, {
        instancePath: instancePath + "/proxy_client_config",
        parentData: data,
        parentDataProperty: "proxy_client_config",
        rootData
      })) {
        vErrors = vErrors === null ? validate65.errors : vErrors.concat(validate65.errors);
        errors = vErrors.length;
      }
    }
    if (data.scrape_align_interval !== undefined) {
      if (!validate21(data.scrape_align_interval, {
        instancePath: instancePath + "/scrape_align_interval",
        parentData: data,
        parentDataProperty: "scrape_align_interval",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.scrape_offset !== undefined) {
      if (!validate21(data.scrape_offset, {
        instancePath: instancePath + "/scrape_offset",
        parentData: data,
        parentDataProperty: "scrape_offset",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.stream_parse !== undefined) {
      if (!validate27(data.stream_parse, {
        instancePath: instancePath + "/stream_parse",
        parentData: data,
        parentDataProperty: "stream_parse",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
  }
  validate276.errors = vErrors;
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
    if (data.authorization !== undefined) {
      if (!validate29(data.authorization, {
        instancePath: instancePath + "/authorization",
        parentData: data,
        parentDataProperty: "authorization",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.azureSDConfigs !== undefined) {
      if (!validate102(data.azureSDConfigs, {
        instancePath: instancePath + "/azureSDConfigs",
        parentData: data,
        parentDataProperty: "azureSDConfigs",
        rootData
      })) {
        vErrors = vErrors === null ? validate102.errors : vErrors.concat(validate102.errors);
        errors = vErrors.length;
      }
    }
    if (data.basicAuth !== undefined) {
      if (!validate33(data.basicAuth, {
        instancePath: instancePath + "/basicAuth",
        parentData: data,
        parentDataProperty: "basicAuth",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data.bearerTokenFile !== undefined) {
      if (!validate21(data.bearerTokenFile, {
        instancePath: instancePath + "/bearerTokenFile",
        parentData: data,
        parentDataProperty: "bearerTokenFile",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.bearerTokenSecret !== undefined) {
      if (!validate22(data.bearerTokenSecret, {
        instancePath: instancePath + "/bearerTokenSecret",
        parentData: data,
        parentDataProperty: "bearerTokenSecret",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.consulSDConfigs !== undefined) {
      if (!validate118(data.consulSDConfigs, {
        instancePath: instancePath + "/consulSDConfigs",
        parentData: data,
        parentDataProperty: "consulSDConfigs",
        rootData
      })) {
        vErrors = vErrors === null ? validate118.errors : vErrors.concat(validate118.errors);
        errors = vErrors.length;
      }
    }
    if (data.digitalOceanSDConfigs !== undefined) {
      if (!validate141(data.digitalOceanSDConfigs, {
        instancePath: instancePath + "/digitalOceanSDConfigs",
        parentData: data,
        parentDataProperty: "digitalOceanSDConfigs",
        rootData
      })) {
        vErrors = vErrors === null ? validate141.errors : vErrors.concat(validate141.errors);
        errors = vErrors.length;
      }
    }
    if (data.dnsSDConfigs !== undefined) {
      if (!validate152(data.dnsSDConfigs, {
        instancePath: instancePath + "/dnsSDConfigs",
        parentData: data,
        parentDataProperty: "dnsSDConfigs",
        rootData
      })) {
        vErrors = vErrors === null ? validate152.errors : vErrors.concat(validate152.errors);
        errors = vErrors.length;
      }
    }
    if (data.ec2SDConfigs !== undefined) {
      if (!validate160(data.ec2SDConfigs, {
        instancePath: instancePath + "/ec2SDConfigs",
        parentData: data,
        parentDataProperty: "ec2SDConfigs",
        rootData
      })) {
        vErrors = vErrors === null ? validate160.errors : vErrors.concat(validate160.errors);
        errors = vErrors.length;
      }
    }
    if (data.fileSDConfigs !== undefined) {
      if (!validate175(data.fileSDConfigs, {
        instancePath: instancePath + "/fileSDConfigs",
        parentData: data,
        parentDataProperty: "fileSDConfigs",
        rootData
      })) {
        vErrors = vErrors === null ? validate175.errors : vErrors.concat(validate175.errors);
        errors = vErrors.length;
      }
    }
    if (data.follow_redirects !== undefined) {
      if (!validate27(data.follow_redirects, {
        instancePath: instancePath + "/follow_redirects",
        parentData: data,
        parentDataProperty: "follow_redirects",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.gceSDConfigs !== undefined) {
      if (!validate181(data.gceSDConfigs, {
        instancePath: instancePath + "/gceSDConfigs",
        parentData: data,
        parentDataProperty: "gceSDConfigs",
        rootData
      })) {
        vErrors = vErrors === null ? validate181.errors : vErrors.concat(validate181.errors);
        errors = vErrors.length;
      }
    }
    if (data.honorLabels !== undefined) {
      if (!validate27(data.honorLabels, {
        instancePath: instancePath + "/honorLabels",
        parentData: data,
        parentDataProperty: "honorLabels",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.honorTimestamps !== undefined) {
      if (!validate27(data.honorTimestamps, {
        instancePath: instancePath + "/honorTimestamps",
        parentData: data,
        parentDataProperty: "honorTimestamps",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.httpSDConfigs !== undefined) {
      if (!validate192(data.httpSDConfigs, {
        instancePath: instancePath + "/httpSDConfigs",
        parentData: data,
        parentDataProperty: "httpSDConfigs",
        rootData
      })) {
        vErrors = vErrors === null ? validate192.errors : vErrors.concat(validate192.errors);
        errors = vErrors.length;
      }
    }
    if (data.interval !== undefined) {
      if (!validate21(data.interval, {
        instancePath: instancePath + "/interval",
        parentData: data,
        parentDataProperty: "interval",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.kubernetesSDConfigs !== undefined) {
      if (!validate204(data.kubernetesSDConfigs, {
        instancePath: instancePath + "/kubernetesSDConfigs",
        parentData: data,
        parentDataProperty: "kubernetesSDConfigs",
        rootData
      })) {
        vErrors = vErrors === null ? validate204.errors : vErrors.concat(validate204.errors);
        errors = vErrors.length;
      }
    }
    if (data.max_scrape_size !== undefined) {
      if (!validate21(data.max_scrape_size, {
        instancePath: instancePath + "/max_scrape_size",
        parentData: data,
        parentDataProperty: "max_scrape_size",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.metricRelabelConfigs !== undefined) {
      if (!validate75(data.metricRelabelConfigs, {
        instancePath: instancePath + "/metricRelabelConfigs",
        parentData: data,
        parentDataProperty: "metricRelabelConfigs",
        rootData
      })) {
        vErrors = vErrors === null ? validate75.errors : vErrors.concat(validate75.errors);
        errors = vErrors.length;
      }
    }
    if (data.oauth2 !== undefined) {
      if (!validate54(data.oauth2, {
        instancePath: instancePath + "/oauth2",
        parentData: data,
        parentDataProperty: "oauth2",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.openstackSDConfigs !== undefined) {
      if (!validate234(data.openstackSDConfigs, {
        instancePath: instancePath + "/openstackSDConfigs",
        parentData: data,
        parentDataProperty: "openstackSDConfigs",
        rootData
      })) {
        vErrors = vErrors === null ? validate234.errors : vErrors.concat(validate234.errors);
        errors = vErrors.length;
      }
    }
    if (data.params !== undefined) {
      if (!validate257(data.params, {
        instancePath: instancePath + "/params",
        parentData: data,
        parentDataProperty: "params",
        rootData
      })) {
        vErrors = vErrors === null ? validate257.errors : vErrors.concat(validate257.errors);
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
    if (data.proxyURL !== undefined) {
      if (!validate21(data.proxyURL, {
        instancePath: instancePath + "/proxyURL",
        parentData: data,
        parentDataProperty: "proxyURL",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.relabelConfigs !== undefined) {
      if (!validate75(data.relabelConfigs, {
        instancePath: instancePath + "/relabelConfigs",
        parentData: data,
        parentDataProperty: "relabelConfigs",
        rootData
      })) {
        vErrors = vErrors === null ? validate75.errors : vErrors.concat(validate75.errors);
        errors = vErrors.length;
      }
    }
    if (data.sampleLimit !== undefined) {
      if (!validate81(data.sampleLimit, {
        instancePath: instancePath + "/sampleLimit",
        parentData: data,
        parentDataProperty: "sampleLimit",
        rootData
      })) {
        vErrors = vErrors === null ? validate81.errors : vErrors.concat(validate81.errors);
        errors = vErrors.length;
      }
    }
    if (data.scheme !== undefined) {
      if (!validate264(data.scheme, {
        instancePath: instancePath + "/scheme",
        parentData: data,
        parentDataProperty: "scheme",
        rootData
      })) {
        vErrors = vErrors === null ? validate264.errors : vErrors.concat(validate264.errors);
        errors = vErrors.length;
      }
    }
    if (data.scrape_interval !== undefined) {
      if (!validate21(data.scrape_interval, {
        instancePath: instancePath + "/scrape_interval",
        parentData: data,
        parentDataProperty: "scrape_interval",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.scrapeTimeout !== undefined) {
      if (!validate21(data.scrapeTimeout, {
        instancePath: instancePath + "/scrapeTimeout",
        parentData: data,
        parentDataProperty: "scrapeTimeout",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.seriesLimit !== undefined) {
      if (!validate81(data.seriesLimit, {
        instancePath: instancePath + "/seriesLimit",
        parentData: data,
        parentDataProperty: "seriesLimit",
        rootData
      })) {
        vErrors = vErrors === null ? validate81.errors : vErrors.concat(validate81.errors);
        errors = vErrors.length;
      }
    }
    if (data.staticConfigs !== undefined) {
      if (!validate269(data.staticConfigs, {
        instancePath: instancePath + "/staticConfigs",
        parentData: data,
        parentDataProperty: "staticConfigs",
        rootData
      })) {
        vErrors = vErrors === null ? validate269.errors : vErrors.concat(validate269.errors);
        errors = vErrors.length;
      }
    }
    if (data.tlsConfig !== undefined) {
      if (!validate45(data.tlsConfig, {
        instancePath: instancePath + "/tlsConfig",
        parentData: data,
        parentDataProperty: "tlsConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.vm_scrape_params !== undefined) {
      if (!validate276(data.vm_scrape_params, {
        instancePath: instancePath + "/vm_scrape_params",
        parentData: data,
        parentDataProperty: "vm_scrape_params",
        rootData
      })) {
        vErrors = vErrors === null ? validate276.errors : vErrors.concat(validate276.errors);
        errors = vErrors.length;
      }
    }
  }
  validate100.errors = vErrors;
  return errors === 0;
}
const schema71 = {
  "properties": {
    "lastSyncError": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "status": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate287(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.lastSyncError !== undefined) {
      if (!validate21(data.lastSyncError, {
        instancePath: instancePath + "/lastSyncError",
        parentData: data,
        parentDataProperty: "lastSyncError",
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
  }
  validate287.errors = vErrors;
  return errors === 0;
}
function validate91(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="operator.victoriametrics.com.v1beta1.VMScrapeConfig" */;
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
      if (!validate92(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate92.errors : vErrors.concat(validate92.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate94(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate94.errors : vErrors.concat(validate94.errors);
        errors = vErrors.length;
      }
    }
    if (data.metadata !== undefined) {
      if (!validate96(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate96.errors : vErrors.concat(validate96.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate100(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate100.errors : vErrors.concat(validate100.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate287(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate287.errors : vErrors.concat(validate287.errors);
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
  validate91.errors = vErrors;
  return errors === 0;
}