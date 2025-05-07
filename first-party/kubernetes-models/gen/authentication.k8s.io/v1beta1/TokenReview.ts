import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { IIoK8sApiAuthenticationV1beta1TokenReviewSpec } from "./TokenReviewSpec";
import { IIoK8sApiAuthenticationV1beta1TokenReviewStatus } from "./TokenReviewStatus";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiAuthenticationV1beta1TokenReview";

/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 */
export interface ITokenReview extends TypeMeta {
  "apiVersion": "authentication.k8s.io/v1beta1";
  "kind": "TokenReview";
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /**
   * Spec holds information about the request being evaluated
   */
  "spec": IIoK8sApiAuthenticationV1beta1TokenReviewSpec;
  /**
   * Status is filled in by the server and indicates whether the request can be authenticated.
   */
  "status"?: IIoK8sApiAuthenticationV1beta1TokenReviewStatus;
}

/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 */
export class TokenReview extends Model<ITokenReview> implements ITokenReview {
  "apiVersion": ITokenReview["apiVersion"];
  "kind": ITokenReview["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
  "spec": IIoK8sApiAuthenticationV1beta1TokenReviewSpec;
  "status"?: IIoK8sApiAuthenticationV1beta1TokenReviewStatus;

static apiVersion: ITokenReview["apiVersion"] = "authentication.k8s.io/v1beta1";
static kind: ITokenReview["kind"] = "TokenReview";
static is = createTypeMetaGuard<ITokenReview>(TokenReview);

constructor(data?: ModelData<ITokenReview>) {
  super();

  this.setDefinedProps({
    apiVersion: TokenReview.apiVersion,
    kind: TokenReview.kind,
    ...data
  } as ITokenReview);
}
}

setValidateFunc(TokenReview, validate as ValidateFunc<ITokenReview>);

export {
  ITokenReview as IIoK8sApiAuthenticationV1beta1TokenReview,
  TokenReview as IoK8sApiAuthenticationV1beta1TokenReview
};
