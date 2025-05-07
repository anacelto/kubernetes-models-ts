import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1HTTPHeader";

/**
 * HTTPHeader describes a custom header to be used in HTTP probes
 */
export interface IHTTPHeader {
  /**
   * The header field name
   */
  "name": string;
  /**
   * The header field value
   */
  "value": string;
}

/**
 * HTTPHeader describes a custom header to be used in HTTP probes
 */
export class HTTPHeader extends Model<IHTTPHeader> implements IHTTPHeader {
  "name": string;
  "value": string;

constructor(data?: ModelData<IHTTPHeader>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(HTTPHeader, validate as ValidateFunc<IHTTPHeader>);

export {
  IHTTPHeader as IIoK8sApiCoreV1HTTPHeader,
  HTTPHeader as IoK8sApiCoreV1HTTPHeader
};
