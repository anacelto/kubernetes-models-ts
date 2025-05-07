export const validate = validate22;
const schema7 = {
  "properties": {
    "additionalPrinterColumns": {
      "$ref": "WVgDPBKzLKUkxPTXrV2ZTiI2WlrHv3lI8GDbsidHpc"
    },
    "conversion": {
      "$ref": "nQ5HsQKKxxBpxqfAlmwB8RaOn1FQXOOJkvL4TULKFY"
    },
    "group": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "names": {
      "$ref": "QhHACBaE7MIlqTlaNO186NDRg56pA9vFZNaespDLeno"
    },
    "preserveUnknownFields": {
      "$ref": "hsGPmGwy4VrrbOBJwiGgjUKGPtMFeHO5cmtUu5ZUh0"
    },
    "scope": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    },
    "subresources": {
      "$ref": "57I59bt3vG2gENdWpoCO6yPLPg6pmOXOtYzBqpTbC2M"
    },
    "validation": {
      "$ref": "qA13th8ZCh1yHDDTY0L5izzanQ2QPPrG9gQmMXNdc"
    },
    "version": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "versions": {
      "$ref": "8y1gosJyB2ZHW4ijdNtOh1gogvkuZdKfWOGFq4KYYE"
    }
  },
  "required": ["group", "names", "scope"],
  "type": "object",
  "$id": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionSpec"
};
const schema8 = {
  "items": {
    "$ref": "lY3GMyzLmvJoU4Er12tc8Zfc1glqUGnIz0ioDrKMLM"
  },
  "type": "array",
  "nullable": true
};
const schema9 = {
  "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceColumnDefinition#"
};
const schema10 = {};
import { validate as validate25 } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceColumnDefinition";
function validate24(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate25(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
    errors = vErrors.length;
  }
  validate24.errors = vErrors;
  return errors === 0;
}
function validate23(data, {
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
  validate23.errors = vErrors;
  return errors === 0;
}
const schema11 = {
  "nullableRef": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceConversion#"
};
const schema12 = {};
import { validate as validate30 } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversion";
function validate29(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate30(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
      errors = vErrors.length;
    }
  }
  validate29.errors = vErrors;
  return errors === 0;
}
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
const schema13 = {
  "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionNames#"
};
const schema14 = {};
import { validate as validate35 } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNames";
function validate34(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate35(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
    errors = vErrors.length;
  }
  validate34.errors = vErrors;
  return errors === 0;
}
const schema15 = {
  "type": "boolean",
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
  validate38.errors = vErrors;
  return errors === 0;
}
const schema16 = {
  "nullableRef": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceSubresources#"
};
const schema17 = {};
import { validate as validate42 } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresources";
function validate41(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate42(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
      errors = vErrors.length;
    }
  }
  validate41.errors = vErrors;
  return errors === 0;
}
const schema18 = {
  "nullableRef": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceValidation#"
};
const schema19 = {};
import { validate as validate46 } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceValidation";
function validate45(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate46(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
      errors = vErrors.length;
    }
  }
  validate45.errors = vErrors;
  return errors === 0;
}
const schema20 = {
  "type": "string",
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
  validate49.errors = vErrors;
  return errors === 0;
}
const schema21 = {
  "items": {
    "$ref": "ijjgMy1XiCURv1kEoTifyhhgmsK9JMDL5DbH5Aamg"
  },
  "type": "array",
  "nullable": true
};
const schema22 = {
  "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionVersion#"
};
const schema23 = {};
import { validate as validate53 } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionVersion";
function validate52(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate53(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate53.errors : vErrors.concat(validate53.errors);
    errors = vErrors.length;
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
      if (!validate52(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate52.errors : vErrors.concat(validate52.errors);
        errors = vErrors.length;
      }
    }
  }
  validate51.errors = vErrors;
  return errors === 0;
}
function validate22(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionSpec" */;
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
    if (data.names === undefined) {
      const err1 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "names"
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
    if (data.additionalPrinterColumns !== undefined) {
      if (!validate23(data.additionalPrinterColumns, {
        instancePath: instancePath + "/additionalPrinterColumns",
        parentData: data,
        parentDataProperty: "additionalPrinterColumns",
        rootData
      })) {
        vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
        errors = vErrors.length;
      }
    }
    if (data.conversion !== undefined) {
      if (!validate29(data.conversion, {
        instancePath: instancePath + "/conversion",
        parentData: data,
        parentDataProperty: "conversion",
        rootData
      })) {
        vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
        errors = vErrors.length;
      }
    }
    if (data.group !== undefined) {
      if (!validate21(data.group, {
        instancePath: instancePath + "/group",
        parentData: data,
        parentDataProperty: "group",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.names !== undefined) {
      if (!validate34(data.names, {
        instancePath: instancePath + "/names",
        parentData: data,
        parentDataProperty: "names",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.preserveUnknownFields !== undefined) {
      if (!validate38(data.preserveUnknownFields, {
        instancePath: instancePath + "/preserveUnknownFields",
        parentData: data,
        parentDataProperty: "preserveUnknownFields",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
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
    if (data.subresources !== undefined) {
      if (!validate41(data.subresources, {
        instancePath: instancePath + "/subresources",
        parentData: data,
        parentDataProperty: "subresources",
        rootData
      })) {
        vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
        errors = vErrors.length;
      }
    }
    if (data.validation !== undefined) {
      if (!validate45(data.validation, {
        instancePath: instancePath + "/validation",
        parentData: data,
        parentDataProperty: "validation",
        rootData
      })) {
        vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
        errors = vErrors.length;
      }
    }
    if (data.version !== undefined) {
      if (!validate49(data.version, {
        instancePath: instancePath + "/version",
        parentData: data,
        parentDataProperty: "version",
        rootData
      })) {
        vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
        errors = vErrors.length;
      }
    }
    if (data.versions !== undefined) {
      if (!validate51(data.versions, {
        instancePath: instancePath + "/versions",
        parentData: data,
        parentDataProperty: "versions",
        rootData
      })) {
        vErrors = vErrors === null ? validate51.errors : vErrors.concat(validate51.errors);
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
  validate22.errors = vErrors;
  return errors === 0;
}