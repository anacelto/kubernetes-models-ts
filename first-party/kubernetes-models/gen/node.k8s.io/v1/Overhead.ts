import { IIoK8sApimachineryPkgApiResourceQuantity } from "@kubernetes-models/apimachinery/api/resource/Quantity";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiNodeV1Overhead";

/**
 * Overhead structure represents the resource overhead associated with running a pod.
 */
export interface IOverhead {
  /**
   * podFixed represents the fixed resource overhead associated with running a pod.
   */
  "podFixed"?: {
    [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
  };
}

/**
 * Overhead structure represents the resource overhead associated with running a pod.
 */
export class Overhead extends Model<IOverhead> implements IOverhead {
  "podFixed"?: {
    [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
  };

constructor(data?: ModelData<IOverhead>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(Overhead, validate as ValidateFunc<IOverhead>);

export {
  IOverhead as IIoK8sApiNodeV1Overhead,
  Overhead as IoK8sApiNodeV1Overhead
};
