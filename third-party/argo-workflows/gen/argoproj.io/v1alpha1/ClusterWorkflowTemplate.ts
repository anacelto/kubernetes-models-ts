import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ArgoprojIoV1alpha1ClusterWorkflowTemplate";

export interface IClusterWorkflowTemplate {
  "apiVersion": "argoproj.io/v1alpha1";
  "kind": "ClusterWorkflowTemplate";
  "metadata": IObjectMeta;
  "spec": {
  };
}

export class ClusterWorkflowTemplate extends Model<IClusterWorkflowTemplate> implements IClusterWorkflowTemplate {
  "apiVersion": IClusterWorkflowTemplate["apiVersion"];
  "kind": IClusterWorkflowTemplate["kind"];
  "metadata": IClusterWorkflowTemplate["metadata"];
  "spec": IClusterWorkflowTemplate["spec"];

static apiVersion: IClusterWorkflowTemplate["apiVersion"] = "argoproj.io/v1alpha1";
static kind: IClusterWorkflowTemplate["kind"] = "ClusterWorkflowTemplate";
static is = createTypeMetaGuard<IClusterWorkflowTemplate>(ClusterWorkflowTemplate);

constructor(data?: ModelData<IClusterWorkflowTemplate>) {
  super();

  this.setDefinedProps({
    apiVersion: ClusterWorkflowTemplate.apiVersion,
    kind: ClusterWorkflowTemplate.kind,
    ...data
  } as IClusterWorkflowTemplate);
}
}


setValidateFunc(ClusterWorkflowTemplate, validate as ValidateFunc<IClusterWorkflowTemplate>);
