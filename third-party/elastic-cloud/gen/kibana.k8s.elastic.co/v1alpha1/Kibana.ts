import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/KibanaK8sElasticCoV1alpha1Kibana";

/**
 * to not break compatibility when upgrading from previous versions of the CRD
 */
export interface IKibana {
  "apiVersion": "kibana.k8s.elastic.co/v1alpha1";
  "kind": "Kibana";
  "metadata"?: IObjectMeta;
}

/**
 * to not break compatibility when upgrading from previous versions of the CRD
 */
export class Kibana extends Model<IKibana> implements IKibana {
  "apiVersion": IKibana["apiVersion"];
  "kind": IKibana["kind"];
  "metadata"?: IKibana["metadata"];

static apiVersion: IKibana["apiVersion"] = "kibana.k8s.elastic.co/v1alpha1";
static kind: IKibana["kind"] = "Kibana";
static is = createTypeMetaGuard<IKibana>(Kibana);

constructor(data?: ModelData<IKibana>) {
  super();

  this.setDefinedProps({
    apiVersion: Kibana.apiVersion,
    kind: Kibana.kind,
    ...data
  } as IKibana);
}
}


setValidateFunc(Kibana, validate as ValidateFunc<IKibana>);
