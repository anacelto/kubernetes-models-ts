import { IIoK8sApiNetworkingV1HTTPIngressPath } from "./HTTPIngressPath";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiNetworkingV1HTTPIngressRuleValue";

/**
 * HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.
 */
export interface IHTTPIngressRuleValue {
  /**
   * paths is a collection of paths that map requests to backends.
   */
  "paths": Array<IIoK8sApiNetworkingV1HTTPIngressPath>;
}

/**
 * HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.
 */
export class HTTPIngressRuleValue extends Model<IHTTPIngressRuleValue> implements IHTTPIngressRuleValue {
  "paths": Array<IIoK8sApiNetworkingV1HTTPIngressPath>;

constructor(data?: ModelData<IHTTPIngressRuleValue>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(HTTPIngressRuleValue, validate as ValidateFunc<IHTTPIngressRuleValue>);

export {
  IHTTPIngressRuleValue as IIoK8sApiNetworkingV1HTTPIngressRuleValue,
  HTTPIngressRuleValue as IoK8sApiNetworkingV1HTTPIngressRuleValue
};
