import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ExternalSecretsIoV1alpha1PushSecret";

export interface IPushSecret {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "external-secrets.io/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "PushSecret";
  "metadata"?: IObjectMeta;
  /**
   * PushSecretSpec configures the behavior of the PushSecret.
   */
  "spec"?: {
    /**
     * Secret Data that should be pushed to providers
     */
    "data"?: Array<{
      /**
       * Match a given Secret Key to be pushed to the provider.
       */
      "match": {
        /**
         * Remote Refs to push to providers.
         */
        "remoteRef": {
          /**
           * Name of the resulting provider secret.
           */
          "remoteKey": string;
        };
        /**
         * Secret Key to be pushed
         */
        "secretKey": string;
      };
    }>;
    /**
     * Deletion Policy to handle Secrets in the provider. Possible Values: "Delete/None". Defaults to "None".
     */
    "deletionPolicy"?: string;
    /**
     * The Interval to which External Secrets will try to push a secret definition
     */
    "refreshInterval"?: string;
    "secretStoreRefs": Array<{
      /**
       * Kind of the SecretStore resource (SecretStore or ClusterSecretStore) Defaults to `SecretStore`
       */
      "kind"?: string;
      /**
       * Optionally, sync to secret stores with label selector
       */
      "labelSelector"?: {
        /**
         * matchExpressions is a list of label selector requirements. The requirements are ANDed.
         */
        "matchExpressions"?: Array<{
          /**
           * key is the label key that the selector applies to.
           */
          "key": string;
          /**
           * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
           */
          "operator": string;
          /**
           * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
           */
          "values"?: Array<string>;
        }>;
        /**
         * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
         */
        "matchLabels"?: {
          [key: string]: string;
        };
      };
      /**
       * Optionally, sync to the SecretStore of the given name
       */
      "name"?: string;
    }>;
    /**
     * The Secret Selector (k8s source) for the Push Secret
     */
    "selector": {
      /**
       * Select a Secret to Push.
       */
      "secret": {
        /**
         * Name of the Secret. The Secret must exist in the same namespace as the PushSecret manifest.
         */
        "name": string;
      };
    };
  };
  /**
   * PushSecretStatus indicates the history of the status of PushSecret.
   */
  "status"?: {
    "conditions"?: Array<{
      "lastTransitionTime"?: string;
      "message"?: string;
      "reason"?: string;
      "status": string;
      /**
       * PushSecretConditionType indicates the condition of the PushSecret.
       */
      "type": string;
    }>;
    /**
     * refreshTime is the time and date the external secret was fetched and the target secret updated
     */
    "refreshTime"?: string;
    /**
     * Synced Push Secrets for later deletion. Matches Secret Stores to PushSecretData that was stored to that secretStore.
     */
    "syncedPushSecrets"?: {
      [key: string]: {
        [key: string]: {
          /**
           * Match a given Secret Key to be pushed to the provider.
           */
          "match": {
            /**
             * Remote Refs to push to providers.
             */
            "remoteRef": {
              /**
               * Name of the resulting provider secret.
               */
              "remoteKey": string;
            };
            /**
             * Secret Key to be pushed
             */
            "secretKey": string;
          };
        };
      };
    };
    /**
     * SyncedResourceVersion keeps track of the last synced version.
     */
    "syncedResourceVersion"?: string;
  };
}

export class PushSecret extends Model<IPushSecret> implements IPushSecret {
  "apiVersion": IPushSecret["apiVersion"];
  "kind": IPushSecret["kind"];
  "metadata"?: IPushSecret["metadata"];
  "spec"?: IPushSecret["spec"];
  "status"?: IPushSecret["status"];

static apiVersion: IPushSecret["apiVersion"] = "external-secrets.io/v1alpha1";
static kind: IPushSecret["kind"] = "PushSecret";
static is = createTypeMetaGuard<IPushSecret>(PushSecret);

constructor(data?: ModelData<IPushSecret>) {
  super();

  this.setDefinedProps({
    apiVersion: PushSecret.apiVersion,
    kind: PushSecret.kind,
    ...data
  } as IPushSecret);
}
}


setValidateFunc(PushSecret, validate as ValidateFunc<IPushSecret>);
