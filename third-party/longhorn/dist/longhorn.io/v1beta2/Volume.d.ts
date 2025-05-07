import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * Volume is where Longhorn stores volume object.
 */
export interface IVolume {
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
    "kind": "Volume";
    "metadata"?: IObjectMeta;
    /**
     * VolumeSpec defines the desired state of the Longhorn volume
     */
    "spec"?: {
        "Standby"?: boolean;
        "accessMode"?: "rwo" | "rwx";
        /**
         * Deprecated:Replaced by field `dataEngine`.'
         */
        "backendStoreDriver"?: string;
        "backingImage"?: string;
        "backupCompressionMethod"?: "none" | "lz4" | "gzip";
        "dataEngine"?: "v1" | "v2";
        "dataLocality"?: "disabled" | "best-effort" | "strict-local";
        "dataSource"?: string;
        "disableFrontend"?: boolean;
        "diskSelector"?: Array<string>;
        "encrypted"?: boolean;
        /**
         * Deprecated: Replaced by field `image`.
         */
        "engineImage"?: string;
        /**
         * Setting that freezes the filesystem on the root partition before a snapshot is created.
         */
        "freezeFilesystemForSnapshot"?: "ignored" | "enabled" | "disabled";
        "fromBackup"?: string;
        "frontend"?: "blockdev" | "iscsi" | "nvmf" | "";
        "image"?: string;
        "lastAttachedBy"?: string;
        "migratable"?: boolean;
        "migrationNodeID"?: string;
        "nodeID"?: string;
        "nodeSelector"?: Array<string>;
        "numberOfReplicas"?: number;
        "replicaAutoBalance"?: "ignored" | "disabled" | "least-effort" | "best-effort";
        /**
         * Replica disk soft anti affinity of the volume. Set enabled to allow replicas to be scheduled in the same disk.
         */
        "replicaDiskSoftAntiAffinity"?: "ignored" | "enabled" | "disabled";
        /**
         * Replica soft anti affinity of the volume. Set enabled to allow replicas to be scheduled on the same node.
         */
        "replicaSoftAntiAffinity"?: "ignored" | "enabled" | "disabled";
        /**
         * Replica zone soft anti affinity of the volume. Set enabled to allow replicas to be scheduled in the same zone.
         */
        "replicaZoneSoftAntiAffinity"?: "ignored" | "enabled" | "disabled";
        "restoreVolumeRecurringJob"?: "ignored" | "enabled" | "disabled";
        "revisionCounterDisabled"?: boolean;
        "size"?: string;
        "snapshotDataIntegrity"?: "ignored" | "disabled" | "enabled" | "fast-check";
        "snapshotMaxCount"?: number;
        "snapshotMaxSize"?: string;
        "staleReplicaTimeout"?: number;
        "unmapMarkSnapChainRemoved"?: "ignored" | "disabled" | "enabled";
    };
    /**
     * VolumeStatus defines the observed state of the Longhorn volume
     */
    "status"?: {
        "actualSize"?: number;
        "cloneStatus"?: {
            "attemptCount"?: number;
            "nextAllowedAttemptAt"?: string;
            "snapshot"?: string;
            "sourceVolume"?: string;
            "state"?: string;
        };
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
        /**
         * the node that this volume is currently migrating to
         */
        "currentMigrationNodeID"?: string;
        "currentNodeID"?: string;
        "expansionRequired"?: boolean;
        "frontendDisabled"?: boolean;
        "isStandby"?: boolean;
        "kubernetesStatus"?: {
            "lastPVCRefAt"?: string;
            "lastPodRefAt"?: string;
            /**
             * determine if PVC/Namespace is history or not
             */
            "namespace"?: string;
            "pvName"?: string;
            "pvStatus"?: string;
            "pvcName"?: string;
            /**
             * determine if Pod/Workload is history or not
             */
            "workloadsStatus"?: Array<{
                "podName"?: string;
                "podStatus"?: string;
                "workloadName"?: string;
                "workloadType"?: string;
            }>;
        };
        "lastBackup"?: string;
        "lastBackupAt"?: string;
        "lastDegradedAt"?: string;
        "ownerID"?: string;
        /**
         * Deprecated.
         */
        "pendingNodeID"?: string;
        "remountRequestedAt"?: string;
        "restoreInitiated"?: boolean;
        "restoreRequired"?: boolean;
        "robustness"?: string;
        "shareEndpoint"?: string;
        "shareState"?: string;
        "state"?: string;
    };
}
/**
 * Volume is where Longhorn stores volume object.
 */
export declare class Volume extends Model<IVolume> implements IVolume {
    "apiVersion": IVolume["apiVersion"];
    "kind": IVolume["kind"];
    "metadata"?: IVolume["metadata"];
    "spec"?: IVolume["spec"];
    "status"?: IVolume["status"];
    static apiVersion: IVolume["apiVersion"];
    static kind: IVolume["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IVolume>;
    constructor(data?: ModelData<IVolume>);
}
