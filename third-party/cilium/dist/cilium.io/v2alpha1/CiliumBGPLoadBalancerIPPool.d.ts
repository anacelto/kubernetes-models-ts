import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * CiliumBGPLoadBalancerIPPool is a Kubernetes third-party resource which instructs the BGP control plane to allocate and advertise IPs for Services of type LoadBalancer.
 */
export interface ICiliumBGPLoadBalancerIPPool {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "cilium.io/v2alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "CiliumBGPLoadBalancerIPPool";
    "metadata": IObjectMeta;
    /**
     * Spec is a human readable description for a BGP load balancer ip pool.
     */
    "spec"?: {
        /**
         * Default determines if this is the default IP pool for allocating from when LBSelector is nil or empty.
         */
        "default"?: boolean;
        /**
         * LBSelector will determine if a created LoadBalancer is allocated an IP from this pool.
         */
        "lbSelector"?: {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            "matchExpressions"?: Array<{
                /**
                 * key is the label key that the selector applies to.
                 */
                "key": string;
                /**
                 * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                 */
                "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
                /**
                 * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
            }>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            "matchLabels"?: {
                [key: string]: string;
            };
        };
        /**
         * NodeSelector selects a group of nodes which will advertise the presence of any LoadBalancers allocated from this IP pool.
         *  If nil all nodes will advertise the presence of any LoadBalancer allocated an IP from this pool.
         */
        "nodeSelector"?: {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            "matchExpressions"?: Array<{
                /**
                 * key is the label key that the selector applies to.
                 */
                "key": string;
                /**
                 * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
                 */
                "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
                /**
                 * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
                 */
                "values"?: Array<string>;
            }>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            "matchLabels"?: {
                [key: string]: string;
            };
        };
        /**
         * The CIDR block of IPs to allocate from.
         */
        "prefix": string;
    };
}
/**
 * CiliumBGPLoadBalancerIPPool is a Kubernetes third-party resource which instructs the BGP control plane to allocate and advertise IPs for Services of type LoadBalancer.
 */
export declare class CiliumBGPLoadBalancerIPPool extends Model<ICiliumBGPLoadBalancerIPPool> implements ICiliumBGPLoadBalancerIPPool {
    "apiVersion": ICiliumBGPLoadBalancerIPPool["apiVersion"];
    "kind": ICiliumBGPLoadBalancerIPPool["kind"];
    "metadata": ICiliumBGPLoadBalancerIPPool["metadata"];
    "spec"?: ICiliumBGPLoadBalancerIPPool["spec"];
    static apiVersion: ICiliumBGPLoadBalancerIPPool["apiVersion"];
    static kind: ICiliumBGPLoadBalancerIPPool["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ICiliumBGPLoadBalancerIPPool>;
    constructor(data?: ModelData<ICiliumBGPLoadBalancerIPPool>);
}
