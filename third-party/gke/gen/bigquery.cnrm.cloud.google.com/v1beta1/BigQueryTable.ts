import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/BigqueryCnrmCloudGoogleComV1beta1BigQueryTable";

export interface IBigQueryTable {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "bigquery.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "BigQueryTable";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Specifies column names to use for data clustering. Up to four top-level columns are allowed, and should be specified in descending priority order.
     */
    "clustering"?: Array<string>;
    "datasetRef": {
      /**
       * Allowed value: The `name` field of a `BigQueryDataset` resource.
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
       * Allowed value: The `name` field of a `BigQueryDataset` resource.
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
       * Allowed value: The `name` field of a `BigQueryDataset` resource.
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
       * Allowed value: The `name` field of a `BigQueryDataset` resource.
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
       * Allowed value: The `name` field of a `BigQueryDataset` resource.
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
       * Allowed value: The `name` field of a `BigQueryDataset` resource.
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
       * Allowed value: The `name` field of a `BigQueryDataset` resource.
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
     * The field description.
     */
    "description"?: string;
    /**
     * Immutable. Specifies how the table should be encrypted. If left blank, the table will be encrypted with a Google-managed key; that process is transparent to the user.
     */
    "encryptionConfiguration"?: {
      "kmsKeyRef": {
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
       * The self link or full name of the kms key version used to encrypt this table.
       */
      "kmsKeyVersion"?: string;
    };
    /**
     * The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed.
     */
    "expirationTime"?: number;
    /**
     * Describes the data format, location, and other properties of a table stored outside of BigQuery. By defining these properties, the data source can then be queried as if it were a standard BigQuery table.
     */
    "externalDataConfiguration"?: {
      /**
       * Let BigQuery try to autodetect the schema and format of the table.
       */
      "autodetect": boolean;
      /**
       * Additional options if source_format is set to "AVRO".
       */
      "avroOptions"?: {
        /**
         * If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER).
         */
        "useAvroLogicalTypes": boolean;
      };
      /**
       * The compression type of the data source. Valid values are "NONE" or "GZIP".
       */
      "compression"?: string;
      /**
       * The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3. The connectionId can have the form "{{project}}.{{location}}.{{connection_id}}" or "projects/{{project}}/locations/{{location}}/connections/{{connection_id}}".
       */
      "connectionId"?: string;
      /**
       * Additional properties to set if source_format is set to "CSV".
       */
      "csvOptions"?: {
        /**
         * Indicates if BigQuery should accept rows that are missing trailing optional columns.
         */
        "allowJaggedRows"?: boolean;
        /**
         * Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false.
         */
        "allowQuotedNewlines"?: boolean;
        /**
         * The character encoding of the data. The supported values are UTF-8 or ISO-8859-1.
         */
        "encoding"?: string;
        /**
         * The separator for fields in a CSV file.
         */
        "fieldDelimiter"?: string;
        "quote": string;
        /**
         * The number of rows at the top of a CSV file that BigQuery will skip when reading the data.
         */
        "skipLeadingRows"?: number;
      };
      /**
       * Specifies how source URIs are interpreted for constructing the file set to load.  By default source URIs are expanded against the underlying storage.  Other options include specifying manifest files. Only applicable to object storage systems.
       */
      "fileSetSpecType"?: string;
      /**
       * Additional options if source_format is set to "GOOGLE_SHEETS".
       */
      "googleSheetsOptions"?: {
        /**
         * Range of a sheet to query from. Only used when non-empty. At least one of range or skip_leading_rows must be set. Typical format: "sheet_name!top_left_cell_id:bottom_right_cell_id" For example: "sheet1!A1:B20".
         */
        "range"?: string;
        /**
         * The number of rows at the top of the sheet that BigQuery will skip when reading the data. At least one of range or skip_leading_rows must be set.
         */
        "skipLeadingRows"?: number;
      };
      /**
       * When set, configures hive partitioning support. Not all storage formats support hive partitioning -- requesting hive partitioning on an unsupported format will lead to an error, as will providing an invalid specification.
       */
      "hivePartitioningOptions"?: {
        /**
         * When set, what mode of hive partitioning to use when reading data.
         */
        "mode"?: string;
        /**
         * If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.
         */
        "requirePartitionFilter"?: boolean;
        /**
         * When hive partition detection is requested, a common for all source uris must be required. The prefix must end immediately before the partition key encoding begins.
         */
        "sourceUriPrefix"?: string;
      };
      /**
       * Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false.
       */
      "ignoreUnknownValues"?: boolean;
      /**
       * Additional properties to set if sourceFormat is set to JSON.".
       */
      "jsonOptions"?: {
        /**
         * The character encoding of the data. The supported values are UTF-8, UTF-16BE, UTF-16LE, UTF-32BE, and UTF-32LE. The default value is UTF-8.
         */
        "encoding"?: string;
      };
      /**
       * The maximum number of bad records that BigQuery can ignore when reading data.
       */
      "maxBadRecords"?: number;
      /**
       * Metadata Cache Mode for the table. Set this to enable caching of metadata from external data source.
       */
      "metadataCacheMode"?: string;
      /**
       * Object Metadata is used to create Object Tables. Object Tables contain a listing of objects (with their metadata) found at the sourceUris. If ObjectMetadata is set, sourceFormat should be omitted.
       */
      "objectMetadata"?: string;
      /**
       * Additional properties to set if sourceFormat is set to PARQUET.".
       */
      "parquetOptions"?: {
        /**
         * Indicates whether to use schema inference specifically for Parquet LIST logical type.
         */
        "enableListInference"?: boolean;
        /**
         * Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.
         */
        "enumAsString"?: boolean;
      };
      /**
       * When creating an external table, the user can provide a reference file with the table schema. This is enabled for the following formats: AVRO, PARQUET, ORC.
       */
      "referenceFileSchemaUri"?: string;
      /**
       * Immutable. A JSON schema for the external table. Schema is required for CSV and JSON formats and is disallowed for Google Cloud Bigtable, Cloud Datastore backups, and Avro formats when using external tables.
       */
      "schema"?: string;
      /**
       *  Please see sourceFormat under ExternalDataConfiguration in Bigquery's public API documentation (https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#externaldataconfiguration) for supported formats. To use "GOOGLE_SHEETS" the scopes must include "googleapis.com/auth/drive.readonly".
       */
      "sourceFormat"?: string;
      /**
       * A list of the fully-qualified URIs that point to your data in Google Cloud.
       */
      "sourceUris": Array<string>;
    };
    /**
     * A descriptive name for the table.
     */
    "friendlyName"?: string;
    /**
     * If specified, configures this table as a materialized view.
     */
    "materializedView"?: {
      /**
       * Immutable. Allow non incremental materialized view definition. The default value is false.
       */
      "allowNonIncrementalDefinition"?: boolean;
      /**
       * Specifies if BigQuery should automatically refresh materialized view when the base table is updated. The default is true.
       */
      "enableRefresh"?: boolean;
      /**
       * Immutable. A query whose result is persisted.
       */
      "query": string;
      /**
       * Specifies maximum frequency at which this materialized view will be refreshed. The default is 1800000.
       */
      "refreshIntervalMs"?: number;
    };
    /**
     * The maximum staleness of data that could be returned when the table (or stale MV) is queried. Staleness encoded as a string encoding of sql IntervalValue type.
     */
    "maxStaleness"?: string;
    /**
     * If specified, configures range-based partitioning for this table.
     */
    "rangePartitioning"?: {
      /**
       * Immutable. The field used to determine how to create a range-based partition.
       */
      "field": string;
      /**
       * Information required to partition based on ranges. Structure is documented below.
       */
      "range": {
        /**
         * End of the range partitioning, exclusive.
         */
        "end": number;
        /**
         * The width of each range within the partition.
         */
        "interval": number;
        /**
         * Start of the range partitioning, inclusive.
         */
        "start": number;
      };
    };
    /**
     * Immutable. Optional. The tableId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * A JSON schema for the table.
     */
    "schema"?: string;
    /**
     * Defines the primary key and foreign keys.
     */
    "tableConstraints"?: {
      /**
       * Present only if the table has a foreign key. The foreign key is not enforced.
       */
      "foreignKeys"?: Array<{
        /**
         * The pair of the foreign key column and primary key column.
         */
        "columnReferences": {
          /**
           * The column in the primary key that are referenced by the referencingColumn.
           */
          "referencedColumn": string;
          /**
           * The column that composes the foreign key.
           */
          "referencingColumn": string;
        };
        /**
         * Set only if the foreign key constraint is named.
         */
        "name"?: string;
        /**
         * The table that holds the primary key and is referenced by this foreign key.
         */
        "referencedTable": {
          /**
           * The ID of the dataset containing this table.
           */
          "datasetId": string;
          /**
           * The ID of the project containing this table.
           */
          "projectId": string;
          /**
           * The ID of the table. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters. Certain operations allow suffixing of the table ID with a partition decorator, such as sample_table$20190123.
           */
          "tableId": string;
        };
      }>;
      /**
       * Represents a primary key constraint on a table's columns. Present only if the table has a primary key. The primary key is not enforced.
       */
      "primaryKey"?: {
        /**
         * The columns that are composed of the primary key constraint.
         */
        "columns": Array<string>;
      };
    };
    /**
     * If specified, configures time-based partitioning for this table.
     */
    "timePartitioning"?: {
      /**
       * Number of milliseconds for which to keep the storage for a partition.
       */
      "expirationMs"?: number;
      /**
       * Immutable. The field used to determine how to create a time-based partition. If time-based partitioning is enabled without this value, the table is partitioned based on the load time.
       */
      "field"?: string;
      /**
       * If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.
       */
      "requirePartitionFilter"?: boolean;
      /**
       * The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively.
       */
      "type": string;
    };
    /**
     * If specified, configures this table as a view.
     */
    "view"?: {
      /**
       * A query that BigQuery executes when the view is referenced.
       */
      "query": string;
      /**
       * Specifies whether to use BigQuery's legacy SQL for this view. The default value is true. If set to false, the view will use BigQuery's standard SQL.
       */
      "useLegacySql"?: boolean;
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
     * The time when this table was created, in milliseconds since the epoch.
     */
    "creationTime"?: number;
    /**
     * A hash of the resource.
     */
    "etag"?: string;
    /**
     * The time when this table was last modified, in milliseconds since the epoch.
     */
    "lastModifiedTime"?: number;
    /**
     * The geographic location where the table resides. This value is inherited from the dataset.
     */
    "location"?: string;
    /**
     * The geographic location where the table resides. This value is inherited from the dataset.
     */
    "numBytes"?: number;
    /**
     * The number of bytes in the table that are considered "long-term storage".
     */
    "numLongTermBytes"?: number;
    /**
     * The number of rows of data in this table, excluding any data in the streaming buffer.
     */
    "numRows"?: number;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * The URI of the created resource.
     */
    "selfLink"?: string;
    /**
     * Describes the table type.
     */
    "type"?: string;
  };
}

export class BigQueryTable extends Model<IBigQueryTable> implements IBigQueryTable {
  "apiVersion": IBigQueryTable["apiVersion"];
  "kind": IBigQueryTable["kind"];
  "metadata"?: IBigQueryTable["metadata"];
  "spec": IBigQueryTable["spec"];
  "status"?: IBigQueryTable["status"];

static apiVersion: IBigQueryTable["apiVersion"] = "bigquery.cnrm.cloud.google.com/v1beta1";
static kind: IBigQueryTable["kind"] = "BigQueryTable";
static is = createTypeMetaGuard<IBigQueryTable>(BigQueryTable);

constructor(data?: ModelData<IBigQueryTable>) {
  super();

  this.setDefinedProps({
    apiVersion: BigQueryTable.apiVersion,
    kind: BigQueryTable.kind,
    ...data
  } as IBigQueryTable);
}
}


setValidateFunc(BigQueryTable, validate as ValidateFunc<IBigQueryTable>);
