import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * ShareManager is where Longhorn stores share manager object.
 */
export interface IShareManager {
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
    "kind": "ShareManager";
    "metadata"?: IObjectMeta;
    /**
     * ShareManagerSpec defines the desired state of the Longhorn share manager
     */
    "spec"?: {
        /**
         * Share manager image used for creating a share manager pod
         */
        "image"?: string;
    };
    /**
     * ShareManagerStatus defines the observed state of the Longhorn share manager
     */
    "status"?: {
        /**
         * NFS endpoint that can access the mounted filesystem of the volume
         */
        "endpoint"?: string;
        /**
         * The node ID on which the controller is responsible to reconcile this share manager resource
         */
        "ownerID"?: string;
        /**
         * The state of the share manager resource
         */
        "state"?: string;
    };
}
/**
 * ShareManager is where Longhorn stores share manager object.
 */
export declare class ShareManager extends Model<IShareManager> implements IShareManager {
    "apiVersion": IShareManager["apiVersion"];
    "kind": IShareManager["kind"];
    "metadata"?: IShareManager["metadata"];
    "spec"?: IShareManager["spec"];
    "status"?: IShareManager["status"];
    static apiVersion: IShareManager["apiVersion"];
    static kind: IShareManager["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IShareManager>;
    constructor(data?: ModelData<IShareManager>);
}
