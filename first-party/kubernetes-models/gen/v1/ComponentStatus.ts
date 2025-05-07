import { IIoK8sApiCoreV1ComponentCondition } from "./ComponentCondition";
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ComponentStatus";

/**
 * ComponentStatus (and ComponentStatusList) holds the cluster validation info. Deprecated: This API is deprecated in v1.19+
 * @deprecated
 */
export interface IComponentStatus extends TypeMeta {
  "apiVersion": "v1";
  /**
   * List of component conditions observed
   */
  "conditions"?: Array<IIoK8sApiCoreV1ComponentCondition>;
  "kind": "ComponentStatus";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
}

/**
 * ComponentStatus (and ComponentStatusList) holds the cluster validation info. Deprecated: This API is deprecated in v1.19+
 * @deprecated
 */
export class ComponentStatus extends Model<IComponentStatus> implements IComponentStatus {
  "apiVersion": IComponentStatus["apiVersion"];
  "conditions"?: Array<IIoK8sApiCoreV1ComponentCondition>;
  "kind": IComponentStatus["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

static apiVersion: IComponentStatus["apiVersion"] = "v1";
static kind: IComponentStatus["kind"] = "ComponentStatus";
static is = createTypeMetaGuard<IComponentStatus>(ComponentStatus);

constructor(data?: ModelData<IComponentStatus>) {
  super();

  this.setDefinedProps({
    apiVersion: ComponentStatus.apiVersion,
    kind: ComponentStatus.kind,
    ...data
  } as IComponentStatus);
}
}

setValidateFunc(ComponentStatus, validate as ValidateFunc<IComponentStatus>);

export {
  IComponentStatus as IIoK8sApiCoreV1ComponentStatus,
  ComponentStatus as IoK8sApiCoreV1ComponentStatus
};
