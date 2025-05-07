import { IIoK8sApiStorageV1CSINode } from "./CSINode";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ListMeta";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiStorageV1CSINodeList";

/**
 * CSINodeList is a collection of CSINode objects.
 */
export interface ICSINodeList extends TypeMeta {
  "apiVersion": "storage.k8s.io/v1";
  /**
   * items is the list of CSINode
   */
  "items": Array<IIoK8sApiStorageV1CSINode>;
  "kind": "CSINodeList";
  /**
   * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * CSINodeList is a collection of CSINode objects.
 */
export class CSINodeList extends Model<ICSINodeList> implements ICSINodeList {
  "apiVersion": ICSINodeList["apiVersion"];
  "items": Array<IIoK8sApiStorageV1CSINode>;
  "kind": ICSINodeList["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: ICSINodeList["apiVersion"] = "storage.k8s.io/v1";
static kind: ICSINodeList["kind"] = "CSINodeList";
static is = createTypeMetaGuard<ICSINodeList>(CSINodeList);

constructor(data?: ModelData<ICSINodeList>) {
  super();

  this.setDefinedProps({
    apiVersion: CSINodeList.apiVersion,
    kind: CSINodeList.kind,
    ...data
  } as ICSINodeList);
}
}

setValidateFunc(CSINodeList, validate as ValidateFunc<ICSINodeList>);

export {
  ICSINodeList as IIoK8sApiStorageV1CSINodeList,
  CSINodeList as IoK8sApiStorageV1CSINodeList
};
