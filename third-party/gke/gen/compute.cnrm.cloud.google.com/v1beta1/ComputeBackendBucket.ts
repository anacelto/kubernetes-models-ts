import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ComputeCnrmCloudGoogleComV1beta1ComputeBackendBucket";

export interface IComputeBackendBucket {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "compute.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "ComputeBackendBucket";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Reference to the bucket.
     */
    "bucketRef": {
      /**
       * Allowed value: The `name` field of a `StorageBucket` resource.
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & (Exclude<{
      /**
       * Allowed value: The `name` field of a `StorageBucket` resource.
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * Allowed value: The `name` field of a `StorageBucket` resource.
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }> | Exclude<{
      /**
       * Allowed value: The `name` field of a `StorageBucket` resource.
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * Allowed value: The `name` field of a `StorageBucket` resource.
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & ({
      /**
       * Allowed value: The `name` field of a `StorageBucket` resource.
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } | {
      /**
       * Allowed value: The `name` field of a `StorageBucket` resource.
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace": string;
    })>);
    /**
     * Cloud CDN configuration for this Backend Bucket.
     */
    "cdnPolicy"?: {
      /**
       * Bypass the cache when the specified request headers are matched - e.g. Pragma or Authorization headers. Up to 5 headers can be specified. The cache is bypassed for all cdnPolicy.cacheMode settings.
       */
      "bypassCacheOnRequestHeaders"?: Array<{
        /**
         * The header field name to match on when bypassing cache. Values are case-insensitive.
         */
        "headerName"?: string;
      }>;
      /**
       * The CacheKeyPolicy for this CdnPolicy.
       */
      "cacheKeyPolicy"?: {
        /**
         * Allows HTTP request headers (by name) to be used in the
         * cache key.
         */
        "includeHttpHeaders"?: Array<string>;
        /**
         * Names of query string parameters to include in cache keys.
         * Default parameters are always included. '&' and '=' will
         * be percent encoded and not treated as delimiters.
         */
        "queryStringWhitelist"?: Array<string>;
      };
      /**
       * Specifies the cache setting for all responses from this backend.
       * The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"].
       */
      "cacheMode"?: string;
      /**
       * Specifies the maximum allowed TTL for cached content served by this origin.
       */
      "clientTtl"?: number;
      /**
       * Specifies the default TTL for cached content served by this origin for responses
       * that do not have an existing valid TTL (max-age or s-max-age).
       */
      "defaultTtl"?: number;
      /**
       * Specifies the maximum allowed TTL for cached content served by this origin.
       */
      "maxTtl"?: number;
      /**
       * Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.
       */
      "negativeCaching"?: boolean;
      /**
       * Sets a cache TTL for the specified HTTP status code. negativeCaching must be enabled to configure negativeCachingPolicy.
       * Omitting the policy and leaving negativeCaching enabled will use Cloud CDN's default cache TTLs.
       */
      "negativeCachingPolicy"?: Array<{
        /**
         * The HTTP status code to define a TTL against. Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501
         * can be specified as values, and you cannot specify a status code more than once.
         */
        "code"?: number;
        /**
         * The TTL (in seconds) for which to cache responses with the corresponding status code. The maximum allowed value is 1800s
         * (30 minutes), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.
         */
        "ttl"?: number;
      }>;
      /**
       * If true then Cloud CDN will combine multiple concurrent cache fill requests into a small number of requests to the origin.
       */
      "requestCoalescing"?: boolean;
      /**
       * Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.
       */
      "serveWhileStale"?: number;
      /**
       * Maximum number of seconds the response to a signed URL request will
       * be considered fresh. After this time period,
       * the response will be revalidated before being served.
       * When serving responses to signed URL requests,
       * Cloud CDN will internally behave as though
       * all responses from this backend had a "Cache-Control: public,
       * max-age=[TTL]" header, regardless of any existing Cache-Control
       * header. The actual headers served in responses will not be altered.
       */
      "signedUrlCacheMaxAgeSec"?: number;
    };
    /**
     * Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"].
     */
    "compressionMode"?: string;
    /**
     * Headers that the HTTP/S load balancer should add to proxied responses.
     */
    "customResponseHeaders"?: Array<string>;
    /**
     * An optional textual description of the resource; provided by the
     * client when the resource is created.
     */
    "description"?: string;
    /**
     * The security policy associated with this backend bucket.
     */
    "edgeSecurityPolicy"?: string;
    /**
     * If true, enable Cloud CDN for this BackendBucket.
     */
    "enableCdn"?: boolean;
    /**
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
  };
  "status"?: {
    /**
     * Conditions represent the latest available observation of the resource's current state.
     */
    "conditions"?: Array<{
      /**
       * Last time the condition transitioned from one status to another.
       */
      "lastTransitionTime"?: string;
      /**
       * Human-readable message indicating details about last transition.
       */
      "message"?: string;
      /**
       * Unique, one-word, CamelCase reason for the condition's last transition.
       */
      "reason"?: string;
      /**
       * Status is the status of the condition. Can be True, False, Unknown.
       */
      "status"?: string;
      /**
       * Type is the type of the condition.
       */
      "type"?: string;
    }>;
    /**
     * Creation timestamp in RFC3339 text format.
     */
    "creationTimestamp"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    "selfLink"?: string;
  };
}

export class ComputeBackendBucket extends Model<IComputeBackendBucket> implements IComputeBackendBucket {
  "apiVersion": IComputeBackendBucket["apiVersion"];
  "kind": IComputeBackendBucket["kind"];
  "metadata"?: IComputeBackendBucket["metadata"];
  "spec": IComputeBackendBucket["spec"];
  "status"?: IComputeBackendBucket["status"];

static apiVersion: IComputeBackendBucket["apiVersion"] = "compute.cnrm.cloud.google.com/v1beta1";
static kind: IComputeBackendBucket["kind"] = "ComputeBackendBucket";
static is = createTypeMetaGuard<IComputeBackendBucket>(ComputeBackendBucket);

constructor(data?: ModelData<IComputeBackendBucket>) {
  super();

  this.setDefinedProps({
    apiVersion: ComputeBackendBucket.apiVersion,
    kind: ComputeBackendBucket.kind,
    ...data
  } as IComputeBackendBucket);
}
}


setValidateFunc(ComputeBackendBucket, validate as ValidateFunc<IComputeBackendBucket>);
