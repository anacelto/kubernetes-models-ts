import { IIoK8sApiStorageV1VolumeAttachment } from "./VolumeAttachment";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ListMeta";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiStorageV1VolumeAttachmentList";

/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 */
export interface IVolumeAttachmentList extends TypeMeta {
  "apiVersion": "storage.k8s.io/v1";
  /**
   * items is the list of VolumeAttachments
   */
  "items": Array<IIoK8sApiStorageV1VolumeAttachment>;
  "kind": "VolumeAttachmentList";
  /**
   * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 */
export class VolumeAttachmentList extends Model<IVolumeAttachmentList> implements IVolumeAttachmentList {
  "apiVersion": IVolumeAttachmentList["apiVersion"];
  "items": Array<IIoK8sApiStorageV1VolumeAttachment>;
  "kind": IVolumeAttachmentList["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IVolumeAttachmentList["apiVersion"] = "storage.k8s.io/v1";
static kind: IVolumeAttachmentList["kind"] = "VolumeAttachmentList";
static is = createTypeMetaGuard<IVolumeAttachmentList>(VolumeAttachmentList);

constructor(data?: ModelData<IVolumeAttachmentList>) {
  super();

  this.setDefinedProps({
    apiVersion: VolumeAttachmentList.apiVersion,
    kind: VolumeAttachmentList.kind,
    ...data
  } as IVolumeAttachmentList);
}
}

setValidateFunc(VolumeAttachmentList, validate as ValidateFunc<IVolumeAttachmentList>);

export {
  IVolumeAttachmentList as IIoK8sApiStorageV1VolumeAttachmentList,
  VolumeAttachmentList as IoK8sApiStorageV1VolumeAttachmentList
};
