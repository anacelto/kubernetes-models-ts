import { IIoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationCondition } from "./PriorityLevelConfigurationCondition";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationStatus";

/**
 * PriorityLevelConfigurationStatus represents the current state of a "request-priority".
 */
export interface IPriorityLevelConfigurationStatus {
  /**
   * `conditions` is the current state of "request-priority".
   */
  "conditions"?: Array<IIoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationCondition>;
}

/**
 * PriorityLevelConfigurationStatus represents the current state of a "request-priority".
 */
export class PriorityLevelConfigurationStatus extends Model<IPriorityLevelConfigurationStatus> implements IPriorityLevelConfigurationStatus {
  "conditions"?: Array<IIoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationCondition>;

constructor(data?: ModelData<IPriorityLevelConfigurationStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PriorityLevelConfigurationStatus, validate as ValidateFunc<IPriorityLevelConfigurationStatus>);

export {
  IPriorityLevelConfigurationStatus as IIoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationStatus,
  PriorityLevelConfigurationStatus as IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationStatus
};
