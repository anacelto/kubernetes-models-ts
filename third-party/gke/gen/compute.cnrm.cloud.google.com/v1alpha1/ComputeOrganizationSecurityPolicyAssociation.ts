import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ComputeCnrmCloudGoogleComV1alpha1ComputeOrganizationSecurityPolicyAssociation";

export interface IComputeOrganizationSecurityPolicyAssociation {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "compute.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "ComputeOrganizationSecurityPolicyAssociation";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Immutable. The resource that the security policy is attached to.
     */
    "attachmentId": string;
    /**
     * Immutable. The security policy ID of the association.
     */
    "policyId": string;
    /**
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
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
     * The display name of the security policy of the association.
     */
    "displayName"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class ComputeOrganizationSecurityPolicyAssociation extends Model<IComputeOrganizationSecurityPolicyAssociation> implements IComputeOrganizationSecurityPolicyAssociation {
  "apiVersion": IComputeOrganizationSecurityPolicyAssociation["apiVersion"];
  "kind": IComputeOrganizationSecurityPolicyAssociation["kind"];
  "metadata"?: IComputeOrganizationSecurityPolicyAssociation["metadata"];
  "spec": IComputeOrganizationSecurityPolicyAssociation["spec"];
  "status"?: IComputeOrganizationSecurityPolicyAssociation["status"];

static apiVersion: IComputeOrganizationSecurityPolicyAssociation["apiVersion"] = "compute.cnrm.cloud.google.com/v1alpha1";
static kind: IComputeOrganizationSecurityPolicyAssociation["kind"] = "ComputeOrganizationSecurityPolicyAssociation";
static is = createTypeMetaGuard<IComputeOrganizationSecurityPolicyAssociation>(ComputeOrganizationSecurityPolicyAssociation);

constructor(data?: ModelData<IComputeOrganizationSecurityPolicyAssociation>) {
  super();

  this.setDefinedProps({
    apiVersion: ComputeOrganizationSecurityPolicyAssociation.apiVersion,
    kind: ComputeOrganizationSecurityPolicyAssociation.kind,
    ...data
  } as IComputeOrganizationSecurityPolicyAssociation);
}
}


setValidateFunc(ComputeOrganizationSecurityPolicyAssociation, validate as ValidateFunc<IComputeOrganizationSecurityPolicyAssociation>);
