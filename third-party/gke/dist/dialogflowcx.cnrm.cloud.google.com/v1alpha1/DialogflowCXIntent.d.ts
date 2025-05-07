import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IDialogflowCXIntent {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "dialogflowcx.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "DialogflowCXIntent";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters.
         */
        "description"?: string;
        /**
         * The human-readable name of the intent, unique within the agent.
         */
        "displayName": string;
        /**
         * Indicates whether this is a fallback intent. Currently only default fallback intent is allowed in the agent, which is added upon agent creation.
         * Adding training phrases to fallback intent is useful in the case of requests that are mistakenly matched, since training phrases assigned to fallback intents act as negative examples that triggers no-match event.
         */
        "isFallback"?: boolean;
        /**
         * Immutable. The language of the following fields in intent:
         * Intent.training_phrases.parts.text
         * If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.
         */
        "languageCode"?: string;
        /**
         * The collection of parameters associated with the intent.
         */
        "parameters"?: Array<{
            /**
             * The entity type of the parameter.
             * Format: projects/-/locations/-/agents/-/entityTypes/<System Entity Type ID> for system entity types (for example, projects/-/locations/-/agents/-/entityTypes/sys.date), or projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/entityTypes/<Entity Type ID> for developer entity types.
             */
            "entityType": string;
            /**
             * The unique identifier of the parameter. This field is used by training phrases to annotate their parts.
             */
            "id": string;
            /**
             * Indicates whether the parameter represents a list of values.
             */
            "isList"?: boolean;
            /**
             * Indicates whether the parameter content should be redacted in log. If redaction is enabled, the parameter content will be replaced by parameter name during logging.
             * Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.
             */
            "redact"?: boolean;
        }>;
        /**
         * Immutable. The agent to create an intent for.
         * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
         */
        "parent"?: string;
        /**
         * The priority of this intent. Higher numbers represent higher priorities.
         * If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the Normal priority in the console.
         * If the supplied value is negative, the intent is ignored in runtime detect intent requests.
         */
        "priority"?: number;
        /**
         * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
         */
        "resourceID"?: string;
        /**
         * The collection of training phrases the agent is trained on to identify the intent.
         */
        "trainingPhrases"?: Array<{
            /**
             * The unique identifier of the training phrase.
             */
            "id"?: string;
            /**
             * The ordered list of training phrase parts. The parts are concatenated in order to form the training phrase.
             * Note: The API does not automatically annotate training phrases like the Dialogflow Console does.
             * Note: Do not forget to include whitespace at part boundaries, so the training phrase is well formatted when the parts are concatenated.
             * If the training phrase does not need to be annotated with parameters, you just need a single part with only the Part.text field set.
             * If you want to annotate the training phrase, you must create multiple parts, where the fields of each part are populated in one of two ways:
             * Part.text is set to a part of the phrase that has no parameters.
             * Part.text is set to a part of the phrase that you want to annotate, and the parameterId field is set.
             */
            "parts": Array<{
                /**
                 * The parameter used to annotate this part of the training phrase. This field is required for annotated parts of the training phrase.
                 */
                "parameterId"?: string;
                /**
                 * The text for this part.
                 */
                "text": string;
            }>;
            /**
             * Indicates how many times this example was added to the intent.
             */
            "repeatCount"?: number;
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
         * The unique identifier of the intent.
         * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>.
         */
        "name"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
    };
}
export declare class DialogflowCXIntent extends Model<IDialogflowCXIntent> implements IDialogflowCXIntent {
    "apiVersion": IDialogflowCXIntent["apiVersion"];
    "kind": IDialogflowCXIntent["kind"];
    "metadata"?: IDialogflowCXIntent["metadata"];
    "spec": IDialogflowCXIntent["spec"];
    "status"?: IDialogflowCXIntent["status"];
    static apiVersion: IDialogflowCXIntent["apiVersion"];
    static kind: IDialogflowCXIntent["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IDialogflowCXIntent>;
    constructor(data?: ModelData<IDialogflowCXIntent>);
}
