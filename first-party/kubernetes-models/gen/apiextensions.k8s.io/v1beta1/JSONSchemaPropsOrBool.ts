import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSONSchemaPropsOrBool";

/**
 * JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property.
 */
export interface IJSONSchemaPropsOrBool {
}

/**
 * JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property.
 */
export class JSONSchemaPropsOrBool extends Model<IJSONSchemaPropsOrBool> implements IJSONSchemaPropsOrBool {

constructor(data?: ModelData<IJSONSchemaPropsOrBool>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(JSONSchemaPropsOrBool, validate as ValidateFunc<IJSONSchemaPropsOrBool>);

export {
  IJSONSchemaPropsOrBool as IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSONSchemaPropsOrBool,
  JSONSchemaPropsOrBool as IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSONSchemaPropsOrBool
};
