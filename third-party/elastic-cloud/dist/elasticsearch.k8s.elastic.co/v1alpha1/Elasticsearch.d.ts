import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
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
export declare class Elasticsearch extends Model<IElasticsearch> implements IElasticsearch {
    "apiVersion": IElasticsearch["apiVersion"];
    "kind": IElasticsearch["kind"];
    "metadata"?: IElasticsearch["metadata"];
    static apiVersion: IElasticsearch["apiVersion"];
    static kind: IElasticsearch["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IElasticsearch>;
    constructor(data?: ModelData<IElasticsearch>);
}
