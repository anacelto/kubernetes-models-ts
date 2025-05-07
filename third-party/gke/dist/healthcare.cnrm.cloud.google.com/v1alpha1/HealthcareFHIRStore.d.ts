import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IHealthcareFHIRStore {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "healthcare.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "HealthcareFHIRStore";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Enable parsing of references within complex FHIR data types such as Extensions. If this value is set to ENABLED, then features like referential integrity and Bundle reference rewriting apply to all references. If this flag has not been specified the behavior of the FHIR store will not change, references in complex data types will not be parsed. New stores will have this value set to ENABLED by default after a notification period. Warning: turning on this flag causes processing existing resources to fail if they contain references to non-existent resources. Possible values: ["COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED", "DISABLED", "ENABLED"].
         */
        "complexDataTypeReferenceParsing"?: string;
        /**
         * Immutable. Identifies the dataset addressed by this request. Must be in the format
         * 'projects/{project}/locations/{location}/datasets/{dataset}'.
         */
        "dataset": string;
        /**
         * If true, overrides the default search behavior for this FHIR store to handling=strict which returns an error for unrecognized search parameters.
         * If false, uses the FHIR specification default handling=lenient which ignores unrecognized search parameters.
         * The handling can always be changed from the default on an individual API call by setting the HTTP header Prefer: handling=strict or Prefer: handling=lenient.
         */
        "defaultSearchHandlingStrict"?: boolean;
        /**
         * Immutable. Whether to disable referential integrity in this FHIR store. This field is immutable after FHIR store
         * creation. The default value is false, meaning that the API will enforce referential integrity and fail the
         * requests that will result in inconsistent state in the FHIR store. When this field is set to true, the API
         * will skip referential integrity check. Consequently, operations that rely on references, such as
         * Patient.get$everything, will not return all the results if broken references exist.
         *
         * \*\* Changing this property may recreate the FHIR store (removing all data) \*\*.
         */
        "disableReferentialIntegrity"?: boolean;
        /**
         * Immutable. Whether to disable resource versioning for this FHIR store. This field can not be changed after the creation
         * of FHIR store. If set to false, which is the default behavior, all write operations will cause historical
         * versions to be recorded automatically. The historical versions can be fetched through the history APIs, but
         * cannot be updated. If set to true, no historical versions will be kept. The server will send back errors for
         * attempts to read the historical versions.
         *
         * \*\* Changing this property may recreate the FHIR store (removing all data) \*\*.
         */
        "disableResourceVersioning"?: boolean;
        /**
         * Immutable. Whether to allow the bulk import API to accept history bundles and directly insert historical resource
         * versions into the FHIR store. Importing resource histories creates resource interactions that appear to have
         * occurred in the past, which clients may not want to allow. If set to false, history bundles within an import
         * will fail with an error.
         *
         * \*\* Changing this property may recreate the FHIR store (removing all data) \*\*
         *
         * \*\* This property can be changed manually in the Google Cloud Healthcare admin console without recreating the FHIR store \*\*.
         */
        "enableHistoryImport"?: boolean;
        /**
         * Whether this FHIR store has the updateCreate capability. This determines if the client can use an Update
         * operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through
         * the Create operation and attempts to Update a non-existent resource will return errors. Please treat the audit
         * logs with appropriate levels of care if client-specified resource IDs contain sensitive data such as patient
         * identifiers, those IDs will be part of the FHIR resource path recorded in Cloud audit logs and Cloud Pub/Sub
         * notifications.
         */
        "enableUpdateCreate"?: boolean;
        /**
         * A nested object resource.
         */
        "notificationConfig"?: {
            /**
             * The Cloud Pub/Sub topic that notifications of changes are published on. Supplied by the client.
             * PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
             * It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
             * was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
             * project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
             * Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.
             */
            "pubsubTopic": string;
        };
        /**
         * A list of notifcation configs that configure the notification for every resource mutation in this FHIR store.
         */
        "notificationConfigs"?: Array<{
            /**
             * The Cloud Pub/Sub topic that notifications of changes are published on. Supplied by the client.
             * PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
             * It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
             * was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
             * project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
             * Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.
             */
            "pubsubTopic": string;
            /**
             * Whether to send full FHIR resource to this Pub/Sub topic for Create and Update operation.
             * Note that setting this to true does not guarantee that all resources will be sent in the format of
             * full FHIR resource. When a resource change is too large or during heavy traffic, only the resource name will be
             * sent. Clients should always check the "payloadType" label from a Pub/Sub message to determine whether
             * it needs to fetch the full resource as a separate operation.
             */
            "sendFullResource"?: boolean;
            /**
             * Whether to send full FHIR resource to this Pub/Sub topic for deleting FHIR resource. Note that setting this to
             * true does not guarantee that all previous resources will be sent in the format of full FHIR resource. When a
             * resource change is too large or during heavy traffic, only the resource name will be sent. Clients should always
             * check the "payloadType" label from a Pub/Sub message to determine whether it needs to fetch the full previous
             * resource as a separate operation.
             */
            "sendPreviousResourceOnDelete"?: boolean;
        }>;
        /**
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
        /**
         * A list of streaming configs that configure the destinations of streaming export for every resource mutation in
         * this FHIR store. Each store is allowed to have up to 10 streaming configs. After a new config is added, the next
         * resource mutation is streamed to the new location in addition to the existing ones. When a location is removed
         * from the list, the server stops streaming to that location. Before adding a new config, you must add the required
         * bigquery.dataEditor role to your project's Cloud Healthcare Service Agent service account. Some lag (typically on
         * the order of dozens of seconds) is expected before the results show up in the streaming destination.
         */
        "streamConfigs"?: Array<{
            /**
             * The destination BigQuery structure that contains both the dataset location and corresponding schema config.
             * The output is organized in one table per resource type. The server reuses the existing tables (if any) that
             * are named after the resource types, e.g. "Patient", "Observation". When there is no existing table for a given
             * resource type, the server attempts to create one.
             * See the [streaming config reference](https://cloud.google.com/healthcare/docs/reference/rest/v1beta1/projects.locations.datasets.fhirStores#streamconfig) for more details.
             */
            "bigqueryDestination": {
                /**
                 * BigQuery URI to a dataset, up to 2000 characters long, in the format bq://projectId.bqDatasetId.
                 */
                "datasetUri": string;
                /**
                 * The configuration for the exported BigQuery schema.
                 */
                "schemaConfig": {
                    /**
                     * The configuration for exported BigQuery tables to be partitioned by FHIR resource's last updated time column.
                     */
                    "lastUpdatedPartitionConfig"?: {
                        /**
                         * Number of milliseconds for which to keep the storage for a partition.
                         */
                        "expirationMs"?: string;
                        /**
                         * Type of partitioning. Possible values: ["PARTITION_TYPE_UNSPECIFIED", "HOUR", "DAY", "MONTH", "YEAR"].
                         */
                        "type": string;
                    };
                    /**
                     * The depth for all recursive structures in the output analytics schema. For example, concept in the CodeSystem
                     * resource is a recursive structure; when the depth is 2, the CodeSystem table will have a column called
                     * concept.concept but not concept.concept.concept. If not specified or set to 0, the server will use the default
                     * value 2. The maximum depth allowed is 5.
                     */
                    "recursiveStructureDepth": number;
                    /**
                     * Specifies the output schema type.
                     *  \* ANALYTICS: Analytics schema defined by the FHIR community.
                     *   See https://github.com/FHIR/sql-on-fhir/blob/master/sql-on-fhir.md.
                     *  \* ANALYTICS_V2: Analytics V2, similar to schema defined by the FHIR community, with added support for extensions with one or more occurrences and contained resources in stringified JSON.
                     *  \* LOSSLESS: A data-driven schema generated from the fields present in the FHIR data being exported, with no additional simplification. Default value: "ANALYTICS" Possible values: ["ANALYTICS", "ANALYTICS_V2", "LOSSLESS"].
                     */
                    "schemaType"?: string;
                };
            };
            /**
             * Supply a FHIR resource type (such as "Patient" or "Observation"). See
             * https://www.hl7.org/fhir/valueset-resource-types.html for a list of all FHIR resource types. The server treats
             * an empty list as an intent to stream all the supported resource types in this FHIR store.
             */
            "resourceTypes"?: Array<string>;
        }>;
        /**
         * Immutable. The FHIR specification version. Default value: "STU3" Possible values: ["DSTU2", "STU3", "R4"].
         */
        "version"?: string;
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
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        /**
         * The fully qualified name of this dataset.
         */
        "selfLink"?: string;
    };
}
export declare class HealthcareFHIRStore extends Model<IHealthcareFHIRStore> implements IHealthcareFHIRStore {
    "apiVersion": IHealthcareFHIRStore["apiVersion"];
    "kind": IHealthcareFHIRStore["kind"];
    "metadata"?: IHealthcareFHIRStore["metadata"];
    "spec": IHealthcareFHIRStore["spec"];
    "status"?: IHealthcareFHIRStore["status"];
    static apiVersion: IHealthcareFHIRStore["apiVersion"];
    static kind: IHealthcareFHIRStore["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IHealthcareFHIRStore>;
    constructor(data?: ModelData<IHealthcareFHIRStore>);
}
