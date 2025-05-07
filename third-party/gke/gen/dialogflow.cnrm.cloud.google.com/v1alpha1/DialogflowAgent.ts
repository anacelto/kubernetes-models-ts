import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/DialogflowCnrmCloudGoogleComV1alpha1DialogflowAgent";

export interface IDialogflowAgent {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "dialogflow.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "DialogflowAgent";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * API version displayed in Dialogflow console. If not specified, V2 API is assumed. Clients are free to query
     * different service endpoints for different API versions. However, bots connectors and webhook calls will follow
     * the specified API version.
     * \* API_VERSION_V1: Legacy V1 API.
     * \* API_VERSION_V2: V2 API.
     * \* API_VERSION_V2_BETA_1: V2beta1 API. Possible values: ["API_VERSION_V1", "API_VERSION_V2", "API_VERSION_V2_BETA_1"].
     */
    "apiVersion"?: string;
    /**
     * The URI of the agent's avatar, which are used throughout the Dialogflow console. When an image URL is entered
     * into this field, the Dialogflow will save the image in the backend. The address of the backend image returned
     * from the API will be shown in the [avatarUriBackend] field.
     */
    "avatarUri"?: string;
    /**
     * To filter out false positive results and still get variety in matched natural language inputs for your agent,
     * you can tune the machine learning classification threshold. If the returned score value is less than the threshold
     * value, then a fallback intent will be triggered or, if there are no fallback intents defined, no intent will be
     * triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the
     * default of 0.3 is used.
     */
    "classificationThreshold"?: number;
    /**
     * Immutable. The default language of the agent as a language tag. [See Language Support](https://cloud.google.com/dialogflow/docs/reference/language)
     * for a list of the currently supported language codes. This field cannot be updated after creation.
     */
    "defaultLanguageCode": string;
    /**
     * The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.
     */
    "description"?: string;
    /**
     * The name of this agent.
     */
    "displayName": string;
    /**
     * Determines whether this agent should log conversation queries.
     */
    "enableLogging"?: boolean;
    /**
     * Determines how intents are detected from user queries.
     * \* MATCH_MODE_HYBRID: Best for agents with a small number of examples in intents and/or wide use of templates
     * syntax and composite entities.
     * \* MATCH_MODE_ML_ONLY: Can be used for agents with a large number of examples in intents, especially the ones
     * using @sys.any or very large developer entities. Possible values: ["MATCH_MODE_HYBRID", "MATCH_MODE_ML_ONLY"].
     */
    "matchMode"?: string;
    /**
     * Immutable. Optional. The project of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * The list of all languages supported by this agent (except for the defaultLanguageCode).
     */
    "supportedLanguageCodes"?: Array<string>;
    "tier"?: string;
    /**
     * The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York,
     * Europe/Paris.
     */
    "timeZone": string;
  };
  "status"?: {
    /**
     * The URI of the agent's avatar as returned from the API. Output only. To provide an image URL for the agent avatar,
     * the [avatarUri] field can be used.
     */
    "avatarUriBackend"?: string;
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

export class DialogflowAgent extends Model<IDialogflowAgent> implements IDialogflowAgent {
  "apiVersion": IDialogflowAgent["apiVersion"];
  "kind": IDialogflowAgent["kind"];
  "metadata"?: IDialogflowAgent["metadata"];
  "spec": IDialogflowAgent["spec"];
  "status"?: IDialogflowAgent["status"];

static apiVersion: IDialogflowAgent["apiVersion"] = "dialogflow.cnrm.cloud.google.com/v1alpha1";
static kind: IDialogflowAgent["kind"] = "DialogflowAgent";
static is = createTypeMetaGuard<IDialogflowAgent>(DialogflowAgent);

constructor(data?: ModelData<IDialogflowAgent>) {
  super();

  this.setDefinedProps({
    apiVersion: DialogflowAgent.apiVersion,
    kind: DialogflowAgent.kind,
    ...data
  } as IDialogflowAgent);
}
}


setValidateFunc(DialogflowAgent, validate as ValidateFunc<IDialogflowAgent>);
