import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ArgoprojIoV1alpha1WorkflowTemplate";

export interface IWorkflowTemplate {
  "apiVersion": "argoproj.io/v1alpha1";
  "kind": "WorkflowTemplate";
  "metadata": IObjectMeta;
  "spec": {
  };
}

export class WorkflowTemplate extends Model<IWorkflowTemplate> implements IWorkflowTemplate {
  "apiVersion": IWorkflowTemplate["apiVersion"];
  "kind": IWorkflowTemplate["kind"];
  "metadata": IWorkflowTemplate["metadata"];
  "spec": IWorkflowTemplate["spec"];

static apiVersion: IWorkflowTemplate["apiVersion"] = "argoproj.io/v1alpha1";
static kind: IWorkflowTemplate["kind"] = "WorkflowTemplate";
static is = createTypeMetaGuard<IWorkflowTemplate>(WorkflowTemplate);

constructor(data?: ModelData<IWorkflowTemplate>) {
  super();

  this.setDefinedProps({
    apiVersion: WorkflowTemplate.apiVersion,
    kind: WorkflowTemplate.kind,
    ...data
  } as IWorkflowTemplate);
}
}


setValidateFunc(WorkflowTemplate, validate as ValidateFunc<IWorkflowTemplate>);
