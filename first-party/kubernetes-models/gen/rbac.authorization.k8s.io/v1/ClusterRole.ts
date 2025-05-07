import { IIoK8sApiRbacV1AggregationRule } from "./AggregationRule";
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { IIoK8sApiRbacV1PolicyRule } from "./PolicyRule";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiRbacV1ClusterRole";

/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
export interface IClusterRole extends TypeMeta {
  /**
   * AggregationRule is an optional field that describes how to build the Rules for this ClusterRole. If AggregationRule is set, then the Rules are controller managed and direct changes to Rules will be stomped by the controller.
   */
  "aggregationRule"?: IIoK8sApiRbacV1AggregationRule;
  "apiVersion": "rbac.authorization.k8s.io/v1";
  "kind": "ClusterRole";
  /**
   * Standard object's metadata.
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /**
   * Rules holds all the PolicyRules for this ClusterRole
   */
  "rules"?: Array<IIoK8sApiRbacV1PolicyRule>;
}

/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
export class ClusterRole extends Model<IClusterRole> implements IClusterRole {
  "aggregationRule"?: IIoK8sApiRbacV1AggregationRule;
  "apiVersion": IClusterRole["apiVersion"];
  "kind": IClusterRole["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
  "rules"?: Array<IIoK8sApiRbacV1PolicyRule>;

static apiVersion: IClusterRole["apiVersion"] = "rbac.authorization.k8s.io/v1";
static kind: IClusterRole["kind"] = "ClusterRole";
static is = createTypeMetaGuard<IClusterRole>(ClusterRole);

constructor(data?: ModelData<IClusterRole>) {
  super();

  this.setDefinedProps({
    apiVersion: ClusterRole.apiVersion,
    kind: ClusterRole.kind,
    ...data
  } as IClusterRole);
}
}

setValidateFunc(ClusterRole, validate as ValidateFunc<IClusterRole>);

export {
  IClusterRole as IIoK8sApiRbacV1ClusterRole,
  ClusterRole as IoK8sApiRbacV1ClusterRole
};
