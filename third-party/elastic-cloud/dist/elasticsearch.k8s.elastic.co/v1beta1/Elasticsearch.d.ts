import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * Elasticsearch represents an Elasticsearch resource in a Kubernetes cluster.
 */
export interface IElasticsearch {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "elasticsearch.k8s.elastic.co/v1beta1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "Elasticsearch";
    "metadata"?: IObjectMeta;
    /**
     * ElasticsearchSpec holds the specification of an Elasticsearch cluster.
     */
    "spec"?: {
        /**
         * HTTP holds HTTP layer settings for Elasticsearch.
         */
        "http"?: {
            /**
             * Service defines the template for the associated Kubernetes Service object.
             */
            "service"?: {
                /**
                 * ObjectMeta is the metadata of the service. The name and namespace provided here are managed by ECK and will be ignored.
                 */
                "metadata"?: {
                    "annotations"?: {
                        [key: string]: string;
                    };
                    "finalizers"?: Array<string>;
                    "labels"?: {
                        [key: string]: string;
                    };
                    "name"?: string;
                    "namespace"?: string;
                };
                /**
                 * Spec is the specification of the service.
                 */
                "spec"?: {
                    /**
                     * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.  Default is "true". It may be set to "false" if the cluster load-balancer does not rely on NodePorts.  If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
                     */
                    "allocateLoadBalancerNodePorts"?: boolean;
                    /**
                     * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address. Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
                     */
                    "clusterIP"?: string;
                    /**
                     * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly.  If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address.  Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName.  If this field is not specified, it will be initialized from the clusterIP field.  If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value.
                     *  This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
                     */
                    "clusterIPs"?: Array<string>;
                    /**
                     * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
                     */
                    "externalIPs"?: Array<string>;
                    /**
                     * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved.  Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires `type` to be "ExternalName".
                     */
                    "externalName"?: string;
                    /**
                     * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's "externally-facing" addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to "Local", the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get "Cluster" semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
                     */
                    "externalTrafficPolicy"?: string;
                    /**
                     * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used.  If not specified, a value will be automatically allocated.  External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
                     */
                    "healthCheckNodePort"?: number;
                    /**
                     * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to "Local", the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, "Cluster", uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
                     */
                    "internalTrafficPolicy"?: string;
                    /**
                     * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are "IPv4" and "IPv6".  This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to "headless" services. This field will be wiped when updating a Service to type ExternalName.
                     *  This field may hold a maximum of two entries (dual-stack families, in either order).  These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
                     */
                    "ipFamilies"?: Array<string>;
                    /**
                     * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be "SingleStack" (a single IP family), "PreferDualStack" (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or "RequireDualStack" (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
                     */
                    "ipFamilyPolicy"?: string;
                    /**
                     * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
                     */
                    "loadBalancerClass"?: string;
                    /**
                     * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.
                     */
                    "loadBalancerIP"?: string;
                    /**
                     * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
                     */
                    "loadBalancerSourceRanges"?: Array<string>;
                    /**
                     * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
                     */
                    "ports"?: Array<{
                        /**
                         * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:
                         *  \* Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).
                         *  \* Kubernetes-defined prefixed names: \* 'kubernetes.io/h2c' - HTTP/2 over cleartext as described in https://www.rfc-editor.org/rfc/rfc7540 \* 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 \* 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455
                         *  \* Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
                         */
                        "appProtocol"?: string;
                        /**
                         * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
                         */
                        "name"?: string;
                        /**
                         * The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
                         */
                        "nodePort"?: number;
                        /**
                         * The port that will be exposed by this service.
                         */
                        "port": number;
                        /**
                         * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
                         */
                        "protocol"?: string;
                        /**
                         * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
                         */
                        "targetPort"?: number | string;
                    }>;
                    /**
                     * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered "ready" even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
                     */
                    "publishNotReadyAddresses"?: boolean;
                    /**
                     * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
                     */
                    "selector"?: {
                        [key: string]: string;
                    };
                    /**
                     * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
                     */
                    "sessionAffinity"?: string;
                    /**
                     * sessionAffinityConfig contains the configurations of session affinity.
                     */
                    "sessionAffinityConfig"?: {
                        /**
                         * clientIP contains the configurations of Client IP based session affinity.
                         */
                        "clientIP"?: {
                            /**
                             * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
                             */
                            "timeoutSeconds"?: number;
                        };
                    };
                    /**
                     * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. "ExternalName" aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
                     */
                    "type"?: string;
                };
            };
            /**
             * TLS defines options for configuring TLS for HTTP.
             */
            "tls"?: {
                /**
                 * Certificate is a reference to a Kubernetes secret that contains the certificate and private key for enabling TLS. The referenced secret should contain the following:
                 *  - `ca.crt`: The certificate authority (optional). - `tls.crt`: The certificate (or a chain). - `tls.key`: The private key to the first certificate in the certificate chain.
                 */
                "certificate"?: {
                    /**
                     * SecretName is the name of the secret.
                     */
                    "secretName"?: string;
                };
                /**
                 * SelfSignedCertificate allows configuring the self-signed certificate generated by the operator.
                 */
                "selfSignedCertificate"?: {
                    /**
                     * Disabled indicates that the provisioning of the self-signed certifcate should be disabled.
                     */
                    "disabled"?: boolean;
                    /**
                     * SubjectAlternativeNames is a list of SANs to include in the generated HTTP TLS certificate.
                     */
                    "subjectAltNames"?: Array<{
                        /**
                         * DNS is the DNS name of the subject.
                         */
                        "dns"?: string;
                        /**
                         * IP is the IP address of the subject.
                         */
                        "ip"?: string;
                    }>;
                };
            };
        };
        /**
         * Image is the Elasticsearch Docker image to deploy.
         */
        "image"?: string;
        /**
         * NodeSets allow specifying groups of Elasticsearch nodes sharing the same configuration and Pod templates.
         */
        "nodeSets": Array<{
            /**
             * Config holds the Elasticsearch configuration.
             */
            "config"?: {};
            /**
             * Count of Elasticsearch nodes to deploy.
             */
            "count": number;
            /**
             * Name of this set of nodes. Becomes a part of the Elasticsearch node.name setting.
             */
            "name": string;
            /**
             * PodTemplate provides customisation options (labels, annotations, affinity rules, resource requests, and so on) for the Pods belonging to this NodeSet.
             */
            "podTemplate"?: {};
            /**
             * VolumeClaimTemplates is a list of persistent volume claims to be used by each Pod in this NodeSet. Every claim in this list must have a matching volumeMount in one of the containers defined in the PodTemplate. Items defined here take precedence over any default claims added by the operator with the same name.
             */
            "volumeClaimTemplates"?: Array<{
                /**
                 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
                 */
                "apiVersion"?: string;
                /**
                 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
                 */
                "kind"?: string;
                /**
                 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
                 */
                "metadata"?: {
                    "annotations"?: {
                        [key: string]: string;
                    };
                    "finalizers"?: Array<string>;
                    "labels"?: {
                        [key: string]: string;
                    };
                    "name"?: string;
                    "namespace"?: string;
                };
                /**
                 * spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
                 */
                "spec"?: {
                    /**
                     * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
                     */
                    "accessModes"?: Array<string>;
                    /**
                     * dataSource field can be used to specify either: \* An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) \* An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
                     */
                    "dataSource"?: {
                        /**
                         * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
                         */
                        "apiGroup"?: string;
                        /**
                         * Kind is the type of resource being referenced
                         */
                        "kind": string;
                        /**
                         * Name is the name of resource being referenced
                         */
                        "name": string;
                    };
                    /**
                     * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: \* While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. \* While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. \* While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
                     */
                    "dataSourceRef"?: {
                        /**
                         * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
                         */
                        "apiGroup"?: string;
                        /**
                         * Kind is the type of resource being referenced
                         */
                        "kind": string;
                        /**
                         * Name is the name of resource being referenced
                         */
                        "name": string;
                        /**
                         * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
                         */
                        "namespace"?: string;
                    };
                    /**
                     * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
                     */
                    "resources"?: {
                        /**
                         * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.
                         *  This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.
                         *  This field is immutable. It can only be set for containers.
                         */
                        "claims"?: Array<{
                            /**
                             * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
                             */
                            "name": string;
                        }>;
                        /**
                         * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                         */
                        "limits"?: {
                            [key: string]: number | string;
                        };
                        /**
                         * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                         */
                        "requests"?: {
                            [key: string]: number | string;
                        };
                    };
                    /**
                     * selector is a label query over volumes to consider for binding.
                     */
                    "selector"?: {
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
                            "operator": string;
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
                     * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
                     */
                    "storageClassName"?: string;
                    /**
                     * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
                     */
                    "volumeMode"?: string;
                    /**
                     * volumeName is the binding reference to the PersistentVolume backing this claim.
                     */
                    "volumeName"?: string;
                };
            }>;
        }>;
        /**
         * PodDisruptionBudget provides access to the default pod disruption budget for the Elasticsearch cluster. The default budget selects all cluster pods and sets `maxUnavailable` to 1. To disable, set `PodDisruptionBudget` to the empty value (`{}` in YAML).
         */
        "podDisruptionBudget"?: {
            /**
             * ObjectMeta is the metadata of the PDB. The name and namespace provided here are managed by ECK and will be ignored.
             */
            "metadata"?: {
                "annotations"?: {
                    [key: string]: string;
                };
                "finalizers"?: Array<string>;
                "labels"?: {
                    [key: string]: string;
                };
                "name"?: string;
                "namespace"?: string;
            };
            /**
             * Spec is the specification of the PDB.
             */
            "spec"?: {
                /**
                 * An eviction is allowed if at most "maxUnavailable" pods selected by "selector" are unavailable after the eviction, i.e. even in absence of the evicted pod. For example, one can prevent all voluntary evictions by specifying 0. This is a mutually exclusive setting with "minAvailable".
                 */
                "maxUnavailable"?: number | string;
                /**
                 * An eviction is allowed if at least "minAvailable" pods selected by "selector" will still be available after the eviction, i.e. even in the absence of the evicted pod.  So for example you can prevent all voluntary evictions by specifying "100%".
                 */
                "minAvailable"?: number | string;
                /**
                 * Label query over pods whose evictions are managed by the disruption budget. A null selector selects no pods. An empty selector ({}) also selects no pods, which differs from standard behavior of selecting all pods. In policy/v1, an empty selector will select all pods in the namespace.
                 */
                "selector"?: {
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
                        "operator": string;
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
                 * UnhealthyPodEvictionPolicy defines the criteria for when unhealthy pods should be considered for eviction. Current implementation considers healthy pods, as pods that have status.conditions item with type="Ready",status="True".
                 *  Valid policies are IfHealthyBudget and AlwaysAllow. If no policy is specified, the default behavior will be used, which corresponds to the IfHealthyBudget policy.
                 *  IfHealthyBudget policy means that running pods (status.phase="Running"), but not yet healthy can be evicted only if the guarded application is not disrupted (status.currentHealthy is at least equal to status.desiredHealthy). Healthy pods will be subject to the PDB for eviction.
                 *  AlwaysAllow policy means that all running pods (status.phase="Running"), but not yet healthy are considered disrupted and can be evicted regardless of whether the criteria in a PDB is met. This means perspective running pods of a disrupted application might not get a chance to become healthy. Healthy pods will be subject to the PDB for eviction.
                 *  Additional policies may be added in the future. Clients making eviction decisions should disallow eviction of unhealthy pods if they encounter an unrecognized policy in this field.
                 *  This field is beta-level. The eviction API uses this field when the feature gate PDBUnhealthyPodEvictionPolicy is enabled (enabled by default).
                 */
                "unhealthyPodEvictionPolicy"?: string;
            };
        };
        /**
         * SecureSettings is a list of references to Kubernetes secrets containing sensitive configuration options for Elasticsearch.
         */
        "secureSettings"?: Array<{
            /**
             * Entries define how to project each key-value pair in the secret to filesystem paths. If not defined, all keys will be projected to similarly named paths in the filesystem. If defined, only the specified keys will be projected to the corresponding paths.
             */
            "entries"?: Array<{
                /**
                 * Key is the key contained in the secret.
                 */
                "key": string;
                /**
                 * Path is the relative file path to map the key to. Path must not be an absolute file path and must not contain any ".." components.
                 */
                "path"?: string;
            }>;
            /**
             * SecretName is the name of the secret.
             */
            "secretName": string;
        }>;
        /**
         * UpdateStrategy specifies how updates to the cluster should be performed.
         */
        "updateStrategy"?: {
            /**
             * ChangeBudget defines the constraints to consider when applying changes to the Elasticsearch cluster.
             */
            "changeBudget"?: {
                /**
                 * MaxSurge is the maximum number of new pods that can be created exceeding the original number of pods defined in the specification. MaxSurge is only taken into consideration when scaling up. Setting a negative value will disable the restriction. Defaults to unbounded if not specified.
                 */
                "maxSurge"?: number;
                /**
                 * MaxUnavailable is the maximum number of pods that can be unavailable (not ready) during the update due to circumstances under the control of the operator. Setting a negative value will disable this restriction. Defaults to 1 if not specified.
                 */
                "maxUnavailable"?: number;
            };
        };
        /**
         * Version of Elasticsearch.
         */
        "version"?: string;
    };
    /**
     * ElasticsearchStatus defines the observed state of Elasticsearch
     */
    "status"?: {
        "availableNodes"?: number;
        /**
         * ElasticsearchHealth is the health of the cluster as returned by the health API.
         */
        "health"?: string;
        /**
         * ElasticsearchOrchestrationPhase is the phase Elasticsearch is in from the controller point of view.
         */
        "phase"?: string;
    };
}
/**
 * Elasticsearch represents an Elasticsearch resource in a Kubernetes cluster.
 */
export declare class Elasticsearch extends Model<IElasticsearch> implements IElasticsearch {
    "apiVersion": IElasticsearch["apiVersion"];
    "kind": IElasticsearch["kind"];
    "metadata"?: IElasticsearch["metadata"];
    "spec"?: IElasticsearch["spec"];
    "status"?: IElasticsearch["status"];
    static apiVersion: IElasticsearch["apiVersion"];
    static kind: IElasticsearch["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IElasticsearch>;
    constructor(data?: ModelData<IElasticsearch>);
}
