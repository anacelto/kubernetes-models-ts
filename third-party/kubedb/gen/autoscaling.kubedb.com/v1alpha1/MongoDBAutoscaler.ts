import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/AutoscalingKubedbComV1alpha1MongoDBAutoscaler";

export interface IMongoDBAutoscaler {
  "apiVersion": "autoscaling.kubedb.com/v1alpha1";
  "kind": "MongoDBAutoscaler";
  "metadata"?: IObjectMeta;
  "spec": {
    "compute"?: {
      "arbiter"?: {
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
      "configServer"?: {
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
      "hidden"?: {
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
      "mongos"?: {
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
      "replicaSet"?: {
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
      "shard"?: {
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
      "standalone"?: {
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
    "databaseRef": {
      "name"?: string;
    };
    "opsRequestOptions"?: {
      "apply"?: "IfReady" | "Always";
      "readinessCriteria"?: {
        "objectsCountDiffPercentage"?: number;
        "oplogMaxLagSeconds"?: number;
      };
      "timeout"?: string;
    };
    "storage"?: {
      "configServer"?: {
        "expansionMode"?: "Offline" | "Online";
        "scalingThreshold"?: number;
        "trigger"?: string;
        "usageThreshold"?: number;
      };
      "hidden"?: {
        "expansionMode"?: "Offline" | "Online";
        "scalingThreshold"?: number;
        "trigger"?: string;
        "usageThreshold"?: number;
      };
      "replicaSet"?: {
        "expansionMode"?: "Offline" | "Online";
        "scalingThreshold"?: number;
        "trigger"?: string;
        "usageThreshold"?: number;
      };
      "shard"?: {
        "expansionMode"?: "Offline" | "Online";
        "scalingThreshold"?: number;
        "trigger"?: string;
        "usageThreshold"?: number;
      };
      "standalone"?: {
        "expansionMode"?: "Offline" | "Online";
        "scalingThreshold"?: number;
        "trigger"?: string;
        "usageThreshold"?: number;
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

export class MongoDBAutoscaler extends Model<IMongoDBAutoscaler> implements IMongoDBAutoscaler {
  "apiVersion": IMongoDBAutoscaler["apiVersion"];
  "kind": IMongoDBAutoscaler["kind"];
  "metadata"?: IMongoDBAutoscaler["metadata"];
  "spec": IMongoDBAutoscaler["spec"];
  "status"?: IMongoDBAutoscaler["status"];

static apiVersion: IMongoDBAutoscaler["apiVersion"] = "autoscaling.kubedb.com/v1alpha1";
static kind: IMongoDBAutoscaler["kind"] = "MongoDBAutoscaler";
static is = createTypeMetaGuard<IMongoDBAutoscaler>(MongoDBAutoscaler);

constructor(data?: ModelData<IMongoDBAutoscaler>) {
  super();

  this.setDefinedProps({
    apiVersion: MongoDBAutoscaler.apiVersion,
    kind: MongoDBAutoscaler.kind,
    ...data
  } as IMongoDBAutoscaler);
}
}


setValidateFunc(MongoDBAutoscaler, validate as ValidateFunc<IMongoDBAutoscaler>);
