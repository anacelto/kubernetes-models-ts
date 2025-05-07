import { IIoK8sApiStorageV1beta1VolumeAttachmentSource } from "./VolumeAttachmentSource";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiStorageV1beta1VolumeAttachmentSpec";

/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 */
export interface IVolumeAttachmentSpec {
  /**
   * Attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName().
   */
  "attacher": string;
  /**
   * The node that the volume should be attached to.
   */
  "nodeName": string;
  /**
   * Source represents the volume that should be attached.
   */
  "source": IIoK8sApiStorageV1beta1VolumeAttachmentSource;
}

/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 */
export class VolumeAttachmentSpec extends Model<IVolumeAttachmentSpec> implements IVolumeAttachmentSpec {
  "attacher": string;
  "nodeName": string;
  "source": IIoK8sApiStorageV1beta1VolumeAttachmentSource;

constructor(data?: ModelData<IVolumeAttachmentSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(VolumeAttachmentSpec, validate as ValidateFunc<IVolumeAttachmentSpec>);

export {
  IVolumeAttachmentSpec as IIoK8sApiStorageV1beta1VolumeAttachmentSpec,
  VolumeAttachmentSpec as IoK8sApiStorageV1beta1VolumeAttachmentSpec
};
