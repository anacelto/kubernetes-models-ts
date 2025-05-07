import { formats } from "@kubernetes-models/validate";
export const validate = validate21;
const schema6 = {
  "properties": {
    "caBundle": {
      "$ref": "0d0YjoHtjtI7p6BAHkZ9AtqFZvdnJ29AdGDpfxXc"
    },
    "service": {
      "$ref": "l3FqEIWNpZ1yT8UHCNEZ7rASUyFzJUyJboK1F3xyc"
    },
    "url": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    }
  },
  "type": "object",
  "$id": "io.k8s.api.admissionregistration.v1.WebhookClientConfig"
};
const schema7 = {
  "format": "byte",
  "type": "string",
  "nullable": true
};
const formats0 = formats.byte;
function validate22(data, {
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
    if (!formats0.validate(data)) {
      const err1 = {
        instancePath,
        schemaPath: "#/format",
        keyword: "format",
        params: {
          format: "byte"
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
  validate22.errors = vErrors;
  return errors === 0;
}
const schema8 = {
  "nullableRef": "io.k8s.api.admissionregistration.v1.ServiceReference#"
};
const schema9 = {};
import { validate as validate25 } from "./IoK8sApiAdmissionregistrationV1ServiceReference";
function validate24(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data !== null) {
    if (!validate25(data, {
      instancePath,
      parentData,
      parentDataProperty,
      rootData
    })) {
      vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
      errors = vErrors.length;
    }
  }
  validate24.errors = vErrors;
  return errors === 0;
}
const schema10 = {
  "type": "string",
  "nullable": true
};
function validate28(data, {
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
  validate28.errors = vErrors;
  return errors === 0;
}
function validate21(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.api.admissionregistration.v1.WebhookClientConfig" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.caBundle !== undefined) {
      if (!validate22(data.caBundle, {
        instancePath: instancePath + "/caBundle",
        parentData: data,
        parentDataProperty: "caBundle",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.service !== undefined) {
      if (!validate24(data.service, {
        instancePath: instancePath + "/service",
        parentData: data,
        parentDataProperty: "service",
        rootData
      })) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
      }
    }
    if (data.url !== undefined) {
      if (!validate28(data.url, {
        instancePath: instancePath + "/url",
        parentData: data,
        parentDataProperty: "url",
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
  validate21.errors = vErrors;
  return errors === 0;
}