import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IEtcdVersion {
    "apiVersion": "catalog.kubedb.com/v1alpha1";
    "kind": "EtcdVersion";
    "metadata"?: IObjectMeta;
    "spec"?: {
        "db": {
            "image": string;
        };
        "deprecated"?: boolean;
        "exporter": {
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
        "version": string;
    };
}
export declare class EtcdVersion extends Model<IEtcdVersion> implements IEtcdVersion {
    "apiVersion": IEtcdVersion["apiVersion"];
    "kind": IEtcdVersion["kind"];
    "metadata"?: IEtcdVersion["metadata"];
    "spec"?: IEtcdVersion["spec"];
    static apiVersion: IEtcdVersion["apiVersion"];
    static kind: IEtcdVersion["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IEtcdVersion>;
    constructor(data?: ModelData<IEtcdVersion>);
}
