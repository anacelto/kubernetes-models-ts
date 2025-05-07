import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IDNSManagedZone {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "dns.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "DNSManagedZone";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Cloud logging configuration.
         */
        "cloudLoggingConfig"?: {
            /**
             * If set, enable query logging for this ManagedZone. False by default, making logging opt-in.
             */
            "enableLogging": boolean;
        };
        /**
         * A textual description field. Defaults to 'Managed by Config Connector'.
         */
        "description"?: string;
        /**
         * Immutable. The DNS name of this managed zone, for instance "example.com.".
         */
        "dnsName": string;
        /**
         * DNSSEC configuration.
         */
        "dnssecConfig"?: {
            /**
             * Specifies parameters that will be used for generating initial DnsKeys
             * for this ManagedZone. If you provide a spec for keySigning or zoneSigning,
             * you must also provide one for the other.
             * default_key_specs can only be updated when the state is 'off'.
             */
            "defaultKeySpecs"?: Array<{
                /**
                 * String mnemonic specifying the DNSSEC algorithm of this key Possible values: ["ecdsap256sha256", "ecdsap384sha384", "rsasha1", "rsasha256", "rsasha512"].
                 */
                "algorithm"?: string;
                /**
                 * Length of the keys in bits.
                 */
                "keyLength"?: number;
                /**
                 * Specifies whether this is a key signing key (KSK) or a zone
                 * signing key (ZSK). Key signing keys have the Secure Entry
                 * Point flag set and, when active, will only be used to sign
                 * resource record sets of type DNSKEY. Zone signing keys do
                 * not have the Secure Entry Point flag set and will be used
                 * to sign all other types of resource record sets. Possible values: ["keySigning", "zoneSigning"].
                 */
                "keyType"?: string;
                /**
                 * Identifies what kind of resource this is.
                 */
                "kind"?: string;
            }>;
            /**
             * Identifies what kind of resource this is.
             */
            "kind"?: string;
            /**
             * Specifies the mechanism used to provide authenticated denial-of-existence responses.
             * non_existence can only be updated when the state is 'off'. Possible values: ["nsec", "nsec3"].
             */
            "nonExistence"?: string;
            /**
             * Specifies whether DNSSEC is enabled, and what mode it is in Possible values: ["off", "on", "transfer"].
             */
            "state"?: string;
        };
        /**
         * The presence for this field indicates that outbound forwarding is enabled
         * for this zone. The value of this field contains the set of destinations
         * to forward to.
         */
        "forwardingConfig"?: {
            /**
             * List of target name servers to forward to. Cloud DNS will
             * select the best available name server if more than
             * one target is given.
             */
            "targetNameServers": Array<{
                /**
                 * Forwarding path for this TargetNameServer. If unset or 'default' Cloud DNS will make forwarding
                 * decision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
                 * to the Internet. When set to 'private', Cloud DNS will always send queries through VPC for this target Possible values: ["default", "private"].
                 */
                "forwardingPath"?: string;
                /**
                 * IPv4 address of a target name server.
                 */
                "ipv4Address": string;
            }>;
        };
        /**
         * The presence of this field indicates that DNS Peering is enabled for this
         * zone. The value of this field contains the network to peer with.
         */
        "peeringConfig"?: {
            /**
             * The network with which to peer.
             */
            "targetNetwork": {
                /**
                 * VPC network to forward queries to.
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
            };
        };
        /**
         * For privately visible zones, the set of Virtual Private Cloud
         * resources that the zone is visible from. At least one of 'gke_clusters' or 'networks' must be specified.
         */
        "privateVisibilityConfig"?: {
            /**
             * The list of Google Kubernetes Engine clusters that can see this zone.
             */
            "gkeClusters"?: Array<{
                /**
                 * The resource name of the cluster to bind this ManagedZone to.
                 * This should be specified in the format like
                 * 'projects/\*\/locations/\*\/clusters/\*'.
                 */
                "gkeClusterNameRef": {
                    /**
                     * Allowed value: The `selfLink` field of a `ContainerCluster` resource.
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
                     * Allowed value: The `selfLink` field of a `ContainerCluster` resource.
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
                     * Allowed value: The `selfLink` field of a `ContainerCluster` resource.
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
                     * Allowed value: The `selfLink` field of a `ContainerCluster` resource.
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
                     * Allowed value: The `selfLink` field of a `ContainerCluster` resource.
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
                     * Allowed value: The `selfLink` field of a `ContainerCluster` resource.
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
                     * Allowed value: The `selfLink` field of a `ContainerCluster` resource.
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
        };
        /**
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
        /**
         * Immutable. Specifies if this is a managed reverse lookup zone. If true, Cloud DNS will resolve reverse
         * lookup queries using automatically configured records for VPC resources. This only applies
         * to networks listed under 'private_visibility_config'.
         */
        "reverseLookup"?: boolean;
        /**
         * Immutable. The presence of this field indicates that this zone is backed by Service Directory. The value of this field contains information related to the namespace associated with the zone.
         */
        "serviceDirectoryConfig"?: {
            /**
             * The namespace associated with the zone.
             */
            "namespace": {
                /**
                 * The fully qualified or partial URL of the service directory namespace that should be
                 * associated with the zone. This should be formatted like
                 * 'https://servicedirectory.googleapis.com/v1/projects/{project}/locations/{location}/namespaces/{namespace_id}'
                 * or simply 'projects/{project}/locations/{location}/namespaces/{namespace_id}'
                 * Ignored for 'public' visibility zones.
                 */
                "namespaceUrl": string;
            };
        };
        /**
         * Immutable. The zone's visibility: public zones are exposed to the Internet,
         * while private zones are visible only to Virtual Private Cloud resources. Default value: "public" Possible values: ["private", "public"].
         */
        "visibility"?: string;
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
         * The time that this resource was created on the server.
         * This is in RFC3339 text format.
         */
        "creationTime"?: string;
        /**
         * Unique identifier for the resource; defined by the server.
         */
        "managedZoneId"?: number;
        /**
         * Delegate your managed_zone to these virtual name servers;
         * defined by the server.
         */
        "nameServers"?: Array<string>;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
    };
}
export declare class DNSManagedZone extends Model<IDNSManagedZone> implements IDNSManagedZone {
    "apiVersion": IDNSManagedZone["apiVersion"];
    "kind": IDNSManagedZone["kind"];
    "metadata"?: IDNSManagedZone["metadata"];
    "spec": IDNSManagedZone["spec"];
    "status"?: IDNSManagedZone["status"];
    static apiVersion: IDNSManagedZone["apiVersion"];
    static kind: IDNSManagedZone["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IDNSManagedZone>;
    constructor(data?: ModelData<IDNSManagedZone>);
}
