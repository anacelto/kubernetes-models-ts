import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IClusterWorkflowTemplate {
    "apiVersion": "argoproj.io/v1alpha1";
    "kind": "ClusterWorkflowTemplate";
    "metadata": IObjectMeta;
    "spec": {};
}
export declare class ClusterWorkflowTemplate extends Model<IClusterWorkflowTemplate> implements IClusterWorkflowTemplate {
    "apiVersion": IClusterWorkflowTemplate["apiVersion"];
    "kind": IClusterWorkflowTemplate["kind"];
    "metadata": IClusterWorkflowTemplate["metadata"];
    "spec": IClusterWorkflowTemplate["spec"];
    static apiVersion: IClusterWorkflowTemplate["apiVersion"];
    static kind: IClusterWorkflowTemplate["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IClusterWorkflowTemplate>;
    constructor(data?: ModelData<IClusterWorkflowTemplate>);
}
