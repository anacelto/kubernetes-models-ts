import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CertificatemanagerCnrmCloudGoogleComV1alpha1CertificateManagerCertificate";

export interface ICertificateManagerCertificate {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "certificatemanager.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "CertificateManagerCertificate";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * A human-readable description of the resource.
     */
    "description"?: string;
    /**
     * Immutable. The Certificate Manager location. If not specified, "global" is used.
     */
    "location": string;
    /**
     * Immutable. Configuration and state of a Managed Certificate.
     * Certificate Manager provisions and renews Managed Certificates
     * automatically, for as long as it's authorized to do so.
     */
    "managed"?: {
      /**
       * Detailed state of the latest authorization attempt for each domain
       * specified for this Managed Certificate.
       */
      "authorizationAttemptInfo"?: Array<{
        /**
         * Human readable explanation for reaching the state. Provided to help
         * address the configuration issues.
         * Not guaranteed to be stable. For programmatic access use 'failure_reason' field.
         */
        "details"?: string;
        /**
         * Domain name of the authorization attempt.
         */
        "domain"?: string;
        /**
         * Reason for failure of the authorization attempt for the domain.
         */
        "failureReason"?: string;
        /**
         * State of the domain for managed certificate issuance.
         */
        "state"?: string;
      }>;
      "dnsAuthorizationsRefs"?: Array<{
        /**
         * Allowed value: string of the format `projects/{{project}}/locations/global/dnsAuthorizations/{{value}}`, where {{value}} is the `name` field of a `CertificateManagerDNSAuthorization` resource.
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
         * Allowed value: string of the format `projects/{{project}}/locations/global/dnsAuthorizations/{{value}}`, where {{value}} is the `name` field of a `CertificateManagerDNSAuthorization` resource.
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
         * Allowed value: string of the format `projects/{{project}}/locations/global/dnsAuthorizations/{{value}}`, where {{value}} is the `name` field of a `CertificateManagerDNSAuthorization` resource.
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
         * Allowed value: string of the format `projects/{{project}}/locations/global/dnsAuthorizations/{{value}}`, where {{value}} is the `name` field of a `CertificateManagerDNSAuthorization` resource.
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
         * Allowed value: string of the format `projects/{{project}}/locations/global/dnsAuthorizations/{{value}}`, where {{value}} is the `name` field of a `CertificateManagerDNSAuthorization` resource.
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
         * Allowed value: string of the format `projects/{{project}}/locations/global/dnsAuthorizations/{{value}}`, where {{value}} is the `name` field of a `CertificateManagerDNSAuthorization` resource.
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
         * Allowed value: string of the format `projects/{{project}}/locations/global/dnsAuthorizations/{{value}}`, where {{value}} is the `name` field of a `CertificateManagerDNSAuthorization` resource.
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
      })>)>;
      /**
       * Immutable. The domains for which a managed SSL certificate will be generated.
       * Wildcard domains are only supported with DNS challenge resolution.
       */
      "domains"?: Array<string>;
      /**
       * Only the `external` field is supported to configure the reference.
       * 
       * Immutable. The resource name for a CertificateIssuanceConfig used to configure private PKI certificates in the format projects/\*\/locations/\*\/certificateIssuanceConfigs/\*.
       * If this field is not set, the certificates will instead be publicly signed as documented at https://cloud.google.com/load-balancing/docs/ssl-certificates/google-managed-certs#caa.
       * Either issuanceConfig or dnsAuthorizations should be specified, but not both.
       */
      "issuanceConfigRef"?: {
        /**
         * Allowed value: string of the format `projects/{{project}}/locations/{{location}}/certificateIssuanceConfigs/{{name}}`, where {{value}} is the `name` field of a `CertificateManagerCertificateIssuanceConfig` resource.
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
         * Allowed value: string of the format `projects/{{project}}/locations/{{location}}/certificateIssuanceConfigs/{{name}}`, where {{value}} is the `name` field of a `CertificateManagerCertificateIssuanceConfig` resource.
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
         * Allowed value: string of the format `projects/{{project}}/locations/{{location}}/certificateIssuanceConfigs/{{name}}`, where {{value}} is the `name` field of a `CertificateManagerCertificateIssuanceConfig` resource.
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
         * Allowed value: string of the format `projects/{{project}}/locations/{{location}}/certificateIssuanceConfigs/{{name}}`, where {{value}} is the `name` field of a `CertificateManagerCertificateIssuanceConfig` resource.
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
         * Allowed value: string of the format `projects/{{project}}/locations/{{location}}/certificateIssuanceConfigs/{{name}}`, where {{value}} is the `name` field of a `CertificateManagerCertificateIssuanceConfig` resource.
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
         * Allowed value: string of the format `projects/{{project}}/locations/{{location}}/certificateIssuanceConfigs/{{name}}`, where {{value}} is the `name` field of a `CertificateManagerCertificateIssuanceConfig` resource.
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
         * Allowed value: string of the format `projects/{{project}}/locations/{{location}}/certificateIssuanceConfigs/{{name}}`, where {{value}} is the `name` field of a `CertificateManagerCertificateIssuanceConfig` resource.
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
       * Information about issues with provisioning this Managed Certificate.
       */
      "provisioningIssue"?: Array<{
        /**
         * Human readable explanation about the issue. Provided to help address
         * the configuration issues.
         * Not guaranteed to be stable. For programmatic access use 'reason' field.
         */
        "details"?: string;
        /**
         * Reason for provisioning failures.
         */
        "reason"?: string;
      }>;
      /**
       * A state of this Managed Certificate.
       */
      "state"?: string;
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
     * Immutable. The scope of the certificate.
     * 
     * DEFAULT: Certificates with default scope are served from core Google data centers.
     * If unsure, choose this option.
     * 
     * EDGE_CACHE: Certificates with scope EDGE_CACHE are special-purposed certificates,
     * served from non-core Google data centers.
     * 
     * ALL_REGIONS: Certificates with ALL_REGIONS scope are served from all GCP regions (You can only use ALL_REGIONS with global certs).
     * see https://cloud.google.com/compute/docs/regions-zones.
     */
    "scope"?: string;
    /**
     * Immutable. Certificate data for a SelfManaged Certificate.
     * SelfManaged Certificates are uploaded by the user. Updating such
     * certificates before they expire remains the user's responsibility.
     */
    "selfManaged"?: {
      /**
       * DEPRECATED. `certificate_pem` is deprecated. Use `pem_certificate` instead. Immutable. The certificate chain in PEM-encoded form.
       * 
       * Leaf certificate comes first, followed by intermediate ones if any.
       */
      "certificatePem"?: {
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
       * Immutable. The certificate chain in PEM-encoded form.
       * 
       * Leaf certificate comes first, followed by intermediate ones if any.
       */
      "pemCertificate"?: string;
      /**
       * Immutable. The private key of the leaf certificate in PEM-encoded form.
       */
      "pemPrivateKey"?: {
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
       * DEPRECATED. `private_key_pem` is deprecated. Use `pem_private_key` instead. Immutable. The private key of the leaf certificate in PEM-encoded form.
       */
      "privateKeyPem"?: {
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

export class CertificateManagerCertificate extends Model<ICertificateManagerCertificate> implements ICertificateManagerCertificate {
  "apiVersion": ICertificateManagerCertificate["apiVersion"];
  "kind": ICertificateManagerCertificate["kind"];
  "metadata"?: ICertificateManagerCertificate["metadata"];
  "spec": ICertificateManagerCertificate["spec"];
  "status"?: ICertificateManagerCertificate["status"];

static apiVersion: ICertificateManagerCertificate["apiVersion"] = "certificatemanager.cnrm.cloud.google.com/v1alpha1";
static kind: ICertificateManagerCertificate["kind"] = "CertificateManagerCertificate";
static is = createTypeMetaGuard<ICertificateManagerCertificate>(CertificateManagerCertificate);

constructor(data?: ModelData<ICertificateManagerCertificate>) {
  super();

  this.setDefinedProps({
    apiVersion: CertificateManagerCertificate.apiVersion,
    kind: CertificateManagerCertificate.kind,
    ...data
  } as ICertificateManagerCertificate);
}
}


setValidateFunc(CertificateManagerCertificate, validate as ValidateFunc<ICertificateManagerCertificate>);
