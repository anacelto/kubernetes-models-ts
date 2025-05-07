import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ProjectcontourIoV1TLSCertificateDelegation";

/**
 * TLSCertificateDelegation is an TLS Certificate Delegation CRD specification. See design/tls-certificate-delegation.md for details.
 */
export interface ITLSCertificateDelegation {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "projectcontour.io/v1";
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
       * required, the namespaces the authority to reference the secret will be delegated to. If TargetNamespaces is nil or empty, the CertificateDelegation' is ignored. If the TargetNamespace list contains the character, "\*" the secret will be delegated to all namespaces.
       */
      "targetNamespaces": Array<string>;
    }>;
  };
  /**
   * TLSCertificateDelegationStatus allows for the status of the delegation to be presented to the user.
   */
  "status"?: {
    /**
     * Conditions contains information about the current status of the HTTPProxy, in an upstream-friendly container. 
     *  Contour will update a single condition, `Valid`, that is in normal-true polarity. That is, when `currentStatus` is `valid`, the `Valid` condition will be `status: true`, and vice versa. 
     *  Contour will leave untouched any other Conditions set in this block, in case some other controller wants to add a Condition. 
     *  If you are another controller owner and wish to add a condition, you \*should\* namespace your condition with a label, like `controller.domain.com\ConditionName`.
     */
    "conditions"?: Array<{
      /**
       * Errors contains a slice of relevant error subconditions for this object. 
       *  Subconditions are expected to appear when relevant (when there is a error), and disappear when not relevant. An empty slice here indicates no errors.
       */
      "errors"?: Array<{
        /**
         * Message is a human readable message indicating details about the transition. 
         *  This may be an empty string.
         */
        "message": string;
        /**
         * Reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. 
         *  The value should be a CamelCase string. 
         *  This field may not be empty.
         */
        "reason": string;
        /**
         * Status of the condition, one of True, False, Unknown.
         */
        "status": "True" | "False" | "Unknown";
        /**
         * Type of condition in `CamelCase` or in `foo.example.com/CamelCase`. 
         *  This must be in abnormal-true polarity, that is, `ErrorFound` or `controller.io/ErrorFound`. 
         *  The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
         */
        "type": string;
      }>;
      /**
       * lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
       */
      "lastTransitionTime": string;
      /**
       * message is a human readable message indicating details about the transition. This may be an empty string.
       */
      "message": string;
      /**
       * observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
       */
      "observedGeneration"?: number;
      /**
       * reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
       */
      "reason": string;
      /**
       * status of the condition, one of True, False, Unknown.
       */
      "status": "True" | "False" | "Unknown";
      /**
       * type of condition in CamelCase or in foo.example.com/CamelCase. --- Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be useful (see .node.status.conditions), the ability to deconflict is important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
       */
      "type": string;
      /**
       * Warnings contains a slice of relevant warning subconditions for this object. 
       *  Subconditions are expected to appear when relevant (when there is a warning), and disappear when not relevant. An empty slice here indicates no warnings.
       */
      "warnings"?: Array<{
        /**
         * Message is a human readable message indicating details about the transition. 
         *  This may be an empty string.
         */
        "message": string;
        /**
         * Reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. 
         *  The value should be a CamelCase string. 
         *  This field may not be empty.
         */
        "reason": string;
        /**
         * Status of the condition, one of True, False, Unknown.
         */
        "status": "True" | "False" | "Unknown";
        /**
         * Type of condition in `CamelCase` or in `foo.example.com/CamelCase`. 
         *  This must be in abnormal-true polarity, that is, `ErrorFound` or `controller.io/ErrorFound`. 
         *  The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
         */
        "type": string;
      }>;
    }>;
  };
}

/**
 * TLSCertificateDelegation is an TLS Certificate Delegation CRD specification. See design/tls-certificate-delegation.md for details.
 */
export class TLSCertificateDelegation extends Model<ITLSCertificateDelegation> implements ITLSCertificateDelegation {
  "apiVersion": ITLSCertificateDelegation["apiVersion"];
  "kind": ITLSCertificateDelegation["kind"];
  "metadata": ITLSCertificateDelegation["metadata"];
  "spec": ITLSCertificateDelegation["spec"];
  "status"?: ITLSCertificateDelegation["status"];

static apiVersion: ITLSCertificateDelegation["apiVersion"] = "projectcontour.io/v1";
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
