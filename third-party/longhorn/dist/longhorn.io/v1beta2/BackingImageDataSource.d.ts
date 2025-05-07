import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * BackingImageDataSource is where Longhorn stores backing image data source object.
 */
export interface IBackingImageDataSource {
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
    "kind": "BackingImageDataSource";
    "metadata"?: IObjectMeta;
    /**
     * BackingImageDataSourceSpec defines the desired state of the Longhorn backing image data source
     */
    "spec"?: {
        "checksum"?: string;
        "diskPath"?: string;
        "diskUUID"?: string;
        "fileTransferred"?: boolean;
        "nodeID"?: string;
        "parameters"?: {
            [key: string]: string;
        };
        "sourceType"?: "download" | "upload" | "export-from-volume" | "restore" | "clone";
        "uuid"?: string;
    };
    /**
     * BackingImageDataSourceStatus defines the observed state of the Longhorn backing image data source
     */
    "status"?: {
        "checksum"?: string;
        "currentState"?: string;
        "ip"?: string;
        "message"?: string;
        "ownerID"?: string;
        "progress"?: number;
        "runningParameters"?: {
            [key: string]: string;
        };
        "size"?: number;
        "storageIP"?: string;
    };
}
/**
 * BackingImageDataSource is where Longhorn stores backing image data source object.
 */
export declare class BackingImageDataSource extends Model<IBackingImageDataSource> implements IBackingImageDataSource {
    "apiVersion": IBackingImageDataSource["apiVersion"];
    "kind": IBackingImageDataSource["kind"];
    "metadata"?: IBackingImageDataSource["metadata"];
    "spec"?: IBackingImageDataSource["spec"];
    "status"?: IBackingImageDataSource["status"];
    static apiVersion: IBackingImageDataSource["apiVersion"];
    static kind: IBackingImageDataSource["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IBackingImageDataSource>;
    constructor(data?: ModelData<IBackingImageDataSource>);
}
