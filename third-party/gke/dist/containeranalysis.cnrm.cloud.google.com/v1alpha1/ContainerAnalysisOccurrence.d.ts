import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IContainerAnalysisOccurrence {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "containeranalysis.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "ContainerAnalysisOccurrence";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Occurrence that represents a single "attestation". The authenticity
         * of an attestation can be verified using the attached signature.
         * If the verifier trusts the public key of the signer, then verifying
         * the signature is sufficient to establish trust. In this circumstance,
         * the authority to which this attestation is attached is primarily
         * useful for lookup (how to find this attestation if you already
         * know the authority and artifact to be verified) and intent (for
         * which authority this attestation was intended to sign.
         */
        "attestation": {
            /**
             * The serialized payload that is verified by one or
             * more signatures. A base64-encoded string.
             */
            "serializedPayload": string;
            /**
             * One or more signatures over serializedPayload.
             * Verifier implementations should consider this attestation
             * message verified if at least one signature verifies
             * serializedPayload. See Signature in common.proto for more
             * details on signature structure and verification.
             */
            "signatures": Array<{
                /**
                 * The identifier for the public key that verifies this
                 * signature. MUST be an RFC3986 conformant
                 * URI. \* When possible, the key id should be an
                 * immutable reference, such as a cryptographic digest.
                 * Examples of valid values:
                 *
                 * \* OpenPGP V4 public key fingerprint. See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr
                 *   for more details on this scheme.
                 *     \* 'openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA'
                 * \* RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization):
                 *     \* "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU".
                 */
                "publicKeyId": string;
                /**
                 * The content of the signature, an opaque bytestring.
                 * The payload that this signature verifies MUST be
                 * unambiguously provided with the Signature during
                 * verification. A wrapper message might provide the
                 * payload explicitly. Alternatively, a message might
                 * have a canonical serialization that can always be
                 * unambiguously computed to derive the payload.
                 */
                "signature"?: string;
            }>;
        };
        /**
         * Immutable. The analysis note associated with this occurrence, in the form of
         * projects/[PROJECT]/notes/[NOTE_ID]. This field can be used as a
         * filter in list requests.
         */
        "noteName": string;
        /**
         * The project that this resource belongs to.
         */
        "projectRef": {
            /**
             * Allowed value: The `name` field of a `Project` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        } & (Exclude<{
            /**
             * Allowed value: The `name` field of a `Project` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        }, {
            /**
             * Allowed value: The `name` field of a `Project` resource.
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        }> | Exclude<{
            /**
             * Allowed value: The `name` field of a `Project` resource.
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        }, {
            /**
             * Allowed value: The `name` field of a `Project` resource.
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        } & ({
            /**
             * Allowed value: The `name` field of a `Project` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        } | {
            /**
             * Allowed value: The `name` field of a `Project` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace": string;
        })>);
        /**
         * A description of actions that can be taken to remedy the note.
         */
        "remediation"?: string;
        /**
         * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
         */
        "resourceID"?: string;
        /**
         * Immutable. Required. Immutable. A URI that represents the resource for which
         * the occurrence applies. For example,
         * https://gcr.io/project/image@sha256:123abc for a Docker image.
         */
        "resourceUri": string;
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
         * The time when the repository was created.
         */
        "createTime"?: string;
        /**
         * The note kind which explicitly denotes which of the occurrence
         * details are specified. This field can be used as a filter in list
         * requests.
         */
        "kind"?: string;
        /**
         * The name of the occurrence.
         */
        "name"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        /**
         * The time when the repository was last updated.
         */
        "updateTime"?: string;
    };
}
export declare class ContainerAnalysisOccurrence extends Model<IContainerAnalysisOccurrence> implements IContainerAnalysisOccurrence {
    "apiVersion": IContainerAnalysisOccurrence["apiVersion"];
    "kind": IContainerAnalysisOccurrence["kind"];
    "metadata"?: IContainerAnalysisOccurrence["metadata"];
    "spec": IContainerAnalysisOccurrence["spec"];
    "status"?: IContainerAnalysisOccurrence["status"];
    static apiVersion: IContainerAnalysisOccurrence["apiVersion"];
    static kind: IContainerAnalysisOccurrence["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IContainerAnalysisOccurrence>;
    constructor(data?: ModelData<IContainerAnalysisOccurrence>);
}
