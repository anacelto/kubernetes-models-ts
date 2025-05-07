import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * GrafanaMuteTiming is the Schema for the GrafanaMuteTiming API
 */
export interface IGrafanaMuteTiming {
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
    "kind": "GrafanaMuteTiming";
    "metadata"?: IObjectMeta;
    /**
     * GrafanaMuteTimingSpec defines the desired state of GrafanaMuteTiming
     */
    "spec": {
        /**
         * Allow the Operator to match this resource with Grafanas outside the current namespace
         */
        "allowCrossNamespaceImport"?: boolean;
        /**
         * Whether to enable or disable editing of the mute timing in Grafana UI
         */
        "editable"?: boolean;
        /**
         * Selects Grafana instances for import
         */
        "instanceSelector": {
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
         * A unique name for the mute timing
         */
        "name": string;
        /**
         * How often the resource is synced, defaults to 10m0s if not set
         */
        "resyncPeriod"?: string;
        /**
         * Time intervals for muting
         */
        "time_intervals": Array<{
            /**
             * The date 1-31 of a month. Negative values can also be used to represent days that begin at the end of the month.
             * For example: -1 for the last day of the month.
             */
            "days_of_month"?: Array<string>;
            /**
             * Depending on the location, the time range is displayed in local time.
             */
            "location"?: string;
            /**
             * The months of the year in either numerical or the full calendar month.
             * For example: 1, may.
             */
            "months"?: Array<string>;
            /**
             * The time inclusive of the start and exclusive of the end time (in UTC if no location has been selected, otherwise local time).
             */
            "times"?: Array<{
                /**
                 * end time
                 */
                "end_time": string;
                /**
                 * start time
                 */
                "start_time": string;
            }>;
            /**
             * The day or range of days of the week.
             * For example: monday, thursday
             */
            "weekdays"?: Array<string>;
            /**
             * The year or years for the interval.
             * For example: 2021
             */
            "years"?: Array<string>;
        }>;
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
 * GrafanaMuteTiming is the Schema for the GrafanaMuteTiming API
 */
export declare class GrafanaMuteTiming extends Model<IGrafanaMuteTiming> implements IGrafanaMuteTiming {
    "apiVersion": IGrafanaMuteTiming["apiVersion"];
    "kind": IGrafanaMuteTiming["kind"];
    "metadata"?: IGrafanaMuteTiming["metadata"];
    "spec": IGrafanaMuteTiming["spec"];
    "status"?: IGrafanaMuteTiming["status"];
    static apiVersion: IGrafanaMuteTiming["apiVersion"];
    static kind: IGrafanaMuteTiming["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IGrafanaMuteTiming>;
    constructor(data?: ModelData<IGrafanaMuteTiming>);
}
