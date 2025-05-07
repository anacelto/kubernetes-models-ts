import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/KmsCnrmCloudGoogleComV1alpha1KMSSecretCiphertext";

export interface IKMSSecretCiphertext {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "kms.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "KMSSecretCiphertext";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Immutable. The additional authenticated data used for integrity checks during encryption and decryption.
     */
    "additionalAuthenticatedData"?: {
      /**
       * Value of the field. Cannot be used if 'valueFrom' is specified.
       */
      "value"?: string;
      /**
       * Source for the field's value. Cannot be used if 'value' is specified.
       */
      "valueFrom"?: {
        /**
         * Reference to a value with the given key in the given Secret in the resource's namespace.
         */
        "secretKeyRef"?: {
          /**
           * Key that identifies the value to be extracted.
           */
          "key": string;
          /**
           * Name of the Secret to extract a value from.
           */
          "name": string;
        };
      };
    } & (Exclude<{
      /**
       * Value of the field. Cannot be used if 'valueFrom' is specified.
       */
      "value": string;
      /**
       * Source for the field's value. Cannot be used if 'value' is specified.
       */
      "valueFrom"?: {
        /**
         * Reference to a value with the given key in the given Secret in the resource's namespace.
         */
        "secretKeyRef"?: {
          /**
           * Key that identifies the value to be extracted.
           */
          "key": string;
          /**
           * Name of the Secret to extract a value from.
           */
          "name": string;
        };
      };
    }, {
      /**
       * Value of the field. Cannot be used if 'valueFrom' is specified.
       */
      "value"?: string;
      /**
       * Source for the field's value. Cannot be used if 'value' is specified.
       */
      "valueFrom": {
        /**
         * Reference to a value with the given key in the given Secret in the resource's namespace.
         */
        "secretKeyRef"?: {
          /**
           * Key that identifies the value to be extracted.
           */
          "key": string;
          /**
           * Name of the Secret to extract a value from.
           */
          "name": string;
        };
      };
    }> | Exclude<{
      /**
       * Value of the field. Cannot be used if 'valueFrom' is specified.
       */
      "value"?: string;
      /**
       * Source for the field's value. Cannot be used if 'value' is specified.
       */
      "valueFrom": {
        /**
         * Reference to a value with the given key in the given Secret in the resource's namespace.
         */
        "secretKeyRef"?: {
          /**
           * Key that identifies the value to be extracted.
           */
          "key": string;
          /**
           * Name of the Secret to extract a value from.
           */
          "name": string;
        };
      };
    }, {
      /**
       * Value of the field. Cannot be used if 'valueFrom' is specified.
       */
      "value": string;
      /**
       * Source for the field's value. Cannot be used if 'value' is specified.
       */
      "valueFrom"?: {
        /**
         * Reference to a value with the given key in the given Secret in the resource's namespace.
         */
        "secretKeyRef"?: {
          /**
           * Key that identifies the value to be extracted.
           */
          "key": string;
          /**
           * Name of the Secret to extract a value from.
           */
          "name": string;
        };
      };
    }>);
    /**
     * Immutable. The full name of the CryptoKey that will be used to encrypt the provided plaintext.
     * Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}''.
     */
    "cryptoKey": string;
    /**
     * Immutable. The plaintext to be encrypted.
     */
    "plaintext": {
      /**
       * Value of the field. Cannot be used if 'valueFrom' is specified.
       */
      "value"?: string;
      /**
       * Source for the field's value. Cannot be used if 'value' is specified.
       */
      "valueFrom"?: {
        /**
         * Reference to a value with the given key in the given Secret in the resource's namespace.
         */
        "secretKeyRef"?: {
          /**
           * Key that identifies the value to be extracted.
           */
          "key": string;
          /**
           * Name of the Secret to extract a value from.
           */
          "name": string;
        };
      };
    } & (Exclude<{
      /**
       * Value of the field. Cannot be used if 'valueFrom' is specified.
       */
      "value": string;
      /**
       * Source for the field's value. Cannot be used if 'value' is specified.
       */
      "valueFrom"?: {
        /**
         * Reference to a value with the given key in the given Secret in the resource's namespace.
         */
        "secretKeyRef"?: {
          /**
           * Key that identifies the value to be extracted.
           */
          "key": string;
          /**
           * Name of the Secret to extract a value from.
           */
          "name": string;
        };
      };
    }, {
      /**
       * Value of the field. Cannot be used if 'valueFrom' is specified.
       */
      "value"?: string;
      /**
       * Source for the field's value. Cannot be used if 'value' is specified.
       */
      "valueFrom": {
        /**
         * Reference to a value with the given key in the given Secret in the resource's namespace.
         */
        "secretKeyRef"?: {
          /**
           * Key that identifies the value to be extracted.
           */
          "key": string;
          /**
           * Name of the Secret to extract a value from.
           */
          "name": string;
        };
      };
    }> | Exclude<{
      /**
       * Value of the field. Cannot be used if 'valueFrom' is specified.
       */
      "value"?: string;
      /**
       * Source for the field's value. Cannot be used if 'value' is specified.
       */
      "valueFrom": {
        /**
         * Reference to a value with the given key in the given Secret in the resource's namespace.
         */
        "secretKeyRef"?: {
          /**
           * Key that identifies the value to be extracted.
           */
          "key": string;
          /**
           * Name of the Secret to extract a value from.
           */
          "name": string;
        };
      };
    }, {
      /**
       * Value of the field. Cannot be used if 'valueFrom' is specified.
       */
      "value": string;
      /**
       * Source for the field's value. Cannot be used if 'value' is specified.
       */
      "valueFrom"?: {
        /**
         * Reference to a value with the given key in the given Secret in the resource's namespace.
         */
        "secretKeyRef"?: {
          /**
           * Key that identifies the value to be extracted.
           */
          "key": string;
          /**
           * Name of the Secret to extract a value from.
           */
          "name": string;
        };
      };
    }>);
    /**
     * Immutable. Optional. The service-generated ciphertext of the resource. Used for acquisition only. Leave unset to create a new resource.
     */
    "resourceID"?: string;
  };
  "status"?: {
    /**
     * Contains the result of encrypting the provided plaintext, encoded in base64.
     */
    "ciphertext"?: string;
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

export class KMSSecretCiphertext extends Model<IKMSSecretCiphertext> implements IKMSSecretCiphertext {
  "apiVersion": IKMSSecretCiphertext["apiVersion"];
  "kind": IKMSSecretCiphertext["kind"];
  "metadata"?: IKMSSecretCiphertext["metadata"];
  "spec": IKMSSecretCiphertext["spec"];
  "status"?: IKMSSecretCiphertext["status"];

static apiVersion: IKMSSecretCiphertext["apiVersion"] = "kms.cnrm.cloud.google.com/v1alpha1";
static kind: IKMSSecretCiphertext["kind"] = "KMSSecretCiphertext";
static is = createTypeMetaGuard<IKMSSecretCiphertext>(KMSSecretCiphertext);

constructor(data?: ModelData<IKMSSecretCiphertext>) {
  super();

  this.setDefinedProps({
    apiVersion: KMSSecretCiphertext.apiVersion,
    kind: KMSSecretCiphertext.kind,
    ...data
  } as IKMSSecretCiphertext);
}
}


setValidateFunc(KMSSecretCiphertext, validate as ValidateFunc<IKMSSecretCiphertext>);
