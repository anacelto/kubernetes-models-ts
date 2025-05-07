import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ArgoprojIoV1alpha1WorkflowArtifactGCTask";

export interface IWorkflowArtifactGCTask {
  "apiVersion": "argoproj.io/v1alpha1";
  "kind": "WorkflowArtifactGCTask";
  "metadata": IObjectMeta;
  "spec": {
  };
  "status"?: {
  };
}

export class WorkflowArtifactGCTask extends Model<IWorkflowArtifactGCTask> implements IWorkflowArtifactGCTask {
  "apiVersion": IWorkflowArtifactGCTask["apiVersion"];
  "kind": IWorkflowArtifactGCTask["kind"];
  "metadata": IWorkflowArtifactGCTask["metadata"];
  "spec": IWorkflowArtifactGCTask["spec"];
  "status"?: IWorkflowArtifactGCTask["status"];

static apiVersion: IWorkflowArtifactGCTask["apiVersion"] = "argoproj.io/v1alpha1";
static kind: IWorkflowArtifactGCTask["kind"] = "WorkflowArtifactGCTask";
static is = createTypeMetaGuard<IWorkflowArtifactGCTask>(WorkflowArtifactGCTask);

constructor(data?: ModelData<IWorkflowArtifactGCTask>) {
  super();

  this.setDefinedProps({
    apiVersion: WorkflowArtifactGCTask.apiVersion,
    kind: WorkflowArtifactGCTask.kind,
    ...data
  } as IWorkflowArtifactGCTask);
}
}


setValidateFunc(WorkflowArtifactGCTask, validate as ValidateFunc<IWorkflowArtifactGCTask>);
