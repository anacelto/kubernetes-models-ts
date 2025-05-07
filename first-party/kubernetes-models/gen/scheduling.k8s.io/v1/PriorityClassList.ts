import { IIoK8sApiSchedulingV1PriorityClass } from "./PriorityClass";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ListMeta";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiSchedulingV1PriorityClassList";

/**
 * PriorityClassList is a collection of priority classes.
 */
export interface IPriorityClassList extends TypeMeta {
  "apiVersion": "scheduling.k8s.io/v1";
  /**
   * items is the list of PriorityClasses
   */
  "items": Array<IIoK8sApiSchedulingV1PriorityClass>;
  "kind": "PriorityClassList";
  /**
   * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * PriorityClassList is a collection of priority classes.
 */
export class PriorityClassList extends Model<IPriorityClassList> implements IPriorityClassList {
  "apiVersion": IPriorityClassList["apiVersion"];
  "items": Array<IIoK8sApiSchedulingV1PriorityClass>;
  "kind": IPriorityClassList["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IPriorityClassList["apiVersion"] = "scheduling.k8s.io/v1";
static kind: IPriorityClassList["kind"] = "PriorityClassList";
static is = createTypeMetaGuard<IPriorityClassList>(PriorityClassList);

constructor(data?: ModelData<IPriorityClassList>) {
  super();

  this.setDefinedProps({
    apiVersion: PriorityClassList.apiVersion,
    kind: PriorityClassList.kind,
    ...data
  } as IPriorityClassList);
}
}

setValidateFunc(PriorityClassList, validate as ValidateFunc<IPriorityClassList>);

export {
  IPriorityClassList as IIoK8sApiSchedulingV1PriorityClassList,
  PriorityClassList as IoK8sApiSchedulingV1PriorityClassList
};
