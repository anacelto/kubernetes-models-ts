import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/BigqueryCnrmCloudGoogleComV1beta1BigQueryDataset";

export interface IBigQueryDataset {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "bigquery.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "BigQueryDataset";
  "metadata"?: IObjectMeta;
  "spec"?: {
    /**
     * An array of objects that define dataset access for one or more entities.
     */
    "access"?: Array<{
      /**
       * Grants all resources of particular types in a particular dataset read access to the current dataset.
       */
      "dataset"?: {
        /**
         * The dataset this entry applies to.
         */
        "dataset": {
          /**
           * The ID of the dataset containing this table.
           */
          "datasetId": string;
          /**
           * The ID of the project containing this table.
           */
          "projectId": string;
        };
        /**
         * Which resources in the dataset this entry applies to. Currently, only views are supported,
         * but additional target types may be added in the future. Possible values: VIEWS.
         */
        "targetTypes": Array<string>;
      };
      /**
       * A domain to grant access to. Any users signed in with the
       * domain specified will be granted the specified access.
       */
      "domain"?: string;
      /**
       * An email address of a Google Group to grant access to.
       */
      "groupByEmail"?: string;
      /**
       * Describes the rights granted to the user specified by the other
       * member of the access object. Basic, predefined, and custom roles
       * are supported. Predefined roles that have equivalent basic roles
       * are swapped by the API to their basic counterparts. See
       * [official docs](https://cloud.google.com/bigquery/docs/access-control).
       */
      "role"?: string;
      /**
       * A routine from a different dataset to grant access to. Queries
       * executed against that routine will have read access to tables in
       * this dataset. The role field is not required when this field is
       * set. If that routine is updated by any user, access to the routine
       * needs to be granted again via an update operation.
       */
      "routine"?: {
        /**
         * The ID of the dataset containing this table.
         */
        "datasetId": string;
        /**
         * The ID of the project containing this table.
         */
        "projectId": string;
        /**
         * The ID of the routine. The ID must contain only letters (a-z,
         * A-Z), numbers (0-9), or underscores (_). The maximum length
         * is 256 characters.
         */
        "routineId": string;
      };
      /**
       * A special group to grant access to. Possible values include:
       * 
       * 
       * \* 'projectOwners': Owners of the enclosing project.
       * 
       * 
       * \* 'projectReaders': Readers of the enclosing project.
       * 
       * 
       * \* 'projectWriters': Writers of the enclosing project.
       * 
       * 
       * \* 'allAuthenticatedUsers': All authenticated BigQuery users.
       */
      "specialGroup"?: string;
      /**
       * An email address of a user to grant access to. For example:
       * fred@example.com.
       */
      "userByEmail"?: string;
      /**
       * A view from a different dataset to grant access to. Queries
       * executed against that view will have read access to tables in
       * this dataset. The role field is not required when this field is
       * set. If that view is updated by any user, access to the view
       * needs to be granted again via an update operation.
       */
      "view"?: {
        /**
         * The ID of the dataset containing this table.
         */
        "datasetId": string;
        /**
         * The ID of the project containing this table.
         */
        "projectId": string;
        /**
         * The ID of the table. The ID must contain only letters (a-z,
         * A-Z), numbers (0-9), or underscores (_). The maximum length
         * is 1,024 characters.
         */
        "tableId": string;
      };
    }>;
    /**
     * Defines the default collation specification of future tables created
     * in the dataset. If a table is created in this dataset without table-level
     * default collation, then the table inherits the dataset default collation,
     * which is applied to the string fields that do not have explicit collation
     * specified. A change to this field affects only tables created afterwards,
     * and does not alter the existing tables.
     * 
     * The following values are supported:
     * - 'und:ci': undetermined locale, case insensitive.
     * - '': empty string. Default to case-sensitive behavior.
     */
    "defaultCollation"?: string;
    /**
     * The default encryption key for all tables in the dataset. Once this property is set,
     * all newly-created partitioned tables in the dataset will have encryption key set to
     * this value, unless table creation request (or query) overrides the key.
     */
    "defaultEncryptionConfiguration"?: {
      /**
       * Describes the Cloud KMS encryption key that will be used to protect destination
       * BigQuery table. The BigQuery Service Account associated with your project requires
       * access to this encryption key.
       */
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
    };
    /**
     * The default partition expiration for all partitioned tables in
     * the dataset, in milliseconds.
     * 
     * 
     * Once this property is set, all newly-created partitioned tables in
     * the dataset will have an 'expirationMs' property in the 'timePartitioning'
     * settings set to this value, and changing the value will only
     * affect new tables, not existing ones. The storage in a partition will
     * have an expiration time of its partition time plus this value.
     * Setting this property overrides the use of 'defaultTableExpirationMs'
     * for partitioned tables: only one of 'defaultTableExpirationMs' and
     * 'defaultPartitionExpirationMs' will be used for any new partitioned
     * table. If you provide an explicit 'timePartitioning.expirationMs' when
     * creating or updating a partitioned table, that value takes precedence
     * over the default partition expiration time indicated by this property.
     */
    "defaultPartitionExpirationMs"?: number;
    /**
     * The default lifetime of all tables in the dataset, in milliseconds.
     * The minimum value is 3600000 milliseconds (one hour).
     * 
     * 
     * Once this property is set, all newly-created tables in the dataset
     * will have an 'expirationTime' property set to the creation time plus
     * the value in this property, and changing the value will only affect
     * new tables, not existing ones. When the 'expirationTime' for a given
     * table is reached, that table will be deleted automatically.
     * If a table's 'expirationTime' is modified or removed before the
     * table expires, or if you provide an explicit 'expirationTime' when
     * creating a table, that value takes precedence over the default
     * expiration time indicated by this property.
     */
    "defaultTableExpirationMs"?: number;
    /**
     * A user-friendly description of the dataset.
     */
    "description"?: string;
    /**
     * A descriptive name for the dataset.
     */
    "friendlyName"?: string;
    /**
     * TRUE if the dataset and its table names are case-insensitive, otherwise FALSE.
     * By default, this is FALSE, which means the dataset and its table names are
     * case-sensitive. This field does not affect routine references.
     */
    "isCaseInsensitive"?: boolean;
    /**
     * Immutable. The geographic location where the dataset should reside.
     * See [official docs](https://cloud.google.com/bigquery/docs/dataset-locations).
     * 
     * 
     * There are two types of locations, regional or multi-regional. A regional
     * location is a specific geographic place, such as Tokyo, and a multi-regional
     * location is a large geographic area, such as the United States, that
     * contains at least two geographic places.
     * 
     * 
     * The default value is multi-regional location 'US'.
     * Changing this forces a new resource to be created.
     */
    "location"?: string;
    /**
     * Defines the time travel window in hours. The value can be from 48 to 168 hours (2 to 7 days).
     */
    "maxTimeTravelHours"?: string;
    /**
     * The project that this resource belongs to.
     */
    "projectRef"?: {
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
     * Immutable. Optional. The datasetId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Specifies the storage billing model for the dataset.
     * Set this flag value to LOGICAL to use logical bytes for storage billing,
     * or to PHYSICAL to use physical bytes instead.
     * 
     * LOGICAL is the default if this flag isn't specified.
     */
    "storageBillingModel"?: string;
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
     * The time when this dataset was created, in milliseconds since the
     * epoch.
     */
    "creationTime"?: number;
    /**
     * A hash of the resource.
     */
    "etag"?: string;
    /**
     * The date when this dataset or any of its tables was last modified, in
     * milliseconds since the epoch.
     */
    "lastModifiedTime"?: number;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    "selfLink"?: string;
  };
}

export class BigQueryDataset extends Model<IBigQueryDataset> implements IBigQueryDataset {
  "apiVersion": IBigQueryDataset["apiVersion"];
  "kind": IBigQueryDataset["kind"];
  "metadata"?: IBigQueryDataset["metadata"];
  "spec"?: IBigQueryDataset["spec"];
  "status"?: IBigQueryDataset["status"];

static apiVersion: IBigQueryDataset["apiVersion"] = "bigquery.cnrm.cloud.google.com/v1beta1";
static kind: IBigQueryDataset["kind"] = "BigQueryDataset";
static is = createTypeMetaGuard<IBigQueryDataset>(BigQueryDataset);

constructor(data?: ModelData<IBigQueryDataset>) {
  super();

  this.setDefinedProps({
    apiVersion: BigQueryDataset.apiVersion,
    kind: BigQueryDataset.kind,
    ...data
  } as IBigQueryDataset);
}
}


setValidateFunc(BigQueryDataset, validate as ValidateFunc<IBigQueryDataset>);
