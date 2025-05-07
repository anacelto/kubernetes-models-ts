import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1PodReadinessGate";

/**
 * PodReadinessGate contains the reference to a pod condition
 */
export interface IPodReadinessGate {
  /**
   * ConditionType refers to a condition in the pod's condition list with matching type.
   */
  "conditionType": string;
}

/**
 * PodReadinessGate contains the reference to a pod condition
 */
export class PodReadinessGate extends Model<IPodReadinessGate> implements IPodReadinessGate {
  "conditionType": string;

constructor(data?: ModelData<IPodReadinessGate>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodReadinessGate, validate as ValidateFunc<IPodReadinessGate>);

export {
  IPodReadinessGate as IIoK8sApiCoreV1PodReadinessGate,
  PodReadinessGate as IoK8sApiCoreV1PodReadinessGate
};
