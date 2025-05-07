import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * EnterpriseSearch is a Kubernetes CRD to represent Enterprise Search.
 */
export interface IEnterpriseSearch {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "enterprisesearch.k8s.elastic.co/v1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "EnterpriseSearch";
    "metadata"?: IObjectMeta;
    /**
     * EnterpriseSearchSpec holds the specification of an Enterprise Search resource.
     */
    "spec"?: {
        /**
         * Config holds the Enterprise Search configuration.
         */
        "config"?: {};
        /**
         * ConfigRef contains a reference to an existing Kubernetes Secret holding the Enterprise Search configuration. Configuration settings are merged and have precedence over settings specified in `config`.
         */
        "configRef"?: {
            /**
             * SecretName is the name of the secret.
             */
            "secretName"?: string;
        };
        /**
         * Count of Enterprise Search instances to deploy.
         */
        "count"?: number;
        /**
         * ElasticsearchRef is a reference to the Elasticsearch cluster running in the same Kubernetes cluster.
         */
        "elasticsearchRef"?: {
            /**
             * Name of an existing Kubernetes object corresponding to an Elastic resource managed by ECK.
             */
            "name"?: string;
            /**
             * Namespace of the Kubernetes object. If empty, defaults to the current namespace.
             */
            "namespace"?: string;
            /**
             * SecretName is the name of an existing Kubernetes secret that contains connection information for associating an Elastic resource not managed by the operator. The referenced secret must contain the following: - `url`: the URL to reach the Elastic resource - `username`: the username of the user to be authenticated to the Elastic resource - `password`: the password of the user to be authenticated to the Elastic resource - `ca.crt`: the CA certificate in PEM format (optional). This field cannot be used in combination with the other fields name, namespace or serviceName.
             */
            "secretName"?: string;
            /**
             * ServiceName is the name of an existing Kubernetes service which is used to make requests to the referenced object. It has to be in the same namespace as the referenced resource. If left empty, the default HTTP service of the referenced resource is used.
             */
            "serviceName"?: string;
        };
        /**
         * HTTP holds the HTTP layer configuration for Enterprise Search resource.
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
         * Image is the Enterprise Search Docker image to deploy.
         */
        "image"?: string;
        /**
         * PodTemplate provides customisation options (labels, annotations, affinity rules, resource requests, and so on) for the Enterprise Search pods.
         */
        "podTemplate"?: {};
        /**
         * RevisionHistoryLimit is the number of revisions to retain to allow rollback in the underlying Deployment.
         */
        "revisionHistoryLimit"?: number;
        /**
         * ServiceAccountName is used to check access from the current resource to a resource (for ex. Elasticsearch) in a different namespace. Can only be used if ECK is enforcing RBAC on references.
         */
        "serviceAccountName"?: string;
        /**
         * Version of Enterprise Search.
         */
        "version"?: string;
    };
    /**
     * EnterpriseSearchStatus defines the observed state of EnterpriseSearch
     */
    "status"?: {
        /**
         * Association is the status of any auto-linking to Elasticsearch clusters.
         */
        "associationStatus"?: string;
        /**
         * AvailableNodes is the number of available replicas in the deployment.
         */
        "availableNodes"?: number;
        /**
         * Count corresponds to Scale.Status.Replicas, which is the actual number of observed instances of the scaled object.
         */
        "count"?: number;
        /**
         * Health of the deployment.
         */
        "health"?: string;
        /**
         * ObservedGeneration represents the .metadata.generation that the status is based upon. It corresponds to the metadata generation, which is updated on mutation by the API Server. If the generation observed in status diverges from the generation in metadata, the Enterprise Search controller has not yet processed the changes contained in the Enterprise Search specification.
         */
        "observedGeneration"?: number;
        /**
         * Selector is the label selector used to find all pods.
         */
        "selector"?: string;
        /**
         * ExternalService is the name of the service associated to the Enterprise Search Pods.
         */
        "service"?: string;
        /**
         * Version of the stack resource currently running. During version upgrades, multiple versions may run in parallel: this value specifies the lowest version currently running.
         */
        "version"?: string;
    };
}
/**
 * EnterpriseSearch is a Kubernetes CRD to represent Enterprise Search.
 */
export declare class EnterpriseSearch extends Model<IEnterpriseSearch> implements IEnterpriseSearch {
    "apiVersion": IEnterpriseSearch["apiVersion"];
    "kind": IEnterpriseSearch["kind"];
    "metadata"?: IEnterpriseSearch["metadata"];
    "spec"?: IEnterpriseSearch["spec"];
    "status"?: IEnterpriseSearch["status"];
    static apiVersion: IEnterpriseSearch["apiVersion"];
    static kind: IEnterpriseSearch["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IEnterpriseSearch>;
    constructor(data?: ModelData<IEnterpriseSearch>);
}
