import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface INetworkServicesEdgeCacheKeyset {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "networkservices.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "NetworkServicesEdgeCacheKeyset";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * A human-readable description of the resource.
         */
        "description"?: string;
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
         * An ordered list of Ed25519 public keys to use for validating signed requests.
         * You must specify 'public_keys' or 'validation_shared_keys' (or both). The keys in 'public_keys' are checked first.
         * You may specify no more than one Google-managed public key.
         * If you specify 'public_keys', you must specify at least one (1) key and may specify up to three (3) keys.
         *
         * Ed25519 public keys are not secret, and only allow Google to validate a request was signed by your corresponding private key.
         * Ensure that the private key is kept secret, and that only authorized users can add public keys to a keyset.
         */
        "publicKey"?: Array<{
            /**
             * The ID of the public key. The ID must be 1-63 characters long, and comply with RFC1035.
             * The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]\*
             * which means the first character must be a letter, and all following characters must be a dash, underscore, letter or digit.
             */
            "id": string;
            /**
             * Set to true to have the CDN automatically manage this public key value.
             */
            "managed"?: boolean;
            /**
             * The base64-encoded value of the Ed25519 public key. The base64 encoding can be padded (44 bytes) or unpadded (43 bytes).
             * Representations or encodings of the public key other than this will be rejected with an error.
             */
            "value"?: {
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
        }>;
        /**
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
        /**
         * An ordered list of shared keys to use for validating signed requests.
         * Shared keys are secret.  Ensure that only authorized users can add 'validation_shared_keys' to a keyset.
         * You can rotate keys by appending (pushing) a new key to the list of 'validation_shared_keys' and removing any superseded keys.
         * You must specify 'public_keys' or 'validation_shared_keys' (or both). The keys in 'public_keys' are checked first.
         */
        "validationSharedKeys"?: Array<{
            /**
             * The name of the secret version in Secret Manager.
             *
             * The resource name of the secret version must be in the format 'projects/\*\/secrets/\*\/versions/\*' where the '\*' values are replaced by the secrets themselves.
             * The secrets must be at least 16 bytes large.  The recommended secret size depends on the signature algorithm you are using.
             * \* If you are using HMAC-SHA1, we suggest 20-byte secrets.
             * \* If you are using HMAC-SHA256, we suggest 32-byte secrets.
             * See RFC 2104, Section 3 for more details on these recommendations.
             */
            "secretVersion": string;
        }>;
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
    };
}
export declare class NetworkServicesEdgeCacheKeyset extends Model<INetworkServicesEdgeCacheKeyset> implements INetworkServicesEdgeCacheKeyset {
    "apiVersion": INetworkServicesEdgeCacheKeyset["apiVersion"];
    "kind": INetworkServicesEdgeCacheKeyset["kind"];
    "metadata"?: INetworkServicesEdgeCacheKeyset["metadata"];
    "spec": INetworkServicesEdgeCacheKeyset["spec"];
    "status"?: INetworkServicesEdgeCacheKeyset["status"];
    static apiVersion: INetworkServicesEdgeCacheKeyset["apiVersion"];
    static kind: INetworkServicesEdgeCacheKeyset["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<INetworkServicesEdgeCacheKeyset>;
    constructor(data?: ModelData<INetworkServicesEdgeCacheKeyset>);
}
