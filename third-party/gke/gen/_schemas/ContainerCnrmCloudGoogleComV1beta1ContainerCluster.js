export const validate = validate60;
const schema27 = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "$ref": "bwhluVzPFQrG9D1mTVhfaN2CATJUIYmKUIMpx1Z4"
    },
    "kind": {
      "$ref": "BLS7MYfDLexzvOFXlafPqhg5Mtno8YKfJMEkFPrU"
    },
    "metadata": {
      "$ref": "a6f0oUEaFqHmymdwnqPORTNOTU7GczWAkwGD0uYU"
    },
    "spec": {
      "$ref": "AOfd6LQgAgdmfqYM8WH71khPMCzv4yPDPRRUx0Ptw"
    },
    "status": {
      "$ref": "JzcAY8kZgthFInnG1GN9Sr3MuzPrQd01NpOI1om3lew"
    }
  },
  "required": ["spec", "apiVersion", "kind"],
  "$id": "container.cnrm.cloud.google.com.v1beta1.ContainerCluster"
};
const schema28 = {
  "type": "string",
  "enum": ["container.cnrm.cloud.google.com/v1beta1"]
};
function validate61(data, {
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
  if (!(data === "container.cnrm.cloud.google.com/v1beta1")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema28.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate61.errors = vErrors;
  return errors === 0;
}
const schema29 = {
  "type": "string",
  "enum": ["ContainerCluster"]
};
function validate63(data, {
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
  if (!(data === "ContainerCluster")) {
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
  validate63.errors = vErrors;
  return errors === 0;
}
const schema30 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
};
const schema31 = {};
import { validate as validate66 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
function validate65(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate66(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate66.errors : vErrors.concat(validate66.errors);
      errors = vErrors.length;
    }
  }
  validate65.errors = vErrors;
  return errors === 0;
}
const schema32 = {
  "properties": {
    "addonsConfig": {
      "$ref": "zGnOCwvKPq0lOF38G1fHg7CuCVZrse2vn5gQ00tEU"
    },
    "allowNetAdmin": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "authenticatorGroupsConfig": {
      "$ref": "6l8s7hPnyScyaRXqQwQ60VopU6kuPIZXUA6ryH6g"
    },
    "binaryAuthorization": {
      "$ref": "j6t9HeVheeG0n2Te8S5A6mRjqfzPUHBKENKdyWfXN4Q"
    },
    "clusterAutoscaling": {
      "$ref": "5Y1n5tDwv09xhVrkaZKOCu9jdmpYPN2B6vNiFAyQY"
    },
    "clusterIpv4Cidr": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "clusterTelemetry": {
      "$ref": "1GCTnrbJ2J2fhppcOQElVQVrVlVRXzMwtiXUMQCYpU"
    },
    "confidentialNodes": {
      "$ref": "9qA28OI6FWc1HvhX2XPjMDkoI13JmkT0RKswsEk2Jk"
    },
    "costManagementConfig": {
      "$ref": "9qA28OI6FWc1HvhX2XPjMDkoI13JmkT0RKswsEk2Jk"
    },
    "databaseEncryption": {
      "$ref": "PVgL2jaURk5aufxuyzFHzHprTfCxnrwZdRk2Sxmjig"
    },
    "datapathProvider": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "defaultMaxPodsPerNode": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "defaultSnatStatus": {
      "$ref": "iQRlBWug1bAsbEWfesVUdfF3ZfT1tqFEe0mBVbpiZI"
    },
    "dnsConfig": {
      "$ref": "3pzV3xSF6yjUgjptISXQOVJtpuCurIqFVbSXCoQYk"
    },
    "enableAutopilot": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "enableBinaryAuthorization": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "enableFqdnNetworkPolicy": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "enableIntranodeVisibility": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "enableK8sBetaApis": {
      "$ref": "VvNMDTRGam3DoXJD8kzkxWWuW59hkMNemWO2WvO9M"
    },
    "enableKubernetesAlpha": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "enableL4IlbSubsetting": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "enableLegacyAbac": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "enableMultiNetworking": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "enableShieldedNodes": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "enableTpu": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "gatewayApiConfig": {
      "$ref": "lpjcbIFobdMKFhOj8Py3jZkbQjTp8WSOrQlp3lafLko"
    },
    "identityServiceConfig": {
      "$ref": "jGnVHu3UZIESVSbmGsblHm4RqAftnIrItcRlvqGcAs"
    },
    "initialNodeCount": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "ipAllocationPolicy": {
      "$ref": "hu8W0b276kBYKe4ATKs7np9XUFad72B4Ft8P5hFYriw"
    },
    "location": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "loggingConfig": {
      "$ref": "7gszrI6sDIPAojsjqo78IQBj7iWAd8Qg3PljMu9mwhQ"
    },
    "loggingService": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "maintenancePolicy": {
      "$ref": "qM2QS9Jy7rusBoa6BQWtjmrcV4bwBD0kjLbXIZuKc8"
    },
    "masterAuth": {
      "$ref": "VN1bxsugSjdzK45lBErGIihwV2Jt5oqikGwfBaWpog"
    },
    "masterAuthorizedNetworksConfig": {
      "$ref": "Q53dx3VwwIaashdJDF3txJ0uCrRWEZlnKNkYod2kR4o"
    },
    "meshCertificates": {
      "$ref": "AvCUlNTpztfujBXPNfWkvs49Blu2q1Hlpmg6JQAJFug"
    },
    "minMasterVersion": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "monitoringConfig": {
      "$ref": "mK0RFxv7bgZG4M5xXC8ZQnMcXIPG8QOMoVSLDXXKgs"
    },
    "monitoringService": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "networkPolicy": {
      "$ref": "FjHM8oHxgVrP1cFVToC1xalIyYNTEMnFpxlAYIah7Kk"
    },
    "networkRef": {
      "$ref": "FqwG3fNQDV94n3ssyud4YO0vSjAbQTxNuU0XWG96Y"
    },
    "networkingMode": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "nodeConfig": {
      "$ref": "JuHcE7uvfxnEdsnUiN5ScKDTlsUaWt3x6VlclWP0g"
    },
    "nodeLocations": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "nodePoolAutoConfig": {
      "$ref": "7tWSsFz5LDGqKKNy3JdcWGNa6bbGTro2wIFjnAKtw"
    },
    "nodePoolDefaults": {
      "$ref": "Dh78ZZ53k81c3AS5ubVtccUggOmLnIkJP1RA0K74"
    },
    "nodeVersion": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "notificationConfig": {
      "$ref": "xVW8gId4ApHoEXzuNIkbaXBQQrC2RQeDK4dIs87kLY"
    },
    "podSecurityPolicyConfig": {
      "$ref": "9qA28OI6FWc1HvhX2XPjMDkoI13JmkT0RKswsEk2Jk"
    },
    "privateClusterConfig": {
      "$ref": "mTH0WweycPTuN1gGrWKoC5SSlrPOAwVWlBX9slAsTE"
    },
    "privateIpv6GoogleAccess": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "protectConfig": {
      "$ref": "4NMTmipb8xkHJ8vaWarU6nyeEqCAPRmc0u5Rp0OY4"
    },
    "releaseChannel": {
      "$ref": "lpjcbIFobdMKFhOj8Py3jZkbQjTp8WSOrQlp3lafLko"
    },
    "resourceID": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "resourceUsageExportConfig": {
      "$ref": "SXS469CODrtTK5BoxxkZBfVDE233e9cCyWZKdey20E"
    },
    "securityPostureConfig": {
      "$ref": "M8KiWmtbhA9Ip23mqqvbNYXiDIA6GFyri12603ow4U"
    },
    "serviceExternalIpsConfig": {
      "$ref": "9qA28OI6FWc1HvhX2XPjMDkoI13JmkT0RKswsEk2Jk"
    },
    "subnetworkRef": {
      "$ref": "FqwG3fNQDV94n3ssyud4YO0vSjAbQTxNuU0XWG96Y"
    },
    "verticalPodAutoscaling": {
      "$ref": "9qA28OI6FWc1HvhX2XPjMDkoI13JmkT0RKswsEk2Jk"
    },
    "workloadIdentityConfig": {
      "$ref": "GrjBIyd83XMXYK1PgxY87xI50b9mK0gEYK4BARBsEw"
    }
  },
  "required": ["location"],
  "type": "object"
};
const schema33 = {
  "properties": {
    "cloudrunConfig": {
      "$ref": "bnaiTwlajvxihG2jkg2Ab9K4aOfBJq3qU8EF7jp3pwg"
    },
    "configConnectorConfig": {
      "$ref": "9qA28OI6FWc1HvhX2XPjMDkoI13JmkT0RKswsEk2Jk"
    },
    "dnsCacheConfig": {
      "$ref": "9qA28OI6FWc1HvhX2XPjMDkoI13JmkT0RKswsEk2Jk"
    },
    "gcePersistentDiskCsiDriverConfig": {
      "$ref": "9qA28OI6FWc1HvhX2XPjMDkoI13JmkT0RKswsEk2Jk"
    },
    "gcpFilestoreCsiDriverConfig": {
      "$ref": "9qA28OI6FWc1HvhX2XPjMDkoI13JmkT0RKswsEk2Jk"
    },
    "gcsFuseCsiDriverConfig": {
      "$ref": "9qA28OI6FWc1HvhX2XPjMDkoI13JmkT0RKswsEk2Jk"
    },
    "gkeBackupAgentConfig": {
      "$ref": "9qA28OI6FWc1HvhX2XPjMDkoI13JmkT0RKswsEk2Jk"
    },
    "horizontalPodAutoscaling": {
      "$ref": "iQRlBWug1bAsbEWfesVUdfF3ZfT1tqFEe0mBVbpiZI"
    },
    "httpLoadBalancing": {
      "$ref": "iQRlBWug1bAsbEWfesVUdfF3ZfT1tqFEe0mBVbpiZI"
    },
    "istioConfig": {
      "$ref": "DiYgi7i5DHQtCQH2f4MLsEmaCS5ZbWhSGPC8RiPw"
    },
    "kalmConfig": {
      "$ref": "9qA28OI6FWc1HvhX2XPjMDkoI13JmkT0RKswsEk2Jk"
    },
    "networkPolicyConfig": {
      "$ref": "iQRlBWug1bAsbEWfesVUdfF3ZfT1tqFEe0mBVbpiZI"
    }
  },
  "type": "object",
  "nullable": true
};
const schema34 = {
  "properties": {
    "disabled": {
      "$ref": "384TuUg7xQOu4Fi6u32QopECSxjPv91aOGoUUSEznpE"
    },
    "loadBalancerType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["disabled"],
  "type": "object",
  "nullable": true
};
const schema6 = {
  "type": "boolean"
};
function validate21(data, {
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
function validate71(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.disabled === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "disabled"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.disabled !== undefined) {
      if (!validate21(data.disabled, {
        instancePath: instancePath + "/disabled",
        parentData: data,
        parentDataProperty: "disabled",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.loadBalancerType !== undefined) {
      if (!validate26(data.loadBalancerType, {
        instancePath: instancePath + "/loadBalancerType",
        parentData: data,
        parentDataProperty: "loadBalancerType",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate71.errors = vErrors;
  return errors === 0;
}
const schema7 = {
  "properties": {
    "enabled": {
      "$ref": "384TuUg7xQOu4Fi6u32QopECSxjPv91aOGoUUSEznpE"
    }
  },
  "required": ["enabled"],
  "type": "object",
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.enabled === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "enabled"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.enabled !== undefined) {
      if (!validate21(data.enabled, {
        instancePath: instancePath + "/enabled",
        parentData: data,
        parentDataProperty: "enabled",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate22.errors = vErrors;
  return errors === 0;
}
const schema8 = {
  "properties": {
    "disabled": {
      "$ref": "384TuUg7xQOu4Fi6u32QopECSxjPv91aOGoUUSEznpE"
    }
  },
  "required": ["disabled"],
  "type": "object",
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.disabled === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "disabled"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.disabled !== undefined) {
      if (!validate21(data.disabled, {
        instancePath: instancePath + "/disabled",
        parentData: data,
        parentDataProperty: "disabled",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate24.errors = vErrors;
  return errors === 0;
}
const schema35 = {
  "properties": {
    "auth": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "disabled": {
      "$ref": "384TuUg7xQOu4Fi6u32QopECSxjPv91aOGoUUSEznpE"
    }
  },
  "required": ["disabled"],
  "type": "object",
  "nullable": true
};
function validate83(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.disabled === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "disabled"
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
      if (!validate26(data.auth, {
        instancePath: instancePath + "/auth",
        parentData: data,
        parentDataProperty: "auth",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.disabled !== undefined) {
      if (!validate21(data.disabled, {
        instancePath: instancePath + "/disabled",
        parentData: data,
        parentDataProperty: "disabled",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate83.errors = vErrors;
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
    if (data.cloudrunConfig !== undefined) {
      if (!validate71(data.cloudrunConfig, {
        instancePath: instancePath + "/cloudrunConfig",
        parentData: data,
        parentDataProperty: "cloudrunConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate71.errors : vErrors.concat(validate71.errors);
        errors = vErrors.length;
      }
    }
    if (data.configConnectorConfig !== undefined) {
      if (!validate22(data.configConnectorConfig, {
        instancePath: instancePath + "/configConnectorConfig",
        parentData: data,
        parentDataProperty: "configConnectorConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.dnsCacheConfig !== undefined) {
      if (!validate22(data.dnsCacheConfig, {
        instancePath: instancePath + "/dnsCacheConfig",
        parentData: data,
        parentDataProperty: "dnsCacheConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.gcePersistentDiskCsiDriverConfig !== undefined) {
      if (!validate22(data.gcePersistentDiskCsiDriverConfig, {
        instancePath: instancePath + "/gcePersistentDiskCsiDriverConfig",
        parentData: data,
        parentDataProperty: "gcePersistentDiskCsiDriverConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.gcpFilestoreCsiDriverConfig !== undefined) {
      if (!validate22(data.gcpFilestoreCsiDriverConfig, {
        instancePath: instancePath + "/gcpFilestoreCsiDriverConfig",
        parentData: data,
        parentDataProperty: "gcpFilestoreCsiDriverConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.gcsFuseCsiDriverConfig !== undefined) {
      if (!validate22(data.gcsFuseCsiDriverConfig, {
        instancePath: instancePath + "/gcsFuseCsiDriverConfig",
        parentData: data,
        parentDataProperty: "gcsFuseCsiDriverConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.gkeBackupAgentConfig !== undefined) {
      if (!validate22(data.gkeBackupAgentConfig, {
        instancePath: instancePath + "/gkeBackupAgentConfig",
        parentData: data,
        parentDataProperty: "gkeBackupAgentConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.horizontalPodAutoscaling !== undefined) {
      if (!validate24(data.horizontalPodAutoscaling, {
        instancePath: instancePath + "/horizontalPodAutoscaling",
        parentData: data,
        parentDataProperty: "horizontalPodAutoscaling",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.httpLoadBalancing !== undefined) {
      if (!validate24(data.httpLoadBalancing, {
        instancePath: instancePath + "/httpLoadBalancing",
        parentData: data,
        parentDataProperty: "httpLoadBalancing",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.istioConfig !== undefined) {
      if (!validate83(data.istioConfig, {
        instancePath: instancePath + "/istioConfig",
        parentData: data,
        parentDataProperty: "istioConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate83.errors : vErrors.concat(validate83.errors);
        errors = vErrors.length;
      }
    }
    if (data.kalmConfig !== undefined) {
      if (!validate22(data.kalmConfig, {
        instancePath: instancePath + "/kalmConfig",
        parentData: data,
        parentDataProperty: "kalmConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.networkPolicyConfig !== undefined) {
      if (!validate24(data.networkPolicyConfig, {
        instancePath: instancePath + "/networkPolicyConfig",
        parentData: data,
        parentDataProperty: "networkPolicyConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate70.errors = vErrors;
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
const schema36 = {
  "properties": {
    "securityGroup": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["securityGroup"],
  "type": "object",
  "nullable": true
};
const schema11 = {
  "type": "string"
};
function validate28(data, {
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
  validate28.errors = vErrors;
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
    if (data.securityGroup === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "securityGroup"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.securityGroup !== undefined) {
      if (!validate28(data.securityGroup, {
        instancePath: instancePath + "/securityGroup",
        parentData: data,
        parentDataProperty: "securityGroup",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
  }
  validate91.errors = vErrors;
  return errors === 0;
}
const schema37 = {
  "properties": {
    "enabled": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "evaluationMode": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
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
    if (data.enabled !== undefined) {
      if (!validate27(data.enabled, {
        instancePath: instancePath + "/enabled",
        parentData: data,
        parentDataProperty: "enabled",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.evaluationMode !== undefined) {
      if (!validate26(data.evaluationMode, {
        instancePath: instancePath + "/evaluationMode",
        parentData: data,
        parentDataProperty: "evaluationMode",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate94.errors = vErrors;
  return errors === 0;
}
const schema38 = {
  "properties": {
    "autoProvisioningDefaults": {
      "$ref": "h3rjtwez1m8PM4uje8E31mhne17z1O8bnnyrfQsE"
    },
    "autoscalingProfile": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "enabled": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "resourceLimits": {
      "$ref": "bee5VYDSdSJr9X8BxvowlxUhVzIFj6plU5r2BvBpkw"
    }
  },
  "type": "object",
  "nullable": true
};
const schema39 = {
  "properties": {
    "bootDiskKMSKeyRef": {
      "$ref": "FqwG3fNQDV94n3ssyud4YO0vSjAbQTxNuU0XWG96Y"
    },
    "diskSize": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "imageType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "management": {
      "$ref": "TEenIxWtVVZ632sns2LVELq3nU183Qr0rzsZHTrs4"
    },
    "minCpuPlatform": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "oauthScopes": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "serviceAccountRef": {
      "$ref": "FqwG3fNQDV94n3ssyud4YO0vSjAbQTxNuU0XWG96Y"
    },
    "shieldedInstanceConfig": {
      "$ref": "2IiJOXfKdP5ZMKaaa3IiwVwDXOWy5vsPNji1ezrS90"
    },
    "upgradeSettings": {
      "$ref": "PGJwEzsJG7q07SjNR5HYWjGWEbBalGYDAvuLkO2C7rA"
    }
  },
  "type": "object",
  "nullable": true
};
const schema12 = {
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
const schema13 = {
  "not": {
    "$ref": "E3gBqlpCwbMTBUs4tUySAeMS9H0IGajx8nJUP5kbI"
  },
  "required": ["name"]
};
const schema14 = {
  "required": ["external"]
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
  const _errs0 = errors;
  const _errs1 = errors;
  if (!validate31(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
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
  validate30.errors = vErrors;
  return errors === 0;
}
const schema15 = {
  "not": {
    "$ref": "EqTqX33Du5bAJtWsgJb92GpEFPm7IzHlXlL4P70hKU"
  },
  "required": ["external"]
};
const schema16 = {
  "anyOf": [{
    "$ref": "jlDywjT39Daewt4pR8iklp0WQGiXrTvk7rSwYAnnhk"
  }, {
    "$ref": "goU1TBqg14R3DWHhRpqRdXGhPF1y45WKM1UaT0gwwP8"
  }]
};
const schema17 = {
  "required": ["name"]
};
function validate36(data, {
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
  validate36.errors = vErrors;
  return errors === 0;
}
const schema18 = {
  "required": ["namespace"]
};
function validate38(data, {
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
  validate38.errors = vErrors;
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
  const _errs0 = errors;
  let valid0 = false;
  const _errs1 = errors;
  if (!validate36(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs2 = errors;
    if (!validate38(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
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
  validate35.errors = vErrors;
  return errors === 0;
}
function validate34(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  const _errs1 = errors;
  if (!validate35(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
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
  validate34.errors = vErrors;
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
  const _errs2 = errors;
  let valid0 = false;
  let passing0 = null;
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
      if (!validate26(data.external, {
        instancePath: instancePath + "/external",
        parentData: data,
        parentDataProperty: "external",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
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
  validate29.errors = vErrors;
  return errors === 0;
}
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
const schema40 = {
  "properties": {
    "autoRepair": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "autoUpgrade": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "upgradeOptions": {
      "$ref": "R6XZeR2isfAeTTZ3arfZgPIWBc8JbvUHAPyy9ciYs"
    }
  },
  "type": "object",
  "nullable": true
};
const schema41 = {
  "items": {
    "$ref": "qXHASJ3HBTTbUz1Hiy0Dblun3UvlZFQxu5L9wy37aLs"
  },
  "type": "array",
  "nullable": true
};
const schema42 = {
  "properties": {
    "autoUpgradeStartTime": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object"
};
function validate107(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.autoUpgradeStartTime !== undefined) {
      if (!validate26(data.autoUpgradeStartTime, {
        instancePath: instancePath + "/autoUpgradeStartTime",
        parentData: data,
        parentDataProperty: "autoUpgradeStartTime",
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
  validate107.errors = vErrors;
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
      if (!validate107(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate107.errors : vErrors.concat(validate107.errors);
        errors = vErrors.length;
      }
    }
  }
  validate106.errors = vErrors;
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.autoRepair !== undefined) {
      if (!validate27(data.autoRepair, {
        instancePath: instancePath + "/autoRepair",
        parentData: data,
        parentDataProperty: "autoRepair",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.autoUpgrade !== undefined) {
      if (!validate27(data.autoUpgrade, {
        instancePath: instancePath + "/autoUpgrade",
        parentData: data,
        parentDataProperty: "autoUpgrade",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.upgradeOptions !== undefined) {
      if (!validate106(data.upgradeOptions, {
        instancePath: instancePath + "/upgradeOptions",
        parentData: data,
        parentDataProperty: "upgradeOptions",
        rootData
      })) {
        vErrors = vErrors === null ? validate106.errors : vErrors.concat(validate106.errors);
        errors = vErrors.length;
      }
    }
  }
  validate103.errors = vErrors;
  return errors === 0;
}
const schema21 = {
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "array",
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
      if (!validate28(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
  }
  validate48.errors = vErrors;
  return errors === 0;
}
const schema25 = {
  "properties": {
    "enableIntegrityMonitoring": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "enableSecureBoot": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "type": "object",
  "nullable": true
};
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
    if (data.enableIntegrityMonitoring !== undefined) {
      if (!validate27(data.enableIntegrityMonitoring, {
        instancePath: instancePath + "/enableIntegrityMonitoring",
        parentData: data,
        parentDataProperty: "enableIntegrityMonitoring",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.enableSecureBoot !== undefined) {
      if (!validate27(data.enableSecureBoot, {
        instancePath: instancePath + "/enableSecureBoot",
        parentData: data,
        parentDataProperty: "enableSecureBoot",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
  }
  validate55.errors = vErrors;
  return errors === 0;
}
const schema43 = {
  "properties": {
    "blueGreenSettings": {
      "$ref": "h8UGViaitzQvDVH6VVATHpgP0pyNjYrFi5B3gTKdU"
    },
    "maxSurge": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "maxUnavailable": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "strategy": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema44 = {
  "properties": {
    "nodePoolSoakDuration": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "standardRolloutPolicy": {
      "$ref": "AKGxnoZPswO0c6rf6wZhHE8Ljd1lrnw46NkebyZq5g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema45 = {
  "properties": {
    "batchNodeCount": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "batchPercentage": {
      "$ref": "DMczxSNSR8pjVgy7OLeXTXNA9WNHkvwzzrXJRkVMkA"
    },
    "batchSoakDuration": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema46 = {
  "type": "number",
  "nullable": true
};
function validate121(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(typeof data == "number" && isFinite(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "number"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate121.errors = vErrors;
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.batchNodeCount !== undefined) {
      if (!validate45(data.batchNodeCount, {
        instancePath: instancePath + "/batchNodeCount",
        parentData: data,
        parentDataProperty: "batchNodeCount",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.batchPercentage !== undefined) {
      if (!validate121(data.batchPercentage, {
        instancePath: instancePath + "/batchPercentage",
        parentData: data,
        parentDataProperty: "batchPercentage",
        rootData
      })) {
        vErrors = vErrors === null ? validate121.errors : vErrors.concat(validate121.errors);
        errors = vErrors.length;
      }
    }
    if (data.batchSoakDuration !== undefined) {
      if (!validate26(data.batchSoakDuration, {
        instancePath: instancePath + "/batchSoakDuration",
        parentData: data,
        parentDataProperty: "batchSoakDuration",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate119.errors = vErrors;
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
    if (data.nodePoolSoakDuration !== undefined) {
      if (!validate26(data.nodePoolSoakDuration, {
        instancePath: instancePath + "/nodePoolSoakDuration",
        parentData: data,
        parentDataProperty: "nodePoolSoakDuration",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.standardRolloutPolicy !== undefined) {
      if (!validate119(data.standardRolloutPolicy, {
        instancePath: instancePath + "/standardRolloutPolicy",
        parentData: data,
        parentDataProperty: "standardRolloutPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate119.errors : vErrors.concat(validate119.errors);
        errors = vErrors.length;
      }
    }
  }
  validate117.errors = vErrors;
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
    if (data.blueGreenSettings !== undefined) {
      if (!validate117(data.blueGreenSettings, {
        instancePath: instancePath + "/blueGreenSettings",
        parentData: data,
        parentDataProperty: "blueGreenSettings",
        rootData
      })) {
        vErrors = vErrors === null ? validate117.errors : vErrors.concat(validate117.errors);
        errors = vErrors.length;
      }
    }
    if (data.maxSurge !== undefined) {
      if (!validate45(data.maxSurge, {
        instancePath: instancePath + "/maxSurge",
        parentData: data,
        parentDataProperty: "maxSurge",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.maxUnavailable !== undefined) {
      if (!validate45(data.maxUnavailable, {
        instancePath: instancePath + "/maxUnavailable",
        parentData: data,
        parentDataProperty: "maxUnavailable",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.strategy !== undefined) {
      if (!validate26(data.strategy, {
        instancePath: instancePath + "/strategy",
        parentData: data,
        parentDataProperty: "strategy",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate116.errors = vErrors;
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.bootDiskKMSKeyRef !== undefined) {
      if (!validate29(data.bootDiskKMSKeyRef, {
        instancePath: instancePath + "/bootDiskKMSKeyRef",
        parentData: data,
        parentDataProperty: "bootDiskKMSKeyRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.diskSize !== undefined) {
      if (!validate45(data.diskSize, {
        instancePath: instancePath + "/diskSize",
        parentData: data,
        parentDataProperty: "diskSize",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.imageType !== undefined) {
      if (!validate26(data.imageType, {
        instancePath: instancePath + "/imageType",
        parentData: data,
        parentDataProperty: "imageType",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.management !== undefined) {
      if (!validate103(data.management, {
        instancePath: instancePath + "/management",
        parentData: data,
        parentDataProperty: "management",
        rootData
      })) {
        vErrors = vErrors === null ? validate103.errors : vErrors.concat(validate103.errors);
        errors = vErrors.length;
      }
    }
    if (data.minCpuPlatform !== undefined) {
      if (!validate26(data.minCpuPlatform, {
        instancePath: instancePath + "/minCpuPlatform",
        parentData: data,
        parentDataProperty: "minCpuPlatform",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.oauthScopes !== undefined) {
      if (!validate48(data.oauthScopes, {
        instancePath: instancePath + "/oauthScopes",
        parentData: data,
        parentDataProperty: "oauthScopes",
        rootData
      })) {
        vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAccountRef !== undefined) {
      if (!validate29(data.serviceAccountRef, {
        instancePath: instancePath + "/serviceAccountRef",
        parentData: data,
        parentDataProperty: "serviceAccountRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.shieldedInstanceConfig !== undefined) {
      if (!validate55(data.shieldedInstanceConfig, {
        instancePath: instancePath + "/shieldedInstanceConfig",
        parentData: data,
        parentDataProperty: "shieldedInstanceConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
    if (data.upgradeSettings !== undefined) {
      if (!validate116(data.upgradeSettings, {
        instancePath: instancePath + "/upgradeSettings",
        parentData: data,
        parentDataProperty: "upgradeSettings",
        rootData
      })) {
        vErrors = vErrors === null ? validate116.errors : vErrors.concat(validate116.errors);
        errors = vErrors.length;
      }
    }
  }
  validate99.errors = vErrors;
  return errors === 0;
}
const schema47 = {
  "items": {
    "$ref": "WXtZxPvo1CTahxpxEsQUg8Q7aHsY7K2ZuZB8Kh6zRE"
  },
  "type": "array",
  "nullable": true
};
const schema48 = {
  "properties": {
    "maximum": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "minimum": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "resourceType": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["resourceType"],
  "type": "object"
};
function validate134(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.resourceType === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "resourceType"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.maximum !== undefined) {
      if (!validate45(data.maximum, {
        instancePath: instancePath + "/maximum",
        parentData: data,
        parentDataProperty: "maximum",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.minimum !== undefined) {
      if (!validate45(data.minimum, {
        instancePath: instancePath + "/minimum",
        parentData: data,
        parentDataProperty: "minimum",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.resourceType !== undefined) {
      if (!validate28(data.resourceType, {
        instancePath: instancePath + "/resourceType",
        parentData: data,
        parentDataProperty: "resourceType",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
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
    if (data.autoProvisioningDefaults !== undefined) {
      if (!validate99(data.autoProvisioningDefaults, {
        instancePath: instancePath + "/autoProvisioningDefaults",
        parentData: data,
        parentDataProperty: "autoProvisioningDefaults",
        rootData
      })) {
        vErrors = vErrors === null ? validate99.errors : vErrors.concat(validate99.errors);
        errors = vErrors.length;
      }
    }
    if (data.autoscalingProfile !== undefined) {
      if (!validate26(data.autoscalingProfile, {
        instancePath: instancePath + "/autoscalingProfile",
        parentData: data,
        parentDataProperty: "autoscalingProfile",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.enabled !== undefined) {
      if (!validate27(data.enabled, {
        instancePath: instancePath + "/enabled",
        parentData: data,
        parentDataProperty: "enabled",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.resourceLimits !== undefined) {
      if (!validate133(data.resourceLimits, {
        instancePath: instancePath + "/resourceLimits",
        parentData: data,
        parentDataProperty: "resourceLimits",
        rootData
      })) {
        vErrors = vErrors === null ? validate133.errors : vErrors.concat(validate133.errors);
        errors = vErrors.length;
      }
    }
  }
  validate98.errors = vErrors;
  return errors === 0;
}
const schema49 = {
  "properties": {
    "type": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["type"],
  "type": "object",
  "nullable": true
};
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
    if (data.type !== undefined) {
      if (!validate28(data.type, {
        instancePath: instancePath + "/type",
        parentData: data,
        parentDataProperty: "type",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
  }
  validate142.errors = vErrors;
  return errors === 0;
}
const schema50 = {
  "properties": {
    "keyName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "state": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["state"],
  "type": "object",
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.state === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "state"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.keyName !== undefined) {
      if (!validate26(data.keyName, {
        instancePath: instancePath + "/keyName",
        parentData: data,
        parentDataProperty: "keyName",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.state !== undefined) {
      if (!validate28(data.state, {
        instancePath: instancePath + "/state",
        parentData: data,
        parentDataProperty: "state",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
  }
  validate147.errors = vErrors;
  return errors === 0;
}
const schema51 = {
  "properties": {
    "clusterDns": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "clusterDnsDomain": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "clusterDnsScope": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
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
    if (data.clusterDns !== undefined) {
      if (!validate26(data.clusterDns, {
        instancePath: instancePath + "/clusterDns",
        parentData: data,
        parentDataProperty: "clusterDns",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.clusterDnsDomain !== undefined) {
      if (!validate26(data.clusterDnsDomain, {
        instancePath: instancePath + "/clusterDnsDomain",
        parentData: data,
        parentDataProperty: "clusterDnsDomain",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.clusterDnsScope !== undefined) {
      if (!validate26(data.clusterDnsScope, {
        instancePath: instancePath + "/clusterDnsScope",
        parentData: data,
        parentDataProperty: "clusterDnsScope",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate154.errors = vErrors;
  return errors === 0;
}
const schema52 = {
  "properties": {
    "enabledApis": {
      "$ref": "YwrI9eYeYzQIcdsUXH7isPYE3sgVab9JvcdpSK4GQ"
    }
  },
  "required": ["enabledApis"],
  "type": "object",
  "nullable": true
};
const schema20 = {
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "array"
};
function validate46(data, {
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
      if (!validate28(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
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
  validate46.errors = vErrors;
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
    if (data.enabledApis === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "enabledApis"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.enabledApis !== undefined) {
      if (!validate46(data.enabledApis, {
        instancePath: instancePath + "/enabledApis",
        parentData: data,
        parentDataProperty: "enabledApis",
        rootData
      })) {
        vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
        errors = vErrors.length;
      }
    }
  }
  validate163.errors = vErrors;
  return errors === 0;
}
const schema26 = {
  "properties": {
    "channel": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["channel"],
  "type": "object",
  "nullable": true
};
function validate58(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.channel === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "channel"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.channel !== undefined) {
      if (!validate28(data.channel, {
        instancePath: instancePath + "/channel",
        parentData: data,
        parentDataProperty: "channel",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
  }
  validate58.errors = vErrors;
  return errors === 0;
}
const schema53 = {
  "properties": {
    "enabled": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "type": "object",
  "nullable": true
};
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
    if (data.enabled !== undefined) {
      if (!validate27(data.enabled, {
        instancePath: instancePath + "/enabled",
        parentData: data,
        parentDataProperty: "enabled",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
  }
  validate173.errors = vErrors;
  return errors === 0;
}
const schema54 = {
  "properties": {
    "additionalPodRangesConfig": {
      "$ref": "cY9h1GTjC0bahyHI7u5Sqh7xpswZIPBkQGMt6zjFFg"
    },
    "clusterIpv4CidrBlock": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "clusterSecondaryRangeName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "podCidrOverprovisionConfig": {
      "$ref": "iQRlBWug1bAsbEWfesVUdfF3ZfT1tqFEe0mBVbpiZI"
    },
    "servicesIpv4CidrBlock": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "servicesSecondaryRangeName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "stackType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema55 = {
  "properties": {
    "podRangeNames": {
      "$ref": "YwrI9eYeYzQIcdsUXH7isPYE3sgVab9JvcdpSK4GQ"
    }
  },
  "required": ["podRangeNames"],
  "type": "object",
  "nullable": true
};
function validate178(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.podRangeNames === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "podRangeNames"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.podRangeNames !== undefined) {
      if (!validate46(data.podRangeNames, {
        instancePath: instancePath + "/podRangeNames",
        parentData: data,
        parentDataProperty: "podRangeNames",
        rootData
      })) {
        vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
        errors = vErrors.length;
      }
    }
  }
  validate178.errors = vErrors;
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
    if (data.additionalPodRangesConfig !== undefined) {
      if (!validate178(data.additionalPodRangesConfig, {
        instancePath: instancePath + "/additionalPodRangesConfig",
        parentData: data,
        parentDataProperty: "additionalPodRangesConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate178.errors : vErrors.concat(validate178.errors);
        errors = vErrors.length;
      }
    }
    if (data.clusterIpv4CidrBlock !== undefined) {
      if (!validate26(data.clusterIpv4CidrBlock, {
        instancePath: instancePath + "/clusterIpv4CidrBlock",
        parentData: data,
        parentDataProperty: "clusterIpv4CidrBlock",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.clusterSecondaryRangeName !== undefined) {
      if (!validate26(data.clusterSecondaryRangeName, {
        instancePath: instancePath + "/clusterSecondaryRangeName",
        parentData: data,
        parentDataProperty: "clusterSecondaryRangeName",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.podCidrOverprovisionConfig !== undefined) {
      if (!validate24(data.podCidrOverprovisionConfig, {
        instancePath: instancePath + "/podCidrOverprovisionConfig",
        parentData: data,
        parentDataProperty: "podCidrOverprovisionConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.servicesIpv4CidrBlock !== undefined) {
      if (!validate26(data.servicesIpv4CidrBlock, {
        instancePath: instancePath + "/servicesIpv4CidrBlock",
        parentData: data,
        parentDataProperty: "servicesIpv4CidrBlock",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.servicesSecondaryRangeName !== undefined) {
      if (!validate26(data.servicesSecondaryRangeName, {
        instancePath: instancePath + "/servicesSecondaryRangeName",
        parentData: data,
        parentDataProperty: "servicesSecondaryRangeName",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.stackType !== undefined) {
      if (!validate26(data.stackType, {
        instancePath: instancePath + "/stackType",
        parentData: data,
        parentDataProperty: "stackType",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate177.errors = vErrors;
  return errors === 0;
}
const schema56 = {
  "properties": {
    "enableComponents": {
      "$ref": "YwrI9eYeYzQIcdsUXH7isPYE3sgVab9JvcdpSK4GQ"
    }
  },
  "required": ["enableComponents"],
  "type": "object",
  "nullable": true
};
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
    if (data.enableComponents === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "enableComponents"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.enableComponents !== undefined) {
      if (!validate46(data.enableComponents, {
        instancePath: instancePath + "/enableComponents",
        parentData: data,
        parentDataProperty: "enableComponents",
        rootData
      })) {
        vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
        errors = vErrors.length;
      }
    }
  }
  validate189.errors = vErrors;
  return errors === 0;
}
const schema57 = {
  "properties": {
    "dailyMaintenanceWindow": {
      "$ref": "jtenne89Y6qVwzL6tAv1zXkHkXUjL3iA29V2DhNHl4"
    },
    "maintenanceExclusion": {
      "$ref": "Da4mF92QxzzIoNtbbGkeHICzEPOtvyXwHreIaPww"
    },
    "recurringWindow": {
      "$ref": "ApulW4jU7iRt2tikKqtTShLxUzZ1HlyyJFUIr96CsU"
    }
  },
  "type": "object",
  "nullable": true
};
const schema58 = {
  "properties": {
    "duration": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "startTime": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["startTime"],
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
    if (data.startTime === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "startTime"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.duration !== undefined) {
      if (!validate26(data.duration, {
        instancePath: instancePath + "/duration",
        parentData: data,
        parentDataProperty: "duration",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.startTime !== undefined) {
      if (!validate28(data.startTime, {
        instancePath: instancePath + "/startTime",
        parentData: data,
        parentDataProperty: "startTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
  }
  validate194.errors = vErrors;
  return errors === 0;
}
const schema59 = {
  "items": {
    "$ref": "buP1yVMZuUTbdcNEP6E19VjGU3TKSdhNLzqfFwMCogM"
  },
  "type": "array",
  "nullable": true
};
const schema60 = {
  "properties": {
    "endTime": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "exclusionName": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "exclusionOptions": {
      "$ref": "eCnrNWdEbVuM9h0xG0xlzmWMysh5FJSrQpX8diKMjU"
    },
    "startTime": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["endTime", "exclusionName", "startTime"],
  "type": "object"
};
const schema61 = {
  "properties": {
    "scope": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["scope"],
  "type": "object",
  "nullable": true
};
function validate202(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.scope === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "scope"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.scope !== undefined) {
      if (!validate28(data.scope, {
        instancePath: instancePath + "/scope",
        parentData: data,
        parentDataProperty: "scope",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
  }
  validate202.errors = vErrors;
  return errors === 0;
}
function validate199(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.endTime === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "endTime"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.exclusionName === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "exclusionName"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.startTime === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "startTime"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.endTime !== undefined) {
      if (!validate28(data.endTime, {
        instancePath: instancePath + "/endTime",
        parentData: data,
        parentDataProperty: "endTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.exclusionName !== undefined) {
      if (!validate28(data.exclusionName, {
        instancePath: instancePath + "/exclusionName",
        parentData: data,
        parentDataProperty: "exclusionName",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.exclusionOptions !== undefined) {
      if (!validate202(data.exclusionOptions, {
        instancePath: instancePath + "/exclusionOptions",
        parentData: data,
        parentDataProperty: "exclusionOptions",
        rootData
      })) {
        vErrors = vErrors === null ? validate202.errors : vErrors.concat(validate202.errors);
        errors = vErrors.length;
      }
    }
    if (data.startTime !== undefined) {
      if (!validate28(data.startTime, {
        instancePath: instancePath + "/startTime",
        parentData: data,
        parentDataProperty: "startTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
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
  validate199.errors = vErrors;
  return errors === 0;
}
function validate198(data, {
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
      if (!validate199(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate199.errors : vErrors.concat(validate199.errors);
        errors = vErrors.length;
      }
    }
  }
  validate198.errors = vErrors;
  return errors === 0;
}
const schema62 = {
  "properties": {
    "endTime": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "recurrence": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "startTime": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["endTime", "recurrence", "startTime"],
  "type": "object",
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.endTime === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "endTime"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.recurrence === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "recurrence"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.startTime === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "startTime"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.endTime !== undefined) {
      if (!validate28(data.endTime, {
        instancePath: instancePath + "/endTime",
        parentData: data,
        parentDataProperty: "endTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.recurrence !== undefined) {
      if (!validate28(data.recurrence, {
        instancePath: instancePath + "/recurrence",
        parentData: data,
        parentDataProperty: "recurrence",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.startTime !== undefined) {
      if (!validate28(data.startTime, {
        instancePath: instancePath + "/startTime",
        parentData: data,
        parentDataProperty: "startTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
  }
  validate208.errors = vErrors;
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
    if (data.dailyMaintenanceWindow !== undefined) {
      if (!validate194(data.dailyMaintenanceWindow, {
        instancePath: instancePath + "/dailyMaintenanceWindow",
        parentData: data,
        parentDataProperty: "dailyMaintenanceWindow",
        rootData
      })) {
        vErrors = vErrors === null ? validate194.errors : vErrors.concat(validate194.errors);
        errors = vErrors.length;
      }
    }
    if (data.maintenanceExclusion !== undefined) {
      if (!validate198(data.maintenanceExclusion, {
        instancePath: instancePath + "/maintenanceExclusion",
        parentData: data,
        parentDataProperty: "maintenanceExclusion",
        rootData
      })) {
        vErrors = vErrors === null ? validate198.errors : vErrors.concat(validate198.errors);
        errors = vErrors.length;
      }
    }
    if (data.recurringWindow !== undefined) {
      if (!validate208(data.recurringWindow, {
        instancePath: instancePath + "/recurringWindow",
        parentData: data,
        parentDataProperty: "recurringWindow",
        rootData
      })) {
        vErrors = vErrors === null ? validate208.errors : vErrors.concat(validate208.errors);
        errors = vErrors.length;
      }
    }
  }
  validate193.errors = vErrors;
  return errors === 0;
}
const schema63 = {
  "properties": {
    "clientCertificate": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "clientCertificateConfig": {
      "$ref": "47uWXNykitrQBA4Vyzp9CQ2xpLLgoorD8CzJMpBQpw"
    },
    "clientKey": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "clusterCaCertificate": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "password": {
      "$ref": "o843wWct6qJDQ275htXH3DELBOIRXb3VQeAjOfOuFg"
    },
    "username": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema64 = {
  "properties": {
    "issueClientCertificate": {
      "$ref": "384TuUg7xQOu4Fi6u32QopECSxjPv91aOGoUUSEznpE"
    }
  },
  "required": ["issueClientCertificate"],
  "type": "object",
  "nullable": true
};
function validate216(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.issueClientCertificate === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "issueClientCertificate"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.issueClientCertificate !== undefined) {
      if (!validate21(data.issueClientCertificate, {
        instancePath: instancePath + "/issueClientCertificate",
        parentData: data,
        parentDataProperty: "issueClientCertificate",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate216.errors = vErrors;
  return errors === 0;
}
const schema65 = {
  "oneOf": [{
    "$ref": "y6PN8gVHfEZ6jsXWIn0pVo2LxQH7CFRHanTEgGtunA"
  }, {
    "$ref": "WaVatAmr8bqFTYj0sK7XtV1gwZkMLDnFsccECRrES8"
  }],
  "properties": {
    "value": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "valueFrom": {
      "$ref": "6mvPC5Nyidd0fCwEjYcI4xH5gKhv4FA4wCtAu8"
    }
  },
  "type": "object",
  "nullable": true
};
const schema66 = {
  "not": {
    "$ref": "CzpYtdrwpVAFAjFunjP7FkNFWt0dhlJpLhu02tylVbo"
  },
  "required": ["value"]
};
const schema67 = {
  "required": ["valueFrom"]
};
function validate223(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.valueFrom === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "valueFrom"
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
  validate223.errors = vErrors;
  return errors === 0;
}
function validate222(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  const _errs1 = errors;
  if (!validate223(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate223.errors : vErrors.concat(validate223.errors);
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
  }
  validate222.errors = vErrors;
  return errors === 0;
}
const schema68 = {
  "not": {
    "$ref": "Y0cIDfPHAgjaZI49WEaaUuRheqpj0Xe40Jl68G8"
  },
  "required": ["valueFrom"]
};
const schema69 = {
  "required": ["value"]
};
function validate227(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.value === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "value"
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
  validate227.errors = vErrors;
  return errors === 0;
}
function validate226(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  const _errs1 = errors;
  if (!validate227(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate227.errors : vErrors.concat(validate227.errors);
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
    if (data.valueFrom === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "valueFrom"
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
  validate226.errors = vErrors;
  return errors === 0;
}
const schema70 = {
  "properties": {
    "secretKeyRef": {
      "$ref": "iJyABPw0JJagTCVwRpG4O9k0XE3vwONCE2Kju14xc"
    }
  },
  "type": "object",
  "nullable": true
};
const schema71 = {
  "properties": {
    "key": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["name", "key"],
  "type": "object",
  "nullable": true
};
function validate232(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
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
    if (data.key === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "key"
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
      if (!validate28(data.key, {
        instancePath: instancePath + "/key",
        parentData: data,
        parentDataProperty: "key",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate28(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
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
    if (data.secretKeyRef !== undefined) {
      if (!validate232(data.secretKeyRef, {
        instancePath: instancePath + "/secretKeyRef",
        parentData: data,
        parentDataProperty: "secretKeyRef",
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
function validate221(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
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
  if (!validate222(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate222.errors : vErrors.concat(validate222.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs3 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
  }
  const _errs4 = errors;
  if (!validate226(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate226.errors : vErrors.concat(validate226.errors);
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
      if (!validate231(data.valueFrom, {
        instancePath: instancePath + "/valueFrom",
        parentData: data,
        parentDataProperty: "valueFrom",
        rootData
      })) {
        vErrors = vErrors === null ? validate231.errors : vErrors.concat(validate231.errors);
        errors = vErrors.length;
      }
    }
  }
  validate221.errors = vErrors;
  return errors === 0;
}
function validate214(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.clientCertificate !== undefined) {
      if (!validate26(data.clientCertificate, {
        instancePath: instancePath + "/clientCertificate",
        parentData: data,
        parentDataProperty: "clientCertificate",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.clientCertificateConfig !== undefined) {
      if (!validate216(data.clientCertificateConfig, {
        instancePath: instancePath + "/clientCertificateConfig",
        parentData: data,
        parentDataProperty: "clientCertificateConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate216.errors : vErrors.concat(validate216.errors);
        errors = vErrors.length;
      }
    }
    if (data.clientKey !== undefined) {
      if (!validate26(data.clientKey, {
        instancePath: instancePath + "/clientKey",
        parentData: data,
        parentDataProperty: "clientKey",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.clusterCaCertificate !== undefined) {
      if (!validate26(data.clusterCaCertificate, {
        instancePath: instancePath + "/clusterCaCertificate",
        parentData: data,
        parentDataProperty: "clusterCaCertificate",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.password !== undefined) {
      if (!validate221(data.password, {
        instancePath: instancePath + "/password",
        parentData: data,
        parentDataProperty: "password",
        rootData
      })) {
        vErrors = vErrors === null ? validate221.errors : vErrors.concat(validate221.errors);
        errors = vErrors.length;
      }
    }
    if (data.username !== undefined) {
      if (!validate26(data.username, {
        instancePath: instancePath + "/username",
        parentData: data,
        parentDataProperty: "username",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate214.errors = vErrors;
  return errors === 0;
}
const schema72 = {
  "properties": {
    "cidrBlocks": {
      "$ref": "EHT4vNND4ZlZ1VKD9CAKCCAHfQRH7L2rkYNO4wUXY"
    },
    "gcpPublicCidrsAccessEnabled": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "type": "object",
  "nullable": true
};
const schema73 = {
  "items": {
    "$ref": "U0AGZ7dIHOLU1Ygaf6RWEuAW4t6B1noFtlCJooB3s"
  },
  "type": "array",
  "nullable": true
};
const schema74 = {
  "properties": {
    "cidrBlock": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "displayName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["cidrBlock"],
  "type": "object"
};
function validate242(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.cidrBlock === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "cidrBlock"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.cidrBlock !== undefined) {
      if (!validate28(data.cidrBlock, {
        instancePath: instancePath + "/cidrBlock",
        parentData: data,
        parentDataProperty: "cidrBlock",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.displayName !== undefined) {
      if (!validate26(data.displayName, {
        instancePath: instancePath + "/displayName",
        parentData: data,
        parentDataProperty: "displayName",
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
  validate242.errors = vErrors;
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
      if (!validate242(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate242.errors : vErrors.concat(validate242.errors);
        errors = vErrors.length;
      }
    }
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.cidrBlocks !== undefined) {
      if (!validate241(data.cidrBlocks, {
        instancePath: instancePath + "/cidrBlocks",
        parentData: data,
        parentDataProperty: "cidrBlocks",
        rootData
      })) {
        vErrors = vErrors === null ? validate241.errors : vErrors.concat(validate241.errors);
        errors = vErrors.length;
      }
    }
    if (data.gcpPublicCidrsAccessEnabled !== undefined) {
      if (!validate27(data.gcpPublicCidrsAccessEnabled, {
        instancePath: instancePath + "/gcpPublicCidrsAccessEnabled",
        parentData: data,
        parentDataProperty: "gcpPublicCidrsAccessEnabled",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
  }
  validate240.errors = vErrors;
  return errors === 0;
}
const schema75 = {
  "properties": {
    "enableCertificates": {
      "$ref": "384TuUg7xQOu4Fi6u32QopECSxjPv91aOGoUUSEznpE"
    }
  },
  "required": ["enableCertificates"],
  "type": "object",
  "nullable": true
};
function validate249(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.enableCertificates === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "enableCertificates"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.enableCertificates !== undefined) {
      if (!validate21(data.enableCertificates, {
        instancePath: instancePath + "/enableCertificates",
        parentData: data,
        parentDataProperty: "enableCertificates",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate249.errors = vErrors;
  return errors === 0;
}
const schema76 = {
  "properties": {
    "advancedDatapathObservabilityConfig": {
      "$ref": "i3usRT4G4uM2OuQVLWcUPHnHahseWlCcadlbn9fwa8"
    },
    "enableComponents": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "managedPrometheus": {
      "$ref": "9qA28OI6FWc1HvhX2XPjMDkoI13JmkT0RKswsEk2Jk"
    }
  },
  "type": "object",
  "nullable": true
};
const schema77 = {
  "items": {
    "$ref": "fPlRsmaeaVJTzKZSo46qd6sUlhXrH0Zd71G4qLH7r4"
  },
  "type": "array",
  "nullable": true
};
const schema78 = {
  "properties": {
    "enableMetrics": {
      "$ref": "384TuUg7xQOu4Fi6u32QopECSxjPv91aOGoUUSEznpE"
    },
    "relayMode": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["enableMetrics"],
  "type": "object"
};
function validate255(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.enableMetrics === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "enableMetrics"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.enableMetrics !== undefined) {
      if (!validate21(data.enableMetrics, {
        instancePath: instancePath + "/enableMetrics",
        parentData: data,
        parentDataProperty: "enableMetrics",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.relayMode !== undefined) {
      if (!validate26(data.relayMode, {
        instancePath: instancePath + "/relayMode",
        parentData: data,
        parentDataProperty: "relayMode",
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
  validate255.errors = vErrors;
  return errors === 0;
}
function validate254(data, {
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
      if (!validate255(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate255.errors : vErrors.concat(validate255.errors);
        errors = vErrors.length;
      }
    }
  }
  validate254.errors = vErrors;
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
    if (data.advancedDatapathObservabilityConfig !== undefined) {
      if (!validate254(data.advancedDatapathObservabilityConfig, {
        instancePath: instancePath + "/advancedDatapathObservabilityConfig",
        parentData: data,
        parentDataProperty: "advancedDatapathObservabilityConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate254.errors : vErrors.concat(validate254.errors);
        errors = vErrors.length;
      }
    }
    if (data.enableComponents !== undefined) {
      if (!validate48(data.enableComponents, {
        instancePath: instancePath + "/enableComponents",
        parentData: data,
        parentDataProperty: "enableComponents",
        rootData
      })) {
        vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
        errors = vErrors.length;
      }
    }
    if (data.managedPrometheus !== undefined) {
      if (!validate22(data.managedPrometheus, {
        instancePath: instancePath + "/managedPrometheus",
        parentData: data,
        parentDataProperty: "managedPrometheus",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate253.errors = vErrors;
  return errors === 0;
}
const schema79 = {
  "properties": {
    "enabled": {
      "$ref": "384TuUg7xQOu4Fi6u32QopECSxjPv91aOGoUUSEznpE"
    },
    "provider": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "required": ["enabled"],
  "type": "object",
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.enabled === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "enabled"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.enabled !== undefined) {
      if (!validate21(data.enabled, {
        instancePath: instancePath + "/enabled",
        parentData: data,
        parentDataProperty: "enabled",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.provider !== undefined) {
      if (!validate26(data.provider, {
        instancePath: instancePath + "/provider",
        parentData: data,
        parentDataProperty: "provider",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate264.errors = vErrors;
  return errors === 0;
}
const schema80 = {
  "properties": {
    "advancedMachineFeatures": {
      "$ref": "m2TG4s94Bs5jcuvFtb4b8E9oZjZEPYZuFrzbofYUyc"
    },
    "bootDiskKMSCryptoKeyRef": {
      "$ref": "FqwG3fNQDV94n3ssyud4YO0vSjAbQTxNuU0XWG96Y"
    },
    "confidentialNodes": {
      "$ref": "9qA28OI6FWc1HvhX2XPjMDkoI13JmkT0RKswsEk2Jk"
    },
    "diskSizeGb": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "diskType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "ephemeralStorageConfig": {
      "$ref": "VF6wuOwQymLGr4sZz4uyRkSKzDq9MbILAoQ73Uhc0YA"
    },
    "ephemeralStorageLocalSsdConfig": {
      "$ref": "VF6wuOwQymLGr4sZz4uyRkSKzDq9MbILAoQ73Uhc0YA"
    },
    "fastSocket": {
      "$ref": "9qA28OI6FWc1HvhX2XPjMDkoI13JmkT0RKswsEk2Jk"
    },
    "gcfsConfig": {
      "$ref": "9qA28OI6FWc1HvhX2XPjMDkoI13JmkT0RKswsEk2Jk"
    },
    "guestAccelerator": {
      "$ref": "bzrXtoSbgkgdcdmQv5tyTIWMNLnN4YA6ShOCOw3Q"
    },
    "gvnic": {
      "$ref": "9qA28OI6FWc1HvhX2XPjMDkoI13JmkT0RKswsEk2Jk"
    },
    "hostMaintenancePolicy": {
      "$ref": "Y7855QTEl0rj2NBYlD3LYjw0K5WgTc67B1Gi55t1FA"
    },
    "imageType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "kubeletConfig": {
      "$ref": "LF3F1JQzEk0ZEHPcwbBnKpqAr59TrXbIiUOG4YsYNio"
    },
    "labels": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "linuxNodeConfig": {
      "$ref": "Y05TKA5Qptg02B5sxLSPNPyyKQL5Ihee5dSy8jyVFI"
    },
    "localNvmeSsdBlockConfig": {
      "$ref": "VF6wuOwQymLGr4sZz4uyRkSKzDq9MbILAoQ73Uhc0YA"
    },
    "localSsdCount": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "loggingVariant": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "machineType": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "metadata": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "minCpuPlatform": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "nodeGroupRef": {
      "$ref": "FqwG3fNQDV94n3ssyud4YO0vSjAbQTxNuU0XWG96Y"
    },
    "oauthScopes": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "preemptible": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "reservationAffinity": {
      "$ref": "UlxHWbiqaJekn0HEFgZW42i7sG59CvfQWhrvc4SHxo8"
    },
    "resourceLabels": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "sandboxConfig": {
      "$ref": "dbgSxAv7n9C2bnyqzQCDsBO5WNECf1vyC6sDnLhVFY"
    },
    "serviceAccountRef": {
      "$ref": "FqwG3fNQDV94n3ssyud4YO0vSjAbQTxNuU0XWG96Y"
    },
    "shieldedInstanceConfig": {
      "$ref": "2IiJOXfKdP5ZMKaaa3IiwVwDXOWy5vsPNji1ezrS90"
    },
    "soleTenantConfig": {
      "$ref": "1dwJ0r9GzpDqCysZU5aE3dM1JUn6O16xQicB2z1Kg"
    },
    "spot": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "tags": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "taint": {
      "$ref": "TgBj7TFDuWhkoHJ8GQ4T1B8YQk0R6R45dDLt35E"
    },
    "workloadMetadataConfig": {
      "$ref": "KZ6vxqFAkuvoKzAgssqpdYlJbkFwE4agHgkqB7XS8U"
    }
  },
  "type": "object",
  "nullable": true
};
const schema81 = {
  "properties": {
    "threadsPerCore": {
      "$ref": "vMERCWCezVsdN7cIwlJvWJTP5QRRevuFDHNM3fdV8Q"
    }
  },
  "required": ["threadsPerCore"],
  "type": "object",
  "nullable": true
};
const schema22 = {
  "type": "integer"
};
function validate50(data, {
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
  validate50.errors = vErrors;
  return errors === 0;
}
function validate271(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.threadsPerCore === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "threadsPerCore"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.threadsPerCore !== undefined) {
      if (!validate50(data.threadsPerCore, {
        instancePath: instancePath + "/threadsPerCore",
        parentData: data,
        parentDataProperty: "threadsPerCore",
        rootData
      })) {
        vErrors = vErrors === null ? validate50.errors : vErrors.concat(validate50.errors);
        errors = vErrors.length;
      }
    }
  }
  validate271.errors = vErrors;
  return errors === 0;
}
const schema23 = {
  "properties": {
    "localSsdCount": {
      "$ref": "vMERCWCezVsdN7cIwlJvWJTP5QRRevuFDHNM3fdV8Q"
    }
  },
  "required": ["localSsdCount"],
  "type": "object",
  "nullable": true
};
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
    if (data.localSsdCount === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "localSsdCount"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.localSsdCount !== undefined) {
      if (!validate50(data.localSsdCount, {
        instancePath: instancePath + "/localSsdCount",
        parentData: data,
        parentDataProperty: "localSsdCount",
        rootData
      })) {
        vErrors = vErrors === null ? validate50.errors : vErrors.concat(validate50.errors);
        errors = vErrors.length;
      }
    }
  }
  validate51.errors = vErrors;
  return errors === 0;
}
const schema82 = {
  "items": {
    "$ref": "GBOMFcaG6l5FB9gAXUAxiCcs9sacNzgbso4KExZTyic"
  },
  "type": "array",
  "nullable": true
};
const schema83 = {
  "properties": {
    "count": {
      "$ref": "vMERCWCezVsdN7cIwlJvWJTP5QRRevuFDHNM3fdV8Q"
    },
    "gpuDriverInstallationConfig": {
      "$ref": "P9Rq2ZLDddkycEYGPpbjCmLa5HT1v362Jb7ILohKFxY"
    },
    "gpuPartitionSize": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "gpuSharingConfig": {
      "$ref": "EfFF5CBK0qPZKtwWeWLFJa77e0SpXxyewMo0AowgM"
    },
    "type": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["count", "type"],
  "type": "object"
};
const schema84 = {
  "properties": {
    "gpuDriverVersion": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["gpuDriverVersion"],
  "type": "object",
  "nullable": true
};
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
    if (data.gpuDriverVersion === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "gpuDriverVersion"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.gpuDriverVersion !== undefined) {
      if (!validate28(data.gpuDriverVersion, {
        instancePath: instancePath + "/gpuDriverVersion",
        parentData: data,
        parentDataProperty: "gpuDriverVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
  }
  validate285.errors = vErrors;
  return errors === 0;
}
const schema85 = {
  "properties": {
    "gpuSharingStrategy": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "maxSharedClientsPerGpu": {
      "$ref": "vMERCWCezVsdN7cIwlJvWJTP5QRRevuFDHNM3fdV8Q"
    }
  },
  "required": ["gpuSharingStrategy", "maxSharedClientsPerGpu"],
  "type": "object",
  "nullable": true
};
function validate289(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.gpuSharingStrategy === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "gpuSharingStrategy"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.maxSharedClientsPerGpu === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "maxSharedClientsPerGpu"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.gpuSharingStrategy !== undefined) {
      if (!validate28(data.gpuSharingStrategy, {
        instancePath: instancePath + "/gpuSharingStrategy",
        parentData: data,
        parentDataProperty: "gpuSharingStrategy",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.maxSharedClientsPerGpu !== undefined) {
      if (!validate50(data.maxSharedClientsPerGpu, {
        instancePath: instancePath + "/maxSharedClientsPerGpu",
        parentData: data,
        parentDataProperty: "maxSharedClientsPerGpu",
        rootData
      })) {
        vErrors = vErrors === null ? validate50.errors : vErrors.concat(validate50.errors);
        errors = vErrors.length;
      }
    }
  }
  validate289.errors = vErrors;
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
    if (data.count === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "count"
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
    if (data.count !== undefined) {
      if (!validate50(data.count, {
        instancePath: instancePath + "/count",
        parentData: data,
        parentDataProperty: "count",
        rootData
      })) {
        vErrors = vErrors === null ? validate50.errors : vErrors.concat(validate50.errors);
        errors = vErrors.length;
      }
    }
    if (data.gpuDriverInstallationConfig !== undefined) {
      if (!validate285(data.gpuDriverInstallationConfig, {
        instancePath: instancePath + "/gpuDriverInstallationConfig",
        parentData: data,
        parentDataProperty: "gpuDriverInstallationConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate285.errors : vErrors.concat(validate285.errors);
        errors = vErrors.length;
      }
    }
    if (data.gpuPartitionSize !== undefined) {
      if (!validate26(data.gpuPartitionSize, {
        instancePath: instancePath + "/gpuPartitionSize",
        parentData: data,
        parentDataProperty: "gpuPartitionSize",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.gpuSharingConfig !== undefined) {
      if (!validate289(data.gpuSharingConfig, {
        instancePath: instancePath + "/gpuSharingConfig",
        parentData: data,
        parentDataProperty: "gpuSharingConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate289.errors : vErrors.concat(validate289.errors);
        errors = vErrors.length;
      }
    }
    if (data.type !== undefined) {
      if (!validate28(data.type, {
        instancePath: instancePath + "/type",
        parentData: data,
        parentDataProperty: "type",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
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
const schema86 = {
  "properties": {
    "maintenanceInterval": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["maintenanceInterval"],
  "type": "object",
  "nullable": true
};
function validate297(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.maintenanceInterval === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "maintenanceInterval"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.maintenanceInterval !== undefined) {
      if (!validate28(data.maintenanceInterval, {
        instancePath: instancePath + "/maintenanceInterval",
        parentData: data,
        parentDataProperty: "maintenanceInterval",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
  }
  validate297.errors = vErrors;
  return errors === 0;
}
const schema87 = {
  "properties": {
    "cpuCfsQuota": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "cpuCfsQuotaPeriod": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "cpuManagerPolicy": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "podPidsLimit": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    }
  },
  "required": ["cpuManagerPolicy"],
  "type": "object",
  "nullable": true
};
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
    if (data.cpuManagerPolicy === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "cpuManagerPolicy"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.cpuCfsQuota !== undefined) {
      if (!validate27(data.cpuCfsQuota, {
        instancePath: instancePath + "/cpuCfsQuota",
        parentData: data,
        parentDataProperty: "cpuCfsQuota",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.cpuCfsQuotaPeriod !== undefined) {
      if (!validate26(data.cpuCfsQuotaPeriod, {
        instancePath: instancePath + "/cpuCfsQuotaPeriod",
        parentData: data,
        parentDataProperty: "cpuCfsQuotaPeriod",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.cpuManagerPolicy !== undefined) {
      if (!validate28(data.cpuManagerPolicy, {
        instancePath: instancePath + "/cpuManagerPolicy",
        parentData: data,
        parentDataProperty: "cpuManagerPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.podPidsLimit !== undefined) {
      if (!validate45(data.podPidsLimit, {
        instancePath: instancePath + "/podPidsLimit",
        parentData: data,
        parentDataProperty: "podPidsLimit",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
  }
  validate301.errors = vErrors;
  return errors === 0;
}
const schema24 = {
  "additionalProperties": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "object",
  "properties": {},
  "nullable": true
};
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
    for (const key0 in data) {
      if (!validate28(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
  }
  validate53.errors = vErrors;
  return errors === 0;
}
const schema88 = {
  "properties": {
    "sysctls": {
      "$ref": "7ypTXGu169g2YEFZECay28baIMTu0duuTg4S6VaFV8"
    }
  },
  "required": ["sysctls"],
  "type": "object",
  "nullable": true
};
const schema89 = {
  "additionalProperties": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "object",
  "properties": {}
};
function validate309(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    for (const key0 in data) {
      if (!validate28(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
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
  validate309.errors = vErrors;
  return errors === 0;
}
function validate308(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.sysctls === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "sysctls"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.sysctls !== undefined) {
      if (!validate309(data.sysctls, {
        instancePath: instancePath + "/sysctls",
        parentData: data,
        parentDataProperty: "sysctls",
        rootData
      })) {
        vErrors = vErrors === null ? validate309.errors : vErrors.concat(validate309.errors);
        errors = vErrors.length;
      }
    }
  }
  validate308.errors = vErrors;
  return errors === 0;
}
const schema90 = {
  "properties": {
    "consumeReservationType": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "key": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "values": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    }
  },
  "required": ["consumeReservationType"],
  "type": "object",
  "nullable": true
};
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
    if (data.consumeReservationType === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "consumeReservationType"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.consumeReservationType !== undefined) {
      if (!validate28(data.consumeReservationType, {
        instancePath: instancePath + "/consumeReservationType",
        parentData: data,
        parentDataProperty: "consumeReservationType",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
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
    if (data.values !== undefined) {
      if (!validate48(data.values, {
        instancePath: instancePath + "/values",
        parentData: data,
        parentDataProperty: "values",
        rootData
      })) {
        vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
        errors = vErrors.length;
      }
    }
  }
  validate322.errors = vErrors;
  return errors === 0;
}
const schema91 = {
  "properties": {
    "sandboxType": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["sandboxType"],
  "type": "object",
  "nullable": true
};
function validate328(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.sandboxType === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "sandboxType"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.sandboxType !== undefined) {
      if (!validate28(data.sandboxType, {
        instancePath: instancePath + "/sandboxType",
        parentData: data,
        parentDataProperty: "sandboxType",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
  }
  validate328.errors = vErrors;
  return errors === 0;
}
const schema92 = {
  "properties": {
    "nodeAffinity": {
      "$ref": "dNOLmNAkjosLlWtqDpg003RmPXKyelfMpwO5lmpROiI"
    }
  },
  "required": ["nodeAffinity"],
  "type": "object",
  "nullable": true
};
const schema93 = {
  "items": {
    "$ref": "gW2o4WsMrEOlrjCAEhrNjVzXLH0Xd7MDegLaS21TFTk"
  },
  "type": "array"
};
const schema94 = {
  "properties": {
    "key": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "operator": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "values": {
      "$ref": "YwrI9eYeYzQIcdsUXH7isPYE3sgVab9JvcdpSK4GQ"
    }
  },
  "required": ["key", "operator", "values"],
  "type": "object"
};
function validate335(data, {
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
    if (data.key !== undefined) {
      if (!validate28(data.key, {
        instancePath: instancePath + "/key",
        parentData: data,
        parentDataProperty: "key",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.operator !== undefined) {
      if (!validate28(data.operator, {
        instancePath: instancePath + "/operator",
        parentData: data,
        parentDataProperty: "operator",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.values !== undefined) {
      if (!validate46(data.values, {
        instancePath: instancePath + "/values",
        parentData: data,
        parentDataProperty: "values",
        rootData
      })) {
        vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
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
  validate335.errors = vErrors;
  return errors === 0;
}
function validate334(data, {
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
      if (!validate335(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate335.errors : vErrors.concat(validate335.errors);
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
  validate334.errors = vErrors;
  return errors === 0;
}
function validate333(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.nodeAffinity === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "nodeAffinity"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.nodeAffinity !== undefined) {
      if (!validate334(data.nodeAffinity, {
        instancePath: instancePath + "/nodeAffinity",
        parentData: data,
        parentDataProperty: "nodeAffinity",
        rootData
      })) {
        vErrors = vErrors === null ? validate334.errors : vErrors.concat(validate334.errors);
        errors = vErrors.length;
      }
    }
  }
  validate333.errors = vErrors;
  return errors === 0;
}
const schema95 = {
  "items": {
    "$ref": "MdkLEluk3lo8HBYllOPk3Asdj3TyiKshWlxStJTFQ"
  },
  "type": "array",
  "nullable": true
};
const schema96 = {
  "properties": {
    "effect": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "key": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "value": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["effect", "key", "value"],
  "type": "object"
};
function validate345(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.effect === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "effect"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
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
    if (data.value === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "value"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.effect !== undefined) {
      if (!validate28(data.effect, {
        instancePath: instancePath + "/effect",
        parentData: data,
        parentDataProperty: "effect",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.key !== undefined) {
      if (!validate28(data.key, {
        instancePath: instancePath + "/key",
        parentData: data,
        parentDataProperty: "key",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.value !== undefined) {
      if (!validate28(data.value, {
        instancePath: instancePath + "/value",
        parentData: data,
        parentDataProperty: "value",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
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
  validate345.errors = vErrors;
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
      if (!validate345(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate345.errors : vErrors.concat(validate345.errors);
        errors = vErrors.length;
      }
    }
  }
  validate344.errors = vErrors;
  return errors === 0;
}
const schema97 = {
  "properties": {
    "mode": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "nodeMetadata": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate351(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.mode !== undefined) {
      if (!validate26(data.mode, {
        instancePath: instancePath + "/mode",
        parentData: data,
        parentDataProperty: "mode",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodeMetadata !== undefined) {
      if (!validate26(data.nodeMetadata, {
        instancePath: instancePath + "/nodeMetadata",
        parentData: data,
        parentDataProperty: "nodeMetadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate351.errors = vErrors;
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
    if (data.advancedMachineFeatures !== undefined) {
      if (!validate271(data.advancedMachineFeatures, {
        instancePath: instancePath + "/advancedMachineFeatures",
        parentData: data,
        parentDataProperty: "advancedMachineFeatures",
        rootData
      })) {
        vErrors = vErrors === null ? validate271.errors : vErrors.concat(validate271.errors);
        errors = vErrors.length;
      }
    }
    if (data.bootDiskKMSCryptoKeyRef !== undefined) {
      if (!validate29(data.bootDiskKMSCryptoKeyRef, {
        instancePath: instancePath + "/bootDiskKMSCryptoKeyRef",
        parentData: data,
        parentDataProperty: "bootDiskKMSCryptoKeyRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.confidentialNodes !== undefined) {
      if (!validate22(data.confidentialNodes, {
        instancePath: instancePath + "/confidentialNodes",
        parentData: data,
        parentDataProperty: "confidentialNodes",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.diskSizeGb !== undefined) {
      if (!validate45(data.diskSizeGb, {
        instancePath: instancePath + "/diskSizeGb",
        parentData: data,
        parentDataProperty: "diskSizeGb",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.diskType !== undefined) {
      if (!validate26(data.diskType, {
        instancePath: instancePath + "/diskType",
        parentData: data,
        parentDataProperty: "diskType",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.ephemeralStorageConfig !== undefined) {
      if (!validate51(data.ephemeralStorageConfig, {
        instancePath: instancePath + "/ephemeralStorageConfig",
        parentData: data,
        parentDataProperty: "ephemeralStorageConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate51.errors : vErrors.concat(validate51.errors);
        errors = vErrors.length;
      }
    }
    if (data.ephemeralStorageLocalSsdConfig !== undefined) {
      if (!validate51(data.ephemeralStorageLocalSsdConfig, {
        instancePath: instancePath + "/ephemeralStorageLocalSsdConfig",
        parentData: data,
        parentDataProperty: "ephemeralStorageLocalSsdConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate51.errors : vErrors.concat(validate51.errors);
        errors = vErrors.length;
      }
    }
    if (data.fastSocket !== undefined) {
      if (!validate22(data.fastSocket, {
        instancePath: instancePath + "/fastSocket",
        parentData: data,
        parentDataProperty: "fastSocket",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.gcfsConfig !== undefined) {
      if (!validate22(data.gcfsConfig, {
        instancePath: instancePath + "/gcfsConfig",
        parentData: data,
        parentDataProperty: "gcfsConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.guestAccelerator !== undefined) {
      if (!validate282(data.guestAccelerator, {
        instancePath: instancePath + "/guestAccelerator",
        parentData: data,
        parentDataProperty: "guestAccelerator",
        rootData
      })) {
        vErrors = vErrors === null ? validate282.errors : vErrors.concat(validate282.errors);
        errors = vErrors.length;
      }
    }
    if (data.gvnic !== undefined) {
      if (!validate22(data.gvnic, {
        instancePath: instancePath + "/gvnic",
        parentData: data,
        parentDataProperty: "gvnic",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostMaintenancePolicy !== undefined) {
      if (!validate297(data.hostMaintenancePolicy, {
        instancePath: instancePath + "/hostMaintenancePolicy",
        parentData: data,
        parentDataProperty: "hostMaintenancePolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate297.errors : vErrors.concat(validate297.errors);
        errors = vErrors.length;
      }
    }
    if (data.imageType !== undefined) {
      if (!validate26(data.imageType, {
        instancePath: instancePath + "/imageType",
        parentData: data,
        parentDataProperty: "imageType",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.kubeletConfig !== undefined) {
      if (!validate301(data.kubeletConfig, {
        instancePath: instancePath + "/kubeletConfig",
        parentData: data,
        parentDataProperty: "kubeletConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate301.errors : vErrors.concat(validate301.errors);
        errors = vErrors.length;
      }
    }
    if (data.labels !== undefined) {
      if (!validate53(data.labels, {
        instancePath: instancePath + "/labels",
        parentData: data,
        parentDataProperty: "labels",
        rootData
      })) {
        vErrors = vErrors === null ? validate53.errors : vErrors.concat(validate53.errors);
        errors = vErrors.length;
      }
    }
    if (data.linuxNodeConfig !== undefined) {
      if (!validate308(data.linuxNodeConfig, {
        instancePath: instancePath + "/linuxNodeConfig",
        parentData: data,
        parentDataProperty: "linuxNodeConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate308.errors : vErrors.concat(validate308.errors);
        errors = vErrors.length;
      }
    }
    if (data.localNvmeSsdBlockConfig !== undefined) {
      if (!validate51(data.localNvmeSsdBlockConfig, {
        instancePath: instancePath + "/localNvmeSsdBlockConfig",
        parentData: data,
        parentDataProperty: "localNvmeSsdBlockConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate51.errors : vErrors.concat(validate51.errors);
        errors = vErrors.length;
      }
    }
    if (data.localSsdCount !== undefined) {
      if (!validate45(data.localSsdCount, {
        instancePath: instancePath + "/localSsdCount",
        parentData: data,
        parentDataProperty: "localSsdCount",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.loggingVariant !== undefined) {
      if (!validate26(data.loggingVariant, {
        instancePath: instancePath + "/loggingVariant",
        parentData: data,
        parentDataProperty: "loggingVariant",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.machineType !== undefined) {
      if (!validate26(data.machineType, {
        instancePath: instancePath + "/machineType",
        parentData: data,
        parentDataProperty: "machineType",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.metadata !== undefined) {
      if (!validate53(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate53.errors : vErrors.concat(validate53.errors);
        errors = vErrors.length;
      }
    }
    if (data.minCpuPlatform !== undefined) {
      if (!validate26(data.minCpuPlatform, {
        instancePath: instancePath + "/minCpuPlatform",
        parentData: data,
        parentDataProperty: "minCpuPlatform",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodeGroupRef !== undefined) {
      if (!validate29(data.nodeGroupRef, {
        instancePath: instancePath + "/nodeGroupRef",
        parentData: data,
        parentDataProperty: "nodeGroupRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.oauthScopes !== undefined) {
      if (!validate48(data.oauthScopes, {
        instancePath: instancePath + "/oauthScopes",
        parentData: data,
        parentDataProperty: "oauthScopes",
        rootData
      })) {
        vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
        errors = vErrors.length;
      }
    }
    if (data.preemptible !== undefined) {
      if (!validate27(data.preemptible, {
        instancePath: instancePath + "/preemptible",
        parentData: data,
        parentDataProperty: "preemptible",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.reservationAffinity !== undefined) {
      if (!validate322(data.reservationAffinity, {
        instancePath: instancePath + "/reservationAffinity",
        parentData: data,
        parentDataProperty: "reservationAffinity",
        rootData
      })) {
        vErrors = vErrors === null ? validate322.errors : vErrors.concat(validate322.errors);
        errors = vErrors.length;
      }
    }
    if (data.resourceLabels !== undefined) {
      if (!validate53(data.resourceLabels, {
        instancePath: instancePath + "/resourceLabels",
        parentData: data,
        parentDataProperty: "resourceLabels",
        rootData
      })) {
        vErrors = vErrors === null ? validate53.errors : vErrors.concat(validate53.errors);
        errors = vErrors.length;
      }
    }
    if (data.sandboxConfig !== undefined) {
      if (!validate328(data.sandboxConfig, {
        instancePath: instancePath + "/sandboxConfig",
        parentData: data,
        parentDataProperty: "sandboxConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate328.errors : vErrors.concat(validate328.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceAccountRef !== undefined) {
      if (!validate29(data.serviceAccountRef, {
        instancePath: instancePath + "/serviceAccountRef",
        parentData: data,
        parentDataProperty: "serviceAccountRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.shieldedInstanceConfig !== undefined) {
      if (!validate55(data.shieldedInstanceConfig, {
        instancePath: instancePath + "/shieldedInstanceConfig",
        parentData: data,
        parentDataProperty: "shieldedInstanceConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
      }
    }
    if (data.soleTenantConfig !== undefined) {
      if (!validate333(data.soleTenantConfig, {
        instancePath: instancePath + "/soleTenantConfig",
        parentData: data,
        parentDataProperty: "soleTenantConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate333.errors : vErrors.concat(validate333.errors);
        errors = vErrors.length;
      }
    }
    if (data.spot !== undefined) {
      if (!validate27(data.spot, {
        instancePath: instancePath + "/spot",
        parentData: data,
        parentDataProperty: "spot",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.tags !== undefined) {
      if (!validate48(data.tags, {
        instancePath: instancePath + "/tags",
        parentData: data,
        parentDataProperty: "tags",
        rootData
      })) {
        vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
        errors = vErrors.length;
      }
    }
    if (data.taint !== undefined) {
      if (!validate344(data.taint, {
        instancePath: instancePath + "/taint",
        parentData: data,
        parentDataProperty: "taint",
        rootData
      })) {
        vErrors = vErrors === null ? validate344.errors : vErrors.concat(validate344.errors);
        errors = vErrors.length;
      }
    }
    if (data.workloadMetadataConfig !== undefined) {
      if (!validate351(data.workloadMetadataConfig, {
        instancePath: instancePath + "/workloadMetadataConfig",
        parentData: data,
        parentDataProperty: "workloadMetadataConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate351.errors : vErrors.concat(validate351.errors);
        errors = vErrors.length;
      }
    }
  }
  validate270.errors = vErrors;
  return errors === 0;
}
const schema98 = {
  "properties": {
    "networkTags": {
      "$ref": "yI38rUiizbmNGANeIeDSiIjWAeLWr7LU0wDxNv7bts"
    }
  },
  "type": "object",
  "nullable": true
};
const schema99 = {
  "properties": {
    "tags": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    }
  },
  "type": "object",
  "nullable": true
};
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
    if (data.tags !== undefined) {
      if (!validate48(data.tags, {
        instancePath: instancePath + "/tags",
        parentData: data,
        parentDataProperty: "tags",
        rootData
      })) {
        vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
        errors = vErrors.length;
      }
    }
  }
  validate358.errors = vErrors;
  return errors === 0;
}
function validate357(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.networkTags !== undefined) {
      if (!validate358(data.networkTags, {
        instancePath: instancePath + "/networkTags",
        parentData: data,
        parentDataProperty: "networkTags",
        rootData
      })) {
        vErrors = vErrors === null ? validate358.errors : vErrors.concat(validate358.errors);
        errors = vErrors.length;
      }
    }
  }
  validate357.errors = vErrors;
  return errors === 0;
}
const schema100 = {
  "properties": {
    "nodeConfigDefaults": {
      "$ref": "mK5mDHDiRoDy1kUkLcbzbiJngOSunbiPYhHZT4RN9OM"
    }
  },
  "type": "object",
  "nullable": true
};
const schema101 = {
  "properties": {
    "gcfsConfig": {
      "$ref": "9qA28OI6FWc1HvhX2XPjMDkoI13JmkT0RKswsEk2Jk"
    },
    "loggingVariant": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate363(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.gcfsConfig !== undefined) {
      if (!validate22(data.gcfsConfig, {
        instancePath: instancePath + "/gcfsConfig",
        parentData: data,
        parentDataProperty: "gcfsConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.loggingVariant !== undefined) {
      if (!validate26(data.loggingVariant, {
        instancePath: instancePath + "/loggingVariant",
        parentData: data,
        parentDataProperty: "loggingVariant",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate363.errors = vErrors;
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.nodeConfigDefaults !== undefined) {
      if (!validate363(data.nodeConfigDefaults, {
        instancePath: instancePath + "/nodeConfigDefaults",
        parentData: data,
        parentDataProperty: "nodeConfigDefaults",
        rootData
      })) {
        vErrors = vErrors === null ? validate363.errors : vErrors.concat(validate363.errors);
        errors = vErrors.length;
      }
    }
  }
  validate362.errors = vErrors;
  return errors === 0;
}
const schema102 = {
  "properties": {
    "pubsub": {
      "$ref": "AKHHe75tJzRW79awCeYdG555MZfOaUSbhC3aoLNo"
    }
  },
  "required": ["pubsub"],
  "type": "object",
  "nullable": true
};
const schema103 = {
  "properties": {
    "enabled": {
      "$ref": "384TuUg7xQOu4Fi6u32QopECSxjPv91aOGoUUSEznpE"
    },
    "filter": {
      "$ref": "bz5WGUSFoXZ9dWQEixEJ219XE1CdkTRoFzswQC2Q"
    },
    "topicRef": {
      "$ref": "FqwG3fNQDV94n3ssyud4YO0vSjAbQTxNuU0XWG96Y"
    }
  },
  "required": ["enabled"],
  "type": "object"
};
const schema104 = {
  "properties": {
    "eventType": {
      "$ref": "YwrI9eYeYzQIcdsUXH7isPYE3sgVab9JvcdpSK4GQ"
    }
  },
  "required": ["eventType"],
  "type": "object",
  "nullable": true
};
function validate372(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.eventType === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "eventType"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.eventType !== undefined) {
      if (!validate46(data.eventType, {
        instancePath: instancePath + "/eventType",
        parentData: data,
        parentDataProperty: "eventType",
        rootData
      })) {
        vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
        errors = vErrors.length;
      }
    }
  }
  validate372.errors = vErrors;
  return errors === 0;
}
function validate370(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.enabled === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "enabled"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.enabled !== undefined) {
      if (!validate21(data.enabled, {
        instancePath: instancePath + "/enabled",
        parentData: data,
        parentDataProperty: "enabled",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.filter !== undefined) {
      if (!validate372(data.filter, {
        instancePath: instancePath + "/filter",
        parentData: data,
        parentDataProperty: "filter",
        rootData
      })) {
        vErrors = vErrors === null ? validate372.errors : vErrors.concat(validate372.errors);
        errors = vErrors.length;
      }
    }
    if (data.topicRef !== undefined) {
      if (!validate29(data.topicRef, {
        instancePath: instancePath + "/topicRef",
        parentData: data,
        parentDataProperty: "topicRef",
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
  validate370.errors = vErrors;
  return errors === 0;
}
function validate369(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.pubsub === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "pubsub"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.pubsub !== undefined) {
      if (!validate370(data.pubsub, {
        instancePath: instancePath + "/pubsub",
        parentData: data,
        parentDataProperty: "pubsub",
        rootData
      })) {
        vErrors = vErrors === null ? validate370.errors : vErrors.concat(validate370.errors);
        errors = vErrors.length;
      }
    }
  }
  validate369.errors = vErrors;
  return errors === 0;
}
const schema105 = {
  "properties": {
    "enablePrivateEndpoint": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "enablePrivateNodes": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "masterGlobalAccessConfig": {
      "$ref": "9qA28OI6FWc1HvhX2XPjMDkoI13JmkT0RKswsEk2Jk"
    },
    "masterIpv4CidrBlock": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "peeringName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "privateEndpoint": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "privateEndpointSubnetworkRef": {
      "$ref": "FqwG3fNQDV94n3ssyud4YO0vSjAbQTxNuU0XWG96Y"
    },
    "publicEndpoint": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate379(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.enablePrivateEndpoint !== undefined) {
      if (!validate27(data.enablePrivateEndpoint, {
        instancePath: instancePath + "/enablePrivateEndpoint",
        parentData: data,
        parentDataProperty: "enablePrivateEndpoint",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.enablePrivateNodes !== undefined) {
      if (!validate27(data.enablePrivateNodes, {
        instancePath: instancePath + "/enablePrivateNodes",
        parentData: data,
        parentDataProperty: "enablePrivateNodes",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.masterGlobalAccessConfig !== undefined) {
      if (!validate22(data.masterGlobalAccessConfig, {
        instancePath: instancePath + "/masterGlobalAccessConfig",
        parentData: data,
        parentDataProperty: "masterGlobalAccessConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.masterIpv4CidrBlock !== undefined) {
      if (!validate26(data.masterIpv4CidrBlock, {
        instancePath: instancePath + "/masterIpv4CidrBlock",
        parentData: data,
        parentDataProperty: "masterIpv4CidrBlock",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.peeringName !== undefined) {
      if (!validate26(data.peeringName, {
        instancePath: instancePath + "/peeringName",
        parentData: data,
        parentDataProperty: "peeringName",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.privateEndpoint !== undefined) {
      if (!validate26(data.privateEndpoint, {
        instancePath: instancePath + "/privateEndpoint",
        parentData: data,
        parentDataProperty: "privateEndpoint",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.privateEndpointSubnetworkRef !== undefined) {
      if (!validate29(data.privateEndpointSubnetworkRef, {
        instancePath: instancePath + "/privateEndpointSubnetworkRef",
        parentData: data,
        parentDataProperty: "privateEndpointSubnetworkRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.publicEndpoint !== undefined) {
      if (!validate26(data.publicEndpoint, {
        instancePath: instancePath + "/publicEndpoint",
        parentData: data,
        parentDataProperty: "publicEndpoint",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate379.errors = vErrors;
  return errors === 0;
}
const schema106 = {
  "properties": {
    "workloadConfig": {
      "$ref": "KfIuC8a4xB5zBUKRSBH5YTFp22fjaqVKF5KSyGfBdk"
    },
    "workloadVulnerabilityMode": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema107 = {
  "properties": {
    "auditMode": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["auditMode"],
  "type": "object",
  "nullable": true
};
function validate391(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.auditMode === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "auditMode"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.auditMode !== undefined) {
      if (!validate28(data.auditMode, {
        instancePath: instancePath + "/auditMode",
        parentData: data,
        parentDataProperty: "auditMode",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
  }
  validate391.errors = vErrors;
  return errors === 0;
}
function validate390(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.workloadConfig !== undefined) {
      if (!validate391(data.workloadConfig, {
        instancePath: instancePath + "/workloadConfig",
        parentData: data,
        parentDataProperty: "workloadConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate391.errors : vErrors.concat(validate391.errors);
        errors = vErrors.length;
      }
    }
    if (data.workloadVulnerabilityMode !== undefined) {
      if (!validate26(data.workloadVulnerabilityMode, {
        instancePath: instancePath + "/workloadVulnerabilityMode",
        parentData: data,
        parentDataProperty: "workloadVulnerabilityMode",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate390.errors = vErrors;
  return errors === 0;
}
const schema108 = {
  "properties": {
    "bigqueryDestination": {
      "$ref": "95E7AnHGapgOtC250rN3yCTvFBVJgoxT1wDlsMt51A"
    },
    "enableNetworkEgressMetering": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "enableResourceConsumptionMetering": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  },
  "required": ["bigqueryDestination"],
  "type": "object",
  "nullable": true
};
const schema109 = {
  "properties": {
    "datasetId": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["datasetId"],
  "type": "object"
};
function validate399(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.datasetId === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "datasetId"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.datasetId !== undefined) {
      if (!validate28(data.datasetId, {
        instancePath: instancePath + "/datasetId",
        parentData: data,
        parentDataProperty: "datasetId",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
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
  validate399.errors = vErrors;
  return errors === 0;
}
function validate398(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.bigqueryDestination === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "bigqueryDestination"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.bigqueryDestination !== undefined) {
      if (!validate399(data.bigqueryDestination, {
        instancePath: instancePath + "/bigqueryDestination",
        parentData: data,
        parentDataProperty: "bigqueryDestination",
        rootData
      })) {
        vErrors = vErrors === null ? validate399.errors : vErrors.concat(validate399.errors);
        errors = vErrors.length;
      }
    }
    if (data.enableNetworkEgressMetering !== undefined) {
      if (!validate27(data.enableNetworkEgressMetering, {
        instancePath: instancePath + "/enableNetworkEgressMetering",
        parentData: data,
        parentDataProperty: "enableNetworkEgressMetering",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.enableResourceConsumptionMetering !== undefined) {
      if (!validate27(data.enableResourceConsumptionMetering, {
        instancePath: instancePath + "/enableResourceConsumptionMetering",
        parentData: data,
        parentDataProperty: "enableResourceConsumptionMetering",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
  }
  validate398.errors = vErrors;
  return errors === 0;
}
const schema110 = {
  "properties": {
    "mode": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "vulnerabilityMode": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate405(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.mode !== undefined) {
      if (!validate26(data.mode, {
        instancePath: instancePath + "/mode",
        parentData: data,
        parentDataProperty: "mode",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.vulnerabilityMode !== undefined) {
      if (!validate26(data.vulnerabilityMode, {
        instancePath: instancePath + "/vulnerabilityMode",
        parentData: data,
        parentDataProperty: "vulnerabilityMode",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate405.errors = vErrors;
  return errors === 0;
}
const schema111 = {
  "properties": {
    "identityNamespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "workloadPool": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
function validate412(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.identityNamespace !== undefined) {
      if (!validate26(data.identityNamespace, {
        instancePath: instancePath + "/identityNamespace",
        parentData: data,
        parentDataProperty: "identityNamespace",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.workloadPool !== undefined) {
      if (!validate26(data.workloadPool, {
        instancePath: instancePath + "/workloadPool",
        parentData: data,
        parentDataProperty: "workloadPool",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate412.errors = vErrors;
  return errors === 0;
}
function validate69(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.location === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "location"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.addonsConfig !== undefined) {
      if (!validate70(data.addonsConfig, {
        instancePath: instancePath + "/addonsConfig",
        parentData: data,
        parentDataProperty: "addonsConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate70.errors : vErrors.concat(validate70.errors);
        errors = vErrors.length;
      }
    }
    if (data.allowNetAdmin !== undefined) {
      if (!validate27(data.allowNetAdmin, {
        instancePath: instancePath + "/allowNetAdmin",
        parentData: data,
        parentDataProperty: "allowNetAdmin",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.authenticatorGroupsConfig !== undefined) {
      if (!validate91(data.authenticatorGroupsConfig, {
        instancePath: instancePath + "/authenticatorGroupsConfig",
        parentData: data,
        parentDataProperty: "authenticatorGroupsConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate91.errors : vErrors.concat(validate91.errors);
        errors = vErrors.length;
      }
    }
    if (data.binaryAuthorization !== undefined) {
      if (!validate94(data.binaryAuthorization, {
        instancePath: instancePath + "/binaryAuthorization",
        parentData: data,
        parentDataProperty: "binaryAuthorization",
        rootData
      })) {
        vErrors = vErrors === null ? validate94.errors : vErrors.concat(validate94.errors);
        errors = vErrors.length;
      }
    }
    if (data.clusterAutoscaling !== undefined) {
      if (!validate98(data.clusterAutoscaling, {
        instancePath: instancePath + "/clusterAutoscaling",
        parentData: data,
        parentDataProperty: "clusterAutoscaling",
        rootData
      })) {
        vErrors = vErrors === null ? validate98.errors : vErrors.concat(validate98.errors);
        errors = vErrors.length;
      }
    }
    if (data.clusterIpv4Cidr !== undefined) {
      if (!validate26(data.clusterIpv4Cidr, {
        instancePath: instancePath + "/clusterIpv4Cidr",
        parentData: data,
        parentDataProperty: "clusterIpv4Cidr",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.clusterTelemetry !== undefined) {
      if (!validate142(data.clusterTelemetry, {
        instancePath: instancePath + "/clusterTelemetry",
        parentData: data,
        parentDataProperty: "clusterTelemetry",
        rootData
      })) {
        vErrors = vErrors === null ? validate142.errors : vErrors.concat(validate142.errors);
        errors = vErrors.length;
      }
    }
    if (data.confidentialNodes !== undefined) {
      if (!validate22(data.confidentialNodes, {
        instancePath: instancePath + "/confidentialNodes",
        parentData: data,
        parentDataProperty: "confidentialNodes",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.costManagementConfig !== undefined) {
      if (!validate22(data.costManagementConfig, {
        instancePath: instancePath + "/costManagementConfig",
        parentData: data,
        parentDataProperty: "costManagementConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.databaseEncryption !== undefined) {
      if (!validate147(data.databaseEncryption, {
        instancePath: instancePath + "/databaseEncryption",
        parentData: data,
        parentDataProperty: "databaseEncryption",
        rootData
      })) {
        vErrors = vErrors === null ? validate147.errors : vErrors.concat(validate147.errors);
        errors = vErrors.length;
      }
    }
    if (data.datapathProvider !== undefined) {
      if (!validate26(data.datapathProvider, {
        instancePath: instancePath + "/datapathProvider",
        parentData: data,
        parentDataProperty: "datapathProvider",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.defaultMaxPodsPerNode !== undefined) {
      if (!validate45(data.defaultMaxPodsPerNode, {
        instancePath: instancePath + "/defaultMaxPodsPerNode",
        parentData: data,
        parentDataProperty: "defaultMaxPodsPerNode",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.defaultSnatStatus !== undefined) {
      if (!validate24(data.defaultSnatStatus, {
        instancePath: instancePath + "/defaultSnatStatus",
        parentData: data,
        parentDataProperty: "defaultSnatStatus",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.dnsConfig !== undefined) {
      if (!validate154(data.dnsConfig, {
        instancePath: instancePath + "/dnsConfig",
        parentData: data,
        parentDataProperty: "dnsConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate154.errors : vErrors.concat(validate154.errors);
        errors = vErrors.length;
      }
    }
    if (data.enableAutopilot !== undefined) {
      if (!validate27(data.enableAutopilot, {
        instancePath: instancePath + "/enableAutopilot",
        parentData: data,
        parentDataProperty: "enableAutopilot",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.enableBinaryAuthorization !== undefined) {
      if (!validate27(data.enableBinaryAuthorization, {
        instancePath: instancePath + "/enableBinaryAuthorization",
        parentData: data,
        parentDataProperty: "enableBinaryAuthorization",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.enableFqdnNetworkPolicy !== undefined) {
      if (!validate27(data.enableFqdnNetworkPolicy, {
        instancePath: instancePath + "/enableFqdnNetworkPolicy",
        parentData: data,
        parentDataProperty: "enableFqdnNetworkPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.enableIntranodeVisibility !== undefined) {
      if (!validate27(data.enableIntranodeVisibility, {
        instancePath: instancePath + "/enableIntranodeVisibility",
        parentData: data,
        parentDataProperty: "enableIntranodeVisibility",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.enableK8sBetaApis !== undefined) {
      if (!validate163(data.enableK8sBetaApis, {
        instancePath: instancePath + "/enableK8sBetaApis",
        parentData: data,
        parentDataProperty: "enableK8sBetaApis",
        rootData
      })) {
        vErrors = vErrors === null ? validate163.errors : vErrors.concat(validate163.errors);
        errors = vErrors.length;
      }
    }
    if (data.enableKubernetesAlpha !== undefined) {
      if (!validate27(data.enableKubernetesAlpha, {
        instancePath: instancePath + "/enableKubernetesAlpha",
        parentData: data,
        parentDataProperty: "enableKubernetesAlpha",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.enableL4IlbSubsetting !== undefined) {
      if (!validate27(data.enableL4IlbSubsetting, {
        instancePath: instancePath + "/enableL4IlbSubsetting",
        parentData: data,
        parentDataProperty: "enableL4IlbSubsetting",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.enableLegacyAbac !== undefined) {
      if (!validate27(data.enableLegacyAbac, {
        instancePath: instancePath + "/enableLegacyAbac",
        parentData: data,
        parentDataProperty: "enableLegacyAbac",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.enableMultiNetworking !== undefined) {
      if (!validate27(data.enableMultiNetworking, {
        instancePath: instancePath + "/enableMultiNetworking",
        parentData: data,
        parentDataProperty: "enableMultiNetworking",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.enableShieldedNodes !== undefined) {
      if (!validate27(data.enableShieldedNodes, {
        instancePath: instancePath + "/enableShieldedNodes",
        parentData: data,
        parentDataProperty: "enableShieldedNodes",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.enableTpu !== undefined) {
      if (!validate27(data.enableTpu, {
        instancePath: instancePath + "/enableTpu",
        parentData: data,
        parentDataProperty: "enableTpu",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.gatewayApiConfig !== undefined) {
      if (!validate58(data.gatewayApiConfig, {
        instancePath: instancePath + "/gatewayApiConfig",
        parentData: data,
        parentDataProperty: "gatewayApiConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.identityServiceConfig !== undefined) {
      if (!validate173(data.identityServiceConfig, {
        instancePath: instancePath + "/identityServiceConfig",
        parentData: data,
        parentDataProperty: "identityServiceConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate173.errors : vErrors.concat(validate173.errors);
        errors = vErrors.length;
      }
    }
    if (data.initialNodeCount !== undefined) {
      if (!validate45(data.initialNodeCount, {
        instancePath: instancePath + "/initialNodeCount",
        parentData: data,
        parentDataProperty: "initialNodeCount",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.ipAllocationPolicy !== undefined) {
      if (!validate177(data.ipAllocationPolicy, {
        instancePath: instancePath + "/ipAllocationPolicy",
        parentData: data,
        parentDataProperty: "ipAllocationPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate177.errors : vErrors.concat(validate177.errors);
        errors = vErrors.length;
      }
    }
    if (data.location !== undefined) {
      if (!validate28(data.location, {
        instancePath: instancePath + "/location",
        parentData: data,
        parentDataProperty: "location",
        rootData
      })) {
        vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
        errors = vErrors.length;
      }
    }
    if (data.loggingConfig !== undefined) {
      if (!validate189(data.loggingConfig, {
        instancePath: instancePath + "/loggingConfig",
        parentData: data,
        parentDataProperty: "loggingConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate189.errors : vErrors.concat(validate189.errors);
        errors = vErrors.length;
      }
    }
    if (data.loggingService !== undefined) {
      if (!validate26(data.loggingService, {
        instancePath: instancePath + "/loggingService",
        parentData: data,
        parentDataProperty: "loggingService",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.maintenancePolicy !== undefined) {
      if (!validate193(data.maintenancePolicy, {
        instancePath: instancePath + "/maintenancePolicy",
        parentData: data,
        parentDataProperty: "maintenancePolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate193.errors : vErrors.concat(validate193.errors);
        errors = vErrors.length;
      }
    }
    if (data.masterAuth !== undefined) {
      if (!validate214(data.masterAuth, {
        instancePath: instancePath + "/masterAuth",
        parentData: data,
        parentDataProperty: "masterAuth",
        rootData
      })) {
        vErrors = vErrors === null ? validate214.errors : vErrors.concat(validate214.errors);
        errors = vErrors.length;
      }
    }
    if (data.masterAuthorizedNetworksConfig !== undefined) {
      if (!validate240(data.masterAuthorizedNetworksConfig, {
        instancePath: instancePath + "/masterAuthorizedNetworksConfig",
        parentData: data,
        parentDataProperty: "masterAuthorizedNetworksConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate240.errors : vErrors.concat(validate240.errors);
        errors = vErrors.length;
      }
    }
    if (data.meshCertificates !== undefined) {
      if (!validate249(data.meshCertificates, {
        instancePath: instancePath + "/meshCertificates",
        parentData: data,
        parentDataProperty: "meshCertificates",
        rootData
      })) {
        vErrors = vErrors === null ? validate249.errors : vErrors.concat(validate249.errors);
        errors = vErrors.length;
      }
    }
    if (data.minMasterVersion !== undefined) {
      if (!validate26(data.minMasterVersion, {
        instancePath: instancePath + "/minMasterVersion",
        parentData: data,
        parentDataProperty: "minMasterVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.monitoringConfig !== undefined) {
      if (!validate253(data.monitoringConfig, {
        instancePath: instancePath + "/monitoringConfig",
        parentData: data,
        parentDataProperty: "monitoringConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate253.errors : vErrors.concat(validate253.errors);
        errors = vErrors.length;
      }
    }
    if (data.monitoringService !== undefined) {
      if (!validate26(data.monitoringService, {
        instancePath: instancePath + "/monitoringService",
        parentData: data,
        parentDataProperty: "monitoringService",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.networkPolicy !== undefined) {
      if (!validate264(data.networkPolicy, {
        instancePath: instancePath + "/networkPolicy",
        parentData: data,
        parentDataProperty: "networkPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate264.errors : vErrors.concat(validate264.errors);
        errors = vErrors.length;
      }
    }
    if (data.networkRef !== undefined) {
      if (!validate29(data.networkRef, {
        instancePath: instancePath + "/networkRef",
        parentData: data,
        parentDataProperty: "networkRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.networkingMode !== undefined) {
      if (!validate26(data.networkingMode, {
        instancePath: instancePath + "/networkingMode",
        parentData: data,
        parentDataProperty: "networkingMode",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodeConfig !== undefined) {
      if (!validate270(data.nodeConfig, {
        instancePath: instancePath + "/nodeConfig",
        parentData: data,
        parentDataProperty: "nodeConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate270.errors : vErrors.concat(validate270.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodeLocations !== undefined) {
      if (!validate48(data.nodeLocations, {
        instancePath: instancePath + "/nodeLocations",
        parentData: data,
        parentDataProperty: "nodeLocations",
        rootData
      })) {
        vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodePoolAutoConfig !== undefined) {
      if (!validate357(data.nodePoolAutoConfig, {
        instancePath: instancePath + "/nodePoolAutoConfig",
        parentData: data,
        parentDataProperty: "nodePoolAutoConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate357.errors : vErrors.concat(validate357.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodePoolDefaults !== undefined) {
      if (!validate362(data.nodePoolDefaults, {
        instancePath: instancePath + "/nodePoolDefaults",
        parentData: data,
        parentDataProperty: "nodePoolDefaults",
        rootData
      })) {
        vErrors = vErrors === null ? validate362.errors : vErrors.concat(validate362.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodeVersion !== undefined) {
      if (!validate26(data.nodeVersion, {
        instancePath: instancePath + "/nodeVersion",
        parentData: data,
        parentDataProperty: "nodeVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.notificationConfig !== undefined) {
      if (!validate369(data.notificationConfig, {
        instancePath: instancePath + "/notificationConfig",
        parentData: data,
        parentDataProperty: "notificationConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate369.errors : vErrors.concat(validate369.errors);
        errors = vErrors.length;
      }
    }
    if (data.podSecurityPolicyConfig !== undefined) {
      if (!validate22(data.podSecurityPolicyConfig, {
        instancePath: instancePath + "/podSecurityPolicyConfig",
        parentData: data,
        parentDataProperty: "podSecurityPolicyConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.privateClusterConfig !== undefined) {
      if (!validate379(data.privateClusterConfig, {
        instancePath: instancePath + "/privateClusterConfig",
        parentData: data,
        parentDataProperty: "privateClusterConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate379.errors : vErrors.concat(validate379.errors);
        errors = vErrors.length;
      }
    }
    if (data.privateIpv6GoogleAccess !== undefined) {
      if (!validate26(data.privateIpv6GoogleAccess, {
        instancePath: instancePath + "/privateIpv6GoogleAccess",
        parentData: data,
        parentDataProperty: "privateIpv6GoogleAccess",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.protectConfig !== undefined) {
      if (!validate390(data.protectConfig, {
        instancePath: instancePath + "/protectConfig",
        parentData: data,
        parentDataProperty: "protectConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate390.errors : vErrors.concat(validate390.errors);
        errors = vErrors.length;
      }
    }
    if (data.releaseChannel !== undefined) {
      if (!validate58(data.releaseChannel, {
        instancePath: instancePath + "/releaseChannel",
        parentData: data,
        parentDataProperty: "releaseChannel",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.resourceID !== undefined) {
      if (!validate26(data.resourceID, {
        instancePath: instancePath + "/resourceID",
        parentData: data,
        parentDataProperty: "resourceID",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.resourceUsageExportConfig !== undefined) {
      if (!validate398(data.resourceUsageExportConfig, {
        instancePath: instancePath + "/resourceUsageExportConfig",
        parentData: data,
        parentDataProperty: "resourceUsageExportConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate398.errors : vErrors.concat(validate398.errors);
        errors = vErrors.length;
      }
    }
    if (data.securityPostureConfig !== undefined) {
      if (!validate405(data.securityPostureConfig, {
        instancePath: instancePath + "/securityPostureConfig",
        parentData: data,
        parentDataProperty: "securityPostureConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate405.errors : vErrors.concat(validate405.errors);
        errors = vErrors.length;
      }
    }
    if (data.serviceExternalIpsConfig !== undefined) {
      if (!validate22(data.serviceExternalIpsConfig, {
        instancePath: instancePath + "/serviceExternalIpsConfig",
        parentData: data,
        parentDataProperty: "serviceExternalIpsConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.subnetworkRef !== undefined) {
      if (!validate29(data.subnetworkRef, {
        instancePath: instancePath + "/subnetworkRef",
        parentData: data,
        parentDataProperty: "subnetworkRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.verticalPodAutoscaling !== undefined) {
      if (!validate22(data.verticalPodAutoscaling, {
        instancePath: instancePath + "/verticalPodAutoscaling",
        parentData: data,
        parentDataProperty: "verticalPodAutoscaling",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.workloadIdentityConfig !== undefined) {
      if (!validate412(data.workloadIdentityConfig, {
        instancePath: instancePath + "/workloadIdentityConfig",
        parentData: data,
        parentDataProperty: "workloadIdentityConfig",
        rootData
      })) {
        vErrors = vErrors === null ? validate412.errors : vErrors.concat(validate412.errors);
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
  validate69.errors = vErrors;
  return errors === 0;
}
const schema112 = {
  "properties": {
    "conditions": {
      "$ref": "RvbK8dihXzqIiwj8RM4YmVn1uSZhkVfj7vnGjt1dGc"
    },
    "endpoint": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "labelFingerprint": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "masterVersion": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "observedGeneration": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "operation": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "selfLink": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "servicesIpv4Cidr": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "tpuIpv4CidrBlock": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "nullable": true
};
const schema113 = {
  "items": {
    "$ref": "Qz3R3JEF6xPpjvqMgAwCgL3twD5Cg2JiwRwbQx8RAA"
  },
  "type": "array",
  "nullable": true
};
const schema114 = {
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
function validate419(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.lastTransitionTime !== undefined) {
      if (!validate26(data.lastTransitionTime, {
        instancePath: instancePath + "/lastTransitionTime",
        parentData: data,
        parentDataProperty: "lastTransitionTime",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.message !== undefined) {
      if (!validate26(data.message, {
        instancePath: instancePath + "/message",
        parentData: data,
        parentDataProperty: "message",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.reason !== undefined) {
      if (!validate26(data.reason, {
        instancePath: instancePath + "/reason",
        parentData: data,
        parentDataProperty: "reason",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate26(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
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
  validate419.errors = vErrors;
  return errors === 0;
}
function validate418(data, {
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
      if (!validate419(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate419.errors : vErrors.concat(validate419.errors);
        errors = vErrors.length;
      }
    }
  }
  validate418.errors = vErrors;
  return errors === 0;
}
function validate417(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
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
      if (!validate418(data.conditions, {
        instancePath: instancePath + "/conditions",
        parentData: data,
        parentDataProperty: "conditions",
        rootData
      })) {
        vErrors = vErrors === null ? validate418.errors : vErrors.concat(validate418.errors);
        errors = vErrors.length;
      }
    }
    if (data.endpoint !== undefined) {
      if (!validate26(data.endpoint, {
        instancePath: instancePath + "/endpoint",
        parentData: data,
        parentDataProperty: "endpoint",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.labelFingerprint !== undefined) {
      if (!validate26(data.labelFingerprint, {
        instancePath: instancePath + "/labelFingerprint",
        parentData: data,
        parentDataProperty: "labelFingerprint",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.masterVersion !== undefined) {
      if (!validate26(data.masterVersion, {
        instancePath: instancePath + "/masterVersion",
        parentData: data,
        parentDataProperty: "masterVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.observedGeneration !== undefined) {
      if (!validate45(data.observedGeneration, {
        instancePath: instancePath + "/observedGeneration",
        parentData: data,
        parentDataProperty: "observedGeneration",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.operation !== undefined) {
      if (!validate26(data.operation, {
        instancePath: instancePath + "/operation",
        parentData: data,
        parentDataProperty: "operation",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.selfLink !== undefined) {
      if (!validate26(data.selfLink, {
        instancePath: instancePath + "/selfLink",
        parentData: data,
        parentDataProperty: "selfLink",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.servicesIpv4Cidr !== undefined) {
      if (!validate26(data.servicesIpv4Cidr, {
        instancePath: instancePath + "/servicesIpv4Cidr",
        parentData: data,
        parentDataProperty: "servicesIpv4Cidr",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.tpuIpv4CidrBlock !== undefined) {
      if (!validate26(data.tpuIpv4CidrBlock, {
        instancePath: instancePath + "/tpuIpv4CidrBlock",
        parentData: data,
        parentDataProperty: "tpuIpv4CidrBlock",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate417.errors = vErrors;
  return errors === 0;
}
function validate60(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="container.cnrm.cloud.google.com.v1beta1.ContainerCluster" */;
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
      if (!validate61(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
        errors = vErrors.length;
      }
    }
    if (data.kind !== undefined) {
      if (!validate63(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate63.errors : vErrors.concat(validate63.errors);
        errors = vErrors.length;
      }
    }
    if (data.metadata !== undefined) {
      if (!validate65(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate65.errors : vErrors.concat(validate65.errors);
        errors = vErrors.length;
      }
    }
    if (data.spec !== undefined) {
      if (!validate69(data.spec, {
        instancePath: instancePath + "/spec",
        parentData: data,
        parentDataProperty: "spec",
        rootData
      })) {
        vErrors = vErrors === null ? validate69.errors : vErrors.concat(validate69.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate417(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate417.errors : vErrors.concat(validate417.errors);
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
  validate60.errors = vErrors;
  return errors === 0;
}