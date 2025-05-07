import { IIoK8sApiAppsV1Deployment } from "./Deployment";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ListMeta";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiAppsV1DeploymentList";

/**
 * DeploymentList is a list of Deployments.
 */
export interface IDeploymentList extends TypeMeta {
  "apiVersion": "apps/v1";
  /**
   * Items is the list of Deployments.
   */
  "items": Array<IIoK8sApiAppsV1Deployment>;
  "kind": "DeploymentList";
  /**
   * Standard list metadata.
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * DeploymentList is a list of Deployments.
 */
export class DeploymentList extends Model<IDeploymentList> implements IDeploymentList {
  "apiVersion": IDeploymentList["apiVersion"];
  "items": Array<IIoK8sApiAppsV1Deployment>;
  "kind": IDeploymentList["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IDeploymentList["apiVersion"] = "apps/v1";
static kind: IDeploymentList["kind"] = "DeploymentList";
static is = createTypeMetaGuard<IDeploymentList>(DeploymentList);

constructor(data?: ModelData<IDeploymentList>) {
  super();

  this.setDefinedProps({
    apiVersion: DeploymentList.apiVersion,
    kind: DeploymentList.kind,
    ...data
  } as IDeploymentList);
}
}

setValidateFunc(DeploymentList, validate as ValidateFunc<IDeploymentList>);

export {
  IDeploymentList as IIoK8sApiAppsV1DeploymentList,
  DeploymentList as IoK8sApiAppsV1DeploymentList
};
