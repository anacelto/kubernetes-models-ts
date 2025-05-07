import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/GatewayEnvoyproxyIoV1alpha1BackendTrafficPolicy";

/**
 * BackendTrafficPolicy allows the user to configure the behavior of the connection between the Envoy Proxy listener and the backend service.
 */
export interface IBackendTrafficPolicy {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "gateway.envoyproxy.io/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "BackendTrafficPolicy";
  "metadata"?: IObjectMeta;
  /**
   * spec defines the desired state of BackendTrafficPolicy.
   */
  "spec": {
    /**
     * Circuit Breaker settings for the upstream connections and requests. If not set, circuit breakers will be enabled with the default thresholds
     */
    "circuitBreaker"?: {
      /**
       * The maximum number of connections that Envoy will establish to the referenced backend defined within a xRoute rule.
       */
      "maxConnections"?: number;
      /**
       * The maximum number of parallel requests that Envoy will make to the referenced backend defined within a xRoute rule.
       */
      "maxParallelRequests"?: number;
      /**
       * The maximum number of parallel retries that Envoy will make to the referenced backend defined within a xRoute rule.
       */
      "maxParallelRetries"?: number;
      /**
       * The maximum number of pending requests that Envoy will queue to the referenced backend defined within a xRoute rule.
       */
      "maxPendingRequests"?: number;
      /**
       * The maximum number of requests that Envoy will make over a single connection to the referenced backend defined within a xRoute rule. Default: unlimited.
       */
      "maxRequestsPerConnection"?: number;
    };
    /**
     * The compression config for the http streams.
     */
    "compression"?: Array<{
      /**
       * The configuration for GZIP compressor.
       */
      "gzip"?: {
      };
      /**
       * CompressorType defines the compressor type to use for compression.
       */
      "type": "Gzip";
    }>;
    /**
     * FaultInjection defines the fault injection policy to be applied. This configuration can be used to inject delays and abort requests to mimic failure scenarios such as service failures and overloads
     */
    "faultInjection"?: {
      /**
       * If specified, the request will be aborted if it meets the configuration criteria.
       */
      "abort"?: {
        /**
         * GrpcStatus specifies the GRPC status code to be returned
         */
        "grpcStatus"?: number;
        /**
         * StatusCode specifies the HTTP status code to be returned
         */
        "httpStatus"?: number;
        /**
         * Percentage specifies the percentage of requests to be aborted. Default 100%, if set 0, no requests will be aborted. Accuracy to 0.0001%.
         */
        "percentage"?: number;
      };
      /**
       * If specified, a delay will be injected into the request.
       */
      "delay"?: {
        /**
         * FixedDelay specifies the fixed delay duration
         */
        "fixedDelay": string;
        /**
         * Percentage specifies the percentage of requests to be delayed. Default 100%, if set 0, no requests will be delayed. Accuracy to 0.0001%.
         */
        "percentage"?: number;
      };
    };
    /**
     * HealthCheck allows gateway to perform active health checking on backends.
     */
    "healthCheck"?: {
      /**
       * Active health check configuration
       */
      "active"?: {
        /**
         * HealthyThreshold defines the number of healthy health checks required before a backend host is marked healthy.
         */
        "healthyThreshold"?: number;
        /**
         * HTTP defines the configuration of http health checker. It's required while the health checker type is HTTP.
         */
        "http"?: {
          /**
           * ExpectedResponse defines a list of HTTP expected responses to match.
           */
          "expectedResponse"?: {
            /**
             * Binary payload base64 encoded.
             */
            "binary"?: string;
            /**
             * Text payload in plain text.
             */
            "text"?: string;
            /**
             * Type defines the type of the payload.
             */
            "type": string & ("Text" | "Binary" & "Text" | "Binary");
          };
          /**
           * ExpectedStatuses defines a list of HTTP response statuses considered healthy. Defaults to 200 only
           */
          "expectedStatuses"?: Array<number>;
          /**
           * Method defines the HTTP method used for health checking. Defaults to GET
           */
          "method"?: string;
          /**
           * Path defines the HTTP path that will be requested during health checking.
           */
          "path": string;
        };
        /**
         * Interval defines the time between active health checks.
         */
        "interval"?: string;
        /**
         * TCP defines the configuration of tcp health checker. It's required while the health checker type is TCP.
         */
        "tcp"?: {
          /**
           * Receive defines the expected response payload.
           */
          "receive"?: {
            /**
             * Binary payload base64 encoded.
             */
            "binary"?: string;
            /**
             * Text payload in plain text.
             */
            "text"?: string;
            /**
             * Type defines the type of the payload.
             */
            "type": string & ("Text" | "Binary" & "Text" | "Binary");
          };
          /**
           * Send defines the request payload.
           */
          "send"?: {
            /**
             * Binary payload base64 encoded.
             */
            "binary"?: string;
            /**
             * Text payload in plain text.
             */
            "text"?: string;
            /**
             * Type defines the type of the payload.
             */
            "type": string & ("Text" | "Binary" & "Text" | "Binary");
          };
        };
        /**
         * Timeout defines the time to wait for a health check response.
         */
        "timeout"?: string;
        /**
         * Type defines the type of health checker.
         */
        "type": string & ("HTTP" | "TCP" & "HTTP" | "TCP");
        /**
         * UnhealthyThreshold defines the number of unhealthy health checks required before a backend host is marked unhealthy.
         */
        "unhealthyThreshold"?: number;
      };
      /**
       * Passive passive check configuration
       */
      "passive"?: {
        /**
         * BaseEjectionTime defines the base duration for which a host will be ejected on consecutive failures.
         */
        "baseEjectionTime"?: string;
        /**
         * Consecutive5xxErrors sets the number of consecutive 5xx errors triggering ejection.
         */
        "consecutive5XxErrors"?: number;
        /**
         * ConsecutiveGatewayErrors sets the number of consecutive gateway errors triggering ejection.
         */
        "consecutiveGatewayErrors"?: number;
        /**
         * ConsecutiveLocalOriginFailures sets the number of consecutive local origin failures triggering ejection. Parameter takes effect only when split_external_local_origin_errors is set to true.
         */
        "consecutiveLocalOriginFailures"?: number;
        /**
         * Interval defines the time between passive health checks.
         */
        "interval"?: string;
        /**
         * MaxEjectionPercent sets the maximum percentage of hosts in a cluster that can be ejected.
         */
        "maxEjectionPercent"?: number;
        /**
         * SplitExternalLocalOriginErrors enables splitting of errors between external and local origin.
         */
        "splitExternalLocalOriginErrors"?: boolean;
      };
    };
    /**
     * LoadBalancer policy to apply when routing traffic from the gateway to the backend endpoints
     */
    "loadBalancer"?: {
      /**
       * ConsistentHash defines the configuration when the load balancer type is set to ConsistentHash
       */
      "consistentHash"?: {
        /**
         * ConsistentHashType defines the type of input to hash on.
         */
        "type": "SourceIP";
      };
      /**
       * SlowStart defines the configuration related to the slow start load balancer policy. If set, during slow start window, traffic sent to the newly added hosts will gradually increase. Currently this is only supported for RoundRobin and LeastRequest load balancers
       */
      "slowStart"?: {
        /**
         * Window defines the duration of the warm up period for newly added host. During slow start window, traffic sent to the newly added hosts will gradually increase. Currently only supports linear growth of traffic. For additional details, see https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#config-cluster-v3-cluster-slowstartconfig
         */
        "window": string;
      };
      /**
       * Type decides the type of Load Balancer policy. Valid LoadBalancerType values are "ConsistentHash", "LeastRequest", "Random", "RoundRobin",
       */
      "type": "ConsistentHash" | "LeastRequest" | "Random" | "RoundRobin";
    };
    /**
     * ProxyProtocol enables the Proxy Protocol when communicating with the backend.
     */
    "proxyProtocol"?: {
      /**
       * Version of ProxyProtol Valid ProxyProtocolVersion values are "V1" "V2"
       */
      "version": "V1" | "V2";
    };
    /**
     * RateLimit allows the user to limit the number of incoming requests to a predefined value based on attributes within the traffic flow.
     */
    "rateLimit"?: {
      /**
       * Global defines global rate limit configuration.
       */
      "global"?: {
        /**
         * Rules are a list of RateLimit selectors and limits. Each rule and its associated limit is applied in a mutually exclusive way. If a request matches multiple rules, each of their associated limits get applied, so a single request might increase the rate limit counters for multiple rules if selected. The rate limit service will return a logical OR of the individual rate limit decisions of all matching rules. For example, if a request matches two rules, one rate limited and one not, the final decision will be to rate limit the request.
         */
        "rules": Array<{
          /**
           * ClientSelectors holds the list of select conditions to select specific clients using attributes from the traffic flow. All individual select conditions must hold True for this rule and its limit to be applied. 
           *  If no client selectors are specified, the rule applies to all traffic of the targeted Route. 
           *  If the policy targets a Gateway, the rule applies to each Route of the Gateway. Please note that each Route has its own rate limit counters. For example, if a Gateway has two Routes, and the policy has a rule with limit 10rps, each Route will have its own 10rps limit.
           */
          "clientSelectors"?: Array<{
            /**
             * Headers is a list of request headers to match. Multiple header values are ANDed together, meaning, a request MUST match all the specified headers. At least one of headers or sourceCIDR condition must be specified.
             */
            "headers"?: Array<{
              /**
               * Name of the HTTP header.
               */
              "name": string;
              /**
               * Type specifies how to match against the value of the header.
               */
              "type"?: "Exact" | "RegularExpression" | "Distinct";
              /**
               * Value within the HTTP header. Due to the case-insensitivity of header names, "foo" and "Foo" are considered equivalent. Do not set this field when Type="Distinct", implying matching on any/all unique values within the header.
               */
              "value"?: string;
            }>;
            /**
             * SourceCIDR is the client IP Address range to match on. At least one of headers or sourceCIDR condition must be specified.
             */
            "sourceCIDR"?: {
              "type"?: string;
              /**
               * Value is the IP CIDR that represents the range of Source IP Addresses of the client. These could also be the intermediate addresses through which the request has flown through and is part of the  `X-Forwarded-For` header. For example, `192.168.0.1/32`, `192.168.0.0/24`, `001:db8::/64`.
               */
              "value": string;
            };
          }>;
          /**
           * Limit holds the rate limit values. This limit is applied for traffic flows when the selectors compute to True, causing the request to be counted towards the limit. The limit is enforced and the request is ratelimited, i.e. a response with 429 HTTP status code is sent back to the client when the selected requests have reached the limit.
           */
          "limit": {
            "requests": number;
            /**
             * RateLimitUnit specifies the intervals for setting rate limits. Valid RateLimitUnit values are "Second", "Minute", "Hour", and "Day".
             */
            "unit": "Second" | "Minute" | "Hour" | "Day";
          };
        }>;
      };
      /**
       * Local defines local rate limit configuration.
       */
      "local"?: {
        /**
         * Rules are a list of RateLimit selectors and limits. If a request matches multiple rules, the strictest limit is applied. For example, if a request matches two rules, one with 10rps and one with 20rps, the final limit will be based on the rule with 10rps.
         */
        "rules"?: Array<{
          /**
           * ClientSelectors holds the list of select conditions to select specific clients using attributes from the traffic flow. All individual select conditions must hold True for this rule and its limit to be applied. 
           *  If no client selectors are specified, the rule applies to all traffic of the targeted Route. 
           *  If the policy targets a Gateway, the rule applies to each Route of the Gateway. Please note that each Route has its own rate limit counters. For example, if a Gateway has two Routes, and the policy has a rule with limit 10rps, each Route will have its own 10rps limit.
           */
          "clientSelectors"?: Array<{
            /**
             * Headers is a list of request headers to match. Multiple header values are ANDed together, meaning, a request MUST match all the specified headers. At least one of headers or sourceCIDR condition must be specified.
             */
            "headers"?: Array<{
              /**
               * Name of the HTTP header.
               */
              "name": string;
              /**
               * Type specifies how to match against the value of the header.
               */
              "type"?: "Exact" | "RegularExpression" | "Distinct";
              /**
               * Value within the HTTP header. Due to the case-insensitivity of header names, "foo" and "Foo" are considered equivalent. Do not set this field when Type="Distinct", implying matching on any/all unique values within the header.
               */
              "value"?: string;
            }>;
            /**
             * SourceCIDR is the client IP Address range to match on. At least one of headers or sourceCIDR condition must be specified.
             */
            "sourceCIDR"?: {
              "type"?: string;
              /**
               * Value is the IP CIDR that represents the range of Source IP Addresses of the client. These could also be the intermediate addresses through which the request has flown through and is part of the  `X-Forwarded-For` header. For example, `192.168.0.1/32`, `192.168.0.0/24`, `001:db8::/64`.
               */
              "value": string;
            };
          }>;
          /**
           * Limit holds the rate limit values. This limit is applied for traffic flows when the selectors compute to True, causing the request to be counted towards the limit. The limit is enforced and the request is ratelimited, i.e. a response with 429 HTTP status code is sent back to the client when the selected requests have reached the limit.
           */
          "limit": {
            "requests": number;
            /**
             * RateLimitUnit specifies the intervals for setting rate limits. Valid RateLimitUnit values are "Second", "Minute", "Hour", and "Day".
             */
            "unit": "Second" | "Minute" | "Hour" | "Day";
          };
        }>;
      };
      /**
       * Type decides the scope for the RateLimits. Valid RateLimitType values are "Global" or "Local".
       */
      "type": "Global" | "Local";
    };
    /**
     * Retry provides more advanced usage, allowing users to customize the number of retries, retry fallback strategy, and retry triggering conditions. If not set, retry will be disabled.
     */
    "retry"?: {
      /**
       * NumRetries is the number of retries to be attempted. Defaults to 2.
       */
      "numRetries"?: number;
      /**
       * PerRetry is the retry policy to be applied per retry attempt.
       */
      "perRetry"?: {
        /**
         * Backoff is the backoff policy to be applied per retry attempt. gateway uses a fully jittered exponential back-off algorithm for retries. For additional details, see https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#config-http-filters-router-x-envoy-max-retries
         */
        "backOff"?: {
          /**
           * BaseInterval is the base interval between retries.
           */
          "baseInterval"?: string;
          /**
           * MaxInterval is the maximum interval between retries. This parameter is optional, but must be greater than or equal to the base_interval if set. The default is 10 times the base_interval
           */
          "maxInterval"?: string;
        };
        /**
         * Timeout is the timeout per retry attempt.
         */
        "timeout"?: string;
      };
      /**
       * RetryOn specifies the retry trigger condition. 
       *  If not specified, the default is to retry on connect-failure,refused-stream,unavailable,cancelled,retriable-status-codes(503).
       */
      "retryOn"?: {
        /**
         * HttpStatusCodes specifies the http status codes to be retried. The retriable-status-codes trigger must also be configured for these status codes to trigger a retry.
         */
        "httpStatusCodes"?: Array<number>;
        /**
         * Triggers specifies the retry trigger condition(Http/Grpc).
         */
        "triggers"?: Array<"5xx" | "gateway-error" | "reset" | "connect-failure" | "retriable-4xx" | "refused-stream" | "retriable-status-codes" | "cancelled" | "deadline-exceeded" | "internal" | "resource-exhausted" | "unavailable">;
      };
    };
    /**
     * targetRef is the name of the resource this policy is being attached to. This Policy and the TargetRef MUST be in the same namespace for this Policy to have effect and be applied to the Gateway.
     */
    "targetRef": {
      /**
       * Group is the group of the target resource.
       */
      "group": string;
      /**
       * Kind is kind of the target resource.
       */
      "kind": string;
      /**
       * Name is the name of the target resource.
       */
      "name": string;
      /**
       * Namespace is the namespace of the referent. When unspecified, the local namespace is inferred. Even when policy targets a resource in a different namespace, it MUST only apply to traffic originating from the same namespace as the policy.
       */
      "namespace"?: string;
      /**
       * SectionName is the name of a section within the target resource. When unspecified, this targetRef targets the entire resource. In the following resources, SectionName is interpreted as the following: 
       *  \* Gateway: Listener Name \* Service: Port Name 
       *  If a SectionName is specified, but does not exist on the targeted object, the Policy must fail to attach, and the policy implementation should record a `ResolvedRefs` or similar Condition in the Policy's status.
       */
      "sectionName"?: string;
    };
    /**
     * TcpKeepalive settings associated with the upstream client connection. Disabled by default.
     */
    "tcpKeepalive"?: {
      /**
       * The duration a connection needs to be idle before keep-alive probes start being sent. The duration format is Defaults to `7200s`.
       */
      "idleTime"?: string;
      /**
       * The duration between keep-alive probes. Defaults to `75s`.
       */
      "interval"?: string;
      /**
       * The total number of unacknowledged probes to send before deciding the connection is dead. Defaults to 9.
       */
      "probes"?: number;
    };
    /**
     * Timeout settings for the backend connections.
     */
    "timeout"?: {
      /**
       * Timeout settings for HTTP.
       */
      "http"?: {
        /**
         * The idle timeout for an HTTP connection. Idle time is defined as a period in which there are no active requests in the connection. Default: 1 hour.
         */
        "connectionIdleTimeout"?: string;
        /**
         * The maximum duration of an HTTP connection. Default: unlimited.
         */
        "maxConnectionDuration"?: string;
      };
      /**
       * Timeout settings for TCP.
       */
      "tcp"?: {
        /**
         * The timeout for network connection establishment, including TCP and TLS handshakes. Default: 10 seconds.
         */
        "connectTimeout"?: string;
      };
    };
  };
  /**
   * status defines the current status of BackendTrafficPolicy.
   */
  "status"?: {
    /**
     * Ancestors is a list of ancestor resources (usually Gateways) that are associated with the policy, and the status of the policy with respect to each ancestor. When this policy attaches to a parent, the controller that manages the parent and the ancestors MUST add an entry to this list when the controller first sees the policy and SHOULD update the entry as appropriate when the relevant ancestor is modified. 
     *  Note that choosing the relevant ancestor is left to the Policy designers; an important part of Policy design is designing the right object level at which to namespace this status. 
     *  Note also that implementations MUST ONLY populate ancestor status for the Ancestor resources they are responsible for. Implementations MUST use the ControllerName field to uniquely identify the entries in this list that they are responsible for. 
     *  Note that to achieve this, the list of PolicyAncestorStatus structs MUST be treated as a map with a composite key, made up of the AncestorRef and ControllerName fields combined. 
     *  A maximum of 16 ancestors will be represented in this list. An empty list means the Policy is not relevant for any ancestors. 
     *  If this slice is full, implementations MUST NOT add further entries. Instead they MUST consider the policy unimplementable and signal that on any related resources such as the ancestor that would be referenced here. For example, if this list was full on BackendTLSPolicy, no additional Gateways would be able to reference the Service targeted by the BackendTLSPolicy.
     */
    "ancestors": Array<{
      /**
       * AncestorRef corresponds with a ParentRef in the spec that this PolicyAncestorStatus struct describes the status of.
       */
      "ancestorRef": {
        /**
         * Group is the group of the referent. When unspecified, "gateway.networking.k8s.io" is inferred. To set the core API group (such as for a "Service" kind referent), Group must be explicitly set to "" (empty string). 
         *  Support: Core
         */
        "group"?: string;
        /**
         * Kind is kind of the referent. 
         *  There are two kinds of parent resources with "Core" support: 
         *  \* Gateway (Gateway conformance profile) \* Service (Mesh conformance profile, experimental, ClusterIP Services only) 
         *  Support for other resources is Implementation-Specific.
         */
        "kind"?: string;
        /**
         * Name is the name of the referent. 
         *  Support: Core
         */
        "name": string;
        /**
         * Namespace is the namespace of the referent. When unspecified, this refers to the local namespace of the Route. 
         *  Note that there are specific rules for ParentRefs which cross namespace boundaries. Cross-namespace references are only valid if they are explicitly allowed by something in the namespace they are referring to. For example: Gateway has the AllowedRoutes field, and ReferenceGrant provides a generic way to enable any other kind of cross-namespace reference. 
         *  <gateway:experimental:description> ParentRefs from a Route to a Service in the same namespace are "producer" routes, which apply default routing rules to inbound connections from any namespace to the Service. 
         *  ParentRefs from a Route to a Service in a different namespace are "consumer" routes, and these routing rules are only applied to outbound connections originating from the same namespace as the Route, for which the intended destination of the connections are a Service targeted as a ParentRef of the Route. </gateway:experimental:description> 
         *  Support: Core
         */
        "namespace"?: string;
        /**
         * Port is the network port this Route targets. It can be interpreted differently based on the type of parent resource. 
         *  When the parent resource is a Gateway, this targets all listeners listening on the specified port that also support this kind of Route(and select this Route). It's not recommended to set `Port` unless the networking behaviors specified in a Route must apply to a specific port as opposed to a listener(s) whose port(s) may be changed. When both Port and SectionName are specified, the name and port of the selected listener must match both specified values. 
         *  <gateway:experimental:description> When the parent resource is a Service, this targets a specific port in the Service spec. When both Port (experimental) and SectionName are specified, the name and port of the selected port must match both specified values. </gateway:experimental:description> 
         *  Implementations MAY choose to support other parent resources. Implementations supporting other types of parent resources MUST clearly document how/if Port is interpreted. 
         *  For the purpose of status, an attachment is considered successful as long as the parent resource accepts it partially. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway. 
         *  Support: Extended 
         *  <gateway:experimental>
         */
        "port"?: number;
        /**
         * SectionName is the name of a section within the target resource. In the following resources, SectionName is interpreted as the following: 
         *  \* Gateway: Listener Name. When both Port (experimental) and SectionName are specified, the name and port of the selected listener must match both specified values. \* Service: Port Name. When both Port (experimental) and SectionName are specified, the name and port of the selected listener must match both specified values. Note that attaching Routes to Services as Parents is part of experimental Mesh support and is not supported for any other purpose. 
         *  Implementations MAY choose to support attaching Routes to other resources. If that is the case, they MUST clearly document how SectionName is interpreted. 
         *  When unspecified (empty string), this will reference the entire resource. For the purpose of status, an attachment is considered successful if at least one section in the parent resource accepts it. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway. 
         *  Support: Core
         */
        "sectionName"?: string;
      };
      /**
       * Conditions describes the status of the Policy with respect to the given Ancestor.
       */
      "conditions"?: Array<{
        /**
         * lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
         */
        "lastTransitionTime": string;
        /**
         * message is a human readable message indicating details about the transition. This may be an empty string.
         */
        "message": string;
        /**
         * observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
         */
        "observedGeneration"?: number;
        /**
         * reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
         */
        "reason": string;
        /**
         * status of the condition, one of True, False, Unknown.
         */
        "status": "True" | "False" | "Unknown";
        /**
         * type of condition in CamelCase or in foo.example.com/CamelCase. --- Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be useful (see .node.status.conditions), the ability to deconflict is important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
         */
        "type": string;
      }>;
      /**
       * ControllerName is a domain/path string that indicates the name of the controller that wrote this status. This corresponds with the controllerName field on GatewayClass. 
       *  Example: "example.net/gateway-controller". 
       *  The format of this field is DOMAIN "/" PATH, where DOMAIN and PATH are valid Kubernetes names (https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names). 
       *  Controllers MUST populate this field when writing status. Controllers should ensure that entries to status populated with their ControllerName are cleaned up when they are no longer necessary.
       */
      "controllerName": string;
    }>;
  };
}

