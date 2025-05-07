import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/PrivatecaCnrmCloudGoogleComV1beta1PrivateCACertificateAuthority";

export interface IPrivateCACertificateAuthority {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "privateca.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "PrivateCACertificateAuthority";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Immutable.
     */
    "caPoolRef": {
      /**
       * The caPool for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `PrivateCACAPool` resource (format: `projects/{{project}}/locations/{{location}}/caPools/{{name}}`).
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
       * The caPool for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `PrivateCACAPool` resource (format: `projects/{{project}}/locations/{{location}}/caPools/{{name}}`).
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
       * The caPool for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `PrivateCACAPool` resource (format: `projects/{{project}}/locations/{{location}}/caPools/{{name}}`).
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
       * The caPool for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `PrivateCACAPool` resource (format: `projects/{{project}}/locations/{{location}}/caPools/{{name}}`).
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
       * The caPool for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `PrivateCACAPool` resource (format: `projects/{{project}}/locations/{{location}}/caPools/{{name}}`).
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
       * The caPool for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `PrivateCACAPool` resource (format: `projects/{{project}}/locations/{{location}}/caPools/{{name}}`).
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
       * The caPool for the resource
       * 
       * Allowed value: The Google Cloud resource name of a `PrivateCACAPool` resource (format: `projects/{{project}}/locations/{{location}}/caPools/{{name}}`).
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
     * Immutable. Required. Immutable. The config used to create a self-signed X.509 certificate or CSR.
     */
    "config": {
      /**
       * Immutable. Required. Specifies some of the values in a certificate that are related to the subject.
       */
      "subjectConfig": {
        /**
         * Immutable. Required. Contains distinguished name fields such as the common name, location and organization.
         */
        "subject": {
          /**
           * Immutable. The "common name" of the subject.
           */
          "commonName"?: string;
          /**
           * Immutable. The country code of the subject.
           */
          "countryCode"?: string;
          /**
           * Immutable. The locality or city of the subject.
           */
          "locality"?: string;
          /**
           * Immutable. The organization of the subject.
           */
          "organization"?: string;
          /**
           * Immutable. The organizational_unit of the subject.
           */
          "organizationalUnit"?: string;
          /**
           * Immutable. The postal code of the subject.
           */
          "postalCode"?: string;
          /**
           * Immutable. The province, territory, or regional state of the subject.
           */
          "province"?: string;
          /**
           * Immutable. The street address of the subject.
           */
          "streetAddress"?: string;
        };
        /**
         * Immutable. Optional. The subject alternative name fields.
         */
        "subjectAltName"?: {
          /**
           * Immutable. Contains additional subject alternative name values.
           */
          "customSans"?: Array<{
            /**
             * Immutable. Optional. Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error).
             */
            "critical"?: boolean;
            /**
             * Immutable. Required. The OID for this X.509 extension.
             */
            "objectId": {
              /**
               * Immutable. Required. The parts of an OID path. The most significant parts of the path come first.
               */
              "objectIdPath": Array<number>;
            };
            /**
             * Immutable. Required. The value of this X.509 extension.
             */
            "value": string;
          }>;
          /**
           * Immutable. Contains only valid, fully-qualified host names.
           */
          "dnsNames"?: Array<string>;
          /**
           * Immutable. Contains only valid RFC 2822 E-mail addresses.
           */
          "emailAddresses"?: Array<string>;
          /**
           * Immutable. Contains only valid 32-bit IPv4 addresses or RFC 4291 IPv6 addresses.
           */
          "ipAddresses"?: Array<string>;
          /**
           * Immutable. Contains only valid RFC 3986 URIs.
           */
          "uris"?: Array<string>;
        };
      };
      /**
       * Immutable. Required. Describes how some of the technical X.509 fields in a certificate should be populated.
       */
      "x509Config": {
        /**
         * Immutable. Optional. Describes custom X.509 extensions.
         */
        "additionalExtensions"?: Array<{
          /**
           * Immutable. Optional. Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error).
           */
          "critical"?: boolean;
          /**
           * Immutable. Required. The OID for this X.509 extension.
           */
          "objectId": {
            /**
             * Immutable. Required. The parts of an OID path. The most significant parts of the path come first.
             */
            "objectIdPath": Array<number>;
          };
          /**
           * Immutable. Required. The value of this X.509 extension.
           */
          "value": string;
        }>;
        /**
         * Immutable. Optional. Describes options in this X509Parameters that are relevant in a CA certificate.
         */
        "caOptions"?: {
          /**
           * Immutable. Optional. Refers to the "CA" X.509 extension, which is a boolean value. When this value is missing, the extension will be omitted from the CA certificate.
           */
          "isCa"?: boolean;
          /**
           * Immutable. Optional. Refers to the path length restriction X.509 extension. For a CA certificate, this value describes the depth of subordinate CA certificates that are allowed. If this value is less than 0, the request will fail. If this value is missing, the max path length will be omitted from the CA certificate.
           */
          "maxIssuerPathLength"?: number;
          /**
           * Immutable. Optional. When true, the "path length constraint" in Basic Constraints extension will be set to 0. if both max_issuer_path_length and zero_max_issuer_path_length are unset, the max path length will be omitted from the CA certificate.
           */
          "zeroMaxIssuerPathLength"?: boolean;
        };
        /**
         * Immutable. Optional. Indicates the intended use for keys that correspond to a certificate.
         */
        "keyUsage"?: {
          /**
           * Immutable. Describes high-level ways in which a key may be used.
           */
          "baseKeyUsage"?: {
            /**
             * Immutable. The key may be used to sign certificates.
             */
            "certSign"?: boolean;
            /**
             * Immutable. The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".
             */
            "contentCommitment"?: boolean;
            /**
             * Immutable. The key may be used sign certificate revocation lists.
             */
            "crlSign"?: boolean;
            /**
             * Immutable. The key may be used to encipher data.
             */
            "dataEncipherment"?: boolean;
            /**
             * Immutable. The key may be used to decipher only.
             */
            "decipherOnly"?: boolean;
            /**
             * Immutable. The key may be used for digital signatures.
             */
            "digitalSignature"?: boolean;
            /**
             * Immutable. The key may be used to encipher only.
             */
            "encipherOnly"?: boolean;
            /**
             * Immutable. The key may be used in a key agreement protocol.
             */
            "keyAgreement"?: boolean;
            /**
             * Immutable. The key may be used to encipher other keys.
             */
            "keyEncipherment"?: boolean;
          };
          /**
           * Immutable. Detailed scenarios in which a key may be used.
           */
          "extendedKeyUsage"?: {
            /**
             * Immutable. Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.
             */
            "clientAuth"?: boolean;
            /**
             * Immutable. Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".
             */
            "codeSigning"?: boolean;
            /**
             * Immutable. Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".
             */
            "emailProtection"?: boolean;
            /**
             * Immutable. Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".
             */
            "ocspSigning"?: boolean;
            /**
             * Immutable. Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.
             */
            "serverAuth"?: boolean;
            /**
             * Immutable. Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".
             */
            "timeStamping"?: boolean;
          };
          /**
           * Immutable. Used to describe extended key usages that are not listed in the KeyUsage.ExtendedKeyUsageOptions message.
           */
          "unknownExtendedKeyUsages"?: Array<{
            /**
             * Immutable. Required. The parts of an OID path. The most significant parts of the path come first.
             */
            "objectIdPath": Array<number>;
          }>;
        };
        /**
         * Immutable. Optional. Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.
         */
        "policyIds"?: Array<{
          /**
           * Immutable. Required. The parts of an OID path. The most significant parts of the path come first.
           */
          "objectIdPath": Array<number>;
        }>;
      };
    };
    /**
     * Immutable.
     */
    "gcsBucketRef"?: {
      /**
       * Immutable. The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs. This must be a bucket name, without any prefixes (such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named `my-bucket`, you would simply specify `my-bucket`. If not specified, a managed bucket will be created.
       * 
       * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
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
       * Immutable. The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs. This must be a bucket name, without any prefixes (such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named `my-bucket`, you would simply specify `my-bucket`. If not specified, a managed bucket will be created.
       * 
       * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
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
       * Immutable. The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs. This must be a bucket name, without any prefixes (such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named `my-bucket`, you would simply specify `my-bucket`. If not specified, a managed bucket will be created.
       * 
       * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
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
       * Immutable. The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs. This must be a bucket name, without any prefixes (such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named `my-bucket`, you would simply specify `my-bucket`. If not specified, a managed bucket will be created.
       * 
       * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
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
       * Immutable. The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs. This must be a bucket name, without any prefixes (such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named `my-bucket`, you would simply specify `my-bucket`. If not specified, a managed bucket will be created.
       * 
       * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
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
       * Immutable. The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs. This must be a bucket name, without any prefixes (such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named `my-bucket`, you would simply specify `my-bucket`. If not specified, a managed bucket will be created.
       * 
       * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
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
       * Immutable. The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs. This must be a bucket name, without any prefixes (such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named `my-bucket`, you would simply specify `my-bucket`. If not specified, a managed bucket will be created.
       * 
       * Allowed value: The Google Cloud resource name of a `StorageBucket` resource (format: `{{name}}`).
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
     * Immutable. Required. Immutable. Used when issuing certificates for this CertificateAuthority. If this CertificateAuthority is a self-signed CertificateAuthority, this key is also used to sign the self-signed CA certificate. Otherwise, it is used to sign a CSR.
     */
    "keySpec": {
      /**
       * Immutable. The algorithm to use for creating a managed Cloud KMS key for a for a simplified experience. All managed keys will be have their ProtectionLevel as `HSM`. Possible values: RSA_PSS_2048_SHA256, RSA_PSS_3072_SHA256, RSA_PSS_4096_SHA256, RSA_PKCS1_2048_SHA256, RSA_PKCS1_3072_SHA256, RSA_PKCS1_4096_SHA256, EC_P256_SHA256, EC_P384_SHA384
       */
      "algorithm"?: string;
      /**
       * Immutable.
       */
      "cloudKmsKeyVersionRef"?: {
        /**
         * The resource name for an existing Cloud KMS CryptoKeyVersion in the format `projects/\*\/locations/\*\/keyRings/\*\/cryptoKeys/\*\/cryptoKeyVersions/\*`. This option enables full flexibility in the key's capabilities and properties.
         */
        "external"?: string;
        /**
         * [WARNING] KMSCryptoKeyVersion not yet supported in Config Connector, use 'external' field to reference existing resources.
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace"?: string;
      } & (Exclude<{
        /**
         * The resource name for an existing Cloud KMS CryptoKeyVersion in the format `projects/\*\/locations/\*\/keyRings/\*\/cryptoKeys/\*\/cryptoKeyVersions/\*`. This option enables full flexibility in the key's capabilities and properties.
         */
        "external"?: string;
        /**
         * [WARNING] KMSCryptoKeyVersion not yet supported in Config Connector, use 'external' field to reference existing resources.
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name": string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace"?: string;
      }, {
        /**
         * The resource name for an existing Cloud KMS CryptoKeyVersion in the format `projects/\*\/locations/\*\/keyRings/\*\/cryptoKeys/\*\/cryptoKeyVersions/\*`. This option enables full flexibility in the key's capabilities and properties.
         */
        "external": string;
        /**
         * [WARNING] KMSCryptoKeyVersion not yet supported in Config Connector, use 'external' field to reference existing resources.
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace"?: string;
      }> | Exclude<{
        /**
         * The resource name for an existing Cloud KMS CryptoKeyVersion in the format `projects/\*\/locations/\*\/keyRings/\*\/cryptoKeys/\*\/cryptoKeyVersions/\*`. This option enables full flexibility in the key's capabilities and properties.
         */
        "external": string;
        /**
         * [WARNING] KMSCryptoKeyVersion not yet supported in Config Connector, use 'external' field to reference existing resources.
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace"?: string;
      }, {
        /**
         * The resource name for an existing Cloud KMS CryptoKeyVersion in the format `projects/\*\/locations/\*\/keyRings/\*\/cryptoKeys/\*\/cryptoKeyVersions/\*`. This option enables full flexibility in the key's capabilities and properties.
         */
        "external": string;
        /**
         * [WARNING] KMSCryptoKeyVersion not yet supported in Config Connector, use 'external' field to reference existing resources.
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace"?: string;
      } & ({
        /**
         * The resource name for an existing Cloud KMS CryptoKeyVersion in the format `projects/\*\/locations/\*\/keyRings/\*\/cryptoKeys/\*\/cryptoKeyVersions/\*`. This option enables full flexibility in the key's capabilities and properties.
         */
        "external"?: string;
        /**
         * [WARNING] KMSCryptoKeyVersion not yet supported in Config Connector, use 'external' field to reference existing resources.
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name": string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace"?: string;
      } | {
        /**
         * The resource name for an existing Cloud KMS CryptoKeyVersion in the format `projects/\*\/locations/\*\/keyRings/\*\/cryptoKeys/\*\/cryptoKeyVersions/\*`. This option enables full flexibility in the key's capabilities and properties.
         */
        "external"?: string;
        /**
         * [WARNING] KMSCryptoKeyVersion not yet supported in Config Connector, use 'external' field to reference existing resources.
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
         */
        "namespace": string;
      })>);
    };
    /**
     * Immutable. Required. The desired lifetime of the CA certificate. Used to create the "not_before_time" and "not_after_time" fields inside an X.509 certificate.
     */
    "lifetime": string;
    /**
     * Immutable. The location for the resource
     */
    "location": string;
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
    /**
     * Immutable. Required. Immutable. The Type of this CertificateAuthority. Possible values: SELF_SIGNED, SUBORDINATE
     */
    "type": string;
  };
  "status"?: {
    /**
     * Output only. URLs for accessing content published by this CA, such as the CA certificate and CRLs.
     */
    "accessUrls"?: {
      /**
       * The URL where this CertificateAuthority's CA certificate is published. This will only be set for CAs that have been activated.
       */
      "caCertificateAccessUrl"?: string;
      /**
       * The URLs where this CertificateAuthority's CRLs are published. This will only be set for CAs that have been activated.
       */
      "crlAccessUrls"?: Array<string>;
    };
    /**
     * Output only. A structured description of this CertificateAuthority's CA certificate and its issuers. Ordered as self-to-root.
     */
    "caCertificateDescriptions"?: Array<{
      /**
       * Describes lists of issuer CA certificate URLs that appear in the "Authority Information Access" extension in the certificate.
       */
      "aiaIssuingCertificateUrls"?: Array<string>;
      /**
       * Identifies the subject_key_id of the parent certificate, per https://tools.ietf.org/html/rfc5280#section-4.2.1.1
       */
      "authorityKeyId"?: {
        /**
         * Optional. The value of this KeyId encoded in lowercase hexadecimal. This is most likely the 160 bit SHA-1 hash of the public key.
         */
        "keyId"?: string;
      };
      /**
       * The hash of the x.509 certificate.
       */
      "certFingerprint"?: {
        /**
         * The SHA 256 hash, encoded in hexadecimal, of the DER x509 certificate.
         */
        "sha256Hash"?: string;
      };
      /**
       * Describes a list of locations to obtain CRL information, i.e. the DistributionPoint.fullName described by https://tools.ietf.org/html/rfc5280#section-4.2.1.13
       */
      "crlDistributionPoints"?: Array<string>;
      /**
       * The public key that corresponds to an issued certificate.
       */
      "publicKey"?: {
        /**
         * Required. The format of the public key. Possible values: PEM
         */
        "format"?: string;
        /**
         * Required. A public key. The padding and encoding must match with the `KeyFormat` value specified for the `format` field.
         */
        "key"?: string;
      };
      /**
       * Describes some of the values in a certificate that are related to the subject and lifetime.
       */
      "subjectDescription"?: {
        /**
         * The serial number encoded in lowercase hexadecimal.
         */
        "hexSerialNumber"?: string;
        /**
         * For convenience, the actual lifetime of an issued certificate.
         */
        "lifetime"?: string;
        /**
         * The time after which the certificate is expired. Per RFC 5280, the validity period for a certificate is the period of time from not_before_time through not_after_time, inclusive. Corresponds to 'not_before_time' + 'lifetime' - 1 second.
         */
        "notAfterTime"?: string;
        /**
         * The time at which the certificate becomes valid.
         */
        "notBeforeTime"?: string;
        /**
         * Contains distinguished name fields such as the common name, location and organization.
         */
        "subject"?: {
          /**
           * The "common name" of the subject.
           */
          "commonName"?: string;
          /**
           * The country code of the subject.
           */
          "countryCode"?: string;
          /**
           * The locality or city of the subject.
           */
          "locality"?: string;
          /**
           * The organization of the subject.
           */
          "organization"?: string;
          /**
           * The organizational_unit of the subject.
           */
          "organizationalUnit"?: string;
          /**
           * The postal code of the subject.
           */
          "postalCode"?: string;
          /**
           * The province, territory, or regional state of the subject.
           */
          "province"?: string;
          /**
           * The street address of the subject.
           */
          "streetAddress"?: string;
        };
        /**
         * The subject alternative name fields.
         */
        "subjectAltName"?: {
          /**
           * Contains additional subject alternative name values.
           */
          "customSans"?: Array<{
            /**
             * Optional. Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error).
             */
            "critical"?: boolean;
            /**
             * Required. The OID for this X.509 extension.
             */
            "objectId"?: {
              /**
               * Required. The parts of an OID path. The most significant parts of the path come first.
               */
              "objectIdPath"?: Array<number>;
            };
            /**
             * Required. The value of this X.509 extension.
             */
            "value"?: string;
          }>;
          /**
           * Contains only valid, fully-qualified host names.
           */
          "dnsNames"?: Array<string>;
          /**
           * Contains only valid RFC 2822 E-mail addresses.
           */
          "emailAddresses"?: Array<string>;
          /**
           * Contains only valid 32-bit IPv4 addresses or RFC 4291 IPv6 addresses.
           */
          "ipAddresses"?: Array<string>;
          /**
           * Contains only valid RFC 3986 URIs.
           */
          "uris"?: Array<string>;
        };
      };
      /**
       * Provides a means of identifiying certificates that contain a particular public key, per https://tools.ietf.org/html/rfc5280#section-4.2.1.2.
       */
      "subjectKeyId"?: {
        /**
         * Optional. The value of this KeyId encoded in lowercase hexadecimal. This is most likely the 160 bit SHA-1 hash of the public key.
         */
        "keyId"?: string;
      };
      /**
       * Describes some of the technical X.509 fields in a certificate.
       */
      "x509Description"?: {
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
          "objectId"?: {
            /**
             * Required. The parts of an OID path. The most significant parts of the path come first.
             */
            "objectIdPath"?: Array<number>;
          };
          /**
           * Required. The value of this X.509 extension.
           */
          "value"?: string;
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
            "objectIdPath"?: Array<number>;
          }>;
        };
        /**
         * Optional. Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.
         */
        "policyIds"?: Array<{
          /**
           * Required. The parts of an OID path. The most significant parts of the path come first.
           */
          "objectIdPath"?: Array<number>;
        }>;
      };
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
    "config"?: {
      /**
       * Optional. The public key that corresponds to this config. This is, for example, used when issuing Certificates, but not when creating a self-signed CertificateAuthority or CertificateAuthority CSR.
       */
      "publicKey"?: {
        /**
         * Required. The format of the public key. Possible values: PEM
         */
        "format"?: string;
        /**
         * Required. A public key. The padding and encoding must match with the `KeyFormat` value specified for the `format` field.
         */
        "key"?: string;
      };
      "x509Config"?: {
        /**
         * Optional. Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate.
         */
        "aiaOcspServers"?: Array<string>;
      };
    };
    /**
     * Output only. The time at which this CertificateAuthority was created.
     */
    "createTime"?: string;
    /**
     * Output only. The time at which this CertificateAuthority was soft deleted, if it is in the DELETED state.
     */
    "deleteTime"?: string;
    /**
     * Output only. The time at which this CertificateAuthority will be permanently purged, if it is in the DELETED state.
     */
    "expireTime"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * Output only. This CertificateAuthority's certificate chain, including the current CertificateAuthority's certificate. Ordered such that the root issuer is the final element (consistent with RFC 5246). For a self-signed CA, this will only list the current CertificateAuthority's certificate.
     */
    "pemCaCertificates"?: Array<string>;
    /**
     * Output only. The State for this CertificateAuthority. Possible values: ENABLED, DISABLED, STAGED, AWAITING_USER_ACTIVATION, DELETED
     */
    "state"?: string;
    /**
     * Optional. If this is a subordinate CertificateAuthority, this field will be set with the subordinate configuration, which describes its issuers. This may be updated, but this CertificateAuthority must continue to validate.
     */
    "subordinateConfig"?: {
      /**
       * Required. This can refer to a CertificateAuthority in the same project that was used to create a subordinate CertificateAuthority. This field is used for information and usability purposes only. The resource name is in the format `projects/\*\/locations/\*\/caPools/\*\/certificateAuthorities/\*`.
       */
      "certificateAuthority"?: string;
      /**
       * Required. Contains the PEM certificate chain for the issuers of this CertificateAuthority, but not pem certificate for this CA itself.
       */
      "pemIssuerChain"?: {
        /**
         * Required. Expected to be in leaf-to-root order according to RFC 5246.
         */
        "pemCertificates"?: Array<string>;
      };
    };
    /**
     * Output only. The CaPool.Tier of the CaPool that includes this CertificateAuthority. Possible values: ENTERPRISE, DEVOPS
     */
    "tier"?: string;
    /**
     * Output only. The time at which this CertificateAuthority was last updated.
     */
    "updateTime"?: string;
  };
}

export class PrivateCACertificateAuthority extends Model<IPrivateCACertificateAuthority> implements IPrivateCACertificateAuthority {
  "apiVersion": IPrivateCACertificateAuthority["apiVersion"];
  "kind": IPrivateCACertificateAuthority["kind"];
  "metadata"?: IPrivateCACertificateAuthority["metadata"];
  "spec": IPrivateCACertificateAuthority["spec"];
  "status"?: IPrivateCACertificateAuthority["status"];

static apiVersion: IPrivateCACertificateAuthority["apiVersion"] = "privateca.cnrm.cloud.google.com/v1beta1";
static kind: IPrivateCACertificateAuthority["kind"] = "PrivateCACertificateAuthority";
static is = createTypeMetaGuard<IPrivateCACertificateAuthority>(PrivateCACertificateAuthority);

constructor(data?: ModelData<IPrivateCACertificateAuthority>) {
  super();

  this.setDefinedProps({
    apiVersion: PrivateCACertificateAuthority.apiVersion,
    kind: PrivateCACertificateAuthority.kind,
    ...data
  } as IPrivateCACertificateAuthority);
}
}


setValidateFunc(PrivateCACertificateAuthority, validate as ValidateFunc<IPrivateCACertificateAuthority>);
