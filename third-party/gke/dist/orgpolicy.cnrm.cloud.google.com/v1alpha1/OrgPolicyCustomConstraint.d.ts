import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IOrgPolicyCustomConstraint {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "orgpolicy.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "OrgPolicyCustomConstraint";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * The action to take if the condition is met. Possible values: ["ALLOW", "DENY"].
         */
        "actionType": string;
        /**
         * A CEL condition that refers to a supported service resource, for example 'resource.management.autoUpgrade == false'. For details about CEL usage, see [Common Expression Language](https://cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language).
         */
        "condition": string;
        /**
         * A human-friendly description of the constraint to display as an error message when the policy is violated.
         */
        "description"?: string;
        /**
         * A human-friendly name for the constraint.
         */
        "displayName"?: string;
        /**
         * A list of RESTful methods for which to enforce the constraint. Can be 'CREATE', 'UPDATE', or both. Not all Google Cloud services support both methods. To see supported methods for each service, find the service in [Supported services](https://cloud.google.com/resource-manager/docs/organization-policy/custom-constraint-supported-services).
         */
        "methodTypes": Array<string>;
        /**
         * Immutable. The parent of the resource, an organization. Format should be 'organizations/{organization_id}'.
         */
        "parent": string;
        /**
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
        /**
         * Immutable. Immutable. The fully qualified name of the Google Cloud REST resource containing the object and field you want to restrict. For example, 'container.googleapis.com/NodePool'.
         */
        "resourceTypes": Array<string>;
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
        /**
         * Output only. The timestamp representing when the constraint was last updated.
         */
        "updateTime"?: string;
    };
}
export declare class OrgPolicyCustomConstraint extends Model<IOrgPolicyCustomConstraint> implements IOrgPolicyCustomConstraint {
    "apiVersion": IOrgPolicyCustomConstraint["apiVersion"];
    "kind": IOrgPolicyCustomConstraint["kind"];
    "metadata"?: IOrgPolicyCustomConstraint["metadata"];
    "spec": IOrgPolicyCustomConstraint["spec"];
    "status"?: IOrgPolicyCustomConstraint["status"];
    static apiVersion: IOrgPolicyCustomConstraint["apiVersion"];
    static kind: IOrgPolicyCustomConstraint["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IOrgPolicyCustomConstraint>;
    constructor(data?: ModelData<IOrgPolicyCustomConstraint>);
}
