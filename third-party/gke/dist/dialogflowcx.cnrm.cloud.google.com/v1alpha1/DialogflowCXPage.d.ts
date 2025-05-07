import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IDialogflowCXPage {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "dialogflowcx.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "DialogflowCXPage";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * The human-readable name of the page, unique within the agent.
         */
        "displayName": string;
        /**
         * The fulfillment to call when the session is entering the page.
         */
        "entryFulfillment"?: {
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
        /**
         * Handlers associated with the page to handle events such as webhook errors, no match or no input.
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
         * The form associated with the page, used for collecting parameters relevant to the page.
         */
        "form"?: {
            /**
             * Parameters to collect from the user.
             */
            "parameters"?: Array<{
                /**
                 * The default value of an optional parameter. If the parameter is required, the default value will be ignored.
                 */
                "defaultValue"?: string;
                /**
                 * The human-readable name of the parameter, unique within the form.
                 */
                "displayName"?: string;
                /**
                 * The entity type of the parameter.
                 * Format: projects/-/locations/-/agents/-/entityTypes/<System Entity Type ID> for system entity types (for example, projects/-/locations/-/agents/-/entityTypes/sys.date), or projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/entityTypes/<Entity Type ID> for developer entity types.
                 */
                "entityType"?: string;
                /**
                 * Defines fill behavior for the parameter.
                 */
                "fillBehavior"?: {
                    /**
                     * The fulfillment to provide the initial prompt that the agent can present to the user in order to fill the parameter.
                     */
                    "initialPromptFulfillment"?: {
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
                    /**
                     * The handlers for parameter-level events, used to provide reprompt for the parameter or transition to a different page/flow. The supported events are:
                     * \* sys.no-match-<N>, where N can be from 1 to 6
                     * \* sys.no-match-default
                     * \* sys.no-input-<N>, where N can be from 1 to 6
                     * \* sys.no-input-default
                     * \* sys.invalid-parameter
                     * [initialPromptFulfillment][initialPromptFulfillment] provides the first prompt for the parameter.
                     * If the user's response does not fill the parameter, a no-match/no-input event will be triggered, and the fulfillment associated with the sys.no-match-1/sys.no-input-1 handler (if defined) will be called to provide a prompt. The sys.no-match-2/sys.no-input-2 handler (if defined) will respond to the next no-match/no-input event, and so on.
                     * A sys.no-match-default or sys.no-input-default handler will be used to handle all following no-match/no-input events after all numbered no-match/no-input handlers for the parameter are consumed.
                     * A sys.invalid-parameter handler can be defined to handle the case where the parameter values have been invalidated by webhook. For example, if the user's response fill the parameter, however the parameter was invalidated by webhook, the fulfillment associated with the sys.invalid-parameter handler (if defined) will be called to provide a prompt.
                     * If the event handler for the corresponding event can't be found on the parameter, initialPromptFulfillment will be re-prompted.
                     */
                    "repromptEventHandlers"?: Array<{
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
                };
                /**
                 * Indicates whether the parameter represents a list of values.
                 */
                "isList"?: boolean;
                /**
                 * Indicates whether the parameter content should be redacted in log.
                 * If redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.
                 */
                "redact"?: boolean;
                /**
                 * Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them.
                 * Required parameters must be filled before form filling concludes.
                 */
                "required"?: boolean;
            }>;
        };
        /**
         * Immutable. The language of the following fields in page:
         *
         * Page.entry_fulfillment.messages
         * Page.entry_fulfillment.conditional_cases
         * Page.event_handlers.trigger_fulfillment.messages
         * Page.event_handlers.trigger_fulfillment.conditional_cases
         * Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages
         * Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases
         * Page.form.parameters.fill_behavior.reprompt_event_handlers.messages
         * Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases
         * Page.transition_routes.trigger_fulfillment.messages
         * Page.transition_routes.trigger_fulfillment.conditional_cases
         * If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.
         */
        "languageCode"?: string;
        /**
         * Immutable. The flow to create a page for.
         * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
         */
        "parent"?: string;
        /**
         * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
         */
        "resourceID"?: string;
        /**
         * Ordered list of TransitionRouteGroups associated with the page. Transition route groups must be unique within a page.
         * If multiple transition routes within a page scope refer to the same intent, then the precedence order is: page's transition route -> page's transition route group -> flow's transition routes.
         * If multiple transition route groups within a page contain the same intent, then the first group in the ordered list takes precedence.
         * Format:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.
         */
        "transitionRouteGroups"?: Array<string>;
        /**
         * A list of transitions for the transition rules of this page. They route the conversation to another page in the same flow, or another flow.
         * When we are in a certain page, the TransitionRoutes are evalauted in the following order:
         * TransitionRoutes defined in the page with intent specified.
         * TransitionRoutes defined in the transition route groups with intent specified.
         * TransitionRoutes defined in flow with intent specified.
         * TransitionRoutes defined in the transition route groups with intent specified.
         * TransitionRoutes defined in the page with only condition specified.
         * TransitionRoutes defined in the transition route groups with only condition specified.
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
         * The unique identifier of the page.
         * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
         */
        "name"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
    };
}
export declare class DialogflowCXPage extends Model<IDialogflowCXPage> implements IDialogflowCXPage {
    "apiVersion": IDialogflowCXPage["apiVersion"];
    "kind": IDialogflowCXPage["kind"];
    "metadata"?: IDialogflowCXPage["metadata"];
    "spec": IDialogflowCXPage["spec"];
    "status"?: IDialogflowCXPage["status"];
    static apiVersion: IDialogflowCXPage["apiVersion"];
    static kind: IDialogflowCXPage["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IDialogflowCXPage>;
    constructor(data?: ModelData<IDialogflowCXPage>);
}
