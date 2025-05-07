import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IVerticalPodAutoscaler {
    "spec"?: {
        "selector": {};
        "updatePolicy"?: {
            "updateMode"?: string;
        };
        "resourcePolicy"?: {
            "containerPolicies"?: Array<{}>;
        };
    };
    "apiVersion": "poc.autoscaling.k8s.io/v1alpha1";
    "kind": "VerticalPodAutoscaler";
    "metadata"?: IObjectMeta;
}
export declare class VerticalPodAutoscaler extends Model<IVerticalPodAutoscaler> implements IVerticalPodAutoscaler {
    "spec"?: IVerticalPodAutoscaler["spec"];
    "apiVersion": IVerticalPodAutoscaler["apiVersion"];
    "kind": IVerticalPodAutoscaler["kind"];
    "metadata"?: IVerticalPodAutoscaler["metadata"];
    static apiVersion: IVerticalPodAutoscaler["apiVersion"];
    static kind: IVerticalPodAutoscaler["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IVerticalPodAutoscaler>;
    constructor(data?: ModelData<IVerticalPodAutoscaler>);
}
