import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * Trigger represents a request to have events delivered to a subscriber from a Broker's event pool.
 */
export interface ITrigger {
    /**
     * Spec defines the desired state of the Trigger.
     */
    "spec"?: {
        /**
         * Broker is the broker that this trigger receives events from.
         */
        "broker"?: string;
        /**
         * Delivery contains the delivery spec for this specific trigger.
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
         * Filter is the filter to apply against all events from the Broker. Only events that pass this filter will be sent to the Subscriber. If not specified, will default to allowing all events.
         */
        "filter"?: {
            /**
             * Attributes filters events by exact match on event context attributes. Each key in the map is compared with the equivalent key in the event context. An event passes the filter if all values are equal to the specified values.  Nested context attributes are not supported as keys. Only string values are supported.
             */
            "attributes"?: {};
        };
        /**
         * Subscriber is the addressable that receives events from the Broker that pass the Filter. It is required.
         */
        "subscriber"?: {
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
    };
    /**
     * Status represents the current state of the Trigger. This data may be out of date.
     */
    "status"?: {
        /**
         * Annotations is additional Status fields for the Resource to save some additional State as well as convey more information to the user. This is roughly akin to Annotations on any k8s resource, just the reconciler conveying richer information outwards.
         */
        "annotations"?: {};
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
         * DeadLetterSinkURI is the resolved URI of the dead letter sink for this Trigger, in case there is none this will fallback to it's Broker status DeadLetterSinkURI.
         */
        "deadLetterSinkUri"?: string;
        /**
         * ObservedGeneration is the 'Generation' of the Service that was last processed by the controller.
         */
        "observedGeneration"?: number;
        /**
         * SubscriberURI is the resolved URI of the receiver for this Trigger.
         */
        "subscriberUri"?: string;
    };
    "apiVersion": "eventing.knative.dev/v1";
    "kind": "Trigger";
    "metadata"?: IObjectMeta;
}
/**
 * Trigger represents a request to have events delivered to a subscriber from a Broker's event pool.
 */
export declare class Trigger extends Model<ITrigger> implements ITrigger {
    "spec"?: ITrigger["spec"];
    "status"?: ITrigger["status"];
    "apiVersion": ITrigger["apiVersion"];
    "kind": ITrigger["kind"];
    "metadata"?: ITrigger["metadata"];
    static apiVersion: ITrigger["apiVersion"];
    static kind: ITrigger["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ITrigger>;
    constructor(data?: ModelData<ITrigger>);
}
