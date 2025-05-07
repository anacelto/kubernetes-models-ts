import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IamCnrmCloudGoogleComV1beta1IAMWorkforcePool";

export interface IIAMWorkforcePool {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "iam.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "IAMWorkforcePool";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * A user-specified description of the pool. Cannot exceed 256 characters.
     */
    "description"?: string;
    /**
     * Whether the pool is disabled. You cannot use a disabled pool to exchange tokens, or use existing tokens to access resources. If the pool is re-enabled, existing tokens grant access again.
     */
    "disabled"?: boolean;
    /**
     * A user-specified display name of the pool in Google Cloud Console. Cannot exceed 32 characters.
     */
    "displayName"?: string;
    /**
     * Immutable. The location for the resource
     */
    "location": string;
    /**
     * Immutable. The Organization that this resource belongs to. Only one of [organizationRef] may be specified.
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
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * How long the Google Cloud access tokens, console sign-in sessions, and gcloud sign-in sessions from this pool are valid. Must be greater than 15 minutes (900s) and less than 12 hours (43200s). If `session_duration` is not configured, minted credentials will have a default duration of one hour (3600s).
     */
    "sessionDuration"?: string;
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
     * Output only. The resource name of the pool. Format: `locations/{location}/workforcePools/{workforce_pool_id}`
     */
    "selfLink"?: string;
    /**
     * Output only. The state of the pool. Possible values: STATE_UNSPECIFIED, ACTIVE, DELETED
     */
    "state"?: string;
  };
}

export class IAMWorkforcePool extends Model<IIAMWorkforcePool> implements IIAMWorkforcePool {
  "apiVersion": IIAMWorkforcePool["apiVersion"];
  "kind": IIAMWorkforcePool["kind"];
  "metadata"?: IIAMWorkforcePool["metadata"];
  "spec": IIAMWorkforcePool["spec"];
  "status"?: IIAMWorkforcePool["status"];

static apiVersion: IIAMWorkforcePool["apiVersion"] = "iam.cnrm.cloud.google.com/v1beta1";
static kind: IIAMWorkforcePool["kind"] = "IAMWorkforcePool";
static is = createTypeMetaGuard<IIAMWorkforcePool>(IAMWorkforcePool);

constructor(data?: ModelData<IIAMWorkforcePool>) {
  super();

  this.setDefinedProps({
    apiVersion: IAMWorkforcePool.apiVersion,
    kind: IAMWorkforcePool.kind,
    ...data
  } as IIAMWorkforcePool);
}
}


setValidateFunc(IAMWorkforcePool, validate as ValidateFunc<IIAMWorkforcePool>);
