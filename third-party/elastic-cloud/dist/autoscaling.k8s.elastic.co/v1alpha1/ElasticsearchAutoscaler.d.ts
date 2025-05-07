import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * ElasticsearchAutoscaler represents an ElasticsearchAutoscaler resource in a Kubernetes cluster.
 */
export interface IElasticsearchAutoscaler {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "autoscaling.k8s.elastic.co/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "ElasticsearchAutoscaler";
    "metadata"?: IObjectMeta;
    /**
     * ElasticsearchAutoscalerSpec holds the specification of an Elasticsearch autoscaler resource.
     */
    "spec"?: {
        /**
         * ElasticsearchRef is a reference to an Elasticsearch cluster that exists in the same namespace.
         */
        "elasticsearchRef"?: {
            /**
             * Name is the name of the Elasticsearch resource to scale automatically.
             */
            "name"?: string;
        };
        "policies": Array<{
            /**
             * Deciders allow the user to override default settings for autoscaling deciders.
             */
            "deciders"?: {
                [key: string]: {
                    [key: string]: string;
                };
            };
            /**
             * Name identifies the autoscaling policy in the autoscaling specification.
             */
            "name"?: string;
            /**
             * AutoscalingResources model the limits, submitted by the user, for the supported resources in an autoscaling policy. Only the node count range is mandatory. For other resources, a limit range is required only if the Elasticsearch autoscaling capacity API returns a requirement for a given resource. For example, the memory limit range is only required if the autoscaling API response contains a memory requirement. If there is no limit range for a resource, and if that resource is not mandatory, then the resources in the NodeSets managed by the autoscaling policy are left untouched.
             */
            "resources": {
                /**
                 * QuantityRange models a resource limit range for resources which can be expressed with resource.Quantity.
                 */
                "cpu"?: {
                    /**
                     * Max represents the upper limit for the resources managed by the autoscaler.
                     */
                    "max": number | string;
                    /**
                     * Min represents the lower limit for the resources managed by the autoscaler.
                     */
                    "min": number | string;
                    /**
                     * RequestsToLimitsRatio allows to customize Kubernetes resource Limit based on the Request.
                     */
                    "requestsToLimitsRatio"?: number | string;
                };
                /**
                 * QuantityRange models a resource limit range for resources which can be expressed with resource.Quantity.
                 */
                "memory"?: {
                    /**
                     * Max represents the upper limit for the resources managed by the autoscaler.
                     */
                    "max": number | string;
                    /**
                     * Min represents the lower limit for the resources managed by the autoscaler.
                     */
                    "min": number | string;
                    /**
                     * RequestsToLimitsRatio allows to customize Kubernetes resource Limit based on the Request.
                     */
                    "requestsToLimitsRatio"?: number | string;
                };
                /**
                 * NodeCountRange is used to model the minimum and the maximum number of nodes over all the NodeSets managed by the same autoscaling policy.
                 */
                "nodeCount": {
                    /**
                     * Max represents the maximum number of nodes in a tier.
                     */
                    "max": number;
                    /**
                     * Min represents the minimum number of nodes in a tier.
                     */
                    "min": number;
                };
                /**
                 * QuantityRange models a resource limit range for resources which can be expressed with resource.Quantity.
                 */
                "storage"?: {
                    /**
                     * Max represents the upper limit for the resources managed by the autoscaler.
                     */
                    "max": number | string;
                    /**
                     * Min represents the lower limit for the resources managed by the autoscaler.
                     */
                    "min": number | string;
                    /**
                     * RequestsToLimitsRatio allows to customize Kubernetes resource Limit based on the Request.
                     */
                    "requestsToLimitsRatio"?: number | string;
                };
            };
            /**
             * An autoscaling policy must target a unique set of roles.
             */
            "roles"?: Array<string>;
        }>;
        /**
         * PollingPeriod is the period at which to synchronize with the Elasticsearch autoscaling API.
         */
        "pollingPeriod"?: string;
    };
    "status"?: {
        /**
         * Conditions holds the current service state of the autoscaling controller.
         */
        "conditions"?: Array<{
            "lastTransitionTime"?: string;
            "message"?: string;
            "status": string;
            /**
             * ConditionType defines the condition of an Elasticsearch resource.
             */
            "type": string;
        }>;
        /**
         * ObservedGeneration is the last observed generation by the controller.
         */
        "observedGeneration"?: number;
        /**
         * AutoscalingPolicyStatuses is used to expose state messages to user or external system.
         */
        "policies"?: Array<{
            /**
             * LastModificationTime is the last time the resources have been updated, used by the cooldown algorithm.
             */
            "lastModificationTime"?: string;
            /**
             * Name is the name of the autoscaling policy
             */
            "name": string;
            /**
             * NodeSetNodeCount holds the number of nodes for each nodeSet.
             */
            "nodeSets"?: Array<{
                /**
                 * Name of the Nodeset.
                 */
                "name": string;
                /**
                 * NodeCount is the number of nodes, as computed by the autoscaler, expected in this NodeSet.
                 */
                "nodeCount": number;
            }>;
            /**
             * ResourcesSpecification holds the resource values common to all the nodeSets managed by a same autoscaling policy. Only the resources managed by the autoscaling controller are saved in the Status.
             */
            "resources"?: {
                /**
                 * ResourceList is a set of (resource name, quantity) pairs.
                 */
                "limits"?: {
                    [key: string]: number | string;
                };
                /**
                 * ResourceList is a set of (resource name, quantity) pairs.
                 */
                "requests"?: {
                    [key: string]: number | string;
                };
            };
            /**
             * PolicyStates may contain various messages regarding the current state of this autoscaling policy.
             */
            "state"?: Array<{
                "messages": Array<string>;
                "type": string;
            }>;
        }>;
    };
}
/**
 * ElasticsearchAutoscaler represents an ElasticsearchAutoscaler resource in a Kubernetes cluster.
 */
export declare class ElasticsearchAutoscaler extends Model<IElasticsearchAutoscaler> implements IElasticsearchAutoscaler {
    "apiVersion": IElasticsearchAutoscaler["apiVersion"];
    "kind": IElasticsearchAutoscaler["kind"];
    "metadata"?: IElasticsearchAutoscaler["metadata"];
    "spec"?: IElasticsearchAutoscaler["spec"];
    "status"?: IElasticsearchAutoscaler["status"];
    static apiVersion: IElasticsearchAutoscaler["apiVersion"];
    static kind: IElasticsearchAutoscaler["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IElasticsearchAutoscaler>;
    constructor(data?: ModelData<IElasticsearchAutoscaler>);
}
