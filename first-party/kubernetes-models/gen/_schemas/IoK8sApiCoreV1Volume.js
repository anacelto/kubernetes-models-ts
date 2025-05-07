export const validate = validate21;
const schema6 = {
  "properties": {
    "awsElasticBlockStore": {
      "$ref": "KMvyOFtGvuQUpDMumDQoA57oGPlesnc3i9BOnP7k0"
    },
    "azureDisk": {
      "$ref": "TKclwXTdOo5UjECMuYooE9PszlDUR6OJ2dbtNbLp8g8"
    },
    "azureFile": {
      "$ref": "K0BOk1pp4mf2zxWQ8JPCgNvWQFY4pRqA7JZk72IA8"
    },
    "cephfs": {
      "$ref": "YfPiLx9O3iCdIe4vAnEN8v1JQO7Q2OE41npn4d68840"
    },
    "cinder": {
      "$ref": "feBxBHlSQ52JeRCZ8WtrcGGxPUYwNDSZuYWgK0ld0"
    },
    "configMap": {
      "$ref": "4pqmppENgC2RnozaQ7jx2OkXBD66QaKagPNd9Ue8oE"
    },
    "csi": {
      "$ref": "3zDxbWKepH3gLxSOMfdWnRDbSYv6Ro5UT4wYNaYP10"
    },
    "downwardAPI": {
      "$ref": "aynzX8dzhLmq2i1imhlOE6xRzjki8hG9NXaBnR1hoA"
    },
    "emptyDir": {
      "$ref": "cV3rXj9XFi1ySaxlw2noKdEuwPWEy6OmSo3wDxPoPIk"
    },
    "ephemeral": {
      "$ref": "vyiZEqAyJpBlAOmLZj9rrOUDfAuKPqdGjikVrqtga0"
    },
    "fc": {
      "$ref": "h6GC8YLLaMe3ddLWtx5C5DePlpYlszbRrP0e5Pq0g"
    },
    "flexVolume": {
      "$ref": "PtQCDCwTeFMINm0EHDV4gSsLAGwolp0nRw1ellCL4Mc"
    },
    "flocker": {
      "$ref": "lZamS3dBU7mON75ciQHzTVa5qEhS1bHZK4ltDioO4w"
    },
    "gcePersistentDisk": {
      "$ref": "14YP6gRUzXdrsHa9BesjFU8JYgSorgN3jXieci49HJA"
    },
    "gitRepo": {
      "$ref": "XpcYo1Gb3JanbG3EGy6EPs5JjEGSCGnPnJRqgbczc"
    },
    "glusterfs": {
      "$ref": "tPrO5jWyClAQH8NIyv9YdYRUDMQzMEL4OMsGoOHZbg"
    },
    "hostPath": {
      "$ref": "8tNyNESMzz3ujdnQg2RPTnZiKbQ81QBUbuQsoD5DQy8"
    },
    "iscsi": {
      "$ref": "Mrw7og43L9L14faKwh31TD68gRlBnUmnP9Ubxi6h8A"
    },
    "name": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "nfs": {
      "$ref": "vEGBehDL2bVQzuVgwO0ICUb1fCF760EQINBu6ac88A"
    },
    "persistentVolumeClaim": {
      "$ref": "PvXtpj8NP5togBSr4VratgMpjUdRJbVx58pRz04ns"
    },
    "photonPersistentDisk": {
      "$ref": "Vg1DI7L6OPk2cxtB3SKM7ZroJX0wu1D8K6cytzSQ6Y"
    },
    "portworxVolume": {
      "$ref": "t0QdEMnB0sszjjGFC26rfo82iu1q4MRs2GZeXhOw"
    },
    "projected": {
      "$ref": "pwkcRo548L3BQLRWlCj8x9W9r420cR9LQTg2Q6TYR1U"
    },
    "quobyte": {
      "$ref": "AM93iMXssu7L73k6dQNHtHUkhd6vb1mHgk5Nfa6WPw"
    },
    "rbd": {
      "$ref": "TFnPycnQ6ZIVL2bbcicopihXy8h6qOImmXpv5OojB4"
    },
    "scaleIO": {
      "$ref": "zvhM1atC8pHiFuDaLPnQOyij6pEGLJXtRgX4C9phY"
    },
    "secret": {
      "$ref": "aUOy0eEUPFe7sDy6RFsEw3on5XXRYhIspDXSjk9MxvU"
    },
    "storageos": {
      "$ref": "zH9P2bSOvoN74Ufp2ugsNJmnnNvDcGrF22CJWZ3CXFM"
    },
    "vsphereVolume": {
      "$ref": "1XvdGiHnpCIkFU7UNAvlLvgMu9joMPZP8yWm8KK21tg"
    }
  },
  "required": ["name"],
  "type": "object",
  "$id": "io.k8s.api.core.v1.Volume"
};
const schema7 = {
  "nullableRef": "io.k8s.api.core.v1.AWSElasticBlockStoreVolumeSource#"
};
const schema8 = {};
import { validate as validate23 } from "./IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource";
function validate22(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate23(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
      errors = vErrors.length;
    }
  }
  validate22.errors = vErrors;
  return errors === 0;
}
const schema9 = {
  "nullableRef": "io.k8s.api.core.v1.AzureDiskVolumeSource#"
};
const schema10 = {};
import { validate as validate27 } from "./IoK8sApiCoreV1AzureDiskVolumeSource";
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
  "nullableRef": "io.k8s.api.core.v1.AzureFileVolumeSource#"
};
const schema12 = {};
import { validate as validate31 } from "./IoK8sApiCoreV1AzureFileVolumeSource";
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
  "nullableRef": "io.k8s.api.core.v1.CephFSVolumeSource#"
};
const schema14 = {};
import { validate as validate35 } from "./IoK8sApiCoreV1CephFSVolumeSource";
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
  "nullableRef": "io.k8s.api.core.v1.CinderVolumeSource#"
};
const schema16 = {};
import { validate as validate39 } from "./IoK8sApiCoreV1CinderVolumeSource";
function validate38(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate39(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
      errors = vErrors.length;
    }
  }
  validate38.errors = vErrors;
  return errors === 0;
}
const schema17 = {
  "nullableRef": "io.k8s.api.core.v1.ConfigMapVolumeSource#"
};
const schema18 = {};
import { validate as validate43 } from "./IoK8sApiCoreV1ConfigMapVolumeSource";
function validate42(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate43(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
      errors = vErrors.length;
    }
  }
  validate42.errors = vErrors;
  return errors === 0;
}
const schema19 = {
  "nullableRef": "io.k8s.api.core.v1.CSIVolumeSource#"
};
const schema20 = {};
import { validate as validate47 } from "./IoK8sApiCoreV1CSIVolumeSource";
function validate46(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate47(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate47.errors : vErrors.concat(validate47.errors);
      errors = vErrors.length;
    }
  }
  validate46.errors = vErrors;
  return errors === 0;
}
const schema21 = {
  "nullableRef": "io.k8s.api.core.v1.DownwardAPIVolumeSource#"
};
const schema22 = {};
import { validate as validate51 } from "./IoK8sApiCoreV1DownwardAPIVolumeSource";
function validate50(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate51(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate51.errors : vErrors.concat(validate51.errors);
      errors = vErrors.length;
    }
  }
  validate50.errors = vErrors;
  return errors === 0;
}
const schema23 = {
  "nullableRef": "io.k8s.api.core.v1.EmptyDirVolumeSource#"
};
const schema24 = {};
import { validate as validate55 } from "./IoK8sApiCoreV1EmptyDirVolumeSource";
function validate54(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate55(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
      errors = vErrors.length;
    }
  }
  validate54.errors = vErrors;
  return errors === 0;
}
const schema25 = {
  "nullableRef": "io.k8s.api.core.v1.EphemeralVolumeSource#"
};
const schema26 = {};
import { validate as validate59 } from "./IoK8sApiCoreV1EphemeralVolumeSource";
function validate58(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate59(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate59.errors : vErrors.concat(validate59.errors);
      errors = vErrors.length;
    }
  }
  validate58.errors = vErrors;
  return errors === 0;
}
const schema27 = {
  "nullableRef": "io.k8s.api.core.v1.FCVolumeSource#"
};
const schema28 = {};
import { validate as validate63 } from "./IoK8sApiCoreV1FCVolumeSource";
function validate62(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate63(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate63.errors : vErrors.concat(validate63.errors);
      errors = vErrors.length;
    }
  }
  validate62.errors = vErrors;
  return errors === 0;
}
const schema29 = {
  "nullableRef": "io.k8s.api.core.v1.FlexVolumeSource#"
};
const schema30 = {};
import { validate as validate67 } from "./IoK8sApiCoreV1FlexVolumeSource";
function validate66(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate67(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate67.errors : vErrors.concat(validate67.errors);
      errors = vErrors.length;
    }
  }
  validate66.errors = vErrors;
  return errors === 0;
}
const schema31 = {
  "nullableRef": "io.k8s.api.core.v1.FlockerVolumeSource#"
};
const schema32 = {};
import { validate as validate71 } from "./IoK8sApiCoreV1FlockerVolumeSource";
function validate70(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate71(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate71.errors : vErrors.concat(validate71.errors);
      errors = vErrors.length;
    }
  }
  validate70.errors = vErrors;
  return errors === 0;
}
const schema33 = {
  "nullableRef": "io.k8s.api.core.v1.GCEPersistentDiskVolumeSource#"
};
const schema34 = {};
import { validate as validate75 } from "./IoK8sApiCoreV1GCEPersistentDiskVolumeSource";
function validate74(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate75(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate75.errors : vErrors.concat(validate75.errors);
      errors = vErrors.length;
    }
  }
  validate74.errors = vErrors;
  return errors === 0;
}
const schema35 = {
  "nullableRef": "io.k8s.api.core.v1.GitRepoVolumeSource#"
};
const schema36 = {};
import { validate as validate79 } from "./IoK8sApiCoreV1GitRepoVolumeSource";
function validate78(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate79(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate79.errors : vErrors.concat(validate79.errors);
      errors = vErrors.length;
    }
  }
  validate78.errors = vErrors;
  return errors === 0;
}
const schema37 = {
  "nullableRef": "io.k8s.api.core.v1.GlusterfsVolumeSource#"
};
const schema38 = {};
import { validate as validate83 } from "./IoK8sApiCoreV1GlusterfsVolumeSource";
function validate82(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate83(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate83.errors : vErrors.concat(validate83.errors);
      errors = vErrors.length;
    }
  }
  validate82.errors = vErrors;
  return errors === 0;
}
const schema39 = {
  "nullableRef": "io.k8s.api.core.v1.HostPathVolumeSource#"
};
const schema40 = {};
import { validate as validate87 } from "./IoK8sApiCoreV1HostPathVolumeSource";
function validate86(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate87(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
      errors = vErrors.length;
    }
  }
  validate86.errors = vErrors;
  return errors === 0;
}
const schema41 = {
  "nullableRef": "io.k8s.api.core.v1.ISCSIVolumeSource#"
};
const schema42 = {};
import { validate as validate91 } from "./IoK8sApiCoreV1ISCSIVolumeSource";
function validate90(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate91(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate91.errors : vErrors.concat(validate91.errors);
      errors = vErrors.length;
    }
  }
  validate90.errors = vErrors;
  return errors === 0;
}
const schema43 = {
  "type": "string"
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
  validate94.errors = vErrors;
  return errors === 0;
}
const schema44 = {
  "nullableRef": "io.k8s.api.core.v1.NFSVolumeSource#"
};
const schema45 = {};
import { validate as validate97 } from "./IoK8sApiCoreV1NFSVolumeSource";
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
const schema46 = {
  "nullableRef": "io.k8s.api.core.v1.PersistentVolumeClaimVolumeSource#"
};
const schema47 = {};
import { validate as validate101 } from "./IoK8sApiCoreV1PersistentVolumeClaimVolumeSource";
function validate100(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate101(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate101.errors : vErrors.concat(validate101.errors);
      errors = vErrors.length;
    }
  }
  validate100.errors = vErrors;
  return errors === 0;
}
const schema48 = {
  "nullableRef": "io.k8s.api.core.v1.PhotonPersistentDiskVolumeSource#"
};
const schema49 = {};
import { validate as validate105 } from "./IoK8sApiCoreV1PhotonPersistentDiskVolumeSource";
function validate104(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate105(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate105.errors : vErrors.concat(validate105.errors);
      errors = vErrors.length;
    }
  }
  validate104.errors = vErrors;
  return errors === 0;
}
const schema50 = {
  "nullableRef": "io.k8s.api.core.v1.PortworxVolumeSource#"
};
const schema51 = {};
import { validate as validate109 } from "./IoK8sApiCoreV1PortworxVolumeSource";
function validate108(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate109(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate109.errors : vErrors.concat(validate109.errors);
      errors = vErrors.length;
    }
  }
  validate108.errors = vErrors;
  return errors === 0;
}
const schema52 = {
  "nullableRef": "io.k8s.api.core.v1.ProjectedVolumeSource#"
};
const schema53 = {};
import { validate as validate113 } from "./IoK8sApiCoreV1ProjectedVolumeSource";
function validate112(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate113(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate113.errors : vErrors.concat(validate113.errors);
      errors = vErrors.length;
    }
  }
  validate112.errors = vErrors;
  return errors === 0;
}
const schema54 = {
  "nullableRef": "io.k8s.api.core.v1.QuobyteVolumeSource#"
};
const schema55 = {};
import { validate as validate117 } from "./IoK8sApiCoreV1QuobyteVolumeSource";
function validate116(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate117(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate117.errors : vErrors.concat(validate117.errors);
      errors = vErrors.length;
    }
  }
  validate116.errors = vErrors;
  return errors === 0;
}
const schema56 = {
  "nullableRef": "io.k8s.api.core.v1.RBDVolumeSource#"
};
const schema57 = {};
import { validate as validate121 } from "./IoK8sApiCoreV1RBDVolumeSource";
function validate120(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate121(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate121.errors : vErrors.concat(validate121.errors);
      errors = vErrors.length;
    }
  }
  validate120.errors = vErrors;
  return errors === 0;
}
const schema58 = {
  "nullableRef": "io.k8s.api.core.v1.ScaleIOVolumeSource#"
};
const schema59 = {};
import { validate as validate125 } from "./IoK8sApiCoreV1ScaleIOVolumeSource";
function validate124(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate125(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate125.errors : vErrors.concat(validate125.errors);
      errors = vErrors.length;
    }
  }
  validate124.errors = vErrors;
  return errors === 0;
}
const schema60 = {
  "nullableRef": "io.k8s.api.core.v1.SecretVolumeSource#"
};
const schema61 = {};
import { validate as validate129 } from "./IoK8sApiCoreV1SecretVolumeSource";
function validate128(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate129(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate129.errors : vErrors.concat(validate129.errors);
      errors = vErrors.length;
    }
  }
  validate128.errors = vErrors;
  return errors === 0;
}
const schema62 = {
  "nullableRef": "io.k8s.api.core.v1.StorageOSVolumeSource#"
};
const schema63 = {};
import { validate as validate133 } from "./IoK8sApiCoreV1StorageOSVolumeSource";
function validate132(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate133(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate133.errors : vErrors.concat(validate133.errors);
      errors = vErrors.length;
    }
  }
  validate132.errors = vErrors;
  return errors === 0;
}
const schema64 = {
  "nullableRef": "io.k8s.api.core.v1.VsphereVirtualDiskVolumeSource#"
};
const schema65 = {};
import { validate as validate137 } from "./IoK8sApiCoreV1VsphereVirtualDiskVolumeSource";
function validate136(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate137(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate137.errors : vErrors.concat(validate137.errors);
      errors = vErrors.length;
    }
  }
  validate136.errors = vErrors;
  return errors === 0;
}
function validate21(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.core.v1.Volume" */;
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
    if (data.awsElasticBlockStore !== undefined) {
      if (!validate22(data.awsElasticBlockStore, {
        instancePath: instancePath + "/awsElasticBlockStore",
        parentData: data,
        parentDataProperty: "awsElasticBlockStore",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.azureDisk !== undefined) {
      if (!validate26(data.azureDisk, {
        instancePath: instancePath + "/azureDisk",
        parentData: data,
        parentDataProperty: "azureDisk",
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
    if (data.azureFile !== undefined) {
      if (!validate30(data.azureFile, {
        instancePath: instancePath + "/azureFile",
        parentData: data,
        parentDataProperty: "azureFile",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.cephfs !== undefined) {
      if (!validate34(data.cephfs, {
        instancePath: instancePath + "/cephfs",
        parentData: data,
        parentDataProperty: "cephfs",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.cinder !== undefined) {
      if (!validate38(data.cinder, {
        instancePath: instancePath + "/cinder",
        parentData: data,
        parentDataProperty: "cinder",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
        errors = vErrors.length;
      }
    }
    if (data.configMap !== undefined) {
      if (!validate42(data.configMap, {
        instancePath: instancePath + "/configMap",
        parentData: data,
        parentDataProperty: "configMap",
        rootData
      })) {
        vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
        errors = vErrors.length;
      }
    }
    if (data.csi !== undefined) {
      if (!validate46(data.csi, {
        instancePath: instancePath + "/csi",
        parentData: data,
        parentDataProperty: "csi",
        rootData
      })) {
        vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
        errors = vErrors.length;
      }
    }
    if (data.downwardAPI !== undefined) {
      if (!validate50(data.downwardAPI, {
        instancePath: instancePath + "/downwardAPI",
        parentData: data,
        parentDataProperty: "downwardAPI",
        rootData
      })) {
        vErrors = vErrors === null ? validate50.errors : vErrors.concat(validate50.errors);
        errors = vErrors.length;
      }
    }
    if (data.emptyDir !== undefined) {
      if (!validate54(data.emptyDir, {
        instancePath: instancePath + "/emptyDir",
        parentData: data,
        parentDataProperty: "emptyDir",
        rootData
      })) {
        vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
        errors = vErrors.length;
      }
    }
    if (data.ephemeral !== undefined) {
      if (!validate58(data.ephemeral, {
        instancePath: instancePath + "/ephemeral",
        parentData: data,
        parentDataProperty: "ephemeral",
        rootData
      })) {
        vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
        errors = vErrors.length;
      }
    }
    if (data.fc !== undefined) {
      if (!validate62(data.fc, {
        instancePath: instancePath + "/fc",
        parentData: data,
        parentDataProperty: "fc",
        rootData
      })) {
        vErrors = vErrors === null ? validate62.errors : vErrors.concat(validate62.errors);
        errors = vErrors.length;
      }
    }
    if (data.flexVolume !== undefined) {
      if (!validate66(data.flexVolume, {
        instancePath: instancePath + "/flexVolume",
        parentData: data,
        parentDataProperty: "flexVolume",
        rootData
      })) {
        vErrors = vErrors === null ? validate66.errors : vErrors.concat(validate66.errors);
        errors = vErrors.length;
      }
    }
    if (data.flocker !== undefined) {
      if (!validate70(data.flocker, {
        instancePath: instancePath + "/flocker",
        parentData: data,
        parentDataProperty: "flocker",
        rootData
      })) {
        vErrors = vErrors === null ? validate70.errors : vErrors.concat(validate70.errors);
        errors = vErrors.length;
      }
    }
    if (data.gcePersistentDisk !== undefined) {
      if (!validate74(data.gcePersistentDisk, {
        instancePath: instancePath + "/gcePersistentDisk",
        parentData: data,
        parentDataProperty: "gcePersistentDisk",
        rootData
      })) {
        vErrors = vErrors === null ? validate74.errors : vErrors.concat(validate74.errors);
        errors = vErrors.length;
      }
    }
    if (data.gitRepo !== undefined) {
      if (!validate78(data.gitRepo, {
        instancePath: instancePath + "/gitRepo",
        parentData: data,
        parentDataProperty: "gitRepo",
        rootData
      })) {
        vErrors = vErrors === null ? validate78.errors : vErrors.concat(validate78.errors);
        errors = vErrors.length;
      }
    }
    if (data.glusterfs !== undefined) {
      if (!validate82(data.glusterfs, {
        instancePath: instancePath + "/glusterfs",
        parentData: data,
        parentDataProperty: "glusterfs",
        rootData
      })) {
        vErrors = vErrors === null ? validate82.errors : vErrors.concat(validate82.errors);
        errors = vErrors.length;
      }
    }
    if (data.hostPath !== undefined) {
      if (!validate86(data.hostPath, {
        instancePath: instancePath + "/hostPath",
        parentData: data,
        parentDataProperty: "hostPath",
        rootData
      })) {
        vErrors = vErrors === null ? validate86.errors : vErrors.concat(validate86.errors);
        errors = vErrors.length;
      }
    }
    if (data.iscsi !== undefined) {
      if (!validate90(data.iscsi, {
        instancePath: instancePath + "/iscsi",
        parentData: data,
        parentDataProperty: "iscsi",
        rootData
      })) {
        vErrors = vErrors === null ? validate90.errors : vErrors.concat(validate90.errors);
        errors = vErrors.length;
      }
    }
    if (data.name !== undefined) {
      if (!validate94(data.name, {
        instancePath: instancePath + "/name",
        parentData: data,
        parentDataProperty: "name",
        rootData
      })) {
        vErrors = vErrors === null ? validate94.errors : vErrors.concat(validate94.errors);
        errors = vErrors.length;
      }
    }
    if (data.nfs !== undefined) {
      if (!validate96(data.nfs, {
        instancePath: instancePath + "/nfs",
        parentData: data,
        parentDataProperty: "nfs",
        rootData
      })) {
        vErrors = vErrors === null ? validate96.errors : vErrors.concat(validate96.errors);
        errors = vErrors.length;
      }
    }
    if (data.persistentVolumeClaim !== undefined) {
      if (!validate100(data.persistentVolumeClaim, {
        instancePath: instancePath + "/persistentVolumeClaim",
        parentData: data,
        parentDataProperty: "persistentVolumeClaim",
        rootData
      })) {
        vErrors = vErrors === null ? validate100.errors : vErrors.concat(validate100.errors);
        errors = vErrors.length;
      }
    }
    if (data.photonPersistentDisk !== undefined) {
      if (!validate104(data.photonPersistentDisk, {
        instancePath: instancePath + "/photonPersistentDisk",
        parentData: data,
        parentDataProperty: "photonPersistentDisk",
        rootData
      })) {
        vErrors = vErrors === null ? validate104.errors : vErrors.concat(validate104.errors);
        errors = vErrors.length;
      }
    }
    if (data.portworxVolume !== undefined) {
      if (!validate108(data.portworxVolume, {
        instancePath: instancePath + "/portworxVolume",
        parentData: data,
        parentDataProperty: "portworxVolume",
        rootData
      })) {
        vErrors = vErrors === null ? validate108.errors : vErrors.concat(validate108.errors);
        errors = vErrors.length;
      }
    }
    if (data.projected !== undefined) {
      if (!validate112(data.projected, {
        instancePath: instancePath + "/projected",
        parentData: data,
        parentDataProperty: "projected",
        rootData
      })) {
        vErrors = vErrors === null ? validate112.errors : vErrors.concat(validate112.errors);
        errors = vErrors.length;
      }
    }
    if (data.quobyte !== undefined) {
      if (!validate116(data.quobyte, {
        instancePath: instancePath + "/quobyte",
        parentData: data,
        parentDataProperty: "quobyte",
        rootData
      })) {
        vErrors = vErrors === null ? validate116.errors : vErrors.concat(validate116.errors);
        errors = vErrors.length;
      }
    }
    if (data.rbd !== undefined) {
      if (!validate120(data.rbd, {
        instancePath: instancePath + "/rbd",
        parentData: data,
        parentDataProperty: "rbd",
        rootData
      })) {
        vErrors = vErrors === null ? validate120.errors : vErrors.concat(validate120.errors);
        errors = vErrors.length;
      }
    }
    if (data.scaleIO !== undefined) {
      if (!validate124(data.scaleIO, {
        instancePath: instancePath + "/scaleIO",
        parentData: data,
        parentDataProperty: "scaleIO",
        rootData
      })) {
        vErrors = vErrors === null ? validate124.errors : vErrors.concat(validate124.errors);
        errors = vErrors.length;
      }
    }
    if (data.secret !== undefined) {
      if (!validate128(data.secret, {
        instancePath: instancePath + "/secret",
        parentData: data,
        parentDataProperty: "secret",
        rootData
      })) {
        vErrors = vErrors === null ? validate128.errors : vErrors.concat(validate128.errors);
        errors = vErrors.length;
      }
    }
    if (data.storageos !== undefined) {
      if (!validate132(data.storageos, {
        instancePath: instancePath + "/storageos",
        parentData: data,
        parentDataProperty: "storageos",
        rootData
      })) {
        vErrors = vErrors === null ? validate132.errors : vErrors.concat(validate132.errors);
        errors = vErrors.length;
      }
    }
    if (data.vsphereVolume !== undefined) {
      if (!validate136(data.vsphereVolume, {
        instancePath: instancePath + "/vsphereVolume",
        parentData: data,
        parentDataProperty: "vsphereVolume",
        rootData
      })) {
        vErrors = vErrors === null ? validate136.errors : vErrors.concat(validate136.errors);
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
  validate21.errors = vErrors;
  return errors === 0;
}