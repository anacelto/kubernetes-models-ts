import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
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
export declare class ApmServer extends Model<IApmServer> implements IApmServer {
    "apiVersion": IApmServer["apiVersion"];
    "kind": IApmServer["kind"];
    "metadata"?: IApmServer["metadata"];
    static apiVersion: IApmServer["apiVersion"];
    static kind: IApmServer["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IApmServer>;
    constructor(data?: ModelData<IApmServer>);
}
