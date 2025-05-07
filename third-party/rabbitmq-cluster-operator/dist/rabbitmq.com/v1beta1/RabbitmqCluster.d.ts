import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * RabbitmqCluster is the Schema for the RabbitmqCluster API. Each instance of this object corresponds to a single RabbitMQ cluster.
 */
export interface IRabbitmqCluster {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "rabbitmq.com/v1beta1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "RabbitmqCluster";
    "metadata"?: IObjectMeta;
    /**
     * Spec is the desired state of the RabbitmqCluster Custom Resource.
     */
    "spec"?: {
        /**
         * Affinity scheduling rules to be applied on created Pods.
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
         * Image is the name of the RabbitMQ docker image to use for RabbitMQ nodes in the RabbitmqCluster. Must be provided together with ImagePullSecrets in order to use an image in a private registry.
         */
        "image"?: string;
        /**
         * List of Secret resource containing access credentials to the registry for the RabbitMQ image. Required if the docker registry is private.
         */
        "imagePullSecrets"?: Array<{
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
        }>;
        "override"?: {
            "service"?: {
                "metadata"?: {
                    "annotations"?: {
                        [key: string]: string;
                    };
                    "labels"?: {
                        [key: string]: string;
                    };
                };
                "spec"?: {
                    "allocateLoadBalancerNodePorts"?: boolean;
                    "clusterIP"?: string;
                    "clusterIPs"?: Array<string>;
                    "externalIPs"?: Array<string>;
                    "externalName"?: string;
                    "externalTrafficPolicy"?: string;
                    "healthCheckNodePort"?: number;
                    "internalTrafficPolicy"?: string;
                    "ipFamilies"?: Array<string>;
                    "ipFamilyPolicy"?: string;
                    "loadBalancerClass"?: string;
                    "loadBalancerIP"?: string;
                    "loadBalancerSourceRanges"?: Array<string>;
                    "ports"?: Array<{
                        "appProtocol"?: string;
                        "name"?: string;
                        "nodePort"?: number;
                        "port": number;
                        "protocol"?: string;
                        "targetPort"?: number | string;
                    }>;
                    "publishNotReadyAddresses"?: boolean;
                    "selector"?: {
                        [key: string]: string;
                    };
                    "sessionAffinity"?: string;
                    "sessionAffinityConfig"?: {
                        "clientIP"?: {
                            "timeoutSeconds"?: number;
                        };
                    };
                    "type"?: string;
                };
            };
            "statefulSet"?: {
                "metadata"?: {
                    "annotations"?: {
                        [key: string]: string;
                    };
                    "labels"?: {
                        [key: string]: string;
                    };
                };
                "spec"?: {
                    "podManagementPolicy"?: string;
                    "replicas"?: number;
                    "selector"?: {
                        "matchExpressions"?: Array<{
                            "key": string;
                            "operator": string;
                            "values"?: Array<string>;
                        }>;
                        "matchLabels"?: {
                            [key: string]: string;
                        };
                    };
                    "serviceName"?: string;
                    "template"?: {
                        "metadata"?: {
                            "annotations"?: {
                                [key: string]: string;
                            };
                            "labels"?: {
                                [key: string]: string;
                            };
                            "name"?: string;
                            "namespace"?: string;
                        };
                        "spec"?: {
                            "activeDeadlineSeconds"?: number;
                            "affinity"?: {
                                "nodeAffinity"?: {
                                    "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
                                        "preference": {
                                            "matchExpressions"?: Array<{
                                                "key": string;
                                                "operator": string;
                                                "values"?: Array<string>;
                                            }>;
                                            "matchFields"?: Array<{
                                                "key": string;
                                                "operator": string;
                                                "values"?: Array<string>;
                                            }>;
                                        };
                                        "weight": number;
                                    }>;
                                    "requiredDuringSchedulingIgnoredDuringExecution"?: {
                                        "nodeSelectorTerms": Array<{
                                            "matchExpressions"?: Array<{
                                                "key": string;
                                                "operator": string;
                                                "values"?: Array<string>;
                                            }>;
                                            "matchFields"?: Array<{
                                                "key": string;
                                                "operator": string;
                                                "values"?: Array<string>;
                                            }>;
                                        }>;
                                    };
                                };
                                "podAffinity"?: {
                                    "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
                                        "podAffinityTerm": {
                                            "labelSelector"?: {
                                                "matchExpressions"?: Array<{
                                                    "key": string;
                                                    "operator": string;
                                                    "values"?: Array<string>;
                                                }>;
                                                "matchLabels"?: {
                                                    [key: string]: string;
                                                };
                                            };
                                            "namespaceSelector"?: {
                                                "matchExpressions"?: Array<{
                                                    "key": string;
                                                    "operator": string;
                                                    "values"?: Array<string>;
                                                }>;
                                                "matchLabels"?: {
                                                    [key: string]: string;
                                                };
                                            };
                                            "namespaces"?: Array<string>;
                                            "topologyKey": string;
                                        };
                                        "weight": number;
                                    }>;
                                    "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
                                        "labelSelector"?: {
                                            "matchExpressions"?: Array<{
                                                "key": string;
                                                "operator": string;
                                                "values"?: Array<string>;
                                            }>;
                                            "matchLabels"?: {
                                                [key: string]: string;
                                            };
                                        };
                                        "namespaceSelector"?: {
                                            "matchExpressions"?: Array<{
                                                "key": string;
                                                "operator": string;
                                                "values"?: Array<string>;
                                            }>;
                                            "matchLabels"?: {
                                                [key: string]: string;
                                            };
                                        };
                                        "namespaces"?: Array<string>;
                                        "topologyKey": string;
                                    }>;
                                };
                                "podAntiAffinity"?: {
                                    "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
                                        "podAffinityTerm": {
                                            "labelSelector"?: {
                                                "matchExpressions"?: Array<{
                                                    "key": string;
                                                    "operator": string;
                                                    "values"?: Array<string>;
                                                }>;
                                                "matchLabels"?: {
                                                    [key: string]: string;
                                                };
                                            };
                                            "namespaceSelector"?: {
                                                "matchExpressions"?: Array<{
                                                    "key": string;
                                                    "operator": string;
                                                    "values"?: Array<string>;
                                                }>;
                                                "matchLabels"?: {
                                                    [key: string]: string;
                                                };
                                            };
                                            "namespaces"?: Array<string>;
                                            "topologyKey": string;
                                        };
                                        "weight": number;
                                    }>;
                                    "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
                                        "labelSelector"?: {
                                            "matchExpressions"?: Array<{
                                                "key": string;
                                                "operator": string;
                                                "values"?: Array<string>;
                                            }>;
                                            "matchLabels"?: {
                                                [key: string]: string;
                                            };
                                        };
                                        "namespaceSelector"?: {
                                            "matchExpressions"?: Array<{
                                                "key": string;
                                                "operator": string;
                                                "values"?: Array<string>;
                                            }>;
                                            "matchLabels"?: {
                                                [key: string]: string;
                                            };
                                        };
                                        "namespaces"?: Array<string>;
                                        "topologyKey": string;
                                    }>;
                                };
                            };
                            "automountServiceAccountToken"?: boolean;
                            "containers": Array<{
                                "args"?: Array<string>;
                                "command"?: Array<string>;
                                "env"?: Array<{
                                    "name": string;
                                    "value"?: string;
                                    "valueFrom"?: {
                                        "configMapKeyRef"?: {
                                            "key": string;
                                            "name"?: string;
                                            "optional"?: boolean;
                                        };
                                        "fieldRef"?: {
                                            "apiVersion"?: string;
                                            "fieldPath": string;
                                        };
                                        "resourceFieldRef"?: {
                                            "containerName"?: string;
                                            "divisor"?: number | string;
                                            "resource": string;
                                        };
                                        "secretKeyRef"?: {
                                            "key": string;
                                            "name"?: string;
                                            "optional"?: boolean;
                                        };
                                    };
                                }>;
                                "envFrom"?: Array<{
                                    "configMapRef"?: {
                                        "name"?: string;
                                        "optional"?: boolean;
                                    };
                                    "prefix"?: string;
                                    "secretRef"?: {
                                        "name"?: string;
                                        "optional"?: boolean;
                                    };
                                }>;
                                "image"?: string;
                                "imagePullPolicy"?: string;
                                "lifecycle"?: {
                                    "postStart"?: {
                                        "exec"?: {
                                            "command"?: Array<string>;
                                        };
                                        "httpGet"?: {
                                            "host"?: string;
                                            "httpHeaders"?: Array<{
                                                "name": string;
                                                "value": string;
                                            }>;
                                            "path"?: string;
                                            "port": number | string;
                                            "scheme"?: string;
                                        };
                                        "tcpSocket"?: {
                                            "host"?: string;
                                            "port": number | string;
                                        };
                                    };
                                    "preStop"?: {
                                        "exec"?: {
                                            "command"?: Array<string>;
                                        };
                                        "httpGet"?: {
                                            "host"?: string;
                                            "httpHeaders"?: Array<{
                                                "name": string;
                                                "value": string;
                                            }>;
                                            "path"?: string;
                                            "port": number | string;
                                            "scheme"?: string;
                                        };
                                        "tcpSocket"?: {
                                            "host"?: string;
                                            "port": number | string;
                                        };
                                    };
                                };
                                "livenessProbe"?: {
                                    "exec"?: {
                                        "command"?: Array<string>;
                                    };
                                    "failureThreshold"?: number;
                                    "grpc"?: {
                                        "port": number;
                                        "service"?: string;
                                    };
                                    "httpGet"?: {
                                        "host"?: string;
                                        "httpHeaders"?: Array<{
                                            "name": string;
                                            "value": string;
                                        }>;
                                        "path"?: string;
                                        "port": number | string;
                                        "scheme"?: string;
                                    };
                                    "initialDelaySeconds"?: number;
                                    "periodSeconds"?: number;
                                    "successThreshold"?: number;
                                    "tcpSocket"?: {
                                        "host"?: string;
                                        "port": number | string;
                                    };
                                    "terminationGracePeriodSeconds"?: number;
                                    "timeoutSeconds"?: number;
                                };
                                "name": string;
                                "ports"?: Array<{
                                    "containerPort": number;
                                    "hostIP"?: string;
                                    "hostPort"?: number;
                                    "name"?: string;
                                    "protocol"?: string;
                                }>;
                                "readinessProbe"?: {
                                    "exec"?: {
                                        "command"?: Array<string>;
                                    };
                                    "failureThreshold"?: number;
                                    "grpc"?: {
                                        "port": number;
                                        "service"?: string;
                                    };
                                    "httpGet"?: {
                                        "host"?: string;
                                        "httpHeaders"?: Array<{
                                            "name": string;
                                            "value": string;
                                        }>;
                                        "path"?: string;
                                        "port": number | string;
                                        "scheme"?: string;
                                    };
                                    "initialDelaySeconds"?: number;
                                    "periodSeconds"?: number;
                                    "successThreshold"?: number;
                                    "tcpSocket"?: {
                                        "host"?: string;
                                        "port": number | string;
                                    };
                                    "terminationGracePeriodSeconds"?: number;
                                    "timeoutSeconds"?: number;
                                };
                                "resources"?: {
                                    "limits"?: {
                                        [key: string]: number | string;
                                    };
                                    "requests"?: {
                                        [key: string]: number | string;
                                    };
                                };
                                "securityContext"?: {
                                    "allowPrivilegeEscalation"?: boolean;
                                    "capabilities"?: {
                                        "add"?: Array<string>;
                                        "drop"?: Array<string>;
                                    };
                                    "privileged"?: boolean;
                                    "procMount"?: string;
                                    "readOnlyRootFilesystem"?: boolean;
                                    "runAsGroup"?: number;
                                    "runAsNonRoot"?: boolean;
                                    "runAsUser"?: number;
                                    "seLinuxOptions"?: {
                                        "level"?: string;
                                        "role"?: string;
                                        "type"?: string;
                                        "user"?: string;
                                    };
                                    "seccompProfile"?: {
                                        "localhostProfile"?: string;
                                        "type": string;
                                    };
                                    "windowsOptions"?: {
                                        "gmsaCredentialSpec"?: string;
                                        "gmsaCredentialSpecName"?: string;
                                        "hostProcess"?: boolean;
                                        "runAsUserName"?: string;
                                    };
                                };
                                "startupProbe"?: {
                                    "exec"?: {
                                        "command"?: Array<string>;
                                    };
                                    "failureThreshold"?: number;
                                    "grpc"?: {
                                        "port": number;
                                        "service"?: string;
                                    };
                                    "httpGet"?: {
                                        "host"?: string;
                                        "httpHeaders"?: Array<{
                                            "name": string;
                                            "value": string;
                                        }>;
                                        "path"?: string;
                                        "port": number | string;
                                        "scheme"?: string;
                                    };
                                    "initialDelaySeconds"?: number;
                                    "periodSeconds"?: number;
                                    "successThreshold"?: number;
                                    "tcpSocket"?: {
                                        "host"?: string;
                                        "port": number | string;
                                    };
                                    "terminationGracePeriodSeconds"?: number;
                                    "timeoutSeconds"?: number;
                                };
                                "stdin"?: boolean;
                                "stdinOnce"?: boolean;
                                "terminationMessagePath"?: string;
                                "terminationMessagePolicy"?: string;
                                "tty"?: boolean;
                                "volumeDevices"?: Array<{
                                    "devicePath": string;
                                    "name": string;
                                }>;
                                "volumeMounts"?: Array<{
                                    "mountPath": string;
                                    "mountPropagation"?: string;
                                    "name": string;
                                    "readOnly"?: boolean;
                                    "subPath"?: string;
                                    "subPathExpr"?: string;
                                }>;
                                "workingDir"?: string;
                            }>;
                            "dnsConfig"?: {
                                "nameservers"?: Array<string>;
                                "options"?: Array<{
                                    "name"?: string;
                                    "value"?: string;
                                }>;
                                "searches"?: Array<string>;
                            };
                            "dnsPolicy"?: string;
                            "enableServiceLinks"?: boolean;
                            "ephemeralContainers"?: Array<{
                                "args"?: Array<string>;
                                "command"?: Array<string>;
                                "env"?: Array<{
                                    "name": string;
                                    "value"?: string;
                                    "valueFrom"?: {
                                        "configMapKeyRef"?: {
                                            "key": string;
                                            "name"?: string;
                                            "optional"?: boolean;
                                        };
                                        "fieldRef"?: {
                                            "apiVersion"?: string;
                                            "fieldPath": string;
                                        };
                                        "resourceFieldRef"?: {
                                            "containerName"?: string;
                                            "divisor"?: number | string;
                                            "resource": string;
                                        };
                                        "secretKeyRef"?: {
                                            "key": string;
                                            "name"?: string;
                                            "optional"?: boolean;
                                        };
                                    };
                                }>;
                                "envFrom"?: Array<{
                                    "configMapRef"?: {
                                        "name"?: string;
                                        "optional"?: boolean;
                                    };
                                    "prefix"?: string;
                                    "secretRef"?: {
                                        "name"?: string;
                                        "optional"?: boolean;
                                    };
                                }>;
                                "image"?: string;
                                "imagePullPolicy"?: string;
                                "lifecycle"?: {
                                    "postStart"?: {
                                        "exec"?: {
                                            "command"?: Array<string>;
                                        };
                                        "httpGet"?: {
                                            "host"?: string;
                                            "httpHeaders"?: Array<{
                                                "name": string;
                                                "value": string;
                                            }>;
                                            "path"?: string;
                                            "port": number | string;
                                            "scheme"?: string;
                                        };
                                        "tcpSocket"?: {
                                            "host"?: string;
                                            "port": number | string;
                                        };
                                    };
                                    "preStop"?: {
                                        "exec"?: {
                                            "command"?: Array<string>;
                                        };
                                        "httpGet"?: {
                                            "host"?: string;
                                            "httpHeaders"?: Array<{
                                                "name": string;
                                                "value": string;
                                            }>;
                                            "path"?: string;
                                            "port": number | string;
                                            "scheme"?: string;
                                        };
                                        "tcpSocket"?: {
                                            "host"?: string;
                                            "port": number | string;
                                        };
                                    };
                                };
                                "livenessProbe"?: {
                                    "exec"?: {
                                        "command"?: Array<string>;
                                    };
                                    "failureThreshold"?: number;
                                    "grpc"?: {
                                        "port": number;
                                        "service"?: string;
                                    };
                                    "httpGet"?: {
                                        "host"?: string;
                                        "httpHeaders"?: Array<{
                                            "name": string;
                                            "value": string;
                                        }>;
                                        "path"?: string;
                                        "port": number | string;
                                        "scheme"?: string;
                                    };
                                    "initialDelaySeconds"?: number;
                                    "periodSeconds"?: number;
                                    "successThreshold"?: number;
                                    "tcpSocket"?: {
                                        "host"?: string;
                                        "port": number | string;
                                    };
                                    "terminationGracePeriodSeconds"?: number;
                                    "timeoutSeconds"?: number;
                                };
                                "name": string;
                                "ports"?: Array<{
                                    "containerPort": number;
                                    "hostIP"?: string;
                                    "hostPort"?: number;
                                    "name"?: string;
                                    "protocol"?: string;
                                }>;
                                "readinessProbe"?: {
                                    "exec"?: {
                                        "command"?: Array<string>;
                                    };
                                    "failureThreshold"?: number;
                                    "grpc"?: {
                                        "port": number;
                                        "service"?: string;
                                    };
                                    "httpGet"?: {
                                        "host"?: string;
                                        "httpHeaders"?: Array<{
                                            "name": string;
                                            "value": string;
                                        }>;
                                        "path"?: string;
                                        "port": number | string;
                                        "scheme"?: string;
                                    };
                                    "initialDelaySeconds"?: number;
                                    "periodSeconds"?: number;
                                    "successThreshold"?: number;
                                    "tcpSocket"?: {
                                        "host"?: string;
                                        "port": number | string;
                                    };
                                    "terminationGracePeriodSeconds"?: number;
                                    "timeoutSeconds"?: number;
                                };
                                "resources"?: {
                                    "limits"?: {
                                        [key: string]: number | string;
                                    };
                                    "requests"?: {
                                        [key: string]: number | string;
                                    };
                                };
                                "securityContext"?: {
                                    "allowPrivilegeEscalation"?: boolean;
                                    "capabilities"?: {
                                        "add"?: Array<string>;
                                        "drop"?: Array<string>;
                                    };
                                    "privileged"?: boolean;
                                    "procMount"?: string;
                                    "readOnlyRootFilesystem"?: boolean;
                                    "runAsGroup"?: number;
                                    "runAsNonRoot"?: boolean;
                                    "runAsUser"?: number;
                                    "seLinuxOptions"?: {
                                        "level"?: string;
                                        "role"?: string;
                                        "type"?: string;
                                        "user"?: string;
                                    };
                                    "seccompProfile"?: {
                                        "localhostProfile"?: string;
                                        "type": string;
                                    };
                                    "windowsOptions"?: {
                                        "gmsaCredentialSpec"?: string;
                                        "gmsaCredentialSpecName"?: string;
                                        "hostProcess"?: boolean;
                                        "runAsUserName"?: string;
                                    };
                                };
                                "startupProbe"?: {
                                    "exec"?: {
                                        "command"?: Array<string>;
                                    };
                                    "failureThreshold"?: number;
                                    "grpc"?: {
                                        "port": number;
                                        "service"?: string;
                                    };
                                    "httpGet"?: {
                                        "host"?: string;
                                        "httpHeaders"?: Array<{
                                            "name": string;
                                            "value": string;
                                        }>;
                                        "path"?: string;
                                        "port": number | string;
                                        "scheme"?: string;
                                    };
                                    "initialDelaySeconds"?: number;
                                    "periodSeconds"?: number;
                                    "successThreshold"?: number;
                                    "tcpSocket"?: {
                                        "host"?: string;
                                        "port": number | string;
                                    };
                                    "terminationGracePeriodSeconds"?: number;
                                    "timeoutSeconds"?: number;
                                };
                                "stdin"?: boolean;
                                "stdinOnce"?: boolean;
                                "targetContainerName"?: string;
                                "terminationMessagePath"?: string;
                                "terminationMessagePolicy"?: string;
                                "tty"?: boolean;
                                "volumeDevices"?: Array<{
                                    "devicePath": string;
                                    "name": string;
                                }>;
                                "volumeMounts"?: Array<{
                                    "mountPath": string;
                                    "mountPropagation"?: string;
                                    "name": string;
                                    "readOnly"?: boolean;
                                    "subPath"?: string;
                                    "subPathExpr"?: string;
                                }>;
                                "workingDir"?: string;
                            }>;
                            "hostAliases"?: Array<{
                                "hostnames"?: Array<string>;
                                "ip"?: string;
                            }>;
                            "hostIPC"?: boolean;
                            "hostNetwork"?: boolean;
                            "hostPID"?: boolean;
                            "hostUsers"?: boolean;
                            "hostname"?: string;
                            "imagePullSecrets"?: Array<{
                                "name"?: string;
                            }>;
                            "initContainers"?: Array<{
                                "args"?: Array<string>;
                                "command"?: Array<string>;
                                "env"?: Array<{
                                    "name": string;
                                    "value"?: string;
                                    "valueFrom"?: {
                                        "configMapKeyRef"?: {
                                            "key": string;
                                            "name"?: string;
                                            "optional"?: boolean;
                                        };
                                        "fieldRef"?: {
                                            "apiVersion"?: string;
                                            "fieldPath": string;
                                        };
                                        "resourceFieldRef"?: {
                                            "containerName"?: string;
                                            "divisor"?: number | string;
                                            "resource": string;
                                        };
                                        "secretKeyRef"?: {
                                            "key": string;
                                            "name"?: string;
                                            "optional"?: boolean;
                                        };
                                    };
                                }>;
                                "envFrom"?: Array<{
                                    "configMapRef"?: {
                                        "name"?: string;
                                        "optional"?: boolean;
                                    };
                                    "prefix"?: string;
                                    "secretRef"?: {
                                        "name"?: string;
                                        "optional"?: boolean;
                                    };
                                }>;
                                "image"?: string;
                                "imagePullPolicy"?: string;
                                "lifecycle"?: {
                                    "postStart"?: {
                                        "exec"?: {
                                            "command"?: Array<string>;
                                        };
                                        "httpGet"?: {
                                            "host"?: string;
                                            "httpHeaders"?: Array<{
                                                "name": string;
                                                "value": string;
                                            }>;
                                            "path"?: string;
                                            "port": number | string;
                                            "scheme"?: string;
                                        };
                                        "tcpSocket"?: {
                                            "host"?: string;
                                            "port": number | string;
                                        };
                                    };
                                    "preStop"?: {
                                        "exec"?: {
                                            "command"?: Array<string>;
                                        };
                                        "httpGet"?: {
                                            "host"?: string;
                                            "httpHeaders"?: Array<{
                                                "name": string;
                                                "value": string;
                                            }>;
                                            "path"?: string;
                                            "port": number | string;
                                            "scheme"?: string;
                                        };
                                        "tcpSocket"?: {
                                            "host"?: string;
                                            "port": number | string;
                                        };
                                    };
                                };
                                "livenessProbe"?: {
                                    "exec"?: {
                                        "command"?: Array<string>;
                                    };
                                    "failureThreshold"?: number;
                                    "grpc"?: {
                                        "port": number;
                                        "service"?: string;
                                    };
                                    "httpGet"?: {
                                        "host"?: string;
                                        "httpHeaders"?: Array<{
                                            "name": string;
                                            "value": string;
                                        }>;
                                        "path"?: string;
                                        "port": number | string;
                                        "scheme"?: string;
                                    };
                                    "initialDelaySeconds"?: number;
                                    "periodSeconds"?: number;
                                    "successThreshold"?: number;
                                    "tcpSocket"?: {
                                        "host"?: string;
                                        "port": number | string;
                                    };
                                    "terminationGracePeriodSeconds"?: number;
                                    "timeoutSeconds"?: number;
                                };
                                "name": string;
                                "ports"?: Array<{
                                    "containerPort": number;
                                    "hostIP"?: string;
                                    "hostPort"?: number;
                                    "name"?: string;
                                    "protocol"?: string;
                                }>;
                                "readinessProbe"?: {
                                    "exec"?: {
                                        "command"?: Array<string>;
                                    };
                                    "failureThreshold"?: number;
                                    "grpc"?: {
                                        "port": number;
                                        "service"?: string;
                                    };
                                    "httpGet"?: {
                                        "host"?: string;
                                        "httpHeaders"?: Array<{
                                            "name": string;
                                            "value": string;
                                        }>;
                                        "path"?: string;
                                        "port": number | string;
                                        "scheme"?: string;
                                    };
                                    "initialDelaySeconds"?: number;
                                    "periodSeconds"?: number;
                                    "successThreshold"?: number;
                                    "tcpSocket"?: {
                                        "host"?: string;
                                        "port": number | string;
                                    };
                                    "terminationGracePeriodSeconds"?: number;
                                    "timeoutSeconds"?: number;
                                };
                                "resources"?: {
                                    "limits"?: {
                                        [key: string]: number | string;
                                    };
                                    "requests"?: {
                                        [key: string]: number | string;
                                    };
                                };
                                "securityContext"?: {
                                    "allowPrivilegeEscalation"?: boolean;
                                    "capabilities"?: {
                                        "add"?: Array<string>;
                                        "drop"?: Array<string>;
                                    };
                                    "privileged"?: boolean;
                                    "procMount"?: string;
                                    "readOnlyRootFilesystem"?: boolean;
                                    "runAsGroup"?: number;
                                    "runAsNonRoot"?: boolean;
                                    "runAsUser"?: number;
                                    "seLinuxOptions"?: {
                                        "level"?: string;
                                        "role"?: string;
                                        "type"?: string;
                                        "user"?: string;
                                    };
                                    "seccompProfile"?: {
                                        "localhostProfile"?: string;
                                        "type": string;
                                    };
                                    "windowsOptions"?: {
                                        "gmsaCredentialSpec"?: string;
                                        "gmsaCredentialSpecName"?: string;
                                        "hostProcess"?: boolean;
                                        "runAsUserName"?: string;
                                    };
                                };
                                "startupProbe"?: {
                                    "exec"?: {
                                        "command"?: Array<string>;
                                    };
                                    "failureThreshold"?: number;
                                    "grpc"?: {
                                        "port": number;
                                        "service"?: string;
                                    };
                                    "httpGet"?: {
                                        "host"?: string;
                                        "httpHeaders"?: Array<{
                                            "name": string;
                                            "value": string;
                                        }>;
                                        "path"?: string;
                                        "port": number | string;
                                        "scheme"?: string;
                                    };
                                    "initialDelaySeconds"?: number;
                                    "periodSeconds"?: number;
                                    "successThreshold"?: number;
                                    "tcpSocket"?: {
                                        "host"?: string;
                                        "port": number | string;
                                    };
                                    "terminationGracePeriodSeconds"?: number;
                                    "timeoutSeconds"?: number;
                                };
                                "stdin"?: boolean;
                                "stdinOnce"?: boolean;
                                "terminationMessagePath"?: string;
                                "terminationMessagePolicy"?: string;
                                "tty"?: boolean;
                                "volumeDevices"?: Array<{
                                    "devicePath": string;
                                    "name": string;
                                }>;
                                "volumeMounts"?: Array<{
                                    "mountPath": string;
                                    "mountPropagation"?: string;
                                    "name": string;
                                    "readOnly"?: boolean;
                                    "subPath"?: string;
                                    "subPathExpr"?: string;
                                }>;
                                "workingDir"?: string;
                            }>;
                            "nodeName"?: string;
                            "nodeSelector"?: {
                                [key: string]: string;
                            };
                            "os"?: {
                                "name": string;
                            };
                            "overhead"?: {
                                [key: string]: number | string;
                            };
                            "preemptionPolicy"?: string;
                            "priority"?: number;
                            "priorityClassName"?: string;
                            "readinessGates"?: Array<{
                                "conditionType": string;
                            }>;
                            "restartPolicy"?: string;
                            "runtimeClassName"?: string;
                            "schedulerName"?: string;
                            "securityContext"?: {
                                "fsGroup"?: number;
                                "fsGroupChangePolicy"?: string;
                                "runAsGroup"?: number;
                                "runAsNonRoot"?: boolean;
                                "runAsUser"?: number;
                                "seLinuxOptions"?: {
                                    "level"?: string;
                                    "role"?: string;
                                    "type"?: string;
                                    "user"?: string;
                                };
                                "seccompProfile"?: {
                                    "localhostProfile"?: string;
                                    "type": string;
                                };
                                "supplementalGroups"?: Array<number>;
                                "sysctls"?: Array<{
                                    "name": string;
                                    "value": string;
                                }>;
                                "windowsOptions"?: {
                                    "gmsaCredentialSpec"?: string;
                                    "gmsaCredentialSpecName"?: string;
                                    "hostProcess"?: boolean;
                                    "runAsUserName"?: string;
                                };
                            };
                            "serviceAccount"?: string;
                            "serviceAccountName"?: string;
                            "setHostnameAsFQDN"?: boolean;
                            "shareProcessNamespace"?: boolean;
                            "subdomain"?: string;
                            "terminationGracePeriodSeconds"?: number;
                            "tolerations"?: Array<{
                                "effect"?: string;
                                "key"?: string;
                                "operator"?: string;
                                "tolerationSeconds"?: number;
                                "value"?: string;
                            }>;
                            "topologySpreadConstraints"?: Array<{
                                "labelSelector"?: {
                                    "matchExpressions"?: Array<{
                                        "key": string;
                                        "operator": string;
                                        "values"?: Array<string>;
                                    }>;
                                    "matchLabels"?: {
                                        [key: string]: string;
                                    };
                                };
                                "matchLabelKeys"?: Array<string>;
                                "maxSkew": number;
                                "minDomains"?: number;
                                "nodeAffinityPolicy"?: string;
                                "nodeTaintsPolicy"?: string;
                                "topologyKey": string;
                                "whenUnsatisfiable": string;
                            }>;
                            "volumes"?: Array<{
                                "awsElasticBlockStore"?: {
                                    "fsType"?: string;
                                    "partition"?: number;
                                    "readOnly"?: boolean;
                                    "volumeID": string;
                                };
                                "azureDisk"?: {
                                    "cachingMode"?: string;
                                    "diskName": string;
                                    "diskURI": string;
                                    "fsType"?: string;
                                    "kind"?: string;
                                    "readOnly"?: boolean;
                                };
                                "azureFile"?: {
                                    "readOnly"?: boolean;
                                    "secretName": string;
                                    "shareName": string;
                                };
                                "cephfs"?: {
                                    "monitors": Array<string>;
                                    "path"?: string;
                                    "readOnly"?: boolean;
                                    "secretFile"?: string;
                                    "secretRef"?: {
                                        "name"?: string;
                                    };
                                    "user"?: string;
                                };
                                "cinder"?: {
                                    "fsType"?: string;
                                    "readOnly"?: boolean;
                                    "secretRef"?: {
                                        "name"?: string;
                                    };
                                    "volumeID": string;
                                };
                                "configMap"?: {
                                    "defaultMode"?: number;
                                    "items"?: Array<{
                                        "key": string;
                                        "mode"?: number;
                                        "path": string;
                                    }>;
                                    "name"?: string;
                                    "optional"?: boolean;
                                };
                                "csi"?: {
                                    "driver": string;
                                    "fsType"?: string;
                                    "nodePublishSecretRef"?: {
                                        "name"?: string;
                                    };
                                    "readOnly"?: boolean;
                                    "volumeAttributes"?: {
                                        [key: string]: string;
                                    };
                                };
                                "downwardAPI"?: {
                                    "defaultMode"?: number;
                                    "items"?: Array<{
                                        "fieldRef"?: {
                                            "apiVersion"?: string;
                                            "fieldPath": string;
                                        };
                                        "mode"?: number;
                                        "path": string;
                                        "resourceFieldRef"?: {
                                            "containerName"?: string;
                                            "divisor"?: number | string;
                                            "resource": string;
                                        };
                                    }>;
                                };
                                "emptyDir"?: {
                                    "medium"?: string;
                                    "sizeLimit"?: number | string;
                                };
                                "ephemeral"?: {
                                    "volumeClaimTemplate"?: {
                                        "metadata"?: {};
                                        "spec": {
                                            "accessModes"?: Array<string>;
                                            "dataSource"?: {
                                                "apiGroup"?: string;
                                                "kind": string;
                                                "name": string;
                                            };
                                            "dataSourceRef"?: {
                                                "apiGroup"?: string;
                                                "kind": string;
                                                "name": string;
                                            };
                                            "resources"?: {
                                                "limits"?: {
                                                    [key: string]: number | string;
                                                };
                                                "requests"?: {
                                                    [key: string]: number | string;
                                                };
                                            };
                                            "selector"?: {
                                                "matchExpressions"?: Array<{
                                                    "key": string;
                                                    "operator": string;
                                                    "values"?: Array<string>;
                                                }>;
                                                "matchLabels"?: {
                                                    [key: string]: string;
                                                };
                                            };
                                            "storageClassName"?: string;
                                            "volumeMode"?: string;
                                            "volumeName"?: string;
                                        };
                                    };
                                };
                                "fc"?: {
                                    "fsType"?: string;
                                    "lun"?: number;
                                    "readOnly"?: boolean;
                                    "targetWWNs"?: Array<string>;
                                    "wwids"?: Array<string>;
                                };
                                "flexVolume"?: {
                                    "driver": string;
                                    "fsType"?: string;
                                    "options"?: {
                                        [key: string]: string;
                                    };
                                    "readOnly"?: boolean;
                                    "secretRef"?: {
                                        "name"?: string;
                                    };
                                };
                                "flocker"?: {
                                    "datasetName"?: string;
                                    "datasetUUID"?: string;
                                };
                                "gcePersistentDisk"?: {
                                    "fsType"?: string;
                                    "partition"?: number;
                                    "pdName": string;
                                    "readOnly"?: boolean;
                                };
                                "gitRepo"?: {
                                    "directory"?: string;
                                    "repository": string;
                                    "revision"?: string;
                                };
                                "glusterfs"?: {
                                    "endpoints": string;
                                    "path": string;
                                    "readOnly"?: boolean;
                                };
                                "hostPath"?: {
                                    "path": string;
                                    "type"?: string;
                                };
                                "iscsi"?: {
                                    "chapAuthDiscovery"?: boolean;
                                    "chapAuthSession"?: boolean;
                                    "fsType"?: string;
                                    "initiatorName"?: string;
                                    "iqn": string;
                                    "iscsiInterface"?: string;
                                    "lun": number;
                                    "portals"?: Array<string>;
                                    "readOnly"?: boolean;
                                    "secretRef"?: {
                                        "name"?: string;
                                    };
                                    "targetPortal": string;
                                };
                                "name": string;
                                "nfs"?: {
                                    "path": string;
                                    "readOnly"?: boolean;
                                    "server": string;
                                };
                                "persistentVolumeClaim"?: {
                                    "claimName": string;
                                    "readOnly"?: boolean;
                                };
                                "photonPersistentDisk"?: {
                                    "fsType"?: string;
                                    "pdID": string;
                                };
                                "portworxVolume"?: {
                                    "fsType"?: string;
                                    "readOnly"?: boolean;
                                    "volumeID": string;
                                };
                                "projected"?: {
                                    "defaultMode"?: number;
                                    "sources"?: Array<{
                                        "configMap"?: {
                                            "items"?: Array<{
                                                "key": string;
                                                "mode"?: number;
                                                "path": string;
                                            }>;
                                            "name"?: string;
                                            "optional"?: boolean;
                                        };
                                        "downwardAPI"?: {
                                            "items"?: Array<{
                                                "fieldRef"?: {
                                                    "apiVersion"?: string;
                                                    "fieldPath": string;
                                                };
                                                "mode"?: number;
                                                "path": string;
                                                "resourceFieldRef"?: {
                                                    "containerName"?: string;
                                                    "divisor"?: number | string;
                                                    "resource": string;
                                                };
                                            }>;
                                        };
                                        "secret"?: {
                                            "items"?: Array<{
                                                "key": string;
                                                "mode"?: number;
                                                "path": string;
                                            }>;
                                            "name"?: string;
                                            "optional"?: boolean;
                                        };
                                        "serviceAccountToken"?: {
                                            "audience"?: string;
                                            "expirationSeconds"?: number;
                                            "path": string;
                                        };
                                    }>;
                                };
                                "quobyte"?: {
                                    "group"?: string;
                                    "readOnly"?: boolean;
                                    "registry": string;
                                    "tenant"?: string;
                                    "user"?: string;
                                    "volume": string;
                                };
                                "rbd"?: {
                                    "fsType"?: string;
                                    "image": string;
                                    "keyring"?: string;
                                    "monitors": Array<string>;
                                    "pool"?: string;
                                    "readOnly"?: boolean;
                                    "secretRef"?: {
                                        "name"?: string;
                                    };
                                    "user"?: string;
                                };
                                "scaleIO"?: {
                                    "fsType"?: string;
                                    "gateway": string;
                                    "protectionDomain"?: string;
                                    "readOnly"?: boolean;
                                    "secretRef": {
                                        "name"?: string;
                                    };
                                    "sslEnabled"?: boolean;
                                    "storageMode"?: string;
                                    "storagePool"?: string;
                                    "system": string;
                                    "volumeName"?: string;
                                };
                                "secret"?: {
                                    "defaultMode"?: number;
                                    "items"?: Array<{
                                        "key": string;
                                        "mode"?: number;
                                        "path": string;
                                    }>;
                                    "optional"?: boolean;
                                    "secretName"?: string;
                                };
                                "storageos"?: {
                                    "fsType"?: string;
                                    "readOnly"?: boolean;
                                    "secretRef"?: {
                                        "name"?: string;
                                    };
                                    "volumeName"?: string;
                                    "volumeNamespace"?: string;
                                };
                                "vsphereVolume"?: {
                                    "fsType"?: string;
                                    "storagePolicyID"?: string;
                                    "storagePolicyName"?: string;
                                    "volumePath": string;
                                };
                            }>;
                        };
                    };
                    "updateStrategy"?: {
                        "rollingUpdate"?: {
                            "maxUnavailable"?: number | string;
                            "partition"?: number;
                        };
                        "type"?: string;
                    };
                    "volumeClaimTemplates"?: Array<{
                        "apiVersion"?: string;
                        "kind"?: string;
                        "metadata"?: {
                            "annotations"?: {
                                [key: string]: string;
                            };
                            "labels"?: {
                                [key: string]: string;
                            };
                            "name"?: string;
                            "namespace"?: string;
                        };
                        "spec"?: {
                            "accessModes"?: Array<string>;
                            "dataSource"?: {
                                "apiGroup"?: string;
                                "kind": string;
                                "name": string;
                            };
                            "dataSourceRef"?: {
                                "apiGroup"?: string;
                                "kind": string;
                                "name": string;
                            };
                            "resources"?: {
                                "limits"?: {
                                    [key: string]: number | string;
                                };
                                "requests"?: {
                                    [key: string]: number | string;
                                };
                            };
                            "selector"?: {
                                "matchExpressions"?: Array<{
                                    "key": string;
                                    "operator": string;
                                    "values"?: Array<string>;
                                }>;
                                "matchLabels"?: {
                                    [key: string]: string;
                                };
                            };
                            "storageClassName"?: string;
                            "volumeMode"?: string;
                            "volumeName"?: string;
                        };
                    }>;
                };
            };
        };
        /**
         * The desired persistent storage configuration for each Pod in the cluster.
         */
        "persistence"?: {
            /**
             * The requested size of the persistent volume attached to each Pod in the RabbitmqCluster. The format of this field matches that defined by kubernetes/apimachinery. See https://pkg.go.dev/k8s.io/apimachinery/pkg/api/resource#Quantity for more info on the format of this field.
             */
            "storage"?: number | string;
            /**
             * The name of the StorageClass to claim a PersistentVolume from.
             */
            "storageClassName"?: string;
        };
        /**
         * Configuration options for RabbitMQ Pods created in the cluster.
         */
        "rabbitmq"?: {
            /**
             * Modify to add to the rabbitmq.conf file in addition to default configurations set by the operator. Modifying this property on an existing RabbitmqCluster will trigger a StatefulSet rolling restart and will cause rabbitmq downtime. For more information on this config, see https://www.rabbitmq.com/configure.html#config-file
             */
            "additionalConfig"?: string;
            /**
             * List of plugins to enable in addition to essential plugins: rabbitmq_management, rabbitmq_prometheus, and rabbitmq_peer_discovery_k8s.
             */
            "additionalPlugins"?: Array<string>;
            /**
             * Specify any rabbitmq advanced.config configurations to apply to the cluster. For more information on advanced config, see https://www.rabbitmq.com/configure.html#advanced-config-file
             */
            "advancedConfig"?: string;
            /**
             * Modify to add to the rabbitmq-env.conf file. Modifying this property on an existing RabbitmqCluster will trigger a StatefulSet rolling restart and will cause rabbitmq downtime. For more information on env config, see https://www.rabbitmq.com/man/rabbitmq-env.conf.5.html
             */
            "envConfig"?: string;
        };
        /**
         * Replicas is the number of nodes in the RabbitMQ cluster. Each node is deployed as a Replica in a StatefulSet. Only 1, 3, 5 replicas clusters are tested. This value should be an odd number to ensure the resultant cluster can establish exactly one quorum of nodes in the event of a fragmenting network partition.
         */
        "replicas"?: number;
        /**
         * The desired compute resource requirements of Pods in the cluster.
         */
        "resources"?: {
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
         * Secret backend configuration for the RabbitmqCluster. Enables to fetch default user credentials and certificates from K8s external secret stores.
         */
        "secretBackend"?: {
            /**
             * VaultSpec will add Vault annotations (see https://www.vaultproject.io/docs/platform/k8s/injector/annotations) to RabbitMQ Pods. It requires a Vault Agent Sidecar Injector (https://www.vaultproject.io/docs/platform/k8s/injector) to be installed in the K8s cluster. The injector is a K8s Mutation Webhook Controller that alters RabbitMQ Pod specifications (based on the added Vault annotations) to include Vault Agent containers that render Vault secrets to the volume.
             */
            "vault"?: {
                /**
                 * Vault annotations that override the Vault annotations set by the cluster-operator. For a list of valid Vault annotations, see https://www.vaultproject.io/docs/platform/k8s/injector/annotations
                 */
                "annotations"?: {
                    [key: string]: string;
                };
                /**
                 * Path in Vault to access a KV (Key-Value) secret with the fields username and password for the default user. For example "secret/data/rabbitmq/config".
                 */
                "defaultUserPath"?: string;
                /**
                 * Sidecar container that updates the default user's password in RabbitMQ when it changes in Vault. Additionally, it updates /var/lib/rabbitmq/.rabbitmqadmin.conf (used by rabbitmqadmin CLI). Set to empty string to disable the sidecar container.
                 */
                "defaultUserUpdaterImage"?: string;
                /**
                 * Role in Vault. If vault.defaultUserPath is set, this role must have capability to read the pre-created default user credential in Vault. If vault.tls is set, this role must have capability to create and update certificates in the Vault PKI engine for the domains "<namespace>" and "<namespace>.svc".
                 */
                "role"?: string;
                "tls"?: {
                    /**
                     * Specifies the requested Subject Alternative Names (SANs), in a comma-delimited list. These will be appended to the SANs added by the cluster-operator. The cluster-operator will add SANs: "<RabbitmqCluster name>-server-<index>.<RabbitmqCluster name>-nodes.<namespace>" for each pod, e.g. "myrabbit-server-0.myrabbit-nodes.default".
                     */
                    "altNames"?: string;
                    /**
                     * Specifies the requested certificate Common Name (CN). Defaults to <serviceName>.<namespace>.svc if not provided.
                     */
                    "commonName"?: string;
                    /**
                     * Specifies the requested IP Subject Alternative Names, in a comma-delimited list.
                     */
                    "ipSans"?: string;
                    /**
                     * Path in Vault PKI engine. For example "pki/issue/hashicorp-com". required
                     */
                    "pkiIssuerPath"?: string;
                };
            };
        };
        /**
         * The desired state of the Kubernetes Service to create for the cluster.
         */
        "service"?: {
            /**
             * Annotations to add to the Service.
             */
            "annotations"?: {
                [key: string]: string;
            };
            /**
             * Type of Service to create for the cluster. Must be one of: ClusterIP, LoadBalancer, NodePort. For more info see https://pkg.go.dev/k8s.io/api/core/v1#ServiceType
             */
            "type"?: "ClusterIP" | "LoadBalancer" | "NodePort";
        };
        /**
         * If unset, or set to false, the cluster will run `rabbitmq-queues rebalance all` whenever the cluster is updated. Set to true to prevent the operator rebalancing queue leaders after a cluster update. Has no effect if the cluster only consists of one node. For more information, see https://www.rabbitmq.com/rabbitmq-queues.8.html#rebalance
         */
        "skipPostDeploySteps"?: boolean;
        /**
         * TerminationGracePeriodSeconds is the timeout that each rabbitmqcluster pod will have to terminate gracefully. It defaults to 604800 seconds ( a week long) to ensure that the container preStop lifecycle hook can finish running. For more information, see: https://github.com/rabbitmq/cluster-operator/blob/main/docs/design/20200520-graceful-pod-termination.md
         */
        "terminationGracePeriodSeconds"?: number;
        /**
         * TLS-related configuration for the RabbitMQ cluster.
         */
        "tls"?: {
            /**
             * Name of a Secret in the same Namespace as the RabbitmqCluster, containing the Certificate Authority's public certificate for TLS. The Secret must store this as ca.crt. This Secret can be created by running `kubectl create secret generic ca-secret --from-file=ca.crt=path/to/ca.cert` Used for mTLS, and TLS for rabbitmq_web_stomp and rabbitmq_web_mqtt.
             */
            "caSecretName"?: string;
            /**
             * When set to true, the RabbitmqCluster disables non-TLS listeners for RabbitMQ, management plugin and for any enabled plugins in the following list: stomp, mqtt, web_stomp, web_mqtt. Only TLS-enabled clients will be able to connect.
             */
            "disableNonTLSListeners"?: boolean;
            /**
             * Name of a Secret in the same Namespace as the RabbitmqCluster, containing the server's private key & public certificate for TLS. The Secret must store these as tls.key and tls.crt, respectively. This Secret can be created by running `kubectl create secret tls tls-secret --cert=path/to/tls.cert --key=path/to/tls.key`
             */
            "secretName"?: string;
        };
        /**
         * Tolerations is the list of Toleration resources attached to each Pod in the RabbitmqCluster.
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
     * Status presents the observed state of RabbitmqCluster
     */
    "status"?: {
        /**
         * Binding exposes a secret containing the binding information for this RabbitmqCluster. It implements the service binding Provisioned Service duck type. See: https://github.com/servicebinding/spec#provisioned-service
         */
        "binding"?: {
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
        };
        /**
         * Set of Conditions describing the current state of the RabbitmqCluster
         */
        "conditions": Array<{
            /**
             * The last time this Condition type changed.
             */
            "lastTransitionTime"?: string;
            /**
             * Full text reason for current status of the condition.
             */
            "message"?: string;
            /**
             * One word, camel-case reason for current status of the condition.
             */
            "reason"?: string;
            /**
             * True, False, or Unknown
             */
            "status": string;
            /**
             * Type indicates the scope of RabbitmqCluster status addressed by the condition.
             */
            "type": string;
        }>;
        /**
         * Identifying information on internal resources
         */
        "defaultUser"?: {
            /**
             * Reference to the Kubernetes Secret containing the credentials of the default user.
             */
            "secretReference"?: {
                /**
                 * Key-value pairs in the Secret corresponding to `username`, `password`, `host`, and `port`
                 */
                "keys": {
                    [key: string]: string;
                };
                /**
                 * Name of the Secret containing the default user credentials
                 */
                "name": string;
                /**
                 * Namespace of the Secret containing the default user credentials
                 */
                "namespace": string;
            };
            /**
             * Reference to the Kubernetes Service serving the cluster.
             */
            "serviceReference"?: {
                /**
                 * Name of the Service serving the cluster
                 */
                "name": string;
                /**
                 * Namespace of the Service serving the cluster
                 */
                "namespace": string;
            };
        };
        /**
         * observedGeneration is the most recent successful generation observed for this RabbitmqCluster. It corresponds to the RabbitmqCluster's generation, which is updated on mutation by the API Server.
         */
        "observedGeneration"?: number;
    };
}
/**
 * RabbitmqCluster is the Schema for the RabbitmqCluster API. Each instance of this object corresponds to a single RabbitMQ cluster.
 */
export declare class RabbitmqCluster extends Model<IRabbitmqCluster> implements IRabbitmqCluster {
    "apiVersion": IRabbitmqCluster["apiVersion"];
    "kind": IRabbitmqCluster["kind"];
    "metadata"?: IRabbitmqCluster["metadata"];
    "spec"?: IRabbitmqCluster["spec"];
    "status"?: IRabbitmqCluster["status"];
    static apiVersion: IRabbitmqCluster["apiVersion"];
    static kind: IRabbitmqCluster["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IRabbitmqCluster>;
    constructor(data?: ModelData<IRabbitmqCluster>);
}
