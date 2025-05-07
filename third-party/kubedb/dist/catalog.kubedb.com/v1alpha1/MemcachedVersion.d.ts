import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IMemcachedVersion {
    "apiVersion": "catalog.kubedb.com/v1alpha1";
    "kind": "MemcachedVersion";
    "metadata"?: IObjectMeta;
    "spec"?: {
        "db": {
            "image": string;
        };
        "deprecated"?: boolean;
        "exporter": {
            "image": string;
        };
        "podSecurityPolicies": {
            "databasePolicyName": string;
        };
        "version": string;
    };
}
export declare class MemcachedVersion extends Model<IMemcachedVersion> implements IMemcachedVersion {
    "apiVersion": IMemcachedVersion["apiVersion"];
    "kind": IMemcachedVersion["kind"];
    "metadata"?: IMemcachedVersion["metadata"];
    "spec"?: IMemcachedVersion["spec"];
    static apiVersion: IMemcachedVersion["apiVersion"];
    static kind: IMemcachedVersion["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IMemcachedVersion>;
    constructor(data?: ModelData<IMemcachedVersion>);
}
