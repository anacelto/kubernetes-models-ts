import { IIoK8sApimachineryPkgApisMetaV1Time } from "@kubernetes-models/apimachinery/apis/meta/v1/Time";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiFlowcontrolV1beta1FlowSchemaCondition";

/**
 * FlowSchemaCondition describes conditions for a FlowSchema.
 */
export interface IFlowSchemaCondition {
  /**
   * `lastTransitionTime` is the last time the condition transitioned from one status to another.
   */
  "lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
  /**
   * `message` is a human-readable message indicating details about last transition.
   */
  "message"?: string;
  /**
   * `reason` is a unique, one-word, CamelCase reason for the condition's last transition.
   */
  "reason"?: string;
  /**
   * `status` is the status of the condition. Can be True, False, Unknown. Required.
   */
  "status"?: string;
  /**
   * `type` is the type of the condition. Required.
   */
  "type"?: string;
}

/**
 * FlowSchemaCondition describes conditions for a FlowSchema.
 */
export class FlowSchemaCondition extends Model<IFlowSchemaCondition> implements IFlowSchemaCondition {
  "lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
  "message"?: string;
  "reason"?: string;
  "status"?: string;
  "type"?: string;

constructor(data?: ModelData<IFlowSchemaCondition>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(FlowSchemaCondition, validate as ValidateFunc<IFlowSchemaCondition>);

export {
  IFlowSchemaCondition as IIoK8sApiFlowcontrolV1beta1FlowSchemaCondition,
  FlowSchemaCondition as IoK8sApiFlowcontrolV1beta1FlowSchemaCondition
};
