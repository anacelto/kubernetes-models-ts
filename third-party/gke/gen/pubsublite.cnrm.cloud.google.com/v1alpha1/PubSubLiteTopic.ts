import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/PubsubliteCnrmCloudGoogleComV1alpha1PubSubLiteTopic";

export interface IPubSubLiteTopic {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "pubsublite.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "PubSubLiteTopic";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * The settings for this topic's partitions.
     */
    "partitionConfig"?: {
      /**
       * The capacity configuration.
       */
      "capacity"?: {
        /**
         * Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.
         */
        "publishMibPerSec": number;
        /**
         * Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.
         */
        "subscribeMibPerSec": number;
      };
      /**
       * The number of partitions in the topic. Must be at least 1.
       */
      "count": number;
    };
    /**
     * The project that this resource belongs to.
     */
    "projectRef": {
      /**
       * Allowed value: The `name` field of a `Project` resource.
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
       * Allowed value: The `name` field of a `Project` resource.
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
       * Allowed value: The `name` field of a `Project` resource.
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
       * Allowed value: The `name` field of a `Project` resource.
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
       * Allowed value: The `name` field of a `Project` resource.
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
       * Allowed value: The `name` field of a `Project` resource.
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
       * Allowed value: The `name` field of a `Project` resource.
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
     * The region of the pubsub lite topic.
     */
    "region"?: string;
    /**
     * The settings for this topic's Reservation usage.
     */
    "reservationConfig"?: {
      /**
       * The Reservation to use for this topic's throughput capacity.
       */
      "throughputReservation"?: string;
    };
    /**
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * The settings for a topic's message retention.
     */
    "retentionConfig"?: {
      /**
       * The provisioned storage, in bytes, per partition. If the number of bytes stored
       * in any of the topic's partitions grows beyond this value, older messages will be
       * dropped to make room for newer ones, regardless of the value of period.
       */
      "perPartitionBytes": string;
      /**
       * How long a published message is retained. If unset, messages will be retained as
       * long as the bytes retained for each partition is below perPartitionBytes. A
       * duration in seconds with up to nine fractional digits, terminated by 's'.
       * Example: "3.5s".
       */
      "period"?: string;
    };
    /**
     * The zone of the pubsub lite topic.
     */
    "zone": string;
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
  };
}

export class PubSubLiteTopic extends Model<IPubSubLiteTopic> implements IPubSubLiteTopic {
  "apiVersion": IPubSubLiteTopic["apiVersion"];
  "kind": IPubSubLiteTopic["kind"];
  "metadata"?: IPubSubLiteTopic["metadata"];
  "spec": IPubSubLiteTopic["spec"];
  "status"?: IPubSubLiteTopic["status"];

static apiVersion: IPubSubLiteTopic["apiVersion"] = "pubsublite.cnrm.cloud.google.com/v1alpha1";
static kind: IPubSubLiteTopic["kind"] = "PubSubLiteTopic";
static is = createTypeMetaGuard<IPubSubLiteTopic>(PubSubLiteTopic);

constructor(data?: ModelData<IPubSubLiteTopic>) {
  super();

  this.setDefinedProps({
    apiVersion: PubSubLiteTopic.apiVersion,
    kind: PubSubLiteTopic.kind,
    ...data
  } as IPubSubLiteTopic);
}
}


setValidateFunc(PubSubLiteTopic, validate as ValidateFunc<IPubSubLiteTopic>);
