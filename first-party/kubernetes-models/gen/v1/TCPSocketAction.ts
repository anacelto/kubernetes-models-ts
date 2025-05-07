import { IIoK8sApimachineryPkgUtilIntstrIntOrString } from "@kubernetes-models/apimachinery/util/intstr/IntOrString";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1TCPSocketAction";

/**
 * TCPSocketAction describes an action based on opening a socket
 */
export interface ITCPSocketAction {
  /**
   * Optional: Host name to connect to, defaults to the pod IP.
   */
  "host"?: string;
  /**
   * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
   */
  "port": IIoK8sApimachineryPkgUtilIntstrIntOrString;
}

/**
 * TCPSocketAction describes an action based on opening a socket
 */
export class TCPSocketAction extends Model<ITCPSocketAction> implements ITCPSocketAction {
  "host"?: string;
  "port": IIoK8sApimachineryPkgUtilIntstrIntOrString;

constructor(data?: ModelData<ITCPSocketAction>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(TCPSocketAction, validate as ValidateFunc<ITCPSocketAction>);

export {
  ITCPSocketAction as IIoK8sApiCoreV1TCPSocketAction,
  TCPSocketAction as IoK8sApiCoreV1TCPSocketAction
};
