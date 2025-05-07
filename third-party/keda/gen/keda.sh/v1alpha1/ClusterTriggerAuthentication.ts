import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/KedaShV1alpha1ClusterTriggerAuthentication";

/**
 * ClusterTriggerAuthentication defines how a trigger can authenticate globally
 */
export interface IClusterTriggerAuthentication {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "keda.sh/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "ClusterTriggerAuthentication";
  "metadata"?: IObjectMeta;
  /**
   * TriggerAuthenticationSpec defines the various ways to authenticate
   */
  "spec": {
    /**
     * AzureKeyVault is used to authenticate using Azure Key Vault
     */
    "azureKeyVault"?: {
      "cloud"?: {
        "activeDirectoryEndpoint"?: string;
        "keyVaultResourceURL"?: string;
        "type": string;
      };
      "credentials"?: {
        "clientId": string;
        "clientSecret": {
          "valueFrom": {
            "secretKeyRef": {
              "key": string;
              "name": string;
            };
          };
        };
        "tenantId": string;
      };
      /**
       * AuthPodIdentity allows users to select the platform native identity mechanism
       */
      "podIdentity"?: {
        "identityId"?: string;
        /**
         * PodIdentityProvider contains the list of providers
         */
        "provider": string;
      };
      "secrets": Array<{
        "name": string;
        "parameter": string;
        "version"?: string;
      }>;
      "vaultUri": string;
    };
    "env"?: Array<{
      "containerName"?: string;
      "name": string;
      "parameter": string;
    }>;
    /**
     * HashiCorpVault is used to authenticate using Hashicorp Vault
     */
    "hashiCorpVault"?: {
      "address": string;
      /**
       * VaultAuthentication contains the list of Hashicorp Vault authentication methods
       */
      "authentication": string;
      /**
       * Credential defines the Hashicorp Vault credentials depending on the authentication method
       */
      "credential"?: {
        "serviceAccount"?: string;
        "token"?: string;
      };
      "mount"?: string;
      "namespace"?: string;
      "role"?: string;
      "secrets": Array<{
        "key": string;
        "parameter": string;
        "path": string;
      }>;
    };
    /**
     * AuthPodIdentity allows users to select the platform native identity mechanism
     */
    "podIdentity"?: {
      "identityId"?: string;
      /**
       * PodIdentityProvider contains the list of providers
       */
      "provider": string;
    };
    "secretTargetRef"?: Array<{
      "key": string;
      "name": string;
      "parameter": string;
    }>;
  };
}

/**
 * ClusterTriggerAuthentication defines how a trigger can authenticate globally
 */
export class ClusterTriggerAuthentication extends Model<IClusterTriggerAuthentication> implements IClusterTriggerAuthentication {
  "apiVersion": IClusterTriggerAuthentication["apiVersion"];
  "kind": IClusterTriggerAuthentication["kind"];
  "metadata"?: IClusterTriggerAuthentication["metadata"];
  "spec": IClusterTriggerAuthentication["spec"];

static apiVersion: IClusterTriggerAuthentication["apiVersion"] = "keda.sh/v1alpha1";
static kind: IClusterTriggerAuthentication["kind"] = "ClusterTriggerAuthentication";
static is = createTypeMetaGuard<IClusterTriggerAuthentication>(ClusterTriggerAuthentication);

constructor(data?: ModelData<IClusterTriggerAuthentication>) {
  super();

  this.setDefinedProps({
    apiVersion: ClusterTriggerAuthentication.apiVersion,
    kind: ClusterTriggerAuthentication.kind,
    ...data
  } as IClusterTriggerAuthentication);
}
}


setValidateFunc(ClusterTriggerAuthentication, validate as ValidateFunc<IClusterTriggerAuthentication>);
