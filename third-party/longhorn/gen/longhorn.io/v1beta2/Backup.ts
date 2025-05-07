import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/LonghornIoV1beta2Backup";

/**
 * Backup is where Longhorn stores backup object.
 */
export interface IBackup {
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
  "kind": "Backup";
  "metadata"?: IObjectMeta;
  /**
   * BackupSpec defines the desired state of the Longhorn backup
   */
  "spec"?: {
    /**
     * The backup mode of this backup.
     * Can be "full" or "incremental"
     */
    "backupMode"?: "full" | "incremental" | "";
    /**
     * The labels of snapshot backup.
     */
    "labels"?: {
      [key: string]: string;
    };
    /**
     * The snapshot name.
     */
    "snapshotName"?: string;
    /**
     * The time to request run sync the remote backup.
     */
    "syncRequestedAt"?: string;
  };
  /**
   * BackupStatus defines the observed state of the Longhorn backup
   */
  "status"?: {
    /**
     * The snapshot backup upload finished time.
     */
    "backupCreatedAt"?: string;
    /**
     * Compression method
     */
    "compressionMethod"?: string;
    /**
     * The error message when taking the snapshot backup.
     */
    "error"?: string;
    /**
     * The labels of snapshot backup.
     */
    "labels"?: {
      [key: string]: string;
    };
    /**
     * The last time that the backup was synced with the remote backup target.
     */
    "lastSyncedAt"?: string;
    /**
     * The error messages when calling longhorn engine on listing or inspecting backups.
     */
    "messages"?: {
      [key: string]: string;
    };
    /**
     * Size in bytes of newly uploaded data
     */
    "newlyUploadDataSize"?: string;
    /**
     * The node ID on which the controller is responsible to reconcile this backup CR.
     */
    "ownerID"?: string;
    /**
     * The snapshot backup progress.
     */
    "progress"?: number;
    /**
     * Size in bytes of reuploaded data
     */
    "reUploadedDataSize"?: string;
    /**
     * The address of the replica that runs snapshot backup.
     */
    "replicaAddress"?: string;
    /**
     * The snapshot size.
     */
    "size"?: string;
    /**
     * The snapshot creation time.
     */
    "snapshotCreatedAt"?: string;
    /**
     * The snapshot name.
     */
    "snapshotName"?: string;
    /**
     * The backup creation state.
     * Can be "", "InProgress", "Completed", "Error", "Unknown".
     */
    "state"?: string;
    /**
     * The snapshot backup URL.
     */
    "url"?: string;
    /**
     * The volume's backing image name.
     */
    "volumeBackingImageName"?: string;
    /**
     * The volume creation time.
     */
    "volumeCreated"?: string;
    /**
     * The volume name.
     */
    "volumeName"?: string;
    /**
     * The volume size.
     */
    "volumeSize"?: string;
  };
}

/**
 * Backup is where Longhorn stores backup object.
 */
export class Backup extends Model<IBackup> implements IBackup {
  "apiVersion": IBackup["apiVersion"];
  "kind": IBackup["kind"];
  "metadata"?: IBackup["metadata"];
  "spec"?: IBackup["spec"];
  "status"?: IBackup["status"];

static apiVersion: IBackup["apiVersion"] = "longhorn.io/v1beta2";
static kind: IBackup["kind"] = "Backup";
static is = createTypeMetaGuard<IBackup>(Backup);

constructor(data?: ModelData<IBackup>) {
  super();

  this.setDefinedProps({
    apiVersion: Backup.apiVersion,
    kind: Backup.kind,
    ...data
  } as IBackup);
}
}


setValidateFunc(Backup, validate as ValidateFunc<IBackup>);
