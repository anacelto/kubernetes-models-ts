import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ComputeCnrmCloudGoogleComV1beta1ComputeFirewallPolicy";

export interface IComputeFirewallPolicy {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "compute.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "ComputeFirewallPolicy";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    "description"?: string;
    /**
     * Immutable. The Folder that this resource belongs to. Only one of [folderRef, organizationRef] may be specified.
     */
    "folderRef"?: {
      /**
       * Allowed value: The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
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
       * Allowed value: The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
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
       * Allowed value: The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
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
       * Allowed value: The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
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
       * Allowed value: The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
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
       * Allowed value: The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
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
       * Allowed value: The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
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
     * Immutable. The Organization that this resource belongs to. Only one of [folderRef, organizationRef] may be specified.
     */
    "organizationRef"?: {
      /**
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
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
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
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
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external": string;
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
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external": string;
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
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external": string;
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
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
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
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace": string;
    })>);
    /**
     * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
     */
    "resourceID"?: string;
    /**
     * Immutable. User-provided name of the Organization firewall policy. The name should be unique in the organization in which the firewall policy is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]\*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    "shortName": string;
  } & ({
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    "description"?: string;
    /**
     * Immutable. The Folder that this resource belongs to. Only one of [folderRef, organizationRef] may be specified.
     */
    "folderRef": {
      /**
       * Allowed value: The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
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
       * Allowed value: The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
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
       * Allowed value: The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
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
       * Allowed value: The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
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
       * Allowed value: The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
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
       * Allowed value: The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
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
       * Allowed value: The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
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
     * Immutable. The Organization that this resource belongs to. Only one of [folderRef, organizationRef] may be specified.
     */
    "organizationRef"?: {
      /**
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
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
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
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
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external": string;
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
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external": string;
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
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external": string;
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
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
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
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace": string;
    })>);
    /**
     * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
     */
    "resourceID"?: string;
    /**
     * Immutable. User-provided name of the Organization firewall policy. The name should be unique in the organization in which the firewall policy is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]\*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    "shortName"?: string;
  } | {
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    "description"?: string;
    /**
     * Immutable. The Folder that this resource belongs to. Only one of [folderRef, organizationRef] may be specified.
     */
    "folderRef"?: {
      /**
       * Allowed value: The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
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
       * Allowed value: The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
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
       * Allowed value: The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
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
       * Allowed value: The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
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
       * Allowed value: The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
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
       * Allowed value: The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
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
       * Allowed value: The Google Cloud resource name of a `Folder` resource (format: `folders/{{name}}`).
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
     * Immutable. The Organization that this resource belongs to. Only one of [folderRef, organizationRef] may be specified.
     */
    "organizationRef": {
      /**
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
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
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
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
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external": string;
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
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external": string;
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
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external": string;
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
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
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
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace": string;
    })>);
    /**
     * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
     */
    "resourceID"?: string;
    /**
     * Immutable. User-provided name of the Organization firewall policy. The name should be unique in the organization in which the firewall policy is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]\*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    "shortName"?: string;
  });
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
     * Creation timestamp in RFC3339 text format.
     */
    "creationTimestamp"?: string;
    /**
     * Fingerprint of the resource. This field is used internally during updates of this resource.
     */
    "fingerprint"?: string;
    /**
     * The unique identifier for the resource. This identifier is defined by the server.
     */
    "id"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * Total count of all firewall policy rule tuples. A firewall policy can not exceed a set number of tuples.
     */
    "ruleTupleCount"?: number;
    /**
     * Server-defined URL for the resource.
     */
    "selfLink"?: string;
    /**
     * Server-defined URL for this resource with the resource id.
     */
    "selfLinkWithId"?: string;
  };
}

export class ComputeFirewallPolicy extends Model<IComputeFirewallPolicy> implements IComputeFirewallPolicy {
  "apiVersion": IComputeFirewallPolicy["apiVersion"];
  "kind": IComputeFirewallPolicy["kind"];
  "metadata"?: IComputeFirewallPolicy["metadata"];
  "spec": IComputeFirewallPolicy["spec"];
  "status"?: IComputeFirewallPolicy["status"];

static apiVersion: IComputeFirewallPolicy["apiVersion"] = "compute.cnrm.cloud.google.com/v1beta1";
static kind: IComputeFirewallPolicy["kind"] = "ComputeFirewallPolicy";
static is = createTypeMetaGuard<IComputeFirewallPolicy>(ComputeFirewallPolicy);

constructor(data?: ModelData<IComputeFirewallPolicy>) {
  super();

  this.setDefinedProps({
    apiVersion: ComputeFirewallPolicy.apiVersion,
    kind: ComputeFirewallPolicy.kind,
    ...data
  } as IComputeFirewallPolicy);
}
}


setValidateFunc(ComputeFirewallPolicy, validate as ValidateFunc<IComputeFirewallPolicy>);
