import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * ScheduledBackup is the Schema for the scheduledbackups API
 */
export interface IScheduledBackup {
    /**
     * APIVersion defines the versioned schema of this representation of an object.
     * Servers should convert recognized schemas to the latest internal value, and
     * may reject unrecognized values.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "postgresql.cnpg.io/v1";
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "ScheduledBackup";
    "metadata": IObjectMeta;
    /**
     * Specification of the desired behavior of the ScheduledBackup.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     */
    "spec": {
        /**
         * Indicates which ownerReference should be put inside the created backup resources.<br />
         * - none: no owner reference for created backup objects (same behavior as before the field was introduced)<br />
         * - self: sets the Scheduled backup object as owner of the backup<br />
         * - cluster: set the cluster as owner of the backup<br />
         */
        "backupOwnerReference"?: "none" | "self" | "cluster";
        /**
         * The cluster to backup
         */
        "cluster": {
            /**
             * Name of the referent.
             */
            "name": string;
        };
        /**
         * If the first backup has to be immediately start after creation or not
         */
        "immediate"?: boolean;
        /**
         * The backup method to be used, possible options are `barmanObjectStore`,
         * `volumeSnapshot` or `plugin`. Defaults to: `barmanObjectStore`.
         */
        "method"?: "barmanObjectStore" | "volumeSnapshot" | "plugin";
        /**
         * Whether the default type of backup with volume snapshots is
         * online/hot (`true`, default) or offline/cold (`false`)
         * Overrides the default setting specified in the cluster field '.spec.backup.volumeSnapshot.online'
         */
        "online"?: boolean;
        /**
         * Configuration parameters to control the online/hot backup with volume snapshots
         * Overrides the default settings specified in the cluster '.backup.volumeSnapshot.onlineConfiguration' stanza
         */
        "onlineConfiguration"?: {
            /**
             * Control whether the I/O workload for the backup initial checkpoint will
             * be limited, according to the `checkpoint_completion_target` setting on
             * the PostgreSQL server. If set to true, an immediate checkpoint will be
             * used, meaning PostgreSQL will complete the checkpoint as soon as
             * possible. `false` by default.
             */
            "immediateCheckpoint"?: boolean;
            /**
             * If false, the function will return immediately after the backup is completed,
             * without waiting for WAL to be archived.
             * This behavior is only useful with backup software that independently monitors WAL archiving.
             * Otherwise, WAL required to make the backup consistent might be missing and make the backup useless.
             * By default, or when this parameter is true, pg_backup_stop will wait for WAL to be archived when archiving is
             * enabled.
             * On a standby, this means that it will wait only when archive_mode = always.
             * If write activity on the primary is low, it may be useful to run pg_switch_wal on the primary in order to trigger
             * an immediate segment switch.
             */
            "waitForArchive"?: boolean;
        };
        /**
         * Configuration parameters passed to the plugin managing this backup
         */
        "pluginConfiguration"?: {
            /**
             * Name is the name of the plugin managing this backup
             */
            "name": string;
            /**
             * Parameters are the configuration parameters passed to the backup
             * plugin for this backup
             */
            "parameters"?: {
                [key: string]: string;
            };
        };
        /**
         * The schedule does not follow the same format used in Kubernetes CronJobs
         * as it includes an additional seconds specifier,
         * see https://pkg.go.dev/github.com/robfig/cron#hdr-CRON_Expression_Format
         */
        "schedule": string;
        /**
         * If this backup is suspended or not
         */
        "suspend"?: boolean;
        /**
         * The policy to decide which instance should perform this backup. If empty,
         * it defaults to `cluster.spec.backup.target`.
         * Available options are empty string, `primary` and `prefer-standby`.
         * `primary` to have backups run always on primary instances,
         * `prefer-standby` to have backups run preferably on the most updated
         * standby, if available.
         */
        "target"?: "primary" | "prefer-standby";
    };
    /**
     * Most recently observed status of the ScheduledBackup. This data may not be up
     * to date. Populated by the system. Read-only.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     */
    "status"?: {
        /**
         * The latest time the schedule
         */
        "lastCheckTime"?: string;
        /**
         * Information when was the last time that backup was successfully scheduled.
         */
        "lastScheduleTime"?: string;
        /**
         * Next time we will run a backup
         */
        "nextScheduleTime"?: string;
    };
}
/**
 * ScheduledBackup is the Schema for the scheduledbackups API
 */
export declare class ScheduledBackup extends Model<IScheduledBackup> implements IScheduledBackup {
    "apiVersion": IScheduledBackup["apiVersion"];
    "kind": IScheduledBackup["kind"];
    "metadata": IScheduledBackup["metadata"];
    "spec": IScheduledBackup["spec"];
    "status"?: IScheduledBackup["status"];
    static apiVersion: IScheduledBackup["apiVersion"];
    static kind: IScheduledBackup["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IScheduledBackup>;
    constructor(data?: ModelData<IScheduledBackup>);
}
