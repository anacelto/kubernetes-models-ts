import { IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscaler } from "./HorizontalPodAutoscaler";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ListMeta";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerList";

/**
 * HorizontalPodAutoscaler is a list of horizontal pod autoscaler objects.
 */
export interface IHorizontalPodAutoscalerList extends TypeMeta {
  "apiVersion": "autoscaling/v2beta1";
  /**
   * items is the list of horizontal pod autoscaler objects.
   */
  "items": Array<IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscaler>;
  "kind": "HorizontalPodAutoscalerList";
  /**
   * metadata is the standard list metadata.
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * HorizontalPodAutoscaler is a list of horizontal pod autoscaler objects.
 */
export class HorizontalPodAutoscalerList extends Model<IHorizontalPodAutoscalerList> implements IHorizontalPodAutoscalerList {
  "apiVersion": IHorizontalPodAutoscalerList["apiVersion"];
  "items": Array<IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscaler>;
  "kind": IHorizontalPodAutoscalerList["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IHorizontalPodAutoscalerList["apiVersion"] = "autoscaling/v2beta1";
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
  IHorizontalPodAutoscalerList as IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerList,
  HorizontalPodAutoscalerList as IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerList
};
