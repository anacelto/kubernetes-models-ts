import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IApigeeAddonsConfig {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "apigee.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "ApigeeAddonsConfig";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Addon configurations of the Apigee organization.
         */
        "addonsConfig"?: {
            /**
             * Configuration for the Monetization add-on.
             */
            "advancedApiOpsConfig"?: {
                /**
                 * Flag that specifies whether the Advanced API Ops add-on is enabled.
                 */
                "enabled"?: boolean;
            };
            /**
             * Configuration for the Monetization add-on.
             */
            "apiSecurityConfig"?: {
                /**
                 * Flag that specifies whether the Advanced API Ops add-on is enabled.
                 */
                "enabled"?: boolean;
                /**
                 * Flag that specifies whether the Advanced API Ops add-on is enabled.
                 */
                "expiresAt"?: string;
            };
            /**
             * Configuration for the Monetization add-on.
             */
            "connectorsPlatformConfig"?: {
                /**
                 * Flag that specifies whether the Advanced API Ops add-on is enabled.
                 */
                "enabled"?: boolean;
                /**
                 * Flag that specifies whether the Advanced API Ops add-on is enabled.
                 */
                "expiresAt"?: string;
            };
            /**
             * Configuration for the Monetization add-on.
             */
            "integrationConfig"?: {
                /**
                 * Flag that specifies whether the Advanced API Ops add-on is enabled.
                 */
                "enabled"?: boolean;
            };
            /**
             * Configuration for the Monetization add-on.
             */
            "monetizationConfig"?: {
                /**
                 * Flag that specifies whether the Advanced API Ops add-on is enabled.
                 */
                "enabled"?: boolean;
            };
        };
        /**
         * Immutable. Name of the Apigee organization.
         */
        "org": string;
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
export declare class ApigeeAddonsConfig extends Model<IApigeeAddonsConfig> implements IApigeeAddonsConfig {
    "apiVersion": IApigeeAddonsConfig["apiVersion"];
    "kind": IApigeeAddonsConfig["kind"];
    "metadata"?: IApigeeAddonsConfig["metadata"];
    "spec": IApigeeAddonsConfig["spec"];
    "status"?: IApigeeAddonsConfig["status"];
    static apiVersion: IApigeeAddonsConfig["apiVersion"];
    static kind: IApigeeAddonsConfig["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IApigeeAddonsConfig>;
    constructor(data?: ModelData<IApigeeAddonsConfig>);
}
