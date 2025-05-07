import { IIoK8sApiFlowcontrolV1beta3PriorityLevelConfiguration } from "./PriorityLevelConfiguration";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ListMeta";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationList";

/**
 * PriorityLevelConfigurationList is a list of PriorityLevelConfiguration objects.
 */
export interface IPriorityLevelConfigurationList extends TypeMeta {
  "apiVersion": "flowcontrol.apiserver.k8s.io/v1beta3";
  /**
   * `items` is a list of request-priorities.
   */
  "items": Array<IIoK8sApiFlowcontrolV1beta3PriorityLevelConfiguration>;
  "kind": "PriorityLevelConfigurationList";
  /**
   * `metadata` is the standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * PriorityLevelConfigurationList is a list of PriorityLevelConfiguration objects.
 */
export class PriorityLevelConfigurationList extends Model<IPriorityLevelConfigurationList> implements IPriorityLevelConfigurationList {
  "apiVersion": IPriorityLevelConfigurationList["apiVersion"];
  "items": Array<IIoK8sApiFlowcontrolV1beta3PriorityLevelConfiguration>;
  "kind": IPriorityLevelConfigurationList["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IPriorityLevelConfigurationList["apiVersion"] = "flowcontrol.apiserver.k8s.io/v1beta3";
static kind: IPriorityLevelConfigurationList["kind"] = "PriorityLevelConfigurationList";
static is = createTypeMetaGuard<IPriorityLevelConfigurationList>(PriorityLevelConfigurationList);

constructor(data?: ModelData<IPriorityLevelConfigurationList>) {
  super();

  this.setDefinedProps({
    apiVersion: PriorityLevelConfigurationList.apiVersion,
    kind: PriorityLevelConfigurationList.kind,
    ...data
  } as IPriorityLevelConfigurationList);
}
}

setValidateFunc(PriorityLevelConfigurationList, validate as ValidateFunc<IPriorityLevelConfigurationList>);

export {
  IPriorityLevelConfigurationList as IIoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationList,
  PriorityLevelConfigurationList as IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationList
};
