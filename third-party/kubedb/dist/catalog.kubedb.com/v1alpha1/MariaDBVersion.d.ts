import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IMariaDBVersion {
    "apiVersion": "catalog.kubedb.com/v1alpha1";
    "kind": "MariaDBVersion";
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
export declare class MariaDBVersion extends Model<IMariaDBVersion> implements IMariaDBVersion {
    "apiVersion": IMariaDBVersion["apiVersion"];
    "kind": IMariaDBVersion["kind"];
    "metadata"?: IMariaDBVersion["metadata"];
    "spec"?: IMariaDBVersion["spec"];
    static apiVersion: IMariaDBVersion["apiVersion"];
    static kind: IMariaDBVersion["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IMariaDBVersion>;
    constructor(data?: ModelData<IMariaDBVersion>);
}
