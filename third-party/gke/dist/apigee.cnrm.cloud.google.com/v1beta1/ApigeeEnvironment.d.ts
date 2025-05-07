import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IApigeeEnvironment {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "apigee.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "ApigeeEnvironment";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Immutable.
         */
        "apigeeOrganizationRef": {
            /**
             * The apigee organization for the resource
             *
             * Allowed value: The Google Cloud resource name of an `ApigeeOrganization` resource (format: `organizations/{{name}}`).
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
             * The apigee organization for the resource
             *
             * Allowed value: The Google Cloud resource name of an `ApigeeOrganization` resource (format: `organizations/{{name}}`).
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
             * The apigee organization for the resource
             *
             * Allowed value: The Google Cloud resource name of an `ApigeeOrganization` resource (format: `organizations/{{name}}`).
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
             * The apigee organization for the resource
             *
             * Allowed value: The Google Cloud resource name of an `ApigeeOrganization` resource (format: `organizations/{{name}}`).
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
             * The apigee organization for the resource
             *
             * Allowed value: The Google Cloud resource name of an `ApigeeOrganization` resource (format: `organizations/{{name}}`).
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
             * The apigee organization for the resource
             *
             * Allowed value: The Google Cloud resource name of an `ApigeeOrganization` resource (format: `organizations/{{name}}`).
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
             * The apigee organization for the resource
             *
             * Allowed value: The Google Cloud resource name of an `ApigeeOrganization` resource (format: `organizations/{{name}}`).
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
         * Optional. Description of the environment.
         */
        "description"?: string;
        /**
         * Optional. Display name for this environment.
         */
        "displayName"?: string;
        /**
         * Optional. Key-value pairs that may be used for customizing the environment.
         */
        "properties"?: {
            [key: string]: string;
        };
        /**
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
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
         * Output only. Creation time of this environment as milliseconds since epoch.
         */
        "createdAt"?: number;
        /**
         * Output only. Last modification time of this environment as milliseconds since epoch.
         */
        "lastModifiedAt"?: number;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        /**
         * Output only. State of the environment. Values other than ACTIVE means the resource is not ready to use. Possible values: STATE_UNSPECIFIED, CREATING, ACTIVE, DELETING
         */
        "state"?: string;
    };
}
export declare class ApigeeEnvironment extends Model<IApigeeEnvironment> implements IApigeeEnvironment {
    "apiVersion": IApigeeEnvironment["apiVersion"];
    "kind": IApigeeEnvironment["kind"];
    "metadata"?: IApigeeEnvironment["metadata"];
    "spec": IApigeeEnvironment["spec"];
    "status"?: IApigeeEnvironment["status"];
    static apiVersion: IApigeeEnvironment["apiVersion"];
    static kind: IApigeeEnvironment["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IApigeeEnvironment>;
    constructor(data?: ModelData<IApigeeEnvironment>);
}
