import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IDNSPolicy {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "dns.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "DNSPolicy";
    "metadata"?: IObjectMeta;
    "spec"?: {
        /**
         * Sets an alternative name server for the associated networks.
         * When specified, all DNS queries are forwarded to a name server that you choose.
         * Names such as .internal are not available when an alternative name server is specified.
         */
        "alternativeNameServerConfig"?: {
            /**
             * Sets an alternative name server for the associated networks. When specified,
             * all DNS queries are forwarded to a name server that you choose. Names such as .internal
             * are not available when an alternative name server is specified.
             */
            "targetNameServers": Array<{
                /**
                 * Forwarding path for this TargetNameServer. If unset or 'default' Cloud DNS will make forwarding
                 * decision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
                 * to the Internet. When set to 'private', Cloud DNS will always send queries through VPC for this target Possible values: ["default", "private"].
                 */
                "forwardingPath"?: string;
                /**
                 * IPv4 address to forward to.
                 */
                "ipv4Address": string;
            }>;
        };
        /**
         * A textual description field. Defaults to 'Managed by Config Connector'.
         */
        "description"?: string;
        /**
         * Allows networks bound to this policy to receive DNS queries sent
         * by VMs or applications over VPN connections. When enabled, a
         * virtual IP address will be allocated from each of the sub-networks
         * that are bound to this policy.
         */
        "enableInboundForwarding"?: boolean;
        /**
         * Controls whether logging is enabled for the networks bound to this policy.
         * Defaults to no logging if not set.
         */
        "enableLogging"?: boolean;
        /**
         * List of network names specifying networks to which this policy is applied.
         */
        "networks"?: Array<{
            /**
             * VPC network to bind to.
             */
            "networkRef": {
                /**
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                 * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
        }>;
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
export declare class DNSPolicy extends Model<IDNSPolicy> implements IDNSPolicy {
    "apiVersion": IDNSPolicy["apiVersion"];
    "kind": IDNSPolicy["kind"];
    "metadata"?: IDNSPolicy["metadata"];
    "spec"?: IDNSPolicy["spec"];
    "status"?: IDNSPolicy["status"];
    static apiVersion: IDNSPolicy["apiVersion"];
    static kind: IDNSPolicy["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IDNSPolicy>;
    constructor(data?: ModelData<IDNSPolicy>);
}
