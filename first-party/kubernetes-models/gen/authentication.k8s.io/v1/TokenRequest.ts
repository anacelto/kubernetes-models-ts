import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { IIoK8sApiAuthenticationV1TokenRequestSpec } from "./TokenRequestSpec";
import { IIoK8sApiAuthenticationV1TokenRequestStatus } from "./TokenRequestStatus";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiAuthenticationV1TokenRequest";

/**
 * TokenRequest requests a token for a given service account.
 */
export interface ITokenRequest extends TypeMeta {
  "apiVersion": "authentication.k8s.io/v1";
  "kind": "TokenRequest";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /**
   * Spec holds information about the request being evaluated
   */
  "spec": IIoK8sApiAuthenticationV1TokenRequestSpec;
  /**
   * Status is filled in by the server and indicates whether the token can be authenticated.
   */
  "status"?: IIoK8sApiAuthenticationV1TokenRequestStatus;
}

/**
 * TokenRequest requests a token for a given service account.
 */
export class TokenRequest extends Model<ITokenRequest> implements ITokenRequest {
  "apiVersion": ITokenRequest["apiVersion"];
  "kind": ITokenRequest["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
  "spec": IIoK8sApiAuthenticationV1TokenRequestSpec;
  "status"?: IIoK8sApiAuthenticationV1TokenRequestStatus;

static apiVersion: ITokenRequest["apiVersion"] = "authentication.k8s.io/v1";
static kind: ITokenRequest["kind"] = "TokenRequest";
static is = createTypeMetaGuard<ITokenRequest>(TokenRequest);

constructor(data?: ModelData<ITokenRequest>) {
  super();

  this.setDefinedProps({
    apiVersion: TokenRequest.apiVersion,
    kind: TokenRequest.kind,
    ...data
  } as ITokenRequest);
}
}

setValidateFunc(TokenRequest, validate as ValidateFunc<ITokenRequest>);

export {
  ITokenRequest as IIoK8sApiAuthenticationV1TokenRequest,
  TokenRequest as IoK8sApiAuthenticationV1TokenRequest
};
