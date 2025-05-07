import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IMembership {
    "apiVersion": "hub.gke.io/v1beta1";
    "kind": "Membership";
    "metadata"?: IObjectMeta;
}
export declare class Membership extends Model<IMembership> implements IMembership {
    "apiVersion": IMembership["apiVersion"];
    "kind": IMembership["kind"];
    "metadata"?: IMembership["metadata"];
    static apiVersion: IMembership["apiVersion"];
    static kind: IMembership["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IMembership>;
    constructor(data?: ModelData<IMembership>);
}
