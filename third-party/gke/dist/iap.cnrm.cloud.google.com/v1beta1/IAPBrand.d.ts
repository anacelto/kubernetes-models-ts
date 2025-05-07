import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IIAPBrand {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "iap.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "IAPBrand";
    "metadata"?: IObjectMeta;
    "spec"?: {
        /**
         * Immutable. Application name displayed on OAuth consent screen.
         */
        "applicationTitle"?: string;
        /**
         * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
         */
        "resourceID"?: string;
        /**
         * Immutable. Support email displayed on the OAuth consent screen.
         */
        "supportEmail"?: string;
    };
    "status"?: {
        /**
         * Conditions represent the latest available observation of the resource's current state.
         */
        "conditions"?: Array<{
            /**
             * Last time the condition transitioned from one status to another.
             */
            "lastTransitionTime"?: string;
            /**
             * Human-readable message indicating details about last transition.
             */
            "message"?: string;
            /**
             * Unique, one-word, CamelCase reason for the condition's last transition.
             */
            "reason"?: string;
            /**
             * Status is the status of the condition. Can be True, False, Unknown.
             */
            "status"?: string;
            /**
             * Type is the type of the condition.
             */
            "type"?: string;
        }>;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        /**
         * Output only. Whether the brand is only intended for usage inside the G Suite organization only.
         */
        "orgInternalOnly"?: boolean;
    };
}
export declare class IAPBrand extends Model<IIAPBrand> implements IIAPBrand {
    "apiVersion": IIAPBrand["apiVersion"];
    "kind": IIAPBrand["kind"];
    "metadata"?: IIAPBrand["metadata"];
    "spec"?: IIAPBrand["spec"];
    "status"?: IIAPBrand["status"];
    static apiVersion: IIAPBrand["apiVersion"];
    static kind: IIAPBrand["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IIAPBrand>;
    constructor(data?: ModelData<IIAPBrand>);
}
