import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * Setting is where Longhorn stores setting object.
 */
export interface ISetting {
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
    "kind": "Setting";
    "metadata"?: IObjectMeta;
    /**
     * The status of the setting.
     */
    "status"?: {
        /**
         * The setting is applied.
         */
        "applied": boolean;
    };
    /**
     * The value of the setting.
     */
    "value": string;
}
/**
 * Setting is where Longhorn stores setting object.
 */
export declare class Setting extends Model<ISetting> implements ISetting {
    "apiVersion": ISetting["apiVersion"];
    "kind": ISetting["kind"];
    "metadata"?: ISetting["metadata"];
    "status"?: ISetting["status"];
    "value": ISetting["value"];
    static apiVersion: ISetting["apiVersion"];
    static kind: ISetting["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ISetting>;
    constructor(data?: ModelData<ISetting>);
}
