import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * OutlierDetectionPolicy provides a way to apply LoadBalancer policy configuration with the GKE implementation of the Gateway API.
 */
export interface IOutlierDetectionPolicy {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "networking.gke.io/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "OutlierDetectionPolicy";
    "metadata"?: IObjectMeta;
    /**
     * Spec defines the desired state of OutlierDetectionPolicy.
     */
    "spec": {
        /**
         * Default defines default policy configuration for the targeted resource.
         */
        "default"?: {
            /**
             * The base time that a host is ejected for. The real ejection time is equal to the base ejection time multiplied by the number of times the host has been ejected. Defaults to 30000ms or 30s.
             */
            "baseEjectionTime"?: {
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
             * Number of errors before a host is ejected from the connection pool. When the backend host is accessed over HTTP, a 5xx return code qualifies as an error. Defaults to 5.
             */
            "consecutiveErrors"?: number;
            /**
             * The number of consecutive gateway failures (502, 503, 504 status or connection errors that are mapped to one of those status codes) before a consecutive gateway failure ejection occurs. Defaults to 3.
             */
            "consecutiveGatewayFailure"?: number;
            /**
             * The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive 5xx. This setting can be used to disable ejection or to ramp it up slowly. Defaults to 0.
             */
            "enforcingConsecutiveErrors"?: number;
            /**
             * The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive gateway failures. This setting can be used to disable ejection or to ramp it up slowly. Defaults to 100.
             */
            "enforcingConsecutiveGatewayFailure"?: number;
            /**
             * The percentage chance that a host will be actually ejected when an outlier status is detected through success rate statistics. This setting can be used to disable ejection or to ramp it up slowly. Defaults to 100.
             */
            "enforcingSuccessRate"?: number;
            /**
             * Time interval between ejection analysis sweeps. This can result in both new ejections as well as hosts being returned to service. Defaults to 1 second.
             */
            "interval"?: {
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
             * Maximum percentage of hosts in the load balancing pool for the backend service that can be ejected. Defaults to 50%.
             */
            "maxEjectionPercent"?: number;
            /**
             * The number of hosts in a cluster that must have enough request volume to detect success rate outliers. If the number of hosts is less than this setting, outlier detection via success rate statistics is not performed for any host in the cluster. Defaults to 5.
             */
            "successRateMinimumHosts"?: number;
            /**
             * The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to include this host in success rate based outlier detection. If the volume is lower than this setting, outlier detection via success rate statistics is not performed for that host. Defaults to 100.
             */
            "successRateRequestVolume"?: number;
            /**
             * This factor is used to determine the ejection threshold for success rate outlier ejection. The ejection threshold is the difference between the mean success rate, and the product of this factor and the standard deviation of the mean success rate: mean - (stdev \* successRateStdevFactor). This factor is divided by a thousand to get a double. That is, if the desired factor is 1.9, the runtime value should be 1900. Defaults to 1900.
             */
            "successRateStdevFactor"?: number;
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
     * Status defines the current state of OutlierDetectionPolicy.
     */
    "status"?: {
        /**
         * Conditions describe the current conditions of the OutlierDetectionPolicy.
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
 * OutlierDetectionPolicy provides a way to apply LoadBalancer policy configuration with the GKE implementation of the Gateway API.
 */
export declare class OutlierDetectionPolicy extends Model<IOutlierDetectionPolicy> implements IOutlierDetectionPolicy {
    "apiVersion": IOutlierDetectionPolicy["apiVersion"];
    "kind": IOutlierDetectionPolicy["kind"];
    "metadata"?: IOutlierDetectionPolicy["metadata"];
    "spec": IOutlierDetectionPolicy["spec"];
    "status"?: IOutlierDetectionPolicy["status"];
    static apiVersion: IOutlierDetectionPolicy["apiVersion"];
    static kind: IOutlierDetectionPolicy["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IOutlierDetectionPolicy>;
    constructor(data?: ModelData<IOutlierDetectionPolicy>);
}
