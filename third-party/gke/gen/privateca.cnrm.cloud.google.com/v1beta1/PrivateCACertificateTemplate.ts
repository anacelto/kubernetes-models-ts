import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/PrivatecaCnrmCloudGoogleComV1beta1PrivateCACertificateTemplate";

export interface IPrivateCACertificateTemplate {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "privateca.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "PrivateCACertificateTemplate";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Optional. A human-readable description of scenarios this template is intended for.
     */
    "description"?: string;
    /**
     * Optional. Describes constraints on identities that may be appear in Certificates issued using this template. If this is omitted, then this template will not add restrictions on a certificate's identity.
     */
    "identityConstraints"?: {
      /**
       * Required. If this is true, the SubjectAltNames extension may be copied from a certificate request into the signed certificate. Otherwise, the requested SubjectAltNames will be discarded.
       */
      "allowSubjectAltNamesPassthrough": boolean;
      /**
       * Required. If this is true, the Subject field may be copied from a certificate request into the signed certificate. Otherwise, the requested Subject will be discarded.
       */
      "allowSubjectPassthrough": boolean;
      /**
       * Optional. A CEL expression that may be used to validate the resolved X.509 Subject and/or Subject Alternative Name before a certificate is signed. To see the full allowed syntax and some examples, see https://cloud.google.com/certificate-authority-service/docs/using-cel
       */
      "celExpression"?: {
        /**
         * Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
         */
        "description"?: string;
        /**
         * Textual representation of an expression in Common Expression Language syntax.
         */
        "expression"?: string;
        /**
         * Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
         */
        "location"?: string;
        /**
         * Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
         */
        "title"?: string;
      };
    };
    /**
     * Immutable. The location for the resource
     */
    "location": string;
    /**
     * Optional. Describes the set of X.509 extensions that may appear in a Certificate issued using this CertificateTemplate. If a certificate request sets extensions that don't appear in the passthrough_extensions, those extensions will be dropped. If the issuing CaPool's IssuancePolicy defines baseline_values that don't appear here, the certificate issuance request will fail. If this is omitted, then this template will not add restrictions on a certificate's X.509 extensions. These constraints do not apply to X.509 extensions set in this CertificateTemplate's predefined_values.
     */
    "passthroughExtensions"?: {
      /**
       * Optional. A set of ObjectIds identifying custom X.509 extensions. Will be combined with known_extensions to determine the full set of X.509 extensions.
       */
      "additionalExtensions"?: Array<{
        /**
         * Required. The parts of an OID path. The most significant parts of the path come first.
         */
        "objectIdPath": Array<number>;
      }>;
      /**
       * Optional. A set of named X.509 extensions. Will be combined with additional_extensions to determine the full set of X.509 extensions.
       */
      "knownExtensions"?: Array<string>;
    };
    /**
     * Optional. A set of X.509 values that will be applied to all issued certificates that use this template. If the certificate request includes conflicting values for the same properties, they will be overwritten by the values defined here. If the issuing CaPool's IssuancePolicy defines conflicting baseline_values for the same properties, the certificate issuance request will fail.
     */
    "predefinedValues"?: {
      /**
       * Optional. Describes custom X.509 extensions.
       */
      "additionalExtensions"?: Array<{
        /**
         * Optional. Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error).
         */
        "critical"?: boolean;
        /**
         * Required. The OID for this X.509 extension.
         */
        "objectId": {
          /**
           * Required. The parts of an OID path. The most significant parts of the path come first.
           */
          "objectIdPath": Array<number>;
        };
        /**
         * Required. The value of this X.509 extension.
         */
        "value": string;
      }>;
      /**
       * Optional. Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate.
       */
      "aiaOcspServers"?: Array<string>;
      /**
       * Optional. Describes options in this X509Parameters that are relevant in a CA certificate.
       */
      "caOptions"?: {
        /**
         * Optional. Refers to the "CA" X.509 extension, which is a boolean value. When this value is missing, the extension will be omitted from the CA certificate.
         */
        "isCa"?: boolean;
        /**
         * Optional. Refers to the path length restriction X.509 extension. For a CA certificate, this value describes the depth of subordinate CA certificates that are allowed. If this value is less than 0, the request will fail. If this value is missing, the max path length will be omitted from the CA certificate.
         */
        "maxIssuerPathLength"?: number;
      };
      /**
       * Optional. Indicates the intended use for keys that correspond to a certificate.
       */
      "keyUsage"?: {
        /**
         * Describes high-level ways in which a key may be used.
         */
        "baseKeyUsage"?: {
          /**
           * The key may be used to sign certificates.
           */
          "certSign"?: boolean;
          /**
           * The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".
           */
          "contentCommitment"?: boolean;
          /**
           * The key may be used sign certificate revocation lists.
           */
          "crlSign"?: boolean;
          /**
           * The key may be used to encipher data.
           */
          "dataEncipherment"?: boolean;
          /**
           * The key may be used to decipher only.
           */
          "decipherOnly"?: boolean;
          /**
           * The key may be used for digital signatures.
           */
          "digitalSignature"?: boolean;
          /**
           * The key may be used to encipher only.
           */
          "encipherOnly"?: boolean;
          /**
           * The key may be used in a key agreement protocol.
           */
          "keyAgreement"?: boolean;
          /**
           * The key may be used to encipher other keys.
           */
          "keyEncipherment"?: boolean;
        };
        /**
         * Detailed scenarios in which a key may be used.
         */
        "extendedKeyUsage"?: {
          /**
           * Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.
           */
          "clientAuth"?: boolean;
          /**
           * Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".
           */
          "codeSigning"?: boolean;
          /**
           * Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".
           */
          "emailProtection"?: boolean;
          /**
           * Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".
           */
          "ocspSigning"?: boolean;
          /**
           * Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.
           */
          "serverAuth"?: boolean;
          /**
           * Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".
           */
          "timeStamping"?: boolean;
        };
        /**
         * Used to describe extended key usages that are not listed in the KeyUsage.ExtendedKeyUsageOptions message.
         */
        "unknownExtendedKeyUsages"?: Array<{
          /**
           * Required. The parts of an OID path. The most significant parts of the path come first.
           */
          "objectIdPath": Array<number>;
        }>;
      };
      /**
       * Optional. Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.
       */
      "policyIds"?: Array<{
        /**
         * Required. The parts of an OID path. The most significant parts of the path come first.
         */
        "objectIdPath": Array<number>;
      }>;
    };
    /**
     * Immutable. The Project that this resource belongs to.
     */
    "projectRef": {
      /**
       * The project for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
       * The project for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
       * The project for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
       * The project for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
       * The project for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
       * The project for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
       * The project for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
     * Output only. The time at which this CertificateTemplate was created.
     */
    "createTime"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * Output only. The time at which this CertificateTemplate was updated.
     */
    "updateTime"?: string;
  };
}

export class PrivateCACertificateTemplate extends Model<IPrivateCACertificateTemplate> implements IPrivateCACertificateTemplate {
  "apiVersion": IPrivateCACertificateTemplate["apiVersion"];
  "kind": IPrivateCACertificateTemplate["kind"];
  "metadata"?: IPrivateCACertificateTemplate["metadata"];
  "spec": IPrivateCACertificateTemplate["spec"];
  "status"?: IPrivateCACertificateTemplate["status"];

static apiVersion: IPrivateCACertificateTemplate["apiVersion"] = "privateca.cnrm.cloud.google.com/v1beta1";
static kind: IPrivateCACertificateTemplate["kind"] = "PrivateCACertificateTemplate";
static is = createTypeMetaGuard<IPrivateCACertificateTemplate>(PrivateCACertificateTemplate);

constructor(data?: ModelData<IPrivateCACertificateTemplate>) {
  super();

  this.setDefinedProps({
    apiVersion: PrivateCACertificateTemplate.apiVersion,
    kind: PrivateCACertificateTemplate.kind,
    ...data
  } as IPrivateCACertificateTemplate);
}
}


setValidateFunc(PrivateCACertificateTemplate, validate as ValidateFunc<IPrivateCACertificateTemplate>);
