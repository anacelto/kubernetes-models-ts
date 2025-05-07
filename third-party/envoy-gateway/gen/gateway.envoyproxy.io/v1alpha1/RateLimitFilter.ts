import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/GatewayEnvoyproxyIoV1alpha1RateLimitFilter";

/**
 * RateLimitFilter allows the user to limit the number of incoming requests to a predefined value based on attributes within the traffic flow.
 */
export interface IRateLimitFilter {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "gateway.envoyproxy.io/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "RateLimitFilter";
  "metadata"?: IObjectMeta;
  /**
   * Spec defines the desired state of RateLimitFilter.
   */
  "spec": {
    /**
     * Global defines global rate limit configuration.
     */
    "global"?: {
      /**
       * Rules are a list of RateLimit selectors and limits. Each rule and its associated limit is applied in a mutually exclusive way i.e. if multiple rules get selected, each of their associated limits get applied, so a single traffic request might increase the rate limit counters for multiple rules if selected.
       */
      "rules": Array<{
        /**
         * ClientSelectors holds the list of select conditions to select specific clients using attributes from the traffic flow. All individual select conditions must hold True for this rule and its limit to be applied. If this field is empty, it is equivalent to True, and the limit is applied.
         */
        "clientSelectors"?: Array<{
          /**
           * Headers is a list of request headers to match. Multiple header values are ANDed together, meaning, a request MUST match all the specified headers.
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
           * SourceCIDR is the client IP Address range to match on.
           */
          "sourceCIDR"?: {
            "type"?: string;
            /**
             * Value is the IP CIDR that represents the range of Source IP Addresses of the client. These could also be the intermediate addresses through which the request has flown through and is part of the  `X-Forwarded-For` header. For example, `192.168.0.1/32`, `192.168.0.0/24`, `001:db8::/64`.
             */
            "value": string;
          };
          /**
           * Deprecated: Use SourceCIDR instead.
           */
          "sourceIP"?: string;
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
     * Type decides the scope for the RateLimits. Valid RateLimitType values are "Global".
     */
    "type": "Global";
  };
}

/**
 * RateLimitFilter allows the user to limit the number of incoming requests to a predefined value based on attributes within the traffic flow.
 */
export class RateLimitFilter extends Model<IRateLimitFilter> implements IRateLimitFilter {
  "apiVersion": IRateLimitFilter["apiVersion"];
  "kind": IRateLimitFilter["kind"];
  "metadata"?: IRateLimitFilter["metadata"];
  "spec": IRateLimitFilter["spec"];

static apiVersion: IRateLimitFilter["apiVersion"] = "gateway.envoyproxy.io/v1alpha1";
static kind: IRateLimitFilter["kind"] = "RateLimitFilter";
static is = createTypeMetaGuard<IRateLimitFilter>(RateLimitFilter);

constructor(data?: ModelData<IRateLimitFilter>) {
  super();

  this.setDefinedProps({
    apiVersion: RateLimitFilter.apiVersion,
    kind: RateLimitFilter.kind,
    ...data
  } as IRateLimitFilter);
}
}


setValidateFunc(RateLimitFilter, validate as ValidateFunc<IRateLimitFilter>);
