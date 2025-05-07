import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * Entitlement is a CR representing that Anthos software may be run on a particular cluster. This is written to Anthos-enabled clusters by a Hub controller. This is read by in-cluster Anthos services performing Entitlement checks.
 */
export interface IEntitlement {
    "apiVersion": "anthos.gke.io/v1alpha1";
    "kind": "Entitlement";
    "metadata": IObjectMeta;
    "spec"?: {
        /**
         * ExpirationTimestamp is when this Entitlement expires. An RFC3339 date/time.
         */
        "expirationTimestamp"?: string;
    };
}
/**
 * Entitlement is a CR representing that Anthos software may be run on a particular cluster. This is written to Anthos-enabled clusters by a Hub controller. This is read by in-cluster Anthos services performing Entitlement checks.
 */
export declare class Entitlement extends Model<IEntitlement> implements IEntitlement {
    "apiVersion": IEntitlement["apiVersion"];
    "kind": IEntitlement["kind"];
    "metadata": IEntitlement["metadata"];
    "spec"?: IEntitlement["spec"];
    static apiVersion: IEntitlement["apiVersion"];
    static kind: IEntitlement["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IEntitlement>;
    constructor(data?: ModelData<IEntitlement>);
}
