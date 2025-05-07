import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IServiceExport {
    "spec"?: {
        "superclusterIP"?: string;
    };
    "status"?: {
        "conditions"?: Array<{
            "lastTransitionTime"?: string;
            "message"?: string;
            "reason"?: string;
            "status"?: string;
            "type"?: string;
        }>;
        "superclusterIP"?: string;
    };
    "apiVersion": "net.gke.io/v1alpha1";
    "kind": "ServiceExport";
    "metadata"?: IObjectMeta;
}
export declare class ServiceExport extends Model<IServiceExport> implements IServiceExport {
    "spec"?: IServiceExport["spec"];
    "status"?: IServiceExport["status"];
    "apiVersion": IServiceExport["apiVersion"];
    "kind": IServiceExport["kind"];
    "metadata"?: IServiceExport["metadata"];
    static apiVersion: IServiceExport["apiVersion"];
    static kind: IServiceExport["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IServiceExport>;
    constructor(data?: ModelData<IServiceExport>);
}
