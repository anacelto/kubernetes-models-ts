import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IComputeBackendBucketSignedURLKey {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "compute.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "ComputeBackendBucketSignedURLKey";
    "metadata"?: IObjectMeta;
    "spec": {
        "backendBucketRef": {
            /**
             * Allowed value: The `name` field of a `ComputeBackendBucket` resource.
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
             * Allowed value: The `name` field of a `ComputeBackendBucket` resource.
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
             * Allowed value: The `name` field of a `ComputeBackendBucket` resource.
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
             * Allowed value: The `name` field of a `ComputeBackendBucket` resource.
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
             * Allowed value: The `name` field of a `ComputeBackendBucket` resource.
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
             * Allowed value: The `name` field of a `ComputeBackendBucket` resource.
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
             * Allowed value: The `name` field of a `ComputeBackendBucket` resource.
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
         * Immutable. 128-bit key value used for signing the URL. The key value must be a
         * valid RFC 4648 Section 5 base64url encoded string.
         */
        "keyValue": {
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
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
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
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
    };
}
export declare class ComputeBackendBucketSignedURLKey extends Model<IComputeBackendBucketSignedURLKey> implements IComputeBackendBucketSignedURLKey {
    "apiVersion": IComputeBackendBucketSignedURLKey["apiVersion"];
    "kind": IComputeBackendBucketSignedURLKey["kind"];
    "metadata"?: IComputeBackendBucketSignedURLKey["metadata"];
    "spec": IComputeBackendBucketSignedURLKey["spec"];
    "status"?: IComputeBackendBucketSignedURLKey["status"];
    static apiVersion: IComputeBackendBucketSignedURLKey["apiVersion"];
    static kind: IComputeBackendBucketSignedURLKey["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IComputeBackendBucketSignedURLKey>;
    constructor(data?: ModelData<IComputeBackendBucketSignedURLKey>);
}
