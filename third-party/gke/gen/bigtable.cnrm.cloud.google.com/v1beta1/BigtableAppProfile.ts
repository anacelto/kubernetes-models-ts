import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/BigtableCnrmCloudGoogleComV1beta1BigtableAppProfile";

export interface IBigtableAppProfile {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "bigtable.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "BigtableAppProfile";
  "metadata"?: IObjectMeta;
  "spec"?: {
    /**
     * Long form description of the use case for this app profile.
     */
    "description"?: string;
    /**
     * The instance to create the app profile within.
     */
    "instanceRef"?: {
      /**
       * Allowed value: The `name` field of a `BigtableInstance` resource.
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
       * Allowed value: The `name` field of a `BigtableInstance` resource.
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
       * Allowed value: The `name` field of a `BigtableInstance` resource.
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
       * Allowed value: The `name` field of a `BigtableInstance` resource.
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
       * Allowed value: The `name` field of a `BigtableInstance` resource.
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
       * Allowed value: The `name` field of a `BigtableInstance` resource.
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
       * Allowed value: The `name` field of a `BigtableInstance` resource.
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
     * The set of clusters to route to. The order is ignored; clusters will be tried in order of distance. If left empty, all clusters are eligible.
     */
    "multiClusterRoutingClusterIds"?: Array<string>;
    /**
     * If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available
     * in the event of transient errors or delays. Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes
     * consistency to improve availability.
     */
    "multiClusterRoutingUseAny"?: boolean;
    /**
     * Immutable. Optional. The appProfileId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Use a single-cluster routing policy.
     */
    "singleClusterRouting"?: {
      /**
       * If true, CheckAndMutateRow and ReadModifyWriteRow requests are allowed by this app profile.
       * It is unsafe to send these requests to the same table/row/column in multiple clusters.
       */
      "allowTransactionalWrites"?: boolean;
      /**
       * The cluster to which read/write requests should be routed.
       */
      "clusterId": string;
    };
    /**
     * The standard options used for isolating this app profile's traffic from other use cases.
     */
    "standardIsolation"?: {
      /**
       * The priority of requests sent using this app profile. Possible values: ["PRIORITY_LOW", "PRIORITY_MEDIUM", "PRIORITY_HIGH"].
       */
      "priority": string;
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
     * The unique name of the requested app profile. Values are of the form 'projects/<project>/instances/<instance>/appProfiles/<appProfileId>'.
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class BigtableAppProfile extends Model<IBigtableAppProfile> implements IBigtableAppProfile {
  "apiVersion": IBigtableAppProfile["apiVersion"];
  "kind": IBigtableAppProfile["kind"];
  "metadata"?: IBigtableAppProfile["metadata"];
  "spec"?: IBigtableAppProfile["spec"];
  "status"?: IBigtableAppProfile["status"];

static apiVersion: IBigtableAppProfile["apiVersion"] = "bigtable.cnrm.cloud.google.com/v1beta1";
static kind: IBigtableAppProfile["kind"] = "BigtableAppProfile";
static is = createTypeMetaGuard<IBigtableAppProfile>(BigtableAppProfile);

constructor(data?: ModelData<IBigtableAppProfile>) {
  super();

  this.setDefinedProps({
    apiVersion: BigtableAppProfile.apiVersion,
    kind: BigtableAppProfile.kind,
    ...data
  } as IBigtableAppProfile);
}
}


setValidateFunc(BigtableAppProfile, validate as ValidateFunc<IBigtableAppProfile>);
