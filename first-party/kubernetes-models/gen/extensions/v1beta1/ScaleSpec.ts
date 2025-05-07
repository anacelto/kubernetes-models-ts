import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiExtensionsV1beta1ScaleSpec";

/**
 * describes the attributes of a scale subresource
 */
export interface IScaleSpec {
  /**
   * desired number of instances for the scaled object.
   */
  "replicas"?: number;
}

/**
 * describes the attributes of a scale subresource
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
  IScaleSpec as IIoK8sApiExtensionsV1beta1ScaleSpec,
  ScaleSpec as IoK8sApiExtensionsV1beta1ScaleSpec
};
