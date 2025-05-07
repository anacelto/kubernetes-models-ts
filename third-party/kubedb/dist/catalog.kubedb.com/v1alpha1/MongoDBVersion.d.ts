import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IMongoDBVersion {
    "apiVersion": "catalog.kubedb.com/v1alpha1";
    "kind": "MongoDBVersion";
    "metadata"?: IObjectMeta;
    "spec"?: {
        "db": {
            "image": string;
        };
        "deprecated"?: boolean;
        "distribution"?: "Official" | "Percona" | "KubeDB" | "MongoDB";
        "exporter": {
            "image": string;
        };
        "initContainer": {
            "image": string;
        };
        "podSecurityPolicies": {
            "databasePolicyName": string;
        };
        "replicationModeDetector": {
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
            "allowlist"?: Array<string>;
            "denylist"?: Array<string>;
        };
        "version": string;
    };
}
export declare class MongoDBVersion extends Model<IMongoDBVersion> implements IMongoDBVersion {
    "apiVersion": IMongoDBVersion["apiVersion"];
    "kind": IMongoDBVersion["kind"];
    "metadata"?: IMongoDBVersion["metadata"];
    "spec"?: IMongoDBVersion["spec"];
    static apiVersion: IMongoDBVersion["apiVersion"];
    static kind: IMongoDBVersion["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IMongoDBVersion>;
    constructor(data?: ModelData<IMongoDBVersion>);
}
