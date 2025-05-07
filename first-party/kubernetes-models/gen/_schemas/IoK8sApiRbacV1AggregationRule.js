export const validate = validate21;
const schema6 = {
  "properties": {
    "clusterRoleSelectors": {
      "$ref": "uTSzQVt486NGTNjxI4PQKZE8Md4ZBiysL1ICIfuECM"
    }
  },
  "type": "object",
  "$id": "io.k8s.api.rbac.v1.AggregationRule"
};
const schema7 = {
  "items": {
    "$ref": "deWUWq08eYKCFWQ7jT71dMhrfOGDoyKjiUyTNZEcYY"
  },
  "type": "array",
  "nullable": true
};
const schema8 = {
  "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"
};
const schema9 = {};
import { validate as validate24 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1LabelSelector";
function validate23(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate24(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
    errors = vErrors.length;
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
  validate22.errors = vErrors;
  return errors === 0;
}
function validate21(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.rbac.v1.AggregationRule" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.clusterRoleSelectors !== undefined) {
      if (!validate22(data.clusterRoleSelectors, {
        instancePath: instancePath + "/clusterRoleSelectors",
        parentData: data,
        parentDataProperty: "clusterRoleSelectors",
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
  validate21.errors = vErrors;
  return errors === 0;
}