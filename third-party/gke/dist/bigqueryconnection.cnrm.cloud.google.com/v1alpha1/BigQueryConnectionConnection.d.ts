import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IBigQueryConnectionConnection {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "bigqueryconnection.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "BigQueryConnectionConnection";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Connection properties specific to Amazon Web Services.
         */
        "aws"?: {
            /**
             * Authentication using Google owned service account to assume into customer's AWS IAM Role.
             */
            "accessRole": {
                /**
                 * The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection.
                 */
                "iamRoleId": string;
                /**
                 * A unique Google-owned and Google-generated identity for the Connection. This identity will be used to access the user's AWS IAM Role.
                 */
                "identity"?: string;
            };
        };
        /**
         * Container for connection properties specific to Azure.
         */
        "azure"?: {
            /**
             * The name of the Azure Active Directory Application.
             */
            "application"?: string;
            /**
             * The client id of the Azure Active Directory Application.
             */
            "clientId"?: string;
            /**
             * The id of customer's directory that host the data.
             */
            "customerTenantId": string;
            /**
             * The Azure Application (client) ID where the federated credentials will be hosted.
             */
            "federatedApplicationClientId"?: string;
            /**
             * A unique Google-owned and Google-generated identity for the Connection. This identity will be used to access the user's Azure Active Directory Application.
             */
            "identity"?: string;
            /**
             * The object id of the Azure Active Directory Application.
             */
            "objectId"?: string;
            /**
             * The URL user will be redirected to after granting consent during connection setup.
             */
            "redirectUri"?: string;
        };
        /**
         * Container for connection properties for delegation of access to GCP resources.
         */
        "cloudResource"?: {
            /**
             * The account ID of the service created for the purpose of this connection.
             */
            "serviceAccountId"?: string;
        };
        /**
         * Connection properties specific to Cloud Spanner.
         */
        "cloudSpanner"?: {
            /**
             * Cloud Spanner database in the form 'project/instance/database'.
             */
            "database": string;
            /**
             * If parallelism should be used when reading from Cloud Spanner.
             */
            "useParallelism"?: boolean;
            /**
             * If the serverless analytics service should be used to read data from Cloud Spanner. useParallelism must be set when using serverless analytics.
             */
            "useServerlessAnalytics"?: boolean;
        };
        /**
         * Connection properties specific to the Cloud SQL.
         */
        "cloudSql"?: {
            /**
             * Cloud SQL properties.
             */
            "credential": {
                /**
                 * Password for database.
                 */
                "password": {
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
                 * Username for database.
                 */
                "username": string;
            };
            /**
             * Database name.
             */
            "database": string;
            /**
             * Cloud SQL instance ID in the form project:location:instance.
             */
            "instanceId": string;
            /**
             * When the connection is used in the context of an operation in BigQuery, this service account will serve as the identity being used for connecting to the CloudSQL instance specified in this connection.
             */
            "serviceAccountId"?: string;
            /**
             * Type of the Cloud SQL database. Possible values: ["DATABASE_TYPE_UNSPECIFIED", "POSTGRES", "MYSQL"].
             */
            "type": string;
        };
        /**
         * A descriptive description for the connection.
         */
        "description"?: string;
        /**
         * A descriptive name for the connection.
         */
        "friendlyName"?: string;
        /**
         * Immutable. The geographic location where the connection should reside.
         * Cloud SQL instance must be in the same location as the connection
         * with following exceptions: Cloud SQL us-central1 maps to BigQuery US, Cloud SQL europe-west1 maps to BigQuery EU.
         * Examples: US, EU, asia-northeast1, us-central1, europe-west1.
         * Spanner Connections same as spanner region
         * AWS allowed regions are aws-us-east-1
         * Azure allowed regions are azure-eastus2.
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
         * Immutable. Optional. The connectionId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
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
         * True if the connection has credential assigned.
         */
        "hasCredential"?: boolean;
        /**
         * The resource name of the connection in the form of:
         * "projects/{project_id}/locations/{location_id}/connections/{connectionId}".
         */
        "name"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
    };
}
export declare class BigQueryConnectionConnection extends Model<IBigQueryConnectionConnection> implements IBigQueryConnectionConnection {
    "apiVersion": IBigQueryConnectionConnection["apiVersion"];
    "kind": IBigQueryConnectionConnection["kind"];
    "metadata"?: IBigQueryConnectionConnection["metadata"];
    "spec": IBigQueryConnectionConnection["spec"];
    "status"?: IBigQueryConnectionConnection["status"];
    static apiVersion: IBigQueryConnectionConnection["apiVersion"];
    static kind: IBigQueryConnectionConnection["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IBigQueryConnectionConnection>;
    constructor(data?: ModelData<IBigQueryConnectionConnection>);
}
