import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IDialogflowIntent {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "dialogflow.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "DialogflowIntent";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * The name of the action associated with the intent.
         * Note: The action name must not contain whitespaces.
         */
        "action"?: string;
        /**
         * The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED
         * (i.e. default platform). Possible values: ["FACEBOOK", "SLACK", "TELEGRAM", "KIK", "SKYPE", "LINE", "VIBER", "ACTIONS_ON_GOOGLE", "GOOGLE_HANGOUTS"].
         */
        "defaultResponsePlatforms"?: Array<string>;
        /**
         * The name of this intent to be displayed on the console.
         */
        "displayName": string;
        /**
         * The collection of event names that trigger the intent. If the collection of input contexts is not empty, all of
         * the contexts must be present in the active user session for an event to trigger this intent. See the
         * [events reference](https://cloud.google.com/dialogflow/docs/events-overview) for more details.
         */
        "events"?: Array<string>;
        /**
         * The list of context names required for this intent to be triggered.
         * Format: projects/<Project ID>/agent/sessions/-/contexts/<Context ID>.
         */
        "inputContextNames"?: Array<string>;
        /**
         * Indicates whether this is a fallback intent.
         */
        "isFallback"?: boolean;
        /**
         * Indicates whether Machine Learning is disabled for the intent.
         * Note: If mlDisabled setting is set to true, then this intent is not taken into account during inference in ML
         * ONLY match mode. Also, auto-markup in the UI is turned off.
         */
        "mlDisabled"?: boolean;
        /**
         * Immutable. The unique identifier of the parent intent in the chain of followup intents.
         * Format: projects/<Project ID>/agent/intents/<Intent ID>.
         */
        "parentFollowupIntentName"?: string;
        /**
         * The priority of this intent. Higher numbers represent higher priorities.
         *   - If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds
         *   to the Normal priority in the console.
         *   - If the supplied value is negative, the intent is ignored in runtime detect intent requests.
         */
        "priority"?: number;
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
         * Indicates whether to delete all contexts in the current session when this intent is matched.
         */
        "resetContexts"?: boolean;
        /**
         * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
         */
        "resourceID"?: string;
        /**
         * Indicates whether webhooks are enabled for the intent.
         * \* WEBHOOK_STATE_ENABLED: Webhook is enabled in the agent and in the intent.
         * \* WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING: Webhook is enabled in the agent and in the intent. Also, each slot
         * filling prompt is forwarded to the webhook. Possible values: ["WEBHOOK_STATE_ENABLED", "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"].
         */
        "webhookState"?: string;
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
         * Information about all followup intents that have this intent as a direct or indirect parent. We populate this field
         * only in the output.
         */
        "followupIntentInfo"?: Array<{
            /**
             * The unique identifier of the followup intent.
             * Format: projects/<Project ID>/agent/intents/<Intent ID>.
             */
            "followupIntentName"?: string;
            /**
             * The unique identifier of the followup intent's parent.
             * Format: projects/<Project ID>/agent/intents/<Intent ID>.
             */
            "parentFollowupIntentName"?: string;
        }>;
        /**
         * The unique identifier of this intent.
         * Format: projects/<Project ID>/agent/intents/<Intent ID>.
         */
        "name"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        /**
         * The unique identifier of the root intent in the chain of followup intents. It identifies the correct followup
         * intents chain for this intent.
         * Format: projects/<Project ID>/agent/intents/<Intent ID>.
         */
        "rootFollowupIntentName"?: string;
    };
}
export declare class DialogflowIntent extends Model<IDialogflowIntent> implements IDialogflowIntent {
    "apiVersion": IDialogflowIntent["apiVersion"];
    "kind": IDialogflowIntent["kind"];
    "metadata"?: IDialogflowIntent["metadata"];
    "spec": IDialogflowIntent["spec"];
    "status"?: IDialogflowIntent["status"];
    static apiVersion: IDialogflowIntent["apiVersion"];
    static kind: IDialogflowIntent["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IDialogflowIntent>;
    constructor(data?: ModelData<IDialogflowIntent>);
}
