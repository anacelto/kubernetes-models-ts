import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IVertexAIFeaturestoreEntityTypeFeature {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "vertexai.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "VertexAIFeaturestoreEntityTypeFeature";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Description of the feature.
         */
        "description"?: string;
        /**
         * Immutable. The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entitytype}.
         */
        "entitytype": string;
        /**
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
        /**
         * Immutable. Type of Feature value. Immutable. https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featurestores.entityTypes.features#ValueType.
         */
        "valueType": string;
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
         * The timestamp of when the entity type was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
         */
        "createTime"?: string;
        /**
         * Used to perform consistent read-modify-write updates.
         */
        "etag"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        /**
         * The region of the feature.
         */
        "region"?: string;
        /**
         * The timestamp when the entity type was most recently updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
         */
        "updateTime"?: string;
    };
}
export declare class VertexAIFeaturestoreEntityTypeFeature extends Model<IVertexAIFeaturestoreEntityTypeFeature> implements IVertexAIFeaturestoreEntityTypeFeature {
    "apiVersion": IVertexAIFeaturestoreEntityTypeFeature["apiVersion"];
    "kind": IVertexAIFeaturestoreEntityTypeFeature["kind"];
    "metadata"?: IVertexAIFeaturestoreEntityTypeFeature["metadata"];
    "spec": IVertexAIFeaturestoreEntityTypeFeature["spec"];
    "status"?: IVertexAIFeaturestoreEntityTypeFeature["status"];
    static apiVersion: IVertexAIFeaturestoreEntityTypeFeature["apiVersion"];
    static kind: IVertexAIFeaturestoreEntityTypeFeature["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IVertexAIFeaturestoreEntityTypeFeature>;
    constructor(data?: ModelData<IVertexAIFeaturestoreEntityTypeFeature>);
}
