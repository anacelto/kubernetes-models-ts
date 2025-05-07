import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IamCnrmCloudGoogleComV1beta1IAMCustomRole";

export interface IIAMCustomRole {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "iam.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "IAMCustomRole";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * A human-readable description for the role.
     */
    "description"?: string;
    /**
     * The names of the permissions this role grants when bound in an IAM policy. At least one permission must be specified.
     */
    "permissions": Array<string>;
    /**
     * Immutable. Optional. The roleId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * The current launch stage of the role. Defaults to GA.
     */
    "stage"?: string;
    /**
     * A human-readable title for the role.
     */
    "title": string;
  };
  "status"?: {
    /**
     * Conditions represent the latest available observation of the resource's current state.
     */
    "conditions"?: Array<{
      /**
       * Last time the condition transitioned from one status to another.
       */
      "lastTransitionTime"?: string;
      /**
       * Human-readable message indicating details about last transition.
       */
      "message"?: string;
      /**
       * Unique, one-word, CamelCase reason for the condition's last transition.
       */
      "reason"?: string;
      /**
       * Status is the status of the condition. Can be True, False, Unknown.
       */
      "status"?: string;
      /**
       * Type is the type of the condition.
       */
      "type"?: string;
    }>;
    /**
     * The current deleted state of the role.
     */
    "deleted"?: boolean;
    /**
     * The full name of the role.
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class IAMCustomRole extends Model<IIAMCustomRole> implements IIAMCustomRole {
  "apiVersion": IIAMCustomRole["apiVersion"];
  "kind": IIAMCustomRole["kind"];
  "metadata"?: IIAMCustomRole["metadata"];
  "spec": IIAMCustomRole["spec"];
  "status"?: IIAMCustomRole["status"];

static apiVersion: IIAMCustomRole["apiVersion"] = "iam.cnrm.cloud.google.com/v1beta1";
static kind: IIAMCustomRole["kind"] = "IAMCustomRole";
static is = createTypeMetaGuard<IIAMCustomRole>(IAMCustomRole);

constructor(data?: ModelData<IIAMCustomRole>) {
  super();

  this.setDefinedProps({
    apiVersion: IAMCustomRole.apiVersion,
    kind: IAMCustomRole.kind,
    ...data
  } as IIAMCustomRole);
}
}


setValidateFunc(IAMCustomRole, validate as ValidateFunc<IIAMCustomRole>);
