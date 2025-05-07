import { formats } from "@kubernetes-models/validate";
export const validate = validate27;
const schema11 = {
  "properties": {
    "$ref": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "$schema": {
      "$ref": "GlcYMJF0EagTzhTCQIbCB22J377Z87wRm00IC2Ss2g"
    },
    "additionalItems": {
      "$ref": "wbnydiHaLXvD876oT1PKt0iMw2xby88laOzwleFLg"
    },
    "additionalProperties": {
      "$ref": "wbnydiHaLXvD876oT1PKt0iMw2xby88laOzwleFLg"
    },
    "allOf": {
      "$ref": "7QSZlX1wNrCVbXRBcnZAzINIse5raLMQLZRbw7Lzps"
    },
    "anyOf": {
      "items": {
        "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps#"
      },
      "type": "array",
      "nullable": true
    },
    "default": {
      "nullableRef": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSON#"
    },
    "definitions": {
      "additionalProperties": {
        "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps#"
      },
      "type": "object",
      "nullable": true
    },
    "dependencies": {
      "additionalProperties": {
        "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrStringArray#"
      },
      "type": "object",
      "nullable": true
    },
    "enum": {
      "items": {
        "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSON#"
      },
      "type": "array",
      "nullable": true
    },
    "example": {
      "nullableRef": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSON#"
    },
    "exclusiveMaximum": {
      "type": "boolean",
      "nullable": true
    },
    "exclusiveMinimum": {
      "type": "boolean",
      "nullable": true
    },
    "externalDocs": {
      "nullableRef": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ExternalDocumentation#"
    },
    "format": {
      "type": "string",
      "nullable": true
    },
    "id": {
      "type": "string",
      "nullable": true
    },
    "items": {
      "nullableRef": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrArray#"
    },
    "maxItems": {
      "format": "int64",
      "type": "integer",
      "nullable": true
    },
    "maxLength": {
      "format": "int64",
      "type": "integer",
      "nullable": true
    },
    "maxProperties": {
      "format": "int64",
      "type": "integer",
      "nullable": true
    },
    "maximum": {
      "format": "double",
      "type": "number",
      "nullable": true
    },
    "minItems": {
      "format": "int64",
      "type": "integer",
      "nullable": true
    },
    "minLength": {
      "format": "int64",
      "type": "integer",
      "nullable": true
    },
    "minProperties": {
      "format": "int64",
      "type": "integer",
      "nullable": true
    },
    "minimum": {
      "format": "double",
      "type": "number",
      "nullable": true
    },
    "multipleOf": {
      "format": "double",
      "type": "number",
      "nullable": true
    },
    "not": {
      "nullableRef": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps#"
    },
    "nullable": {
      "type": "boolean",
      "nullable": true
    },
    "oneOf": {
      "items": {
        "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps#"
      },
      "type": "array",
      "nullable": true
    },
    "pattern": {
      "type": "string",
      "nullable": true
    },
    "patternProperties": {
      "additionalProperties": {
        "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps#"
      },
      "type": "object",
      "nullable": true
    },
    "properties": {
      "additionalProperties": {
        "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps#"
      },
      "type": "object",
      "nullable": true
    },
    "required": {
      "items": {
        "type": "string"
      },
      "type": "array",
      "nullable": true
    },
    "title": {
      "type": "string",
      "nullable": true
    },
    "type": {
      "type": "string",
      "nullable": true
    },
    "uniqueItems": {
      "type": "boolean",
      "nullable": true
    }
  },
  "type": "object",
  "$id": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps"
};
const schema6 = {
  "type": "string",
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
  validate21.errors = vErrors;
  return errors === 0;
}
const schema7 = {
  "nullableRef": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrBool#"
};
const schema8 = {};
import { validate as validate23 } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrBool";
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
const schema12 = {};
import { validate as validate32 } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSON";
const schema13 = {};
import { validate as validate34 } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrStringArray";
const schema14 = {};
import { validate as validate38 } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentation";
const schema15 = {};
import { validate as validate40 } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrArray";
const wrapper0 = {
  validate: validate25
};
const schema9 = {
  "items": {
    "$ref": "qqljwHXUEtDzhAN46gqyv75yRkDMfPmXe7h4lHAQ5I"
  },
  "type": "array",
  "nullable": true
};
const schema10 = {
  "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps#"
};
function validate26(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (!validate27(data, {
    instancePath,
    parentData,
    parentDataProperty,
    rootData
  })) {
    vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
    errors = vErrors.length;
  }
  validate26.errors = vErrors;
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
      if (!validate26(data[i0], {
        instancePath: instancePath + "/" + i0,
        parentData: data,
        parentDataProperty: i0,
        rootData
      })) {
        vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
        errors = vErrors.length;
      }
    }
  }
  validate25.errors = vErrors;
  return errors === 0;
}
const wrapper1 = {
  validate: validate27
};
const formats0 = formats.int64;
const formats6 = formats.double;
function validate27(data, {
  instancePath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  /*# sourceURL="io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps" */;
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.$ref !== undefined) {
      if (!validate21(data.$ref, {
        instancePath: instancePath + "/$ref",
        parentData: data,
        parentDataProperty: "$ref",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.$schema !== undefined) {
      if (!validate21(data.$schema, {
        instancePath: instancePath + "/$schema",
        parentData: data,
        parentDataProperty: "$schema",
        rootData
      })) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
    }
    if (data.additionalItems !== undefined) {
      if (!validate22(data.additionalItems, {
        instancePath: instancePath + "/additionalItems",
        parentData: data,
        parentDataProperty: "additionalItems",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.additionalProperties !== undefined) {
      if (!validate22(data.additionalProperties, {
        instancePath: instancePath + "/additionalProperties",
        parentData: data,
        parentDataProperty: "additionalProperties",
        rootData
      })) {
        vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
        errors = vErrors.length;
      }
    }
    if (data.allOf !== undefined) {
      if (!wrapper0.validate(data.allOf, {
        instancePath: instancePath + "/allOf",
        parentData: data,
        parentDataProperty: "allOf",
        rootData
      })) {
        vErrors = vErrors === null ? wrapper0.validate.errors : vErrors.concat(wrapper0.validate.errors);
        errors = vErrors.length;
      }
    }
    if (data.anyOf !== undefined) {
      let data5 = data.anyOf;
      if (!Array.isArray(data5) && data5 !== null) {
        const err0 = {
          instancePath: instancePath + "/anyOf",
          schemaPath: "#/properties/anyOf/type",
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
      if (Array.isArray(data5)) {
        const len0 = data5.length;
        for (let i0 = 0; i0 < len0; i0++) {
          if (!wrapper1.validate(data5[i0], {
            instancePath: instancePath + "/anyOf/" + i0,
            parentData: data5,
            parentDataProperty: i0,
            rootData
          })) {
            vErrors = vErrors === null ? wrapper1.validate.errors : vErrors.concat(wrapper1.validate.errors);
            errors = vErrors.length;
          }
        }
      }
    }
    if (data.default !== undefined) {
      let data7 = data.default;
      if (data7 !== null) {
        if (!validate32(data7, {
          instancePath: instancePath + "/default",
          parentData: data,
          parentDataProperty: "default",
          rootData
        })) {
          vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
          errors = vErrors.length;
        }
      }
    }
    if (data.definitions !== undefined) {
      let data8 = data.definitions;
      if (!(data8 && typeof data8 == "object" && !Array.isArray(data8)) && data8 !== null) {
        const err1 = {
          instancePath: instancePath + "/definitions",
          schemaPath: "#/properties/definitions/type",
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
      if (data8 && typeof data8 == "object" && !Array.isArray(data8)) {
        for (const key0 in data8) {
          if (!wrapper1.validate(data8[key0], {
            instancePath: instancePath + "/definitions/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),
            parentData: data8,
            parentDataProperty: key0,
            rootData
          })) {
            vErrors = vErrors === null ? wrapper1.validate.errors : vErrors.concat(wrapper1.validate.errors);
            errors = vErrors.length;
          }
        }
      }
    }
    if (data.dependencies !== undefined) {
      let data10 = data.dependencies;
      if (!(data10 && typeof data10 == "object" && !Array.isArray(data10)) && data10 !== null) {
        const err2 = {
          instancePath: instancePath + "/dependencies",
          schemaPath: "#/properties/dependencies/type",
          keyword: "type",
          params: {
            type: "object"
          }
        };
        if (vErrors === null) {
          vErrors = [err2];
        } else {
          vErrors.push(err2);
        }
        errors++;
      }
      if (data10 && typeof data10 == "object" && !Array.isArray(data10)) {
        for (const key1 in data10) {
          if (!validate34(data10[key1], {
            instancePath: instancePath + "/dependencies/" + key1.replace(/~/g, "~0").replace(/\//g, "~1"),
            parentData: data10,
            parentDataProperty: key1,
            rootData
          })) {
            vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
            errors = vErrors.length;
          }
        }
      }
    }
    if (data.enum !== undefined) {
      let data12 = data.enum;
      if (!Array.isArray(data12) && data12 !== null) {
        const err3 = {
          instancePath: instancePath + "/enum",
          schemaPath: "#/properties/enum/type",
          keyword: "type",
          params: {
            type: "array"
          }
        };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      }
      if (Array.isArray(data12)) {
        const len1 = data12.length;
        for (let i1 = 0; i1 < len1; i1++) {
          if (!validate32(data12[i1], {
            instancePath: instancePath + "/enum/" + i1,
            parentData: data12,
            parentDataProperty: i1,
            rootData
          })) {
            vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
            errors = vErrors.length;
          }
        }
      }
    }
    if (data.example !== undefined) {
      let data14 = data.example;
      if (data14 !== null) {
        if (!validate32(data14, {
          instancePath: instancePath + "/example",
          parentData: data,
          parentDataProperty: "example",
          rootData
        })) {
          vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
          errors = vErrors.length;
        }
      }
    }
    if (data.exclusiveMaximum !== undefined) {
      let data15 = data.exclusiveMaximum;
      if (typeof data15 !== "boolean" && data15 !== null) {
        const err4 = {
          instancePath: instancePath + "/exclusiveMaximum",
          schemaPath: "#/properties/exclusiveMaximum/type",
          keyword: "type",
          params: {
            type: "boolean"
          }
        };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      }
    }
    if (data.exclusiveMinimum !== undefined) {
      let data16 = data.exclusiveMinimum;
      if (typeof data16 !== "boolean" && data16 !== null) {
        const err5 = {
          instancePath: instancePath + "/exclusiveMinimum",
          schemaPath: "#/properties/exclusiveMinimum/type",
          keyword: "type",
          params: {
            type: "boolean"
          }
        };
        if (vErrors === null) {
          vErrors = [err5];
        } else {
          vErrors.push(err5);
        }
        errors++;
      }
    }
    if (data.externalDocs !== undefined) {
      let data17 = data.externalDocs;
      if (data17 !== null) {
        if (!validate38(data17, {
          instancePath: instancePath + "/externalDocs",
          parentData: data,
          parentDataProperty: "externalDocs",
          rootData
        })) {
          vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
          errors = vErrors.length;
        }
      }
    }
    if (data.format !== undefined) {
      let data18 = data.format;
      if (typeof data18 !== "string" && data18 !== null) {
        const err6 = {
          instancePath: instancePath + "/format",
          schemaPath: "#/properties/format/type",
          keyword: "type",
          params: {
            type: "string"
          }
        };
        if (vErrors === null) {
          vErrors = [err6];
        } else {
          vErrors.push(err6);
        }
        errors++;
      }
    }
    if (data.id !== undefined) {
      let data19 = data.id;
      if (typeof data19 !== "string" && data19 !== null) {
        const err7 = {
          instancePath: instancePath + "/id",
          schemaPath: "#/properties/id/type",
          keyword: "type",
          params: {
            type: "string"
          }
        };
        if (vErrors === null) {
          vErrors = [err7];
        } else {
          vErrors.push(err7);
        }
        errors++;
      }
    }
    if (data.items !== undefined) {
      let data20 = data.items;
      if (data20 !== null) {
        if (!validate40(data20, {
          instancePath: instancePath + "/items",
          parentData: data,
          parentDataProperty: "items",
          rootData
        })) {
          vErrors = vErrors === null ? validate40.errors : vErrors.concat(validate40.errors);
          errors = vErrors.length;
        }
      }
    }
    if (data.maxItems !== undefined) {
      let data21 = data.maxItems;
      if (!(typeof data21 == "number" && !(data21 % 1) && !isNaN(data21) && isFinite(data21)) && data21 !== null) {
        const err8 = {
          instancePath: instancePath + "/maxItems",
          schemaPath: "#/properties/maxItems/type",
          keyword: "type",
          params: {
            type: "integer"
          }
        };
        if (vErrors === null) {
          vErrors = [err8];
        } else {
          vErrors.push(err8);
        }
        errors++;
      }
      if (typeof data21 == "number" && isFinite(data21)) {
        if (!formats0.validate(data21)) {
          const err9 = {
            instancePath: instancePath + "/maxItems",
            schemaPath: "#/properties/maxItems/format",
            keyword: "format",
            params: {
              format: "int64"
            }
          };
          if (vErrors === null) {
            vErrors = [err9];
          } else {
            vErrors.push(err9);
          }
          errors++;
        }
      }
    }
    if (data.maxLength !== undefined) {
      let data22 = data.maxLength;
      if (!(typeof data22 == "number" && !(data22 % 1) && !isNaN(data22) && isFinite(data22)) && data22 !== null) {
        const err10 = {
          instancePath: instancePath + "/maxLength",
          schemaPath: "#/properties/maxLength/type",
          keyword: "type",
          params: {
            type: "integer"
          }
        };
        if (vErrors === null) {
          vErrors = [err10];
        } else {
          vErrors.push(err10);
        }
        errors++;
      }
      if (typeof data22 == "number" && isFinite(data22)) {
        if (!formats0.validate(data22)) {
          const err11 = {
            instancePath: instancePath + "/maxLength",
            schemaPath: "#/properties/maxLength/format",
            keyword: "format",
            params: {
              format: "int64"
            }
          };
          if (vErrors === null) {
            vErrors = [err11];
          } else {
            vErrors.push(err11);
          }
          errors++;
        }
      }
    }
    if (data.maxProperties !== undefined) {
      let data23 = data.maxProperties;
      if (!(typeof data23 == "number" && !(data23 % 1) && !isNaN(data23) && isFinite(data23)) && data23 !== null) {
        const err12 = {
          instancePath: instancePath + "/maxProperties",
          schemaPath: "#/properties/maxProperties/type",
          keyword: "type",
          params: {
            type: "integer"
          }
        };
        if (vErrors === null) {
          vErrors = [err12];
        } else {
          vErrors.push(err12);
        }
        errors++;
      }
      if (typeof data23 == "number" && isFinite(data23)) {
        if (!formats0.validate(data23)) {
          const err13 = {
            instancePath: instancePath + "/maxProperties",
            schemaPath: "#/properties/maxProperties/format",
            keyword: "format",
            params: {
              format: "int64"
            }
          };
          if (vErrors === null) {
            vErrors = [err13];
          } else {
            vErrors.push(err13);
          }
          errors++;
        }
      }
    }
    if (data.maximum !== undefined) {
      let data24 = data.maximum;
      if (!(typeof data24 == "number" && isFinite(data24)) && data24 !== null) {
        const err14 = {
          instancePath: instancePath + "/maximum",
          schemaPath: "#/properties/maximum/type",
          keyword: "type",
          params: {
            type: "number"
          }
        };
        if (vErrors === null) {
          vErrors = [err14];
        } else {
          vErrors.push(err14);
        }
        errors++;
      }
      if (typeof data24 == "number" && isFinite(data24)) {
        if (!formats6.validate(data24)) {
          const err15 = {
            instancePath: instancePath + "/maximum",
            schemaPath: "#/properties/maximum/format",
            keyword: "format",
            params: {
              format: "double"
            }
          };
          if (vErrors === null) {
            vErrors = [err15];
          } else {
            vErrors.push(err15);
          }
          errors++;
        }
      }
    }
    if (data.minItems !== undefined) {
      let data25 = data.minItems;
      if (!(typeof data25 == "number" && !(data25 % 1) && !isNaN(data25) && isFinite(data25)) && data25 !== null) {
        const err16 = {
          instancePath: instancePath + "/minItems",
          schemaPath: "#/properties/minItems/type",
          keyword: "type",
          params: {
            type: "integer"
          }
        };
        if (vErrors === null) {
          vErrors = [err16];
        } else {
          vErrors.push(err16);
        }
        errors++;
      }
      if (typeof data25 == "number" && isFinite(data25)) {
        if (!formats0.validate(data25)) {
          const err17 = {
            instancePath: instancePath + "/minItems",
            schemaPath: "#/properties/minItems/format",
            keyword: "format",
            params: {
              format: "int64"
            }
          };
          if (vErrors === null) {
            vErrors = [err17];
          } else {
            vErrors.push(err17);
          }
          errors++;
        }
      }
    }
    if (data.minLength !== undefined) {
      let data26 = data.minLength;
      if (!(typeof data26 == "number" && !(data26 % 1) && !isNaN(data26) && isFinite(data26)) && data26 !== null) {
        const err18 = {
          instancePath: instancePath + "/minLength",
          schemaPath: "#/properties/minLength/type",
          keyword: "type",
          params: {
            type: "integer"
          }
        };
        if (vErrors === null) {
          vErrors = [err18];
        } else {
          vErrors.push(err18);
        }
        errors++;
      }
      if (typeof data26 == "number" && isFinite(data26)) {
        if (!formats0.validate(data26)) {
          const err19 = {
            instancePath: instancePath + "/minLength",
            schemaPath: "#/properties/minLength/format",
            keyword: "format",
            params: {
              format: "int64"
            }
          };
          if (vErrors === null) {
            vErrors = [err19];
          } else {
            vErrors.push(err19);
          }
          errors++;
        }
      }
    }
    if (data.minProperties !== undefined) {
      let data27 = data.minProperties;
      if (!(typeof data27 == "number" && !(data27 % 1) && !isNaN(data27) && isFinite(data27)) && data27 !== null) {
        const err20 = {
          instancePath: instancePath + "/minProperties",
          schemaPath: "#/properties/minProperties/type",
          keyword: "type",
          params: {
            type: "integer"
          }
        };
        if (vErrors === null) {
          vErrors = [err20];
        } else {
          vErrors.push(err20);
        }
        errors++;
      }
      if (typeof data27 == "number" && isFinite(data27)) {
        if (!formats0.validate(data27)) {
          const err21 = {
            instancePath: instancePath + "/minProperties",
            schemaPath: "#/properties/minProperties/format",
            keyword: "format",
            params: {
              format: "int64"
            }
          };
          if (vErrors === null) {
            vErrors = [err21];
          } else {
            vErrors.push(err21);
          }
          errors++;
        }
      }
    }
    if (data.minimum !== undefined) {
      let data28 = data.minimum;
      if (!(typeof data28 == "number" && isFinite(data28)) && data28 !== null) {
        const err22 = {
          instancePath: instancePath + "/minimum",
          schemaPath: "#/properties/minimum/type",
          keyword: "type",
          params: {
            type: "number"
          }
        };
        if (vErrors === null) {
          vErrors = [err22];
        } else {
          vErrors.push(err22);
        }
        errors++;
      }
      if (typeof data28 == "number" && isFinite(data28)) {
        if (!formats6.validate(data28)) {
          const err23 = {
            instancePath: instancePath + "/minimum",
            schemaPath: "#/properties/minimum/format",
            keyword: "format",
            params: {
              format: "double"
            }
          };
          if (vErrors === null) {
            vErrors = [err23];
          } else {
            vErrors.push(err23);
          }
          errors++;
        }
      }
    }
    if (data.multipleOf !== undefined) {
      let data29 = data.multipleOf;
      if (!(typeof data29 == "number" && isFinite(data29)) && data29 !== null) {
        const err24 = {
          instancePath: instancePath + "/multipleOf",
          schemaPath: "#/properties/multipleOf/type",
          keyword: "type",
          params: {
            type: "number"
          }
        };
        if (vErrors === null) {
          vErrors = [err24];
        } else {
          vErrors.push(err24);
        }
        errors++;
      }
      if (typeof data29 == "number" && isFinite(data29)) {
        if (!formats6.validate(data29)) {
          const err25 = {
            instancePath: instancePath + "/multipleOf",
            schemaPath: "#/properties/multipleOf/format",
            keyword: "format",
            params: {
              format: "double"
            }
          };
          if (vErrors === null) {
            vErrors = [err25];
          } else {
            vErrors.push(err25);
          }
          errors++;
        }
      }
    }
    if (data.not !== undefined) {
      let data30 = data.not;
      if (data30 !== null) {
        if (!wrapper1.validate(data30, {
          instancePath: instancePath + "/not",
          parentData: data,
          parentDataProperty: "not",
          rootData
        })) {
          vErrors = vErrors === null ? wrapper1.validate.errors : vErrors.concat(wrapper1.validate.errors);
          errors = vErrors.length;
        }
      }
    }
    if (data.nullable !== undefined) {
      let data31 = data.nullable;
      if (typeof data31 !== "boolean" && data31 !== null) {
        const err26 = {
          instancePath: instancePath + "/nullable",
          schemaPath: "#/properties/nullable/type",
          keyword: "type",
          params: {
            type: "boolean"
          }
        };
        if (vErrors === null) {
          vErrors = [err26];
        } else {
          vErrors.push(err26);
        }
        errors++;
      }
    }
    if (data.oneOf !== undefined) {
      let data32 = data.oneOf;
      if (!Array.isArray(data32) && data32 !== null) {
        const err27 = {
          instancePath: instancePath + "/oneOf",
          schemaPath: "#/properties/oneOf/type",
          keyword: "type",
          params: {
            type: "array"
          }
        };
        if (vErrors === null) {
          vErrors = [err27];
        } else {
          vErrors.push(err27);
        }
        errors++;
      }
      if (Array.isArray(data32)) {
        const len2 = data32.length;
        for (let i2 = 0; i2 < len2; i2++) {
          if (!wrapper1.validate(data32[i2], {
            instancePath: instancePath + "/oneOf/" + i2,
            parentData: data32,
            parentDataProperty: i2,
            rootData
          })) {
            vErrors = vErrors === null ? wrapper1.validate.errors : vErrors.concat(wrapper1.validate.errors);
            errors = vErrors.length;
          }
        }
      }
    }
    if (data.pattern !== undefined) {
      let data34 = data.pattern;
      if (typeof data34 !== "string" && data34 !== null) {
        const err28 = {
          instancePath: instancePath + "/pattern",
          schemaPath: "#/properties/pattern/type",
          keyword: "type",
          params: {
            type: "string"
          }
        };
        if (vErrors === null) {
          vErrors = [err28];
        } else {
          vErrors.push(err28);
        }
        errors++;
      }
    }
    if (data.patternProperties !== undefined) {
      let data35 = data.patternProperties;
      if (!(data35 && typeof data35 == "object" && !Array.isArray(data35)) && data35 !== null) {
        const err29 = {
          instancePath: instancePath + "/patternProperties",
          schemaPath: "#/properties/patternProperties/type",
          keyword: "type",
          params: {
            type: "object"
          }
        };
        if (vErrors === null) {
          vErrors = [err29];
        } else {
          vErrors.push(err29);
        }
        errors++;
      }
      if (data35 && typeof data35 == "object" && !Array.isArray(data35)) {
        for (const key2 in data35) {
          if (!wrapper1.validate(data35[key2], {
            instancePath: instancePath + "/patternProperties/" + key2.replace(/~/g, "~0").replace(/\//g, "~1"),
            parentData: data35,
            parentDataProperty: key2,
            rootData
          })) {
            vErrors = vErrors === null ? wrapper1.validate.errors : vErrors.concat(wrapper1.validate.errors);
            errors = vErrors.length;
          }
        }
      }
    }
    if (data.properties !== undefined) {
      let data37 = data.properties;
      if (!(data37 && typeof data37 == "object" && !Array.isArray(data37)) && data37 !== null) {
        const err30 = {
          instancePath: instancePath + "/properties",
          schemaPath: "#/properties/properties/type",
          keyword: "type",
          params: {
            type: "object"
          }
        };
        if (vErrors === null) {
          vErrors = [err30];
        } else {
          vErrors.push(err30);
        }
        errors++;
      }
      if (data37 && typeof data37 == "object" && !Array.isArray(data37)) {
        for (const key3 in data37) {
          if (!wrapper1.validate(data37[key3], {
            instancePath: instancePath + "/properties/" + key3.replace(/~/g, "~0").replace(/\//g, "~1"),
            parentData: data37,
            parentDataProperty: key3,
            rootData
          })) {
            vErrors = vErrors === null ? wrapper1.validate.errors : vErrors.concat(wrapper1.validate.errors);
            errors = vErrors.length;
          }
        }
      }
    }
    if (data.required !== undefined) {
      let data39 = data.required;
      if (!Array.isArray(data39) && data39 !== null) {
        const err31 = {
          instancePath: instancePath + "/required",
          schemaPath: "#/properties/required/type",
          keyword: "type",
          params: {
            type: "array"
          }
        };
        if (vErrors === null) {
          vErrors = [err31];
        } else {
          vErrors.push(err31);
        }
        errors++;
      }
      if (Array.isArray(data39)) {
        const len3 = data39.length;
        for (let i3 = 0; i3 < len3; i3++) {
          if (typeof data39[i3] !== "string") {
            const err32 = {
              instancePath: instancePath + "/required/" + i3,
              schemaPath: "#/properties/required/items/type",
              keyword: "type",
              params: {
                type: "string"
              }
            };
            if (vErrors === null) {
              vErrors = [err32];
            } else {
              vErrors.push(err32);
            }
            errors++;
          }
        }
      }
    }
    if (data.title !== undefined) {
      let data41 = data.title;
      if (typeof data41 !== "string" && data41 !== null) {
        const err33 = {
          instancePath: instancePath + "/title",
          schemaPath: "#/properties/title/type",
          keyword: "type",
          params: {
            type: "string"
          }
        };
        if (vErrors === null) {
          vErrors = [err33];
        } else {
          vErrors.push(err33);
        }
        errors++;
      }
    }
    if (data.type !== undefined) {
      let data42 = data.type;
      if (typeof data42 !== "string" && data42 !== null) {
        const err34 = {
          instancePath: instancePath + "/type",
          schemaPath: "#/properties/type/type",
          keyword: "type",
          params: {
            type: "string"
          }
        };
        if (vErrors === null) {
          vErrors = [err34];
        } else {
          vErrors.push(err34);
        }
        errors++;
      }
    }
    if (data.uniqueItems !== undefined) {
      let data43 = data.uniqueItems;
      if (typeof data43 !== "boolean" && data43 !== null) {
        const err35 = {
          instancePath: instancePath + "/uniqueItems",
          schemaPath: "#/properties/uniqueItems/type",
          keyword: "type",
          params: {
            type: "boolean"
          }
        };
        if (vErrors === null) {
          vErrors = [err35];
        } else {
          vErrors.push(err35);
        }
        errors++;
      }
    }
  } else {
    const err36 = {
      instancePath,
      schemaPath: "#/type",
      keyword: "type",
      params: {
        type: "object"
      }
    };
    if (vErrors === null) {
      vErrors = [err36];
    } else {
      vErrors.push(err36);
    }
    errors++;
  }
  validate27.errors = vErrors;
  return errors === 0;
}