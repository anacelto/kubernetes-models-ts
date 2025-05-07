import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * BackupVolume is where Longhorn stores backup volume object.
 */
export interface IBackupVolume {
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
    "kind": "BackupVolume";
    "metadata"?: IObjectMeta;
    /**
     * BackupVolumeSpec defines the desired state of the Longhorn backup volume
     */
    "spec"?: {
        /**
         * The time to request run sync the remote backup volume.
         */
        "syncRequestedAt"?: string;
    };
    /**
     * BackupVolumeStatus defines the observed state of the Longhorn backup volume
     */
    "status"?: {
        /**
         * the backing image checksum.
         */
        "backingImageChecksum"?: string;
        /**
         * The backing image name.
         */
        "backingImageName"?: string;
        /**
         * The backup volume creation time.
         */
        "createdAt"?: string;
        /**
         * The backup volume block count.
         */
        "dataStored"?: string;
        /**
         * The backup volume labels.
         */
        "labels"?: {
            [key: string]: string;
        };
        /**
         * The latest volume backup time.
         */
        "lastBackupAt"?: string;
        /**
         * The latest volume backup name.
         */
        "lastBackupName"?: string;
        /**
         * The backup volume config last modification time.
         */
        "lastModificationTime"?: string;
        /**
         * The last time that the backup volume was synced into the cluster.
         */
        "lastSyncedAt"?: string;
        /**
         * The error messages when call longhorn engine on list or inspect backup volumes.
         */
        "messages"?: {
            [key: string]: string;
        };
        /**
         * The node ID on which the controller is responsible to reconcile this backup volume CR.
         */
        "ownerID"?: string;
        /**
         * The backup volume size.
         */
        "size"?: string;
        /**
         * the storage class name of pv/pvc binding with the volume.
         */
        "storageClassName"?: string;
    };
}
/**
 * BackupVolume is where Longhorn stores backup volume object.
 */
export declare class BackupVolume extends Model<IBackupVolume> implements IBackupVolume {
    "apiVersion": IBackupVolume["apiVersion"];
    "kind": IBackupVolume["kind"];
    "metadata"?: IBackupVolume["metadata"];
    "spec"?: IBackupVolume["spec"];
    "status"?: IBackupVolume["status"];
    static apiVersion: IBackupVolume["apiVersion"];
    static kind: IBackupVolume["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IBackupVolume>;
    constructor(data?: ModelData<IBackupVolume>);
}
