import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IMembership {
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Name of the Identity Provider corresponding to this Membership. This is useful for workloads running in this cluster to use Workload Identity.
         */
        "identity_provider"?: string;
        "owner"?: {
            /**
             * Fully qualified name of the GCP resource that owns the cluster. Should be immutable.
             */
            "id"?: string;
        };
        /**
         * Name of the Workload Identity Pool that this Membership is part of. This will be of the form proj-id.svc.id.goog. This is useful for workloads running in this cluster to use Workload Identity.
         */
        "workload_identity_pool"?: string;
    };
    "apiVersion": "hub.gke.io/v1";
    "kind": "Membership";
}
export declare class Membership extends Model<IMembership> implements IMembership {
    "metadata"?: IMembership["metadata"];
    "spec": IMembership["spec"];
    "apiVersion": IMembership["apiVersion"];
    "kind": IMembership["kind"];
    static apiVersion: IMembership["apiVersion"];
    static kind: IMembership["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IMembership>;
    constructor(data?: ModelData<IMembership>);
}
