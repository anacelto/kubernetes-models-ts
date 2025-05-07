import { IIoK8sApiAppsV1RollingUpdateDeployment } from "./RollingUpdateDeployment";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiAppsV1DeploymentStrategy";

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export interface IDeploymentStrategy {
  /**
   * Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate.
   */
  "rollingUpdate"?: IIoK8sApiAppsV1RollingUpdateDeployment;
  /**
   * Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.
   * 
   * Possible enum values:
   *  - `"Recreate"` Kill all existing pods before creating new ones.
   *  - `"RollingUpdate"` Replace the old ReplicaSets by new one using rolling update i.e gradually scale down the old ReplicaSets and scale up the new one.
   */
  "type"?: "Recreate" | "RollingUpdate";
}

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export class DeploymentStrategy extends Model<IDeploymentStrategy> implements IDeploymentStrategy {
  "rollingUpdate"?: IIoK8sApiAppsV1RollingUpdateDeployment;
  "type"?: "Recreate" | "RollingUpdate";

constructor(data?: ModelData<IDeploymentStrategy>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeploymentStrategy, validate as ValidateFunc<IDeploymentStrategy>);

export {
  IDeploymentStrategy as IIoK8sApiAppsV1DeploymentStrategy,
  DeploymentStrategy as IoK8sApiAppsV1DeploymentStrategy
};
