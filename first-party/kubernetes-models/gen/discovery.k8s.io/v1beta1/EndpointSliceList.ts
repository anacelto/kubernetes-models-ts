import { IIoK8sApiDiscoveryV1beta1EndpointSlice } from "./EndpointSlice";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ListMeta";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiDiscoveryV1beta1EndpointSliceList";

/**
 * EndpointSliceList represents a list of endpoint slices
 */
export interface IEndpointSliceList extends TypeMeta {
  "apiVersion": "discovery.k8s.io/v1beta1";
  /**
   * List of endpoint slices
   */
  "items": Array<IIoK8sApiDiscoveryV1beta1EndpointSlice>;
  "kind": "EndpointSliceList";
  /**
   * Standard list metadata.
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * EndpointSliceList represents a list of endpoint slices
 */
export class EndpointSliceList extends Model<IEndpointSliceList> implements IEndpointSliceList {
  "apiVersion": IEndpointSliceList["apiVersion"];
  "items": Array<IIoK8sApiDiscoveryV1beta1EndpointSlice>;
  "kind": IEndpointSliceList["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IEndpointSliceList["apiVersion"] = "discovery.k8s.io/v1beta1";
static kind: IEndpointSliceList["kind"] = "EndpointSliceList";
static is = createTypeMetaGuard<IEndpointSliceList>(EndpointSliceList);

constructor(data?: ModelData<IEndpointSliceList>) {
  super();

  this.setDefinedProps({
    apiVersion: EndpointSliceList.apiVersion,
    kind: EndpointSliceList.kind,
    ...data
  } as IEndpointSliceList);
}
}

setValidateFunc(EndpointSliceList, validate as ValidateFunc<IEndpointSliceList>);

export {
  IEndpointSliceList as IIoK8sApiDiscoveryV1beta1EndpointSliceList,
  EndpointSliceList as IoK8sApiDiscoveryV1beta1EndpointSliceList
};
