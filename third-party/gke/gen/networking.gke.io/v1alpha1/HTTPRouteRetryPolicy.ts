import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/NetworkingGkeIoV1alpha1HTTPRouteRetryPolicy";

/**
 * HTTPRouteRetryPolicy provides a way to apply LoadBalancer policy configuration with the GKE implementation of the Gateway API.
 */
export interface IHTTPRouteRetryPolicy {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "networking.gke.io/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "HTTPRouteRetryPolicy";
  "metadata"?: IObjectMeta;
  /**
   * Spec defines the desired state of HTTPRouteRetryPolicy.
   */
  "spec": {
    /**
     * Default defines default policy configuration for the targeted resource.
     */
    "default"?: {
      /**
       * Specifies the allowed number of retries. This number must be > 0. If not specified, default to 1.
       */
      "numRetries"?: number;
      /**
       * Specifies a non-zero timeout per retry attempt.
       */
      "perTryTimeout"?: {
        /**
         * Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.
         */
        "nanos"?: number;
        /**
         * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min \* 60 min/hr \* 24 hr/day \* 365.25 days/year \* 10000 years
         */
        "seconds"?: number;
      };
      /**
       * Specifies one or more conditions when this retry policy applies. Valid values are:   5xx: Proxy will attempt a retry if the backend instance responds     with any 5xx response code, or if the backend instance does not     respond at all, example: disconnect, reset, read timeout, connection     failure and refused streams. 
       *    gateway-error: Similar to 5xx, but only applies to response codes 502,     503, 504. 
       *    reset: Proxy will attempt a retry if the destination service does not     respond at all (disconnect/reset/read timeout) 
       *    connect-failure: Proxy will retry on failures connecting to destination     for example due to connection timeouts. 
       *    retriable-4xx: Proxy will retry for retriable 4xx response codes.     Currently the only retriable error supported is 409. 
       *    refused-stream: Proxy will retry if the destination resets the stream     with a REFUSED_STREAM error code. This reset type indicates that it     is safe to retry.
       */
      "retryConditions"?: Array<string>;
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
   * Status defines the current state of HTTPRouteRetryPolicy.
   */
  "status"?: {
    /**
     * Conditions describe the current conditions of the HTTPRouteRetryPolicy.
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
 * HTTPRouteRetryPolicy provides a way to apply LoadBalancer policy configuration with the GKE implementation of the Gateway API.
 */
export class HTTPRouteRetryPolicy extends Model<IHTTPRouteRetryPolicy> implements IHTTPRouteRetryPolicy {
  "apiVersion": IHTTPRouteRetryPolicy["apiVersion"];
  "kind": IHTTPRouteRetryPolicy["kind"];
  "metadata"?: IHTTPRouteRetryPolicy["metadata"];
  "spec": IHTTPRouteRetryPolicy["spec"];
  "status"?: IHTTPRouteRetryPolicy["status"];

static apiVersion: IHTTPRouteRetryPolicy["apiVersion"] = "networking.gke.io/v1alpha1";
static kind: IHTTPRouteRetryPolicy["kind"] = "HTTPRouteRetryPolicy";
static is = createTypeMetaGuard<IHTTPRouteRetryPolicy>(HTTPRouteRetryPolicy);

constructor(data?: ModelData<IHTTPRouteRetryPolicy>) {
  super();

  this.setDefinedProps({
    apiVersion: HTTPRouteRetryPolicy.apiVersion,
    kind: HTTPRouteRetryPolicy.kind,
    ...data
  } as IHTTPRouteRetryPolicy);
}
}


setValidateFunc(HTTPRouteRetryPolicy, validate as ValidateFunc<IHTTPRouteRetryPolicy>);
