import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpec";

/**
 * SelfSubjectRulesReviewSpec defines the specification for SelfSubjectRulesReview.
 */
export interface ISelfSubjectRulesReviewSpec {
  /**
   * Namespace to evaluate rules for. Required.
   */
  "namespace"?: string;
}

/**
 * SelfSubjectRulesReviewSpec defines the specification for SelfSubjectRulesReview.
 */
export class SelfSubjectRulesReviewSpec extends Model<ISelfSubjectRulesReviewSpec> implements ISelfSubjectRulesReviewSpec {
  "namespace"?: string;

constructor(data?: ModelData<ISelfSubjectRulesReviewSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(SelfSubjectRulesReviewSpec, validate as ValidateFunc<ISelfSubjectRulesReviewSpec>);

export {
  ISelfSubjectRulesReviewSpec as IIoK8sApiAuthorizationV1SelfSubjectRulesReviewSpec,
  SelfSubjectRulesReviewSpec as IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpec
};
