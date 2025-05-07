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
    "apiVersion": "longhorn.io/v1beta1";
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "BackingImageManager";
    "metadata"?: IObjectMeta;
    "spec"?: any;
    "status"?: any;
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
