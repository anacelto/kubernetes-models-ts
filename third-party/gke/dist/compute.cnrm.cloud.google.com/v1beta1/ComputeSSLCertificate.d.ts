import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IComputeSSLCertificate {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "compute.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "ComputeSSLCertificate";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Immutable. The certificate in PEM format.
         * The certificate chain must be no greater than 5 certs long.
         * The chain must include at least one intermediate cert.
         */
        "certificate": {
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
         * Immutable. An optional description of this resource.
         */
        "description"?: string;
        /**
         * Location represents the geographical location of the ComputeSSLCertificate. Specify a region name or "global" for global resources. Reference: GCP definition of regions/zones (https://cloud.google.com/compute/docs/regions-zones/)
         */
        "location": string;
        /**
         * Immutable. The write-only private key in PEM format.
         */
        "privateKey": {
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
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
    };
    "status"?: {
        /**
         * The unique identifier for the resource.
         */
        "certificateId"?: number;
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
         * Creation timestamp in RFC3339 text format.
         */
        "creationTimestamp"?: string;
        /**
         * Expire time of the certificate in RFC3339 text format.
         */
        "expireTime"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        "selfLink"?: string;
    };
}
export declare class ComputeSSLCertificate extends Model<IComputeSSLCertificate> implements IComputeSSLCertificate {
    "apiVersion": IComputeSSLCertificate["apiVersion"];
    "kind": IComputeSSLCertificate["kind"];
    "metadata"?: IComputeSSLCertificate["metadata"];
    "spec": IComputeSSLCertificate["spec"];
    "status"?: IComputeSSLCertificate["status"];
    static apiVersion: IComputeSSLCertificate["apiVersion"];
    static kind: IComputeSSLCertificate["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IComputeSSLCertificate>;
    constructor(data?: ModelData<IComputeSSLCertificate>);
}