/**
 * BackendTrafficPolicy allows the user to configure the behavior of the connection between the Envoy Proxy listener and the backend service.
 */
export class BackendTrafficPolicy extends Model<IBackendTrafficPolicy> implements IBackendTrafficPolicy {
  "apiVersion": IBackendTrafficPolicy["apiVersion"];
  "kind": IBackendTrafficPolicy["kind"];
  "metadata"?: IBackendTrafficPolicy["metadata"];
  "spec": IBackendTrafficPolicy["spec"];
  "status"?: IBackendTrafficPolicy["status"];

static apiVersion: IBackendTrafficPolicy["apiVersion"] = "gateway.envoyproxy.io/v1alpha1";
static kind: IBackendTrafficPolicy["kind"] = "BackendTrafficPolicy";
static is = createTypeMetaGuard<IBackendTrafficPolicy>(BackendTrafficPolicy);

constructor(data?: ModelData<IBackendTrafficPolicy>) {
  super();

  this.setDefinedProps({
    apiVersion: BackendTrafficPolicy.apiVersion,
    kind: BackendTrafficPolicy.kind,
    ...data
  } as IBackendTrafficPolicy);
}
}


setValidateFunc(BackendTrafficPolicy, validate as ValidateFunc<IBackendTrafficPolicy>);
