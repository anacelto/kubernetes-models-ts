import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IComputeOrganizationSecurityPolicyRule {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "compute.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "ComputeOrganizationSecurityPolicyRule";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * The Action to perform when the client connection triggers the rule. Can currently be either
         * "allow", "deny" or "goto_next".
         */
        "action": string;
        /**
         * A description of the rule.
         */
        "description"?: string;
        /**
         * The direction in which this rule applies. If unspecified an INGRESS rule is created. Possible values: ["INGRESS", "EGRESS"].
         */
        "direction"?: string;
        /**
         * Denotes whether to enable logging for a particular rule.
         * If logging is enabled, logs will be exported to the
         * configured export destination in Stackdriver.
         */
        "enableLogging"?: boolean;
        /**
         * A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding 'action' is enforced.
         */
        "match": {
            /**
             * The configuration options for matching the rule.
             */
            "config": {
                /**
                 * Destination IP address range in CIDR format. Required for
                 * EGRESS rules.
                 */
                "destIpRanges"?: Array<string>;
                /**
                 * Pairs of IP protocols and ports that the rule should match.
                 */
                "layer4Config": Array<{
                    /**
                     * The IP protocol to which this rule applies. The protocol
                     * type is required when creating a firewall rule.
                     * This value can either be one of the following well
                     * known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp),
                     * or the IP protocol number.
                     */
                    "ipProtocol": string;
                    /**
                     * An optional list of ports to which this rule applies. This field
                     * is only applicable for UDP or TCP protocol. Each entry must be
                     * either an integer or a range. If not specified, this rule
                     * applies to connections through any port.
                     *
                     * Example inputs include: ["22"], ["80","443"], and
                     * ["12345-12349"].
                     */
                    "ports"?: Array<string>;
                }>;
                /**
                 * Source IP address range in CIDR format. Required for
                 * INGRESS rules.
                 */
                "srcIpRanges"?: Array<string>;
            };
            /**
             * A description of the rule.
             */
            "description"?: string;
            /**
             * Preconfigured versioned expression. For organization security policy rules,
             * the only supported type is "FIREWALL". Default value: "FIREWALL" Possible values: ["FIREWALL"].
             */
            "versionedExpr"?: string;
        };
        /**
         * Immutable. The ID of the OrganizationSecurityPolicy this rule applies to.
         */
        "policyId": string;
        /**
         * If set to true, the specified action is not enforced.
         */
        "preview"?: boolean;
        /**
         * Immutable. Optional. The priority of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
        /**
         * A list of network resource URLs to which this rule applies.
         * This field allows you to control which network's VMs get
         * this rule. If this field is left blank, all VMs
         * within the organization will receive the rule.
         */
        "targetResources"?: Array<string>;
        /**
         * A list of service accounts indicating the sets of
         * instances that are applied with this rule.
         */
        "targetServiceAccounts"?: Array<string>;
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
export declare class ComputeOrganizationSecurityPolicyRule extends Model<IComputeOrganizationSecurityPolicyRule> implements IComputeOrganizationSecurityPolicyRule {
    "apiVersion": IComputeOrganizationSecurityPolicyRule["apiVersion"];
    "kind": IComputeOrganizationSecurityPolicyRule["kind"];
    "metadata"?: IComputeOrganizationSecurityPolicyRule["metadata"];
    "spec": IComputeOrganizationSecurityPolicyRule["spec"];
    "status"?: IComputeOrganizationSecurityPolicyRule["status"];
    static apiVersion: IComputeOrganizationSecurityPolicyRule["apiVersion"];
    static kind: IComputeOrganizationSecurityPolicyRule["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IComputeOrganizationSecurityPolicyRule>;
    constructor(data?: ModelData<IComputeOrganizationSecurityPolicyRule>);
}
