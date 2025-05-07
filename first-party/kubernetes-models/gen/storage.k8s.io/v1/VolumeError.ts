import { IIoK8sApimachineryPkgApisMetaV1Time } from "@kubernetes-models/apimachinery/apis/meta/v1/Time";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiStorageV1VolumeError";

/**
 * VolumeError captures an error encountered during a volume operation.
 */
export interface IVolumeError {
  /**
   * message represents the error encountered during Attach or Detach operation. This string may be logged, so it should not contain sensitive information.
   */
  "message"?: string;
  /**
   * time represents the time the error was encountered.
   */
  "time"?: IIoK8sApimachineryPkgApisMetaV1Time;
}

/**
 * VolumeError captures an error encountered during a volume operation.
 */
export class VolumeError extends Model<IVolumeError> implements IVolumeError {
  "message"?: string;
  "time"?: IIoK8sApimachineryPkgApisMetaV1Time;

constructor(data?: ModelData<IVolumeError>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(VolumeError, validate as ValidateFunc<IVolumeError>);

export {
  IVolumeError as IIoK8sApiStorageV1VolumeError,
  VolumeError as IoK8sApiStorageV1VolumeError
};
