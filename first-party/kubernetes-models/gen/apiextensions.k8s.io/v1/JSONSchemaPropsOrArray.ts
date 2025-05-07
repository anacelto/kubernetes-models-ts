import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrArray";

/**
 * JSONSchemaPropsOrArray represents a value that can either be a JSONSchemaProps or an array of JSONSchemaProps. Mainly here for serialization purposes.
 */
export interface IJSONSchemaPropsOrArray {
}

/**
 * JSONSchemaPropsOrArray represents a value that can either be a JSONSchemaProps or an array of JSONSchemaProps. Mainly here for serialization purposes.
 */
export class JSONSchemaPropsOrArray extends Model<IJSONSchemaPropsOrArray> implements IJSONSchemaPropsOrArray {

constructor(data?: ModelData<IJSONSchemaPropsOrArray>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(JSONSchemaPropsOrArray, validate as ValidateFunc<IJSONSchemaPropsOrArray>);

export {
  IJSONSchemaPropsOrArray as IIoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrArray,
  JSONSchemaPropsOrArray as IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrArray
};
