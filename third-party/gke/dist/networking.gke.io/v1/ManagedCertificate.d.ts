import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IManagedCertificate {
    "spec"?: {
        "domains"?: Array<string>;
    };
    "status"?: {
        "certificateName"?: string;
        "certificateStatus"?: string;
        "domainStatus"?: Array<{
            "domain": string;
            "status": string;
        }>;
        "expireTime"?: string;
    };
    "apiVersion": "networking.gke.io/v1";
    "kind": "ManagedCertificate";
    "metadata"?: IObjectMeta;
}
export declare class ManagedCertificate extends Model<IManagedCertificate> implements IManagedCertificate {
    "spec"?: IManagedCertificate["spec"];
    "status"?: IManagedCertificate["status"];
    "apiVersion": IManagedCertificate["apiVersion"];
    "kind": IManagedCertificate["kind"];
    "metadata"?: IManagedCertificate["metadata"];
    static apiVersion: IManagedCertificate["apiVersion"];
    static kind: IManagedCertificate["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IManagedCertificate>;
    constructor(data?: ModelData<IManagedCertificate>);
}
