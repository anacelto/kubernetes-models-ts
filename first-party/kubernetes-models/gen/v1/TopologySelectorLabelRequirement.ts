import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1TopologySelectorLabelRequirement";

/**
 * A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future.
 */
export interface ITopologySelectorLabelRequirement {
  /**
   * The label key that the selector applies to.
   */
  "key": string;
  /**
   * An array of string values. One value must match the label to be selected. Each entry in Values is ORed.
   */
  "values": Array<string>;
}

/**
 * A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future.
 */
export class TopologySelectorLabelRequirement extends Model<ITopologySelectorLabelRequirement> implements ITopologySelectorLabelRequirement {
  "key": string;
  "values": Array<string>;

constructor(data?: ModelData<ITopologySelectorLabelRequirement>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(TopologySelectorLabelRequirement, validate as ValidateFunc<ITopologySelectorLabelRequirement>);

export {
  ITopologySelectorLabelRequirement as IIoK8sApiCoreV1TopologySelectorLabelRequirement,
  TopologySelectorLabelRequirement as IoK8sApiCoreV1TopologySelectorLabelRequirement
};
