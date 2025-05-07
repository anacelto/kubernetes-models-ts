import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
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
export declare class Kibana extends Model<IKibana> implements IKibana {
    "apiVersion": IKibana["apiVersion"];
    "kind": IKibana["kind"];
    "metadata"?: IKibana["metadata"];
    static apiVersion: IKibana["apiVersion"];
    static kind: IKibana["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IKibana>;
    constructor(data?: ModelData<IKibana>);
}
