import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * MedusaRestoreJob is the Schema for the medusarestorejobs API
 */
export interface IMedusaRestoreJob {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "medusa.k8ssandra.io/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "MedusaRestoreJob";
    "metadata"?: IObjectMeta;
    /**
     * MedusaRestoreJobSpec defines the desired state of MedusaRestoreJob
     */
    "spec"?: {
        /**
         * The name of the MedusaBackup to restore.
         */
        "backup": string;
        /**
         * Name of the Cassandra datacenter to perform the restore on.
         */
        "cassandraDatacenter": string;
    };
    /**
     * MedusaRestoreJobStatus defines the observed state of MedusaRestoreJob
     */
    "status"?: {
        "datacenterStopped"?: string;
        "failed"?: Array<string>;
        "finishTime"?: string;
        "finished"?: Array<string>;
        "inProgress"?: Array<string>;
        /**
         * Message gives the reason why restore operation failed
         */
        "message"?: string;
        /**
         * A unique key that identifies the restore operation.
         */
        "restoreKey": string;
        /**
         * Mapping between source and target nodes for a restore
         */
        "restoreMapping"?: {
            /**
             * Mapping between source and target nodes for a restore
             */
            "host_map"?: {
                [key: string]: {
                    "seed": boolean;
                    "source": Array<string>;
                };
            };
            /**
             * Whether the restore is in-place or not
             */
            "in_place"?: boolean;
        };
        "restorePrepared"?: boolean;
        "startTime"?: string;
    };
}
/**
 * MedusaRestoreJob is the Schema for the medusarestorejobs API
 */
export declare class MedusaRestoreJob extends Model<IMedusaRestoreJob> implements IMedusaRestoreJob {
    "apiVersion": IMedusaRestoreJob["apiVersion"];
    "kind": IMedusaRestoreJob["kind"];
    "metadata"?: IMedusaRestoreJob["metadata"];
    "spec"?: IMedusaRestoreJob["spec"];
    "status"?: IMedusaRestoreJob["status"];
    static apiVersion: IMedusaRestoreJob["apiVersion"];
    static kind: IMedusaRestoreJob["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IMedusaRestoreJob>;
    constructor(data?: ModelData<IMedusaRestoreJob>);
}
