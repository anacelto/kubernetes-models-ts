import { IIoK8sApiCoreV1Namespace } from "./Namespace";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ListMeta";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1NamespaceList";

/**
 * NamespaceList is a list of Namespaces.
 */
export interface INamespaceList extends TypeMeta {
  "apiVersion": "v1";
  /**
   * Items is the list of Namespace objects in the list. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   */
  "items": Array<IIoK8sApiCoreV1Namespace>;
  "kind": "NamespaceList";
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * NamespaceList is a list of Namespaces.
 */
export class NamespaceList extends Model<INamespaceList> implements INamespaceList {
  "apiVersion": INamespaceList["apiVersion"];
  "items": Array<IIoK8sApiCoreV1Namespace>;
  "kind": INamespaceList["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: INamespaceList["apiVersion"] = "v1";
static kind: INamespaceList["kind"] = "NamespaceList";
static is = createTypeMetaGuard<INamespaceList>(NamespaceList);

constructor(data?: ModelData<INamespaceList>) {
  super();

  this.setDefinedProps({
    apiVersion: NamespaceList.apiVersion,
    kind: NamespaceList.kind,
    ...data
  } as INamespaceList);
}
}

setValidateFunc(NamespaceList, validate as ValidateFunc<INamespaceList>);

export {
  INamespaceList as IIoK8sApiCoreV1NamespaceList,
  NamespaceList as IoK8sApiCoreV1NamespaceList
};
