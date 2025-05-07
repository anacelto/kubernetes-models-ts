import { IIoK8sApimachineryPkgApisMetaV1Time } from "@kubernetes-models/apimachinery/apis/meta/v1/Time";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1NamespaceCondition";

/**
 * NamespaceCondition contains details about state of namespace.
 */
export interface INamespaceCondition {
  "lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
  "message"?: string;
  "reason"?: string;
  /**
   * Status of the condition, one of True, False, Unknown.
   */
  "status": string;
  /**
   * Type of namespace controller condition.
   */
  "type": string;
}

/**
 * NamespaceCondition contains details about state of namespace.
 */
export class NamespaceCondition extends Model<INamespaceCondition> implements INamespaceCondition {
  "lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
  "message"?: string;
  "reason"?: string;
  "status": string;
  "type": string;

constructor(data?: ModelData<INamespaceCondition>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(NamespaceCondition, validate as ValidateFunc<INamespaceCondition>);

export {
  INamespaceCondition as IIoK8sApiCoreV1NamespaceCondition,
  NamespaceCondition as IoK8sApiCoreV1NamespaceCondition
};
