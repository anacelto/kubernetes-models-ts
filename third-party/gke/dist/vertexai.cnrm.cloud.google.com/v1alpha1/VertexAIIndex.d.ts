import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IVertexAIIndex {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "vertexai.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "VertexAIIndex";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * The description of the Index.
         */
        "description"?: string;
        /**
         * The display name of the Index. The name can be up to 128 characters long and can consist of any UTF-8 characters.
         */
        "displayName": string;
        /**
         * Immutable. The update method to use with this Index. The value must be the followings. If not set, BATCH_UPDATE will be used by default.
         * \* BATCH_UPDATE: user can call indexes.patch with files on Cloud Storage of datapoints to update.
         * \* STREAM_UPDATE: user can call indexes.upsertDatapoints/DeleteDatapoints to update the Index and the updates will be applied in corresponding DeployedIndexes in nearly real-time.
         */
        "indexUpdateMethod"?: string;
        /**
         * An additional information about the Index.
         */
        "metadata"?: {
            /**
             * Immutable. The configuration of the Matching Engine Index.
             */
            "config"?: {
                /**
                 * The configuration with regard to the algorithms used for efficient search.
                 */
                "algorithmConfig"?: {
                    /**
                     * Configuration options for using brute force search, which simply implements the
                     * standard linear search in the database for each query.
                     */
                    "bruteForceConfig"?: {};
                    /**
                     * Configuration options for using the tree-AH algorithm (Shallow tree + Asymmetric Hashing).
                     * Please refer to this paper for more details: https://arxiv.org/abs/1908.10396.
                     */
                    "treeAhConfig"?: {
                        /**
                         * Number of embeddings on each leaf node. The default value is 1000 if not set.
                         */
                        "leafNodeEmbeddingCount"?: number;
                        /**
                         * The default percentage of leaf nodes that any query may be searched. Must be in
                         * range 1-100, inclusive. The default value is 10 (means 10%) if not set.
                         */
                        "leafNodesToSearchPercent"?: number;
                    };
                };
                /**
                 * The default number of neighbors to find via approximate search before exact reordering is
                 * performed. Exact reordering is a procedure where results returned by an
                 * approximate search algorithm are reordered via a more expensive distance computation.
                 * Required if tree-AH algorithm is used.
                 */
                "approximateNeighborsCount"?: number;
                /**
                 * The number of dimensions of the input vectors.
                 */
                "dimensions": number;
                /**
                 * The distance measure used in nearest neighbor search. The value must be one of the followings:
                 * \* SQUARED_L2_DISTANCE: Euclidean (L_2) Distance
                 * \* L1_DISTANCE: Manhattan (L_1) Distance
                 * \* COSINE_DISTANCE: Cosine Distance. Defined as 1 - cosine similarity.
                 * \* DOT_PRODUCT_DISTANCE: Dot Product Distance. Defined as a negative of the dot product.
                 */
                "distanceMeasureType"?: string;
                /**
                 * Type of normalization to be carried out on each vector. The value must be one of the followings:
                 * \* UNIT_L2_NORM: Unit L2 normalization type
                 * \* NONE: No normalization type is specified.
                 */
                "featureNormType"?: string;
                /**
                 * Immutable. Index data is split into equal parts to be processed. These are called "shards".
                 * The shard size must be specified when creating an index. The value must be one of the followings:
                 * \* SHARD_SIZE_SMALL: Small (2GB)
                 * \* SHARD_SIZE_MEDIUM: Medium (20GB)
                 * \* SHARD_SIZE_LARGE: Large (50GB).
                 */
                "shardSize"?: string;
            };
            /**
             * Allows inserting, updating  or deleting the contents of the Matching Engine Index.
             * The string must be a valid Cloud Storage directory path. If this
             * field is set when calling IndexService.UpdateIndex, then no other
             * Index field can be also updated as part of the same call.
             * The expected structure and format of the files this URI points to is
             * described at https://cloud.google.com/vertex-ai/docs/matching-engine/using-matching-engine#input-data-format.
             */
            "contentsDeltaUri"?: string;
            /**
             * If this field is set together with contentsDeltaUri when calling IndexService.UpdateIndex,
             * then existing content of the Index will be replaced by the data from the contentsDeltaUri.
             */
            "isCompleteOverwrite"?: boolean;
        };
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
         * Immutable. The region of the index. eg us-central1.
         */
        "region": string;
        /**
         * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
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
         * The timestamp of when the Index was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
         */
        "createTime"?: string;
        /**
         * The pointers to DeployedIndexes created from this Index. An Index can be only deleted if all its DeployedIndexes had been undeployed first.
         */
        "deployedIndexes"?: Array<{
            /**
             * The ID of the DeployedIndex in the above IndexEndpoint.
             */
            "deployedIndexId"?: string;
            /**
             * A resource name of the IndexEndpoint.
             */
            "indexEndpoint"?: string;
        }>;
        /**
         * Used to perform consistent read-modify-write updates.
         */
        "etag"?: string;
        /**
         * Stats of the index resource.
         */
        "indexStats"?: Array<{
            /**
             * The number of shards in the Index.
             */
            "shardsCount"?: number;
            /**
             * The number of vectors in the Index.
             */
            "vectorsCount"?: string;
        }>;
        /**
         * Points to a YAML file stored on Google Cloud Storage describing additional information about the Index, that is specific to it. Unset if the Index does not have any additional information.
         */
        "metadataSchemaUri"?: string;
        /**
         * The resource name of the Index.
         */
        "name"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        /**
         * The timestamp of when the Index was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
         */
        "updateTime"?: string;
    };
}
export declare class VertexAIIndex extends Model<IVertexAIIndex> implements IVertexAIIndex {
    "apiVersion": IVertexAIIndex["apiVersion"];
    "kind": IVertexAIIndex["kind"];
    "metadata"?: IVertexAIIndex["metadata"];
    "spec": IVertexAIIndex["spec"];
    "status"?: IVertexAIIndex["status"];
    static apiVersion: IVertexAIIndex["apiVersion"];
    static kind: IVertexAIIndex["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IVertexAIIndex>;
    constructor(data?: ModelData<IVertexAIIndex>);
}
