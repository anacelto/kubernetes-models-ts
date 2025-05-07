import { formats } from "@kubernetes-models/validate";
export const validate = validate51;
const schema18 = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "$ref": "zSFLcfqYe9RwCA5gv5IZnL7FOoj9Vw9SjZ1YejQM1zg"
    },
    "kind": {
      "$ref": "xaDbVHxGID7XwSwLBLfb51nrhkmDYy4XRPGkFWGu4"
    },
    "metadata": {
      "$ref": "a6f0oUEaFqHmymdwnqPORTNOTU7GczWAkwGD0uYU"
    },
    "spec": {
      "$ref": "lwnliqKvBDmyLe52O4yIP4JWMOldDJhDqTy5pOIs7o"
    },
    "status": {
      "$ref": "n20W8ESDmIKMw2DR0MUFQ4eS9ysoemCu4PfrjEoA"
    }
  },
  "required": ["apiVersion", "kind"],
  "$id": "external-secrets.io.v1alpha1.ClusterSecretStore"
};
const schema19 = {
  "type": "string",
  "enum": ["external-secrets.io/v1alpha1"]
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
  if (!(data === "external-secrets.io/v1alpha1")) {
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
  validate52.errors = vErrors;
  return errors === 0;
}
const schema20 = {
  "type": "string",
  "enum": ["ClusterSecretStore"]
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
  if (!(data === "ClusterSecretStore")) {
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
  validate54.errors = vErrors;
  return errors === 0;
}
const schema21 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
};
const schema22 = {};
import { validate as validate57 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
function validate56(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate57(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate57.errors : vErrors.concat(validate57.errors);
      errors = vErrors.length;
    }
  }
  validate56.errors = vErrors;
  return errors === 0;
}
const schema23 = {
  "properties": {
    "controller": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "provider": {
      "$ref": "nRLtRAwkQ7TN8WBbYyqCXxyYQ4YGdNMOhMdiS1JdOs"
    },
    "retrySettings": {
      "$ref": "DXfTBeo3h3vWonO7m5Z75IeCJs6YUppfXLkXVawcN0"
    }
  },
  "required": ["provider"],
  "type": "object",
  "nullable": true
};
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
const schema24 = {
  "maxProperties": 1,
  "minProperties": 1,
  "properties": {
    "akeyless": {
      "$ref": "Q0joWSTQzdjmpdqoBqKR197QNBwDpCjUnRiVmWocY"
    },
    "alibaba": {
      "$ref": "XpDAFN3uZVCzkdWRleJknpivOaYJEjJwDMDrjAJcku0"
    },
    "aws": {
      "$ref": "Fr1rW6NVYJUNX0ded82RsrpcPYtJhKSnHZTMvsQR8"
    },
    "azurekv": {
      "$ref": "3CC0lkCWfdSa2QbN8PoCAP7sbfpYctn8hqWfLMYSg"
    },
    "fake": {
      "$ref": "scQrUkwhTgydc9oepU0CszwOQhn6Ltuwdr0aXVXOo"
    },
    "gcpsm": {
      "$ref": "T1s6MXvziRzZ1dYHK4ZhVY1aUZw5LdzpbJaw5iDUpI"
    },
    "gitlab": {
      "$ref": "RsJ2kHCtVhhZe944SrlWzRyZeqiFvgIxyx4nGiSaw"
    },
    "ibm": {
      "$ref": "ZJaHBMkQvFdVh0M13h4tXedPShLGuXX9tEcoNPg7TkQ"
    },
    "kubernetes": {
      "$ref": "5hpm9QkEO5HXipxwFRa0SvjmQuO7IkdNTwG7XYoAM"
    },
    "oracle": {
      "$ref": "6r2tiXMCpl9BpgMvDVWK9qsZujstZ991JWKgU2blE"
    },
    "vault": {
      "$ref": "HfXdaOO2WjxcMXCluXVYObIuFmPpr1mQHYksEd33UU"
    },
    "webhook": {
      "$ref": "EQzR8JhYEsyNmfjgFoDI1Sqp4Nk2Sz8AH8vXJH1Bg"
    },
    "yandexlockbox": {
      "$ref": "VySa7Eh2xPvjEE3ighQfyWrzZppD5423LMrZkwpTs"
    }
  },
  "type": "object"
};
const schema25 = {
  "properties": {
    "akeylessGWApiURL": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "authSecretRef": {
      "$ref": "IxoFhrzaQISoO7LnQhgQYXZcbJ6crhKuqz0AfRaC4c"
    },
    "caBundle": {
      "$ref": "0d0YjoHtjtI7p6BAHkZ9AtqFZvdnJ29AdGDpfxXc"
    },
    "caProvider": {
      "$ref": "ccuX4CoNUWP2IVzFHEaaIQm8VaPKTbUUXdH7thAmxo"
    }
  },
  "required": ["akeylessGWApiURL", "authSecretRef"],
  "type": "object",
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
const schema26 = {
  "properties": {
    "kubernetesAuth": {
      "$ref": "B491BjlhHcXJaixnkpygUl8mrZVvr0yedLrtqv8dEro"
    },
    "secretRef": {
      "$ref": "oUsVngNvWtMypdrg0e3bOJyJICgc5sutjUGtjDjgWIc"
    }
  },
  "type": "object"
};
const schema27 = {
  "properties": {
    "accessID": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "k8sConfName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "secretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "serviceAccountRef": {
      "$ref": "1ahVOR2eDYxHyGU0TRbhcXIs2rjAF3PFgjzCGXI7Co"
    }
  },
  "required": ["accessID", "k8sConfName"],
  "type": "object",
  "nullable": true
};
const schema8 = {
  "properties": {
    "key": {
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
    if (data.namespace !== undefined) {
      if (!validate22(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
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
const schema10 = {
  "properties": {
    "audiences": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
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
const schema11 = {
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "array",
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.audiences !== undefined) {
      if (!validate32(data.audiences, {
        instancePath: instancePath + "/audiences",
        parentData: data,
        parentDataProperty: "audiences",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
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
      if (!validate22(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate31.errors = vErrors;
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
    if (data.accessID === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "accessID"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.k8sConfName === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "k8sConfName"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.accessID !== undefined) {
      if (!validate21(data.accessID, {
        instancePath: instancePath + "/accessID",
        parentData: data,
        parentDataProperty: "accessID",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.k8sConfName !== undefined) {
      if (!validate21(data.k8sConfName, {
        instancePath: instancePath + "/k8sConfName",
        parentData: data,
        parentDataProperty: "k8sConfName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate23(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAccountRef !== undefined) {
      if (!validate31(data.serviceAccountRef, {
        instancePath: instancePath + "/serviceAccountRef",
        parentData: data,
        parentDataProperty: "serviceAccountRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
  }
  validate66.errors = vErrors;
  return errors === 0;
}
const schema28 = {
  "properties": {
    "accessID": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "accessType": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "accessTypeParam": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "type": "object",
  "nullable": true
};
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
    if (data.accessID !== undefined) {
      if (!validate23(data.accessID, {
        instancePath: instancePath + "/accessID",
        parentData: data,
        parentDataProperty: "accessID",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.accessType !== undefined) {
      if (!validate23(data.accessType, {
        instancePath: instancePath + "/accessType",
        parentData: data,
        parentDataProperty: "accessType",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.accessTypeParam !== undefined) {
      if (!validate23(data.accessTypeParam, {
        instancePath: instancePath + "/accessTypeParam",
        parentData: data,
        parentDataProperty: "accessTypeParam",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate72.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.kubernetesAuth !== undefined) {
      if (!validate66(data.kubernetesAuth, {
        instancePath: instancePath + "/kubernetesAuth",
        parentData: data,
        parentDataProperty: "kubernetesAuth",
        rootData
      })) {
        vErrors = vErrors === null ? validate66.errors : vErrors.concat(validate66.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate72(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate72.errors : vErrors.concat(validate72.errors);
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
  validate65.errors = vErrors;
  return errors === 0;
}
const schema12 = {
  "format": "byte",
  "type": "string",
  "nullable": true
};
const formats0 = formats.byte;
function validate37(data, {
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
  validate37.errors = vErrors;
  return errors === 0;
}
const schema13 = {
  "properties": {
    "key": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "type": {
      "$ref": "ebAifhrS8MR1Opdn4tuyhKTaJh7h5KbXTPm4AK6IGw"
    }
  },
  "required": ["name", "type"],
  "type": "object",
  "nullable": true
};
const schema14 = {
  "enum": ["Secret", "ConfigMap"],
  "type": "string"
};
function validate42(data, {
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
  if (!(data === "Secret" || data === "ConfigMap")) {
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
  validate42.errors = vErrors;
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
      if (!validate22(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.type !== undefined) {
      if (!validate42(data.type, {
        instancePath: instancePath + "/type",
        parentData: data,
        parentDataProperty: "type",
        rootData
      })) {
        vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
        errors = vErrors.length;
      }
    }
  }
  validate38.errors = vErrors;
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
    if (data.akeylessGWApiURL === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "akeylessGWApiURL"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.authSecretRef === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "authSecretRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.akeylessGWApiURL !== undefined) {
      if (!validate21(data.akeylessGWApiURL, {
        instancePath: instancePath + "/akeylessGWApiURL",
        parentData: data,
        parentDataProperty: "akeylessGWApiURL",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.authSecretRef !== undefined) {
      if (!validate65(data.authSecretRef, {
        instancePath: instancePath + "/authSecretRef",
        parentData: data,
        parentDataProperty: "authSecretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate65.errors : vErrors.concat(validate65.errors);
        errors = vErrors.length;
      }
    }
    if (data.caBundle !== undefined) {
      if (!validate37(data.caBundle, {
        instancePath: instancePath + "/caBundle",
        parentData: data,
        parentDataProperty: "caBundle",
        rootData
      })) {
        vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
        errors = vErrors.length;
      }
    }
    if (data.caProvider !== undefined) {
      if (!validate38(data.caProvider, {
        instancePath: instancePath + "/caProvider",
        parentData: data,
        parentDataProperty: "caProvider",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
        errors = vErrors.length;
      }
    }
  }
  validate63.errors = vErrors;
  return errors === 0;
}
const schema29 = {
  "properties": {
    "auth": {
      "$ref": "idSLm2WX2Nv4BaIBg7iS4cBBpUKK94ec3qRMp48A2U"
    },
    "endpoint": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "regionID": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["auth", "regionID"],
  "type": "object",
  "nullable": true
};
const schema30 = {
  "properties": {
    "secretRef": {
      "$ref": "hNSak3Wwk3BMB3hdpooPTJ1l7f84nFFnlusypfGxI10"
    }
  },
  "required": ["secretRef"],
  "type": "object"
};
const schema31 = {
  "properties": {
    "accessKeyIDSecretRef": {
      "$ref": "CnbjxAELdKixofQUyqtRtzW7bB3m9ZZc29MU2RFeIg"
    },
    "accessKeySecretSecretRef": {
      "$ref": "CnbjxAELdKixofQUyqtRtzW7bB3m9ZZc29MU2RFeIg"
    }
  },
  "required": ["accessKeyIDSecretRef", "accessKeySecretSecretRef"],
  "type": "object"
};
const schema9 = {
  "properties": {
    "key": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
function validate27(data, {
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
    if (data.namespace !== undefined) {
      if (!validate22(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
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
  validate27.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.accessKeyIDSecretRef === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "accessKeyIDSecretRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.accessKeySecretSecretRef === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "accessKeySecretSecretRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.accessKeyIDSecretRef !== undefined) {
      if (!validate27(data.accessKeyIDSecretRef, {
        instancePath: instancePath + "/accessKeyIDSecretRef",
        parentData: data,
        parentDataProperty: "accessKeyIDSecretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.accessKeySecretSecretRef !== undefined) {
      if (!validate27(data.accessKeySecretSecretRef, {
        instancePath: instancePath + "/accessKeySecretSecretRef",
        parentData: data,
        parentDataProperty: "accessKeySecretSecretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
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
  validate83.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.secretRef === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "secretRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.secretRef !== undefined) {
      if (!validate83(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate83.errors : vErrors.concat(validate83.errors);
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
  validate82.errors = vErrors;
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.auth === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "auth"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.regionID === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "regionID"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.auth !== undefined) {
      if (!validate82(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate82.errors : vErrors.concat(validate82.errors);
        errors = vErrors.length;
      }
    }
    if (data.endpoint !== undefined) {
      if (!validate22(data.endpoint, {
        instancePath: instancePath + "/endpoint",
        parentData: data,
        parentDataProperty: "endpoint",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.regionID !== undefined) {
      if (!validate21(data.regionID, {
        instancePath: instancePath + "/regionID",
        parentData: data,
        parentDataProperty: "regionID",
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
const schema32 = {
  "properties": {
    "auth": {
      "$ref": "UJsFQ8YTm20WaxF59STDGP64ExxMjosH7TE4pFi72M"
    },
    "region": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "role": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "service": {
      "$ref": "rrHfqdBCqzgmh3tFfdRFg2165Ca4zecyE9HiaJdIvI"
    }
  },
  "required": ["region", "service"],
  "type": "object",
  "nullable": true
};
const schema33 = {
  "properties": {
    "jwt": {
      "$ref": "bLDXAmEjbF4xQl55HWe0Mg9h0w5DHvqJLI4VAAEu4IY"
    },
    "secretRef": {
      "$ref": "6YiaBEu5UyNxpXohaUWHxq0FWymS5kLL1dF5GWfzcLY"
    }
  },
  "type": "object",
  "nullable": true
};
const schema34 = {
  "properties": {
    "serviceAccountRef": {
      "$ref": "1ahVOR2eDYxHyGU0TRbhcXIs2rjAF3PFgjzCGXI7Co"
    }
  },
  "type": "object",
  "nullable": true
};
function validate93(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.serviceAccountRef !== undefined) {
      if (!validate31(data.serviceAccountRef, {
        instancePath: instancePath + "/serviceAccountRef",
        parentData: data,
        parentDataProperty: "serviceAccountRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
  }
  validate93.errors = vErrors;
  return errors === 0;
}
const schema35 = {
  "properties": {
    "accessKeyIDSecretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "secretAccessKeySecretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "type": "object",
  "nullable": true
};
function validate96(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.accessKeyIDSecretRef !== undefined) {
      if (!validate23(data.accessKeyIDSecretRef, {
        instancePath: instancePath + "/accessKeyIDSecretRef",
        parentData: data,
        parentDataProperty: "accessKeyIDSecretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretAccessKeySecretRef !== undefined) {
      if (!validate23(data.secretAccessKeySecretRef, {
        instancePath: instancePath + "/secretAccessKeySecretRef",
        parentData: data,
        parentDataProperty: "secretAccessKeySecretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate96.errors = vErrors;
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
    if (data.jwt !== undefined) {
      if (!validate93(data.jwt, {
        instancePath: instancePath + "/jwt",
        parentData: data,
        parentDataProperty: "jwt",
        rootData
      })) {
        vErrors = vErrors === null ? validate93.errors : vErrors.concat(validate93.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate96(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate96.errors : vErrors.concat(validate96.errors);
        errors = vErrors.length;
      }
    }
  }
  validate92.errors = vErrors;
  return errors === 0;
}
const schema36 = {
  "enum": ["SecretsManager", "ParameterStore"],
  "type": "string"
};
function validate103(data, {
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
  if (!(data === "SecretsManager" || data === "ParameterStore")) {
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
  validate103.errors = vErrors;
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.service === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "service"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.auth !== undefined) {
      if (!validate92(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate92.errors : vErrors.concat(validate92.errors);
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
    if (data.role !== undefined) {
      if (!validate22(data.role, {
        instancePath: instancePath + "/role",
        parentData: data,
        parentDataProperty: "role",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.service !== undefined) {
      if (!validate103(data.service, {
        instancePath: instancePath + "/service",
        parentData: data,
        parentDataProperty: "service",
        rootData
      })) {
        vErrors = vErrors === null ? validate103.errors : vErrors.concat(validate103.errors);
        errors = vErrors.length;
      }
    }
  }
  validate91.errors = vErrors;
  return errors === 0;
}
const schema37 = {
  "properties": {
    "authSecretRef": {
      "$ref": "pVVNOhEJRi29BK4GNx6fWkQMiSVkWcp9fYIt5unLN8"
    },
    "authType": {
      "$ref": "pLQszY5HZOyMLXvJehAwrA9GA7wBKTUj1iPE36c0MUY"
    },
    "identityId": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "serviceAccountRef": {
      "$ref": "1ahVOR2eDYxHyGU0TRbhcXIs2rjAF3PFgjzCGXI7Co"
    },
    "tenantId": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "vaultUrl": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["vaultUrl"],
  "type": "object",
  "nullable": true
};
const schema38 = {
  "properties": {
    "clientId": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "clientSecret": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "type": "object",
  "nullable": true
};
function validate107(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.clientId !== undefined) {
      if (!validate23(data.clientId, {
        instancePath: instancePath + "/clientId",
        parentData: data,
        parentDataProperty: "clientId",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.clientSecret !== undefined) {
      if (!validate23(data.clientSecret, {
        instancePath: instancePath + "/clientSecret",
        parentData: data,
        parentDataProperty: "clientSecret",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate107.errors = vErrors;
  return errors === 0;
}
const schema39 = {
  "default": "ServicePrincipal",
  "enum": ["ServicePrincipal", "ManagedIdentity", "WorkloadIdentity"],
  "type": "string",
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
  if (!(data === "ServicePrincipal" || data === "ManagedIdentity" || data === "WorkloadIdentity")) {
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
  validate111.errors = vErrors;
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.vaultUrl === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "vaultUrl"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.authSecretRef !== undefined) {
      if (!validate107(data.authSecretRef, {
        instancePath: instancePath + "/authSecretRef",
        parentData: data,
        parentDataProperty: "authSecretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate107.errors : vErrors.concat(validate107.errors);
        errors = vErrors.length;
      }
    }
    if (data.authType !== undefined) {
      if (!validate111(data.authType, {
        instancePath: instancePath + "/authType",
        parentData: data,
        parentDataProperty: "authType",
        rootData
      })) {
        vErrors = vErrors === null ? validate111.errors : vErrors.concat(validate111.errors);
        errors = vErrors.length;
      }
    }
    if (data.identityId !== undefined) {
      if (!validate22(data.identityId, {
        instancePath: instancePath + "/identityId",
        parentData: data,
        parentDataProperty: "identityId",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAccountRef !== undefined) {
      if (!validate31(data.serviceAccountRef, {
        instancePath: instancePath + "/serviceAccountRef",
        parentData: data,
        parentDataProperty: "serviceAccountRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
    if (data.tenantId !== undefined) {
      if (!validate22(data.tenantId, {
        instancePath: instancePath + "/tenantId",
        parentData: data,
        parentDataProperty: "tenantId",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.vaultUrl !== undefined) {
      if (!validate21(data.vaultUrl, {
        instancePath: instancePath + "/vaultUrl",
        parentData: data,
        parentDataProperty: "vaultUrl",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate106.errors = vErrors;
  return errors === 0;
}
const schema40 = {
  "properties": {
    "data": {
      "$ref": "j3ZhcsjXeKUskCClLQFzcnK3B7YbIeu8vRgVZgWosIo"
    }
  },
  "required": ["data"],
  "type": "object",
  "nullable": true
};
const schema41 = {
  "items": {
    "$ref": "2u5hH7B4D1AmJ7uPdRM6RlzaiWYCOdBgWqEZ6K2loQc"
  },
  "type": "array"
};
const schema42 = {
  "properties": {
    "key": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "value": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "valueMap": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "version": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["key"],
  "type": "object"
};
const schema17 = {
  "additionalProperties": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "object",
  "properties": {},
  "nullable": true
};
function validate49(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
  validate49.errors = vErrors;
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
    if (data.valueMap !== undefined) {
      if (!validate49(data.valueMap, {
        instancePath: instancePath + "/valueMap",
        parentData: data,
        parentDataProperty: "valueMap",
        rootData
      })) {
        vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
        errors = vErrors.length;
      }
    }
    if (data.version !== undefined) {
      if (!validate22(data.version, {
        instancePath: instancePath + "/version",
        parentData: data,
        parentDataProperty: "version",
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
  validate120.errors = vErrors;
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
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      if (!validate120(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate120.errors : vErrors.concat(validate120.errors);
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.data === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "data"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.data !== undefined) {
      if (!validate119(data.data, {
        instancePath: instancePath + "/data",
        parentData: data,
        parentDataProperty: "data",
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
const schema43 = {
  "properties": {
    "auth": {
      "$ref": "oX4SdxudMFxz4quxeq3m2P3vMwhsXHtkMVuMfFxa1Q"
    },
    "projectID": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema44 = {
  "properties": {
    "secretRef": {
      "$ref": "aitcR5ArJbTn22oOOwNot6r838Gl3NtdMSNwlMpd6U"
    },
    "workloadIdentity": {
      "$ref": "EWWyGkfFui4ebEy0UCxN1sXqCV8KonTanY1PFSainGw"
    }
  },
  "type": "object",
  "nullable": true
};
const schema45 = {
  "properties": {
    "secretAccessKeySecretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
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
    if (data.secretAccessKeySecretRef !== undefined) {
      if (!validate23(data.secretAccessKeySecretRef, {
        instancePath: instancePath + "/secretAccessKeySecretRef",
        parentData: data,
        parentDataProperty: "secretAccessKeySecretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate130.errors = vErrors;
  return errors === 0;
}
const schema46 = {
  "properties": {
    "clusterLocation": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "clusterName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "clusterProjectID": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "serviceAccountRef": {
      "$ref": "eH3ZZWFpYYMv68okqQ8o9kd1pz6DAw1yuQFxSwDA"
    }
  },
  "required": ["clusterLocation", "clusterName", "serviceAccountRef"],
  "type": "object",
  "nullable": true
};
const schema15 = {
  "properties": {
    "audiences": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["name"],
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
    if (data.audiences !== undefined) {
      if (!validate32(data.audiences, {
        instancePath: instancePath + "/audiences",
        parentData: data,
        parentDataProperty: "audiences",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
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
      if (!validate22(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
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
  validate44.errors = vErrors;
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.clusterLocation === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "clusterLocation"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.clusterName === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "clusterName"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.serviceAccountRef === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "serviceAccountRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.clusterLocation !== undefined) {
      if (!validate21(data.clusterLocation, {
        instancePath: instancePath + "/clusterLocation",
        parentData: data,
        parentDataProperty: "clusterLocation",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.clusterName !== undefined) {
      if (!validate21(data.clusterName, {
        instancePath: instancePath + "/clusterName",
        parentData: data,
        parentDataProperty: "clusterName",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.clusterProjectID !== undefined) {
      if (!validate22(data.clusterProjectID, {
        instancePath: instancePath + "/clusterProjectID",
        parentData: data,
        parentDataProperty: "clusterProjectID",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAccountRef !== undefined) {
      if (!validate44(data.serviceAccountRef, {
        instancePath: instancePath + "/serviceAccountRef",
        parentData: data,
        parentDataProperty: "serviceAccountRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate44.errors : vErrors.concat(validate44.errors);
        errors = vErrors.length;
      }
    }
  }
  validate133.errors = vErrors;
  return errors === 0;
}
function validate129(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.secretRef !== undefined) {
      if (!validate130(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate130.errors : vErrors.concat(validate130.errors);
        errors = vErrors.length;
      }
    }
    if (data.workloadIdentity !== undefined) {
      if (!validate133(data.workloadIdentity, {
        instancePath: instancePath + "/workloadIdentity",
        parentData: data,
        parentDataProperty: "workloadIdentity",
        rootData
      })) {
        vErrors = vErrors === null ? validate133.errors : vErrors.concat(validate133.errors);
        errors = vErrors.length;
      }
    }
  }
  validate129.errors = vErrors;
  return errors === 0;
}
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
    if (data.auth !== undefined) {
      if (!validate129(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate129.errors : vErrors.concat(validate129.errors);
        errors = vErrors.length;
      }
    }
    if (data.projectID !== undefined) {
      if (!validate22(data.projectID, {
        instancePath: instancePath + "/projectID",
        parentData: data,
        parentDataProperty: "projectID",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate128.errors = vErrors;
  return errors === 0;
}
const schema47 = {
  "properties": {
    "auth": {
      "$ref": "jcfdZ5DnY8dQSOK0d264GbBtATMnUOpC3sVmdk3Y"
    },
    "projectID": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "url": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["auth"],
  "type": "object",
  "nullable": true
};
const schema48 = {
  "properties": {
    "SecretRef": {
      "$ref": "ZZfHWl5aicFfEMmIFFCeVqRPzesXsNs7yZvEwYC8"
    }
  },
  "required": ["SecretRef"],
  "type": "object"
};
const schema49 = {
  "properties": {
    "accessToken": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "type": "object"
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
    if (data.accessToken !== undefined) {
      if (!validate23(data.accessToken, {
        instancePath: instancePath + "/accessToken",
        parentData: data,
        parentDataProperty: "accessToken",
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
  validate144.errors = vErrors;
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
    if (data.SecretRef === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "SecretRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.SecretRef !== undefined) {
      if (!validate144(data.SecretRef, {
        instancePath: instancePath + "/SecretRef",
        parentData: data,
        parentDataProperty: "SecretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate144.errors : vErrors.concat(validate144.errors);
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.auth === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "auth"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.auth !== undefined) {
      if (!validate143(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate143.errors : vErrors.concat(validate143.errors);
        errors = vErrors.length;
      }
    }
    if (data.projectID !== undefined) {
      if (!validate22(data.projectID, {
        instancePath: instancePath + "/projectID",
        parentData: data,
        parentDataProperty: "projectID",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.url !== undefined) {
      if (!validate22(data.url, {
        instancePath: instancePath + "/url",
        parentData: data,
        parentDataProperty: "url",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate142.errors = vErrors;
  return errors === 0;
}
const schema50 = {
  "properties": {
    "auth": {
      "$ref": "p3FM6iAmc2fyNgA34oW1pCsVxxEDazLpcYuAoTg"
    },
    "serviceUrl": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["auth"],
  "type": "object",
  "nullable": true
};
const schema51 = {
  "properties": {
    "secretRef": {
      "$ref": "cI3QmJkV0VS9OA7pzRsrgkExH4wTQX4K3rQVfCld8hQ"
    }
  },
  "required": ["secretRef"],
  "type": "object"
};
const schema52 = {
  "properties": {
    "secretApiKeySecretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "type": "object"
};
function validate153(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.secretApiKeySecretRef !== undefined) {
      if (!validate23(data.secretApiKeySecretRef, {
        instancePath: instancePath + "/secretApiKeySecretRef",
        parentData: data,
        parentDataProperty: "secretApiKeySecretRef",
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
    if (data.secretRef === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "secretRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.secretRef !== undefined) {
      if (!validate153(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate153.errors : vErrors.concat(validate153.errors);
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
    if (data.auth === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "auth"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.auth !== undefined) {
      if (!validate152(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate152.errors : vErrors.concat(validate152.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceUrl !== undefined) {
      if (!validate22(data.serviceUrl, {
        instancePath: instancePath + "/serviceUrl",
        parentData: data,
        parentDataProperty: "serviceUrl",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate151.errors = vErrors;
  return errors === 0;
}
const schema53 = {
  "properties": {
    "auth": {
      "$ref": "mXfi0wmSZNOD9HlqJKKJWXf9GhNeUxjzjCTI4aNVbs8"
    },
    "remoteNamespace": {
      "$ref": "Rek3LtOlEEpHxoGZ6pShOlQzdnylOCoJWbuYOFxt4o"
    },
    "server": {
      "$ref": "WDaY2fuLC600xsROfK8a3C3sJfvC2ZCULsYqAMs"
    }
  },
  "required": ["auth"],
  "type": "object",
  "nullable": true
};
const schema54 = {
  "maxProperties": 1,
  "minProperties": 1,
  "properties": {
    "cert": {
      "$ref": "etSgelSeSa1PUxhiNLVFAZ9LXqrrAPqTq5M1UTqv1k"
    },
    "serviceAccount": {
      "$ref": "me25QRmHtP1scLkJSzUsosJkYQ4UUl27GLh6GLjouU"
    },
    "token": {
      "$ref": "UIK1fR7nSgFWfRuIIGQ7IsBycS3qM3pVjCvTYjEde0s"
    }
  },
  "type": "object"
};
const schema55 = {
  "properties": {
    "clientCert": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "clientKey": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "type": "object",
  "nullable": true
};
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
    if (data.clientCert !== undefined) {
      if (!validate23(data.clientCert, {
        instancePath: instancePath + "/clientCert",
        parentData: data,
        parentDataProperty: "clientCert",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.clientKey !== undefined) {
      if (!validate23(data.clientKey, {
        instancePath: instancePath + "/clientKey",
        parentData: data,
        parentDataProperty: "clientKey",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate161.errors = vErrors;
  return errors === 0;
}
const schema56 = {
  "properties": {
    "serviceAccount": {
      "$ref": "1ahVOR2eDYxHyGU0TRbhcXIs2rjAF3PFgjzCGXI7Co"
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
    if (data.serviceAccount !== undefined) {
      if (!validate31(data.serviceAccount, {
        instancePath: instancePath + "/serviceAccount",
        parentData: data,
        parentDataProperty: "serviceAccount",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
  }
  validate165.errors = vErrors;
  return errors === 0;
}
const schema57 = {
  "properties": {
    "bearerToken": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "type": "object",
  "nullable": true
};
function validate168(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.bearerToken !== undefined) {
      if (!validate23(data.bearerToken, {
        instancePath: instancePath + "/bearerToken",
        parentData: data,
        parentDataProperty: "bearerToken",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate168.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (Object.keys(data).length > 1) {
      const err0 = {
        instancePath,
        schemaPath: "#/maxProperties",
        keyword: "maxProperties",
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
    if (Object.keys(data).length < 1) {
      const err1 = {
        instancePath,
        schemaPath: "#/minProperties",
        keyword: "minProperties",
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
    if (data.cert !== undefined) {
      if (!validate161(data.cert, {
        instancePath: instancePath + "/cert",
        parentData: data,
        parentDataProperty: "cert",
        rootData
      })) {
        vErrors = vErrors === null ? validate161.errors : vErrors.concat(validate161.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAccount !== undefined) {
      if (!validate165(data.serviceAccount, {
        instancePath: instancePath + "/serviceAccount",
        parentData: data,
        parentDataProperty: "serviceAccount",
        rootData
      })) {
        vErrors = vErrors === null ? validate165.errors : vErrors.concat(validate165.errors);
        errors = vErrors.length;
      }
    }
    if (data.token !== undefined) {
      if (!validate168(data.token, {
        instancePath: instancePath + "/token",
        parentData: data,
        parentDataProperty: "token",
        rootData
      })) {
        vErrors = vErrors === null ? validate168.errors : vErrors.concat(validate168.errors);
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
  validate160.errors = vErrors;
  return errors === 0;
}
const schema58 = {
  "default": "default",
  "type": "string",
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
  validate172.errors = vErrors;
  return errors === 0;
}
const schema59 = {
  "properties": {
    "caBundle": {
      "$ref": "0d0YjoHtjtI7p6BAHkZ9AtqFZvdnJ29AdGDpfxXc"
    },
    "caProvider": {
      "$ref": "ccuX4CoNUWP2IVzFHEaaIQm8VaPKTbUUXdH7thAmxo"
    },
    "url": {
      "$ref": "qyI3WFYbdYxpvhFbVjsJ3ph1Z1ESY0TWbBo9WmGtA"
    }
  },
  "type": "object",
  "nullable": true
};
const schema60 = {
  "default": "kubernetes.default",
  "type": "string",
  "nullable": true
};
function validate177(data, {
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
  validate177.errors = vErrors;
  return errors === 0;
}
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
    if (data.caBundle !== undefined) {
      if (!validate37(data.caBundle, {
        instancePath: instancePath + "/caBundle",
        parentData: data,
        parentDataProperty: "caBundle",
        rootData
      })) {
        vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
        errors = vErrors.length;
      }
    }
    if (data.caProvider !== undefined) {
      if (!validate38(data.caProvider, {
        instancePath: instancePath + "/caProvider",
        parentData: data,
        parentDataProperty: "caProvider",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
        errors = vErrors.length;
      }
    }
    if (data.url !== undefined) {
      if (!validate177(data.url, {
        instancePath: instancePath + "/url",
        parentData: data,
        parentDataProperty: "url",
        rootData
      })) {
        vErrors = vErrors === null ? validate177.errors : vErrors.concat(validate177.errors);
        errors = vErrors.length;
      }
    }
  }
  validate174.errors = vErrors;
  return errors === 0;
}
function validate159(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.auth === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "auth"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.auth !== undefined) {
      if (!validate160(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate160.errors : vErrors.concat(validate160.errors);
        errors = vErrors.length;
      }
    }
    if (data.remoteNamespace !== undefined) {
      if (!validate172(data.remoteNamespace, {
        instancePath: instancePath + "/remoteNamespace",
        parentData: data,
        parentDataProperty: "remoteNamespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate172.errors : vErrors.concat(validate172.errors);
        errors = vErrors.length;
      }
    }
    if (data.server !== undefined) {
      if (!validate174(data.server, {
        instancePath: instancePath + "/server",
        parentData: data,
        parentDataProperty: "server",
        rootData
      })) {
        vErrors = vErrors === null ? validate174.errors : vErrors.concat(validate174.errors);
        errors = vErrors.length;
      }
    }
  }
  validate159.errors = vErrors;
  return errors === 0;
}
const schema61 = {
  "properties": {
    "auth": {
      "$ref": "eQxM4JNBSA61SZ83h8t0ugJUmiROssxN782xxAVKQ"
    },
    "region": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "vault": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["region", "vault"],
  "type": "object",
  "nullable": true
};
const schema62 = {
  "properties": {
    "secretRef": {
      "$ref": "b7OHI8qXmqf04Rg3pmYRpX6HIW3Wr06S5wPTu5PaU"
    },
    "tenancy": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "user": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["secretRef", "tenancy", "user"],
  "type": "object",
  "nullable": true
};
const schema63 = {
  "properties": {
    "fingerprint": {
      "$ref": "CnbjxAELdKixofQUyqtRtzW7bB3m9ZZc29MU2RFeIg"
    },
    "privatekey": {
      "$ref": "CnbjxAELdKixofQUyqtRtzW7bB3m9ZZc29MU2RFeIg"
    }
  },
  "required": ["fingerprint", "privatekey"],
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
    if (data.fingerprint === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "fingerprint"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.privatekey === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "privatekey"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.fingerprint !== undefined) {
      if (!validate27(data.fingerprint, {
        instancePath: instancePath + "/fingerprint",
        parentData: data,
        parentDataProperty: "fingerprint",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.privatekey !== undefined) {
      if (!validate27(data.privatekey, {
        instancePath: instancePath + "/privatekey",
        parentData: data,
        parentDataProperty: "privatekey",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.secretRef === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "secretRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.tenancy === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "tenancy"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.user === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "user"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.secretRef !== undefined) {
      if (!validate183(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate183.errors : vErrors.concat(validate183.errors);
        errors = vErrors.length;
      }
    }
    if (data.tenancy !== undefined) {
      if (!validate21(data.tenancy, {
        instancePath: instancePath + "/tenancy",
        parentData: data,
        parentDataProperty: "tenancy",
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.vault === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "vault"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.auth !== undefined) {
      if (!validate182(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate182.errors : vErrors.concat(validate182.errors);
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
    if (data.vault !== undefined) {
      if (!validate21(data.vault, {
        instancePath: instancePath + "/vault",
        parentData: data,
        parentDataProperty: "vault",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate181.errors = vErrors;
  return errors === 0;
}
const schema64 = {
  "properties": {
    "auth": {
      "$ref": "ilGwgaYwc7j4gAcCtJxFUmY45pTU1DUQzsuuUu7gC4"
    },
    "caBundle": {
      "$ref": "0d0YjoHtjtI7p6BAHkZ9AtqFZvdnJ29AdGDpfxXc"
    },
    "caProvider": {
      "$ref": "ccuX4CoNUWP2IVzFHEaaIQm8VaPKTbUUXdH7thAmxo"
    },
    "forwardInconsistent": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "path": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "readYourWrites": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "server": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "version": {
      "$ref": "aFenxjs96W83On4d9LJCHRVBknHCwT4pzI1yV2bGSc"
    }
  },
  "required": ["auth", "server"],
  "type": "object",
  "nullable": true
};
const schema65 = {
  "properties": {
    "appRole": {
      "$ref": "S9fRlw9nEoIxDe7EH878b9xpNxWzFeNoHnXLpo4rQeY"
    },
    "cert": {
      "$ref": "QmNKotDTBukf9Zho6w9SE3AA8OdyGOT5qalnNxcGUg"
    },
    "jwt": {
      "$ref": "K1OmXPhZTs57sNN69XpsAGpr1nsSb77z6GBqLBo1b8"
    },
    "kubernetes": {
      "$ref": "NUv66UC03rnZbCznaVZIU2DNRHWz1XNcLRtBPGA4M"
    },
    "ldap": {
      "$ref": "XZCrjlRz4fHRJmYgbxPUVZi0wH3jw0o9MhlMlHHWKBk"
    },
    "tokenSecretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "type": "object"
};
const schema66 = {
  "properties": {
    "path": {
      "$ref": "8wOWFMMSs6FjrokB08hOxYHTqsFjyBu5xjrFKp8E"
    },
    "roleId": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "secretRef": {
      "$ref": "CnbjxAELdKixofQUyqtRtzW7bB3m9ZZc29MU2RFeIg"
    }
  },
  "required": ["path", "roleId", "secretRef"],
  "type": "object",
  "nullable": true
};
const schema67 = {
  "default": "approle",
  "type": "string"
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
  validate196.errors = vErrors;
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.roleId === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "roleId"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.secretRef === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "secretRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.path !== undefined) {
      if (!validate196(data.path, {
        instancePath: instancePath + "/path",
        parentData: data,
        parentDataProperty: "path",
        rootData
      })) {
        vErrors = vErrors === null ? validate196.errors : vErrors.concat(validate196.errors);
        errors = vErrors.length;
      }
    }
    if (data.roleId !== undefined) {
      if (!validate21(data.roleId, {
        instancePath: instancePath + "/roleId",
        parentData: data,
        parentDataProperty: "roleId",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate27(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
  }
  validate195.errors = vErrors;
  return errors === 0;
}
const schema68 = {
  "properties": {
    "clientCert": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "secretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "type": "object",
  "nullable": true
};
function validate201(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.clientCert !== undefined) {
      if (!validate23(data.clientCert, {
        instancePath: instancePath + "/clientCert",
        parentData: data,
        parentDataProperty: "clientCert",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate23(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate201.errors = vErrors;
  return errors === 0;
}
const schema69 = {
  "properties": {
    "kubernetesServiceAccountToken": {
      "$ref": "xJWxJVwQB5FbZyeXUbl8FEVsLjiGLmEVwKCdqiwoSg"
    },
    "path": {
      "$ref": "PkniA7oGeCLnyXHDln8dp8sAEIAyHtIcpQkVykCFJd4"
    },
    "role": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "secretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "required": ["path"],
  "type": "object",
  "nullable": true
};
const schema70 = {
  "properties": {
    "audiences": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "expirationSeconds": {
      "$ref": "NW88HfrvS38u8Yy207QW6S7qFs2gsa0jBgSYGvqPw"
    },
    "serviceAccountRef": {
      "$ref": "eH3ZZWFpYYMv68okqQ8o9kd1pz6DAw1yuQFxSwDA"
    }
  },
  "required": ["serviceAccountRef"],
  "type": "object",
  "nullable": true
};
const schema71 = {
  "format": "int64",
  "type": "integer",
  "nullable": true
};
const formats2 = formats.int64;
function validate208(data, {
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
  validate208.errors = vErrors;
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.serviceAccountRef === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "serviceAccountRef"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.audiences !== undefined) {
      if (!validate32(data.audiences, {
        instancePath: instancePath + "/audiences",
        parentData: data,
        parentDataProperty: "audiences",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
        errors = vErrors.length;
      }
    }
    if (data.expirationSeconds !== undefined) {
      if (!validate208(data.expirationSeconds, {
        instancePath: instancePath + "/expirationSeconds",
        parentData: data,
        parentDataProperty: "expirationSeconds",
        rootData
      })) {
        vErrors = vErrors === null ? validate208.errors : vErrors.concat(validate208.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAccountRef !== undefined) {
      if (!validate44(data.serviceAccountRef, {
        instancePath: instancePath + "/serviceAccountRef",
        parentData: data,
        parentDataProperty: "serviceAccountRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate44.errors : vErrors.concat(validate44.errors);
        errors = vErrors.length;
      }
    }
  }
  validate206.errors = vErrors;
  return errors === 0;
}
const schema72 = {
  "default": "jwt",
  "type": "string"
};
function validate212(data, {
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
  validate212.errors = vErrors;
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.kubernetesServiceAccountToken !== undefined) {
      if (!validate206(data.kubernetesServiceAccountToken, {
        instancePath: instancePath + "/kubernetesServiceAccountToken",
        parentData: data,
        parentDataProperty: "kubernetesServiceAccountToken",
        rootData
      })) {
        vErrors = vErrors === null ? validate206.errors : vErrors.concat(validate206.errors);
        errors = vErrors.length;
      }
    }
    if (data.path !== undefined) {
      if (!validate212(data.path, {
        instancePath: instancePath + "/path",
        parentData: data,
        parentDataProperty: "path",
        rootData
      })) {
        vErrors = vErrors === null ? validate212.errors : vErrors.concat(validate212.errors);
        errors = vErrors.length;
      }
    }
    if (data.role !== undefined) {
      if (!validate22(data.role, {
        instancePath: instancePath + "/role",
        parentData: data,
        parentDataProperty: "role",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate23(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate205.errors = vErrors;
  return errors === 0;
}
const schema73 = {
  "properties": {
    "mountPath": {
      "$ref": "ZF8mtm1t8YwnjL2dWna1ddAWxEsB0CksfRj0VAKqQME"
    },
    "role": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "secretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "serviceAccountRef": {
      "$ref": "1ahVOR2eDYxHyGU0TRbhcXIs2rjAF3PFgjzCGXI7Co"
    }
  },
  "required": ["mountPath", "role"],
  "type": "object",
  "nullable": true
};
const schema74 = {
  "default": "kubernetes",
  "type": "string"
};
function validate218(data, {
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
  validate218.errors = vErrors;
  return errors === 0;
}
function validate217(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.role === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "role"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.mountPath !== undefined) {
      if (!validate218(data.mountPath, {
        instancePath: instancePath + "/mountPath",
        parentData: data,
        parentDataProperty: "mountPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate218.errors : vErrors.concat(validate218.errors);
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
    if (data.secretRef !== undefined) {
      if (!validate23(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAccountRef !== undefined) {
      if (!validate31(data.serviceAccountRef, {
        instancePath: instancePath + "/serviceAccountRef",
        parentData: data,
        parentDataProperty: "serviceAccountRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
  }
  validate217.errors = vErrors;
  return errors === 0;
}
const schema75 = {
  "properties": {
    "path": {
      "$ref": "RjPW2ZxsQgclQcn2egqxCUvJQwuPHwp9DvwhmeKnSO4"
    },
    "secretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    },
    "username": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["path", "username"],
  "type": "object",
  "nullable": true
};
const schema76 = {
  "default": "ldap",
  "type": "string"
};
function validate225(data, {
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
  validate225.errors = vErrors;
  return errors === 0;
}
function validate224(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.username === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "username"
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
      if (!validate225(data.path, {
        instancePath: instancePath + "/path",
        parentData: data,
        parentDataProperty: "path",
        rootData
      })) {
        vErrors = vErrors === null ? validate225.errors : vErrors.concat(validate225.errors);
        errors = vErrors.length;
      }
    }
    if (data.secretRef !== undefined) {
      if (!validate23(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
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
  }
  validate224.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.appRole !== undefined) {
      if (!validate195(data.appRole, {
        instancePath: instancePath + "/appRole",
        parentData: data,
        parentDataProperty: "appRole",
        rootData
      })) {
        vErrors = vErrors === null ? validate195.errors : vErrors.concat(validate195.errors);
        errors = vErrors.length;
      }
    }
    if (data.cert !== undefined) {
      if (!validate201(data.cert, {
        instancePath: instancePath + "/cert",
        parentData: data,
        parentDataProperty: "cert",
        rootData
      })) {
        vErrors = vErrors === null ? validate201.errors : vErrors.concat(validate201.errors);
        errors = vErrors.length;
      }
    }
    if (data.jwt !== undefined) {
      if (!validate205(data.jwt, {
        instancePath: instancePath + "/jwt",
        parentData: data,
        parentDataProperty: "jwt",
        rootData
      })) {
        vErrors = vErrors === null ? validate205.errors : vErrors.concat(validate205.errors);
        errors = vErrors.length;
      }
    }
    if (data.kubernetes !== undefined) {
      if (!validate217(data.kubernetes, {
        instancePath: instancePath + "/kubernetes",
        parentData: data,
        parentDataProperty: "kubernetes",
        rootData
      })) {
        vErrors = vErrors === null ? validate217.errors : vErrors.concat(validate217.errors);
        errors = vErrors.length;
      }
    }
    if (data.ldap !== undefined) {
      if (!validate224(data.ldap, {
        instancePath: instancePath + "/ldap",
        parentData: data,
        parentDataProperty: "ldap",
        rootData
      })) {
        vErrors = vErrors === null ? validate224.errors : vErrors.concat(validate224.errors);
        errors = vErrors.length;
      }
    }
    if (data.tokenSecretRef !== undefined) {
      if (!validate23(data.tokenSecretRef, {
        instancePath: instancePath + "/tokenSecretRef",
        parentData: data,
        parentDataProperty: "tokenSecretRef",
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
  validate194.errors = vErrors;
  return errors === 0;
}
const schema16 = {
  "type": "boolean",
  "nullable": true
};
function validate48(data, {
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
  validate48.errors = vErrors;
  return errors === 0;
}
const schema77 = {
  "default": "v2",
  "enum": ["v1", "v2"],
  "type": "string",
  "nullable": true
};
function validate239(data, {
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
  if (!(data === "v1" || data === "v2")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema77.enum
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
function validate193(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.auth === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "auth"
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
    if (data.auth !== undefined) {
      if (!validate194(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate194.errors : vErrors.concat(validate194.errors);
        errors = vErrors.length;
      }
    }
    if (data.caBundle !== undefined) {
      if (!validate37(data.caBundle, {
        instancePath: instancePath + "/caBundle",
        parentData: data,
        parentDataProperty: "caBundle",
        rootData
      })) {
        vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
        errors = vErrors.length;
      }
    }
    if (data.caProvider !== undefined) {
      if (!validate38(data.caProvider, {
        instancePath: instancePath + "/caProvider",
        parentData: data,
        parentDataProperty: "caProvider",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
        errors = vErrors.length;
      }
    }
    if (data.forwardInconsistent !== undefined) {
      if (!validate48(data.forwardInconsistent, {
        instancePath: instancePath + "/forwardInconsistent",
        parentData: data,
        parentDataProperty: "forwardInconsistent",
        rootData
      })) {
        vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespace !== undefined) {
      if (!validate22(data.namespace, {
        instancePath: instancePath + "/namespace",
        parentData: data,
        parentDataProperty: "namespace",
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
    if (data.readYourWrites !== undefined) {
      if (!validate48(data.readYourWrites, {
        instancePath: instancePath + "/readYourWrites",
        parentData: data,
        parentDataProperty: "readYourWrites",
        rootData
      })) {
        vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
        errors = vErrors.length;
      }
    }
    if (data.server !== undefined) {
      if (!validate21(data.server, {
        instancePath: instancePath + "/server",
        parentData: data,
        parentDataProperty: "server",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.version !== undefined) {
      if (!validate239(data.version, {
        instancePath: instancePath + "/version",
        parentData: data,
        parentDataProperty: "version",
        rootData
      })) {
        vErrors = vErrors === null ? validate239.errors : vErrors.concat(validate239.errors);
        errors = vErrors.length;
      }
    }
  }
  validate193.errors = vErrors;
  return errors === 0;
}
const schema78 = {
  "properties": {
    "body": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "caBundle": {
      "$ref": "0d0YjoHtjtI7p6BAHkZ9AtqFZvdnJ29AdGDpfxXc"
    },
    "caProvider": {
      "$ref": "ccuX4CoNUWP2IVzFHEaaIQm8VaPKTbUUXdH7thAmxo"
    },
    "headers": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "method": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "result": {
      "$ref": "CVVa9rATX0F97UhhoSGxmY6sDac4ntey7z1IQw"
    },
    "secrets": {
      "$ref": "o7Fz1RrCRnLUMdnIMwsNGwzVQsomSz3nZqdb4BcrK7A"
    },
    "timeout": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "url": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["result", "url"],
  "type": "object",
  "nullable": true
};
const schema79 = {
  "properties": {
    "jsonPath": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
function validate248(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.jsonPath !== undefined) {
      if (!validate22(data.jsonPath, {
        instancePath: instancePath + "/jsonPath",
        parentData: data,
        parentDataProperty: "jsonPath",
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
  validate248.errors = vErrors;
  return errors === 0;
}
const schema80 = {
  "items": {
    "$ref": "fP3a1cyUWFMko92PApdmGZb9En8tuev5rzCTdUJjuQ"
  },
  "type": "array",
  "nullable": true
};
const schema81 = {
  "properties": {
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "secretRef": {
      "$ref": "CnbjxAELdKixofQUyqtRtzW7bB3m9ZZc29MU2RFeIg"
    }
  },
  "required": ["name", "secretRef"],
  "type": "object"
};
function validate252(data, {
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
    if (data.secretRef === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "secretRef"
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
    if (data.secretRef !== undefined) {
      if (!validate27(data.secretRef, {
        instancePath: instancePath + "/secretRef",
        parentData: data,
        parentDataProperty: "secretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
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
  validate252.errors = vErrors;
  return errors === 0;
}
function validate251(data, {
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
      if (!validate252(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate252.errors : vErrors.concat(validate252.errors);
        errors = vErrors.length;
      }
    }
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
    if (data.result === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "result"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.url === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "url"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.body !== undefined) {
      if (!validate22(data.body, {
        instancePath: instancePath + "/body",
        parentData: data,
        parentDataProperty: "body",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.caBundle !== undefined) {
      if (!validate37(data.caBundle, {
        instancePath: instancePath + "/caBundle",
        parentData: data,
        parentDataProperty: "caBundle",
        rootData
      })) {
        vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
        errors = vErrors.length;
      }
    }
    if (data.caProvider !== undefined) {
      if (!validate38(data.caProvider, {
        instancePath: instancePath + "/caProvider",
        parentData: data,
        parentDataProperty: "caProvider",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
        errors = vErrors.length;
      }
    }
    if (data.headers !== undefined) {
      if (!validate49(data.headers, {
        instancePath: instancePath + "/headers",
        parentData: data,
        parentDataProperty: "headers",
        rootData
      })) {
        vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
        errors = vErrors.length;
      }
    }
    if (data.method !== undefined) {
      if (!validate22(data.method, {
        instancePath: instancePath + "/method",
        parentData: data,
        parentDataProperty: "method",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.result !== undefined) {
      if (!validate248(data.result, {
        instancePath: instancePath + "/result",
        parentData: data,
        parentDataProperty: "result",
        rootData
      })) {
        vErrors = vErrors === null ? validate248.errors : vErrors.concat(validate248.errors);
        errors = vErrors.length;
      }
    }
    if (data.secrets !== undefined) {
      if (!validate251(data.secrets, {
        instancePath: instancePath + "/secrets",
        parentData: data,
        parentDataProperty: "secrets",
        rootData
      })) {
        vErrors = vErrors === null ? validate251.errors : vErrors.concat(validate251.errors);
        errors = vErrors.length;
      }
    }
    if (data.timeout !== undefined) {
      if (!validate22(data.timeout, {
        instancePath: instancePath + "/timeout",
        parentData: data,
        parentDataProperty: "timeout",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
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
  validate242.errors = vErrors;
  return errors === 0;
}
const schema82 = {
  "properties": {
    "apiEndpoint": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "auth": {
      "$ref": "Q3yxI9TDJGWYmiy01iawuCYWMzIZrZOdvCiLA8wiXE"
    },
    "caProvider": {
      "$ref": "jzEWVdvYsPLW0O8VHopvYXWKiohRlvAGjcSNMil8w"
    }
  },
  "required": ["auth"],
  "type": "object",
  "nullable": true
};
const schema83 = {
  "properties": {
    "authorizedKeySecretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "type": "object"
};
function validate262(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.authorizedKeySecretRef !== undefined) {
      if (!validate23(data.authorizedKeySecretRef, {
        instancePath: instancePath + "/authorizedKeySecretRef",
        parentData: data,
        parentDataProperty: "authorizedKeySecretRef",
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
  validate262.errors = vErrors;
  return errors === 0;
}
const schema84 = {
  "properties": {
    "certSecretRef": {
      "$ref": "7xY34uhkb3Bff1TR0MulRxkUkAfoZ47t7iXvXV2s"
    }
  },
  "type": "object",
  "nullable": true
};
function validate265(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.certSecretRef !== undefined) {
      if (!validate23(data.certSecretRef, {
        instancePath: instancePath + "/certSecretRef",
        parentData: data,
        parentDataProperty: "certSecretRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
  }
  validate265.errors = vErrors;
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.auth === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "auth"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.apiEndpoint !== undefined) {
      if (!validate22(data.apiEndpoint, {
        instancePath: instancePath + "/apiEndpoint",
        parentData: data,
        parentDataProperty: "apiEndpoint",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.auth !== undefined) {
      if (!validate262(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate262.errors : vErrors.concat(validate262.errors);
        errors = vErrors.length;
      }
    }
    if (data.caProvider !== undefined) {
      if (!validate265(data.caProvider, {
        instancePath: instancePath + "/caProvider",
        parentData: data,
        parentDataProperty: "caProvider",
        rootData
      })) {
        vErrors = vErrors === null ? validate265.errors : vErrors.concat(validate265.errors);
        errors = vErrors.length;
      }
    }
  }
  validate260.errors = vErrors;
  return errors === 0;
}
function validate62(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (Object.keys(data).length > 1) {
      const err0 = {
        instancePath,
        schemaPath: "#/maxProperties",
        keyword: "maxProperties",
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
    if (Object.keys(data).length < 1) {
      const err1 = {
        instancePath,
        schemaPath: "#/minProperties",
        keyword: "minProperties",
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
    if (data.akeyless !== undefined) {
      if (!validate63(data.akeyless, {
        instancePath: instancePath + "/akeyless",
        parentData: data,
        parentDataProperty: "akeyless",
        rootData
      })) {
        vErrors = vErrors === null ? validate63.errors : vErrors.concat(validate63.errors);
        errors = vErrors.length;
      }
    }
    if (data.alibaba !== undefined) {
      if (!validate81(data.alibaba, {
        instancePath: instancePath + "/alibaba",
        parentData: data,
        parentDataProperty: "alibaba",
        rootData
      })) {
        vErrors = vErrors === null ? validate81.errors : vErrors.concat(validate81.errors);
        errors = vErrors.length;
      }
    }
    if (data.aws !== undefined) {
      if (!validate91(data.aws, {
        instancePath: instancePath + "/aws",
        parentData: data,
        parentDataProperty: "aws",
        rootData
      })) {
        vErrors = vErrors === null ? validate91.errors : vErrors.concat(validate91.errors);
        errors = vErrors.length;
      }
    }
    if (data.azurekv !== undefined) {
      if (!validate106(data.azurekv, {
        instancePath: instancePath + "/azurekv",
        parentData: data,
        parentDataProperty: "azurekv",
        rootData
      })) {
        vErrors = vErrors === null ? validate106.errors : vErrors.concat(validate106.errors);
        errors = vErrors.length;
      }
    }
    if (data.fake !== undefined) {
      if (!validate118(data.fake, {
        instancePath: instancePath + "/fake",
        parentData: data,
        parentDataProperty: "fake",
        rootData
      })) {
        vErrors = vErrors === null ? validate118.errors : vErrors.concat(validate118.errors);
        errors = vErrors.length;
      }
    }
    if (data.gcpsm !== undefined) {
      if (!validate128(data.gcpsm, {
        instancePath: instancePath + "/gcpsm",
        parentData: data,
        parentDataProperty: "gcpsm",
        rootData
      })) {
        vErrors = vErrors === null ? validate128.errors : vErrors.concat(validate128.errors);
        errors = vErrors.length;
      }
    }
    if (data.gitlab !== undefined) {
      if (!validate142(data.gitlab, {
        instancePath: instancePath + "/gitlab",
        parentData: data,
        parentDataProperty: "gitlab",
        rootData
      })) {
        vErrors = vErrors === null ? validate142.errors : vErrors.concat(validate142.errors);
        errors = vErrors.length;
      }
    }
    if (data.ibm !== undefined) {
      if (!validate151(data.ibm, {
        instancePath: instancePath + "/ibm",
        parentData: data,
        parentDataProperty: "ibm",
        rootData
      })) {
        vErrors = vErrors === null ? validate151.errors : vErrors.concat(validate151.errors);
        errors = vErrors.length;
      }
    }
    if (data.kubernetes !== undefined) {
      if (!validate159(data.kubernetes, {
        instancePath: instancePath + "/kubernetes",
        parentData: data,
        parentDataProperty: "kubernetes",
        rootData
      })) {
        vErrors = vErrors === null ? validate159.errors : vErrors.concat(validate159.errors);
        errors = vErrors.length;
      }
    }
    if (data.oracle !== undefined) {
      if (!validate181(data.oracle, {
        instancePath: instancePath + "/oracle",
        parentData: data,
        parentDataProperty: "oracle",
        rootData
      })) {
        vErrors = vErrors === null ? validate181.errors : vErrors.concat(validate181.errors);
        errors = vErrors.length;
      }
    }
    if (data.vault !== undefined) {
      if (!validate193(data.vault, {
        instancePath: instancePath + "/vault",
        parentData: data,
        parentDataProperty: "vault",
        rootData
      })) {
        vErrors = vErrors === null ? validate193.errors : vErrors.concat(validate193.errors);
        errors = vErrors.length;
      }
    }
    if (data.webhook !== undefined) {
      if (!validate242(data.webhook, {
        instancePath: instancePath + "/webhook",
        parentData: data,
        parentDataProperty: "webhook",
        rootData
      })) {
        vErrors = vErrors === null ? validate242.errors : vErrors.concat(validate242.errors);
        errors = vErrors.length;
      }
    }
    if (data.yandexlockbox !== undefined) {
      if (!validate260(data.yandexlockbox, {
        instancePath: instancePath + "/yandexlockbox",
        parentData: data,
        parentDataProperty: "yandexlockbox",
        rootData
      })) {
        vErrors = vErrors === null ? validate260.errors : vErrors.concat(validate260.errors);
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
  validate62.errors = vErrors;
  return errors === 0;
}
const schema85 = {
  "properties": {
    "maxRetries": {
      "$ref": "Ccz0XZyNWiwVpe2nvsmnlMV1SnfQGMXuejl0yByE"
    },
    "retryInterval": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema86 = {
  "format": "int32",
  "type": "integer",
  "nullable": true
};
const formats4 = formats.int32;
function validate271(data, {
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
  validate271.errors = vErrors;
  return errors === 0;
}
function validate270(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
    if (data.maxRetries !== undefined) {
      if (!validate271(data.maxRetries, {
        instancePath: instancePath + "/maxRetries",
        parentData: data,
        parentDataProperty: "maxRetries",
        rootData
      })) {
        vErrors = vErrors === null ? validate271.errors : vErrors.concat(validate271.errors);
        errors = vErrors.length;
      }
    }
    if (data.retryInterval !== undefined) {
      if (!validate22(data.retryInterval, {
        instancePath: instancePath + "/retryInterval",
        parentData: data,
        parentDataProperty: "retryInterval",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate270.errors = vErrors;
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
    if (data.controller !== undefined) {
      if (!validate22(data.controller, {
        instancePath: instancePath + "/controller",
        parentData: data,
        parentDataProperty: "controller",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.provider !== undefined) {
      if (!validate62(data.provider, {
        instancePath: instancePath + "/provider",
        parentData: data,
        parentDataProperty: "provider",
        rootData
      })) {
        vErrors = vErrors === null ? validate62.errors : vErrors.concat(validate62.errors);
        errors = vErrors.length;
      }
    }
    if (data.retrySettings !== undefined) {
      if (!validate270(data.retrySettings, {
        instancePath: instancePath + "/retrySettings",
        parentData: data,
        parentDataProperty: "retrySettings",
        rootData
      })) {
        vErrors = vErrors === null ? validate270.errors : vErrors.concat(validate270.errors);
        errors = vErrors.length;
      }
    }
  }
  validate60.errors = vErrors;
  return errors === 0;
}
const schema87 = {
  "properties": {
    "conditions": {
      "$ref": "w2aklriTacMuluV3ikJT0sk1m73QD4wiOVvucBSXqU"
    }
  },
  "type": "object",
  "nullable": true
};
const schema88 = {
  "items": {
    "$ref": "wDmDj5rw5YUsWkFYJ3cuEIZx1zmHBm4Y3alwxCajxY"
  },
  "type": "array",
  "nullable": true
};
const schema89 = {
  "properties": {
    "lastTransitionTime": {
      "$ref": "thZzwpySeU7LsVtTYjwqN1mWUAwFAnezim8OMie8k"
    },
    "message": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "reason": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
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
const schema90 = {
  "format": "date-time",
  "type": "string",
  "nullable": true
};
const formats6 = formats["date-time"];
function validate279(data, {
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
    if (!formats6.validate(data)) {
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
  validate279.errors = vErrors;
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
    if (data.lastTransitionTime !== undefined) {
      if (!validate279(data.lastTransitionTime, {
        instancePath: instancePath + "/lastTransitionTime",
        parentData: data,
        parentDataProperty: "lastTransitionTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate279.errors : vErrors.concat(validate279.errors);
        errors = vErrors.length;
      }
    }
    if (data.message !== undefined) {
      if (!validate22(data.message, {
        instancePath: instancePath + "/message",
        parentData: data,
        parentDataProperty: "message",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.reason !== undefined) {
      if (!validate22(data.reason, {
        instancePath: instancePath + "/reason",
        parentData: data,
        parentDataProperty: "reason",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
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
    if (data.conditions !== undefined) {
      if (!validate277(data.conditions, {
        instancePath: instancePath + "/conditions",
        parentData: data,
        parentDataProperty: "conditions",
        rootData
      })) {
        vErrors = vErrors === null ? validate277.errors : vErrors.concat(validate277.errors);
        errors = vErrors.length;
      }
    }
  }
  validate276.errors = vErrors;
  return errors === 0;
}
function validate51(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="external-secrets.io.v1alpha1.ClusterSecretStore" */;
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
      if (!validate52(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate52.errors : vErrors.concat(validate52.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate54(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.metadata !== undefined) {
      if (!validate56(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate56.errors : vErrors.concat(validate56.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate60(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate60.errors : vErrors.concat(validate60.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate276(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate276.errors : vErrors.concat(validate276.errors);
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
  validate51.errors = vErrors;
  return errors === 0;
}