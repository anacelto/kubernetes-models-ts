import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * CDNPolicy provides a way to apply CDN policy configuration with the GKE implementation of the Gateway API.
 */
export interface ICDNPolicy {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "networking.gke.io/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "CDNPolicy";
    "metadata"?: IObjectMeta;
    /**
     * Spec defines the desired state of CDNPolicy.
     */
    "spec": {
        /**
         * Default defines default policy configuration for the targeted resource.
         */
        "default"?: {
            /**
             * Bypass the cache when the specified request headers are matched - e.g. Pragma or Authorization headers. Up to 5 headers can be specified. The cache is bypassed for all CacheMode settings.
             */
            "bypassCacheOnRequestHeaders"?: Array<{
                /**
                 * The header field name to match on when bypassing cache. Values are case-insensitive.
                 */
                "headerName"?: string;
            }>;
            /**
             * Specifies the cache setting for all responses from this backend. The possible values are: \* USE_ORIGIN_HEADERS: Requires the origin to set valid caching headers   to cache content. Responses without these headers will not be cached   at Google's edge, and will require a full trip to the origin on every   request, potentially impacting performance and increasing load on the   origin server. \* FORCE_CACHE_ALL: Cache all content, ignoring any "private", "no-store"   or "no-cache" directives in Cache-Control response headers. Warning:   this may result in Cloud CDN caching private, per-user (user   identifiable) content. \* CACHE_ALL_STATIC: Automatically cache static content, including common   image formats, media (video and audio), and web assets (JavaScript and   CSS). Requests and responses that are marked as uncacheable, as well   as dynamic content (including HTML), will not be cached.
             */
            "cacheMode"?: "USE_ORIGIN_HEADERS" | "FORCE_CACHE_ALL" | "CACHE_ALL_STATIC";
            /**
             * This field can only be specified if CDN caching is enabled for this backend service. The field configures CDN cache settings.
             */
            "cachePolicy"?: {
                /**
                 * If true, requests to different hosts will be cached separately.
                 */
                "includeHost"?: boolean;
                /**
                 * If true, http and https requests will be cached separately.
                 */
                "includeProtocol"?: boolean;
                /**
                 * If true, query string parameters are included in the cache key according to QueryStringDenylist and QueryStringAllowlist. If neither is set, the entire query string is included and if false the entire query string is excluded.
                 */
                "includeQueryString"?: boolean;
                /**
                 * Names of query string parameters to include in cache keys. All other parameters are excluded. Either specify QueryStringDenylist or QueryStringAllowlist, but not both.
                 */
                "queryStringAllowlist"?: Array<string>;
                /**
                 * Names of query string parameters to exclude from cache keys. All other parameters are included. Either specify QueryStringDenylist or QueryStringAllowlist, but not both.
                 */
                "queryStringDenylist"?: Array<string>;
            };
            /**
             * Specifies a separate client (e.g. browser client) maximum TTL. This is used to clamp the max-age (or Expires) value sent to the client. With FORCE_CACHE_ALL, the lesser of ClientTTL and DefaultTTL is used for the response max-age directive, along with a "public" directive. For cacheable content in CACHE_ALL_STATIC mode, ClientTTL clamps the max-age from the origin (if specified), or else sets the response max-age directive to the lesser of the ClientTTL and DefaultTTL, and also ensures a "public" cache-control directive is present. If a client TTL is not specified, a default value (1 hour) will be used. The maximum allowed value is 31.622.400s (1 year).
             */
            "clientTtl"?: number;
            /**
             * Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age). Setting a TTL of 0 means "always revalidate". The value of DefaultTTL cannot be set to a value greater than that of MaxTTL, but can be equal. When the CacheMode is set to FORCE_CACHE_ALL, the DefaultTTL will overwrite the TTL set in all responses. The maximum allowed value is 31.622.400s (1 year), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.
             */
            "defaultTtl"?: number;
            /**
             * This field denotes whether to disable CDN caching.
             */
            "disabled": boolean;
            /**
             * Specifies the maximum allowed TTL for cached content served by this origin. Cache directives that attempt to set a max-age or s-maxage higher than this, or an Expires header more than MaxTTL seconds in the future will be capped at the value of MaxTTL, as if it were the value of an s-maxage Cache-Control directive. Headers sent to the client will not be modified. Setting a TTL of 0 means "always revalidate". The maximum allowed value is 31.622.400s (1 year), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.
             */
            "maxTtl"?: number;
            /**
             * Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects. This can reduce the load on your origin and improve end-user experience by reducing response latency. When the cache mode is set to CACHE_ALL_STATIC or USE_ORIGIN_HEADERS, negative caching applies to responses with the specified response code that lack any Cache-Control, Expires, or Pragma: no-cache directives. When the cache mode is set to FORCE_CACHE_ALL, negative caching applies to all responses with the specified response code, and overrides any caching headers. By default, Cloud CDN will apply the following default TTLs to these status codes: \* HTTP 300 (Multiple Choice), 301, 308 (Permanent Redirects): 10m \* HTTP 404 (Not Found), 410 (Gone), 451 (Unavailable For Legal Reasons): 120s \* HTTP 405 (Method Not Found), 421 (Misdirected Request), 501 (Not Implemented): 60s. These defaults can be overridden in NegativeCachingPolicy.
             */
            "negativeCaching"?: boolean;
            /**
             * Sets a cache TTL for the specified HTTP status code. NegativeCaching must be enabled to configure NegativeCachingPolicy. Omitting the policy and leaving NegativeCaching enabled will use Cloud CDN's default cache TTLs. Note that when specifying an explicit NegativeCachingPolicy, you should take care to specify a cache TTL for all response codes that you wish to cache. Cloud CDN will not apply any default negative caching when a policy exists.
             */
            "negativeCachingPolicy"?: Array<{
                /**
                 * The HTTP status code to define a TTL against. Only HTTP status codes 300, 301, 302, 307, 308, 404, 405, 410, 421, 451 and 501 can be specified as values, and you cannot specify a status code more than once.
                 */
                "code"?: 300 | 301 | 302 | 307 | 308 | 404 | 405 | 410 | 421 | 451 | 501;
                /**
                 * The TTL (in seconds) for which to cache responses with the corresponding status code. The maximum allowed value is 1800s (30 minutes), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.
                 */
                "ttl"?: number;
            }>;
            /**
             * If true, Cloud CDN will combine multiple concurrent cache fill requests into a small number of requests to the origin.
             */
            "requestCoalescing"?: boolean;
            /**
             * Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache. This setting defines the default "max-stale" duration for any cached responses that do not specify a max-stale directive. Stale responses that exceed the TTL configured here will not be served. The default limit (max-stale) is 86400s (1 day), which will allow stale content to be served up to this limit beyond the max-age (or s-max-age) of a cached response. The maximum allowed value is 604800 (1 week). Set this to zero (0) to disable serve-while-stale.
             */
            "serveWhileStale"?: number;
            /**
             * Maximum number of seconds the response to a signed URL request will be considered fresh. After this time period, the response will be revalidated before being served. Defaults to 1hr (3600s). When serving responses to signed URL requests, Cloud CDN will internally behave as though all responses from this backend had a "Cache-Control: public, max-age=[TTL]" header, regardless of any existing Cache-Control header. The actual headers served in responses will not be altered.
             */
            "signedUrlCacheMaxAgeSec"?: number;
        };
        /**
         * TargetRef identifies an API object to apply policy to.
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
        };
    };
    /**
     * Status defines the current state of CDNPolicy.
     */
    "status"?: {
        /**
         * Conditions describe the current conditions of the CDNPolicy.
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
    };
}
/**
 * CDNPolicy provides a way to apply CDN policy configuration with the GKE implementation of the Gateway API.
 */
export declare class CDNPolicy extends Model<ICDNPolicy> implements ICDNPolicy {
    "apiVersion": ICDNPolicy["apiVersion"];
    "kind": ICDNPolicy["kind"];
    "metadata"?: ICDNPolicy["metadata"];
    "spec": ICDNPolicy["spec"];
    "status"?: ICDNPolicy["status"];
    static apiVersion: ICDNPolicy["apiVersion"];
    static kind: ICDNPolicy["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ICDNPolicy>;
    constructor(data?: ModelData<ICDNPolicy>);
}
