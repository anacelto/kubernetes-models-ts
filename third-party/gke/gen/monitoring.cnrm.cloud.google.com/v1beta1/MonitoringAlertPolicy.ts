import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/MonitoringCnrmCloudGoogleComV1beta1MonitoringAlertPolicy";

export interface IMonitoringAlertPolicy {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "monitoring.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "MonitoringAlertPolicy";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Control over how this alert policy's notification channels are notified.
     */
    "alertStrategy"?: {
      /**
       * If an alert policy that was active has no data for this long, any open incidents will close.
       */
      "autoClose"?: string;
      /**
       * Control over how the notification channels in 'notification_channels'
       * are notified when this alert fires, on a per-channel basis.
       */
      "notificationChannelStrategy"?: Array<{
        /**
         * The notification channels that these settings apply to. Each of these
         * correspond to the name field in one of the NotificationChannel objects
         * referenced in the notification_channels field of this AlertPolicy. The format is
         * 'projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID]'.
         */
        "notificationChannelNames"?: Array<string>;
        /**
         * The frequency at which to send reminder notifications for open incidents.
         */
        "renotifyInterval"?: string;
      }>;
      /**
       * Required for alert policies with a LogMatch condition.
       * This limit is not implemented for alert policies that are not log-based.
       */
      "notificationRateLimit"?: {
        /**
         * Not more than one notification per period.
         */
        "period"?: string;
      };
    };
    /**
     * How to combine the results of multiple conditions to
     * determine if an incident should be opened. Possible values: ["AND", "OR", "AND_WITH_MATCHING_RESOURCE"].
     */
    "combiner": string;
    /**
     * A list of conditions for the policy. The conditions are combined by
     * AND or OR according to the combiner field. If the combined conditions
     * evaluate to true, then an incident is created. A policy can have from
     * one to six conditions.
     */
    "conditions": Array<{
      /**
       * A condition that checks that a time series
       * continues to receive new data points.
       */
      "conditionAbsent"?: {
        /**
         * Specifies the alignment of data points in
         * individual time series as well as how to
         * combine the retrieved time series together
         * (such as when aggregating multiple streams
         * on each resource to a single stream for each
         * resource or when aggregating streams across
         * all members of a group of resources).
         * Multiple aggregations are applied in the
         * order specified.
         */
        "aggregations"?: Array<{
          /**
           * The alignment period for per-time
           * series alignment. If present,
           * alignmentPeriod must be at least
           * 60 seconds. After per-time series
           * alignment, each time series will
           * contain data points only on the
           * period boundaries. If
           * perSeriesAligner is not specified
           * or equals ALIGN_NONE, then this
           * field is ignored. If
           * perSeriesAligner is specified and
           * does not equal ALIGN_NONE, then
           * this field must be defined;
           * otherwise an error is returned.
           */
          "alignmentPeriod"?: string;
          /**
           * The approach to be used to combine
           * time series. Not all reducer
           * functions may be applied to all
           * time series, depending on the
           * metric type and the value type of
           * the original time series.
           * Reduction may change the metric
           * type of value type of the time
           * series.Time series data must be
           * aligned in order to perform cross-
           * time series reduction. If
           * crossSeriesReducer is specified,
           * then perSeriesAligner must be
           * specified and not equal ALIGN_NONE
           * and alignmentPeriod must be
           * specified; otherwise, an error is
           * returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"].
           */
          "crossSeriesReducer"?: string;
          /**
           * The set of fields to preserve when
           * crossSeriesReducer is specified.
           * The groupByFields determine how
           * the time series are partitioned
           * into subsets prior to applying the
           * aggregation function. Each subset
           * contains time series that have the
           * same value for each of the
           * grouping fields. Each individual
           * time series is a member of exactly
           * one subset. The crossSeriesReducer
           * is applied to each subset of time
           * series. It is not possible to
           * reduce across different resource
           * types, so this field implicitly
           * contains resource.type. Fields not
           * specified in groupByFields are
           * aggregated away. If groupByFields
           * is not specified and all the time
           * series have the same resource
           * type, then the time series are
           * aggregated into a single output
           * time series. If crossSeriesReducer
           * is not defined, this field is
           * ignored.
           */
          "groupByFields"?: Array<string>;
          /**
           * The approach to be used to align
           * individual time series. Not all
           * alignment functions may be applied
           * to all time series, depending on
           * the metric type and value type of
           * the original time series.
           * Alignment may change the metric
           * type or the value type of the time
           * series.Time series data must be
           * aligned in order to perform cross-
           * time series reduction. If
           * crossSeriesReducer is specified,
           * then perSeriesAligner must be
           * specified and not equal ALIGN_NONE
           * and alignmentPeriod must be
           * specified; otherwise, an error is
           * returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"].
           */
          "perSeriesAligner"?: string;
        }>;
        /**
         * The amount of time that a time series must
         * fail to report new data to be considered
         * failing. Currently, only values that are a
         * multiple of a minute--e.g. 60s, 120s, or 300s
         * --are supported.
         */
        "duration": string;
        /**
         * A filter that identifies which time series
         * should be compared with the threshold.The
         * filter is similar to the one that is
         * specified in the
         * MetricService.ListTimeSeries request (that
         * call is useful to verify the time series
         * that will be retrieved / processed) and must
         * specify the metric type and optionally may
         * contain restrictions on resource type,
         * resource labels, and metric labels. This
         * field may not exceed 2048 Unicode characters
         * in length.
         */
        "filter"?: string;
        /**
         * The number/percent of time series for which
         * the comparison must hold in order for the
         * condition to trigger. If unspecified, then
         * the condition will trigger if the comparison
         * is true for any of the time series that have
         * been identified by filter and aggregations.
         */
        "trigger"?: {
          /**
           * The absolute number of time series
           * that must fail the predicate for the
           * condition to be triggered.
           */
          "count"?: number;
          /**
           * The percentage of time series that
           * must fail the predicate for the
           * condition to be triggered.
           */
          "percent"?: number;
        };
      };
      /**
       * A condition that checks for log messages matching given constraints.
       * If set, no other conditions can be present.
       */
      "conditionMatchedLog"?: {
        /**
         * A logs-based filter.
         */
        "filter": string;
        /**
         * A map from a label key to an extractor expression, which is used to
         * extract the value for this label key. Each entry in this map is
         * a specification for how data should be extracted from log entries that
         * match filter. Each combination of extracted values is treated as
         * a separate rule for the purposes of triggering notifications.
         * Label keys and corresponding values can be used in notifications
         * generated by this condition.
         */
        "labelExtractors"?: {
          [key: string]: string;
        };
      };
      /**
       * A Monitoring Query Language query that outputs a boolean stream.
       */
      "conditionMonitoringQueryLanguage"?: {
        /**
         * The amount of time that a time series must
         * violate the threshold to be considered
         * failing. Currently, only values that are a
         * multiple of a minute--e.g., 0, 60, 120, or
         * 300 seconds--are supported. If an invalid
         * value is given, an error will be returned.
         * When choosing a duration, it is useful to
         * keep in mind the frequency of the underlying
         * time series data (which may also be affected
         * by any alignments specified in the
         * aggregations field); a good duration is long
         * enough so that a single outlier does not
         * generate spurious alerts, but short enough
         * that unhealthy states are detected and
         * alerted on quickly.
         */
        "duration": string;
        /**
         * A condition control that determines how
         * metric-threshold conditions are evaluated when
         * data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"].
         */
        "evaluationMissingData"?: string;
        /**
         * Monitoring Query Language query that outputs a boolean stream.
         */
        "query": string;
        /**
         * The number/percent of time series for which
         * the comparison must hold in order for the
         * condition to trigger. If unspecified, then
         * the condition will trigger if the comparison
         * is true for any of the time series that have
         * been identified by filter and aggregations,
         * or by the ratio, if denominator_filter and
         * denominator_aggregations are specified.
         */
        "trigger"?: {
          /**
           * The absolute number of time series
           * that must fail the predicate for the
           * condition to be triggered.
           */
          "count"?: number;
          /**
           * The percentage of time series that
           * must fail the predicate for the
           * condition to be triggered.
           */
          "percent"?: number;
        };
      };
      /**
       * A Monitoring Query Language query that outputs a boolean stream
       * 
       * A condition type that allows alert policies to be defined using
       * Prometheus Query Language (PromQL).
       * 
       * The PrometheusQueryLanguageCondition message contains information
       * from a Prometheus alerting rule and its associated rule group.
       */
      "conditionPrometheusQueryLanguage"?: {
        /**
         * The alerting rule name of this alert in the corresponding Prometheus
         * configuration file.
         * 
         * Some external tools may require this field to be populated correctly
         * in order to refer to the original Prometheus configuration file.
         * The rule group name and the alert name are necessary to update the
         * relevant AlertPolicies in case the definition of the rule group changes
         * in the future.
         * 
         * This field is optional. If this field is not empty, then it must be a
         * valid Prometheus label name.
         */
        "alertRule"?: string;
        /**
         * Alerts are considered firing once their PromQL expression evaluated
         * to be "true" for this long. Alerts whose PromQL expression was not
         * evaluated to be "true" for long enough are considered pending. The
         * default value is zero. Must be zero or positive.
         */
        "duration"?: string;
        /**
         * How often this rule should be evaluated. Must be a positive multiple
         * of 30 seconds or missing. The default value is 30 seconds. If this
         * PrometheusQueryLanguageCondition was generated from a Prometheus
         * alerting rule, then this value should be taken from the enclosing
         * rule group.
         */
        "evaluationInterval"?: string;
        /**
         * Labels to add to or overwrite in the PromQL query result. Label names
         * must be valid.
         * 
         * Label values can be templatized by using variables. The only available
         * variable names are the names of the labels in the PromQL result, including
         * "__name__" and "value". "labels" may be empty. This field is intended to be
         * used for organizing and identifying the AlertPolicy.
         */
        "labels"?: {
          [key: string]: string;
        };
        /**
         * The PromQL expression to evaluate. Every evaluation cycle this
         * expression is evaluated at the current time, and all resultant time
         * series become pending/firing alerts. This field must not be empty.
         */
        "query": string;
        /**
         * The rule group name of this alert in the corresponding Prometheus
         * configuration file.
         * 
         * Some external tools may require this field to be populated correctly
         * in order to refer to the original Prometheus configuration file.
         * The rule group name and the alert name are necessary to update the
         * relevant AlertPolicies in case the definition of the rule group changes
         * in the future.
         * 
         * This field is optional. If this field is not empty, then it must be a
         * valid Prometheus label name.
         */
        "ruleGroup"?: string;
      };
      /**
       * A condition that compares a time series against a
       * threshold.
       */
      "conditionThreshold"?: {
        /**
         * Specifies the alignment of data points in
         * individual time series as well as how to
         * combine the retrieved time series together
         * (such as when aggregating multiple streams
         * on each resource to a single stream for each
         * resource or when aggregating streams across
         * all members of a group of resources).
         * Multiple aggregations are applied in the
         * order specified.This field is similar to the
         * one in the MetricService.ListTimeSeries
         * request. It is advisable to use the
         * ListTimeSeries method when debugging this
         * field.
         */
        "aggregations"?: Array<{
          /**
           * The alignment period for per-time
           * series alignment. If present,
           * alignmentPeriod must be at least
           * 60 seconds. After per-time series
           * alignment, each time series will
           * contain data points only on the
           * period boundaries. If
           * perSeriesAligner is not specified
           * or equals ALIGN_NONE, then this
           * field is ignored. If
           * perSeriesAligner is specified and
           * does not equal ALIGN_NONE, then
           * this field must be defined;
           * otherwise an error is returned.
           */
          "alignmentPeriod"?: string;
          /**
           * The approach to be used to combine
           * time series. Not all reducer
           * functions may be applied to all
           * time series, depending on the
           * metric type and the value type of
           * the original time series.
           * Reduction may change the metric
           * type of value type of the time
           * series.Time series data must be
           * aligned in order to perform cross-
           * time series reduction. If
           * crossSeriesReducer is specified,
           * then perSeriesAligner must be
           * specified and not equal ALIGN_NONE
           * and alignmentPeriod must be
           * specified; otherwise, an error is
           * returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"].
           */
          "crossSeriesReducer"?: string;
          /**
           * The set of fields to preserve when
           * crossSeriesReducer is specified.
           * The groupByFields determine how
           * the time series are partitioned
           * into subsets prior to applying the
           * aggregation function. Each subset
           * contains time series that have the
           * same value for each of the
           * grouping fields. Each individual
           * time series is a member of exactly
           * one subset. The crossSeriesReducer
           * is applied to each subset of time
           * series. It is not possible to
           * reduce across different resource
           * types, so this field implicitly
           * contains resource.type. Fields not
           * specified in groupByFields are
           * aggregated away. If groupByFields
           * is not specified and all the time
           * series have the same resource
           * type, then the time series are
           * aggregated into a single output
           * time series. If crossSeriesReducer
           * is not defined, this field is
           * ignored.
           */
          "groupByFields"?: Array<string>;
          /**
           * The approach to be used to align
           * individual time series. Not all
           * alignment functions may be applied
           * to all time series, depending on
           * the metric type and value type of
           * the original time series.
           * Alignment may change the metric
           * type or the value type of the time
           * series.Time series data must be
           * aligned in order to perform cross-
           * time series reduction. If
           * crossSeriesReducer is specified,
           * then perSeriesAligner must be
           * specified and not equal ALIGN_NONE
           * and alignmentPeriod must be
           * specified; otherwise, an error is
           * returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"].
           */
          "perSeriesAligner"?: string;
        }>;
        /**
         * The comparison to apply between the time
         * series (indicated by filter and aggregation)
         * and the threshold (indicated by
         * threshold_value). The comparison is applied
         * on each time series, with the time series on
         * the left-hand side and the threshold on the
         * right-hand side. Only COMPARISON_LT and
         * COMPARISON_GT are supported currently. Possible values: ["COMPARISON_GT", "COMPARISON_GE", "COMPARISON_LT", "COMPARISON_LE", "COMPARISON_EQ", "COMPARISON_NE"].
         */
        "comparison": string;
        /**
         * Specifies the alignment of data points in
         * individual time series selected by
         * denominatorFilter as well as how to combine
         * the retrieved time series together (such as
         * when aggregating multiple streams on each
         * resource to a single stream for each
         * resource or when aggregating streams across
         * all members of a group of resources).When
         * computing ratios, the aggregations and
         * denominator_aggregations fields must use the
         * same alignment period and produce time
         * series that have the same periodicity and
         * labels.This field is similar to the one in
         * the MetricService.ListTimeSeries request. It
         * is advisable to use the ListTimeSeries
         * method when debugging this field.
         */
        "denominatorAggregations"?: Array<{
          /**
           * The alignment period for per-time
           * series alignment. If present,
           * alignmentPeriod must be at least
           * 60 seconds. After per-time series
           * alignment, each time series will
           * contain data points only on the
           * period boundaries. If
           * perSeriesAligner is not specified
           * or equals ALIGN_NONE, then this
           * field is ignored. If
           * perSeriesAligner is specified and
           * does not equal ALIGN_NONE, then
           * this field must be defined;
           * otherwise an error is returned.
           */
          "alignmentPeriod"?: string;
          /**
           * The approach to be used to combine
           * time series. Not all reducer
           * functions may be applied to all
           * time series, depending on the
           * metric type and the value type of
           * the original time series.
           * Reduction may change the metric
           * type of value type of the time
           * series.Time series data must be
           * aligned in order to perform cross-
           * time series reduction. If
           * crossSeriesReducer is specified,
           * then perSeriesAligner must be
           * specified and not equal ALIGN_NONE
           * and alignmentPeriod must be
           * specified; otherwise, an error is
           * returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"].
           */
          "crossSeriesReducer"?: string;
          /**
           * The set of fields to preserve when
           * crossSeriesReducer is specified.
           * The groupByFields determine how
           * the time series are partitioned
           * into subsets prior to applying the
           * aggregation function. Each subset
           * contains time series that have the
           * same value for each of the
           * grouping fields. Each individual
           * time series is a member of exactly
           * one subset. The crossSeriesReducer
           * is applied to each subset of time
           * series. It is not possible to
           * reduce across different resource
           * types, so this field implicitly
           * contains resource.type. Fields not
           * specified in groupByFields are
           * aggregated away. If groupByFields
           * is not specified and all the time
           * series have the same resource
           * type, then the time series are
           * aggregated into a single output
           * time series. If crossSeriesReducer
           * is not defined, this field is
           * ignored.
           */
          "groupByFields"?: Array<string>;
          /**
           * The approach to be used to align
           * individual time series. Not all
           * alignment functions may be applied
           * to all time series, depending on
           * the metric type and value type of
           * the original time series.
           * Alignment may change the metric
           * type or the value type of the time
           * series.Time series data must be
           * aligned in order to perform cross-
           * time series reduction. If
           * crossSeriesReducer is specified,
           * then perSeriesAligner must be
           * specified and not equal ALIGN_NONE
           * and alignmentPeriod must be
           * specified; otherwise, an error is
           * returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"].
           */
          "perSeriesAligner"?: string;
        }>;
        /**
         * A filter that identifies a time series that
         * should be used as the denominator of a ratio
         * that will be compared with the threshold. If
         * a denominator_filter is specified, the time
         * series specified by the filter field will be
         * used as the numerator.The filter is similar
         * to the one that is specified in the
         * MetricService.ListTimeSeries request (that
         * call is useful to verify the time series
         * that will be retrieved / processed) and must
         * specify the metric type and optionally may
         * contain restrictions on resource type,
         * resource labels, and metric labels. This
         * field may not exceed 2048 Unicode characters
         * in length.
         */
        "denominatorFilter"?: string;
        /**
         * The amount of time that a time series must
         * violate the threshold to be considered
         * failing. Currently, only values that are a
         * multiple of a minute--e.g., 0, 60, 120, or
         * 300 seconds--are supported. If an invalid
         * value is given, an error will be returned.
         * When choosing a duration, it is useful to
         * keep in mind the frequency of the underlying
         * time series data (which may also be affected
         * by any alignments specified in the
         * aggregations field); a good duration is long
         * enough so that a single outlier does not
         * generate spurious alerts, but short enough
         * that unhealthy states are detected and
         * alerted on quickly.
         */
        "duration": string;
        /**
         * A condition control that determines how
         * metric-threshold conditions are evaluated when
         * data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"].
         */
        "evaluationMissingData"?: string;
        /**
         * A filter that identifies which time series
         * should be compared with the threshold.The
         * filter is similar to the one that is
         * specified in the
         * MetricService.ListTimeSeries request (that
         * call is useful to verify the time series
         * that will be retrieved / processed) and must
         * specify the metric type and optionally may
         * contain restrictions on resource type,
         * resource labels, and metric labels. This
         * field may not exceed 2048 Unicode characters
         * in length.
         */
        "filter"?: string;
        /**
         * When this field is present, the 'MetricThreshold'
         * condition forecasts whether the time series is
         * predicted to violate the threshold within the
         * 'forecastHorizon'. When this field is not set, the
         * 'MetricThreshold' tests the current value of the
         * timeseries against the threshold.
         */
        "forecastOptions"?: {
          /**
           * The length of time into the future to forecast
           * whether a timeseries will violate the threshold.
           * If the predicted value is found to violate the
           * threshold, and the violation is observed in all
           * forecasts made for the Configured 'duration',
           * then the timeseries is considered to be failing.
           */
          "forecastHorizon": string;
        };
        /**
         * A value against which to compare the time
         * series.
         */
        "thresholdValue"?: number;
        /**
         * The number/percent of time series for which
         * the comparison must hold in order for the
         * condition to trigger. If unspecified, then
         * the condition will trigger if the comparison
         * is true for any of the time series that have
         * been identified by filter and aggregations,
         * or by the ratio, if denominator_filter and
         * denominator_aggregations are specified.
         */
        "trigger"?: {
          /**
           * The absolute number of time series
           * that must fail the predicate for the
           * condition to be triggered.
           */
          "count"?: number;
          /**
           * The percentage of time series that
           * must fail the predicate for the
           * condition to be triggered.
           */
          "percent"?: number;
        };
      };
      /**
       * A short name or phrase used to identify the
       * condition in dashboards, notifications, and
       * incidents. To avoid confusion, don't use the same
       * display name for multiple conditions in the same
       * policy.
       */
      "displayName": string;
      /**
       * The unique resource name for this condition.
       * Its syntax is:
       * projects/[PROJECT_ID]/alertPolicies/[POLICY_ID]/conditions/[CONDITION_ID]
       * [CONDITION_ID] is assigned by Stackdriver Monitoring when
       * the condition is created as part of a new or updated alerting
       * policy.
       */
      "name"?: string;
    }>;
    /**
     * A short name or phrase used to identify the policy in
     * dashboards, notifications, and incidents. To avoid confusion, don't use
     * the same display name for multiple policies in the same project. The
     * name is limited to 512 Unicode characters.
     */
    "displayName": string;
    /**
     * Documentation that is included with notifications and incidents related
     * to this policy. Best practice is for the documentation to include information
     * to help responders understand, mitigate, escalate, and correct the underlying
     * problems detected by the alerting policy. Notification channels that have
     * limited capacity might not show this documentation.
     */
    "documentation"?: {
      /**
       * The text of the documentation, interpreted according to mimeType.
       * The content may not exceed 8,192 Unicode characters and may not
       * exceed more than 10,240 bytes when encoded in UTF-8 format,
       * whichever is smaller.
       */
      "content"?: string;
      /**
       * The format of the content field. Presently, only the value
       * "text/markdown" is supported.
       */
      "mimeType"?: string;
    };
    /**
     * Whether or not the policy is enabled. The default is true.
     */
    "enabled"?: boolean;
    "notificationChannels"?: Array<{
      /**
       * Allowed value: The `name` field of a `MonitoringNotificationChannel` resource.
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & (Exclude<{
      /**
       * Allowed value: The `name` field of a `MonitoringNotificationChannel` resource.
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * Allowed value: The `name` field of a `MonitoringNotificationChannel` resource.
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }> | Exclude<{
      /**
       * Allowed value: The `name` field of a `MonitoringNotificationChannel` resource.
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * Allowed value: The `name` field of a `MonitoringNotificationChannel` resource.
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & ({
      /**
       * Allowed value: The `name` field of a `MonitoringNotificationChannel` resource.
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } | {
      /**
       * Allowed value: The `name` field of a `MonitoringNotificationChannel` resource.
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace": string;
    })>)>;
    /**
     * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
     */
    "resourceID"?: string;
  };
  "status"?: {
    /**
     * Conditions represent the latest available observation of the resource's current state.
     */
    "conditions"?: Array<{
      /**
       * Last time the condition transitioned from one status to another.
       */
      "lastTransitionTime"?: string;
      /**
       * Human-readable message indicating details about last transition.
       */
      "message"?: string;
      /**
       * Unique, one-word, CamelCase reason for the condition's last transition.
       */
      "reason"?: string;
      /**
       * Status is the status of the condition. Can be True, False, Unknown.
       */
      "status"?: string;
      /**
       * Type is the type of the condition.
       */
      "type"?: string;
    }>;
    /**
     * A read-only record of the creation of the alerting policy.
     * If provided in a call to create or update, this field will
     * be ignored.
     */
    "creationRecord"?: Array<{
      /**
       * When the change occurred.
       */
      "mutateTime"?: string;
      /**
       * The email address of the user making the change.
       */
      "mutatedBy"?: string;
    }>;
    /**
     * The unique resource name for this policy.
     * Its syntax is: projects/[PROJECT_ID]/alertPolicies/[ALERT_POLICY_ID].
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class MonitoringAlertPolicy extends Model<IMonitoringAlertPolicy> implements IMonitoringAlertPolicy {
  "apiVersion": IMonitoringAlertPolicy["apiVersion"];
  "kind": IMonitoringAlertPolicy["kind"];
  "metadata"?: IMonitoringAlertPolicy["metadata"];
  "spec": IMonitoringAlertPolicy["spec"];
  "status"?: IMonitoringAlertPolicy["status"];

static apiVersion: IMonitoringAlertPolicy["apiVersion"] = "monitoring.cnrm.cloud.google.com/v1beta1";
static kind: IMonitoringAlertPolicy["kind"] = "MonitoringAlertPolicy";
static is = createTypeMetaGuard<IMonitoringAlertPolicy>(MonitoringAlertPolicy);

constructor(data?: ModelData<IMonitoringAlertPolicy>) {
  super();

  this.setDefinedProps({
    apiVersion: MonitoringAlertPolicy.apiVersion,
    kind: MonitoringAlertPolicy.kind,
    ...data
  } as IMonitoringAlertPolicy);
}
}


setValidateFunc(MonitoringAlertPolicy, validate as ValidateFunc<IMonitoringAlertPolicy>);
