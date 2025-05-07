import { IIoK8sApimachineryPkgApisMetaV1Condition } from "@kubernetes-models/apimachinery/apis/meta/v1/Condition";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiNetworkingV1NetworkPolicyStatus";

/**
 * NetworkPolicyStatus describes the current state of the NetworkPolicy.
 */
export interface INetworkPolicyStatus {
  /**
   * conditions holds an array of metav1.Condition that describe the state of the NetworkPolicy. Current service state
   */
  "conditions"?: Array<IIoK8sApimachineryPkgApisMetaV1Condition>;
}

/**
 * NetworkPolicyStatus describes the current state of the NetworkPolicy.
 */
export class NetworkPolicyStatus extends Model<INetworkPolicyStatus> implements INetworkPolicyStatus {
  "conditions"?: Array<IIoK8sApimachineryPkgApisMetaV1Condition>;

constructor(data?: ModelData<INetworkPolicyStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(NetworkPolicyStatus, validate as ValidateFunc<INetworkPolicyStatus>);

export {
  INetworkPolicyStatus as IIoK8sApiNetworkingV1NetworkPolicyStatus,
  NetworkPolicyStatus as IoK8sApiNetworkingV1NetworkPolicyStatus
};
