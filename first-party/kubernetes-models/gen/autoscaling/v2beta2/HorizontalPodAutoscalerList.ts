import { IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler } from "./HorizontalPodAutoscaler";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ListMeta";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerList";

/**
 * HorizontalPodAutoscalerList is a list of horizontal pod autoscaler objects.
 */
export interface IHorizontalPodAutoscalerList extends TypeMeta {
  "apiVersion": "autoscaling/v2beta2";
  /**
   * items is the list of horizontal pod autoscaler objects.
   */
  "items": Array<IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler>;
  "kind": "HorizontalPodAutoscalerList";
  /**
   * metadata is the standard list metadata.
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * HorizontalPodAutoscalerList is a list of horizontal pod autoscaler objects.
 */
export class HorizontalPodAutoscalerList extends Model<IHorizontalPodAutoscalerList> implements IHorizontalPodAutoscalerList {
  "apiVersion": IHorizontalPodAutoscalerList["apiVersion"];
  "items": Array<IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler>;
  "kind": IHorizontalPodAutoscalerList["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IHorizontalPodAutoscalerList["apiVersion"] = "autoscaling/v2beta2";
static kind: IHorizontalPodAutoscalerList["kind"] = "HorizontalPodAutoscalerList";
static is = createTypeMetaGuard<IHorizontalPodAutoscalerList>(HorizontalPodAutoscalerList);

constructor(data?: ModelData<IHorizontalPodAutoscalerList>) {
  super();

  this.setDefinedProps({
    apiVersion: HorizontalPodAutoscalerList.apiVersion,
    kind: HorizontalPodAutoscalerList.kind,
    ...data
  } as IHorizontalPodAutoscalerList);
}
}

setValidateFunc(HorizontalPodAutoscalerList, validate as ValidateFunc<IHorizontalPodAutoscalerList>);

export {
  IHorizontalPodAutoscalerList as IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerList,
  HorizontalPodAutoscalerList as IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerList
};
