import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ComputeCnrmCloudGoogleComV1beta1ComputeFirewallPolicyAssociation";

export interface IComputeFirewallPolicyAssociation {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "compute.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "ComputeFirewallPolicyAssociation";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Immutable.
     */
    "attachmentTargetRef": {
      /**
       * The target that the firewall policy is attached to.
       * 
       * Allowed values:
       * \* The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
       * \* The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
      /**
       * Kind of the referent. Allowed values: Folder
       */
      "kind"?: string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & (Exclude<{
      /**
       * The target that the firewall policy is attached to.
       * 
       * Allowed values:
       * \* The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
       * \* The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
      /**
       * Kind of the referent. Allowed values: Folder
       */
      "kind": string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * The target that the firewall policy is attached to.
       * 
       * Allowed values:
       * \* The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
       * \* The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external": string;
      /**
       * Kind of the referent. Allowed values: Folder
       */
      "kind"?: string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }> | Exclude<{
      /**
       * The target that the firewall policy is attached to.
       * 
       * Allowed values:
       * \* The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
       * \* The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external": string;
      /**
       * Kind of the referent. Allowed values: Folder
       */
      "kind"?: string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * The target that the firewall policy is attached to.
       * 
       * Allowed values:
       * \* The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
       * \* The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external": string;
      /**
       * Kind of the referent. Allowed values: Folder
       */
      "kind"?: string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & ({
      /**
       * The target that the firewall policy is attached to.
       * 
       * Allowed values:
       * \* The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
       * \* The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
      /**
       * Kind of the referent. Allowed values: Folder
       */
      "kind"?: string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } | {
      /**
       * The target that the firewall policy is attached to.
       * 
       * Allowed values:
       * \* The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
       * \* The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
      /**
       * Kind of the referent. Allowed values: Folder
       */
      "kind"?: string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace": string;
    } | {
      /**
       * The target that the firewall policy is attached to.
       * 
       * Allowed values:
       * \* The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
       * \* The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
      /**
       * Kind of the referent. Allowed values: Folder
       */
      "kind": string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    })>);
    /**
     * Immutable.
     */
    "firewallPolicyRef": {
      /**
       * The firewall policy ID of the association.
       * 
       * Allowed value: The Google Cloud resource name of a `ComputeFirewallPolicy` resource (format: `locations/global/firewallPolicies/{{name}}`).
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & (Exclude<{
      /**
       * The firewall policy ID of the association.
       * 
       * Allowed value: The Google Cloud resource name of a `ComputeFirewallPolicy` resource (format: `locations/global/firewallPolicies/{{name}}`).
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * The firewall policy ID of the association.
       * 
       * Allowed value: The Google Cloud resource name of a `ComputeFirewallPolicy` resource (format: `locations/global/firewallPolicies/{{name}}`).
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }> | Exclude<{
      /**
       * The firewall policy ID of the association.
       * 
       * Allowed value: The Google Cloud resource name of a `ComputeFirewallPolicy` resource (format: `locations/global/firewallPolicies/{{name}}`).
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * The firewall policy ID of the association.
       * 
       * Allowed value: The Google Cloud resource name of a `ComputeFirewallPolicy` resource (format: `locations/global/firewallPolicies/{{name}}`).
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & ({
      /**
       * The firewall policy ID of the association.
       * 
       * Allowed value: The Google Cloud resource name of a `ComputeFirewallPolicy` resource (format: `locations/global/firewallPolicies/{{name}}`).
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } | {
      /**
       * The firewall policy ID of the association.
       * 
       * Allowed value: The Google Cloud resource name of a `ComputeFirewallPolicy` resource (format: `locations/global/firewallPolicies/{{name}}`).
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace": string;
    })>);
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
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * The short name of the firewall policy of the association.
     */
    "shortName"?: string;
  };
}

export class ComputeFirewallPolicyAssociation extends Model<IComputeFirewallPolicyAssociation> implements IComputeFirewallPolicyAssociation {
  "apiVersion": IComputeFirewallPolicyAssociation["apiVersion"];
  "kind": IComputeFirewallPolicyAssociation["kind"];
  "metadata"?: IComputeFirewallPolicyAssociation["metadata"];
  "spec": IComputeFirewallPolicyAssociation["spec"];
  "status"?: IComputeFirewallPolicyAssociation["status"];

static apiVersion: IComputeFirewallPolicyAssociation["apiVersion"] = "compute.cnrm.cloud.google.com/v1beta1";
static kind: IComputeFirewallPolicyAssociation["kind"] = "ComputeFirewallPolicyAssociation";
static is = createTypeMetaGuard<IComputeFirewallPolicyAssociation>(ComputeFirewallPolicyAssociation);

constructor(data?: ModelData<IComputeFirewallPolicyAssociation>) {
  super();

  this.setDefinedProps({
    apiVersion: ComputeFirewallPolicyAssociation.apiVersion,
    kind: ComputeFirewallPolicyAssociation.kind,
    ...data
  } as IComputeFirewallPolicyAssociation);
}
}


setValidateFunc(ComputeFirewallPolicyAssociation, validate as ValidateFunc<IComputeFirewallPolicyAssociation>);
