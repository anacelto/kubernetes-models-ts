import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiNetworkingV1IngressPortStatus";

/**
 * IngressPortStatus represents the error condition of a service port
 */
export interface IIngressPortStatus {
  /**
   * error is to record the problem with the service port The format of the error shall comply with the following rules: - built-in error values shall be specified in this file and those shall use
   *   CamelCase names
   * - cloud provider specific error values must have names that comply with the
   *   format foo.example.com/CamelCase.
   */
  "error"?: string;
  /**
   * port is the port number of the ingress port.
   */
  "port": number;
  /**
   * protocol is the protocol of the ingress port. The supported values are: "TCP", "UDP", "SCTP"
   * 
   * Possible enum values:
   *  - `"SCTP"` is the SCTP protocol.
   *  - `"TCP"` is the TCP protocol.
   *  - `"UDP"` is the UDP protocol.
   */
  "protocol": "SCTP" | "TCP" | "UDP";
}

/**
 * IngressPortStatus represents the error condition of a service port
 */
export class IngressPortStatus extends Model<IIngressPortStatus> implements IIngressPortStatus {
  "error"?: string;
  "port": number;
  "protocol": "SCTP" | "TCP" | "UDP";

constructor(data?: ModelData<IIngressPortStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(IngressPortStatus, validate as ValidateFunc<IIngressPortStatus>);

export {
  IIngressPortStatus as IIoK8sApiNetworkingV1IngressPortStatus,
  IngressPortStatus as IoK8sApiNetworkingV1IngressPortStatus
};
