import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/DialogflowcxCnrmCloudGoogleComV1alpha1DialogflowCXWebhook";

export interface IDialogflowCXWebhook {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "dialogflowcx.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "DialogflowCXWebhook";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Indicates whether the webhook is disabled.
     */
    "disabled"?: boolean;
    /**
     * The human-readable name of the webhook, unique within the agent.
     */
    "displayName": string;
    /**
     * Indicates if automatic spell correction is enabled in detect intent requests.
     */
    "enableSpellCorrection"?: boolean;
    /**
     * Determines whether this agent should log conversation queries.
     */
    "enableStackdriverLogging"?: boolean;
    /**
     * Configuration for a generic web service.
     */
    "genericWebService"?: {
      /**
       * Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification.
       */
      "allowedCaCerts"?: Array<string>;
      /**
       * Immutable. The HTTP request headers to send together with webhook requests.
       */
      "requestHeaders"?: {
        [key: string]: string;
      };
      /**
       * Whether to use speech adaptation for speech recognition.
       */
      "uri": string;
    };
    /**
     * Immutable. The agent to create a webhook for.
     * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
     */
    "parent"?: string;
    /**
     * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
     */
    "resourceID"?: string;
    /**
     * Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.
     */
    "securitySettings"?: string;
    /**
     * Configuration for a Service Directory service.
     */
    "serviceDirectory"?: {
      /**
       * The name of Service Directory service.
       */
      "genericWebService": {
        /**
         * Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification.
         */
        "allowedCaCerts"?: Array<string>;
        /**
         * Immutable. The HTTP request headers to send together with webhook requests.
         */
        "requestHeaders"?: {
          [key: string]: string;
        };
        /**
         * Whether to use speech adaptation for speech recognition.
         */
        "uri": string;
      };
      /**
       * The name of Service Directory service.
       */
      "service": string;
    };
    /**
     * Webhook execution timeout.
     */
    "timeout"?: string;
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
     * The unique identifier of the webhook.
     * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * Name of the start flow in this agent. A start flow will be automatically created when the agent is created, and can only be deleted by deleting the agent. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
     */
    "startFlow"?: string;
  };
}

export class DialogflowCXWebhook extends Model<IDialogflowCXWebhook> implements IDialogflowCXWebhook {
  "apiVersion": IDialogflowCXWebhook["apiVersion"];
  "kind": IDialogflowCXWebhook["kind"];
  "metadata"?: IDialogflowCXWebhook["metadata"];
  "spec": IDialogflowCXWebhook["spec"];
  "status"?: IDialogflowCXWebhook["status"];

static apiVersion: IDialogflowCXWebhook["apiVersion"] = "dialogflowcx.cnrm.cloud.google.com/v1alpha1";
static kind: IDialogflowCXWebhook["kind"] = "DialogflowCXWebhook";
static is = createTypeMetaGuard<IDialogflowCXWebhook>(DialogflowCXWebhook);

constructor(data?: ModelData<IDialogflowCXWebhook>) {
  super();

  this.setDefinedProps({
    apiVersion: DialogflowCXWebhook.apiVersion,
    kind: DialogflowCXWebhook.kind,
    ...data
  } as IDialogflowCXWebhook);
}
}


setValidateFunc(DialogflowCXWebhook, validate as ValidateFunc<IDialogflowCXWebhook>);
