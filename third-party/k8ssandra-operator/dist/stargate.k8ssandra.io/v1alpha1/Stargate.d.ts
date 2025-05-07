import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * Stargate is the Schema for the stargates API
 */
export interface IStargate {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "stargate.k8ssandra.io/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "Stargate";
    "metadata"?: IObjectMeta;
    /**
     * Specification of the desired behavior of this Stargate resource.
     */
    "spec"?: {
        /**
         * Affinity is the affinity to apply to all the Stargate pods. Leave nil to let the controller reuse the same affinity rules used for data pods in this datacenter, if any. See https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity
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
                         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                         */
                        "namespaceSelector"?: {
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
                         * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
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
                     * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                     */
                    "namespaceSelector"?: {
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
                     * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
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
                         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                         */
                        "namespaceSelector"?: {
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
                         * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
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
                     * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                     */
                    "namespaceSelector"?: {
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
                     * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
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
         * AllowStargateOnDataNodes allows Stargate pods to be scheduled on a worker node already hosting data pods for this datacenter. The default is false, which means that Stargate pods will be scheduled on separate worker nodes. Note: if the datacenter pods have HostNetwork:true, then the Stargate pods will inherit of it, in which case it is possible that Stargate nodes won't be allowed to sit on data nodes even if this property is set to true, because of port conflicts on the same IP address.
         */
        "allowStargateOnDataNodes"?: boolean;
        /**
         * Whether to enable authentication for Stargate. The default is true; it is highly recommended to always leave authentication turned on, not only on Stargate nodes, but also on data nodes as well. Note that Stargate REST APIs are currently only accessible if authentication is enabled, and if the authenticator in use in the whole cluster is PasswordAuthenticator. The usage of any other authenticator will cause the REST API to become inaccessible, see https://github.com/stargate/stargate/issues/792 for more. Stargate CQL API however remains accessible even if authentication is disabled in the cluster, or when a custom authenticator is being used.
         */
        "auth"?: boolean;
        /**
         * Authentication options.
         */
        "authOptions"?: {
            /**
             * The method to use for authenticating requests to the Stargate APIs. Stargate currently has two authentication / authorization methods: - Table: table-based; - JWT: JSON web token (JWT)-based. The methods are mutually exclusive. The default method is Table.
             */
            "apiAuthMethod"?: "Table" | "JWT";
            /**
             * Required when using JWT authentication method, ignored otherwise.
             */
            "providerUrl"?: string;
            /**
             * The time-to-live in seconds of an API authentication token. Valid only for the Table authentication method. By default, the token persists for 30 minutes with a sliding window. Each use of the token to authenticate resets the 30-minute window. A token created and used after 29 minutes will authenticate a request, but if 31 minutes passes before use, the token will no longer exist. Default is 1800 seconds (30 minutes).
             */
            "tokenTtlSeconds"?: number;
        };
        /**
         * CassandraConfigMapRef is a reference to a ConfigMap that holds Cassandra configuration. The map should have a key named cassandra_yaml.
         */
        "cassandraConfigMapRef"?: {
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
        };
        /**
         * CassandraEncryption groups together encryption stores that are passed to the Stargate pods, so that they can be mounted as volumes.
         */
        "cassandraEncryption"?: {
            /**
             * Client encryption stores which are used by Cassandra and Reaper.
             */
            "clientEncryptionStores"?: {
                /**
                 * ref to the secret that contains the keystore password if password stored in different secret than keystoreSecretRef if key isn't specified explicitly, "keystore-password" entry will be used
                 */
                "keystorePasswordSecretRef"?: {
                    /**
                     * The key of the entry in the Secret resource's `data` field to be used.
                     */
                    "key"?: string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                     */
                    "name"?: string;
                };
                /**
                 * ref to the secret that contains the keystore and optionally its password (which can also be specified through the keystorePasswordSecretRef field) if keys are not specified, "keystore" entry and a "keystore-password" entry will be used
                 */
                "keystoreSecretRef": {
                    /**
                     * The key of the entry in the Secret resource's `data` field to be used.
                     */
                    "key"?: string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                     */
                    "name"?: string;
                };
                /**
                 * ref to the secret that contains the truststore password if password stored in different secret than keystoreSecretRef if key isn't specified  explicitly, "truststore-password" entry will be used
                 */
                "truststorePasswordSecretRef"?: {
                    /**
                     * The key of the entry in the Secret resource's `data` field to be used.
                     */
                    "key"?: string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                     */
                    "name"?: string;
                };
                /**
                 * ref to the secret that contains the truststore and optionally its password (which can also be specified through the truststorePasswordSecretRef field) if keys are not specified explicitly, "keystore" entry and a "keystore-password" entry will be used
                 */
                "truststoreSecretRef": {
                    /**
                     * The key of the entry in the Secret resource's `data` field to be used.
                     */
                    "key"?: string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                     */
                    "name"?: string;
                };
            };
            /**
             * Internode encryption stores which are used by Cassandra and Stargate.
             */
            "serverEncryptionStores"?: {
                /**
                 * ref to the secret that contains the keystore password if password stored in different secret than keystoreSecretRef if key isn't specified explicitly, "keystore-password" entry will be used
                 */
                "keystorePasswordSecretRef"?: {
                    /**
                     * The key of the entry in the Secret resource's `data` field to be used.
                     */
                    "key"?: string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                     */
                    "name"?: string;
                };
                /**
                 * ref to the secret that contains the keystore and optionally its password (which can also be specified through the keystorePasswordSecretRef field) if keys are not specified, "keystore" entry and a "keystore-password" entry will be used
                 */
                "keystoreSecretRef": {
                    /**
                     * The key of the entry in the Secret resource's `data` field to be used.
                     */
                    "key"?: string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                     */
                    "name"?: string;
                };
                /**
                 * ref to the secret that contains the truststore password if password stored in different secret than keystoreSecretRef if key isn't specified  explicitly, "truststore-password" entry will be used
                 */
                "truststorePasswordSecretRef"?: {
                    /**
                     * The key of the entry in the Secret resource's `data` field to be used.
                     */
                    "key"?: string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                     */
                    "name"?: string;
                };
                /**
                 * ref to the secret that contains the truststore and optionally its password (which can also be specified through the truststorePasswordSecretRef field) if keys are not specified explicitly, "keystore" entry and a "keystore-password" entry will be used
                 */
                "truststoreSecretRef": {
                    /**
                     * The key of the entry in the Secret resource's `data` field to be used.
                     */
                    "key"?: string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                     */
                    "name"?: string;
                };
            };
        };
        /**
         * ContainerImage is the image characteristics to use for Stargate containers. Leave nil to use a default image.
         */
        "containerImage"?: {
            /**
             * The image name to use.
             */
            "name"?: string;
            /**
             * The image pull policy to use. Defaults to "Always" if the tag is "latest", otherwise to "IfNotPresent".
             */
            "pullPolicy"?: "Always" | "IfNotPresent" | "Never";
            /**
             * The secret to use when pulling the image from private repositories. If specified, this secret will be passed to individual puller implementations for them to use. For example, in the case of Docker, only DockerConfig type secrets are honored. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod
             */
            "pullSecretRef"?: {
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
            };
            /**
             * The Docker registry to use. Defaults to "docker.io", the official Docker Hub.
             */
            "registry"?: string;
            /**
             * The Docker repository to use.
             */
            "repository"?: string;
            /**
             * The image tag to use. Defaults to "latest".
             */
            "tag"?: string;
        };
        /**
         * DatacenterRef is the namespace-local reference of a CassandraDatacenter resource where Stargate should be deployed.
         */
        "datacenterRef": {
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
        };
        /**
         * HeapSize sets the JVM heap size to use for Stargate. If no Resources are specified, this value will also be used to set a default memory request and limit for the Stargate pods: these will be set to HeapSize x2 and x4, respectively.
         */
        "heapSize"?: number | string;
        /**
         * LivenessProbe sets the Stargate liveness probe. Leave nil to use defaults.
         */
        "livenessProbe"?: {
            /**
             * Exec specifies the action to take.
             */
            "exec"?: {
                /**
                 * Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
                 */
                "command"?: Array<string>;
            };
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
             */
            "failureThreshold"?: number;
            /**
             * GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPCContainerProbe feature gate.
             */
            "grpc"?: {
                /**
                 * Port number of the gRPC service. Number must be in the range 1 to 65535.
                 */
                "port": number;
                /**
                 * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
                 *  If this is not specified, the default behavior is defined by gRPC.
                 */
                "service"?: string;
            };
            /**
             * HTTPGet specifies the http request to perform.
             */
            "httpGet"?: {
                /**
                 * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
                 */
                "host"?: string;
                /**
                 * Custom headers to set in the request. HTTP allows repeated headers.
                 */
                "httpHeaders"?: Array<{
                    /**
                     * The header field name
                     */
                    "name": string;
                    /**
                     * The header field value
                     */
                    "value": string;
                }>;
                /**
                 * Path to access on the HTTP server.
                 */
                "path"?: string;
                /**
                 * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
                 */
                "port": number | string;
                /**
                 * Scheme to use for connecting to the host. Defaults to HTTP.
                 */
                "scheme"?: string;
            };
            /**
             * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            "initialDelaySeconds"?: number;
            /**
             * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
             */
            "periodSeconds"?: number;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
             */
            "successThreshold"?: number;
            /**
             * TCPSocket specifies an action involving a TCP port.
             */
            "tcpSocket"?: {
                /**
                 * Optional: Host name to connect to, defaults to the pod IP.
                 */
                "host"?: string;
                /**
                 * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
                 */
                "port": number | string;
            };
            /**
             * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
             */
            "terminationGracePeriodSeconds"?: number;
            /**
             * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            "timeoutSeconds"?: number;
        };
        /**
         * labels and annotations for Stargate resources
         */
        "metadata"?: {
            "annotations"?: {
                [key: string]: string;
            };
            /**
             * labels/annotations that will be applied to all components created by the CRD
             */
            "commonLabels"?: {
                [key: string]: string;
            };
            "labels"?: {
                [key: string]: string;
            };
            /**
             * labels/annotations for the pod components
             */
            "pods"?: {
                "annotations"?: {
                    [key: string]: string;
                };
                "labels"?: {
                    [key: string]: string;
                };
            };
            /**
             * labels/annotations for the service component
             */
            "service"?: {
                "annotations"?: {
                    [key: string]: string;
                };
                "labels"?: {
                    [key: string]: string;
                };
            };
        };
        /**
         * NodeSelector is an optional map of label keys and values to restrict the scheduling of Stargate nodes to workers with matching labels. Leave nil to let the controller reuse the same node selectors used for data pods in this datacenter, if any. See https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#nodeselector
         */
        "nodeSelector"?: {
            [key: string]: string;
        };
        /**
         * Racks allow customizing Stargate characteristics for specific racks in the datacenter.
         */
        "racks"?: Array<{
            /**
             * Affinity is the affinity to apply to all the Stargate pods. Leave nil to let the controller reuse the same affinity rules used for data pods in this datacenter, if any. See https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity
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
                             * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                             */
                            "namespaceSelector"?: {
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
                             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
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
                         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                         */
                        "namespaceSelector"?: {
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
                         * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
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
                             * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                             */
                            "namespaceSelector"?: {
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
                             * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
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
                         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
                         */
                        "namespaceSelector"?: {
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
                         * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
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
             * AllowStargateOnDataNodes allows Stargate pods to be scheduled on a worker node already hosting data pods for this datacenter. The default is false, which means that Stargate pods will be scheduled on separate worker nodes. Note: if the datacenter pods have HostNetwork:true, then the Stargate pods will inherit of it, in which case it is possible that Stargate nodes won't be allowed to sit on data nodes even if this property is set to true, because of port conflicts on the same IP address.
             */
            "allowStargateOnDataNodes"?: boolean;
            /**
             * Authentication options.
             */
            "authOptions"?: {
                /**
                 * The method to use for authenticating requests to the Stargate APIs. Stargate currently has two authentication / authorization methods: - Table: table-based; - JWT: JSON web token (JWT)-based. The methods are mutually exclusive. The default method is Table.
                 */
                "apiAuthMethod"?: "Table" | "JWT";
                /**
                 * Required when using JWT authentication method, ignored otherwise.
                 */
                "providerUrl"?: string;
                /**
                 * The time-to-live in seconds of an API authentication token. Valid only for the Table authentication method. By default, the token persists for 30 minutes with a sliding window. Each use of the token to authenticate resets the 30-minute window. A token created and used after 29 minutes will authenticate a request, but if 31 minutes passes before use, the token will no longer exist. Default is 1800 seconds (30 minutes).
                 */
                "tokenTtlSeconds"?: number;
            };
            /**
             * CassandraConfigMapRef is a reference to a ConfigMap that holds Cassandra configuration. The map should have a key named cassandra_yaml.
             */
            "cassandraConfigMapRef"?: {
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
            };
            /**
             * ContainerImage is the image characteristics to use for Stargate containers. Leave nil to use a default image.
             */
            "containerImage"?: {
                /**
                 * The image name to use.
                 */
                "name"?: string;
                /**
                 * The image pull policy to use. Defaults to "Always" if the tag is "latest", otherwise to "IfNotPresent".
                 */
                "pullPolicy"?: "Always" | "IfNotPresent" | "Never";
                /**
                 * The secret to use when pulling the image from private repositories. If specified, this secret will be passed to individual puller implementations for them to use. For example, in the case of Docker, only DockerConfig type secrets are honored. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod
                 */
                "pullSecretRef"?: {
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                     */
                    "name"?: string;
                };
                /**
                 * The Docker registry to use. Defaults to "docker.io", the official Docker Hub.
                 */
                "registry"?: string;
                /**
                 * The Docker repository to use.
                 */
                "repository"?: string;
                /**
                 * The image tag to use. Defaults to "latest".
                 */
                "tag"?: string;
            };
            /**
             * HeapSize sets the JVM heap size to use for Stargate. If no Resources are specified, this value will also be used to set a default memory request and limit for the Stargate pods: these will be set to HeapSize x2 and x4, respectively.
             */
            "heapSize"?: number | string;
            /**
             * LivenessProbe sets the Stargate liveness probe. Leave nil to use defaults.
             */
            "livenessProbe"?: {
                /**
                 * Exec specifies the action to take.
                 */
                "exec"?: {
                    /**
                     * Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
                     */
                    "command"?: Array<string>;
                };
                /**
                 * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
                 */
                "failureThreshold"?: number;
                /**
                 * GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPCContainerProbe feature gate.
                 */
                "grpc"?: {
                    /**
                     * Port number of the gRPC service. Number must be in the range 1 to 65535.
                     */
                    "port": number;
                    /**
                     * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
                     *  If this is not specified, the default behavior is defined by gRPC.
                     */
                    "service"?: string;
                };
                /**
                 * HTTPGet specifies the http request to perform.
                 */
                "httpGet"?: {
                    /**
                     * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
                     */
                    "host"?: string;
                    /**
                     * Custom headers to set in the request. HTTP allows repeated headers.
                     */
                    "httpHeaders"?: Array<{
                        /**
                         * The header field name
                         */
                        "name": string;
                        /**
                         * The header field value
                         */
                        "value": string;
                    }>;
                    /**
                     * Path to access on the HTTP server.
                     */
                    "path"?: string;
                    /**
                     * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
                     */
                    "port": number | string;
                    /**
                     * Scheme to use for connecting to the host. Defaults to HTTP.
                     */
                    "scheme"?: string;
                };
                /**
                 * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                 */
                "initialDelaySeconds"?: number;
                /**
                 * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
                 */
                "periodSeconds"?: number;
                /**
                 * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
                 */
                "successThreshold"?: number;
                /**
                 * TCPSocket specifies an action involving a TCP port.
                 */
                "tcpSocket"?: {
                    /**
                     * Optional: Host name to connect to, defaults to the pod IP.
                     */
                    "host"?: string;
                    /**
                     * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
                     */
                    "port": number | string;
                };
                /**
                 * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
                 */
                "terminationGracePeriodSeconds"?: number;
                /**
                 * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                 */
                "timeoutSeconds"?: number;
            };
            /**
             * labels and annotations for Stargate resources
             */
            "metadata"?: {
                "annotations"?: {
                    [key: string]: string;
                };
                /**
                 * labels/annotations that will be applied to all components created by the CRD
                 */
                "commonLabels"?: {
                    [key: string]: string;
                };
                "labels"?: {
                    [key: string]: string;
                };
                /**
                 * labels/annotations for the pod components
                 */
                "pods"?: {
                    "annotations"?: {
                        [key: string]: string;
                    };
                    "labels"?: {
                        [key: string]: string;
                    };
                };
                /**
                 * labels/annotations for the service component
                 */
                "service"?: {
                    "annotations"?: {
                        [key: string]: string;
                    };
                    "labels"?: {
                        [key: string]: string;
                    };
                };
            };
            /**
             * Name is the rack name. It must correspond to an existing rack name in the CassandraDatacenter resource where Stargate is being deployed, otherwise it will be ignored.
             */
            "name": string;
            /**
             * NodeSelector is an optional map of label keys and values to restrict the scheduling of Stargate nodes to workers with matching labels. Leave nil to let the controller reuse the same node selectors used for data pods in this datacenter, if any. See https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#nodeselector
             */
            "nodeSelector"?: {
                [key: string]: string;
            };
            /**
             * ReadinessProbe sets the Stargate readiness probe. Leave nil to use defaults.
             */
            "readinessProbe"?: {
                /**
                 * Exec specifies the action to take.
                 */
                "exec"?: {
                    /**
                     * Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
                     */
                    "command"?: Array<string>;
                };
                /**
                 * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
                 */
                "failureThreshold"?: number;
                /**
                 * GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPCContainerProbe feature gate.
                 */
                "grpc"?: {
                    /**
                     * Port number of the gRPC service. Number must be in the range 1 to 65535.
                     */
                    "port": number;
                    /**
                     * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
                     *  If this is not specified, the default behavior is defined by gRPC.
                     */
                    "service"?: string;
                };
                /**
                 * HTTPGet specifies the http request to perform.
                 */
                "httpGet"?: {
                    /**
                     * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
                     */
                    "host"?: string;
                    /**
                     * Custom headers to set in the request. HTTP allows repeated headers.
                     */
                    "httpHeaders"?: Array<{
                        /**
                         * The header field name
                         */
                        "name": string;
                        /**
                         * The header field value
                         */
                        "value": string;
                    }>;
                    /**
                     * Path to access on the HTTP server.
                     */
                    "path"?: string;
                    /**
                     * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
                     */
                    "port": number | string;
                    /**
                     * Scheme to use for connecting to the host. Defaults to HTTP.
                     */
                    "scheme"?: string;
                };
                /**
                 * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                 */
                "initialDelaySeconds"?: number;
                /**
                 * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
                 */
                "periodSeconds"?: number;
                /**
                 * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
                 */
                "successThreshold"?: number;
                /**
                 * TCPSocket specifies an action involving a TCP port.
                 */
                "tcpSocket"?: {
                    /**
                     * Optional: Host name to connect to, defaults to the pod IP.
                     */
                    "host"?: string;
                    /**
                     * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
                     */
                    "port": number | string;
                };
                /**
                 * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
                 */
                "terminationGracePeriodSeconds"?: number;
                /**
                 * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                 */
                "timeoutSeconds"?: number;
            };
            /**
             * Resources is the Kubernetes resource requests and limits to apply, per Stargate pod. Leave nil to use defaults.
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
                 * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                 */
                "requests"?: {
                    [key: string]: number | string;
                };
            };
            /**
             * SecretsProvider defines whether the secrets used for credentials and certs will be backed by an external secret backend. This moves the responsibility of generating and storing secrets from the operators to the user and will rely on a mutating webhook to inject the secrets into the necessary resources
             */
            "secretsProvider"?: "internal" | "external";
            /**
             * ServiceAccount is the service account name to use for Stargate pods.
             */
            "serviceAccount"?: string;
            /**
             * Telemetry defines the desired telemetry integrations to deploy targeting the Stargate pods for all DCs in this cluster (unless overridden by DC specific settings)
             */
            "telemetry"?: {
                "cassandra"?: {
                    "endpoint"?: {
                        "address"?: string;
                        "port"?: string;
                    };
                    "relabels"?: Array<{
                        /**
                         * Action to perform based on regex matching. Default is 'replace'
                         */
                        "action"?: string;
                        /**
                         * Modulus to take of the hash of the source label values.
                         */
                        "modulus"?: number;
                        /**
                         * Regular expression against which the extracted value is matched. Default is '(.\*)'
                         */
                        "regex"?: string;
                        /**
                         * Replacement value against which a regex replace is performed if the regular expression matches. Regex capture groups are available. Default is '$1'
                         */
                        "replacement"?: string;
                        /**
                         * Separator placed between concatenated source label values. default is ';'.
                         */
                        "separator"?: string;
                        /**
                         * The source labels select values from existing labels. Their content is concatenated using the configured separator and matched against the configured regular expression for the replace, keep, and drop actions.
                         */
                        "sourceLabels"?: Array<string>;
                        /**
                         * Label to which the resulting value is written in a replace action. It is mandatory for replace actions. Regex capture groups are available.
                         */
                        "targetLabel"?: string;
                    }>;
                };
                "mcac"?: {
                    /**
                     * enabled sets whether MCAC (legacy metrics endpoint) is enabled. This is considered true by default.
                     */
                    "enabled"?: boolean;
                    /**
                     * MetricFilters allows passing filters to MCAC in order to reduce the amount of extracted metrics. Not setting this field will result in the default filters being used: - "deny:org.apache.cassandra.metrics.Table" - "deny:org.apache.cassandra.metrics.table" - "allow:org.apache.cassandra.metrics.table.live_ss_table_count" - "allow:org.apache.cassandra.metrics.Table.LiveSSTableCount" - "allow:org.apache.cassandra.metrics.table.live_disk_space_used" - "allow:org.apache.cassandra.metrics.table.LiveDiskSpaceUsed" - "allow:org.apache.cassandra.metrics.Table.Pending" - "allow:org.apache.cassandra.metrics.Table.Memtable" - "allow:org.apache.cassandra.metrics.Table.Compaction" - "allow:org.apache.cassandra.metrics.table.read" - "allow:org.apache.cassandra.metrics.table.write" - "allow:org.apache.cassandra.metrics.table.range" - "allow:org.apache.cassandra.metrics.table.coordinator" - "allow:org.apache.cassandra.metrics.table.dropped_mutations" Setting it to an empty list will result in all metrics being extracted.
                     */
                    "metricFilters"?: Array<string>;
                };
                "prometheus"?: {
                    /**
                     * CommonLabels are applied to all serviceMonitors created.
                     */
                    "commonLabels"?: {
                        [key: string]: string;
                    };
                    /**
                     * Enable the creation of Prometheus serviceMonitors for this resource (Cassandra or Stargate).
                     */
                    "enabled"?: boolean;
                };
                "vector"?: {
                    "components"?: {
                        /**
                         * Sinks is the list of sinks to use for the Vector agent.
                         */
                        "sinks"?: Array<{
                            /**
                             * Config is the configuration for the sink.
                             */
                            "config"?: string;
                            /**
                             * Inputs is the list of inputs for the transform.
                             */
                            "inputs"?: Array<string>;
                            /**
                             * Name is the name of the sink.
                             */
                            "name": string;
                            /**
                             * Type is the type of the sink.
                             */
                            "type": string;
                        }>;
                        /**
                         * Sources is the list of sources to use for the Vector agent.
                         */
                        "sources"?: Array<{
                            /**
                             * Config is the configuration for the source.
                             */
                            "config"?: string;
                            /**
                             * Name is the name of the source.
                             */
                            "name": string;
                            /**
                             * Type is the type of the source.
                             */
                            "type": string;
                        }>;
                        /**
                         * Transforms is the list of transforms to use for the Vector agent.
                         */
                        "transforms"?: Array<{
                            /**
                             * Config is the configuration for the transform.
                             */
                            "config"?: string;
                            /**
                             * Inputs is the list of inputs for the transform.
                             */
                            "inputs"?: Array<string>;
                            /**
                             * Name is the name of the transform.
                             */
                            "name": string;
                            /**
                             * Type is the type of the transform.
                             */
                            "type": string;
                        }>;
                    };
                    /**
                     * Enabled enables the Vector agent for this resource (Cassandra, Reaper or Stargate). Enabling the vector agent will inject a sidecar container into the pod.
                     */
                    "enabled"?: boolean;
                    /**
                     * Image is the name of the Vector image to use. If not set, the default image will be used. kube:default="timberio/vector:0.26.0-alpine"
                     */
                    "image"?: string;
                    /**
                     * Resources is the resource requirements for the Vector agent.
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
                         * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                         */
                        "requests"?: {
                            [key: string]: number | string;
                        };
                    };
                    /**
                     * ScrapeInterval is the interval at which the Vector agent will scrape the metrics endpoint. Use values like 30s, 1m, 5m. kube:default=30s
                     */
                    "scrapeInterval"?: string;
                };
            };
            /**
             * Tolerations are tolerations to apply to the Stargate pods. Leave nil to let the controller reuse the same tolerations used for data pods in this datacenter, if any. See https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/
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
        }>;
        /**
         * ReadinessProbe sets the Stargate readiness probe. Leave nil to use defaults.
         */
        "readinessProbe"?: {
            /**
             * Exec specifies the action to take.
             */
            "exec"?: {
                /**
                 * Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
                 */
                "command"?: Array<string>;
            };
            /**
             * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
             */
            "failureThreshold"?: number;
            /**
             * GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPCContainerProbe feature gate.
             */
            "grpc"?: {
                /**
                 * Port number of the gRPC service. Number must be in the range 1 to 65535.
                 */
                "port": number;
                /**
                 * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
                 *  If this is not specified, the default behavior is defined by gRPC.
                 */
                "service"?: string;
            };
            /**
             * HTTPGet specifies the http request to perform.
             */
            "httpGet"?: {
                /**
                 * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
                 */
                "host"?: string;
                /**
                 * Custom headers to set in the request. HTTP allows repeated headers.
                 */
                "httpHeaders"?: Array<{
                    /**
                     * The header field name
                     */
                    "name": string;
                    /**
                     * The header field value
                     */
                    "value": string;
                }>;
                /**
                 * Path to access on the HTTP server.
                 */
                "path"?: string;
                /**
                 * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
                 */
                "port": number | string;
                /**
                 * Scheme to use for connecting to the host. Defaults to HTTP.
                 */
                "scheme"?: string;
            };
            /**
             * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            "initialDelaySeconds"?: number;
            /**
             * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
             */
            "periodSeconds"?: number;
            /**
             * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
             */
            "successThreshold"?: number;
            /**
             * TCPSocket specifies an action involving a TCP port.
             */
            "tcpSocket"?: {
                /**
                 * Optional: Host name to connect to, defaults to the pod IP.
                 */
                "host"?: string;
                /**
                 * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
                 */
                "port": number | string;
            };
            /**
             * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
             */
            "terminationGracePeriodSeconds"?: number;
            /**
             * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
             */
            "timeoutSeconds"?: number;
        };
        /**
         * Resources is the Kubernetes resource requests and limits to apply, per Stargate pod. Leave nil to use defaults.
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
             * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            "requests"?: {
                [key: string]: number | string;
            };
        };
        /**
         * SecretsProvider defines whether the secrets used for credentials and certs will be backed by an external secret backend. This moves the responsibility of generating and storing secrets from the operators to the user and will rely on a mutating webhook to inject the secrets into the necessary resources
         */
        "secretsProvider"?: "internal" | "external";
        /**
         * ServiceAccount is the service account name to use for Stargate pods.
         */
        "serviceAccount"?: string;
        /**
         * Size is the number of Stargate instances to deploy in each datacenter. They will be spread evenly across racks.
         */
        "size": number;
        /**
         * Telemetry defines the desired telemetry integrations to deploy targeting the Stargate pods for all DCs in this cluster (unless overridden by DC specific settings)
         */
        "telemetry"?: {
            "cassandra"?: {
                "endpoint"?: {
                    "address"?: string;
                    "port"?: string;
                };
                "relabels"?: Array<{
                    /**
                     * Action to perform based on regex matching. Default is 'replace'
                     */
                    "action"?: string;
                    /**
                     * Modulus to take of the hash of the source label values.
                     */
                    "modulus"?: number;
                    /**
                     * Regular expression against which the extracted value is matched. Default is '(.\*)'
                     */
                    "regex"?: string;
                    /**
                     * Replacement value against which a regex replace is performed if the regular expression matches. Regex capture groups are available. Default is '$1'
                     */
                    "replacement"?: string;
                    /**
                     * Separator placed between concatenated source label values. default is ';'.
                     */
                    "separator"?: string;
                    /**
                     * The source labels select values from existing labels. Their content is concatenated using the configured separator and matched against the configured regular expression for the replace, keep, and drop actions.
                     */
                    "sourceLabels"?: Array<string>;
                    /**
                     * Label to which the resulting value is written in a replace action. It is mandatory for replace actions. Regex capture groups are available.
                     */
                    "targetLabel"?: string;
                }>;
            };
            "mcac"?: {
                /**
                 * enabled sets whether MCAC (legacy metrics endpoint) is enabled. This is considered true by default.
                 */
                "enabled"?: boolean;
                /**
                 * MetricFilters allows passing filters to MCAC in order to reduce the amount of extracted metrics. Not setting this field will result in the default filters being used: - "deny:org.apache.cassandra.metrics.Table" - "deny:org.apache.cassandra.metrics.table" - "allow:org.apache.cassandra.metrics.table.live_ss_table_count" - "allow:org.apache.cassandra.metrics.Table.LiveSSTableCount" - "allow:org.apache.cassandra.metrics.table.live_disk_space_used" - "allow:org.apache.cassandra.metrics.table.LiveDiskSpaceUsed" - "allow:org.apache.cassandra.metrics.Table.Pending" - "allow:org.apache.cassandra.metrics.Table.Memtable" - "allow:org.apache.cassandra.metrics.Table.Compaction" - "allow:org.apache.cassandra.metrics.table.read" - "allow:org.apache.cassandra.metrics.table.write" - "allow:org.apache.cassandra.metrics.table.range" - "allow:org.apache.cassandra.metrics.table.coordinator" - "allow:org.apache.cassandra.metrics.table.dropped_mutations" Setting it to an empty list will result in all metrics being extracted.
                 */
                "metricFilters"?: Array<string>;
            };
            "prometheus"?: {
                /**
                 * CommonLabels are applied to all serviceMonitors created.
                 */
                "commonLabels"?: {
                    [key: string]: string;
                };
                /**
                 * Enable the creation of Prometheus serviceMonitors for this resource (Cassandra or Stargate).
                 */
                "enabled"?: boolean;
            };
            "vector"?: {
                "components"?: {
                    /**
                     * Sinks is the list of sinks to use for the Vector agent.
                     */
                    "sinks"?: Array<{
                        /**
                         * Config is the configuration for the sink.
                         */
                        "config"?: string;
                        /**
                         * Inputs is the list of inputs for the transform.
                         */
                        "inputs"?: Array<string>;
                        /**
                         * Name is the name of the sink.
                         */
                        "name": string;
                        /**
                         * Type is the type of the sink.
                         */
                        "type": string;
                    }>;
                    /**
                     * Sources is the list of sources to use for the Vector agent.
                     */
                    "sources"?: Array<{
                        /**
                         * Config is the configuration for the source.
                         */
                        "config"?: string;
                        /**
                         * Name is the name of the source.
                         */
                        "name": string;
                        /**
                         * Type is the type of the source.
                         */
                        "type": string;
                    }>;
                    /**
                     * Transforms is the list of transforms to use for the Vector agent.
                     */
                    "transforms"?: Array<{
                        /**
                         * Config is the configuration for the transform.
                         */
                        "config"?: string;
                        /**
                         * Inputs is the list of inputs for the transform.
                         */
                        "inputs"?: Array<string>;
                        /**
                         * Name is the name of the transform.
                         */
                        "name": string;
                        /**
                         * Type is the type of the transform.
                         */
                        "type": string;
                    }>;
                };
                /**
                 * Enabled enables the Vector agent for this resource (Cassandra, Reaper or Stargate). Enabling the vector agent will inject a sidecar container into the pod.
                 */
                "enabled"?: boolean;
                /**
                 * Image is the name of the Vector image to use. If not set, the default image will be used. kube:default="timberio/vector:0.26.0-alpine"
                 */
                "image"?: string;
                /**
                 * Resources is the resource requirements for the Vector agent.
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
                     * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                     */
                    "requests"?: {
                        [key: string]: number | string;
                    };
                };
                /**
                 * ScrapeInterval is the interval at which the Vector agent will scrape the metrics endpoint. Use values like 30s, 1m, 5m. kube:default=30s
                 */
                "scrapeInterval"?: string;
            };
        };
        /**
         * Tolerations are tolerations to apply to the Stargate pods. Leave nil to let the controller reuse the same tolerations used for data pods in this datacenter, if any. See https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/
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
    /**
     * Most recently observed status of this Stargate resource.
     */
    "status"?: {
        /**
         * Total number of available pods targeted by the Stargate deployment. Will be zero if the deployment has not been created yet.
         */
        "availableReplicas": number;
        "conditions"?: Array<{
            /**
             * LastTransitionTime is the last time the condition transited from one status to another.
             */
            "lastTransitionTime"?: string;
            "status": string;
            "type": string;
        }>;
        /**
         * DeploymentRefs is the names of the Deployment objects that were created for this Stargate object.
         */
        "deploymentRefs"?: Array<string>;
        /**
         * Progress is the progress of this Stargate object.
         */
        "progress"?: "Pending" | "Deploying" | "Running";
        /**
         * ReadyReplicas is the total number of ready pods targeted by the Stargate deployment. Will be zero if the deployment has not been created yet.
         */
        "readyReplicas": number;
        /**
         * ReadyReplicasRatio is a "X/Y" string representing the ratio between ReadyReplicas and Replicas in the Stargate deployment.
         */
        "readyReplicasRatio"?: string;
        /**
         * Total number of non-terminated pods targeted by the Stargate deployment (their labels match the selector). Will be zero if the deployment has not been created yet.
         */
        "replicas": number;
        /**
         * ServiceRef is the name of the Service object that was created for this Stargate object.
         */
        "serviceRef"?: string;
        /**
         * UpdatedReplicas is the total number of non-terminated pods targeted by the Stargate deployment that have the desired template spec. Will be zero if the deployment has not been created yet.
         */
        "updatedReplicas": number;
    };
}
/**
 * Stargate is the Schema for the stargates API
 */
export declare class Stargate extends Model<IStargate> implements IStargate {
    "apiVersion": IStargate["apiVersion"];
    "kind": IStargate["kind"];
    "metadata"?: IStargate["metadata"];
    "spec"?: IStargate["spec"];
    "status"?: IStargate["status"];
    static apiVersion: IStargate["apiVersion"];
    static kind: IStargate["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IStargate>;
    constructor(data?: ModelData<IStargate>);
}
