import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { IIoK8sApiRbacV1RoleRef } from "./RoleRef";
import { IIoK8sApiRbacV1Subject } from "./Subject";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiRbacV1ClusterRoleBinding";

/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 */
export interface IClusterRoleBinding extends TypeMeta {
  "apiVersion": "rbac.authorization.k8s.io/v1";
  "kind": "ClusterRoleBinding";
  /**
   * Standard object's metadata.
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /**
   * RoleRef can only reference a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error.
   */
  "roleRef": IIoK8sApiRbacV1RoleRef;
  /**
   * Subjects holds references to the objects the role applies to.
   */
  "subjects"?: Array<IIoK8sApiRbacV1Subject>;
}

/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 */
export class ClusterRoleBinding extends Model<IClusterRoleBinding> implements IClusterRoleBinding {
  "apiVersion": IClusterRoleBinding["apiVersion"];
  "kind": IClusterRoleBinding["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
  "roleRef": IIoK8sApiRbacV1RoleRef;
  "subjects"?: Array<IIoK8sApiRbacV1Subject>;

static apiVersion: IClusterRoleBinding["apiVersion"] = "rbac.authorization.k8s.io/v1";
static kind: IClusterRoleBinding["kind"] = "ClusterRoleBinding";
static is = createTypeMetaGuard<IClusterRoleBinding>(ClusterRoleBinding);

constructor(data?: ModelData<IClusterRoleBinding>) {
  super();

  this.setDefinedProps({
    apiVersion: ClusterRoleBinding.apiVersion,
    kind: ClusterRoleBinding.kind,
    ...data
  } as IClusterRoleBinding);
}
}

setValidateFunc(ClusterRoleBinding, validate as ValidateFunc<IClusterRoleBinding>);

export {
  IClusterRoleBinding as IIoK8sApiRbacV1ClusterRoleBinding,
  ClusterRoleBinding as IoK8sApiRbacV1ClusterRoleBinding
};
