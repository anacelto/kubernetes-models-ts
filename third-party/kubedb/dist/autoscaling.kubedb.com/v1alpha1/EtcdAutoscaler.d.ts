import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IEtcdAutoscaler {
    "apiVersion": "autoscaling.kubedb.com/v1alpha1";
    "kind": "EtcdAutoscaler";
    "metadata"?: IObjectMeta;
    "spec"?: {
        "behavior"?: {
            "scaleDown"?: {
                "policies"?: Array<{
                    "periodSeconds": number;
                    "type": string;
                    "value": number;
                }>;
                "selectPolicy"?: string;
                "stabilizationWindowSeconds"?: number;
            };
            "scaleUp"?: {
                "policies"?: Array<{
                    "periodSeconds": number;
                    "type": string;
                    "value": number;
                }>;
                "selectPolicy"?: string;
                "stabilizationWindowSeconds"?: number;
            };
        };
        "maxReplicas": number;
        "metrics"?: Array<{
            "containerResource"?: {
                "container": string;
                "name": string;
                "target": {
                    "averageUtilization"?: number;
                    "averageValue"?: number | string;
                    "type": string;
                    "value"?: number | string;
                };
            };
            "external"?: {
                "metric": {
                    "name": string;
                    "selector"?: {
                        "matchExpressions"?: Array<{
                            "key": string;
                            "operator": string;
                            "values"?: Array<string>;
                        }>;
                        "matchLabels"?: {
                            [key: string]: string;
                        };
                    };
                };
                "target": {
                    "averageUtilization"?: number;
                    "averageValue"?: number | string;
                    "type": string;
                    "value"?: number | string;
                };
            };
            "object"?: {
                "describedObject": {
                    "apiVersion"?: string;
                    "kind": string;
                    "name": string;
                };
                "metric": {
                    "name": string;
                    "selector"?: {
                        "matchExpressions"?: Array<{
                            "key": string;
                            "operator": string;
                            "values"?: Array<string>;
                        }>;
                        "matchLabels"?: {
                            [key: string]: string;
                        };
                    };
                };
                "target": {
                    "averageUtilization"?: number;
                    "averageValue"?: number | string;
                    "type": string;
                    "value"?: number | string;
                };
            };
            "pods"?: {
                "metric": {
                    "name": string;
                    "selector"?: {
                        "matchExpressions"?: Array<{
                            "key": string;
                            "operator": string;
                            "values"?: Array<string>;
                        }>;
                        "matchLabels"?: {
                            [key: string]: string;
                        };
                    };
                };
                "target": {
                    "averageUtilization"?: number;
                    "averageValue"?: number | string;
                    "type": string;
                    "value"?: number | string;
                };
            };
            "resource"?: {
                "name": string;
                "target": {
                    "averageUtilization"?: number;
                    "averageValue"?: number | string;
                    "type": string;
                    "value"?: number | string;
                };
            };
            "type": string;
        }>;
        "minReplicas"?: number;
        "scaleTargetRef": {
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
export declare class EtcdAutoscaler extends Model<IEtcdAutoscaler> implements IEtcdAutoscaler {
    "apiVersion": IEtcdAutoscaler["apiVersion"];
    "kind": IEtcdAutoscaler["kind"];
    "metadata"?: IEtcdAutoscaler["metadata"];
    "spec"?: IEtcdAutoscaler["spec"];
    "status"?: IEtcdAutoscaler["status"];
    static apiVersion: IEtcdAutoscaler["apiVersion"];
    static kind: IEtcdAutoscaler["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IEtcdAutoscaler>;
    constructor(data?: ModelData<IEtcdAutoscaler>);
}
