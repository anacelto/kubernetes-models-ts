import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IWorkflowTemplate {
    "apiVersion": "argoproj.io/v1alpha1";
    "kind": "WorkflowTemplate";
    "metadata": IObjectMeta;
    "spec": {};
}
export declare class WorkflowTemplate extends Model<IWorkflowTemplate> implements IWorkflowTemplate {
    "apiVersion": IWorkflowTemplate["apiVersion"];
    "kind": IWorkflowTemplate["kind"];
    "metadata": IWorkflowTemplate["metadata"];
    "spec": IWorkflowTemplate["spec"];
    static apiVersion: IWorkflowTemplate["apiVersion"];
    static kind: IWorkflowTemplate["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IWorkflowTemplate>;
    constructor(data?: ModelData<IWorkflowTemplate>);
}
