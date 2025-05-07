import { IIoK8sApiCoreV1DaemonEndpoint } from "./DaemonEndpoint";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1NodeDaemonEndpoints";

/**
 * NodeDaemonEndpoints lists ports opened by daemons running on the Node.
 */
export interface INodeDaemonEndpoints {
  /**
   * Endpoint on which Kubelet is listening.
   */
  "kubeletEndpoint"?: IIoK8sApiCoreV1DaemonEndpoint;
}

/**
 * NodeDaemonEndpoints lists ports opened by daemons running on the Node.
 */
export class NodeDaemonEndpoints extends Model<INodeDaemonEndpoints> implements INodeDaemonEndpoints {
  "kubeletEndpoint"?: IIoK8sApiCoreV1DaemonEndpoint;

constructor(data?: ModelData<INodeDaemonEndpoints>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(NodeDaemonEndpoints, validate as ValidateFunc<INodeDaemonEndpoints>);

export {
  INodeDaemonEndpoints as IIoK8sApiCoreV1NodeDaemonEndpoints,
  NodeDaemonEndpoints as IoK8sApiCoreV1NodeDaemonEndpoints
};
