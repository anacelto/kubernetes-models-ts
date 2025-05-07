import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IPostgresVersion {
    "apiVersion": "catalog.kubedb.com/v1alpha1";
    "kind": "PostgresVersion";
    "metadata"?: IObjectMeta;
    "spec"?: {
        "coordinator"?: {
            "image": string;
        };
        "db": {
            "baseOS"?: string;
            "image": string;
        };
        "deprecated"?: boolean;
        "distribution"?: "Official" | "TimescaleDB" | "PostGIS" | "KubeDB" | "PostgreSQL";
        "exporter": {
            "image": string;
        };
        "initContainer"?: {
            "image": string;
        };
        "podSecurityPolicies": {
            "databasePolicyName": string;
        };
        "securityContext"?: {
            "runAsAnyNonRoot"?: boolean;
            "runAsUser"?: number;
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
export declare class PostgresVersion extends Model<IPostgresVersion> implements IPostgresVersion {
    "apiVersion": IPostgresVersion["apiVersion"];
    "kind": IPostgresVersion["kind"];
    "metadata"?: IPostgresVersion["metadata"];
    "spec"?: IPostgresVersion["spec"];
    static apiVersion: IPostgresVersion["apiVersion"];
    static kind: IPostgresVersion["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IPostgresVersion>;
    constructor(data?: ModelData<IPostgresVersion>);
}
