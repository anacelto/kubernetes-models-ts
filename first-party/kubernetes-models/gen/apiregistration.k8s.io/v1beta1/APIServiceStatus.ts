import { IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceCondition } from "./APIServiceCondition";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceStatus";

/**
 * APIServiceStatus contains derived information about an API server
 */
export interface IAPIServiceStatus {
  /**
   * Current service state of apiService.
   */
  "conditions"?: Array<IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceCondition>;
}

/**
 * APIServiceStatus contains derived information about an API server
 */
export class APIServiceStatus extends Model<IAPIServiceStatus> implements IAPIServiceStatus {
  "conditions"?: Array<IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceCondition>;

constructor(data?: ModelData<IAPIServiceStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(APIServiceStatus, validate as ValidateFunc<IAPIServiceStatus>);

export {
  IAPIServiceStatus as IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceStatus,
  APIServiceStatus as IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceStatus
};
