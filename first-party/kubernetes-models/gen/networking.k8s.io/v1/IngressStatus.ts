import { IIoK8sApiNetworkingV1IngressLoadBalancerStatus } from "./IngressLoadBalancerStatus";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiNetworkingV1IngressStatus";

/**
 * IngressStatus describe the current state of the Ingress.
 */
export interface IIngressStatus {
  /**
   * loadBalancer contains the current status of the load-balancer.
   */
  "loadBalancer"?: IIoK8sApiNetworkingV1IngressLoadBalancerStatus;
}

/**
 * IngressStatus describe the current state of the Ingress.
 */
export class IngressStatus extends Model<IIngressStatus> implements IIngressStatus {
  "loadBalancer"?: IIoK8sApiNetworkingV1IngressLoadBalancerStatus;

constructor(data?: ModelData<IIngressStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(IngressStatus, validate as ValidateFunc<IIngressStatus>);

export {
  IIngressStatus as IIoK8sApiNetworkingV1IngressStatus,
  IngressStatus as IoK8sApiNetworkingV1IngressStatus
};
