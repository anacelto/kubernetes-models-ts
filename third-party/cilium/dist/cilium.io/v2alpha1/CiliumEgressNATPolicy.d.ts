import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface ICiliumEgressNATPolicy {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "cilium.io/v2alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "CiliumEgressNATPolicy";
    "metadata": IObjectMeta;
    "spec"?: {
        /**
         * DestinationCIDRs is a list of destination CIDRs for destination IP addresses. If a destination IP matches any one CIDR, it will be selected.
         */
        "destinationCIDRs": Array<string>;
        /**
         * Egress represents a list of rules by which egress traffic is filtered from the source pods.
         */
        "egress": Array<{
            /**
             * Selects Namespaces using cluster-scoped labels. This field follows standard label selector semantics; if present but empty, it selects all namespaces.
             */
            "namespaceSelector"?: {
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
             * This is a label selector which selects Pods. This field follows standard label selector semantics; if present but empty, it selects all pods.
             */
            "podSelector"?: {
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
        }>;
        /**
         * EgressSourceIP is a source ip address that the egress traffic is redirected to and SNATed with.
         *  Example: When it is set to "192.168.1.100", matched egress packets will be redirected to node with ip 192.168.1.100 and SNAT’ed with IP address 192.168.1.100.
         */
        "egressSourceIP": string;
    };
}
export declare class CiliumEgressNATPolicy extends Model<ICiliumEgressNATPolicy> implements ICiliumEgressNATPolicy {
    "apiVersion": ICiliumEgressNATPolicy["apiVersion"];
    "kind": ICiliumEgressNATPolicy["kind"];
    "metadata": ICiliumEgressNATPolicy["metadata"];
    "spec"?: ICiliumEgressNATPolicy["spec"];
    static apiVersion: ICiliumEgressNATPolicy["apiVersion"];
    static kind: ICiliumEgressNATPolicy["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ICiliumEgressNATPolicy>;
    constructor(data?: ModelData<ICiliumEgressNATPolicy>);
}
