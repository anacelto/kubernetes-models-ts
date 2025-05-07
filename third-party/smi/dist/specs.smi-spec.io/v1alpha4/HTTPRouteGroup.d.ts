import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * HTTPRouteGroup is the Schema for the httproutegroups API
 */
export interface IHTTPRouteGroup {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "specs.smi-spec.io/v1alpha4";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "HTTPRouteGroup";
    "metadata"?: IObjectMeta;
    /**
     * HTTPRouteGroupSpec defines the desired state of HTTPRouteGroup
     */
    "spec"?: {
        /**
         * Routes for inbound traffic
         */
        "matches"?: Array<{
            /**
             * Headers is a list of headers used to match HTTP traffic
             */
            "headers"?: {
                [key: string]: string;
            };
            /**
             * Methods for inbound traffic as defined in RFC 7231 https://tools.ietf.org/html/rfc7231#section-4
             */
            "methods"?: Array<string>;
            /**
             * Name is the name of the match for referencing in a TrafficTarget
             */
            "name"?: string;
            /**
             * PathRegex is a regular expression defining the route
             */
            "pathRegex"?: string;
        }>;
    };
    /**
     * HTTPRouteGroupStatus defines the observed state of HTTPRouteGroup
     */
    "status"?: {};
}
/**
 * HTTPRouteGroup is the Schema for the httproutegroups API
 */
export declare class HTTPRouteGroup extends Model<IHTTPRouteGroup> implements IHTTPRouteGroup {
    "apiVersion": IHTTPRouteGroup["apiVersion"];
    "kind": IHTTPRouteGroup["kind"];
    "metadata"?: IHTTPRouteGroup["metadata"];
    "spec"?: IHTTPRouteGroup["spec"];
    "status"?: IHTTPRouteGroup["status"];
    static apiVersion: IHTTPRouteGroup["apiVersion"];
    static kind: IHTTPRouteGroup["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IHTTPRouteGroup>;
    constructor(data?: ModelData<IHTTPRouteGroup>);
}
