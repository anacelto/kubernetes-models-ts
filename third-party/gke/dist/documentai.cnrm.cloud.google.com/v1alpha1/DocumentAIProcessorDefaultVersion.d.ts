import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IDocumentAIProcessorDefaultVersion {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "documentai.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "DocumentAIProcessorDefaultVersion";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Immutable. Optional. The processor of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
        /**
         * Immutable. The version to set. Using 'stable' or 'rc' will cause the API to return the latest version in that release channel.
         * Apply 'lifecycle.ignore_changes' to the 'version' field to suppress this diff.
         */
        "version": string;
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
export declare class DocumentAIProcessorDefaultVersion extends Model<IDocumentAIProcessorDefaultVersion> implements IDocumentAIProcessorDefaultVersion {
    "apiVersion": IDocumentAIProcessorDefaultVersion["apiVersion"];
    "kind": IDocumentAIProcessorDefaultVersion["kind"];
    "metadata"?: IDocumentAIProcessorDefaultVersion["metadata"];
    "spec": IDocumentAIProcessorDefaultVersion["spec"];
    "status"?: IDocumentAIProcessorDefaultVersion["status"];
    static apiVersion: IDocumentAIProcessorDefaultVersion["apiVersion"];
    static kind: IDocumentAIProcessorDefaultVersion["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IDocumentAIProcessorDefaultVersion>;
    constructor(data?: ModelData<IDocumentAIProcessorDefaultVersion>);
}
