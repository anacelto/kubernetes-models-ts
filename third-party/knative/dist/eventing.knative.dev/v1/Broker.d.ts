import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * Broker collects a pool of events that are consumable using Triggers. Brokers provide a well-known endpoint for event delivery that senders can use with minimal knowledge of the event routing strategy. Subscribers use Triggers to request delivery of events from a Broker's pool to a specific URL or Addressable endpoint.
 */
export interface IBroker {
    /**
     * Spec defines the desired state of the Broker.
     */
    "spec"?: {
        /**
         * Config is a KReference to the configuration that specifies configuration options for this Broker. For example, this could be a pointer to a ConfigMap.
         */
        "config"?: {
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
         * Delivery contains the delivery spec for each trigger to this Broker. Each trigger delivery spec, if any, overrides this global delivery spec.
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
    };
    /**
     * Status represents the current state of the Broker. This data may be out of date.
     */
    "status"?: {
        /**
         * Broker is Addressable. It exposes the endpoint as an URI to get events delivered into the Broker mesh.
         */
        "address"?: {
            "url"?: string;
        };
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
         * DeadLetterSinkURI is the resolved URI of the dead letter sink that will be used as a fallback when not specified by Triggers.
         */
        "deadLetterSinkUri"?: string;
        /**
         * ObservedGeneration is the 'Generation' of the Service that was last processed by the controller.
         */
        "observedGeneration"?: number;
    };
    "apiVersion": "eventing.knative.dev/v1";
    "kind": "Broker";
    "metadata"?: IObjectMeta;
}
/**
 * Broker collects a pool of events that are consumable using Triggers. Brokers provide a well-known endpoint for event delivery that senders can use with minimal knowledge of the event routing strategy. Subscribers use Triggers to request delivery of events from a Broker's pool to a specific URL or Addressable endpoint.
 */
export declare class Broker extends Model<IBroker> implements IBroker {
    "spec"?: IBroker["spec"];
    "status"?: IBroker["status"];
    "apiVersion": IBroker["apiVersion"];
    "kind": IBroker["kind"];
    "metadata"?: IBroker["metadata"];
    static apiVersion: IBroker["apiVersion"];
    static kind: IBroker["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IBroker>;
    constructor(data?: ModelData<IBroker>);
}
