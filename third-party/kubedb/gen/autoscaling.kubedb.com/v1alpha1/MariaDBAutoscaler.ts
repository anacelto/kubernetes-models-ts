import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/AutoscalingKubedbComV1alpha1MariaDBAutoscaler";

export interface IMariaDBAutoscaler {
  "apiVersion": "autoscaling.kubedb.com/v1alpha1";
  "kind": "MariaDBAutoscaler";
  "metadata"?: IObjectMeta;
  "spec": {
    "compute"?: {
      "mariadb"?: {
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
      "mariadb"?: {
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

export class MariaDBAutoscaler extends Model<IMariaDBAutoscaler> implements IMariaDBAutoscaler {
  "apiVersion": IMariaDBAutoscaler["apiVersion"];
  "kind": IMariaDBAutoscaler["kind"];
  "metadata"?: IMariaDBAutoscaler["metadata"];
  "spec": IMariaDBAutoscaler["spec"];
  "status"?: IMariaDBAutoscaler["status"];

static apiVersion: IMariaDBAutoscaler["apiVersion"] = "autoscaling.kubedb.com/v1alpha1";
static kind: IMariaDBAutoscaler["kind"] = "MariaDBAutoscaler";
static is = createTypeMetaGuard<IMariaDBAutoscaler>(MariaDBAutoscaler);

constructor(data?: ModelData<IMariaDBAutoscaler>) {
  super();

  this.setDefinedProps({
    apiVersion: MariaDBAutoscaler.apiVersion,
    kind: MariaDBAutoscaler.kind,
    ...data
  } as IMariaDBAutoscaler);
}
}


setValidateFunc(MariaDBAutoscaler, validate as ValidateFunc<IMariaDBAutoscaler>);
