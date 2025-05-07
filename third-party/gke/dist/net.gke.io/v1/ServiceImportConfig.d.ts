import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IServiceImportConfig {
    "spec": {
        "clusters"?: Array<{
            "capacityScaler"?: string;
            "maxEatePerEndpoint"?: string;
            "maxrate"?: string;
            "membershipName"?: string;
            "neg"?: string;
        }>;
        "negs"?: Array<string>;
    };
    "apiVersion": "net.gke.io/v1";
    "kind": "ServiceImportConfig";
    "metadata"?: IObjectMeta;
}
export declare class ServiceImportConfig extends Model<IServiceImportConfig> implements IServiceImportConfig {
    "spec": IServiceImportConfig["spec"];
    "apiVersion": IServiceImportConfig["apiVersion"];
    "kind": IServiceImportConfig["kind"];
    "metadata"?: IServiceImportConfig["metadata"];
    static apiVersion: IServiceImportConfig["apiVersion"];
    static kind: IServiceImportConfig["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IServiceImportConfig>;
    constructor(data?: ModelData<IServiceImportConfig>);
}
