import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiPolicyV1beta1AllowedFlexVolume";

/**
 * AllowedFlexVolume represents a single Flexvolume that is allowed to be used.
 */
export interface IAllowedFlexVolume {
  /**
   * driver is the name of the Flexvolume driver.
   */
  "driver": string;
}

/**
 * AllowedFlexVolume represents a single Flexvolume that is allowed to be used.
 */
export class AllowedFlexVolume extends Model<IAllowedFlexVolume> implements IAllowedFlexVolume {
  "driver": string;

constructor(data?: ModelData<IAllowedFlexVolume>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(AllowedFlexVolume, validate as ValidateFunc<IAllowedFlexVolume>);

export {
  IAllowedFlexVolume as IIoK8sApiPolicyV1beta1AllowedFlexVolume,
  AllowedFlexVolume as IoK8sApiPolicyV1beta1AllowedFlexVolume
};
