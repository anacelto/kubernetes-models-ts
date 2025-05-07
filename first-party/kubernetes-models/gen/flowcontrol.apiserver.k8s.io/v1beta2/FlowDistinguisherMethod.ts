import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiFlowcontrolV1beta2FlowDistinguisherMethod";

/**
 * FlowDistinguisherMethod specifies the method of a flow distinguisher.
 */
export interface IFlowDistinguisherMethod {
  /**
   * `type` is the type of flow distinguisher method The supported types are "ByUser" and "ByNamespace". Required.
   */
  "type": string;
}

/**
 * FlowDistinguisherMethod specifies the method of a flow distinguisher.
 */
export class FlowDistinguisherMethod extends Model<IFlowDistinguisherMethod> implements IFlowDistinguisherMethod {
  "type": string;

constructor(data?: ModelData<IFlowDistinguisherMethod>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(FlowDistinguisherMethod, validate as ValidateFunc<IFlowDistinguisherMethod>);

export {
  IFlowDistinguisherMethod as IIoK8sApiFlowcontrolV1beta2FlowDistinguisherMethod,
  FlowDistinguisherMethod as IoK8sApiFlowcontrolV1beta2FlowDistinguisherMethod
};
