import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ArgoprojIoV1alpha1Workflow";

export interface IWorkflow {
  "apiVersion": "argoproj.io/v1alpha1";
  "kind": "Workflow";
  "metadata": IObjectMeta;
  "spec": {
  };
  "status"?: {
  };
}

export class Workflow extends Model<IWorkflow> implements IWorkflow {
  "apiVersion": IWorkflow["apiVersion"];
  "kind": IWorkflow["kind"];
  "metadata": IWorkflow["metadata"];
  "spec": IWorkflow["spec"];
  "status"?: IWorkflow["status"];

static apiVersion: IWorkflow["apiVersion"] = "argoproj.io/v1alpha1";
static kind: IWorkflow["kind"] = "Workflow";
static is = createTypeMetaGuard<IWorkflow>(Workflow);

constructor(data?: ModelData<IWorkflow>) {
  super();

  this.setDefinedProps({
    apiVersion: Workflow.apiVersion,
    kind: Workflow.kind,
    ...data
  } as IWorkflow);
}
}


setValidateFunc(Workflow, validate as ValidateFunc<IWorkflow>);
