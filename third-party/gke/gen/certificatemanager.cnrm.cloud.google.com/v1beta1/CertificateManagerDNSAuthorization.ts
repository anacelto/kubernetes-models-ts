import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CertificatemanagerCnrmCloudGoogleComV1beta1CertificateManagerDNSAuthorization";

export interface ICertificateManagerDNSAuthorization {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "certificatemanager.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "CertificateManagerDNSAuthorization";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * A human-readable description of the resource.
     */
    "description"?: string;
    /**
     * Immutable. A domain which is being authorized. A DnsAuthorization resource covers a
     * single domain and its wildcard, e.g. authorization for "example.com" can
     * be used to issue certificates for "example.com" and "\*.example.com".
     */
    "domain": string;
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
     * The structure describing the DNS Resource Record that needs to be added
     * to DNS configuration for the authorization to be usable by
     * certificate.
     */
    "dnsResourceRecord"?: Array<{
      /**
       * Data of the DNS Resource Record.
       */
      "data"?: string;
      /**
       * Fully qualified name of the DNS Resource Record.
       * E.g. '_acme-challenge.example.com'.
       */
      "name"?: string;
      /**
       * Type of the DNS Resource Record.
       */
      "type"?: string;
    }>;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class CertificateManagerDNSAuthorization extends Model<ICertificateManagerDNSAuthorization> implements ICertificateManagerDNSAuthorization {
  "apiVersion": ICertificateManagerDNSAuthorization["apiVersion"];
  "kind": ICertificateManagerDNSAuthorization["kind"];
  "metadata"?: ICertificateManagerDNSAuthorization["metadata"];
  "spec": ICertificateManagerDNSAuthorization["spec"];
  "status"?: ICertificateManagerDNSAuthorization["status"];

static apiVersion: ICertificateManagerDNSAuthorization["apiVersion"] = "certificatemanager.cnrm.cloud.google.com/v1beta1";
static kind: ICertificateManagerDNSAuthorization["kind"] = "CertificateManagerDNSAuthorization";
static is = createTypeMetaGuard<ICertificateManagerDNSAuthorization>(CertificateManagerDNSAuthorization);

constructor(data?: ModelData<ICertificateManagerDNSAuthorization>) {
  super();

  this.setDefinedProps({
    apiVersion: CertificateManagerDNSAuthorization.apiVersion,
    kind: CertificateManagerDNSAuthorization.kind,
    ...data
  } as ICertificateManagerDNSAuthorization);
}
}


setValidateFunc(CertificateManagerDNSAuthorization, validate as ValidateFunc<ICertificateManagerDNSAuthorization>);
