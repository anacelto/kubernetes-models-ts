export const validate = validate25;
const schema9 = {
  "properties": {
    "allowPrivilegeEscalation": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "allowedCSIDrivers": {
      "$ref": "fZggyUofOPcixbiOdQUa9jIFziOSdzbktFs8gUCck"
    },
    "allowedCapabilities": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "allowedFlexVolumes": {
      "$ref": "kGwF4enbVDHmLaRlYWH55IVYQeDWfWNeSInSdg"
    },
    "allowedHostPaths": {
      "$ref": "7whLrOZviITyEtA23FBQkBef36XrmzngRsOuaYxM"
    },
    "allowedProcMountTypes": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "allowedUnsafeSysctls": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "defaultAddCapabilities": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "defaultAllowPrivilegeEscalation": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "forbiddenSysctls": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "fsGroup": {
      "$ref": "0dVGGwnGRsvZqlX0LOXxQ9pphg0iEYH9GmM3NDhqo"
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
    "hostPorts": {
      "$ref": "NR9hBxRJ4uYuQd2AFQcp6XN3bXr3bKFBd2U7Bc3Tnco"
    },
    "privileged": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "readOnlyRootFilesystem": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "requiredDropCapabilities": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "runAsGroup": {
      "$ref": "Rg3koTYFsFYoLIUG48XfIwPe6LHMo3CgrlPINWOJas"
    },
    "runAsUser": {
      "$ref": "uBrOLVVqIJxd9JpxSQ9oMpYLpXWtNtIr2q0msAsu3cE"
    },
    "runtimeClass": {
      "$ref": "UwMgQgEknKzQiodZpf9kD1fuTwfcmXd8LetSQBXrqsA"
    },
    "seLinux": {
      "$ref": "uqgdzN2et5bacSbotDBY8zOgrbcrXVG5QngeO4"
    },
    "supplementalGroups": {
      "$ref": "Dh80uR7OzrYGXID9Kk2kI96crVBDbPIfxOPHz26Zz6s"
    },
    "volumes": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    }
  },
  "required": ["seLinux", "runAsUser", "supplementalGroups", "fsGroup"],
  "type": "object",
  "$id": "io.k8s.api.extensions.v1beta1.PodSecurityPolicySpec"
};
const schema8 = {
  "type": "boolean",
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
  validate24.errors = vErrors;
  return errors === 0;
}
const schema10 = {
  "items": {
    "$ref": "QnF4EhmT1kC8HYGH56cTLkHctVfnxDihtHq2HxrWBT4"
  },
  "type": "array",
  "nullable": true
};
const schema11 = {
  "$ref": "io.k8s.api.extensions.v1beta1.AllowedCSIDriver#"
};
const schema12 = {};
import { validate as validate29 } from "./IoK8sApiExtensionsV1beta1AllowedCSIDriver";
function validate28(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate29(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
    errors = vErrors.length;
  }
  validate28.errors = vErrors;
  return errors === 0;
}
function validate27(data, {
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
  validate27.errors = vErrors;
  return errors === 0;
}
const schema6 = {
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "type": "array",
  "nullable": true
};
const schema7 = {
  "type": "string"
};
function validate22(data, {
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
  validate22.errors = vErrors;
  return errors === 0;
}
function validate21(data, {
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
      if (!validate22(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate21.errors = vErrors;
  return errors === 0;
}
const schema13 = {
  "items": {
    "$ref": "ykNzAWHAROGTUS2v5y2HukGRm9xogrFZ9FlQs4Pso"
  },
  "type": "array",
  "nullable": true
};
const schema14 = {
  "$ref": "io.k8s.api.extensions.v1beta1.AllowedFlexVolume#"
};
const schema15 = {};
import { validate as validate36 } from "./IoK8sApiExtensionsV1beta1AllowedFlexVolume";
function validate35(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate36(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
    errors = vErrors.length;
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
      if (!validate35(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
  }
  validate34.errors = vErrors;
  return errors === 0;
}
const schema16 = {
  "items": {
    "$ref": "5j2HRsOEAxMBl8KTn2gvh0NUdpuQbC7GKJfRcsHZ1E"
  },
  "type": "array",
  "nullable": true
};
const schema17 = {
  "$ref": "io.k8s.api.extensions.v1beta1.AllowedHostPath#"
};
const schema18 = {};
import { validate as validate42 } from "./IoK8sApiExtensionsV1beta1AllowedHostPath";
function validate41(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate42(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
    errors = vErrors.length;
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
      if (!validate41(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
        errors = vErrors.length;
      }
    }
  }
  validate40.errors = vErrors;
  return errors === 0;
}
const schema19 = {
  "$ref": "io.k8s.api.extensions.v1beta1.FSGroupStrategyOptions#"
};
const schema20 = {};
import { validate as validate52 } from "./IoK8sApiExtensionsV1beta1FSGroupStrategyOptions";
function validate51(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate52(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate52.errors : vErrors.concat(validate52.errors);
    errors = vErrors.length;
  }
  validate51.errors = vErrors;
  return errors === 0;
}
const schema21 = {
  "items": {
    "$ref": "FXui0KvAe1G5jCcSnNwg376aiUFjtCp2JKhWZWD28"
  },
  "type": "array",
  "nullable": true
};
const schema22 = {
  "$ref": "io.k8s.api.extensions.v1beta1.HostPortRange#"
};
const schema23 = {};
import { validate as validate60 } from "./IoK8sApiExtensionsV1beta1HostPortRange";
function validate59(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate60(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate60.errors : vErrors.concat(validate60.errors);
    errors = vErrors.length;
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
const schema24 = {
  "nullableRef": "io.k8s.api.extensions.v1beta1.RunAsGroupStrategyOptions#"
};
const schema25 = {};
import { validate as validate68 } from "./IoK8sApiExtensionsV1beta1RunAsGroupStrategyOptions";
function validate67(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate68(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate68.errors : vErrors.concat(validate68.errors);
      errors = vErrors.length;
    }
  }
  validate67.errors = vErrors;
  return errors === 0;
}
const schema26 = {
  "$ref": "io.k8s.api.extensions.v1beta1.RunAsUserStrategyOptions#"
};
const schema27 = {};
import { validate as validate72 } from "./IoK8sApiExtensionsV1beta1RunAsUserStrategyOptions";
function validate71(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate72(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate72.errors : vErrors.concat(validate72.errors);
    errors = vErrors.length;
  }
  validate71.errors = vErrors;
  return errors === 0;
}
const schema28 = {
  "nullableRef": "io.k8s.api.extensions.v1beta1.RuntimeClassStrategyOptions#"
};
const schema29 = {};
import { validate as validate76 } from "./IoK8sApiExtensionsV1beta1RuntimeClassStrategyOptions";
function validate75(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate76(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate76.errors : vErrors.concat(validate76.errors);
      errors = vErrors.length;
    }
  }
  validate75.errors = vErrors;
  return errors === 0;
}
const schema30 = {
  "$ref": "io.k8s.api.extensions.v1beta1.SELinuxStrategyOptions#"
};
const schema31 = {};
import { validate as validate80 } from "./IoK8sApiExtensionsV1beta1SELinuxStrategyOptions";
function validate79(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate80(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate80.errors : vErrors.concat(validate80.errors);
    errors = vErrors.length;
  }
  validate79.errors = vErrors;
  return errors === 0;
}
const schema32 = {
  "$ref": "io.k8s.api.extensions.v1beta1.SupplementalGroupsStrategyOptions#"
};
const schema33 = {};
import { validate as validate84 } from "./IoK8sApiExtensionsV1beta1SupplementalGroupsStrategyOptions";
function validate83(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate84(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate84.errors : vErrors.concat(validate84.errors);
    errors = vErrors.length;
  }
  validate83.errors = vErrors;
  return errors === 0;
}
function validate25(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.extensions.v1beta1.PodSecurityPolicySpec" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.seLinux === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "seLinux"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.runAsUser === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "runAsUser"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.supplementalGroups === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "supplementalGroups"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.fsGroup === undefined) {
      const err3 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "fsGroup"
        }
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    if (data.allowPrivilegeEscalation !== undefined) {
      if (!validate24(data.allowPrivilegeEscalation, {
        instancePath: instancePath + "/allowPrivilegeEscalation",
        parentData: data,
        parentDataProperty: "allowPrivilegeEscalation",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.allowedCSIDrivers !== undefined) {
      if (!validate27(data.allowedCSIDrivers, {
        instancePath: instancePath + "/allowedCSIDrivers",
        parentData: data,
        parentDataProperty: "allowedCSIDrivers",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.allowedCapabilities !== undefined) {
      if (!validate21(data.allowedCapabilities, {
        instancePath: instancePath + "/allowedCapabilities",
        parentData: data,
        parentDataProperty: "allowedCapabilities",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.allowedFlexVolumes !== undefined) {
      if (!validate34(data.allowedFlexVolumes, {
        instancePath: instancePath + "/allowedFlexVolumes",
        parentData: data,
        parentDataProperty: "allowedFlexVolumes",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.allowedHostPaths !== undefined) {
      if (!validate40(data.allowedHostPaths, {
        instancePath: instancePath + "/allowedHostPaths",
        parentData: data,
        parentDataProperty: "allowedHostPaths",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
    if (data.allowedProcMountTypes !== undefined) {
      if (!validate21(data.allowedProcMountTypes, {
        instancePath: instancePath + "/allowedProcMountTypes",
        parentData: data,
        parentDataProperty: "allowedProcMountTypes",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.allowedUnsafeSysctls !== undefined) {
      if (!validate21(data.allowedUnsafeSysctls, {
        instancePath: instancePath + "/allowedUnsafeSysctls",
        parentData: data,
        parentDataProperty: "allowedUnsafeSysctls",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.defaultAddCapabilities !== undefined) {
      if (!validate21(data.defaultAddCapabilities, {
        instancePath: instancePath + "/defaultAddCapabilities",
        parentData: data,
        parentDataProperty: "defaultAddCapabilities",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.defaultAllowPrivilegeEscalation !== undefined) {
      if (!validate24(data.defaultAllowPrivilegeEscalation, {
        instancePath: instancePath + "/defaultAllowPrivilegeEscalation",
        parentData: data,
        parentDataProperty: "defaultAllowPrivilegeEscalation",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.forbiddenSysctls !== undefined) {
      if (!validate21(data.forbiddenSysctls, {
        instancePath: instancePath + "/forbiddenSysctls",
        parentData: data,
        parentDataProperty: "forbiddenSysctls",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.fsGroup !== undefined) {
      if (!validate51(data.fsGroup, {
        instancePath: instancePath + "/fsGroup",
        parentData: data,
        parentDataProperty: "fsGroup",
        rootData
      })) {
        vErrors = vErrors === null ? validate51.errors : vErrors.concat(validate51.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostIPC !== undefined) {
      if (!validate24(data.hostIPC, {
        instancePath: instancePath + "/hostIPC",
        parentData: data,
        parentDataProperty: "hostIPC",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostNetwork !== undefined) {
      if (!validate24(data.hostNetwork, {
        instancePath: instancePath + "/hostNetwork",
        parentData: data,
        parentDataProperty: "hostNetwork",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostPID !== undefined) {
      if (!validate24(data.hostPID, {
        instancePath: instancePath + "/hostPID",
        parentData: data,
        parentDataProperty: "hostPID",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostPorts !== undefined) {
      if (!validate58(data.hostPorts, {
        instancePath: instancePath + "/hostPorts",
        parentData: data,
        parentDataProperty: "hostPorts",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.privileged !== undefined) {
      if (!validate24(data.privileged, {
        instancePath: instancePath + "/privileged",
        parentData: data,
        parentDataProperty: "privileged",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.readOnlyRootFilesystem !== undefined) {
      if (!validate24(data.readOnlyRootFilesystem, {
        instancePath: instancePath + "/readOnlyRootFilesystem",
        parentData: data,
        parentDataProperty: "readOnlyRootFilesystem",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.requiredDropCapabilities !== undefined) {
      if (!validate21(data.requiredDropCapabilities, {
        instancePath: instancePath + "/requiredDropCapabilities",
        parentData: data,
        parentDataProperty: "requiredDropCapabilities",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.runAsGroup !== undefined) {
      if (!validate67(data.runAsGroup, {
        instancePath: instancePath + "/runAsGroup",
        parentData: data,
        parentDataProperty: "runAsGroup",
        rootData
      })) {
        vErrors = vErrors === null ? validate67.errors : vErrors.concat(validate67.errors);
        errors = vErrors.length;
      }
    }
    if (data.runAsUser !== undefined) {
      if (!validate71(data.runAsUser, {
        instancePath: instancePath + "/runAsUser",
        parentData: data,
        parentDataProperty: "runAsUser",
        rootData
      })) {
        vErrors = vErrors === null ? validate71.errors : vErrors.concat(validate71.errors);
        errors = vErrors.length;
      }
    }
    if (data.runtimeClass !== undefined) {
      if (!validate75(data.runtimeClass, {
        instancePath: instancePath + "/runtimeClass",
        parentData: data,
        parentDataProperty: "runtimeClass",
        rootData
      })) {
        vErrors = vErrors === null ? validate75.errors : vErrors.concat(validate75.errors);
        errors = vErrors.length;
      }
    }
    if (data.seLinux !== undefined) {
      if (!validate79(data.seLinux, {
        instancePath: instancePath + "/seLinux",
        parentData: data,
        parentDataProperty: "seLinux",
        rootData
      })) {
        vErrors = vErrors === null ? validate79.errors : vErrors.concat(validate79.errors);
        errors = vErrors.length;
      }
    }
    if (data.supplementalGroups !== undefined) {
      if (!validate83(data.supplementalGroups, {
        instancePath: instancePath + "/supplementalGroups",
        parentData: data,
        parentDataProperty: "supplementalGroups",
        rootData
      })) {
        vErrors = vErrors === null ? validate83.errors : vErrors.concat(validate83.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumes !== undefined) {
      if (!validate21(data.volumes, {
        instancePath: instancePath + "/volumes",
        parentData: data,
        parentDataProperty: "volumes",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
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
  validate25.errors = vErrors;
  return errors === 0;
}