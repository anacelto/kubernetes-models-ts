import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * VMAuth is the Schema for the vmauths API
 */
export interface IVMAuth {
    /**
     * APIVersion defines the versioned schema of this representation of an object.
     * Servers should convert recognized schemas to the latest internal value, and
     * may reject unrecognized values.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "operator.victoriametrics.com/v1beta1";
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "VMAuth";
    "metadata"?: IObjectMeta;
    /**
     * VMAuthSpec defines the desired state of VMAuth
     */
    "spec"?: {
        /**
         * Affinity If specified, the pod's scheduling constraints.
         */
        "affinity"?: {};
        /**
         * ConfigMaps is a list of ConfigMaps in the same namespace as the Application
         * object, which shall be mounted into the Application container
         * at /etc/vm/configs/CONFIGMAP_NAME folder
         */
        "configMaps"?: Array<string>;
        /**
         * ConfigReloaderExtraArgs that will be passed to  VMAuths config-reloader container
         * for example resyncInterval: "30s"
         */
        "configReloaderExtraArgs"?: {
            [key: string]: string;
        };
        /**
         * ConfigReloaderImageTag defines image:tag for config-reloader container
         */
        "configReloaderImageTag"?: string;
        /**
         * ConfigReloaderResources config-reloader container resource request and limits, https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         * if not defined default resources from operator config will be used
         */
        "configReloaderResources"?: {
            /**
             * Claims lists the names of resources, defined in spec.resourceClaims,
             * that are used by this container.
             *
             * This is an alpha field and requires enabling the
             * DynamicResourceAllocation feature gate.
             *
             * This field is immutable. It can only be set for containers.
             */
            "claims"?: Array<{
                /**
                 * Name must match the name of one entry in pod.spec.resourceClaims of
                 * the Pod where this field is used. It makes that resource available
                 * inside a container.
                 */
                "name": string;
            }>;
            /**
             * Limits describes the maximum amount of compute resources allowed.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            "limits"?: {
                [key: string]: number | string;
            };
            /**
             * Requests describes the minimum amount of compute resources required.
             * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
             * otherwise to an implementation-defined value. Requests cannot exceed Limits.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            "requests"?: {
                [key: string]: number | string;
            };
        };
        /**
         * ConfigSecret is the name of a Kubernetes Secret in the same namespace as the
         * VMAuth object, which contains auth configuration for vmauth,
         * configuration must be inside secret key: config.yaml.
         * It must be created and managed manually.
         * If it's defined, configuration for vmauth becomes unmanaged and operator'll not create any related secrets/config-reloaders
         * Deprecated, use externalConfig.secretRef instead
         */
        "configSecret"?: string;
        /**
         * Containers property allows to inject additions sidecars or to patch existing containers.
         * It can be useful for proxies, backup, etc.
         */
        "containers"?: Array<{}>;
        /**
         * DefaultURLs backend url for non-matching paths filter
         * usually used for default backend with error message
         */
        "default_url"?: Array<string>;
        /**
         * DisableSelfServiceScrape controls creation of VMServiceScrape by operator
         * for the application.
         * Has priority over `VM_DISABLESELFSERVICESCRAPECREATION` operator env variable
         */
        "disableSelfServiceScrape"?: boolean;
        /**
         * DiscoverBackendIPs instructs discovering URLPrefix backend IPs via DNS.
         */
        "discover_backend_ips"?: boolean;
        /**
         * Specifies the DNS parameters of a pod.
         * Parameters specified here will be merged to the generated DNS
         * configuration based on DNSPolicy.
         */
        "dnsConfig"?: {
            /**
             * A list of DNS name server IP addresses.
             * This will be appended to the base nameservers generated from DNSPolicy.
             * Duplicated nameservers will be removed.
             */
            "nameservers"?: Array<string>;
            /**
             * A list of DNS resolver options.
             * This will be merged with the base options generated from DNSPolicy.
             * Duplicated entries will be removed. Resolution options given in Options
             * will override those that appear in the base DNSPolicy.
             */
            "options"?: Array<{
                /**
                 * Required.
                 */
                "name"?: string;
                "value"?: string;
            }>;
            /**
             * A list of DNS search domains for host-name lookup.
             * This will be appended to the base search paths generated from DNSPolicy.
             * Duplicated search paths will be removed.
             */
            "searches"?: Array<string>;
        };
        /**
         * DNSPolicy sets DNS policy for the pod
         */
        "dnsPolicy"?: string;
        /**
         * DropSrcPathPrefixParts is the number of `/`-delimited request path prefix parts to drop before proxying the request to backend.
         * See [here](https://docs.victoriametrics.com/vmauth#dropping-request-path-prefix) for more details.
         */
        "drop_src_path_prefix_parts"?: number;
        /**
         * ExternalConfig defines a source of external VMAuth configuration.
         * If it's defined, configuration for vmauth becomes unmanaged and operator'll not create any related secrets/config-reloaders
         */
        "externalConfig"?: {
            /**
             * LocalPath contains static path to a config, which is managed externally for cases
             * when using secrets is not applicable, e.g.: Vault sidecar.
             */
            "localPath"?: string;
            /**
             * SecretRef defines selector for externally managed secret which contains configuration
             */
            "secretRef"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent.
                 * This field is effectively required, but due to backwards compatibility is
                 * allowed to be empty. Instances of this type with an empty value here are
                 * almost certainly wrong.
                 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
            };
        };
        /**
         * ExtraArgs that will be passed to the application container
         * for example remoteWrite.tmpDataPath: /tmp
         */
        "extraArgs"?: {
            [key: string]: string;
        };
        /**
         * ExtraEnvs that will be passed to the application container
         */
        "extraEnvs"?: Array<{
            /**
             * Name of the environment variable. Must be a C_IDENTIFIER.
             */
            "name": string;
            /**
             * Variable references $(VAR_NAME) are expanded
             * using the previously defined environment variables in the container and
             * any service environment variables. If a variable cannot be resolved,
             * the reference in the input string will be unchanged. Double $$ are reduced
             * to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e.
             * "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)".
             * Escaped references will never be expanded, regardless of whether the variable
             * exists or not.
             * Defaults to "".
             */
            "value"?: string;
        }>;
        /**
         * Headers represent additional http headers, that vmauth uses
         * in form of ["header_key: header_value"]
         * multiple values for header key:
         * ["header_key: value1,value2"]
         * it's available since 1.68.0 version of vmauth
         */
        "headers"?: Array<string>;
        /**
         * HostAliasesUnderScore provides mapping for ip and hostname,
         * that would be propagated to pod,
         * cannot be used with HostNetwork.
         * Has Priority over hostAliases field
         */
        "host_aliases"?: Array<{
            /**
             * Hostnames for the above IP address.
             */
            "hostnames"?: Array<string>;
            /**
             * IP address of the host file entry.
             */
            "ip": string;
        }>;
        /**
         * HostAliases provides mapping for ip and hostname,
         * that would be propagated to pod,
         * cannot be used with HostNetwork.
         */
        "hostAliases"?: Array<{
            /**
             * Hostnames for the above IP address.
             */
            "hostnames"?: Array<string>;
            /**
             * IP address of the host file entry.
             */
            "ip": string;
        }>;
        /**
         * HostNetwork controls whether the pod may use the node network namespace
         */
        "hostNetwork"?: boolean;
        /**
         * Image - docker image settings
         * if no specified operator uses default version from operator config
         */
        "image"?: {
            /**
             * PullPolicy describes how to pull docker image
             */
            "pullPolicy"?: string;
            /**
             * Repository contains name of docker image + it's repository if needed
             */
            "repository"?: string;
            /**
             * Tag contains desired docker image version
             */
            "tag"?: string;
        };
        /**
         * ImagePullSecrets An optional list of references to secrets in the same namespace
         * to use for pulling images from registries
         * see https://kubernetes.io/docs/concepts/containers/images/#referring-to-an-imagepullsecrets-on-a-pod
         */
        "imagePullSecrets"?: Array<{
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
        }>;
        /**
         * Ingress enables ingress configuration for VMAuth.
         */
        "ingress"?: {
            /**
             * Annotations is an unstructured key value map stored with a resource that may be
             * set by external tools to store and retrieve arbitrary metadata. They are not
             * queryable and should be preserved when modifying objects.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
             */
            "annotations"?: {
                [key: string]: string;
            };
            /**
             * ClassName defines ingress class name for VMAuth
             */
            "class_name"?: string;
            /**
             * ExtraRules - additional rules for ingress,
             * must be checked for correctness by user.
             */
            "extraRules"?: Array<{
                /**
                 * host is the fully qualified domain name of a network host, as defined by RFC 3986.
                 * Note the following deviations from the "host" part of the
                 * URI as defined in RFC 3986:
                 * 1. IPs are not allowed. Currently an IngressRuleValue can only apply to
                 *    the IP in the Spec of the parent Ingress.
                 * 2. The `:` delimiter is not respected because ports are not allowed.
                 * 	  Currently the port of an Ingress is implicitly :80 for http and
                 * 	  :443 for https.
                 * Both these may change in the future.
                 * Incoming requests are matched against the host before the
                 * IngressRuleValue. If the host is unspecified, the Ingress routes all
                 * traffic based on the specified IngressRuleValue.
                 *
                 * host can be "precise" which is a domain name without the terminating dot of
                 * a network host (e.g. "foo.bar.com") or "wildcard", which is a domain name
                 * prefixed with a single wildcard label (e.g. "\*.foo.com").
                 * The wildcard character '\*' must appear by itself as the first DNS label and
                 * matches only a single label. You cannot have a wildcard label by itself (e.g. Host == "\*").
                 * Requests will be matched against the Host field in the following way:
                 * 1. If host is precise, the request matches this rule if the http host header is equal to Host.
                 * 2. If host is a wildcard, then the request matches this rule if the http host header
                 * is to equal to the suffix (removing the first label) of the wildcard rule.
                 */
                "host"?: string;
                /**
                 * HTTPIngressRuleValue is a list of http selectors pointing to backends.
                 * In the example: http://<host>/<path>?<searchpart> -> backend where
                 * where parts of the url correspond to RFC 3986, this resource will be used
                 * to match against everything after the last '/' and before the first '?'
                 * or '#'.
                 */
                "http"?: {
                    /**
                     * paths is a collection of paths that map requests to backends.
                     */
                    "paths": Array<{
                        /**
                         * backend defines the referenced service endpoint to which the traffic
                         * will be forwarded to.
                         */
                        "backend": {
                            /**
                             * resource is an ObjectRef to another Kubernetes resource in the namespace
                             * of the Ingress object. If resource is specified, a service.Name and
                             * service.Port must not be specified.
                             * This is a mutually exclusive setting with "Service".
                             */
                            "resource"?: {
                                /**
                                 * APIGroup is the group for the resource being referenced.
                                 * If APIGroup is not specified, the specified Kind must be in the core API group.
                                 * For any other third-party types, APIGroup is required.
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
                             * service references a service as a backend.
                             * This is a mutually exclusive setting with "Resource".
                             */
                            "service"?: {
                                /**
                                 * name is the referenced service. The service must exist in
                                 * the same namespace as the Ingress object.
                                 */
                                "name": string;
                                /**
                                 * port of the referenced service. A port name or port number
                                 * is required for a IngressServiceBackend.
                                 */
                                "port"?: {
                                    /**
                                     * name is the name of the port on the Service.
                                     * This is a mutually exclusive setting with "Number".
                                     */
                                    "name"?: string;
                                    /**
                                     * number is the numerical port number (e.g. 80) on the Service.
                                     * This is a mutually exclusive setting with "Name".
                                     */
                                    "number"?: number;
                                };
                            };
                        };
                        /**
                         * path is matched against the path of an incoming request. Currently it can
                         * contain characters disallowed from the conventional "path" part of a URL
                         * as defined by RFC 3986. Paths must begin with a '/' and must be present
                         * when using PathType with value "Exact" or "Prefix".
                         */
                        "path"?: string;
                        /**
                         * pathType determines the interpretation of the path matching. PathType can
                         * be one of the following values:
                         * \* Exact: Matches the URL path exactly.
                         * \* Prefix: Matches based on a URL path prefix split by '/'. Matching is
                         *   done on a path element by element basis. A path element refers is the
                         *   list of labels in the path split by the '/' separator. A request is a
                         *   match for path p if every p is an element-wise prefix of p of the
                         *   request path. Note that if the last element of the path is a substring
                         *   of the last element in request path, it is not a match (e.g. /foo/bar
                         *   matches /foo/bar/baz, but does not match /foo/barbaz).
                         * \* ImplementationSpecific: Interpretation of the Path matching is up to
                         *   the IngressClass. Implementations can treat this as a separate PathType
                         *   or treat it identically to Prefix or Exact path types.
                         * Implementations are required to support all path types.
                         */
                        "pathType": string;
                    }>;
                };
            }>;
            /**
             * ExtraTLS - additional TLS configuration for ingress
             * must be checked for correctness by user.
             */
            "extraTls"?: Array<{
                /**
                 * hosts is a list of hosts included in the TLS certificate. The values in
                 * this list must match the name/s used in the tlsSecret. Defaults to the
                 * wildcard host setting for the loadbalancer controller fulfilling this
                 * Ingress, if left unspecified.
                 */
                "hosts"?: Array<string>;
                /**
                 * secretName is the name of the secret used to terminate TLS traffic on
                 * port 443. Field is left optional to allow TLS routing based on SNI
                 * hostname alone. If the SNI host in a listener conflicts with the "Host"
                 * header field used by an IngressRule, the SNI host is used for termination
                 * and value of the "Host" header is used for routing.
                 */
                "secretName"?: string;
            }>;
            /**
             * Host defines ingress host parameter for default rule
             * It will be used, only if TlsHosts is empty
             */
            "host"?: string;
            /**
             * Labels Map of string keys and values that can be used to organize and categorize
             * (scope and select) objects. May match selectors of replication controllers
             * and services.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
             */
            "labels"?: {
                [key: string]: string;
            };
            /**
             * Name must be unique within a namespace. Is required when creating resources, although
             * some resources may allow a client to request the generation of an appropriate name
             * automatically. Name is primarily intended for creation idempotence and configuration
             * definition.
             * Cannot be updated.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
             */
            "name"?: string;
            /**
             * TlsHosts configures TLS access for ingress, tlsSecretName must be defined for it.
             */
            "tlsHosts"?: Array<string>;
            /**
             * TlsSecretName defines secretname at the VMAuth namespace with cert and key
             * https://kubernetes.io/docs/concepts/services-networking/ingress/#tls
             */
            "tlsSecretName"?: string;
        };
        /**
         * InitContainers allows adding initContainers to the pod definition.
         * Any errors during the execution of an initContainer will lead to a restart of the Pod.
         * More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/
         */
        "initContainers"?: Array<{}>;
        /**
         * IPFilters defines per target src ip filters
         * supported only with enterprise version of [vmauth](https://docs.victoriametrics.com/vmauth/#ip-filters)
         */
        "ip_filters"?: {
            "allow_list"?: Array<string>;
            "deny_list"?: Array<string>;
        };
        /**
         * License allows to configure license key to be used for enterprise features.
         * Using license key is supported starting from VictoriaMetrics v1.94.0.
         * See [here](https://docs.victoriametrics.com/enterprise)
         */
        "license"?: {
            /**
             * Enterprise license key. This flag is available only in [VictoriaMetrics enterprise](https://docs.victoriametrics.com/enterprise).
             * To request a trial license, [go to](https://victoriametrics.com/products/enterprise/trial)
             */
            "key"?: string;
            /**
             * KeyRef is reference to secret with license key for enterprise features.
             */
            "keyRef"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent.
                 * This field is effectively required, but due to backwards compatibility is
                 * allowed to be empty. Instances of this type with an empty value here are
                 * almost certainly wrong.
                 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
            };
        };
        /**
         * LivenessProbe that will be added CRD pod
         */
        "livenessProbe"?: {};
        /**
         * LoadBalancingPolicy defines load balancing policy to use for backend urls.
         * Supported policies: least_loaded, first_available.
         * See [here](https://docs.victoriametrics.com/vmauth#load-balancing) for more details (default "least_loaded")
         */
        "load_balancing_policy"?: "least_loaded" | "first_available";
        /**
         * LogFormat for VMAuth to be configured with.
         */
        "logFormat"?: "default" | "json";
        /**
         * LogLevel for victoria metrics single to be configured with.
         */
        "logLevel"?: "INFO" | "WARN" | "ERROR" | "FATAL" | "PANIC";
        /**
         * MaxConcurrentRequests defines max concurrent requests per user
         * 300 is default value for vmauth
         */
        "max_concurrent_requests"?: number;
        /**
         * MinReadySeconds defines a minim number os seconds to wait before starting update next pod
         * if previous in healthy state
         * Has no effect for VLogs and VMSingle
         */
        "minReadySeconds"?: number;
        /**
         * NodeSelector Define which Nodes the Pods are scheduled on.
         */
        "nodeSelector"?: {
            [key: string]: string;
        };
        /**
         * Paused If set to true all actions on the underlying managed objects are not
         * going to be performed, except for delete actions.
         */
        "paused"?: boolean;
        /**
         * PodDisruptionBudget created by operator
         */
        "podDisruptionBudget"?: {
            /**
             * An eviction is allowed if at most "maxUnavailable" pods selected by
             * "selector" are unavailable after the eviction, i.e. even in absence of
             * the evicted pod. For example, one can prevent all voluntary evictions
             * by specifying 0. This is a mutually exclusive setting with "minAvailable".
             */
            "maxUnavailable"?: number | string;
            /**
             * An eviction is allowed if at least "minAvailable" pods selected by
             * "selector" will still be available after the eviction, i.e. even in the
             * absence of the evicted pod.  So for example you can prevent all voluntary
             * evictions by specifying "100%".
             */
            "minAvailable"?: number | string;
            /**
             * replaces default labels selector generated by operator
             * it's useful when you need to create custom budget
             */
            "selectorLabels"?: {
                [key: string]: string;
            };
        };
        /**
         * PodMetadata configures Labels and Annotations which are propagated to the VMAuth pods.
         */
        "podMetadata"?: {
            /**
             * Annotations is an unstructured key value map stored with a resource that may be
             * set by external tools to store and retrieve arbitrary metadata. They are not
             * queryable and should be preserved when modifying objects.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
             */
            "annotations"?: {
                [key: string]: string;
            };
            /**
             * Labels Map of string keys and values that can be used to organize and categorize
             * (scope and select) objects. May match selectors of replication controllers
             * and services.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
             */
            "labels"?: {
                [key: string]: string;
            };
            /**
             * Name must be unique within a namespace. Is required when creating resources, although
             * some resources may allow a client to request the generation of an appropriate name
             * automatically. Name is primarily intended for creation idempotence and configuration
             * definition.
             * Cannot be updated.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
             */
            "name"?: string;
        };
        /**
         * Port listen address
         */
        "port"?: string;
        /**
         * PriorityClassName class assigned to the Pods
         */
        "priorityClassName"?: string;
        /**
         * ReadinessGates defines pod readiness gates
         */
        "readinessGates"?: Array<{
            /**
             * ConditionType refers to a condition in the pod's condition list with matching type.
             */
            "conditionType": string;
        }>;
        /**
         * ReadinessProbe that will be added CRD pod
         */
        "readinessProbe"?: {};
        /**
         * ReplicaCount is the expected size of the Application.
         */
        "replicaCount"?: number;
        /**
         * Resources container resource request and limits, https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         * if not defined default resources from operator config will be used
         */
        "resources"?: {
            /**
             * Claims lists the names of resources, defined in spec.resourceClaims,
             * that are used by this container.
             *
             * This is an alpha field and requires enabling the
             * DynamicResourceAllocation feature gate.
             *
             * This field is immutable. It can only be set for containers.
             */
            "claims"?: Array<{
                /**
                 * Name must match the name of one entry in pod.spec.resourceClaims of
                 * the Pod where this field is used. It makes that resource available
                 * inside a container.
                 */
                "name": string;
            }>;
            /**
             * Limits describes the maximum amount of compute resources allowed.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            "limits"?: {
                [key: string]: number | string;
            };
            /**
             * Requests describes the minimum amount of compute resources required.
             * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
             * otherwise to an implementation-defined value. Requests cannot exceed Limits.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            "requests"?: {
                [key: string]: number | string;
            };
        };
        /**
         * ResponseHeaders represent additional http headers, that vmauth adds for request response
         * in form of ["header_key: header_value"]
         * multiple values for header key:
         * ["header_key: value1,value2"]
         * it's available since 1.93.0 version of vmauth
         */
        "response_headers"?: Array<string>;
        /**
         * RetryStatusCodes defines http status codes in numeric format for request retries
         * e.g. [429,503]
         */
        "retry_status_codes"?: Array<number>;
        /**
         * The number of old ReplicaSets to retain to allow rollback in deployment or
         * maximum number of revisions that will be maintained in the Deployment revision history.
         * Has no effect at StatefulSets
         * Defaults to 10.
         */
        "revisionHistoryLimitCount"?: number;
        /**
         * RuntimeClassName - defines runtime class for kubernetes pod.
         * https://kubernetes.io/docs/concepts/containers/runtime-class/
         */
        "runtimeClassName"?: string;
        /**
         * SchedulerName - defines kubernetes scheduler name
         */
        "schedulerName"?: string;
        /**
         * Secrets is a list of Secrets in the same namespace as the Application
         * object, which shall be mounted into the Application container
         * at /etc/vm/secrets/SECRET_NAME folder
         */
        "secrets"?: Array<string>;
        /**
         * SecurityContext holds pod-level security attributes and common container settings.
         * This defaults to the default PodSecurityContext.
         */
        "securityContext"?: {};
        /**
         * SelectAllByDefault changes default behavior for empty CRD selectors, such userSelector.
         * with selectAllByDefault: true and empty userSelector and userNamespaceSelector
         * Operator selects all exist users
         * with selectAllByDefault: false - selects nothing
         */
        "selectAllByDefault"?: boolean;
        /**
         * ServiceAccountName is the name of the ServiceAccount to use to run the pods
         */
        "serviceAccountName"?: string;
        /**
         * ServiceScrapeSpec that will be added to vmauth VMServiceScrape spec
         */
        "serviceScrapeSpec"?: {};
        /**
         * ServiceSpec that will be added to vmsingle service spec
         */
        "serviceSpec"?: {
            /**
             * EmbeddedObjectMetadata defines objectMeta for additional service.
             */
            "metadata"?: {
                /**
                 * Annotations is an unstructured key value map stored with a resource that may be
                 * set by external tools to store and retrieve arbitrary metadata. They are not
                 * queryable and should be preserved when modifying objects.
                 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
                 */
                "annotations"?: {
                    [key: string]: string;
                };
                /**
                 * Labels Map of string keys and values that can be used to organize and categorize
                 * (scope and select) objects. May match selectors of replication controllers
                 * and services.
                 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
                 */
                "labels"?: {
                    [key: string]: string;
                };
                /**
                 * Name must be unique within a namespace. Is required when creating resources, although
                 * some resources may allow a client to request the generation of an appropriate name
                 * automatically. Name is primarily intended for creation idempotence and configuration
                 * definition.
                 * Cannot be updated.
                 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
                 */
                "name"?: string;
            };
            /**
             * ServiceSpec describes the attributes that a user creates on a service.
             * More info: https://kubernetes.io/docs/concepts/services-networking/service/
             */
            "spec": {};
            /**
             * UseAsDefault applies changes from given service definition to the main object Service
             * Changing from headless service to clusterIP or loadbalancer may break cross-component communication
             */
            "useAsDefault"?: boolean;
        };
        /**
         * StartupProbe that will be added to CRD pod
         */
        "startupProbe"?: {};
        /**
         * TerminationGracePeriodSeconds period for container graceful termination
         */
        "terminationGracePeriodSeconds"?: number;
        /**
         * TLSConfig specifies TLSConfig configuration parameters.
         */
        "tlsConfig"?: {
            /**
             * Stuct containing the CA cert to use for the targets.
             */
            "ca"?: {
                /**
                 * ConfigMap containing data to use for the targets.
                 */
                "configMap"?: {
                    /**
                     * The key to select.
                     */
                    "key": string;
                    /**
                     * Name of the referent.
                     * This field is effectively required, but due to backwards compatibility is
                     * allowed to be empty. Instances of this type with an empty value here are
                     * almost certainly wrong.
                     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Specify whether the ConfigMap or its key must be defined
                     */
                    "optional"?: boolean;
                };
                /**
                 * Secret containing data to use for the targets.
                 */
                "secret"?: {
                    /**
                     * The key of the secret to select from.  Must be a valid secret key.
                     */
                    "key": string;
                    /**
                     * Name of the referent.
                     * This field is effectively required, but due to backwards compatibility is
                     * allowed to be empty. Instances of this type with an empty value here are
                     * almost certainly wrong.
                     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Specify whether the Secret or its key must be defined
                     */
                    "optional"?: boolean;
                };
            };
            /**
             * Path to the CA cert in the container to use for the targets.
             */
            "caFile"?: string;
            /**
             * Struct containing the client cert file for the targets.
             */
            "cert"?: {
                /**
                 * ConfigMap containing data to use for the targets.
                 */
                "configMap"?: {
                    /**
                     * The key to select.
                     */
                    "key": string;
                    /**
                     * Name of the referent.
                     * This field is effectively required, but due to backwards compatibility is
                     * allowed to be empty. Instances of this type with an empty value here are
                     * almost certainly wrong.
                     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Specify whether the ConfigMap or its key must be defined
                     */
                    "optional"?: boolean;
                };
                /**
                 * Secret containing data to use for the targets.
                 */
                "secret"?: {
                    /**
                     * The key of the secret to select from.  Must be a valid secret key.
                     */
                    "key": string;
                    /**
                     * Name of the referent.
                     * This field is effectively required, but due to backwards compatibility is
                     * allowed to be empty. Instances of this type with an empty value here are
                     * almost certainly wrong.
                     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Specify whether the Secret or its key must be defined
                     */
                    "optional"?: boolean;
                };
            };
            /**
             * Path to the client cert file in the container for the targets.
             */
            "certFile"?: string;
            /**
             * Disable target certificate validation.
             */
            "insecureSkipVerify"?: boolean;
            /**
             * Path to the client key file in the container for the targets.
             */
            "keyFile"?: string;
            /**
             * Secret containing the client key file for the targets.
             */
            "keySecret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent.
                 * This field is effectively required, but due to backwards compatibility is
                 * allowed to be empty. Instances of this type with an empty value here are
                 * almost certainly wrong.
                 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
            };
            /**
             * Used to verify the hostname for the targets.
             */
            "serverName"?: string;
        };
        /**
         * Tolerations If specified, the pod's tolerations.
         */
        "tolerations"?: Array<{
            /**
             * Effect indicates the taint effect to match. Empty means match all taint effects.
             * When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
             */
            "effect"?: string;
            /**
             * Key is the taint key that the toleration applies to. Empty means match all taint keys.
             * If the key is empty, operator must be Exists; this combination means to match all values and all keys.
             */
            "key"?: string;
            /**
             * Operator represents a key's relationship to the value.
             * Valid operators are Exists and Equal. Defaults to Equal.
             * Exists is equivalent to wildcard for value, so that a pod can
             * tolerate all taints of a particular category.
             */
            "operator"?: string;
            /**
             * TolerationSeconds represents the period of time the toleration (which must be
             * of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default,
             * it is not set, which means tolerate the taint forever (do not evict). Zero and
             * negative values will be treated as 0 (evict immediately) by the system.
             */
            "tolerationSeconds"?: number;
            /**
             * Value is the taint value the toleration matches to.
             * If the operator is Exists, the value should be empty, otherwise just a regular string.
             */
            "value"?: string;
        }>;
        /**
         * TopologySpreadConstraints embedded kubernetes pod configuration option,
         * controls how pods are spread across your cluster among failure-domains
         * such as regions, zones, nodes, and other user-defined topology domains
         * https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/
         */
        "topologySpreadConstraints"?: Array<{}>;
        /**
         * UnauthorizedAccessConfig configures access for un authorized users
         */
        "unauthorizedAccessConfig"?: Array<{
            /**
             * DiscoverBackendIPs instructs discovering URLPrefix backend IPs via DNS.
             */
            "discover_backend_ips"?: boolean;
            /**
             * DropSrcPathPrefixParts is the number of `/`-delimited request path prefix parts to drop before proxying the request to backend.
             * See [here](https://docs.victoriametrics.com/vmauth#dropping-request-path-prefix) for more details.
             */
            "drop_src_path_prefix_parts"?: number;
            /**
             * RequestHeaders represent additional http headers, that vmauth uses
             * in form of ["header_key: header_value"]
             * multiple values for header key:
             * ["header_key: value1,value2"]
             * it's available since 1.68.0 version of vmauth
             */
            "headers"?: Array<string>;
            /**
             * LoadBalancingPolicy defines load balancing policy to use for backend urls.
             * Supported policies: least_loaded, first_available.
             * See [here](https://docs.victoriametrics.com/vmauth#load-balancing) for more details (default "least_loaded")
             */
            "load_balancing_policy"?: "least_loaded" | "first_available";
            /**
             * ResponseHeaders represent additional http headers, that vmauth adds for request response
             * in form of ["header_key: header_value"]
             * multiple values for header key:
             * ["header_key: value1,value2"]
             * it's available since 1.93.0 version of vmauth
             */
            "response_headers"?: Array<string>;
            /**
             * RetryStatusCodes defines http status codes in numeric format for request retries
             * Can be defined per target or at VMUser.spec level
             * e.g. [429,503]
             */
            "retry_status_codes"?: Array<number>;
            /**
             * SrcHeaders is an optional list of headers, which must match request headers.
             */
            "src_headers"?: Array<string>;
            /**
             * SrcHosts is an optional list of regular expressions, which must match the request hostname.
             */
            "src_hosts"?: Array<string>;
            /**
             * SrcPaths is an optional list of regular expressions, which must match the request path.
             */
            "src_paths"?: Array<string>;
            /**
             * SrcQueryArgs is an optional list of query args, which must match request URL query args.
             */
            "src_query_args"?: Array<string>;
            /**
             * UrlPrefix contains backend url prefixes for the proxied request url.
             */
            "url_prefix"?: Array<string>;
        }>;
        /**
         * UseDefaultResources controls resource settings
         * By default, operator sets built-in resource requirements
         */
        "useDefaultResources"?: boolean;
        /**
         * UseStrictSecurity enables strict security mode for component
         * it restricts disk writes access
         * uses non-root user out of the box
         * drops not needed security permissions
         */
        "useStrictSecurity"?: boolean;
        /**
         * UseVMConfigReloader replaces prometheus-like config-reloader
         * with vm one. It uses secrets watch instead of file watch
         * which greatly increases speed of config updates
         */
        "useVMConfigReloader"?: boolean;
        /**
         * UserNamespaceSelector Namespaces to be selected for  VMAuth discovery.
         * Works in combination with Selector.
         * NamespaceSelector nil - only objects at VMAuth namespace.
         * Selector nil - only objects at NamespaceSelector namespaces.
         * If both nil - behaviour controlled by selectAllByDefault
         */
        "userNamespaceSelector"?: {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            "matchExpressions"?: Array<{
                /**
                 * key is the label key that the selector applies to.
                 */
                "key": string;
                /**
                 * operator represents a key's relationship to a set of values.
                 * Valid operators are In, NotIn, Exists and DoesNotExist.
                 */
                "operator": string;
                /**
                 * values is an array of string values. If the operator is In or NotIn,
                 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                 * the values array must be empty. This array is replaced during a strategic
                 * merge patch.
                 */
                "values"?: Array<string>;
            }>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            "matchLabels"?: {
                [key: string]: string;
            };
        };
        /**
         * UserSelector defines VMUser to be selected for config file generation.
         * Works in combination with NamespaceSelector.
         * NamespaceSelector nil - only objects at VMAuth namespace.
         * If both nil - behaviour controlled by selectAllByDefault
         */
        "userSelector"?: {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            "matchExpressions"?: Array<{
                /**
                 * key is the label key that the selector applies to.
                 */
                "key": string;
                /**
                 * operator represents a key's relationship to a set of values.
                 * Valid operators are In, NotIn, Exists and DoesNotExist.
                 */
                "operator": string;
                /**
                 * values is an array of string values. If the operator is In or NotIn,
                 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                 * the values array must be empty. This array is replaced during a strategic
                 * merge patch.
                 */
                "values"?: Array<string>;
            }>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            "matchLabels"?: {
                [key: string]: string;
            };
        };
        /**
         * VolumeMounts allows configuration of additional VolumeMounts on the output Deployment/StatefulSet definition.
         * VolumeMounts specified will be appended to other VolumeMounts in the Application container
         */
        "volumeMounts"?: Array<{
            /**
             * Path within the container at which the volume should be mounted.  Must
             * not contain ':'.
             */
            "mountPath": string;
            /**
             * mountPropagation determines how mounts are propagated from the host
             * to container and the other way around.
             * When not set, MountPropagationNone is used.
             * This field is beta in 1.10.
             * When RecursiveReadOnly is set to IfPossible or to Enabled, MountPropagation must be None or unspecified
             * (which defaults to None).
             */
            "mountPropagation"?: string;
            /**
             * This must match the Name of a Volume.
             */
            "name": string;
            /**
             * Mounted read-only if true, read-write otherwise (false or unspecified).
             * Defaults to false.
             */
            "readOnly"?: boolean;
            /**
             * RecursiveReadOnly specifies whether read-only mounts should be handled
             * recursively.
             *
             * If ReadOnly is false, this field has no meaning and must be unspecified.
             *
             * If ReadOnly is true, and this field is set to Disabled, the mount is not made
             * recursively read-only.  If this field is set to IfPossible, the mount is made
             * recursively read-only, if it is supported by the container runtime.  If this
             * field is set to Enabled, the mount is made recursively read-only if it is
             * supported by the container runtime, otherwise the pod will not be started and
             * an error will be generated to indicate the reason.
             *
             * If this field is set to IfPossible or Enabled, MountPropagation must be set to
             * None (or be unspecified, which defaults to None).
             *
             * If this field is not specified, it is treated as an equivalent of Disabled.
             */
            "recursiveReadOnly"?: string;
            /**
             * Path within the volume from which the container's volume should be mounted.
             * Defaults to "" (volume's root).
             */
            "subPath"?: string;
            /**
             * Expanded path within the volume from which the container's volume should be mounted.
             * Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment.
             * Defaults to "" (volume's root).
             * SubPathExpr and SubPath are mutually exclusive.
             */
            "subPathExpr"?: string;
        }>;
        /**
         * Volumes allows configuration of additional volumes on the output Deployment/StatefulSet definition.
         * Volumes specified will be appended to other volumes that are generated.
         * / +optional
         */
        "volumes"?: Array<{}>;
    };
    /**
     * VMAuthStatus defines the observed state of VMAuth
     */
    "status"?: {
        /**
         * Reason defines fail reason for update process, effective only for statefulMode
         */
        "reason"?: string;
        /**
         * UpdateStatus defines a status for update rollout, effective only for statefulMode
         */
        "updateStatus"?: string;
    };
}
/**
 * VMAuth is the Schema for the vmauths API
 */
export declare class VMAuth extends Model<IVMAuth> implements IVMAuth {
    "apiVersion": IVMAuth["apiVersion"];
    "kind": IVMAuth["kind"];
    "metadata"?: IVMAuth["metadata"];
    "spec"?: IVMAuth["spec"];
    "status"?: IVMAuth["status"];
    static apiVersion: IVMAuth["apiVersion"];
    static kind: IVMAuth["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IVMAuth>;
    constructor(data?: ModelData<IVMAuth>);
}
