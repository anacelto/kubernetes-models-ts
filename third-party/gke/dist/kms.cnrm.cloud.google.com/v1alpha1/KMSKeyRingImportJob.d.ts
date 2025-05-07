import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IKMSKeyRingImportJob {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "kms.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "KMSKeyRingImportJob";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Immutable. It must be unique within a KeyRing and match the regular expression [a-zA-Z0-9_-]{1,63}.
         */
        "importJobId": string;
        /**
         * Immutable. The wrapping method to be used for incoming key material. Possible values: ["RSA_OAEP_3072_SHA1_AES_256", "RSA_OAEP_4096_SHA1_AES_256"].
         */
        "importMethod": string;
        /**
         * Immutable. The KeyRing that this import job belongs to.
         * Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''.
         */
        "keyRing": string;
        /**
         * Immutable. The protection level of the ImportJob. This must match the protectionLevel of the
         * versionTemplate on the CryptoKey you attempt to import into. Possible values: ["SOFTWARE", "HSM", "EXTERNAL"].
         */
        "protectionLevel": string;
        /**
         * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
         */
        "resourceID"?: string;
    };
    "status"?: {
        /**
         * Statement that was generated and signed by the key creator (for example, an HSM) at key creation time.
         * Use this statement to verify attributes of the key as stored on the HSM, independently of Google.
         * Only present if the chosen ImportMethod is one with a protection level of HSM.
         */
        "attestation"?: Array<{
            /**
             * The attestation data provided by the HSM when the key operation was performed.
             * A base64-encoded string.
             */
            "content"?: string;
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
         * The time at which this resource is scheduled for expiration and can no longer be used.
         * This is in RFC3339 text format.
         */
        "expireTime"?: string;
        /**
         * The resource name for this ImportJob in the format projects/\*\/locations/\*\/keyRings/\*\/importJobs/\*.
         */
        "name"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        /**
         * The public key with which to wrap key material prior to import. Only returned if state is 'ACTIVE'.
         */
        "publicKey"?: Array<{
            /**
             * The public key, encoded in PEM format. For more information, see the RFC 7468 sections
             * for General Considerations and Textual Encoding of Subject Public Key Info.
             */
            "pem"?: string;
        }>;
        /**
         * The current state of the ImportJob, indicating if it can be used.
         */
        "state"?: string;
    };
}
export declare class KMSKeyRingImportJob extends Model<IKMSKeyRingImportJob> implements IKMSKeyRingImportJob {
    "apiVersion": IKMSKeyRingImportJob["apiVersion"];
    "kind": IKMSKeyRingImportJob["kind"];
    "metadata"?: IKMSKeyRingImportJob["metadata"];
    "spec": IKMSKeyRingImportJob["spec"];
    "status"?: IKMSKeyRingImportJob["status"];
    static apiVersion: IKMSKeyRingImportJob["apiVersion"];
    static kind: IKMSKeyRingImportJob["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IKMSKeyRingImportJob>;
    constructor(data?: ModelData<IKMSKeyRingImportJob>);
}
