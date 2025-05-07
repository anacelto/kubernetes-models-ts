import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
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
    "apiVersion": "longhorn.io/v1beta1";
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "BackingImage";
    "metadata"?: IObjectMeta;
    "spec"?: any;
    "status"?: any;
}
/**
 * BackingImage is where Longhorn stores backing image object.
 */
export declare class BackingImage extends Model<IBackingImage> implements IBackingImage {
    "apiVersion": IBackingImage["apiVersion"];
    "kind": IBackingImage["kind"];
    "metadata"?: IBackingImage["metadata"];
    "spec"?: IBackingImage["spec"];
    "status"?: IBackingImage["status"];
    static apiVersion: IBackingImage["apiVersion"];
    static kind: IBackingImage["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IBackingImage>;
    constructor(data?: ModelData<IBackingImage>);
}
