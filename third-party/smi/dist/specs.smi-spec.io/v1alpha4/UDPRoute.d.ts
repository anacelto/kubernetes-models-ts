import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * UDPRoute is the Schema for the udproutes API
 */
export interface IUDPRoute {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "specs.smi-spec.io/v1alpha4";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "UDPRoute";
    "metadata"?: IObjectMeta;
    /**
     * UDPRouteSpec defines the desired state of UDPRoute
     */
    "spec"?: {
        /**
         * Route match for inbound traffic
         */
        "matches"?: {
            /**
             * Name is the name of the match for referencing in a TrafficTarget
             */
            "name"?: string;
            /**
             * Ports to allow inbound traffic on
             */
            "ports"?: Array<number>;
        };
    };
    /**
     * UDPRouteStatus defines the observed state of UDPRoute
     */
    "status"?: {};
}
/**
 * UDPRoute is the Schema for the udproutes API
 */
export declare class UDPRoute extends Model<IUDPRoute> implements IUDPRoute {
    "apiVersion": IUDPRoute["apiVersion"];
    "kind": IUDPRoute["kind"];
    "metadata"?: IUDPRoute["metadata"];
    "spec"?: IUDPRoute["spec"];
    "status"?: IUDPRoute["status"];
    static apiVersion: IUDPRoute["apiVersion"];
    static kind: IUDPRoute["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IUDPRoute>;
    constructor(data?: ModelData<IUDPRoute>);
}
