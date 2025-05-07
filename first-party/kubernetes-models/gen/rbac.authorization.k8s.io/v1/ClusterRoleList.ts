import { IIoK8sApiRbacV1ClusterRole } from "./ClusterRole";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ListMeta";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiRbacV1ClusterRoleList";

/**
 * ClusterRoleList is a collection of ClusterRoles
 */
export interface IClusterRoleList extends TypeMeta {
  "apiVersion": "rbac.authorization.k8s.io/v1";
  /**
   * Items is a list of ClusterRoles
   */
  "items": Array<IIoK8sApiRbacV1ClusterRole>;
  "kind": "ClusterRoleList";
  /**
   * Standard object's metadata.
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ClusterRoleList is a collection of ClusterRoles
 */
export class ClusterRoleList extends Model<IClusterRoleList> implements IClusterRoleList {
  "apiVersion": IClusterRoleList["apiVersion"];
  "items": Array<IIoK8sApiRbacV1ClusterRole>;
  "kind": IClusterRoleList["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IClusterRoleList["apiVersion"] = "rbac.authorization.k8s.io/v1";
static kind: IClusterRoleList["kind"] = "ClusterRoleList";
static is = createTypeMetaGuard<IClusterRoleList>(ClusterRoleList);

constructor(data?: ModelData<IClusterRoleList>) {
  super();

  this.setDefinedProps({
    apiVersion: ClusterRoleList.apiVersion,
    kind: ClusterRoleList.kind,
    ...data
  } as IClusterRoleList);
}
}

setValidateFunc(ClusterRoleList, validate as ValidateFunc<IClusterRoleList>);

export {
  IClusterRoleList as IIoK8sApiRbacV1ClusterRoleList,
  ClusterRoleList as IoK8sApiRbacV1ClusterRoleList
};
