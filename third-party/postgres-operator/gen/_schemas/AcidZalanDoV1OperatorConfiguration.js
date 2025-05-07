export const validate = validate39;
const schema22 = {
  "type": "object",
  "properties": {
    "kind": {
      "$ref": "1z1bKopcovwDX551DvF7StV2H6WGxPJZVTx0aB3zw"
    },
    "apiVersion": {
      "$ref": "zMc9FKcEiJ0jMIRxr8K2ZJESnPo8cuNwkxR0cMhnEe0"
    },
    "configuration": {
      "$ref": "aR09PCcfJhOYcsESn6cVJdzVSzXjxJcoNr3H4g2Amow"
    },
    "status": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "metadata": {
      "$ref": "a6f0oUEaFqHmymdwnqPORTNOTU7GczWAkwGD0uYU"
    }
  },
  "required": ["kind", "apiVersion", "configuration"],
  "$id": "acid.zalan.do.v1.OperatorConfiguration"
};
const schema23 = {
  "type": "string",
  "enum": ["OperatorConfiguration"]
};
function validate40(data, {
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
  if (!(data === "OperatorConfiguration")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema23.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate40.errors = vErrors;
  return errors === 0;
}
const schema24 = {
  "type": "string",
  "enum": ["acid.zalan.do/v1"]
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
  if (!(data === "acid.zalan.do/v1")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema24.enum
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
const schema25 = {
  "type": "object",
  "properties": {
    "crd_categories": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "docker_image": {
      "$ref": "cSYy4CGYzeRidTF0D48p9swqVaUreY6fz2fUKZLpA8g"
    },
    "enable_crd_registration": {
      "$ref": "XI8SHPWBW6IRtzOhSeom8NHPNafxnM7Xgk3N9ZeNk"
    },
    "enable_crd_validation": {
      "$ref": "XI8SHPWBW6IRtzOhSeom8NHPNafxnM7Xgk3N9ZeNk"
    },
    "enable_lazy_spilo_upgrade": {
      "$ref": "gEUOOhuZefzFQPAU2P6REZY1YYmpGc0TVbLahK1eos"
    },
    "enable_pgversion_env_var": {
      "$ref": "XI8SHPWBW6IRtzOhSeom8NHPNafxnM7Xgk3N9ZeNk"
    },
    "enable_shm_volume": {
      "$ref": "XI8SHPWBW6IRtzOhSeom8NHPNafxnM7Xgk3N9ZeNk"
    },
    "enable_spilo_wal_path_compat": {
      "$ref": "gEUOOhuZefzFQPAU2P6REZY1YYmpGc0TVbLahK1eos"
    },
    "enable_team_id_clustername_prefix": {
      "$ref": "gEUOOhuZefzFQPAU2P6REZY1YYmpGc0TVbLahK1eos"
    },
    "etcd_host": {
      "$ref": "ylFKgRADFnj8zsAqNcbZrvIOQI64FUWlOFS2V8uyo"
    },
    "ignore_instance_limits_annotation_key": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "kubernetes_use_configmaps": {
      "$ref": "gEUOOhuZefzFQPAU2P6REZY1YYmpGc0TVbLahK1eos"
    },
    "max_instances": {
      "$ref": "W52rRtGxqXnTwaWpenEzET8FzJ9uaz88UssnVsWHkY"
    },
    "min_instances": {
      "$ref": "W52rRtGxqXnTwaWpenEzET8FzJ9uaz88UssnVsWHkY"
    },
    "resync_period": {
      "$ref": "hrdDa6BLmgrlTpqM1fjwLlGytpMYDjuOniKSqCK8LE"
    },
    "repair_period": {
      "$ref": "Rw416UjkCPhM0ywT9v1zTNlijvs62zNKWD5YEbA7w"
    },
    "set_memory_request_to_limit": {
      "$ref": "gEUOOhuZefzFQPAU2P6REZY1YYmpGc0TVbLahK1eos"
    },
    "sidecar_docker_images": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "sidecars": {
      "$ref": "TvsDOhdSgsJPYJYYOLR0VS9CTDl7VugOo2gQX7MeM"
    },
    "workers": {
      "$ref": "wyaNxAbUfn8qOPCIoApekB3rrLhdwljaHeTRUOE"
    },
    "users": {
      "$ref": "FjJ149cNP2u5i7ctrowoueROHg1T9DKlMLkZYWd9o"
    },
    "major_version_upgrade": {
      "$ref": "6CaNptt7xsKnRzL46yjM5dw6gzu1x7Ye2ACjz0tyw"
    },
    "kubernetes": {
      "$ref": "iWlEKXkzE093CuAjY24NTEo9YYO8SGbZeD38ST18M"
    },
    "postgres_pod_resources": {
      "$ref": "cE5Waugx7w3kzwKlitGdaRISTs0wS6OOypIrDj0"
    },
    "timeouts": {
      "$ref": "7HT3ux1s6QuqKRfbySg8dypj0gFrrxcRoykD2aeF8"
    },
    "load_balancer": {
      "$ref": "lA7xYexD76zpil2i1QUMXhua9sllljDdzhrUvT0Q"
    },
    "aws_or_gcp": {
      "$ref": "1szJvP4rHc9qSP6hfd1UBkN8zvs2SFB0Ltyt8gFPdU"
    },
    "logical_backup": {
      "$ref": "52DegiJnqbT1MEmGaz8E6grmxHNls48VSlZSnGCmYI"
    },
    "debug": {
      "$ref": "ULwawvh1vqjUhrQXzCGzaSpg6L7vX7vZYzExHvnl7FA"
    },
    "teams_api": {
      "$ref": "VtnLtMD6Nc9KNUEnVgzKVIbQogzgZhX86kMNwQzgZcY"
    },
    "logging_rest_api": {
      "$ref": "fH4R2s3pqsrMJinakfSP9re9CO0NnjJDKN8kdNcRYEk"
    },
    "scalyr": {
      "$ref": "SclHl78zBYbciazvECc7e8lWpWAXETY8BEX1F4ue7A"
    },
    "connection_pooler": {
      "$ref": "KWQAYPu0coxjtzDMJdwMHhKlzoKxjEQvviLj5MPra0"
    },
    "patroni": {
      "$ref": "TCa4eZof2EMODmXccq8gamqp3V2nkQruDNOyKoIPq1U"
    }
  }
};
const schema10 = {
  "type": "array",
  "nullable": true,
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  }
};
const schema9 = {
  "type": "string"
};
function validate24(data, {
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
  validate24.errors = vErrors;
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
      if (!validate24(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
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
const schema26 = {
  "type": "string",
  "default": "ghcr.io/zalando/spilo-16:3.2-p2",
  "nullable": true
};
function validate46(data, {
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
  validate46.errors = vErrors;
  return errors === 0;
}
const schema6 = {
  "type": "boolean",
  "default": true,
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
const schema7 = {
  "type": "boolean",
  "default": false,
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
const schema14 = {
  "type": "string",
  "default": "",
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
  validate31.errors = vErrors;
  return errors === 0;
}
const schema12 = {
  "type": "string",
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
  validate29.errors = vErrors;
  return errors === 0;
}
const schema8 = {
  "type": "integer",
  "default": -1,
  "minimum": -1,
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
    if (data < -1 || isNaN(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/minimum",
        keyword: "minimum",
        params: {
          comparison: ">=",
          limit: -1
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
const schema27 = {
  "type": "string",
  "default": "30m",
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
  validate60.errors = vErrors;
  return errors === 0;
}
const schema15 = {
  "type": "string",
  "default": "5m",
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
  validate32.errors = vErrors;
  return errors === 0;
}
const schema11 = {
  "type": "object",
  "additionalProperties": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
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
      if (!validate24(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate27.errors = vErrors;
  return errors === 0;
}
const schema28 = {
  "type": "array",
  "nullable": true,
  "items": {
    "$ref": "LHTa3xan4hAuiiV93WwpRLsGuslSrjGnUiRd62GaY"
  }
};
const schema29 = {
  "type": "object",
  "properties": {}
};
function validate66(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!(data && typeof data == "object" && !Array.isArray(data))) {
    const err0 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  validate66.errors = vErrors;
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
      if (!validate66(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate66.errors : vErrors.concat(validate66.errors);
        errors = vErrors.length;
      }
    }
  }
  validate65.errors = vErrors;
  return errors === 0;
}
const schema30 = {
  "type": "integer",
  "default": 8,
  "minimum": 1,
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
  validate69.errors = vErrors;
  return errors === 0;
}
const schema31 = {
  "type": "object",
  "properties": {
    "additional_owner_roles": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "enable_password_rotation": {
      "$ref": "gEUOOhuZefzFQPAU2P6REZY1YYmpGc0TVbLahK1eos"
    },
    "password_rotation_interval": {
      "$ref": "foXP7bgxhgolgEyFchzEcwR8IQv6izylHcemvydYI"
    },
    "password_rotation_user_retention": {
      "$ref": "qMxWwv2XhNFQZvuAGns1CVKixxrW5M0EoQeTlXoHNY"
    },
    "replication_username": {
      "$ref": "SM9TBomNBovECbPV6JwIxNmXWUOT1MEKoakLTp9Lo9Q"
    },
    "super_username": {
      "$ref": "wF92PuUxkrsIHb3K2jQMUaXmJ9Xb4zFDaFLRwMbfeE"
    }
  },
  "nullable": true
};
const schema32 = {
  "type": "integer",
  "default": 90,
  "nullable": true
};
function validate74(data, {
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
  validate74.errors = vErrors;
  return errors === 0;
}
const schema33 = {
  "type": "integer",
  "default": 180,
  "nullable": true
};
function validate76(data, {
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
  validate76.errors = vErrors;
  return errors === 0;
}
const schema34 = {
  "type": "string",
  "default": "standby",
  "nullable": true
};
function validate78(data, {
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
  validate78.errors = vErrors;
  return errors === 0;
}
const schema35 = {
  "type": "string",
  "default": "postgres",
  "nullable": true
};
function validate80(data, {
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
  validate80.errors = vErrors;
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
    if (data.additional_owner_roles !== undefined) {
      if (!validate25(data.additional_owner_roles, {
        instancePath: instancePath + "/additional_owner_roles",
        parentData: data,
        parentDataProperty: "additional_owner_roles",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_password_rotation !== undefined) {
      if (!validate22(data.enable_password_rotation, {
        instancePath: instancePath + "/enable_password_rotation",
        parentData: data,
        parentDataProperty: "enable_password_rotation",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.password_rotation_interval !== undefined) {
      if (!validate74(data.password_rotation_interval, {
        instancePath: instancePath + "/password_rotation_interval",
        parentData: data,
        parentDataProperty: "password_rotation_interval",
        rootData
      })) {
        vErrors = vErrors === null ? validate74.errors : vErrors.concat(validate74.errors);
        errors = vErrors.length;
      }
    }
    if (data.password_rotation_user_retention !== undefined) {
      if (!validate76(data.password_rotation_user_retention, {
        instancePath: instancePath + "/password_rotation_user_retention",
        parentData: data,
        parentDataProperty: "password_rotation_user_retention",
        rootData
      })) {
        vErrors = vErrors === null ? validate76.errors : vErrors.concat(validate76.errors);
        errors = vErrors.length;
      }
    }
    if (data.replication_username !== undefined) {
      if (!validate78(data.replication_username, {
        instancePath: instancePath + "/replication_username",
        parentData: data,
        parentDataProperty: "replication_username",
        rootData
      })) {
        vErrors = vErrors === null ? validate78.errors : vErrors.concat(validate78.errors);
        errors = vErrors.length;
      }
    }
    if (data.super_username !== undefined) {
      if (!validate80(data.super_username, {
        instancePath: instancePath + "/super_username",
        parentData: data,
        parentDataProperty: "super_username",
        rootData
      })) {
        vErrors = vErrors === null ? validate80.errors : vErrors.concat(validate80.errors);
        errors = vErrors.length;
      }
    }
  }
  validate71.errors = vErrors;
  return errors === 0;
}
const schema36 = {
  "type": "object",
  "properties": {
    "major_version_upgrade_mode": {
      "$ref": "DiAbEyQSg7TvbzYHfNCTpUolyGahjGW3RyGAYac0q8"
    },
    "major_version_upgrade_team_allow_list": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "minimal_major_version": {
      "$ref": "XYKFJBi0v3j6I0ksEx0x1VhCTWqJpj7fBtLh9oXOjA"
    },
    "target_major_version": {
      "$ref": "FfyNF95eCd9XhPbTcxFPRBvfgL247ZOldXEDmfI"
    }
  },
  "nullable": true
};
const schema37 = {
  "type": "string",
  "default": "off",
  "nullable": true
};
function validate84(data, {
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
  validate84.errors = vErrors;
  return errors === 0;
}
const schema38 = {
  "type": "string",
  "default": "12",
  "nullable": true
};
function validate87(data, {
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
  validate87.errors = vErrors;
  return errors === 0;
}
const schema39 = {
  "type": "string",
  "default": "16",
  "nullable": true
};
function validate89(data, {
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
  validate89.errors = vErrors;
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
    if (data.major_version_upgrade_mode !== undefined) {
      if (!validate84(data.major_version_upgrade_mode, {
        instancePath: instancePath + "/major_version_upgrade_mode",
        parentData: data,
        parentDataProperty: "major_version_upgrade_mode",
        rootData
      })) {
        vErrors = vErrors === null ? validate84.errors : vErrors.concat(validate84.errors);
        errors = vErrors.length;
      }
    }
    if (data.major_version_upgrade_team_allow_list !== undefined) {
      if (!validate25(data.major_version_upgrade_team_allow_list, {
        instancePath: instancePath + "/major_version_upgrade_team_allow_list",
        parentData: data,
        parentDataProperty: "major_version_upgrade_team_allow_list",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.minimal_major_version !== undefined) {
      if (!validate87(data.minimal_major_version, {
        instancePath: instancePath + "/minimal_major_version",
        parentData: data,
        parentDataProperty: "minimal_major_version",
        rootData
      })) {
        vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
        errors = vErrors.length;
      }
    }
    if (data.target_major_version !== undefined) {
      if (!validate89(data.target_major_version, {
        instancePath: instancePath + "/target_major_version",
        parentData: data,
        parentDataProperty: "target_major_version",
        rootData
      })) {
        vErrors = vErrors === null ? validate89.errors : vErrors.concat(validate89.errors);
        errors = vErrors.length;
      }
    }
  }
  validate83.errors = vErrors;
  return errors === 0;
}
const schema40 = {
  "type": "object",
  "properties": {
    "additional_pod_capabilities": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "cluster_domain": {
      "$ref": "KmhfhuaG7o1Bt9GzuWKOzCSG9QT06WmwLmr3Y7o"
    },
    "cluster_labels": {
      "$ref": "BLWEe14o8KbQGBSZlFueZdUZYKapzLoeLG0JVQRPSw"
    },
    "cluster_name_label": {
      "$ref": "ABfEaVeqWRQjTcbOXjXkeVRMfZn0vRaqGHM5NLhuUk"
    },
    "custom_pod_annotations": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "delete_annotation_date_key": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "delete_annotation_name_key": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "downscaler_annotations": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "enable_cross_namespace_secret": {
      "$ref": "gEUOOhuZefzFQPAU2P6REZY1YYmpGc0TVbLahK1eos"
    },
    "enable_finalizers": {
      "$ref": "gEUOOhuZefzFQPAU2P6REZY1YYmpGc0TVbLahK1eos"
    },
    "enable_init_containers": {
      "$ref": "XI8SHPWBW6IRtzOhSeom8NHPNafxnM7Xgk3N9ZeNk"
    },
    "enable_persistent_volume_claim_deletion": {
      "$ref": "XI8SHPWBW6IRtzOhSeom8NHPNafxnM7Xgk3N9ZeNk"
    },
    "enable_pod_antiaffinity": {
      "$ref": "gEUOOhuZefzFQPAU2P6REZY1YYmpGc0TVbLahK1eos"
    },
    "enable_pod_disruption_budget": {
      "$ref": "XI8SHPWBW6IRtzOhSeom8NHPNafxnM7Xgk3N9ZeNk"
    },
    "enable_readiness_probe": {
      "$ref": "gEUOOhuZefzFQPAU2P6REZY1YYmpGc0TVbLahK1eos"
    },
    "enable_sidecars": {
      "$ref": "XI8SHPWBW6IRtzOhSeom8NHPNafxnM7Xgk3N9ZeNk"
    },
    "ignored_annotations": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "infrastructure_roles_secret_name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "infrastructure_roles_secrets": {
      "$ref": "N4pdR5GzClz0HEh7vXoUOfHhrk6ewSGX4OtFuA9gA"
    },
    "inherited_annotations": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "inherited_labels": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "master_pod_move_timeout": {
      "$ref": "uiWDWAl8LOH0Sa5aVedizC4hYaZXn2ihsvH8ZeS4"
    },
    "node_readiness_label": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "node_readiness_label_merge": {
      "$ref": "w1vyC32UvJ96seukfxtMqinuOWVqP3bgWb2mcMtBo0M"
    },
    "oauth_token_secret_name": {
      "$ref": "owsmb65q4HVKOk5uG2K7XLkEZDDtqTvpo3mNxE5XM"
    },
    "pdb_name_format": {
      "$ref": "3ttw1RTW9PQ2HHoF1kvczEd2miWtdKBei9aCmBOE9sI"
    },
    "persistent_volume_claim_retention_policy": {
      "$ref": "z0LxWb68vCIx5DWa9elHouqO1aoMNYhCHRPIdTmwxbM"
    },
    "pod_antiaffinity_preferred_during_scheduling": {
      "$ref": "gEUOOhuZefzFQPAU2P6REZY1YYmpGc0TVbLahK1eos"
    },
    "pod_antiaffinity_topology_key": {
      "$ref": "bc5XoW0oeshZV5oBQWuOk6YXEQFXFA1w14MUveRc"
    },
    "pod_environment_configmap": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "pod_environment_secret": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "pod_management_policy": {
      "$ref": "FZNT3bRc5R2erGYZLR0QxD5dMgfd5F7Df0FwfmWM"
    },
    "pod_priority_class_name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "pod_role_label": {
      "$ref": "inmCXOxRk298BzmW7Bf4nta6sdLKYTzvGsDQgKQU4Y"
    },
    "pod_service_account_definition": {
      "$ref": "ylFKgRADFnj8zsAqNcbZrvIOQI64FUWlOFS2V8uyo"
    },
    "pod_service_account_name": {
      "$ref": "bwf64N0vwc0Q4CZmQjAAwf54vv6vtGmmU2Aj0vg"
    },
    "pod_service_account_role_binding_definition": {
      "$ref": "ylFKgRADFnj8zsAqNcbZrvIOQI64FUWlOFS2V8uyo"
    },
    "pod_terminate_grace_period": {
      "$ref": "Rw416UjkCPhM0ywT9v1zTNlijvs62zNKWD5YEbA7w"
    },
    "secret_name_template": {
      "$ref": "eZCuamd2aQxsSrv0gx4hlnikB3RtZd7wJa8KNaQeJ8"
    },
    "share_pgsocket_with_sidecars": {
      "$ref": "gEUOOhuZefzFQPAU2P6REZY1YYmpGc0TVbLahK1eos"
    },
    "spilo_allow_privilege_escalation": {
      "$ref": "XI8SHPWBW6IRtzOhSeom8NHPNafxnM7Xgk3N9ZeNk"
    },
    "spilo_runasuser": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "spilo_runasgroup": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "spilo_fsgroup": {
      "$ref": "CZNoVCXQYuwanyJkiA9GsIPJnKVUhcC3TsHe7jwaJk"
    },
    "spilo_privileged": {
      "$ref": "gEUOOhuZefzFQPAU2P6REZY1YYmpGc0TVbLahK1eos"
    },
    "storage_resize_mode": {
      "$ref": "5W3K0kfr1jZ32c6p2dTOXlTUkm9Zq3TRoCvepfEHE"
    },
    "toleration": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "watched_namespace": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "nullable": true
};
const schema41 = {
  "type": "string",
  "default": "cluster.local",
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
  validate94.errors = vErrors;
  return errors === 0;
}
const schema42 = {
  "type": "object",
  "additionalProperties": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "default": {
    "application": "spilo"
  },
  "properties": {},
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
    for (const key0 in data) {
      if (!validate24(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate96.errors = vErrors;
  return errors === 0;
}
const schema43 = {
  "type": "string",
  "default": "cluster-name",
  "nullable": true
};
function validate99(data, {
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
  validate99.errors = vErrors;
  return errors === 0;
}
const schema44 = {
  "type": "array",
  "nullable": true,
  "items": {
    "$ref": "uDqJhIH6RxeHyePwFXfvNgExxXFky6JrFIupzkQzfA8"
  }
};
const schema45 = {
  "type": "object",
  "required": ["secretname", "userkey", "passwordkey"],
  "properties": {
    "secretname": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "userkey": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "passwordkey": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "rolekey": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "defaultuservalue": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "defaultrolevalue": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "details": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "template": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    }
  }
};
const schema46 = {
  "type": "boolean",
  "nullable": true
};
function validate124(data, {
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
  validate124.errors = vErrors;
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
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.secretname === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "secretname"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.userkey === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "userkey"
        }
      };
      if (vErrors === null) {
        vErrors = [err1];
      } else {
        vErrors.push(err1);
      }
      errors++;
    }
    if (data.passwordkey === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "passwordkey"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.secretname !== undefined) {
      if (!validate24(data.secretname, {
        instancePath: instancePath + "/secretname",
        parentData: data,
        parentDataProperty: "secretname",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.userkey !== undefined) {
      if (!validate24(data.userkey, {
        instancePath: instancePath + "/userkey",
        parentData: data,
        parentDataProperty: "userkey",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.passwordkey !== undefined) {
      if (!validate24(data.passwordkey, {
        instancePath: instancePath + "/passwordkey",
        parentData: data,
        parentDataProperty: "passwordkey",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.rolekey !== undefined) {
      if (!validate29(data.rolekey, {
        instancePath: instancePath + "/rolekey",
        parentData: data,
        parentDataProperty: "rolekey",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.defaultuservalue !== undefined) {
      if (!validate29(data.defaultuservalue, {
        instancePath: instancePath + "/defaultuservalue",
        parentData: data,
        parentDataProperty: "defaultuservalue",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.defaultrolevalue !== undefined) {
      if (!validate29(data.defaultrolevalue, {
        instancePath: instancePath + "/defaultrolevalue",
        parentData: data,
        parentDataProperty: "defaultrolevalue",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.details !== undefined) {
      if (!validate29(data.details, {
        instancePath: instancePath + "/details",
        parentData: data,
        parentDataProperty: "details",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.template !== undefined) {
      if (!validate124(data.template, {
        instancePath: instancePath + "/template",
        parentData: data,
        parentDataProperty: "template",
        rootData
      })) {
        vErrors = vErrors === null ? validate124.errors : vErrors.concat(validate124.errors);
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
      if (!validate116(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
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
const schema47 = {
  "type": "string",
  "default": "20m",
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
  validate130.errors = vErrors;
  return errors === 0;
}
const schema48 = {
  "type": "string",
  "enum": ["AND", "OR"],
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
  if (!(data === "AND" || data === "OR")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema48.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate133.errors = vErrors;
  return errors === 0;
}
const schema49 = {
  "type": "string",
  "default": "postgresql-operator",
  "nullable": true
};
function validate135(data, {
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
  validate135.errors = vErrors;
  return errors === 0;
}
const schema50 = {
  "type": "string",
  "default": "postgres-{cluster}-pdb",
  "nullable": true
};
function validate137(data, {
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
  validate137.errors = vErrors;
  return errors === 0;
}
const schema51 = {
  "type": "object",
  "properties": {
    "when_deleted": {
      "$ref": "J0CUC7yvJwkxQzFrRXDzi2o7wfjoZ1Diitkf4QE0ig"
    },
    "when_scaled": {
      "$ref": "J0CUC7yvJwkxQzFrRXDzi2o7wfjoZ1Diitkf4QE0ig"
    }
  },
  "nullable": true
};
const schema13 = {
  "type": "string",
  "enum": ["delete", "retain"],
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
  if (!(data === "delete" || data === "retain")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema13.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate30.errors = vErrors;
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
    if (data.when_deleted !== undefined) {
      if (!validate30(data.when_deleted, {
        instancePath: instancePath + "/when_deleted",
        parentData: data,
        parentDataProperty: "when_deleted",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.when_scaled !== undefined) {
      if (!validate30(data.when_scaled, {
        instancePath: instancePath + "/when_scaled",
        parentData: data,
        parentDataProperty: "when_scaled",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
  }
  validate139.errors = vErrors;
  return errors === 0;
}
const schema52 = {
  "type": "string",
  "default": "kubernetes.io/hostname",
  "nullable": true
};
function validate144(data, {
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
  validate144.errors = vErrors;
  return errors === 0;
}
const schema53 = {
  "type": "string",
  "enum": ["ordered_ready", "parallel"],
  "default": "ordered_ready",
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
  if (!(data === "ordered_ready" || data === "parallel")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema53.enum
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
const schema54 = {
  "type": "string",
  "default": "spilo-role",
  "nullable": true
};
function validate151(data, {
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
  validate151.errors = vErrors;
  return errors === 0;
}
const schema55 = {
  "type": "string",
  "default": "postgres-pod",
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
  validate154.errors = vErrors;
  return errors === 0;
}
const schema56 = {
  "type": "string",
  "default": "{username}.{cluster}.credentials.{tprkind}.{tprgroup}",
  "nullable": true
};
function validate158(data, {
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
  validate158.errors = vErrors;
  return errors === 0;
}
const schema16 = {
  "type": "integer",
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
  validate33.errors = vErrors;
  return errors === 0;
}
const schema57 = {
  "type": "string",
  "enum": ["ebs", "mixed", "pvc", "off"],
  "default": "pvc",
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
  if (!(data === "ebs" || data === "mixed" || data === "pvc" || data === "off")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema57.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate166.errors = vErrors;
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
    if (data.additional_pod_capabilities !== undefined) {
      if (!validate25(data.additional_pod_capabilities, {
        instancePath: instancePath + "/additional_pod_capabilities",
        parentData: data,
        parentDataProperty: "additional_pod_capabilities",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.cluster_domain !== undefined) {
      if (!validate94(data.cluster_domain, {
        instancePath: instancePath + "/cluster_domain",
        parentData: data,
        parentDataProperty: "cluster_domain",
        rootData
      })) {
        vErrors = vErrors === null ? validate94.errors : vErrors.concat(validate94.errors);
        errors = vErrors.length;
      }
    }
    if (data.cluster_labels !== undefined) {
      if (!validate96(data.cluster_labels, {
        instancePath: instancePath + "/cluster_labels",
        parentData: data,
        parentDataProperty: "cluster_labels",
        rootData
      })) {
        vErrors = vErrors === null ? validate96.errors : vErrors.concat(validate96.errors);
        errors = vErrors.length;
      }
    }
    if (data.cluster_name_label !== undefined) {
      if (!validate99(data.cluster_name_label, {
        instancePath: instancePath + "/cluster_name_label",
        parentData: data,
        parentDataProperty: "cluster_name_label",
        rootData
      })) {
        vErrors = vErrors === null ? validate99.errors : vErrors.concat(validate99.errors);
        errors = vErrors.length;
      }
    }
    if (data.custom_pod_annotations !== undefined) {
      if (!validate27(data.custom_pod_annotations, {
        instancePath: instancePath + "/custom_pod_annotations",
        parentData: data,
        parentDataProperty: "custom_pod_annotations",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.delete_annotation_date_key !== undefined) {
      if (!validate29(data.delete_annotation_date_key, {
        instancePath: instancePath + "/delete_annotation_date_key",
        parentData: data,
        parentDataProperty: "delete_annotation_date_key",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.delete_annotation_name_key !== undefined) {
      if (!validate29(data.delete_annotation_name_key, {
        instancePath: instancePath + "/delete_annotation_name_key",
        parentData: data,
        parentDataProperty: "delete_annotation_name_key",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.downscaler_annotations !== undefined) {
      if (!validate25(data.downscaler_annotations, {
        instancePath: instancePath + "/downscaler_annotations",
        parentData: data,
        parentDataProperty: "downscaler_annotations",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_cross_namespace_secret !== undefined) {
      if (!validate22(data.enable_cross_namespace_secret, {
        instancePath: instancePath + "/enable_cross_namespace_secret",
        parentData: data,
        parentDataProperty: "enable_cross_namespace_secret",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_finalizers !== undefined) {
      if (!validate22(data.enable_finalizers, {
        instancePath: instancePath + "/enable_finalizers",
        parentData: data,
        parentDataProperty: "enable_finalizers",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_init_containers !== undefined) {
      if (!validate21(data.enable_init_containers, {
        instancePath: instancePath + "/enable_init_containers",
        parentData: data,
        parentDataProperty: "enable_init_containers",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_persistent_volume_claim_deletion !== undefined) {
      if (!validate21(data.enable_persistent_volume_claim_deletion, {
        instancePath: instancePath + "/enable_persistent_volume_claim_deletion",
        parentData: data,
        parentDataProperty: "enable_persistent_volume_claim_deletion",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_pod_antiaffinity !== undefined) {
      if (!validate22(data.enable_pod_antiaffinity, {
        instancePath: instancePath + "/enable_pod_antiaffinity",
        parentData: data,
        parentDataProperty: "enable_pod_antiaffinity",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_pod_disruption_budget !== undefined) {
      if (!validate21(data.enable_pod_disruption_budget, {
        instancePath: instancePath + "/enable_pod_disruption_budget",
        parentData: data,
        parentDataProperty: "enable_pod_disruption_budget",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_readiness_probe !== undefined) {
      if (!validate22(data.enable_readiness_probe, {
        instancePath: instancePath + "/enable_readiness_probe",
        parentData: data,
        parentDataProperty: "enable_readiness_probe",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_sidecars !== undefined) {
      if (!validate21(data.enable_sidecars, {
        instancePath: instancePath + "/enable_sidecars",
        parentData: data,
        parentDataProperty: "enable_sidecars",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.ignored_annotations !== undefined) {
      if (!validate25(data.ignored_annotations, {
        instancePath: instancePath + "/ignored_annotations",
        parentData: data,
        parentDataProperty: "ignored_annotations",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.infrastructure_roles_secret_name !== undefined) {
      if (!validate29(data.infrastructure_roles_secret_name, {
        instancePath: instancePath + "/infrastructure_roles_secret_name",
        parentData: data,
        parentDataProperty: "infrastructure_roles_secret_name",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.infrastructure_roles_secrets !== undefined) {
      if (!validate115(data.infrastructure_roles_secrets, {
        instancePath: instancePath + "/infrastructure_roles_secrets",
        parentData: data,
        parentDataProperty: "infrastructure_roles_secrets",
        rootData
      })) {
        vErrors = vErrors === null ? validate115.errors : vErrors.concat(validate115.errors);
        errors = vErrors.length;
      }
    }
    if (data.inherited_annotations !== undefined) {
      if (!validate25(data.inherited_annotations, {
        instancePath: instancePath + "/inherited_annotations",
        parentData: data,
        parentDataProperty: "inherited_annotations",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.inherited_labels !== undefined) {
      if (!validate25(data.inherited_labels, {
        instancePath: instancePath + "/inherited_labels",
        parentData: data,
        parentDataProperty: "inherited_labels",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.master_pod_move_timeout !== undefined) {
      if (!validate130(data.master_pod_move_timeout, {
        instancePath: instancePath + "/master_pod_move_timeout",
        parentData: data,
        parentDataProperty: "master_pod_move_timeout",
        rootData
      })) {
        vErrors = vErrors === null ? validate130.errors : vErrors.concat(validate130.errors);
        errors = vErrors.length;
      }
    }
    if (data.node_readiness_label !== undefined) {
      if (!validate27(data.node_readiness_label, {
        instancePath: instancePath + "/node_readiness_label",
        parentData: data,
        parentDataProperty: "node_readiness_label",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.node_readiness_label_merge !== undefined) {
      if (!validate133(data.node_readiness_label_merge, {
        instancePath: instancePath + "/node_readiness_label_merge",
        parentData: data,
        parentDataProperty: "node_readiness_label_merge",
        rootData
      })) {
        vErrors = vErrors === null ? validate133.errors : vErrors.concat(validate133.errors);
        errors = vErrors.length;
      }
    }
    if (data.oauth_token_secret_name !== undefined) {
      if (!validate135(data.oauth_token_secret_name, {
        instancePath: instancePath + "/oauth_token_secret_name",
        parentData: data,
        parentDataProperty: "oauth_token_secret_name",
        rootData
      })) {
        vErrors = vErrors === null ? validate135.errors : vErrors.concat(validate135.errors);
        errors = vErrors.length;
      }
    }
    if (data.pdb_name_format !== undefined) {
      if (!validate137(data.pdb_name_format, {
        instancePath: instancePath + "/pdb_name_format",
        parentData: data,
        parentDataProperty: "pdb_name_format",
        rootData
      })) {
        vErrors = vErrors === null ? validate137.errors : vErrors.concat(validate137.errors);
        errors = vErrors.length;
      }
    }
    if (data.persistent_volume_claim_retention_policy !== undefined) {
      if (!validate139(data.persistent_volume_claim_retention_policy, {
        instancePath: instancePath + "/persistent_volume_claim_retention_policy",
        parentData: data,
        parentDataProperty: "persistent_volume_claim_retention_policy",
        rootData
      })) {
        vErrors = vErrors === null ? validate139.errors : vErrors.concat(validate139.errors);
        errors = vErrors.length;
      }
    }
    if (data.pod_antiaffinity_preferred_during_scheduling !== undefined) {
      if (!validate22(data.pod_antiaffinity_preferred_during_scheduling, {
        instancePath: instancePath + "/pod_antiaffinity_preferred_during_scheduling",
        parentData: data,
        parentDataProperty: "pod_antiaffinity_preferred_during_scheduling",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.pod_antiaffinity_topology_key !== undefined) {
      if (!validate144(data.pod_antiaffinity_topology_key, {
        instancePath: instancePath + "/pod_antiaffinity_topology_key",
        parentData: data,
        parentDataProperty: "pod_antiaffinity_topology_key",
        rootData
      })) {
        vErrors = vErrors === null ? validate144.errors : vErrors.concat(validate144.errors);
        errors = vErrors.length;
      }
    }
    if (data.pod_environment_configmap !== undefined) {
      if (!validate29(data.pod_environment_configmap, {
        instancePath: instancePath + "/pod_environment_configmap",
        parentData: data,
        parentDataProperty: "pod_environment_configmap",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.pod_environment_secret !== undefined) {
      if (!validate29(data.pod_environment_secret, {
        instancePath: instancePath + "/pod_environment_secret",
        parentData: data,
        parentDataProperty: "pod_environment_secret",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.pod_management_policy !== undefined) {
      if (!validate148(data.pod_management_policy, {
        instancePath: instancePath + "/pod_management_policy",
        parentData: data,
        parentDataProperty: "pod_management_policy",
        rootData
      })) {
        vErrors = vErrors === null ? validate148.errors : vErrors.concat(validate148.errors);
        errors = vErrors.length;
      }
    }
    if (data.pod_priority_class_name !== undefined) {
      if (!validate29(data.pod_priority_class_name, {
        instancePath: instancePath + "/pod_priority_class_name",
        parentData: data,
        parentDataProperty: "pod_priority_class_name",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.pod_role_label !== undefined) {
      if (!validate151(data.pod_role_label, {
        instancePath: instancePath + "/pod_role_label",
        parentData: data,
        parentDataProperty: "pod_role_label",
        rootData
      })) {
        vErrors = vErrors === null ? validate151.errors : vErrors.concat(validate151.errors);
        errors = vErrors.length;
      }
    }
    if (data.pod_service_account_definition !== undefined) {
      if (!validate31(data.pod_service_account_definition, {
        instancePath: instancePath + "/pod_service_account_definition",
        parentData: data,
        parentDataProperty: "pod_service_account_definition",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
    if (data.pod_service_account_name !== undefined) {
      if (!validate154(data.pod_service_account_name, {
        instancePath: instancePath + "/pod_service_account_name",
        parentData: data,
        parentDataProperty: "pod_service_account_name",
        rootData
      })) {
        vErrors = vErrors === null ? validate154.errors : vErrors.concat(validate154.errors);
        errors = vErrors.length;
      }
    }
    if (data.pod_service_account_role_binding_definition !== undefined) {
      if (!validate31(data.pod_service_account_role_binding_definition, {
        instancePath: instancePath + "/pod_service_account_role_binding_definition",
        parentData: data,
        parentDataProperty: "pod_service_account_role_binding_definition",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
    if (data.pod_terminate_grace_period !== undefined) {
      if (!validate32(data.pod_terminate_grace_period, {
        instancePath: instancePath + "/pod_terminate_grace_period",
        parentData: data,
        parentDataProperty: "pod_terminate_grace_period",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
        errors = vErrors.length;
      }
    }
    if (data.secret_name_template !== undefined) {
      if (!validate158(data.secret_name_template, {
        instancePath: instancePath + "/secret_name_template",
        parentData: data,
        parentDataProperty: "secret_name_template",
        rootData
      })) {
        vErrors = vErrors === null ? validate158.errors : vErrors.concat(validate158.errors);
        errors = vErrors.length;
      }
    }
    if (data.share_pgsocket_with_sidecars !== undefined) {
      if (!validate22(data.share_pgsocket_with_sidecars, {
        instancePath: instancePath + "/share_pgsocket_with_sidecars",
        parentData: data,
        parentDataProperty: "share_pgsocket_with_sidecars",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.spilo_allow_privilege_escalation !== undefined) {
      if (!validate21(data.spilo_allow_privilege_escalation, {
        instancePath: instancePath + "/spilo_allow_privilege_escalation",
        parentData: data,
        parentDataProperty: "spilo_allow_privilege_escalation",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.spilo_runasuser !== undefined) {
      if (!validate33(data.spilo_runasuser, {
        instancePath: instancePath + "/spilo_runasuser",
        parentData: data,
        parentDataProperty: "spilo_runasuser",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data.spilo_runasgroup !== undefined) {
      if (!validate33(data.spilo_runasgroup, {
        instancePath: instancePath + "/spilo_runasgroup",
        parentData: data,
        parentDataProperty: "spilo_runasgroup",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data.spilo_fsgroup !== undefined) {
      if (!validate33(data.spilo_fsgroup, {
        instancePath: instancePath + "/spilo_fsgroup",
        parentData: data,
        parentDataProperty: "spilo_fsgroup",
        rootData
      })) {
        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
        errors = vErrors.length;
      }
    }
    if (data.spilo_privileged !== undefined) {
      if (!validate22(data.spilo_privileged, {
        instancePath: instancePath + "/spilo_privileged",
        parentData: data,
        parentDataProperty: "spilo_privileged",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.storage_resize_mode !== undefined) {
      if (!validate166(data.storage_resize_mode, {
        instancePath: instancePath + "/storage_resize_mode",
        parentData: data,
        parentDataProperty: "storage_resize_mode",
        rootData
      })) {
        vErrors = vErrors === null ? validate166.errors : vErrors.concat(validate166.errors);
        errors = vErrors.length;
      }
    }
    if (data.toleration !== undefined) {
      if (!validate27(data.toleration, {
        instancePath: instancePath + "/toleration",
        parentData: data,
        parentDataProperty: "toleration",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.watched_namespace !== undefined) {
      if (!validate29(data.watched_namespace, {
        instancePath: instancePath + "/watched_namespace",
        parentData: data,
        parentDataProperty: "watched_namespace",
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
const schema58 = {
  "type": "object",
  "properties": {
    "default_cpu_limit": {
      "$ref": "Xza6d5tCDZnfRjeGH4WtAhdgrn4ZuStbFa8NJOGbU"
    },
    "default_cpu_request": {
      "$ref": "Xza6d5tCDZnfRjeGH4WtAhdgrn4ZuStbFa8NJOGbU"
    },
    "default_memory_limit": {
      "$ref": "Gu1Ixp344g2pD0UPUtyhcYbZCE1cAfJ068GTt7bYlA0"
    },
    "default_memory_request": {
      "$ref": "Gu1Ixp344g2pD0UPUtyhcYbZCE1cAfJ068GTt7bYlA0"
    },
    "max_cpu_request": {
      "$ref": "Xza6d5tCDZnfRjeGH4WtAhdgrn4ZuStbFa8NJOGbU"
    },
    "max_memory_request": {
      "$ref": "Gu1Ixp344g2pD0UPUtyhcYbZCE1cAfJ068GTt7bYlA0"
    },
    "min_cpu_limit": {
      "$ref": "Xza6d5tCDZnfRjeGH4WtAhdgrn4ZuStbFa8NJOGbU"
    },
    "min_memory_limit": {
      "$ref": "Gu1Ixp344g2pD0UPUtyhcYbZCE1cAfJ068GTt7bYlA0"
    }
  },
  "nullable": true
};
const schema17 = {
  "type": "string",
  "pattern": "^(\\d+m|\\d+(\\.\\d{1,3})?)$",
  "nullable": true
};
const pattern0 = new RegExp("^(\\d+m|\\d+(\\.\\d{1,3})?)$", "u");
function validate34(data, {
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
    if (!pattern0.test(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^(\\d+m|\\d+(\\.\\d{1,3})?)$"
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
const schema18 = {
  "type": "string",
  "pattern": "^(\\d+(e\\d+)?|\\d+(\\.\\d+)?(e\\d+)?[EPTGMK]i?)$",
  "nullable": true
};
const pattern1 = new RegExp("^(\\d+(e\\d+)?|\\d+(\\.\\d+)?(e\\d+)?[EPTGMK]i?)$", "u");
function validate35(data, {
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
    if (!pattern1.test(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^(\\d+(e\\d+)?|\\d+(\\.\\d+)?(e\\d+)?[EPTGMK]i?)$"
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
function validate171(data, {
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
    if (data.default_cpu_limit !== undefined) {
      if (!validate34(data.default_cpu_limit, {
        instancePath: instancePath + "/default_cpu_limit",
        parentData: data,
        parentDataProperty: "default_cpu_limit",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.default_cpu_request !== undefined) {
      if (!validate34(data.default_cpu_request, {
        instancePath: instancePath + "/default_cpu_request",
        parentData: data,
        parentDataProperty: "default_cpu_request",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.default_memory_limit !== undefined) {
      if (!validate35(data.default_memory_limit, {
        instancePath: instancePath + "/default_memory_limit",
        parentData: data,
        parentDataProperty: "default_memory_limit",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.default_memory_request !== undefined) {
      if (!validate35(data.default_memory_request, {
        instancePath: instancePath + "/default_memory_request",
        parentData: data,
        parentDataProperty: "default_memory_request",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.max_cpu_request !== undefined) {
      if (!validate34(data.max_cpu_request, {
        instancePath: instancePath + "/max_cpu_request",
        parentData: data,
        parentDataProperty: "max_cpu_request",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.max_memory_request !== undefined) {
      if (!validate35(data.max_memory_request, {
        instancePath: instancePath + "/max_memory_request",
        parentData: data,
        parentDataProperty: "max_memory_request",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.min_cpu_limit !== undefined) {
      if (!validate34(data.min_cpu_limit, {
        instancePath: instancePath + "/min_cpu_limit",
        parentData: data,
        parentDataProperty: "min_cpu_limit",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.min_memory_limit !== undefined) {
      if (!validate35(data.min_memory_limit, {
        instancePath: instancePath + "/min_memory_limit",
        parentData: data,
        parentDataProperty: "min_memory_limit",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
  }
  validate171.errors = vErrors;
  return errors === 0;
}
const schema59 = {
  "type": "object",
  "properties": {
    "patroni_api_check_interval": {
      "$ref": "f5dKSntGhmheTQ0Nrt0WNiAObIqpVBUS8xVs0UMANjo"
    },
    "patroni_api_check_timeout": {
      "$ref": "z5QTMDlmrFG6sqTPSY6L59UAXTayTHVx71VLBDyVA"
    },
    "pod_label_wait_timeout": {
      "$ref": "qVwx7KHfufijAAxincO5UxU6NB25LqZkxHKimUX2zM"
    },
    "pod_deletion_wait_timeout": {
      "$ref": "qVwx7KHfufijAAxincO5UxU6NB25LqZkxHKimUX2zM"
    },
    "ready_wait_interval": {
      "$ref": "EiUROrlwYrAfAtz3H4uc6RIQHlC5E1r5kmvCxPdIGs"
    },
    "ready_wait_timeout": {
      "$ref": "Z4dgZCgYecT4rE4LP09s0aaCjr7I8nUvjkdG2esscc"
    },
    "resource_check_interval": {
      "$ref": "lIXuA8LC6qT5pGPYDpieqshnB0sImuw70fZ4oNaDuA"
    },
    "resource_check_timeout": {
      "$ref": "qVwx7KHfufijAAxincO5UxU6NB25LqZkxHKimUX2zM"
    }
  },
  "nullable": true
};
const schema60 = {
  "type": "string",
  "default": "1s",
  "nullable": true
};
function validate182(data, {
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
  validate182.errors = vErrors;
  return errors === 0;
}
const schema61 = {
  "type": "string",
  "default": "5s",
  "nullable": true
};
function validate184(data, {
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
  validate184.errors = vErrors;
  return errors === 0;
}
const schema19 = {
  "type": "string",
  "default": "10m",
  "nullable": true
};
function validate36(data, {
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
  validate36.errors = vErrors;
  return errors === 0;
}
const schema62 = {
  "type": "string",
  "default": "4s",
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
  validate188.errors = vErrors;
  return errors === 0;
}
const schema63 = {
  "type": "string",
  "default": "30s",
  "nullable": true
};
function validate190(data, {
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
  validate190.errors = vErrors;
  return errors === 0;
}
const schema64 = {
  "type": "string",
  "default": "3s",
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
  validate192.errors = vErrors;
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
    if (data.patroni_api_check_interval !== undefined) {
      if (!validate182(data.patroni_api_check_interval, {
        instancePath: instancePath + "/patroni_api_check_interval",
        parentData: data,
        parentDataProperty: "patroni_api_check_interval",
        rootData
      })) {
        vErrors = vErrors === null ? validate182.errors : vErrors.concat(validate182.errors);
        errors = vErrors.length;
      }
    }
    if (data.patroni_api_check_timeout !== undefined) {
      if (!validate184(data.patroni_api_check_timeout, {
        instancePath: instancePath + "/patroni_api_check_timeout",
        parentData: data,
        parentDataProperty: "patroni_api_check_timeout",
        rootData
      })) {
        vErrors = vErrors === null ? validate184.errors : vErrors.concat(validate184.errors);
        errors = vErrors.length;
      }
    }
    if (data.pod_label_wait_timeout !== undefined) {
      if (!validate36(data.pod_label_wait_timeout, {
        instancePath: instancePath + "/pod_label_wait_timeout",
        parentData: data,
        parentDataProperty: "pod_label_wait_timeout",
        rootData
      })) {
        vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
        errors = vErrors.length;
      }
    }
    if (data.pod_deletion_wait_timeout !== undefined) {
      if (!validate36(data.pod_deletion_wait_timeout, {
        instancePath: instancePath + "/pod_deletion_wait_timeout",
        parentData: data,
        parentDataProperty: "pod_deletion_wait_timeout",
        rootData
      })) {
        vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
        errors = vErrors.length;
      }
    }
    if (data.ready_wait_interval !== undefined) {
      if (!validate188(data.ready_wait_interval, {
        instancePath: instancePath + "/ready_wait_interval",
        parentData: data,
        parentDataProperty: "ready_wait_interval",
        rootData
      })) {
        vErrors = vErrors === null ? validate188.errors : vErrors.concat(validate188.errors);
        errors = vErrors.length;
      }
    }
    if (data.ready_wait_timeout !== undefined) {
      if (!validate190(data.ready_wait_timeout, {
        instancePath: instancePath + "/ready_wait_timeout",
        parentData: data,
        parentDataProperty: "ready_wait_timeout",
        rootData
      })) {
        vErrors = vErrors === null ? validate190.errors : vErrors.concat(validate190.errors);
        errors = vErrors.length;
      }
    }
    if (data.resource_check_interval !== undefined) {
      if (!validate192(data.resource_check_interval, {
        instancePath: instancePath + "/resource_check_interval",
        parentData: data,
        parentDataProperty: "resource_check_interval",
        rootData
      })) {
        vErrors = vErrors === null ? validate192.errors : vErrors.concat(validate192.errors);
        errors = vErrors.length;
      }
    }
    if (data.resource_check_timeout !== undefined) {
      if (!validate36(data.resource_check_timeout, {
        instancePath: instancePath + "/resource_check_timeout",
        parentData: data,
        parentDataProperty: "resource_check_timeout",
        rootData
      })) {
        vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
        errors = vErrors.length;
      }
    }
  }
  validate181.errors = vErrors;
  return errors === 0;
}
const schema65 = {
  "type": "object",
  "properties": {
    "custom_service_annotations": {
      "$ref": "C53Ns4GLXWl74ijREqYSmV6XcmHYHGe7sMKYak37s"
    },
    "db_hosted_zone": {
      "$ref": "WgB7hagkO7YMfZuBKOpvrhzhM08xzKgOvc8s7jsmaw"
    },
    "enable_master_load_balancer": {
      "$ref": "XI8SHPWBW6IRtzOhSeom8NHPNafxnM7Xgk3N9ZeNk"
    },
    "enable_master_pooler_load_balancer": {
      "$ref": "gEUOOhuZefzFQPAU2P6REZY1YYmpGc0TVbLahK1eos"
    },
    "enable_replica_load_balancer": {
      "$ref": "gEUOOhuZefzFQPAU2P6REZY1YYmpGc0TVbLahK1eos"
    },
    "enable_replica_pooler_load_balancer": {
      "$ref": "gEUOOhuZefzFQPAU2P6REZY1YYmpGc0TVbLahK1eos"
    },
    "external_traffic_policy": {
      "$ref": "FoMNDzX2q3fjPkgxAuyjvFuHwpYv8fBQuCq6nqa4"
    },
    "master_dns_name_format": {
      "$ref": "jXPYAs40gh07YCWi2n7ISEFVZvmWFgJttHH20q7lo"
    },
    "master_legacy_dns_name_format": {
      "$ref": "gsxoBEXNbXe3IPHmNzoFW9LP1Nrt6sDkAuKh1iC0"
    },
    "replica_dns_name_format": {
      "$ref": "3duI1R6SySj2MGBLh8gsUQmAfkFP3Yu1FyBa4kxJk"
    },
    "replica_legacy_dns_name_format": {
      "$ref": "IuR5XEUPWLUl4KLkkCS4lUD8isAlFZ3Fuyjp9siccY"
    }
  },
  "nullable": true
};
const schema66 = {
  "type": "string",
  "default": "db.example.com",
  "nullable": true
};
function validate198(data, {
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
  validate198.errors = vErrors;
  return errors === 0;
}
const schema67 = {
  "type": "string",
  "enum": ["Cluster", "Local"],
  "default": "Cluster",
  "nullable": true
};
function validate204(data, {
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
  if (!(data === "Cluster" || data === "Local")) {
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
  validate204.errors = vErrors;
  return errors === 0;
}
const schema68 = {
  "type": "string",
  "default": "{cluster}.{namespace}.{hostedzone}",
  "nullable": true
};
function validate206(data, {
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
  validate206.errors = vErrors;
  return errors === 0;
}
const schema69 = {
  "type": "string",
  "default": "{cluster}.{team}.{hostedzone}",
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
  validate208.errors = vErrors;
  return errors === 0;
}
const schema70 = {
  "type": "string",
  "default": "{cluster}-repl.{namespace}.{hostedzone}",
  "nullable": true
};
function validate210(data, {
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
  validate210.errors = vErrors;
  return errors === 0;
}
const schema71 = {
  "type": "string",
  "default": "{cluster}-repl.{team}.{hostedzone}",
  "nullable": true
};
function validate212(data, {
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
  validate212.errors = vErrors;
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
    if (data.custom_service_annotations !== undefined) {
      if (!validate27(data.custom_service_annotations, {
        instancePath: instancePath + "/custom_service_annotations",
        parentData: data,
        parentDataProperty: "custom_service_annotations",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.db_hosted_zone !== undefined) {
      if (!validate198(data.db_hosted_zone, {
        instancePath: instancePath + "/db_hosted_zone",
        parentData: data,
        parentDataProperty: "db_hosted_zone",
        rootData
      })) {
        vErrors = vErrors === null ? validate198.errors : vErrors.concat(validate198.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_master_load_balancer !== undefined) {
      if (!validate21(data.enable_master_load_balancer, {
        instancePath: instancePath + "/enable_master_load_balancer",
        parentData: data,
        parentDataProperty: "enable_master_load_balancer",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_master_pooler_load_balancer !== undefined) {
      if (!validate22(data.enable_master_pooler_load_balancer, {
        instancePath: instancePath + "/enable_master_pooler_load_balancer",
        parentData: data,
        parentDataProperty: "enable_master_pooler_load_balancer",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_replica_load_balancer !== undefined) {
      if (!validate22(data.enable_replica_load_balancer, {
        instancePath: instancePath + "/enable_replica_load_balancer",
        parentData: data,
        parentDataProperty: "enable_replica_load_balancer",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_replica_pooler_load_balancer !== undefined) {
      if (!validate22(data.enable_replica_pooler_load_balancer, {
        instancePath: instancePath + "/enable_replica_pooler_load_balancer",
        parentData: data,
        parentDataProperty: "enable_replica_pooler_load_balancer",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.external_traffic_policy !== undefined) {
      if (!validate204(data.external_traffic_policy, {
        instancePath: instancePath + "/external_traffic_policy",
        parentData: data,
        parentDataProperty: "external_traffic_policy",
        rootData
      })) {
        vErrors = vErrors === null ? validate204.errors : vErrors.concat(validate204.errors);
        errors = vErrors.length;
      }
    }
    if (data.master_dns_name_format !== undefined) {
      if (!validate206(data.master_dns_name_format, {
        instancePath: instancePath + "/master_dns_name_format",
        parentData: data,
        parentDataProperty: "master_dns_name_format",
        rootData
      })) {
        vErrors = vErrors === null ? validate206.errors : vErrors.concat(validate206.errors);
        errors = vErrors.length;
      }
    }
    if (data.master_legacy_dns_name_format !== undefined) {
      if (!validate208(data.master_legacy_dns_name_format, {
        instancePath: instancePath + "/master_legacy_dns_name_format",
        parentData: data,
        parentDataProperty: "master_legacy_dns_name_format",
        rootData
      })) {
        vErrors = vErrors === null ? validate208.errors : vErrors.concat(validate208.errors);
        errors = vErrors.length;
      }
    }
    if (data.replica_dns_name_format !== undefined) {
      if (!validate210(data.replica_dns_name_format, {
        instancePath: instancePath + "/replica_dns_name_format",
        parentData: data,
        parentDataProperty: "replica_dns_name_format",
        rootData
      })) {
        vErrors = vErrors === null ? validate210.errors : vErrors.concat(validate210.errors);
        errors = vErrors.length;
      }
    }
    if (data.replica_legacy_dns_name_format !== undefined) {
      if (!validate212(data.replica_legacy_dns_name_format, {
        instancePath: instancePath + "/replica_legacy_dns_name_format",
        parentData: data,
        parentDataProperty: "replica_legacy_dns_name_format",
        rootData
      })) {
        vErrors = vErrors === null ? validate212.errors : vErrors.concat(validate212.errors);
        errors = vErrors.length;
      }
    }
  }
  validate196.errors = vErrors;
  return errors === 0;
}
const schema72 = {
  "type": "object",
  "properties": {
    "additional_secret_mount": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "additional_secret_mount_path": {
      "$ref": "S0kkSyRFZ6pbXlOlkm2UyanAgd9usLx2ujueqFFZQ8"
    },
    "aws_region": {
      "$ref": "FpBmb12e1Lin1CqpJ3bgTtBQv78EmpiuZcsBGNpR8"
    },
    "enable_ebs_gp3_migration": {
      "$ref": "gEUOOhuZefzFQPAU2P6REZY1YYmpGc0TVbLahK1eos"
    },
    "enable_ebs_gp3_migration_max_size": {
      "$ref": "CTNh4royvfd9J3PMjyBEFpQ8Lrey9taTge6iBTrs"
    },
    "gcp_credentials": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "kube_iam_role": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "log_s3_bucket": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "wal_az_storage_account": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "wal_gs_bucket": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "wal_s3_bucket": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "nullable": true
};
const schema73 = {
  "type": "string",
  "default": "/meta/credentials",
  "nullable": true
};
function validate217(data, {
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
  validate217.errors = vErrors;
  return errors === 0;
}
const schema74 = {
  "type": "string",
  "default": "eu-central-1",
  "nullable": true
};
function validate219(data, {
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
  validate219.errors = vErrors;
  return errors === 0;
}
const schema20 = {
  "type": "integer",
  "default": 1000,
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
  validate37.errors = vErrors;
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
    if (data.additional_secret_mount !== undefined) {
      if (!validate29(data.additional_secret_mount, {
        instancePath: instancePath + "/additional_secret_mount",
        parentData: data,
        parentDataProperty: "additional_secret_mount",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.additional_secret_mount_path !== undefined) {
      if (!validate217(data.additional_secret_mount_path, {
        instancePath: instancePath + "/additional_secret_mount_path",
        parentData: data,
        parentDataProperty: "additional_secret_mount_path",
        rootData
      })) {
        vErrors = vErrors === null ? validate217.errors : vErrors.concat(validate217.errors);
        errors = vErrors.length;
      }
    }
    if (data.aws_region !== undefined) {
      if (!validate219(data.aws_region, {
        instancePath: instancePath + "/aws_region",
        parentData: data,
        parentDataProperty: "aws_region",
        rootData
      })) {
        vErrors = vErrors === null ? validate219.errors : vErrors.concat(validate219.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_ebs_gp3_migration !== undefined) {
      if (!validate22(data.enable_ebs_gp3_migration, {
        instancePath: instancePath + "/enable_ebs_gp3_migration",
        parentData: data,
        parentDataProperty: "enable_ebs_gp3_migration",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_ebs_gp3_migration_max_size !== undefined) {
      if (!validate37(data.enable_ebs_gp3_migration_max_size, {
        instancePath: instancePath + "/enable_ebs_gp3_migration_max_size",
        parentData: data,
        parentDataProperty: "enable_ebs_gp3_migration_max_size",
        rootData
      })) {
        vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
        errors = vErrors.length;
      }
    }
    if (data.gcp_credentials !== undefined) {
      if (!validate29(data.gcp_credentials, {
        instancePath: instancePath + "/gcp_credentials",
        parentData: data,
        parentDataProperty: "gcp_credentials",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.kube_iam_role !== undefined) {
      if (!validate29(data.kube_iam_role, {
        instancePath: instancePath + "/kube_iam_role",
        parentData: data,
        parentDataProperty: "kube_iam_role",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.log_s3_bucket !== undefined) {
      if (!validate29(data.log_s3_bucket, {
        instancePath: instancePath + "/log_s3_bucket",
        parentData: data,
        parentDataProperty: "log_s3_bucket",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.wal_az_storage_account !== undefined) {
      if (!validate29(data.wal_az_storage_account, {
        instancePath: instancePath + "/wal_az_storage_account",
        parentData: data,
        parentDataProperty: "wal_az_storage_account",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.wal_gs_bucket !== undefined) {
      if (!validate29(data.wal_gs_bucket, {
        instancePath: instancePath + "/wal_gs_bucket",
        parentData: data,
        parentDataProperty: "wal_gs_bucket",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.wal_s3_bucket !== undefined) {
      if (!validate29(data.wal_s3_bucket, {
        instancePath: instancePath + "/wal_s3_bucket",
        parentData: data,
        parentDataProperty: "wal_s3_bucket",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
  }
  validate215.errors = vErrors;
  return errors === 0;
}
const schema75 = {
  "type": "object",
  "properties": {
    "logical_backup_azure_storage_account_name": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "logical_backup_azure_storage_container": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "logical_backup_azure_storage_account_key": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "logical_backup_cpu_limit": {
      "$ref": "Xza6d5tCDZnfRjeGH4WtAhdgrn4ZuStbFa8NJOGbU"
    },
    "logical_backup_cpu_request": {
      "$ref": "Xza6d5tCDZnfRjeGH4WtAhdgrn4ZuStbFa8NJOGbU"
    },
    "logical_backup_docker_image": {
      "$ref": "akgZBmeqTdghXfBmVvDa2QKBjZb5SiS6SYUKtv3XR0"
    },
    "logical_backup_google_application_credentials": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "logical_backup_job_prefix": {
      "$ref": "X1eHN0hg28UZgt6QbGZguuYPLAXgcdalLAkQx5rAC88"
    },
    "logical_backup_memory_limit": {
      "$ref": "Gu1Ixp344g2pD0UPUtyhcYbZCE1cAfJ068GTt7bYlA0"
    },
    "logical_backup_memory_request": {
      "$ref": "Gu1Ixp344g2pD0UPUtyhcYbZCE1cAfJ068GTt7bYlA0"
    },
    "logical_backup_provider": {
      "$ref": "IeYubMUqm5yooB7MeQiKYZntngJ575xNs3rGmA4SE"
    },
    "logical_backup_s3_access_key_id": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "logical_backup_s3_bucket": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "logical_backup_s3_endpoint": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "logical_backup_s3_region": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "logical_backup_s3_secret_access_key": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "logical_backup_s3_sse": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "logical_backup_s3_retention_time": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "logical_backup_schedule": {
      "$ref": "cdoeTpZ9WJSOD1cjI5YAxM4ALIVNr97xu06UBejgU"
    },
    "logical_backup_cronjob_environment_secret": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "nullable": true
};
const schema76 = {
  "type": "string",
  "default": "registry.opensource.zalan.do/acid/logical-backup:v1.11.0",
  "nullable": true
};
function validate236(data, {
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
  validate236.errors = vErrors;
  return errors === 0;
}
const schema77 = {
  "type": "string",
  "default": "logical-backup-",
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
  validate239.errors = vErrors;
  return errors === 0;
}
const schema78 = {
  "type": "string",
  "enum": ["az", "gcs", "s3"],
  "default": "s3",
  "nullable": true
};
function validate243(data, {
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
  if (!(data === "az" || data === "gcs" || data === "s3")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema78.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate243.errors = vErrors;
  return errors === 0;
}
const schema79 = {
  "type": "string",
  "pattern": "^(\\d+|\\*)(/\\d+)?(\\s+(\\d+|\\*)(/\\d+)?){4}$",
  "default": "30 00 * * *",
  "nullable": true
};
const pattern2 = new RegExp("^(\\d+|\\*)(/\\d+)?(\\s+(\\d+|\\*)(/\\d+)?){4}$", "u");
function validate252(data, {
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
    if (!pattern2.test(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^(\\d+|\\*)(/\\d+)?(\\s+(\\d+|\\*)(/\\d+)?){4}$"
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
  validate252.errors = vErrors;
  return errors === 0;
}
function validate230(data, {
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
    if (data.logical_backup_azure_storage_account_name !== undefined) {
      if (!validate29(data.logical_backup_azure_storage_account_name, {
        instancePath: instancePath + "/logical_backup_azure_storage_account_name",
        parentData: data,
        parentDataProperty: "logical_backup_azure_storage_account_name",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.logical_backup_azure_storage_container !== undefined) {
      if (!validate29(data.logical_backup_azure_storage_container, {
        instancePath: instancePath + "/logical_backup_azure_storage_container",
        parentData: data,
        parentDataProperty: "logical_backup_azure_storage_container",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.logical_backup_azure_storage_account_key !== undefined) {
      if (!validate29(data.logical_backup_azure_storage_account_key, {
        instancePath: instancePath + "/logical_backup_azure_storage_account_key",
        parentData: data,
        parentDataProperty: "logical_backup_azure_storage_account_key",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.logical_backup_cpu_limit !== undefined) {
      if (!validate34(data.logical_backup_cpu_limit, {
        instancePath: instancePath + "/logical_backup_cpu_limit",
        parentData: data,
        parentDataProperty: "logical_backup_cpu_limit",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.logical_backup_cpu_request !== undefined) {
      if (!validate34(data.logical_backup_cpu_request, {
        instancePath: instancePath + "/logical_backup_cpu_request",
        parentData: data,
        parentDataProperty: "logical_backup_cpu_request",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.logical_backup_docker_image !== undefined) {
      if (!validate236(data.logical_backup_docker_image, {
        instancePath: instancePath + "/logical_backup_docker_image",
        parentData: data,
        parentDataProperty: "logical_backup_docker_image",
        rootData
      })) {
        vErrors = vErrors === null ? validate236.errors : vErrors.concat(validate236.errors);
        errors = vErrors.length;
      }
    }
    if (data.logical_backup_google_application_credentials !== undefined) {
      if (!validate29(data.logical_backup_google_application_credentials, {
        instancePath: instancePath + "/logical_backup_google_application_credentials",
        parentData: data,
        parentDataProperty: "logical_backup_google_application_credentials",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.logical_backup_job_prefix !== undefined) {
      if (!validate239(data.logical_backup_job_prefix, {
        instancePath: instancePath + "/logical_backup_job_prefix",
        parentData: data,
        parentDataProperty: "logical_backup_job_prefix",
        rootData
      })) {
        vErrors = vErrors === null ? validate239.errors : vErrors.concat(validate239.errors);
        errors = vErrors.length;
      }
    }
    if (data.logical_backup_memory_limit !== undefined) {
      if (!validate35(data.logical_backup_memory_limit, {
        instancePath: instancePath + "/logical_backup_memory_limit",
        parentData: data,
        parentDataProperty: "logical_backup_memory_limit",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.logical_backup_memory_request !== undefined) {
      if (!validate35(data.logical_backup_memory_request, {
        instancePath: instancePath + "/logical_backup_memory_request",
        parentData: data,
        parentDataProperty: "logical_backup_memory_request",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.logical_backup_provider !== undefined) {
      if (!validate243(data.logical_backup_provider, {
        instancePath: instancePath + "/logical_backup_provider",
        parentData: data,
        parentDataProperty: "logical_backup_provider",
        rootData
      })) {
        vErrors = vErrors === null ? validate243.errors : vErrors.concat(validate243.errors);
        errors = vErrors.length;
      }
    }
    if (data.logical_backup_s3_access_key_id !== undefined) {
      if (!validate29(data.logical_backup_s3_access_key_id, {
        instancePath: instancePath + "/logical_backup_s3_access_key_id",
        parentData: data,
        parentDataProperty: "logical_backup_s3_access_key_id",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.logical_backup_s3_bucket !== undefined) {
      if (!validate29(data.logical_backup_s3_bucket, {
        instancePath: instancePath + "/logical_backup_s3_bucket",
        parentData: data,
        parentDataProperty: "logical_backup_s3_bucket",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.logical_backup_s3_endpoint !== undefined) {
      if (!validate29(data.logical_backup_s3_endpoint, {
        instancePath: instancePath + "/logical_backup_s3_endpoint",
        parentData: data,
        parentDataProperty: "logical_backup_s3_endpoint",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.logical_backup_s3_region !== undefined) {
      if (!validate29(data.logical_backup_s3_region, {
        instancePath: instancePath + "/logical_backup_s3_region",
        parentData: data,
        parentDataProperty: "logical_backup_s3_region",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.logical_backup_s3_secret_access_key !== undefined) {
      if (!validate29(data.logical_backup_s3_secret_access_key, {
        instancePath: instancePath + "/logical_backup_s3_secret_access_key",
        parentData: data,
        parentDataProperty: "logical_backup_s3_secret_access_key",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.logical_backup_s3_sse !== undefined) {
      if (!validate29(data.logical_backup_s3_sse, {
        instancePath: instancePath + "/logical_backup_s3_sse",
        parentData: data,
        parentDataProperty: "logical_backup_s3_sse",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.logical_backup_s3_retention_time !== undefined) {
      if (!validate29(data.logical_backup_s3_retention_time, {
        instancePath: instancePath + "/logical_backup_s3_retention_time",
        parentData: data,
        parentDataProperty: "logical_backup_s3_retention_time",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.logical_backup_schedule !== undefined) {
      if (!validate252(data.logical_backup_schedule, {
        instancePath: instancePath + "/logical_backup_schedule",
        parentData: data,
        parentDataProperty: "logical_backup_schedule",
        rootData
      })) {
        vErrors = vErrors === null ? validate252.errors : vErrors.concat(validate252.errors);
        errors = vErrors.length;
      }
    }
    if (data.logical_backup_cronjob_environment_secret !== undefined) {
      if (!validate29(data.logical_backup_cronjob_environment_secret, {
        instancePath: instancePath + "/logical_backup_cronjob_environment_secret",
        parentData: data,
        parentDataProperty: "logical_backup_cronjob_environment_secret",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
  }
  validate230.errors = vErrors;
  return errors === 0;
}
const schema80 = {
  "type": "object",
  "properties": {
    "debug_logging": {
      "$ref": "XI8SHPWBW6IRtzOhSeom8NHPNafxnM7Xgk3N9ZeNk"
    },
    "enable_database_access": {
      "$ref": "XI8SHPWBW6IRtzOhSeom8NHPNafxnM7Xgk3N9ZeNk"
    }
  },
  "nullable": true
};
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
    if (data.debug_logging !== undefined) {
      if (!validate21(data.debug_logging, {
        instancePath: instancePath + "/debug_logging",
        parentData: data,
        parentDataProperty: "debug_logging",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_database_access !== undefined) {
      if (!validate21(data.enable_database_access, {
        instancePath: instancePath + "/enable_database_access",
        parentData: data,
        parentDataProperty: "enable_database_access",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
  }
  validate256.errors = vErrors;
  return errors === 0;
}
const schema81 = {
  "type": "object",
  "properties": {
    "enable_admin_role_for_users": {
      "$ref": "XI8SHPWBW6IRtzOhSeom8NHPNafxnM7Xgk3N9ZeNk"
    },
    "enable_postgres_team_crd": {
      "$ref": "XI8SHPWBW6IRtzOhSeom8NHPNafxnM7Xgk3N9ZeNk"
    },
    "enable_postgres_team_crd_superusers": {
      "$ref": "gEUOOhuZefzFQPAU2P6REZY1YYmpGc0TVbLahK1eos"
    },
    "enable_team_member_deprecation": {
      "$ref": "gEUOOhuZefzFQPAU2P6REZY1YYmpGc0TVbLahK1eos"
    },
    "enable_team_superuser": {
      "$ref": "gEUOOhuZefzFQPAU2P6REZY1YYmpGc0TVbLahK1eos"
    },
    "enable_teams_api": {
      "$ref": "XI8SHPWBW6IRtzOhSeom8NHPNafxnM7Xgk3N9ZeNk"
    },
    "pam_configuration": {
      "$ref": "wCi0DsFmSd3vtsz1n7PVSlqIFEhu42IEhdAw62Uztc"
    },
    "pam_role_name": {
      "$ref": "0eHiLcYQH5TkmYdDf7dr5eSHKSl8wwvyGtHwzFGGVYA"
    },
    "postgres_superuser_teams": {
      "$ref": "aRQtgAls8PT3219P8mxz6PPEAVWN1SvmCHi6z12UM"
    },
    "protected_role_names": {
      "$ref": "r55uwG3YSSATQgHABVYCox7EydRN8B9xHlF15dWP0"
    },
    "role_deletion_suffix": {
      "$ref": "i9AjOMiMQ5Tu1u3neXQ7PCe08VuyuC50HHSQf9qYCQ"
    },
    "team_admin_role": {
      "$ref": "lNldWo3eTocwjdyQv52uZjjzU12S0a9Dd2XIrvAM"
    },
    "team_api_role_configuration": {
      "$ref": "kecGOzKi7D5NxXxO0BtySUJD1E9NlcPtZB17ZMgNarc"
    },
    "teams_api_url": {
      "$ref": "DVnAwMsk6AjJfIyGP2dvAzrHBhR8HhsFUdZnwavSZA"
    }
  },
  "nullable": true
};
const schema82 = {
  "type": "string",
  "default": "https://info.example.com/oauth2/tokeninfo?access_token= uid realm=/employees",
  "nullable": true
};
function validate267(data, {
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
  validate267.errors = vErrors;
  return errors === 0;
}
const schema83 = {
  "type": "string",
  "default": "zalandos",
  "nullable": true
};
function validate269(data, {
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
  validate269.errors = vErrors;
  return errors === 0;
}
const schema84 = {
  "type": "array",
  "items": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "default": ["admin", "cron_admin"],
  "nullable": true
};
function validate272(data, {
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
      if (!validate24(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate272.errors = vErrors;
  return errors === 0;
}
const schema85 = {
  "type": "string",
  "default": "_deleted",
  "nullable": true
};
function validate275(data, {
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
  validate275.errors = vErrors;
  return errors === 0;
}
const schema86 = {
  "type": "string",
  "default": "admin",
  "nullable": true
};
function validate277(data, {
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
  validate277.errors = vErrors;
  return errors === 0;
}
const schema87 = {
  "type": "object",
  "additionalProperties": {
    "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
  },
  "default": {
    "log_statement": "all"
  },
  "properties": {},
  "nullable": true
};
function validate279(data, {
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
      if (!validate24(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
  }
  validate279.errors = vErrors;
  return errors === 0;
}
const schema88 = {
  "type": "string",
  "default": "https://teams.example.com/api/",
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
  validate282.errors = vErrors;
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
    if (data.enable_admin_role_for_users !== undefined) {
      if (!validate21(data.enable_admin_role_for_users, {
        instancePath: instancePath + "/enable_admin_role_for_users",
        parentData: data,
        parentDataProperty: "enable_admin_role_for_users",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_postgres_team_crd !== undefined) {
      if (!validate21(data.enable_postgres_team_crd, {
        instancePath: instancePath + "/enable_postgres_team_crd",
        parentData: data,
        parentDataProperty: "enable_postgres_team_crd",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_postgres_team_crd_superusers !== undefined) {
      if (!validate22(data.enable_postgres_team_crd_superusers, {
        instancePath: instancePath + "/enable_postgres_team_crd_superusers",
        parentData: data,
        parentDataProperty: "enable_postgres_team_crd_superusers",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_team_member_deprecation !== undefined) {
      if (!validate22(data.enable_team_member_deprecation, {
        instancePath: instancePath + "/enable_team_member_deprecation",
        parentData: data,
        parentDataProperty: "enable_team_member_deprecation",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_team_superuser !== undefined) {
      if (!validate22(data.enable_team_superuser, {
        instancePath: instancePath + "/enable_team_superuser",
        parentData: data,
        parentDataProperty: "enable_team_superuser",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_teams_api !== undefined) {
      if (!validate21(data.enable_teams_api, {
        instancePath: instancePath + "/enable_teams_api",
        parentData: data,
        parentDataProperty: "enable_teams_api",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.pam_configuration !== undefined) {
      if (!validate267(data.pam_configuration, {
        instancePath: instancePath + "/pam_configuration",
        parentData: data,
        parentDataProperty: "pam_configuration",
        rootData
      })) {
        vErrors = vErrors === null ? validate267.errors : vErrors.concat(validate267.errors);
        errors = vErrors.length;
      }
    }
    if (data.pam_role_name !== undefined) {
      if (!validate269(data.pam_role_name, {
        instancePath: instancePath + "/pam_role_name",
        parentData: data,
        parentDataProperty: "pam_role_name",
        rootData
      })) {
        vErrors = vErrors === null ? validate269.errors : vErrors.concat(validate269.errors);
        errors = vErrors.length;
      }
    }
    if (data.postgres_superuser_teams !== undefined) {
      if (!validate25(data.postgres_superuser_teams, {
        instancePath: instancePath + "/postgres_superuser_teams",
        parentData: data,
        parentDataProperty: "postgres_superuser_teams",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.protected_role_names !== undefined) {
      if (!validate272(data.protected_role_names, {
        instancePath: instancePath + "/protected_role_names",
        parentData: data,
        parentDataProperty: "protected_role_names",
        rootData
      })) {
        vErrors = vErrors === null ? validate272.errors : vErrors.concat(validate272.errors);
        errors = vErrors.length;
      }
    }
    if (data.role_deletion_suffix !== undefined) {
      if (!validate275(data.role_deletion_suffix, {
        instancePath: instancePath + "/role_deletion_suffix",
        parentData: data,
        parentDataProperty: "role_deletion_suffix",
        rootData
      })) {
        vErrors = vErrors === null ? validate275.errors : vErrors.concat(validate275.errors);
        errors = vErrors.length;
      }
    }
    if (data.team_admin_role !== undefined) {
      if (!validate277(data.team_admin_role, {
        instancePath: instancePath + "/team_admin_role",
        parentData: data,
        parentDataProperty: "team_admin_role",
        rootData
      })) {
        vErrors = vErrors === null ? validate277.errors : vErrors.concat(validate277.errors);
        errors = vErrors.length;
      }
    }
    if (data.team_api_role_configuration !== undefined) {
      if (!validate279(data.team_api_role_configuration, {
        instancePath: instancePath + "/team_api_role_configuration",
        parentData: data,
        parentDataProperty: "team_api_role_configuration",
        rootData
      })) {
        vErrors = vErrors === null ? validate279.errors : vErrors.concat(validate279.errors);
        errors = vErrors.length;
      }
    }
    if (data.teams_api_url !== undefined) {
      if (!validate282(data.teams_api_url, {
        instancePath: instancePath + "/teams_api_url",
        parentData: data,
        parentDataProperty: "teams_api_url",
        rootData
      })) {
        vErrors = vErrors === null ? validate282.errors : vErrors.concat(validate282.errors);
        errors = vErrors.length;
      }
    }
  }
  validate260.errors = vErrors;
  return errors === 0;
}
const schema89 = {
  "type": "object",
  "properties": {
    "api_port": {
      "$ref": "MkZmaHUo2XqF8FMvu9UBtin911vOsAMK6UJTRX4I"
    },
    "cluster_history_entries": {
      "$ref": "CTNh4royvfd9J3PMjyBEFpQ8Lrey9taTge6iBTrs"
    },
    "ring_log_lines": {
      "$ref": "D14AVXklH9k2lhBRbQOJ9NJahwnpRy6O1VfFpIqN9SY"
    }
  },
  "nullable": true
};
const schema90 = {
  "type": "integer",
  "default": 8080,
  "nullable": true
};
function validate286(data, {
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
  validate286.errors = vErrors;
  return errors === 0;
}
const schema91 = {
  "type": "integer",
  "default": 100,
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
  validate289.errors = vErrors;
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
    if (data.api_port !== undefined) {
      if (!validate286(data.api_port, {
        instancePath: instancePath + "/api_port",
        parentData: data,
        parentDataProperty: "api_port",
        rootData
      })) {
        vErrors = vErrors === null ? validate286.errors : vErrors.concat(validate286.errors);
        errors = vErrors.length;
      }
    }
    if (data.cluster_history_entries !== undefined) {
      if (!validate37(data.cluster_history_entries, {
        instancePath: instancePath + "/cluster_history_entries",
        parentData: data,
        parentDataProperty: "cluster_history_entries",
        rootData
      })) {
        vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
        errors = vErrors.length;
      }
    }
    if (data.ring_log_lines !== undefined) {
      if (!validate289(data.ring_log_lines, {
        instancePath: instancePath + "/ring_log_lines",
        parentData: data,
        parentDataProperty: "ring_log_lines",
        rootData
      })) {
        vErrors = vErrors === null ? validate289.errors : vErrors.concat(validate289.errors);
        errors = vErrors.length;
      }
    }
  }
  validate285.errors = vErrors;
  return errors === 0;
}
const schema92 = {
  "type": "object",
  "properties": {
    "scalyr_api_key": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "scalyr_cpu_limit": {
      "$ref": "HfOo9Hcxq5HLwM9QCukd1jf5GxCXM0QsuAqd5y0ps"
    },
    "scalyr_cpu_request": {
      "$ref": "K5DW9wWfeBMGSoV5736O2XHZflMW3U2DJirFFcdI"
    },
    "scalyr_image": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "scalyr_memory_limit": {
      "$ref": "zq6Y0MzEz1kXER0Xtj49t24TefRYGX03PZdKac3UtKk"
    },
    "scalyr_memory_request": {
      "$ref": "kcYKEYHcHcs85AuDhp32NQkN483lHjKZOXbhITeRmo"
    },
    "scalyr_server_url": {
      "$ref": "zM19yXdwcOmejggoW6vSWEMACbZExQHSJicGgIBk0"
    }
  },
  "nullable": true
};
const schema93 = {
  "type": "string",
  "pattern": "^(\\d+m|\\d+(\\.\\d{1,3})?)$",
  "default": "1",
  "nullable": true
};
function validate294(data, {
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
    if (!pattern0.test(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^(\\d+m|\\d+(\\.\\d{1,3})?)$"
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
  validate294.errors = vErrors;
  return errors === 0;
}
const schema94 = {
  "type": "string",
  "pattern": "^(\\d+m|\\d+(\\.\\d{1,3})?)$",
  "default": "100m",
  "nullable": true
};
function validate296(data, {
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
    if (!pattern0.test(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^(\\d+m|\\d+(\\.\\d{1,3})?)$"
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
  validate296.errors = vErrors;
  return errors === 0;
}
const schema95 = {
  "type": "string",
  "pattern": "^(\\d+(e\\d+)?|\\d+(\\.\\d+)?(e\\d+)?[EPTGMK]i?)$",
  "default": "500Mi",
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
    if (!pattern1.test(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^(\\d+(e\\d+)?|\\d+(\\.\\d+)?(e\\d+)?[EPTGMK]i?)$"
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
  validate299.errors = vErrors;
  return errors === 0;
}
const schema96 = {
  "type": "string",
  "pattern": "^(\\d+(e\\d+)?|\\d+(\\.\\d+)?(e\\d+)?[EPTGMK]i?)$",
  "default": "50Mi",
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
    if (!pattern1.test(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/pattern",
        keyword: "pattern",
        params: {
          pattern: "^(\\d+(e\\d+)?|\\d+(\\.\\d+)?(e\\d+)?[EPTGMK]i?)$"
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
  validate301.errors = vErrors;
  return errors === 0;
}
const schema97 = {
  "type": "string",
  "default": "https://upload.eu.scalyr.com",
  "nullable": true
};
function validate303(data, {
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
  validate303.errors = vErrors;
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
    if (data.scalyr_api_key !== undefined) {
      if (!validate29(data.scalyr_api_key, {
        instancePath: instancePath + "/scalyr_api_key",
        parentData: data,
        parentDataProperty: "scalyr_api_key",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.scalyr_cpu_limit !== undefined) {
      if (!validate294(data.scalyr_cpu_limit, {
        instancePath: instancePath + "/scalyr_cpu_limit",
        parentData: data,
        parentDataProperty: "scalyr_cpu_limit",
        rootData
      })) {
        vErrors = vErrors === null ? validate294.errors : vErrors.concat(validate294.errors);
        errors = vErrors.length;
      }
    }
    if (data.scalyr_cpu_request !== undefined) {
      if (!validate296(data.scalyr_cpu_request, {
        instancePath: instancePath + "/scalyr_cpu_request",
        parentData: data,
        parentDataProperty: "scalyr_cpu_request",
        rootData
      })) {
        vErrors = vErrors === null ? validate296.errors : vErrors.concat(validate296.errors);
        errors = vErrors.length;
      }
    }
    if (data.scalyr_image !== undefined) {
      if (!validate29(data.scalyr_image, {
        instancePath: instancePath + "/scalyr_image",
        parentData: data,
        parentDataProperty: "scalyr_image",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.scalyr_memory_limit !== undefined) {
      if (!validate299(data.scalyr_memory_limit, {
        instancePath: instancePath + "/scalyr_memory_limit",
        parentData: data,
        parentDataProperty: "scalyr_memory_limit",
        rootData
      })) {
        vErrors = vErrors === null ? validate299.errors : vErrors.concat(validate299.errors);
        errors = vErrors.length;
      }
    }
    if (data.scalyr_memory_request !== undefined) {
      if (!validate301(data.scalyr_memory_request, {
        instancePath: instancePath + "/scalyr_memory_request",
        parentData: data,
        parentDataProperty: "scalyr_memory_request",
        rootData
      })) {
        vErrors = vErrors === null ? validate301.errors : vErrors.concat(validate301.errors);
        errors = vErrors.length;
      }
    }
    if (data.scalyr_server_url !== undefined) {
      if (!validate303(data.scalyr_server_url, {
        instancePath: instancePath + "/scalyr_server_url",
        parentData: data,
        parentDataProperty: "scalyr_server_url",
        rootData
      })) {
        vErrors = vErrors === null ? validate303.errors : vErrors.concat(validate303.errors);
        errors = vErrors.length;
      }
    }
  }
  validate292.errors = vErrors;
  return errors === 0;
}
const schema98 = {
  "type": "object",
  "properties": {
    "connection_pooler_schema": {
      "$ref": "AgXynm9V51mDqIOlreJV6rAA3w5JINLxZWEC26sakw"
    },
    "connection_pooler_user": {
      "$ref": "AgXynm9V51mDqIOlreJV6rAA3w5JINLxZWEC26sakw"
    },
    "connection_pooler_image": {
      "$ref": "g5XjAcAsI3c12pcMDmMXdOKjGEFFZI6zuGn8D28Y"
    },
    "connection_pooler_max_db_connections": {
      "$ref": "I4Pk4ApSeJIAUkoCTH1oLKNqN2z3uEvtmMVXRaQSs"
    },
    "connection_pooler_mode": {
      "$ref": "ksqQ4cC3ssWx4Oat1RPJyNUlEcZJba4tpcuMLVUxWJI"
    },
    "connection_pooler_number_of_instances": {
      "$ref": "SNeY6xS7BG41vt3BtfM2SrGJYGlZrvTkhslVBWM3wsY"
    },
    "connection_pooler_default_cpu_limit": {
      "$ref": "Xza6d5tCDZnfRjeGH4WtAhdgrn4ZuStbFa8NJOGbU"
    },
    "connection_pooler_default_cpu_request": {
      "$ref": "Xza6d5tCDZnfRjeGH4WtAhdgrn4ZuStbFa8NJOGbU"
    },
    "connection_pooler_default_memory_limit": {
      "$ref": "Gu1Ixp344g2pD0UPUtyhcYbZCE1cAfJ068GTt7bYlA0"
    },
    "connection_pooler_default_memory_request": {
      "$ref": "Gu1Ixp344g2pD0UPUtyhcYbZCE1cAfJ068GTt7bYlA0"
    }
  },
  "nullable": true
};
const schema21 = {
  "type": "string",
  "default": "pooler",
  "nullable": true
};
function validate38(data, {
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
  validate38.errors = vErrors;
  return errors === 0;
}
const schema99 = {
  "type": "string",
  "default": "registry.opensource.zalan.do/acid/pgbouncer:master-32",
  "nullable": true
};
function validate309(data, {
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
  validate309.errors = vErrors;
  return errors === 0;
}
const schema100 = {
  "type": "integer",
  "default": 60,
  "nullable": true
};
function validate311(data, {
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
  validate311.errors = vErrors;
  return errors === 0;
}
const schema101 = {
  "type": "string",
  "enum": ["session", "transaction"],
  "default": "transaction",
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
  if (!(data === "session" || data === "transaction")) {
    const err1 = {
      instancePath,
      schemaPath: "#/enum",
      keyword: "enum",
      params: {
        allowedValues: schema101.enum
      }
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  validate313.errors = vErrors;
  return errors === 0;
}
const schema102 = {
  "type": "integer",
  "default": 2,
  "minimum": 1,
  "nullable": true
};
function validate315(data, {
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
  validate315.errors = vErrors;
  return errors === 0;
}
function validate306(data, {
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
    if (data.connection_pooler_schema !== undefined) {
      if (!validate38(data.connection_pooler_schema, {
        instancePath: instancePath + "/connection_pooler_schema",
        parentData: data,
        parentDataProperty: "connection_pooler_schema",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
        errors = vErrors.length;
      }
    }
    if (data.connection_pooler_user !== undefined) {
      if (!validate38(data.connection_pooler_user, {
        instancePath: instancePath + "/connection_pooler_user",
        parentData: data,
        parentDataProperty: "connection_pooler_user",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
        errors = vErrors.length;
      }
    }
    if (data.connection_pooler_image !== undefined) {
      if (!validate309(data.connection_pooler_image, {
        instancePath: instancePath + "/connection_pooler_image",
        parentData: data,
        parentDataProperty: "connection_pooler_image",
        rootData
      })) {
        vErrors = vErrors === null ? validate309.errors : vErrors.concat(validate309.errors);
        errors = vErrors.length;
      }
    }
    if (data.connection_pooler_max_db_connections !== undefined) {
      if (!validate311(data.connection_pooler_max_db_connections, {
        instancePath: instancePath + "/connection_pooler_max_db_connections",
        parentData: data,
        parentDataProperty: "connection_pooler_max_db_connections",
        rootData
      })) {
        vErrors = vErrors === null ? validate311.errors : vErrors.concat(validate311.errors);
        errors = vErrors.length;
      }
    }
    if (data.connection_pooler_mode !== undefined) {
      if (!validate313(data.connection_pooler_mode, {
        instancePath: instancePath + "/connection_pooler_mode",
        parentData: data,
        parentDataProperty: "connection_pooler_mode",
        rootData
      })) {
        vErrors = vErrors === null ? validate313.errors : vErrors.concat(validate313.errors);
        errors = vErrors.length;
      }
    }
    if (data.connection_pooler_number_of_instances !== undefined) {
      if (!validate315(data.connection_pooler_number_of_instances, {
        instancePath: instancePath + "/connection_pooler_number_of_instances",
        parentData: data,
        parentDataProperty: "connection_pooler_number_of_instances",
        rootData
      })) {
        vErrors = vErrors === null ? validate315.errors : vErrors.concat(validate315.errors);
        errors = vErrors.length;
      }
    }
    if (data.connection_pooler_default_cpu_limit !== undefined) {
      if (!validate34(data.connection_pooler_default_cpu_limit, {
        instancePath: instancePath + "/connection_pooler_default_cpu_limit",
        parentData: data,
        parentDataProperty: "connection_pooler_default_cpu_limit",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.connection_pooler_default_cpu_request !== undefined) {
      if (!validate34(data.connection_pooler_default_cpu_request, {
        instancePath: instancePath + "/connection_pooler_default_cpu_request",
        parentData: data,
        parentDataProperty: "connection_pooler_default_cpu_request",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.connection_pooler_default_memory_limit !== undefined) {
      if (!validate35(data.connection_pooler_default_memory_limit, {
        instancePath: instancePath + "/connection_pooler_default_memory_limit",
        parentData: data,
        parentDataProperty: "connection_pooler_default_memory_limit",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
    if (data.connection_pooler_default_memory_request !== undefined) {
      if (!validate35(data.connection_pooler_default_memory_request, {
        instancePath: instancePath + "/connection_pooler_default_memory_request",
        parentData: data,
        parentDataProperty: "connection_pooler_default_memory_request",
        rootData
      })) {
        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
        errors = vErrors.length;
      }
    }
  }
  validate306.errors = vErrors;
  return errors === 0;
}
const schema103 = {
  "type": "object",
  "properties": {
    "enable_patroni_failsafe_mode": {
      "$ref": "gEUOOhuZefzFQPAU2P6REZY1YYmpGc0TVbLahK1eos"
    }
  },
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
    if (data.enable_patroni_failsafe_mode !== undefined) {
      if (!validate22(data.enable_patroni_failsafe_mode, {
        instancePath: instancePath + "/enable_patroni_failsafe_mode",
        parentData: data,
        parentDataProperty: "enable_patroni_failsafe_mode",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
  }
  validate322.errors = vErrors;
  return errors === 0;
}
function validate44(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.crd_categories !== undefined) {
      if (!validate25(data.crd_categories, {
        instancePath: instancePath + "/crd_categories",
        parentData: data,
        parentDataProperty: "crd_categories",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.docker_image !== undefined) {
      if (!validate46(data.docker_image, {
        instancePath: instancePath + "/docker_image",
        parentData: data,
        parentDataProperty: "docker_image",
        rootData
      })) {
        vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_crd_registration !== undefined) {
      if (!validate21(data.enable_crd_registration, {
        instancePath: instancePath + "/enable_crd_registration",
        parentData: data,
        parentDataProperty: "enable_crd_registration",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_crd_validation !== undefined) {
      if (!validate21(data.enable_crd_validation, {
        instancePath: instancePath + "/enable_crd_validation",
        parentData: data,
        parentDataProperty: "enable_crd_validation",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_lazy_spilo_upgrade !== undefined) {
      if (!validate22(data.enable_lazy_spilo_upgrade, {
        instancePath: instancePath + "/enable_lazy_spilo_upgrade",
        parentData: data,
        parentDataProperty: "enable_lazy_spilo_upgrade",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_pgversion_env_var !== undefined) {
      if (!validate21(data.enable_pgversion_env_var, {
        instancePath: instancePath + "/enable_pgversion_env_var",
        parentData: data,
        parentDataProperty: "enable_pgversion_env_var",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_shm_volume !== undefined) {
      if (!validate21(data.enable_shm_volume, {
        instancePath: instancePath + "/enable_shm_volume",
        parentData: data,
        parentDataProperty: "enable_shm_volume",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_spilo_wal_path_compat !== undefined) {
      if (!validate22(data.enable_spilo_wal_path_compat, {
        instancePath: instancePath + "/enable_spilo_wal_path_compat",
        parentData: data,
        parentDataProperty: "enable_spilo_wal_path_compat",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.enable_team_id_clustername_prefix !== undefined) {
      if (!validate22(data.enable_team_id_clustername_prefix, {
        instancePath: instancePath + "/enable_team_id_clustername_prefix",
        parentData: data,
        parentDataProperty: "enable_team_id_clustername_prefix",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.etcd_host !== undefined) {
      if (!validate31(data.etcd_host, {
        instancePath: instancePath + "/etcd_host",
        parentData: data,
        parentDataProperty: "etcd_host",
        rootData
      })) {
        vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
        errors = vErrors.length;
      }
    }
    if (data.ignore_instance_limits_annotation_key !== undefined) {
      if (!validate29(data.ignore_instance_limits_annotation_key, {
        instancePath: instancePath + "/ignore_instance_limits_annotation_key",
        parentData: data,
        parentDataProperty: "ignore_instance_limits_annotation_key",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.kubernetes_use_configmaps !== undefined) {
      if (!validate22(data.kubernetes_use_configmaps, {
        instancePath: instancePath + "/kubernetes_use_configmaps",
        parentData: data,
        parentDataProperty: "kubernetes_use_configmaps",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.max_instances !== undefined) {
      if (!validate23(data.max_instances, {
        instancePath: instancePath + "/max_instances",
        parentData: data,
        parentDataProperty: "max_instances",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.min_instances !== undefined) {
      if (!validate23(data.min_instances, {
        instancePath: instancePath + "/min_instances",
        parentData: data,
        parentDataProperty: "min_instances",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.resync_period !== undefined) {
      if (!validate60(data.resync_period, {
        instancePath: instancePath + "/resync_period",
        parentData: data,
        parentDataProperty: "resync_period",
        rootData
      })) {
        vErrors = vErrors === null ? validate60.errors : vErrors.concat(validate60.errors);
        errors = vErrors.length;
      }
    }
    if (data.repair_period !== undefined) {
      if (!validate32(data.repair_period, {
        instancePath: instancePath + "/repair_period",
        parentData: data,
        parentDataProperty: "repair_period",
        rootData
      })) {
        vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
        errors = vErrors.length;
      }
    }
    if (data.set_memory_request_to_limit !== undefined) {
      if (!validate22(data.set_memory_request_to_limit, {
        instancePath: instancePath + "/set_memory_request_to_limit",
        parentData: data,
        parentDataProperty: "set_memory_request_to_limit",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.sidecar_docker_images !== undefined) {
      if (!validate27(data.sidecar_docker_images, {
        instancePath: instancePath + "/sidecar_docker_images",
        parentData: data,
        parentDataProperty: "sidecar_docker_images",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.sidecars !== undefined) {
      if (!validate65(data.sidecars, {
        instancePath: instancePath + "/sidecars",
        parentData: data,
        parentDataProperty: "sidecars",
        rootData
      })) {
        vErrors = vErrors === null ? validate65.errors : vErrors.concat(validate65.errors);
        errors = vErrors.length;
      }
    }
    if (data.workers !== undefined) {
      if (!validate69(data.workers, {
        instancePath: instancePath + "/workers",
        parentData: data,
        parentDataProperty: "workers",
        rootData
      })) {
        vErrors = vErrors === null ? validate69.errors : vErrors.concat(validate69.errors);
        errors = vErrors.length;
      }
    }
    if (data.users !== undefined) {
      if (!validate71(data.users, {
        instancePath: instancePath + "/users",
        parentData: data,
        parentDataProperty: "users",
        rootData
      })) {
        vErrors = vErrors === null ? validate71.errors : vErrors.concat(validate71.errors);
        errors = vErrors.length;
      }
    }
    if (data.major_version_upgrade !== undefined) {
      if (!validate83(data.major_version_upgrade, {
        instancePath: instancePath + "/major_version_upgrade",
        parentData: data,
        parentDataProperty: "major_version_upgrade",
        rootData
      })) {
        vErrors = vErrors === null ? validate83.errors : vErrors.concat(validate83.errors);
        errors = vErrors.length;
      }
    }
    if (data.kubernetes !== undefined) {
      if (!validate92(data.kubernetes, {
        instancePath: instancePath + "/kubernetes",
        parentData: data,
        parentDataProperty: "kubernetes",
        rootData
      })) {
        vErrors = vErrors === null ? validate92.errors : vErrors.concat(validate92.errors);
        errors = vErrors.length;
      }
    }
    if (data.postgres_pod_resources !== undefined) {
      if (!validate171(data.postgres_pod_resources, {
        instancePath: instancePath + "/postgres_pod_resources",
        parentData: data,
        parentDataProperty: "postgres_pod_resources",
        rootData
      })) {
        vErrors = vErrors === null ? validate171.errors : vErrors.concat(validate171.errors);
        errors = vErrors.length;
      }
    }
    if (data.timeouts !== undefined) {
      if (!validate181(data.timeouts, {
        instancePath: instancePath + "/timeouts",
        parentData: data,
        parentDataProperty: "timeouts",
        rootData
      })) {
        vErrors = vErrors === null ? validate181.errors : vErrors.concat(validate181.errors);
        errors = vErrors.length;
      }
    }
    if (data.load_balancer !== undefined) {
      if (!validate196(data.load_balancer, {
        instancePath: instancePath + "/load_balancer",
        parentData: data,
        parentDataProperty: "load_balancer",
        rootData
      })) {
        vErrors = vErrors === null ? validate196.errors : vErrors.concat(validate196.errors);
        errors = vErrors.length;
      }
    }
    if (data.aws_or_gcp !== undefined) {
      if (!validate215(data.aws_or_gcp, {
        instancePath: instancePath + "/aws_or_gcp",
        parentData: data,
        parentDataProperty: "aws_or_gcp",
        rootData
      })) {
        vErrors = vErrors === null ? validate215.errors : vErrors.concat(validate215.errors);
        errors = vErrors.length;
      }
    }
    if (data.logical_backup !== undefined) {
      if (!validate230(data.logical_backup, {
        instancePath: instancePath + "/logical_backup",
        parentData: data,
        parentDataProperty: "logical_backup",
        rootData
      })) {
        vErrors = vErrors === null ? validate230.errors : vErrors.concat(validate230.errors);
        errors = vErrors.length;
      }
    }
    if (data.debug !== undefined) {
      if (!validate256(data.debug, {
        instancePath: instancePath + "/debug",
        parentData: data,
        parentDataProperty: "debug",
        rootData
      })) {
        vErrors = vErrors === null ? validate256.errors : vErrors.concat(validate256.errors);
        errors = vErrors.length;
      }
    }
    if (data.teams_api !== undefined) {
      if (!validate260(data.teams_api, {
        instancePath: instancePath + "/teams_api",
        parentData: data,
        parentDataProperty: "teams_api",
        rootData
      })) {
        vErrors = vErrors === null ? validate260.errors : vErrors.concat(validate260.errors);
        errors = vErrors.length;
      }
    }
    if (data.logging_rest_api !== undefined) {
      if (!validate285(data.logging_rest_api, {
        instancePath: instancePath + "/logging_rest_api",
        parentData: data,
        parentDataProperty: "logging_rest_api",
        rootData
      })) {
        vErrors = vErrors === null ? validate285.errors : vErrors.concat(validate285.errors);
        errors = vErrors.length;
      }
    }
    if (data.scalyr !== undefined) {
      if (!validate292(data.scalyr, {
        instancePath: instancePath + "/scalyr",
        parentData: data,
        parentDataProperty: "scalyr",
        rootData
      })) {
        vErrors = vErrors === null ? validate292.errors : vErrors.concat(validate292.errors);
        errors = vErrors.length;
      }
    }
    if (data.connection_pooler !== undefined) {
      if (!validate306(data.connection_pooler, {
        instancePath: instancePath + "/connection_pooler",
        parentData: data,
        parentDataProperty: "connection_pooler",
        rootData
      })) {
        vErrors = vErrors === null ? validate306.errors : vErrors.concat(validate306.errors);
        errors = vErrors.length;
      }
    }
    if (data.patroni !== undefined) {
      if (!validate322(data.patroni, {
        instancePath: instancePath + "/patroni",
        parentData: data,
        parentDataProperty: "patroni",
        rootData
      })) {
        vErrors = vErrors === null ? validate322.errors : vErrors.concat(validate322.errors);
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
const schema104 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
};
const schema105 = {};
import { validate as validate328 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
function validate327(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate328(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate328.errors : vErrors.concat(validate328.errors);
      errors = vErrors.length;
    }
  }
  validate327.errors = vErrors;
  return errors === 0;
}
function validate39(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="acid.zalan.do.v1.OperatorConfiguration" */;
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
    if (data.configuration === undefined) {
      const err2 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "configuration"
        }
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
    if (data.kind !== undefined) {
      if (!validate40(data.kind, {
        instancePath: instancePath + "/kind",
        parentData: data,
        parentDataProperty: "kind",
        rootData
      })) {
        vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
        errors = vErrors.length;
      }
    }
    if (data.apiVersion !== undefined) {
      if (!validate42(data.apiVersion, {
        instancePath: instancePath + "/apiVersion",
        parentData: data,
        parentDataProperty: "apiVersion",
        rootData
      })) {
        vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
        errors = vErrors.length;
      }
    }
    if (data.configuration !== undefined) {
      if (!validate44(data.configuration, {
        instancePath: instancePath + "/configuration",
        parentData: data,
        parentDataProperty: "configuration",
        rootData
      })) {
        vErrors = vErrors === null ? validate44.errors : vErrors.concat(validate44.errors);
        errors = vErrors.length;
      }
    }
    if (data.status !== undefined) {
      if (!validate27(data.status, {
        instancePath: instancePath + "/status",
        parentData: data,
        parentDataProperty: "status",
        rootData
      })) {
        vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
        errors = vErrors.length;
      }
    }
    if (data.metadata !== undefined) {
      if (!validate327(data.metadata, {
        instancePath: instancePath + "/metadata",
        parentData: data,
        parentDataProperty: "metadata",
        rootData
      })) {
        vErrors = vErrors === null ? validate327.errors : vErrors.concat(validate327.errors);
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
  validate39.errors = vErrors;
  return errors === 0;
}