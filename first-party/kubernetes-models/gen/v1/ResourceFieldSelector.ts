import { IIoK8sApimachineryPkgApiResourceQuantity } from "@kubernetes-models/apimachinery/api/resource/Quantity";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ResourceFieldSelector";

/**
 * ResourceFieldSelector represents container resources (cpu, memory) and their output format
 */
export interface IResourceFieldSelector {
  /**
   * Container name: required for volumes, optional for env vars
   */
  "containerName"?: string;
  /**
   * Specifies the output format of the exposed resources, defaults to "1"
   */
  "divisor"?: IIoK8sApimachineryPkgApiResourceQuantity;
  /**
   * Required: resource to select
   */
  "resource": string;
}

/**
 * ResourceFieldSelector represents container resources (cpu, memory) and their output format
 */
export class ResourceFieldSelector extends Model<IResourceFieldSelector> implements IResourceFieldSelector {
  "containerName"?: string;
  "divisor"?: IIoK8sApimachineryPkgApiResourceQuantity;
  "resource": string;

constructor(data?: ModelData<IResourceFieldSelector>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ResourceFieldSelector, validate as ValidateFunc<IResourceFieldSelector>);

export {
  IResourceFieldSelector as IIoK8sApiCoreV1ResourceFieldSelector,
  ResourceFieldSelector as IoK8sApiCoreV1ResourceFieldSelector
};
