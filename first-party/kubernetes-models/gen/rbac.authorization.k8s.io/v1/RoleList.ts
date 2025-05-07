import { IIoK8sApiRbacV1Role } from "./Role";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ListMeta";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiRbacV1RoleList";

/**
 * RoleList is a collection of Roles
 */
export interface IRoleList extends TypeMeta {
  "apiVersion": "rbac.authorization.k8s.io/v1";
  /**
   * Items is a list of Roles
   */
  "items": Array<IIoK8sApiRbacV1Role>;
  "kind": "RoleList";
  /**
   * Standard object's metadata.
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * RoleList is a collection of Roles
 */
export class RoleList extends Model<IRoleList> implements IRoleList {
  "apiVersion": IRoleList["apiVersion"];
  "items": Array<IIoK8sApiRbacV1Role>;
  "kind": IRoleList["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IRoleList["apiVersion"] = "rbac.authorization.k8s.io/v1";
static kind: IRoleList["kind"] = "RoleList";
static is = createTypeMetaGuard<IRoleList>(RoleList);

constructor(data?: ModelData<IRoleList>) {
  super();

  this.setDefinedProps({
    apiVersion: RoleList.apiVersion,
    kind: RoleList.kind,
    ...data
  } as IRoleList);
}
}

setValidateFunc(RoleList, validate as ValidateFunc<IRoleList>);

export {
  IRoleList as IIoK8sApiRbacV1RoleList,
  RoleList as IoK8sApiRbacV1RoleList
};
