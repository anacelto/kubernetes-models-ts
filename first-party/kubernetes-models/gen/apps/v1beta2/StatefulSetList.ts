import { IIoK8sApiAppsV1beta2StatefulSet } from "./StatefulSet";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ListMeta";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiAppsV1beta2StatefulSetList";

/**
 * StatefulSetList is a collection of StatefulSets.
 */
export interface IStatefulSetList extends TypeMeta {
  "apiVersion": "apps/v1beta2";
  "items": Array<IIoK8sApiAppsV1beta2StatefulSet>;
  "kind": "StatefulSetList";
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * StatefulSetList is a collection of StatefulSets.
 */
export class StatefulSetList extends Model<IStatefulSetList> implements IStatefulSetList {
  "apiVersion": IStatefulSetList["apiVersion"];
  "items": Array<IIoK8sApiAppsV1beta2StatefulSet>;
  "kind": IStatefulSetList["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IStatefulSetList["apiVersion"] = "apps/v1beta2";
static kind: IStatefulSetList["kind"] = "StatefulSetList";
static is = createTypeMetaGuard<IStatefulSetList>(StatefulSetList);

constructor(data?: ModelData<IStatefulSetList>) {
  super();

  this.setDefinedProps({
    apiVersion: StatefulSetList.apiVersion,
    kind: StatefulSetList.kind,
    ...data
  } as IStatefulSetList);
}
}

setValidateFunc(StatefulSetList, validate as ValidateFunc<IStatefulSetList>);

export {
  IStatefulSetList as IIoK8sApiAppsV1beta2StatefulSetList,
  StatefulSetList as IoK8sApiAppsV1beta2StatefulSetList
};
