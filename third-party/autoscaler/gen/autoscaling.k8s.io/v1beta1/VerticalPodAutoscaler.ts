import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/AutoscalingK8sIoV1beta1VerticalPodAutoscaler";

export interface IVerticalPodAutoscaler {
  "spec"?: {
    "targetRef"?: {
    };
    "updatePolicy"?: {
      "updateMode"?: string;
    };
    "resourcePolicy"?: {
      "containerPolicies"?: Array<{
      }>;
    };
  };
  "apiVersion": "autoscaling.k8s.io/v1beta1";
  "kind": "VerticalPodAutoscaler";
  "metadata"?: IObjectMeta;
}

export class VerticalPodAutoscaler extends Model<IVerticalPodAutoscaler> implements IVerticalPodAutoscaler {
  "spec"?: IVerticalPodAutoscaler["spec"];
  "apiVersion": IVerticalPodAutoscaler["apiVersion"];
  "kind": IVerticalPodAutoscaler["kind"];
  "metadata"?: IVerticalPodAutoscaler["metadata"];

static apiVersion: IVerticalPodAutoscaler["apiVersion"] = "autoscaling.k8s.io/v1beta1";
static kind: IVerticalPodAutoscaler["kind"] = "VerticalPodAutoscaler";
static is = createTypeMetaGuard<IVerticalPodAutoscaler>(VerticalPodAutoscaler);

constructor(data?: ModelData<IVerticalPodAutoscaler>) {
  super();

  this.setDefinedProps({
    apiVersion: VerticalPodAutoscaler.apiVersion,
    kind: VerticalPodAutoscaler.kind,
    ...data
  } as IVerticalPodAutoscaler);
}
}


setValidateFunc(VerticalPodAutoscaler, validate as ValidateFunc<IVerticalPodAutoscaler>);
