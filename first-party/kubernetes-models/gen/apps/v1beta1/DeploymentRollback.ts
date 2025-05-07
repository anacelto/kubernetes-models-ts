import { IIoK8sApiAppsV1beta1RollbackConfig } from "./RollbackConfig";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiAppsV1beta1DeploymentRollback";

/**
 * DEPRECATED. DeploymentRollback stores the information required to rollback a deployment.
 * @deprecated
 */
export interface IDeploymentRollback extends TypeMeta {
  "apiVersion": "apps/v1beta1";
  "kind": "DeploymentRollback";
  /**
   * Required: This must match the Name of a deployment.
   */
  "name": string;
  /**
   * The config of this deployment rollback.
   */
  "rollbackTo": IIoK8sApiAppsV1beta1RollbackConfig;
  /**
   * The annotations to be updated to a deployment
   */
  "updatedAnnotations"?: {
    [key: string]: string;
  };
}

/**
 * DEPRECATED. DeploymentRollback stores the information required to rollback a deployment.
 * @deprecated
 */
export class DeploymentRollback extends Model<IDeploymentRollback> implements IDeploymentRollback {
  "apiVersion": IDeploymentRollback["apiVersion"];
  "kind": IDeploymentRollback["kind"];
  "name": string;
  "rollbackTo": IIoK8sApiAppsV1beta1RollbackConfig;
  "updatedAnnotations"?: {
    [key: string]: string;
  };

static apiVersion: IDeploymentRollback["apiVersion"] = "apps/v1beta1";
static kind: IDeploymentRollback["kind"] = "DeploymentRollback";
static is = createTypeMetaGuard<IDeploymentRollback>(DeploymentRollback);

constructor(data?: ModelData<IDeploymentRollback>) {
  super();

  this.setDefinedProps({
    apiVersion: DeploymentRollback.apiVersion,
    kind: DeploymentRollback.kind,
    ...data
  } as IDeploymentRollback);
}
}

setValidateFunc(DeploymentRollback, validate as ValidateFunc<IDeploymentRollback>);

export {
  IDeploymentRollback as IIoK8sApiAppsV1beta1DeploymentRollback,
  DeploymentRollback as IoK8sApiAppsV1beta1DeploymentRollback
};
