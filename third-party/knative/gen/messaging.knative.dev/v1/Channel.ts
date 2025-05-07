import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/MessagingKnativeDevV1Channel";

/**
 * Channel represents a generic Channel. It is normally used when we want a Channel, but do not need a specific Channel implementation.
 */
export interface IChannel {
  /**
   * Spec defines the desired state of the Channel.
   */
  "spec"?: {
    /**
     * ChannelTemplate specifies which Channel CRD to use to create the CRD Channel backing this Channel. This is immutable after creation. Normally this is set by the Channel defaulter, not directly by the user.
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
     * DeliverySpec contains the default delivery spec for each subscription to this Channelable. Each subscription delivery spec, if any, overrides this global delivery spec.
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
     * This is the list of subscriptions for this subscribable.
     */
    "subscribers"?: Array<{
      /**
       * DeliverySpec contains options controlling the event delivery
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
       * Generation of the origin of the subscriber with uid:UID.
       */
      "generation"?: number;
      /**
       * ReplyURI is the endpoint for the reply
       */
      "replyUri"?: string;
      /**
       * SubscriberURI is the endpoint for the subscriber
       */
      "subscriberUri"?: string;
      /**
       * UID is used to understand the origin of the subscriber.
       */
      "uid"?: string;
    }>;
  };
  /**
   * Status represents the current state of the Channel. This data may be out of date.
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
     * Channel is an KReference to the Channel CRD backing this Channel.
     */
    "channel"?: {
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
     * DeadLetterChannel is a KReference and is set by the channel when it supports native error handling via a channel Failed messages are delivered here.
     */
    "deadLetterChannel"?: {
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
     * DeadLetterSinkURI is the resolved URI of the dead letter sink that will be used as a fallback when not specified by Triggers.
     */
    "deadLetterSinkUri"?: string;
    /**
     * ObservedGeneration is the 'Generation' of the Service that was last processed by the controller.
     */
    "observedGeneration"?: number;
    /**
     * This is the list of subscription's statuses for this channel.
     */
    "subscribers"?: Array<{
      /**
       * A human readable message indicating details of Ready status.
       */
      "message"?: string;
      /**
       * Generation of the origin of the subscriber with uid:UID.
       */
      "observedGeneration"?: number;
      /**
       * Status of the subscriber.
       */
      "ready"?: string;
      /**
       * UID is used to understand the origin of the subscriber.
       */
      "uid"?: string;
    }>;
  };
  "apiVersion": "messaging.knative.dev/v1";
  "kind": "Channel";
  "metadata"?: IObjectMeta;
}

/**
 * Channel represents a generic Channel. It is normally used when we want a Channel, but do not need a specific Channel implementation.
 */
export class Channel extends Model<IChannel> implements IChannel {
  "spec"?: IChannel["spec"];
  "status"?: IChannel["status"];
  "apiVersion": IChannel["apiVersion"];
  "kind": IChannel["kind"];
  "metadata"?: IChannel["metadata"];

static apiVersion: IChannel["apiVersion"] = "messaging.knative.dev/v1";
static kind: IChannel["kind"] = "Channel";
static is = createTypeMetaGuard<IChannel>(Channel);

constructor(data?: ModelData<IChannel>) {
  super();

  this.setDefinedProps({
    apiVersion: Channel.apiVersion,
    kind: Channel.kind,
    ...data
  } as IChannel);
}
}


setValidateFunc(Channel, validate as ValidateFunc<IChannel>);
