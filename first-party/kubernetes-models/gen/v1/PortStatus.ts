import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1PortStatus";

export interface IPortStatus {
  /**
   * Error is to record the problem with the service port The format of the error shall comply with the following rules: - built-in error values shall be specified in this file and those shall use
   *   CamelCase names
   * - cloud provider specific error values must have names that comply with the
   *   format foo.example.com/CamelCase.
   */
  "error"?: string;
  /**
   * Port is the port number of the service port of which status is recorded here
   */
  "port": number;
  /**
   * Protocol is the protocol of the service port of which status is recorded here The supported values are: "TCP", "UDP", "SCTP"
   * 
   * Possible enum values:
   *  - `"SCTP"` is the SCTP protocol.
   *  - `"TCP"` is the TCP protocol.
   *  - `"UDP"` is the UDP protocol.
   */
  "protocol": "SCTP" | "TCP" | "UDP";
}

export class PortStatus extends Model<IPortStatus> implements IPortStatus {
  "error"?: string;
  "port": number;
  "protocol": "SCTP" | "TCP" | "UDP";

constructor(data?: ModelData<IPortStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PortStatus, validate as ValidateFunc<IPortStatus>);

export {
  IPortStatus as IIoK8sApiCoreV1PortStatus,
  PortStatus as IoK8sApiCoreV1PortStatus
};
