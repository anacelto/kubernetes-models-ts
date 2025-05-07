import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IRedisSentinelAutoscaler {
    "apiVersion": "autoscaling.kubedb.com/v1alpha1";
    "kind": "RedisSentinelAutoscaler";
    "metadata"?: IObjectMeta;
    "spec"?: {
        "compute"?: {
            "sentinel"?: {
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
export declare class RedisSentinelAutoscaler extends Model<IRedisSentinelAutoscaler> implements IRedisSentinelAutoscaler {
    "apiVersion": IRedisSentinelAutoscaler["apiVersion"];
    "kind": IRedisSentinelAutoscaler["kind"];
    "metadata"?: IRedisSentinelAutoscaler["metadata"];
    "spec"?: IRedisSentinelAutoscaler["spec"];
    "status"?: IRedisSentinelAutoscaler["status"];
    static apiVersion: IRedisSentinelAutoscaler["apiVersion"];
    static kind: IRedisSentinelAutoscaler["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IRedisSentinelAutoscaler>;
    constructor(data?: ModelData<IRedisSentinelAutoscaler>);
}
