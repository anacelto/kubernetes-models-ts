import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * Order is a type to represent an Order with an ACME server
 */
export interface IOrder {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "certmanager.k8s.io/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "Order";
    "metadata": IObjectMeta;
    "spec"?: {
        /**
         * CommonName is the common name as specified on the DER encoded CSR. If CommonName is not specified, the first DNSName specified will be used as the CommonName. At least one of CommonName or a DNSNames must be set. This field must match the corresponding field on the DER encoded CSR.
         */
        "commonName"?: string;
        /**
         * Config specifies a mapping from DNS identifiers to how those identifiers should be solved when performing ACME challenges. A config entry must exist for each domain listed in DNSNames and CommonName. Only \*\*one\*\* of 'config' or 'solvers' may be specified, and if both are specified then no action will be performed on the Order resource.
         *  This field will be removed when support for solver config specified on the Certificate under certificate.spec.acme has been removed. DEPRECATED: this field will be removed in future. Solver configuration must instead be provided on ACME Issuer resources.
         */
        "config"?: Array<{
            /**
             * DNS01 contains DNS01 challenge solving configuration
             */
            "dns01"?: {
                /**
                 * Provider is the name of the DNS01 challenge provider to use, as configure on the referenced Issuer or ClusterIssuer resource.
                 */
                "provider": string;
            };
            /**
             * Domains is the list of domains that this SolverConfig applies to.
             */
            "domains": Array<string>;
            /**
             * HTTP01 contains HTTP01 challenge solving configuration
             */
            "http01"?: {
                /**
                 * Ingress is the name of an Ingress resource that will be edited to include the ACME HTTP01 'well-known' challenge path in order to solve HTTP01 challenges. If this field is specified, 'ingressClass' \*\*must not\*\* be specified.
                 */
                "ingress"?: string;
                /**
                 * IngressClass is the ingress class that should be set on new ingress resources that are created in order to solve HTTP01 challenges. This field should be used when using an ingress controller such as nginx, which 'flattens' ingress configuration instead of maintaining a 1:1 mapping between loadbalancer IP:ingress resources. If this field is not set, and 'ingress' is not set, then ingresses without an ingress class set will be created to solve HTTP01 challenges. If this field is specified, 'ingress' \*\*must not\*\* be specified.
                 */
                "ingressClass"?: string;
            };
        }>;
        /**
         * Certificate signing request bytes in DER encoding. This will be used when finalizing the order. This field must be set on the order.
         */
        "csr": string;
        /**
         * DNSNames is a list of DNS names that should be included as part of the Order validation process. If CommonName is not specified, the first DNSName specified will be used as the CommonName. At least one of CommonName or a DNSNames must be set. This field must match the corresponding field on the DER encoded CSR.
         */
        "dnsNames"?: Array<string>;
        /**
         * IssuerRef references a properly configured ACME-type Issuer which should be used to create this Order. If the Issuer does not exist, processing will be retried. If the Issuer is not an 'ACME' Issuer, an error will be returned and the Order will be marked as failed.
         */
        "issuerRef": {
            "group"?: string;
            "kind"?: string;
            "name": string;
        };
    };
    "status"?: {
        /**
         * Certificate is a copy of the PEM encoded certificate for this Order. This field will be populated after the order has been successfully finalized with the ACME server, and the order has transitioned to the 'valid' state.
         */
        "certificate"?: string;
        /**
         * Challenges is a list of ChallengeSpecs for Challenges that must be created in order to complete this Order.
         */
        "challenges"?: Array<{
            /**
             * AuthzURL is the URL to the ACME Authorization resource that this challenge is a part of.
             */
            "authzURL": string;
            /**
             * Config specifies the solver configuration for this challenge. Only \*\*one\*\* of 'config' or 'solver' may be specified, and if both are specified then no action will be performed on the Challenge resource. DEPRECATED: the 'solver' field should be specified instead
             */
            "config"?: {
                /**
                 * DNS01 contains DNS01 challenge solving configuration
                 */
                "dns01"?: {
                    /**
                     * Provider is the name of the DNS01 challenge provider to use, as configure on the referenced Issuer or ClusterIssuer resource.
                     */
                    "provider": string;
                };
                /**
                 * HTTP01 contains HTTP01 challenge solving configuration
                 */
                "http01"?: {
                    /**
                     * Ingress is the name of an Ingress resource that will be edited to include the ACME HTTP01 'well-known' challenge path in order to solve HTTP01 challenges. If this field is specified, 'ingressClass' \*\*must not\*\* be specified.
                     */
                    "ingress"?: string;
                    /**
                     * IngressClass is the ingress class that should be set on new ingress resources that are created in order to solve HTTP01 challenges. This field should be used when using an ingress controller such as nginx, which 'flattens' ingress configuration instead of maintaining a 1:1 mapping between loadbalancer IP:ingress resources. If this field is not set, and 'ingress' is not set, then ingresses without an ingress class set will be created to solve HTTP01 challenges. If this field is specified, 'ingress' \*\*must not\*\* be specified.
                     */
                    "ingressClass"?: string;
                };
            };
            /**
             * DNSName is the identifier that this challenge is for, e.g. example.com.
             */
            "dnsName": string;
            /**
             * IssuerRef references a properly configured ACME-type Issuer which should be used to create this Challenge. If the Issuer does not exist, processing will be retried. If the Issuer is not an 'ACME' Issuer, an error will be returned and the Challenge will be marked as failed.
             */
            "issuerRef": {
                "group"?: string;
                "kind"?: string;
                "name": string;
            };
            /**
             * Key is the ACME challenge key for this challenge
             */
            "key": string;
            /**
             * Solver contains the domain solving configuration that should be used to solve this challenge resource. Only \*\*one\*\* of 'config' or 'solver' may be specified, and if both are specified then no action will be performed on the Challenge resource.
             */
            "solver"?: {
                "dns01"?: {
                    /**
                     * ACMEIssuerDNS01ProviderAcmeDNS is a structure containing the configuration for ACME-DNS servers
                     */
                    "acmedns"?: {
                        "accountSecretRef": {
                            /**
                             * The key of the secret to select from. Must be a valid secret key.
                             */
                            "key"?: string;
                            /**
                             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                             */
                            "name": string;
                        };
                        "host": string;
                    };
                    /**
                     * ACMEIssuerDNS01ProviderAkamai is a structure containing the DNS configuration for Akamai DNS—Zone Record Management API
                     */
                    "akamai"?: {
                        "accessTokenSecretRef": {
                            /**
                             * The key of the secret to select from. Must be a valid secret key.
                             */
                            "key"?: string;
                            /**
                             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                             */
                            "name": string;
                        };
                        "clientSecretSecretRef": {
                            /**
                             * The key of the secret to select from. Must be a valid secret key.
                             */
                            "key"?: string;
                            /**
                             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                             */
                            "name": string;
                        };
                        "clientTokenSecretRef": {
                            /**
                             * The key of the secret to select from. Must be a valid secret key.
                             */
                            "key"?: string;
                            /**
                             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                             */
                            "name": string;
                        };
                        "serviceConsumerDomain": string;
                    };
                    /**
                     * ACMEIssuerDNS01ProviderAzureDNS is a structure containing the configuration for Azure DNS
                     */
                    "azuredns"?: {
                        "clientID": string;
                        "clientSecretSecretRef": {
                            /**
                             * The key of the secret to select from. Must be a valid secret key.
                             */
                            "key"?: string;
                            /**
                             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                             */
                            "name": string;
                        };
                        "environment"?: "AzurePublicCloud" | "AzureChinaCloud" | "AzureGermanCloud" | "AzureUSGovernmentCloud";
                        "hostedZoneName"?: string;
                        "resourceGroupName": string;
                        "subscriptionID": string;
                        "tenantID": string;
                    };
                    /**
                     * ACMEIssuerDNS01ProviderCloudDNS is a structure containing the DNS configuration for Google Cloud DNS
                     */
                    "clouddns"?: {
                        "project": string;
                        "serviceAccountSecretRef": {
                            /**
                             * The key of the secret to select from. Must be a valid secret key.
                             */
                            "key"?: string;
                            /**
                             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                             */
                            "name": string;
                        };
                    };
                    /**
                     * ACMEIssuerDNS01ProviderCloudflare is a structure containing the DNS configuration for Cloudflare
                     */
                    "cloudflare"?: {
                        "apiKeySecretRef": {
                            /**
                             * The key of the secret to select from. Must be a valid secret key.
                             */
                            "key"?: string;
                            /**
                             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                             */
                            "name": string;
                        };
                        "email": string;
                    };
                    /**
                     * CNAMEStrategy configures how the DNS01 provider should handle CNAME records when found in DNS zones.
                     */
                    "cnameStrategy"?: "None" | "Follow";
                    /**
                     * ACMEIssuerDNS01ProviderDigitalOcean is a structure containing the DNS configuration for DigitalOcean Domains
                     */
                    "digitalocean"?: {
                        "tokenSecretRef": {
                            /**
                             * The key of the secret to select from. Must be a valid secret key.
                             */
                            "key"?: string;
                            /**
                             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                             */
                            "name": string;
                        };
                    };
                    /**
                     * ACMEIssuerDNS01ProviderRFC2136 is a structure containing the configuration for RFC2136 DNS
                     */
                    "rfc2136"?: {
                        /**
                         * The IP address of the DNS supporting RFC2136. Required. Note: FQDN is not a valid value, only IP.
                         */
                        "nameserver": string;
                        /**
                         * The TSIG Algorithm configured in the DNS supporting RFC2136. Used only when ``tsigSecretSecretRef`` and ``tsigKeyName`` are defined. Supported values are (case-insensitive): ``HMACMD5`` (default), ``HMACSHA1``, ``HMACSHA256`` or ``HMACSHA512``.
                         */
                        "tsigAlgorithm"?: string;
                        /**
                         * The TSIG Key name configured in the DNS. If ``tsigSecretSecretRef`` is defined, this field is required.
                         */
                        "tsigKeyName"?: string;
                        /**
                         * The name of the secret containing the TSIG value. If ``tsigKeyName`` is defined, this field is required.
                         */
                        "tsigSecretSecretRef"?: {
                            /**
                             * The key of the secret to select from. Must be a valid secret key.
                             */
                            "key"?: string;
                            /**
                             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                             */
                            "name": string;
                        };
                    };
                    /**
                     * ACMEIssuerDNS01ProviderRoute53 is a structure containing the Route 53 configuration for AWS
                     */
                    "route53"?: {
                        /**
                         * The AccessKeyID is used for authentication. If not set we fall-back to using env vars, shared credentials file or AWS Instance metadata see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
                         */
                        "accessKeyID"?: string;
                        /**
                         * If set, the provider will manage only this zone in Route53 and will not do an lookup using the route53:ListHostedZonesByName api call.
                         */
                        "hostedZoneID"?: string;
                        /**
                         * Always set the region when using AccessKeyID and SecretAccessKey
                         */
                        "region": string;
                        /**
                         * Role is a Role ARN which the Route53 provider will assume using either the explicit credentials AccessKeyID/SecretAccessKey or the inferred credentials from environment variables, shared credentials file or AWS Instance metadata
                         */
                        "role"?: string;
                        /**
                         * The SecretAccessKey is used for authentication. If not set we fall-back to using env vars, shared credentials file or AWS Instance metadata https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
                         */
                        "secretAccessKeySecretRef"?: {
                            /**
                             * The key of the secret to select from. Must be a valid secret key.
                             */
                            "key"?: string;
                            /**
                             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                             */
                            "name": string;
                        };
                    };
                    /**
                     * ACMEIssuerDNS01ProviderWebhook specifies configuration for a webhook DNS01 provider, including where to POST ChallengePayload resources.
                     */
                    "webhook"?: {
                        /**
                         * Additional configuration that should be passed to the webhook apiserver when challenges are processed. This can contain arbitrary JSON data. Secret values should not be specified in this stanza. If secret values are needed (e.g. credentials for a DNS service), you should use a SecretKeySelector to reference a Secret resource. For details on the schema of this field, consult the webhook provider implementation's documentation.
                         */
                        "config"?: {};
                        /**
                         * The API group name that should be used when POSTing ChallengePayload resources to the webhook apiserver. This should be the same as the GroupName specified in the webhook provider implementation.
                         */
                        "groupName": string;
                        /**
                         * The name of the solver to use, as defined in the webhook provider implementation. This will typically be the name of the provider, e.g. 'cloudflare'.
                         */
                        "solverName": string;
                    };
                };
                /**
                 * ACMEChallengeSolverHTTP01 contains configuration detailing how to solve HTTP01 challenges within a Kubernetes cluster. Typically this is accomplished through creating 'routes' of some description that configure ingress controllers to direct traffic to 'solver pods', which are responsible for responding to the ACME server's HTTP requests.
                 */
                "http01"?: {
                    /**
                     * The ingress based HTTP01 challenge solver will solve challenges by creating or modifying Ingress resources in order to route requests for '/.well-known/acme-challenge/XYZ' to 'challenge solver' pods that are provisioned by cert-manager for each Challenge to be completed.
                     */
                    "ingress"?: {
                        /**
                         * The ingress class to use when creating Ingress resources to solve ACME challenges that use this challenge solver. Only one of 'class' or 'name' may be specified.
                         */
                        "class"?: string;
                        /**
                         * The name of the ingress resource that should have ACME challenge solving routes inserted into it in order to solve HTTP01 challenges. This is typically used in conjunction with ingress controllers like ingress-gce, which maintains a 1:1 mapping between external IPs and ingress resources.
                         */
                        "name"?: string;
                        /**
                         * Optional pod template used to configure the ACME challenge solver pods used for HTTP01 challenges
                         */
                        "podTemplate"?: {
                            /**
                             * ObjectMeta overrides for the pod used to solve HTTP01 challenges. Only the 'labels' and 'annotations' fields may be set. If labels or annotations overlap with in-built values, the values here will override the in-built values.
                             */
                            "metadata"?: {};
                            /**
                             * PodSpec defines overrides for the HTTP01 challenge solver pod. Only the 'nodeSelector', 'affinity' and 'tolerations' fields are supported currently. All other fields will be ignored.
                             */
                            "spec"?: {
                                /**
                                 * If specified, the pod's scheduling constraints
                                 */
                                "affinity"?: {
                                    /**
                                     * Describes node affinity scheduling rules for the pod.
                                     */
                                    "nodeAffinity"?: {
                                        /**
                                         * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
                                         */
                                        "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
                                            /**
                                             * A node selector term, associated with the corresponding weight.
                                             */
                                            "preference": {
                                                /**
                                                 * A list of node selector requirements by node's labels.
                                                 */
                                                "matchExpressions"?: Array<{
                                                    /**
                                                     * The label key that the selector applies to.
                                                     */
                                                    "key": string;
                                                    /**
                                                     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                                                     */
                                                    "operator": string;
                                                    /**
                                                     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                                                     */
                                                    "values"?: Array<string>;
                                                }>;
                                                /**
                                                 * A list of node selector requirements by node's fields.
                                                 */
                                                "matchFields"?: Array<{
                                                    /**
                                                     * The label key that the selector applies to.
                                                     */
                                                    "key": string;
                                                    /**
                                                     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                                                     */
                                                    "operator": string;
                                                    /**
                                                     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                                                     */
                                                    "values"?: Array<string>;
                                                }>;
                                            };
                                            /**
                                             * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
                                             */
                                            "weight": number;
                                        }>;
                                        /**
                                         * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
                                         */
                                        "requiredDuringSchedulingIgnoredDuringExecution"?: {
                                            /**
                                             * Required. A list of node selector terms. The terms are ORed.
                                             */
                                            "nodeSelectorTerms": Array<{
                                                /**
                                                 * A list of node selector requirements by node's labels.
                                                 */
                                                "matchExpressions"?: Array<{
                                                    /**
                                                     * The label key that the selector applies to.
                                                     */
                                                    "key": string;
                                                    /**
                                                     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                                                     */
                                                    "operator": string;
                                                    /**
                                                     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                                                     */
                                                    "values"?: Array<string>;
                                                }>;
                                                /**
                                                 * A list of node selector requirements by node's fields.
                                                 */
                                                "matchFields"?: Array<{
                                                    /**
                                                     * The label key that the selector applies to.
                                                     */
                                                    "key": string;
                                                    /**
                                                     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                                                     */
                                                    "operator": string;
                                                    /**
                                                     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                                                     */
                                                    "values"?: Array<string>;
                                                }>;
                                            }>;
                                        };
                                    };
                                    /**
                                     * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
                                     */
                                    "podAffinity"?: {
                                        /**
                                         * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
                                         */
                                        "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
                                            /**
                                             * Required. A pod affinity term, associated with the corresponding weight.
                                             */
                                            "podAffinityTerm": {
                                                /**
                                                 * A label query over a set of resources, in this case pods.
                                                 */
                                                "labelSelector"?: {
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
                                                 * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
                                                 */
                                                "namespaces"?: Array<string>;
                                                /**
                                                 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                                                 */
                                                "topologyKey": string;
                                            };
                                            /**
                                             * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
                                             */
                                            "weight": number;
                                        }>;
                                        /**
                                         * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
                                         */
                                        "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
                                            /**
                                             * A label query over a set of resources, in this case pods.
                                             */
                                            "labelSelector"?: {
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
                                             * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
                                             */
                                            "namespaces"?: Array<string>;
                                            /**
                                             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                                             */
                                            "topologyKey": string;
                                        }>;
                                    };
                                    /**
                                     * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
                                     */
                                    "podAntiAffinity"?: {
                                        /**
                                         * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
                                         */
                                        "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
                                            /**
                                             * Required. A pod affinity term, associated with the corresponding weight.
                                             */
                                            "podAffinityTerm": {
                                                /**
                                                 * A label query over a set of resources, in this case pods.
                                                 */
                                                "labelSelector"?: {
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
                                                 * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
                                                 */
                                                "namespaces"?: Array<string>;
                                                /**
                                                 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                                                 */
                                                "topologyKey": string;
                                            };
                                            /**
                                             * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
                                             */
                                            "weight": number;
                                        }>;
                                        /**
                                         * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
                                         */
                                        "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
                                            /**
                                             * A label query over a set of resources, in this case pods.
                                             */
                                            "labelSelector"?: {
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
                                             * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
                                             */
                                            "namespaces"?: Array<string>;
                                            /**
                                             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                                             */
                                            "topologyKey": string;
                                        }>;
                                    };
                                };
                                /**
                                 * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
                                 */
                                "nodeSelector"?: {
                                    [key: string]: string;
                                };
                                /**
                                 * If specified, the pod's tolerations.
                                 */
                                "tolerations"?: Array<{
                                    /**
                                     * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
                                     */
                                    "effect"?: string;
                                    /**
                                     * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
                                     */
                                    "key"?: string;
                                    /**
                                     * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
                                     */
                                    "operator"?: string;
                                    /**
                                     * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
                                     */
                                    "tolerationSeconds"?: number;
                                    /**
                                     * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
                                     */
                                    "value"?: string;
                                }>;
                            };
                        };
                        /**
                         * Optional service type for Kubernetes solver service
                         */
                        "serviceType"?: string;
                    };
                };
                /**
                 * Selector selects a set of DNSNames on the Certificate resource that should be solved using this challenge solver.
                 */
                "selector"?: {
                    /**
                     * List of DNSNames that this solver will be used to solve. If specified and a match is found, a dnsNames selector will take precedence over a dnsZones selector. If multiple solvers match with the same dnsNames value, the solver with the most matching labels in matchLabels will be selected. If neither has more matches, the solver defined earlier in the list will be selected.
                     */
                    "dnsNames"?: Array<string>;
                    /**
                     * List of DNSZones that this solver will be used to solve. The most specific DNS zone match specified here will take precedence over other DNS zone matches, so a solver specifying sys.example.com will be selected over one specifying example.com for the domain www.sys.example.com. If multiple solvers match with the same dnsZones value, the solver with the most matching labels in matchLabels will be selected. If neither has more matches, the solver defined earlier in the list will be selected.
                     */
                    "dnsZones"?: Array<string>;
                    /**
                     * A label selector that is used to refine the set of certificate's that this challenge solver will apply to.
                     */
                    "matchLabels"?: {
                        [key: string]: string;
                    };
                };
            };
            /**
             * Token is the ACME challenge token for this challenge.
             */
            "token": string;
            /**
             * Type is the type of ACME challenge this resource represents, e.g. "dns01" or "http01"
             */
            "type": string;
            /**
             * URL is the URL of the ACME Challenge resource for this challenge. This can be used to lookup details about the status of this challenge.
             */
            "url": string;
            /**
             * Wildcard will be true if this challenge is for a wildcard identifier, for example '\*.example.com'
             */
            "wildcard"?: boolean;
        }>;
        /**
         * FailureTime stores the time that this order failed. This is used to influence garbage collection and back-off.
         */
        "failureTime"?: string;
        /**
         * FinalizeURL of the Order. This is used to obtain certificates for this order once it has been completed.
         */
        "finalizeURL"?: string;
        /**
         * Reason optionally provides more information about a why the order is in the current state.
         */
        "reason"?: string;
        /**
         * State contains the current state of this Order resource. States 'success' and 'expired' are 'final'
         */
        "state"?: "valid" | "ready" | "pending" | "processing" | "invalid" | "expired" | "errored";
        /**
         * URL of the Order. This will initially be empty when the resource is first created. The Order controller will populate this field when the Order is first processed. This field will be immutable after it is initially set.
         */
        "url"?: string;
    };
}
/**
 * Order is a type to represent an Order with an ACME server
 */
export declare class Order extends Model<IOrder> implements IOrder {
    "apiVersion": IOrder["apiVersion"];
    "kind": IOrder["kind"];
    "metadata": IOrder["metadata"];
    "spec"?: IOrder["spec"];
    "status"?: IOrder["status"];
    static apiVersion: IOrder["apiVersion"];
    static kind: IOrder["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IOrder>;
    constructor(data?: ModelData<IOrder>);
}
