import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/AutoscalingKubedbComV1alpha1MySQLAutoscaler";

export interface IMySQLAutoscaler {
  "apiVersion": "autoscaling.kubedb.com/v1alpha1";
  "kind": "MySQLAutoscaler";
  "metadata"?: IObjectMeta;
  "spec"?: {
    "compute"?: {
      "mysql"?: {
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
      };
      "timeout"?: string;
    };
    "storage"?: {
      "mysql"?: {
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

export class MySQLAutoscaler extends Model<IMySQLAutoscaler> implements IMySQLAutoscaler {
  "apiVersion": IMySQLAutoscaler["apiVersion"];
  "kind": IMySQLAutoscaler["kind"];
  "metadata"?: IMySQLAutoscaler["metadata"];
  "spec"?: IMySQLAutoscaler["spec"];
  "status"?: IMySQLAutoscaler["status"];

static apiVersion: IMySQLAutoscaler["apiVersion"] = "autoscaling.kubedb.com/v1alpha1";
static kind: IMySQLAutoscaler["kind"] = "MySQLAutoscaler";
static is = createTypeMetaGuard<IMySQLAutoscaler>(MySQLAutoscaler);

constructor(data?: ModelData<IMySQLAutoscaler>) {
  super();

  this.setDefinedProps({
    apiVersion: MySQLAutoscaler.apiVersion,
    kind: MySQLAutoscaler.kind,
    ...data
  } as IMySQLAutoscaler);
}
}


setValidateFunc(MySQLAutoscaler, validate as ValidateFunc<IMySQLAutoscaler>);
