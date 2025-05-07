import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * MedusaBackupJob is the Schema for the medusabackupjobs API
 */
export interface IMedusaBackupJob {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "medusa.k8ssandra.io/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "MedusaBackupJob";
    "metadata"?: IObjectMeta;
    /**
     * MedusaBackupJobSpec defines the desired state of MedusaBackupJob
     */
    "spec"?: {
        /**
         * The type of the backup: "full" or "differential"
         */
        "backupType"?: "differential" | "full";
        /**
         * The name of the CassandraDatacenter to back up
         */
        "cassandraDatacenter": string;
    };
    /**
     * MedusaBackupJobStatus defines the observed state of MedusaBackupJob
     */
    "status"?: {
        "failed"?: Array<string>;
        "finishTime"?: string;
        "finished"?: Array<string>;
        "inProgress"?: Array<string>;
        "startTime"?: string;
    };
}
/**
 * MedusaBackupJob is the Schema for the medusabackupjobs API
 */
export declare class MedusaBackupJob extends Model<IMedusaBackupJob> implements IMedusaBackupJob {
    "apiVersion": IMedusaBackupJob["apiVersion"];
    "kind": IMedusaBackupJob["kind"];
    "metadata"?: IMedusaBackupJob["metadata"];
    "spec"?: IMedusaBackupJob["spec"];
    "status"?: IMedusaBackupJob["status"];
    static apiVersion: IMedusaBackupJob["apiVersion"];
    static kind: IMedusaBackupJob["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IMedusaBackupJob>;
    constructor(data?: ModelData<IMedusaBackupJob>);
}
