import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface ICiliumEgressGatewayPolicy {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "cilium.io/v2";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "CiliumEgressGatewayPolicy";
    "metadata": IObjectMeta;
    "spec"?: {
        /**
         * DestinationCIDRs is a list of destination CIDRs for destination IP addresses. If a destination IP matches any one CIDR, it will be selected.
         */
        "destinationCIDRs": Array<string>;
        /**
         * EgressGateway is the gateway node responsible for SNATing traffic.
         */
        "egressGateway": {
            /**
             * EgressIP is the source IP address that the egress traffic is SNATed with.
             *  Example: When set to "192.168.1.100", matching egress traffic will be redirected to the node matching the NodeSelector field and SNATed with IP address 192.168.1.100.
             *  When none of the Interface or EgressIP fields is specified, the policy will use the first IPv4 assigned to the interface with the default route.
             */
            "egressIP"?: string;
            /**
             * Interface is the network interface to which the egress IP address that the traffic is SNATed with is assigned.
             *  Example: When set to "eth1", matching egress traffic will be redirected to the node matching the NodeSelector field and SNATed with the first IPv4 address assigned to the eth1 interface.
             *  When none of the Interface or EgressIP fields is specified, the policy will use the first IPv4 assigned to the interface with the default route.
             */
            "interface"?: string;
            /**
             * This is a label selector which selects the node that should act as egress gateway for the given policy. In case multiple nodes are selected, only the first one in the lexical ordering over the node names will be used. This field follows standard label selector semantics.
             */
            "nodeSelector": {
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
        };
        /**
         * Egress represents a list of rules by which egress traffic is filtered from the source pods.
         */
        "selectors": Array<{
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
    };
}
export declare class CiliumEgressGatewayPolicy extends Model<ICiliumEgressGatewayPolicy> implements ICiliumEgressGatewayPolicy {
    "apiVersion": ICiliumEgressGatewayPolicy["apiVersion"];
    "kind": ICiliumEgressGatewayPolicy["kind"];
    "metadata": ICiliumEgressGatewayPolicy["metadata"];
    "spec"?: ICiliumEgressGatewayPolicy["spec"];
    static apiVersion: ICiliumEgressGatewayPolicy["apiVersion"];
    static kind: ICiliumEgressGatewayPolicy["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ICiliumEgressGatewayPolicy>;
    constructor(data?: ModelData<ICiliumEgressGatewayPolicy>);
}
