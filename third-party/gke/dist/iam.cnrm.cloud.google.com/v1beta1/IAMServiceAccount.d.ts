import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IIAMServiceAccount {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "iam.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "IAMServiceAccount";
    "metadata"?: IObjectMeta;
    "spec"?: {
        /**
         * A text description of the service account. Must be less than or equal to 256 UTF-8 bytes.
         */
        "description"?: string;
        /**
         * Whether the service account is disabled. Defaults to false.
         */
        "disabled"?: boolean;
        /**
         * The display name for the service account. Can be updated without creating a new resource.
         */
        "displayName"?: string;
        /**
         * Immutable. Optional. The accountId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
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
         * The e-mail address of the service account. This value should be referenced from any google_iam_policy data sources that would grant the service account privileges.
         */
        "email"?: string;
        /**
         * The Identity of the service account in the form 'serviceAccount:{email}'. This value is often used to refer to the service account in order to grant IAM permissions.
         */
        "member"?: string;
        /**
         * The fully-qualified name of the service account.
         */
        "name"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        /**
         * The unique id of the service account.
         */
        "uniqueId"?: string;
    };
}
export declare class IAMServiceAccount extends Model<IIAMServiceAccount> implements IIAMServiceAccount {
    "apiVersion": IIAMServiceAccount["apiVersion"];
    "kind": IIAMServiceAccount["kind"];
    "metadata"?: IIAMServiceAccount["metadata"];
    "spec"?: IIAMServiceAccount["spec"];
    "status"?: IIAMServiceAccount["status"];
    static apiVersion: IIAMServiceAccount["apiVersion"];
    static kind: IIAMServiceAccount["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IIAMServiceAccount>;
    constructor(data?: ModelData<IIAMServiceAccount>);
}
