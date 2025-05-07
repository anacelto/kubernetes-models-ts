import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * GrafanaNotificationPolicyRoute is the Schema for the grafananotificationpolicyroutes API
 */
export interface IGrafanaNotificationPolicyRoute {
    /**
     * APIVersion defines the versioned schema of this representation of an object.
     * Servers should convert recognized schemas to the latest internal value, and
     * may reject unrecognized values.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "grafana.integreatly.org/v1beta1";
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "GrafanaNotificationPolicyRoute";
    "metadata"?: IObjectMeta;
    /**
     * GrafanaNotificationPolicyRouteSpec defines the desired state of GrafanaNotificationPolicyRoute
     */
    "spec": {
        /**
         * continue
         */
        "continue"?: boolean;
        /**
         * group by
         */
        "group_by"?: Array<string>;
        /**
         * group interval
         */
        "group_interval"?: string;
        /**
         * group wait
         */
        "group_wait"?: string;
        /**
         * match re
         */
        "match_re"?: {
            [key: string]: string;
        };
        /**
         * matchers
         */
        "matchers"?: Array<{
            /**
             * is equal
             */
            "isEqual"?: boolean;
            /**
             * is regex
             */
            "isRegex": boolean;
            /**
             * name
             */
            "name"?: string;
            /**
             * value
             */
            "value": string;
        }>;
        /**
         * mute time intervals
         */
        "mute_time_intervals"?: Array<string>;
        /**
         * object matchers
         */
        "object_matchers"?: Array<Array<string>>;
        /**
         * provenance
         */
        "provenance"?: string;
        /**
         * receiver
         */
        "receiver": string;
        /**
         * repeat interval
         */
        "repeat_interval"?: string;
        /**
         * selects GrafanaNotificationPolicyRoutes to merge in when specified
         * mutually exclusive with Routes
         */
        "routeSelector"?: {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            "matchExpressions"?: Array<{
                /**
                 * key is the label key that the selector applies to.
                 */
                "key": string;
                /**
                 * operator represents a key's relationship to a set of values.
                 * Valid operators are In, NotIn, Exists and DoesNotExist.
                 */
                "operator": string;
                /**
                 * values is an array of string values. If the operator is In or NotIn,
                 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                 * the values array must be empty. This array is replaced during a strategic
                 * merge patch.
                 */
                "values"?: Array<string>;
            }>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            "matchLabels"?: {
                [key: string]: string;
            };
        };
        /**
         * routes, mutually exclusive with RouteSelector
         */
        "routes"?: any;
    };
    /**
     * The most recent observed state of a Grafana resource
     */
    "status"?: {
        /**
         * Results when synchonizing resource with Grafana instances
         */
        "conditions"?: Array<{
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another.
             * This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            "lastTransitionTime": string;
            /**
             * message is a human readable message indicating details about the transition.
             * This may be an empty string.
             */
            "message": string;
            /**
             * observedGeneration represents the .metadata.generation that the condition was set based upon.
             * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
             * with respect to the current state of the instance.
             */
            "observedGeneration"?: number;
            /**
             * reason contains a programmatic identifier indicating the reason for the condition's last transition.
             * Producers of specific condition types may define expected values and meanings for this field,
             * and whether the values are considered a guaranteed API.
             * The value should be a CamelCase string.
             * This field may not be empty.
             */
            "reason": string;
            /**
             * status of the condition, one of True, False, Unknown.
             */
            "status": "True" | "False" | "Unknown";
            /**
             * type of condition in CamelCase or in foo.example.com/CamelCase.
             */
            "type": string;
        }>;
        /**
         * Last time the resource was synchronized with Grafana instances
         */
        "lastResync"?: string;
    };
}
/**
 * GrafanaNotificationPolicyRoute is the Schema for the grafananotificationpolicyroutes API
 */
export declare class GrafanaNotificationPolicyRoute extends Model<IGrafanaNotificationPolicyRoute> implements IGrafanaNotificationPolicyRoute {
    "apiVersion": IGrafanaNotificationPolicyRoute["apiVersion"];
    "kind": IGrafanaNotificationPolicyRoute["kind"];
    "metadata"?: IGrafanaNotificationPolicyRoute["metadata"];
    "spec": IGrafanaNotificationPolicyRoute["spec"];
    "status"?: IGrafanaNotificationPolicyRoute["status"];
    static apiVersion: IGrafanaNotificationPolicyRoute["apiVersion"];
    static kind: IGrafanaNotificationPolicyRoute["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IGrafanaNotificationPolicyRoute>;
    constructor(data?: ModelData<IGrafanaNotificationPolicyRoute>);
}
