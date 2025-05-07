import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * IAMPolicyMember is the Schema for the iampolicies API
 */
export interface IIAMPolicyMember {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "iam.cnrm.cloud.google.com/v1beta1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "IAMPolicyMember";
    "metadata"?: IObjectMeta;
    /**
     * IAMPolicyMemberSpec defines the desired state of IAMPolicyMember
     */
    "spec"?: {
        /**
         * Immutable. Optional. The condition under which the binding applies.
         */
        "condition"?: {
            "description"?: string;
            "expression": string;
            "title": string;
        };
        /**
         * Immutable. The IAM identity to be bound to the role. Exactly one of 'member' or 'memberFrom' must be used.
         */
        "member"?: string;
        /**
         * Immutable. The IAM identity to be bound to the role. Exactly one of 'member' or 'memberFrom' must be used, and only one subfield within 'memberFrom' can be used.
         */
        "memberFrom"?: {
            /**
             * The LoggingLogSink whose writer identity (i.e. its 'status.writerIdentity') is to be bound to the role.
             */
            "logSinkRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The IAMServiceAccount to be bound to the role.
             */
            "serviceAccountRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The ServiceIdentity whose service account (i.e., its 'status.email') is to be bound to the role.
             */
            "serviceIdentityRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The SQLInstance whose service account (i.e. its 'status.serviceAccountEmailAddress') is to be bound to the role.
             */
            "sqlInstanceRef"?: {
                "name": string;
                "namespace"?: string;
            };
        } & ({
            /**
             * The LoggingLogSink whose writer identity (i.e. its 'status.writerIdentity') is to be bound to the role.
             */
            "logSinkRef": {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The IAMServiceAccount to be bound to the role.
             */
            "serviceAccountRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The ServiceIdentity whose service account (i.e., its 'status.email') is to be bound to the role.
             */
            "serviceIdentityRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The SQLInstance whose service account (i.e. its 'status.serviceAccountEmailAddress') is to be bound to the role.
             */
            "sqlInstanceRef"?: {
                "name": string;
                "namespace"?: string;
            };
        } | {
            /**
             * The LoggingLogSink whose writer identity (i.e. its 'status.writerIdentity') is to be bound to the role.
             */
            "logSinkRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The IAMServiceAccount to be bound to the role.
             */
            "serviceAccountRef": {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The ServiceIdentity whose service account (i.e., its 'status.email') is to be bound to the role.
             */
            "serviceIdentityRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The SQLInstance whose service account (i.e. its 'status.serviceAccountEmailAddress') is to be bound to the role.
             */
            "sqlInstanceRef"?: {
                "name": string;
                "namespace"?: string;
            };
        } | {
            /**
             * The LoggingLogSink whose writer identity (i.e. its 'status.writerIdentity') is to be bound to the role.
             */
            "logSinkRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The IAMServiceAccount to be bound to the role.
             */
            "serviceAccountRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The ServiceIdentity whose service account (i.e., its 'status.email') is to be bound to the role.
             */
            "serviceIdentityRef": {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The SQLInstance whose service account (i.e. its 'status.serviceAccountEmailAddress') is to be bound to the role.
             */
            "sqlInstanceRef"?: {
                "name": string;
                "namespace"?: string;
            };
        } | {
            /**
             * The LoggingLogSink whose writer identity (i.e. its 'status.writerIdentity') is to be bound to the role.
             */
            "logSinkRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The IAMServiceAccount to be bound to the role.
             */
            "serviceAccountRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The ServiceIdentity whose service account (i.e., its 'status.email') is to be bound to the role.
             */
            "serviceIdentityRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The SQLInstance whose service account (i.e. its 'status.serviceAccountEmailAddress') is to be bound to the role.
             */
            "sqlInstanceRef": {
                "name": string;
                "namespace"?: string;
            };
        });
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
        /**
         * Immutable. Required. The role for which the Member will be bound.
         */
        "role": string;
    } & ({
        /**
         * Immutable. Optional. The condition under which the binding applies.
         */
        "condition"?: {
            "description"?: string;
            "expression": string;
            "title": string;
        };
        /**
         * Immutable. The IAM identity to be bound to the role. Exactly one of 'member' or 'memberFrom' must be used.
         */
        "member": string;
        /**
         * Immutable. The IAM identity to be bound to the role. Exactly one of 'member' or 'memberFrom' must be used, and only one subfield within 'memberFrom' can be used.
         */
        "memberFrom"?: {
            /**
             * The LoggingLogSink whose writer identity (i.e. its 'status.writerIdentity') is to be bound to the role.
             */
            "logSinkRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The IAMServiceAccount to be bound to the role.
             */
            "serviceAccountRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The ServiceIdentity whose service account (i.e., its 'status.email') is to be bound to the role.
             */
            "serviceIdentityRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The SQLInstance whose service account (i.e. its 'status.serviceAccountEmailAddress') is to be bound to the role.
             */
            "sqlInstanceRef"?: {
                "name": string;
                "namespace"?: string;
            };
        } & ({
            /**
             * The LoggingLogSink whose writer identity (i.e. its 'status.writerIdentity') is to be bound to the role.
             */
            "logSinkRef": {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The IAMServiceAccount to be bound to the role.
             */
            "serviceAccountRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The ServiceIdentity whose service account (i.e., its 'status.email') is to be bound to the role.
             */
            "serviceIdentityRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The SQLInstance whose service account (i.e. its 'status.serviceAccountEmailAddress') is to be bound to the role.
             */
            "sqlInstanceRef"?: {
                "name": string;
                "namespace"?: string;
            };
        } | {
            /**
             * The LoggingLogSink whose writer identity (i.e. its 'status.writerIdentity') is to be bound to the role.
             */
            "logSinkRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The IAMServiceAccount to be bound to the role.
             */
            "serviceAccountRef": {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The ServiceIdentity whose service account (i.e., its 'status.email') is to be bound to the role.
             */
            "serviceIdentityRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The SQLInstance whose service account (i.e. its 'status.serviceAccountEmailAddress') is to be bound to the role.
             */
            "sqlInstanceRef"?: {
                "name": string;
                "namespace"?: string;
            };
        } | {
            /**
             * The LoggingLogSink whose writer identity (i.e. its 'status.writerIdentity') is to be bound to the role.
             */
            "logSinkRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The IAMServiceAccount to be bound to the role.
             */
            "serviceAccountRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The ServiceIdentity whose service account (i.e., its 'status.email') is to be bound to the role.
             */
            "serviceIdentityRef": {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The SQLInstance whose service account (i.e. its 'status.serviceAccountEmailAddress') is to be bound to the role.
             */
            "sqlInstanceRef"?: {
                "name": string;
                "namespace"?: string;
            };
        } | {
            /**
             * The LoggingLogSink whose writer identity (i.e. its 'status.writerIdentity') is to be bound to the role.
             */
            "logSinkRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The IAMServiceAccount to be bound to the role.
             */
            "serviceAccountRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The ServiceIdentity whose service account (i.e., its 'status.email') is to be bound to the role.
             */
            "serviceIdentityRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The SQLInstance whose service account (i.e. its 'status.serviceAccountEmailAddress') is to be bound to the role.
             */
            "sqlInstanceRef": {
                "name": string;
                "namespace"?: string;
            };
        });
        /**
         * Immutable. Required. The GCP resource to set the IAM policy on.
         */
        "resourceRef"?: {
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
        /**
         * Immutable. Required. The role for which the Member will be bound.
         */
        "role"?: string;
    } | {
        /**
         * Immutable. Optional. The condition under which the binding applies.
         */
        "condition"?: {
            "description"?: string;
            "expression": string;
            "title": string;
        };
        /**
         * Immutable. The IAM identity to be bound to the role. Exactly one of 'member' or 'memberFrom' must be used.
         */
        "member"?: string;
        /**
         * Immutable. The IAM identity to be bound to the role. Exactly one of 'member' or 'memberFrom' must be used, and only one subfield within 'memberFrom' can be used.
         */
        "memberFrom": {
            /**
             * The LoggingLogSink whose writer identity (i.e. its 'status.writerIdentity') is to be bound to the role.
             */
            "logSinkRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The IAMServiceAccount to be bound to the role.
             */
            "serviceAccountRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The ServiceIdentity whose service account (i.e., its 'status.email') is to be bound to the role.
             */
            "serviceIdentityRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The SQLInstance whose service account (i.e. its 'status.serviceAccountEmailAddress') is to be bound to the role.
             */
            "sqlInstanceRef"?: {
                "name": string;
                "namespace"?: string;
            };
        } & ({
            /**
             * The LoggingLogSink whose writer identity (i.e. its 'status.writerIdentity') is to be bound to the role.
             */
            "logSinkRef": {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The IAMServiceAccount to be bound to the role.
             */
            "serviceAccountRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The ServiceIdentity whose service account (i.e., its 'status.email') is to be bound to the role.
             */
            "serviceIdentityRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The SQLInstance whose service account (i.e. its 'status.serviceAccountEmailAddress') is to be bound to the role.
             */
            "sqlInstanceRef"?: {
                "name": string;
                "namespace"?: string;
            };
        } | {
            /**
             * The LoggingLogSink whose writer identity (i.e. its 'status.writerIdentity') is to be bound to the role.
             */
            "logSinkRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The IAMServiceAccount to be bound to the role.
             */
            "serviceAccountRef": {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The ServiceIdentity whose service account (i.e., its 'status.email') is to be bound to the role.
             */
            "serviceIdentityRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The SQLInstance whose service account (i.e. its 'status.serviceAccountEmailAddress') is to be bound to the role.
             */
            "sqlInstanceRef"?: {
                "name": string;
                "namespace"?: string;
            };
        } | {
            /**
             * The LoggingLogSink whose writer identity (i.e. its 'status.writerIdentity') is to be bound to the role.
             */
            "logSinkRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The IAMServiceAccount to be bound to the role.
             */
            "serviceAccountRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The ServiceIdentity whose service account (i.e., its 'status.email') is to be bound to the role.
             */
            "serviceIdentityRef": {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The SQLInstance whose service account (i.e. its 'status.serviceAccountEmailAddress') is to be bound to the role.
             */
            "sqlInstanceRef"?: {
                "name": string;
                "namespace"?: string;
            };
        } | {
            /**
             * The LoggingLogSink whose writer identity (i.e. its 'status.writerIdentity') is to be bound to the role.
             */
            "logSinkRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The IAMServiceAccount to be bound to the role.
             */
            "serviceAccountRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The ServiceIdentity whose service account (i.e., its 'status.email') is to be bound to the role.
             */
            "serviceIdentityRef"?: {
                "name": string;
                "namespace"?: string;
            };
            /**
             * The SQLInstance whose service account (i.e. its 'status.serviceAccountEmailAddress') is to be bound to the role.
             */
            "sqlInstanceRef": {
                "name": string;
                "namespace"?: string;
            };
        });
        /**
         * Immutable. Required. The GCP resource to set the IAM policy on.
         */
        "resourceRef"?: {
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
        /**
         * Immutable. Required. The role for which the Member will be bound.
         */
        "role"?: string;
    });
    /**
     * IAMPolicyMemberStatus defines the observed state of IAMPolicyMember
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
 * IAMPolicyMember is the Schema for the iampolicies API
 */
export declare class IAMPolicyMember extends Model<IIAMPolicyMember> implements IIAMPolicyMember {
    "apiVersion": IIAMPolicyMember["apiVersion"];
    "kind": IIAMPolicyMember["kind"];
    "metadata"?: IIAMPolicyMember["metadata"];
    "spec"?: IIAMPolicyMember["spec"];
    "status"?: IIAMPolicyMember["status"];
    static apiVersion: IIAMPolicyMember["apiVersion"];
    static kind: IIAMPolicyMember["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IIAMPolicyMember>;
    constructor(data?: ModelData<IIAMPolicyMember>);
}
