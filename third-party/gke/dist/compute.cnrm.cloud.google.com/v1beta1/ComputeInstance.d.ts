import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IComputeInstance {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "compute.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "ComputeInstance";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Controls for advanced machine-related behavior features.
         */
        "advancedMachineFeatures"?: {
            /**
             * Whether to enable nested virtualization or not.
             */
            "enableNestedVirtualization"?: boolean;
            /**
             * The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.
             */
            "threadsPerCore"?: number;
            /**
             * The number of physical cores to expose to an instance. Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance\'s nominal CPU count and the underlying platform\'s SMT width.
             */
            "visibleCoreCount"?: number;
        };
        /**
         * List of disks attached to the instance.
         */
        "attachedDisk"?: Array<{
            /**
             * Name with which the attached disk is accessible under /dev/disk/by-id/.
             */
            "deviceName"?: string;
            /**
             * A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set.
             */
            "diskEncryptionKeyRaw"?: {
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
            /**
             * The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource.
             */
            "diskEncryptionKeySha256"?: string;
            "kmsKeyRef"?: {
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
            /**
             * Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE".
             */
            "mode"?: string;
            "sourceDiskRef": {
                /**
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
         * Immutable. The boot disk for the instance.
         */
        "bootDisk"?: {
            /**
             * Immutable. Whether the disk will be auto-deleted when the instance is deleted.
             */
            "autoDelete"?: boolean;
            /**
             * Immutable. Name with which attached disk will be accessible under /dev/disk/by-id/.
             */
            "deviceName"?: string;
            /**
             * Immutable. A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set.
             */
            "diskEncryptionKeyRaw"?: {
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
            /**
             * The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource.
             */
            "diskEncryptionKeySha256"?: string;
            /**
             * Immutable. Parameters with which a disk was created alongside the instance.
             */
            "initializeParams"?: {
                /**
                 * Immutable. A set of key/value label pairs assigned to the disk.
                 */
                "labels"?: {};
                /**
                 * Immutable. A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
                 */
                "resourceManagerTags"?: {};
                /**
                 * Immutable. The size of the image in gigabytes.
                 */
                "size"?: number;
                /**
                 * Immutable. The image from which to initialize this disk.
                 */
                "sourceImageRef"?: {
                    /**
                     * Allowed value: The `selfLink` field of a `ComputeImage` resource.
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
                     * Allowed value: The `selfLink` field of a `ComputeImage` resource.
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
                     * Allowed value: The `selfLink` field of a `ComputeImage` resource.
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
                     * Allowed value: The `selfLink` field of a `ComputeImage` resource.
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
                     * Allowed value: The `selfLink` field of a `ComputeImage` resource.
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
                     * Allowed value: The `selfLink` field of a `ComputeImage` resource.
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
                     * Allowed value: The `selfLink` field of a `ComputeImage` resource.
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
                 * Immutable. The Google Compute Engine disk type. Such as pd-standard, pd-ssd or pd-balanced.
                 */
                "type"?: string;
            };
            "kmsKeyRef"?: {
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
            /**
             * Immutable. Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE".
             */
            "mode"?: string;
            /**
             * Immutable. The source disk used to create this disk.
             */
            "sourceDiskRef"?: {
                /**
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
         * Whether sending and receiving of packets with non-matching source or destination IPs is allowed.
         */
        "canIpForward"?: boolean;
        /**
         * Immutable. The Confidential VM config being used by the instance.  on_host_maintenance has to be set to TERMINATE or this will fail to create.
         */
        "confidentialInstanceConfig"?: {
            /**
             * Defines whether the instance should have confidential compute enabled.
             */
            "enableConfidentialCompute": boolean;
        };
        /**
         * Whether deletion protection is enabled on this instance.
         */
        "deletionProtection"?: boolean;
        /**
         * Immutable. A brief description of the resource.
         */
        "description"?: string;
        /**
         * Desired status of the instance. Either "RUNNING" or "TERMINATED".
         */
        "desiredStatus"?: string;
        /**
         * Whether the instance has virtual displays enabled.
         */
        "enableDisplay"?: boolean;
        /**
         * Immutable. List of the type and count of accelerator cards attached to the instance.
         */
        "guestAccelerator"?: Array<{
            /**
             * Immutable. The number of the guest accelerator cards exposed to this instance.
             */
            "count": number;
            /**
             * Immutable. The accelerator type resource exposed to this instance. E.g. nvidia-tesla-k80.
             */
            "type": string;
        }>;
        /**
         * Immutable. A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of labels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]\*[a-z0-9]), concatenated with periods. The entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.
         */
        "hostname"?: string;
        "instanceTemplateRef"?: {
            /**
             * Allowed value: The `selfLink` field of a `ComputeInstanceTemplate` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeInstanceTemplate` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeInstanceTemplate` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeInstanceTemplate` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeInstanceTemplate` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeInstanceTemplate` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeInstanceTemplate` resource.
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
         * The machine type to create.
         */
        "machineType"?: string;
        "metadata"?: Array<{
            "key": string;
            "value": string;
        }>;
        /**
         * Immutable. Metadata startup scripts made available within the instance.
         */
        "metadataStartupScript"?: string;
        /**
         * The minimum CPU platform specified for the VM instance.
         */
        "minCpuPlatform"?: string;
        /**
         * Immutable. The networks attached to the instance.
         */
        "networkInterface"?: Array<Exclude<{
            /**
             * Access configurations, i.e. IPs via which this instance can be accessed via the Internet.
             */
            "accessConfig"?: Array<{
                "natIpRef"?: {
                    /**
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                 * The networking tier used for configuring this instance. One of PREMIUM or STANDARD.
                 */
                "networkTier"?: string;
                /**
                 * The DNS domain name for the public PTR record.
                 */
                "publicPtrDomainName"?: string;
            }>;
            /**
             * An array of alias IP ranges for this network interface.
             */
            "aliasIpRange"?: Array<{
                /**
                 * The IP CIDR range represented by this alias IP range.
                 */
                "ipCidrRange": string;
                /**
                 * The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.
                 */
                "subnetworkRangeName"?: string;
            }>;
            /**
             * The prefix length of the primary internal IPv6 range.
             */
            "internalIpv6PrefixLength"?: number;
            /**
             * An array of IPv6 access configurations for this interface. Currently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig specified, then this instance will have no external IPv6 Internet access.
             */
            "ipv6AccessConfig"?: Array<{
                /**
                 * Immutable. The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. To use a static external IP address, it must be unused and in the same region as the instance's zone. If not specified, Google Cloud will automatically assign an external IPv6 address from the instance's subnetwork.
                 */
                "externalIpv6"?: string;
                /**
                 * Immutable. The prefix length of the external IPv6 range.
                 */
                "externalIpv6PrefixLength"?: string;
                /**
                 * Immutable. The name of this access configuration. In ipv6AccessConfigs, the recommended name is External IPv6.
                 */
                "name"?: string;
                /**
                 * The service-level to be provided for IPv6 traffic when the subnet has an external subnet. Only PREMIUM tier is valid for IPv6.
                 */
                "networkTier": string;
                /**
                 * The domain name to be used when creating DNSv6 records for the external IPv6 ranges.
                 */
                "publicPtrDomainName"?: string;
            }>;
            /**
             * One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet. This field is always inherited from its subnetwork.
             */
            "ipv6AccessType"?: string;
            /**
             * An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.
             */
            "ipv6Address"?: string;
            /**
             * The name of the interface.
             */
            "name"?: string;
            /**
             * DEPRECATED. Although this field is still available, there is limited support. We recommend that you use `spec.networkInterface.networkIpRef` instead.
             */
            "networkIp"?: string;
            "networkIpRef"?: {
                /**
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind": string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external": string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external": string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external": string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace": string;
            } | {
                /**
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            })>);
            "networkRef"?: {
                /**
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
             * Immutable. The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET.
             */
            "nicType"?: string;
            /**
             * Immutable. The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified.
             */
            "queueCount"?: number;
            /**
             * The stack type for this network interface to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used.
             */
            "stackType"?: string;
            /**
             * The project in which the subnetwork belongs.
             */
            "subnetworkProject"?: string;
            "subnetworkRef"?: {
                /**
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
        }, {
            /**
             * Access configurations, i.e. IPs via which this instance can be accessed via the Internet.
             */
            "accessConfig"?: Array<{
                "natIpRef"?: {
                    /**
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                 * The networking tier used for configuring this instance. One of PREMIUM or STANDARD.
                 */
                "networkTier"?: string;
                /**
                 * The DNS domain name for the public PTR record.
                 */
                "publicPtrDomainName"?: string;
            }>;
            /**
             * An array of alias IP ranges for this network interface.
             */
            "aliasIpRange"?: Array<{
                /**
                 * The IP CIDR range represented by this alias IP range.
                 */
                "ipCidrRange": string;
                /**
                 * The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.
                 */
                "subnetworkRangeName"?: string;
            }>;
            /**
             * The prefix length of the primary internal IPv6 range.
             */
            "internalIpv6PrefixLength"?: number;
            /**
             * An array of IPv6 access configurations for this interface. Currently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig specified, then this instance will have no external IPv6 Internet access.
             */
            "ipv6AccessConfig"?: Array<{
                /**
                 * Immutable. The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. To use a static external IP address, it must be unused and in the same region as the instance's zone. If not specified, Google Cloud will automatically assign an external IPv6 address from the instance's subnetwork.
                 */
                "externalIpv6"?: string;
                /**
                 * Immutable. The prefix length of the external IPv6 range.
                 */
                "externalIpv6PrefixLength"?: string;
                /**
                 * Immutable. The name of this access configuration. In ipv6AccessConfigs, the recommended name is External IPv6.
                 */
                "name"?: string;
                /**
                 * The service-level to be provided for IPv6 traffic when the subnet has an external subnet. Only PREMIUM tier is valid for IPv6.
                 */
                "networkTier": string;
                /**
                 * The domain name to be used when creating DNSv6 records for the external IPv6 ranges.
                 */
                "publicPtrDomainName"?: string;
            }>;
            /**
             * One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet. This field is always inherited from its subnetwork.
             */
            "ipv6AccessType"?: string;
            /**
             * An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.
             */
            "ipv6Address"?: string;
            /**
             * The name of the interface.
             */
            "name"?: string;
            /**
             * DEPRECATED. Although this field is still available, there is limited support. We recommend that you use `spec.networkInterface.networkIpRef` instead.
             */
            "networkIp": string;
            "networkIpRef": {
                /**
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind": string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external": string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external": string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external": string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace": string;
            } | {
                /**
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            })>);
            "networkRef"?: {
                /**
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
             * Immutable. The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET.
             */
            "nicType"?: string;
            /**
             * Immutable. The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified.
             */
            "queueCount"?: number;
            /**
             * The stack type for this network interface to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used.
             */
            "stackType"?: string;
            /**
             * The project in which the subnetwork belongs.
             */
            "subnetworkProject"?: string;
            "subnetworkRef"?: {
                /**
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
        }>>;
        /**
         * Immutable. Configures network performance settings for the instance. If not specified, the instance will be created with its default network performance configuration.
         */
        "networkPerformanceConfig"?: {
            /**
             * Immutable. The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT.
             */
            "totalEgressBandwidthTier": string;
        };
        /**
         * Immutable. Stores additional params passed with the request, but not persisted as part of resource payload.
         */
        "params"?: {
            /**
             * Immutable. A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
             */
            "resourceManagerTags"?: {};
        };
        /**
         * Immutable. Specifies the reservations that this instance can consume from.
         */
        "reservationAffinity"?: {
            /**
             * Immutable. Specifies the label selector for the reservation to use.
             */
            "specificReservation"?: {
                /**
                 * Immutable. Corresponds to the label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.
                 */
                "key": string;
                /**
                 * Immutable. Corresponds to the label values of a reservation resource.
                 */
                "values": Array<string>;
            };
            /**
             * Immutable. The type of reservation from which this instance can consume resources.
             */
            "type": string;
        };
        /**
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
        "resourcePolicies"?: Array<{
            /**
             * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
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
        })>)>;
        /**
         * The scheduling strategy being used by the instance.
         */
        "scheduling"?: {
            /**
             * Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user).
             */
            "automaticRestart"?: boolean;
            /**
             * Specifies the action GCE should take when SPOT VM is preempted.
             */
            "instanceTerminationAction"?: string;
            /**
             * Immutable. Specifies the maximum amount of time a Local Ssd Vm should wait while
             *   recovery of the Local Ssd state is attempted. Its value should be in
             *   between 0 and 168 hours with hour granularity and the default value being 1
             *   hour.
             */
            "localSsdRecoveryTimeout"?: {
                /**
                 * Immutable. Span of time that's a fraction of a second at nanosecond
                 * resolution. Durations less than one second are represented
                 * with a 0 seconds field and a positive nanos field. Must
                 * be from 0 to 999,999,999 inclusive.
                 */
                "nanos"?: number;
                /**
                 * Immutable. Span of time at a resolution of a second.
                 * Must be from 0 to 315,576,000,000 inclusive.
                 */
                "seconds": number;
            };
            /**
             * Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC.
             */
            "maintenanceInterval"?: string;
            /**
             * Immutable. The timeout for new network connections to hosts.
             */
            "maxRunDuration"?: {
                /**
                 * Immutable. Span of time that's a fraction of a second at nanosecond
                 * resolution. Durations less than one second are represented
                 * with a 0 seconds field and a positive nanos field. Must
                 * be from 0 to 999,999,999 inclusive.
                 */
                "nanos"?: number;
                /**
                 * Immutable. Span of time at a resolution of a second.
                 * Must be from 0 to 315,576,000,000 inclusive.
                 */
                "seconds": number;
            };
            "minNodeCpus"?: number;
            "nodeAffinities"?: Array<{
                "value"?: {};
            }>;
            /**
             * Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE,.
             */
            "onHostMaintenance"?: string;
            /**
             * Immutable. Whether the instance is preemptible.
             */
            "preemptible"?: boolean;
            /**
             * Immutable. Whether the instance is spot. If this is set as SPOT.
             */
            "provisioningModel"?: string;
        };
        /**
         * Immutable. The scratch disks attached to the instance.
         */
        "scratchDisk"?: Array<{
            /**
             * The disk interface used for attaching this disk. One of SCSI or NVME.
             */
            "interface": string;
            /**
             * Immutable. The size of the disk in gigabytes. One of 375 or 3000.
             */
            "size"?: number;
        }>;
        /**
         * The service account to attach to the instance.
         */
        "serviceAccount"?: {
            /**
             * A list of service scopes.
             */
            "scopes": Array<string>;
            "serviceAccountRef"?: {
                /**
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
         * The shielded vm config being used by the instance.
         */
        "shieldedInstanceConfig"?: {
            /**
             * Whether integrity monitoring is enabled for the instance.
             */
            "enableIntegrityMonitoring"?: boolean;
            /**
             * Whether secure boot is enabled for the instance.
             */
            "enableSecureBoot"?: boolean;
            /**
             * Whether the instance uses vTPM.
             */
            "enableVtpm"?: boolean;
        };
        /**
         * The list of tags attached to the instance.
         */
        "tags"?: Array<string>;
        /**
         * Immutable. The zone of the instance. If self_link is provided, this value is ignored. If neither self_link nor zone are provided, the provider zone is used.
         */
        "zone"?: string;
    } & ({
        /**
         * Controls for advanced machine-related behavior features.
         */
        "advancedMachineFeatures"?: {
            /**
             * Whether to enable nested virtualization or not.
             */
            "enableNestedVirtualization"?: boolean;
            /**
             * The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.
             */
            "threadsPerCore"?: number;
            /**
             * The number of physical cores to expose to an instance. Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance\'s nominal CPU count and the underlying platform\'s SMT width.
             */
            "visibleCoreCount"?: number;
        };
        /**
         * List of disks attached to the instance.
         */
        "attachedDisk"?: Array<{
            /**
             * Name with which the attached disk is accessible under /dev/disk/by-id/.
             */
            "deviceName"?: string;
            /**
             * A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set.
             */
            "diskEncryptionKeyRaw"?: {
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
            /**
             * The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource.
             */
            "diskEncryptionKeySha256"?: string;
            "kmsKeyRef"?: {
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
            /**
             * Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE".
             */
            "mode"?: string;
            "sourceDiskRef": {
                /**
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
         * Immutable. The boot disk for the instance.
         */
        "bootDisk": {
            /**
             * Immutable. Whether the disk will be auto-deleted when the instance is deleted.
             */
            "autoDelete"?: boolean;
            /**
             * Immutable. Name with which attached disk will be accessible under /dev/disk/by-id/.
             */
            "deviceName"?: string;
            /**
             * Immutable. A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set.
             */
            "diskEncryptionKeyRaw"?: {
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
            /**
             * The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource.
             */
            "diskEncryptionKeySha256"?: string;
            /**
             * Immutable. Parameters with which a disk was created alongside the instance.
             */
            "initializeParams"?: {
                /**
                 * Immutable. A set of key/value label pairs assigned to the disk.
                 */
                "labels"?: {};
                /**
                 * Immutable. A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
                 */
                "resourceManagerTags"?: {};
                /**
                 * Immutable. The size of the image in gigabytes.
                 */
                "size"?: number;
                /**
                 * Immutable. The image from which to initialize this disk.
                 */
                "sourceImageRef"?: {
                    /**
                     * Allowed value: The `selfLink` field of a `ComputeImage` resource.
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
                     * Allowed value: The `selfLink` field of a `ComputeImage` resource.
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
                     * Allowed value: The `selfLink` field of a `ComputeImage` resource.
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
                     * Allowed value: The `selfLink` field of a `ComputeImage` resource.
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
                     * Allowed value: The `selfLink` field of a `ComputeImage` resource.
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
                     * Allowed value: The `selfLink` field of a `ComputeImage` resource.
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
                     * Allowed value: The `selfLink` field of a `ComputeImage` resource.
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
                 * Immutable. The Google Compute Engine disk type. Such as pd-standard, pd-ssd or pd-balanced.
                 */
                "type"?: string;
            };
            "kmsKeyRef"?: {
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
            /**
             * Immutable. Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE".
             */
            "mode"?: string;
            /**
             * Immutable. The source disk used to create this disk.
             */
            "sourceDiskRef"?: {
                /**
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
         * Whether sending and receiving of packets with non-matching source or destination IPs is allowed.
         */
        "canIpForward"?: boolean;
        /**
         * Immutable. The Confidential VM config being used by the instance.  on_host_maintenance has to be set to TERMINATE or this will fail to create.
         */
        "confidentialInstanceConfig"?: {
            /**
             * Defines whether the instance should have confidential compute enabled.
             */
            "enableConfidentialCompute": boolean;
        };
        /**
         * Whether deletion protection is enabled on this instance.
         */
        "deletionProtection"?: boolean;
        /**
         * Immutable. A brief description of the resource.
         */
        "description"?: string;
        /**
         * Desired status of the instance. Either "RUNNING" or "TERMINATED".
         */
        "desiredStatus"?: string;
        /**
         * Whether the instance has virtual displays enabled.
         */
        "enableDisplay"?: boolean;
        /**
         * Immutable. List of the type and count of accelerator cards attached to the instance.
         */
        "guestAccelerator"?: Array<{
            /**
             * Immutable. The number of the guest accelerator cards exposed to this instance.
             */
            "count": number;
            /**
             * Immutable. The accelerator type resource exposed to this instance. E.g. nvidia-tesla-k80.
             */
            "type": string;
        }>;
        /**
         * Immutable. A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of labels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]\*[a-z0-9]), concatenated with periods. The entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.
         */
        "hostname"?: string;
        "instanceTemplateRef"?: {
            /**
             * Allowed value: The `selfLink` field of a `ComputeInstanceTemplate` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeInstanceTemplate` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeInstanceTemplate` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeInstanceTemplate` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeInstanceTemplate` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeInstanceTemplate` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeInstanceTemplate` resource.
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
         * The machine type to create.
         */
        "machineType": string;
        "metadata"?: Array<{
            "key": string;
            "value": string;
        }>;
        /**
         * Immutable. Metadata startup scripts made available within the instance.
         */
        "metadataStartupScript"?: string;
        /**
         * The minimum CPU platform specified for the VM instance.
         */
        "minCpuPlatform"?: string;
        /**
         * Immutable. The networks attached to the instance.
         */
        "networkInterface": Array<Exclude<{
            /**
             * Access configurations, i.e. IPs via which this instance can be accessed via the Internet.
             */
            "accessConfig"?: Array<{
                "natIpRef"?: {
                    /**
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                 * The networking tier used for configuring this instance. One of PREMIUM or STANDARD.
                 */
                "networkTier"?: string;
                /**
                 * The DNS domain name for the public PTR record.
                 */
                "publicPtrDomainName"?: string;
            }>;
            /**
             * An array of alias IP ranges for this network interface.
             */
            "aliasIpRange"?: Array<{
                /**
                 * The IP CIDR range represented by this alias IP range.
                 */
                "ipCidrRange": string;
                /**
                 * The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.
                 */
                "subnetworkRangeName"?: string;
            }>;
            /**
             * The prefix length of the primary internal IPv6 range.
             */
            "internalIpv6PrefixLength"?: number;
            /**
             * An array of IPv6 access configurations for this interface. Currently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig specified, then this instance will have no external IPv6 Internet access.
             */
            "ipv6AccessConfig"?: Array<{
                /**
                 * Immutable. The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. To use a static external IP address, it must be unused and in the same region as the instance's zone. If not specified, Google Cloud will automatically assign an external IPv6 address from the instance's subnetwork.
                 */
                "externalIpv6"?: string;
                /**
                 * Immutable. The prefix length of the external IPv6 range.
                 */
                "externalIpv6PrefixLength"?: string;
                /**
                 * Immutable. The name of this access configuration. In ipv6AccessConfigs, the recommended name is External IPv6.
                 */
                "name"?: string;
                /**
                 * The service-level to be provided for IPv6 traffic when the subnet has an external subnet. Only PREMIUM tier is valid for IPv6.
                 */
                "networkTier": string;
                /**
                 * The domain name to be used when creating DNSv6 records for the external IPv6 ranges.
                 */
                "publicPtrDomainName"?: string;
            }>;
            /**
             * One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet. This field is always inherited from its subnetwork.
             */
            "ipv6AccessType"?: string;
            /**
             * An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.
             */
            "ipv6Address"?: string;
            /**
             * The name of the interface.
             */
            "name"?: string;
            /**
             * DEPRECATED. Although this field is still available, there is limited support. We recommend that you use `spec.networkInterface.networkIpRef` instead.
             */
            "networkIp"?: string;
            "networkIpRef"?: {
                /**
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind": string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external": string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external": string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external": string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace": string;
            } | {
                /**
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            })>);
            "networkRef"?: {
                /**
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
             * Immutable. The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET.
             */
            "nicType"?: string;
            /**
             * Immutable. The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified.
             */
            "queueCount"?: number;
            /**
             * The stack type for this network interface to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used.
             */
            "stackType"?: string;
            /**
             * The project in which the subnetwork belongs.
             */
            "subnetworkProject"?: string;
            "subnetworkRef"?: {
                /**
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
        }, {
            /**
             * Access configurations, i.e. IPs via which this instance can be accessed via the Internet.
             */
            "accessConfig"?: Array<{
                "natIpRef"?: {
                    /**
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                 * The networking tier used for configuring this instance. One of PREMIUM or STANDARD.
                 */
                "networkTier"?: string;
                /**
                 * The DNS domain name for the public PTR record.
                 */
                "publicPtrDomainName"?: string;
            }>;
            /**
             * An array of alias IP ranges for this network interface.
             */
            "aliasIpRange"?: Array<{
                /**
                 * The IP CIDR range represented by this alias IP range.
                 */
                "ipCidrRange": string;
                /**
                 * The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.
                 */
                "subnetworkRangeName"?: string;
            }>;
            /**
             * The prefix length of the primary internal IPv6 range.
             */
            "internalIpv6PrefixLength"?: number;
            /**
             * An array of IPv6 access configurations for this interface. Currently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig specified, then this instance will have no external IPv6 Internet access.
             */
            "ipv6AccessConfig"?: Array<{
                /**
                 * Immutable. The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. To use a static external IP address, it must be unused and in the same region as the instance's zone. If not specified, Google Cloud will automatically assign an external IPv6 address from the instance's subnetwork.
                 */
                "externalIpv6"?: string;
                /**
                 * Immutable. The prefix length of the external IPv6 range.
                 */
                "externalIpv6PrefixLength"?: string;
                /**
                 * Immutable. The name of this access configuration. In ipv6AccessConfigs, the recommended name is External IPv6.
                 */
                "name"?: string;
                /**
                 * The service-level to be provided for IPv6 traffic when the subnet has an external subnet. Only PREMIUM tier is valid for IPv6.
                 */
                "networkTier": string;
                /**
                 * The domain name to be used when creating DNSv6 records for the external IPv6 ranges.
                 */
                "publicPtrDomainName"?: string;
            }>;
            /**
             * One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet. This field is always inherited from its subnetwork.
             */
            "ipv6AccessType"?: string;
            /**
             * An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.
             */
            "ipv6Address"?: string;
            /**
             * The name of the interface.
             */
            "name"?: string;
            /**
             * DEPRECATED. Although this field is still available, there is limited support. We recommend that you use `spec.networkInterface.networkIpRef` instead.
             */
            "networkIp": string;
            "networkIpRef": {
                /**
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind": string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external": string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external": string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external": string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace": string;
            } | {
                /**
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            })>);
            "networkRef"?: {
                /**
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
             * Immutable. The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET.
             */
            "nicType"?: string;
            /**
             * Immutable. The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified.
             */
            "queueCount"?: number;
            /**
             * The stack type for this network interface to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used.
             */
            "stackType"?: string;
            /**
             * The project in which the subnetwork belongs.
             */
            "subnetworkProject"?: string;
            "subnetworkRef"?: {
                /**
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
        }>>;
        /**
         * Immutable. Configures network performance settings for the instance. If not specified, the instance will be created with its default network performance configuration.
         */
        "networkPerformanceConfig"?: {
            /**
             * Immutable. The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT.
             */
            "totalEgressBandwidthTier": string;
        };
        /**
         * Immutable. Stores additional params passed with the request, but not persisted as part of resource payload.
         */
        "params"?: {
            /**
             * Immutable. A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
             */
            "resourceManagerTags"?: {};
        };
        /**
         * Immutable. Specifies the reservations that this instance can consume from.
         */
        "reservationAffinity"?: {
            /**
             * Immutable. Specifies the label selector for the reservation to use.
             */
            "specificReservation"?: {
                /**
                 * Immutable. Corresponds to the label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.
                 */
                "key": string;
                /**
                 * Immutable. Corresponds to the label values of a reservation resource.
                 */
                "values": Array<string>;
            };
            /**
             * Immutable. The type of reservation from which this instance can consume resources.
             */
            "type": string;
        };
        /**
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
        "resourcePolicies"?: Array<{
            /**
             * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
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
        })>)>;
        /**
         * The scheduling strategy being used by the instance.
         */
        "scheduling"?: {
            /**
             * Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user).
             */
            "automaticRestart"?: boolean;
            /**
             * Specifies the action GCE should take when SPOT VM is preempted.
             */
            "instanceTerminationAction"?: string;
            /**
             * Immutable. Specifies the maximum amount of time a Local Ssd Vm should wait while
             *   recovery of the Local Ssd state is attempted. Its value should be in
             *   between 0 and 168 hours with hour granularity and the default value being 1
             *   hour.
             */
            "localSsdRecoveryTimeout"?: {
                /**
                 * Immutable. Span of time that's a fraction of a second at nanosecond
                 * resolution. Durations less than one second are represented
                 * with a 0 seconds field and a positive nanos field. Must
                 * be from 0 to 999,999,999 inclusive.
                 */
                "nanos"?: number;
                /**
                 * Immutable. Span of time at a resolution of a second.
                 * Must be from 0 to 315,576,000,000 inclusive.
                 */
                "seconds": number;
            };
            /**
             * Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC.
             */
            "maintenanceInterval"?: string;
            /**
             * Immutable. The timeout for new network connections to hosts.
             */
            "maxRunDuration"?: {
                /**
                 * Immutable. Span of time that's a fraction of a second at nanosecond
                 * resolution. Durations less than one second are represented
                 * with a 0 seconds field and a positive nanos field. Must
                 * be from 0 to 999,999,999 inclusive.
                 */
                "nanos"?: number;
                /**
                 * Immutable. Span of time at a resolution of a second.
                 * Must be from 0 to 315,576,000,000 inclusive.
                 */
                "seconds": number;
            };
            "minNodeCpus"?: number;
            "nodeAffinities"?: Array<{
                "value"?: {};
            }>;
            /**
             * Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE,.
             */
            "onHostMaintenance"?: string;
            /**
             * Immutable. Whether the instance is preemptible.
             */
            "preemptible"?: boolean;
            /**
             * Immutable. Whether the instance is spot. If this is set as SPOT.
             */
            "provisioningModel"?: string;
        };
        /**
         * Immutable. The scratch disks attached to the instance.
         */
        "scratchDisk"?: Array<{
            /**
             * The disk interface used for attaching this disk. One of SCSI or NVME.
             */
            "interface": string;
            /**
             * Immutable. The size of the disk in gigabytes. One of 375 or 3000.
             */
            "size"?: number;
        }>;
        /**
         * The service account to attach to the instance.
         */
        "serviceAccount"?: {
            /**
             * A list of service scopes.
             */
            "scopes": Array<string>;
            "serviceAccountRef"?: {
                /**
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
         * The shielded vm config being used by the instance.
         */
        "shieldedInstanceConfig"?: {
            /**
             * Whether integrity monitoring is enabled for the instance.
             */
            "enableIntegrityMonitoring"?: boolean;
            /**
             * Whether secure boot is enabled for the instance.
             */
            "enableSecureBoot"?: boolean;
            /**
             * Whether the instance uses vTPM.
             */
            "enableVtpm"?: boolean;
        };
        /**
         * The list of tags attached to the instance.
         */
        "tags"?: Array<string>;
        /**
         * Immutable. The zone of the instance. If self_link is provided, this value is ignored. If neither self_link nor zone are provided, the provider zone is used.
         */
        "zone": string;
    } | {
        /**
         * Controls for advanced machine-related behavior features.
         */
        "advancedMachineFeatures"?: {
            /**
             * Whether to enable nested virtualization or not.
             */
            "enableNestedVirtualization"?: boolean;
            /**
             * The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.
             */
            "threadsPerCore"?: number;
            /**
             * The number of physical cores to expose to an instance. Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance\'s nominal CPU count and the underlying platform\'s SMT width.
             */
            "visibleCoreCount"?: number;
        };
        /**
         * List of disks attached to the instance.
         */
        "attachedDisk"?: Array<{
            /**
             * Name with which the attached disk is accessible under /dev/disk/by-id/.
             */
            "deviceName"?: string;
            /**
             * A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set.
             */
            "diskEncryptionKeyRaw"?: {
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
            /**
             * The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource.
             */
            "diskEncryptionKeySha256"?: string;
            "kmsKeyRef"?: {
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
            /**
             * Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE".
             */
            "mode"?: string;
            "sourceDiskRef": {
                /**
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
         * Immutable. The boot disk for the instance.
         */
        "bootDisk"?: {
            /**
             * Immutable. Whether the disk will be auto-deleted when the instance is deleted.
             */
            "autoDelete"?: boolean;
            /**
             * Immutable. Name with which attached disk will be accessible under /dev/disk/by-id/.
             */
            "deviceName"?: string;
            /**
             * Immutable. A 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to encrypt this disk. Only one of kms_key_self_link and disk_encryption_key_raw may be set.
             */
            "diskEncryptionKeyRaw"?: {
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
            /**
             * The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource.
             */
            "diskEncryptionKeySha256"?: string;
            /**
             * Immutable. Parameters with which a disk was created alongside the instance.
             */
            "initializeParams"?: {
                /**
                 * Immutable. A set of key/value label pairs assigned to the disk.
                 */
                "labels"?: {};
                /**
                 * Immutable. A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
                 */
                "resourceManagerTags"?: {};
                /**
                 * Immutable. The size of the image in gigabytes.
                 */
                "size"?: number;
                /**
                 * Immutable. The image from which to initialize this disk.
                 */
                "sourceImageRef"?: {
                    /**
                     * Allowed value: The `selfLink` field of a `ComputeImage` resource.
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
                     * Allowed value: The `selfLink` field of a `ComputeImage` resource.
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
                     * Allowed value: The `selfLink` field of a `ComputeImage` resource.
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
                     * Allowed value: The `selfLink` field of a `ComputeImage` resource.
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
                     * Allowed value: The `selfLink` field of a `ComputeImage` resource.
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
                     * Allowed value: The `selfLink` field of a `ComputeImage` resource.
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
                     * Allowed value: The `selfLink` field of a `ComputeImage` resource.
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
                 * Immutable. The Google Compute Engine disk type. Such as pd-standard, pd-ssd or pd-balanced.
                 */
                "type"?: string;
            };
            "kmsKeyRef"?: {
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
            /**
             * Immutable. Read/write mode for the disk. One of "READ_ONLY" or "READ_WRITE".
             */
            "mode"?: string;
            /**
             * Immutable. The source disk used to create this disk.
             */
            "sourceDiskRef"?: {
                /**
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeDisk` resource.
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
         * Whether sending and receiving of packets with non-matching source or destination IPs is allowed.
         */
        "canIpForward"?: boolean;
        /**
         * Immutable. The Confidential VM config being used by the instance.  on_host_maintenance has to be set to TERMINATE or this will fail to create.
         */
        "confidentialInstanceConfig"?: {
            /**
             * Defines whether the instance should have confidential compute enabled.
             */
            "enableConfidentialCompute": boolean;
        };
        /**
         * Whether deletion protection is enabled on this instance.
         */
        "deletionProtection"?: boolean;
        /**
         * Immutable. A brief description of the resource.
         */
        "description"?: string;
        /**
         * Desired status of the instance. Either "RUNNING" or "TERMINATED".
         */
        "desiredStatus"?: string;
        /**
         * Whether the instance has virtual displays enabled.
         */
        "enableDisplay"?: boolean;
        /**
         * Immutable. List of the type and count of accelerator cards attached to the instance.
         */
        "guestAccelerator"?: Array<{
            /**
             * Immutable. The number of the guest accelerator cards exposed to this instance.
             */
            "count": number;
            /**
             * Immutable. The accelerator type resource exposed to this instance. E.g. nvidia-tesla-k80.
             */
            "type": string;
        }>;
        /**
         * Immutable. A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of labels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]\*[a-z0-9]), concatenated with periods. The entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.
         */
        "hostname"?: string;
        "instanceTemplateRef": {
            /**
             * Allowed value: The `selfLink` field of a `ComputeInstanceTemplate` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeInstanceTemplate` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeInstanceTemplate` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeInstanceTemplate` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeInstanceTemplate` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeInstanceTemplate` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeInstanceTemplate` resource.
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
         * The machine type to create.
         */
        "machineType"?: string;
        "metadata"?: Array<{
            "key": string;
            "value": string;
        }>;
        /**
         * Immutable. Metadata startup scripts made available within the instance.
         */
        "metadataStartupScript"?: string;
        /**
         * The minimum CPU platform specified for the VM instance.
         */
        "minCpuPlatform"?: string;
        /**
         * Immutable. The networks attached to the instance.
         */
        "networkInterface"?: Array<Exclude<{
            /**
             * Access configurations, i.e. IPs via which this instance can be accessed via the Internet.
             */
            "accessConfig"?: Array<{
                "natIpRef"?: {
                    /**
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                 * The networking tier used for configuring this instance. One of PREMIUM or STANDARD.
                 */
                "networkTier"?: string;
                /**
                 * The DNS domain name for the public PTR record.
                 */
                "publicPtrDomainName"?: string;
            }>;
            /**
             * An array of alias IP ranges for this network interface.
             */
            "aliasIpRange"?: Array<{
                /**
                 * The IP CIDR range represented by this alias IP range.
                 */
                "ipCidrRange": string;
                /**
                 * The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.
                 */
                "subnetworkRangeName"?: string;
            }>;
            /**
             * The prefix length of the primary internal IPv6 range.
             */
            "internalIpv6PrefixLength"?: number;
            /**
             * An array of IPv6 access configurations for this interface. Currently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig specified, then this instance will have no external IPv6 Internet access.
             */
            "ipv6AccessConfig"?: Array<{
                /**
                 * Immutable. The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. To use a static external IP address, it must be unused and in the same region as the instance's zone. If not specified, Google Cloud will automatically assign an external IPv6 address from the instance's subnetwork.
                 */
                "externalIpv6"?: string;
                /**
                 * Immutable. The prefix length of the external IPv6 range.
                 */
                "externalIpv6PrefixLength"?: string;
                /**
                 * Immutable. The name of this access configuration. In ipv6AccessConfigs, the recommended name is External IPv6.
                 */
                "name"?: string;
                /**
                 * The service-level to be provided for IPv6 traffic when the subnet has an external subnet. Only PREMIUM tier is valid for IPv6.
                 */
                "networkTier": string;
                /**
                 * The domain name to be used when creating DNSv6 records for the external IPv6 ranges.
                 */
                "publicPtrDomainName"?: string;
            }>;
            /**
             * One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet. This field is always inherited from its subnetwork.
             */
            "ipv6AccessType"?: string;
            /**
             * An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.
             */
            "ipv6Address"?: string;
            /**
             * The name of the interface.
             */
            "name"?: string;
            /**
             * DEPRECATED. Although this field is still available, there is limited support. We recommend that you use `spec.networkInterface.networkIpRef` instead.
             */
            "networkIp"?: string;
            "networkIpRef"?: {
                /**
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind": string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external": string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external": string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external": string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace": string;
            } | {
                /**
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            })>);
            "networkRef"?: {
                /**
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
             * Immutable. The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET.
             */
            "nicType"?: string;
            /**
             * Immutable. The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified.
             */
            "queueCount"?: number;
            /**
             * The stack type for this network interface to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used.
             */
            "stackType"?: string;
            /**
             * The project in which the subnetwork belongs.
             */
            "subnetworkProject"?: string;
            "subnetworkRef"?: {
                /**
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
        }, {
            /**
             * Access configurations, i.e. IPs via which this instance can be accessed via the Internet.
             */
            "accessConfig"?: Array<{
                "natIpRef"?: {
                    /**
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                     * Allowed value: The `address` field of a `ComputeAddress` resource.
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
                 * The networking tier used for configuring this instance. One of PREMIUM or STANDARD.
                 */
                "networkTier"?: string;
                /**
                 * The DNS domain name for the public PTR record.
                 */
                "publicPtrDomainName"?: string;
            }>;
            /**
             * An array of alias IP ranges for this network interface.
             */
            "aliasIpRange"?: Array<{
                /**
                 * The IP CIDR range represented by this alias IP range.
                 */
                "ipCidrRange": string;
                /**
                 * The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.
                 */
                "subnetworkRangeName"?: string;
            }>;
            /**
             * The prefix length of the primary internal IPv6 range.
             */
            "internalIpv6PrefixLength"?: number;
            /**
             * An array of IPv6 access configurations for this interface. Currently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig specified, then this instance will have no external IPv6 Internet access.
             */
            "ipv6AccessConfig"?: Array<{
                /**
                 * Immutable. The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. To use a static external IP address, it must be unused and in the same region as the instance's zone. If not specified, Google Cloud will automatically assign an external IPv6 address from the instance's subnetwork.
                 */
                "externalIpv6"?: string;
                /**
                 * Immutable. The prefix length of the external IPv6 range.
                 */
                "externalIpv6PrefixLength"?: string;
                /**
                 * Immutable. The name of this access configuration. In ipv6AccessConfigs, the recommended name is External IPv6.
                 */
                "name"?: string;
                /**
                 * The service-level to be provided for IPv6 traffic when the subnet has an external subnet. Only PREMIUM tier is valid for IPv6.
                 */
                "networkTier": string;
                /**
                 * The domain name to be used when creating DNSv6 records for the external IPv6 ranges.
                 */
                "publicPtrDomainName"?: string;
            }>;
            /**
             * One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet. This field is always inherited from its subnetwork.
             */
            "ipv6AccessType"?: string;
            /**
             * An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.
             */
            "ipv6Address"?: string;
            /**
             * The name of the interface.
             */
            "name"?: string;
            /**
             * DEPRECATED. Although this field is still available, there is limited support. We recommend that you use `spec.networkInterface.networkIpRef` instead.
             */
            "networkIp": string;
            "networkIpRef": {
                /**
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind": string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external": string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external": string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external": string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
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
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind"?: string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace": string;
            } | {
                /**
                 * Allowed value: The `address` field of a `ComputeAddress` resource.
                 */
                "external"?: string;
                /**
                 * Kind of the referent. Allowed values: ComputeAddress
                 */
                "kind": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            })>);
            "networkRef"?: {
                /**
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
             * Immutable. The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET.
             */
            "nicType"?: string;
            /**
             * Immutable. The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified.
             */
            "queueCount"?: number;
            /**
             * The stack type for this network interface to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used.
             */
            "stackType"?: string;
            /**
             * The project in which the subnetwork belongs.
             */
            "subnetworkProject"?: string;
            "subnetworkRef"?: {
                /**
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
        }>>;
        /**
         * Immutable. Configures network performance settings for the instance. If not specified, the instance will be created with its default network performance configuration.
         */
        "networkPerformanceConfig"?: {
            /**
             * Immutable. The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT.
             */
            "totalEgressBandwidthTier": string;
        };
        /**
         * Immutable. Stores additional params passed with the request, but not persisted as part of resource payload.
         */
        "params"?: {
            /**
             * Immutable. A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
             */
            "resourceManagerTags"?: {};
        };
        /**
         * Immutable. Specifies the reservations that this instance can consume from.
         */
        "reservationAffinity"?: {
            /**
             * Immutable. Specifies the label selector for the reservation to use.
             */
            "specificReservation"?: {
                /**
                 * Immutable. Corresponds to the label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.
                 */
                "key": string;
                /**
                 * Immutable. Corresponds to the label values of a reservation resource.
                 */
                "values": Array<string>;
            };
            /**
             * Immutable. The type of reservation from which this instance can consume resources.
             */
            "type": string;
        };
        /**
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
        "resourcePolicies"?: Array<{
            /**
             * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
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
        })>)>;
        /**
         * The scheduling strategy being used by the instance.
         */
        "scheduling"?: {
            /**
             * Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user).
             */
            "automaticRestart"?: boolean;
            /**
             * Specifies the action GCE should take when SPOT VM is preempted.
             */
            "instanceTerminationAction"?: string;
            /**
             * Immutable. Specifies the maximum amount of time a Local Ssd Vm should wait while
             *   recovery of the Local Ssd state is attempted. Its value should be in
             *   between 0 and 168 hours with hour granularity and the default value being 1
             *   hour.
             */
            "localSsdRecoveryTimeout"?: {
                /**
                 * Immutable. Span of time that's a fraction of a second at nanosecond
                 * resolution. Durations less than one second are represented
                 * with a 0 seconds field and a positive nanos field. Must
                 * be from 0 to 999,999,999 inclusive.
                 */
                "nanos"?: number;
                /**
                 * Immutable. Span of time at a resolution of a second.
                 * Must be from 0 to 315,576,000,000 inclusive.
                 */
                "seconds": number;
            };
            /**
             * Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC.
             */
            "maintenanceInterval"?: string;
            /**
             * Immutable. The timeout for new network connections to hosts.
             */
            "maxRunDuration"?: {
                /**
                 * Immutable. Span of time that's a fraction of a second at nanosecond
                 * resolution. Durations less than one second are represented
                 * with a 0 seconds field and a positive nanos field. Must
                 * be from 0 to 999,999,999 inclusive.
                 */
                "nanos"?: number;
                /**
                 * Immutable. Span of time at a resolution of a second.
                 * Must be from 0 to 315,576,000,000 inclusive.
                 */
                "seconds": number;
            };
            "minNodeCpus"?: number;
            "nodeAffinities"?: Array<{
                "value"?: {};
            }>;
            /**
             * Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE,.
             */
            "onHostMaintenance"?: string;
            /**
             * Immutable. Whether the instance is preemptible.
             */
            "preemptible"?: boolean;
            /**
             * Immutable. Whether the instance is spot. If this is set as SPOT.
             */
            "provisioningModel"?: string;
        };
        /**
         * Immutable. The scratch disks attached to the instance.
         */
        "scratchDisk"?: Array<{
            /**
             * The disk interface used for attaching this disk. One of SCSI or NVME.
             */
            "interface": string;
            /**
             * Immutable. The size of the disk in gigabytes. One of 375 or 3000.
             */
            "size"?: number;
        }>;
        /**
         * The service account to attach to the instance.
         */
        "serviceAccount"?: {
            /**
             * A list of service scopes.
             */
            "scopes": Array<string>;
            "serviceAccountRef"?: {
                /**
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
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
         * The shielded vm config being used by the instance.
         */
        "shieldedInstanceConfig"?: {
            /**
             * Whether integrity monitoring is enabled for the instance.
             */
            "enableIntegrityMonitoring"?: boolean;
            /**
             * Whether secure boot is enabled for the instance.
             */
            "enableSecureBoot"?: boolean;
            /**
             * Whether the instance uses vTPM.
             */
            "enableVtpm"?: boolean;
        };
        /**
         * The list of tags attached to the instance.
         */
        "tags"?: Array<string>;
        /**
         * Immutable. The zone of the instance. If self_link is provided, this value is ignored. If neither self_link nor zone are provided, the provider zone is used.
         */
        "zone": string;
    });
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
         * The CPU platform used by this instance.
         */
        "cpuPlatform"?: string;
        /**
         *
         * 					Current status of the instance.
         * 					This could be one of the following values: PROVISIONING, STAGING, RUNNING, STOPPING, SUSPENDING, SUSPENDED, REPAIRING, and TERMINATED.
         * 					For more information about the status of the instance, see [Instance life cycle](https://cloud.google.com/compute/docs/instances/instance-life-cycle).
         */
        "currentStatus"?: string;
        /**
         * The server-assigned unique identifier of this instance.
         */
        "instanceId"?: string;
        /**
         * The unique fingerprint of the labels.
         */
        "labelFingerprint"?: string;
        /**
         * The unique fingerprint of the metadata.
         */
        "metadataFingerprint"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        /**
         * The URI of the created resource.
         */
        "selfLink"?: string;
        /**
         * The unique fingerprint of the tags.
         */
        "tagsFingerprint"?: string;
    };
}
export declare class ComputeInstance extends Model<IComputeInstance> implements IComputeInstance {
    "apiVersion": IComputeInstance["apiVersion"];
    "kind": IComputeInstance["kind"];
    "metadata"?: IComputeInstance["metadata"];
    "spec": IComputeInstance["spec"];
    "status"?: IComputeInstance["status"];
    static apiVersion: IComputeInstance["apiVersion"];
    static kind: IComputeInstance["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IComputeInstance>;
    constructor(data?: ModelData<IComputeInstance>);
}
