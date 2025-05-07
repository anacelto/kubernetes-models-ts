import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * Metric represents a resource to configure the metric collector with.
 */
export interface IMetric {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "autoscaling.internal.knative.dev/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "Metric";
    "metadata"?: IObjectMeta;
    /**
     * Spec holds the desired state of the Metric (from the client).
     */
    "spec"?: {
        /**
         * PanicWindow is the aggregation window for metrics where quick reactions are needed.
         */
        "panicWindow": number;
        /**
         * ScrapeTarget is the K8s service that publishes the metric endpoint.
         */
        "scrapeTarget": string;
        /**
         * StableWindow is the aggregation window for metrics in a stable state.
         */
        "stableWindow": number;
    };
    /**
     * Status communicates the observed state of the Metric (from the controller).
     */
    "status"?: {
        /**
         * Annotations is additional Status fields for the Resource to save some additional State as well as convey more information to the user. This is roughly akin to Annotations on any k8s resource, just the reconciler conveying richer information outwards.
         */
        "annotations"?: {
            [key: string]: string;
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
         * ObservedGeneration is the 'Generation' of the Service that was last processed by the controller.
         */
        "observedGeneration"?: number;
    };
}
/**
 * Metric represents a resource to configure the metric collector with.
 */
export declare class Metric extends Model<IMetric> implements IMetric {
    "apiVersion": IMetric["apiVersion"];
    "kind": IMetric["kind"];
    "metadata"?: IMetric["metadata"];
    "spec"?: IMetric["spec"];
    "status"?: IMetric["status"];
    static apiVersion: IMetric["apiVersion"];
    static kind: IMetric["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IMetric>;
    constructor(data?: ModelData<IMetric>);
}
