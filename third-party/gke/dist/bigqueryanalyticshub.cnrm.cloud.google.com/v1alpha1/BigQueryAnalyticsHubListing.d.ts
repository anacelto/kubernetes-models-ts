import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IBigQueryAnalyticsHubListing {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "bigqueryanalyticshub.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "BigQueryAnalyticsHubListing";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Shared dataset i.e. BigQuery dataset source.
         */
        "bigqueryDataset": {
            /**
             * Resource name of the dataset source for this listing. e.g. projects/myproject/datasets/123.
             */
            "dataset": string;
        };
        /**
         * Categories of the listing. Up to two categories are allowed.
         */
        "categories"?: Array<string>;
        /**
         * Immutable. The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.
         */
        "dataExchangeId": string;
        /**
         * Details of the data provider who owns the source data.
         */
        "dataProvider"?: {
            /**
             * Name of the data provider.
             */
            "name": string;
            /**
             * Email or URL of the data provider.
             */
            "primaryContact"?: string;
        };
        /**
         * Short description of the listing. The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF).
         */
        "description"?: string;
        /**
         * Human-readable display name of the listing. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces.
         */
        "displayName": string;
        /**
         * Documentation describing the listing.
         */
        "documentation"?: string;
        /**
         * Base64 encoded image representing the listing.
         */
        "icon"?: string;
        /**
         * Immutable. The name of the location this data exchange listing.
         */
        "location": string;
        /**
         * Email or URL of the primary point of contact of the listing.
         */
        "primaryContact"?: string;
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
         * Details of the publisher who owns the listing and who can share the source data.
         */
        "publisher"?: {
            /**
             * Name of the listing publisher.
             */
            "name": string;
            /**
             * Email or URL of the listing publisher.
             */
            "primaryContact"?: string;
        };
        /**
         * Email or URL of the request access of the listing. Subscribers can use this reference to request access.
         */
        "requestAccess"?: string;
        /**
         * Immutable. Optional. The listingId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
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
         * The resource name of the listing. e.g. "projects/myproject/locations/US/dataExchanges/123/listings/456".
         */
        "name"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
    };
}
export declare class BigQueryAnalyticsHubListing extends Model<IBigQueryAnalyticsHubListing> implements IBigQueryAnalyticsHubListing {
    "apiVersion": IBigQueryAnalyticsHubListing["apiVersion"];
    "kind": IBigQueryAnalyticsHubListing["kind"];
    "metadata"?: IBigQueryAnalyticsHubListing["metadata"];
    "spec": IBigQueryAnalyticsHubListing["spec"];
    "status"?: IBigQueryAnalyticsHubListing["status"];
    static apiVersion: IBigQueryAnalyticsHubListing["apiVersion"];
    static kind: IBigQueryAnalyticsHubListing["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IBigQueryAnalyticsHubListing>;
    constructor(data?: ModelData<IBigQueryAnalyticsHubListing>);
}
