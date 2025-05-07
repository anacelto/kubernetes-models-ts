export const validate = validate21;
const schema6 = {
  "properties": {
    "containerResource": {
      "$ref": "DFe9WBaBD5afWlcy9IfGLkwlxvvuGZODqD6IhGU28"
    },
    "external": {
      "$ref": "U3i68Ga1B0FQJzxMphPSppEYCPFnVZMd2NjaioBu8"
    },
    "object": {
      "$ref": "Xn4GDy040fx3FdPJ4S0pH9vvI65bv28Y1cIssIXE"
    },
    "pods": {
      "$ref": "yR4TuP2bSVWZ38f3xzKB2irChuKr3bYXb8VfoLhnY"
    },
    "resource": {
      "$ref": "D7zGWicGXn3PIznYDZpS1xfB97RAUxl0LKh4PqaAU"
    },
    "type": {
      "$ref": "jdFtv6DGtroqVatkuk8ipQtGFLMzfSuVek97sB0uauQ"
    }
  },
  "required": ["type"],
  "type": "object",
  "$id": "io.k8s.api.autoscaling.v2beta2.MetricStatus"
};
const schema7 = {
  "nullableRef": "io.k8s.api.autoscaling.v2beta2.ContainerResourceMetricStatus#"
};
const schema8 = {};
import { validate as validate23 } from "./IoK8sApiAutoscalingV2beta2ContainerResourceMetricStatus";
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
  "nullableRef": "io.k8s.api.autoscaling.v2beta2.ExternalMetricStatus#"
};
const schema10 = {};
import { validate as validate27 } from "./IoK8sApiAutoscalingV2beta2ExternalMetricStatus";
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
  "nullableRef": "io.k8s.api.autoscaling.v2beta2.ObjectMetricStatus#"
};
const schema12 = {};
import { validate as validate31 } from "./IoK8sApiAutoscalingV2beta2ObjectMetricStatus";
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
  "nullableRef": "io.k8s.api.autoscaling.v2beta2.PodsMetricStatus#"
};
const schema14 = {};
import { validate as validate35 } from "./IoK8sApiAutoscalingV2beta2PodsMetricStatus";
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
  "nullableRef": "io.k8s.api.autoscaling.v2beta2.ResourceMetricStatus#"
};
const schema16 = {};
import { validate as validate39 } from "./IoK8sApiAutoscalingV2beta2ResourceMetricStatus";
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
  validate42.errors = vErrors;
  return errors === 0;
}
function validate21(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.autoscaling.v2beta2.MetricStatus" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.type === undefined) {
      const err0 = {
        instancePath,
        schemaPath: "#/required",
        keyword: "required",
        params: {
          missingProperty: "type"
        }
      };
      if (vErrors === null) {
        vErrors = [err0];
      } else {
        vErrors.push(err0);
      }
      errors++;
    }
    if (data.containerResource !== undefined) {
      if (!validate22(data.containerResource, {
        instancePath: instancePath + "/containerResource",
        parentData: data,
        parentDataProperty: "containerResource",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
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
    if (data.object !== undefined) {
      if (!validate30(data.object, {
        instancePath: instancePath + "/object",
        parentData: data,
        parentDataProperty: "object",
        rootData
      })) {
        vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
        errors = vErrors.length;
      }
    }
    if (data.pods !== undefined) {
      if (!validate34(data.pods, {
        instancePath: instancePath + "/pods",
        parentData: data,
        parentDataProperty: "pods",
        rootData
      })) {
        vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
        errors = vErrors.length;
      }
    }
    if (data.resource !== undefined) {
      if (!validate38(data.resource, {
        instancePath: instancePath + "/resource",
        parentData: data,
        parentDataProperty: "resource",
        rootData
      })) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
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