import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * VMAlert  executes a list of given alerting or recording rules against configured address.
 */
export interface IVMAlert {
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
    "kind": "VMAlert";
    "metadata"?: IObjectMeta;
    /**
     * VMAlertSpec defines the desired state of VMAlert
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
         * Containers property allows to inject additions sidecars or to patch existing containers.
         * It can be useful for proxies, backup, etc.
         */
        "containers"?: Array<{}>;
        /**
         * Datasource Victoria Metrics or VMSelect url. Required parameter. e.g. http://127.0.0.1:8428
         */
        "datasource": {
            /**
             * BasicAuth allow an endpoint to authenticate over basic authentication
             */
            "basicAuth"?: {
                /**
                 * Password defines reference for secret with password value
                 * The secret needs to be in the same namespace as scrape object
                 */
                "password"?: {
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
                 * PasswordFile defines path to password file at disk
                 * must be pre-mounted
                 */
                "password_file"?: string;
                /**
                 * Username defines reference for secret with username value
                 * The secret needs to be in the same namespace as scrape object
                 */
                "username"?: {
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
             * Path to bearer token file
             */
            "bearerTokenFile"?: string;
            /**
             * Optional bearer auth token to use for -remoteWrite.url
             */
            "bearerTokenSecret"?: {
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
             * Headers allow configuring custom http headers
             * Must be in form of semicolon separated header with value
             * e.g.
             * headerName:headerValue
             * vmalert supports it since 1.79.0 version
             */
            "headers"?: Array<string>;
            /**
             * OAuth2 defines OAuth2 configuration
             */
            "oauth2"?: {};
            /**
             * TLSConfig specifies TLSConfig configuration parameters.
             */
            "tlsConfig"?: {};
            /**
             * Victoria Metrics or VMSelect url. Required parameter. E.g. http://127.0.0.1:8428
             */
            "url": string;
        };
        /**
         * DisableSelfServiceScrape controls creation of VMServiceScrape by operator
         * for the application.
         * Has priority over `VM_DISABLESELFSERVICESCRAPECREATION` operator env variable
         */
        "disableSelfServiceScrape"?: boolean;
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
         * EnforcedNamespaceLabel enforces adding a namespace label of origin for each alert
         * and metric that is user created. The label value will always be the namespace of the object that is
         * being created.
         */
        "enforcedNamespaceLabel"?: string;
        /**
         * EvaluationInterval defines how often to evaluate rules by default
         */
        "evaluationInterval"?: string;
        /**
         * ExternalLabels in the form 'name: value' to add to all generated recording rules and alerts.
         */
        "externalLabels"?: {
            [key: string]: string;
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
         * InitContainers allows adding initContainers to the pod definition.
         * Any errors during the execution of an initContainer will lead to a restart of the Pod.
         * More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/
         */
        "initContainers"?: Array<{}>;
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
         * LogFormat for VMAlert to be configured with.
         * default or json
         */
        "logFormat"?: "default" | "json";
        /**
         * LogLevel for VMAlert to be configured with.
         */
        "logLevel"?: "INFO" | "WARN" | "ERROR" | "FATAL" | "PANIC";
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
         * Notifier prometheus alertmanager endpoint spec. Required at least one of notifier or notifiers when there are alerting rules. e.g. http://127.0.0.1:9093
         * If specified both notifier and notifiers, notifier will be added as last element to notifiers.
         * only one of notifier options could be chosen: notifierConfigRef or notifiers +  notifier
         */
        "notifier"?: {
            /**
             * BasicAuth allow an endpoint to authenticate over basic authentication
             */
            "basicAuth"?: {
                /**
                 * Password defines reference for secret with password value
                 * The secret needs to be in the same namespace as scrape object
                 */
                "password"?: {
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
                 * PasswordFile defines path to password file at disk
                 * must be pre-mounted
                 */
                "password_file"?: string;
                /**
                 * Username defines reference for secret with username value
                 * The secret needs to be in the same namespace as scrape object
                 */
                "username"?: {
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
             * Path to bearer token file
             */
            "bearerTokenFile"?: string;
            /**
             * Optional bearer auth token to use for -remoteWrite.url
             */
            "bearerTokenSecret"?: {
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
             * Headers allow configuring custom http headers
             * Must be in form of semicolon separated header with value
             * e.g.
             * headerName:headerValue
             * vmalert supports it since 1.79.0 version
             */
            "headers"?: Array<string>;
            /**
             * OAuth2 defines OAuth2 configuration
             */
            "oauth2"?: {};
            /**
             * Selector allows service discovery for alertmanager
             * in this case all matched vmalertmanager replicas will be added into vmalert notifier.url
             * as statefulset pod.fqdn
             */
            "selector"?: {
                /**
                 * A label selector is a label query over a set of resources. The result of matchLabels and
                 * matchExpressions are ANDed. An empty label selector matches all objects. A null
                 * label selector matches no objects.
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
                 * NamespaceSelector is a selector for selecting either all namespaces or a
                 * list of namespaces.
                 */
                "namespaceSelector"?: {
                    /**
                     * Boolean describing whether all namespaces are selected in contrast to a
                     * list restricting them.
                     */
                    "any"?: boolean;
                    /**
                     * List of namespace names.
                     */
                    "matchNames"?: Array<string>;
                };
            };
            /**
             * TLSConfig specifies TLSConfig configuration parameters.
             */
            "tlsConfig"?: {};
            /**
             * AlertManager url.  E.g. http://127.0.0.1:9093
             */
            "url"?: string;
        };
        /**
         * NotifierConfigRef reference for secret with notifier configuration for vmalert
         * only one of notifier options could be chosen: notifierConfigRef or notifiers +  notifier
         */
        "notifierConfigRef"?: {
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
         * Notifiers prometheus alertmanager endpoints. Required at least one of notifier or notifiers when there are alerting rules. e.g. http://127.0.0.1:9093
         * If specified both notifier and notifiers, notifier will be added as last element to notifiers.
         * only one of notifier options could be chosen: notifierConfigRef or notifiers +  notifier
         */
        "notifiers"?: Array<{
            /**
             * BasicAuth allow an endpoint to authenticate over basic authentication
             */
            "basicAuth"?: {
                /**
                 * Password defines reference for secret with password value
                 * The secret needs to be in the same namespace as scrape object
                 */
                "password"?: {
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
                 * PasswordFile defines path to password file at disk
                 * must be pre-mounted
                 */
                "password_file"?: string;
                /**
                 * Username defines reference for secret with username value
                 * The secret needs to be in the same namespace as scrape object
                 */
                "username"?: {
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
             * Path to bearer token file
             */
            "bearerTokenFile"?: string;
            /**
             * Optional bearer auth token to use for -remoteWrite.url
             */
            "bearerTokenSecret"?: {
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
             * Headers allow configuring custom http headers
             * Must be in form of semicolon separated header with value
             * e.g.
             * headerName:headerValue
             * vmalert supports it since 1.79.0 version
             */
            "headers"?: Array<string>;
            /**
             * OAuth2 defines OAuth2 configuration
             */
            "oauth2"?: {};
            /**
             * Selector allows service discovery for alertmanager
             * in this case all matched vmalertmanager replicas will be added into vmalert notifier.url
             * as statefulset pod.fqdn
             */
            "selector"?: {
                /**
                 * A label selector is a label query over a set of resources. The result of matchLabels and
                 * matchExpressions are ANDed. An empty label selector matches all objects. A null
                 * label selector matches no objects.
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
                 * NamespaceSelector is a selector for selecting either all namespaces or a
                 * list of namespaces.
                 */
                "namespaceSelector"?: {
                    /**
                     * Boolean describing whether all namespaces are selected in contrast to a
                     * list restricting them.
                     */
                    "any"?: boolean;
                    /**
                     * List of namespace names.
                     */
                    "matchNames"?: Array<string>;
                };
            };
            /**
             * TLSConfig specifies TLSConfig configuration parameters.
             */
            "tlsConfig"?: {};
            /**
             * AlertManager url.  E.g. http://127.0.0.1:9093
             */
            "url"?: string;
        }>;
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
         * PodMetadata configures Labels and Annotations which are propagated to the VMAlert pods.
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
         * RemoteRead Optional URL to read vmalert state (persisted via RemoteWrite)
         * This configuration only makes sense if alerts state has been successfully
         * persisted (via RemoteWrite) before.
         * see -remoteRead.url docs in vmalerts for details.
         * E.g. http://127.0.0.1:8428
         */
        "remoteRead"?: {
            /**
             * BasicAuth allow an endpoint to authenticate over basic authentication
             */
            "basicAuth"?: {
                /**
                 * Password defines reference for secret with password value
                 * The secret needs to be in the same namespace as scrape object
                 */
                "password"?: {
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
                 * PasswordFile defines path to password file at disk
                 * must be pre-mounted
                 */
                "password_file"?: string;
                /**
                 * Username defines reference for secret with username value
                 * The secret needs to be in the same namespace as scrape object
                 */
                "username"?: {
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
             * Path to bearer token file
             */
            "bearerTokenFile"?: string;
            /**
             * Optional bearer auth token to use for -remoteWrite.url
             */
            "bearerTokenSecret"?: {
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
             * Headers allow configuring custom http headers
             * Must be in form of semicolon separated header with value
             * e.g.
             * headerName:headerValue
             * vmalert supports it since 1.79.0 version
             */
            "headers"?: Array<string>;
            /**
             * Lookback defines how far to look into past for alerts timeseries. For example, if lookback=1h then range from now() to now()-1h will be scanned. (default 1h0m0s)
             * Applied only to RemoteReadSpec
             */
            "lookback"?: string;
            /**
             * OAuth2 defines OAuth2 configuration
             */
            "oauth2"?: {};
            /**
             * TLSConfig specifies TLSConfig configuration parameters.
             */
            "tlsConfig"?: {};
            /**
             * URL of the endpoint to send samples to.
             */
            "url": string;
        };
        /**
         * RemoteWrite Optional URL to remote-write compatible storage to persist
         * vmalert state and rule results to.
         * Rule results will be persisted according to each rule.
         * Alerts state will be persisted in the form of time series named ALERTS and ALERTS_FOR_STATE
         * see -remoteWrite.url docs in vmalerts for details.
         * E.g. http://127.0.0.1:8428
         */
        "remoteWrite"?: {
            /**
             * BasicAuth allow an endpoint to authenticate over basic authentication
             */
            "basicAuth"?: {
                /**
                 * Password defines reference for secret with password value
                 * The secret needs to be in the same namespace as scrape object
                 */
                "password"?: {
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
                 * PasswordFile defines path to password file at disk
                 * must be pre-mounted
                 */
                "password_file"?: string;
                /**
                 * Username defines reference for secret with username value
                 * The secret needs to be in the same namespace as scrape object
                 */
                "username"?: {
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
             * Path to bearer token file
             */
            "bearerTokenFile"?: string;
            /**
             * Optional bearer auth token to use for -remoteWrite.url
             */
            "bearerTokenSecret"?: {
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
             * Defines number of readers that concurrently write into remote storage (default 1)
             */
            "concurrency"?: number;
            /**
             * Defines interval of flushes to remote write endpoint (default 5s)
             */
            "flushInterval"?: string;
            /**
             * Headers allow configuring custom http headers
             * Must be in form of semicolon separated header with value
             * e.g.
             * headerName:headerValue
             * vmalert supports it since 1.79.0 version
             */
            "headers"?: Array<string>;
            /**
             * Defines defines max number of timeseries to be flushed at once (default 1000)
             */
            "maxBatchSize"?: number;
            /**
             * Defines the max number of pending datapoints to remote write endpoint (default 100000)
             */
            "maxQueueSize"?: number;
            /**
             * OAuth2 defines OAuth2 configuration
             */
            "oauth2"?: {};
            /**
             * TLSConfig specifies TLSConfig configuration parameters.
             */
            "tlsConfig"?: {};
            /**
             * URL of the endpoint to send samples to.
             */
            "url": string;
        };
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
         * The number of old ReplicaSets to retain to allow rollback in deployment or
         * maximum number of revisions that will be maintained in the Deployment revision history.
         * Has no effect at StatefulSets
         * Defaults to 10.
         */
        "revisionHistoryLimitCount"?: number;
        /**
         * RollingUpdate - overrides deployment update params.
         */
        "rollingUpdate"?: {
            /**
             * The maximum number of pods that can be scheduled above the desired number of
             * pods.
             * Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%).
             * This can not be 0 if MaxUnavailable is 0.
             * Absolute number is calculated from percentage by rounding up.
             * Defaults to 25%.
             * Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when
             * the rolling update starts, such that the total number of old and new pods do not exceed
             * 130% of desired pods. Once old pods have been killed,
             * new ReplicaSet can be scaled up further, ensuring that total number of pods running
             * at any time during the update is at most 130% of desired pods.
             */
            "maxSurge"?: number | string;
            /**
             * The maximum number of pods that can be unavailable during the update.
             * Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%).
             * Absolute number is calculated from percentage by rounding down.
             * This can not be 0 if MaxSurge is 0.
             * Defaults to 25%.
             * Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods
             * immediately when the rolling update starts. Once new pods are ready, old ReplicaSet
             * can be scaled down further, followed by scaling up the new ReplicaSet, ensuring
             * that the total number of pods available at all times during the update is at
             * least 70% of desired pods.
             */
            "maxUnavailable"?: number | string;
        };
        /**
         * RuleNamespaceSelector to be selected for VMRules discovery.
         * Works in combination with Selector.
         * If both nil - behaviour controlled by selectAllByDefault
         * NamespaceSelector nil - only objects at VMAlert namespace.
         */
        "ruleNamespaceSelector"?: {
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
         * RulePath to the file with alert rules.
         * Supports patterns. Flag can be specified multiple times.
         * Examples:
         * -rule /path/to/file. Path to a single file with alerting rules
         * -rule dir/\*.yaml -rule /\*.yaml. Relative path to all .yaml files in folder,
         * absolute path to all .yaml files in root.
         * by default operator adds /etc/vmalert/configs/base/vmalert.yaml
         */
        "rulePath"?: Array<string>;
        /**
         * RuleSelector selector to select which VMRules to mount for loading alerting
         * rules from.
         * Works in combination with NamespaceSelector.
         * If both nil - behaviour controlled by selectAllByDefault
         * NamespaceSelector nil - only objects at VMAlert namespace.
         */
        "ruleSelector"?: {
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
         * SelectAllByDefault changes default behavior for empty CRD selectors, such RuleSelector.
         * with selectAllByDefault: true and empty serviceScrapeSelector and RuleNamespaceSelector
         * Operator selects all exist serviceScrapes
         * with selectAllByDefault: false - selects nothing
         */
        "selectAllByDefault"?: boolean;
        /**
         * ServiceAccountName is the name of the ServiceAccount to use to run the pods
         */
        "serviceAccountName"?: string;
        /**
         * ServiceScrapeSpec that will be added to vmalert VMServiceScrape spec
         */
        "serviceScrapeSpec"?: {};
        /**
         * ServiceSpec that will be added to vmalert service spec
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
         * UpdateStrategy - overrides default update strategy.
         */
        "updateStrategy"?: "Recreate" | "RollingUpdate";
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
     * VMAlertStatus defines the observed state of VMAlert
     */
    "status"?: {
        /**
         * AvailableReplicas Total number of available pods (ready for at least minReadySeconds)
         * targeted by this VMAlert cluster.
         */
        "availableReplicas"?: number;
        /**
         * Reason defines fail reason for update process, effective only for statefulMode
         */
        "reason"?: string;
        /**
         * ReplicaCount Total number of non-terminated pods targeted by this VMAlert
         * cluster (their labels match the selector).
         */
        "replicas"?: number;
        /**
         * UnavailableReplicas Total number of unavailable pods targeted by this VMAlert cluster.
         */
        "unavailableReplicas"?: number;
        /**
         * UpdateStatus defines a status for update rollout, effective only for statefulMode
         */
        "updateStatus"?: string;
        /**
         * UpdatedReplicas Total number of non-terminated pods targeted by this VMAlert
         * cluster that have the desired version spec.
         */
        "updatedReplicas"?: number;
    };
}
/**
 * VMAlert  executes a list of given alerting or recording rules against configured address.
 */
export declare class VMAlert extends Model<IVMAlert> implements IVMAlert {
    "apiVersion": IVMAlert["apiVersion"];
    "kind": IVMAlert["kind"];
    "metadata"?: IVMAlert["metadata"];
    "spec"?: IVMAlert["spec"];
    "status"?: IVMAlert["status"];
    static apiVersion: IVMAlert["apiVersion"];
    static kind: IVMAlert["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IVMAlert>;
    constructor(data?: ModelData<IVMAlert>);
}
