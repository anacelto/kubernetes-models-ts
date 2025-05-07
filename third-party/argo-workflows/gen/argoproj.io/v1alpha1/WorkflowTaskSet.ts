import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ArgoprojIoV1alpha1WorkflowTaskSet";

export interface IWorkflowTaskSet {
  "apiVersion": "argoproj.io/v1alpha1";
  "kind": "WorkflowTaskSet";
  "metadata": IObjectMeta;
  "spec": {
  };
  "status"?: {
  };
}

export class WorkflowTaskSet extends Model<IWorkflowTaskSet> implements IWorkflowTaskSet {
  "apiVersion": IWorkflowTaskSet["apiVersion"];
  "kind": IWorkflowTaskSet["kind"];
  "metadata": IWorkflowTaskSet["metadata"];
  "spec": IWorkflowTaskSet["spec"];
  "status"?: IWorkflowTaskSet["status"];

static apiVersion: IWorkflowTaskSet["apiVersion"] = "argoproj.io/v1alpha1";
static kind: IWorkflowTaskSet["kind"] = "WorkflowTaskSet";
static is = createTypeMetaGuard<IWorkflowTaskSet>(WorkflowTaskSet);

constructor(data?: ModelData<IWorkflowTaskSet>) {
  super();

  this.setDefinedProps({
    apiVersion: WorkflowTaskSet.apiVersion,
    kind: WorkflowTaskSet.kind,
    ...data
  } as IWorkflowTaskSet);
}
}


setValidateFunc(WorkflowTaskSet, validate as ValidateFunc<IWorkflowTaskSet>);
