import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IWorkflowArtifactGCTask {
    "apiVersion": "argoproj.io/v1alpha1";
    "kind": "WorkflowArtifactGCTask";
    "metadata": IObjectMeta;
    "spec": {};
    "status"?: {};
}
export declare class WorkflowArtifactGCTask extends Model<IWorkflowArtifactGCTask> implements IWorkflowArtifactGCTask {
    "apiVersion": IWorkflowArtifactGCTask["apiVersion"];
    "kind": IWorkflowArtifactGCTask["kind"];
    "metadata": IWorkflowArtifactGCTask["metadata"];
    "spec": IWorkflowArtifactGCTask["spec"];
    "status"?: IWorkflowArtifactGCTask["status"];
    static apiVersion: IWorkflowArtifactGCTask["apiVersion"];
    static kind: IWorkflowArtifactGCTask["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IWorkflowArtifactGCTask>;
    constructor(data?: ModelData<IWorkflowArtifactGCTask>);
}
