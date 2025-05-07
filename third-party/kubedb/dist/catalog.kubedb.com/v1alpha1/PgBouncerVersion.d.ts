import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IPgBouncerVersion {
    "apiVersion": "catalog.kubedb.com/v1alpha1";
    "kind": "PgBouncerVersion";
    "metadata"?: IObjectMeta;
    "spec"?: {
        "deprecated"?: boolean;
        "exporter": {
            "image": string;
        };
        "pgBouncer": {
            "image": string;
        };
        "securityContext"?: {
            "runAsAnyNonRoot"?: boolean;
            "runAsUser"?: number;
        };
        "updateConstraints"?: {
            "allowlist"?: Array<string>;
            "denylist"?: Array<string>;
        };
        "version": string;
    };
}
export declare class PgBouncerVersion extends Model<IPgBouncerVersion> implements IPgBouncerVersion {
    "apiVersion": IPgBouncerVersion["apiVersion"];
    "kind": IPgBouncerVersion["kind"];
    "metadata"?: IPgBouncerVersion["metadata"];
    "spec"?: IPgBouncerVersion["spec"];
    static apiVersion: IPgBouncerVersion["apiVersion"];
    static kind: IPgBouncerVersion["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IPgBouncerVersion>;
    constructor(data?: ModelData<IPgBouncerVersion>);
}
