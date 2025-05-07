import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ComputeCnrmCloudGoogleComV1alpha1ComputeOrganizationSecurityPolicy";

export interface IComputeOrganizationSecurityPolicy {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "compute.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "ComputeOrganizationSecurityPolicy";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * A textual description for the organization security policy.
     */
    "description"?: string;
    /**
     * Immutable. A textual name of the security policy.
     */
    "displayName": string;
    /**
     * Immutable. The parent of this OrganizationSecurityPolicy in the Cloud Resource Hierarchy.
     * Format: organizations/{organization_id} or folders/{folder_id}.
     */
    "parent": string;
    /**
     * Immutable. Optional. The policyId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Immutable. The type indicates the intended use of the security policy.
     * For organization security policies, the only supported type
     * is "FIREWALL". Default value: "FIREWALL" Possible values: ["FIREWALL"].
     */
    "type"?: string;
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
     * Fingerprint of this resource. This field is used internally during
     * updates of this resource.
     */
    "fingerprint"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * The unique identifier for the resource. This identifier is defined by the server.
     */
    "policyId"?: string;
  };
}

export class ComputeOrganizationSecurityPolicy extends Model<IComputeOrganizationSecurityPolicy> implements IComputeOrganizationSecurityPolicy {
  "apiVersion": IComputeOrganizationSecurityPolicy["apiVersion"];
  "kind": IComputeOrganizationSecurityPolicy["kind"];
  "metadata"?: IComputeOrganizationSecurityPolicy["metadata"];
  "spec": IComputeOrganizationSecurityPolicy["spec"];
  "status"?: IComputeOrganizationSecurityPolicy["status"];

static apiVersion: IComputeOrganizationSecurityPolicy["apiVersion"] = "compute.cnrm.cloud.google.com/v1alpha1";
static kind: IComputeOrganizationSecurityPolicy["kind"] = "ComputeOrganizationSecurityPolicy";
static is = createTypeMetaGuard<IComputeOrganizationSecurityPolicy>(ComputeOrganizationSecurityPolicy);

constructor(data?: ModelData<IComputeOrganizationSecurityPolicy>) {
  super();

  this.setDefinedProps({
    apiVersion: ComputeOrganizationSecurityPolicy.apiVersion,
    kind: ComputeOrganizationSecurityPolicy.kind,
    ...data
  } as IComputeOrganizationSecurityPolicy);
}
}


setValidateFunc(ComputeOrganizationSecurityPolicy, validate as ValidateFunc<IComputeOrganizationSecurityPolicy>);
