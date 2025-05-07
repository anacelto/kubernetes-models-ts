import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IUpdateInfo {
    "spec"?: {
        "Type"?: string;
        "instanceGroupUrl"?: string;
        "surgeNode"?: string;
        "targetNode"?: string;
        "validUntil"?: string;
    };
    "apiVersion": "nodemanagement.gke.io/v1alpha1";
    "kind": "UpdateInfo";
    "metadata"?: IObjectMeta;
}
export declare class UpdateInfo extends Model<IUpdateInfo> implements IUpdateInfo {
    "spec"?: IUpdateInfo["spec"];
    "apiVersion": IUpdateInfo["apiVersion"];
    "kind": IUpdateInfo["kind"];
    "metadata"?: IUpdateInfo["metadata"];
    static apiVersion: IUpdateInfo["apiVersion"];
    static kind: IUpdateInfo["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IUpdateInfo>;
    constructor(data?: ModelData<IUpdateInfo>);
}
