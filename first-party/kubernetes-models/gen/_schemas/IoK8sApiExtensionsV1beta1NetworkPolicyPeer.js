export const validate = validate24;
const schema8 = {
  "properties": {
    "ipBlock": {
      "$ref": "UGbULXTWnYluNb7ikNC5jgSD7IM5ZJrD8zFyzZWuuI"
    },
    "namespaceSelector": {
      "$ref": "Am3gJXrJDlim5pEjXjCk4qB5T1njejh9RaIGwx5cLKg"
    },
    "podSelector": {
      "$ref": "Am3gJXrJDlim5pEjXjCk4qB5T1njejh9RaIGwx5cLKg"
    }
  },
  "type": "object",
  "$id": "io.k8s.api.extensions.v1beta1.NetworkPolicyPeer"
};
const schema9 = {
  "nullableRef": "io.k8s.api.extensions.v1beta1.IPBlock#"
};
const schema10 = {};
import { validate as validate26 } from "./IoK8sApiExtensionsV1beta1IPBlock";
function validate25(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate26(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
      errors = vErrors.length;
    }
  }
  validate25.errors = vErrors;
  return errors === 0;
}
const schema6 = {
  "nullableRef": "io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"
};
const schema7 = {};
import { validate as validate22 } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1LabelSelector";
function validate21(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate22(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
      errors = vErrors.length;
    }
  }
  validate21.errors = vErrors;
  return errors === 0;
}
function validate24(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.extensions.v1beta1.NetworkPolicyPeer" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.ipBlock !== undefined) {
      if (!validate25(data.ipBlock, {
        instancePath: instancePath + "/ipBlock",
        parentData: data,
        parentDataProperty: "ipBlock",
        rootData
      })) {
        vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
        errors = vErrors.length;
      }
    }
    if (data.namespaceSelector !== undefined) {
      if (!validate21(data.namespaceSelector, {
        instancePath: instancePath + "/namespaceSelector",
        parentData: data,
        parentDataProperty: "namespaceSelector",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.podSelector !== undefined) {
      if (!validate21(data.podSelector, {
        instancePath: instancePath + "/podSelector",
        parentData: data,
        parentDataProperty: "podSelector",
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
  validate24.errors = vErrors;
  return errors === 0;
}