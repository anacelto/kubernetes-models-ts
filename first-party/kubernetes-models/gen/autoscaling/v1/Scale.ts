import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { IIoK8sApiAutoscalingV1ScaleSpec } from "./ScaleSpec";
import { IIoK8sApiAutoscalingV1ScaleStatus } from "./ScaleStatus";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiAutoscalingV1Scale";

/**
 * Scale represents a scaling request for a resource.
 */
export interface IScale extends TypeMeta {
  "apiVersion": "autoscaling/v1";
  "kind": "Scale";
  /**
   * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /**
   * spec defines the behavior of the scale. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status.
   */
  "spec"?: IIoK8sApiAutoscalingV1ScaleSpec;
  /**
   * status is the current status of the scale. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status. Read-only.
   */
  "status"?: IIoK8sApiAutoscalingV1ScaleStatus;
}

/**
 * Scale represents a scaling request for a resource.
 */
export class Scale extends Model<IScale> implements IScale {
  "apiVersion": IScale["apiVersion"];
  "kind": IScale["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
  "spec"?: IIoK8sApiAutoscalingV1ScaleSpec;
  "status"?: IIoK8sApiAutoscalingV1ScaleStatus;

static apiVersion: IScale["apiVersion"] = "autoscaling/v1";
static kind: IScale["kind"] = "Scale";
static is = createTypeMetaGuard<IScale>(Scale);

constructor(data?: ModelData<IScale>) {
  super();

  this.setDefinedProps({
    apiVersion: Scale.apiVersion,
    kind: Scale.kind,
    ...data
  } as IScale);
}
}

setValidateFunc(Scale, validate as ValidateFunc<IScale>);

export {
  IScale as IIoK8sApiAutoscalingV1Scale,
  Scale as IoK8sApiAutoscalingV1Scale
};
