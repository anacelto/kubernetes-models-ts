import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IPublisher {
    "apiVersion": "postgres.kubedb.com/v1alpha1";
    "kind": "Publisher";
    "metadata"?: IObjectMeta;
    "spec"?: {
        "allowedSubscribers"?: {
            "namespaces"?: {
                "from"?: "All" | "Selector" | "Same";
                "selector"?: {
                    "matchExpressions"?: Array<{
                        "key": string;
                        "operator": string;
                        "values"?: Array<string>;
                    }>;
                    "matchLabels"?: {
                        [key: string]: string;
                    };
                };
            };
            "selector"?: {
                "matchExpressions"?: Array<{
                    "key": string;
                    "operator": string;
                    "values"?: Array<string>;
                }>;
                "matchLabels"?: {
                    [key: string]: string;
                };
            };
        };
        "databaseName": string;
        "deletionPolicy"?: "Delete" | "Retain";
        "disable"?: boolean;
        "name": string;
        "parameters"?: {
            "operations"?: Array<"insert" | "update" | "delete" | "truncate">;
            "publishViaPartitionRoot"?: boolean;
        };
        "publishAllTables"?: boolean;
        "serverRef": {
            "name"?: string;
        };
        "tables"?: Array<string>;
    };
    "status"?: {
        "conditions"?: Array<{
            "lastTransitionTime": string;
            "message": string;
            "observedGeneration"?: number;
            "reason": string;
            "status": string;
            "type": string;
        }>;
        "observedGeneration"?: number;
        "phase"?: "Pending" | "InProgress" | "Current" | "Failed";
        "subscribers"?: Array<{
            "name": string;
            "namespace"?: string;
        }>;
    };
}
export declare class Publisher extends Model<IPublisher> implements IPublisher {
    "apiVersion": IPublisher["apiVersion"];
    "kind": IPublisher["kind"];
    "metadata"?: IPublisher["metadata"];
    "spec"?: IPublisher["spec"];
    "status"?: IPublisher["status"];
    static apiVersion: IPublisher["apiVersion"];
    static kind: IPublisher["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IPublisher>;
    constructor(data?: ModelData<IPublisher>);
}
