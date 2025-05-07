export const validate = validate26;
const schema9 = {
  "properties": {
    "hard": {
      "$ref": "NK81GiP5i4PAaG93bZ732LPEr0MeIJatXjgw0ewKBgg"
    },
    "used": {
      "$ref": "NK81GiP5i4PAaG93bZ732LPEr0MeIJatXjgw0ewKBgg"
    }
  },
  "type": "object",
  "$id": "io.k8s.api.core.v1.ResourceQuotaStatus"
};
const schema6 = {
  "additionalProperties": {
    "$ref": "XtCS7FYvqoPp05TaNACrQJgsQuQQ1HbhFGV5p2hg"
  },
  "type": "object",
  "nullable": true
};
const schema7 = {
  "$ref": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
};
const schema8 = {};
import { validate as validate23 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApiResourceQuantity";
function validate22(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate23(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
    errors = vErrors.length;
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
      if (!validate22(data[key0], {
        instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
        parentData: data,
        parentDataProperty: key0,
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
function validate26(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.core.v1.ResourceQuotaStatus" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.hard !== undefined) {
      if (!validate21(data.hard, {
        instancePath: instancePath + "/hard",
        parentData: data,
        parentDataProperty: "hard",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.used !== undefined) {
      if (!validate21(data.used, {
        instancePath: instancePath + "/used",
        parentData: data,
        parentDataProperty: "used",
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
  validate26.errors = vErrors;
  return errors === 0;
}