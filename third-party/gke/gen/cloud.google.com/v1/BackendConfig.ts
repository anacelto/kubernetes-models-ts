import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CloudGoogleComV1BackendConfig";

export interface IBackendConfig {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "cloud.google.com/v1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "BackendConfig";
  "metadata"?: IObjectMeta;
  /**
   * BackendConfigSpec is the spec for a BackendConfig resource
   */
  "spec"?: {
    /**
     * CDNConfig contains configuration for CDN-enabled backends.
     */
    "cdn"?: {
      "bypassCacheOnRequestHeaders"?: Array<{
        /**
         * The header field name to match on when bypassing cache. Values are case-insensitive.
         */
        "headerName"?: string;
      }>;
      "cacheMode"?: string;
      /**
       * CacheKeyPolicy contains configuration for how requests to a CDN-enabled backend are cached.
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
         * If true, query string parameters are included in the cache key according to QueryStringBlacklist and QueryStringWhitelist. If neither is set, the entire query string is included and if false the entire query string is excluded.
         */
        "includeQueryString"?: boolean;
        /**
         * Names of query strint parameters to exclude from cache keys. All other parameters are included. Either specify QueryStringBlacklist or QueryStringWhitelist, but not both.
         */
        "queryStringBlacklist"?: Array<string>;
        /**
         * Names of query string parameters to include in cache keys. All other parameters are excluded. Either specify QueryStringBlacklist or QueryStringWhitelist, but not both.
         */
        "queryStringWhitelist"?: Array<string>;
      };
      "clientTtl"?: number;
      "defaultTtl"?: number;
      "enabled": boolean;
      "maxTtl"?: number;
      "negativeCaching"?: boolean;
      "negativeCachingPolicy"?: Array<{
        /**
         * The HTTP status code to define a TTL against. Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501 are can be specified as values, and you cannot specify a status code more than once.
         */
        "code"?: number;
        /**
         * The TTL (in seconds) for which to cache responses with the corresponding status code. The maximum allowed value is 1800s (30 minutes), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.
         */
        "ttl"?: number;
      }>;
      "requestCoalescing"?: boolean;
      "serveWhileStale"?: number;
      "signedUrlCacheMaxAgeSec"?: number;
      "signedUrlKeys"?: Array<{
        /**
         * KeyName: Name of the key. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]\*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
         */
        "keyName"?: string;
        /**
         * KeyValue: 128-bit key value used for signing the URL. The key value must be a valid RFC 4648 Section 5 base64url encoded string.
         */
        "keyValue"?: string;
        /**
         * The name of a k8s secret which stores the 128-bit key value used for signing the URL. The key value must be a valid RFC 4648 Section 5 base64url encoded string
         */
        "secretName"?: string;
      }>;
    };
    /**
     * ConnectionDrainingConfig contains configuration for connection draining. For now the draining timeout. May manage more settings in the future.
     */
    "connectionDraining"?: {
      /**
       * Draining timeout in seconds.
       */
      "drainingTimeoutSec"?: number;
    };
    /**
     * CustomRequestHeadersConfig contains configuration for custom request headers
     */
    "customRequestHeaders"?: {
      "headers"?: Array<string>;
    };
    /**
     * HealthCheckConfig contains configuration for the health check.
     */
    "healthCheck"?: {
      /**
       * CheckIntervalSec is a health check parameter. See https://cloud.google.com/compute/docs/reference/rest/v1/healthChecks.
       */
      "checkIntervalSec"?: number;
      /**
       * HealthyThreshold is a health check parameter. See https://cloud.google.com/compute/docs/reference/rest/v1/healthChecks.
       */
      "healthyThreshold"?: number;
      /**
       * Port is a health check parameter. See https://cloud.google.com/compute/docs/reference/rest/v1/healthChecks. If Port is used, the controller updates portSpecification as well
       */
      "port"?: number;
      /**
       * RequestPath is a health check parameter. See https://cloud.google.com/compute/docs/reference/rest/v1/healthChecks.
       */
      "requestPath"?: string;
      /**
       * TimeoutSec is a health check parameter. See https://cloud.google.com/compute/docs/reference/rest/v1/healthChecks.
       */
      "timeoutSec"?: number;
      /**
       * Type is a health check parameter. See https://cloud.google.com/compute/docs/reference/rest/v1/healthChecks.
       */
      "type"?: string;
      /**
       * UnhealthyThreshold is a health check parameter. See https://cloud.google.com/compute/docs/reference/rest/v1/healthChecks.
       */
      "unhealthyThreshold"?: number;
    };
    /**
     * IAPConfig contains configuration for IAP-enabled backends.
     */
    "iap"?: {
      "enabled": boolean;
      /**
       * OAuthClientCredentials contains credentials for a single IAP-enabled backend.
       */
      "oauthclientCredentials": {
        /**
         * Direct reference to OAuth client id.
         */
        "clientID"?: string;
        /**
         * Direct reference to OAuth client secret.
         */
        "clientSecret"?: string;
        /**
         * The name of a k8s secret which stores the OAuth client id & secret.
         */
        "secretName": string;
      };
    };
    /**
     * LogConfig contains configuration for logging.
     */
    "logging"?: {
      /**
       * This field denotes whether to enable logging for the load balancer traffic served by this backend service.
       */
      "enable"?: boolean;
      /**
       * This field can only be specified if logging is enabled for this backend service. The value of the field must be in [0, 1]. This configures the sampling rate of requests to the load balancer where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported. The default value is 1.0.
       */
      "sampleRate"?: number;
    };
    /**
     * SecurityPolicyConfig contains configuration for CloudArmor-enabled backends. If not specified, the controller will not reconcile the security policy configuration. In other words, users can make changes in GCE without the controller overwriting them.
     */
    "securityPolicy"?: {
      /**
       * Name of the security policy that should be associated. If set to empty, the existing security policy on the backend will be removed.
       */
      "name": string;
    };
    /**
     * SessionAffinityConfig contains configuration for stickyness parameters.
     */
    "sessionAffinity"?: {
      "affinityCookieTtlSec"?: number;
      "affinityType"?: string;
    };
    "timeoutSec"?: number;
  };
  "status"?: {
  };
}

export class BackendConfig extends Model<IBackendConfig> implements IBackendConfig {
  "apiVersion": IBackendConfig["apiVersion"];
  "kind": IBackendConfig["kind"];
  "metadata"?: IBackendConfig["metadata"];
  "spec"?: IBackendConfig["spec"];
  "status"?: IBackendConfig["status"];

static apiVersion: IBackendConfig["apiVersion"] = "cloud.google.com/v1";
static kind: IBackendConfig["kind"] = "BackendConfig";
static is = createTypeMetaGuard<IBackendConfig>(BackendConfig);

constructor(data?: ModelData<IBackendConfig>) {
  super();

  this.setDefinedProps({
    apiVersion: BackendConfig.apiVersion,
    kind: BackendConfig.kind,
    ...data
  } as IBackendConfig);
}
}


setValidateFunc(BackendConfig, validate as ValidateFunc<IBackendConfig>);
