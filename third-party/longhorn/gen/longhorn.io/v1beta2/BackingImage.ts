import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/LonghornIoV1beta2BackingImage";

/**
 * BackingImage is where Longhorn stores backing image object.
 */
export interface IBackingImage {
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
  "kind": "BackingImage";
  "metadata"?: IObjectMeta;
  /**
   * BackingImageSpec defines the desired state of the Longhorn backing image
   */
  "spec"?: {
    "checksum"?: string;
    "diskFileSpecMap"?: {
      [key: string]: {
        "evictionRequested"?: boolean;
      };
    };
    "diskSelector"?: Array<string>;
    /**
     * Deprecated. We are now using DiskFileSpecMap to assign different spec to the file on different disks.
     */
    "disks"?: {
      [key: string]: string;
    };
    "minNumberOfCopies"?: number;
    "nodeSelector"?: Array<string>;
    "secret"?: string;
    "secretNamespace"?: string;
    "sourceParameters"?: {
      [key: string]: string;
    };
    "sourceType"?: "download" | "upload" | "export-from-volume" | "restore" | "clone";
  };
  /**
   * BackingImageStatus defines the observed state of the Longhorn backing image status
   */
  "status"?: {
    "checksum"?: string;
    "diskFileStatusMap"?: {
      [key: string]: {
        "lastStateTransitionTime"?: string;
        "message"?: string;
        "progress"?: number;
        "state"?: string;
      };
    };
    "diskLastRefAtMap"?: {
      [key: string]: string;
    };
    "ownerID"?: string;
    "size"?: number;
    "uuid"?: string;
    /**
     * Virtual size of image, which may be larger than physical size. Will be zero until known (e.g. while a backing image is uploading)
     */
    "virtualSize"?: number;
  };
}

/**
 * BackingImage is where Longhorn stores backing image object.
 */
export class BackingImage extends Model<IBackingImage> implements IBackingImage {
  "apiVersion": IBackingImage["apiVersion"];
  "kind": IBackingImage["kind"];
  "metadata"?: IBackingImage["metadata"];
  "spec"?: IBackingImage["spec"];
  "status"?: IBackingImage["status"];

static apiVersion: IBackingImage["apiVersion"] = "longhorn.io/v1beta2";
static kind: IBackingImage["kind"] = "BackingImage";
static is = createTypeMetaGuard<IBackingImage>(BackingImage);

constructor(data?: ModelData<IBackingImage>) {
  super();

  this.setDefinedProps({
    apiVersion: BackingImage.apiVersion,
    kind: BackingImage.kind,
    ...data
  } as IBackingImage);
}
}


setValidateFunc(BackingImage, validate as ValidateFunc<IBackingImage>);
