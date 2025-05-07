import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/BigquerydatatransferCnrmCloudGoogleComV1alpha1BigQueryDataTransferConfig";

export interface IBigQueryDataTransferConfig {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "bigquerydatatransfer.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "BigQueryDataTransferConfig";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * The number of days to look back to automatically refresh the data.
     * For example, if dataRefreshWindowDays = 10, then every day BigQuery
     * reingests data for [today-10, today-1], rather than ingesting data for
     * just [today-1]. Only valid if the data source supports the feature.
     * Set the value to 0 to use the default value.
     */
    "dataRefreshWindowDays"?: number;
    /**
     * Immutable. The data source id. Cannot be changed once the transfer config is created.
     */
    "dataSourceId": string;
    /**
     * The BigQuery target dataset id.
     */
    "destinationDatasetId"?: string;
    /**
     * When set to true, no runs are scheduled for a given transfer.
     */
    "disabled"?: boolean;
    /**
     * The user specified display name for the transfer config.
     */
    "displayName": string;
    /**
     * Email notifications will be sent according to these preferences to the
     * email address of the user who owns this transfer config.
     */
    "emailPreferences"?: {
      /**
       * If true, email notifications will be sent on transfer run failures.
       */
      "enableFailureEmail": boolean;
    };
    /**
     * Immutable. The geographic location where the transfer config should reside.
     * Examples: US, EU, asia-northeast1. The default value is US.
     */
    "location"?: string;
    /**
     * Pub/Sub topic where notifications will be sent after transfer runs
     * associated with this transfer config finish.
     */
    "notificationPubsubTopic"?: string;
    "params": {
      [key: string]: string;
    };
    /**
     * The project that this resource belongs to.
     */
    "projectRef": {
      /**
       * Allowed value: The `name` field of a `Project` resource.
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
       * Allowed value: The `name` field of a `Project` resource.
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
       * Allowed value: The `name` field of a `Project` resource.
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
       * Allowed value: The `name` field of a `Project` resource.
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
       * Allowed value: The `name` field of a `Project` resource.
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
       * Allowed value: The `name` field of a `Project` resource.
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
       * Allowed value: The `name` field of a `Project` resource.
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
     * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
     */
    "resourceID"?: string;
    /**
     * Data transfer schedule. If the data source does not support a custom
     * schedule, this should be empty. If it is empty, the default value for
     * the data source will be used. The specified times are in UTC. Examples
     * of valid format: 1st,3rd monday of month 15:30, every wed,fri of jan,
     * jun 13:15, and first sunday of quarter 00:00. See more explanation
     * about the format here:
     * https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format
     * NOTE: the granularity should be at least 8 hours, or less frequent.
     */
    "schedule"?: string;
    /**
     * Options customizing the data transfer schedule.
     */
    "scheduleOptions"?: {
      /**
       * If true, automatic scheduling of data transfer runs for this
       * configuration will be disabled. The runs can be started on ad-hoc
       * basis using transferConfigs.startManualRuns API. When automatic
       * scheduling is disabled, the TransferConfig.schedule field will
       * be ignored.
       */
      "disableAutoScheduling"?: boolean;
      /**
       * Defines time to stop scheduling transfer runs. A transfer run cannot be
       * scheduled at or after the end time. The end time can be changed at any
       * moment. The time when a data transfer can be triggered manually is not
       * limited by this option.
       */
      "endTime"?: string;
      /**
       * Specifies time to start scheduling transfer runs. The first run will be
       * scheduled at or after the start time according to a recurrence pattern
       * defined in the schedule string. The start time can be changed at any
       * moment. The time when a data transfer can be triggered manually is not
       * limited by this option.
       */
      "startTime"?: string;
    };
    /**
     * Different parameters are configured primarily using the the 'params' field on this
     * resource. This block contains the parameters which contain secrets or passwords so that they can be marked
     * sensitive and hidden from plan output. The name of the field, eg: secret_access_key, will be the key
     * in the 'params' map in the api request.
     * 
     * Credentials may not be specified in both locations and will cause an error. Changing from one location
     * to a different credential configuration in the config will require an apply to update state.
     */
    "sensitiveParams"?: {
      /**
       * The Secret Access Key of the AWS account transferring data from.
       */
      "secretAccessKey": {
        /**
         * Value of the field. Cannot be used if 'valueFrom' is specified.
         */
        "value"?: string;
        /**
         * Source for the field's value. Cannot be used if 'value' is specified.
         */
        "valueFrom"?: {
          /**
           * Reference to a value with the given key in the given Secret in the resource's namespace.
           */
          "secretKeyRef"?: {
            /**
             * Key that identifies the value to be extracted.
             */
            "key": string;
            /**
             * Name of the Secret to extract a value from.
             */
            "name": string;
          };
        };
      } & (Exclude<{
        /**
         * Value of the field. Cannot be used if 'valueFrom' is specified.
         */
        "value": string;
        /**
         * Source for the field's value. Cannot be used if 'value' is specified.
         */
        "valueFrom"?: {
          /**
           * Reference to a value with the given key in the given Secret in the resource's namespace.
           */
          "secretKeyRef"?: {
            /**
             * Key that identifies the value to be extracted.
             */
            "key": string;
            /**
             * Name of the Secret to extract a value from.
             */
            "name": string;
          };
        };
      }, {
        /**
         * Value of the field. Cannot be used if 'valueFrom' is specified.
         */
        "value"?: string;
        /**
         * Source for the field's value. Cannot be used if 'value' is specified.
         */
        "valueFrom": {
          /**
           * Reference to a value with the given key in the given Secret in the resource's namespace.
           */
          "secretKeyRef"?: {
            /**
             * Key that identifies the value to be extracted.
             */
            "key": string;
            /**
             * Name of the Secret to extract a value from.
             */
            "name": string;
          };
        };
      }> | Exclude<{
        /**
         * Value of the field. Cannot be used if 'valueFrom' is specified.
         */
        "value"?: string;
        /**
         * Source for the field's value. Cannot be used if 'value' is specified.
         */
        "valueFrom": {
          /**
           * Reference to a value with the given key in the given Secret in the resource's namespace.
           */
          "secretKeyRef"?: {
            /**
             * Key that identifies the value to be extracted.
             */
            "key": string;
            /**
             * Name of the Secret to extract a value from.
             */
            "name": string;
          };
        };
      }, {
        /**
         * Value of the field. Cannot be used if 'valueFrom' is specified.
         */
        "value": string;
        /**
         * Source for the field's value. Cannot be used if 'value' is specified.
         */
        "valueFrom"?: {
          /**
           * Reference to a value with the given key in the given Secret in the resource's namespace.
           */
          "secretKeyRef"?: {
            /**
             * Key that identifies the value to be extracted.
             */
            "key": string;
            /**
             * Name of the Secret to extract a value from.
             */
            "name": string;
          };
        };
      }>);
    };
    /**
     * Service account email. If this field is set, transfer config will
     * be created with this service account credentials. It requires that
     * requesting user calling this API has permissions to act as this service account.
     */
    "serviceAccountName"?: string;
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
     * The resource name of the transfer config. Transfer config names have the
     * form projects/{projectId}/locations/{location}/transferConfigs/{configId}
     * or projects/{projectId}/transferConfigs/{configId},
     * where configId is usually a uuid, but this is not required.
     * The name is ignored when creating a transfer config.
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class BigQueryDataTransferConfig extends Model<IBigQueryDataTransferConfig> implements IBigQueryDataTransferConfig {
  "apiVersion": IBigQueryDataTransferConfig["apiVersion"];
  "kind": IBigQueryDataTransferConfig["kind"];
  "metadata"?: IBigQueryDataTransferConfig["metadata"];
  "spec": IBigQueryDataTransferConfig["spec"];
  "status"?: IBigQueryDataTransferConfig["status"];

static apiVersion: IBigQueryDataTransferConfig["apiVersion"] = "bigquerydatatransfer.cnrm.cloud.google.com/v1alpha1";
static kind: IBigQueryDataTransferConfig["kind"] = "BigQueryDataTransferConfig";
static is = createTypeMetaGuard<IBigQueryDataTransferConfig>(BigQueryDataTransferConfig);

constructor(data?: ModelData<IBigQueryDataTransferConfig>) {
  super();

  this.setDefinedProps({
    apiVersion: BigQueryDataTransferConfig.apiVersion,
    kind: BigQueryDataTransferConfig.kind,
    ...data
  } as IBigQueryDataTransferConfig);
}
}


setValidateFunc(BigQueryDataTransferConfig, validate as ValidateFunc<IBigQueryDataTransferConfig>);
