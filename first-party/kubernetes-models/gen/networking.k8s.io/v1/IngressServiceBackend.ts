import { IIoK8sApiNetworkingV1ServiceBackendPort } from "./ServiceBackendPort";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiNetworkingV1IngressServiceBackend";

/**
 * IngressServiceBackend references a Kubernetes Service as a Backend.
 */
export interface IIngressServiceBackend {
  /**
   * name is the referenced service. The service must exist in the same namespace as the Ingress object.
   */
  "name": string;
  /**
   * port of the referenced service. A port name or port number is required for a IngressServiceBackend.
   */
  "port"?: IIoK8sApiNetworkingV1ServiceBackendPort;
}

/**
 * IngressServiceBackend references a Kubernetes Service as a Backend.
 */
export class IngressServiceBackend extends Model<IIngressServiceBackend> implements IIngressServiceBackend {
  "name": string;
  "port"?: IIoK8sApiNetworkingV1ServiceBackendPort;

constructor(data?: ModelData<IIngressServiceBackend>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(IngressServiceBackend, validate as ValidateFunc<IIngressServiceBackend>);

export {
  IIngressServiceBackend as IIoK8sApiNetworkingV1IngressServiceBackend,
  IngressServiceBackend as IoK8sApiNetworkingV1IngressServiceBackend
};
