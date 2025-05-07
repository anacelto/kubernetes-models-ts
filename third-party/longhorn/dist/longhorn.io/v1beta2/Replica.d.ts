import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * Replica is where Longhorn stores replica object.
 */
export interface IReplica {
    /**
     * APIVersion defines the versioned schema of this representation of an object.
     * Servers should convert recognized schemas to the latest internal value, and
     * may reject unrecognized values.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "longhorn.io/v1beta2";
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "Replica";
    "metadata"?: IObjectMeta;
    /**
     * ReplicaSpec defines the desired state of the Longhorn replica
     */
    "spec"?: {
        "active"?: boolean;
        /**
         * Deprecated:Replaced by field `dataEngine`.
         */
        "backendStoreDriver"?: string;
        "backingImage"?: string;
        "dataDirectoryName"?: string;
        "dataEngine"?: "v1" | "v2";
        "desireState"?: string;
        "diskID"?: string;
        "diskPath"?: string;
        /**
         * Deprecated: Replaced by field `image`.
         */
        "engineImage"?: string;
        "engineName"?: string;
        "evictionRequested"?: boolean;
        /**
         * FailedAt is set when a running replica fails or when a running engine is unable to use a replica for any reason.
         * FailedAt indicates the time the failure occurred. When FailedAt is set, a replica is likely to have useful
         * (though possibly stale) data. A replica with FailedAt set must be rebuilt from a non-failed replica (or it can
         * be used in a salvage if all replicas are failed). FailedAt is cleared before a rebuild or salvage. FailedAt may
         * be later than the corresponding entry in an engine's replicaTransitionTimeMap because it is set when the volume
         * controller acknowledges the change.
         */
        "failedAt"?: string;
        "hardNodeAffinity"?: string;
        /**
         * HealthyAt is set the first time a replica becomes read/write in an engine after creation or rebuild. HealthyAt
         * indicates the time the last successful rebuild occurred. When HealthyAt is set, a replica is likely to have
         * useful (though possibly stale) data. HealthyAt is cleared before a rebuild. HealthyAt may be later than the
         * corresponding entry in an engine's replicaTransitionTimeMap because it is set when the volume controller
         * acknowledges the change.
         */
        "healthyAt"?: string;
        "image"?: string;
        /**
         * LastFailedAt is always set at the same time as FailedAt. Unlike FailedAt, LastFailedAt is never cleared.
         * LastFailedAt is not a reliable indicator of the state of a replica's data. For example, a replica with
         * LastFailedAt may already be healthy and in use again. However, because it is never cleared, it can be compared to
         * LastHealthyAt to help prevent dangerous replica deletion in some corner cases. LastFailedAt may be later than the
         * corresponding entry in an engine's replicaTransitionTimeMap because it is set when the volume controller
         * acknowledges the change.
         */
        "lastFailedAt"?: string;
        /**
         * LastHealthyAt is set every time a replica becomes read/write in an engine. Unlike HealthyAt, LastHealthyAt is
         * never cleared. LastHealthyAt is not a reliable indicator of the state of a replica's data. For example, a
         * replica with LastHealthyAt set may be in the middle of a rebuild. However, because it is never cleared, it can be
         * compared to LastFailedAt to help prevent dangerous replica deletion in some corner cases. LastHealthyAt may be
         * later than the corresponding entry in an engine's replicaTransitionTimeMap because it is set when the volume
         * controller acknowledges the change.
         */
        "lastHealthyAt"?: string;
        "logRequested"?: boolean;
        "nodeID"?: string;
        "rebuildRetryCount"?: number;
        "revisionCounterDisabled"?: boolean;
        "salvageRequested"?: boolean;
        "snapshotMaxCount"?: number;
        "snapshotMaxSize"?: string;
        "unmapMarkDiskChainRemovedEnabled"?: boolean;
        "volumeName"?: string;
        "volumeSize"?: string;
    };
    /**
     * ReplicaStatus defines the observed state of the Longhorn replica
     */
    "status"?: {
        "conditions"?: Array<{
            /**
             * Last time we probed the condition.
             */
            "lastProbeTime"?: string;
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
             * Status is the status of the condition.
             * Can be True, False, Unknown.
             */
            "status"?: string;
            /**
             * Type is the type of the condition.
             */
            "type"?: string;
        }>;
        "currentImage"?: string;
        "currentState"?: string;
        /**
         * Deprecated: Replaced by field `spec.evictionRequested`.
         */
        "evictionRequested"?: boolean;
        "instanceManagerName"?: string;
        "ip"?: string;
        "logFetched"?: boolean;
        "ownerID"?: string;
        "port"?: number;
        "salvageExecuted"?: boolean;
        "started"?: boolean;
        "storageIP"?: string;
    };
}
/**
 * Replica is where Longhorn stores replica object.
 */
export declare class Replica extends Model<IReplica> implements IReplica {
    "apiVersion": IReplica["apiVersion"];
    "kind": IReplica["kind"];
    "metadata"?: IReplica["metadata"];
    "spec"?: IReplica["spec"];
    "status"?: IReplica["status"];
    static apiVersion: IReplica["apiVersion"];
    static kind: IReplica["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IReplica>;
    constructor(data?: ModelData<IReplica>);
}
