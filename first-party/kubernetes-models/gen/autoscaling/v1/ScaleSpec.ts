import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiAutoscalingV1ScaleSpec";

/**
 * ScaleSpec describes the attributes of a scale subresource.
 */
export interface IScaleSpec {
  /**
   * replicas is the desired number of instances for the scaled object.
   */
  "replicas"?: number;
}

/**
 * ScaleSpec describes the attributes of a scale subresource.
 */
export class ScaleSpec extends Model<IScaleSpec> implements IScaleSpec {
  "replicas"?: number;

constructor(data?: ModelData<IScaleSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ScaleSpec, validate as ValidateFunc<IScaleSpec>);

export {
  IScaleSpec as IIoK8sApiAutoscalingV1ScaleSpec,
  ScaleSpec as IoK8sApiAutoscalingV1ScaleSpec
};
