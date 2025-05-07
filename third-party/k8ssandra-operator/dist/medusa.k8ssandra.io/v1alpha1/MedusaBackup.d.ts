import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * MedusaBackup is the Schema for the medusabackups API
 */
export interface IMedusaBackup {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "medusa.k8ssandra.io/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "MedusaBackup";
    "metadata"?: IObjectMeta;
    /**
     * MedusaBackupSpec defines the desired state of MedusaBackup
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
     * MedusaBackupStatus defines the observed state of MedusaBackup
     */
    "status"?: {
        "finishTime"?: string;
        "finishedNodes"?: number;
        "nodes"?: Array<{
            "datacenter"?: string;
            "host"?: string;
            "rack"?: string;
            "tokens"?: Array<number>;
        }>;
        "startTime"?: string;
        "status"?: string;
        "totalFiles"?: number;
        "totalNodes"?: number;
        "totalSize"?: string;
    };
}
/**
 * MedusaBackup is the Schema for the medusabackups API
 */
export declare class MedusaBackup extends Model<IMedusaBackup> implements IMedusaBackup {
    "apiVersion": IMedusaBackup["apiVersion"];
    "kind": IMedusaBackup["kind"];
    "metadata"?: IMedusaBackup["metadata"];
    "spec"?: IMedusaBackup["spec"];
    "status"?: IMedusaBackup["status"];
    static apiVersion: IMedusaBackup["apiVersion"];
    static kind: IMedusaBackup["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IMedusaBackup>;
    constructor(data?: ModelData<IMedusaBackup>);
}
