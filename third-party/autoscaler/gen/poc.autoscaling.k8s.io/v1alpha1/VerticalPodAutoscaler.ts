import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/PocAutoscalingK8sIoV1alpha1VerticalPodAutoscaler";

export interface IVerticalPodAutoscaler {
  "spec"?: {
    "selector": {
    };
    "updatePolicy"?: {
      "updateMode"?: string;
    };
    "resourcePolicy"?: {
      "containerPolicies"?: Array<{
      }>;
    };
  };
  "apiVersion": "poc.autoscaling.k8s.io/v1alpha1";
  "kind": "VerticalPodAutoscaler";
  "metadata"?: IObjectMeta;
}

export class VerticalPodAutoscaler extends Model<IVerticalPodAutoscaler> implements IVerticalPodAutoscaler {
  "spec"?: IVerticalPodAutoscaler["spec"];
  "apiVersion": IVerticalPodAutoscaler["apiVersion"];
  "kind": IVerticalPodAutoscaler["kind"];
  "metadata"?: IVerticalPodAutoscaler["metadata"];

static apiVersion: IVerticalPodAutoscaler["apiVersion"] = "poc.autoscaling.k8s.io/v1alpha1";
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
