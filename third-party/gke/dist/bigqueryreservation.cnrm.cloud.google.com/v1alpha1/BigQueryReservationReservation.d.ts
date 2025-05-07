import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IBigQueryReservationReservation {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "bigqueryreservation.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "BigQueryReservationReservation";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * The configuration parameters for the auto scaling feature.
         */
        "autoscale"?: {
            /**
             * The slot capacity added to this reservation when autoscale happens. Will be between [0, max_slots].
             */
            "currentSlots"?: number;
            /**
             * Number of slots to be scaled when needed.
             */
            "maxSlots"?: number;
        };
        /**
         * Maximum number of queries that are allowed to run concurrently in this reservation. This is a soft limit due to asynchronous nature of the system and various optimizations for small queries. Default value is 0 which means that concurrency will be automatically set based on the reservation size.
         */
        "concurrency"?: number;
        /**
         * Immutable. The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS.
         */
        "edition"?: string;
        /**
         * If false, any query using this reservation will use idle slots from other reservations within
         * the same admin project. If true, a query using this reservation will execute with the slot
         * capacity specified above at most.
         */
        "ignoreIdleSlots"?: boolean;
        /**
         * Immutable. The geographic location where the transfer config should reside.
         * Examples: US, EU, asia-northeast1. The default value is US.
         */
        "location": string;
        /**
         * Applicable only for reservations located within one of the BigQuery multi-regions (US or EU).
         * If set to true, this reservation is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this reservation is placed in the organization's default region.
         */
        "multiRegionAuxiliary"?: boolean;
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
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
        /**
         * Minimum slots available to this reservation. A slot is a unit of computational power in BigQuery, and serves as the
         * unit of parallelism. Queries using this reservation might use more slots during runtime if ignoreIdleSlots is set to false.
         */
        "slotCapacity": number;
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
    };
}
export declare class BigQueryReservationReservation extends Model<IBigQueryReservationReservation> implements IBigQueryReservationReservation {
    "apiVersion": IBigQueryReservationReservation["apiVersion"];
    "kind": IBigQueryReservationReservation["kind"];
    "metadata"?: IBigQueryReservationReservation["metadata"];
    "spec": IBigQueryReservationReservation["spec"];
    "status"?: IBigQueryReservationReservation["status"];
    static apiVersion: IBigQueryReservationReservation["apiVersion"];
    static kind: IBigQueryReservationReservation["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IBigQueryReservationReservation>;
    constructor(data?: ModelData<IBigQueryReservationReservation>);
}
