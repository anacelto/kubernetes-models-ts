import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1LocalObjectReference";

/**
 * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
 */
export interface ILocalObjectReference {
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  "name"?: string;
}

/**
 * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
 */
export class LocalObjectReference extends Model<ILocalObjectReference> implements ILocalObjectReference {
  "name"?: string;

constructor(data?: ModelData<ILocalObjectReference>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(LocalObjectReference, validate as ValidateFunc<ILocalObjectReference>);

export {
  ILocalObjectReference as IIoK8sApiCoreV1LocalObjectReference,
  LocalObjectReference as IoK8sApiCoreV1LocalObjectReference
};
