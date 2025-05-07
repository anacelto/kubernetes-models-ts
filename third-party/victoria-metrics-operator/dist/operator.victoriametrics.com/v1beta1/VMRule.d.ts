import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * VMRule defines rule records for vmalert application
 */
export interface IVMRule {
    /**
     * APIVersion defines the versioned schema of this representation of an object.
     * Servers should convert recognized schemas to the latest internal value, and
     * may reject unrecognized values.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "operator.victoriametrics.com/v1beta1";
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "VMRule";
    "metadata"?: IObjectMeta;
    /**
     * VMRuleSpec defines the desired state of VMRule
     */
    "spec": {
        /**
         * Groups list of group rules
         */
        "groups": Array<{
            /**
             * Concurrency defines how many rules execute at once.
             */
            "concurrency"?: number;
            /**
             * Optional
             * The evaluation timestamp will be aligned with group's interval,
             * instead of using the actual timestamp that evaluation happens at.
             * It is enabled by default to get more predictable results
             * and to visually align with graphs plotted via Grafana or vmui.
             */
            "eval_alignment"?: boolean;
            /**
             * Optional
             * Adjust the `time` parameter of group evaluation requests to compensate intentional query delay from the datasource.
             */
            "eval_delay"?: string;
            /**
             * Optional
             * Group will be evaluated at the exact offset in the range of [0...interval].
             */
            "eval_offset"?: string;
            /**
             * ExtraFilterLabels optional list of label filters applied to every rule's
             * request within a group. Is compatible only with VM datasource.
             * See more details [here](https://docs.victoriametrics.com/#prometheus-querying-api-enhancements)
             * Deprecated, use params instead
             */
            "extra_filter_labels"?: {
                [key: string]: string;
            };
            /**
             * Headers contains optional HTTP headers added to each rule request
             * Must be in form `header-name: value`
             * For example:
             *  headers:
             *    - "CustomHeader: foo"
             *    - "CustomHeader2: bar"
             */
            "headers"?: Array<string>;
            /**
             * evaluation interval for group
             */
            "interval"?: string;
            /**
             * Labels optional list of labels added to every rule within a group.
             * It has priority over the external labels.
             * Labels are commonly used for adding environment
             * or tenant-specific tag.
             */
            "labels"?: {
                [key: string]: string;
            };
            /**
             * Limit the number of alerts an alerting rule and series a recording
             * rule can produce
             */
            "limit"?: number;
            /**
             * Name of group
             */
            "name": string;
            /**
             * NotifierHeaders contains optional HTTP headers added to each alert request which will send to notifier
             * Must be in form `header-name: value`
             * For example:
             *  headers:
             *    - "CustomHeader: foo"
             *    - "CustomHeader2: bar"
             */
            "notifier_headers"?: Array<string>;
            /**
             * Params optional HTTP URL parameters added to each rule request
             */
            "params"?: {
                [key: string]: Array<string>;
            };
            /**
             * Rules list of alert rules
             */
            "rules": Array<{
                /**
                 * Alert is a name for alert
                 */
                "alert"?: string;
                /**
                 * Annotations will be added to rule configuration
                 */
                "annotations"?: {
                    [key: string]: string;
                };
                /**
                 * Debug enables logging for rule
                 * it useful for tracking
                 */
                "debug"?: boolean;
                /**
                 * Expr is query, that will be evaluated at dataSource
                 */
                "expr"?: string;
                /**
                 * For evaluation interval in time.Duration format
                 * 30s, 1m, 1h  or nanoseconds
                 */
                "for"?: string;
                /**
                 * KeepFiringFor will make alert continue firing for this long
                 * even when the alerting expression no longer has results.
                 * Use time.Duration format, 30s, 1m, 1h  or nanoseconds
                 */
                "keep_firing_for"?: string;
                /**
                 * Labels will be added to rule configuration
                 */
                "labels"?: {
                    [key: string]: string;
                };
                /**
                 * Record represents a query, that will be recorded to dataSource
                 */
                "record"?: string;
                /**
                 * UpdateEntriesLimit defines max number of rule's state updates stored in memory.
                 * Overrides `-rule.updateEntriesLimit` in vmalert.
                 */
                "update_entries_limit"?: number;
            }>;
            /**
             * Tenant id for group, can be used only with enterprise version of vmalert.
             * See more details [here](https://docs.victoriametrics.com/vmalert#multitenancy).
             */
            "tenant"?: string;
            /**
             * Type defines datasource type for enterprise version of vmalert
             * possible values - prometheus,graphite,vlogs
             */
            "type"?: string;
        }>;
    };
    /**
     * VMRuleStatus defines the observed state of VMRule
     */
    "status"?: {
        /**
         * LastSyncError contains error message for unsuccessful config generation
         */
        "lastSyncError"?: string;
        /**
         * Status defines CRD processing status
         */
        "status"?: string;
    };
}
/**
 * VMRule defines rule records for vmalert application
 */
export declare class VMRule extends Model<IVMRule> implements IVMRule {
    "apiVersion": IVMRule["apiVersion"];
    "kind": IVMRule["kind"];
    "metadata"?: IVMRule["metadata"];
    "spec": IVMRule["spec"];
    "status"?: IVMRule["status"];
    static apiVersion: IVMRule["apiVersion"];
    static kind: IVMRule["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IVMRule>;
    constructor(data?: ModelData<IVMRule>);
}
