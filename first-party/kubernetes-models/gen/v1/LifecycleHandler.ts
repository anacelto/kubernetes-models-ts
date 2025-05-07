import { IIoK8sApiCoreV1ExecAction } from "./ExecAction";
import { IIoK8sApiCoreV1HTTPGetAction } from "./HTTPGetAction";
import { IIoK8sApiCoreV1TCPSocketAction } from "./TCPSocketAction";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1LifecycleHandler";

/**
 * LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified.
 */
export interface ILifecycleHandler {
  /**
   * Exec specifies the action to take.
   */
  "exec"?: IIoK8sApiCoreV1ExecAction;
  /**
   * HTTPGet specifies the http request to perform.
   */
  "httpGet"?: IIoK8sApiCoreV1HTTPGetAction;
  /**
   * Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept for the backward compatibility. There are no validation of this field and lifecycle hooks will fail in runtime when tcp handler is specified.
   */
  "tcpSocket"?: IIoK8sApiCoreV1TCPSocketAction;
}

/**
 * LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified.
 */
export class LifecycleHandler extends Model<ILifecycleHandler> implements ILifecycleHandler {
  "exec"?: IIoK8sApiCoreV1ExecAction;
  "httpGet"?: IIoK8sApiCoreV1HTTPGetAction;
  "tcpSocket"?: IIoK8sApiCoreV1TCPSocketAction;

constructor(data?: ModelData<ILifecycleHandler>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(LifecycleHandler, validate as ValidateFunc<ILifecycleHandler>);

export {
  ILifecycleHandler as IIoK8sApiCoreV1LifecycleHandler,
  LifecycleHandler as IoK8sApiCoreV1LifecycleHandler
};
