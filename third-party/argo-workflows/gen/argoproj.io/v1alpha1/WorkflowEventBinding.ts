import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ArgoprojIoV1alpha1WorkflowEventBinding";

export interface IWorkflowEventBinding {
  "apiVersion": "argoproj.io/v1alpha1";
  "kind": "WorkflowEventBinding";
  "metadata": IObjectMeta;
  "spec": {
  };
}

export class WorkflowEventBinding extends Model<IWorkflowEventBinding> implements IWorkflowEventBinding {
  "apiVersion": IWorkflowEventBinding["apiVersion"];
  "kind": IWorkflowEventBinding["kind"];
  "metadata": IWorkflowEventBinding["metadata"];
  "spec": IWorkflowEventBinding["spec"];

static apiVersion: IWorkflowEventBinding["apiVersion"] = "argoproj.io/v1alpha1";
static kind: IWorkflowEventBinding["kind"] = "WorkflowEventBinding";
static is = createTypeMetaGuard<IWorkflowEventBinding>(WorkflowEventBinding);

constructor(data?: ModelData<IWorkflowEventBinding>) {
  super();

  this.setDefinedProps({
    apiVersion: WorkflowEventBinding.apiVersion,
    kind: WorkflowEventBinding.kind,
    ...data
  } as IWorkflowEventBinding);
}
}


setValidateFunc(WorkflowEventBinding, validate as ValidateFunc<IWorkflowEventBinding>);
