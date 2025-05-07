import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * PodAutoscaler is a Knative abstraction that encapsulates the interface by which Knative components instantiate autoscalers.  This definition is an abstraction that may be backed by multiple definitions.  For more information, see the Knative Pluggability presentation: https://docs.google.com/presentation/d/19vW9HFZ6Puxt31biNZF3uLRejDmu82rxJIk1cWmxF7w/edit
 */
export interface IPodAutoscaler {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "autoscaling.internal.knative.dev/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "PodAutoscaler";
    "metadata"?: IObjectMeta;
    /**
     * Spec holds the desired state of the PodAutoscaler (from the client).
     */
    "spec"?: {
        /**
         * ContainerConcurrency specifies the maximum allowed in-flight (concurrent) requests per container of the Revision. Defaults to `0` which means unlimited concurrency.
         */
        "containerConcurrency"?: number;
        /**
         * The application-layer protocol. Matches `ProtocolType` inferred from the revision spec.
         */
        "protocolType": string;
        /**
         * Reachability specifies whether or not the `ScaleTargetRef` can be reached (ie. has a route). Defaults to `ReachabilityUnknown`
         */
        "reachability"?: string;
        /**
         * ScaleTargetRef defines the /scale-able resource that this PodAutoscaler is responsible for quickly right-sizing.
         */
        "scaleTargetRef": {
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
        };
    };
    /**
     * Status communicates the observed state of the PodAutoscaler (from the controller).
     */
    "status"?: {
        /**
         * ActualScale shows the actual number of replicas for the revision.
         */
        "actualScale"?: number;
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
         * DesiredScale shows the current desired number of replicas for the revision.
         */
        "desiredScale"?: number;
        /**
         * MetricsServiceName is the K8s Service name that provides revision metrics. The service is managed by the PA object.
         */
        "metricsServiceName": string;
        /**
         * ObservedGeneration is the 'Generation' of the Service that was last processed by the controller.
         */
        "observedGeneration"?: number;
        /**
         * ServiceName is the K8s Service name that serves the revision, scaled by this PA. The service is created and owned by the ServerlessService object owned by this PA.
         */
        "serviceName": string;
    };
}
/**
 * PodAutoscaler is a Knative abstraction that encapsulates the interface by which Knative components instantiate autoscalers.  This definition is an abstraction that may be backed by multiple definitions.  For more information, see the Knative Pluggability presentation: https://docs.google.com/presentation/d/19vW9HFZ6Puxt31biNZF3uLRejDmu82rxJIk1cWmxF7w/edit
 */
export declare class PodAutoscaler extends Model<IPodAutoscaler> implements IPodAutoscaler {
    "apiVersion": IPodAutoscaler["apiVersion"];
    "kind": IPodAutoscaler["kind"];
    "metadata"?: IPodAutoscaler["metadata"];
    "spec"?: IPodAutoscaler["spec"];
    "status"?: IPodAutoscaler["status"];
    static apiVersion: IPodAutoscaler["apiVersion"];
    static kind: IPodAutoscaler["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IPodAutoscaler>;
    constructor(data?: ModelData<IPodAutoscaler>);
}
