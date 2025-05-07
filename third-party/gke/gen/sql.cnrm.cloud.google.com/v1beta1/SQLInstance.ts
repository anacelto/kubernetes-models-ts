import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/SqlCnrmCloudGoogleComV1beta1SQLInstance";

export interface ISQLInstance {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "sql.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "SQLInstance";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * The MySQL, PostgreSQL or SQL Server (beta) version to use. Supported values include MYSQL_5_6, MYSQL_5_7, MYSQL_8_0, POSTGRES_9_6, POSTGRES_10, POSTGRES_11, POSTGRES_12, POSTGRES_13, POSTGRES_14, POSTGRES_15, SQLSERVER_2017_STANDARD, SQLSERVER_2017_ENTERPRISE, SQLSERVER_2017_EXPRESS, SQLSERVER_2017_WEB. Database Version Policies includes an up-to-date reference of supported versions.
     */
    "databaseVersion"?: string;
    "encryptionKMSCryptoKeyRef"?: {
      /**
       * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
       * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
       * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
       * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
       * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
       * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
       * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
     * The type of the instance. The valid values are:- 'SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE', 'ON_PREMISES_INSTANCE' and 'READ_REPLICA_INSTANCE'.
     */
    "instanceType"?: string;
    /**
     * Maintenance version.
     */
    "maintenanceVersion"?: string;
    "masterInstanceRef"?: {
      /**
       * Allowed value: The `name` field of a `SQLInstance` resource.
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
       * Allowed value: The `name` field of a `SQLInstance` resource.
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
       * Allowed value: The `name` field of a `SQLInstance` resource.
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
       * Allowed value: The `name` field of a `SQLInstance` resource.
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
       * Allowed value: The `name` field of a `SQLInstance` resource.
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
       * Allowed value: The `name` field of a `SQLInstance` resource.
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
       * Allowed value: The `name` field of a `SQLInstance` resource.
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
     * Immutable. The region the instance will sit in. Note, Cloud SQL is not available in all regions. A valid region must be provided to use this resource. If a region is not provided in the resource definition, the provider region will be used instead, but this will be an apply-time error for instances if the provider region is not supported with Cloud SQL. If you choose not to provide the region argument for this resource, make sure you understand this.
     */
    "region"?: string;
    /**
     * The configuration for replication.
     */
    "replicaConfiguration"?: {
      /**
       * Immutable. PEM representation of the trusted CA's x509 certificate.
       */
      "caCertificate"?: string;
      /**
       * Immutable. PEM representation of the replica's x509 certificate.
       */
      "clientCertificate"?: string;
      /**
       * Immutable. PEM representation of the replica's private key. The corresponding public key in encoded in the client_certificate.
       */
      "clientKey"?: string;
      /**
       * Immutable. The number of seconds between connect retries. MySQL's default is 60 seconds.
       */
      "connectRetryInterval"?: number;
      /**
       * Immutable. Path to a SQL file in Google Cloud Storage from which replica instances are created. Format is gs://bucket/filename.
       */
      "dumpFilePath"?: string;
      /**
       * Immutable. Specifies if the replica is the failover target. If the field is set to true the replica will be designated as a failover replica. If the master instance fails, the replica instance will be promoted as the new master instance. Not supported for Postgres.
       */
      "failoverTarget"?: boolean;
      /**
       * Immutable. Time in ms between replication heartbeats.
       */
      "masterHeartbeatPeriod"?: number;
      /**
       * Immutable. Password for the replication connection.
       */
      "password"?: {
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
       * Immutable. Permissible ciphers for use in SSL encryption.
       */
      "sslCipher"?: string;
      /**
       * Immutable. Username for replication connection.
       */
      "username"?: string;
      /**
       * Immutable. True if the master's common name value is checked during the SSL handshake.
       */
      "verifyServerCertificate"?: boolean;
    };
    /**
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Initial root password. Required for MS SQL Server.
     */
    "rootPassword"?: {
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
     * The settings to use for the database. The configuration is detailed below.
     */
    "settings": {
      /**
       * This specifies when the instance should be active. Can be either ALWAYS, NEVER or ON_DEMAND.
       */
      "activationPolicy"?: string;
      "activeDirectoryConfig"?: {
        /**
         * Domain name of the Active Directory for SQL Server (e.g., mydomain.com).
         */
        "domain": string;
      };
      "advancedMachineFeatures"?: {
        /**
         * The number of threads per physical core. Can be 1 or 2.
         */
        "threadsPerCore"?: number;
      };
      /**
       * DEPRECATED. This property is only applicable to First Generation instances, and First Generation instances are now deprecated. see https://cloud.google.com/sql/docs/mysql/deprecation-notice for information on how to upgrade to Second Generation instances.
       * Specifying this field has no-ops; it's recommended to remove this field from your configuration.
       */
      "authorizedGaeApplications"?: Array<string>;
      /**
       * The availability type of the Cloud SQL instance, high availability
       * (REGIONAL) or single zone (ZONAL). For all instances, ensure that
       * settings.backup_configuration.enabled is set to true.
       * For MySQL instances, ensure that settings.backup_configuration.binary_log_enabled is set to true.
       * For Postgres instances, ensure that settings.backup_configuration.point_in_time_recovery_enabled
       * is set to true. Defaults to ZONAL.
       */
      "availabilityType"?: string;
      "backupConfiguration"?: {
        "backupRetentionSettings"?: {
          /**
           * Number of backups to retain.
           */
          "retainedBackups": number;
          /**
           * The unit that 'retainedBackups' represents. Defaults to COUNT.
           */
          "retentionUnit"?: string;
        };
        /**
         * True if binary logging is enabled. If settings.backup_configuration.enabled is false, this must be as well. Can only be used with MySQL.
         */
        "binaryLogEnabled"?: boolean;
        /**
         * True if backup configuration is enabled.
         */
        "enabled"?: boolean;
        /**
         * Location of the backup configuration.
         */
        "location"?: string;
        /**
         * True if Point-in-time recovery is enabled.
         */
        "pointInTimeRecoveryEnabled"?: boolean;
        /**
         * HH:MM format time indicating when backup configuration starts.
         */
        "startTime"?: string;
        /**
         * The number of days of transaction logs we retain for point in time restore, from 1-7. (For PostgreSQL Enterprise Plus instances, from 1 to 35.).
         */
        "transactionLogRetentionDays"?: number;
      };
      /**
       * Immutable. The name of server instance collation.
       */
      "collation"?: string;
      /**
       * Specifies if connections must use Cloud SQL connectors.
       */
      "connectorEnforcement"?: string;
      /**
       * DEPRECATED. This property is only applicable to First Generation instances, and First Generation instances are now deprecated. see https://cloud.google.com/sql/docs/mysql/deprecation-notice for information on how to upgrade to Second Generation instances.
       * Specifying this field has no-ops; it's recommended to remove this field from your configuration.
       */
      "crashSafeReplication"?: boolean;
      /**
       * Data cache configurations.
       */
      "dataCacheConfig"?: {
        /**
         * Whether data cache is enabled for the instance.
         */
        "dataCacheEnabled"?: boolean;
      };
      "databaseFlags"?: Array<{
        /**
         * Name of the flag.
         */
        "name": string;
        /**
         * Value of the flag.
         */
        "value": string;
      }>;
      /**
       * Configuration to protect against accidental instance deletion.
       */
      "deletionProtectionEnabled"?: boolean;
      "denyMaintenancePeriod"?: {
        /**
         * End date before which maintenance will not take place. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01.
         */
        "endDate": string;
        /**
         * Start date after which maintenance will not take place. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01.
         */
        "startDate": string;
        /**
         * Time in UTC when the "deny maintenance period" starts on start_date and ends on end_date. The time is in format: HH:mm:SS, i.e., 00:00:00.
         */
        "time": string;
      };
      /**
       * Enables auto-resizing of the storage size. Defaults to true.
       */
      "diskAutoresize"?: boolean;
      /**
       * The maximum size, in GB, to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.
       */
      "diskAutoresizeLimit"?: number;
      /**
       * The size of data disk, in GB. Size of a running instance cannot be reduced but can be increased. The minimum value is 10GB.
       */
      "diskSize"?: number;
      /**
       * Immutable. The type of data disk: PD_SSD or PD_HDD. Defaults to PD_SSD.
       */
      "diskType"?: string;
      /**
       * The edition of the instance, can be ENTERPRISE or ENTERPRISE_PLUS.
       */
      "edition"?: string;
      /**
       * Configuration of Query Insights.
       */
      "insightsConfig"?: {
        /**
         * True if Query Insights feature is enabled.
         */
        "queryInsightsEnabled"?: boolean;
        /**
         * Number of query execution plans captured by Insights per minute for all queries combined. Between 0 and 20. Default to 5.
         */
        "queryPlansPerMinute"?: number;
        /**
         * Maximum query length stored in bytes. Between 256 and 4500. Default to 1024.
         */
        "queryStringLength"?: number;
        /**
         * True if Query Insights will record application tags from query when enabled.
         */
        "recordApplicationTags"?: boolean;
        /**
         * True if Query Insights will record client address when enabled.
         */
        "recordClientAddress"?: boolean;
      };
      "ipConfiguration"?: {
        /**
         * The name of the allocated ip range for the private ip CloudSQL instance. For example: "google-managed-services-default". If set, the instance ip will be created in the allocated range. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]\*[a-z0-9])?.
         */
        "allocatedIpRange"?: string;
        "authorizedNetworks"?: Array<{
          "expirationTime"?: string;
          "name"?: string;
          "value": string;
        }>;
        /**
         * Whether Google Cloud services such as BigQuery are allowed to access data in this Cloud SQL instance over a private IP connection. SQLSERVER database type is not supported.
         */
        "enablePrivatePathForGoogleCloudServices"?: boolean;
        /**
         * Whether this Cloud SQL instance should be assigned a public IPV4 address. At least ipv4_enabled must be enabled or a private_network must be configured.
         */
        "ipv4Enabled"?: boolean;
        "privateNetworkRef"?: {
          /**
           * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
           * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
           * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
           * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
           * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
           * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
           * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
         * PSC settings for a Cloud SQL instance.
         */
        "pscConfig"?: Array<{
          /**
           * List of consumer projects that are allow-listed for PSC connections to this instance. This instance can be connected to with PSC from any network in these projects. Each consumer project in this list may be represented by a project number (numeric) or by a project id (alphanumeric).
           */
          "allowedConsumerProjects"?: Array<string>;
          /**
           * Whether PSC connectivity is enabled for this instance.
           */
          "pscEnabled"?: boolean;
        }>;
        "requireSsl"?: boolean;
      };
      "locationPreference"?: {
        /**
         * A Google App Engine application whose zone to remain in. Must be in the same region as this instance.
         */
        "followGaeApplication"?: string;
        /**
         * The preferred Compute Engine zone for the secondary/failover.
         */
        "secondaryZone"?: string;
        /**
         * The preferred compute engine zone.
         */
        "zone"?: string;
      };
      /**
       * Declares a one-hour maintenance window when an Instance can automatically restart to apply updates. The maintenance window is specified in UTC time.
       */
      "maintenanceWindow"?: {
        /**
         * Day of week (1-7), starting on Monday.
         */
        "day"?: number;
        /**
         * Hour of day (0-23), ignored if day not set.
         */
        "hour"?: number;
        /**
         * Receive updates earlier (canary) or later (stable).
         */
        "updateTrack"?: string;
      };
      "passwordValidationPolicy"?: {
        /**
         * Password complexity.
         */
        "complexity"?: string;
        /**
         * Disallow username as a part of the password.
         */
        "disallowUsernameSubstring"?: boolean;
        /**
         * Whether the password policy is enabled or not.
         */
        "enablePasswordPolicy": boolean;
        /**
         * Minimum number of characters allowed.
         */
        "minLength"?: number;
        /**
         * Minimum interval after which the password can be changed. This flag is only supported for PostgresSQL.
         */
        "passwordChangeInterval"?: string;
        /**
         * Number of previous passwords that cannot be reused.
         */
        "reuseInterval"?: number;
      };
      /**
       * Pricing plan for this instance, can only be PER_USE.
       */
      "pricingPlan"?: string;
      /**
       * DEPRECATED. This property is only applicable to First Generation instances, and First Generation instances are now deprecated. see https://cloud.google.com/sql/docs/mysql/deprecation-notice for information on how to upgrade to Second Generation instances.
       * Specifying this field has no-ops; it's recommended to remove this field from your configuration.
       */
      "replicationType"?: string;
      "sqlServerAuditConfig"?: {
        /**
         * The name of the destination bucket (e.g., gs://mybucket).
         */
        "bucketRef"?: {
          /**
           * Allowed value: The `url` field of a `StorageBucket` resource.
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
           * Allowed value: The `url` field of a `StorageBucket` resource.
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
           * Allowed value: The `url` field of a `StorageBucket` resource.
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
           * Allowed value: The `url` field of a `StorageBucket` resource.
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
           * Allowed value: The `url` field of a `StorageBucket` resource.
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
           * Allowed value: The `url` field of a `StorageBucket` resource.
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
           * Allowed value: The `url` field of a `StorageBucket` resource.
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
         * How long to keep generated audit files. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"..
         */
        "retentionInterval"?: string;
        /**
         * How often to upload generated audit files. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
         */
        "uploadInterval"?: string;
      };
      /**
       * The machine type to use. See tiers for more details and supported versions. Postgres supports only shared-core machine types, and custom machine types such as db-custom-2-13312. See the Custom Machine Type Documentation to learn about specifying custom machine types.
       */
      "tier": string;
      /**
       * Immutable. The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format.
       */
      "timeZone"?: string;
    };
  };
  "status"?: {
    /**
     * Available Maintenance versions.
     */
    "availableMaintenanceVersions"?: Array<string>;
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
     * The connection name of the instance to be used in connection strings. For example, when connecting with Cloud SQL Proxy.
     */
    "connectionName"?: string;
    /**
     * The dns name of the instance.
     */
    "dnsName"?: string;
    "firstIpAddress"?: string;
    /**
     * The type of the instance. The valid values are:- 'SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE', 'ON_PREMISES_INSTANCE' and 'READ_REPLICA_INSTANCE'.
     */
    "instanceType"?: string;
    "ipAddress"?: Array<{
      "ipAddress"?: string;
      "timeToRetire"?: string;
      "type"?: string;
    }>;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    "privateIpAddress"?: string;
    /**
     * The link to service attachment of PSC instance.
     */
    "pscServiceAttachmentLink"?: string;
    "publicIpAddress"?: string;
    /**
     * The URI of the created resource.
     */
    "selfLink"?: string;
    "serverCaCert"?: {
      /**
       * The CA Certificate used to connect to the SQL Instance via SSL.
       */
      "cert"?: string;
      /**
       * The CN valid for the CA Cert.
       */
      "commonName"?: string;
      /**
       * Creation time of the CA Cert.
       */
      "createTime"?: string;
      /**
       * Expiration time of the CA Cert.
       */
      "expirationTime"?: string;
      /**
       * SHA Fingerprint of the CA Cert.
       */
      "sha1Fingerprint"?: string;
    };
    /**
     * The service account email address assigned to the instance.
     */
    "serviceAccountEmailAddress"?: string;
  };
}

export class SQLInstance extends Model<ISQLInstance> implements ISQLInstance {
  "apiVersion": ISQLInstance["apiVersion"];
  "kind": ISQLInstance["kind"];
  "metadata"?: ISQLInstance["metadata"];
  "spec": ISQLInstance["spec"];
  "status"?: ISQLInstance["status"];

static apiVersion: ISQLInstance["apiVersion"] = "sql.cnrm.cloud.google.com/v1beta1";
static kind: ISQLInstance["kind"] = "SQLInstance";
static is = createTypeMetaGuard<ISQLInstance>(SQLInstance);

constructor(data?: ModelData<ISQLInstance>) {
  super();

  this.setDefinedProps({
    apiVersion: SQLInstance.apiVersion,
    kind: SQLInstance.kind,
    ...data
  } as ISQLInstance);
}
}


setValidateFunc(SQLInstance, validate as ValidateFunc<ISQLInstance>);
