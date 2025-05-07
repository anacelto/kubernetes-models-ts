import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface ISQLUser {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "sql.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "SQLUser";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Immutable. The host the user can connect from. This is only supported for MySQL instances. Don't set this field for PostgreSQL instances. Can be an IP address. Changing this forces a new resource to be created.
         */
        "host"?: string;
        "instanceRef": {
            /**
             * Allowed value: The `name` field of a `SQLInstance` resource.
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
             * Allowed value: The `name` field of a `SQLInstance` resource.
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
             * Allowed value: The `name` field of a `SQLInstance` resource.
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
             * Allowed value: The `name` field of a `SQLInstance` resource.
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
             * Allowed value: The `name` field of a `SQLInstance` resource.
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
             * Allowed value: The `name` field of a `SQLInstance` resource.
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
             * Allowed value: The `name` field of a `SQLInstance` resource.
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
         * The password for the user. Can be updated. For Postgres instances this is a Required field, unless type is set to
         *                 either CLOUD_IAM_USER or CLOUD_IAM_SERVICE_ACCOUNT.
         */
        "password"?: {
            /**
             * Value of the field. Cannot be used if 'valueFrom' is specified.
             */
            "value"?: string;
            /**
             * Source for the field's value. Cannot be used if 'value' is specified.
             */
            "valueFrom"?: {
                /**
                 * Reference to a value with the given key in the given Secret in the resource's namespace.
                 */
                "secretKeyRef"?: {
                    /**
                     * Key that identifies the value to be extracted.
                     */
                    "key": string;
                    /**
                     * Name of the Secret to extract a value from.
                     */
                    "name": string;
                };
            };
        } & (Exclude<{
            /**
             * Value of the field. Cannot be used if 'valueFrom' is specified.
             */
            "value": string;
            /**
             * Source for the field's value. Cannot be used if 'value' is specified.
             */
            "valueFrom"?: {
                /**
                 * Reference to a value with the given key in the given Secret in the resource's namespace.
                 */
                "secretKeyRef"?: {
                    /**
                     * Key that identifies the value to be extracted.
                     */
                    "key": string;
                    /**
                     * Name of the Secret to extract a value from.
                     */
                    "name": string;
                };
            };
        }, {
            /**
             * Value of the field. Cannot be used if 'valueFrom' is specified.
             */
            "value"?: string;
            /**
             * Source for the field's value. Cannot be used if 'value' is specified.
             */
            "valueFrom": {
                /**
                 * Reference to a value with the given key in the given Secret in the resource's namespace.
                 */
                "secretKeyRef"?: {
                    /**
                     * Key that identifies the value to be extracted.
                     */
                    "key": string;
                    /**
                     * Name of the Secret to extract a value from.
                     */
                    "name": string;
                };
            };
        }> | Exclude<{
            /**
             * Value of the field. Cannot be used if 'valueFrom' is specified.
             */
            "value"?: string;
            /**
             * Source for the field's value. Cannot be used if 'value' is specified.
             */
            "valueFrom": {
                /**
                 * Reference to a value with the given key in the given Secret in the resource's namespace.
                 */
                "secretKeyRef"?: {
                    /**
                     * Key that identifies the value to be extracted.
                     */
                    "key": string;
                    /**
                     * Name of the Secret to extract a value from.
                     */
                    "name": string;
                };
            };
        }, {
            /**
             * Value of the field. Cannot be used if 'valueFrom' is specified.
             */
            "value": string;
            /**
             * Source for the field's value. Cannot be used if 'value' is specified.
             */
            "valueFrom"?: {
                /**
                 * Reference to a value with the given key in the given Secret in the resource's namespace.
                 */
                "secretKeyRef"?: {
                    /**
                     * Key that identifies the value to be extracted.
                     */
                    "key": string;
                    /**
                     * Name of the Secret to extract a value from.
                     */
                    "name": string;
                };
            };
        }>);
        "passwordPolicy"?: {
            /**
             * Number of failed attempts allowed before the user get locked.
             */
            "allowedFailedAttempts"?: number;
            /**
             * If true, the check that will lock user after too many failed login attempts will be enabled.
             */
            "enableFailedAttemptsCheck"?: boolean;
            /**
             * If true, the user must specify the current password before changing the password. This flag is supported only for MySQL.
             */
            "enablePasswordVerification"?: boolean;
            /**
             * Password expiration duration with one week grace period.
             */
            "passwordExpirationDuration"?: string;
            "status"?: Array<{
                /**
                 * If true, user does not have login privileges.
                 */
                "locked"?: boolean;
                /**
                 * Password expiration duration with one week grace period.
                 */
                "passwordExpirationTime"?: string;
            }>;
        };
        /**
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
        /**
         * Immutable. The user type. It determines the method to authenticate the user during login.
         *                 The default is the database's built-in user type. Flags include "BUILT_IN", "CLOUD_IAM_USER", or "CLOUD_IAM_SERVICE_ACCOUNT".
         */
        "type"?: string;
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
        "sqlServerUserDetails"?: Array<{
            /**
             * If the user has been disabled.
             */
            "disabled"?: boolean;
            /**
             * The server roles for this user in the database.
             */
            "serverRoles"?: Array<string>;
        }>;
    };
}
export declare class SQLUser extends Model<ISQLUser> implements ISQLUser {
    "apiVersion": ISQLUser["apiVersion"];
    "kind": ISQLUser["kind"];
    "metadata"?: ISQLUser["metadata"];
    "spec": ISQLUser["spec"];
    "status"?: ISQLUser["status"];
    static apiVersion: ISQLUser["apiVersion"];
    static kind: ISQLUser["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ISQLUser>;
    constructor(data?: ModelData<ISQLUser>);
}
