import { IIoK8sApiCoreV1ExecAction } from "./ExecAction";
import { IIoK8sApiCoreV1HTTPGetAction } from "./HTTPGetAction";
import { IIoK8sApiCoreV1TCPSocketAction } from "./TCPSocketAction";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1Handler";

/**
 * Handler defines a specific action that should be taken
 */
export interface IHandler {
  /**
   * One and only one of the following should be specified. Exec specifies the action to take.
   */
  "exec"?: IIoK8sApiCoreV1ExecAction;
  /**
   * HTTPGet specifies the http request to perform.
   */
  "httpGet"?: IIoK8sApiCoreV1HTTPGetAction;
  /**
   * TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported
   */
  "tcpSocket"?: IIoK8sApiCoreV1TCPSocketAction;
}

/**
 * Handler defines a specific action that should be taken
 */
export class Handler extends Model<IHandler> implements IHandler {
  "exec"?: IIoK8sApiCoreV1ExecAction;
  "httpGet"?: IIoK8sApiCoreV1HTTPGetAction;
  "tcpSocket"?: IIoK8sApiCoreV1TCPSocketAction;

constructor(data?: ModelData<IHandler>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(Handler, validate as ValidateFunc<IHandler>);

export {
  IHandler as IIoK8sApiCoreV1Handler,
  Handler as IoK8sApiCoreV1Handler
};
