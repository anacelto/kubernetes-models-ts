import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ResourceClaim";

/**
 * ResourceClaim references one entry in PodSpec.ResourceClaims.
 */
export interface IResourceClaim {
  /**
   * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
   */
  "name": string;
}

/**
 * ResourceClaim references one entry in PodSpec.ResourceClaims.
 */
export class ResourceClaim extends Model<IResourceClaim> implements IResourceClaim {
  "name": string;

constructor(data?: ModelData<IResourceClaim>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ResourceClaim, validate as ValidateFunc<IResourceClaim>);

export {
  IResourceClaim as IIoK8sApiCoreV1ResourceClaim,
  ResourceClaim as IoK8sApiCoreV1ResourceClaim
};
