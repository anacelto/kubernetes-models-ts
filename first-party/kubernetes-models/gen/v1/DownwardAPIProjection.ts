import { IIoK8sApiCoreV1DownwardAPIVolumeFile } from "./DownwardAPIVolumeFile";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1DownwardAPIProjection";

/**
 * Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
 */
export interface IDownwardAPIProjection {
  /**
   * Items is a list of DownwardAPIVolume file
   */
  "items"?: Array<IIoK8sApiCoreV1DownwardAPIVolumeFile>;
}

/**
 * Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
 */
export class DownwardAPIProjection extends Model<IDownwardAPIProjection> implements IDownwardAPIProjection {
  "items"?: Array<IIoK8sApiCoreV1DownwardAPIVolumeFile>;

constructor(data?: ModelData<IDownwardAPIProjection>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DownwardAPIProjection, validate as ValidateFunc<IDownwardAPIProjection>);

export {
  IDownwardAPIProjection as IIoK8sApiCoreV1DownwardAPIProjection,
  DownwardAPIProjection as IoK8sApiCoreV1DownwardAPIProjection
};
