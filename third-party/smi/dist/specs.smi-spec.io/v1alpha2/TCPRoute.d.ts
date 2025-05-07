import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * TCPRoute is the Schema for the tcproutes API
 */
export interface ITCPRoute {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "specs.smi-spec.io/v1alpha2";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "TCPRoute";
    "metadata"?: IObjectMeta;
    /**
     * TCPRouteStatus defines the observed state of TCPRoute
     */
    "status"?: {};
}
/**
 * TCPRoute is the Schema for the tcproutes API
 */
export declare class TCPRoute extends Model<ITCPRoute> implements ITCPRoute {
    "apiVersion": ITCPRoute["apiVersion"];
    "kind": ITCPRoute["kind"];
    "metadata"?: ITCPRoute["metadata"];
    "status"?: ITCPRoute["status"];
    static apiVersion: ITCPRoute["apiVersion"];
    static kind: ITCPRoute["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ITCPRoute>;
    constructor(data?: ModelData<ITCPRoute>);
}
