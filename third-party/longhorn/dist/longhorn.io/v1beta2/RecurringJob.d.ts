import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * RecurringJob is where Longhorn stores recurring job object.
 */
export interface IRecurringJob {
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
    "kind": "RecurringJob";
    "metadata"?: IObjectMeta;
    /**
     * RecurringJobSpec defines the desired state of the Longhorn recurring job
     */
    "spec"?: {
        /**
         * The concurrency of taking the snapshot/backup.
         */
        "concurrency"?: number;
        /**
         * The cron setting.
         */
        "cron"?: string;
        /**
         * The recurring job group.
         */
        "groups"?: Array<string>;
        /**
         * The label of the snapshot/backup.
         */
        "labels"?: {
            [key: string]: string;
        };
        /**
         * The recurring job name.
         */
        "name"?: string;
        /**
         * The parameters of the snapshot/backup.
         * Support parameters: "full-backup-interval".
         */
        "parameters"?: {
            [key: string]: string;
        };
        /**
         * The retain count of the snapshot/backup.
         */
        "retain"?: number;
        /**
         * The recurring job task.
         * Can be "snapshot", "snapshot-force-create", "snapshot-cleanup", "snapshot-delete", "backup", "backup-force-create" or "filesystem-trim"
         */
        "task"?: "snapshot" | "snapshot-force-create" | "snapshot-cleanup" | "snapshot-delete" | "backup" | "backup-force-create" | "filesystem-trim";
    };
    /**
     * RecurringJobStatus defines the observed state of the Longhorn recurring job
     */
    "status"?: {
        /**
         * The number of jobs that have been triggered.
         */
        "executionCount"?: number;
        /**
         * The owner ID which is responsible to reconcile this recurring job CR.
         */
        "ownerID"?: string;
    };
}
/**
 * RecurringJob is where Longhorn stores recurring job object.
 */
export declare class RecurringJob extends Model<IRecurringJob> implements IRecurringJob {
    "apiVersion": IRecurringJob["apiVersion"];
    "kind": IRecurringJob["kind"];
    "metadata"?: IRecurringJob["metadata"];
    "spec"?: IRecurringJob["spec"];
    "status"?: IRecurringJob["status"];
    static apiVersion: IRecurringJob["apiVersion"];
    static kind: IRecurringJob["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IRecurringJob>;
    constructor(data?: ModelData<IRecurringJob>);
}
