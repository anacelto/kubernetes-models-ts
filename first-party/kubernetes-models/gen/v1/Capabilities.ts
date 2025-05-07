import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1Capabilities";

/**
 * Adds and removes POSIX capabilities from running containers.
 */
export interface ICapabilities {
  /**
   * Added capabilities
   */
  "add"?: Array<string>;
  /**
   * Removed capabilities
   */
  "drop"?: Array<string>;
}

/**
 * Adds and removes POSIX capabilities from running containers.
 */
export class Capabilities extends Model<ICapabilities> implements ICapabilities {
  "add"?: Array<string>;
  "drop"?: Array<string>;

constructor(data?: ModelData<ICapabilities>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(Capabilities, validate as ValidateFunc<ICapabilities>);

export {
  ICapabilities as IIoK8sApiCoreV1Capabilities,
  Capabilities as IoK8sApiCoreV1Capabilities
};
