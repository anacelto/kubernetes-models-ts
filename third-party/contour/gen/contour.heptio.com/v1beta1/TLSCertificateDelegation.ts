import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ContourHeptioComV1beta1TLSCertificateDelegation";

/**
 * TLSCertificateDelegation is an TLS Certificate Delegation CRD specificiation. See design/tls-certificate-delegation.md for details.
 */
export interface ITLSCertificateDelegation {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "contour.heptio.com/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "TLSCertificateDelegation";
  "metadata": IObjectMeta;
  /**
   * TLSCertificateDelegationSpec defines the spec of the CRD
   */
  "spec": {
    "delegations": Array<{
      /**
       * required, the name of a secret in the current namespace.
       */
      "secretName": string;
      /**
       * required, the namespaces the authority to reference the the secret will be delegated to. If TargetNamespaces is nil or empty, the CertificateDelegation' is ignored. If the TargetNamespace list contains the character, "\*" the secret will be delegated to all namespaces.
       */
      "targetNamespaces": Array<string>;
    }>;
  };
}

/**
 * TLSCertificateDelegation is an TLS Certificate Delegation CRD specificiation. See design/tls-certificate-delegation.md for details.
 */
export class TLSCertificateDelegation extends Model<ITLSCertificateDelegation> implements ITLSCertificateDelegation {
  "apiVersion": ITLSCertificateDelegation["apiVersion"];
  "kind": ITLSCertificateDelegation["kind"];
  "metadata": ITLSCertificateDelegation["metadata"];
  "spec": ITLSCertificateDelegation["spec"];

static apiVersion: ITLSCertificateDelegation["apiVersion"] = "contour.heptio.com/v1beta1";
static kind: ITLSCertificateDelegation["kind"] = "TLSCertificateDelegation";
static is = createTypeMetaGuard<ITLSCertificateDelegation>(TLSCertificateDelegation);

constructor(data?: ModelData<ITLSCertificateDelegation>) {
  super();

  this.setDefinedProps({
    apiVersion: TLSCertificateDelegation.apiVersion,
    kind: TLSCertificateDelegation.kind,
    ...data
  } as ITLSCertificateDelegation);
}
}


setValidateFunc(TLSCertificateDelegation, validate as ValidateFunc<ITLSCertificateDelegation>);
