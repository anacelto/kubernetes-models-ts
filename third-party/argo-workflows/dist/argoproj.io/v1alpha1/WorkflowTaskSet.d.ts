import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IWorkflowTaskSet {
    "apiVersion": "argoproj.io/v1alpha1";
    "kind": "WorkflowTaskSet";
    "metadata": IObjectMeta;
    "spec": {};
    "status"?: {};
}
export declare class WorkflowTaskSet extends Model<IWorkflowTaskSet> implements IWorkflowTaskSet {
    "apiVersion": IWorkflowTaskSet["apiVersion"];
    "kind": IWorkflowTaskSet["kind"];
    "metadata": IWorkflowTaskSet["metadata"];
    "spec": IWorkflowTaskSet["spec"];
    "status"?: IWorkflowTaskSet["status"];
    static apiVersion: IWorkflowTaskSet["apiVersion"];
    static kind: IWorkflowTaskSet["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IWorkflowTaskSet>;
    constructor(data?: ModelData<IWorkflowTaskSet>);
}
