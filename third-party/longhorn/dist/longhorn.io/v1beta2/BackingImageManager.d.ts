import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * BackingImageManager is where Longhorn stores backing image manager object.
 */
export interface IBackingImageManager {
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
    "kind": "BackingImageManager";
    "metadata"?: IObjectMeta;
    /**
     * BackingImageManagerSpec defines the desired state of the Longhorn backing image manager
     */
    "spec"?: {
        "backingImages"?: {
            [key: string]: string;
        };
        "diskPath"?: string;
        "diskUUID"?: string;
        "image"?: string;
        "nodeID"?: string;
    };
    /**
     * BackingImageManagerStatus defines the observed state of the Longhorn backing image manager
     */
    "status"?: {
        "apiMinVersion"?: number;
        "apiVersion"?: number;
        "backingImageFileMap"?: {
            [key: string]: {
                "currentChecksum"?: string;
                "message"?: string;
                "name"?: string;
                "progress"?: number;
                "senderManagerAddress"?: string;
                "sendingReference"?: number;
                "size"?: number;
                "state"?: string;
                "uuid"?: string;
                "virtualSize"?: number;
            };
        };
        "currentState"?: string;
        "ip"?: string;
        "ownerID"?: string;
        "storageIP"?: string;
    };
}
/**
 * BackingImageManager is where Longhorn stores backing image manager object.
 */
export declare class BackingImageManager extends Model<IBackingImageManager> implements IBackingImageManager {
    "apiVersion": IBackingImageManager["apiVersion"];
    "kind": IBackingImageManager["kind"];
    "metadata"?: IBackingImageManager["metadata"];
    "spec"?: IBackingImageManager["spec"];
    "status"?: IBackingImageManager["status"];
    static apiVersion: IBackingImageManager["apiVersion"];
    static kind: IBackingImageManager["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IBackingImageManager>;
    constructor(data?: ModelData<IBackingImageManager>);
}
