import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ComputeCnrmCloudGoogleComV1beta1ComputeRouterPeer";

export interface IComputeRouterPeer {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "compute.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "ComputeRouterPeer";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * User-specified flag to indicate which mode to use for advertisement.
     * Valid values of this enum field are: 'DEFAULT', 'CUSTOM' Default value: "DEFAULT" Possible values: ["DEFAULT", "CUSTOM"].
     */
    "advertiseMode"?: string;
    /**
     * User-specified list of prefix groups to advertise in custom
     * mode, which currently supports the following option:
     * 
     * \* 'ALL_SUBNETS': Advertises all of the router's own VPC subnets.
     * This excludes any routes learned for subnets that use VPC Network
     * Peering.
     * 
     * 
     * Note that this field can only be populated if advertiseMode is 'CUSTOM'
     * and overrides the list defined for the router (in the "bgp" message).
     * These groups are advertised in addition to any specified prefixes.
     * Leave this field blank to advertise no custom groups.
     */
    "advertisedGroups"?: Array<string>;
    /**
     * User-specified list of individual IP ranges to advertise in
     * custom mode. This field can only be populated if advertiseMode
     * is 'CUSTOM' and is advertised to all peers of the router. These IP
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
     * The priority of routes advertised to this BGP peer.
     * Where there is more than one matching route of maximum
     * length, the routes with the lowest priority value win.
     */
    "advertisedRoutePriority"?: number;
    /**
     * BFD configuration for the BGP peering.
     */
    "bfd"?: {
      /**
       * The minimum interval, in milliseconds, between BFD control packets
       * received from the peer router. The actual value is negotiated
       * between the two routers and is equal to the greater of this value
       * and the transmit interval of the other router. If set, this value
       * must be between 1000 and 30000.
       */
      "minReceiveInterval"?: number;
      /**
       * The minimum interval, in milliseconds, between BFD control packets
       * transmitted to the peer router. The actual value is negotiated
       * between the two routers and is equal to the greater of this value
       * and the corresponding receive interval of the other router. If set,
       * this value must be between 1000 and 30000.
       */
      "minTransmitInterval"?: number;
      /**
       * The number of consecutive BFD packets that must be missed before
       * BFD declares that a peer is unavailable. If set, the value must
       * be a value between 5 and 16.
       */
      "multiplier"?: number;
      /**
       * The BFD session initialization mode for this BGP peer.
       * If set to 'ACTIVE', the Cloud Router will initiate the BFD session
       * for this BGP peer. If set to 'PASSIVE', the Cloud Router will wait
       * for the peer router to initiate the BFD session for this BGP peer.
       * If set to 'DISABLED', BFD is disabled for this BGP peer. Possible values: ["ACTIVE", "DISABLED", "PASSIVE"].
       */
      "sessionInitializationMode": string;
    };
    /**
     * The status of the BGP peer connection. If set to false, any active session
     * with the peer is terminated and all associated routing information is removed.
     * If set to true, the peer connection can be established with routing information.
     * The default is true.
     */
    "enable"?: boolean;
    /**
     * Enable IPv6 traffic over BGP Peer. If not specified, it is disabled by default.
     */
    "enableIpv6"?: boolean;
    /**
     * IP address of the interface inside Google Cloud Platform.
     * Only IPv4 is supported.
     */
    "ipAddress"?: {
      "external"?: string;
    };
    /**
     * IPv6 address of the interface inside Google Cloud Platform.
     * The address must be in the range 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64.
     * If you do not specify the next hop addresses, Google Cloud automatically
     * assigns unused addresses from the 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64 range for you.
     */
    "ipv6NexthopAddress"?: string;
    /**
     * Peer BGP Autonomous System Number (ASN).
     * Each BGP interface may use a different value.
     */
    "peerAsn": number;
    /**
     * IP address of the BGP interface outside Google Cloud Platform.
     * Only IPv4 is supported. Required if 'ip_address' is set.
     */
    "peerIpAddress"?: string;
    /**
     * IPv6 address of the BGP interface outside Google Cloud Platform.
     * The address must be in the range 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64.
     * If you do not specify the next hop addresses, Google Cloud automatically
     * assigns unused addresses from the 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64 range for you.
     */
    "peerIpv6NexthopAddress"?: string;
    /**
     * Immutable. Region where the router and BgpPeer reside.
     * If it is not provided, the provider region is used.
     */
    "region": string;
    /**
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * The URI of the VM instance that is used as third-party router
     * appliances such as Next Gen Firewalls, Virtual Routers, or Router
     * Appliances. The VM instance must be located in zones contained in
     * the same region as this Cloud Router. The VM instance is the peer
     * side of the BGP session.
     */
    "routerApplianceInstanceRef"?: {
      /**
       * Allowed value: The `selfLink` field of a `ComputeInstance` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeInstance` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeInstance` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeInstance` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeInstance` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeInstance` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeInstance` resource.
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
     * The interface the BGP peer is associated with.
     */
    "routerInterfaceRef": {
      /**
       * Allowed value: The `name` field of a `ComputeRouterInterface` resource.
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
       * Allowed value: The `name` field of a `ComputeRouterInterface` resource.
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
       * Allowed value: The `name` field of a `ComputeRouterInterface` resource.
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
       * Allowed value: The `name` field of a `ComputeRouterInterface` resource.
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
       * Allowed value: The `name` field of a `ComputeRouterInterface` resource.
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
       * Allowed value: The `name` field of a `ComputeRouterInterface` resource.
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
       * Allowed value: The `name` field of a `ComputeRouterInterface` resource.
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
     * The Cloud Router in which this BGP peer will be configured.
     */
    "routerRef": {
      /**
       * Allowed value: The `name` field of a `ComputeRouter` resource.
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
       * Allowed value: The `name` field of a `ComputeRouter` resource.
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
       * Allowed value: The `name` field of a `ComputeRouter` resource.
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
       * Allowed value: The `name` field of a `ComputeRouter` resource.
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
       * Allowed value: The `name` field of a `ComputeRouter` resource.
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
       * Allowed value: The `name` field of a `ComputeRouter` resource.
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
       * Allowed value: The `name` field of a `ComputeRouter` resource.
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
     * The resource that configures and manages this BGP peer.
     * 
     * \* 'MANAGED_BY_USER' is the default value and can be managed by
     * you or other users
     * \* 'MANAGED_BY_ATTACHMENT' is a BGP peer that is configured and
     * managed by Cloud Interconnect, specifically by an
     * InterconnectAttachment of type PARTNER. Google automatically
     * creates, updates, and deletes this type of BGP peer when the
     * PARTNER InterconnectAttachment is created, updated,
     * or deleted.
     */
    "managementType"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class ComputeRouterPeer extends Model<IComputeRouterPeer> implements IComputeRouterPeer {
  "apiVersion": IComputeRouterPeer["apiVersion"];
  "kind": IComputeRouterPeer["kind"];
  "metadata"?: IComputeRouterPeer["metadata"];
  "spec": IComputeRouterPeer["spec"];
  "status"?: IComputeRouterPeer["status"];

static apiVersion: IComputeRouterPeer["apiVersion"] = "compute.cnrm.cloud.google.com/v1beta1";
static kind: IComputeRouterPeer["kind"] = "ComputeRouterPeer";
static is = createTypeMetaGuard<IComputeRouterPeer>(ComputeRouterPeer);

constructor(data?: ModelData<IComputeRouterPeer>) {
  super();

  this.setDefinedProps({
    apiVersion: ComputeRouterPeer.apiVersion,
    kind: ComputeRouterPeer.kind,
    ...data
  } as IComputeRouterPeer);
}
}


setValidateFunc(ComputeRouterPeer, validate as ValidateFunc<IComputeRouterPeer>);
