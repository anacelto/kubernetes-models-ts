import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1AttachedVolume";

/**
 * AttachedVolume describes a volume attached to a node
 */
export interface IAttachedVolume {
  /**
   * DevicePath represents the device path where the volume should be available
   */
  "devicePath": string;
  /**
   * Name of the attached volume
   */
  "name": string;
}

/**
 * AttachedVolume describes a volume attached to a node
 */
export class AttachedVolume extends Model<IAttachedVolume> implements IAttachedVolume {
  "devicePath": string;
  "name": string;

constructor(data?: ModelData<IAttachedVolume>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(AttachedVolume, validate as ValidateFunc<IAttachedVolume>);

export {
  IAttachedVolume as IIoK8sApiCoreV1AttachedVolume,
  AttachedVolume as IoK8sApiCoreV1AttachedVolume
};
