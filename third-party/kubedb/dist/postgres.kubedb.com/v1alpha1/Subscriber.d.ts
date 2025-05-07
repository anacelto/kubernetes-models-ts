import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface ISubscriber {
    "apiVersion": "postgres.kubedb.com/v1alpha1";
    "kind": "Subscriber";
    "metadata"?: IObjectMeta;
    "spec"?: {
        "databaseName": string;
        "deletionPolicy"?: "Delete" | "Retain";
        "disable"?: boolean;
        "name": string;
        "parameters"?: {
            "binary"?: boolean;
            "connect"?: boolean;
            "copyData"?: boolean;
            "createSlot"?: boolean;
            "enabled"?: boolean;
            "slotName"?: string;
            "streaming"?: boolean;
            "synchronousCommit"?: string;
            "tableCreationPolicy"?: string;
        };
        "publisher": {
            "external"?: {
                "databaseName": string;
                "publications": Array<string>;
                "serverRef": {
                    "name": string;
                    "namespace"?: string;
                };
            };
            "managed"?: {
                "namespace"?: string;
                "refs": Array<{
                    "name"?: string;
                }>;
            };
        };
        "serverRef": {
            "name"?: string;
        };
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
    };
}
export declare class Subscriber extends Model<ISubscriber> implements ISubscriber {
    "apiVersion": ISubscriber["apiVersion"];
    "kind": ISubscriber["kind"];
    "metadata"?: ISubscriber["metadata"];
    "spec"?: ISubscriber["spec"];
    "status"?: ISubscriber["status"];
    static apiVersion: ISubscriber["apiVersion"];
    static kind: ISubscriber["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ISubscriber>;
    constructor(data?: ModelData<ISubscriber>);
}
