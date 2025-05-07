import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IDLPJobTrigger {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "dlp.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "DLPJobTrigger";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * User provided description (max 256 chars)
         */
        "description"?: string;
        /**
         * Display name (max 100 chars)
         */
        "displayName"?: string;
        /**
         * For inspect jobs, a snapshot of the configuration.
         */
        "inspectJob": {
            /**
             * Actions to execute at the completion of the job.
             */
            "actions"?: Array<{
                /**
                 * Enable email notification for project owners and editors on job's completion/failure.
                 */
                "jobNotificationEmails"?: {};
                /**
                 * Publish a notification to a pubsub topic.
                 */
                "pubSub"?: {
                    "topicRef"?: {
                        /**
                         * Cloud Pub/Sub topic to send notifications to. The topic must have given publishing access rights to the DLP API service account executing the long running DlpJob sending the notifications. Format is projects/{project}/topics/{topic}.
                         *
                         * Allowed value: The Google Cloud resource name of a `PubSubTopic` resource (format: `projects/{{project}}/topics/{{name}}`).
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
                         * Cloud Pub/Sub topic to send notifications to. The topic must have given publishing access rights to the DLP API service account executing the long running DlpJob sending the notifications. Format is projects/{project}/topics/{topic}.
                         *
                         * Allowed value: The Google Cloud resource name of a `PubSubTopic` resource (format: `projects/{{project}}/topics/{{name}}`).
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
                         * Cloud Pub/Sub topic to send notifications to. The topic must have given publishing access rights to the DLP API service account executing the long running DlpJob sending the notifications. Format is projects/{project}/topics/{topic}.
                         *
                         * Allowed value: The Google Cloud resource name of a `PubSubTopic` resource (format: `projects/{{project}}/topics/{{name}}`).
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
                         * Cloud Pub/Sub topic to send notifications to. The topic must have given publishing access rights to the DLP API service account executing the long running DlpJob sending the notifications. Format is projects/{project}/topics/{topic}.
                         *
                         * Allowed value: The Google Cloud resource name of a `PubSubTopic` resource (format: `projects/{{project}}/topics/{{name}}`).
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
                         * Cloud Pub/Sub topic to send notifications to. The topic must have given publishing access rights to the DLP API service account executing the long running DlpJob sending the notifications. Format is projects/{project}/topics/{topic}.
                         *
                         * Allowed value: The Google Cloud resource name of a `PubSubTopic` resource (format: `projects/{{project}}/topics/{{name}}`).
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
                         * Cloud Pub/Sub topic to send notifications to. The topic must have given publishing access rights to the DLP API service account executing the long running DlpJob sending the notifications. Format is projects/{project}/topics/{topic}.
                         *
                         * Allowed value: The Google Cloud resource name of a `PubSubTopic` resource (format: `projects/{{project}}/topics/{{name}}`).
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
                         * Cloud Pub/Sub topic to send notifications to. The topic must have given publishing access rights to the DLP API service account executing the long running DlpJob sending the notifications. Format is projects/{project}/topics/{topic}.
                         *
                         * Allowed value: The Google Cloud resource name of a `PubSubTopic` resource (format: `projects/{{project}}/topics/{{name}}`).
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
                 * Publish findings to Cloud Datahub.
                 */
                "publishFindingsToCloudDataCatalog"?: {};
                /**
                 * Publish summary to Cloud Security Command Center (Alpha).
                 */
                "publishSummaryToCscc"?: {};
                /**
                 * Enable Stackdriver metric dlp.googleapis.com/finding_count.
                 */
                "publishToStackdriver"?: {};
                /**
                 * Save resulting findings in a provided location.
                 */
                "saveFindings"?: {
                    /**
                     * Location to store findings outside of DLP.
                     */
                    "outputConfig"?: {
                        /**
                         * Store findings directly to DLP. If neither this or bigquery is chosen only summary stats of total infotype count will be stored. Quotes will not be stored to dlp findings. If quotes are needed, store to BigQuery. Currently only for inspect jobs.
                         */
                        "dlpStorage"?: {};
                        /**
                         * Schema used for writing the findings for Inspect jobs. This field is only used for Inspect and must be unspecified for Risk jobs. Columns are derived from the `Finding` object. If appending to an existing table, any columns from the predefined schema that are missing will be added. No columns in the existing table will be deleted. If unspecified, then all available columns will be used for a new table or an (existing) table with no schema, and no changes will be made to an existing table that has a schema. Only for use with external storage. Possible values: OUTPUT_SCHEMA_UNSPECIFIED, BASIC_COLUMNS, GCS_COLUMNS, DATASTORE_COLUMNS, BIG_QUERY_COLUMNS, ALL_COLUMNS
                         */
                        "outputSchema"?: string;
                        /**
                         * Store findings in an existing table or a new table in an existing dataset. If table_id is not set a new one will be generated for you with the following format: dlp_googleapis_yyyy_mm_dd_[dlp_job_id]. Pacific timezone will be used for generating the date details. For Inspect, each column in an existing output table must have the same name, type, and mode of a field in the `Finding` object. For Risk, an existing output table should be the output of a previous Risk analysis job run on the same source table, with the same privacy metric and quasi-identifiers. Risk jobs that analyze the same table but compute a different privacy metric, or use different sets of quasi-identifiers, cannot store their results in the same table.
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
                };
            }>;
            /**
             * How and what to scan for.
             */
            "inspectConfig"?: {
                /**
                 * CustomInfoTypes provided by the user. See https://cloud.google.com/dlp/docs/creating-custom-infotypes to learn more.
                 */
                "customInfoTypes"?: Array<{
                    /**
                     * Set of detection rules to apply to all findings of this CustomInfoType. Rules are applied in order that they are specified. Not supported for the `surrogate_type` CustomInfoType.
                     */
                    "detectionRules"?: Array<{
                        /**
                         * Hotword-based detection rule.
                         */
                        "hotwordRule"?: {
                            /**
                             * Regular expression pattern defining what qualifies as a hotword.
                             */
                            "hotwordRegex"?: {
                                /**
                                 * The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included.
                                 */
                                "groupIndexes"?: Array<number>;
                                /**
                                 * Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
                                 */
                                "pattern"?: string;
                            };
                            /**
                             * Likelihood adjustment to apply to all matching findings.
                             */
                            "likelihoodAdjustment"?: {
                                /**
                                 * Set the likelihood of a finding to a fixed value. Possible values: LIKELIHOOD_UNSPECIFIED, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY
                                 */
                                "fixedLikelihood"?: string;
                                /**
                                 * Increase or decrease the likelihood by the specified number of levels. For example, if a finding would be `POSSIBLE` without the detection rule and `relative_likelihood` is 1, then it is upgraded to `LIKELY`, while a value of -1 would downgrade it to `UNLIKELY`. Likelihood may never drop below `VERY_UNLIKELY` or exceed `VERY_LIKELY`, so applying an adjustment of 1 followed by an adjustment of -1 when base likelihood is `VERY_LIKELY` will result in a final likelihood of `LIKELY`.
                                 */
                                "relativeLikelihood"?: number;
                            };
                            /**
                             * Proximity of the finding within which the entire hotword must reside. The total length of the window cannot exceed 1000 characters. Note that the finding itself will be included in the window, so that hotwords may be used to match substrings of the finding itself. For example, the certainty of a phone number regex "(d{3}) d{3}-d{4}" could be adjusted upwards if the area code is known to be the local area code of a company office using the hotword regex "(xxx)", where "xxx" is the area code in question.
                             */
                            "proximity"?: {
                                /**
                                 * Number of characters after the finding to consider.
                                 */
                                "windowAfter"?: number;
                                /**
                                 * Number of characters before the finding to consider.
                                 */
                                "windowBefore"?: number;
                            };
                        };
                    }>;
                    /**
                     * A list of phrases to detect as a CustomInfoType.
                     */
                    "dictionary"?: {
                        /**
                         * Newline-delimited file of words in Cloud Storage. Only a single file is accepted.
                         */
                        "cloudStoragePath"?: {
                            /**
                             * A url representing a file or path (no wildcards) in Cloud Storage. Example: gs://[BUCKET_NAME]/dictionary.txt
                             */
                            "path"?: string;
                        };
                        /**
                         * List of words or phrases to search for.
                         */
                        "wordList"?: {
                            /**
                             * Words or phrases defining the dictionary. The dictionary must contain at least one phrase and every phrase must contain at least 2 characters that are letters or digits. [required]
                             */
                            "words"?: Array<string>;
                        };
                    };
                    /**
                     * If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned. It still can be used for rules matching. Possible values: EXCLUSION_TYPE_UNSPECIFIED, EXCLUSION_TYPE_EXCLUDE
                     */
                    "exclusionType"?: string;
                    /**
                     * CustomInfoType can either be a new infoType, or an extension of built-in infoType, when the name matches one of existing infoTypes and that infoType is specified in `InspectContent.info_types` field. Specifying the latter adds findings to the one detected by the system. If built-in info type is not specified in `InspectContent.info_types` list then the name is treated as a custom info type.
                     */
                    "infoType"?: {
                        /**
                         * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$-_]{1,64}`.
                         */
                        "name"?: string;
                        /**
                         * Optional version name for this InfoType.
                         */
                        "version"?: string;
                    };
                    /**
                     * Likelihood to return for this CustomInfoType. This base value can be altered by a detection rule if the finding meets the criteria specified by the rule. Defaults to `VERY_LIKELY` if not specified. Possible values: LIKELIHOOD_UNSPECIFIED, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY
                     */
                    "likelihood"?: string;
                    /**
                     * Regular expression based CustomInfoType.
                     */
                    "regex"?: {
                        /**
                         * The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included.
                         */
                        "groupIndexes"?: Array<number>;
                        /**
                         * Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
                         */
                        "pattern"?: string;
                    };
                    /**
                     * Load an existing `StoredInfoType` resource for use in `InspectDataSource`. Not currently supported in `InspectContent`.
                     */
                    "storedType"?: {
                        /**
                         * Timestamp indicating when the version of the `StoredInfoType` used for inspection was created. Output-only field, populated by the system.
                         */
                        "createTime"?: string;
                        "nameRef"?: {
                            /**
                             * Resource name of the requested `StoredInfoType`, for example `organizations/433245324/storedInfoTypes/432452342` or `projects/project-id/storedInfoTypes/432452342`.
                             *
                             * Allowed value: The Google Cloud resource name of a `DLPStoredInfoType` resource (format: `{{parent}}/storedInfoTypes/{{name}}`).
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
                             * Resource name of the requested `StoredInfoType`, for example `organizations/433245324/storedInfoTypes/432452342` or `projects/project-id/storedInfoTypes/432452342`.
                             *
                             * Allowed value: The Google Cloud resource name of a `DLPStoredInfoType` resource (format: `{{parent}}/storedInfoTypes/{{name}}`).
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
                             * Resource name of the requested `StoredInfoType`, for example `organizations/433245324/storedInfoTypes/432452342` or `projects/project-id/storedInfoTypes/432452342`.
                             *
                             * Allowed value: The Google Cloud resource name of a `DLPStoredInfoType` resource (format: `{{parent}}/storedInfoTypes/{{name}}`).
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
                             * Resource name of the requested `StoredInfoType`, for example `organizations/433245324/storedInfoTypes/432452342` or `projects/project-id/storedInfoTypes/432452342`.
                             *
                             * Allowed value: The Google Cloud resource name of a `DLPStoredInfoType` resource (format: `{{parent}}/storedInfoTypes/{{name}}`).
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
                             * Resource name of the requested `StoredInfoType`, for example `organizations/433245324/storedInfoTypes/432452342` or `projects/project-id/storedInfoTypes/432452342`.
                             *
                             * Allowed value: The Google Cloud resource name of a `DLPStoredInfoType` resource (format: `{{parent}}/storedInfoTypes/{{name}}`).
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
                             * Resource name of the requested `StoredInfoType`, for example `organizations/433245324/storedInfoTypes/432452342` or `projects/project-id/storedInfoTypes/432452342`.
                             *
                             * Allowed value: The Google Cloud resource name of a `DLPStoredInfoType` resource (format: `{{parent}}/storedInfoTypes/{{name}}`).
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
                             * Resource name of the requested `StoredInfoType`, for example `organizations/433245324/storedInfoTypes/432452342` or `projects/project-id/storedInfoTypes/432452342`.
                             *
                             * Allowed value: The Google Cloud resource name of a `DLPStoredInfoType` resource (format: `{{parent}}/storedInfoTypes/{{name}}`).
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
                     * Message for detecting output from deidentification transformations that support reversing.
                     */
                    "surrogateType"?: {};
                }>;
                /**
                 * When true, excludes type information of the findings. This is not used for data profiling.
                 */
                "excludeInfoTypes"?: boolean;
                /**
                 * When true, a contextual quote from the data that triggered a finding is included in the response; see Finding.quote. This is not used for data profiling.
                 */
                "includeQuote"?: boolean;
                /**
                 * Restricts what info_types to look for. The values must correspond to InfoType values returned by ListInfoTypes or listed at https://cloud.google.com/dlp/docs/infotypes-reference. When no InfoTypes or CustomInfoTypes are specified in a request, the system may automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. If you need precise control and predictability as to what detectors are run you should specify specific InfoTypes listed in the reference, otherwise a default list will be used, which may change over time.
                 */
                "infoTypes"?: Array<{
                    /**
                     * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$-_]{1,64}`.
                     */
                    "name"?: string;
                }>;
                /**
                 * Configuration to control the number of findings returned. This is not used for data profiling.
                 */
                "limits"?: {
                    /**
                     * Configuration of findings limit given for specified infoTypes.
                     */
                    "maxFindingsPerInfoType"?: Array<{
                        /**
                         * Type of information the findings limit applies to. Only one limit per info_type should be provided. If InfoTypeLimit does not have an info_type, the DLP API applies the limit against all info_types that are found but not specified in another InfoTypeLimit.
                         */
                        "infoType"?: {
                            /**
                             * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$-_]{1,64}`.
                             */
                            "name"?: string;
                            /**
                             * Optional version name for this InfoType.
                             */
                            "version"?: string;
                        };
                        /**
                         * Max findings limit for the given infoType.
                         */
                        "maxFindings"?: number;
                    }>;
                    /**
                     * Max number of findings that will be returned for each item scanned. When set within `InspectJobConfig`, the maximum returned is 2000 regardless if this is set higher. When set within `InspectContentRequest`, this field is ignored.
                     */
                    "maxFindingsPerItem"?: number;
                    /**
                     * Max number of findings that will be returned per request/job. When set within `InspectContentRequest`, the maximum returned is 2000 regardless if this is set higher.
                     */
                    "maxFindingsPerRequest"?: number;
                };
                /**
                 * Only returns findings equal or above this threshold. The default is POSSIBLE. See https://cloud.google.com/dlp/docs/likelihood to learn more. Possible values: LIKELIHOOD_UNSPECIFIED, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY
                 */
                "minLikelihood"?: string;
                /**
                 * Set of rules to apply to the findings for this InspectConfig. Exclusion rules, contained in the set are executed in the end, other rules are executed in the order they are specified for each info type.
                 */
                "ruleSet"?: Array<{
                    /**
                     * List of infoTypes this rule set is applied to.
                     */
                    "infoTypes"?: Array<{
                        /**
                         * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$-_]{1,64}`.
                         */
                        "name"?: string;
                        /**
                         * Optional version name for this InfoType.
                         */
                        "version"?: string;
                    }>;
                    /**
                     * Set of rules to be applied to infoTypes. The rules are applied in order.
                     */
                    "rules"?: Array<{
                        /**
                         * Exclusion rule.
                         */
                        "exclusionRule"?: {
                            /**
                             * Dictionary which defines the rule.
                             */
                            "dictionary"?: {
                                /**
                                 * Newline-delimited file of words in Cloud Storage. Only a single file is accepted.
                                 */
                                "cloudStoragePath"?: {
                                    /**
                                     * A url representing a file or path (no wildcards) in Cloud Storage. Example: gs://[BUCKET_NAME]/dictionary.txt
                                     */
                                    "path"?: string;
                                };
                                /**
                                 * List of words or phrases to search for.
                                 */
                                "wordList"?: {
                                    /**
                                     * Words or phrases defining the dictionary. The dictionary must contain at least one phrase and every phrase must contain at least 2 characters that are letters or digits. [required]
                                     */
                                    "words"?: Array<string>;
                                };
                            };
                            /**
                             * Set of infoTypes for which findings would affect this rule.
                             */
                            "excludeInfoTypes"?: {
                                /**
                                 * InfoType list in ExclusionRule rule drops a finding when it overlaps or contained within with a finding of an infoType from this list. For example, for `InspectionRuleSet.info_types` containing "PHONE_NUMBER"` and `exclusion_rule` containing `exclude_info_types.info_types` with "EMAIL_ADDRESS" the phone number findings are dropped if they overlap with EMAIL_ADDRESS finding. That leads to "555-222-2222@example.org" to generate only a single finding, namely email address.
                                 */
                                "infoTypes"?: Array<{
                                    /**
                                     * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$-_]{1,64}`.
                                     */
                                    "name"?: string;
                                    /**
                                     * Optional version name for this InfoType.
                                     */
                                    "version"?: string;
                                }>;
                            };
                            /**
                             * How the rule is applied, see MatchingType documentation for details. Possible values: MATCHING_TYPE_UNSPECIFIED, MATCHING_TYPE_FULL_MATCH, MATCHING_TYPE_PARTIAL_MATCH, MATCHING_TYPE_INVERSE_MATCH
                             */
                            "matchingType"?: string;
                            /**
                             * Regular expression which defines the rule.
                             */
                            "regex"?: {
                                /**
                                 * The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included.
                                 */
                                "groupIndexes"?: Array<number>;
                                /**
                                 * Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
                                 */
                                "pattern"?: string;
                            };
                        };
                        "hotwordRule"?: {
                            /**
                             * Regular expression pattern defining what qualifies as a hotword.
                             */
                            "hotwordRegex"?: {
                                /**
                                 * The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included.
                                 */
                                "groupIndexes"?: Array<number>;
                                /**
                                 * Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
                                 */
                                "pattern"?: string;
                            };
                            /**
                             * Likelihood adjustment to apply to all matching findings.
                             */
                            "likelihoodAdjustment"?: {
                                /**
                                 * Set the likelihood of a finding to a fixed value. Possible values: LIKELIHOOD_UNSPECIFIED, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY
                                 */
                                "fixedLikelihood"?: string;
                                /**
                                 * Increase or decrease the likelihood by the specified number of levels. For example, if a finding would be `POSSIBLE` without the detection rule and `relative_likelihood` is 1, then it is upgraded to `LIKELY`, while a value of -1 would downgrade it to `UNLIKELY`. Likelihood may never drop below `VERY_UNLIKELY` or exceed `VERY_LIKELY`, so applying an adjustment of 1 followed by an adjustment of -1 when base likelihood is `VERY_LIKELY` will result in a final likelihood of `LIKELY`.
                                 */
                                "relativeLikelihood"?: number;
                            };
                            /**
                             * Proximity of the finding within which the entire hotword must reside. The total length of the window cannot exceed 1000 characters. Note that the finding itself will be included in the window, so that hotwords may be used to match substrings of the finding itself. For example, the certainty of a phone number regex "(d{3}) d{3}-d{4}" could be adjusted upwards if the area code is known to be the local area code of a company office using the hotword regex "(xxx)", where "xxx" is the area code in question.
                             */
                            "proximity"?: {
                                /**
                                 * Number of characters after the finding to consider.
                                 */
                                "windowAfter"?: number;
                                /**
                                 * Number of characters before the finding to consider.
                                 */
                                "windowBefore"?: number;
                            };
                        };
                    }>;
                }>;
            };
            "inspectTemplateRef"?: {
                /**
                 * If provided, will be used as the default for all values in InspectConfig. `inspect_config` will be merged into the values persisted as part of the template.
                 *
                 * Allowed value: The Google Cloud resource name of a `DLPInspectTemplate` resource (format: `{{parent}}/inspectTemplates/{{name}}`).
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
                 * If provided, will be used as the default for all values in InspectConfig. `inspect_config` will be merged into the values persisted as part of the template.
                 *
                 * Allowed value: The Google Cloud resource name of a `DLPInspectTemplate` resource (format: `{{parent}}/inspectTemplates/{{name}}`).
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
                 * If provided, will be used as the default for all values in InspectConfig. `inspect_config` will be merged into the values persisted as part of the template.
                 *
                 * Allowed value: The Google Cloud resource name of a `DLPInspectTemplate` resource (format: `{{parent}}/inspectTemplates/{{name}}`).
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
                 * If provided, will be used as the default for all values in InspectConfig. `inspect_config` will be merged into the values persisted as part of the template.
                 *
                 * Allowed value: The Google Cloud resource name of a `DLPInspectTemplate` resource (format: `{{parent}}/inspectTemplates/{{name}}`).
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
                 * If provided, will be used as the default for all values in InspectConfig. `inspect_config` will be merged into the values persisted as part of the template.
                 *
                 * Allowed value: The Google Cloud resource name of a `DLPInspectTemplate` resource (format: `{{parent}}/inspectTemplates/{{name}}`).
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
                 * If provided, will be used as the default for all values in InspectConfig. `inspect_config` will be merged into the values persisted as part of the template.
                 *
                 * Allowed value: The Google Cloud resource name of a `DLPInspectTemplate` resource (format: `{{parent}}/inspectTemplates/{{name}}`).
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
                 * If provided, will be used as the default for all values in InspectConfig. `inspect_config` will be merged into the values persisted as part of the template.
                 *
                 * Allowed value: The Google Cloud resource name of a `DLPInspectTemplate` resource (format: `{{parent}}/inspectTemplates/{{name}}`).
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
             * The data to scan.
             */
            "storageConfig": {
                /**
                 * BigQuery options.
                 */
                "bigQueryOptions"?: {
                    /**
                     * References to fields excluded from scanning. This allows you to skip inspection of entire columns which you know have no findings.
                     */
                    "excludedFields"?: Array<{
                        /**
                         * Name describing the field.
                         */
                        "name"?: string;
                    }>;
                    /**
                     * Table fields that may uniquely identify a row within the table. When `actions.saveFindings.outputConfig.table` is specified, the values of columns specified here are available in the output table under `location.content_locations.record_location.record_key.id_values`. Nested fields such as `person.birthdate.year` are allowed.
                     */
                    "identifyingFields"?: Array<{
                        /**
                         * Name describing the field.
                         */
                        "name"?: string;
                    }>;
                    /**
                     * Limit scanning only to these fields.
                     */
                    "includedFields"?: Array<{
                        /**
                         * Name describing the field.
                         */
                        "name"?: string;
                    }>;
                    /**
                     * Max number of rows to scan. If the table has more rows than this value, the rest of the rows are omitted. If not set, or if set to 0, all rows will be scanned. Only one of rows_limit and rows_limit_percent can be specified. Cannot be used in conjunction with TimespanConfig.
                     */
                    "rowsLimit"?: number;
                    /**
                     * Max percentage of rows to scan. The rest are omitted. The number of rows scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one of rows_limit and rows_limit_percent can be specified. Cannot be used in conjunction with TimespanConfig.
                     */
                    "rowsLimitPercent"?: number;
                    /**
                     *  Possible values: SAMPLE_METHOD_UNSPECIFIED, TOP, RANDOM_START
                     */
                    "sampleMethod"?: string;
                    /**
                     * Complete BigQuery table reference.
                     */
                    "tableReference": {
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
                 * Google Cloud Storage options.
                 */
                "cloudStorageOptions"?: {
                    /**
                     * Max number of bytes to scan from a file. If a scanned file's size is bigger than this value then the rest of the bytes are omitted. Only one of bytes_limit_per_file and bytes_limit_per_file_percent can be specified. Cannot be set if de-identification is requested.
                     */
                    "bytesLimitPerFile"?: number;
                    /**
                     * Max percentage of bytes to scan from a file. The rest are omitted. The number of bytes scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one of bytes_limit_per_file and bytes_limit_per_file_percent can be specified. Cannot be set if de-identification is requested.
                     */
                    "bytesLimitPerFilePercent"?: number;
                    /**
                     * The set of one or more files to scan.
                     */
                    "fileSet"?: {
                        /**
                         * The regex-filtered set of files to scan. Exactly one of `url` or `regex_file_set` must be set.
                         */
                        "regexFileSet"?: {
                            "bucketRef": {
                                /**
                                 * The name of a Cloud Storage bucket. Required.
                                 *
                                 * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
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
                                 * The name of a Cloud Storage bucket. Required.
                                 *
                                 * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
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
                                 * The name of a Cloud Storage bucket. Required.
                                 *
                                 * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
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
                                 * The name of a Cloud Storage bucket. Required.
                                 *
                                 * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
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
                                 * The name of a Cloud Storage bucket. Required.
                                 *
                                 * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
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
                                 * The name of a Cloud Storage bucket. Required.
                                 *
                                 * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
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
                                 * The name of a Cloud Storage bucket. Required.
                                 *
                                 * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
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
                             * A list of regular expressions matching file paths to exclude. All files in the bucket that match at least one of these regular expressions will be excluded from the scan. Regular expressions use RE2 [syntax](https://github.com/google/re2/wiki/Syntax); a guide can be found under the google/re2 repository on GitHub.
                             */
                            "excludeRegex"?: Array<string>;
                            /**
                             * A list of regular expressions matching file paths to include. All files in the bucket that match at least one of these regular expressions will be included in the set of files, except for those that also match an item in `exclude_regex`. Leaving this field empty will match all files by default (this is equivalent to including `.\*` in the list). Regular expressions use RE2 [syntax](https://github.com/google/re2/wiki/Syntax); a guide can be found under the google/re2 repository on GitHub.
                             */
                            "includeRegex"?: Array<string>;
                        };
                        /**
                         * The Cloud Storage url of the file(s) to scan, in the format `gs:///`. Trailing wildcard in the path is allowed. If the url ends in a trailing slash, the bucket or directory represented by the url will be scanned non-recursively (content in sub-directories will not be scanned). This means that `gs://mybucket/` is equivalent to `gs://mybucket/\*`, and `gs://mybucket/directory/` is equivalent to `gs://mybucket/directory/\*`. Exactly one of `url` or `regex_file_set` must be set.
                         */
                        "url"?: string;
                    };
                    /**
                     * List of file type groups to include in the scan. If empty, all files are scanned and available data format processors are applied. In addition, the binary content of the selected files is always scanned as well. Images are scanned only as binary if the specified region does not support image inspection and no file_types were specified. Image inspection is restricted to 'global', 'us', 'asia', and 'europe'.
                     */
                    "fileTypes"?: Array<string>;
                    /**
                     * Limits the number of files to scan to this percentage of the input FileSet. Number of files scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0.
                     */
                    "filesLimitPercent"?: number;
                    /**
                     *  Possible values: SAMPLE_METHOD_UNSPECIFIED, TOP, RANDOM_START
                     */
                    "sampleMethod"?: string;
                };
                /**
                 * Google Cloud Datastore options.
                 */
                "datastoreOptions"?: {
                    /**
                     * The kind to process.
                     */
                    "kind"?: {
                        /**
                         * The name of the kind.
                         */
                        "name"?: string;
                    };
                    /**
                     * A partition ID identifies a grouping of entities. The grouping is always by project namespace ID may be empty.
                     */
                    "partitionId"?: {
                        /**
                         * If not empty, the ID of the namespace to which the entities belong.
                         */
                        "namespaceId"?: string;
                        "projectRef"?: {
                            /**
                             * The ID of the project to which the entities belong.
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
                             * The ID of the project to which the entities belong.
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
                             * The ID of the project to which the entities belong.
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
                             * The ID of the project to which the entities belong.
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
                             * The ID of the project to which the entities belong.
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
                             * The ID of the project to which the entities belong.
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
                             * The ID of the project to which the entities belong.
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
                    };
                };
                /**
                 * Hybrid inspection options.
                 */
                "hybridOptions"?: {
                    /**
                     * A short description of where the data is coming from. Will be stored once in the job. 256 max length.
                     */
                    "description"?: string;
                    /**
                     * To organize findings, these labels will be added to each finding. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]\*[a-z0-9])?`. Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]\*[a-z0-9])?)?`. No more than 10 labels can be associated with a given finding. Examples: \* `"environment" : "production"` \* `"pipeline" : "etl"`
                     */
                    "labels"?: {
                        [key: string]: string;
                    };
                    /**
                     * These are labels that each inspection request must include within their 'finding_labels' map. Request may contain others, but any missing one of these will be rejected. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]\*[a-z0-9])?`. No more than 10 keys can be required.
                     */
                    "requiredFindingLabelKeys"?: Array<string>;
                    /**
                     * If the container is a table, additional information to make findings meaningful such as the columns that are primary keys.
                     */
                    "tableOptions"?: {
                        /**
                         * The columns that are the primary keys for table objects included in ContentItem. A copy of this cell's value will stored alongside alongside each finding so that the finding can be traced to the specific row it came from. No more than 3 may be provided.
                         */
                        "identifyingFields"?: Array<{
                            /**
                             * Name describing the field.
                             */
                            "name"?: string;
                        }>;
                    };
                };
                "timespanConfig"?: {
                    /**
                     * When the job is started by a JobTrigger we will automatically figure out a valid start_time to avoid scanning files that have not been modified since the last time the JobTrigger executed. This will be based on the time of the execution of the last run of the JobTrigger.
                     */
                    "enableAutoPopulationOfTimespanConfig"?: boolean;
                    /**
                     * Exclude files, tables, or rows newer than this value. If not set, no upper time limit is applied.
                     */
                    "endTime"?: string;
                    /**
                     * Exclude files, tables, or rows older than this value. If not set, no lower time limit is applied.
                     */
                    "startTime"?: string;
                    /**
                     * Specification of the field containing the timestamp of scanned items. Used for data sources like Datastore and BigQuery. For BigQuery: If this value is not specified and the table was modified between the given start and end times, the entire table will be scanned. If this value is specified, then rows are filtered based on the given start and end times. Rows with a `NULL` value in the provided BigQuery column are skipped. Valid data types of the provided BigQuery column are: `INTEGER`, `DATE`, `TIMESTAMP`, and `DATETIME`. For Datastore: If this value is specified, then entities are filtered based on the given start and end times. If an entity does not contain the provided timestamp property or contains empty or invalid values, then it is included. Valid data types of the provided timestamp property are: `TIMESTAMP`.
                     */
                    "timestampField"?: {
                        /**
                         * Name describing the field.
                         */
                        "name"?: string;
                    };
                };
            };
        };
        /**
         * Immutable. The location of the resource
         */
        "location"?: string;
        /**
         * Immutable. The Project that this resource belongs to. Only one of [projectRef] may be specified.
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
         * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
         */
        "resourceID"?: string;
        /**
         * Immutable. Required. A status for this trigger. Possible values: STATUS_UNSPECIFIED, HEALTHY, PAUSED, CANCELLED
         */
        "status": string;
        /**
         * A list of triggers which will be OR'ed together. Only one in the list needs to trigger for a job to be started. The list may contain only a single Schedule trigger and must have at least one object.
         */
        "triggers": Array<{
            /**
             * For use with hybrid jobs. Jobs must be manually created and finished.
             */
            "manual"?: {};
            /**
             * Create a job on a repeating basis based on the elapse of time.
             */
            "schedule"?: {
                /**
                 * With this option a job is started a regular periodic basis. For example: every day (86400 seconds). A scheduled start time will be skipped if the previous execution has not ended when its scheduled time occurs. This value must be set to a time duration greater than or equal to 1 day and can be no longer than 60 days.
                 */
                "recurrencePeriodDuration"?: string;
            };
        }>;
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
         * Output only. The creation timestamp of a triggeredJob.
         */
        "createTime"?: string;
        /**
         * Output only. A stream of errors encountered when the trigger was activated. Repeated errors may result in the JobTrigger automatically being paused. Will return the last 100 errors. Whenever the JobTrigger is modified this list will be cleared.
         */
        "errors"?: Array<{
            /**
             * Detailed error codes and messages.
             */
            "details"?: {
                /**
                 * The status code, which should be an enum value of google.rpc.Code.
                 */
                "code"?: number;
                /**
                 * A list of messages that carry the error details. There is a common set of message types for APIs to use.
                 */
                "details"?: Array<{
                    /**
                     * A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one "/" character. The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading "." is not accepted). In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows: \* If no scheme is provided, `https` is assumed. \* An HTTP GET on the URL must yield a google.protobuf.Type value in binary format, or produce an error. \* Applications are allowed to cache lookup results based on the URL, or have them precompiled into a binary to avoid any lookup. Therefore, binary compatibility needs to be preserved on changes to types. (Use versioned type names to manage breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com. Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics.
                     */
                    "typeUrl"?: string;
                    /**
                     * Must be a valid serialized protocol buffer of the above specified type.
                     */
                    "value"?: string;
                }>;
                /**
                 * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
                 */
                "message"?: string;
            };
            /**
             * The times the error occurred.
             */
            "timestamps"?: Array<string>;
        }>;
        /**
         * Output only. The timestamp of the last time this trigger executed.
         */
        "lastRunTime"?: string;
        /**
         * Output only. The geographic location where this resource is stored.
         */
        "locationId"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        /**
         * Output only. The last update timestamp of a triggeredJob.
         */
        "updateTime"?: string;
    };
}
export declare class DLPJobTrigger extends Model<IDLPJobTrigger> implements IDLPJobTrigger {
    "apiVersion": IDLPJobTrigger["apiVersion"];
    "kind": IDLPJobTrigger["kind"];
    "metadata"?: IDLPJobTrigger["metadata"];
    "spec": IDLPJobTrigger["spec"];
    "status"?: IDLPJobTrigger["status"];
    static apiVersion: IDLPJobTrigger["apiVersion"];
    static kind: IDLPJobTrigger["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IDLPJobTrigger>;
    constructor(data?: ModelData<IDLPJobTrigger>);
}
