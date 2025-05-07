import { IIoK8sApiCoreV1NodeSelector } from "./NodeSelector";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1VolumeNodeAffinity";

/**
 * VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
 */
export interface IVolumeNodeAffinity {
  /**
   * required specifies hard node constraints that must be met.
   */
  "required"?: IIoK8sApiCoreV1NodeSelector;
}

/**
 * VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
 */
export class VolumeNodeAffinity extends Model<IVolumeNodeAffinity> implements IVolumeNodeAffinity {
  "required"?: IIoK8sApiCoreV1NodeSelector;

constructor(data?: ModelData<IVolumeNodeAffinity>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(VolumeNodeAffinity, validate as ValidateFunc<IVolumeNodeAffinity>);

export {
  IVolumeNodeAffinity as IIoK8sApiCoreV1VolumeNodeAffinity,
  VolumeNodeAffinity as IoK8sApiCoreV1VolumeNodeAffinity
};
