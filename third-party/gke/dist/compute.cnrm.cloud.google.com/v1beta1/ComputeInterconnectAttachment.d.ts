import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IComputeInterconnectAttachment {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "compute.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "ComputeInterconnectAttachment";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Whether the VLAN attachment is enabled or disabled.  When using
         * PARTNER type this will Pre-Activate the interconnect attachment.
         */
        "adminEnabled"?: boolean;
        /**
         * Provisioned bandwidth capacity for the interconnect attachment.
         * For attachments of type DEDICATED, the user can set the bandwidth.
         * For attachments of type PARTNER, the Google Partner that is operating the interconnect must set the bandwidth.
         * Output only for PARTNER type, mutable for PARTNER_PROVIDER and DEDICATED,
         * Defaults to BPS_10G Possible values: ["BPS_50M", "BPS_100M", "BPS_200M", "BPS_300M", "BPS_400M", "BPS_500M", "BPS_1G", "BPS_2G", "BPS_5G", "BPS_10G", "BPS_20G", "BPS_50G"].
         */
        "bandwidth"?: string;
        /**
         * Immutable. Up to 16 candidate prefixes that can be used to restrict the allocation
         * of cloudRouterIpAddress and customerRouterIpAddress for this attachment.
         * All prefixes must be within link-local address space (169.254.0.0/16)
         * and must be /29 or shorter (/28, /27, etc). Google will attempt to select
         * an unused /29 from the supplied candidate prefix(es). The request will
         * fail if all possible /29s are in use on Google's edge. If not supplied,
         * Google will randomly select an unused /29 from all of link-local space.
         */
        "candidateSubnets"?: Array<string>;
        /**
         * An optional description of this resource.
         */
        "description"?: string;
        /**
         * Immutable. Desired availability domain for the attachment. Only available for type
         * PARTNER, at creation time. For improved reliability, customers should
         * configure a pair of attachments with one per availability domain. The
         * selected availability domain will be provided to the Partner via the
         * pairing key so that the provisioned circuit will lie in the specified
         * domain. If not specified, the value will default to AVAILABILITY_DOMAIN_ANY.
         */
        "edgeAvailabilityDomain"?: string;
        /**
         * Immutable. Indicates the user-supplied encryption option of this interconnect
         * attachment. Can only be specified at attachment creation for PARTNER or
         * DEDICATED attachments.
         *
         * \* NONE - This is the default value, which means that the VLAN attachment
         * carries unencrypted traffic. VMs are able to send traffic to, or receive
         * traffic from, such a VLAN attachment.
         *
         * \* IPSEC - The VLAN attachment carries only encrypted traffic that is
         * encrypted by an IPsec device, such as an HA VPN gateway or third-party
         * IPsec VPN. VMs cannot directly send traffic to, or receive traffic from,
         * such a VLAN attachment. To use HA VPN over Cloud Interconnect, the VLAN
         * attachment must be created with this option. Default value: "NONE" Possible values: ["NONE", "IPSEC"].
         */
        "encryption"?: string;
        /**
         * Immutable. URL of the underlying Interconnect object that this attachment's
         * traffic will traverse through. Required if type is DEDICATED, must not
         * be set if type is PARTNER.
         */
        "interconnect"?: string;
        "ipsecInternalAddresses"?: Array<{
            /**
             * Allowed value: The `selfLink` field of a `ComputeAddress` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeAddress` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeAddress` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeAddress` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeAddress` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeAddress` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeAddress` resource.
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
        })>)>;
        /**
         * Maximum Transmission Unit (MTU), in bytes, of packets passing through
         * this interconnect attachment. Currently, only 1440 and 1500 are allowed. If not specified, the value will default to 1440.
         */
        "mtu"?: string;
        /**
         * Region where the regional interconnect attachment resides.
         */
        "region": string;
        /**
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
        /**
         * The Cloud Router to be used for dynamic routing. This router must
         * be in the same region as this ComputeInterconnectAttachment. The
         * ComputeInterconnectAttachment will automatically connect the
         * interconnect to the network & region within which the Cloud Router
         * is configured.
         */
        "routerRef": {
            /**
             * Allowed value: The `selfLink` field of a `ComputeRouter` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeRouter` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeRouter` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeRouter` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeRouter` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeRouter` resource.
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
             * Allowed value: The `selfLink` field of a `ComputeRouter` resource.
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
         * Immutable. The type of InterconnectAttachment you wish to create. Defaults to
         * DEDICATED. Possible values: ["DEDICATED", "PARTNER", "PARTNER_PROVIDER"].
         */
        "type"?: string;
        /**
         * Immutable. The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When
         * using PARTNER type this will be managed upstream.
         */
        "vlanTag8021q"?: number;
    };
    "status"?: {
        /**
         * IPv4 address + prefix length to be configured on Cloud Router
         * Interface for this interconnect attachment.
         */
        "cloudRouterIpAddress"?: string;
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
         * IPv4 address + prefix length to be configured on the customer
         * router subinterface for this interconnect attachment.
         */
        "customerRouterIpAddress"?: string;
        /**
         * Google reference ID, to be used when raising support tickets with
         * Google or otherwise to debug backend connectivity issues.
         */
        "googleReferenceId"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        /**
         * [Output only for type PARTNER. Not present for DEDICATED]. The opaque
         * identifier of an PARTNER attachment used to initiate provisioning with
         * a selected partner. Of the form "XXXXX/region/domain".
         */
        "pairingKey"?: string;
        /**
         * [Output only for type PARTNER. Not present for DEDICATED]. Optional
         * BGP ASN for the router that should be supplied by a layer 3 Partner if
         * they configured BGP on behalf of the customer.
         */
        "partnerAsn"?: string;
        /**
         * Information specific to an InterconnectAttachment. This property
         * is populated if the interconnect that this is attached to is of type DEDICATED.
         */
        "privateInterconnectInfo"?: {
            /**
             * 802.1q encapsulation tag to be used for traffic between
             * Google and the customer, going to and from this network and region.
             */
            "tag8021q"?: number;
        };
        "selfLink"?: string;
        /**
         * [Output Only] The current state of this attachment's functionality.
         */
        "state"?: string;
    };
}
export declare class ComputeInterconnectAttachment extends Model<IComputeInterconnectAttachment> implements IComputeInterconnectAttachment {
    "apiVersion": IComputeInterconnectAttachment["apiVersion"];
    "kind": IComputeInterconnectAttachment["kind"];
    "metadata"?: IComputeInterconnectAttachment["metadata"];
    "spec": IComputeInterconnectAttachment["spec"];
    "status"?: IComputeInterconnectAttachment["status"];
    static apiVersion: IComputeInterconnectAttachment["apiVersion"];
    static kind: IComputeInterconnectAttachment["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IComputeInterconnectAttachment>;
    constructor(data?: ModelData<IComputeInterconnectAttachment>);
}
