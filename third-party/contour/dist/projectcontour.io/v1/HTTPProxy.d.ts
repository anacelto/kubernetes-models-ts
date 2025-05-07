import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * HTTPProxy is an Ingress CRD specification.
 */
export interface IHTTPProxy {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "projectcontour.io/v1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "HTTPProxy";
    "metadata": IObjectMeta;
    /**
     * HTTPProxySpec defines the spec of the CRD.
     */
    "spec": {
        /**
         * Includes allow for specific routing configuration to be included from another HTTPProxy, possibly in another namespace.
         */
        "includes"?: Array<{
            /**
             * Conditions are a set of rules that are applied to included HTTPProxies. In effect, they are added onto the Conditions of included HTTPProxy Route structs. When applied, they are merged using AND, with one exception: There can be only one Prefix MatchCondition per Conditions slice. More than one Prefix, or contradictory Conditions, will make the include invalid.
             */
            "conditions"?: Array<{
                /**
                 * Exact defines a exact match for a request. This field is not allowed in include match conditions.
                 */
                "exact"?: string;
                /**
                 * Header specifies the header condition to match.
                 */
                "header"?: {
                    /**
                     * Contains specifies a substring that must be present in the header value.
                     */
                    "contains"?: string;
                    /**
                     * Exact specifies a string that the header value must be equal to.
                     */
                    "exact"?: string;
                    /**
                     * Name is the name of the header to match against. Name is required. Header names are case insensitive.
                     */
                    "name": string;
                    /**
                     * NotContains specifies a substring that must not be present in the header value.
                     */
                    "notcontains"?: string;
                    /**
                     * NoExact specifies a string that the header value must not be equal to. The condition is true if the header has any other value.
                     */
                    "notexact"?: string;
                    /**
                     * NotPresent specifies that condition is true when the named header is not present. Note that setting NotPresent to false does not make the condition true if the named header is present.
                     */
                    "notpresent"?: boolean;
                    /**
                     * Present specifies that condition is true when the named header is present, regardless of its value. Note that setting Present to false does not make the condition true if the named header is absent.
                     */
                    "present"?: boolean;
                };
                /**
                 * Prefix defines a prefix match for a request.
                 */
                "prefix"?: string;
                /**
                 * QueryParameter specifies the query parameter condition to match.
                 */
                "queryParameter"?: {
                    /**
                     * Contains specifies a substring that must be present in the query parameter value.
                     */
                    "contains"?: string;
                    /**
                     * Exact specifies a string that the query parameter value must be equal to.
                     */
                    "exact"?: string;
                    /**
                     * IgnoreCase specifies that string matching should be case insensitive. Note that this has no effect on the Regex parameter.
                     */
                    "ignoreCase"?: boolean;
                    /**
                     * Name is the name of the query parameter to match against. Name is required. Query parameter names are case insensitive.
                     */
                    "name": string;
                    /**
                     * Prefix defines a prefix match for the query parameter value.
                     */
                    "prefix"?: string;
                    /**
                     * Present specifies that condition is true when the named query parameter is present, regardless of its value. Note that setting Present to false does not make the condition true if the named query parameter is absent.
                     */
                    "present"?: boolean;
                    /**
                     * Regex specifies a regular expression pattern that must match the query parameter value.
                     */
                    "regex"?: string;
                    /**
                     * Suffix defines a suffix match for a query parameter value.
                     */
                    "suffix"?: string;
                };
            }>;
            /**
             * Name of the HTTPProxy
             */
            "name": string;
            /**
             * Namespace of the HTTPProxy to include. Defaults to the current namespace if not supplied.
             */
            "namespace"?: string;
        }>;
        /**
         * IngressClassName optionally specifies the ingress class to use for this HTTPProxy. This replaces the deprecated `kubernetes.io/ingress.class` annotation. For backwards compatibility, when that annotation is set, it is given precedence over this field.
         */
        "ingressClassName"?: string;
        /**
         * Routes are the ingress routes. If TCPProxy is present, Routes is ignored.
         */
        "routes"?: Array<{
            /**
             * AuthPolicy updates the authorization policy that was set on the root HTTPProxy object for client requests that match this route.
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
             * Conditions are a set of rules that are applied to a Route. When applied, they are merged using AND, with one exception: There can be only one Prefix MatchCondition per Conditions slice. More than one Prefix, or contradictory Conditions, will make the route invalid.
             */
            "conditions"?: Array<{
                /**
                 * Exact defines a exact match for a request. This field is not allowed in include match conditions.
                 */
                "exact"?: string;
                /**
                 * Header specifies the header condition to match.
                 */
                "header"?: {
                    /**
                     * Contains specifies a substring that must be present in the header value.
                     */
                    "contains"?: string;
                    /**
                     * Exact specifies a string that the header value must be equal to.
                     */
                    "exact"?: string;
                    /**
                     * Name is the name of the header to match against. Name is required. Header names are case insensitive.
                     */
                    "name": string;
                    /**
                     * NotContains specifies a substring that must not be present in the header value.
                     */
                    "notcontains"?: string;
                    /**
                     * NoExact specifies a string that the header value must not be equal to. The condition is true if the header has any other value.
                     */
                    "notexact"?: string;
                    /**
                     * NotPresent specifies that condition is true when the named header is not present. Note that setting NotPresent to false does not make the condition true if the named header is present.
                     */
                    "notpresent"?: boolean;
                    /**
                     * Present specifies that condition is true when the named header is present, regardless of its value. Note that setting Present to false does not make the condition true if the named header is absent.
                     */
                    "present"?: boolean;
                };
                /**
                 * Prefix defines a prefix match for a request.
                 */
                "prefix"?: string;
                /**
                 * QueryParameter specifies the query parameter condition to match.
                 */
                "queryParameter"?: {
                    /**
                     * Contains specifies a substring that must be present in the query parameter value.
                     */
                    "contains"?: string;
                    /**
                     * Exact specifies a string that the query parameter value must be equal to.
                     */
                    "exact"?: string;
                    /**
                     * IgnoreCase specifies that string matching should be case insensitive. Note that this has no effect on the Regex parameter.
                     */
                    "ignoreCase"?: boolean;
                    /**
                     * Name is the name of the query parameter to match against. Name is required. Query parameter names are case insensitive.
                     */
                    "name": string;
                    /**
                     * Prefix defines a prefix match for the query parameter value.
                     */
                    "prefix"?: string;
                    /**
                     * Present specifies that condition is true when the named query parameter is present, regardless of its value. Note that setting Present to false does not make the condition true if the named query parameter is absent.
                     */
                    "present"?: boolean;
                    /**
                     * Regex specifies a regular expression pattern that must match the query parameter value.
                     */
                    "regex"?: string;
                    /**
                     * Suffix defines a suffix match for a query parameter value.
                     */
                    "suffix"?: string;
                };
            }>;
            /**
             * The policies for rewriting Set-Cookie header attributes. Note that rewritten cookie names must be unique in this list. Order rewrite policies are specified in does not matter.
             */
            "cookieRewritePolicies"?: Array<{
                /**
                 * DomainRewrite enables rewriting the Set-Cookie Domain element. If not set, Domain will not be rewritten.
                 */
                "domainRewrite"?: {
                    /**
                     * Value is the value to rewrite the Domain attribute to. For now this is required.
                     */
                    "value": string;
                };
                /**
                 * Name is the name of the cookie for which attributes will be rewritten.
                 */
                "name": string;
                /**
                 * PathRewrite enables rewriting the Set-Cookie Path element. If not set, Path will not be rewritten.
                 */
                "pathRewrite"?: {
                    /**
                     * Value is the value to rewrite the Path attribute to. For now this is required.
                     */
                    "value": string;
                };
                /**
                 * SameSite enables rewriting the Set-Cookie SameSite element. If not set, SameSite attribute will not be rewritten.
                 */
                "sameSite"?: "Strict" | "Lax" | "None";
                /**
                 * Secure enables rewriting the Set-Cookie Secure element. If not set, Secure attribute will not be rewritten.
                 */
                "secure"?: boolean;
            }>;
            /**
             * DirectResponsePolicy returns an arbitrary HTTP response directly.
             */
            "directResponsePolicy"?: {
                /**
                 * Body is the content of the response body. If this setting is omitted, no body is included in the generated response.
                 *  Note: Body is not recommended to set too long otherwise it can have significant resource usage impacts.
                 */
                "body"?: string;
                /**
                 * StatusCode is the HTTP response status to be returned.
                 */
                "statusCode": number;
            };
            /**
             * Enables websocket support for the route.
             */
            "enableWebsockets"?: boolean;
            /**
             * The health check policy for this route.
             */
            "healthCheckPolicy"?: {
                /**
                 * The number of healthy health checks required before a host is marked healthy
                 */
                "healthyThresholdCount"?: number;
                /**
                 * The value of the host header in the HTTP health check request. If left empty (default value), the name "contour-envoy-healthcheck" will be used.
                 */
                "host"?: string;
                /**
                 * The interval (seconds) between health checks
                 */
                "intervalSeconds"?: number;
                /**
                 * HTTP endpoint used to perform health checks on upstream service
                 */
                "path": string;
                /**
                 * The time to wait (seconds) for a health check response
                 */
                "timeoutSeconds"?: number;
                /**
                 * The number of unhealthy health checks required before a host is marked unhealthy
                 */
                "unhealthyThresholdCount"?: number;
            };
            /**
             * The policy to define when to handle redirects responses internally.
             */
            "internalRedirectPolicy"?: {
                /**
                 * AllowCrossSchemeRedirect Allow internal redirect to follow a target URI with a different scheme than the value of x-forwarded-proto. SafeOnly allows same scheme redirect and safe cross scheme redirect, which means if the downstream scheme is HTTPS, both HTTPS and HTTP redirect targets are allowed, but if the downstream scheme is HTTP, only HTTP redirect targets are allowed.
                 */
                "allowCrossSchemeRedirect"?: "Always" | "Never" | "SafeOnly";
                /**
                 * If DenyRepeatedRouteRedirect is true, rejects redirect targets that are pointing to a route that has been followed by a previous redirect from the current route.
                 */
                "denyRepeatedRouteRedirect"?: boolean;
                /**
                 * MaxInternalRedirects An internal redirect is not handled, unless the number of previous internal redirects that a downstream request has encountered is lower than this value.
                 */
                "maxInternalRedirects"?: number;
                /**
                 * RedirectResponseCodes If unspecified, only 302 will be treated as internal redirect. Only 301, 302, 303, 307 and 308 are valid values.
                 */
                "redirectResponseCodes"?: Array<301 | 302 | 303 | 307 | 308>;
            };
            /**
             * IPAllowFilterPolicy is a list of ipv4/6 filter rules for which matching requests should be allowed. All other requests will be denied. Only one of IPAllowFilterPolicy and IPDenyFilterPolicy can be defined. The rules defined here override any rules set on the root HTTPProxy.
             */
            "ipAllowPolicy"?: Array<{
                /**
                 * CIDR is a CIDR block of ipv4 or ipv6 addresses to filter on. This can also be a bare IP address (without a mask) to filter on exactly one address.
                 */
                "cidr": string;
                /**
                 * Source indicates how to determine the ip address to filter on, and can be one of two values: - `Remote` filters on the ip address of the client, accounting for PROXY and X-Forwarded-For as needed. - `Peer` filters on the ip of the network request, ignoring PROXY and X-Forwarded-For.
                 */
                "source": "Peer" | "Remote";
            }>;
            /**
             * IPDenyFilterPolicy is a list of ipv4/6 filter rules for which matching requests should be denied. All other requests will be allowed. Only one of IPAllowFilterPolicy and IPDenyFilterPolicy can be defined. The rules defined here override any rules set on the root HTTPProxy.
             */
            "ipDenyPolicy"?: Array<{
                /**
                 * CIDR is a CIDR block of ipv4 or ipv6 addresses to filter on. This can also be a bare IP address (without a mask) to filter on exactly one address.
                 */
                "cidr": string;
                /**
                 * Source indicates how to determine the ip address to filter on, and can be one of two values: - `Remote` filters on the ip address of the client, accounting for PROXY and X-Forwarded-For as needed. - `Peer` filters on the ip of the network request, ignoring PROXY and X-Forwarded-For.
                 */
                "source": "Peer" | "Remote";
            }>;
            /**
             * The policy for verifying JWTs for requests to this route.
             */
            "jwtVerificationPolicy"?: {
                /**
                 * Disabled defines whether to disable all JWT verification for this route. This can be used to opt specific routes out of the default JWT provider for the HTTPProxy. At most one of this field or the "require" field can be specified.
                 */
                "disabled"?: boolean;
                /**
                 * Require names a specific JWT provider (defined in the virtual host) to require for the route. If specified, this field overrides the default provider if one exists. If this field is not specified, the default provider will be required if one exists. At most one of this field or the "disabled" field can be specified.
                 */
                "require"?: string;
            };
            /**
             * The load balancing policy for this route.
             */
            "loadBalancerPolicy"?: {
                /**
                 * RequestHashPolicies contains a list of hash policies to apply when the `RequestHash` load balancing strategy is chosen. If an element of the supplied list of hash policies is invalid, it will be ignored. If the list of hash policies is empty after validation, the load balancing strategy will fall back to the default `RoundRobin`.
                 */
                "requestHashPolicies"?: Array<{
                    /**
                     * HashSourceIP should be set to true when request source IP hash based load balancing is desired. It must be the only hash option field set, otherwise this request hash policy object will be ignored.
                     */
                    "hashSourceIP"?: boolean;
                    /**
                     * HeaderHashOptions should be set when request header hash based load balancing is desired. It must be the only hash option field set, otherwise this request hash policy object will be ignored.
                     */
                    "headerHashOptions"?: {
                        /**
                         * HeaderName is the name of the HTTP request header that will be used to calculate the hash key. If the header specified is not present on a request, no hash will be produced.
                         */
                        "headerName"?: string;
                    };
                    /**
                     * QueryParameterHashOptions should be set when request query parameter hash based load balancing is desired. It must be the only hash option field set, otherwise this request hash policy object will be ignored.
                     */
                    "queryParameterHashOptions"?: {
                        /**
                         * ParameterName is the name of the HTTP request query parameter that will be used to calculate the hash key. If the query parameter specified is not present on a request, no hash will be produced.
                         */
                        "parameterName"?: string;
                    };
                    /**
                     * Terminal is a flag that allows for short-circuiting computing of a hash for a given request. If set to true, and the request attribute specified in the attribute hash options is present, no further hash policies will be used to calculate a hash for the request.
                     */
                    "terminal"?: boolean;
                }>;
                /**
                 * Strategy specifies the policy used to balance requests across the pool of backend pods. Valid policy names are `Random`, `RoundRobin`, `WeightedLeastRequest`, `Cookie`, and `RequestHash`. If an unknown strategy name is specified or no policy is supplied, the default `RoundRobin` policy is used.
                 */
                "strategy"?: string;
            };
            /**
             * The policy for rewriting the path of the request URL after the request has been routed to a Service.
             */
            "pathRewritePolicy"?: {
                /**
                 * ReplacePrefix describes how the path prefix should be replaced.
                 */
                "replacePrefix"?: Array<{
                    /**
                     * Prefix specifies the URL path prefix to be replaced.
                     *  If Prefix is specified, it must exactly match the MatchCondition prefix that is rendered by the chain of including HTTPProxies and only that path prefix will be replaced by Replacement. This allows HTTPProxies that are included through multiple roots to only replace specific path prefixes, leaving others unmodified.
                     *  If Prefix is not specified, all routing prefixes rendered by the include chain will be replaced.
                     */
                    "prefix"?: string;
                    /**
                     * Replacement is the string that the routing path prefix will be replaced with. This must not be empty.
                     */
                    "replacement": string;
                }>;
            };
            /**
             * Allow this path to respond to insecure requests over HTTP which are normally not permitted when a `virtualhost.tls` block is present.
             */
            "permitInsecure"?: boolean;
            /**
             * The policy for rate limiting on the route.
             */
            "rateLimitPolicy"?: {
                /**
                 * Global defines global rate limiting parameters, i.e. parameters defining descriptors that are sent to an external rate limit service (RLS) for a rate limit decision on each request.
                 */
                "global"?: {
                    /**
                     * Descriptors defines the list of descriptors that will be generated and sent to the rate limit service. Each descriptor contains 1+ key-value pair entries.
                     */
                    "descriptors"?: Array<{
                        /**
                         * Entries is the list of key-value pair generators.
                         */
                        "entries"?: Array<{
                            /**
                             * GenericKey defines a descriptor entry with a static key and value.
                             */
                            "genericKey"?: {
                                /**
                                 * Key defines the key of the descriptor entry. If not set, the key is set to "generic_key".
                                 */
                                "key"?: string;
                                /**
                                 * Value defines the value of the descriptor entry.
                                 */
                                "value"?: string;
                            };
                            /**
                             * RemoteAddress defines a descriptor entry with a key of "remote_address" and a value equal to the client's IP address (from x-forwarded-for).
                             */
                            "remoteAddress"?: {};
                            /**
                             * RequestHeader defines a descriptor entry that's populated only if a given header is present on the request. The descriptor key is static, and the descriptor value is equal to the value of the header.
                             */
                            "requestHeader"?: {
                                /**
                                 * DescriptorKey defines the key to use on the descriptor entry.
                                 */
                                "descriptorKey"?: string;
                                /**
                                 * HeaderName defines the name of the header to look for on the request.
                                 */
                                "headerName"?: string;
                            };
                            /**
                             * RequestHeaderValueMatch defines a descriptor entry that's populated if the request's headers match a set of 1+ match criteria. The descriptor key is "header_match", and the descriptor value is static.
                             */
                            "requestHeaderValueMatch"?: {
                                /**
                                 * ExpectMatch defines whether the request must positively match the match criteria in order to generate a descriptor entry (i.e. true), or not match the match criteria in order to generate a descriptor entry (i.e. false). The default is true.
                                 */
                                "expectMatch"?: boolean;
                                /**
                                 * Headers is a list of 1+ match criteria to apply against the request to determine whether to populate the descriptor entry or not.
                                 */
                                "headers"?: Array<{
                                    /**
                                     * Contains specifies a substring that must be present in the header value.
                                     */
                                    "contains"?: string;
                                    /**
                                     * Exact specifies a string that the header value must be equal to.
                                     */
                                    "exact"?: string;
                                    /**
                                     * Name is the name of the header to match against. Name is required. Header names are case insensitive.
                                     */
                                    "name": string;
                                    /**
                                     * NotContains specifies a substring that must not be present in the header value.
                                     */
                                    "notcontains"?: string;
                                    /**
                                     * NoExact specifies a string that the header value must not be equal to. The condition is true if the header has any other value.
                                     */
                                    "notexact"?: string;
                                    /**
                                     * NotPresent specifies that condition is true when the named header is not present. Note that setting NotPresent to false does not make the condition true if the named header is present.
                                     */
                                    "notpresent"?: boolean;
                                    /**
                                     * Present specifies that condition is true when the named header is present, regardless of its value. Note that setting Present to false does not make the condition true if the named header is absent.
                                     */
                                    "present"?: boolean;
                                }>;
                                /**
                                 * Value defines the value of the descriptor entry.
                                 */
                                "value"?: string;
                            };
                        }>;
                    }>;
                };
                /**
                 * Local defines local rate limiting parameters, i.e. parameters for rate limiting that occurs within each Envoy pod as requests are handled.
                 */
                "local"?: {
                    /**
                     * Burst defines the number of requests above the requests per unit that should be allowed within a short period of time.
                     */
                    "burst"?: number;
                    /**
                     * Requests defines how many requests per unit of time should be allowed before rate limiting occurs.
                     */
                    "requests": number;
                    /**
                     * ResponseHeadersToAdd is an optional list of response headers to set when a request is rate-limited.
                     */
                    "responseHeadersToAdd"?: Array<{
                        /**
                         * Name represents a key of a header
                         */
                        "name": string;
                        /**
                         * Value represents the value of a header specified by a key
                         */
                        "value": string;
                    }>;
                    /**
                     * ResponseStatusCode is the HTTP status code to use for responses to rate-limited requests. Codes must be in the 400-599 range (inclusive). If not specified, the Envoy default of 429 (Too Many Requests) is used.
                     */
                    "responseStatusCode"?: number;
                    /**
                     * Unit defines the period of time within which requests over the limit will be rate limited. Valid values are "second", "minute" and "hour".
                     */
                    "unit": "second" | "minute" | "hour";
                };
            };
            /**
             * The policy for managing request headers during proxying.
             */
            "requestHeadersPolicy"?: {
                /**
                 * Remove specifies a list of HTTP header names to remove.
                 */
                "remove"?: Array<string>;
                /**
                 * Set specifies a list of HTTP header values that will be set in the HTTP header. If the header does not exist it will be added, otherwise it will be overwritten with the new value.
                 */
                "set"?: Array<{
                    /**
                     * Name represents a key of a header
                     */
                    "name": string;
                    /**
                     * Value represents the value of a header specified by a key
                     */
                    "value": string;
                }>;
            };
            /**
             * RequestRedirectPolicy defines an HTTP redirection.
             */
            "requestRedirectPolicy"?: {
                /**
                 * Hostname is the precise hostname to be used in the value of the `Location` header in the response. When empty, the hostname of the request is used. No wildcards are allowed.
                 */
                "hostname"?: string;
                /**
                 * Path allows for redirection to a different path from the original on the request. The path must start with a leading slash.
                 *  Note: Only one of Path or Prefix can be defined.
                 */
                "path"?: string;
                /**
                 * Port is the port to be used in the value of the `Location` header in the response. When empty, port (if specified) of the request is used.
                 */
                "port"?: number;
                /**
                 * Prefix defines the value to swap the matched prefix or path with. The prefix must start with a leading slash.
                 *  Note: Only one of Path or Prefix can be defined.
                 */
                "prefix"?: string;
                /**
                 * Scheme is the scheme to be used in the value of the `Location` header in the response. When empty, the scheme of the request is used.
                 */
                "scheme"?: "http" | "https";
                /**
                 * StatusCode is the HTTP status code to be used in response.
                 */
                "statusCode"?: 301 | 302;
            };
            /**
             * The policy for managing response headers during proxying. Rewriting the 'Host' header is not supported.
             */
            "responseHeadersPolicy"?: {
                /**
                 * Remove specifies a list of HTTP header names to remove.
                 */
                "remove"?: Array<string>;
                /**
                 * Set specifies a list of HTTP header values that will be set in the HTTP header. If the header does not exist it will be added, otherwise it will be overwritten with the new value.
                 */
                "set"?: Array<{
                    /**
                     * Name represents a key of a header
                     */
                    "name": string;
                    /**
                     * Value represents the value of a header specified by a key
                     */
                    "value": string;
                }>;
            };
            /**
             * The retry policy for this route.
             */
            "retryPolicy"?: {
                /**
                 * NumRetries is maximum allowed number of retries. If set to -1, then retries are disabled. If set to 0 or not supplied, the value is set to the Envoy default of 1.
                 */
                "count"?: number;
                /**
                 * PerTryTimeout specifies the timeout per retry attempt. Ignored if NumRetries is not supplied.
                 */
                "perTryTimeout"?: string;
                /**
                 * RetriableStatusCodes specifies the HTTP status codes that should be retried.
                 *  This field is only respected when you include `retriable-status-codes` in the `RetryOn` field.
                 */
                "retriableStatusCodes"?: Array<number>;
                /**
                 * RetryOn specifies the conditions on which to retry a request.
                 *  Supported [HTTP conditions](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on):
                 *  - `5xx` - `gateway-error` - `reset` - `connect-failure` - `retriable-4xx` - `refused-stream` - `retriable-status-codes` - `retriable-headers`
                 *  Supported [gRPC conditions](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-grpc-on):
                 *  - `cancelled` - `deadline-exceeded` - `internal` - `resource-exhausted` - `unavailable`
                 */
                "retryOn"?: Array<"5xx" | "gateway-error" | "reset" | "connect-failure" | "retriable-4xx" | "refused-stream" | "retriable-status-codes" | "retriable-headers" | "cancelled" | "deadline-exceeded" | "internal" | "resource-exhausted" | "unavailable">;
            };
            /**
             * Services are the services to proxy traffic.
             */
            "services"?: Array<{
                /**
                 * The policies for rewriting Set-Cookie header attributes.
                 */
                "cookieRewritePolicies"?: Array<{
                    /**
                     * DomainRewrite enables rewriting the Set-Cookie Domain element. If not set, Domain will not be rewritten.
                     */
                    "domainRewrite"?: {
                        /**
                         * Value is the value to rewrite the Domain attribute to. For now this is required.
                         */
                        "value": string;
                    };
                    /**
                     * Name is the name of the cookie for which attributes will be rewritten.
                     */
                    "name": string;
                    /**
                     * PathRewrite enables rewriting the Set-Cookie Path element. If not set, Path will not be rewritten.
                     */
                    "pathRewrite"?: {
                        /**
                         * Value is the value to rewrite the Path attribute to. For now this is required.
                         */
                        "value": string;
                    };
                    /**
                     * SameSite enables rewriting the Set-Cookie SameSite element. If not set, SameSite attribute will not be rewritten.
                     */
                    "sameSite"?: "Strict" | "Lax" | "None";
                    /**
                     * Secure enables rewriting the Set-Cookie Secure element. If not set, Secure attribute will not be rewritten.
                     */
                    "secure"?: boolean;
                }>;
                /**
                 * HealthPort is the port for this service healthcheck. If not specified, Port is used for service healthchecks.
                 */
                "healthPort"?: number;
                /**
                 * If Mirror is true the Service will receive a read only mirror of the traffic for this route.
                 */
                "mirror"?: boolean;
                /**
                 * Name is the name of Kubernetes service to proxy traffic. Names defined here will be used to look up corresponding endpoints which contain the ips to route.
                 */
                "name": string;
                /**
                 * Port (defined as Integer) to proxy traffic to since a service can have multiple defined.
                 */
                "port": number;
                /**
                 * Protocol may be used to specify (or override) the protocol used to reach this Service. Values may be tls, h2, h2c. If omitted, protocol-selection falls back on Service annotations.
                 */
                "protocol"?: "h2" | "h2c" | "tls";
                /**
                 * The policy for managing request headers during proxying.
                 */
                "requestHeadersPolicy"?: {
                    /**
                     * Remove specifies a list of HTTP header names to remove.
                     */
                    "remove"?: Array<string>;
                    /**
                     * Set specifies a list of HTTP header values that will be set in the HTTP header. If the header does not exist it will be added, otherwise it will be overwritten with the new value.
                     */
                    "set"?: Array<{
                        /**
                         * Name represents a key of a header
                         */
                        "name": string;
                        /**
                         * Value represents the value of a header specified by a key
                         */
                        "value": string;
                    }>;
                };
                /**
                 * The policy for managing response headers during proxying. Rewriting the 'Host' header is not supported.
                 */
                "responseHeadersPolicy"?: {
                    /**
                     * Remove specifies a list of HTTP header names to remove.
                     */
                    "remove"?: Array<string>;
                    /**
                     * Set specifies a list of HTTP header values that will be set in the HTTP header. If the header does not exist it will be added, otherwise it will be overwritten with the new value.
                     */
                    "set"?: Array<{
                        /**
                         * Name represents a key of a header
                         */
                        "name": string;
                        /**
                         * Value represents the value of a header specified by a key
                         */
                        "value": string;
                    }>;
                };
                /**
                 * Slow start will gradually increase amount of traffic to a newly added endpoint.
                 */
                "slowStartPolicy"?: {
                    /**
                     * The speed of traffic increase over the slow start window. Defaults to 1.0, so that endpoint would get linearly increasing amount of traffic. When increasing the value for this parameter, the speed of traffic ramp-up increases non-linearly. The value of aggression parameter should be greater than 0.0.
                     *  More info: https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/upstream/load_balancing/slow_start
                     */
                    "aggression"?: string;
                    /**
                     * The minimum or starting percentage of traffic to send to new endpoints. A non-zero value helps avoid a too small initial weight, which may cause endpoints in slow start mode to receive no traffic in the beginning of the slow start window. If not specified, the default is 10%.
                     */
                    "minWeightPercent"?: number;
                    /**
                     * The duration of slow start window. Duration is expressed in the Go [Duration format](https://godoc.org/time#ParseDuration). Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h".
                     */
                    "window": string;
                };
                /**
                 * UpstreamValidation defines how to verify the backend service's certificate
                 */
                "validation"?: {
                    /**
                     * Name or namespaced name of the Kubernetes secret used to validate the certificate presented by the backend. The secret must contain key named ca.crt.
                     */
                    "caSecret": string;
                    /**
                     * Key which is expected to be present in the 'subjectAltName' of the presented certificate.
                     */
                    "subjectName": string;
                };
                /**
                 * Weight defines percentage of traffic to balance traffic
                 */
                "weight"?: number;
            }>;
            /**
             * The timeout policy for this route.
             */
            "timeoutPolicy"?: {
                /**
                 * Timeout for how long the proxy should wait while there is no activity during single request/response (for HTTP/1.1) or stream (for HTTP/2). Timeout will not trigger while HTTP/1.1 connection is idle between two consecutive requests. If not specified, there is no per-route idle timeout, though a connection manager-wide stream_idle_timeout default of 5m still applies.
                 */
                "idle"?: string;
                /**
                 * Timeout for how long connection from the proxy to the upstream service is kept when there are no active requests. If not supplied, Envoy's default value of 1h applies.
                 */
                "idleConnection"?: string;
                /**
                 * Timeout for receiving a response from the server after processing a request from client. If not supplied, Envoy's default value of 15s applies.
                 */
                "response"?: string;
            };
        }>;
        /**
         * TCPProxy holds TCP proxy information.
         */
        "tcpproxy"?: {
            /**
             * The health check policy for this tcp proxy
             */
            "healthCheckPolicy"?: {
                /**
                 * The number of healthy health checks required before a host is marked healthy
                 */
                "healthyThresholdCount"?: number;
                /**
                 * The interval (seconds) between health checks
                 */
                "intervalSeconds"?: number;
                /**
                 * The time to wait (seconds) for a health check response
                 */
                "timeoutSeconds"?: number;
                /**
                 * The number of unhealthy health checks required before a host is marked unhealthy
                 */
                "unhealthyThresholdCount"?: number;
            };
            /**
             * Include specifies that this tcpproxy should be delegated to another HTTPProxy.
             */
            "include"?: {
                /**
                 * Name of the child HTTPProxy
                 */
                "name": string;
                /**
                 * Namespace of the HTTPProxy to include. Defaults to the current namespace if not supplied.
                 */
                "namespace"?: string;
            };
            /**
             * IncludesDeprecated allow for specific routing configuration to be appended to another HTTPProxy in another namespace.
             *  Exists due to a mistake when developing HTTPProxy and the field was marked plural when it should have been singular. This field should stay to not break backwards compatibility to v1 users.
             */
            "includes"?: {
                /**
                 * Name of the child HTTPProxy
                 */
                "name": string;
                /**
                 * Namespace of the HTTPProxy to include. Defaults to the current namespace if not supplied.
                 */
                "namespace"?: string;
            };
            /**
             * The load balancing policy for the backend services. Note that the `Cookie` and `RequestHash` load balancing strategies cannot be used here.
             */
            "loadBalancerPolicy"?: {
                /**
                 * RequestHashPolicies contains a list of hash policies to apply when the `RequestHash` load balancing strategy is chosen. If an element of the supplied list of hash policies is invalid, it will be ignored. If the list of hash policies is empty after validation, the load balancing strategy will fall back to the default `RoundRobin`.
                 */
                "requestHashPolicies"?: Array<{
                    /**
                     * HashSourceIP should be set to true when request source IP hash based load balancing is desired. It must be the only hash option field set, otherwise this request hash policy object will be ignored.
                     */
                    "hashSourceIP"?: boolean;
                    /**
                     * HeaderHashOptions should be set when request header hash based load balancing is desired. It must be the only hash option field set, otherwise this request hash policy object will be ignored.
                     */
                    "headerHashOptions"?: {
                        /**
                         * HeaderName is the name of the HTTP request header that will be used to calculate the hash key. If the header specified is not present on a request, no hash will be produced.
                         */
                        "headerName"?: string;
                    };
                    /**
                     * QueryParameterHashOptions should be set when request query parameter hash based load balancing is desired. It must be the only hash option field set, otherwise this request hash policy object will be ignored.
                     */
                    "queryParameterHashOptions"?: {
                        /**
                         * ParameterName is the name of the HTTP request query parameter that will be used to calculate the hash key. If the query parameter specified is not present on a request, no hash will be produced.
                         */
                        "parameterName"?: string;
                    };
                    /**
                     * Terminal is a flag that allows for short-circuiting computing of a hash for a given request. If set to true, and the request attribute specified in the attribute hash options is present, no further hash policies will be used to calculate a hash for the request.
                     */
                    "terminal"?: boolean;
                }>;
                /**
                 * Strategy specifies the policy used to balance requests across the pool of backend pods. Valid policy names are `Random`, `RoundRobin`, `WeightedLeastRequest`, `Cookie`, and `RequestHash`. If an unknown strategy name is specified or no policy is supplied, the default `RoundRobin` policy is used.
                 */
                "strategy"?: string;
            };
            /**
             * Services are the services to proxy traffic
             */
            "services"?: Array<{
                /**
                 * The policies for rewriting Set-Cookie header attributes.
                 */
                "cookieRewritePolicies"?: Array<{
                    /**
                     * DomainRewrite enables rewriting the Set-Cookie Domain element. If not set, Domain will not be rewritten.
                     */
                    "domainRewrite"?: {
                        /**
                         * Value is the value to rewrite the Domain attribute to. For now this is required.
                         */
                        "value": string;
                    };
                    /**
                     * Name is the name of the cookie for which attributes will be rewritten.
                     */
                    "name": string;
                    /**
                     * PathRewrite enables rewriting the Set-Cookie Path element. If not set, Path will not be rewritten.
                     */
                    "pathRewrite"?: {
                        /**
                         * Value is the value to rewrite the Path attribute to. For now this is required.
                         */
                        "value": string;
                    };
                    /**
                     * SameSite enables rewriting the Set-Cookie SameSite element. If not set, SameSite attribute will not be rewritten.
                     */
                    "sameSite"?: "Strict" | "Lax" | "None";
                    /**
                     * Secure enables rewriting the Set-Cookie Secure element. If not set, Secure attribute will not be rewritten.
                     */
                    "secure"?: boolean;
                }>;
                /**
                 * HealthPort is the port for this service healthcheck. If not specified, Port is used for service healthchecks.
                 */
                "healthPort"?: number;
                /**
                 * If Mirror is true the Service will receive a read only mirror of the traffic for this route.
                 */
                "mirror"?: boolean;
                /**
                 * Name is the name of Kubernetes service to proxy traffic. Names defined here will be used to look up corresponding endpoints which contain the ips to route.
                 */
                "name": string;
                /**
                 * Port (defined as Integer) to proxy traffic to since a service can have multiple defined.
                 */
                "port": number;
                /**
                 * Protocol may be used to specify (or override) the protocol used to reach this Service. Values may be tls, h2, h2c. If omitted, protocol-selection falls back on Service annotations.
                 */
                "protocol"?: "h2" | "h2c" | "tls";
                /**
                 * The policy for managing request headers during proxying.
                 */
                "requestHeadersPolicy"?: {
                    /**
                     * Remove specifies a list of HTTP header names to remove.
                     */
                    "remove"?: Array<string>;
                    /**
                     * Set specifies a list of HTTP header values that will be set in the HTTP header. If the header does not exist it will be added, otherwise it will be overwritten with the new value.
                     */
                    "set"?: Array<{
                        /**
                         * Name represents a key of a header
                         */
                        "name": string;
                        /**
                         * Value represents the value of a header specified by a key
                         */
                        "value": string;
                    }>;
                };
                /**
                 * The policy for managing response headers during proxying. Rewriting the 'Host' header is not supported.
                 */
                "responseHeadersPolicy"?: {
                    /**
                     * Remove specifies a list of HTTP header names to remove.
                     */
                    "remove"?: Array<string>;
                    /**
                     * Set specifies a list of HTTP header values that will be set in the HTTP header. If the header does not exist it will be added, otherwise it will be overwritten with the new value.
                     */
                    "set"?: Array<{
                        /**
                         * Name represents a key of a header
                         */
                        "name": string;
                        /**
                         * Value represents the value of a header specified by a key
                         */
                        "value": string;
                    }>;
                };
                /**
                 * Slow start will gradually increase amount of traffic to a newly added endpoint.
                 */
                "slowStartPolicy"?: {
                    /**
                     * The speed of traffic increase over the slow start window. Defaults to 1.0, so that endpoint would get linearly increasing amount of traffic. When increasing the value for this parameter, the speed of traffic ramp-up increases non-linearly. The value of aggression parameter should be greater than 0.0.
                     *  More info: https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/upstream/load_balancing/slow_start
                     */
                    "aggression"?: string;
                    /**
                     * The minimum or starting percentage of traffic to send to new endpoints. A non-zero value helps avoid a too small initial weight, which may cause endpoints in slow start mode to receive no traffic in the beginning of the slow start window. If not specified, the default is 10%.
                     */
                    "minWeightPercent"?: number;
                    /**
                     * The duration of slow start window. Duration is expressed in the Go [Duration format](https://godoc.org/time#ParseDuration). Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h".
                     */
                    "window": string;
                };
                /**
                 * UpstreamValidation defines how to verify the backend service's certificate
                 */
                "validation"?: {
                    /**
                     * Name or namespaced name of the Kubernetes secret used to validate the certificate presented by the backend. The secret must contain key named ca.crt.
                     */
                    "caSecret": string;
                    /**
                     * Key which is expected to be present in the 'subjectAltName' of the presented certificate.
                     */
                    "subjectName": string;
                };
                /**
                 * Weight defines percentage of traffic to balance traffic
                 */
                "weight"?: number;
            }>;
        };
        /**
         * Virtualhost appears at most once. If it is present, the object is considered to be a "root" HTTPProxy.
         */
        "virtualhost"?: {
            /**
             * This field configures an extension service to perform authorization for this virtual host. Authorization can only be configured on virtual hosts that have TLS enabled. If the TLS configuration requires client certificate validation, the client certificate is always included in the authentication check request.
             */
            "authorization"?: {
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
             * Specifies the cross-origin policy to apply to the VirtualHost.
             */
            "corsPolicy"?: {
                /**
                 * Specifies whether the resource allows credentials.
                 */
                "allowCredentials"?: boolean;
                /**
                 * AllowHeaders specifies the content for the \*access-control-allow-headers\* header.
                 */
                "allowHeaders"?: Array<string>;
                /**
                 * AllowMethods specifies the content for the \*access-control-allow-methods\* header.
                 */
                "allowMethods": Array<string>;
                /**
                 * AllowOrigin specifies the origins that will be allowed to do CORS requests. Allowed values include "\*" which signifies any origin is allowed, an exact origin of the form "scheme://host[:port]" (where port is optional), or a valid regex pattern. Note that regex patterns are validated and a simple "glob" pattern (e.g. \*.foo.com) will be rejected or produce unexpected matches when applied as a regex.
                 */
                "allowOrigin": Array<string>;
                /**
                 * AllowPrivateNetwork specifies whether to allow private network requests. See https://developer.chrome.com/blog/private-network-access-preflight.
                 */
                "allowPrivateNetwork"?: boolean;
                /**
                 * ExposeHeaders Specifies the content for the \*access-control-expose-headers\* header.
                 */
                "exposeHeaders"?: Array<string>;
                /**
                 * MaxAge indicates for how long the results of a preflight request can be cached. MaxAge durations are expressed in the Go [Duration format](https://godoc.org/time#ParseDuration). Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h". Only positive values are allowed while 0 disables the cache requiring a preflight OPTIONS check for all cross-origin requests.
                 */
                "maxAge"?: string;
            };
            /**
             * The fully qualified domain name of the root of the ingress tree all leaves of the DAG rooted at this object relate to the fqdn.
             */
            "fqdn": string;
            /**
             * IPAllowFilterPolicy is a list of ipv4/6 filter rules for which matching requests should be allowed. All other requests will be denied. Only one of IPAllowFilterPolicy and IPDenyFilterPolicy can be defined. The rules defined here may be overridden in a Route.
             */
            "ipAllowPolicy"?: Array<{
                /**
                 * CIDR is a CIDR block of ipv4 or ipv6 addresses to filter on. This can also be a bare IP address (without a mask) to filter on exactly one address.
                 */
                "cidr": string;
                /**
                 * Source indicates how to determine the ip address to filter on, and can be one of two values: - `Remote` filters on the ip address of the client, accounting for PROXY and X-Forwarded-For as needed. - `Peer` filters on the ip of the network request, ignoring PROXY and X-Forwarded-For.
                 */
                "source": "Peer" | "Remote";
            }>;
            /**
             * IPDenyFilterPolicy is a list of ipv4/6 filter rules for which matching requests should be denied. All other requests will be allowed. Only one of IPAllowFilterPolicy and IPDenyFilterPolicy can be defined. The rules defined here may be overridden in a Route.
             */
            "ipDenyPolicy"?: Array<{
                /**
                 * CIDR is a CIDR block of ipv4 or ipv6 addresses to filter on. This can also be a bare IP address (without a mask) to filter on exactly one address.
                 */
                "cidr": string;
                /**
                 * Source indicates how to determine the ip address to filter on, and can be one of two values: - `Remote` filters on the ip address of the client, accounting for PROXY and X-Forwarded-For as needed. - `Peer` filters on the ip of the network request, ignoring PROXY and X-Forwarded-For.
                 */
                "source": "Peer" | "Remote";
            }>;
            /**
             * Providers to use for verifying JSON Web Tokens (JWTs) on the virtual host.
             */
            "jwtProviders"?: Array<{
                /**
                 * Audiences that JWTs are allowed to have in the "aud" field. If not provided, JWT audiences are not checked.
                 */
                "audiences"?: Array<string>;
                /**
                 * Whether the provider should apply to all routes in the HTTPProxy/its includes by default. At most one provider can be marked as the default. If no provider is marked as the default, individual routes must explicitly identify the provider they require.
                 */
                "default"?: boolean;
                /**
                 * Whether the JWT should be forwarded to the backend service after successful verification. By default, the JWT is not forwarded.
                 */
                "forwardJWT"?: boolean;
                /**
                 * Issuer that JWTs are required to have in the "iss" field. If not provided, JWT issuers are not checked.
                 */
                "issuer"?: string;
                /**
                 * Unique name for the provider.
                 */
                "name": string;
                /**
                 * Remote JWKS to use for verifying JWT signatures.
                 */
                "remoteJWKS": {
                    /**
                     * How long to cache the JWKS locally. If not specified, Envoy's default of 5m applies.
                     */
                    "cacheDuration"?: string;
                    /**
                     * The DNS IP address resolution policy for the JWKS URI. When configured as "v4", the DNS resolver will only perform a lookup for addresses in the IPv4 family. If "v6" is configured, the DNS resolver will only perform a lookup for addresses in the IPv6 family. If "all" is configured, the DNS resolver will perform a lookup for addresses in both the IPv4 and IPv6 family. If "auto" is configured, the DNS resolver will first perform a lookup for addresses in the IPv6 family and fallback to a lookup for addresses in the IPv4 family. If not specified, the Contour-wide setting defined in the config file or ContourConfiguration applies (defaults to "auto").
                     *  See https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto.html#envoy-v3-api-enum-config-cluster-v3-cluster-dnslookupfamily for more information.
                     */
                    "dnsLookupFamily"?: "auto" | "v4" | "v6";
                    /**
                     * How long to wait for a response from the URI. If not specified, a default of 1s applies.
                     */
                    "timeout"?: string;
                    /**
                     * The URI for the JWKS.
                     */
                    "uri": string;
                    /**
                     * UpstreamValidation defines how to verify the JWKS's TLS certificate.
                     */
                    "validation"?: {
                        /**
                         * Name or namespaced name of the Kubernetes secret used to validate the certificate presented by the backend. The secret must contain key named ca.crt.
                         */
                        "caSecret": string;
                        /**
                         * Key which is expected to be present in the 'subjectAltName' of the presented certificate.
                         */
                        "subjectName": string;
                    };
                };
            }>;
            /**
             * The policy for rate limiting on the virtual host.
             */
            "rateLimitPolicy"?: {
                /**
                 * Global defines global rate limiting parameters, i.e. parameters defining descriptors that are sent to an external rate limit service (RLS) for a rate limit decision on each request.
                 */
                "global"?: {
                    /**
                     * Descriptors defines the list of descriptors that will be generated and sent to the rate limit service. Each descriptor contains 1+ key-value pair entries.
                     */
                    "descriptors"?: Array<{
                        /**
                         * Entries is the list of key-value pair generators.
                         */
                        "entries"?: Array<{
                            /**
                             * GenericKey defines a descriptor entry with a static key and value.
                             */
                            "genericKey"?: {
                                /**
                                 * Key defines the key of the descriptor entry. If not set, the key is set to "generic_key".
                                 */
                                "key"?: string;
                                /**
                                 * Value defines the value of the descriptor entry.
                                 */
                                "value"?: string;
                            };
                            /**
                             * RemoteAddress defines a descriptor entry with a key of "remote_address" and a value equal to the client's IP address (from x-forwarded-for).
                             */
                            "remoteAddress"?: {};
                            /**
                             * RequestHeader defines a descriptor entry that's populated only if a given header is present on the request. The descriptor key is static, and the descriptor value is equal to the value of the header.
                             */
                            "requestHeader"?: {
                                /**
                                 * DescriptorKey defines the key to use on the descriptor entry.
                                 */
                                "descriptorKey"?: string;
                                /**
                                 * HeaderName defines the name of the header to look for on the request.
                                 */
                                "headerName"?: string;
                            };
                            /**
                             * RequestHeaderValueMatch defines a descriptor entry that's populated if the request's headers match a set of 1+ match criteria. The descriptor key is "header_match", and the descriptor value is static.
                             */
                            "requestHeaderValueMatch"?: {
                                /**
                                 * ExpectMatch defines whether the request must positively match the match criteria in order to generate a descriptor entry (i.e. true), or not match the match criteria in order to generate a descriptor entry (i.e. false). The default is true.
                                 */
                                "expectMatch"?: boolean;
                                /**
                                 * Headers is a list of 1+ match criteria to apply against the request to determine whether to populate the descriptor entry or not.
                                 */
                                "headers"?: Array<{
                                    /**
                                     * Contains specifies a substring that must be present in the header value.
                                     */
                                    "contains"?: string;
                                    /**
                                     * Exact specifies a string that the header value must be equal to.
                                     */
                                    "exact"?: string;
                                    /**
                                     * Name is the name of the header to match against. Name is required. Header names are case insensitive.
                                     */
                                    "name": string;
                                    /**
                                     * NotContains specifies a substring that must not be present in the header value.
                                     */
                                    "notcontains"?: string;
                                    /**
                                     * NoExact specifies a string that the header value must not be equal to. The condition is true if the header has any other value.
                                     */
                                    "notexact"?: string;
                                    /**
                                     * NotPresent specifies that condition is true when the named header is not present. Note that setting NotPresent to false does not make the condition true if the named header is present.
                                     */
                                    "notpresent"?: boolean;
                                    /**
                                     * Present specifies that condition is true when the named header is present, regardless of its value. Note that setting Present to false does not make the condition true if the named header is absent.
                                     */
                                    "present"?: boolean;
                                }>;
                                /**
                                 * Value defines the value of the descriptor entry.
                                 */
                                "value"?: string;
                            };
                        }>;
                    }>;
                };
                /**
                 * Local defines local rate limiting parameters, i.e. parameters for rate limiting that occurs within each Envoy pod as requests are handled.
                 */
                "local"?: {
                    /**
                     * Burst defines the number of requests above the requests per unit that should be allowed within a short period of time.
                     */
                    "burst"?: number;
                    /**
                     * Requests defines how many requests per unit of time should be allowed before rate limiting occurs.
                     */
                    "requests": number;
                    /**
                     * ResponseHeadersToAdd is an optional list of response headers to set when a request is rate-limited.
                     */
                    "responseHeadersToAdd"?: Array<{
                        /**
                         * Name represents a key of a header
                         */
                        "name": string;
                        /**
                         * Value represents the value of a header specified by a key
                         */
                        "value": string;
                    }>;
                    /**
                     * ResponseStatusCode is the HTTP status code to use for responses to rate-limited requests. Codes must be in the 400-599 range (inclusive). If not specified, the Envoy default of 429 (Too Many Requests) is used.
                     */
                    "responseStatusCode"?: number;
                    /**
                     * Unit defines the period of time within which requests over the limit will be rate limited. Valid values are "second", "minute" and "hour".
                     */
                    "unit": "second" | "minute" | "hour";
                };
            };
            /**
             * If present the fields describes TLS properties of the virtual host. The SNI names that will be matched on are described in fqdn, the tls.secretName secret must contain a certificate that itself contains a name that matches the FQDN.
             */
            "tls"?: {
                /**
                 * ClientValidation defines how to verify the client certificate when an external client establishes a TLS connection to Envoy.
                 *  This setting:
                 *  1. Enables TLS client certificate validation. 2. Specifies how the client certificate will be validated (i.e. validation required or skipped).
                 *  Note: Setting client certificate validation to be skipped should be only used in conjunction with an external authorization server that performs client validation as Contour will ensure client certificates are passed along.
                 */
                "clientValidation"?: {
                    /**
                     * Name of a Kubernetes secret that contains a CA certificate bundle. The secret must contain key named ca.crt. The client certificate must validate against the certificates in the bundle. If specified and SkipClientCertValidation is true, client certificates will be required on requests.
                     */
                    "caSecret"?: string;
                    /**
                     * If this option is set to true, only the certificate at the end of the certificate chain will be subject to validation by CRL.
                     */
                    "crlOnlyVerifyLeafCert"?: boolean;
                    /**
                     * Name of a Kubernetes opaque secret that contains a concatenated list of PEM encoded CRLs. The secret must contain key named crl.pem. This field will be used to verify that a client certificate has not been revoked. CRLs must be available from all CAs, unless crlOnlyVerifyLeafCert is true. Large CRL lists are not supported since individual secrets are limited to 1MiB in size.
                     */
                    "crlSecret"?: string;
                    /**
                     * ForwardClientCertificate adds the selected data from the passed client TLS certificate to the x-forwarded-client-cert header.
                     */
                    "forwardClientCertificate"?: {
                        /**
                         * Client cert in URL encoded PEM format.
                         */
                        "cert"?: boolean;
                        /**
                         * Client cert chain (including the leaf cert) in URL encoded PEM format.
                         */
                        "chain"?: boolean;
                        /**
                         * DNS type Subject Alternative Names of the client cert.
                         */
                        "dns"?: boolean;
                        /**
                         * Subject of the client cert.
                         */
                        "subject"?: boolean;
                        /**
                         * URI type Subject Alternative Name of the client cert.
                         */
                        "uri"?: boolean;
                    };
                    /**
                     * OptionalClientCertificate when set to true will request a client certificate but allow the connection to continue if the client does not provide one. If a client certificate is sent, it will be verified according to the other properties, which includes disabling validation if SkipClientCertValidation is set. Defaults to false.
                     */
                    "optionalClientCertificate"?: boolean;
                    /**
                     * SkipClientCertValidation disables downstream client certificate validation. Defaults to false. This field is intended to be used in conjunction with external authorization in order to enable the external authorization server to validate client certificates. When this field is set to true, client certificates are requested but not verified by Envoy. If CACertificate is specified, client certificates are required on requests, but not verified. If external authorization is in use, they are presented to the external authorization server.
                     */
                    "skipClientCertValidation"?: boolean;
                };
                /**
                 * EnableFallbackCertificate defines if the vhost should allow a default certificate to be applied which handles all requests which don't match the SNI defined in this vhost.
                 */
                "enableFallbackCertificate"?: boolean;
                /**
                 * MinimumProtocolVersion is the minimum TLS version this vhost should negotiate. Valid options are `1.2` (default) and `1.3`. Any other value defaults to TLS 1.2.
                 */
                "minimumProtocolVersion"?: string;
                /**
                 * Passthrough defines whether the encrypted TLS handshake will be passed through to the backing cluster. Either Passthrough or SecretName must be specified, but not both.
                 */
                "passthrough"?: boolean;
                /**
                 * SecretName is the name of a TLS secret in the current namespace. Either SecretName or Passthrough must be specified, but not both. If specified, the named secret must contain a matching certificate for the virtual host's FQDN.
                 */
                "secretName"?: string;
            };
        };
    };
    /**
     * Status is a container for computed information about the HTTPProxy.
     */
    "status"?: {
        /**
         * Conditions contains information about the current status of the HTTPProxy, in an upstream-friendly container.
         *  Contour will update a single condition, `Valid`, that is in normal-true polarity. That is, when `currentStatus` is `valid`, the `Valid` condition will be `status: true`, and vice versa.
         *  Contour will leave untouched any other Conditions set in this block, in case some other controller wants to add a Condition.
         *  If you are another controller owner and wish to add a condition, you \*should\* namespace your condition with a label, like `controller.domain.com/ConditionName`.
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
        "currentStatus"?: string;
        "description"?: string;
        /**
         * LoadBalancer contains the current status of the load balancer.
         */
        "loadBalancer"?: {
            /**
             * Ingress is a list containing ingress points for the load-balancer. Traffic intended for the service should be sent to these ingress points.
             */
            "ingress"?: Array<{
                /**
                 * Hostname is set for load-balancer ingress points that are DNS based (typically AWS load-balancers)
                 */
                "hostname"?: string;
                /**
                 * IP is set for load-balancer ingress points that are IP based (typically GCE or OpenStack load-balancers)
                 */
                "ip"?: string;
                /**
                 * Ports is a list of records of service ports If used, every port defined in the service should have an entry in it
                 */
                "ports"?: Array<{
                    /**
                     * Error is to record the problem with the service port The format of the error shall comply with the following rules: - built-in error values shall be specified in this file and those shall use CamelCase names - cloud provider specific error values must have names that comply with the format foo.example.com/CamelCase. --- The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
                     */
                    "error"?: string;
                    /**
                     * Port is the port number of the service port of which status is recorded here
                     */
                    "port": number;
                    /**
                     * Protocol is the protocol of the service port of which status is recorded here The supported values are: "TCP", "UDP", "SCTP"
                     */
                    "protocol": string;
                }>;
            }>;
        };
    };
}
/**
 * HTTPProxy is an Ingress CRD specification.
 */
export declare class HTTPProxy extends Model<IHTTPProxy> implements IHTTPProxy {
    "apiVersion": IHTTPProxy["apiVersion"];
    "kind": IHTTPProxy["kind"];
    "metadata": IHTTPProxy["metadata"];
    "spec": IHTTPProxy["spec"];
    "status"?: IHTTPProxy["status"];
    static apiVersion: IHTTPProxy["apiVersion"];
    static kind: IHTTPProxy["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IHTTPProxy>;
    constructor(data?: ModelData<IHTTPProxy>);
}
