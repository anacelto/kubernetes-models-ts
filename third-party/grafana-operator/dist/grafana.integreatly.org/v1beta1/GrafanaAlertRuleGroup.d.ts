import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * GrafanaAlertRuleGroup is the Schema for the grafanaalertrulegroups API
 */
export interface IGrafanaAlertRuleGroup {
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
    "kind": "GrafanaAlertRuleGroup";
    "metadata"?: IObjectMeta;
    /**
     * GrafanaAlertRuleGroupSpec defines the desired state of GrafanaAlertRuleGroup
     */
    "spec": {
        /**
         * Allow the Operator to match this resource with Grafanas outside the current namespace
         */
        "allowCrossNamespaceImport"?: boolean;
        /**
         * Whether to enable or disable editing of the alert rule group in Grafana UI
         */
        "editable"?: boolean;
        /**
         * Match GrafanaFolders CRs to infer the uid
         */
        "folderRef"?: string;
        /**
         * UID of the folder containing this rule group
         * Overrides the FolderSelector
         */
        "folderUID"?: string;
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
        "interval": string;
        /**
         * Name of the alert rule group. If not specified, the resource name will be used.
         */
        "name"?: string;
        /**
         * How often the resource is synced, defaults to 10m0s if not set
         */
        "resyncPeriod"?: string;
        "rules": Array<{
            "annotations"?: {
                [key: string]: string;
            };
            "condition": string;
            "data": Array<{
                /**
                 * Grafana data source unique identifier; it should be '__expr__' for a Server Side Expression operation.
                 */
                "datasourceUid"?: string;
                /**
                 * JSON is the raw JSON query and includes the above properties as well as custom properties.
                 */
                "model"?: any;
                /**
                 * QueryType is an optional identifier for the type of query.
                 * It can be used to distinguish different types of queries.
                 */
                "queryType"?: string;
                /**
                 * RefID is the unique identifier of the query, set by the frontend call.
                 */
                "refId"?: string;
                /**
                 * relative time range
                 */
                "relativeTimeRange"?: {
                    /**
                     * from
                     */
                    "from"?: number;
                    /**
                     * to
                     */
                    "to"?: number;
                };
            }>;
            "execErrState": "OK" | "Alerting" | "Error" | "KeepLast";
            "for": string;
            "isPaused"?: boolean;
            "labels"?: {
                [key: string]: string;
            };
            "noDataState": "Alerting" | "NoData" | "OK" | "KeepLast";
            "notificationSettings"?: {
                "group_by"?: Array<string>;
                "group_interval"?: string;
                "group_wait"?: string;
                "mute_time_intervals"?: Array<string>;
                "receiver": string;
                "repeat_interval"?: string;
            };
            "record"?: {
                "from": string;
                "metric": string;
            };
            "title": string;
            /**
             * UID of the alert rule. Can be any string consisting of alphanumeric characters, - and _ with a maximum length of 40
             */
            "uid": string;
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
 * GrafanaAlertRuleGroup is the Schema for the grafanaalertrulegroups API
 */
export declare class GrafanaAlertRuleGroup extends Model<IGrafanaAlertRuleGroup> implements IGrafanaAlertRuleGroup {
    "apiVersion": IGrafanaAlertRuleGroup["apiVersion"];
    "kind": IGrafanaAlertRuleGroup["kind"];
    "metadata"?: IGrafanaAlertRuleGroup["metadata"];
    "spec": IGrafanaAlertRuleGroup["spec"];
    "status"?: IGrafanaAlertRuleGroup["status"];
    static apiVersion: IGrafanaAlertRuleGroup["apiVersion"];
    static kind: IGrafanaAlertRuleGroup["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IGrafanaAlertRuleGroup>;
    constructor(data?: ModelData<IGrafanaAlertRuleGroup>);
}
