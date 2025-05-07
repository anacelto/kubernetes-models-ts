import { IIoK8sApiCoreV1Endpoints } from "./Endpoints";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ListMeta";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1EndpointsList";

/**
 * EndpointsList is a list of endpoints.
 */
export interface IEndpointsList extends TypeMeta {
  "apiVersion": "v1";
  /**
   * List of endpoints.
   */
  "items": Array<IIoK8sApiCoreV1Endpoints>;
  "kind": "EndpointsList";
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * EndpointsList is a list of endpoints.
 */
export class EndpointsList extends Model<IEndpointsList> implements IEndpointsList {
  "apiVersion": IEndpointsList["apiVersion"];
  "items": Array<IIoK8sApiCoreV1Endpoints>;
  "kind": IEndpointsList["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IEndpointsList["apiVersion"] = "v1";
static kind: IEndpointsList["kind"] = "EndpointsList";
static is = createTypeMetaGuard<IEndpointsList>(EndpointsList);

constructor(data?: ModelData<IEndpointsList>) {
  super();

  this.setDefinedProps({
    apiVersion: EndpointsList.apiVersion,
    kind: EndpointsList.kind,
    ...data
  } as IEndpointsList);
}
}

setValidateFunc(EndpointsList, validate as ValidateFunc<IEndpointsList>);

export {
  IEndpointsList as IIoK8sApiCoreV1EndpointsList,
  EndpointsList as IoK8sApiCoreV1EndpointsList
};
