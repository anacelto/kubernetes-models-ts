import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IBigQueryDataPolicyDataPolicy {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "bigquerydatapolicy.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "BigQueryDataPolicyDataPolicy";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * The data masking policy that specifies the data masking rule to use.
         */
        "dataMaskingPolicy"?: {
            /**
             * The available masking rules. Learn more here: https://cloud.google.com/bigquery/docs/column-data-masking-intro#masking_options. Possible values: ["SHA256", "ALWAYS_NULL", "DEFAULT_MASKING_VALUE", "LAST_FOUR_CHARACTERS", "FIRST_FOUR_CHARACTERS", "EMAIL_MASK", "DATE_YEAR_MASK"].
             */
            "predefinedExpression": string;
        };
        /**
         * The enrollment level of the service. Possible values: ["COLUMN_LEVEL_SECURITY_POLICY", "DATA_MASKING_POLICY"].
         */
        "dataPolicyType": string;
        /**
         * Immutable. The name of the location of the data policy.
         */
        "location": string;
        /**
         * Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}.
         */
        "policyTag": string;
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
         * Immutable. Optional. The dataPolicyId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
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
         * Resource name of this data policy, in the format of projects/{project_number}/locations/{locationId}/dataPolicies/{dataPolicyId}.
         */
        "name"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
    };
}
export declare class BigQueryDataPolicyDataPolicy extends Model<IBigQueryDataPolicyDataPolicy> implements IBigQueryDataPolicyDataPolicy {
    "apiVersion": IBigQueryDataPolicyDataPolicy["apiVersion"];
    "kind": IBigQueryDataPolicyDataPolicy["kind"];
    "metadata"?: IBigQueryDataPolicyDataPolicy["metadata"];
    "spec": IBigQueryDataPolicyDataPolicy["spec"];
    "status"?: IBigQueryDataPolicyDataPolicy["status"];
    static apiVersion: IBigQueryDataPolicyDataPolicy["apiVersion"];
    static kind: IBigQueryDataPolicyDataPolicy["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IBigQueryDataPolicyDataPolicy>;
    constructor(data?: ModelData<IBigQueryDataPolicyDataPolicy>);
}
