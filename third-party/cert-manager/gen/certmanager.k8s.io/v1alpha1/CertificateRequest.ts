import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CertmanagerK8sIoV1alpha1CertificateRequest";

/**
 * CertificateRequest is a type to represent a Certificate Signing Request
 */
export interface ICertificateRequest {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "certmanager.k8s.io/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "CertificateRequest";
  "metadata"?: IObjectMeta;
  /**
   * CertificateRequestSpec defines the desired state of CertificateRequest
   */
  "spec"?: {
    /**
     * Byte slice containing the PEM encoded CertificateSigningRequest
     */
    "csr"?: string;
    /**
     * Requested certificate default Duration
     */
    "duration"?: string;
    /**
     * IsCA will mark the resulting certificate as valid for signing. This implies that the 'cert sign' usage is set
     */
    "isCA"?: boolean;
    /**
     * IssuerRef is a reference to the issuer for this CertificateRequest.  If the 'kind' field is not set, or set to 'Issuer', an Issuer resource with the given name in the same namespace as the CertificateRequest will be used.  If the 'kind' field is set to 'ClusterIssuer', a ClusterIssuer with the provided name will be used. The 'name' field in this stanza is required at all times. The group field refers to the API group of the issuer which defaults to 'certmanager.k8s.io' if empty.
     */
    "issuerRef": {
      "group"?: string;
      "kind"?: string;
      "name": string;
    };
    /**
     * Usages is the set of x509 actions that are enabled for a given key. Defaults are ('digital signature', 'key encipherment') if empty
     */
    "usages"?: Array<"signing" | "digital signature" | "content commitment" | "key encipherment" | "key agreement" | "data encipherment" | "cert sign" | "crl sign" | "encipher only" | "decipher only" | "any" | "server auth" | "client auth" | "code signing" | "email protection" | "s/mime" | "ipsec end system" | "ipsec tunnel" | "ipsec user" | "timestamping" | "ocsp signing" | "microsoft sgc" | "netscape sgc">;
  };
  /**
   * CertificateStatus defines the observed state of CertificateRequest and resulting signed certificate.
   */
  "status"?: {
    /**
     * Byte slice containing the PEM encoded certificate authority of the signed certificate.
     */
    "ca"?: string;
    /**
     * Byte slice containing a PEM encoded signed certificate resulting from the given certificate signing request.
     */
    "certificate"?: string;
    "conditions"?: Array<{
      /**
       * LastTransitionTime is the timestamp corresponding to the last status change of this condition.
       */
      "lastTransitionTime"?: string;
      /**
       * Message is a human readable description of the details of the last transition, complementing reason.
       */
      "message"?: string;
      /**
       * Reason is a brief machine readable explanation for the condition's last transition.
       */
      "reason"?: string;
      /**
       * Status of the condition, one of ('True', 'False', 'Unknown').
       */
      "status": "True" | "False" | "Unknown";
      /**
       * Type of the condition, currently ('Ready').
       */
      "type": string;
    }>;
    /**
     * FailureTime stores the time that this CertificateRequest failed. This is used to influence garbage collection and back-off.
     */
    "failureTime"?: string;
  };
}

/**
 * CertificateRequest is a type to represent a Certificate Signing Request
 */
export class CertificateRequest extends Model<ICertificateRequest> implements ICertificateRequest {
  "apiVersion": ICertificateRequest["apiVersion"];
  "kind": ICertificateRequest["kind"];
  "metadata"?: ICertificateRequest["metadata"];
  "spec"?: ICertificateRequest["spec"];
  "status"?: ICertificateRequest["status"];

static apiVersion: ICertificateRequest["apiVersion"] = "certmanager.k8s.io/v1alpha1";
static kind: ICertificateRequest["kind"] = "CertificateRequest";
static is = createTypeMetaGuard<ICertificateRequest>(CertificateRequest);

constructor(data?: ModelData<ICertificateRequest>) {
  super();

  this.setDefinedProps({
    apiVersion: CertificateRequest.apiVersion,
    kind: CertificateRequest.kind,
    ...data
  } as ICertificateRequest);
}
}


setValidateFunc(CertificateRequest, validate as ValidateFunc<ICertificateRequest>);
