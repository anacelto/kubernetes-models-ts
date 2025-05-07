import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IKafkaVersion {
    "apiVersion": "catalog.kubedb.com/v1alpha1";
    "kind": "KafkaVersion";
    "metadata"?: IObjectMeta;
    "spec"?: {
        "db": {
            "image": string;
        };
        "deprecated"?: boolean;
        "podSecurityPolicies"?: {
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
export declare class KafkaVersion extends Model<IKafkaVersion> implements IKafkaVersion {
    "apiVersion": IKafkaVersion["apiVersion"];
    "kind": IKafkaVersion["kind"];
    "metadata"?: IKafkaVersion["metadata"];
    "spec"?: IKafkaVersion["spec"];
    static apiVersion: IKafkaVersion["apiVersion"];
    static kind: IKafkaVersion["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IKafkaVersion>;
    constructor(data?: ModelData<IKafkaVersion>);
}
