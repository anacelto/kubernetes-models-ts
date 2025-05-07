import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/EssentialcontactsCnrmCloudGoogleComV1alpha1EssentialContactsContact";

export interface IEssentialContactsContact {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "essentialcontacts.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "EssentialContactsContact";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Immutable. The email address to send notifications to. This does not need to be a Google account.
     */
    "email": string;
    /**
     * The preferred language for notifications, as a ISO 639-1 language code. See Supported languages for a list of supported languages.
     */
    "languageTag": string;
    /**
     * The categories of notifications that the contact will receive communications for.
     */
    "notificationCategorySubscriptions": Array<string>;
    /**
     * Immutable. The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}.
     */
    "parent": string;
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
     * The identifier for the contact. Format: {resourceType}/{resource_id}/contacts/{contact_id}.
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class EssentialContactsContact extends Model<IEssentialContactsContact> implements IEssentialContactsContact {
  "apiVersion": IEssentialContactsContact["apiVersion"];
  "kind": IEssentialContactsContact["kind"];
  "metadata"?: IEssentialContactsContact["metadata"];
  "spec": IEssentialContactsContact["spec"];
  "status"?: IEssentialContactsContact["status"];

static apiVersion: IEssentialContactsContact["apiVersion"] = "essentialcontacts.cnrm.cloud.google.com/v1alpha1";
static kind: IEssentialContactsContact["kind"] = "EssentialContactsContact";
static is = createTypeMetaGuard<IEssentialContactsContact>(EssentialContactsContact);

constructor(data?: ModelData<IEssentialContactsContact>) {
  super();

  this.setDefinedProps({
    apiVersion: EssentialContactsContact.apiVersion,
    kind: EssentialContactsContact.kind,
    ...data
  } as IEssentialContactsContact);
}
}


setValidateFunc(EssentialContactsContact, validate as ValidateFunc<IEssentialContactsContact>);
