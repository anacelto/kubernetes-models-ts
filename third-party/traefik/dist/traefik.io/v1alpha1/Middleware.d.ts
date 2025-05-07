import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * Middleware is the CRD implementation of a Traefik Middleware. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/overview/
 */
export interface IMiddleware {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "traefik.io/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "Middleware";
    "metadata": IObjectMeta;
    /**
     * MiddlewareSpec defines the desired state of a Middleware.
     */
    "spec": {
        /**
         * AddPrefix holds the add prefix middleware configuration. This middleware updates the path of a request before forwarding it. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/addprefix/
         */
        "addPrefix"?: {
            /**
             * Prefix is the string to add before the current path in the requested URL. It should include a leading slash (/).
             */
            "prefix"?: string;
        };
        /**
         * BasicAuth holds the basic auth middleware configuration. This middleware restricts access to your services to known users. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/basicauth/
         */
        "basicAuth"?: {
            /**
             * HeaderField defines a header field to store the authenticated user. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/basicauth/#headerfield
             */
            "headerField"?: string;
            /**
             * Realm allows the protected resources on a server to be partitioned into a set of protection spaces, each with its own authentication scheme. Default: traefik.
             */
            "realm"?: string;
            /**
             * RemoveHeader sets the removeHeader option to true to remove the authorization header before forwarding the request to your service. Default: false.
             */
            "removeHeader"?: boolean;
            /**
             * Secret is the name of the referenced Kubernetes Secret containing user credentials.
             */
            "secret"?: string;
        };
        /**
         * Buffering holds the buffering middleware configuration. This middleware retries or limits the size of requests that can be forwarded to backends. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/buffering/#maxrequestbodybytes
         */
        "buffering"?: {
            /**
             * MaxRequestBodyBytes defines the maximum allowed body size for the request (in bytes). If the request exceeds the allowed size, it is not forwarded to the service, and the client gets a 413 (Request Entity Too Large) response. Default: 0 (no maximum).
             */
            "maxRequestBodyBytes"?: number;
            /**
             * MaxResponseBodyBytes defines the maximum allowed response size from the service (in bytes). If the response exceeds the allowed size, it is not forwarded to the client. The client gets a 500 (Internal Server Error) response instead. Default: 0 (no maximum).
             */
            "maxResponseBodyBytes"?: number;
            /**
             * MemRequestBodyBytes defines the threshold (in bytes) from which the request will be buffered on disk instead of in memory. Default: 1048576 (1Mi).
             */
            "memRequestBodyBytes"?: number;
            /**
             * MemResponseBodyBytes defines the threshold (in bytes) from which the response will be buffered on disk instead of in memory. Default: 1048576 (1Mi).
             */
            "memResponseBodyBytes"?: number;
            /**
             * RetryExpression defines the retry conditions. It is a logical combination of functions with operators AND (&&) and OR (||). More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/buffering/#retryexpression
             */
            "retryExpression"?: string;
        };
        /**
         * Chain holds the configuration of the chain middleware. This middleware enables to define reusable combinations of other pieces of middleware. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/chain/
         */
        "chain"?: {
            /**
             * Middlewares is the list of MiddlewareRef which composes the chain.
             */
            "middlewares"?: Array<{
                /**
                 * Name defines the name of the referenced Middleware resource.
                 */
                "name": string;
                /**
                 * Namespace defines the namespace of the referenced Middleware resource.
                 */
                "namespace"?: string;
            }>;
        };
        /**
         * CircuitBreaker holds the circuit breaker configuration.
         */
        "circuitBreaker"?: {
            /**
             * CheckPeriod is the interval between successive checks of the circuit breaker condition (when in standby state).
             */
            "checkPeriod"?: number | string;
            /**
             * Expression is the condition that triggers the tripped state.
             */
            "expression"?: string;
            /**
             * FallbackDuration is the duration for which the circuit breaker will wait before trying to recover (from a tripped state).
             */
            "fallbackDuration"?: number | string;
            /**
             * RecoveryDuration is the duration for which the circuit breaker will try to recover (as soon as it is in recovering state).
             */
            "recoveryDuration"?: number | string;
        };
        /**
         * Compress holds the compress middleware configuration. This middleware compresses responses before sending them to the client, using gzip compression. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/compress/
         */
        "compress"?: {
            /**
             * ExcludedContentTypes defines the list of content types to compare the Content-Type header of the incoming requests and responses before compressing.
             */
            "excludedContentTypes"?: Array<string>;
            /**
             * MinResponseBodyBytes defines the minimum amount of bytes a response body must have to be compressed. Default: 1024.
             */
            "minResponseBodyBytes"?: number;
        };
        /**
         * ContentType holds the content-type middleware configuration. This middleware exists to enable the correct behavior until at least the default one can be changed in a future version.
         */
        "contentType"?: {
            /**
             * AutoDetect specifies whether to let the `Content-Type` header, if it has not been set by the backend, be automatically set to a value derived from the contents of the response. As a proxy, the default behavior should be to leave the header alone, regardless of what the backend did with it. However, the historic default was to always auto-detect and set the header if it was nil, and it is going to be kept that way in order to support users currently relying on it.
             */
            "autoDetect"?: boolean;
        };
        /**
         * DigestAuth holds the digest auth middleware configuration. This middleware restricts access to your services to known users. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/digestauth/
         */
        "digestAuth"?: {
            /**
             * HeaderField defines a header field to store the authenticated user. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/basicauth/#headerfield
             */
            "headerField"?: string;
            /**
             * Realm allows the protected resources on a server to be partitioned into a set of protection spaces, each with its own authentication scheme. Default: traefik.
             */
            "realm"?: string;
            /**
             * RemoveHeader defines whether to remove the authorization header before forwarding the request to the backend.
             */
            "removeHeader"?: boolean;
            /**
             * Secret is the name of the referenced Kubernetes Secret containing user credentials.
             */
            "secret"?: string;
        };
        /**
         * ErrorPage holds the custom error middleware configuration. This middleware returns a custom page in lieu of the default, according to configured ranges of HTTP Status codes. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/errorpages/
         */
        "errors"?: {
            /**
             * Query defines the URL for the error page (hosted by service). The {status} variable can be used in order to insert the status code in the URL.
             */
            "query"?: string;
            /**
             * Service defines the reference to a Kubernetes Service that will serve the error page. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/errorpages/#service
             */
            "service"?: {
                /**
                 * Kind defines the kind of the Service.
                 */
                "kind"?: "Service" | "TraefikService";
                /**
                 * Name defines the name of the referenced Kubernetes Service or TraefikService. The differentiation between the two is specified in the Kind field.
                 */
                "name": string;
                /**
                 * Namespace defines the namespace of the referenced Kubernetes Service or TraefikService.
                 */
                "namespace"?: string;
                /**
                 * NativeLB controls, when creating the load-balancer, whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP. The Kubernetes Service itself does load-balance to the pods. By default, NativeLB is false.
                 */
                "nativeLB"?: boolean;
                /**
                 * PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service. By default, passHostHeader is true.
                 */
                "passHostHeader"?: boolean;
                /**
                 * Port defines the port of a Kubernetes Service. This can be a reference to a named port.
                 */
                "port"?: number | string;
                /**
                 * ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.
                 */
                "responseForwarding"?: {
                    /**
                     * FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body. A negative value means to flush immediately after each write to the client. This configuration is ignored when ReverseProxy recognizes a response as a streaming response; for such responses, writes are flushed to the client immediately. Default: 100ms
                     */
                    "flushInterval"?: string;
                };
                /**
                 * Scheme defines the scheme to use for the request to the upstream Kubernetes Service. It defaults to https when Kubernetes Service port is 443, http otherwise.
                 */
                "scheme"?: string;
                /**
                 * ServersTransport defines the name of ServersTransport resource to use. It allows to configure the transport between Traefik and your servers. Can only be used on a Kubernetes Service.
                 */
                "serversTransport"?: string;
                /**
                 * Sticky defines the sticky sessions configuration. More info: https://doc.traefik.io/traefik/v2.10/routing/services/#sticky-sessions
                 */
                "sticky"?: {
                    /**
                     * Cookie defines the sticky cookie configuration.
                     */
                    "cookie"?: {
                        /**
                         * HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.
                         */
                        "httpOnly"?: boolean;
                        /**
                         * Name defines the Cookie name.
                         */
                        "name"?: string;
                        /**
                         * SameSite defines the same site policy. More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
                         */
                        "sameSite"?: string;
                        /**
                         * Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).
                         */
                        "secure"?: boolean;
                    };
                };
                /**
                 * Strategy defines the load balancing strategy between the servers. RoundRobin is the only supported value at the moment.
                 */
                "strategy"?: string;
                /**
                 * Weight defines the weight and should only be specified when Name references a TraefikService object (and to be precise, one that embeds a Weighted Round Robin).
                 */
                "weight"?: number;
            };
            /**
             * Status defines which status or range of statuses should result in an error page. It can be either a status code as a number (500), as multiple comma-separated numbers (500,502), as ranges by separating two codes with a dash (500-599), or a combination of the two (404,418,500-599).
             */
            "status"?: Array<string>;
        };
        /**
         * ForwardAuth holds the forward auth middleware configuration. This middleware delegates the request authentication to a Service. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/forwardauth/
         */
        "forwardAuth"?: {
            /**
             * Address defines the authentication server address.
             */
            "address"?: string;
            /**
             * AuthRequestHeaders defines the list of the headers to copy from the request to the authentication server. If not set or empty then all request headers are passed.
             */
            "authRequestHeaders"?: Array<string>;
            /**
             * AuthResponseHeaders defines the list of headers to copy from the authentication server response and set on forwarded request, replacing any existing conflicting headers.
             */
            "authResponseHeaders"?: Array<string>;
            /**
             * AuthResponseHeadersRegex defines the regex to match headers to copy from the authentication server response and set on forwarded request, after stripping all headers that match the regex. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/forwardauth/#authresponseheadersregex
             */
            "authResponseHeadersRegex"?: string;
            /**
             * TLS defines the configuration used to secure the connection to the authentication server.
             */
            "tls"?: {
                "caOptional"?: boolean;
                /**
                 * CASecret is the name of the referenced Kubernetes Secret containing the CA to validate the server certificate. The CA certificate is extracted from key `tls.ca` or `ca.crt`.
                 */
                "caSecret"?: string;
                /**
                 * CertSecret is the name of the referenced Kubernetes Secret containing the client certificate. The client certificate is extracted from the keys `tls.crt` and `tls.key`.
                 */
                "certSecret"?: string;
                /**
                 * InsecureSkipVerify defines whether the server certificates should be validated.
                 */
                "insecureSkipVerify"?: boolean;
            };
            /**
             * TrustForwardHeader defines whether to trust (ie: forward) all X-Forwarded-\* headers.
             */
            "trustForwardHeader"?: boolean;
        };
        /**
         * Headers holds the headers middleware configuration. This middleware manages the requests and responses headers. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/headers/#customrequestheaders
         */
        "headers"?: {
            /**
             * AccessControlAllowCredentials defines whether the request can include user credentials.
             */
            "accessControlAllowCredentials"?: boolean;
            /**
             * AccessControlAllowHeaders defines the Access-Control-Request-Headers values sent in preflight response.
             */
            "accessControlAllowHeaders"?: Array<string>;
            /**
             * AccessControlAllowMethods defines the Access-Control-Request-Method values sent in preflight response.
             */
            "accessControlAllowMethods"?: Array<string>;
            /**
             * AccessControlAllowOriginList is a list of allowable origins. Can also be a wildcard origin "\*".
             */
            "accessControlAllowOriginList"?: Array<string>;
            /**
             * AccessControlAllowOriginListRegex is a list of allowable origins written following the Regular Expression syntax (https://golang.org/pkg/regexp/).
             */
            "accessControlAllowOriginListRegex"?: Array<string>;
            /**
             * AccessControlExposeHeaders defines the Access-Control-Expose-Headers values sent in preflight response.
             */
            "accessControlExposeHeaders"?: Array<string>;
            /**
             * AccessControlMaxAge defines the time that a preflight request may be cached.
             */
            "accessControlMaxAge"?: number;
            /**
             * AddVaryHeader defines whether the Vary header is automatically added/updated when the AccessControlAllowOriginList is set.
             */
            "addVaryHeader"?: boolean;
            /**
             * AllowedHosts defines the fully qualified list of allowed domain names.
             */
            "allowedHosts"?: Array<string>;
            /**
             * BrowserXSSFilter defines whether to add the X-XSS-Protection header with the value 1; mode=block.
             */
            "browserXssFilter"?: boolean;
            /**
             * ContentSecurityPolicy defines the Content-Security-Policy header value.
             */
            "contentSecurityPolicy"?: string;
            /**
             * ContentTypeNosniff defines whether to add the X-Content-Type-Options header with the nosniff value.
             */
            "contentTypeNosniff"?: boolean;
            /**
             * CustomBrowserXSSValue defines the X-XSS-Protection header value. This overrides the BrowserXssFilter option.
             */
            "customBrowserXSSValue"?: string;
            /**
             * CustomFrameOptionsValue defines the X-Frame-Options header value. This overrides the FrameDeny option.
             */
            "customFrameOptionsValue"?: string;
            /**
             * CustomRequestHeaders defines the header names and values to apply to the request.
             */
            "customRequestHeaders"?: {
                [key: string]: string;
            };
            /**
             * CustomResponseHeaders defines the header names and values to apply to the response.
             */
            "customResponseHeaders"?: {
                [key: string]: string;
            };
            /**
             * Deprecated: use PermissionsPolicy instead.
             */
            "featurePolicy"?: string;
            /**
             * ForceSTSHeader defines whether to add the STS header even when the connection is HTTP.
             */
            "forceSTSHeader"?: boolean;
            /**
             * FrameDeny defines whether to add the X-Frame-Options header with the DENY value.
             */
            "frameDeny"?: boolean;
            /**
             * HostsProxyHeaders defines the header keys that may hold a proxied hostname value for the request.
             */
            "hostsProxyHeaders"?: Array<string>;
            /**
             * IsDevelopment defines whether to mitigate the unwanted effects of the AllowedHosts, SSL, and STS options when developing. Usually testing takes place using HTTP, not HTTPS, and on localhost, not your production domain. If you would like your development environment to mimic production with complete Host blocking, SSL redirects, and STS headers, leave this as false.
             */
            "isDevelopment"?: boolean;
            /**
             * PermissionsPolicy defines the Permissions-Policy header value. This allows sites to control browser features.
             */
            "permissionsPolicy"?: string;
            /**
             * PublicKey is the public key that implements HPKP to prevent MITM attacks with forged certificates.
             */
            "publicKey"?: string;
            /**
             * ReferrerPolicy defines the Referrer-Policy header value. This allows sites to control whether browsers forward the Referer header to other sites.
             */
            "referrerPolicy"?: string;
            /**
             * Deprecated: use RedirectRegex instead.
             */
            "sslForceHost"?: boolean;
            /**
             * Deprecated: use RedirectRegex instead.
             */
            "sslHost"?: string;
            /**
             * SSLProxyHeaders defines the header keys with associated values that would indicate a valid HTTPS request. It can be useful when using other proxies (example: "X-Forwarded-Proto": "https").
             */
            "sslProxyHeaders"?: {
                [key: string]: string;
            };
            /**
             * Deprecated: use EntryPoint redirection or RedirectScheme instead.
             */
            "sslRedirect"?: boolean;
            /**
             * Deprecated: use EntryPoint redirection or RedirectScheme instead.
             */
            "sslTemporaryRedirect"?: boolean;
            /**
             * STSIncludeSubdomains defines whether the includeSubDomains directive is appended to the Strict-Transport-Security header.
             */
            "stsIncludeSubdomains"?: boolean;
            /**
             * STSPreload defines whether the preload flag is appended to the Strict-Transport-Security header.
             */
            "stsPreload"?: boolean;
            /**
             * STSSeconds defines the max-age of the Strict-Transport-Security header. If set to 0, the header is not set.
             */
            "stsSeconds"?: number;
        };
        /**
         * InFlightReq holds the in-flight request middleware configuration. This middleware limits the number of requests being processed and served concurrently. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/inflightreq/
         */
        "inFlightReq"?: {
            /**
             * Amount defines the maximum amount of allowed simultaneous in-flight request. The middleware responds with HTTP 429 Too Many Requests if there are already amount requests in progress (based on the same sourceCriterion strategy).
             */
            "amount"?: number;
            /**
             * SourceCriterion defines what criterion is used to group requests as originating from a common source. If several strategies are defined at the same time, an error will be raised. If none are set, the default is to use the requestHost. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/inflightreq/#sourcecriterion
             */
            "sourceCriterion"?: {
                /**
                 * IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/ipwhitelist/#ipstrategy
                 */
                "ipStrategy"?: {
                    /**
                     * Depth tells Traefik to use the X-Forwarded-For header and take the IP located at the depth position (starting from the right).
                     */
                    "depth"?: number;
                    /**
                     * ExcludedIPs configures Traefik to scan the X-Forwarded-For header and select the first IP not in the list.
                     */
                    "excludedIPs"?: Array<string>;
                };
                /**
                 * RequestHeaderName defines the name of the header used to group incoming requests.
                 */
                "requestHeaderName"?: string;
                /**
                 * RequestHost defines whether to consider the request Host as the source.
                 */
                "requestHost"?: boolean;
            };
        };
        /**
         * IPWhiteList holds the IP whitelist middleware configuration. This middleware accepts / refuses requests based on the client IP. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/ipwhitelist/
         */
        "ipWhiteList"?: {
            /**
             * IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/ipwhitelist/#ipstrategy
             */
            "ipStrategy"?: {
                /**
                 * Depth tells Traefik to use the X-Forwarded-For header and take the IP located at the depth position (starting from the right).
                 */
                "depth"?: number;
                /**
                 * ExcludedIPs configures Traefik to scan the X-Forwarded-For header and select the first IP not in the list.
                 */
                "excludedIPs"?: Array<string>;
            };
            /**
             * SourceRange defines the set of allowed IPs (or ranges of allowed IPs by using CIDR notation).
             */
            "sourceRange"?: Array<string>;
        };
        /**
         * PassTLSClientCert holds the pass TLS client cert middleware configuration. This middleware adds the selected data from the passed client TLS certificate to a header. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/passtlsclientcert/
         */
        "passTLSClientCert"?: {
            /**
             * Info selects the specific client certificate details you want to add to the X-Forwarded-Tls-Client-Cert-Info header.
             */
            "info"?: {
                /**
                 * Issuer defines the client certificate issuer details to add to the X-Forwarded-Tls-Client-Cert-Info header.
                 */
                "issuer"?: {
                    /**
                     * CommonName defines whether to add the organizationalUnit information into the issuer.
                     */
                    "commonName"?: boolean;
                    /**
                     * Country defines whether to add the country information into the issuer.
                     */
                    "country"?: boolean;
                    /**
                     * DomainComponent defines whether to add the domainComponent information into the issuer.
                     */
                    "domainComponent"?: boolean;
                    /**
                     * Locality defines whether to add the locality information into the issuer.
                     */
                    "locality"?: boolean;
                    /**
                     * Organization defines whether to add the organization information into the issuer.
                     */
                    "organization"?: boolean;
                    /**
                     * Province defines whether to add the province information into the issuer.
                     */
                    "province"?: boolean;
                    /**
                     * SerialNumber defines whether to add the serialNumber information into the issuer.
                     */
                    "serialNumber"?: boolean;
                };
                /**
                 * NotAfter defines whether to add the Not After information from the Validity part.
                 */
                "notAfter"?: boolean;
                /**
                 * NotBefore defines whether to add the Not Before information from the Validity part.
                 */
                "notBefore"?: boolean;
                /**
                 * Sans defines whether to add the Subject Alternative Name information from the Subject Alternative Name part.
                 */
                "sans"?: boolean;
                /**
                 * SerialNumber defines whether to add the client serialNumber information.
                 */
                "serialNumber"?: boolean;
                /**
                 * Subject defines the client certificate subject details to add to the X-Forwarded-Tls-Client-Cert-Info header.
                 */
                "subject"?: {
                    /**
                     * CommonName defines whether to add the organizationalUnit information into the subject.
                     */
                    "commonName"?: boolean;
                    /**
                     * Country defines whether to add the country information into the subject.
                     */
                    "country"?: boolean;
                    /**
                     * DomainComponent defines whether to add the domainComponent information into the subject.
                     */
                    "domainComponent"?: boolean;
                    /**
                     * Locality defines whether to add the locality information into the subject.
                     */
                    "locality"?: boolean;
                    /**
                     * Organization defines whether to add the organization information into the subject.
                     */
                    "organization"?: boolean;
                    /**
                     * OrganizationalUnit defines whether to add the organizationalUnit information into the subject.
                     */
                    "organizationalUnit"?: boolean;
                    /**
                     * Province defines whether to add the province information into the subject.
                     */
                    "province"?: boolean;
                    /**
                     * SerialNumber defines whether to add the serialNumber information into the subject.
                     */
                    "serialNumber"?: boolean;
                };
            };
            /**
             * PEM sets the X-Forwarded-Tls-Client-Cert header with the certificate.
             */
            "pem"?: boolean;
        };
        /**
         * Plugin defines the middleware plugin configuration. More info: https://doc.traefik.io/traefik/plugins/
         */
        "plugin"?: {
            [key: string]: any;
        };
        /**
         * RateLimit holds the rate limit configuration. This middleware ensures that services will receive a fair amount of requests, and allows one to define what fair is. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/ratelimit/
         */
        "rateLimit"?: {
            /**
             * Average is the maximum rate, by default in requests/s, allowed for the given source. It defaults to 0, which means no rate limiting. The rate is actually defined by dividing Average by Period. So for a rate below 1req/s, one needs to define a Period larger than a second.
             */
            "average"?: number;
            /**
             * Burst is the maximum number of requests allowed to arrive in the same arbitrarily small period of time. It defaults to 1.
             */
            "burst"?: number;
            /**
             * Period, in combination with Average, defines the actual maximum rate, such as: r = Average / Period. It defaults to a second.
             */
            "period"?: number | string;
            /**
             * SourceCriterion defines what criterion is used to group requests as originating from a common source. If several strategies are defined at the same time, an error will be raised. If none are set, the default is to use the request's remote address field (as an ipStrategy).
             */
            "sourceCriterion"?: {
                /**
                 * IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/ipwhitelist/#ipstrategy
                 */
                "ipStrategy"?: {
                    /**
                     * Depth tells Traefik to use the X-Forwarded-For header and take the IP located at the depth position (starting from the right).
                     */
                    "depth"?: number;
                    /**
                     * ExcludedIPs configures Traefik to scan the X-Forwarded-For header and select the first IP not in the list.
                     */
                    "excludedIPs"?: Array<string>;
                };
                /**
                 * RequestHeaderName defines the name of the header used to group incoming requests.
                 */
                "requestHeaderName"?: string;
                /**
                 * RequestHost defines whether to consider the request Host as the source.
                 */
                "requestHost"?: boolean;
            };
        };
        /**
         * RedirectRegex holds the redirect regex middleware configuration. This middleware redirects a request using regex matching and replacement. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/redirectregex/#regex
         */
        "redirectRegex"?: {
            /**
             * Permanent defines whether the redirection is permanent (301).
             */
            "permanent"?: boolean;
            /**
             * Regex defines the regex used to match and capture elements from the request URL.
             */
            "regex"?: string;
            /**
             * Replacement defines how to modify the URL to have the new target URL.
             */
            "replacement"?: string;
        };
        /**
         * RedirectScheme holds the redirect scheme middleware configuration. This middleware redirects requests from a scheme/port to another. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/redirectscheme/
         */
        "redirectScheme"?: {
            /**
             * Permanent defines whether the redirection is permanent (301).
             */
            "permanent"?: boolean;
            /**
             * Port defines the port of the new URL.
             */
            "port"?: string;
            /**
             * Scheme defines the scheme of the new URL.
             */
            "scheme"?: string;
        };
        /**
         * ReplacePath holds the replace path middleware configuration. This middleware replaces the path of the request URL and store the original path in an X-Replaced-Path header. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/replacepath/
         */
        "replacePath"?: {
            /**
             * Path defines the path to use as replacement in the request URL.
             */
            "path"?: string;
        };
        /**
         * ReplacePathRegex holds the replace path regex middleware configuration. This middleware replaces the path of a URL using regex matching and replacement. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/replacepathregex/
         */
        "replacePathRegex"?: {
            /**
             * Regex defines the regular expression used to match and capture the path from the request URL.
             */
            "regex"?: string;
            /**
             * Replacement defines the replacement path format, which can include captured variables.
             */
            "replacement"?: string;
        };
        /**
         * Retry holds the retry middleware configuration. This middleware reissues requests a given number of times to a backend server if that server does not reply. As soon as the server answers, the middleware stops retrying, regardless of the response status. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/retry/
         */
        "retry"?: {
            /**
             * Attempts defines how many times the request should be retried.
             */
            "attempts"?: number;
            /**
             * InitialInterval defines the first wait time in the exponential backoff series. The maximum interval is calculated as twice the initialInterval. If unspecified, requests will be retried immediately. The value of initialInterval should be provided in seconds or as a valid duration format, see https://pkg.go.dev/time#ParseDuration.
             */
            "initialInterval"?: number | string;
        };
        /**
         * StripPrefix holds the strip prefix middleware configuration. This middleware removes the specified prefixes from the URL path. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/stripprefix/
         */
        "stripPrefix"?: {
            /**
             * ForceSlash ensures that the resulting stripped path is not the empty string, by replacing it with / when necessary. Default: true.
             */
            "forceSlash"?: boolean;
            /**
             * Prefixes defines the prefixes to strip from the request URL.
             */
            "prefixes"?: Array<string>;
        };
        /**
         * StripPrefixRegex holds the strip prefix regex middleware configuration. This middleware removes the matching prefixes from the URL path. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/stripprefixregex/
         */
        "stripPrefixRegex"?: {
            /**
             * Regex defines the regular expression to match the path prefix from the request URL.
             */
            "regex"?: Array<string>;
        };
    };
}
/**
 * Middleware is the CRD implementation of a Traefik Middleware. More info: https://doc.traefik.io/traefik/v2.10/middlewares/http/overview/
 */
export declare class Middleware extends Model<IMiddleware> implements IMiddleware {
    "apiVersion": IMiddleware["apiVersion"];
    "kind": IMiddleware["kind"];
    "metadata": IMiddleware["metadata"];
    "spec": IMiddleware["spec"];
    static apiVersion: IMiddleware["apiVersion"];
    static kind: IMiddleware["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IMiddleware>;
    constructor(data?: ModelData<IMiddleware>);
}
