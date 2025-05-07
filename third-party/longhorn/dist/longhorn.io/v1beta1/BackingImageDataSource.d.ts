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
    "apiVersion": "longhorn.io/v1beta1";
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "BackingImageDataSource";
    "metadata"?: IObjectMeta;
    "spec"?: any;
    "status"?: any;
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
