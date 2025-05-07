import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * LBPolicy provides a way to apply LoadBalancer policy configuration with the GKE implementation of the Gateway API.
 */
export interface ILBPolicy {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "networking.gke.io/v1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "LBPolicy";
    "metadata"?: IObjectMeta;
    /**
     * Spec defines the desired state of LBPolicy.
     */
    "spec": {
        /**
         * Default defines default policy configuration for the targeted resource.
         */
        "default"?: {
            /**
             * ConnectionDraining contains configuration for connection draining
             */
            "connectionDraining"?: {
                /**
                 * DrainingTimeoutSec is a BackendService parameter. It is used during removal of VMs from instance groups. This guarantees that for the specified time all existing connections to a VM will remain untouched, but no new connections will be accepted. Set timeout to zero to disable connection draining. Enable the feature by specifying a timeout of up to one hour. If the field is omitted, a default value (0s) will be used. See https://cloud.google.com/compute/docs/reference/rest/v1/backendServices
                 */
                "drainingTimeoutSec"?: number;
            };
            /**
             * LoggingConfig contains configuration for logging.
             */
            "logging"?: {
                /**
                 * Enabled denotes whether to enable logging for the load balancer traffic served by this backend service. If not specified, this defaults to false, which means logging is disabled by default.
                 */
                "enabled"?: boolean;
                /**
                 * This field can only be specified if logging is enabled for this backend service. The value of the field must be in range [0, 1e6]. This is converted to a floating point value in the range [0, 1] by dividing by 1e6 for use with the GCE api and interpreted as the proportion of requests that will be logged. By default all requests will be logged.
                 */
                "sampleRate"?: number;
            };
            /**
             * SessionAffinityConfig contains configuration for stickiness parameters.
             */
            "sessionAffinity"?: {
                /**
                 * CookieTTLSec specifies the lifetime of cookies in seconds. This setting requires GENERATED_COOKIE or HTTP_COOKIE session affinity. If set to 0, the cookie is non-persistent and lasts only until the end of the browser session (or equivalent). The maximum allowed value is two weeks (1,209,600).
                 */
                "cookieTtlSec"?: number;
                /**
                 * Type specifies the type of session affinity to use. If not specified, this defaults to NONE.
                 */
                "type"?: "CLIENT_IP" | "CLIENT_IP_PORT_PROTO" | "CLIENT_IP_PROTO" | "GENERATED_COOKIE" | "HEADER_FIELD" | "HTTP_COOKIE" | "NONE";
            };
            /**
             * TimeoutSec is a BackendService parameter. See https://cloud.google.com/compute/docs/reference/rest/v1/backendServices. If the field is omitted, a default value (30s) will be used.
             */
            "timeoutSec"?: number;
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
     * Status defines the current state of LBPolicy.
     */
    "status"?: {
        /**
         * Conditions describe the current conditions of the LBPolicy.
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
 * LBPolicy provides a way to apply LoadBalancer policy configuration with the GKE implementation of the Gateway API.
 */
export declare class LBPolicy extends Model<ILBPolicy> implements ILBPolicy {
    "apiVersion": ILBPolicy["apiVersion"];
    "kind": ILBPolicy["kind"];
    "metadata"?: ILBPolicy["metadata"];
    "spec": ILBPolicy["spec"];
    "status"?: ILBPolicy["status"];
    static apiVersion: ILBPolicy["apiVersion"];
    static kind: ILBPolicy["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ILBPolicy>;
    constructor(data?: ModelData<ILBPolicy>);
}
