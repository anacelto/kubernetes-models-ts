import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IMySQLVersion {
    "apiVersion": "catalog.kubedb.com/v1alpha1";
    "kind": "MySQLVersion";
    "metadata"?: IObjectMeta;
    "spec"?: {
        "coordinator"?: {
            "image": string;
        };
        "db": {
            "image": string;
        };
        "deprecated"?: boolean;
        "distribution"?: "Official" | "Oracle" | "Percona" | "KubeDB" | "MySQL";
        "exporter": {
            "image": string;
        };
        "initContainer": {
            "image": string;
        };
        "podSecurityPolicies": {
            "databasePolicyName": string;
        };
        "replicationModeDetector"?: {
            "image": string;
        };
        "router"?: {
            "image": string;
        };
        "routerInitContainer"?: {
            "image": string;
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
            "allowlist"?: {
                "groupReplication"?: Array<string>;
                "standalone"?: Array<string>;
            };
            "denylist"?: {
                "groupReplication"?: Array<string>;
                "standalone"?: Array<string>;
            };
        };
        "version": string;
    };
}
export declare class MySQLVersion extends Model<IMySQLVersion> implements IMySQLVersion {
    "apiVersion": IMySQLVersion["apiVersion"];
    "kind": IMySQLVersion["kind"];
    "metadata"?: IMySQLVersion["metadata"];
    "spec"?: IMySQLVersion["spec"];
    static apiVersion: IMySQLVersion["apiVersion"];
    static kind: IMySQLVersion["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IMySQLVersion>;
    constructor(data?: ModelData<IMySQLVersion>);
}
