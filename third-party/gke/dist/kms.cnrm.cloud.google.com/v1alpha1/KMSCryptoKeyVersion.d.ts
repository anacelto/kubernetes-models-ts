import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IKMSCryptoKeyVersion {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "kms.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "KMSCryptoKeyVersion";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Immutable. The name of the cryptoKey associated with the CryptoKeyVersions.
         * Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyring}}/cryptoKeys/{{cryptoKey}}''.
         */
        "cryptoKey": string;
        /**
         * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
         */
        "resourceID"?: string;
        /**
         * The current state of the CryptoKeyVersion. Possible values: ["PENDING_GENERATION", "ENABLED", "DISABLED", "DESTROYED", "DESTROY_SCHEDULED", "PENDING_IMPORT", "IMPORT_FAILED"].
         */
        "state"?: string;
    };
    "status"?: {
        /**
         * The CryptoKeyVersionAlgorithm that this CryptoKeyVersion supports.
         */
        "algorithm"?: string;
        /**
         * Statement that was generated and signed by the HSM at key creation time. Use this statement to verify attributes of the key as stored on the HSM, independently of Google.
         * Only provided for key versions with protectionLevel HSM.
         */
        "attestation"?: Array<{
            /**
             * The certificate chains needed to validate the attestation.
             */
            "certChains"?: {
                /**
                 * Cavium certificate chain corresponding to the attestation.
                 */
                "caviumCerts"?: string;
                /**
                 * Google card certificate chain corresponding to the attestation.
                 */
                "googleCardCerts"?: string;
                /**
                 * Google partition certificate chain corresponding to the attestation.
                 */
                "googlePartitionCerts"?: string;
            };
            /**
             * The attestation data provided by the HSM when the key operation was performed.
             */
            "content"?: string;
            /**
             * ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.
             */
            "externalProtectionLevelOptions"?: {
                /**
                 * The path to the external key material on the EKM when using EkmConnection e.g., "v0/my/key". Set this field instead of externalKeyUri when using an EkmConnection.
                 */
                "ekmConnectionKeyPath"?: string;
                /**
                 * The URI for an external resource that this CryptoKeyVersion represents.
                 */
                "externalKeyUri"?: string;
            };
            /**
             * The format of the attestation data.
             */
            "format"?: string;
        }>;
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
         * The time this CryptoKeyVersion key material was generated.
         */
        "generateTime"?: string;
        /**
         * The resource name for this CryptoKeyVersion.
         */
        "name"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        /**
         * The ProtectionLevel describing how crypto operations are performed with this CryptoKeyVersion.
         */
        "protectionLevel"?: string;
    };
}
export declare class KMSCryptoKeyVersion extends Model<IKMSCryptoKeyVersion> implements IKMSCryptoKeyVersion {
    "apiVersion": IKMSCryptoKeyVersion["apiVersion"];
    "kind": IKMSCryptoKeyVersion["kind"];
    "metadata"?: IKMSCryptoKeyVersion["metadata"];
    "spec": IKMSCryptoKeyVersion["spec"];
    "status"?: IKMSCryptoKeyVersion["status"];
    static apiVersion: IKMSCryptoKeyVersion["apiVersion"];
    static kind: IKMSCryptoKeyVersion["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IKMSCryptoKeyVersion>;
    constructor(data?: ModelData<IKMSCryptoKeyVersion>);
}
