import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/InstallIstioIoV1alpha1IstioOperator";

export interface IIstioOperator {
  "apiVersion": "install.istio.io/v1alpha1";
  "kind": "IstioOperator";
  "metadata"?: IObjectMeta;
}

export class IstioOperator extends Model<IIstioOperator> implements IIstioOperator {
  "apiVersion": IIstioOperator["apiVersion"];
  "kind": IIstioOperator["kind"];
  "metadata"?: IIstioOperator["metadata"];

static apiVersion: IIstioOperator["apiVersion"] = "install.istio.io/v1alpha1";
static kind: IIstioOperator["kind"] = "IstioOperator";
static is = createTypeMetaGuard<IIstioOperator>(IstioOperator);

constructor(data?: ModelData<IIstioOperator>) {
  super();

  this.setDefinedProps({
    apiVersion: IstioOperator.apiVersion,
    kind: IstioOperator.kind,
    ...data
  } as IIstioOperator);
}
}


setValidateFunc(IstioOperator, validate as ValidateFunc<IIstioOperator>);
