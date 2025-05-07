import { IIoK8sApiRbacV1RoleBinding } from "./RoleBinding";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ListMeta";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiRbacV1RoleBindingList";

/**
 * RoleBindingList is a collection of RoleBindings
 */
export interface IRoleBindingList extends TypeMeta {
  "apiVersion": "rbac.authorization.k8s.io/v1";
  /**
   * Items is a list of RoleBindings
   */
  "items": Array<IIoK8sApiRbacV1RoleBinding>;
  "kind": "RoleBindingList";
  /**
   * Standard object's metadata.
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * RoleBindingList is a collection of RoleBindings
 */
export class RoleBindingList extends Model<IRoleBindingList> implements IRoleBindingList {
  "apiVersion": IRoleBindingList["apiVersion"];
  "items": Array<IIoK8sApiRbacV1RoleBinding>;
  "kind": IRoleBindingList["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IRoleBindingList["apiVersion"] = "rbac.authorization.k8s.io/v1";
static kind: IRoleBindingList["kind"] = "RoleBindingList";
static is = createTypeMetaGuard<IRoleBindingList>(RoleBindingList);

constructor(data?: ModelData<IRoleBindingList>) {
  super();

  this.setDefinedProps({
    apiVersion: RoleBindingList.apiVersion,
    kind: RoleBindingList.kind,
    ...data
  } as IRoleBindingList);
}
}

setValidateFunc(RoleBindingList, validate as ValidateFunc<IRoleBindingList>);

export {
  IRoleBindingList as IIoK8sApiRbacV1RoleBindingList,
  RoleBindingList as IoK8sApiRbacV1RoleBindingList
};
