import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface ICronWorkflow {
    "apiVersion": "argoproj.io/v1alpha1";
    "kind": "CronWorkflow";
    "metadata": IObjectMeta;
    "spec": {};
    "status"?: {};
}
export declare class CronWorkflow extends Model<ICronWorkflow> implements ICronWorkflow {
    "apiVersion": ICronWorkflow["apiVersion"];
    "kind": ICronWorkflow["kind"];
    "metadata": ICronWorkflow["metadata"];
    "spec": ICronWorkflow["spec"];
    "status"?: ICronWorkflow["status"];
    static apiVersion: ICronWorkflow["apiVersion"];
    static kind: ICronWorkflow["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ICronWorkflow>;
    constructor(data?: ModelData<ICronWorkflow>);
}
