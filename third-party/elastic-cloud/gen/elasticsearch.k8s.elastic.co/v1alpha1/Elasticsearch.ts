import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ElasticsearchK8sElasticCoV1alpha1Elasticsearch";

/**
 * to not break compatibility when upgrading from previous versions of the CRD
 */
export interface IElasticsearch {
  "apiVersion": "elasticsearch.k8s.elastic.co/v1alpha1";
  "kind": "Elasticsearch";
  "metadata"?: IObjectMeta;
}

/**
 * to not break compatibility when upgrading from previous versions of the CRD
 */
export class Elasticsearch extends Model<IElasticsearch> implements IElasticsearch {
  "apiVersion": IElasticsearch["apiVersion"];
  "kind": IElasticsearch["kind"];
  "metadata"?: IElasticsearch["metadata"];

static apiVersion: IElasticsearch["apiVersion"] = "elasticsearch.k8s.elastic.co/v1alpha1";
static kind: IElasticsearch["kind"] = "Elasticsearch";
static is = createTypeMetaGuard<IElasticsearch>(Elasticsearch);

constructor(data?: ModelData<IElasticsearch>) {
  super();

  this.setDefinedProps({
    apiVersion: Elasticsearch.apiVersion,
    kind: Elasticsearch.kind,
    ...data
  } as IElasticsearch);
}
}


setValidateFunc(Elasticsearch, validate as ValidateFunc<IElasticsearch>);
