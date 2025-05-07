import { IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService } from "./APIService";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ListMeta";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceList";

/**
 * APIServiceList is a list of APIService objects.
 */
export interface IAPIServiceList extends TypeMeta {
  "apiVersion": "apiregistration.k8s.io/v1beta1";
  "items": Array<IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService>;
  "kind": "APIServiceList";
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * APIServiceList is a list of APIService objects.
 */
export class APIServiceList extends Model<IAPIServiceList> implements IAPIServiceList {
  "apiVersion": IAPIServiceList["apiVersion"];
  "items": Array<IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService>;
  "kind": IAPIServiceList["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IAPIServiceList["apiVersion"] = "apiregistration.k8s.io/v1beta1";
static kind: IAPIServiceList["kind"] = "APIServiceList";
static is = createTypeMetaGuard<IAPIServiceList>(APIServiceList);

constructor(data?: ModelData<IAPIServiceList>) {
  super();

  this.setDefinedProps({
    apiVersion: APIServiceList.apiVersion,
    kind: APIServiceList.kind,
    ...data
  } as IAPIServiceList);
}
}

setValidateFunc(APIServiceList, validate as ValidateFunc<IAPIServiceList>);

export {
  IAPIServiceList as IIoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceList,
  APIServiceList as IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceList
};
