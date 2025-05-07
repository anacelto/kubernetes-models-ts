import { IIoK8sApiAppsV1beta2RollingUpdateDeployment } from "./RollingUpdateDeployment";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiAppsV1beta2DeploymentStrategy";

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export interface IDeploymentStrategy {
  /**
   * Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate.
   */
  "rollingUpdate"?: IIoK8sApiAppsV1beta2RollingUpdateDeployment;
  /**
   * Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.
   */
  "type"?: string;
}

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export class DeploymentStrategy extends Model<IDeploymentStrategy> implements IDeploymentStrategy {
  "rollingUpdate"?: IIoK8sApiAppsV1beta2RollingUpdateDeployment;
  "type"?: string;

constructor(data?: ModelData<IDeploymentStrategy>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeploymentStrategy, validate as ValidateFunc<IDeploymentStrategy>);

export {
  IDeploymentStrategy as IIoK8sApiAppsV1beta2DeploymentStrategy,
  DeploymentStrategy as IoK8sApiAppsV1beta2DeploymentStrategy
};
