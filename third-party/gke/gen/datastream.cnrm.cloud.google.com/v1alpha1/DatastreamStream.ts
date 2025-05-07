import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/DatastreamCnrmCloudGoogleComV1alpha1DatastreamStream";

export interface IDatastreamStream {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "datastream.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "DatastreamStream";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.
     */
    "backfillAll"?: {
      /**
       * MySQL data source objects to avoid backfilling.
       */
      "mysqlExcludedObjects"?: {
        /**
         * MySQL databases on the server.
         */
        "mysqlDatabases": Array<{
          /**
           * Database name.
           */
          "database": string;
          /**
           * Tables in the database.
           */
          "mysqlTables"?: Array<{
            /**
             * MySQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
             */
            "mysqlColumns"?: Array<{
              /**
               * Column collation.
               */
              "collation"?: string;
              /**
               * Column name.
               */
              "column"?: string;
              /**
               * The MySQL data type. Full data types list can be found here:
               * https://dev.mysql.com/doc/refman/8.0/en/data-types.html.
               */
              "dataType"?: string;
              /**
               * Column length.
               */
              "length"?: number;
              /**
               * Whether or not the column can accept a null value.
               */
              "nullable"?: boolean;
              /**
               * The ordinal position of the column in the table.
               */
              "ordinalPosition"?: number;
              /**
               * Whether or not the column represents a primary key.
               */
              "primaryKey"?: boolean;
            }>;
            /**
             * Table name.
             */
            "table": string;
          }>;
        }>;
      };
      /**
       * PostgreSQL data source objects to avoid backfilling.
       */
      "oracleExcludedObjects"?: {
        /**
         * Oracle schemas/databases in the database server.
         */
        "oracleSchemas": Array<{
          /**
           * Tables in the database.
           */
          "oracleTables"?: Array<{
            /**
             * Oracle columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
             */
            "oracleColumns"?: Array<{
              /**
               * Column name.
               */
              "column"?: string;
              /**
               * The Oracle data type. Full data types list can be found here:
               * https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Data-Types.html.
               */
              "dataType"?: string;
              /**
               * Column encoding.
               */
              "encoding"?: string;
              /**
               * Column length.
               */
              "length"?: number;
              /**
               * Whether or not the column can accept a null value.
               */
              "nullable"?: boolean;
              /**
               * The ordinal position of the column in the table.
               */
              "ordinalPosition"?: number;
              /**
               * Column precision.
               */
              "precision"?: number;
              /**
               * Whether or not the column represents a primary key.
               */
              "primaryKey"?: boolean;
              /**
               * Column scale.
               */
              "scale"?: number;
            }>;
            /**
             * Table name.
             */
            "table": string;
          }>;
          /**
           * Schema name.
           */
          "schema": string;
        }>;
      };
      /**
       * PostgreSQL data source objects to avoid backfilling.
       */
      "postgresqlExcludedObjects"?: {
        /**
         * PostgreSQL schemas on the server.
         */
        "postgresqlSchemas": Array<{
          /**
           * Tables in the schema.
           */
          "postgresqlTables"?: Array<{
            /**
             * PostgreSQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
             */
            "postgresqlColumns"?: Array<{
              /**
               * Column name.
               */
              "column"?: string;
              /**
               * The PostgreSQL data type. Full data types list can be found here:
               * https://www.postgresql.org/docs/current/datatype.html.
               */
              "dataType"?: string;
              /**
               * Column length.
               */
              "length"?: number;
              /**
               * Whether or not the column can accept a null value.
               */
              "nullable"?: boolean;
              /**
               * The ordinal position of the column in the table.
               */
              "ordinalPosition"?: number;
              /**
               * Column precision.
               */
              "precision"?: number;
              /**
               * Whether or not the column represents a primary key.
               */
              "primaryKey"?: boolean;
              /**
               * Column scale.
               */
              "scale"?: number;
            }>;
            /**
             * Table name.
             */
            "table": string;
          }>;
          /**
           * Database name.
           */
          "schema": string;
        }>;
      };
    };
    /**
     * Backfill strategy to disable automatic backfill for the Stream's objects.
     */
    "backfillNone"?: {
    };
    /**
     * Immutable. A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data
     * will be encrypted using an internal Stream-specific encryption key provisioned through KMS.
     */
    "customerManagedEncryptionKey"?: string;
    /**
     * Desired state of the Stream. Set this field to 'RUNNING' to start the stream, and 'PAUSED' to pause the stream.
     */
    "desiredState"?: string;
    /**
     * Destination connection profile configuration.
     */
    "destinationConfig": {
      /**
       * A configuration for how data should be loaded to Cloud Storage.
       */
      "bigqueryDestinationConfig"?: {
        /**
         * The guaranteed data freshness (in seconds) when querying tables created by the stream.
         * Editing this field will only affect new tables created in the future, but existing tables
         * will not be impacted. Lower values mean that queries will return fresher data, but may result in higher cost.
         * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.
         */
        "dataFreshness"?: string;
        /**
         * A single target dataset to which all data will be streamed.
         */
        "singleTargetDataset"?: {
          /**
           * Dataset ID in the format projects/{project}/datasets/{dataset_id} or
           * {project}:{dataset_id}.
           */
          "datasetId": string;
        };
        /**
         * Destination datasets are created so that hierarchy of the destination data objects matches the source hierarchy.
         */
        "sourceHierarchyDatasets"?: {
          /**
           * Dataset template used for dynamic dataset creation.
           */
          "datasetTemplate": {
            /**
             * If supplied, every created dataset will have its name prefixed by the provided value.
             * The prefix and name will be separated by an underscore. i.e. _.
             */
            "datasetIdPrefix"?: string;
            /**
             * Immutable. Describes the Cloud KMS encryption key that will be used to protect destination BigQuery
             * table. The BigQuery Service Account associated with your project requires access to this
             * encryption key. i.e. projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{cryptoKey}.
             * See https://cloud.google.com/bigquery/docs/customer-managed-encryption for more information.
             */
            "kmsKeyName"?: string;
            /**
             * The geographic location where the dataset should reside.
             * See https://cloud.google.com/bigquery/docs/locations for supported locations.
             */
            "location": string;
          };
        };
      };
      /**
       * Immutable. Destination connection profile resource. Format: projects/{project}/locations/{location}/connectionProfiles/{name}.
       */
      "destinationConnectionProfile": string;
      /**
       * A configuration for how data should be loaded to Cloud Storage.
       */
      "gcsDestinationConfig"?: {
        /**
         * AVRO file format configuration.
         */
        "avroFileFormat"?: {
        };
        /**
         * The maximum duration for which new events are added before a file is closed and a new file is created.
         * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.
         */
        "fileRotationInterval"?: string;
        /**
         * The maximum file size to be saved in the bucket.
         */
        "fileRotationMb"?: number;
        /**
         * JSON file format configuration.
         */
        "jsonFileFormat"?: {
          /**
           * Compression of the loaded JSON file. Possible values: ["NO_COMPRESSION", "GZIP"].
           */
          "compression"?: string;
          /**
           * The schema file format along JSON data files. Possible values: ["NO_SCHEMA_FILE", "AVRO_SCHEMA_FILE"].
           */
          "schemaFileFormat"?: string;
        };
        /**
         * Path inside the Cloud Storage bucket to write data to.
         */
        "path"?: string;
      };
    };
    /**
     * Display name.
     */
    "displayName": string;
    /**
     * Immutable. The name of the location this stream is located in.
     */
    "location": string;
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
     * Immutable. Optional. The streamId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Source connection profile configuration.
     */
    "sourceConfig": {
      /**
       * MySQL data source configuration.
       */
      "mysqlSourceConfig"?: {
        /**
         * MySQL objects to exclude from the stream.
         */
        "excludeObjects"?: {
          /**
           * MySQL databases on the server.
           */
          "mysqlDatabases": Array<{
            /**
             * Database name.
             */
            "database": string;
            /**
             * Tables in the database.
             */
            "mysqlTables"?: Array<{
              /**
               * MySQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
               */
              "mysqlColumns"?: Array<{
                /**
                 * Column collation.
                 */
                "collation"?: string;
                /**
                 * Column name.
                 */
                "column"?: string;
                /**
                 * The MySQL data type. Full data types list can be found here:
                 * https://dev.mysql.com/doc/refman/8.0/en/data-types.html.
                 */
                "dataType"?: string;
                /**
                 * Column length.
                 */
                "length"?: number;
                /**
                 * Whether or not the column can accept a null value.
                 */
                "nullable"?: boolean;
                /**
                 * The ordinal position of the column in the table.
                 */
                "ordinalPosition"?: number;
                /**
                 * Whether or not the column represents a primary key.
                 */
                "primaryKey"?: boolean;
              }>;
              /**
               * Table name.
               */
              "table": string;
            }>;
          }>;
        };
        /**
         * MySQL objects to retrieve from the source.
         */
        "includeObjects"?: {
          /**
           * MySQL databases on the server.
           */
          "mysqlDatabases": Array<{
            /**
             * Database name.
             */
            "database": string;
            /**
             * Tables in the database.
             */
            "mysqlTables"?: Array<{
              /**
               * MySQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
               */
              "mysqlColumns"?: Array<{
                /**
                 * Column collation.
                 */
                "collation"?: string;
                /**
                 * Column name.
                 */
                "column"?: string;
                /**
                 * The MySQL data type. Full data types list can be found here:
                 * https://dev.mysql.com/doc/refman/8.0/en/data-types.html.
                 */
                "dataType"?: string;
                /**
                 * Column length.
                 */
                "length"?: number;
                /**
                 * Whether or not the column can accept a null value.
                 */
                "nullable"?: boolean;
                /**
                 * The ordinal position of the column in the table.
                 */
                "ordinalPosition"?: number;
                /**
                 * Whether or not the column represents a primary key.
                 */
                "primaryKey"?: boolean;
              }>;
              /**
               * Table name.
               */
              "table": string;
            }>;
          }>;
        };
        /**
         * Maximum number of concurrent backfill tasks. The number should be non negative.
         * If not set (or set to 0), the system's default value will be used.
         */
        "maxConcurrentBackfillTasks"?: number;
        /**
         * Maximum number of concurrent CDC tasks. The number should be non negative.
         * If not set (or set to 0), the system's default value will be used.
         */
        "maxConcurrentCdcTasks"?: number;
      };
      /**
       * MySQL data source configuration.
       */
      "oracleSourceConfig"?: {
        /**
         * Configuration to drop large object values.
         */
        "dropLargeObjects"?: {
        };
        /**
         * Oracle objects to exclude from the stream.
         */
        "excludeObjects"?: {
          /**
           * Oracle schemas/databases in the database server.
           */
          "oracleSchemas": Array<{
            /**
             * Tables in the database.
             */
            "oracleTables"?: Array<{
              /**
               * Oracle columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
               */
              "oracleColumns"?: Array<{
                /**
                 * Column name.
                 */
                "column"?: string;
                /**
                 * The Oracle data type. Full data types list can be found here:
                 * https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Data-Types.html.
                 */
                "dataType"?: string;
                /**
                 * Column encoding.
                 */
                "encoding"?: string;
                /**
                 * Column length.
                 */
                "length"?: number;
                /**
                 * Whether or not the column can accept a null value.
                 */
                "nullable"?: boolean;
                /**
                 * The ordinal position of the column in the table.
                 */
                "ordinalPosition"?: number;
                /**
                 * Column precision.
                 */
                "precision"?: number;
                /**
                 * Whether or not the column represents a primary key.
                 */
                "primaryKey"?: boolean;
                /**
                 * Column scale.
                 */
                "scale"?: number;
              }>;
              /**
               * Table name.
               */
              "table": string;
            }>;
            /**
             * Schema name.
             */
            "schema": string;
          }>;
        };
        /**
         * Oracle objects to retrieve from the source.
         */
        "includeObjects"?: {
          /**
           * Oracle schemas/databases in the database server.
           */
          "oracleSchemas": Array<{
            /**
             * Tables in the database.
             */
            "oracleTables"?: Array<{
              /**
               * Oracle columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
               */
              "oracleColumns"?: Array<{
                /**
                 * Column name.
                 */
                "column"?: string;
                /**
                 * The Oracle data type. Full data types list can be found here:
                 * https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Data-Types.html.
                 */
                "dataType"?: string;
                /**
                 * Column encoding.
                 */
                "encoding"?: string;
                /**
                 * Column length.
                 */
                "length"?: number;
                /**
                 * Whether or not the column can accept a null value.
                 */
                "nullable"?: boolean;
                /**
                 * The ordinal position of the column in the table.
                 */
                "ordinalPosition"?: number;
                /**
                 * Column precision.
                 */
                "precision"?: number;
                /**
                 * Whether or not the column represents a primary key.
                 */
                "primaryKey"?: boolean;
                /**
                 * Column scale.
                 */
                "scale"?: number;
              }>;
              /**
               * Table name.
               */
              "table": string;
            }>;
            /**
             * Schema name.
             */
            "schema": string;
          }>;
        };
        /**
         * Maximum number of concurrent backfill tasks. The number should be non negative.
         * If not set (or set to 0), the system's default value will be used.
         */
        "maxConcurrentBackfillTasks"?: number;
        /**
         * Maximum number of concurrent CDC tasks. The number should be non negative.
         * If not set (or set to 0), the system's default value will be used.
         */
        "maxConcurrentCdcTasks"?: number;
        /**
         * Configuration to drop large object values.
         */
        "streamLargeObjects"?: {
        };
      };
      /**
       * PostgreSQL data source configuration.
       */
      "postgresqlSourceConfig"?: {
        /**
         * PostgreSQL objects to exclude from the stream.
         */
        "excludeObjects"?: {
          /**
           * PostgreSQL schemas on the server.
           */
          "postgresqlSchemas": Array<{
            /**
             * Tables in the schema.
             */
            "postgresqlTables"?: Array<{
              /**
               * PostgreSQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
               */
              "postgresqlColumns"?: Array<{
                /**
                 * Column name.
                 */
                "column"?: string;
                /**
                 * The PostgreSQL data type. Full data types list can be found here:
                 * https://www.postgresql.org/docs/current/datatype.html.
                 */
                "dataType"?: string;
                /**
                 * Column length.
                 */
                "length"?: number;
                /**
                 * Whether or not the column can accept a null value.
                 */
                "nullable"?: boolean;
                /**
                 * The ordinal position of the column in the table.
                 */
                "ordinalPosition"?: number;
                /**
                 * Column precision.
                 */
                "precision"?: number;
                /**
                 * Whether or not the column represents a primary key.
                 */
                "primaryKey"?: boolean;
                /**
                 * Column scale.
                 */
                "scale"?: number;
              }>;
              /**
               * Table name.
               */
              "table": string;
            }>;
            /**
             * Database name.
             */
            "schema": string;
          }>;
        };
        /**
         * PostgreSQL objects to retrieve from the source.
         */
        "includeObjects"?: {
          /**
           * PostgreSQL schemas on the server.
           */
          "postgresqlSchemas": Array<{
            /**
             * Tables in the schema.
             */
            "postgresqlTables"?: Array<{
              /**
               * PostgreSQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
               */
              "postgresqlColumns"?: Array<{
                /**
                 * Column name.
                 */
                "column"?: string;
                /**
                 * The PostgreSQL data type. Full data types list can be found here:
                 * https://www.postgresql.org/docs/current/datatype.html.
                 */
                "dataType"?: string;
                /**
                 * Column length.
                 */
                "length"?: number;
                /**
                 * Whether or not the column can accept a null value.
                 */
                "nullable"?: boolean;
                /**
                 * The ordinal position of the column in the table.
                 */
                "ordinalPosition"?: number;
                /**
                 * Column precision.
                 */
                "precision"?: number;
                /**
                 * Whether or not the column represents a primary key.
                 */
                "primaryKey"?: boolean;
                /**
                 * Column scale.
                 */
                "scale"?: number;
              }>;
              /**
               * Table name.
               */
              "table": string;
            }>;
            /**
             * Database name.
             */
            "schema": string;
          }>;
        };
        /**
         * Maximum number of concurrent backfill tasks. The number should be non
         * negative. If not set (or set to 0), the system's default value will be used.
         */
        "maxConcurrentBackfillTasks"?: number;
        /**
         * The name of the publication that includes the set of all tables
         * that are defined in the stream's include_objects.
         */
        "publication": string;
        /**
         * The name of the logical replication slot that's configured with
         * the pgoutput plugin.
         */
        "replicationSlot": string;
      };
      /**
       * Immutable. Source connection profile resource. Format: projects/{project}/locations/{location}/connectionProfiles/{name}.
       */
      "sourceConnectionProfile": string;
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
     * The stream's name.
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * The state of the stream.
     */
    "state"?: string;
  };
}

export class DatastreamStream extends Model<IDatastreamStream> implements IDatastreamStream {
  "apiVersion": IDatastreamStream["apiVersion"];
  "kind": IDatastreamStream["kind"];
  "metadata"?: IDatastreamStream["metadata"];
  "spec": IDatastreamStream["spec"];
  "status"?: IDatastreamStream["status"];

static apiVersion: IDatastreamStream["apiVersion"] = "datastream.cnrm.cloud.google.com/v1alpha1";
static kind: IDatastreamStream["kind"] = "DatastreamStream";
static is = createTypeMetaGuard<IDatastreamStream>(DatastreamStream);

constructor(data?: ModelData<IDatastreamStream>) {
  super();

  this.setDefinedProps({
    apiVersion: DatastreamStream.apiVersion,
    kind: DatastreamStream.kind,
    ...data
  } as IDatastreamStream);
}
}


setValidateFunc(DatastreamStream, validate as ValidateFunc<IDatastreamStream>);
