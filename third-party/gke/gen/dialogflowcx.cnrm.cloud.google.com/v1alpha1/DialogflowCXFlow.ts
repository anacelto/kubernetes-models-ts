import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/DialogflowcxCnrmCloudGoogleComV1alpha1DialogflowCXFlow";

export interface IDialogflowCXFlow {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "dialogflowcx.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "DialogflowCXFlow";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * The description of the flow. The maximum length is 500 characters. If exceeded, the request is rejected.
     */
    "description"?: string;
    /**
     * The human-readable name of the flow.
     */
    "displayName": string;
    /**
     * A flow's event handlers serve two purposes:
     * They are responsible for handling events (e.g. no match, webhook errors) in the flow.
     * They are inherited by every page's [event handlers][Page.event_handlers], which can be used to handle common events regardless of the current page. Event handlers defined in the page have higher priority than those defined in the flow.
     * Unlike transitionRoutes, these handlers are evaluated on a first-match basis. The first one that matches the event get executed, with the rest being ignored.
     */
    "eventHandlers"?: Array<{
      /**
       * The name of the event to handle.
       */
      "event"?: string;
      /**
       * The unique identifier of this event handler.
       */
      "name"?: string;
      /**
       * The target flow to transition to.
       * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
       */
      "targetFlow"?: string;
      /**
       * The target page to transition to.
       * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
       */
      "targetPage"?: string;
      /**
       * The fulfillment to call when the event occurs. Handling webhook errors with a fulfillment enabled with webhook could cause infinite loop. It is invalid to specify such fulfillment for a handler handling webhooks.
       */
      "triggerFulfillment"?: {
        /**
         * Conditional cases for this fulfillment.
         */
        "conditionalCases"?: Array<{
          /**
           * A JSON encoded list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
           * See [Case](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment#case) for the schema.
           */
          "cases"?: string;
        }>;
        /**
         * The list of rich message responses to present to the user.
         */
        "messages"?: Array<{
          /**
           * The channel which the response is associated with. Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned.
           */
          "channel"?: string;
          /**
           * Indicates that the conversation succeeded, i.e., the bot handled the issue that the customer talked to it about.
           * Dialogflow only uses this to determine which conversations should be counted as successful and doesn't process the metadata in this message in any way. Note that Dialogflow also considers conversations that get to the conversation end page as successful even if they don't return ConversationSuccess.
           * You may set this, for example:
           * \* In the entryFulfillment of a Page if entering the page indicates that the conversation succeeded.
           * \* In a webhook response when you determine that you handled the customer issue.
           */
          "conversationSuccess"?: {
            /**
             * Custom metadata. Dialogflow doesn't impose any structure on this.
             */
            "metadata"?: string;
          };
          /**
           * Indicates that the conversation should be handed off to a live agent.
           * Dialogflow only uses this to determine which conversations were handed off to a human agent for measurement purposes. What else to do with this signal is up to you and your handoff procedures.
           * You may set this, for example:
           * \* In the entryFulfillment of a Page if entering the page indicates something went extremely wrong in the conversation.
           * \* In a webhook response when you determine that the customer issue can only be handled by a human.
           */
          "liveAgentHandoff"?: {
            /**
             * Custom metadata. Dialogflow doesn't impose any structure on this.
             */
            "metadata"?: string;
          };
          /**
           * A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
           */
          "outputAudioText"?: {
            /**
             * Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
             */
            "allowPlaybackInterruption"?: boolean;
            /**
             * The SSML text to be synthesized. For more information, see SSML.
             */
            "ssml"?: string;
            /**
             * The raw text to be synthesized.
             */
            "text"?: string;
          };
          /**
           * A custom, platform-specific payload.
           */
          "payload"?: string;
          /**
           * Specifies an audio clip to be played by the client as part of the response.
           */
          "playAudio"?: {
            /**
             * Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
             */
            "allowPlaybackInterruption"?: boolean;
            /**
             * URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.
             */
            "audioUri": string;
          };
          /**
           * Represents the signal that telles the client to transfer the phone call connected to the agent to a third-party endpoint.
           */
          "telephonyTransferCall"?: {
            /**
             * Transfer the call to a phone number in E.164 format.
             */
            "phoneNumber": string;
          };
          /**
           * The text response message.
           */
          "text"?: {
            /**
             * Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
             */
            "allowPlaybackInterruption"?: boolean;
            /**
             * A collection of text responses.
             */
            "text"?: Array<string>;
          };
        }>;
        /**
         * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
         */
        "returnPartialResponses"?: boolean;
        /**
         * Set parameter values before executing the webhook.
         */
        "setParameterActions"?: Array<{
          /**
           * Display name of the parameter.
           */
          "parameter"?: string;
          /**
           * The new JSON-encoded value of the parameter. A null value clears the parameter.
           */
          "value"?: string;
        }>;
        /**
         * The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
         */
        "tag"?: string;
        /**
         * The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
         */
        "webhook"?: string;
      };
    }>;
    /**
     * Immutable. The language of the following fields in flow:
     * Flow.event_handlers.trigger_fulfillment.messages
     * Flow.event_handlers.trigger_fulfillment.conditional_cases
     * Flow.transition_routes.trigger_fulfillment.messages
     * Flow.transition_routes.trigger_fulfillment.conditional_cases
     * If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.
     */
    "languageCode"?: string;
    /**
     * NLU related settings of the flow.
     */
    "nluSettings"?: {
      /**
       * To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold.
       * If the returned score value is less than the threshold value, then a no-match event will be triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the default of 0.3 is used.
       */
      "classificationThreshold"?: number;
      /**
       * Indicates NLU model training mode.
       * \* MODEL_TRAINING_MODE_AUTOMATIC: NLU model training is automatically triggered when a flow gets modified. User can also manually trigger model training in this mode.
       * \* MODEL_TRAINING_MODE_MANUAL: User needs to manually trigger NLU model training. Best for large flows whose models take long time to train. Possible values: ["MODEL_TRAINING_MODE_AUTOMATIC", "MODEL_TRAINING_MODE_MANUAL"].
       */
      "modelTrainingMode"?: string;
      /**
       * Indicates the type of NLU model.
       * \* MODEL_TYPE_STANDARD: Use standard NLU model.
       * \* MODEL_TYPE_ADVANCED: Use advanced NLU model. Possible values: ["MODEL_TYPE_STANDARD", "MODEL_TYPE_ADVANCED"].
       */
      "modelType"?: string;
    };
    /**
     * Immutable. The agent to create a flow for.
     * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
     */
    "parent"?: string;
    /**
     * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
     */
    "resourceID"?: string;
    /**
     * A flow's transition route group serve two purposes:
     * They are responsible for matching the user's first utterances in the flow.
     * They are inherited by every page's [transition route groups][Page.transition_route_groups]. Transition route groups defined in the page have higher priority than those defined in the flow.
     * Format:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.
     */
    "transitionRouteGroups"?: Array<string>;
    /**
     * A flow's transition routes serve two purposes:
     * They are responsible for matching the user's first utterances in the flow.
     * They are inherited by every page's [transition routes][Page.transition_routes] and can support use cases such as the user saying "help" or "can I talk to a human?", which can be handled in a common way regardless of the current page. Transition routes defined in the page have higher priority than those defined in the flow.
     * 
     * TransitionRoutes are evalauted in the following order:
     *   TransitionRoutes with intent specified.
     *   TransitionRoutes with only condition specified.
     *   TransitionRoutes with intent specified are inherited by pages in the flow.
     */
    "transitionRoutes"?: Array<{
      /**
       * The condition to evaluate against form parameters or session parameters.
       * At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.
       */
      "condition"?: string;
      /**
       * The unique identifier of an Intent.
       * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>. Indicates that the transition can only happen when the given intent is matched. At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.
       */
      "intent"?: string;
      /**
       * The unique identifier of this transition route.
       */
      "name"?: string;
      /**
       * The target flow to transition to.
       * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
       */
      "targetFlow"?: string;
      /**
       * The target page to transition to.
       * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
       */
      "targetPage"?: string;
      /**
       * The fulfillment to call when the condition is satisfied. At least one of triggerFulfillment and target must be specified. When both are defined, triggerFulfillment is executed first.
       */
      "triggerFulfillment"?: {
        /**
         * Conditional cases for this fulfillment.
         */
        "conditionalCases"?: Array<{
          /**
           * A JSON encoded list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
           * See [Case](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment#case) for the schema.
           */
          "cases"?: string;
        }>;
        /**
         * The list of rich message responses to present to the user.
         */
        "messages"?: Array<{
          /**
           * The channel which the response is associated with. Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned.
           */
          "channel"?: string;
          /**
           * Indicates that the conversation succeeded, i.e., the bot handled the issue that the customer talked to it about.
           * Dialogflow only uses this to determine which conversations should be counted as successful and doesn't process the metadata in this message in any way. Note that Dialogflow also considers conversations that get to the conversation end page as successful even if they don't return ConversationSuccess.
           * You may set this, for example:
           * \* In the entryFulfillment of a Page if entering the page indicates that the conversation succeeded.
           * \* In a webhook response when you determine that you handled the customer issue.
           */
          "conversationSuccess"?: {
            /**
             * Custom metadata. Dialogflow doesn't impose any structure on this.
             */
            "metadata"?: string;
          };
          /**
           * Indicates that the conversation should be handed off to a live agent.
           * Dialogflow only uses this to determine which conversations were handed off to a human agent for measurement purposes. What else to do with this signal is up to you and your handoff procedures.
           * You may set this, for example:
           * \* In the entryFulfillment of a Page if entering the page indicates something went extremely wrong in the conversation.
           * \* In a webhook response when you determine that the customer issue can only be handled by a human.
           */
          "liveAgentHandoff"?: {
            /**
             * Custom metadata. Dialogflow doesn't impose any structure on this.
             */
            "metadata"?: string;
          };
          /**
           * A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
           */
          "outputAudioText"?: {
            /**
             * Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
             */
            "allowPlaybackInterruption"?: boolean;
            /**
             * The SSML text to be synthesized. For more information, see SSML.
             */
            "ssml"?: string;
            /**
             * The raw text to be synthesized.
             */
            "text"?: string;
          };
          /**
           * A custom, platform-specific payload.
           */
          "payload"?: string;
          /**
           * Specifies an audio clip to be played by the client as part of the response.
           */
          "playAudio"?: {
            /**
             * Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
             */
            "allowPlaybackInterruption"?: boolean;
            /**
             * URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.
             */
            "audioUri": string;
          };
          /**
           * Represents the signal that telles the client to transfer the phone call connected to the agent to a third-party endpoint.
           */
          "telephonyTransferCall"?: {
            /**
             * Transfer the call to a phone number in E.164 format.
             */
            "phoneNumber": string;
          };
          /**
           * The text response message.
           */
          "text"?: {
            /**
             * Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
             */
            "allowPlaybackInterruption"?: boolean;
            /**
             * A collection of text responses.
             */
            "text"?: Array<string>;
          };
        }>;
        /**
         * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
         */
        "returnPartialResponses"?: boolean;
        /**
         * Set parameter values before executing the webhook.
         */
        "setParameterActions"?: Array<{
          /**
           * Display name of the parameter.
           */
          "parameter"?: string;
          /**
           * The new JSON-encoded value of the parameter. A null value clears the parameter.
           */
          "value"?: string;
        }>;
        /**
         * The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
         */
        "tag"?: string;
        /**
         * The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
         */
        "webhook"?: string;
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
     * The unique identifier of the flow.
     * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class DialogflowCXFlow extends Model<IDialogflowCXFlow> implements IDialogflowCXFlow {
  "apiVersion": IDialogflowCXFlow["apiVersion"];
  "kind": IDialogflowCXFlow["kind"];
  "metadata"?: IDialogflowCXFlow["metadata"];
  "spec": IDialogflowCXFlow["spec"];
  "status"?: IDialogflowCXFlow["status"];

static apiVersion: IDialogflowCXFlow["apiVersion"] = "dialogflowcx.cnrm.cloud.google.com/v1alpha1";
static kind: IDialogflowCXFlow["kind"] = "DialogflowCXFlow";
static is = createTypeMetaGuard<IDialogflowCXFlow>(DialogflowCXFlow);

constructor(data?: ModelData<IDialogflowCXFlow>) {
  super();

  this.setDefinedProps({
    apiVersion: DialogflowCXFlow.apiVersion,
    kind: DialogflowCXFlow.kind,
    ...data
  } as IDialogflowCXFlow);
}
}


setValidateFunc(DialogflowCXFlow, validate as ValidateFunc<IDialogflowCXFlow>);
