import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IPerconaXtraDBVersion {
    "apiVersion": "catalog.kubedb.com/v1alpha1";
    "kind": "PerconaXtraDBVersion";
    "metadata"?: IObjectMeta;
    "spec"?: {
        "coordinator"?: {
            "image": string;
        };
        "db": {
            "image": string;
        };
        "deprecated"?: boolean;
        "exporter": {
            "image": string;
        };
        "initContainer": {
            "image": string;
        };
        "podSecurityPolicies": {
            "databasePolicyName": string;
        };
        "stash"?: {
            "addon"?: {
                "backupTask": {
                    "name": string;
                    "params"?: Array<{
                        "name": string;
                        "value": string;
                    }>;
                };
                "restoreTask": {
                    "name": string;
                    "params"?: Array<{
                        "name": string;
                        "value": string;
                    }>;
                };
            };
        };
        "updateConstraints"?: {
            "allowlist"?: Array<string>;
            "denylist"?: Array<string>;
        };
        "version": string;
    };
}
export declare class PerconaXtraDBVersion extends Model<IPerconaXtraDBVersion> implements IPerconaXtraDBVersion {
    "apiVersion": IPerconaXtraDBVersion["apiVersion"];
    "kind": IPerconaXtraDBVersion["kind"];
    "metadata"?: IPerconaXtraDBVersion["metadata"];
    "spec"?: IPerconaXtraDBVersion["spec"];
    static apiVersion: IPerconaXtraDBVersion["apiVersion"];
    static kind: IPerconaXtraDBVersion["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IPerconaXtraDBVersion>;
    constructor(data?: ModelData<IPerconaXtraDBVersion>);
}
