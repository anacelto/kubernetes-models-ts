import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ArgoprojIoV1alpha1CronWorkflow";

export interface ICronWorkflow {
  "apiVersion": "argoproj.io/v1alpha1";
  "kind": "CronWorkflow";
  "metadata": IObjectMeta;
  "spec": {
  };
  "status"?: {
  };
}

export class CronWorkflow extends Model<ICronWorkflow> implements ICronWorkflow {
  "apiVersion": ICronWorkflow["apiVersion"];
  "kind": ICronWorkflow["kind"];
  "metadata": ICronWorkflow["metadata"];
  "spec": ICronWorkflow["spec"];
  "status"?: ICronWorkflow["status"];

static apiVersion: ICronWorkflow["apiVersion"] = "argoproj.io/v1alpha1";
static kind: ICronWorkflow["kind"] = "CronWorkflow";
static is = createTypeMetaGuard<ICronWorkflow>(CronWorkflow);

constructor(data?: ModelData<ICronWorkflow>) {
  super();

  this.setDefinedProps({
    apiVersion: CronWorkflow.apiVersion,
    kind: CronWorkflow.kind,
    ...data
  } as ICronWorkflow);
}
}


setValidateFunc(CronWorkflow, validate as ValidateFunc<ICronWorkflow>);
