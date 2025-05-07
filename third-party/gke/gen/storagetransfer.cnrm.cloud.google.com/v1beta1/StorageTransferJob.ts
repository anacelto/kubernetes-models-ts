import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/StoragetransferCnrmCloudGoogleComV1beta1StorageTransferJob";

export interface IStorageTransferJob {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "storagetransfer.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "StorageTransferJob";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Unique description to identify the Transfer Job.
     */
    "description": string;
    /**
     * Notification configuration.
     */
    "notificationConfig"?: {
      /**
       * Event types for which a notification is desired. If empty, send notifications for all event types. The valid types are "TRANSFER_OPERATION_SUCCESS", "TRANSFER_OPERATION_FAILED", "TRANSFER_OPERATION_ABORTED".
       */
      "eventTypes"?: Array<string>;
      /**
       * The desired format of the notification message payloads. One of "NONE" or "JSON".
       */
      "payloadFormat": string;
      /**
       * The PubSubTopic to which to publish notifications.
       */
      "topicRef": {
        /**
         * Allowed value: string of the format `projects/{{project}}/topics/{{value}}`, where {{value}} is the `name` field of a `PubSubTopic` resource.
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
         * Allowed value: string of the format `projects/{{project}}/topics/{{value}}`, where {{value}} is the `name` field of a `PubSubTopic` resource.
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
         * Allowed value: string of the format `projects/{{project}}/topics/{{value}}`, where {{value}} is the `name` field of a `PubSubTopic` resource.
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
         * Allowed value: string of the format `projects/{{project}}/topics/{{value}}`, where {{value}} is the `name` field of a `PubSubTopic` resource.
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
         * Allowed value: string of the format `projects/{{project}}/topics/{{value}}`, where {{value}} is the `name` field of a `PubSubTopic` resource.
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
         * Allowed value: string of the format `projects/{{project}}/topics/{{value}}`, where {{value}} is the `name` field of a `PubSubTopic` resource.
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
         * Allowed value: string of the format `projects/{{project}}/topics/{{value}}`, where {{value}} is the `name` field of a `PubSubTopic` resource.
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
    /**
     * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
     */
    "resourceID"?: string;
    /**
     * Schedule specification defining when the Transfer Job should be scheduled to start, end and what time to run.
     */
    "schedule"?: {
      /**
       * Interval between the start of each scheduled transfer. If unspecified, the default value is 24 hours. This value may not be less than 1 hour. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
       */
      "repeatInterval"?: string;
      /**
       * The last day the recurring transfer will be run. If schedule_end_date is the same as schedule_start_date, the transfer will be executed only once.
       */
      "scheduleEndDate"?: {
        /**
         * Day of month. Must be from 1 to 31 and valid for the year and month.
         */
        "day": number;
        /**
         * Month of year. Must be from 1 to 12.
         */
        "month": number;
        /**
         * Year of date. Must be from 1 to 9999.
         */
        "year": number;
      };
      /**
       * The first day the recurring transfer is scheduled to run. If schedule_start_date is in the past, the transfer will run for the first time on the following day.
       */
      "scheduleStartDate": {
        /**
         * Day of month. Must be from 1 to 31 and valid for the year and month.
         */
        "day": number;
        /**
         * Month of year. Must be from 1 to 12.
         */
        "month": number;
        /**
         * Year of date. Must be from 1 to 9999.
         */
        "year": number;
      };
      /**
       * The time in UTC at which the transfer will be scheduled to start in a day. Transfers may start later than this time. If not specified, recurring and one-time transfers that are scheduled to run today will run immediately; recurring transfers that are scheduled to run on a future date will start at approximately midnight UTC on that date. Note that when configuring a transfer with the Cloud Platform Console, the transfer's start time in a day is specified in your local timezone.
       */
      "startTimeOfDay"?: {
        /**
         * Hours of day in 24 hour format. Should be from 0 to 23.
         */
        "hours": number;
        /**
         * Minutes of hour of day. Must be from 0 to 59.
         */
        "minutes": number;
        /**
         * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
         */
        "nanos": number;
        /**
         * Seconds of minutes of the time. Must normally be from 0 to 59.
         */
        "seconds": number;
      };
    };
    /**
     * Status of the job. Default: ENABLED. NOTE: The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.
     */
    "status"?: string;
    /**
     * Transfer specification.
     */
    "transferSpec": {
      /**
       * An AWS S3 data source.
       */
      "awsS3DataSource"?: {
        /**
         * AWS credentials block.
         */
        "awsAccessKey"?: {
          /**
           * AWS Key ID.
           */
          "accessKeyId": {
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
          /**
           * AWS Secret Access Key.
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
         * S3 Bucket name.
         */
        "bucketName": string;
        /**
         * S3 Bucket path in bucket to transfer.
         */
        "path"?: string;
        /**
         * The Amazon Resource Name (ARN) of the role to support temporary credentials via 'AssumeRoleWithWebIdentity'. For more information about ARNs, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns). When a role ARN is provided, Transfer Service fetches temporary credentials for the session using a 'AssumeRoleWithWebIdentity' call for the provided role using the [GoogleServiceAccount][] for this project.
         */
        "roleArn"?: string;
      };
      /**
       * An Azure Blob Storage data source.
       */
      "azureBlobStorageDataSource"?: {
        /**
         *  Credentials used to authenticate API requests to Azure.
         */
        "azureCredentials": {
          /**
           * Azure shared access signature.
           */
          "sasToken": {
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
         * The container to transfer from the Azure Storage account.
         */
        "container": string;
        /**
         * Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.
         */
        "path"?: string;
        /**
         * The name of the Azure Storage account.
         */
        "storageAccount": string;
      };
      /**
       * A Google Cloud Storage data sink.
       */
      "gcsDataSink"?: {
        "bucketRef": {
          /**
           * Allowed value: The `name` field of a `StorageBucket` resource.
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
           * Allowed value: The `name` field of a `StorageBucket` resource.
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
           * Allowed value: The `name` field of a `StorageBucket` resource.
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
           * Allowed value: The `name` field of a `StorageBucket` resource.
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
           * Allowed value: The `name` field of a `StorageBucket` resource.
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
           * Allowed value: The `name` field of a `StorageBucket` resource.
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
           * Allowed value: The `name` field of a `StorageBucket` resource.
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
         * Google Cloud Storage path in bucket to transfer.
         */
        "path"?: string;
      };
      /**
       * A Google Cloud Storage data source.
       */
      "gcsDataSource"?: {
        "bucketRef": {
          /**
           * Allowed value: The `name` field of a `StorageBucket` resource.
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
           * Allowed value: The `name` field of a `StorageBucket` resource.
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
           * Allowed value: The `name` field of a `StorageBucket` resource.
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
           * Allowed value: The `name` field of a `StorageBucket` resource.
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
           * Allowed value: The `name` field of a `StorageBucket` resource.
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
           * Allowed value: The `name` field of a `StorageBucket` resource.
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
           * Allowed value: The `name` field of a `StorageBucket` resource.
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
         * Google Cloud Storage path in bucket to transfer.
         */
        "path"?: string;
      };
      /**
       * A HTTP URL data source.
       */
      "httpDataSource"?: {
        /**
         * The URL that points to the file that stores the object list entries. This file must allow public access. Currently, only URLs with HTTP and HTTPS schemes are supported.
         */
        "listUrl": string;
      };
      /**
       * Only objects that satisfy these object conditions are included in the set of data source and data sink objects. Object conditions based on objects' last_modification_time do not exclude objects in a data sink.
       */
      "objectConditions"?: {
        /**
         * exclude_prefixes must follow the requirements described for include_prefixes.
         */
        "excludePrefixes"?: Array<string>;
        /**
         * If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes. If include_prefixes is not specified, all objects except those that have names starting with one of the exclude_prefixes must satisfy the object conditions.
         */
        "includePrefixes"?: Array<string>;
        /**
         * If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
         */
        "lastModifiedBefore"?: string;
        /**
         * If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
         */
        "lastModifiedSince"?: string;
        /**
         * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
         */
        "maxTimeElapsedSinceLastModification"?: string;
        /**
         * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
         */
        "minTimeElapsedSinceLastModification"?: string;
      };
      /**
       * A POSIX filesystem data sink.
       */
      "posixDataSink"?: {
        /**
         * Root directory path to the filesystem.
         */
        "rootDirectory": string;
      };
      /**
       * A POSIX filesystem data source.
       */
      "posixDataSource"?: {
        /**
         * Root directory path to the filesystem.
         */
        "rootDirectory": string;
      };
      /**
       * Immutable. Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.
       */
      "sinkAgentPoolName"?: string;
      /**
       * Immutable. Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.
       */
      "sourceAgentPoolName"?: string;
      /**
       * Characteristics of how to treat files from datasource and sink during job. If the option delete_objects_unique_in_sink is true, object conditions based on objects' last_modification_time are ignored and do not exclude objects in a data source or a data sink.
       */
      "transferOptions"?: {
        /**
         * Whether objects should be deleted from the source after they are transferred to the sink. Note that this option and delete_objects_unique_in_sink are mutually exclusive.
         */
        "deleteObjectsFromSourceAfterTransfer"?: boolean;
        /**
         * Whether objects that exist only in the sink should be deleted. Note that this option and delete_objects_from_source_after_transfer are mutually exclusive.
         */
        "deleteObjectsUniqueInSink"?: boolean;
        /**
         * Whether overwriting objects that already exist in the sink is allowed.
         */
        "overwriteObjectsAlreadyExistingInSink"?: boolean;
        /**
         * When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink.
         */
        "overwriteWhen"?: string;
      };
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
     * When the Transfer Job was created.
     */
    "creationTime"?: string;
    /**
     * When the Transfer Job was deleted.
     */
    "deletionTime"?: string;
    /**
     * When the Transfer Job was last modified.
     */
    "lastModificationTime"?: string;
    /**
     * The name of the Transfer Job.
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class StorageTransferJob extends Model<IStorageTransferJob> implements IStorageTransferJob {
  "apiVersion": IStorageTransferJob["apiVersion"];
  "kind": IStorageTransferJob["kind"];
  "metadata"?: IStorageTransferJob["metadata"];
  "spec": IStorageTransferJob["spec"];
  "status"?: IStorageTransferJob["status"];

static apiVersion: IStorageTransferJob["apiVersion"] = "storagetransfer.cnrm.cloud.google.com/v1beta1";
static kind: IStorageTransferJob["kind"] = "StorageTransferJob";
static is = createTypeMetaGuard<IStorageTransferJob>(StorageTransferJob);

constructor(data?: ModelData<IStorageTransferJob>) {
  super();

  this.setDefinedProps({
    apiVersion: StorageTransferJob.apiVersion,
    kind: StorageTransferJob.kind,
    ...data
  } as IStorageTransferJob);
}
}


setValidateFunc(StorageTransferJob, validate as ValidateFunc<IStorageTransferJob>);
