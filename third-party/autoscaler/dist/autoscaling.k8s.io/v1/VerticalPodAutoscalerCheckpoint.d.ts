import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * VerticalPodAutoscalerCheckpoint is the checkpoint of the internal state of VPA that is used for recovery after recommender's restart.
 */
export interface IVerticalPodAutoscalerCheckpoint {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "autoscaling.k8s.io/v1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "VerticalPodAutoscalerCheckpoint";
    "metadata"?: IObjectMeta;
    /**
     * Specification of the checkpoint. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status.
     */
    "spec"?: {
        /**
         * Name of the checkpointed container.
         */
        "containerName"?: string;
        /**
         * Name of the VPA object that stored VerticalPodAutoscalerCheckpoint object.
         */
        "vpaObjectName"?: string;
    };
    /**
     * Data of the checkpoint.
     */
    "status"?: {
        /**
         * Checkpoint of histogram for consumption of CPU.
         */
        "cpuHistogram"?: {
            /**
             * Map from bucket index to bucket weight.
             */
            "bucketWeights"?: {};
            /**
             * Reference timestamp for samples collected within this histogram.
             */
            "referenceTimestamp"?: string;
            /**
             * Sum of samples to be used as denominator for weights from BucketWeights.
             */
            "totalWeight"?: number;
        };
        /**
         * Timestamp of the fist sample from the histograms.
         */
        "firstSampleStart"?: string;
        /**
         * Timestamp of the last sample from the histograms.
         */
        "lastSampleStart"?: string;
        /**
         * The time when the status was last refreshed.
         */
        "lastUpdateTime"?: string;
        /**
         * Checkpoint of histogram for consumption of memory.
         */
        "memoryHistogram"?: {
            /**
             * Map from bucket index to bucket weight.
             */
            "bucketWeights"?: {};
            /**
             * Reference timestamp for samples collected within this histogram.
             */
            "referenceTimestamp"?: string;
            /**
             * Sum of samples to be used as denominator for weights from BucketWeights.
             */
            "totalWeight"?: number;
        };
        /**
         * Total number of samples in the histograms.
         */
        "totalSamplesCount"?: number;
        /**
         * Version of the format of the stored data.
         */
        "version"?: string;
    };
}
/**
 * VerticalPodAutoscalerCheckpoint is the checkpoint of the internal state of VPA that is used for recovery after recommender's restart.
 */
export declare class VerticalPodAutoscalerCheckpoint extends Model<IVerticalPodAutoscalerCheckpoint> implements IVerticalPodAutoscalerCheckpoint {
    "apiVersion": IVerticalPodAutoscalerCheckpoint["apiVersion"];
    "kind": IVerticalPodAutoscalerCheckpoint["kind"];
    "metadata"?: IVerticalPodAutoscalerCheckpoint["metadata"];
    "spec"?: IVerticalPodAutoscalerCheckpoint["spec"];
    "status"?: IVerticalPodAutoscalerCheckpoint["status"];
    static apiVersion: IVerticalPodAutoscalerCheckpoint["apiVersion"];
    static kind: IVerticalPodAutoscalerCheckpoint["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IVerticalPodAutoscalerCheckpoint>;
    constructor(data?: ModelData<IVerticalPodAutoscalerCheckpoint>);
}
