import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IWorkflow {
    "apiVersion": "argoproj.io/v1alpha1";
    "kind": "Workflow";
    "metadata": IObjectMeta;
    "spec": {};
    "status"?: {};
}
export declare class Workflow extends Model<IWorkflow> implements IWorkflow {
    "apiVersion": IWorkflow["apiVersion"];
    "kind": IWorkflow["kind"];
    "metadata": IWorkflow["metadata"];
    "spec": IWorkflow["spec"];
    "status"?: IWorkflow["status"];
    static apiVersion: IWorkflow["apiVersion"];
    static kind: IWorkflow["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IWorkflow>;
    constructor(data?: ModelData<IWorkflow>);
}
