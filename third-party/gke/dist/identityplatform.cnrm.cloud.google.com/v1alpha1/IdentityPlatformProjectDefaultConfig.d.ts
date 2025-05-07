import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IIdentityPlatformProjectDefaultConfig {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "identityplatform.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "IdentityPlatformProjectDefaultConfig";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * The project that this resource belongs to.
         */
        "projectRef": {
            /**
             * Allowed value: The `name` field of a `Project` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        } & (Exclude<{
            /**
             * Allowed value: The `name` field of a `Project` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        }, {
            /**
             * Allowed value: The `name` field of a `Project` resource.
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        }> | Exclude<{
            /**
             * Allowed value: The `name` field of a `Project` resource.
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        }, {
            /**
             * Allowed value: The `name` field of a `Project` resource.
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        } & ({
            /**
             * Allowed value: The `name` field of a `Project` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        } | {
            /**
             * Allowed value: The `name` field of a `Project` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace": string;
        })>);
        /**
         * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
         */
        "resourceID"?: string;
        /**
         * Configuration related to local sign in methods.
         */
        "signIn"?: {
            /**
             * Whether to allow more than one account to have the same email.
             */
            "allowDuplicateEmails"?: boolean;
            /**
             * Configuration options related to authenticating an anonymous user.
             */
            "anonymous"?: {
                /**
                 * Whether anonymous user auth is enabled for the project or not.
                 */
                "enabled": boolean;
            };
            /**
             * Configuration options related to authenticating a user by their email address.
             */
            "email"?: {
                /**
                 * Whether email auth is enabled for the project or not.
                 */
                "enabled"?: boolean;
                /**
                 * Whether a password is required for email auth or not. If true, both an email and
                 * password must be provided to sign in. If false, a user may sign in via either
                 * email/password or email link.
                 */
                "passwordRequired"?: boolean;
            };
            /**
             * Output only. Hash config information.
             */
            "hashConfig"?: Array<{
                /**
                 * Different password hash algorithms used in Identity Toolkit.
                 */
                "algorithm"?: string;
                /**
                 * Memory cost for hash calculation. Used by scrypt and other similar password derivation algorithms. See https://tools.ietf.org/html/rfc7914 for explanation of field.
                 */
                "memoryCost"?: number;
                /**
                 * How many rounds for hash calculation. Used by scrypt and other similar password derivation algorithms.
                 */
                "rounds"?: number;
                /**
                 * Non-printable character to be inserted between the salt and plain text password in base64.
                 */
                "saltSeparator"?: string;
                /**
                 * Signer key in base64.
                 */
                "signerKey"?: string;
            }>;
            /**
             * Configuration options related to authenticated a user by their phone number.
             */
            "phoneNumber"?: {
                /**
                 * Whether phone number auth is enabled for the project or not.
                 */
                "enabled"?: boolean;
                /**
                 * A map of <test phone number, fake code> that can be used for phone auth testing.
                 */
                "testPhoneNumbers"?: {
                    [key: string]: string;
                };
            };
        };
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
         * The name of the Config resource. Example: "projects/my-awesome-project/config".
         */
        "name"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
    };
}
export declare class IdentityPlatformProjectDefaultConfig extends Model<IIdentityPlatformProjectDefaultConfig> implements IIdentityPlatformProjectDefaultConfig {
    "apiVersion": IIdentityPlatformProjectDefaultConfig["apiVersion"];
    "kind": IIdentityPlatformProjectDefaultConfig["kind"];
    "metadata"?: IIdentityPlatformProjectDefaultConfig["metadata"];
    "spec": IIdentityPlatformProjectDefaultConfig["spec"];
    "status"?: IIdentityPlatformProjectDefaultConfig["status"];
    static apiVersion: IIdentityPlatformProjectDefaultConfig["apiVersion"];
    static kind: IIdentityPlatformProjectDefaultConfig["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IIdentityPlatformProjectDefaultConfig>;
    constructor(data?: ModelData<IIdentityPlatformProjectDefaultConfig>);
}
