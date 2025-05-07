import { IIoK8sApiNodeV1RuntimeClass } from "./RuntimeClass";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ListMeta";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiNodeV1RuntimeClassList";

/**
 * RuntimeClassList is a list of RuntimeClass objects.
 */
export interface IRuntimeClassList extends TypeMeta {
  "apiVersion": "node.k8s.io/v1";
  /**
   * items is a list of schema objects.
   */
  "items": Array<IIoK8sApiNodeV1RuntimeClass>;
  "kind": "RuntimeClassList";
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * RuntimeClassList is a list of RuntimeClass objects.
 */
export class RuntimeClassList extends Model<IRuntimeClassList> implements IRuntimeClassList {
  "apiVersion": IRuntimeClassList["apiVersion"];
  "items": Array<IIoK8sApiNodeV1RuntimeClass>;
  "kind": IRuntimeClassList["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IRuntimeClassList["apiVersion"] = "node.k8s.io/v1";
static kind: IRuntimeClassList["kind"] = "RuntimeClassList";
static is = createTypeMetaGuard<IRuntimeClassList>(RuntimeClassList);

constructor(data?: ModelData<IRuntimeClassList>) {
  super();

  this.setDefinedProps({
    apiVersion: RuntimeClassList.apiVersion,
    kind: RuntimeClassList.kind,
    ...data
  } as IRuntimeClassList);
}
}

setValidateFunc(RuntimeClassList, validate as ValidateFunc<IRuntimeClassList>);

export {
  IRuntimeClassList as IIoK8sApiNodeV1RuntimeClassList,
  RuntimeClassList as IoK8sApiNodeV1RuntimeClassList
};
