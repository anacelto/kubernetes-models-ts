import { IIoK8sApiCoreV1PersistentVolumeClaim } from "./PersistentVolumeClaim";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ListMeta";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1PersistentVolumeClaimList";

/**
 * PersistentVolumeClaimList is a list of PersistentVolumeClaim items.
 */
export interface IPersistentVolumeClaimList extends TypeMeta {
  "apiVersion": "v1";
  /**
   * items is a list of persistent volume claims. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
   */
  "items": Array<IIoK8sApiCoreV1PersistentVolumeClaim>;
  "kind": "PersistentVolumeClaimList";
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * PersistentVolumeClaimList is a list of PersistentVolumeClaim items.
 */
export class PersistentVolumeClaimList extends Model<IPersistentVolumeClaimList> implements IPersistentVolumeClaimList {
  "apiVersion": IPersistentVolumeClaimList["apiVersion"];
  "items": Array<IIoK8sApiCoreV1PersistentVolumeClaim>;
  "kind": IPersistentVolumeClaimList["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IPersistentVolumeClaimList["apiVersion"] = "v1";
static kind: IPersistentVolumeClaimList["kind"] = "PersistentVolumeClaimList";
static is = createTypeMetaGuard<IPersistentVolumeClaimList>(PersistentVolumeClaimList);

constructor(data?: ModelData<IPersistentVolumeClaimList>) {
  super();

  this.setDefinedProps({
    apiVersion: PersistentVolumeClaimList.apiVersion,
    kind: PersistentVolumeClaimList.kind,
    ...data
  } as IPersistentVolumeClaimList);
}
}

setValidateFunc(PersistentVolumeClaimList, validate as ValidateFunc<IPersistentVolumeClaimList>);

export {
  IPersistentVolumeClaimList as IIoK8sApiCoreV1PersistentVolumeClaimList,
  PersistentVolumeClaimList as IoK8sApiCoreV1PersistentVolumeClaimList
};
