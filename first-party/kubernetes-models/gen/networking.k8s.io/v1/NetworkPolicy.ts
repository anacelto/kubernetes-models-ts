import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { IIoK8sApiNetworkingV1NetworkPolicySpec } from "./NetworkPolicySpec";
import { IIoK8sApiNetworkingV1NetworkPolicyStatus } from "./NetworkPolicyStatus";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiNetworkingV1NetworkPolicy";

/**
 * NetworkPolicy describes what network traffic is allowed for a set of Pods
 */
export interface INetworkPolicy extends TypeMeta {
  "apiVersion": "networking.k8s.io/v1";
  "kind": "NetworkPolicy";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /**
   * spec represents the specification of the desired behavior for this NetworkPolicy.
   */
  "spec"?: IIoK8sApiNetworkingV1NetworkPolicySpec;
  /**
   * status represents the current state of the NetworkPolicy. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  "status"?: IIoK8sApiNetworkingV1NetworkPolicyStatus;
}

/**
 * NetworkPolicy describes what network traffic is allowed for a set of Pods
 */
export class NetworkPolicy extends Model<INetworkPolicy> implements INetworkPolicy {
  "apiVersion": INetworkPolicy["apiVersion"];
  "kind": INetworkPolicy["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
  "spec"?: IIoK8sApiNetworkingV1NetworkPolicySpec;
  "status"?: IIoK8sApiNetworkingV1NetworkPolicyStatus;

static apiVersion: INetworkPolicy["apiVersion"] = "networking.k8s.io/v1";
static kind: INetworkPolicy["kind"] = "NetworkPolicy";
static is = createTypeMetaGuard<INetworkPolicy>(NetworkPolicy);

constructor(data?: ModelData<INetworkPolicy>) {
  super();

  this.setDefinedProps({
    apiVersion: NetworkPolicy.apiVersion,
    kind: NetworkPolicy.kind,
    ...data
  } as INetworkPolicy);
}
}

setValidateFunc(NetworkPolicy, validate as ValidateFunc<INetworkPolicy>);

export {
  INetworkPolicy as IIoK8sApiNetworkingV1NetworkPolicy,
  NetworkPolicy as IoK8sApiNetworkingV1NetworkPolicy
};
