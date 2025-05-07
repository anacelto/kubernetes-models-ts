import { IIoK8sApiCoreV1ComponentStatus } from "./ComponentStatus";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ListMeta";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ComponentStatusList";

/**
 * Status of all the conditions for the component as a list of ComponentStatus objects. Deprecated: This API is deprecated in v1.19+
 * @deprecated
 */
export interface IComponentStatusList extends TypeMeta {
  "apiVersion": "v1";
  /**
   * List of ComponentStatus objects.
   */
  "items": Array<IIoK8sApiCoreV1ComponentStatus>;
  "kind": "ComponentStatusList";
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * Status of all the conditions for the component as a list of ComponentStatus objects. Deprecated: This API is deprecated in v1.19+
 * @deprecated
 */
export class ComponentStatusList extends Model<IComponentStatusList> implements IComponentStatusList {
  "apiVersion": IComponentStatusList["apiVersion"];
  "items": Array<IIoK8sApiCoreV1ComponentStatus>;
  "kind": IComponentStatusList["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IComponentStatusList["apiVersion"] = "v1";
static kind: IComponentStatusList["kind"] = "ComponentStatusList";
static is = createTypeMetaGuard<IComponentStatusList>(ComponentStatusList);

constructor(data?: ModelData<IComponentStatusList>) {
  super();

  this.setDefinedProps({
    apiVersion: ComponentStatusList.apiVersion,
    kind: ComponentStatusList.kind,
    ...data
  } as IComponentStatusList);
}
}

setValidateFunc(ComponentStatusList, validate as ValidateFunc<IComponentStatusList>);

export {
  IComponentStatusList as IIoK8sApiCoreV1ComponentStatusList,
  ComponentStatusList as IoK8sApiCoreV1ComponentStatusList
};
