import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/SqlCnrmCloudGoogleComV1beta1SQLSSLCert";

export interface ISQLSSLCert {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "sql.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "SQLSSLCert";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Immutable. The common name to be used in the certificate to identify the client. Constrained to [a-zA-Z.-_ ]+. Changing this forces a new resource to be created.
     */
    "commonName": string;
    /**
     * The Cloud SQL instance.
     */
    "instanceRef": {
      /**
       * Allowed value: The `name` field of a `SQLInstance` resource.
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
       * Allowed value: The `name` field of a `SQLInstance` resource.
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
       * Allowed value: The `name` field of a `SQLInstance` resource.
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
       * Allowed value: The `name` field of a `SQLInstance` resource.
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
       * Allowed value: The `name` field of a `SQLInstance` resource.
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
       * Allowed value: The `name` field of a `SQLInstance` resource.
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
       * Allowed value: The `name` field of a `SQLInstance` resource.
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
     * Immutable. Optional. The service-generated sha1Fingerprint of the resource. Used for acquisition only. Leave unset to create a new resource.
     */
    "resourceID"?: string;
  };
  "status"?: {
    /**
     * The actual certificate data for this client certificate.
     */
    "cert"?: string;
    /**
     * The serial number extracted from the certificate data.
     */
    "certSerialNumber"?: string;
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
     * The time when the certificate was created in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
     */
    "createTime"?: string;
    /**
     * The time when the certificate expires in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
     */
    "expirationTime"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * The private key associated with the client certificate.
     */
    "privateKey"?: string;
    /**
     * The CA cert of the server this client cert was generated from.
     */
    "serverCaCert"?: string;
    /**
     * The SHA1 Fingerprint of the certificate.
     */
    "sha1Fingerprint"?: string;
  };
}

export class SQLSSLCert extends Model<ISQLSSLCert> implements ISQLSSLCert {
  "apiVersion": ISQLSSLCert["apiVersion"];
  "kind": ISQLSSLCert["kind"];
  "metadata"?: ISQLSSLCert["metadata"];
  "spec": ISQLSSLCert["spec"];
  "status"?: ISQLSSLCert["status"];

static apiVersion: ISQLSSLCert["apiVersion"] = "sql.cnrm.cloud.google.com/v1beta1";
static kind: ISQLSSLCert["kind"] = "SQLSSLCert";
static is = createTypeMetaGuard<ISQLSSLCert>(SQLSSLCert);

constructor(data?: ModelData<ISQLSSLCert>) {
  super();

  this.setDefinedProps({
    apiVersion: SQLSSLCert.apiVersion,
    kind: SQLSSLCert.kind,
    ...data
  } as ISQLSSLCert);
}
}


setValidateFunc(SQLSSLCert, validate as ValidateFunc<ISQLSSLCert>);
