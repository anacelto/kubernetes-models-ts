import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IIdentityPlatformInboundSAMLConfig {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "identityplatform.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "IdentityPlatformInboundSAMLConfig";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Human friendly display name.
         */
        "displayName": string;
        /**
         * If this config allows users to sign in with the provider.
         */
        "enabled"?: boolean;
        /**
         * SAML IdP configuration when the project acts as the relying party.
         */
        "idpConfig": {
            /**
             * The IdP's certificate data to verify the signature in the SAMLResponse issued by the IDP.
             */
            "idpCertificates": Array<{
                /**
                 * The IdP's x509 certificate.
                 */
                "x509Certificate"?: string;
            }>;
            /**
             * Unique identifier for all SAML entities.
             */
            "idpEntityId": string;
            /**
             * Indicates if outbounding SAMLRequest should be signed.
             */
            "signRequest"?: boolean;
            /**
             * URL to send Authentication request to.
             */
            "ssoUrl": string;
        };
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
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
        /**
         * SAML SP (Service Provider) configuration when the project acts as the relying party to receive
         * and accept an authentication assertion issued by a SAML identity provider.
         */
        "spConfig": {
            /**
             * Callback URI where responses from IDP are handled. Must start with 'https://'.
             */
            "callbackUri"?: string;
            /**
             * The IDP's certificate data to verify the signature in the SAMLResponse issued by the IDP.
             */
            "spCertificates"?: Array<{
                /**
                 * The x509 certificate.
                 */
                "x509Certificate"?: string;
            }>;
            /**
             * Unique identifier for all SAML entities.
             */
            "spEntityId"?: string;
        };
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
export declare class IdentityPlatformInboundSAMLConfig extends Model<IIdentityPlatformInboundSAMLConfig> implements IIdentityPlatformInboundSAMLConfig {
    "apiVersion": IIdentityPlatformInboundSAMLConfig["apiVersion"];
    "kind": IIdentityPlatformInboundSAMLConfig["kind"];
    "metadata"?: IIdentityPlatformInboundSAMLConfig["metadata"];
    "spec": IIdentityPlatformInboundSAMLConfig["spec"];
    "status"?: IIdentityPlatformInboundSAMLConfig["status"];
    static apiVersion: IIdentityPlatformInboundSAMLConfig["apiVersion"];
    static kind: IIdentityPlatformInboundSAMLConfig["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IIdentityPlatformInboundSAMLConfig>;
    constructor(data?: ModelData<IIdentityPlatformInboundSAMLConfig>);
}
