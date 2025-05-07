import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IBackendConfig {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "cloud.google.com/v1beta1";
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
            "enabled": boolean;
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
    "status"?: {};
}
export declare class BackendConfig extends Model<IBackendConfig> implements IBackendConfig {
    "apiVersion": IBackendConfig["apiVersion"];
    "kind": IBackendConfig["kind"];
    "metadata"?: IBackendConfig["metadata"];
    "spec"?: IBackendConfig["spec"];
    "status"?: IBackendConfig["status"];
    static apiVersion: IBackendConfig["apiVersion"];
    static kind: IBackendConfig["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IBackendConfig>;
    constructor(data?: ModelData<IBackendConfig>);
}
