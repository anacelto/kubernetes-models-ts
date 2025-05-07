import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/DlpCnrmCloudGoogleComV1beta1DLPStoredInfoType";

export interface IDLPStoredInfoType {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "dlp.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "DLPStoredInfoType";
  "metadata"?: IObjectMeta;
  "spec"?: {
    /**
     * Description of the StoredInfoType (max 256 characters).
     */
    "description"?: string;
    /**
     * Store dictionary-based CustomInfoType.
     */
    "dictionary"?: {
      /**
       * Newline-delimited file of words in Cloud Storage. Only a single file is accepted.
       */
      "cloudStoragePath"?: {
        /**
         * A url representing a file or path (no wildcards) in Cloud Storage. Example: gs://[BUCKET_NAME]/dictionary.txt
         */
        "path": string;
      };
      /**
       * List of words or phrases to search for.
       */
      "wordList"?: {
        /**
         * Words or phrases defining the dictionary. The dictionary must contain at least one phrase and every phrase must contain at least 2 characters that are letters or digits. [required]
         */
        "words": Array<string>;
      };
    };
    /**
     * Display name of the StoredInfoType (max 256 characters).
     */
    "displayName"?: string;
    /**
     * StoredInfoType where findings are defined by a dictionary of phrases.
     */
    "largeCustomDictionary"?: {
      /**
       * Field in a BigQuery table where each cell represents a dictionary phrase.
       */
      "bigQueryField"?: {
        /**
         * Designated field in the BigQuery table.
         */
        "field"?: {
          /**
           * Name describing the field.
           */
          "name"?: string;
        };
        /**
         * Source table of the field.
         */
        "table"?: {
          "datasetRef"?: {
            /**
             * Dataset ID of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryDataset` resource (format: `projects/{{project}}/datasets/{{name}}`).
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
             * Dataset ID of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryDataset` resource (format: `projects/{{project}}/datasets/{{name}}`).
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
             * Dataset ID of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryDataset` resource (format: `projects/{{project}}/datasets/{{name}}`).
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
             * Dataset ID of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryDataset` resource (format: `projects/{{project}}/datasets/{{name}}`).
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
             * Dataset ID of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryDataset` resource (format: `projects/{{project}}/datasets/{{name}}`).
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
             * Dataset ID of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryDataset` resource (format: `projects/{{project}}/datasets/{{name}}`).
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
             * Dataset ID of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryDataset` resource (format: `projects/{{project}}/datasets/{{name}}`).
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
          "projectRef"?: {
            /**
             * The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.
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
             * The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.
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
             * The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.
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
             * The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.
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
             * The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.
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
             * The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.
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
             * The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.
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
          "tableRef"?: {
            /**
             * Name of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryTable` resource (format: `projects/{{project}}/datasets/{{dataset_id}}/tables/{{name}}`).
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
             * Name of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryTable` resource (format: `projects/{{project}}/datasets/{{dataset_id}}/tables/{{name}}`).
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
             * Name of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryTable` resource (format: `projects/{{project}}/datasets/{{dataset_id}}/tables/{{name}}`).
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
             * Name of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryTable` resource (format: `projects/{{project}}/datasets/{{dataset_id}}/tables/{{name}}`).
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
             * Name of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryTable` resource (format: `projects/{{project}}/datasets/{{dataset_id}}/tables/{{name}}`).
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
             * Name of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryTable` resource (format: `projects/{{project}}/datasets/{{dataset_id}}/tables/{{name}}`).
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
             * Name of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryTable` resource (format: `projects/{{project}}/datasets/{{dataset_id}}/tables/{{name}}`).
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
      };
      /**
       * Set of files containing newline-delimited lists of dictionary phrases.
       */
      "cloudStorageFileSet"?: {
        /**
         * The url, in the format `gs:///`. Trailing wildcard in the path is allowed.
         */
        "url": string;
      };
      /**
       * Location to store dictionary artifacts in Google Cloud Storage. These files will only be accessible by project owners and the DLP API. If any of these artifacts are modified, the dictionary is considered invalid and can no longer be used.
       */
      "outputPath"?: {
        /**
         * A url representing a file or path (no wildcards) in Cloud Storage. Example: gs://[BUCKET_NAME]/dictionary.txt
         */
        "path": string;
      };
    };
    /**
     * Immutable. The location of the resource
     */
    "location"?: string;
    /**
     * Immutable. The Organization that this resource belongs to. Only one of [organizationRef, projectRef] may be specified.
     */
    "organizationRef"?: {
      /**
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & (Exclude<{
      /**
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external": string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }> | Exclude<{
      /**
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external": string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external": string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & ({
      /**
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } | {
      /**
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace": string;
    })>);
    /**
     * Immutable. The Project that this resource belongs to. Only one of [organizationRef, projectRef] may be specified.
     */
    "projectRef"?: {
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
    })>);
    /**
     * Store regular expression-based StoredInfoType.
     */
    "regex"?: {
      /**
       * The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included.
       */
      "groupIndexes"?: Array<number>;
      /**
       * Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
       */
      "pattern": string;
    };
    /**
     * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
     */
    "resourceID"?: string;
  } & ({
    /**
     * Description of the StoredInfoType (max 256 characters).
     */
    "description"?: string;
    /**
     * Store dictionary-based CustomInfoType.
     */
    "dictionary"?: {
      /**
       * Newline-delimited file of words in Cloud Storage. Only a single file is accepted.
       */
      "cloudStoragePath"?: {
        /**
         * A url representing a file or path (no wildcards) in Cloud Storage. Example: gs://[BUCKET_NAME]/dictionary.txt
         */
        "path": string;
      };
      /**
       * List of words or phrases to search for.
       */
      "wordList"?: {
        /**
         * Words or phrases defining the dictionary. The dictionary must contain at least one phrase and every phrase must contain at least 2 characters that are letters or digits. [required]
         */
        "words": Array<string>;
      };
    };
    /**
     * Display name of the StoredInfoType (max 256 characters).
     */
    "displayName"?: string;
    /**
     * StoredInfoType where findings are defined by a dictionary of phrases.
     */
    "largeCustomDictionary"?: {
      /**
       * Field in a BigQuery table where each cell represents a dictionary phrase.
       */
      "bigQueryField"?: {
        /**
         * Designated field in the BigQuery table.
         */
        "field"?: {
          /**
           * Name describing the field.
           */
          "name"?: string;
        };
        /**
         * Source table of the field.
         */
        "table"?: {
          "datasetRef"?: {
            /**
             * Dataset ID of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryDataset` resource (format: `projects/{{project}}/datasets/{{name}}`).
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
             * Dataset ID of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryDataset` resource (format: `projects/{{project}}/datasets/{{name}}`).
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
             * Dataset ID of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryDataset` resource (format: `projects/{{project}}/datasets/{{name}}`).
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
             * Dataset ID of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryDataset` resource (format: `projects/{{project}}/datasets/{{name}}`).
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
             * Dataset ID of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryDataset` resource (format: `projects/{{project}}/datasets/{{name}}`).
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
             * Dataset ID of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryDataset` resource (format: `projects/{{project}}/datasets/{{name}}`).
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
             * Dataset ID of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryDataset` resource (format: `projects/{{project}}/datasets/{{name}}`).
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
          "projectRef"?: {
            /**
             * The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.
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
             * The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.
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
             * The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.
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
             * The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.
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
             * The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.
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
             * The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.
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
             * The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.
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
          "tableRef"?: {
            /**
             * Name of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryTable` resource (format: `projects/{{project}}/datasets/{{dataset_id}}/tables/{{name}}`).
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
             * Name of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryTable` resource (format: `projects/{{project}}/datasets/{{dataset_id}}/tables/{{name}}`).
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
             * Name of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryTable` resource (format: `projects/{{project}}/datasets/{{dataset_id}}/tables/{{name}}`).
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
             * Name of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryTable` resource (format: `projects/{{project}}/datasets/{{dataset_id}}/tables/{{name}}`).
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
             * Name of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryTable` resource (format: `projects/{{project}}/datasets/{{dataset_id}}/tables/{{name}}`).
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
             * Name of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryTable` resource (format: `projects/{{project}}/datasets/{{dataset_id}}/tables/{{name}}`).
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
             * Name of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryTable` resource (format: `projects/{{project}}/datasets/{{dataset_id}}/tables/{{name}}`).
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
      };
      /**
       * Set of files containing newline-delimited lists of dictionary phrases.
       */
      "cloudStorageFileSet"?: {
        /**
         * The url, in the format `gs:///`. Trailing wildcard in the path is allowed.
         */
        "url": string;
      };
      /**
       * Location to store dictionary artifacts in Google Cloud Storage. These files will only be accessible by project owners and the DLP API. If any of these artifacts are modified, the dictionary is considered invalid and can no longer be used.
       */
      "outputPath"?: {
        /**
         * A url representing a file or path (no wildcards) in Cloud Storage. Example: gs://[BUCKET_NAME]/dictionary.txt
         */
        "path": string;
      };
    };
    /**
     * Immutable. The location of the resource
     */
    "location"?: string;
    /**
     * Immutable. The Organization that this resource belongs to. Only one of [organizationRef, projectRef] may be specified.
     */
    "organizationRef": {
      /**
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & (Exclude<{
      /**
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external": string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }> | Exclude<{
      /**
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external": string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external": string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & ({
      /**
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } | {
      /**
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace": string;
    })>);
    /**
     * Immutable. The Project that this resource belongs to. Only one of [organizationRef, projectRef] may be specified.
     */
    "projectRef"?: {
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
    })>);
    /**
     * Store regular expression-based StoredInfoType.
     */
    "regex"?: {
      /**
       * The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included.
       */
      "groupIndexes"?: Array<number>;
      /**
       * Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
       */
      "pattern": string;
    };
    /**
     * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
     */
    "resourceID"?: string;
  } | {
    /**
     * Description of the StoredInfoType (max 256 characters).
     */
    "description"?: string;
    /**
     * Store dictionary-based CustomInfoType.
     */
    "dictionary"?: {
      /**
       * Newline-delimited file of words in Cloud Storage. Only a single file is accepted.
       */
      "cloudStoragePath"?: {
        /**
         * A url representing a file or path (no wildcards) in Cloud Storage. Example: gs://[BUCKET_NAME]/dictionary.txt
         */
        "path": string;
      };
      /**
       * List of words or phrases to search for.
       */
      "wordList"?: {
        /**
         * Words or phrases defining the dictionary. The dictionary must contain at least one phrase and every phrase must contain at least 2 characters that are letters or digits. [required]
         */
        "words": Array<string>;
      };
    };
    /**
     * Display name of the StoredInfoType (max 256 characters).
     */
    "displayName"?: string;
    /**
     * StoredInfoType where findings are defined by a dictionary of phrases.
     */
    "largeCustomDictionary"?: {
      /**
       * Field in a BigQuery table where each cell represents a dictionary phrase.
       */
      "bigQueryField"?: {
        /**
         * Designated field in the BigQuery table.
         */
        "field"?: {
          /**
           * Name describing the field.
           */
          "name"?: string;
        };
        /**
         * Source table of the field.
         */
        "table"?: {
          "datasetRef"?: {
            /**
             * Dataset ID of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryDataset` resource (format: `projects/{{project}}/datasets/{{name}}`).
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
             * Dataset ID of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryDataset` resource (format: `projects/{{project}}/datasets/{{name}}`).
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
             * Dataset ID of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryDataset` resource (format: `projects/{{project}}/datasets/{{name}}`).
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
             * Dataset ID of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryDataset` resource (format: `projects/{{project}}/datasets/{{name}}`).
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
             * Dataset ID of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryDataset` resource (format: `projects/{{project}}/datasets/{{name}}`).
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
             * Dataset ID of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryDataset` resource (format: `projects/{{project}}/datasets/{{name}}`).
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
             * Dataset ID of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryDataset` resource (format: `projects/{{project}}/datasets/{{name}}`).
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
          "projectRef"?: {
            /**
             * The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.
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
             * The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.
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
             * The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.
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
             * The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.
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
             * The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.
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
             * The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.
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
             * The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.
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
          "tableRef"?: {
            /**
             * Name of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryTable` resource (format: `projects/{{project}}/datasets/{{dataset_id}}/tables/{{name}}`).
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
             * Name of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryTable` resource (format: `projects/{{project}}/datasets/{{dataset_id}}/tables/{{name}}`).
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
             * Name of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryTable` resource (format: `projects/{{project}}/datasets/{{dataset_id}}/tables/{{name}}`).
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
             * Name of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryTable` resource (format: `projects/{{project}}/datasets/{{dataset_id}}/tables/{{name}}`).
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
             * Name of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryTable` resource (format: `projects/{{project}}/datasets/{{dataset_id}}/tables/{{name}}`).
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
             * Name of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryTable` resource (format: `projects/{{project}}/datasets/{{dataset_id}}/tables/{{name}}`).
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
             * Name of the table.
             * 
             * Allowed value: The Google Cloud resource name of a `BigQueryTable` resource (format: `projects/{{project}}/datasets/{{dataset_id}}/tables/{{name}}`).
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
      };
      /**
       * Set of files containing newline-delimited lists of dictionary phrases.
       */
      "cloudStorageFileSet"?: {
        /**
         * The url, in the format `gs:///`. Trailing wildcard in the path is allowed.
         */
        "url": string;
      };
      /**
       * Location to store dictionary artifacts in Google Cloud Storage. These files will only be accessible by project owners and the DLP API. If any of these artifacts are modified, the dictionary is considered invalid and can no longer be used.
       */
      "outputPath"?: {
        /**
         * A url representing a file or path (no wildcards) in Cloud Storage. Example: gs://[BUCKET_NAME]/dictionary.txt
         */
        "path": string;
      };
    };
    /**
     * Immutable. The location of the resource
     */
    "location"?: string;
    /**
     * Immutable. The Organization that this resource belongs to. Only one of [organizationRef, projectRef] may be specified.
     */
    "organizationRef"?: {
      /**
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & (Exclude<{
      /**
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external": string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }> | Exclude<{
      /**
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external": string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external": string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & ({
      /**
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } | {
      /**
       * Allowed value: The Google Cloud resource name of a Google Cloud Organization (format: `organizations/{{name}}`).
       */
      "external"?: string;
      /**
       * [WARNING] Organization not yet supported in Config Connector, use 'external' field to reference existing resources.
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace": string;
    })>);
    /**
     * Immutable. The Project that this resource belongs to. Only one of [organizationRef, projectRef] may be specified.
     */
    "projectRef": {
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
    })>);
    /**
     * Store regular expression-based StoredInfoType.
     */
    "regex"?: {
      /**
       * The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included.
       */
      "groupIndexes"?: Array<number>;
      /**
       * Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
       */
      "pattern": string;
    };
    /**
     * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
     */
    "resourceID"?: string;
  });
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
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class DLPStoredInfoType extends Model<IDLPStoredInfoType> implements IDLPStoredInfoType {
  "apiVersion": IDLPStoredInfoType["apiVersion"];
  "kind": IDLPStoredInfoType["kind"];
  "metadata"?: IDLPStoredInfoType["metadata"];
  "spec"?: IDLPStoredInfoType["spec"];
  "status"?: IDLPStoredInfoType["status"];

static apiVersion: IDLPStoredInfoType["apiVersion"] = "dlp.cnrm.cloud.google.com/v1beta1";
static kind: IDLPStoredInfoType["kind"] = "DLPStoredInfoType";
static is = createTypeMetaGuard<IDLPStoredInfoType>(DLPStoredInfoType);

constructor(data?: ModelData<IDLPStoredInfoType>) {
  super();

  this.setDefinedProps({
    apiVersion: DLPStoredInfoType.apiVersion,
    kind: DLPStoredInfoType.kind,
    ...data
  } as IDLPStoredInfoType);
}
}


setValidateFunc(DLPStoredInfoType, validate as ValidateFunc<IDLPStoredInfoType>);
