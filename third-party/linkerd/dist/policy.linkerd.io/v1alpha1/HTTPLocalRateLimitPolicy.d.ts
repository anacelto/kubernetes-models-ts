import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IHTTPLocalRateLimitPolicy {
    "spec": {
        /**
         * TargetRef references a resource to which the rate limit policy applies. Only Server is allowed.
         */
        "targetRef": {
            /**
             * Group is the group of the referent. When empty, the Kubernetes core API group is inferred.
             */
            "group"?: string;
            /**
             * Kind is the kind of the referent.
             */
            "kind": string;
            /**
             * Name is the name of the referent.
             */
            "name": string;
        };
        /**
         * Overall rate-limit, which all traffic coming to this target should abide. If unset no overall limit is applied.
         */
        "total"?: {
            "requestsPerSecond": number;
        };
        /**
         * Fairness for individual identities; each separate client, grouped by identity, will have this rate-limit. The requestsPerSecond value should be less than or equal to the total requestsPerSecond (if set).
         */
        "identity"?: {
            "requestsPerSecond": number;
        };
        /**
         * Overrides for traffic from a specific client. The requestsPerSecond value should be less than or equal to the total requestsPerSecond (if set).
         */
        "overrides"?: Array<{
            "requestsPerSecond": number;
            "clientRefs": Array<{
                /**
                 * Group is the group of the referent. When empty, the Kubernetes core API group is inferred.
                 */
                "group"?: string;
                /**
                 * Kind is the kind of the referent.
                 */
                "kind": string;
                /**
                 * Namespace is the namespace of the referent. When unspecified (or empty string), this refers to the local namespace of the Policy.
                 */
                "namespace"?: string;
                /**
                 * Name is the name of the referent.
                 */
                "name": string;
            }>;
        }>;
    };
    "status"?: {
        "conditions"?: Array<{
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another.
             */
            "lastTransitionTime"?: string;
            /**
             * status of the condition (one of True, False, Unknown)
             */
            "status"?: "True" | "False" | "Unknown";
            /**
             * type of the condition in CamelCase or in foo.example.com/CamelCase.
             */
            "type"?: string;
            /**
             * reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
             */
            "reason"?: string;
            /**
             * message is a human readable message indicating details about the transition. This may be an empty string.
             */
            "message"?: string;
        }>;
        "targetRef": {
            "group"?: string;
            "kind"?: string;
            "name": string;
        };
    };
    "apiVersion": "policy.linkerd.io/v1alpha1";
    "kind": "HTTPLocalRateLimitPolicy";
    "metadata"?: IObjectMeta;
}
export declare class HTTPLocalRateLimitPolicy extends Model<IHTTPLocalRateLimitPolicy> implements IHTTPLocalRateLimitPolicy {
    "spec": IHTTPLocalRateLimitPolicy["spec"];
    "status"?: IHTTPLocalRateLimitPolicy["status"];
    "apiVersion": IHTTPLocalRateLimitPolicy["apiVersion"];
    "kind": IHTTPLocalRateLimitPolicy["kind"];
    "metadata"?: IHTTPLocalRateLimitPolicy["metadata"];
    static apiVersion: IHTTPLocalRateLimitPolicy["apiVersion"];
    static kind: IHTTPLocalRateLimitPolicy["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IHTTPLocalRateLimitPolicy>;
    constructor(data?: ModelData<IHTTPLocalRateLimitPolicy>);
}
