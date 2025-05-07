import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * IAMPolicy is the Schema for the iampolicies API
 */
export interface IIAMPolicy {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "iam.cnrm.cloud.google.com/v1beta1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "IAMPolicy";
    "metadata"?: IObjectMeta;
    /**
     * IAMPolicySpec defines the desired state of IAMPolicy
     */
    "spec"?: {
        /**
         * Optional. The list of IAM audit configs.
         */
        "auditConfigs"?: Array<{
            /**
             * Required. The configuration for logging of each type of permission.
             */
            "auditLogConfigs": Array<{
                /**
                 * Identities that do not cause logging for this type of permission. The format is the same as that for 'members' in IAMPolicy/IAMPolicyMember.
                 */
                "exemptedMembers"?: Array<string>;
                /**
                 * Permission type for which logging is to be configured. Must be one of 'DATA_READ', 'DATA_WRITE', or 'ADMIN_READ'.
                 */
                "logType": string;
            }>;
            /**
             * Required. The service for which to enable Data Access audit logs. The special value 'allServices' covers all services. Note that if there are audit configs covering both 'allServices' and a specific service, then the union of the two audit configs is used for that service: the 'logTypes' specified in each 'auditLogConfig' are enabled, and the 'exemptedMembers' in each 'auditLogConfg' are exempted.
             */
            "service": string;
        }>;
        /**
         * Optional. The list of IAM bindings.
         */
        "bindings"?: Array<{
            /**
             * Optional. The condition under which the binding applies.
             */
            "condition"?: {
                "description"?: string;
                "expression": string;
                "title": string;
            };
            /**
             * Optional. The list of IAM users to be bound to the role.
             */
            "members"?: Array<string>;
            /**
             * Required. The role to bind the users to.
             */
            "role": string;
        }>;
        /**
         * Immutable. Required. The GCP resource to set the IAM policy on.
         */
        "resourceRef": {
            "apiVersion"?: string;
            "external"?: string;
            "kind": string;
            "name"?: string;
            "namespace"?: string;
        } & (Exclude<{
            "apiVersion"?: string;
            "external"?: string;
            "kind"?: string;
            "name": string;
            "namespace"?: string;
        }, {
            "apiVersion"?: string;
            "external": string;
            "kind"?: string;
            "name"?: string;
            "namespace"?: string;
        }> | Exclude<{
            "apiVersion"?: string;
            "external": string;
            "kind"?: string;
            "name"?: string;
            "namespace"?: string;
        }, {
            "apiVersion"?: string;
            "external": string;
            "kind"?: string;
            "name"?: string;
            "namespace"?: string;
        } & ({
            "apiVersion"?: string;
            "external"?: string;
            "kind"?: string;
            "name": string;
            "namespace"?: string;
        } | {
            "apiVersion"?: string;
            "external"?: string;
            "kind"?: string;
            "name"?: string;
            "namespace": string;
        })> | Exclude<{
            "apiVersion"?: string;
            "external"?: string;
            "kind": string;
            "name"?: string;
            "namespace"?: string;
        }, {
            "apiVersion"?: string;
            "external"?: string;
            "kind": string;
            "name"?: string;
            "namespace"?: string;
        } & ({
            "apiVersion"?: string;
            "external"?: string;
            "kind"?: string;
            "name": string;
            "namespace"?: string;
        } | {
            "apiVersion"?: string;
            "external"?: string;
            "kind"?: string;
            "name"?: string;
            "namespace": string;
        } | {
            "apiVersion": string;
            "external"?: string;
            "kind"?: string;
            "name"?: string;
            "namespace"?: string;
        } | {
            "apiVersion"?: string;
            "external": string;
            "kind"?: string;
            "name"?: string;
            "namespace"?: string;
        })>);
    };
    /**
     * IAMPolicyStatus defines the observed state of IAMPolicy
     */
    "status"?: {
        /**
         * Conditions represent the latest available observations of the IAM policy's current state.
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
    };
}
/**
 * IAMPolicy is the Schema for the iampolicies API
 */
export declare class IAMPolicy extends Model<IIAMPolicy> implements IIAMPolicy {
    "apiVersion": IIAMPolicy["apiVersion"];
    "kind": IIAMPolicy["kind"];
    "metadata"?: IIAMPolicy["metadata"];
    "spec"?: IIAMPolicy["spec"];
    "status"?: IIAMPolicy["status"];
    static apiVersion: IIAMPolicy["apiVersion"];
    static kind: IIAMPolicy["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IIAMPolicy>;
    constructor(data?: ModelData<IIAMPolicy>);
}
