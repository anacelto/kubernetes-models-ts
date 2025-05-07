import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/MonitoringCnrmCloudGoogleComV1beta1MonitoringServiceLevelObjective";

export interface IMonitoringServiceLevelObjective {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "monitoring.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "MonitoringServiceLevelObjective";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * A calendar period, semantically "since the start of the current ``". At this time, only `DAY`, `WEEK`, `FORTNIGHT`, and `MONTH` are supported. Possible values: CALENDAR_PERIOD_UNSPECIFIED, DAY, WEEK, FORTNIGHT, MONTH, QUARTER, HALF, YEAR
     */
    "calendarPeriod"?: string;
    /**
     * Name used for UI elements listing this SLO.
     */
    "displayName"?: string;
    /**
     * The fraction of service that must be good in order for this objective to be met. `0 < goal <= 0.999`.
     */
    "goal": number;
    /**
     * Immutable. The Project that this resource belongs to.
     */
    "projectRef": {
      /**
       * The project for the resource
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
       * The project for the resource
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
       * The project for the resource
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
       * The project for the resource
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
       * The project for the resource
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
       * The project for the resource
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
       * The project for the resource
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
     * A rolling time period, semantically "in the past ``". Must be an integer multiple of 1 day no larger than 30 days.
     */
    "rollingPeriod"?: string;
    /**
     * The definition of good service, used to measure and calculate the quality of the `Service`'s performance with respect to a single aspect of service quality.
     */
    "serviceLevelIndicator"?: {
      /**
       * Basic SLI on a well-known service type.
       */
      "basicSli"?: {
        /**
         * Good service is defined to be the count of requests made to this service that return successfully.
         */
        "availability"?: {
        };
        /**
         * Good service is defined to be the count of requests made to this service that are fast enough with respect to `latency.threshold`.
         */
        "latency"?: {
          /**
           * A description of the experience associated with failing requests. Possible values: LATENCY_EXPERIENCE_UNSPECIFIED, DELIGHTING, SATISFYING, ANNOYING
           */
          "experience"?: string;
          /**
           * Good service is defined to be the count of requests made to this service that return in no more than `threshold`.
           */
          "threshold"?: string;
        };
        /**
         * OPTIONAL: The set of locations to which this SLI is relevant. Telemetry from other locations will not be used to calculate performance for this SLI. If omitted, this SLI applies to all locations in which the Service has activity. For service types that don't support breaking down by location, setting this field will result in an error.
         */
        "location"?: Array<string>;
        /**
         * OPTIONAL: The set of RPCs to which this SLI is relevant. Telemetry from other methods will not be used to calculate performance for this SLI. If omitted, this SLI applies to all the Service's methods. For service types that don't support breaking down by method, setting this field will result in an error.
         */
        "method"?: Array<string>;
        /**
         * Good service is defined to be the count of operations performed by this service that return successfully
         */
        "operationAvailability"?: {
        };
        /**
         * Good service is defined to be the count of operations performed by this service that are fast enough with respect to `operation_latency.threshold`.
         */
        "operationLatency"?: {
          /**
           * A description of the experience associated with failing requests. Possible values: LATENCY_EXPERIENCE_UNSPECIFIED, DELIGHTING, SATISFYING, ANNOYING
           */
          "experience"?: string;
          /**
           * Good service is defined to be the count of operations that are completed in no more than `threshold`.
           */
          "threshold"?: string;
        };
        /**
         * OPTIONAL: The set of API versions to which this SLI is relevant. Telemetry from other API versions will not be used to calculate performance for this SLI. If omitted, this SLI applies to all API versions. For service types that don't support breaking down by version, setting this field will result in an error.
         */
        "version"?: Array<string>;
      };
      /**
       * Request-based SLIs
       */
      "requestBased"?: {
        /**
         * `distribution_cut` is used when `good_service` is a count of values aggregated in a `Distribution` that fall into a good range. The `total_service` is the total count of all values aggregated in the `Distribution`.
         */
        "distributionCut"?: {
          /**
           * A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying a `TimeSeries` aggregating values. Must have `ValueType = DISTRIBUTION` and `MetricKind = DELTA` or `MetricKind = CUMULATIVE`.
           */
          "distributionFilter"?: string;
          /**
           * Range of values considered "good." For a one-sided range, set one bound to an infinite value.
           */
          "range"?: {
            /**
             * Range maximum.
             */
            "max"?: number;
            /**
             * Range minimum.
             */
            "min"?: number;
          };
        };
        /**
         * `good_total_ratio` is used when the ratio of `good_service` to `total_service` is computed from two `TimeSeries`.
         */
        "goodTotalRatio"?: {
          /**
           * A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying a `TimeSeries` quantifying bad service, either demanded service that was not provided or demanded service that was of inadequate quality. Must have `ValueType = DOUBLE` or `ValueType = INT64` and must have `MetricKind = DELTA` or `MetricKind = CUMULATIVE`.
           */
          "badServiceFilter"?: string;
          /**
           * A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying a `TimeSeries` quantifying good service provided. Must have `ValueType = DOUBLE` or `ValueType = INT64` and must have `MetricKind = DELTA` or `MetricKind = CUMULATIVE`.
           */
          "goodServiceFilter"?: string;
          /**
           * A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying a `TimeSeries` quantifying total demanded service. Must have `ValueType = DOUBLE` or `ValueType = INT64` and must have `MetricKind = DELTA` or `MetricKind = CUMULATIVE`.
           */
          "totalServiceFilter"?: string;
        };
      };
      /**
       * Windows-based SLIs
       */
      "windowsBased"?: {
        /**
         * A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying a `TimeSeries` with `ValueType = BOOL`. The window is good if any `true` values appear in the window.
         */
        "goodBadMetricFilter"?: string;
        /**
         * A window is good if its `performance` is high enough.
         */
        "goodTotalRatioThreshold"?: {
          /**
           * `BasicSli` to evaluate to judge window quality.
           */
          "basicSliPerformance"?: {
            /**
             * Good service is defined to be the count of requests made to this service that return successfully.
             */
            "availability"?: {
            };
            /**
             * Good service is defined to be the count of requests made to this service that are fast enough with respect to `latency.threshold`.
             */
            "latency"?: {
              /**
               * A description of the experience associated with failing requests. Possible values: LATENCY_EXPERIENCE_UNSPECIFIED, DELIGHTING, SATISFYING, ANNOYING
               */
              "experience"?: string;
              /**
               * Good service is defined to be the count of requests made to this service that return in no more than `threshold`.
               */
              "threshold"?: string;
            };
            /**
             * OPTIONAL: The set of locations to which this SLI is relevant. Telemetry from other locations will not be used to calculate performance for this SLI. If omitted, this SLI applies to all locations in which the Service has activity. For service types that don't support breaking down by location, setting this field will result in an error.
             */
            "location"?: Array<string>;
            /**
             * OPTIONAL: The set of RPCs to which this SLI is relevant. Telemetry from other methods will not be used to calculate performance for this SLI. If omitted, this SLI applies to all the Service's methods. For service types that don't support breaking down by method, setting this field will result in an error.
             */
            "method"?: Array<string>;
            /**
             * Good service is defined to be the count of operations performed by this service that return successfully
             */
            "operationAvailability"?: {
            };
            /**
             * Good service is defined to be the count of operations performed by this service that are fast enough with respect to `operation_latency.threshold`.
             */
            "operationLatency"?: {
              /**
               * A description of the experience associated with failing requests. Possible values: LATENCY_EXPERIENCE_UNSPECIFIED, DELIGHTING, SATISFYING, ANNOYING
               */
              "experience"?: string;
              /**
               * Good service is defined to be the count of operations that are completed in no more than `threshold`.
               */
              "threshold"?: string;
            };
            /**
             * OPTIONAL: The set of API versions to which this SLI is relevant. Telemetry from other API versions will not be used to calculate performance for this SLI. If omitted, this SLI applies to all API versions. For service types that don't support breaking down by version, setting this field will result in an error.
             */
            "version"?: Array<string>;
          };
          /**
           * `RequestBasedSli` to evaluate to judge window quality.
           */
          "performance"?: {
            /**
             * `distribution_cut` is used when `good_service` is a count of values aggregated in a `Distribution` that fall into a good range. The `total_service` is the total count of all values aggregated in the `Distribution`.
             */
            "distributionCut"?: {
              /**
               * A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying a `TimeSeries` aggregating values. Must have `ValueType = DISTRIBUTION` and `MetricKind = DELTA` or `MetricKind = CUMULATIVE`.
               */
              "distributionFilter"?: string;
              /**
               * Range of values considered "good." For a one-sided range, set one bound to an infinite value.
               */
              "range"?: {
                /**
                 * Range maximum.
                 */
                "max"?: number;
                /**
                 * Range minimum.
                 */
                "min"?: number;
              };
            };
            /**
             * `good_total_ratio` is used when the ratio of `good_service` to `total_service` is computed from two `TimeSeries`.
             */
            "goodTotalRatio"?: {
              /**
               * A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying a `TimeSeries` quantifying bad service, either demanded service that was not provided or demanded service that was of inadequate quality. Must have `ValueType = DOUBLE` or `ValueType = INT64` and must have `MetricKind = DELTA` or `MetricKind = CUMULATIVE`.
               */
              "badServiceFilter"?: string;
              /**
               * A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying a `TimeSeries` quantifying good service provided. Must have `ValueType = DOUBLE` or `ValueType = INT64` and must have `MetricKind = DELTA` or `MetricKind = CUMULATIVE`.
               */
              "goodServiceFilter"?: string;
              /**
               * A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying a `TimeSeries` quantifying total demanded service. Must have `ValueType = DOUBLE` or `ValueType = INT64` and must have `MetricKind = DELTA` or `MetricKind = CUMULATIVE`.
               */
              "totalServiceFilter"?: string;
            };
          };
          /**
           * If window `performance >= threshold`, the window is counted as good.
           */
          "threshold"?: number;
        };
        /**
         * A window is good if the metric's value is in a good range, averaged across returned streams.
         */
        "metricMeanInRange"?: {
          /**
           * Range of values considered "good." For a one-sided range, set one bound to an infinite value.
           */
          "range"?: {
            /**
             * Range maximum.
             */
            "max"?: number;
            /**
             * Range minimum.
             */
            "min"?: number;
          };
          /**
           * A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying the `TimeSeries` to use for evaluating window quality.
           */
          "timeSeries"?: string;
        };
        /**
         * A window is good if the metric's value is in a good range, summed across returned streams.
         */
        "metricSumInRange"?: {
          /**
           * Range of values considered "good." For a one-sided range, set one bound to an infinite value.
           */
          "range"?: {
            /**
             * Range maximum.
             */
            "max"?: number;
            /**
             * Range minimum.
             */
            "min"?: number;
          };
          /**
           * A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying the `TimeSeries` to use for evaluating window quality.
           */
          "timeSeries"?: string;
        };
        /**
         * Duration over which window quality is evaluated. Must be an integer fraction of a day and at least `60s`.
         */
        "windowPeriod"?: string;
      };
    };
    /**
     * Immutable.
     */
    "serviceRef": {
      /**
       * The service for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `MonitoringService` resource (format: `projects/{{project}}/services/{{name}}`).
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
       * The service for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `MonitoringService` resource (format: `projects/{{project}}/services/{{name}}`).
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
       * The service for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `MonitoringService` resource (format: `projects/{{project}}/services/{{name}}`).
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
       * The service for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `MonitoringService` resource (format: `projects/{{project}}/services/{{name}}`).
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
       * The service for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `MonitoringService` resource (format: `projects/{{project}}/services/{{name}}`).
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
       * The service for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `MonitoringService` resource (format: `projects/{{project}}/services/{{name}}`).
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
       * The service for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `MonitoringService` resource (format: `projects/{{project}}/services/{{name}}`).
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
     * Time stamp of the `Create` or most recent `Update` command on this `Slo`.
     */
    "createTime"?: string;
    /**
     * Time stamp of the `Update` or `Delete` command that made this no longer a current `Slo`. This field is not populated in `ServiceLevelObjective`s returned from calls to `GetServiceLevelObjective` and `ListServiceLevelObjectives`, because it is always empty in the current version. It is populated in `ServiceLevelObjective`s representing previous versions in the output of `ListServiceLevelObjectiveVersions`. Because all old configuration versions are stored, `Update` operations mark the obsoleted version as deleted.
     */
    "deleteTime"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * Output only. If set, this SLO is managed at the [Service Management](https://cloud.google.com/service-management/overview) level. Therefore the service yaml file is the source of truth for this SLO, and API `Update` and `Delete` operations are forbidden.
     */
    "serviceManagementOwned"?: boolean;
  };
}

export class MonitoringServiceLevelObjective extends Model<IMonitoringServiceLevelObjective> implements IMonitoringServiceLevelObjective {
  "apiVersion": IMonitoringServiceLevelObjective["apiVersion"];
  "kind": IMonitoringServiceLevelObjective["kind"];
  "metadata"?: IMonitoringServiceLevelObjective["metadata"];
  "spec": IMonitoringServiceLevelObjective["spec"];
  "status"?: IMonitoringServiceLevelObjective["status"];

static apiVersion: IMonitoringServiceLevelObjective["apiVersion"] = "monitoring.cnrm.cloud.google.com/v1beta1";
static kind: IMonitoringServiceLevelObjective["kind"] = "MonitoringServiceLevelObjective";
static is = createTypeMetaGuard<IMonitoringServiceLevelObjective>(MonitoringServiceLevelObjective);

constructor(data?: ModelData<IMonitoringServiceLevelObjective>) {
  super();

  this.setDefinedProps({
    apiVersion: MonitoringServiceLevelObjective.apiVersion,
    kind: MonitoringServiceLevelObjective.kind,
    ...data
  } as IMonitoringServiceLevelObjective);
}
}


setValidateFunc(MonitoringServiceLevelObjective, validate as ValidateFunc<IMonitoringServiceLevelObjective>);
