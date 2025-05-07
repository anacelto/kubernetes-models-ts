import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IProxySQLVersion {
    "apiVersion": "catalog.kubedb.com/v1alpha1";
    "kind": "ProxySQLVersion";
    "metadata"?: IObjectMeta;
    "spec"?: {
        "deprecated"?: boolean;
        "exporter"?: {
            "image": string;
        };
        "podSecurityPolicies": {
            "databasePolicyName": string;
        };
        "proxysql": {
            "image": string;
        };
        "updateConstraints"?: {
            "allowlist"?: Array<string>;
            "denylist"?: Array<string>;
        };
        "version": string;
    };
}
export declare class ProxySQLVersion extends Model<IProxySQLVersion> implements IProxySQLVersion {
    "apiVersion": IProxySQLVersion["apiVersion"];
    "kind": IProxySQLVersion["kind"];
    "metadata"?: IProxySQLVersion["metadata"];
    "spec"?: IProxySQLVersion["spec"];
    static apiVersion: IProxySQLVersion["apiVersion"];
    static kind: IProxySQLVersion["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IProxySQLVersion>;
    constructor(data?: ModelData<IProxySQLVersion>);
}
