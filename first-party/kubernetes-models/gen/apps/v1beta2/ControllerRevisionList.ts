import { IIoK8sApiAppsV1beta2ControllerRevision } from "./ControllerRevision";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ListMeta";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiAppsV1beta2ControllerRevisionList";

/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
export interface IControllerRevisionList extends TypeMeta {
  "apiVersion": "apps/v1beta2";
  /**
   * Items is the list of ControllerRevisions
   */
  "items": Array<IIoK8sApiAppsV1beta2ControllerRevision>;
  "kind": "ControllerRevisionList";
  /**
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 */
export class ControllerRevisionList extends Model<IControllerRevisionList> implements IControllerRevisionList {
  "apiVersion": IControllerRevisionList["apiVersion"];
  "items": Array<IIoK8sApiAppsV1beta2ControllerRevision>;
  "kind": IControllerRevisionList["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IControllerRevisionList["apiVersion"] = "apps/v1beta2";
static kind: IControllerRevisionList["kind"] = "ControllerRevisionList";
static is = createTypeMetaGuard<IControllerRevisionList>(ControllerRevisionList);

constructor(data?: ModelData<IControllerRevisionList>) {
  super();

  this.setDefinedProps({
    apiVersion: ControllerRevisionList.apiVersion,
    kind: ControllerRevisionList.kind,
    ...data
  } as IControllerRevisionList);
}
}

setValidateFunc(ControllerRevisionList, validate as ValidateFunc<IControllerRevisionList>);

export {
  IControllerRevisionList as IIoK8sApiAppsV1beta2ControllerRevisionList,
  ControllerRevisionList as IoK8sApiAppsV1beta2ControllerRevisionList
};
