import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiAuthenticationV1BoundObjectReference";

/**
 * BoundObjectReference is a reference to an object that a token is bound to.
 */
export interface IBoundObjectReference {
  /**
   * API version of the referent.
   */
  "apiVersion"?: string;
  /**
   * Kind of the referent. Valid kinds are 'Pod' and 'Secret'.
   */
  "kind"?: string;
  /**
   * Name of the referent.
   */
  "name"?: string;
  /**
   * UID of the referent.
   */
  "uid"?: string;
}

/**
 * BoundObjectReference is a reference to an object that a token is bound to.
 */
export class BoundObjectReference extends Model<IBoundObjectReference> implements IBoundObjectReference {
  "apiVersion"?: IBoundObjectReference["apiVersion"];
  "kind"?: IBoundObjectReference["kind"];
  "name"?: string;
  "uid"?: string;

constructor(data?: ModelData<IBoundObjectReference>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(BoundObjectReference, validate as ValidateFunc<IBoundObjectReference>);

export {
  IBoundObjectReference as IIoK8sApiAuthenticationV1BoundObjectReference,
  BoundObjectReference as IoK8sApiAuthenticationV1BoundObjectReference
};
