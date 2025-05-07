import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IElasticsearchVersion {
    "apiVersion": "catalog.kubedb.com/v1alpha1";
    "kind": "ElasticsearchVersion";
    "metadata"?: IObjectMeta;
    "spec"?: {
        "authPlugin": "OpenDistro" | "SearchGuard" | "X-Pack" | "OpenSearch";
        "dashboard"?: {
            "image": string;
        };
        "dashboardInitContainer"?: {
            "yqImage": string;
        };
        "db": {
            "image": string;
        };
        "deprecated"?: boolean;
        "distribution"?: "ElasticStack" | "OpenDistro" | "SearchGuard" | "OpenSearch" | "KubeDB";
        "exporter": {
            "image": string;
        };
        "initContainer": {
            "image": string;
            "yqImage": string;
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
export declare class ElasticsearchVersion extends Model<IElasticsearchVersion> implements IElasticsearchVersion {
    "apiVersion": IElasticsearchVersion["apiVersion"];
    "kind": IElasticsearchVersion["kind"];
    "metadata"?: IElasticsearchVersion["metadata"];
    "spec"?: IElasticsearchVersion["spec"];
    static apiVersion: IElasticsearchVersion["apiVersion"];
    static kind: IElasticsearchVersion["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IElasticsearchVersion>;
    constructor(data?: ModelData<IElasticsearchVersion>);
}
