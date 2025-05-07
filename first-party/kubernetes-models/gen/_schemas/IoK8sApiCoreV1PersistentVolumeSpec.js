export const validate = validate24;
const schema8 = {
  "properties": {
    "accessModes": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "awsElasticBlockStore": {
      "$ref": "KMvyOFtGvuQUpDMumDQoA57oGPlesnc3i9BOnP7k0"
    },
    "azureDisk": {
      "$ref": "TKclwXTdOo5UjECMuYooE9PszlDUR6OJ2dbtNbLp8g8"
    },
    "azureFile": {
      "$ref": "1n7kziQz5ICCl09j3B3sHzDdeBpjbDGEULjjwECNQ"
    },
    "capacity": {
      "$ref": "NK81GiP5i4PAaG93bZ732LPEr0MeIJatXjgw0ewKBgg"
    },
    "cephfs": {
      "$ref": "URBlsG27dlbdjw0rDSbEHH9VYxrDaxp0OceVKVXIJ0"
    },
    "cinder": {
      "$ref": "dL9RnXy0mEW26yJ4LUNGErh92ROwGds6UQUIUI0sgw4"
    },
    "claimRef": {
      "$ref": "jYn9JZbz65AwwugWuS6edUEOxbECgF62vZXknFUOk"
    },
    "csi": {
      "$ref": "V5sYoMyvinYV3phwwW6oqYCDi62WkcY0QJMOHOw7uWk"
    },
    "fc": {
      "$ref": "h6GC8YLLaMe3ddLWtx5C5DePlpYlszbRrP0e5Pq0g"
    },
    "flexVolume": {
      "$ref": "VDmAN7CzFGC1QFkpqW1vqLw6DTSvdCfIM1utCt8t9Q"
    },
    "flocker": {
      "$ref": "lZamS3dBU7mON75ciQHzTVa5qEhS1bHZK4ltDioO4w"
    },
    "gcePersistentDisk": {
      "$ref": "14YP6gRUzXdrsHa9BesjFU8JYgSorgN3jXieci49HJA"
    },
    "glusterfs": {
      "$ref": "Abr6d0V1cFAdsHwJjfYAhEO2fi8sUUUBCB136xdRcQ"
    },
    "hostPath": {
      "$ref": "8tNyNESMzz3ujdnQg2RPTnZiKbQ81QBUbuQsoD5DQy8"
    },
    "iscsi": {
      "$ref": "gT5sQct1cnATHnNlyyKBXd1mdV4ZgBhj6NJXoqTw"
    },
    "local": {
      "$ref": "3eSN0ks1Al4HQT34nH5fS6B6TCLipoSWEnF1Jk1BRgo"
    },
    "mountOptions": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "nfs": {
      "$ref": "vEGBehDL2bVQzuVgwO0ICUb1fCF760EQINBu6ac88A"
    },
    "nodeAffinity": {
      "$ref": "it5T5SF7usGCoWgsLggn4lm1roBbZoqFiV6jO6gos"
    },
    "persistentVolumeReclaimPolicy": {
      "$ref": "dtmIHMbjyOfKKRMe8KeK9cl8TrRujBK1gy8cdvlY3s"
    },
    "photonPersistentDisk": {
      "$ref": "Vg1DI7L6OPk2cxtB3SKM7ZroJX0wu1D8K6cytzSQ6Y"
    },
    "portworxVolume": {
      "$ref": "t0QdEMnB0sszjjGFC26rfo82iu1q4MRs2GZeXhOw"
    },
    "quobyte": {
      "$ref": "AM93iMXssu7L73k6dQNHtHUkhd6vb1mHgk5Nfa6WPw"
    },
    "rbd": {
      "$ref": "TzDWj6OThAm5RTjEQ1E1C5OVHaMmKo7hyxWbztDFY"
    },
    "scaleIO": {
      "$ref": "hbiWmIJjYQ6vAUDsyCZF3dnvag8FfAgdlc5aXkgfw"
    },
    "storageClassName": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "storageos": {
      "$ref": "39M0iRt0ao1rpNQOrlO62ejdvJsGpuoCnPjn2bnU"
    },
    "volumeMode": {
      "$ref": "T7QiObUQceNYIgzRxgMEFwr6Oicefowm6f8fY"
    },
    "vsphereVolume": {
      "$ref": "1XvdGiHnpCIkFU7UNAvlLvgMu9joMPZP8yWm8KK21tg"
    }
  },
  "type": "object",
  "$id": "io.k8s.api.core.v1.PersistentVolumeSpec"
};
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
const schema9 = {
  "nullableRef": "io.k8s.api.core.v1.AWSElasticBlockStoreVolumeSource#"
};
const schema10 = {};
import { validate as validate27 } from "./IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource";
function validate26(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate27(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
      errors = vErrors.length;
    }
  }
  validate26.errors = vErrors;
  return errors === 0;
}
const schema11 = {
  "nullableRef": "io.k8s.api.core.v1.AzureDiskVolumeSource#"
};
const schema12 = {};
import { validate as validate31 } from "./IoK8sApiCoreV1AzureDiskVolumeSource";
function validate30(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate31(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
      errors = vErrors.length;
    }
  }
  validate30.errors = vErrors;
  return errors === 0;
}
const schema13 = {
  "nullableRef": "io.k8s.api.core.v1.AzureFilePersistentVolumeSource#"
};
const schema14 = {};
import { validate as validate35 } from "./IoK8sApiCoreV1AzureFilePersistentVolumeSource";
function validate34(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate35(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
      errors = vErrors.length;
    }
  }
  validate34.errors = vErrors;
  return errors === 0;
}
const schema15 = {
  "additionalProperties": {
    "$ref": "XtCS7FYvqoPp05TaNACrQJgsQuQQ1HbhFGV5p2hg"
  },
  "type": "object",
  "nullable": true
};
const schema16 = {
  "$ref": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
};
const schema17 = {};
import { validate as validate40 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApiResourceQuantity";
function validate39(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate40(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
    errors = vErrors.length;
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
  if (!(data && typeof data == "object" && !Array.isArray(data)) && data !== null) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
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
      if (!validate39(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
        rootData
      })) {
        vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
        errors = vErrors.length;
      }
    }
  }
  validate38.errors = vErrors;
  return errors === 0;
}
const schema18 = {
  "nullableRef": "io.k8s.api.core.v1.CephFSPersistentVolumeSource#"
};
const schema19 = {};
import { validate as validate45 } from "./IoK8sApiCoreV1CephFSPersistentVolumeSource";
function validate44(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate45(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
      errors = vErrors.length;
    }
  }
  validate44.errors = vErrors;
  return errors === 0;
}
const schema20 = {
  "nullableRef": "io.k8s.api.core.v1.CinderPersistentVolumeSource#"
};
const schema21 = {};
import { validate as validate49 } from "./IoK8sApiCoreV1CinderPersistentVolumeSource";
function validate48(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate49(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
      errors = vErrors.length;
    }
  }
  validate48.errors = vErrors;
  return errors === 0;
}
const schema22 = {
  "nullableRef": "io.k8s.api.core.v1.ObjectReference#"
};
const schema23 = {};
import { validate as validate53 } from "./IoK8sApiCoreV1ObjectReference";
function validate52(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate53(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate53.errors : vErrors.concat(validate53.errors);
      errors = vErrors.length;
    }
  }
  validate52.errors = vErrors;
  return errors === 0;
}
const schema24 = {
  "nullableRef": "io.k8s.api.core.v1.CSIPersistentVolumeSource#"
};
const schema25 = {};
import { validate as validate57 } from "./IoK8sApiCoreV1CSIPersistentVolumeSource";
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
const schema26 = {
  "nullableRef": "io.k8s.api.core.v1.FCVolumeSource#"
};
const schema27 = {};
import { validate as validate61 } from "./IoK8sApiCoreV1FCVolumeSource";
function validate60(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate61(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
      errors = vErrors.length;
    }
  }
  validate60.errors = vErrors;
  return errors === 0;
}
const schema28 = {
  "nullableRef": "io.k8s.api.core.v1.FlexPersistentVolumeSource#"
};
const schema29 = {};
import { validate as validate65 } from "./IoK8sApiCoreV1FlexPersistentVolumeSource";
function validate64(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate65(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate65.errors : vErrors.concat(validate65.errors);
      errors = vErrors.length;
    }
  }
  validate64.errors = vErrors;
  return errors === 0;
}
const schema30 = {
  "nullableRef": "io.k8s.api.core.v1.FlockerVolumeSource#"
};
const schema31 = {};
import { validate as validate69 } from "./IoK8sApiCoreV1FlockerVolumeSource";
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
const schema32 = {
  "nullableRef": "io.k8s.api.core.v1.GCEPersistentDiskVolumeSource#"
};
const schema33 = {};
import { validate as validate73 } from "./IoK8sApiCoreV1GCEPersistentDiskVolumeSource";
function validate72(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate73(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate73.errors : vErrors.concat(validate73.errors);
      errors = vErrors.length;
    }
  }
  validate72.errors = vErrors;
  return errors === 0;
}
const schema34 = {
  "nullableRef": "io.k8s.api.core.v1.GlusterfsPersistentVolumeSource#"
};
const schema35 = {};
import { validate as validate77 } from "./IoK8sApiCoreV1GlusterfsPersistentVolumeSource";
function validate76(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate77(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate77.errors : vErrors.concat(validate77.errors);
      errors = vErrors.length;
    }
  }
  validate76.errors = vErrors;
  return errors === 0;
}
const schema36 = {
  "nullableRef": "io.k8s.api.core.v1.HostPathVolumeSource#"
};
const schema37 = {};
import { validate as validate81 } from "./IoK8sApiCoreV1HostPathVolumeSource";
function validate80(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate81(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate81.errors : vErrors.concat(validate81.errors);
      errors = vErrors.length;
    }
  }
  validate80.errors = vErrors;
  return errors === 0;
}
const schema38 = {
  "nullableRef": "io.k8s.api.core.v1.ISCSIPersistentVolumeSource#"
};
const schema39 = {};
import { validate as validate85 } from "./IoK8sApiCoreV1ISCSIPersistentVolumeSource";
function validate84(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate85(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate85.errors : vErrors.concat(validate85.errors);
      errors = vErrors.length;
    }
  }
  validate84.errors = vErrors;
  return errors === 0;
}
const schema40 = {
  "nullableRef": "io.k8s.api.core.v1.LocalVolumeSource#"
};
const schema41 = {};
import { validate as validate89 } from "./IoK8sApiCoreV1LocalVolumeSource";
function validate88(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate89(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate89.errors : vErrors.concat(validate89.errors);
      errors = vErrors.length;
    }
  }
  validate88.errors = vErrors;
  return errors === 0;
}
const schema42 = {
  "nullableRef": "io.k8s.api.core.v1.NFSVolumeSource#"
};
const schema43 = {};
import { validate as validate94 } from "./IoK8sApiCoreV1NFSVolumeSource";
function validate93(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate94(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate94.errors : vErrors.concat(validate94.errors);
      errors = vErrors.length;
    }
  }
  validate93.errors = vErrors;
  return errors === 0;
}
const schema44 = {
  "nullableRef": "io.k8s.api.core.v1.VolumeNodeAffinity#"
};
const schema45 = {};
import { validate as validate98 } from "./IoK8sApiCoreV1VolumeNodeAffinity";
function validate97(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate98(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate98.errors : vErrors.concat(validate98.errors);
      errors = vErrors.length;
    }
  }
  validate97.errors = vErrors;
  return errors === 0;
}
const schema46 = {
  "enum": ["Delete", "Recycle", "Retain"],
  "type": "string",
  "nullable": true
};
function validate101(data, {
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
  if (!(data === "Delete" || data === "Recycle" || data === "Retain")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema46.enum
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
const schema47 = {
  "nullableRef": "io.k8s.api.core.v1.PhotonPersistentDiskVolumeSource#"
};
const schema48 = {};
import { validate as validate104 } from "./IoK8sApiCoreV1PhotonPersistentDiskVolumeSource";
function validate103(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate104(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate104.errors : vErrors.concat(validate104.errors);
      errors = vErrors.length;
    }
  }
  validate103.errors = vErrors;
  return errors === 0;
}
const schema49 = {
  "nullableRef": "io.k8s.api.core.v1.PortworxVolumeSource#"
};
const schema50 = {};
import { validate as validate108 } from "./IoK8sApiCoreV1PortworxVolumeSource";
function validate107(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate108(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate108.errors : vErrors.concat(validate108.errors);
      errors = vErrors.length;
    }
  }
  validate107.errors = vErrors;
  return errors === 0;
}
const schema51 = {
  "nullableRef": "io.k8s.api.core.v1.QuobyteVolumeSource#"
};
const schema52 = {};
import { validate as validate112 } from "./IoK8sApiCoreV1QuobyteVolumeSource";
function validate111(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate112(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate112.errors : vErrors.concat(validate112.errors);
      errors = vErrors.length;
    }
  }
  validate111.errors = vErrors;
  return errors === 0;
}
const schema53 = {
  "nullableRef": "io.k8s.api.core.v1.RBDPersistentVolumeSource#"
};
const schema54 = {};
import { validate as validate116 } from "./IoK8sApiCoreV1RBDPersistentVolumeSource";
function validate115(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate116(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate116.errors : vErrors.concat(validate116.errors);
      errors = vErrors.length;
    }
  }
  validate115.errors = vErrors;
  return errors === 0;
}
const schema55 = {
  "nullableRef": "io.k8s.api.core.v1.ScaleIOPersistentVolumeSource#"
};
const schema56 = {};
import { validate as validate120 } from "./IoK8sApiCoreV1ScaleIOPersistentVolumeSource";
function validate119(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate120(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate120.errors : vErrors.concat(validate120.errors);
      errors = vErrors.length;
    }
  }
  validate119.errors = vErrors;
  return errors === 0;
}
const schema57 = {
  "type": "string",
  "nullable": true
};
function validate123(data, {
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
  validate123.errors = vErrors;
  return errors === 0;
}
const schema58 = {
  "nullableRef": "io.k8s.api.core.v1.StorageOSPersistentVolumeSource#"
};
const schema59 = {};
import { validate as validate126 } from "./IoK8sApiCoreV1StorageOSPersistentVolumeSource";
function validate125(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate126(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate126.errors : vErrors.concat(validate126.errors);
      errors = vErrors.length;
    }
  }
  validate125.errors = vErrors;
  return errors === 0;
}
const schema60 = {
  "enum": ["Block", "Filesystem"],
  "type": "string",
  "nullable": true
};
function validate129(data, {
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
  if (!(data === "Block" || data === "Filesystem")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema60.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate129.errors = vErrors;
  return errors === 0;
}
const schema61 = {
  "nullableRef": "io.k8s.api.core.v1.VsphereVirtualDiskVolumeSource#"
};
const schema62 = {};
import { validate as validate132 } from "./IoK8sApiCoreV1VsphereVirtualDiskVolumeSource";
function validate131(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate132(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate132.errors : vErrors.concat(validate132.errors);
      errors = vErrors.length;
    }
  }
  validate131.errors = vErrors;
  return errors === 0;
}
function validate24(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.core.v1.PersistentVolumeSpec" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.accessModes !== undefined) {
      if (!validate21(data.accessModes, {
        instancePath: instancePath + "/accessModes",
        parentData: data,
        parentDataProperty: "accessModes",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.awsElasticBlockStore !== undefined) {
      if (!validate26(data.awsElasticBlockStore, {
        instancePath: instancePath + "/awsElasticBlockStore",
        parentData: data,
        parentDataProperty: "awsElasticBlockStore",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.azureDisk !== undefined) {
      if (!validate30(data.azureDisk, {
        instancePath: instancePath + "/azureDisk",
        parentData: data,
        parentDataProperty: "azureDisk",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.azureFile !== undefined) {
      if (!validate34(data.azureFile, {
        instancePath: instancePath + "/azureFile",
        parentData: data,
        parentDataProperty: "azureFile",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.capacity !== undefined) {
      if (!validate38(data.capacity, {
        instancePath: instancePath + "/capacity",
        parentData: data,
        parentDataProperty: "capacity",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
        errors = vErrors.length;
      }
    }
    if (data.cephfs !== undefined) {
      if (!validate44(data.cephfs, {
        instancePath: instancePath + "/cephfs",
        parentData: data,
        parentDataProperty: "cephfs",
        rootData
      })) {
        vErrors = vErrors === null ? validate44.errors : vErrors.concat(validate44.errors);
        errors = vErrors.length;
      }
    }
    if (data.cinder !== undefined) {
      if (!validate48(data.cinder, {
        instancePath: instancePath + "/cinder",
        parentData: data,
        parentDataProperty: "cinder",
        rootData
      })) {
        vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
        errors = vErrors.length;
      }
    }
    if (data.claimRef !== undefined) {
      if (!validate52(data.claimRef, {
        instancePath: instancePath + "/claimRef",
        parentData: data,
        parentDataProperty: "claimRef",
        rootData
      })) {
        vErrors = vErrors === null ? validate52.errors : vErrors.concat(validate52.errors);
        errors = vErrors.length;
      }
    }
    if (data.csi !== undefined) {
      if (!validate56(data.csi, {
        instancePath: instancePath + "/csi",
        parentData: data,
        parentDataProperty: "csi",
        rootData
      })) {
        vErrors = vErrors === null ? validate56.errors : vErrors.concat(validate56.errors);
        errors = vErrors.length;
      }
    }
    if (data.fc !== undefined) {
      if (!validate60(data.fc, {
        instancePath: instancePath + "/fc",
        parentData: data,
        parentDataProperty: "fc",
        rootData
      })) {
        vErrors = vErrors === null ? validate60.errors : vErrors.concat(validate60.errors);
        errors = vErrors.length;
      }
    }
    if (data.flexVolume !== undefined) {
      if (!validate64(data.flexVolume, {
        instancePath: instancePath + "/flexVolume",
        parentData: data,
        parentDataProperty: "flexVolume",
        rootData
      })) {
        vErrors = vErrors === null ? validate64.errors : vErrors.concat(validate64.errors);
        errors = vErrors.length;
      }
    }
    if (data.flocker !== undefined) {
      if (!validate68(data.flocker, {
        instancePath: instancePath + "/flocker",
        parentData: data,
        parentDataProperty: "flocker",
        rootData
      })) {
        vErrors = vErrors === null ? validate68.errors : vErrors.concat(validate68.errors);
        errors = vErrors.length;
      }
    }
    if (data.gcePersistentDisk !== undefined) {
      if (!validate72(data.gcePersistentDisk, {
        instancePath: instancePath + "/gcePersistentDisk",
        parentData: data,
        parentDataProperty: "gcePersistentDisk",
        rootData
      })) {
        vErrors = vErrors === null ? validate72.errors : vErrors.concat(validate72.errors);
        errors = vErrors.length;
      }
    }
    if (data.glusterfs !== undefined) {
      if (!validate76(data.glusterfs, {
        instancePath: instancePath + "/glusterfs",
        parentData: data,
        parentDataProperty: "glusterfs",
        rootData
      })) {
        vErrors = vErrors === null ? validate76.errors : vErrors.concat(validate76.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostPath !== undefined) {
      if (!validate80(data.hostPath, {
        instancePath: instancePath + "/hostPath",
        parentData: data,
        parentDataProperty: "hostPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate80.errors : vErrors.concat(validate80.errors);
        errors = vErrors.length;
      }
    }
    if (data.iscsi !== undefined) {
      if (!validate84(data.iscsi, {
        instancePath: instancePath + "/iscsi",
        parentData: data,
        parentDataProperty: "iscsi",
        rootData
      })) {
        vErrors = vErrors === null ? validate84.errors : vErrors.concat(validate84.errors);
        errors = vErrors.length;
      }
    }
    if (data.local !== undefined) {
      if (!validate88(data.local, {
        instancePath: instancePath + "/local",
        parentData: data,
        parentDataProperty: "local",
        rootData
      })) {
        vErrors = vErrors === null ? validate88.errors : vErrors.concat(validate88.errors);
        errors = vErrors.length;
      }
    }
    if (data.mountOptions !== undefined) {
      if (!validate21(data.mountOptions, {
        instancePath: instancePath + "/mountOptions",
        parentData: data,
        parentDataProperty: "mountOptions",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.nfs !== undefined) {
      if (!validate93(data.nfs, {
        instancePath: instancePath + "/nfs",
        parentData: data,
        parentDataProperty: "nfs",
        rootData
      })) {
        vErrors = vErrors === null ? validate93.errors : vErrors.concat(validate93.errors);
        errors = vErrors.length;
      }
    }
    if (data.nodeAffinity !== undefined) {
      if (!validate97(data.nodeAffinity, {
        instancePath: instancePath + "/nodeAffinity",
        parentData: data,
        parentDataProperty: "nodeAffinity",
        rootData
      })) {
        vErrors = vErrors === null ? validate97.errors : vErrors.concat(validate97.errors);
        errors = vErrors.length;
      }
    }
    if (data.persistentVolumeReclaimPolicy !== undefined) {
      if (!validate101(data.persistentVolumeReclaimPolicy, {
        instancePath: instancePath + "/persistentVolumeReclaimPolicy",
        parentData: data,
        parentDataProperty: "persistentVolumeReclaimPolicy",
        rootData
      })) {
        vErrors = vErrors === null ? validate101.errors : vErrors.concat(validate101.errors);
        errors = vErrors.length;
      }
    }
    if (data.photonPersistentDisk !== undefined) {
      if (!validate103(data.photonPersistentDisk, {
        instancePath: instancePath + "/photonPersistentDisk",
        parentData: data,
        parentDataProperty: "photonPersistentDisk",
        rootData
      })) {
        vErrors = vErrors === null ? validate103.errors : vErrors.concat(validate103.errors);
        errors = vErrors.length;
      }
    }
    if (data.portworxVolume !== undefined) {
      if (!validate107(data.portworxVolume, {
        instancePath: instancePath + "/portworxVolume",
        parentData: data,
        parentDataProperty: "portworxVolume",
        rootData
      })) {
        vErrors = vErrors === null ? validate107.errors : vErrors.concat(validate107.errors);
        errors = vErrors.length;
      }
    }
    if (data.quobyte !== undefined) {
      if (!validate111(data.quobyte, {
        instancePath: instancePath + "/quobyte",
        parentData: data,
        parentDataProperty: "quobyte",
        rootData
      })) {
        vErrors = vErrors === null ? validate111.errors : vErrors.concat(validate111.errors);
        errors = vErrors.length;
      }
    }
    if (data.rbd !== undefined) {
      if (!validate115(data.rbd, {
        instancePath: instancePath + "/rbd",
        parentData: data,
        parentDataProperty: "rbd",
        rootData
      })) {
        vErrors = vErrors === null ? validate115.errors : vErrors.concat(validate115.errors);
        errors = vErrors.length;
      }
    }
    if (data.scaleIO !== undefined) {
      if (!validate119(data.scaleIO, {
        instancePath: instancePath + "/scaleIO",
        parentData: data,
        parentDataProperty: "scaleIO",
        rootData
      })) {
        vErrors = vErrors === null ? validate119.errors : vErrors.concat(validate119.errors);
        errors = vErrors.length;
      }
    }
    if (data.storageClassName !== undefined) {
      if (!validate123(data.storageClassName, {
        instancePath: instancePath + "/storageClassName",
        parentData: data,
        parentDataProperty: "storageClassName",
        rootData
      })) {
        vErrors = vErrors === null ? validate123.errors : vErrors.concat(validate123.errors);
        errors = vErrors.length;
      }
    }
    if (data.storageos !== undefined) {
      if (!validate125(data.storageos, {
        instancePath: instancePath + "/storageos",
        parentData: data,
        parentDataProperty: "storageos",
        rootData
      })) {
        vErrors = vErrors === null ? validate125.errors : vErrors.concat(validate125.errors);
        errors = vErrors.length;
      }
    }
    if (data.volumeMode !== undefined) {
      if (!validate129(data.volumeMode, {
        instancePath: instancePath + "/volumeMode",
        parentData: data,
        parentDataProperty: "volumeMode",
        rootData
      })) {
        vErrors = vErrors === null ? validate129.errors : vErrors.concat(validate129.errors);
        errors = vErrors.length;
      }
    }
    if (data.vsphereVolume !== undefined) {
      if (!validate131(data.vsphereVolume, {
        instancePath: instancePath + "/vsphereVolume",
        parentData: data,
        parentDataProperty: "vsphereVolume",
        rootData
      })) {
        vErrors = vErrors === null ? validate131.errors : vErrors.concat(validate131.errors);
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
  validate24.errors = vErrors;
  return errors === 0;
}