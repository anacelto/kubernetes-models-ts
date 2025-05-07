import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/GkehubCnrmCloudGoogleComV1beta1GKEHubFeature";

export interface IGKEHubFeature {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "gkehub.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "GKEHubFeature";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Immutable. The location for the resource
     */
    "location": string;
    /**
     * Immutable. The Project that this resource belongs to.
     */
    "projectRef": {
      /**
       * The project for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
       * The project for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
       * The project for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
       * The project for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
       * The project for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
       * The project for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
       * The project for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
    /**
     * Optional. Hub-wide Feature configuration. If this Feature does not support any Hub-wide configuration, this field may be unused.
     */
    "spec"?: {
      /**
       * Fleet Observability spec.
       */
      "fleetobservability"?: {
        /**
         * Fleet Observability Logging-specific spec.
         */
        "loggingConfig"?: {
          /**
           * Specified if applying the default routing config to logs not specified in other configs.
           */
          "defaultConfig"?: {
            /**
             * The logs routing mode Possible values: MODE_UNSPECIFIED, COPY, MOVE
             */
            "mode"?: string;
          };
          /**
           * Specified if applying the routing config to all logs for all fleet scopes.
           */
          "fleetScopeLogsConfig"?: {
            /**
             * The logs routing mode Possible values: MODE_UNSPECIFIED, COPY, MOVE
             */
            "mode"?: string;
          };
        };
      };
      /**
       * Multicluster Ingress-specific spec.
       */
      "multiclusteringress"?: {
        "configMembershipRef": {
          /**
           * Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: `projects/foo-proj/locations/global/memberships/bar`
           * 
           * Allowed value: The Google Cloud resource name of a `GKEHubMembership` resource (format: `projects/{{project}}/locations/{{location}}/memberships/{{name}}`).
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
           * Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: `projects/foo-proj/locations/global/memberships/bar`
           * 
           * Allowed value: The Google Cloud resource name of a `GKEHubMembership` resource (format: `projects/{{project}}/locations/{{location}}/memberships/{{name}}`).
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
           * Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: `projects/foo-proj/locations/global/memberships/bar`
           * 
           * Allowed value: The Google Cloud resource name of a `GKEHubMembership` resource (format: `projects/{{project}}/locations/{{location}}/memberships/{{name}}`).
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
           * Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: `projects/foo-proj/locations/global/memberships/bar`
           * 
           * Allowed value: The Google Cloud resource name of a `GKEHubMembership` resource (format: `projects/{{project}}/locations/{{location}}/memberships/{{name}}`).
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
           * Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: `projects/foo-proj/locations/global/memberships/bar`
           * 
           * Allowed value: The Google Cloud resource name of a `GKEHubMembership` resource (format: `projects/{{project}}/locations/{{location}}/memberships/{{name}}`).
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
           * Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: `projects/foo-proj/locations/global/memberships/bar`
           * 
           * Allowed value: The Google Cloud resource name of a `GKEHubMembership` resource (format: `projects/{{project}}/locations/{{location}}/memberships/{{name}}`).
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
           * Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: `projects/foo-proj/locations/global/memberships/bar`
           * 
           * Allowed value: The Google Cloud resource name of a `GKEHubMembership` resource (format: `projects/{{project}}/locations/{{location}}/memberships/{{name}}`).
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
      };
    };
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
     * Output only. When the Feature resource was created.
     */
    "createTime"?: string;
    /**
     * Output only. When the Feature resource was deleted.
     */
    "deleteTime"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * State of the Feature resource itself.
     */
    "resourceState"?: {
      /**
       * Whether this Feature has outstanding resources that need to be cleaned up before it can be disabled.
       */
      "hasResources"?: boolean;
      /**
       * The current state of the Feature resource in the Hub API. Possible values: STATE_UNSPECIFIED, ENABLING, ACTIVE, DISABLING, UPDATING, SERVICE_UPDATING
       */
      "state"?: string;
    };
    /**
     * Output only. The Hub-wide Feature state
     */
    "state"?: {
      /**
       * Output only. The "running state" of the Feature in this Hub.
       */
      "state"?: {
        /**
         * The high-level, machine-readable status of this Feature. Possible values: CODE_UNSPECIFIED, OK, WARNING, ERROR
         */
        "code"?: string;
        /**
         * A human-readable description of the current status.
         */
        "description"?: string;
        /**
         * The time this status and any related Feature-specific details were updated. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z"
         */
        "updateTime"?: string;
      };
    };
    /**
     * Output only. When the Feature resource was last updated.
     */
    "updateTime"?: string;
  };
}

export class GKEHubFeature extends Model<IGKEHubFeature> implements IGKEHubFeature {
  "apiVersion": IGKEHubFeature["apiVersion"];
  "kind": IGKEHubFeature["kind"];
  "metadata"?: IGKEHubFeature["metadata"];
  "spec": IGKEHubFeature["spec"];
  "status"?: IGKEHubFeature["status"];

static apiVersion: IGKEHubFeature["apiVersion"] = "gkehub.cnrm.cloud.google.com/v1beta1";
static kind: IGKEHubFeature["kind"] = "GKEHubFeature";
static is = createTypeMetaGuard<IGKEHubFeature>(GKEHubFeature);

constructor(data?: ModelData<IGKEHubFeature>) {
  super();

  this.setDefinedProps({
    apiVersion: GKEHubFeature.apiVersion,
    kind: GKEHubFeature.kind,
    ...data
  } as IGKEHubFeature);
}
}


setValidateFunc(GKEHubFeature, validate as ValidateFunc<IGKEHubFeature>);
