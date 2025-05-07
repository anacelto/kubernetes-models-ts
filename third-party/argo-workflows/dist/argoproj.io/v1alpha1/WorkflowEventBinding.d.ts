import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IWorkflowEventBinding {
    "apiVersion": "argoproj.io/v1alpha1";
    "kind": "WorkflowEventBinding";
    "metadata": IObjectMeta;
    "spec": {};
}
export declare class WorkflowEventBinding extends Model<IWorkflowEventBinding> implements IWorkflowEventBinding {
    "apiVersion": IWorkflowEventBinding["apiVersion"];
    "kind": IWorkflowEventBinding["kind"];
    "metadata": IWorkflowEventBinding["metadata"];
    "spec": IWorkflowEventBinding["spec"];
    static apiVersion: IWorkflowEventBinding["apiVersion"];
    static kind: IWorkflowEventBinding["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IWorkflowEventBinding>;
    constructor(data?: ModelData<IWorkflowEventBinding>);
}
