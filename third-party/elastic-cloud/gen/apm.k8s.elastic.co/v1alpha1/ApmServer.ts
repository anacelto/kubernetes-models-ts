import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ApmK8sElasticCoV1alpha1ApmServer";

/**
 * to not break compatibility when upgrading from previous versions of the CRD
 */
export interface IApmServer {
  "apiVersion": "apm.k8s.elastic.co/v1alpha1";
  "kind": "ApmServer";
  "metadata"?: IObjectMeta;
}

/**
 * to not break compatibility when upgrading from previous versions of the CRD
 */
export class ApmServer extends Model<IApmServer> implements IApmServer {
  "apiVersion": IApmServer["apiVersion"];
  "kind": IApmServer["kind"];
  "metadata"?: IApmServer["metadata"];

static apiVersion: IApmServer["apiVersion"] = "apm.k8s.elastic.co/v1alpha1";
static kind: IApmServer["kind"] = "ApmServer";
static is = createTypeMetaGuard<IApmServer>(ApmServer);

constructor(data?: ModelData<IApmServer>) {
  super();

  this.setDefinedProps({
    apiVersion: ApmServer.apiVersion,
    kind: ApmServer.kind,
    ...data
  } as IApmServer);
}
}


setValidateFunc(ApmServer, validate as ValidateFunc<IApmServer>);
