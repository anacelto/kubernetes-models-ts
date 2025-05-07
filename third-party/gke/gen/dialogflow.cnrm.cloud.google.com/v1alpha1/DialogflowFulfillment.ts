import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/DialogflowCnrmCloudGoogleComV1alpha1DialogflowFulfillment";

export interface IDialogflowFulfillment {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "dialogflow.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "DialogflowFulfillment";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * The human-readable name of the fulfillment, unique within the agent.
     */
    "displayName": string;
    /**
     * Whether fulfillment is enabled.
     */
    "enabled"?: boolean;
    /**
     * The field defines whether the fulfillment is enabled for certain features.
     */
    "features"?: Array<{
      /**
       * The type of the feature that enabled for fulfillment.
       * \* SMALLTALK: Fulfillment is enabled for SmallTalk. Possible values: ["SMALLTALK"].
       */
      "type": string;
    }>;
    /**
     * Represents configuration for a generic web service. Dialogflow supports two mechanisms for authentications: - Basic authentication with username and password. - Authentication with additional authentication headers.
     */
    "genericWebService"?: {
      /**
       * The password for HTTP Basic authentication.
       */
      "password"?: string;
      /**
       * The HTTP request headers to send together with fulfillment requests.
       */
      "requestHeaders"?: {
        [key: string]: string;
      };
      /**
       * The fulfillment URI for receiving POST requests. It must use https protocol.
       */
      "uri": string;
      /**
       * The user name for HTTP Basic authentication.
       */
      "username"?: string;
    };
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
     * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
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
     * The unique identifier of the fulfillment.
     * Format: projects/<Project ID>/agent/fulfillment - projects/<Project ID>/locations/<Location ID>/agent/fulfillment.
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class DialogflowFulfillment extends Model<IDialogflowFulfillment> implements IDialogflowFulfillment {
  "apiVersion": IDialogflowFulfillment["apiVersion"];
  "kind": IDialogflowFulfillment["kind"];
  "metadata"?: IDialogflowFulfillment["metadata"];
  "spec": IDialogflowFulfillment["spec"];
  "status"?: IDialogflowFulfillment["status"];

static apiVersion: IDialogflowFulfillment["apiVersion"] = "dialogflow.cnrm.cloud.google.com/v1alpha1";
static kind: IDialogflowFulfillment["kind"] = "DialogflowFulfillment";
static is = createTypeMetaGuard<IDialogflowFulfillment>(DialogflowFulfillment);

constructor(data?: ModelData<IDialogflowFulfillment>) {
  super();

  this.setDefinedProps({
    apiVersion: DialogflowFulfillment.apiVersion,
    kind: DialogflowFulfillment.kind,
    ...data
  } as IDialogflowFulfillment);
}
}


setValidateFunc(DialogflowFulfillment, validate as ValidateFunc<IDialogflowFulfillment>);
