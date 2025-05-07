import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ProjectcontourIoV1alpha1ContourConfiguration";

/**
 * ContourConfiguration is the schema for a Contour instance.
 */
export interface IContourConfiguration {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "projectcontour.io/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "ContourConfiguration";
  "metadata"?: IObjectMeta;
  /**
   * ContourConfigurationSpec represents a configuration of a Contour controller. It contains most of all the options that can be customized, the other remaining options being command line flags.
   */
  "spec": {
    /**
     * Debug contains parameters to enable debug logging and debug interfaces inside Contour.
     */
    "debug"?: {
      /**
       * Defines the Contour debug address interface. 
       *  Contour's default is "127.0.0.1".
       */
      "address"?: string;
      /**
       * Defines the Contour debug address port. 
       *  Contour's default is 6060.
       */
      "port"?: number;
    };
    /**
     * EnableExternalNameService allows processing of ExternalNameServices 
     *  Contour's default is false for security reasons.
     */
    "enableExternalNameService"?: boolean;
    /**
     * Envoy contains parameters for Envoy as well as how to optionally configure a managed Envoy fleet.
     */
    "envoy"?: {
      /**
       * ClientCertificate defines the namespace/name of the Kubernetes secret containing the client certificate and private key to be used when establishing TLS connection to upstream cluster.
       */
      "clientCertificate"?: {
        "name": string;
        "namespace": string;
      };
      /**
       * Cluster holds various configurable Envoy cluster values that can be set in the config file.
       */
      "cluster"?: {
        /**
         * DNSLookupFamily defines how external names are looked up When configured as V4, the DNS resolver will only perform a lookup for addresses in the IPv4 family. If V6 is configured, the DNS resolver will only perform a lookup for addresses in the IPv6 family. If AUTO is configured, the DNS resolver will first perform a lookup for addresses in the IPv6 family and fallback to a lookup for addresses in the IPv4 family. If ALL is specified, the DNS resolver will perform a lookup for both IPv4 and IPv6 families, and return all resolved addresses. When this is used, Happy Eyeballs will be enabled for upstream connections. Refer to Happy Eyeballs Support for more information. Note: This only applies to externalName clusters. 
         *  See https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto.html#envoy-v3-api-enum-config-cluster-v3-cluster-dnslookupfamily for more information. 
         *  Values: `auto` (default), `v4`, `v6`, `all`. 
         *  Other values will produce an error.
         */
        "dnsLookupFamily"?: string;
      };
      /**
       * DefaultHTTPVersions defines the default set of HTTPS versions the proxy should accept. HTTP versions are strings of the form "HTTP/xx". Supported versions are "HTTP/1.1" and "HTTP/2". 
       *  Values: `HTTP/1.1`, `HTTP/2` (default: both). 
       *  Other values will produce an error.
       */
      "defaultHTTPVersions"?: Array<string>;
      /**
       * Health defines the endpoint Envoy uses to serve health checks. 
       *  Contour's default is { address: "0.0.0.0", port: 8002 }.
       */
      "health"?: {
        /**
         * Defines the health address interface.
         */
        "address"?: string;
        /**
         * Defines the health port.
         */
        "port"?: number;
      };
      /**
       * Defines the HTTP Listener for Envoy. 
       *  Contour's default is { address: "0.0.0.0", port: 8080, accessLog: "/dev/stdout" }.
       */
      "http"?: {
        /**
         * AccessLog defines where Envoy logs are outputted for this listener.
         */
        "accessLog"?: string;
        /**
         * Defines an Envoy Listener Address.
         */
        "address"?: string;
        /**
         * Defines an Envoy listener Port.
         */
        "port"?: number;
      };
      /**
       * Defines the HTTPS Listener for Envoy. 
       *  Contour's default is { address: "0.0.0.0", port: 8443, accessLog: "/dev/stdout" }.
       */
      "https"?: {
        /**
         * AccessLog defines where Envoy logs are outputted for this listener.
         */
        "accessLog"?: string;
        /**
         * Defines an Envoy Listener Address.
         */
        "address"?: string;
        /**
         * Defines an Envoy listener Port.
         */
        "port"?: number;
      };
      /**
       * Listener hold various configurable Envoy listener values.
       */
      "listener"?: {
        /**
         * ConnectionBalancer. If the value is exact, the listener will use the exact connection balancer See https://www.envoyproxy.io/docs/envoy/latest/api-v2/api/v2/listener.proto#envoy-api-msg-listener-connectionbalanceconfig for more information. 
         *  Values: (empty string): use the default ConnectionBalancer, `exact`: use the Exact ConnectionBalancer. 
         *  Other values will produce an error.
         */
        "connectionBalancer"?: string;
        /**
         * DisableAllowChunkedLength disables the RFC-compliant Envoy behavior to strip the "Content-Length" header if "Transfer-Encoding: chunked" is also set. This is an emergency off-switch to revert back to Envoy's default behavior in case of failures. Please file an issue if failures are encountered. See: https://github.com/projectcontour/contour/issues/3221 
         *  Contour's default is false.
         */
        "disableAllowChunkedLength"?: boolean;
        /**
         * DisableMergeSlashes disables Envoy's non-standard merge_slashes path transformation option which strips duplicate slashes from request URL paths. 
         *  Contour's default is false.
         */
        "disableMergeSlashes"?: boolean;
        /**
         * Defines the action to be applied to the Server header on the response path. When configured as overwrite, overwrites any Server header with "envoy". When configured as append_if_absent, if a Server header is present, pass it through, otherwise set it to "envoy". When configured as pass_through, pass through the value of the Server header, and do not append a header if none is present. 
         *  Values: `overwrite` (default), `append_if_absent`, `pass_through` 
         *  Other values will produce an error. Contour's default is overwrite.
         */
        "serverHeaderTransformation"?: string;
        /**
         * TLS holds various configurable Envoy TLS listener values.
         */
        "tls"?: {
          /**
           * CipherSuites defines the TLS ciphers to be supported by Envoy TLS listeners when negotiating TLS 1.2. Ciphers are validated against the set that Envoy supports by default. This parameter should only be used by advanced users. Note that these will be ignored when TLS 1.3 is in use. 
           *  This field is optional; when it is undefined, a Contour-managed ciphersuite list will be used, which may be updated to keep it secure. 
           *  Contour's default list is: - "[ECDHE-ECDSA-AES128-GCM-SHA256|ECDHE-ECDSA-CHACHA20-POLY1305]" - "[ECDHE-RSA-AES128-GCM-SHA256|ECDHE-RSA-CHACHA20-POLY1305]" - "ECDHE-ECDSA-AES256-GCM-SHA384" - "ECDHE-RSA-AES256-GCM-SHA384" 
           *  Ciphers provided are validated against the following list: - "[ECDHE-ECDSA-AES128-GCM-SHA256|ECDHE-ECDSA-CHACHA20-POLY1305]" - "[ECDHE-RSA-AES128-GCM-SHA256|ECDHE-RSA-CHACHA20-POLY1305]" - "ECDHE-ECDSA-AES128-GCM-SHA256" - "ECDHE-RSA-AES128-GCM-SHA256" - "ECDHE-ECDSA-AES128-SHA" - "ECDHE-RSA-AES128-SHA" - "AES128-GCM-SHA256" - "AES128-SHA" - "ECDHE-ECDSA-AES256-GCM-SHA384" - "ECDHE-RSA-AES256-GCM-SHA384" - "ECDHE-ECDSA-AES256-SHA" - "ECDHE-RSA-AES256-SHA" - "AES256-GCM-SHA384" - "AES256-SHA" 
           *  Contour recommends leaving this undefined unless you are sure you must. 
           *  See: https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/transport_sockets/tls/v3/common.proto#extensions-transport-sockets-tls-v3-tlsparameters Note: This list is a superset of what is valid for stock Envoy builds and those using BoringSSL FIPS.
           */
          "cipherSuites"?: Array<string>;
          /**
           * MinimumProtocolVersion is the minimum TLS version this vhost should negotiate. 
           *  Values: `1.2` (default), `1.3`. 
           *  Other values will produce an error.
           */
          "minimumProtocolVersion"?: string;
        };
        /**
         * Use PROXY protocol for all listeners. 
         *  Contour's default is false.
         */
        "useProxyProtocol"?: boolean;
      };
      /**
       * Logging defines how Envoy's logs can be configured.
       */
      "logging"?: {
        /**
         * AccessLogFormat sets the global access log format. 
         *  Values: `envoy` (default), `json`. 
         *  Other values will produce an error.
         */
        "accessLogFormat"?: string;
        /**
         * AccessLogFormatString sets the access log format when format is set to `envoy`. When empty, Envoy's default format is used.
         */
        "accessLogFormatString"?: string;
        /**
         * AccessLogJSONFields sets the fields that JSON logging will output when AccessLogFormat is json.
         */
        "accessLogJSONFields"?: Array<string>;
        /**
         * AccessLogLevel sets the verbosity level of the access log. 
         *  Values: `info` (default, meaning all requests are logged), `error` and `disabled`. 
         *  Other values will produce an error.
         */
        "accessLogLevel"?: string;
      };
      /**
       * Metrics defines the endpoint Envoy uses to serve metrics. 
       *  Contour's default is { address: "0.0.0.0", port: 8002 }.
       */
      "metrics"?: {
        /**
         * Defines the metrics address interface.
         */
        "address"?: string;
        /**
         * Defines the metrics port.
         */
        "port"?: number;
        /**
         * TLS holds TLS file config details. Metrics and health endpoints cannot have same port number when metrics is served over HTTPS.
         */
        "tls"?: {
          /**
           * CA filename.
           */
          "caFile"?: string;
          /**
           * Client certificate filename.
           */
          "certFile"?: string;
          /**
           * Client key filename.
           */
          "keyFile"?: string;
        };
      };
      /**
       * Network holds various configurable Envoy network values.
       */
      "network"?: {
        /**
         * Configure the port used to access the Envoy Admin interface. If configured to port "0" then the admin interface is disabled. 
         *  Contour's default is 9001.
         */
        "adminPort"?: number;
        /**
         * XffNumTrustedHops defines the number of additional ingress proxy hops from the right side of the x-forwarded-for HTTP header to trust when determining the origin client’s IP address. 
         *  See https://www.envoyproxy.io/docs/envoy/v1.17.0/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto?highlight=xff_num_trusted_hops for more information. 
         *  Contour's default is 0.
         */
        "numTrustedHops"?: number;
      };
      /**
       * Service holds Envoy service parameters for setting Ingress status. 
       *  Contour's default is { namespace: "projectcontour", name: "envoy" }.
       */
      "service"?: {
        "name": string;
        "namespace": string;
      };
      /**
       * Timeouts holds various configurable timeouts that can be set in the config file.
       */
      "timeouts"?: {
        /**
         * ConnectTimeout defines how long the proxy should wait when establishing connection to upstream service. If not set, a default value of 2 seconds will be used. 
         *  See https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-field-config-cluster-v3-cluster-connect-timeout for more information.
         */
        "connectTimeout"?: string;
        /**
         * ConnectionIdleTimeout defines how long the proxy should wait while there are no active requests (for HTTP/1.1) or streams (for HTTP/2) before terminating an HTTP connection. Set to "infinity" to disable the timeout entirely. 
         *  See https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/protocol.proto#envoy-v3-api-field-config-core-v3-httpprotocoloptions-idle-timeout for more information.
         */
        "connectionIdleTimeout"?: string;
        /**
         * ConnectionShutdownGracePeriod defines how long the proxy will wait between sending an initial GOAWAY frame and a second, final GOAWAY frame when terminating an HTTP/2 connection. During this grace period, the proxy will continue to respond to new streams. After the final GOAWAY frame has been sent, the proxy will refuse new streams. 
         *  See https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-field-extensions-filters-network-http-connection-manager-v3-httpconnectionmanager-drain-timeout for more information.
         */
        "connectionShutdownGracePeriod"?: string;
        /**
         * DelayedCloseTimeout defines how long envoy will wait, once connection close processing has been initiated, for the downstream peer to close the connection before Envoy closes the socket associated with the connection. 
         *  Setting this timeout to 'infinity' will disable it, equivalent to setting it to '0' in Envoy. Leaving it unset will result in the Envoy default value being used. 
         *  See https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-field-extensions-filters-network-http-connection-manager-v3-httpconnectionmanager-delayed-close-timeout for more information.
         */
        "delayedCloseTimeout"?: string;
        /**
         * MaxConnectionDuration defines the maximum period of time after an HTTP connection has been established from the client to the proxy before it is closed by the proxy, regardless of whether there has been activity or not. Omit or set to "infinity" for no max duration. 
         *  See https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/protocol.proto#envoy-v3-api-field-config-core-v3-httpprotocoloptions-max-connection-duration for more information.
         */
        "maxConnectionDuration"?: string;
        /**
         * RequestTimeout sets the client request timeout globally for Contour. Note that this is a timeout for the entire request, not an idle timeout. Omit or set to "infinity" to disable the timeout entirely. 
         *  See https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-field-extensions-filters-network-http-connection-manager-v3-httpconnectionmanager-request-timeout for more information.
         */
        "requestTimeout"?: string;
        /**
         * StreamIdleTimeout defines how long the proxy should wait while there is no request activity (for HTTP/1.1) or stream activity (for HTTP/2) before terminating the HTTP request or stream. Set to "infinity" to disable the timeout entirely. 
         *  See https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-field-extensions-filters-network-http-connection-manager-v3-httpconnectionmanager-stream-idle-timeout for more information.
         */
        "streamIdleTimeout"?: string;
      };
    };
    /**
     * Gateway contains parameters for the gateway-api Gateway that Contour is configured to serve traffic.
     */
    "gateway"?: {
      /**
       * ControllerName is used to determine whether Contour should reconcile a GatewayClass. The string takes the form of "projectcontour.io/<namespace>/contour". If unset, the gatewayclass controller will not be started. Exactly one of ControllerName or GatewayRef must be set.
       */
      "controllerName"?: string;
      /**
       * GatewayRef defines a specific Gateway that this Contour instance corresponds to. If set, Contour will reconcile only this gateway, and will not reconcile any gateway classes. Exactly one of ControllerName or GatewayRef must be set.
       */
      "gatewayRef"?: {
        "name": string;
        "namespace": string;
      };
    };
    /**
     * GlobalExternalAuthorization allows envoys external authorization filter to be enabled for all virtual hosts.
     */
    "globalExtAuth"?: {
      /**
       * AuthPolicy sets a default authorization policy for client requests. This policy will be used unless overridden by individual routes.
       */
      "authPolicy"?: {
        /**
         * Context is a set of key/value pairs that are sent to the authentication server in the check request. If a context is provided at an enclosing scope, the entries are merged such that the inner scope overrides matching keys from the outer scope.
         */
        "context"?: {
          [key: string]: string;
        };
        /**
         * When true, this field disables client request authentication for the scope of the policy.
         */
        "disabled"?: boolean;
      };
      /**
       * ExtensionServiceRef specifies the extension resource that will authorize client requests.
       */
      "extensionRef"?: {
        /**
         * API version of the referent. If this field is not specified, the default "projectcontour.io/v1alpha1" will be used
         */
        "apiVersion"?: string;
        /**
         * Name of the referent. 
         *  More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Namespace of the referent. If this field is not specifies, the namespace of the resource that targets the referent will be used. 
         *  More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace"?: string;
      };
      /**
       * If FailOpen is true, the client request is forwarded to the upstream service even if the authorization server fails to respond. This field should not be set in most cases. It is intended for use only while migrating applications from internal authorization to Contour external authorization.
       */
      "failOpen"?: boolean;
      /**
       * ResponseTimeout configures maximum time to wait for a check response from the authorization server. Timeout durations are expressed in the Go [Duration format](https://godoc.org/time#ParseDuration). Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h". The string "infinity" is also a valid input and specifies no timeout.
       */
      "responseTimeout"?: string;
      /**
       * WithRequestBody specifies configuration for sending the client request's body to authorization server.
       */
      "withRequestBody"?: {
        /**
         * If AllowPartialMessage is true, then Envoy will buffer the body until MaxRequestBytes are reached.
         */
        "allowPartialMessage"?: boolean;
        /**
         * MaxRequestBytes sets the maximum size of message body ExtAuthz filter will hold in-memory.
         */
        "maxRequestBytes"?: number;
        /**
         * If PackAsBytes is true, the body sent to Authorization Server is in raw bytes.
         */
        "packAsBytes"?: boolean;
      };
    };
    /**
     * Health defines the endpoints Contour uses to serve health checks. 
     *  Contour's default is { address: "0.0.0.0", port: 8000 }.
     */
    "health"?: {
      /**
       * Defines the health address interface.
       */
      "address"?: string;
      /**
       * Defines the health port.
       */
      "port"?: number;
    };
    /**
     * HTTPProxy defines parameters on HTTPProxy.
     */
    "httpproxy"?: {
      /**
       * DisablePermitInsecure disables the use of the permitInsecure field in HTTPProxy. 
       *  Contour's default is false.
       */
      "disablePermitInsecure"?: boolean;
      /**
       * FallbackCertificate defines the namespace/name of the Kubernetes secret to use as fallback when a non-SNI request is received.
       */
      "fallbackCertificate"?: {
        "name": string;
        "namespace": string;
      };
      /**
       * Restrict Contour to searching these namespaces for root ingress routes.
       */
      "rootNamespaces"?: Array<string>;
    };
    /**
     * Ingress contains parameters for ingress options.
     */
    "ingress"?: {
      /**
       * Ingress Class Names Contour should use.
       */
      "classNames"?: Array<string>;
      /**
       * Address to set in Ingress object status.
       */
      "statusAddress"?: string;
    };
    /**
     * Metrics defines the endpoint Contour uses to serve metrics. 
     *  Contour's default is { address: "0.0.0.0", port: 8000 }.
     */
    "metrics"?: {
      /**
       * Defines the metrics address interface.
       */
      "address"?: string;
      /**
       * Defines the metrics port.
       */
      "port"?: number;
      /**
       * TLS holds TLS file config details. Metrics and health endpoints cannot have same port number when metrics is served over HTTPS.
       */
      "tls"?: {
        /**
         * CA filename.
         */
        "caFile"?: string;
        /**
         * Client certificate filename.
         */
        "certFile"?: string;
        /**
         * Client key filename.
         */
        "keyFile"?: string;
      };
    };
    /**
     * Policy specifies default policy applied if not overridden by the user
     */
    "policy"?: {
      /**
       * ApplyToIngress determines if the Policies will apply to ingress objects 
       *  Contour's default is false.
       */
      "applyToIngress"?: boolean;
      /**
       * RequestHeadersPolicy defines the request headers set/removed on all routes
       */
      "requestHeaders"?: {
        "remove"?: Array<string>;
        "set"?: {
          [key: string]: string;
        };
      };
      /**
       * ResponseHeadersPolicy defines the response headers set/removed on all routes
       */
      "responseHeaders"?: {
        "remove"?: Array<string>;
        "set"?: {
          [key: string]: string;
        };
      };
    };
    /**
     * RateLimitService optionally holds properties of the Rate Limit Service to be used for global rate limiting.
     */
    "rateLimitService"?: {
      /**
       * Domain is passed to the Rate Limit Service.
       */
      "domain"?: string;
      /**
       * EnableResourceExhaustedCode enables translating error code 429 to grpc code RESOURCE_EXHAUSTED. When disabled it's translated to UNAVAILABLE
       */
      "enableResourceExhaustedCode"?: boolean;
      /**
       * EnableXRateLimitHeaders defines whether to include the X-RateLimit headers X-RateLimit-Limit, X-RateLimit-Remaining, and X-RateLimit-Reset (as defined by the IETF Internet-Draft linked below), on responses to clients when the Rate Limit Service is consulted for a request. 
       *  ref. https://tools.ietf.org/id/draft-polli-ratelimit-headers-03.html
       */
      "enableXRateLimitHeaders"?: boolean;
      /**
       * ExtensionService identifies the extension service defining the RLS.
       */
      "extensionService": {
        "name": string;
        "namespace": string;
      };
      /**
       * FailOpen defines whether to allow requests to proceed when the Rate Limit Service fails to respond with a valid rate limit decision within the timeout defined on the extension service.
       */
      "failOpen"?: boolean;
    };
    /**
     * Tracing defines properties for exporting trace data to OpenTelemetry.
     */
    "tracing"?: {
      /**
       * CustomTags defines a list of custom tags with unique tag name.
       */
      "customTags"?: Array<{
        /**
         * Literal is a static custom tag value. Precisely one of Literal, RequestHeaderName must be set.
         */
        "literal"?: string;
        /**
         * RequestHeaderName indicates which request header the label value is obtained from. Precisely one of Literal, RequestHeaderName must be set.
         */
        "requestHeaderName"?: string;
        /**
         * TagName is the unique name of the custom tag.
         */
        "tagName": string;
      }>;
      /**
       * ExtensionService identifies the extension service defining the otel-collector.
       */
      "extensionService": {
        "name": string;
        "namespace": string;
      };
      /**
       * IncludePodDetail defines a flag. If it is true, contour will add the pod name and namespace to the span of the trace. the default is true. Note: The Envoy pods MUST have the HOSTNAME and CONTOUR_NAMESPACE environment variables set for this to work properly.
       */
      "includePodDetail"?: boolean;
      /**
       * MaxPathTagLength defines maximum length of the request path to extract and include in the HttpUrl tag. contour's default is 256.
       */
      "maxPathTagLength"?: number;
      /**
       * OverallSampling defines the sampling rate of trace data. contour's default is 100.
       */
      "overallSampling"?: string;
      /**
       * ServiceName defines the name for the service. contour's default is contour.
       */
      "serviceName"?: string;
    };
    /**
     * XDSServer contains parameters for the xDS server.
     */
    "xdsServer"?: {
      /**
       * Defines the xDS gRPC API address which Contour will serve. 
       *  Contour's default is "0.0.0.0".
       */
      "address"?: string;
      /**
       * Defines the xDS gRPC API port which Contour will serve. 
       *  Contour's default is 8001.
       */
      "port"?: number;
      /**
       * TLS holds TLS file config details. 
       *  Contour's default is { caFile: "/certs/ca.crt", certFile: "/certs/tls.cert", keyFile: "/certs/tls.key", insecure: false }.
       */
      "tls"?: {
        /**
         * CA filename.
         */
        "caFile"?: string;
        /**
         * Client certificate filename.
         */
        "certFile"?: string;
        /**
         * Allow serving the xDS gRPC API without TLS.
         */
        "insecure"?: boolean;
        /**
         * Client key filename.
         */
        "keyFile"?: string;
      };
      /**
       * Defines the XDSServer to use for `contour serve`. 
       *  Values: `contour` (default), `envoy`. 
       *  Other values will produce an error.
       */
      "type"?: string;
    };
  };
  /**
   * ContourConfigurationStatus defines the observed state of a ContourConfiguration resource.
   */
  "status"?: {
    /**
     * Conditions contains the current status of the Contour resource. 
     *  Contour will update a single condition, `Valid`, that is in normal-true polarity. 
     *  Contour will not modify any other Conditions set in this block, in case some other controller wants to add a Condition.
     */
    "conditions"?: Array<{
      /**
       * Errors contains a slice of relevant error subconditions for this object. 
       *  Subconditions are expected to appear when relevant (when there is a error), and disappear when not relevant. An empty slice here indicates no errors.
       */
      "errors"?: Array<{
        /**
         * Message is a human readable message indicating details about the transition. 
         *  This may be an empty string.
         */
        "message": string;
        /**
         * Reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. 
         *  The value should be a CamelCase string. 
         *  This field may not be empty.
         */
        "reason": string;
        /**
         * Status of the condition, one of True, False, Unknown.
         */
        "status": "True" | "False" | "Unknown";
        /**
         * Type of condition in `CamelCase` or in `foo.example.com/CamelCase`. 
         *  This must be in abnormal-true polarity, that is, `ErrorFound` or `controller.io/ErrorFound`. 
         *  The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
         */
        "type": string;
      }>;
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
      /**
       * Warnings contains a slice of relevant warning subconditions for this object. 
       *  Subconditions are expected to appear when relevant (when there is a warning), and disappear when not relevant. An empty slice here indicates no warnings.
       */
      "warnings"?: Array<{
        /**
         * Message is a human readable message indicating details about the transition. 
         *  This may be an empty string.
         */
        "message": string;
        /**
         * Reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. 
         *  The value should be a CamelCase string. 
         *  This field may not be empty.
         */
        "reason": string;
        /**
         * Status of the condition, one of True, False, Unknown.
         */
        "status": "True" | "False" | "Unknown";
        /**
         * Type of condition in `CamelCase` or in `foo.example.com/CamelCase`. 
         *  This must be in abnormal-true polarity, that is, `ErrorFound` or `controller.io/ErrorFound`. 
         *  The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
         */
        "type": string;
      }>;
    }>;
  };
}

/**
 * ContourConfiguration is the schema for a Contour instance.
 */
export class ContourConfiguration extends Model<IContourConfiguration> implements IContourConfiguration {
  "apiVersion": IContourConfiguration["apiVersion"];
  "kind": IContourConfiguration["kind"];
  "metadata"?: IContourConfiguration["metadata"];
  "spec": IContourConfiguration["spec"];
  "status"?: IContourConfiguration["status"];

static apiVersion: IContourConfiguration["apiVersion"] = "projectcontour.io/v1alpha1";
static kind: IContourConfiguration["kind"] = "ContourConfiguration";
static is = createTypeMetaGuard<IContourConfiguration>(ContourConfiguration);

constructor(data?: ModelData<IContourConfiguration>) {
  super();

  this.setDefinedProps({
    apiVersion: ContourConfiguration.apiVersion,
    kind: ContourConfiguration.kind,
    ...data
  } as IContourConfiguration);
}
}


setValidateFunc(ContourConfiguration, validate as ValidateFunc<IContourConfiguration>);
