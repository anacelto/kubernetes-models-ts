import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IPostgresAutoscaler {
    "apiVersion": "autoscaling.kubedb.com/v1alpha1";
    "kind": "PostgresAutoscaler";
    "metadata"?: IObjectMeta;
    "spec"?: {
        "compute"?: {
            "postgres"?: {
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
            "timeout"?: string;
        };
        "storage"?: {
            "postgres"?: {
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
export declare class PostgresAutoscaler extends Model<IPostgresAutoscaler> implements IPostgresAutoscaler {
    "apiVersion": IPostgresAutoscaler["apiVersion"];
    "kind": IPostgresAutoscaler["kind"];
    "metadata"?: IPostgresAutoscaler["metadata"];
    "spec"?: IPostgresAutoscaler["spec"];
    "status"?: IPostgresAutoscaler["status"];
    static apiVersion: IPostgresAutoscaler["apiVersion"];
    static kind: IPostgresAutoscaler["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IPostgresAutoscaler>;
    constructor(data?: ModelData<IPostgresAutoscaler>);
}
