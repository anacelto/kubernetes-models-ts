import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * TriggerAuthentication defines how a trigger can authenticate
 */
export interface ITriggerAuthentication {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "keda.sh/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "TriggerAuthentication";
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
 * TriggerAuthentication defines how a trigger can authenticate
 */
export declare class TriggerAuthentication extends Model<ITriggerAuthentication> implements ITriggerAuthentication {
    "apiVersion": ITriggerAuthentication["apiVersion"];
    "kind": ITriggerAuthentication["kind"];
    "metadata"?: ITriggerAuthentication["metadata"];
    "spec": ITriggerAuthentication["spec"];
    static apiVersion: ITriggerAuthentication["apiVersion"];
    static kind: ITriggerAuthentication["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ITriggerAuthentication>;
    constructor(data?: ModelData<ITriggerAuthentication>);
}
