import { IIoK8sApiNetworkingV1IngressLoadBalancerIngress } from "./IngressLoadBalancerIngress";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiNetworkingV1IngressLoadBalancerStatus";

/**
 * IngressLoadBalancerStatus represents the status of a load-balancer.
 */
export interface IIngressLoadBalancerStatus {
  /**
   * ingress is a list containing ingress points for the load-balancer.
   */
  "ingress"?: Array<IIoK8sApiNetworkingV1IngressLoadBalancerIngress>;
}

/**
 * IngressLoadBalancerStatus represents the status of a load-balancer.
 */
export class IngressLoadBalancerStatus extends Model<IIngressLoadBalancerStatus> implements IIngressLoadBalancerStatus {
  "ingress"?: Array<IIoK8sApiNetworkingV1IngressLoadBalancerIngress>;

constructor(data?: ModelData<IIngressLoadBalancerStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(IngressLoadBalancerStatus, validate as ValidateFunc<IIngressLoadBalancerStatus>);

export {
  IIngressLoadBalancerStatus as IIoK8sApiNetworkingV1IngressLoadBalancerStatus,
  IngressLoadBalancerStatus as IoK8sApiNetworkingV1IngressLoadBalancerStatus
};
