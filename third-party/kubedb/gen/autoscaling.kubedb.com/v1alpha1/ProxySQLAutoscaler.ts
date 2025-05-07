import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/AutoscalingKubedbComV1alpha1ProxySQLAutoscaler";

export interface IProxySQLAutoscaler {
  "apiVersion": "autoscaling.kubedb.com/v1alpha1";
  "kind": "ProxySQLAutoscaler";
  "metadata"?: IObjectMeta;
  "spec"?: {
    "compute"?: {
      "proxysql"?: {
        "containerControlledValues"?: "RequestsAndLimits" | "RequestsOnly";
        "controlledResources"?: Array<string>;
        "inMemoryStorage"?: {
          "scalingFactorPercentage"?: number;
          "usageThresholdPercentage"?: number;
        };
        "maxAllowed"?: {
          [key: string]: number | string;
        };
        "minAllowed"?: {
          [key: string]: number | string;
        };
        "podLifeTimeThreshold"?: string;
        "resourceDiffPercentage"?: number;
        "trigger"?: string;
      };
    };
    "opsRequestOptions"?: {
      "apply"?: "IfReady" | "Always";
      "timeout"?: string;
    };
    "proxyRef": {
      "name"?: string;
    };
  };
  "status"?: {
    "checkpoints"?: Array<{
      "cpuHistogram"?: {
        "bucketWeights"?: Array<{
          "index": number;
          "weight": number;
        }>;
        "referenceTimestamp"?: string;
        "totalWeight"?: number;
      };
      "firstSampleStart"?: string;
      "lastSampleStart"?: string;
      "lastUpdateTime"?: string;
      "memoryHistogram"?: {
        "bucketWeights"?: Array<{
          "index": number;
          "weight": number;
        }>;
        "referenceTimestamp"?: string;
        "totalWeight"?: number;
      };
      "ref"?: {
        "containerName"?: string;
        "vpaObjectName"?: string;
      };
      "totalSamplesCount"?: number;
      "version"?: string;
    }>;
    "conditions"?: Array<{
      "lastTransitionTime": string;
      "message": string;
      "observedGeneration"?: number;
      "reason": string;
      "status": string;
      "type": string;
    }>;
    "observedGeneration"?: number;
    "phase"?: "InProgress" | "Current" | "Terminating" | "Failed";
    "vpas"?: Array<{
      "conditions"?: Array<{
        "lastTransitionTime"?: string;
        "message"?: string;
        "reason"?: string;
        "status": string;
        "type": string;
      }>;
      "recommendation"?: {
        "containerRecommendations"?: Array<{
          "containerName"?: string;
          "lowerBound"?: {
            [key: string]: number | string;
          };
          "target": {
            [key: string]: number | string;
          };
          "uncappedTarget"?: {
            [key: string]: number | string;
          };
          "upperBound"?: {
            [key: string]: number | string;
          };
        }>;
      };
      "vpaName"?: string;
    }>;
  };
}

export class ProxySQLAutoscaler extends Model<IProxySQLAutoscaler> implements IProxySQLAutoscaler {
  "apiVersion": IProxySQLAutoscaler["apiVersion"];
  "kind": IProxySQLAutoscaler["kind"];
  "metadata"?: IProxySQLAutoscaler["metadata"];
  "spec"?: IProxySQLAutoscaler["spec"];
  "status"?: IProxySQLAutoscaler["status"];

static apiVersion: IProxySQLAutoscaler["apiVersion"] = "autoscaling.kubedb.com/v1alpha1";
static kind: IProxySQLAutoscaler["kind"] = "ProxySQLAutoscaler";
static is = createTypeMetaGuard<IProxySQLAutoscaler>(ProxySQLAutoscaler);

constructor(data?: ModelData<IProxySQLAutoscaler>) {
  super();

  this.setDefinedProps({
    apiVersion: ProxySQLAutoscaler.apiVersion,
    kind: ProxySQLAutoscaler.kind,
    ...data
  } as IProxySQLAutoscaler);
}
}


setValidateFunc(ProxySQLAutoscaler, validate as ValidateFunc<IProxySQLAutoscaler>);
