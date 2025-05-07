import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IRedisVersion {
    "apiVersion": "catalog.kubedb.com/v1alpha1";
    "kind": "RedisVersion";
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
        "initContainer"?: {
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
export declare class RedisVersion extends Model<IRedisVersion> implements IRedisVersion {
    "apiVersion": IRedisVersion["apiVersion"];
    "kind": IRedisVersion["kind"];
    "metadata"?: IRedisVersion["metadata"];
    "spec"?: IRedisVersion["spec"];
    static apiVersion: IRedisVersion["apiVersion"];
    static kind: IRedisVersion["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IRedisVersion>;
    constructor(data?: ModelData<IRedisVersion>);
}
