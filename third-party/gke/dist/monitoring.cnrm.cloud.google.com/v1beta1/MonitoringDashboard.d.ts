import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IMonitoringDashboard {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "monitoring.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "MonitoringDashboard";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * The content is divided into equally spaced columns and the widgets are arranged vertically.
         */
        "columnLayout"?: {
            /**
             * The columns of content to display.
             */
            "columns"?: Array<{
                /**
                 * The relative weight of this column. The column weight is used to adjust the width of columns on the screen (relative to peers). Greater the weight, greater the width of the column on the screen. If omitted, a value of 1 is used while rendering.
                 */
                "weight"?: number;
                /**
                 * The display widgets arranged vertically in this column.
                 */
                "widgets"?: Array<{
                    /**
                     * A blank space.
                     */
                    "blank"?: {};
                    "logsPanel"?: {
                        /**
                         * A filter that chooses which log entries to return. See [Advanced Logs Queries](https://cloud.google.com/logging/docs/view/advanced-queries). Only log entries that match the filter are returned. An empty filter matches all log entries.
                         */
                        "filter"?: string;
                        "resourceNames"?: Array<{
                            /**
                             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                    };
                    /**
                     * A scorecard summarizing time series data.
                     */
                    "scorecard"?: {
                        /**
                         * Will cause the scorecard to show a gauge chart.
                         */
                        "gaugeView"?: {
                            /**
                             * The lower bound for this gauge chart. The value of the chart should always be greater than or equal to this.
                             */
                            "lowerBound"?: number;
                            /**
                             * The upper bound for this gauge chart. The value of the chart should always be less than or equal to this.
                             */
                            "upperBound"?: number;
                        };
                        /**
                         * Will cause the scorecard to show a spark chart.
                         */
                        "sparkChartView"?: {
                            /**
                             * The lower bound on data point frequency in the chart implemented by specifying the minimum alignment period to use in a time series query. For example, if the data is published once every 10 minutes it would not make sense to fetch and align data at one minute intervals. This field is optional and exists only as a hint.
                             */
                            "minAlignmentPeriod"?: string;
                            /**
                             * Required. The type of sparkchart to show in this chartView. Possible values: SPARK_CHART_TYPE_UNSPECIFIED, SPARK_LINE, SPARK_BAR
                             */
                            "sparkChartType": string;
                        };
                        /**
                         * The thresholds used to determine the state of the scorecard given the time series' current value. For an actual value x, the scorecard is in a danger state if x is less than or equal to a danger threshold that triggers below, or greater than or equal to a danger threshold that triggers above. Similarly, if x is above/below a warning threshold that triggers above/below, then the scorecard is in a warning state - unless x also puts it in a danger state. (Danger trumps warning.)  As an example, consider a scorecard with the following four thresholds: {   value: 90,   category: 'DANGER',   trigger: 'ABOVE', },: {   value: 70,   category: 'WARNING',   trigger: 'ABOVE', }, {   value: 10,   category: 'DANGER',   trigger: 'BELOW', }, {   value: 20,   category: 'WARNING',   trigger: 'BELOW', }  Then: values less than or equal to 10 would put the scorecard in a DANGER state, values greater than 10 but less than or equal to 20 a WARNING state, values strictly between 20 and 70 an OK state, values greater than or equal to 70 but less than 90 a WARNING state, and values greater than or equal to 90 a DANGER state.
                         */
                        "thresholds"?: Array<{
                            /**
                             * The state color for this threshold. Color is not allowed in a XyChart. Possible values: COLOR_UNSPECIFIED, GREY, BLUE, GREEN, YELLOW, ORANGE, RED
                             */
                            "color"?: string;
                            /**
                             * The direction for the current threshold. Direction is not allowed in a XyChart. Possible values: DIRECTION_UNSPECIFIED, ABOVE, BELOW
                             */
                            "direction"?: string;
                            /**
                             * A label for the threshold.
                             */
                            "label"?: string;
                            /**
                             * The value of the threshold. The value should be defined in the native scale of the metric.
                             */
                            "value"?: number;
                        }>;
                        /**
                         * Required. Fields for querying time series data from the Stackdriver metrics API.
                         */
                        "timeSeriesQuery": {
                            /**
                             * Filter parameters to fetch time series.
                             */
                            "timeSeriesFilter"?: {
                                /**
                                 * By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.
                                 */
                                "aggregation"?: {
                                    /**
                                     * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                     */
                                    "alignmentPeriod"?: string;
                                    /**
                                     * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                     */
                                    "crossSeriesReducer"?: string;
                                    /**
                                     * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                     */
                                    "groupByFields"?: Array<string>;
                                    /**
                                     * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                     */
                                    "perSeriesAligner"?: string;
                                };
                                /**
                                 * Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query.
                                 */
                                "filter": string;
                                /**
                                 * Ranking based time series filter.
                                 */
                                "pickTimeSeriesFilter"?: {
                                    /**
                                     * How to use the ranking to select time series that pass through the filter. Possible values: DIRECTION_UNSPECIFIED, TOP, BOTTOM
                                     */
                                    "direction"?: string;
                                    /**
                                     * How many time series to allow to pass through the filter.
                                     */
                                    "numTimeSeries"?: number;
                                    /**
                                     * `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. Possible values: METHOD_UNSPECIFIED, METHOD_MEAN, METHOD_MAX, METHOD_MIN, METHOD_SUM, METHOD_LATEST
                                     */
                                    "rankingMethod"?: string;
                                };
                                /**
                                 * Apply a second aggregation after `aggregation` is applied.
                                 */
                                "secondaryAggregation"?: {
                                    /**
                                     * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                     */
                                    "alignmentPeriod"?: string;
                                    /**
                                     * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                     */
                                    "crossSeriesReducer"?: string;
                                    /**
                                     * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                     */
                                    "groupByFields"?: Array<string>;
                                    /**
                                     * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                     */
                                    "perSeriesAligner"?: string;
                                };
                            };
                            /**
                             * Parameters to fetch a ratio between two time series filters.
                             */
                            "timeSeriesFilterRatio"?: {
                                /**
                                 * The denominator of the ratio.
                                 */
                                "denominator"?: {
                                    /**
                                     * By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.
                                     */
                                    "aggregation"?: {
                                        /**
                                         * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                         */
                                        "alignmentPeriod"?: string;
                                        /**
                                         * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                         */
                                        "crossSeriesReducer"?: string;
                                        /**
                                         * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                         */
                                        "groupByFields"?: Array<string>;
                                        /**
                                         * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                         */
                                        "perSeriesAligner"?: string;
                                    };
                                    /**
                                     * Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query.
                                     */
                                    "filter": string;
                                };
                                /**
                                 * The numerator of the ratio.
                                 */
                                "numerator"?: {
                                    /**
                                     * By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.
                                     */
                                    "aggregation"?: {
                                        /**
                                         * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                         */
                                        "alignmentPeriod"?: string;
                                        /**
                                         * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                         */
                                        "crossSeriesReducer"?: string;
                                        /**
                                         * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                         */
                                        "groupByFields"?: Array<string>;
                                        /**
                                         * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                         */
                                        "perSeriesAligner"?: string;
                                    };
                                    /**
                                     * Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query.
                                     */
                                    "filter": string;
                                };
                                /**
                                 * Ranking based time series filter.
                                 */
                                "pickTimeSeriesFilter"?: {
                                    /**
                                     * How to use the ranking to select time series that pass through the filter. Possible values: DIRECTION_UNSPECIFIED, TOP, BOTTOM
                                     */
                                    "direction"?: string;
                                    /**
                                     * How many time series to allow to pass through the filter.
                                     */
                                    "numTimeSeries"?: number;
                                    /**
                                     * `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. Possible values: METHOD_UNSPECIFIED, METHOD_MEAN, METHOD_MAX, METHOD_MIN, METHOD_SUM, METHOD_LATEST
                                     */
                                    "rankingMethod"?: string;
                                };
                                /**
                                 * Apply a second aggregation after the ratio is computed.
                                 */
                                "secondaryAggregation"?: {
                                    /**
                                     * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                     */
                                    "alignmentPeriod"?: string;
                                    /**
                                     * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                     */
                                    "crossSeriesReducer"?: string;
                                    /**
                                     * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                     */
                                    "groupByFields"?: Array<string>;
                                    /**
                                     * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                     */
                                    "perSeriesAligner"?: string;
                                };
                            };
                            /**
                             * A query used to fetch time series.
                             */
                            "timeSeriesQueryLanguage"?: string;
                            /**
                             * The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`.
                             */
                            "unitOverride"?: string;
                        };
                    };
                    /**
                     * A raw string or markdown displaying textual content.
                     */
                    "text"?: {
                        /**
                         * The text content to be displayed.
                         */
                        "content"?: string;
                        /**
                         * How the text content is formatted. Possible values: FORMAT_UNSPECIFIED, MARKDOWN, RAW
                         */
                        "format"?: string;
                    };
                    /**
                     * Optional. The title of the widget.
                     */
                    "title"?: string;
                    /**
                     * A chart of time series data.
                     */
                    "xyChart"?: {
                        /**
                         * Display options for the chart.
                         */
                        "chartOptions"?: {
                            /**
                             * The chart mode. Possible values: MODE_UNSPECIFIED, COLOR, X_RAY, STATS
                             */
                            "mode"?: string;
                        };
                        /**
                         * Required. The data displayed in this chart.
                         */
                        "dataSets": Array<{
                            /**
                             * A template string for naming `TimeSeries` in the resulting data set. This should be a string with interpolations of the form `${label_name}`, which will resolve to the label's value.
                             */
                            "legendTemplate"?: string;
                            /**
                             * Optional. The lower bound on data point frequency for this data set, implemented by specifying the minimum alignment period to use in a time series query For example, if the data is published once every 10 minutes, the `min_alignment_period` should be at least 10 minutes. It would not make sense to fetch and align data at one minute intervals.
                             */
                            "minAlignmentPeriod"?: string;
                            /**
                             * How this data should be plotted on the chart. Possible values: PLOT_TYPE_UNSPECIFIED, LINE, STACKED_AREA, STACKED_BAR, HEATMAP
                             */
                            "plotType"?: string;
                            /**
                             * Required. Fields for querying time series data from the Stackdriver metrics API.
                             */
                            "timeSeriesQuery": {
                                /**
                                 * Filter parameters to fetch time series.
                                 */
                                "timeSeriesFilter"?: {
                                    /**
                                     * By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.
                                     */
                                    "aggregation"?: {
                                        /**
                                         * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                         */
                                        "alignmentPeriod"?: string;
                                        /**
                                         * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                         */
                                        "crossSeriesReducer"?: string;
                                        /**
                                         * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                         */
                                        "groupByFields"?: Array<string>;
                                        /**
                                         * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                         */
                                        "perSeriesAligner"?: string;
                                    };
                                    /**
                                     * Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query.
                                     */
                                    "filter": string;
                                    /**
                                     * Ranking based time series filter.
                                     */
                                    "pickTimeSeriesFilter"?: {
                                        /**
                                         * How to use the ranking to select time series that pass through the filter. Possible values: DIRECTION_UNSPECIFIED, TOP, BOTTOM
                                         */
                                        "direction"?: string;
                                        /**
                                         * How many time series to allow to pass through the filter.
                                         */
                                        "numTimeSeries"?: number;
                                        /**
                                         * `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. Possible values: METHOD_UNSPECIFIED, METHOD_MEAN, METHOD_MAX, METHOD_MIN, METHOD_SUM, METHOD_LATEST
                                         */
                                        "rankingMethod"?: string;
                                    };
                                    /**
                                     * Apply a second aggregation after `aggregation` is applied.
                                     */
                                    "secondaryAggregation"?: {
                                        /**
                                         * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                         */
                                        "alignmentPeriod"?: string;
                                        /**
                                         * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                         */
                                        "crossSeriesReducer"?: string;
                                        /**
                                         * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                         */
                                        "groupByFields"?: Array<string>;
                                        /**
                                         * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                         */
                                        "perSeriesAligner"?: string;
                                    };
                                };
                                /**
                                 * Parameters to fetch a ratio between two time series filters.
                                 */
                                "timeSeriesFilterRatio"?: {
                                    /**
                                     * The denominator of the ratio.
                                     */
                                    "denominator"?: {
                                        /**
                                         * By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.
                                         */
                                        "aggregation"?: {
                                            /**
                                             * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                             */
                                            "alignmentPeriod"?: string;
                                            /**
                                             * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                             */
                                            "crossSeriesReducer"?: string;
                                            /**
                                             * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                             */
                                            "groupByFields"?: Array<string>;
                                            /**
                                             * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                             */
                                            "perSeriesAligner"?: string;
                                        };
                                        /**
                                         * Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query.
                                         */
                                        "filter": string;
                                    };
                                    /**
                                     * The numerator of the ratio.
                                     */
                                    "numerator"?: {
                                        /**
                                         * By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.
                                         */
                                        "aggregation"?: {
                                            /**
                                             * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                             */
                                            "alignmentPeriod"?: string;
                                            /**
                                             * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                             */
                                            "crossSeriesReducer"?: string;
                                            /**
                                             * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                             */
                                            "groupByFields"?: Array<string>;
                                            /**
                                             * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                             */
                                            "perSeriesAligner"?: string;
                                        };
                                        /**
                                         * Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query.
                                         */
                                        "filter": string;
                                    };
                                    /**
                                     * Ranking based time series filter.
                                     */
                                    "pickTimeSeriesFilter"?: {
                                        /**
                                         * How to use the ranking to select time series that pass through the filter. Possible values: DIRECTION_UNSPECIFIED, TOP, BOTTOM
                                         */
                                        "direction"?: string;
                                        /**
                                         * How many time series to allow to pass through the filter.
                                         */
                                        "numTimeSeries"?: number;
                                        /**
                                         * `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. Possible values: METHOD_UNSPECIFIED, METHOD_MEAN, METHOD_MAX, METHOD_MIN, METHOD_SUM, METHOD_LATEST
                                         */
                                        "rankingMethod"?: string;
                                    };
                                    /**
                                     * Apply a second aggregation after the ratio is computed.
                                     */
                                    "secondaryAggregation"?: {
                                        /**
                                         * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                         */
                                        "alignmentPeriod"?: string;
                                        /**
                                         * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                         */
                                        "crossSeriesReducer"?: string;
                                        /**
                                         * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                         */
                                        "groupByFields"?: Array<string>;
                                        /**
                                         * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                         */
                                        "perSeriesAligner"?: string;
                                    };
                                };
                                /**
                                 * A query used to fetch time series.
                                 */
                                "timeSeriesQueryLanguage"?: string;
                                /**
                                 * The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`.
                                 */
                                "unitOverride"?: string;
                            };
                        }>;
                        /**
                         * Threshold lines drawn horizontally across the chart.
                         */
                        "thresholds"?: Array<{
                            /**
                             * The state color for this threshold. Color is not allowed in a XyChart. Possible values: COLOR_UNSPECIFIED, GREY, BLUE, GREEN, YELLOW, ORANGE, RED
                             */
                            "color"?: string;
                            /**
                             * The direction for the current threshold. Direction is not allowed in a XyChart. Possible values: DIRECTION_UNSPECIFIED, ABOVE, BELOW
                             */
                            "direction"?: string;
                            /**
                             * A label for the threshold.
                             */
                            "label"?: string;
                            /**
                             * The value of the threshold. The value should be defined in the native scale of the metric.
                             */
                            "value"?: number;
                        }>;
                        /**
                         * The duration used to display a comparison chart. A comparison chart simultaneously shows values from two similar-length time periods (e.g., week-over-week metrics). The duration must be positive, and it can only be applied to charts with data sets of LINE plot type.
                         */
                        "timeshiftDuration"?: string;
                        /**
                         * The properties applied to the X axis.
                         */
                        "xAxis"?: {
                            /**
                             * The label of the axis.
                             */
                            "label"?: string;
                            /**
                             * The axis scale. By default, a linear scale is used. Possible values: SCALE_UNSPECIFIED, LINEAR, LOG10
                             */
                            "scale"?: string;
                        };
                        /**
                         * The properties applied to the Y axis.
                         */
                        "yAxis"?: {
                            /**
                             * The label of the axis.
                             */
                            "label"?: string;
                            /**
                             * The axis scale. By default, a linear scale is used. Possible values: SCALE_UNSPECIFIED, LINEAR, LOG10
                             */
                            "scale"?: string;
                        };
                    };
                }>;
            }>;
        };
        /**
         * Required. The mutable, human-readable name.
         */
        "displayName": string;
        /**
         * Content is arranged with a basic layout that re-flows a simple list of informational elements like widgets or tiles.
         */
        "gridLayout"?: {
            /**
             * The number of columns into which the view's width is divided. If omitted or set to zero, a system default will be used while rendering.
             */
            "columns"?: number;
            /**
             * The informational elements that are arranged into the columns row-first.
             */
            "widgets"?: Array<{
                /**
                 * A blank space.
                 */
                "blank"?: {};
                "logsPanel"?: {
                    /**
                     * A filter that chooses which log entries to return. See [Advanced Logs Queries](https://cloud.google.com/logging/docs/view/advanced-queries). Only log entries that match the filter are returned. An empty filter matches all log entries.
                     */
                    "filter"?: string;
                    "resourceNames"?: Array<{
                        /**
                         * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                         * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                         * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                         * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                         * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                         * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                         * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                };
                /**
                 * A scorecard summarizing time series data.
                 */
                "scorecard"?: {
                    /**
                     * Will cause the scorecard to show a gauge chart.
                     */
                    "gaugeView"?: {
                        /**
                         * The lower bound for this gauge chart. The value of the chart should always be greater than or equal to this.
                         */
                        "lowerBound"?: number;
                        /**
                         * The upper bound for this gauge chart. The value of the chart should always be less than or equal to this.
                         */
                        "upperBound"?: number;
                    };
                    /**
                     * Will cause the scorecard to show a spark chart.
                     */
                    "sparkChartView"?: {
                        /**
                         * The lower bound on data point frequency in the chart implemented by specifying the minimum alignment period to use in a time series query. For example, if the data is published once every 10 minutes it would not make sense to fetch and align data at one minute intervals. This field is optional and exists only as a hint.
                         */
                        "minAlignmentPeriod"?: string;
                        /**
                         * Required. The type of sparkchart to show in this chartView. Possible values: SPARK_CHART_TYPE_UNSPECIFIED, SPARK_LINE, SPARK_BAR
                         */
                        "sparkChartType": string;
                    };
                    /**
                     * The thresholds used to determine the state of the scorecard given the time series' current value. For an actual value x, the scorecard is in a danger state if x is less than or equal to a danger threshold that triggers below, or greater than or equal to a danger threshold that triggers above. Similarly, if x is above/below a warning threshold that triggers above/below, then the scorecard is in a warning state - unless x also puts it in a danger state. (Danger trumps warning.)  As an example, consider a scorecard with the following four thresholds: {   value: 90,   category: 'DANGER',   trigger: 'ABOVE', },: {   value: 70,   category: 'WARNING',   trigger: 'ABOVE', }, {   value: 10,   category: 'DANGER',   trigger: 'BELOW', }, {   value: 20,   category: 'WARNING',   trigger: 'BELOW', }  Then: values less than or equal to 10 would put the scorecard in a DANGER state, values greater than 10 but less than or equal to 20 a WARNING state, values strictly between 20 and 70 an OK state, values greater than or equal to 70 but less than 90 a WARNING state, and values greater than or equal to 90 a DANGER state.
                     */
                    "thresholds"?: Array<{
                        /**
                         * The state color for this threshold. Color is not allowed in a XyChart. Possible values: COLOR_UNSPECIFIED, GREY, BLUE, GREEN, YELLOW, ORANGE, RED
                         */
                        "color"?: string;
                        /**
                         * The direction for the current threshold. Direction is not allowed in a XyChart. Possible values: DIRECTION_UNSPECIFIED, ABOVE, BELOW
                         */
                        "direction"?: string;
                        /**
                         * A label for the threshold.
                         */
                        "label"?: string;
                        /**
                         * The value of the threshold. The value should be defined in the native scale of the metric.
                         */
                        "value"?: number;
                    }>;
                    /**
                     * Required. Fields for querying time series data from the Stackdriver metrics API.
                     */
                    "timeSeriesQuery": {
                        /**
                         * Filter parameters to fetch time series.
                         */
                        "timeSeriesFilter"?: {
                            /**
                             * By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.
                             */
                            "aggregation"?: {
                                /**
                                 * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                 */
                                "alignmentPeriod"?: string;
                                /**
                                 * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                 */
                                "crossSeriesReducer"?: string;
                                /**
                                 * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                 */
                                "groupByFields"?: Array<string>;
                                /**
                                 * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                 */
                                "perSeriesAligner"?: string;
                            };
                            /**
                             * Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query.
                             */
                            "filter": string;
                            /**
                             * Ranking based time series filter.
                             */
                            "pickTimeSeriesFilter"?: {
                                /**
                                 * How to use the ranking to select time series that pass through the filter. Possible values: DIRECTION_UNSPECIFIED, TOP, BOTTOM
                                 */
                                "direction"?: string;
                                /**
                                 * How many time series to allow to pass through the filter.
                                 */
                                "numTimeSeries"?: number;
                                /**
                                 * `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. Possible values: METHOD_UNSPECIFIED, METHOD_MEAN, METHOD_MAX, METHOD_MIN, METHOD_SUM, METHOD_LATEST
                                 */
                                "rankingMethod"?: string;
                            };
                            /**
                             * Apply a second aggregation after `aggregation` is applied.
                             */
                            "secondaryAggregation"?: {
                                /**
                                 * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                 */
                                "alignmentPeriod"?: string;
                                /**
                                 * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                 */
                                "crossSeriesReducer"?: string;
                                /**
                                 * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                 */
                                "groupByFields"?: Array<string>;
                                /**
                                 * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                 */
                                "perSeriesAligner"?: string;
                            };
                        };
                        /**
                         * Parameters to fetch a ratio between two time series filters.
                         */
                        "timeSeriesFilterRatio"?: {
                            /**
                             * The denominator of the ratio.
                             */
                            "denominator"?: {
                                /**
                                 * By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.
                                 */
                                "aggregation"?: {
                                    /**
                                     * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                     */
                                    "alignmentPeriod"?: string;
                                    /**
                                     * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                     */
                                    "crossSeriesReducer"?: string;
                                    /**
                                     * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                     */
                                    "groupByFields"?: Array<string>;
                                    /**
                                     * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                     */
                                    "perSeriesAligner"?: string;
                                };
                                /**
                                 * Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query.
                                 */
                                "filter": string;
                            };
                            /**
                             * The numerator of the ratio.
                             */
                            "numerator"?: {
                                /**
                                 * By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.
                                 */
                                "aggregation"?: {
                                    /**
                                     * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                     */
                                    "alignmentPeriod"?: string;
                                    /**
                                     * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                     */
                                    "crossSeriesReducer"?: string;
                                    /**
                                     * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                     */
                                    "groupByFields"?: Array<string>;
                                    /**
                                     * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                     */
                                    "perSeriesAligner"?: string;
                                };
                                /**
                                 * Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query.
                                 */
                                "filter": string;
                            };
                            /**
                             * Ranking based time series filter.
                             */
                            "pickTimeSeriesFilter"?: {
                                /**
                                 * How to use the ranking to select time series that pass through the filter. Possible values: DIRECTION_UNSPECIFIED, TOP, BOTTOM
                                 */
                                "direction"?: string;
                                /**
                                 * How many time series to allow to pass through the filter.
                                 */
                                "numTimeSeries"?: number;
                                /**
                                 * `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. Possible values: METHOD_UNSPECIFIED, METHOD_MEAN, METHOD_MAX, METHOD_MIN, METHOD_SUM, METHOD_LATEST
                                 */
                                "rankingMethod"?: string;
                            };
                            /**
                             * Apply a second aggregation after the ratio is computed.
                             */
                            "secondaryAggregation"?: {
                                /**
                                 * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                 */
                                "alignmentPeriod"?: string;
                                /**
                                 * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                 */
                                "crossSeriesReducer"?: string;
                                /**
                                 * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                 */
                                "groupByFields"?: Array<string>;
                                /**
                                 * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                 */
                                "perSeriesAligner"?: string;
                            };
                        };
                        /**
                         * A query used to fetch time series.
                         */
                        "timeSeriesQueryLanguage"?: string;
                        /**
                         * The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`.
                         */
                        "unitOverride"?: string;
                    };
                };
                /**
                 * A raw string or markdown displaying textual content.
                 */
                "text"?: {
                    /**
                     * The text content to be displayed.
                     */
                    "content"?: string;
                    /**
                     * How the text content is formatted. Possible values: FORMAT_UNSPECIFIED, MARKDOWN, RAW
                     */
                    "format"?: string;
                };
                /**
                 * Optional. The title of the widget.
                 */
                "title"?: string;
                /**
                 * A chart of time series data.
                 */
                "xyChart"?: {
                    /**
                     * Display options for the chart.
                     */
                    "chartOptions"?: {
                        /**
                         * The chart mode. Possible values: MODE_UNSPECIFIED, COLOR, X_RAY, STATS
                         */
                        "mode"?: string;
                    };
                    /**
                     * Required. The data displayed in this chart.
                     */
                    "dataSets": Array<{
                        /**
                         * A template string for naming `TimeSeries` in the resulting data set. This should be a string with interpolations of the form `${label_name}`, which will resolve to the label's value.
                         */
                        "legendTemplate"?: string;
                        /**
                         * Optional. The lower bound on data point frequency for this data set, implemented by specifying the minimum alignment period to use in a time series query For example, if the data is published once every 10 minutes, the `min_alignment_period` should be at least 10 minutes. It would not make sense to fetch and align data at one minute intervals.
                         */
                        "minAlignmentPeriod"?: string;
                        /**
                         * How this data should be plotted on the chart. Possible values: PLOT_TYPE_UNSPECIFIED, LINE, STACKED_AREA, STACKED_BAR, HEATMAP
                         */
                        "plotType"?: string;
                        /**
                         * Required. Fields for querying time series data from the Stackdriver metrics API.
                         */
                        "timeSeriesQuery": {
                            /**
                             * Filter parameters to fetch time series.
                             */
                            "timeSeriesFilter"?: {
                                /**
                                 * By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.
                                 */
                                "aggregation"?: {
                                    /**
                                     * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                     */
                                    "alignmentPeriod"?: string;
                                    /**
                                     * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                     */
                                    "crossSeriesReducer"?: string;
                                    /**
                                     * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                     */
                                    "groupByFields"?: Array<string>;
                                    /**
                                     * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                     */
                                    "perSeriesAligner"?: string;
                                };
                                /**
                                 * Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query.
                                 */
                                "filter": string;
                                /**
                                 * Ranking based time series filter.
                                 */
                                "pickTimeSeriesFilter"?: {
                                    /**
                                     * How to use the ranking to select time series that pass through the filter. Possible values: DIRECTION_UNSPECIFIED, TOP, BOTTOM
                                     */
                                    "direction"?: string;
                                    /**
                                     * How many time series to allow to pass through the filter.
                                     */
                                    "numTimeSeries"?: number;
                                    /**
                                     * `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. Possible values: METHOD_UNSPECIFIED, METHOD_MEAN, METHOD_MAX, METHOD_MIN, METHOD_SUM, METHOD_LATEST
                                     */
                                    "rankingMethod"?: string;
                                };
                                /**
                                 * Apply a second aggregation after `aggregation` is applied.
                                 */
                                "secondaryAggregation"?: {
                                    /**
                                     * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                     */
                                    "alignmentPeriod"?: string;
                                    /**
                                     * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                     */
                                    "crossSeriesReducer"?: string;
                                    /**
                                     * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                     */
                                    "groupByFields"?: Array<string>;
                                    /**
                                     * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                     */
                                    "perSeriesAligner"?: string;
                                };
                            };
                            /**
                             * Parameters to fetch a ratio between two time series filters.
                             */
                            "timeSeriesFilterRatio"?: {
                                /**
                                 * The denominator of the ratio.
                                 */
                                "denominator"?: {
                                    /**
                                     * By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.
                                     */
                                    "aggregation"?: {
                                        /**
                                         * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                         */
                                        "alignmentPeriod"?: string;
                                        /**
                                         * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                         */
                                        "crossSeriesReducer"?: string;
                                        /**
                                         * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                         */
                                        "groupByFields"?: Array<string>;
                                        /**
                                         * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                         */
                                        "perSeriesAligner"?: string;
                                    };
                                    /**
                                     * Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query.
                                     */
                                    "filter": string;
                                };
                                /**
                                 * The numerator of the ratio.
                                 */
                                "numerator"?: {
                                    /**
                                     * By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.
                                     */
                                    "aggregation"?: {
                                        /**
                                         * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                         */
                                        "alignmentPeriod"?: string;
                                        /**
                                         * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                         */
                                        "crossSeriesReducer"?: string;
                                        /**
                                         * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                         */
                                        "groupByFields"?: Array<string>;
                                        /**
                                         * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                         */
                                        "perSeriesAligner"?: string;
                                    };
                                    /**
                                     * Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query.
                                     */
                                    "filter": string;
                                };
                                /**
                                 * Ranking based time series filter.
                                 */
                                "pickTimeSeriesFilter"?: {
                                    /**
                                     * How to use the ranking to select time series that pass through the filter. Possible values: DIRECTION_UNSPECIFIED, TOP, BOTTOM
                                     */
                                    "direction"?: string;
                                    /**
                                     * How many time series to allow to pass through the filter.
                                     */
                                    "numTimeSeries"?: number;
                                    /**
                                     * `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. Possible values: METHOD_UNSPECIFIED, METHOD_MEAN, METHOD_MAX, METHOD_MIN, METHOD_SUM, METHOD_LATEST
                                     */
                                    "rankingMethod"?: string;
                                };
                                /**
                                 * Apply a second aggregation after the ratio is computed.
                                 */
                                "secondaryAggregation"?: {
                                    /**
                                     * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                     */
                                    "alignmentPeriod"?: string;
                                    /**
                                     * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                     */
                                    "crossSeriesReducer"?: string;
                                    /**
                                     * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                     */
                                    "groupByFields"?: Array<string>;
                                    /**
                                     * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                     */
                                    "perSeriesAligner"?: string;
                                };
                            };
                            /**
                             * A query used to fetch time series.
                             */
                            "timeSeriesQueryLanguage"?: string;
                            /**
                             * The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`.
                             */
                            "unitOverride"?: string;
                        };
                    }>;
                    /**
                     * Threshold lines drawn horizontally across the chart.
                     */
                    "thresholds"?: Array<{
                        /**
                         * The state color for this threshold. Color is not allowed in a XyChart. Possible values: COLOR_UNSPECIFIED, GREY, BLUE, GREEN, YELLOW, ORANGE, RED
                         */
                        "color"?: string;
                        /**
                         * The direction for the current threshold. Direction is not allowed in a XyChart. Possible values: DIRECTION_UNSPECIFIED, ABOVE, BELOW
                         */
                        "direction"?: string;
                        /**
                         * A label for the threshold.
                         */
                        "label"?: string;
                        /**
                         * The value of the threshold. The value should be defined in the native scale of the metric.
                         */
                        "value"?: number;
                    }>;
                    /**
                     * The duration used to display a comparison chart. A comparison chart simultaneously shows values from two similar-length time periods (e.g., week-over-week metrics). The duration must be positive, and it can only be applied to charts with data sets of LINE plot type.
                     */
                    "timeshiftDuration"?: string;
                    /**
                     * The properties applied to the X axis.
                     */
                    "xAxis"?: {
                        /**
                         * The label of the axis.
                         */
                        "label"?: string;
                        /**
                         * The axis scale. By default, a linear scale is used. Possible values: SCALE_UNSPECIFIED, LINEAR, LOG10
                         */
                        "scale"?: string;
                    };
                    /**
                     * The properties applied to the Y axis.
                     */
                    "yAxis"?: {
                        /**
                         * The label of the axis.
                         */
                        "label"?: string;
                        /**
                         * The axis scale. By default, a linear scale is used. Possible values: SCALE_UNSPECIFIED, LINEAR, LOG10
                         */
                        "scale"?: string;
                    };
                };
            }>;
        };
        /**
         * The content is arranged as a grid of tiles, with each content widget occupying one or more tiles.
         */
        "mosaicLayout"?: {
            /**
             * The number of columns in the mosaic grid.
             */
            "columns"?: number;
            /**
             * The tiles to display.
             */
            "tiles"?: Array<{
                /**
                 * The height of the tile, measured in grid squares.
                 */
                "height"?: number;
                /**
                 * The informational widget contained in the tile.
                 */
                "widget"?: {
                    /**
                     * A blank space.
                     */
                    "blank"?: {};
                    "logsPanel"?: {
                        /**
                         * A filter that chooses which log entries to return. See [Advanced Logs Queries](https://cloud.google.com/logging/docs/view/advanced-queries). Only log entries that match the filter are returned. An empty filter matches all log entries.
                         */
                        "filter"?: string;
                        "resourceNames"?: Array<{
                            /**
                             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                    };
                    /**
                     * A scorecard summarizing time series data.
                     */
                    "scorecard"?: {
                        /**
                         * Will cause the scorecard to show a gauge chart.
                         */
                        "gaugeView"?: {
                            /**
                             * The lower bound for this gauge chart. The value of the chart should always be greater than or equal to this.
                             */
                            "lowerBound"?: number;
                            /**
                             * The upper bound for this gauge chart. The value of the chart should always be less than or equal to this.
                             */
                            "upperBound"?: number;
                        };
                        /**
                         * Will cause the scorecard to show a spark chart.
                         */
                        "sparkChartView"?: {
                            /**
                             * The lower bound on data point frequency in the chart implemented by specifying the minimum alignment period to use in a time series query. For example, if the data is published once every 10 minutes it would not make sense to fetch and align data at one minute intervals. This field is optional and exists only as a hint.
                             */
                            "minAlignmentPeriod"?: string;
                            /**
                             * Required. The type of sparkchart to show in this chartView. Possible values: SPARK_CHART_TYPE_UNSPECIFIED, SPARK_LINE, SPARK_BAR
                             */
                            "sparkChartType": string;
                        };
                        /**
                         * The thresholds used to determine the state of the scorecard given the time series' current value. For an actual value x, the scorecard is in a danger state if x is less than or equal to a danger threshold that triggers below, or greater than or equal to a danger threshold that triggers above. Similarly, if x is above/below a warning threshold that triggers above/below, then the scorecard is in a warning state - unless x also puts it in a danger state. (Danger trumps warning.)  As an example, consider a scorecard with the following four thresholds: {   value: 90,   category: 'DANGER',   trigger: 'ABOVE', },: {   value: 70,   category: 'WARNING',   trigger: 'ABOVE', }, {   value: 10,   category: 'DANGER',   trigger: 'BELOW', }, {   value: 20,   category: 'WARNING',   trigger: 'BELOW', }  Then: values less than or equal to 10 would put the scorecard in a DANGER state, values greater than 10 but less than or equal to 20 a WARNING state, values strictly between 20 and 70 an OK state, values greater than or equal to 70 but less than 90 a WARNING state, and values greater than or equal to 90 a DANGER state.
                         */
                        "thresholds"?: Array<{
                            /**
                             * The state color for this threshold. Color is not allowed in a XyChart. Possible values: COLOR_UNSPECIFIED, GREY, BLUE, GREEN, YELLOW, ORANGE, RED
                             */
                            "color"?: string;
                            /**
                             * The direction for the current threshold. Direction is not allowed in a XyChart. Possible values: DIRECTION_UNSPECIFIED, ABOVE, BELOW
                             */
                            "direction"?: string;
                            /**
                             * A label for the threshold.
                             */
                            "label"?: string;
                            /**
                             * The value of the threshold. The value should be defined in the native scale of the metric.
                             */
                            "value"?: number;
                        }>;
                        /**
                         * Required. Fields for querying time series data from the Stackdriver metrics API.
                         */
                        "timeSeriesQuery": {
                            /**
                             * Filter parameters to fetch time series.
                             */
                            "timeSeriesFilter"?: {
                                /**
                                 * By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.
                                 */
                                "aggregation"?: {
                                    /**
                                     * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                     */
                                    "alignmentPeriod"?: string;
                                    /**
                                     * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                     */
                                    "crossSeriesReducer"?: string;
                                    /**
                                     * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                     */
                                    "groupByFields"?: Array<string>;
                                    /**
                                     * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                     */
                                    "perSeriesAligner"?: string;
                                };
                                /**
                                 * Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query.
                                 */
                                "filter": string;
                                /**
                                 * Ranking based time series filter.
                                 */
                                "pickTimeSeriesFilter"?: {
                                    /**
                                     * How to use the ranking to select time series that pass through the filter. Possible values: DIRECTION_UNSPECIFIED, TOP, BOTTOM
                                     */
                                    "direction"?: string;
                                    /**
                                     * How many time series to allow to pass through the filter.
                                     */
                                    "numTimeSeries"?: number;
                                    /**
                                     * `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. Possible values: METHOD_UNSPECIFIED, METHOD_MEAN, METHOD_MAX, METHOD_MIN, METHOD_SUM, METHOD_LATEST
                                     */
                                    "rankingMethod"?: string;
                                };
                                /**
                                 * Apply a second aggregation after `aggregation` is applied.
                                 */
                                "secondaryAggregation"?: {
                                    /**
                                     * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                     */
                                    "alignmentPeriod"?: string;
                                    /**
                                     * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                     */
                                    "crossSeriesReducer"?: string;
                                    /**
                                     * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                     */
                                    "groupByFields"?: Array<string>;
                                    /**
                                     * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                     */
                                    "perSeriesAligner"?: string;
                                };
                            };
                            /**
                             * Parameters to fetch a ratio between two time series filters.
                             */
                            "timeSeriesFilterRatio"?: {
                                /**
                                 * The denominator of the ratio.
                                 */
                                "denominator"?: {
                                    /**
                                     * By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.
                                     */
                                    "aggregation"?: {
                                        /**
                                         * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                         */
                                        "alignmentPeriod"?: string;
                                        /**
                                         * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                         */
                                        "crossSeriesReducer"?: string;
                                        /**
                                         * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                         */
                                        "groupByFields"?: Array<string>;
                                        /**
                                         * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                         */
                                        "perSeriesAligner"?: string;
                                    };
                                    /**
                                     * Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query.
                                     */
                                    "filter": string;
                                };
                                /**
                                 * The numerator of the ratio.
                                 */
                                "numerator"?: {
                                    /**
                                     * By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.
                                     */
                                    "aggregation"?: {
                                        /**
                                         * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                         */
                                        "alignmentPeriod"?: string;
                                        /**
                                         * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                         */
                                        "crossSeriesReducer"?: string;
                                        /**
                                         * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                         */
                                        "groupByFields"?: Array<string>;
                                        /**
                                         * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                         */
                                        "perSeriesAligner"?: string;
                                    };
                                    /**
                                     * Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query.
                                     */
                                    "filter": string;
                                };
                                /**
                                 * Ranking based time series filter.
                                 */
                                "pickTimeSeriesFilter"?: {
                                    /**
                                     * How to use the ranking to select time series that pass through the filter. Possible values: DIRECTION_UNSPECIFIED, TOP, BOTTOM
                                     */
                                    "direction"?: string;
                                    /**
                                     * How many time series to allow to pass through the filter.
                                     */
                                    "numTimeSeries"?: number;
                                    /**
                                     * `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. Possible values: METHOD_UNSPECIFIED, METHOD_MEAN, METHOD_MAX, METHOD_MIN, METHOD_SUM, METHOD_LATEST
                                     */
                                    "rankingMethod"?: string;
                                };
                                /**
                                 * Apply a second aggregation after the ratio is computed.
                                 */
                                "secondaryAggregation"?: {
                                    /**
                                     * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                     */
                                    "alignmentPeriod"?: string;
                                    /**
                                     * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                     */
                                    "crossSeriesReducer"?: string;
                                    /**
                                     * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                     */
                                    "groupByFields"?: Array<string>;
                                    /**
                                     * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                     */
                                    "perSeriesAligner"?: string;
                                };
                            };
                            /**
                             * A query used to fetch time series.
                             */
                            "timeSeriesQueryLanguage"?: string;
                            /**
                             * The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`.
                             */
                            "unitOverride"?: string;
                        };
                    };
                    /**
                     * A raw string or markdown displaying textual content.
                     */
                    "text"?: {
                        /**
                         * The text content to be displayed.
                         */
                        "content"?: string;
                        /**
                         * How the text content is formatted. Possible values: FORMAT_UNSPECIFIED, MARKDOWN, RAW
                         */
                        "format"?: string;
                    };
                    /**
                     * Optional. The title of the widget.
                     */
                    "title"?: string;
                    /**
                     * A chart of time series data.
                     */
                    "xyChart"?: {
                        /**
                         * Display options for the chart.
                         */
                        "chartOptions"?: {
                            /**
                             * The chart mode. Possible values: MODE_UNSPECIFIED, COLOR, X_RAY, STATS
                             */
                            "mode"?: string;
                        };
                        /**
                         * Required. The data displayed in this chart.
                         */
                        "dataSets": Array<{
                            /**
                             * A template string for naming `TimeSeries` in the resulting data set. This should be a string with interpolations of the form `${label_name}`, which will resolve to the label's value.
                             */
                            "legendTemplate"?: string;
                            /**
                             * Optional. The lower bound on data point frequency for this data set, implemented by specifying the minimum alignment period to use in a time series query For example, if the data is published once every 10 minutes, the `min_alignment_period` should be at least 10 minutes. It would not make sense to fetch and align data at one minute intervals.
                             */
                            "minAlignmentPeriod"?: string;
                            /**
                             * How this data should be plotted on the chart. Possible values: PLOT_TYPE_UNSPECIFIED, LINE, STACKED_AREA, STACKED_BAR, HEATMAP
                             */
                            "plotType"?: string;
                            /**
                             * Required. Fields for querying time series data from the Stackdriver metrics API.
                             */
                            "timeSeriesQuery": {
                                /**
                                 * Filter parameters to fetch time series.
                                 */
                                "timeSeriesFilter"?: {
                                    /**
                                     * By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.
                                     */
                                    "aggregation"?: {
                                        /**
                                         * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                         */
                                        "alignmentPeriod"?: string;
                                        /**
                                         * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                         */
                                        "crossSeriesReducer"?: string;
                                        /**
                                         * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                         */
                                        "groupByFields"?: Array<string>;
                                        /**
                                         * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                         */
                                        "perSeriesAligner"?: string;
                                    };
                                    /**
                                     * Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query.
                                     */
                                    "filter": string;
                                    /**
                                     * Ranking based time series filter.
                                     */
                                    "pickTimeSeriesFilter"?: {
                                        /**
                                         * How to use the ranking to select time series that pass through the filter. Possible values: DIRECTION_UNSPECIFIED, TOP, BOTTOM
                                         */
                                        "direction"?: string;
                                        /**
                                         * How many time series to allow to pass through the filter.
                                         */
                                        "numTimeSeries"?: number;
                                        /**
                                         * `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. Possible values: METHOD_UNSPECIFIED, METHOD_MEAN, METHOD_MAX, METHOD_MIN, METHOD_SUM, METHOD_LATEST
                                         */
                                        "rankingMethod"?: string;
                                    };
                                    /**
                                     * Apply a second aggregation after `aggregation` is applied.
                                     */
                                    "secondaryAggregation"?: {
                                        /**
                                         * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                         */
                                        "alignmentPeriod"?: string;
                                        /**
                                         * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                         */
                                        "crossSeriesReducer"?: string;
                                        /**
                                         * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                         */
                                        "groupByFields"?: Array<string>;
                                        /**
                                         * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                         */
                                        "perSeriesAligner"?: string;
                                    };
                                };
                                /**
                                 * Parameters to fetch a ratio between two time series filters.
                                 */
                                "timeSeriesFilterRatio"?: {
                                    /**
                                     * The denominator of the ratio.
                                     */
                                    "denominator"?: {
                                        /**
                                         * By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.
                                         */
                                        "aggregation"?: {
                                            /**
                                             * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                             */
                                            "alignmentPeriod"?: string;
                                            /**
                                             * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                             */
                                            "crossSeriesReducer"?: string;
                                            /**
                                             * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                             */
                                            "groupByFields"?: Array<string>;
                                            /**
                                             * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                             */
                                            "perSeriesAligner"?: string;
                                        };
                                        /**
                                         * Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query.
                                         */
                                        "filter": string;
                                    };
                                    /**
                                     * The numerator of the ratio.
                                     */
                                    "numerator"?: {
                                        /**
                                         * By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.
                                         */
                                        "aggregation"?: {
                                            /**
                                             * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                             */
                                            "alignmentPeriod"?: string;
                                            /**
                                             * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                             */
                                            "crossSeriesReducer"?: string;
                                            /**
                                             * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                             */
                                            "groupByFields"?: Array<string>;
                                            /**
                                             * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                             */
                                            "perSeriesAligner"?: string;
                                        };
                                        /**
                                         * Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query.
                                         */
                                        "filter": string;
                                    };
                                    /**
                                     * Ranking based time series filter.
                                     */
                                    "pickTimeSeriesFilter"?: {
                                        /**
                                         * How to use the ranking to select time series that pass through the filter. Possible values: DIRECTION_UNSPECIFIED, TOP, BOTTOM
                                         */
                                        "direction"?: string;
                                        /**
                                         * How many time series to allow to pass through the filter.
                                         */
                                        "numTimeSeries"?: number;
                                        /**
                                         * `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. Possible values: METHOD_UNSPECIFIED, METHOD_MEAN, METHOD_MAX, METHOD_MIN, METHOD_SUM, METHOD_LATEST
                                         */
                                        "rankingMethod"?: string;
                                    };
                                    /**
                                     * Apply a second aggregation after the ratio is computed.
                                     */
                                    "secondaryAggregation"?: {
                                        /**
                                         * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                         */
                                        "alignmentPeriod"?: string;
                                        /**
                                         * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                         */
                                        "crossSeriesReducer"?: string;
                                        /**
                                         * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                         */
                                        "groupByFields"?: Array<string>;
                                        /**
                                         * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                         */
                                        "perSeriesAligner"?: string;
                                    };
                                };
                                /**
                                 * A query used to fetch time series.
                                 */
                                "timeSeriesQueryLanguage"?: string;
                                /**
                                 * The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`.
                                 */
                                "unitOverride"?: string;
                            };
                        }>;
                        /**
                         * Threshold lines drawn horizontally across the chart.
                         */
                        "thresholds"?: Array<{
                            /**
                             * The state color for this threshold. Color is not allowed in a XyChart. Possible values: COLOR_UNSPECIFIED, GREY, BLUE, GREEN, YELLOW, ORANGE, RED
                             */
                            "color"?: string;
                            /**
                             * The direction for the current threshold. Direction is not allowed in a XyChart. Possible values: DIRECTION_UNSPECIFIED, ABOVE, BELOW
                             */
                            "direction"?: string;
                            /**
                             * A label for the threshold.
                             */
                            "label"?: string;
                            /**
                             * The value of the threshold. The value should be defined in the native scale of the metric.
                             */
                            "value"?: number;
                        }>;
                        /**
                         * The duration used to display a comparison chart. A comparison chart simultaneously shows values from two similar-length time periods (e.g., week-over-week metrics). The duration must be positive, and it can only be applied to charts with data sets of LINE plot type.
                         */
                        "timeshiftDuration"?: string;
                        /**
                         * The properties applied to the X axis.
                         */
                        "xAxis"?: {
                            /**
                             * The label of the axis.
                             */
                            "label"?: string;
                            /**
                             * The axis scale. By default, a linear scale is used. Possible values: SCALE_UNSPECIFIED, LINEAR, LOG10
                             */
                            "scale"?: string;
                        };
                        /**
                         * The properties applied to the Y axis.
                         */
                        "yAxis"?: {
                            /**
                             * The label of the axis.
                             */
                            "label"?: string;
                            /**
                             * The axis scale. By default, a linear scale is used. Possible values: SCALE_UNSPECIFIED, LINEAR, LOG10
                             */
                            "scale"?: string;
                        };
                    };
                };
                /**
                 * The width of the tile, measured in grid squares.
                 */
                "width"?: number;
                /**
                 * The zero-indexed position of the tile in grid squares relative to the left edge of the grid.
                 */
                "xPos"?: number;
                /**
                 * The zero-indexed position of the tile in grid squares relative to the top edge of the grid.
                 */
                "yPos"?: number;
            }>;
        };
        /**
         * Immutable. The Project that this resource belongs to.
         */
        "projectRef": {
            /**
             * The project id of the resource.
             *
             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
             * The project id of the resource.
             *
             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
             * The project id of the resource.
             *
             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
             * The project id of the resource.
             *
             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
             * The project id of the resource.
             *
             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
             * The project id of the resource.
             *
             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
             * The project id of the resource.
             *
             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
        })>);
        /**
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
        /**
         * The content is divided into equally spaced rows and the widgets are arranged horizontally.
         */
        "rowLayout"?: {
            /**
             * The rows of content to display.
             */
            "rows"?: Array<{
                /**
                 * The relative weight of this row. The row weight is used to adjust the height of rows on the screen (relative to peers). Greater the weight, greater the height of the row on the screen. If omitted, a value of 1 is used while rendering.
                 */
                "weight"?: number;
                /**
                 * The display widgets arranged horizontally in this row.
                 */
                "widgets"?: Array<{
                    /**
                     * A blank space.
                     */
                    "blank"?: {};
                    "logsPanel"?: {
                        /**
                         * A filter that chooses which log entries to return. See [Advanced Logs Queries](https://cloud.google.com/logging/docs/view/advanced-queries). Only log entries that match the filter are returned. An empty filter matches all log entries.
                         */
                        "filter"?: string;
                        "resourceNames"?: Array<{
                            /**
                             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
                    };
                    /**
                     * A scorecard summarizing time series data.
                     */
                    "scorecard"?: {
                        /**
                         * Will cause the scorecard to show a gauge chart.
                         */
                        "gaugeView"?: {
                            /**
                             * The lower bound for this gauge chart. The value of the chart should always be greater than or equal to this.
                             */
                            "lowerBound"?: number;
                            /**
                             * The upper bound for this gauge chart. The value of the chart should always be less than or equal to this.
                             */
                            "upperBound"?: number;
                        };
                        /**
                         * Will cause the scorecard to show a spark chart.
                         */
                        "sparkChartView"?: {
                            /**
                             * The lower bound on data point frequency in the chart implemented by specifying the minimum alignment period to use in a time series query. For example, if the data is published once every 10 minutes it would not make sense to fetch and align data at one minute intervals. This field is optional and exists only as a hint.
                             */
                            "minAlignmentPeriod"?: string;
                            /**
                             * Required. The type of sparkchart to show in this chartView. Possible values: SPARK_CHART_TYPE_UNSPECIFIED, SPARK_LINE, SPARK_BAR
                             */
                            "sparkChartType": string;
                        };
                        /**
                         * The thresholds used to determine the state of the scorecard given the time series' current value. For an actual value x, the scorecard is in a danger state if x is less than or equal to a danger threshold that triggers below, or greater than or equal to a danger threshold that triggers above. Similarly, if x is above/below a warning threshold that triggers above/below, then the scorecard is in a warning state - unless x also puts it in a danger state. (Danger trumps warning.)  As an example, consider a scorecard with the following four thresholds: {   value: 90,   category: 'DANGER',   trigger: 'ABOVE', },: {   value: 70,   category: 'WARNING',   trigger: 'ABOVE', }, {   value: 10,   category: 'DANGER',   trigger: 'BELOW', }, {   value: 20,   category: 'WARNING',   trigger: 'BELOW', }  Then: values less than or equal to 10 would put the scorecard in a DANGER state, values greater than 10 but less than or equal to 20 a WARNING state, values strictly between 20 and 70 an OK state, values greater than or equal to 70 but less than 90 a WARNING state, and values greater than or equal to 90 a DANGER state.
                         */
                        "thresholds"?: Array<{
                            /**
                             * The state color for this threshold. Color is not allowed in a XyChart. Possible values: COLOR_UNSPECIFIED, GREY, BLUE, GREEN, YELLOW, ORANGE, RED
                             */
                            "color"?: string;
                            /**
                             * The direction for the current threshold. Direction is not allowed in a XyChart. Possible values: DIRECTION_UNSPECIFIED, ABOVE, BELOW
                             */
                            "direction"?: string;
                            /**
                             * A label for the threshold.
                             */
                            "label"?: string;
                            /**
                             * The value of the threshold. The value should be defined in the native scale of the metric.
                             */
                            "value"?: number;
                        }>;
                        /**
                         * Required. Fields for querying time series data from the Stackdriver metrics API.
                         */
                        "timeSeriesQuery": {
                            /**
                             * Filter parameters to fetch time series.
                             */
                            "timeSeriesFilter"?: {
                                /**
                                 * By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.
                                 */
                                "aggregation"?: {
                                    /**
                                     * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                     */
                                    "alignmentPeriod"?: string;
                                    /**
                                     * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                     */
                                    "crossSeriesReducer"?: string;
                                    /**
                                     * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                     */
                                    "groupByFields"?: Array<string>;
                                    /**
                                     * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                     */
                                    "perSeriesAligner"?: string;
                                };
                                /**
                                 * Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query.
                                 */
                                "filter": string;
                                /**
                                 * Ranking based time series filter.
                                 */
                                "pickTimeSeriesFilter"?: {
                                    /**
                                     * How to use the ranking to select time series that pass through the filter. Possible values: DIRECTION_UNSPECIFIED, TOP, BOTTOM
                                     */
                                    "direction"?: string;
                                    /**
                                     * How many time series to allow to pass through the filter.
                                     */
                                    "numTimeSeries"?: number;
                                    /**
                                     * `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. Possible values: METHOD_UNSPECIFIED, METHOD_MEAN, METHOD_MAX, METHOD_MIN, METHOD_SUM, METHOD_LATEST
                                     */
                                    "rankingMethod"?: string;
                                };
                                /**
                                 * Apply a second aggregation after `aggregation` is applied.
                                 */
                                "secondaryAggregation"?: {
                                    /**
                                     * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                     */
                                    "alignmentPeriod"?: string;
                                    /**
                                     * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                     */
                                    "crossSeriesReducer"?: string;
                                    /**
                                     * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                     */
                                    "groupByFields"?: Array<string>;
                                    /**
                                     * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                     */
                                    "perSeriesAligner"?: string;
                                };
                            };
                            /**
                             * Parameters to fetch a ratio between two time series filters.
                             */
                            "timeSeriesFilterRatio"?: {
                                /**
                                 * The denominator of the ratio.
                                 */
                                "denominator"?: {
                                    /**
                                     * By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.
                                     */
                                    "aggregation"?: {
                                        /**
                                         * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                         */
                                        "alignmentPeriod"?: string;
                                        /**
                                         * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                         */
                                        "crossSeriesReducer"?: string;
                                        /**
                                         * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                         */
                                        "groupByFields"?: Array<string>;
                                        /**
                                         * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                         */
                                        "perSeriesAligner"?: string;
                                    };
                                    /**
                                     * Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query.
                                     */
                                    "filter": string;
                                };
                                /**
                                 * The numerator of the ratio.
                                 */
                                "numerator"?: {
                                    /**
                                     * By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.
                                     */
                                    "aggregation"?: {
                                        /**
                                         * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                         */
                                        "alignmentPeriod"?: string;
                                        /**
                                         * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                         */
                                        "crossSeriesReducer"?: string;
                                        /**
                                         * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                         */
                                        "groupByFields"?: Array<string>;
                                        /**
                                         * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                         */
                                        "perSeriesAligner"?: string;
                                    };
                                    /**
                                     * Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query.
                                     */
                                    "filter": string;
                                };
                                /**
                                 * Ranking based time series filter.
                                 */
                                "pickTimeSeriesFilter"?: {
                                    /**
                                     * How to use the ranking to select time series that pass through the filter. Possible values: DIRECTION_UNSPECIFIED, TOP, BOTTOM
                                     */
                                    "direction"?: string;
                                    /**
                                     * How many time series to allow to pass through the filter.
                                     */
                                    "numTimeSeries"?: number;
                                    /**
                                     * `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. Possible values: METHOD_UNSPECIFIED, METHOD_MEAN, METHOD_MAX, METHOD_MIN, METHOD_SUM, METHOD_LATEST
                                     */
                                    "rankingMethod"?: string;
                                };
                                /**
                                 * Apply a second aggregation after the ratio is computed.
                                 */
                                "secondaryAggregation"?: {
                                    /**
                                     * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                     */
                                    "alignmentPeriod"?: string;
                                    /**
                                     * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                     */
                                    "crossSeriesReducer"?: string;
                                    /**
                                     * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                     */
                                    "groupByFields"?: Array<string>;
                                    /**
                                     * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                     */
                                    "perSeriesAligner"?: string;
                                };
                            };
                            /**
                             * A query used to fetch time series.
                             */
                            "timeSeriesQueryLanguage"?: string;
                            /**
                             * The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`.
                             */
                            "unitOverride"?: string;
                        };
                    };
                    /**
                     * A raw string or markdown displaying textual content.
                     */
                    "text"?: {
                        /**
                         * The text content to be displayed.
                         */
                        "content"?: string;
                        /**
                         * How the text content is formatted. Possible values: FORMAT_UNSPECIFIED, MARKDOWN, RAW
                         */
                        "format"?: string;
                    };
                    /**
                     * Optional. The title of the widget.
                     */
                    "title"?: string;
                    /**
                     * A chart of time series data.
                     */
                    "xyChart"?: {
                        /**
                         * Display options for the chart.
                         */
                        "chartOptions"?: {
                            /**
                             * The chart mode. Possible values: MODE_UNSPECIFIED, COLOR, X_RAY, STATS
                             */
                            "mode"?: string;
                        };
                        /**
                         * Required. The data displayed in this chart.
                         */
                        "dataSets": Array<{
                            /**
                             * A template string for naming `TimeSeries` in the resulting data set. This should be a string with interpolations of the form `${label_name}`, which will resolve to the label's value.
                             */
                            "legendTemplate"?: string;
                            /**
                             * Optional. The lower bound on data point frequency for this data set, implemented by specifying the minimum alignment period to use in a time series query For example, if the data is published once every 10 minutes, the `min_alignment_period` should be at least 10 minutes. It would not make sense to fetch and align data at one minute intervals.
                             */
                            "minAlignmentPeriod"?: string;
                            /**
                             * How this data should be plotted on the chart. Possible values: PLOT_TYPE_UNSPECIFIED, LINE, STACKED_AREA, STACKED_BAR, HEATMAP
                             */
                            "plotType"?: string;
                            /**
                             * Required. Fields for querying time series data from the Stackdriver metrics API.
                             */
                            "timeSeriesQuery": {
                                /**
                                 * Filter parameters to fetch time series.
                                 */
                                "timeSeriesFilter"?: {
                                    /**
                                     * By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.
                                     */
                                    "aggregation"?: {
                                        /**
                                         * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                         */
                                        "alignmentPeriod"?: string;
                                        /**
                                         * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                         */
                                        "crossSeriesReducer"?: string;
                                        /**
                                         * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                         */
                                        "groupByFields"?: Array<string>;
                                        /**
                                         * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                         */
                                        "perSeriesAligner"?: string;
                                    };
                                    /**
                                     * Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query.
                                     */
                                    "filter": string;
                                    /**
                                     * Ranking based time series filter.
                                     */
                                    "pickTimeSeriesFilter"?: {
                                        /**
                                         * How to use the ranking to select time series that pass through the filter. Possible values: DIRECTION_UNSPECIFIED, TOP, BOTTOM
                                         */
                                        "direction"?: string;
                                        /**
                                         * How many time series to allow to pass through the filter.
                                         */
                                        "numTimeSeries"?: number;
                                        /**
                                         * `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. Possible values: METHOD_UNSPECIFIED, METHOD_MEAN, METHOD_MAX, METHOD_MIN, METHOD_SUM, METHOD_LATEST
                                         */
                                        "rankingMethod"?: string;
                                    };
                                    /**
                                     * Apply a second aggregation after `aggregation` is applied.
                                     */
                                    "secondaryAggregation"?: {
                                        /**
                                         * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                         */
                                        "alignmentPeriod"?: string;
                                        /**
                                         * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                         */
                                        "crossSeriesReducer"?: string;
                                        /**
                                         * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                         */
                                        "groupByFields"?: Array<string>;
                                        /**
                                         * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                         */
                                        "perSeriesAligner"?: string;
                                    };
                                };
                                /**
                                 * Parameters to fetch a ratio between two time series filters.
                                 */
                                "timeSeriesFilterRatio"?: {
                                    /**
                                     * The denominator of the ratio.
                                     */
                                    "denominator"?: {
                                        /**
                                         * By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.
                                         */
                                        "aggregation"?: {
                                            /**
                                             * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                             */
                                            "alignmentPeriod"?: string;
                                            /**
                                             * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                             */
                                            "crossSeriesReducer"?: string;
                                            /**
                                             * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                             */
                                            "groupByFields"?: Array<string>;
                                            /**
                                             * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                             */
                                            "perSeriesAligner"?: string;
                                        };
                                        /**
                                         * Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query.
                                         */
                                        "filter": string;
                                    };
                                    /**
                                     * The numerator of the ratio.
                                     */
                                    "numerator"?: {
                                        /**
                                         * By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.
                                         */
                                        "aggregation"?: {
                                            /**
                                             * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                             */
                                            "alignmentPeriod"?: string;
                                            /**
                                             * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                             */
                                            "crossSeriesReducer"?: string;
                                            /**
                                             * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                             */
                                            "groupByFields"?: Array<string>;
                                            /**
                                             * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                             */
                                            "perSeriesAligner"?: string;
                                        };
                                        /**
                                         * Required. The [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query.
                                         */
                                        "filter": string;
                                    };
                                    /**
                                     * Ranking based time series filter.
                                     */
                                    "pickTimeSeriesFilter"?: {
                                        /**
                                         * How to use the ranking to select time series that pass through the filter. Possible values: DIRECTION_UNSPECIFIED, TOP, BOTTOM
                                         */
                                        "direction"?: string;
                                        /**
                                         * How many time series to allow to pass through the filter.
                                         */
                                        "numTimeSeries"?: number;
                                        /**
                                         * `ranking_method` is applied to each time series independently to produce the value which will be used to compare the time series to other time series. Possible values: METHOD_UNSPECIFIED, METHOD_MEAN, METHOD_MAX, METHOD_MIN, METHOD_SUM, METHOD_LATEST
                                         */
                                        "rankingMethod"?: string;
                                    };
                                    /**
                                     * Apply a second aggregation after the ratio is computed.
                                     */
                                    "secondaryAggregation"?: {
                                        /**
                                         * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
                                         */
                                        "alignmentPeriod"?: string;
                                        /**
                                         * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
                                         */
                                        "crossSeriesReducer"?: string;
                                        /**
                                         * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
                                         */
                                        "groupByFields"?: Array<string>;
                                        /**
                                         * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
                                         */
                                        "perSeriesAligner"?: string;
                                    };
                                };
                                /**
                                 * A query used to fetch time series.
                                 */
                                "timeSeriesQueryLanguage"?: string;
                                /**
                                 * The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`.
                                 */
                                "unitOverride"?: string;
                            };
                        }>;
                        /**
                         * Threshold lines drawn horizontally across the chart.
                         */
                        "thresholds"?: Array<{
                            /**
                             * The state color for this threshold. Color is not allowed in a XyChart. Possible values: COLOR_UNSPECIFIED, GREY, BLUE, GREEN, YELLOW, ORANGE, RED
                             */
                            "color"?: string;
                            /**
                             * The direction for the current threshold. Direction is not allowed in a XyChart. Possible values: DIRECTION_UNSPECIFIED, ABOVE, BELOW
                             */
                            "direction"?: string;
                            /**
                             * A label for the threshold.
                             */
                            "label"?: string;
                            /**
                             * The value of the threshold. The value should be defined in the native scale of the metric.
                             */
                            "value"?: number;
                        }>;
                        /**
                         * The duration used to display a comparison chart. A comparison chart simultaneously shows values from two similar-length time periods (e.g., week-over-week metrics). The duration must be positive, and it can only be applied to charts with data sets of LINE plot type.
                         */
                        "timeshiftDuration"?: string;
                        /**
                         * The properties applied to the X axis.
                         */
                        "xAxis"?: {
                            /**
                             * The label of the axis.
                             */
                            "label"?: string;
                            /**
                             * The axis scale. By default, a linear scale is used. Possible values: SCALE_UNSPECIFIED, LINEAR, LOG10
                             */
                            "scale"?: string;
                        };
                        /**
                         * The properties applied to the Y axis.
                         */
                        "yAxis"?: {
                            /**
                             * The label of the axis.
                             */
                            "label"?: string;
                            /**
                             * The axis scale. By default, a linear scale is used. Possible values: SCALE_UNSPECIFIED, LINEAR, LOG10
                             */
                            "scale"?: string;
                        };
                    };
                }>;
            }>;
        };
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
         * \`etag\` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. An \`etag\` is returned in the response to \`GetDashboard\`, and users are expected to put that etag in the request to \`UpdateDashboard\` to ensure that their change will be applied to the same version of the Dashboard configuration. The field should not be passed during dashboard creation.
         */
        "etag"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
    };
}
export declare class MonitoringDashboard extends Model<IMonitoringDashboard> implements IMonitoringDashboard {
    "apiVersion": IMonitoringDashboard["apiVersion"];
    "kind": IMonitoringDashboard["kind"];
    "metadata"?: IMonitoringDashboard["metadata"];
    "spec": IMonitoringDashboard["spec"];
    "status"?: IMonitoringDashboard["status"];
    static apiVersion: IMonitoringDashboard["apiVersion"];
    static kind: IMonitoringDashboard["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IMonitoringDashboard>;
    constructor(data?: ModelData<IMonitoringDashboard>);
}
