import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/BitnamiComV1alpha1SealedSecret";

/**
 * SealedSecret is the K8s representation of a "sealed Secret" - a regular k8s Secret that has been sealed (encrypted) using the controller's key.
 */
export interface ISealedSecret {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "bitnami.com/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "SealedSecret";
  "metadata"?: IObjectMeta;
  /**
   * SealedSecretSpec is the specification of a SealedSecret
   */
  "spec": {
    /**
     * Data is deprecated and will be removed eventually. Use per-value EncryptedData instead.
     */
    "data"?: string;
    "encryptedData": {
      [key: string]: string;
    };
    /**
     * Template defines the structure of the Secret that will be created from this sealed secret.
     */
    "template"?: {
      /**
       * Keys that should be templated using decrypted data
       */
      "data"?: {
        [key: string]: string;
      };
      /**
       * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
       */
      "metadata"?: {
        "annotations"?: {
          [key: string]: string;
        };
        "finalizers"?: Array<string>;
        "labels"?: {
          [key: string]: string;
        };
        "name"?: string;
        "namespace"?: string;
      };
      /**
       * Used to facilitate programmatic handling of secret data.
       */
      "type"?: string;
    };
  };
  /**
   * SealedSecretStatus is the most recently observed status of the SealedSecret.
   */
  "status"?: {
    /**
     * Represents the latest available observations of a sealed secret's current state.
     */
    "conditions"?: Array<{
      /**
       * Last time the condition transitioned from one status to another.
       */
      "lastTransitionTime"?: string;
      /**
       * The last time this condition was updated.
       */
      "lastUpdateTime"?: string;
      /**
       * A human readable message indicating details about the transition.
       */
      "message"?: string;
      /**
       * The reason for the condition's last transition.
       */
      "reason"?: string;
      /**
       * Status of the condition for a sealed secret. Valid values for "Synced": "True", "False", or "Unknown".
       */
      "status": string;
      /**
       * Type of condition for a sealed secret. Valid value: "Synced"
       */
      "type": string;
    }>;
    /**
     * ObservedGeneration reflects the generation most recently observed by the sealed-secrets controller.
     */
    "observedGeneration"?: number;
  };
}

/**
 * SealedSecret is the K8s representation of a "sealed Secret" - a regular k8s Secret that has been sealed (encrypted) using the controller's key.
 */
export class SealedSecret extends Model<ISealedSecret> implements ISealedSecret {
  "apiVersion": ISealedSecret["apiVersion"];
  "kind": ISealedSecret["kind"];
  "metadata"?: ISealedSecret["metadata"];
  "spec": ISealedSecret["spec"];
  "status"?: ISealedSecret["status"];

static apiVersion: ISealedSecret["apiVersion"] = "bitnami.com/v1alpha1";
static kind: ISealedSecret["kind"] = "SealedSecret";
static is = createTypeMetaGuard<ISealedSecret>(SealedSecret);

constructor(data?: ModelData<ISealedSecret>) {
  super();

  this.setDefinedProps({
    apiVersion: SealedSecret.apiVersion,
    kind: SealedSecret.kind,
    ...data
  } as ISealedSecret);
}
}


setValidateFunc(SealedSecret, validate as ValidateFunc<ISealedSecret>);
