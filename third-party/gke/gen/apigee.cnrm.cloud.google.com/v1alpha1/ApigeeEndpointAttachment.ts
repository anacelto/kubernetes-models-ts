import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ApigeeCnrmCloudGoogleComV1alpha1ApigeeEndpointAttachment";

export interface IApigeeEndpointAttachment {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "apigee.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "ApigeeEndpointAttachment";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Immutable. Location of the endpoint attachment.
     */
    "location": string;
    /**
     * Immutable. The Apigee Organization associated with the Apigee instance,
     * in the format 'organizations/{{org_name}}'.
     */
    "orgId": string;
    /**
     * Immutable. Optional. The endpointAttachmentId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Immutable. Format: projects/\*\/regions/\*\/serviceAttachments/\*.
     */
    "serviceAttachment": string;
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
     * State of the endpoint attachment connection to the service attachment.
     */
    "connectionState"?: string;
    /**
     * Host that can be used in either HTTP Target Endpoint directly, or as the host in Target Server.
     */
    "host"?: string;
    /**
     * Name of the Endpoint Attachment in the following format:
     * organizations/{organization}/endpointAttachments/{endpointAttachment}.
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class ApigeeEndpointAttachment extends Model<IApigeeEndpointAttachment> implements IApigeeEndpointAttachment {
  "apiVersion": IApigeeEndpointAttachment["apiVersion"];
  "kind": IApigeeEndpointAttachment["kind"];
  "metadata"?: IApigeeEndpointAttachment["metadata"];
  "spec": IApigeeEndpointAttachment["spec"];
  "status"?: IApigeeEndpointAttachment["status"];

static apiVersion: IApigeeEndpointAttachment["apiVersion"] = "apigee.cnrm.cloud.google.com/v1alpha1";
static kind: IApigeeEndpointAttachment["kind"] = "ApigeeEndpointAttachment";
static is = createTypeMetaGuard<IApigeeEndpointAttachment>(ApigeeEndpointAttachment);

constructor(data?: ModelData<IApigeeEndpointAttachment>) {
  super();

  this.setDefinedProps({
    apiVersion: ApigeeEndpointAttachment.apiVersion,
    kind: ApigeeEndpointAttachment.kind,
    ...data
  } as IApigeeEndpointAttachment);
}
}


setValidateFunc(ApigeeEndpointAttachment, validate as ValidateFunc<IApigeeEndpointAttachment>);
