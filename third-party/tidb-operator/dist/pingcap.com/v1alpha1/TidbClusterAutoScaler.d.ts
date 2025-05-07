import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface ITidbClusterAutoScaler {
    "apiVersion": "pingcap.com/v1alpha1";
    "kind": "TidbClusterAutoScaler";
    "metadata": IObjectMeta;
    "spec": {
        "cluster": {
            "clusterDomain"?: string;
            "name": string;
            "namespace"?: string;
        };
        "tidb"?: {
            "external"?: {
                "endpoint"?: {
                    "host": string;
                    "path": string;
                    "port": number;
                    "tlsSecret"?: {
                        "name": string;
                        "namespace": string;
                    };
                };
                "maxReplicas": number;
            };
            "resources"?: {
                [key: string]: {
                    "count"?: number;
                    "cpu": number | string;
                    "memory": number | string;
                    "storage"?: number | string;
                };
            };
            "rules"?: {
                [key: string]: {
                    "max_threshold": number;
                    "min_threshold"?: number;
                    "resource_types"?: Array<string>;
                };
            };
            "scaleInIntervalSeconds"?: number;
            "scaleOutIntervalSeconds"?: number;
        };
        "tikv"?: {
            "external"?: {
                "endpoint"?: {
                    "host": string;
                    "path": string;
                    "port": number;
                    "tlsSecret"?: {
                        "name": string;
                        "namespace": string;
                    };
                };
                "maxReplicas": number;
            };
            "resources"?: {
                [key: string]: {
                    "count"?: number;
                    "cpu": number | string;
                    "memory": number | string;
                    "storage"?: number | string;
                };
            };
            "rules"?: {
                [key: string]: {
                    "max_threshold": number;
                    "min_threshold"?: number;
                    "resource_types"?: Array<string>;
                };
            };
            "scaleInIntervalSeconds"?: number;
            "scaleOutIntervalSeconds"?: number;
        };
    };
    "status"?: {
        "tidb"?: {
            [key: string]: {
                "lastAutoScalingTimestamp"?: string;
            };
        };
        "tikv"?: {
            [key: string]: {
                "lastAutoScalingTimestamp"?: string;
            };
        };
    };
}
export declare class TidbClusterAutoScaler extends Model<ITidbClusterAutoScaler> implements ITidbClusterAutoScaler {
    "apiVersion": ITidbClusterAutoScaler["apiVersion"];
    "kind": ITidbClusterAutoScaler["kind"];
    "metadata": ITidbClusterAutoScaler["metadata"];
    "spec": ITidbClusterAutoScaler["spec"];
    "status"?: ITidbClusterAutoScaler["status"];
    static apiVersion: ITidbClusterAutoScaler["apiVersion"];
    static kind: ITidbClusterAutoScaler["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ITidbClusterAutoScaler>;
    constructor(data?: ModelData<ITidbClusterAutoScaler>);
}
