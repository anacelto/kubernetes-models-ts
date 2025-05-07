import { IIoK8sApiCoreV1ClaimSource } from "./ClaimSource";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1PodResourceClaim";

/**
 * PodResourceClaim references exactly one ResourceClaim through a ClaimSource. It adds a name to it that uniquely identifies the ResourceClaim inside the Pod. Containers that need access to the ResourceClaim reference it with this name.
 */
export interface IPodResourceClaim {
  /**
   * Name uniquely identifies this resource claim inside the pod. This must be a DNS_LABEL.
   */
  "name": string;
  /**
   * Source describes where to find the ResourceClaim.
   */
  "source"?: IIoK8sApiCoreV1ClaimSource;
}

/**
 * PodResourceClaim references exactly one ResourceClaim through a ClaimSource. It adds a name to it that uniquely identifies the ResourceClaim inside the Pod. Containers that need access to the ResourceClaim reference it with this name.
 */
export class PodResourceClaim extends Model<IPodResourceClaim> implements IPodResourceClaim {
  "name": string;
  "source"?: IIoK8sApiCoreV1ClaimSource;

constructor(data?: ModelData<IPodResourceClaim>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodResourceClaim, validate as ValidateFunc<IPodResourceClaim>);

export {
  IPodResourceClaim as IIoK8sApiCoreV1PodResourceClaim,
  PodResourceClaim as IoK8sApiCoreV1PodResourceClaim
};
