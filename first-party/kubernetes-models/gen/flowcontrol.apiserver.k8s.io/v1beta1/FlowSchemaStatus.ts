import { IIoK8sApiFlowcontrolV1beta1FlowSchemaCondition } from "./FlowSchemaCondition";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiFlowcontrolV1beta1FlowSchemaStatus";

/**
 * FlowSchemaStatus represents the current state of a FlowSchema.
 */
export interface IFlowSchemaStatus {
  /**
   * `conditions` is a list of the current states of FlowSchema.
   */
  "conditions"?: Array<IIoK8sApiFlowcontrolV1beta1FlowSchemaCondition>;
}

/**
 * FlowSchemaStatus represents the current state of a FlowSchema.
 */
export class FlowSchemaStatus extends Model<IFlowSchemaStatus> implements IFlowSchemaStatus {
  "conditions"?: Array<IIoK8sApiFlowcontrolV1beta1FlowSchemaCondition>;

constructor(data?: ModelData<IFlowSchemaStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(FlowSchemaStatus, validate as ValidateFunc<IFlowSchemaStatus>);

export {
  IFlowSchemaStatus as IIoK8sApiFlowcontrolV1beta1FlowSchemaStatus,
  FlowSchemaStatus as IoK8sApiFlowcontrolV1beta1FlowSchemaStatus
};
