import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IClusterImportConfig {
    "spec": {
        "clusteripranges"?: Array<{
            "cidrs"?: Array<string>;
            "cluster"?: string;
        }>;
        "networks"?: Array<string>;
        "zones"?: Array<string>;
    };
    "apiVersion": "net.gke.io/v1";
    "kind": "ClusterImportConfig";
    "metadata"?: IObjectMeta;
}
export declare class ClusterImportConfig extends Model<IClusterImportConfig> implements IClusterImportConfig {
    "spec": IClusterImportConfig["spec"];
    "apiVersion": IClusterImportConfig["apiVersion"];
    "kind": IClusterImportConfig["kind"];
    "metadata"?: IClusterImportConfig["metadata"];
    static apiVersion: IClusterImportConfig["apiVersion"];
    static kind: IClusterImportConfig["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IClusterImportConfig>;
    constructor(data?: ModelData<IClusterImportConfig>);
}
