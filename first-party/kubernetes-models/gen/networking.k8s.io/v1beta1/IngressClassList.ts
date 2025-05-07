import { IIoK8sApiNetworkingV1beta1IngressClass } from "./IngressClass";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ListMeta";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiNetworkingV1beta1IngressClassList";

/**
 * IngressClassList is a collection of IngressClasses.
 */
export interface IIngressClassList extends TypeMeta {
  "apiVersion": "networking.k8s.io/v1beta1";
  /**
   * Items is the list of IngressClasses.
   */
  "items": Array<IIoK8sApiNetworkingV1beta1IngressClass>;
  "kind": "IngressClassList";
  /**
   * Standard list metadata.
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * IngressClassList is a collection of IngressClasses.
 */
export class IngressClassList extends Model<IIngressClassList> implements IIngressClassList {
  "apiVersion": IIngressClassList["apiVersion"];
  "items": Array<IIoK8sApiNetworkingV1beta1IngressClass>;
  "kind": IIngressClassList["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIngressClassList["apiVersion"] = "networking.k8s.io/v1beta1";
static kind: IIngressClassList["kind"] = "IngressClassList";
static is = createTypeMetaGuard<IIngressClassList>(IngressClassList);

constructor(data?: ModelData<IIngressClassList>) {
  super();

  this.setDefinedProps({
    apiVersion: IngressClassList.apiVersion,
    kind: IngressClassList.kind,
    ...data
  } as IIngressClassList);
}
}

setValidateFunc(IngressClassList, validate as ValidateFunc<IIngressClassList>);

export {
  IIngressClassList as IIoK8sApiNetworkingV1beta1IngressClassList,
  IngressClassList as IoK8sApiNetworkingV1beta1IngressClassList
};
