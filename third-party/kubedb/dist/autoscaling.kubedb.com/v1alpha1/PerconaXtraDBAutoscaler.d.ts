import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IPerconaXtraDBAutoscaler {
    "apiVersion": "autoscaling.kubedb.com/v1alpha1";
    "kind": "PerconaXtraDBAutoscaler";
    "metadata"?: IObjectMeta;
    "spec": {
        "compute"?: {
            "perconaxtradb"?: {
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
            "readinessCriteria"?: {};
            "timeout"?: string;
        };
        "storage"?: {
            "perconaxtradb"?: {
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
export declare class PerconaXtraDBAutoscaler extends Model<IPerconaXtraDBAutoscaler> implements IPerconaXtraDBAutoscaler {
    "apiVersion": IPerconaXtraDBAutoscaler["apiVersion"];
    "kind": IPerconaXtraDBAutoscaler["kind"];
    "metadata"?: IPerconaXtraDBAutoscaler["metadata"];
    "spec": IPerconaXtraDBAutoscaler["spec"];
    "status"?: IPerconaXtraDBAutoscaler["status"];
    static apiVersion: IPerconaXtraDBAutoscaler["apiVersion"];
    static kind: IPerconaXtraDBAutoscaler["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IPerconaXtraDBAutoscaler>;
    constructor(data?: ModelData<IPerconaXtraDBAutoscaler>);
}
