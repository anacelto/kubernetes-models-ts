import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { IIoK8sApiExtensionsV1beta1DeploymentSpec } from "./DeploymentSpec";
import { IIoK8sApiExtensionsV1beta1DeploymentStatus } from "./DeploymentStatus";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiExtensionsV1beta1Deployment";

/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 * @deprecated
 */
export interface IDeployment extends TypeMeta {
  "apiVersion": "extensions/v1beta1";
  "kind": "Deployment";
  /**
   * Standard object metadata.
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /**
   * Specification of the desired behavior of the Deployment.
   */
  "spec"?: IIoK8sApiExtensionsV1beta1DeploymentSpec;
  /**
   * Most recently observed status of the Deployment.
   */
  "status"?: IIoK8sApiExtensionsV1beta1DeploymentStatus;
}

/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 * @deprecated
 */
export class Deployment extends Model<IDeployment> implements IDeployment {
  "apiVersion": IDeployment["apiVersion"];
  "kind": IDeployment["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
  "spec"?: IIoK8sApiExtensionsV1beta1DeploymentSpec;
  "status"?: IIoK8sApiExtensionsV1beta1DeploymentStatus;

static apiVersion: IDeployment["apiVersion"] = "extensions/v1beta1";
static kind: IDeployment["kind"] = "Deployment";
static is = createTypeMetaGuard<IDeployment>(Deployment);

constructor(data?: ModelData<IDeployment>) {
  super();

  this.setDefinedProps({
    apiVersion: Deployment.apiVersion,
    kind: Deployment.kind,
    ...data
  } as IDeployment);
}
}

setValidateFunc(Deployment, validate as ValidateFunc<IDeployment>);

export {
  IDeployment as IIoK8sApiExtensionsV1beta1Deployment,
  Deployment as IoK8sApiExtensionsV1beta1Deployment
};
