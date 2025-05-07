import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * Canary is the Schema for the Canary API.
 */
export interface ICanary {
    "apiVersion": "flagger.app/v1beta1";
    "kind": "Canary";
    "metadata"?: IObjectMeta;
    /**
     * CanarySpec defines the desired state of a Canary.
     */
    "spec"?: {
        /**
         * Traffic managent provider
         */
        "provider"?: string;
        /**
         * Prometheus URL
         */
        "metricsServer"?: string;
        /**
         * Deployment progress deadline
         */
        "progressDeadlineSeconds"?: number;
        /**
         * Target selector
         */
        "targetRef": {
            "apiVersion": string;
            "kind": "DaemonSet" | "Deployment" | "Service";
            "name": string;
        };
        /**
         * Scaler selector
         */
        "autoscalerRef"?: {
            "apiVersion": string;
            "kind": "HorizontalPodAutoscaler" | "ScaledObject";
            "name": string;
            "primaryScalerQueries"?: {
                [key: string]: string;
            };
            "primaryScalerReplicas"?: {
                "minReplicas"?: number;
                "maxReplicas"?: number;
            };
        };
        /**
         * Ingress selector
         */
        "ingressRef"?: {
            "apiVersion": string;
            "kind": "Ingress";
            "name": string;
        };
        /**
         * APISIX route selector
         */
        "routeRef"?: {
            "apiVersion": string;
            "kind": "ApisixRoute";
            "name": string;
        };
        /**
         * Gloo Upstream selector
         */
        "upstreamRef"?: {
            "apiVersion": string;
            "kind": "Upstream";
            "name": string;
            "namespace"?: string;
        };
        /**
         * Kubernetes Service spec
         */
        "service": {
            /**
             * Kubernetes service name
             */
            "name"?: string;
            /**
             * Container port number
             */
            "port": number;
            /**
             * Container port name
             */
            "portName"?: string;
            /**
             * Application protocol of the port
             */
            "appProtocol"?: string;
            /**
             * Container target port name
             */
            "targetPort"?: any;
            /**
             * Enable port dicovery
             */
            "portDiscovery"?: boolean;
            /**
             * HTTP or gRPC request timeout
             */
            "timeout"?: string;
            /**
             * AppMesh mesh name
             */
            "meshName"?: string;
            /**
             * AppMesh backend array
             */
            "backends"?: Array<string>;
            /**
             * The list of host names for this service
             */
            "hosts"?: Array<string>;
            /**
             * enable behaving as a delegate VirtualService
             */
            "delegation"?: boolean;
            /**
             * URI match conditions
             */
            "match"?: Array<{
                "authority"?: {
                    "exact"?: string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                } & (Exclude<{
                    "exact"?: string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                }, {
                    "exact"?: string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                } & ({
                    "exact": string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                } | {
                    "exact"?: string;
                    "prefix": string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                } | {
                    "exact"?: string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex": string;
                })> | {
                    "exact": string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                } | {
                    "exact"?: string;
                    "prefix": string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                } | {
                    "exact"?: string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex": string;
                });
                /**
                 * Names of gateways where the rule should be applied.
                 */
                "gateways"?: Array<string>;
                "headers"?: {
                    [key: string]: {
                        "exact"?: string;
                        "prefix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                         */
                        "regex"?: string;
                    } & (Exclude<{
                        "exact"?: string;
                        "prefix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                         */
                        "regex"?: string;
                    }, {
                        "exact"?: string;
                        "prefix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                         */
                        "regex"?: string;
                    } & ({
                        "exact": string;
                        "prefix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                         */
                        "regex"?: string;
                    } | {
                        "exact"?: string;
                        "prefix": string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                         */
                        "regex"?: string;
                    } | {
                        "exact"?: string;
                        "prefix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                         */
                        "regex": string;
                    })> | {
                        "exact": string;
                        "prefix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                         */
                        "regex"?: string;
                    } | {
                        "exact"?: string;
                        "prefix": string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                         */
                        "regex"?: string;
                    } | {
                        "exact"?: string;
                        "prefix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                         */
                        "regex": string;
                    });
                };
                /**
                 * Flag to specify whether the URI matching should be case-insensitive.
                 */
                "ignoreUriCase"?: boolean;
                "method"?: {
                    "exact"?: string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                } & (Exclude<{
                    "exact"?: string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                }, {
                    "exact"?: string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                } & ({
                    "exact": string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                } | {
                    "exact"?: string;
                    "prefix": string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                } | {
                    "exact"?: string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex": string;
                })> | {
                    "exact": string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                } | {
                    "exact"?: string;
                    "prefix": string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                } | {
                    "exact"?: string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex": string;
                });
                /**
                 * The name assigned to a match.
                 */
                "name"?: string;
                /**
                 * Specifies the ports on the host that is being addressed.
                 */
                "port"?: number;
                /**
                 * Query parameters for matching.
                 */
                "queryParams"?: {
                    [key: string]: {
                        "exact"?: string;
                        "prefix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                         */
                        "regex"?: string;
                    } & (Exclude<{
                        "exact"?: string;
                        "prefix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                         */
                        "regex"?: string;
                    }, {
                        "exact"?: string;
                        "prefix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                         */
                        "regex"?: string;
                    } & ({
                        "exact": string;
                        "prefix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                         */
                        "regex"?: string;
                    } | {
                        "exact"?: string;
                        "prefix": string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                         */
                        "regex"?: string;
                    } | {
                        "exact"?: string;
                        "prefix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                         */
                        "regex": string;
                    })> | {
                        "exact": string;
                        "prefix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                         */
                        "regex"?: string;
                    } | {
                        "exact"?: string;
                        "prefix": string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                         */
                        "regex"?: string;
                    } | {
                        "exact"?: string;
                        "prefix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                         */
                        "regex": string;
                    });
                };
                "scheme"?: {
                    "exact"?: string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                } & (Exclude<{
                    "exact"?: string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                }, {
                    "exact"?: string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                } & ({
                    "exact": string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                } | {
                    "exact"?: string;
                    "prefix": string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                } | {
                    "exact"?: string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex": string;
                })> | {
                    "exact": string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                } | {
                    "exact"?: string;
                    "prefix": string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                } | {
                    "exact"?: string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex": string;
                });
                "sourceLabels"?: {
                    [key: string]: string;
                };
                /**
                 * Source namespace constraining the applicability of a rule to workloads in that namespace.
                 */
                "sourceNamespace"?: string;
                "uri"?: {
                    "exact"?: string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                } & (Exclude<{
                    "exact"?: string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                }, {
                    "exact"?: string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                } & ({
                    "exact": string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                } | {
                    "exact"?: string;
                    "prefix": string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                } | {
                    "exact"?: string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex": string;
                })> | {
                    "exact": string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                } | {
                    "exact"?: string;
                    "prefix": string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex"?: string;
                } | {
                    "exact"?: string;
                    "prefix"?: string;
                    /**
                     * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                     */
                    "regex": string;
                });
                /**
                 * withoutHeader has the same syntax with the header, but has opposite meaning.
                 */
                "withoutHeaders"?: {
                    [key: string]: {
                        "exact"?: string;
                        "prefix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                         */
                        "regex"?: string;
                    } & (Exclude<{
                        "exact"?: string;
                        "prefix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                         */
                        "regex"?: string;
                    }, {
                        "exact"?: string;
                        "prefix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                         */
                        "regex"?: string;
                    } & ({
                        "exact": string;
                        "prefix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                         */
                        "regex"?: string;
                    } | {
                        "exact"?: string;
                        "prefix": string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                         */
                        "regex"?: string;
                    } | {
                        "exact"?: string;
                        "prefix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                         */
                        "regex": string;
                    })> | {
                        "exact": string;
                        "prefix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                         */
                        "regex"?: string;
                    } | {
                        "exact"?: string;
                        "prefix": string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                         */
                        "regex"?: string;
                    } | {
                        "exact"?: string;
                        "prefix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
                         */
                        "regex": string;
                    });
                };
            }>;
            /**
             * Retry policy for HTTP requests
             */
            "retries"?: {
                /**
                 * Number of retries for a given request
                 */
                "attempts"?: number;
                /**
                 * Timeout per retry attempt for a given request
                 */
                "perTryTimeout"?: string;
                /**
                 * Specifies the conditions under which retry takes place
                 */
                "retryOn"?: string;
            };
            /**
             * Rewrite HTTP URIs
             */
            "rewrite"?: {
                "uri"?: string;
            };
            /**
             * Headers operations
             */
            "headers"?: {
                "request"?: {
                    "add"?: {
                        [key: string]: string;
                    };
                    "remove"?: Array<string>;
                    "set"?: {
                        [key: string]: string;
                    };
                };
                "response"?: {
                    "add"?: {
                        [key: string]: string;
                    };
                    "remove"?: Array<string>;
                    "set"?: {
                        [key: string]: string;
                    };
                };
            };
            /**
             * The list of Istio gateway for this virtual service
             */
            "gateways"?: Array<string>;
            /**
             * The list of parent Gateways for a HTTPRoute
             */
            "gatewayRefs"?: Array<{
                "group"?: string;
                "kind"?: string;
                "name": string;
                "namespace"?: string;
                "sectionName"?: string;
            }>;
            /**
             * Istio Cross-Origin Resource Sharing policy (CORS)
             */
            "corsPolicy"?: {
                "allowCredentials"?: boolean;
                "allowHeaders"?: Array<string>;
                /**
                 * List of HTTP methods allowed to access the resource
                 */
                "allowMethods"?: Array<string>;
                /**
                 * The list of origins that are allowed to perform CORS requests.
                 */
                "allowOrigin"?: Array<string>;
                /**
                 * String patterns that match allowed origins
                 */
                "allowOrigins"?: Array<{
                    "exact"?: string;
                    "prefix"?: string;
                    "regex"?: string;
                } & ({
                    "exact": string;
                    "prefix"?: string;
                    "regex"?: string;
                } | {
                    "exact"?: string;
                    "prefix": string;
                    "regex"?: string;
                } | {
                    "exact"?: string;
                    "prefix"?: string;
                    "regex": string;
                })>;
                "exposeHeaders"?: Array<string>;
                "maxAge"?: string;
            };
            /**
             * Istio traffic policy
             */
            "trafficPolicy"?: {
                "connectionPool"?: {
                    /**
                     * HTTP connection pool settings.
                     */
                    "http"?: {
                        /**
                         * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
                         */
                        "h2UpgradePolicy"?: "DEFAULT" | "DO_NOT_UPGRADE" | "UPGRADE";
                        /**
                         * Maximum number of pending HTTP requests to a destination.
                         */
                        "http1MaxPendingRequests"?: number;
                        /**
                         * Maximum number of requests to a backend.
                         */
                        "http2MaxRequests"?: number;
                        /**
                         * The idle timeout for upstream connection pool connections.
                         */
                        "idleTimeout"?: string;
                        /**
                         * Maximum number of requests per connection to a backend.
                         */
                        "maxRequestsPerConnection"?: number;
                        "maxRetries"?: number;
                    };
                };
                /**
                 * Settings controlling the load balancer algorithms.
                 */
                "loadBalancer"?: {
                    "consistentHash"?: {
                        /**
                         * Hash based on HTTP cookie.
                         */
                        "httpCookie"?: {
                            /**
                             * Name of the cookie.
                             */
                            "name"?: string;
                            /**
                             * Path to set for the cookie.
                             */
                            "path"?: string;
                            /**
                             * Lifetime of the cookie.
                             */
                            "ttl"?: string;
                        };
                        /**
                         * Hash based on a specific HTTP header.
                         */
                        "httpHeaderName"?: string;
                        /**
                         * Hash based on a specific HTTP query parameter.
                         */
                        "httpQueryParameterName"?: string;
                        "minimumRingSize"?: number;
                        /**
                         * Hash based on the source IP address.
                         */
                        "useSourceIp"?: boolean;
                    };
                    "localityLbSetting"?: {
                        /**
                         * Optional: only one of distribute or failover can be set.
                         */
                        "distribute"?: Array<{
                            /**
                             * Originating locality, '/' separated, e.g.
                             */
                            "from"?: string;
                            /**
                             * Map of upstream localities to traffic distribution weights.
                             */
                            "to"?: {
                                [key: string]: number;
                            };
                        }>;
                        /**
                         * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
                         */
                        "enabled"?: boolean;
                        /**
                         * Optional: only failover or distribute can be set.
                         */
                        "failover"?: Array<{
                            /**
                             * Originating region.
                             */
                            "from"?: string;
                            "to"?: string;
                        }>;
                    };
                    "simple"?: "ROUND_ROBIN" | "LEAST_CONN" | "RANDOM" | "PASSTHROUGH";
                } & ({
                    "consistentHash"?: {
                        /**
                         * Hash based on HTTP cookie.
                         */
                        "httpCookie"?: {
                            /**
                             * Name of the cookie.
                             */
                            "name"?: string;
                            /**
                             * Path to set for the cookie.
                             */
                            "path"?: string;
                            /**
                             * Lifetime of the cookie.
                             */
                            "ttl"?: string;
                        };
                        /**
                         * Hash based on a specific HTTP header.
                         */
                        "httpHeaderName"?: string;
                        /**
                         * Hash based on a specific HTTP query parameter.
                         */
                        "httpQueryParameterName"?: string;
                        "minimumRingSize"?: number;
                        /**
                         * Hash based on the source IP address.
                         */
                        "useSourceIp"?: boolean;
                    };
                    "localityLbSetting"?: {
                        /**
                         * Optional: only one of distribute or failover can be set.
                         */
                        "distribute"?: Array<{
                            /**
                             * Originating locality, '/' separated, e.g.
                             */
                            "from"?: string;
                            /**
                             * Map of upstream localities to traffic distribution weights.
                             */
                            "to"?: {
                                [key: string]: number;
                            };
                        }>;
                        /**
                         * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
                         */
                        "enabled"?: boolean;
                        /**
                         * Optional: only failover or distribute can be set.
                         */
                        "failover"?: Array<{
                            /**
                             * Originating region.
                             */
                            "from"?: string;
                            "to"?: string;
                        }>;
                    };
                    "simple": "ROUND_ROBIN" | "LEAST_CONN" | "RANDOM" | "PASSTHROUGH";
                } | {
                    "consistentHash": any | any | any | any;
                });
                /**
                 * Settings controlling eviction of unhealthy hosts from the load balancing pool.
                 */
                "outlierDetection"?: {
                    /**
                     * Minimum ejection duration.
                     */
                    "baseEjectionTime"?: string;
                    /**
                     * Number of 5xx errors before a host is ejected from the connection pool.
                     */
                    "consecutive5xxErrors"?: number;
                    "consecutiveErrors"?: number;
                    /**
                     * Number of gateway errors before a host is ejected from the connection pool.
                     */
                    "consecutiveGatewayErrors"?: number;
                    /**
                     * Time interval between ejection sweep analysis.
                     */
                    "interval"?: string;
                    "maxEjectionPercent"?: number;
                    "minHealthPercent"?: number;
                };
                /**
                 * Istio TLS related settings for connections to the upstream service
                 */
                "tls"?: {
                    "caCertificates"?: string;
                    /**
                     * REQUIRED if mode is `MUTUAL`.
                     */
                    "clientCertificate"?: string;
                    "mode"?: "DISABLE" | "SIMPLE" | "MUTUAL" | "ISTIO_MUTUAL";
                    /**
                     * REQUIRED if mode is `MUTUAL`.
                     */
                    "privateKey"?: string;
                    /**
                     * SNI string to present to the server during TLS handshake.
                     */
                    "sni"?: string;
                    "subjectAltNames"?: Array<string>;
                };
            };
            /**
             * Metadata to add to the apex service
             */
            "apex"?: {
                "labels"?: {
                    [key: string]: string;
                };
                "annotations"?: {
                    [key: string]: string;
                };
            };
            /**
             * Metadata to add to the primary service
             */
            "primary"?: {
                "labels"?: {
                    [key: string]: string;
                };
                "annotations"?: {
                    [key: string]: string;
                };
            };
            /**
             * Metadata to add to the canary service
             */
            "canary"?: {
                "labels"?: {
                    [key: string]: string;
                };
                "annotations"?: {
                    [key: string]: string;
                };
            };
        };
        /**
         * Skip analysis and promote canary
         */
        "skipAnalysis"?: boolean;
        /**
         * Revert mutated resources to original spec on deletion
         */
        "revertOnDeletion"?: boolean;
        /**
         * Canary analysis for this canary
         */
        "analysis": {
            /**
             * Schedule interval for this canary
             */
            "interval"?: string;
            /**
             * Number of checks to run for A/B Testing and Blue/Green
             */
            "iterations"?: number;
            /**
             * Max number of failed checks before rollback
             */
            "threshold"?: number;
            /**
             * Max traffic weight routed to canary
             */
            "maxWeight"?: number;
            /**
             * Incremental traffic step weight for the analysis phase
             */
            "stepWeight"?: number;
            /**
             * Incremental traffic step weights for the analysis phase
             */
            "stepWeights"?: Array<number>;
            /**
             * Incremental traffic step weight for the promotion phase
             */
            "stepWeightPromotion"?: number;
            /**
             * Mirror traffic to canary
             */
            "mirror"?: boolean;
            /**
             * Weight of traffic to be mirrored
             */
            "mirrorWeight"?: number;
            /**
             * Percentage of pods that need to be available to consider primary as ready
             */
            "primaryReadyThreshold"?: number;
            /**
             * Percentage of pods that need to be available to consider canary as ready
             */
            "canaryReadyThreshold"?: number;
            /**
             * A/B testing match conditions
             */
            "match"?: Array<{
                "headers"?: {
                    [key: string]: {
                        "exact"?: string;
                        "prefix"?: string;
                        "suffix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax)
                         */
                        "regex"?: string;
                    } & ({
                        "exact": string;
                        "prefix"?: string;
                        "suffix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax)
                         */
                        "regex"?: string;
                    } | {
                        "exact"?: string;
                        "prefix": string;
                        "suffix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax)
                         */
                        "regex"?: string;
                    } | {
                        "exact"?: string;
                        "prefix"?: string;
                        "suffix": string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax)
                         */
                        "regex"?: string;
                    } | {
                        "exact"?: string;
                        "prefix"?: string;
                        "suffix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax)
                         */
                        "regex": string;
                    });
                };
                /**
                 * Applicable only when the 'mesh' gateway is included in the service.gateways list
                 */
                "sourceLabels"?: {
                    [key: string]: string;
                };
            }>;
            /**
             * Metric check list for this canary
             */
            "metrics"?: Array<{
                /**
                 * Name of the metric
                 */
                "name": string;
                /**
                 * Interval of the query
                 */
                "interval"?: string;
                /**
                 * Max value accepted for this metric
                 */
                "threshold"?: number;
                /**
                 * Range accepted for this metric
                 */
                "thresholdRange"?: {
                    /**
                     * Min value accepted for this metric
                     */
                    "min"?: number;
                    /**
                     * Max value accepted for this metric
                     */
                    "max"?: number;
                };
                /**
                 * Prometheus query
                 */
                "query"?: string;
                /**
                 * Metric template reference
                 */
                "templateRef"?: {
                    /**
                     * Name of this metric template
                     */
                    "name": string;
                    /**
                     * Namespace of this metric template
                     */
                    "namespace"?: string;
                };
                /**
                 * Additional variables to be used in the metrics query (key-value pairs)
                 */
                "templateVariables"?: {
                    [key: string]: string;
                };
            }>;
            /**
             * Alert list for this canary analysis
             */
            "alerts"?: Array<{
                /**
                 * Name of the this alert
                 */
                "name": string;
                /**
                 * Severity level can be info, warn, error (default info)
                 */
                "severity"?: "" | "info" | "warn" | "error";
                /**
                 * Alert provider reference
                 */
                "providerRef": {
                    /**
                     * Name of the alert provider
                     */
                    "name": string;
                    /**
                     * Namespace of the alert provider
                     */
                    "namespace"?: string;
                };
            }>;
            /**
             * Webhook list for this canary
             */
            "webhooks"?: Array<{
                /**
                 * Name of the webhook
                 */
                "name": string;
                /**
                 * Type of the webhook pre, post or during rollout
                 */
                "type"?: "" | "confirm-rollout" | "pre-rollout" | "rollout" | "confirm-promotion" | "post-rollout" | "event" | "rollback" | "confirm-traffic-increase";
                /**
                 * Mute all alerts for the webhook
                 */
                "muteAlert"?: boolean;
                /**
                 * URL address of this webhook
                 */
                "url": string;
                /**
                 * Request timeout for this webhook
                 */
                "timeout"?: string;
                /**
                 * Metadata (key-value pairs) for this webhook
                 */
                "metadata"?: {
                    [key: string]: string;
                };
            }>;
            /**
             * SessionAffinity represents the session affinity settings for a canary run.
             */
            "sessionAffinity"?: {
                /**
                 * CookieName is the key that will be used for the session affinity cookie.
                 */
                "cookieName": string;
                /**
                 * MaxAge indicates the number of seconds until the session affinity cookie will expire.
                 */
                "maxAge"?: number;
            };
        } & ({
            /**
             * Schedule interval for this canary
             */
            "interval": string;
            /**
             * Number of checks to run for A/B Testing and Blue/Green
             */
            "iterations": number;
            /**
             * Max number of failed checks before rollback
             */
            "threshold": number;
            /**
             * Max traffic weight routed to canary
             */
            "maxWeight"?: number;
            /**
             * Incremental traffic step weight for the analysis phase
             */
            "stepWeight"?: number;
            /**
             * Incremental traffic step weights for the analysis phase
             */
            "stepWeights"?: Array<number>;
            /**
             * Incremental traffic step weight for the promotion phase
             */
            "stepWeightPromotion"?: number;
            /**
             * Mirror traffic to canary
             */
            "mirror"?: boolean;
            /**
             * Weight of traffic to be mirrored
             */
            "mirrorWeight"?: number;
            /**
             * Percentage of pods that need to be available to consider primary as ready
             */
            "primaryReadyThreshold"?: number;
            /**
             * Percentage of pods that need to be available to consider canary as ready
             */
            "canaryReadyThreshold"?: number;
            /**
             * A/B testing match conditions
             */
            "match"?: Array<{
                "headers"?: {
                    [key: string]: {
                        "exact"?: string;
                        "prefix"?: string;
                        "suffix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax)
                         */
                        "regex"?: string;
                    } & ({
                        "exact": string;
                        "prefix"?: string;
                        "suffix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax)
                         */
                        "regex"?: string;
                    } | {
                        "exact"?: string;
                        "prefix": string;
                        "suffix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax)
                         */
                        "regex"?: string;
                    } | {
                        "exact"?: string;
                        "prefix"?: string;
                        "suffix": string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax)
                         */
                        "regex"?: string;
                    } | {
                        "exact"?: string;
                        "prefix"?: string;
                        "suffix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax)
                         */
                        "regex": string;
                    });
                };
                /**
                 * Applicable only when the 'mesh' gateway is included in the service.gateways list
                 */
                "sourceLabels"?: {
                    [key: string]: string;
                };
            }>;
            /**
             * Metric check list for this canary
             */
            "metrics"?: Array<{
                /**
                 * Name of the metric
                 */
                "name": string;
                /**
                 * Interval of the query
                 */
                "interval"?: string;
                /**
                 * Max value accepted for this metric
                 */
                "threshold"?: number;
                /**
                 * Range accepted for this metric
                 */
                "thresholdRange"?: {
                    /**
                     * Min value accepted for this metric
                     */
                    "min"?: number;
                    /**
                     * Max value accepted for this metric
                     */
                    "max"?: number;
                };
                /**
                 * Prometheus query
                 */
                "query"?: string;
                /**
                 * Metric template reference
                 */
                "templateRef"?: {
                    /**
                     * Name of this metric template
                     */
                    "name": string;
                    /**
                     * Namespace of this metric template
                     */
                    "namespace"?: string;
                };
                /**
                 * Additional variables to be used in the metrics query (key-value pairs)
                 */
                "templateVariables"?: {
                    [key: string]: string;
                };
            }>;
            /**
             * Alert list for this canary analysis
             */
            "alerts"?: Array<{
                /**
                 * Name of the this alert
                 */
                "name": string;
                /**
                 * Severity level can be info, warn, error (default info)
                 */
                "severity"?: "" | "info" | "warn" | "error";
                /**
                 * Alert provider reference
                 */
                "providerRef": {
                    /**
                     * Name of the alert provider
                     */
                    "name": string;
                    /**
                     * Namespace of the alert provider
                     */
                    "namespace"?: string;
                };
            }>;
            /**
             * Webhook list for this canary
             */
            "webhooks"?: Array<{
                /**
                 * Name of the webhook
                 */
                "name": string;
                /**
                 * Type of the webhook pre, post or during rollout
                 */
                "type"?: "" | "confirm-rollout" | "pre-rollout" | "rollout" | "confirm-promotion" | "post-rollout" | "event" | "rollback" | "confirm-traffic-increase";
                /**
                 * Mute all alerts for the webhook
                 */
                "muteAlert"?: boolean;
                /**
                 * URL address of this webhook
                 */
                "url": string;
                /**
                 * Request timeout for this webhook
                 */
                "timeout"?: string;
                /**
                 * Metadata (key-value pairs) for this webhook
                 */
                "metadata"?: {
                    [key: string]: string;
                };
            }>;
            /**
             * SessionAffinity represents the session affinity settings for a canary run.
             */
            "sessionAffinity"?: {
                /**
                 * CookieName is the key that will be used for the session affinity cookie.
                 */
                "cookieName": string;
                /**
                 * MaxAge indicates the number of seconds until the session affinity cookie will expire.
                 */
                "maxAge"?: number;
            };
        } | {
            /**
             * Schedule interval for this canary
             */
            "interval": string;
            /**
             * Number of checks to run for A/B Testing and Blue/Green
             */
            "iterations"?: number;
            /**
             * Max number of failed checks before rollback
             */
            "threshold": number;
            /**
             * Max traffic weight routed to canary
             */
            "maxWeight"?: number;
            /**
             * Incremental traffic step weight for the analysis phase
             */
            "stepWeight": number;
            /**
             * Incremental traffic step weights for the analysis phase
             */
            "stepWeights"?: Array<number>;
            /**
             * Incremental traffic step weight for the promotion phase
             */
            "stepWeightPromotion"?: number;
            /**
             * Mirror traffic to canary
             */
            "mirror"?: boolean;
            /**
             * Weight of traffic to be mirrored
             */
            "mirrorWeight"?: number;
            /**
             * Percentage of pods that need to be available to consider primary as ready
             */
            "primaryReadyThreshold"?: number;
            /**
             * Percentage of pods that need to be available to consider canary as ready
             */
            "canaryReadyThreshold"?: number;
            /**
             * A/B testing match conditions
             */
            "match"?: Array<{
                "headers"?: {
                    [key: string]: {
                        "exact"?: string;
                        "prefix"?: string;
                        "suffix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax)
                         */
                        "regex"?: string;
                    } & ({
                        "exact": string;
                        "prefix"?: string;
                        "suffix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax)
                         */
                        "regex"?: string;
                    } | {
                        "exact"?: string;
                        "prefix": string;
                        "suffix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax)
                         */
                        "regex"?: string;
                    } | {
                        "exact"?: string;
                        "prefix"?: string;
                        "suffix": string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax)
                         */
                        "regex"?: string;
                    } | {
                        "exact"?: string;
                        "prefix"?: string;
                        "suffix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax)
                         */
                        "regex": string;
                    });
                };
                /**
                 * Applicable only when the 'mesh' gateway is included in the service.gateways list
                 */
                "sourceLabels"?: {
                    [key: string]: string;
                };
            }>;
            /**
             * Metric check list for this canary
             */
            "metrics"?: Array<{
                /**
                 * Name of the metric
                 */
                "name": string;
                /**
                 * Interval of the query
                 */
                "interval"?: string;
                /**
                 * Max value accepted for this metric
                 */
                "threshold"?: number;
                /**
                 * Range accepted for this metric
                 */
                "thresholdRange"?: {
                    /**
                     * Min value accepted for this metric
                     */
                    "min"?: number;
                    /**
                     * Max value accepted for this metric
                     */
                    "max"?: number;
                };
                /**
                 * Prometheus query
                 */
                "query"?: string;
                /**
                 * Metric template reference
                 */
                "templateRef"?: {
                    /**
                     * Name of this metric template
                     */
                    "name": string;
                    /**
                     * Namespace of this metric template
                     */
                    "namespace"?: string;
                };
                /**
                 * Additional variables to be used in the metrics query (key-value pairs)
                 */
                "templateVariables"?: {
                    [key: string]: string;
                };
            }>;
            /**
             * Alert list for this canary analysis
             */
            "alerts"?: Array<{
                /**
                 * Name of the this alert
                 */
                "name": string;
                /**
                 * Severity level can be info, warn, error (default info)
                 */
                "severity"?: "" | "info" | "warn" | "error";
                /**
                 * Alert provider reference
                 */
                "providerRef": {
                    /**
                     * Name of the alert provider
                     */
                    "name": string;
                    /**
                     * Namespace of the alert provider
                     */
                    "namespace"?: string;
                };
            }>;
            /**
             * Webhook list for this canary
             */
            "webhooks"?: Array<{
                /**
                 * Name of the webhook
                 */
                "name": string;
                /**
                 * Type of the webhook pre, post or during rollout
                 */
                "type"?: "" | "confirm-rollout" | "pre-rollout" | "rollout" | "confirm-promotion" | "post-rollout" | "event" | "rollback" | "confirm-traffic-increase";
                /**
                 * Mute all alerts for the webhook
                 */
                "muteAlert"?: boolean;
                /**
                 * URL address of this webhook
                 */
                "url": string;
                /**
                 * Request timeout for this webhook
                 */
                "timeout"?: string;
                /**
                 * Metadata (key-value pairs) for this webhook
                 */
                "metadata"?: {
                    [key: string]: string;
                };
            }>;
            /**
             * SessionAffinity represents the session affinity settings for a canary run.
             */
            "sessionAffinity"?: {
                /**
                 * CookieName is the key that will be used for the session affinity cookie.
                 */
                "cookieName": string;
                /**
                 * MaxAge indicates the number of seconds until the session affinity cookie will expire.
                 */
                "maxAge"?: number;
            };
        } | {
            /**
             * Schedule interval for this canary
             */
            "interval": string;
            /**
             * Number of checks to run for A/B Testing and Blue/Green
             */
            "iterations"?: number;
            /**
             * Max number of failed checks before rollback
             */
            "threshold": number;
            /**
             * Max traffic weight routed to canary
             */
            "maxWeight"?: number;
            /**
             * Incremental traffic step weight for the analysis phase
             */
            "stepWeight"?: number;
            /**
             * Incremental traffic step weights for the analysis phase
             */
            "stepWeights": Array<number>;
            /**
             * Incremental traffic step weight for the promotion phase
             */
            "stepWeightPromotion"?: number;
            /**
             * Mirror traffic to canary
             */
            "mirror"?: boolean;
            /**
             * Weight of traffic to be mirrored
             */
            "mirrorWeight"?: number;
            /**
             * Percentage of pods that need to be available to consider primary as ready
             */
            "primaryReadyThreshold"?: number;
            /**
             * Percentage of pods that need to be available to consider canary as ready
             */
            "canaryReadyThreshold"?: number;
            /**
             * A/B testing match conditions
             */
            "match"?: Array<{
                "headers"?: {
                    [key: string]: {
                        "exact"?: string;
                        "prefix"?: string;
                        "suffix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax)
                         */
                        "regex"?: string;
                    } & ({
                        "exact": string;
                        "prefix"?: string;
                        "suffix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax)
                         */
                        "regex"?: string;
                    } | {
                        "exact"?: string;
                        "prefix": string;
                        "suffix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax)
                         */
                        "regex"?: string;
                    } | {
                        "exact"?: string;
                        "prefix"?: string;
                        "suffix": string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax)
                         */
                        "regex"?: string;
                    } | {
                        "exact"?: string;
                        "prefix"?: string;
                        "suffix"?: string;
                        /**
                         * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax)
                         */
                        "regex": string;
                    });
                };
                /**
                 * Applicable only when the 'mesh' gateway is included in the service.gateways list
                 */
                "sourceLabels"?: {
                    [key: string]: string;
                };
            }>;
            /**
             * Metric check list for this canary
             */
            "metrics"?: Array<{
                /**
                 * Name of the metric
                 */
                "name": string;
                /**
                 * Interval of the query
                 */
                "interval"?: string;
                /**
                 * Max value accepted for this metric
                 */
                "threshold"?: number;
                /**
                 * Range accepted for this metric
                 */
                "thresholdRange"?: {
                    /**
                     * Min value accepted for this metric
                     */
                    "min"?: number;
                    /**
                     * Max value accepted for this metric
                     */
                    "max"?: number;
                };
                /**
                 * Prometheus query
                 */
                "query"?: string;
                /**
                 * Metric template reference
                 */
                "templateRef"?: {
                    /**
                     * Name of this metric template
                     */
                    "name": string;
                    /**
                     * Namespace of this metric template
                     */
                    "namespace"?: string;
                };
                /**
                 * Additional variables to be used in the metrics query (key-value pairs)
                 */
                "templateVariables"?: {
                    [key: string]: string;
                };
            }>;
            /**
             * Alert list for this canary analysis
             */
            "alerts"?: Array<{
                /**
                 * Name of the this alert
                 */
                "name": string;
                /**
                 * Severity level can be info, warn, error (default info)
                 */
                "severity"?: "" | "info" | "warn" | "error";
                /**
                 * Alert provider reference
                 */
                "providerRef": {
                    /**
                     * Name of the alert provider
                     */
                    "name": string;
                    /**
                     * Namespace of the alert provider
                     */
                    "namespace"?: string;
                };
            }>;
            /**
             * Webhook list for this canary
             */
            "webhooks"?: Array<{
                /**
                 * Name of the webhook
                 */
                "name": string;
                /**
                 * Type of the webhook pre, post or during rollout
                 */
                "type"?: "" | "confirm-rollout" | "pre-rollout" | "rollout" | "confirm-promotion" | "post-rollout" | "event" | "rollback" | "confirm-traffic-increase";
                /**
                 * Mute all alerts for the webhook
                 */
                "muteAlert"?: boolean;
                /**
                 * URL address of this webhook
                 */
                "url": string;
                /**
                 * Request timeout for this webhook
                 */
                "timeout"?: string;
                /**
                 * Metadata (key-value pairs) for this webhook
                 */
                "metadata"?: {
                    [key: string]: string;
                };
            }>;
            /**
             * SessionAffinity represents the session affinity settings for a canary run.
             */
            "sessionAffinity"?: {
                /**
                 * CookieName is the key that will be used for the session affinity cookie.
                 */
                "cookieName": string;
                /**
                 * MaxAge indicates the number of seconds until the session affinity cookie will expire.
                 */
                "maxAge"?: number;
            };
        });
    };
    /**
     * CanaryStatus defines the observed state of a canary.
     */
    "status"?: {
        /**
         * Analysis phase of this canary
         */
        "phase"?: "" | "Initializing" | "Initialized" | "Waiting" | "Progressing" | "WaitingPromotion" | "Promoting" | "Finalising" | "Succeeded" | "Failed" | "Terminating" | "Terminated";
        /**
         * Failed check count of the current canary analysis
         */
        "failedChecks"?: number;
        /**
         * Traffic weight routed to canary
         */
        "canaryWeight"?: number;
        /**
         * Iteration count of the current canary analysis
         */
        "iterations"?: number;
        /**
         * TrackedConfig of this canary
         */
        "trackedConfigs"?: {
            [key: string]: string;
        };
        /**
         * LastAppliedSpec of this canary
         */
        "lastAppliedSpec"?: string;
        /**
         * LastPromotedSpec of this canary
         */
        "lastPromotedSpec"?: string;
        /**
         * LastTransitionTime of this canary
         */
        "lastTransitionTime"?: string;
        /**
         * Session affinity cookie of the current canary run
         */
        "sessionAffinityCookie"?: string;
        /**
         * Session affinity cookie of the previous canary run
         */
        "previousSessionAffinityCookie"?: string;
        /**
         * Status conditions of this canary
         */
        "conditions"?: Array<{
            /**
             * LastTransitionTime of this condition
             */
            "lastTransitionTime"?: string;
            /**
             * LastUpdateTime of this condition
             */
            "lastUpdateTime"?: string;
            /**
             * Message associated with this condition
             */
            "message"?: string;
            /**
             * Reason for the current status of this condition
             */
            "reason": string;
            /**
             * Status of this condition
             */
            "status": string;
            /**
             * Type of this condition
             */
            "type": string;
        }>;
    };
}
/**
 * Canary is the Schema for the Canary API.
 */
export declare class Canary extends Model<ICanary> implements ICanary {
    "apiVersion": ICanary["apiVersion"];
    "kind": ICanary["kind"];
    "metadata"?: ICanary["metadata"];
    "spec"?: ICanary["spec"];
    "status"?: ICanary["status"];
    static apiVersion: ICanary["apiVersion"];
    static kind: ICanary["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ICanary>;
    constructor(data?: ModelData<ICanary>);
}
