import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/HealthcareCnrmCloudGoogleComV1alpha1HealthcareConsentStore";

export interface IHealthcareConsentStore {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "healthcare.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "HealthcareConsentStore";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Immutable. Identifies the dataset addressed by this request. Must be in the format
     * 'projects/{project}/locations/{location}/datasets/{dataset}'.
     */
    "dataset": string;
    /**
     * Default time to live for consents in this store. Must be at least 24 hours. Updating this field will not affect the expiration time of existing consents.
     * 
     * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
     */
    "defaultConsentTtl"?: string;
    /**
     * If true, [consents.patch] [google.cloud.healthcare.v1.consent.UpdateConsent] creates the consent if it does not already exist.
     */
    "enableConsentCreateOnUpdate"?: boolean;
    /**
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
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
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class HealthcareConsentStore extends Model<IHealthcareConsentStore> implements IHealthcareConsentStore {
  "apiVersion": IHealthcareConsentStore["apiVersion"];
  "kind": IHealthcareConsentStore["kind"];
  "metadata"?: IHealthcareConsentStore["metadata"];
  "spec": IHealthcareConsentStore["spec"];
  "status"?: IHealthcareConsentStore["status"];

static apiVersion: IHealthcareConsentStore["apiVersion"] = "healthcare.cnrm.cloud.google.com/v1alpha1";
static kind: IHealthcareConsentStore["kind"] = "HealthcareConsentStore";
static is = createTypeMetaGuard<IHealthcareConsentStore>(HealthcareConsentStore);

constructor(data?: ModelData<IHealthcareConsentStore>) {
  super();

  this.setDefinedProps({
    apiVersion: HealthcareConsentStore.apiVersion,
    kind: HealthcareConsentStore.kind,
    ...data
  } as IHealthcareConsentStore);
}
}


setValidateFunc(HealthcareConsentStore, validate as ValidateFunc<IHealthcareConsentStore>);
