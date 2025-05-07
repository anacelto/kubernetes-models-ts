import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IMultidimPodAutoscaler {
    "spec": {
        "constraints": {
            "container"?: Array<{
                "name"?: string;
                "requests"?: {
                    "maxAllowed"?: {};
                    "minAllowed"?: {};
                };
            }>;
            "containerControlledResources": Array<"memory">;
            "global"?: {
                "maxReplicas"?: number;
                "minReplicas"?: number;
                "requests"?: {
                    "maxAllowed"?: {};
                    "minAllowed"?: {};
                };
            };
            "pod"?: {
                "requests"?: {
                    "maxAllowed"?: {};
                    "minAllowed"?: {};
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
    "status"?: {};
    "apiVersion": "autoscaling.gke.io/v1beta1";
    "kind": "MultidimPodAutoscaler";
    "metadata"?: IObjectMeta;
}
export declare class MultidimPodAutoscaler extends Model<IMultidimPodAutoscaler> implements IMultidimPodAutoscaler {
    "spec": IMultidimPodAutoscaler["spec"];
    "status"?: IMultidimPodAutoscaler["status"];
    "apiVersion": IMultidimPodAutoscaler["apiVersion"];
    "kind": IMultidimPodAutoscaler["kind"];
    "metadata"?: IMultidimPodAutoscaler["metadata"];
    static apiVersion: IMultidimPodAutoscaler["apiVersion"];
    static kind: IMultidimPodAutoscaler["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IMultidimPodAutoscaler>;
    constructor(data?: ModelData<IMultidimPodAutoscaler>);
}
