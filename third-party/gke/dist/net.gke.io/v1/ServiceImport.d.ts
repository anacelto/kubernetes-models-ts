import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IServiceImport {
    "spec"?: {
        "ips"?: Array<string>;
        "ports": Array<{
            "appProtocol"?: string;
            "name"?: string;
            "port": number;
            "protocol"?: string;
        }>;
        "sessionAffinity"?: string;
        "sessionAffinityConfig"?: {
            "clientIP"?: {
                "timeoutSeconds"?: number;
            };
        };
        "type": string;
    };
    "status"?: {
        "clusters"?: Array<{
            "cluster": string;
        }>;
    };
    "apiVersion": "net.gke.io/v1";
    "kind": "ServiceImport";
    "metadata"?: IObjectMeta;
}
export declare class ServiceImport extends Model<IServiceImport> implements IServiceImport {
    "spec"?: IServiceImport["spec"];
    "status"?: IServiceImport["status"];
    "apiVersion": IServiceImport["apiVersion"];
    "kind": IServiceImport["kind"];
    "metadata"?: IServiceImport["metadata"];
    static apiVersion: IServiceImport["apiVersion"];
    static kind: IServiceImport["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IServiceImport>;
    constructor(data?: ModelData<IServiceImport>);
}
