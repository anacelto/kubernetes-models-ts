import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSONSchemaProps } from "./JSONSchemaProps";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceValidation";

/**
 * CustomResourceValidation is a list of validation methods for CustomResources.
 */
export interface ICustomResourceValidation {
  /**
   * openAPIV3Schema is the OpenAPI v3 schema to use for validation and pruning.
   */
  "openAPIV3Schema"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSONSchemaProps;
}

/**
 * CustomResourceValidation is a list of validation methods for CustomResources.
 */
export class CustomResourceValidation extends Model<ICustomResourceValidation> implements ICustomResourceValidation {
  "openAPIV3Schema"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSONSchemaProps;

constructor(data?: ModelData<ICustomResourceValidation>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(CustomResourceValidation, validate as ValidateFunc<ICustomResourceValidation>);

export {
  ICustomResourceValidation as IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceValidation,
  CustomResourceValidation as IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceValidation
};
