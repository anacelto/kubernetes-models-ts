import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiExtensionsV1beta1IDRange";

/**
 * IDRange provides a min/max of an allowed range of IDs. Deprecated: use IDRange from policy API Group instead.
 * @deprecated
 */
export interface IIDRange {
  /**
   * max is the end of the range, inclusive.
   */
  "max": number;
  /**
   * min is the start of the range, inclusive.
   */
  "min": number;
}

/**
 * IDRange provides a min/max of an allowed range of IDs. Deprecated: use IDRange from policy API Group instead.
 * @deprecated
 */
export class IDRange extends Model<IIDRange> implements IIDRange {
  "max": number;
  "min": number;

constructor(data?: ModelData<IIDRange>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(IDRange, validate as ValidateFunc<IIDRange>);

export {
  IIDRange as IIoK8sApiExtensionsV1beta1IDRange,
  IDRange as IoK8sApiExtensionsV1beta1IDRange
};
