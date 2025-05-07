import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/FlowsKnativeDevV1Sequence";

/**
 * Sequence defines a sequence of Subscribers that will be wired in series through Channels and Subscriptions.
 */
export interface ISequence {
  /**
   * Spec defines the desired state of the Sequence.
   */
  "spec"?: {
    /**
     * ChannelTemplate specifies which Channel CRD to use. If left unspecified, it is set to the default Channel CRD for the namespace (or cluster, in case there are no defaults for the namespace).
     */
    "channelTemplate"?: {
      /**
       * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
       */
      "apiVersion"?: string;
      /**
       * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      "kind"?: string;
      /**
       * Spec defines the Spec to use for each channel created. Passed in verbatim to the Channel CRD as Spec section.
       */
      "spec"?: {
      };
    };
    /**
     * Reply is a Reference to where the result of the last Subscriber gets sent to.
     */
    "reply"?: {
      /**
       * Ref points to an Addressable.
       */
      "ref"?: {
        /**
         * API version of the referent.
         */
        "apiVersion"?: string;
        /**
         * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
         */
        "kind"?: string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ This is optional field, it gets defaulted to the object holding it if left out.
         */
        "namespace"?: string;
      };
      /**
       * URI can be an absolute URL(non-empty scheme and non-empty host) pointing to the target or a relative URI. Relative URIs will be resolved using the base URI retrieved from Ref.
       */
      "uri"?: string;
    };
    /**
     * Steps is the list of Destinations (processors / functions) that will be called in the order provided. Each step has its own delivery options
     */
    "steps"?: Array<{
      /**
       * Delivery is the delivery specification for events to the subscriber This includes things like retries, DLQ, etc.
       */
      "delivery"?: {
        /**
         * BackoffDelay is the delay before retrying. More information on Duration format: - https://www.iso.org/iso-8601-date-and-time-format.html - https://en.wikipedia.org/wiki/ISO_8601  For linear policy, backoff delay is backoffDelay\*<numberOfRetries>. For exponential policy, backoff delay is backoffDelay\*2^<numberOfRetries>.
         */
        "backoffDelay"?: string;
        /**
         * BackoffPolicy is the retry backoff policy (linear, exponential).
         */
        "backoffPolicy"?: string;
        /**
         * DeadLetterSink is the sink receiving event that could not be sent to a destination.
         */
        "deadLetterSink"?: {
          /**
           * Ref points to an Addressable.
           */
          "ref"?: {
            /**
             * API version of the referent.
             */
            "apiVersion"?: string;
            /**
             * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            "kind"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ This is optional field, it gets defaulted to the object holding it if left out.
             */
            "namespace"?: string;
          };
          /**
           * URI can be an absolute URL(non-empty scheme and non-empty host) pointing to the target or a relative URI. Relative URIs will be resolved using the base URI retrieved from Ref.
           */
          "uri"?: string;
        };
        /**
         * Retry is the minimum number of retries the sender should attempt when sending an event before moving it to the dead letter sink.
         */
        "retry"?: number;
      };
      /**
       * Ref points to an Addressable.
       */
      "ref"?: {
        /**
         * API version of the referent.
         */
        "apiVersion"?: string;
        /**
         * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
         */
        "kind"?: string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ This is optional field, it gets defaulted to the object holding it if left out.
         */
        "namespace"?: string;
      };
      /**
       * URI can be an absolute URL(non-empty scheme and non-empty host) pointing to the target or a relative URI. Relative URIs will be resolved using the base URI retrieved from Ref.
       */
      "uri"?: string;
    }>;
  };
  /**
   * Status represents the current state of the Sequence. This data may be out of date.
   */
  "status"?: {
    "address"?: {
      "url"?: string;
    };
    /**
     * Annotations is additional Status fields for the Resource to save some additional State as well as convey more information to the user. This is roughly akin to Annotations on any k8s resource, just the reconciler conveying richer information outwards.
     */
    "annotations"?: {
    };
    /**
     * ChannelStatuses is an array of corresponding Channel statuses. Matches the Spec.Steps array in the order.
     */
    "channelStatuses"?: Array<{
      /**
       * Channel is the reference to the underlying channel.
       */
      "channel"?: {
        /**
         * API version of the referent.
         */
        "apiVersion"?: string;
        /**
         * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: "spec.containers{name}" (where "name" refers to the name of the container that triggered the event) or if no container name is specified "spec.containers[2]" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
         */
        "fieldPath"?: string;
        /**
         * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
         */
        "kind"?: string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace"?: string;
        /**
         * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
         */
        "resourceVersion"?: string;
        /**
         * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
         */
        "uid"?: string;
      };
      /**
       * ReadyCondition indicates whether the Channel is ready or not.
       */
      "ready"?: {
        /**
         * LastTransitionTime is the last time the condition transitioned from one status to another. We use VolatileTime in place of metav1.Time to exclude this from creating equality.Semantic differences (all other things held constant).
         */
        "lastTransitionTime"?: string;
        /**
         * A human readable message indicating details about the transition.
         */
        "message"?: string;
        /**
         * The reason for the condition's last transition.
         */
        "reason"?: string;
        /**
         * Severity with which to treat failures of this type of condition. When this is not specified, it defaults to Error.
         */
        "severity"?: string;
        /**
         * Status of the condition, one of True, False, Unknown.
         */
        "status": string;
        /**
         * Type of condition.
         */
        "type": string;
      };
    }>;
    /**
     * Conditions the latest available observations of a resource's current state.
     */
    "conditions"?: Array<{
      /**
       * LastTransitionTime is the last time the condition transitioned from one status to another. We use VolatileTime in place of metav1.Time to exclude this from creating equality.Semantic differences (all other things held constant).
       */
      "lastTransitionTime"?: string;
      /**
       * A human readable message indicating details about the transition.
       */
      "message"?: string;
      /**
       * The reason for the condition's last transition.
       */
      "reason"?: string;
      /**
       * Severity with which to treat failures of this type of condition. When this is not specified, it defaults to Error.
       */
      "severity"?: string;
      /**
       * Status of the condition, one of True, False, Unknown.
       */
      "status": string;
      /**
       * Type of condition.
       */
      "type": string;
    }>;
    /**
     * ObservedGeneration is the 'Generation' of the Service that was last processed by the controller.
     */
    "observedGeneration"?: number;
    /**
     * SubscriptionStatuses is an array of corresponding Subscription statuses. Matches the Spec.Steps array in the order.
     */
    "subscriptionStatuses"?: Array<{
      /**
       * ReadyCondition indicates whether the Subscription is ready or not.
       */
      "ready"?: {
        /**
         * LastTransitionTime is the last time the condition transitioned from one status to another. We use VolatileTime in place of metav1.Time to exclude this from creating equality.Semantic differences (all other things held constant).
         */
        "lastTransitionTime"?: string;
        /**
         * A human readable message indicating details about the transition.
         */
        "message"?: string;
        /**
         * The reason for the condition's last transition.
         */
        "reason"?: string;
        /**
         * Severity with which to treat failures of this type of condition. When this is not specified, it defaults to Error.
         */
        "severity"?: string;
        /**
         * Status of the condition, one of True, False, Unknown.
         */
        "status": string;
        /**
         * Type of condition.
         */
        "type": string;
      };
      /**
       * Subscription is the reference to the underlying Subscription.
       */
      "subscription"?: {
        /**
         * API version of the referent.
         */
        "apiVersion"?: string;
        /**
         * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: "spec.containers{name}" (where "name" refers to the name of the container that triggered the event) or if no container name is specified "spec.containers[2]" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
         */
        "fieldPath"?: string;
        /**
         * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
         */
        "kind"?: string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace"?: string;
        /**
         * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
         */
        "resourceVersion"?: string;
        /**
         * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
         */
        "uid"?: string;
      };
    }>;
  };
  "apiVersion": "flows.knative.dev/v1";
  "kind": "Sequence";
  "metadata"?: IObjectMeta;
}

/**
 * Sequence defines a sequence of Subscribers that will be wired in series through Channels and Subscriptions.
 */
export class Sequence extends Model<ISequence> implements ISequence {
  "spec"?: ISequence["spec"];
  "status"?: ISequence["status"];
  "apiVersion": ISequence["apiVersion"];
  "kind": ISequence["kind"];
  "metadata"?: ISequence["metadata"];

static apiVersion: ISequence["apiVersion"] = "flows.knative.dev/v1";
static kind: ISequence["kind"] = "Sequence";
static is = createTypeMetaGuard<ISequence>(Sequence);

constructor(data?: ModelData<ISequence>) {
  super();

  this.setDefinedProps({
    apiVersion: Sequence.apiVersion,
    kind: Sequence.kind,
    ...data
  } as ISequence);
}
}


setValidateFunc(Sequence, validate as ValidateFunc<ISequence>);
