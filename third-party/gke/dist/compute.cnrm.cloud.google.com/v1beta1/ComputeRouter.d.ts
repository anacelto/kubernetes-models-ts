import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IComputeRouter {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "compute.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "ComputeRouter";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * BGP information specific to this router.
         */
        "bgp"?: {
            /**
             * User-specified flag to indicate which mode to use for advertisement. Default value: "DEFAULT" Possible values: ["DEFAULT", "CUSTOM"].
             */
            "advertiseMode"?: string;
            /**
             * User-specified list of prefix groups to advertise in custom mode.
             * This field can only be populated if advertiseMode is CUSTOM and
             * is advertised to all peers of the router. These groups will be
             * advertised in addition to any specified prefixes. Leave this field
             * blank to advertise no custom groups.
             *
             * This enum field has the one valid value: ALL_SUBNETS.
             */
            "advertisedGroups"?: Array<string>;
            /**
             * User-specified list of individual IP ranges to advertise in
             * custom mode. This field can only be populated if advertiseMode
             * is CUSTOM and is advertised to all peers of the router. These IP
             * ranges will be advertised in addition to any specified groups.
             * Leave this field blank to advertise no custom IP ranges.
             */
            "advertisedIpRanges"?: Array<{
                /**
                 * User-specified description for the IP range.
                 */
                "description"?: string;
                /**
                 * The IP range to advertise. The value must be a
                 * CIDR-formatted string.
                 */
                "range": string;
            }>;
            /**
             * Local BGP Autonomous System Number (ASN). Must be an RFC6996
             * private ASN, either 16-bit or 32-bit. The value will be fixed for
             * this router resource. All VPN tunnels that link to this router
             * will have the same local ASN.
             */
            "asn": number;
            /**
             * The interval in seconds between BGP keepalive messages that are sent
             * to the peer. Hold time is three times the interval at which keepalive
             * messages are sent, and the hold time is the maximum number of seconds
             * allowed to elapse between successive keepalive messages that BGP
             * receives from a peer.
             *
             * BGP will use the smaller of either the local hold time value or the
             * peer's hold time value as the hold time for the BGP connection
             * between the two peers. If set, this value must be between 20 and 60.
             * The default is 20.
             */
            "keepaliveInterval"?: number;
        };
        /**
         * An optional description of this resource.
         */
        "description"?: string;
        /**
         * Immutable. Indicates if a router is dedicated for use with encrypted VLAN
         * attachments (interconnectAttachments).
         */
        "encryptedInterconnectRouter"?: boolean;
        /**
         * A reference to the network to which this router belongs.
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
        /**
         * Immutable. Region where the router resides.
         */
        "region": string;
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
         * Creation timestamp in RFC3339 text format.
         */
        "creationTimestamp"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        "selfLink"?: string;
    };
}
export declare class ComputeRouter extends Model<IComputeRouter> implements IComputeRouter {
    "apiVersion": IComputeRouter["apiVersion"];
    "kind": IComputeRouter["kind"];
    "metadata"?: IComputeRouter["metadata"];
    "spec": IComputeRouter["spec"];
    "status"?: IComputeRouter["status"];
    static apiVersion: IComputeRouter["apiVersion"];
    static kind: IComputeRouter["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IComputeRouter>;
    constructor(data?: ModelData<IComputeRouter>);
}
