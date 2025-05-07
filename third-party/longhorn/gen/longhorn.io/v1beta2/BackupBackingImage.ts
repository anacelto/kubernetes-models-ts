import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/LonghornIoV1beta2BackupBackingImage";

/**
 * BackupBackingImage is where Longhorn stores backing image backup object.
 */
export interface IBackupBackingImage {
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
  "kind": "BackupBackingImage";
  "metadata"?: IObjectMeta;
  /**
   * BackupBackingImageSpec defines the desired state of the Longhorn backing image backup
   */
  "spec"?: {
    /**
     * The labels of backing image backup.
     */
    "labels"?: {
      [key: string]: string;
    };
    /**
     * The time to request run sync the remote backing image backup.
     */
    "syncRequestedAt"?: string;
    /**
     * Is this CR created by user through API or UI.
     * Required
     */
    "userCreated": boolean;
  };
  /**
   * BackupBackingImageStatus defines the observed state of the Longhorn backing image backup
   */
  "status"?: {
    /**
     * The backing image name.
     */
    "backingImage"?: string;
    /**
     * The backing image backup upload finished time.
     */
    "backupCreatedAt"?: string;
    /**
     * The checksum of the backing image.
     */
    "checksum"?: string;
    /**
     * Compression method
     */
    "compressionMethod"?: string;
    /**
     * The error message when taking the backing image backup.
     */
    "error"?: string;
    /**
     * The labels of backing image backup.
     */
    "labels"?: {
      [key: string]: string;
    };
    /**
     * The last time that the backing image backup was synced with the remote backup target.
     */
    "lastSyncedAt"?: string;
    /**
     * The address of the backing image manager that runs backing image backup.
     */
    "managerAddress"?: string;
    /**
     * The error messages when listing or inspecting backing image backup.
     */
    "messages"?: {
      [key: string]: string;
    };
    /**
     * The node ID on which the controller is responsible to reconcile this CR.
     */
    "ownerID"?: string;
    /**
     * The backing image backup progress.
     */
    "progress"?: number;
    /**
     * The backing image size.
     */
    "size"?: number;
    /**
     * The backing image backup creation state.
     * Can be "", "InProgress", "Completed", "Error", "Unknown".
     */
    "state"?: string;
    /**
     * The backing image backup URL.
     */
    "url"?: string;
  };
}

/**
 * BackupBackingImage is where Longhorn stores backing image backup object.
 */
export class BackupBackingImage extends Model<IBackupBackingImage> implements IBackupBackingImage {
  "apiVersion": IBackupBackingImage["apiVersion"];
  "kind": IBackupBackingImage["kind"];
  "metadata"?: IBackupBackingImage["metadata"];
  "spec"?: IBackupBackingImage["spec"];
  "status"?: IBackupBackingImage["status"];

static apiVersion: IBackupBackingImage["apiVersion"] = "longhorn.io/v1beta2";
static kind: IBackupBackingImage["kind"] = "BackupBackingImage";
static is = createTypeMetaGuard<IBackupBackingImage>(BackupBackingImage);

constructor(data?: ModelData<IBackupBackingImage>) {
  super();

  this.setDefinedProps({
    apiVersion: BackupBackingImage.apiVersion,
    kind: BackupBackingImage.kind,
    ...data
  } as IBackupBackingImage);
}
}


setValidateFunc(BackupBackingImage, validate as ValidateFunc<IBackupBackingImage>);
