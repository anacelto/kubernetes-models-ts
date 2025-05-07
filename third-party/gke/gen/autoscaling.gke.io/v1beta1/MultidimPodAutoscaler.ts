import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/AutoscalingGkeIoV1beta1MultidimPodAutoscaler";

export interface IMultidimPodAutoscaler {
  "spec": {
    "constraints": {
      "container"?: Array<{
        "name"?: string;
        "requests"?: {
          "maxAllowed"?: {
          };
          "minAllowed"?: {
          };
        };
      }>;
      "containerControlledResources": Array<"memory">;
      "global"?: {
        "maxReplicas"?: number;
        "minReplicas"?: number;
        "requests"?: {
          "maxAllowed"?: {
          };
          "minAllowed"?: {
          };
        };
      };
      "pod"?: {
        "requests"?: {
          "maxAllowed"?: {
          };
          "minAllowed"?: {
          };
        };
      };
    };
    "goals": {
      "metrics": Array<{
        "resource": {
          "name": "cpu";
          "target": {
            "averageUtilization"?: number;
            "averageValue"?: any;
            "type"?: "Utilization" | "Value" | "AverageValue";
            "value"?: any;
          };
        };
        "type": "Resource";
      }>;
    };
    "policy"?: {
      "updateMode"?: "Auto";
    };
    "scaleTargetRef": {
      "apiVersion"?: string;
      "kind"?: string;
      "name"?: string;
    };
  };
  "status"?: {
  };
  "apiVersion": "autoscaling.gke.io/v1beta1";
  "kind": "MultidimPodAutoscaler";
  "metadata"?: IObjectMeta;
}

export class MultidimPodAutoscaler extends Model<IMultidimPodAutoscaler> implements IMultidimPodAutoscaler {
  "spec": IMultidimPodAutoscaler["spec"];
  "status"?: IMultidimPodAutoscaler["status"];
  "apiVersion": IMultidimPodAutoscaler["apiVersion"];
  "kind": IMultidimPodAutoscaler["kind"];
  "metadata"?: IMultidimPodAutoscaler["metadata"];

static apiVersion: IMultidimPodAutoscaler["apiVersion"] = "autoscaling.gke.io/v1beta1";
static kind: IMultidimPodAutoscaler["kind"] = "MultidimPodAutoscaler";
static is = createTypeMetaGuard<IMultidimPodAutoscaler>(MultidimPodAutoscaler);

constructor(data?: ModelData<IMultidimPodAutoscaler>) {
  super();

  this.setDefinedProps({
    apiVersion: MultidimPodAutoscaler.apiVersion,
    kind: MultidimPodAutoscaler.kind,
    ...data
  } as IMultidimPodAutoscaler);
}
}


setValidateFunc(MultidimPodAutoscaler, validate as ValidateFunc<IMultidimPodAutoscaler>);
