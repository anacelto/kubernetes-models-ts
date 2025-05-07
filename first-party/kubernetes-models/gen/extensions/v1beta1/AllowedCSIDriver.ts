import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiExtensionsV1beta1AllowedCSIDriver";

/**
 * AllowedCSIDriver represents a single inline CSI Driver that is allowed to be used.
 */
export interface IAllowedCSIDriver {
  /**
   * Name is the registered name of the CSI driver
   */
  "name": string;
}

/**
 * AllowedCSIDriver represents a single inline CSI Driver that is allowed to be used.
 */
export class AllowedCSIDriver extends Model<IAllowedCSIDriver> implements IAllowedCSIDriver {
  "name": string;

constructor(data?: ModelData<IAllowedCSIDriver>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(AllowedCSIDriver, validate as ValidateFunc<IAllowedCSIDriver>);

export {
  IAllowedCSIDriver as IIoK8sApiExtensionsV1beta1AllowedCSIDriver,
  AllowedCSIDriver as IoK8sApiExtensionsV1beta1AllowedCSIDriver
};
