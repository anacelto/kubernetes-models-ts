import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiAppsV1beta1RollingUpdateStatefulSetStrategy";

/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 */
export interface IRollingUpdateStatefulSetStrategy {
  /**
   * Partition indicates the ordinal at which the StatefulSet should be partitioned.
   */
  "partition"?: number;
}

/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 */
export class RollingUpdateStatefulSetStrategy extends Model<IRollingUpdateStatefulSetStrategy> implements IRollingUpdateStatefulSetStrategy {
  "partition"?: number;

constructor(data?: ModelData<IRollingUpdateStatefulSetStrategy>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(RollingUpdateStatefulSetStrategy, validate as ValidateFunc<IRollingUpdateStatefulSetStrategy>);

export {
  IRollingUpdateStatefulSetStrategy as IIoK8sApiAppsV1beta1RollingUpdateStatefulSetStrategy,
  RollingUpdateStatefulSetStrategy as IoK8sApiAppsV1beta1RollingUpdateStatefulSetStrategy
};
