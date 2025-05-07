import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * SystemBackup is where Longhorn stores system backup object
 */
export interface ISystemBackup {
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
    "kind": "SystemBackup";
    "metadata"?: IObjectMeta;
    /**
     * SystemBackupSpec defines the desired state of the Longhorn SystemBackup
     */
    "spec"?: {
        /**
         * The create volume backup policy
         * Can be "if-not-present", "always" or "disabled"
         */
        "volumeBackupPolicy"?: string;
    };
    /**
     * SystemBackupStatus defines the observed state of the Longhorn SystemBackup
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
        /**
         * The system backup creation time.
         */
        "createdAt"?: string;
        /**
         * The saved Longhorn manager git commit.
         */
        "gitCommit"?: string;
        /**
         * The last time that the system backup was synced into the cluster.
         */
        "lastSyncedAt"?: string;
        /**
         * The saved manager image.
         */
        "managerImage"?: string;
        /**
         * The node ID of the responsible controller to reconcile this SystemBackup.
         */
        "ownerID"?: string;
        /**
         * The system backup state.
         */
        "state"?: string;
        /**
         * The saved Longhorn version.
         */
        "version"?: string;
    };
}
/**
 * SystemBackup is where Longhorn stores system backup object
 */
export declare class SystemBackup extends Model<ISystemBackup> implements ISystemBackup {
    "apiVersion": ISystemBackup["apiVersion"];
    "kind": ISystemBackup["kind"];
    "metadata"?: ISystemBackup["metadata"];
    "spec"?: ISystemBackup["spec"];
    "status"?: ISystemBackup["status"];
    static apiVersion: ISystemBackup["apiVersion"];
    static kind: ISystemBackup["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ISystemBackup>;
    constructor(data?: ModelData<ISystemBackup>);
}
