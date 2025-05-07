import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/AutoscalingKubedbComV1alpha1ElasticsearchAutoscaler";

export interface IElasticsearchAutoscaler {
  "apiVersion": "autoscaling.kubedb.com/v1alpha1";
  "kind": "ElasticsearchAutoscaler";
  "metadata"?: IObjectMeta;
  "spec"?: {
    "compute"?: {
      "node"?: {
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
      "topology"?: {
        "data"?: {
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
        "ingest"?: {
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
        "master"?: {
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
    };
    "databaseRef": {
      "name"?: string;
    };
    "opsRequestOptions"?: {
      "apply"?: "IfReady" | "Always";
      "readinessCriteria"?: {
      };
      "timeout"?: string;
    };
    "storage"?: {
      "node"?: {
        "expansionMode"?: "Offline" | "Online";
        "scalingThreshold"?: number;
        "trigger"?: string;
        "usageThreshold"?: number;
      };
      "topology"?: {
        "data"?: {
          "expansionMode"?: "Offline" | "Online";
          "scalingThreshold"?: number;
          "trigger"?: string;
          "usageThreshold"?: number;
        };
        "ingest"?: {
          "expansionMode"?: "Offline" | "Online";
          "scalingThreshold"?: number;
          "trigger"?: string;
          "usageThreshold"?: number;
        };
        "master"?: {
          "expansionMode"?: "Offline" | "Online";
          "scalingThreshold"?: number;
          "trigger"?: string;
          "usageThreshold"?: number;
        };
      };
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

export class ElasticsearchAutoscaler extends Model<IElasticsearchAutoscaler> implements IElasticsearchAutoscaler {
  "apiVersion": IElasticsearchAutoscaler["apiVersion"];
  "kind": IElasticsearchAutoscaler["kind"];
  "metadata"?: IElasticsearchAutoscaler["metadata"];
  "spec"?: IElasticsearchAutoscaler["spec"];
  "status"?: IElasticsearchAutoscaler["status"];

static apiVersion: IElasticsearchAutoscaler["apiVersion"] = "autoscaling.kubedb.com/v1alpha1";
static kind: IElasticsearchAutoscaler["kind"] = "ElasticsearchAutoscaler";
static is = createTypeMetaGuard<IElasticsearchAutoscaler>(ElasticsearchAutoscaler);

constructor(data?: ModelData<IElasticsearchAutoscaler>) {
  super();

  this.setDefinedProps({
    apiVersion: ElasticsearchAutoscaler.apiVersion,
    kind: ElasticsearchAutoscaler.kind,
    ...data
  } as IElasticsearchAutoscaler);
}
}


setValidateFunc(ElasticsearchAutoscaler, validate as ValidateFunc<IElasticsearchAutoscaler>);
