import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface ISecretManagerSecret {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "secretmanager.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "SecretManagerSecret";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Custom metadata about the secret.
         *
         * Annotations are distinct from various forms of labels. Annotations exist to allow
         * client tools to store their own state information without requiring a database.
         *
         * Annotation keys must be between 1 and 63 characters long, have a UTF-8 encoding of
         * maximum 128 bytes, begin and end with an alphanumeric character ([a-z0-9A-Z]), and
         * may have dashes (-), underscores (_), dots (.), and alphanumerics in between these
         * symbols.
         *
         * The total size of annotation keys and values must be less than 16KiB.
         *
         * An object containing a list of "key": value pairs. Example:
         * { "name": "wrench", "mass": "1.3kg", "count": "3" }.
         */
        "annotations"?: {
            [key: string]: string;
        };
        /**
         * Timestamp in UTC when the Secret is scheduled to expire. This is always provided on output, regardless of what was sent on input.
         * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
         */
        "expireTime"?: string;
        /**
         * Immutable. The replication policy of the secret data attached to the Secret. It cannot be changed
         * after the Secret has been created.
         */
        "replication": {
            /**
             * The Secret will automatically be replicated without any restrictions.
             */
            "auto"?: {
                /**
                 * The customer-managed encryption configuration of the Secret.
                 * If no configuration is provided, Google-managed default
                 * encryption is used.
                 */
                "customerManagedEncryption"?: {
                    /**
                     * The customer-managed encryption configuration of the Secret.
                     * If no configuration is provided, Google-managed default
                     * encryption is used.
                     */
                    "kmsKeyRef": {
                        /**
                         * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
                         * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
                         * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
                         * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
                         * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
                         * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
                         * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
                };
            };
            /**
             * DEPRECATED. `automatic` is deprecated. Use `auto` instead. The Secret will automatically be replicated without any restrictions.
             */
            "automatic"?: boolean;
            /**
             * Immutable. The Secret will be replicated to the regions specified by the user.
             */
            "userManaged"?: {
                /**
                 * Immutable. The list of Replicas for this Secret. Cannot be empty.
                 */
                "replicas": Array<{
                    /**
                     * Customer Managed Encryption for the secret.
                     */
                    "customerManagedEncryption"?: {
                        /**
                         * Customer Managed Encryption for the secret.
                         */
                        "kmsKeyRef": {
                            /**
                             * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
                             * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
                             * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
                             * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
                             * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
                             * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
                             * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
                    };
                    /**
                     * Immutable. The canonical IDs of the location to replicate data. For example: "us-east1".
                     */
                    "location": string;
                }>;
            };
        };
        /**
         * Immutable. Optional. The secretId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
        /**
         * The rotation time and period for a Secret. At 'next_rotation_time', Secret Manager will send a Pub/Sub notification to the topics configured on the Secret. 'topics' must be set to configure rotation.
         */
        "rotation"?: {
            /**
             * Timestamp in UTC at which the Secret is scheduled to rotate.
             * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
             */
            "nextRotationTime"?: string;
            /**
             * Immutable. The Duration between rotation notifications. Must be in seconds and at least 3600s (1h) and at most 3153600000s (100 years).
             * If rotationPeriod is set, 'next_rotation_time' must be set. 'next_rotation_time' will be advanced by this period when the service automatically sends rotation notifications.
             */
            "rotationPeriod"?: string;
        };
        /**
         * A list of up to 10 Pub/Sub topics to which messages are published when control plane operations are called on the secret or its versions.
         */
        "topics"?: Array<{
            /**
             * A list of up to 10 Pub/Sub topics to which messages are
             * published when control plane operations are called on the secret
             * or its versions.
             */
            "topicRef": {
                /**
                 * Allowed value: string of the format `projects/{{project}}/topics/{{value}}`, where {{value}} is the `name` field of a `PubSubTopic` resource.
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
                 * Allowed value: string of the format `projects/{{project}}/topics/{{value}}`, where {{value}} is the `name` field of a `PubSubTopic` resource.
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
                 * Allowed value: string of the format `projects/{{project}}/topics/{{value}}`, where {{value}} is the `name` field of a `PubSubTopic` resource.
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
                 * Allowed value: string of the format `projects/{{project}}/topics/{{value}}`, where {{value}} is the `name` field of a `PubSubTopic` resource.
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
                 * Allowed value: string of the format `projects/{{project}}/topics/{{value}}`, where {{value}} is the `name` field of a `PubSubTopic` resource.
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
                 * Allowed value: string of the format `projects/{{project}}/topics/{{value}}`, where {{value}} is the `name` field of a `PubSubTopic` resource.
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
                 * Allowed value: string of the format `projects/{{project}}/topics/{{value}}`, where {{value}} is the `name` field of a `PubSubTopic` resource.
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
        }>;
        /**
         * Immutable. The TTL for the Secret.
         * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
         */
        "ttl"?: string;
        /**
         * Mapping from version alias to version name.
         *
         * A version alias is a string with a maximum length of 63 characters and can contain
         * uppercase and lowercase letters, numerals, and the hyphen (-) and underscore ('_')
         * characters. An alias string must start with a letter and cannot be the string
         * 'latest' or 'NEW'. No more than 50 aliases can be assigned to a given secret.
         *
         * An object containing a list of "key": value pairs. Example:
         * { "name": "wrench", "mass": "1.3kg", "count": "3" }.
         */
        "versionAliases"?: {
            [key: string]: string;
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
         * The time at which the Secret was created.
         */
        "createTime"?: string;
        /**
         * The resource name of the Secret. Format:
         * 'projects/{{project}}/secrets/{{secret_id}}'.
         */
        "name"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
    };
}
export declare class SecretManagerSecret extends Model<ISecretManagerSecret> implements ISecretManagerSecret {
    "apiVersion": ISecretManagerSecret["apiVersion"];
    "kind": ISecretManagerSecret["kind"];
    "metadata"?: ISecretManagerSecret["metadata"];
    "spec": ISecretManagerSecret["spec"];
    "status"?: ISecretManagerSecret["status"];
    static apiVersion: ISecretManagerSecret["apiVersion"];
    static kind: ISecretManagerSecret["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ISecretManagerSecret>;
    constructor(data?: ModelData<ISecretManagerSecret>);
}
