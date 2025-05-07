import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface ISecurityCenterNotificationConfig {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "securitycenter.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "SecurityCenterNotificationConfig";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Immutable. This must be unique within the organization.
         */
        "configId": string;
        /**
         * The description of the notification config (max of 1024 characters).
         */
        "description"?: string;
        /**
         * The organization that this resource belongs to.
         */
        "organizationRef": {
            /**
             * Allowed value: The `name` field of an `Organization` resource.
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
             * Allowed value: The `name` field of an `Organization` resource.
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
             * Allowed value: The `name` field of an `Organization` resource.
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
             * Allowed value: The `name` field of an `Organization` resource.
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
             * Allowed value: The `name` field of an `Organization` resource.
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
             * Allowed value: The `name` field of an `Organization` resource.
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
             * Allowed value: The `name` field of an `Organization` resource.
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
         * The Pub/Sub topic to send notifications to. Its format is
         * "projects/[project_id]/topics/[topic]".
         */
        "pubsubTopic": string;
        /**
         * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
         */
        "resourceID"?: string;
        /**
         * The config for triggering streaming-based notifications.
         */
        "streamingConfig": {
            /**
             * Expression that defines the filter to apply across create/update
             * events of assets or findings as specified by the event type. The
             * expression is a list of zero or more restrictions combined via
             * logical operators AND and OR. Parentheses are supported, and OR
             * has higher precedence than AND.
             *
             * Restrictions have the form <field> <operator> <value> and may have
             * a - character in front of them to indicate negation. The fields
             * map to those defined in the corresponding resource.
             *
             * The supported operators are:
             *
             * \* = for all value types.
             * \* >, <, >=, <= for integer values.
             * \* :, meaning substring matching, for strings.
             *
             * The supported value types are:
             *
             * \* string literals in quotes.
             * \* integer literals without quotes.
             * \* boolean literals true and false without quotes.
             *
             * See
             * [Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
             * for information on how to write a filter.
             */
            "filter": string;
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
         * The resource name of this notification config, in the format
         * 'organizations/{{organization}}/notificationConfigs/{{config_id}}'.
         */
        "name"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        /**
         * The service account that needs "pubsub.topics.publish" permission to
         * publish to the Pub/Sub topic.
         */
        "serviceAccount"?: string;
    };
}
export declare class SecurityCenterNotificationConfig extends Model<ISecurityCenterNotificationConfig> implements ISecurityCenterNotificationConfig {
    "apiVersion": ISecurityCenterNotificationConfig["apiVersion"];
    "kind": ISecurityCenterNotificationConfig["kind"];
    "metadata"?: ISecurityCenterNotificationConfig["metadata"];
    "spec": ISecurityCenterNotificationConfig["spec"];
    "status"?: ISecurityCenterNotificationConfig["status"];
    static apiVersion: ISecurityCenterNotificationConfig["apiVersion"];
    static kind: ISecurityCenterNotificationConfig["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ISecurityCenterNotificationConfig>;
    constructor(data?: ModelData<ISecurityCenterNotificationConfig>);
}
