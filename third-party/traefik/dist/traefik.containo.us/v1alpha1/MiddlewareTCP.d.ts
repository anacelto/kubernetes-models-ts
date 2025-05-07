import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * MiddlewareTCP is the CRD implementation of a Traefik TCP middleware. More info: https://doc.traefik.io/traefik/v2.10/middlewares/overview/
 */
export interface IMiddlewareTCP {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "traefik.containo.us/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "MiddlewareTCP";
    "metadata": IObjectMeta;
    /**
     * MiddlewareTCPSpec defines the desired state of a MiddlewareTCP.
     */
    "spec": {
        /**
         * InFlightConn defines the InFlightConn middleware configuration.
         */
        "inFlightConn"?: {
            /**
             * Amount defines the maximum amount of allowed simultaneous connections. The middleware closes the connection if there are already amount connections opened.
             */
            "amount"?: number;
        };
        /**
         * IPWhiteList defines the IPWhiteList middleware configuration.
         */
        "ipWhiteList"?: {
            /**
             * SourceRange defines the allowed IPs (or ranges of allowed IPs by using CIDR notation).
             */
            "sourceRange"?: Array<string>;
        };
    };
}
/**
 * MiddlewareTCP is the CRD implementation of a Traefik TCP middleware. More info: https://doc.traefik.io/traefik/v2.10/middlewares/overview/
 */
export declare class MiddlewareTCP extends Model<IMiddlewareTCP> implements IMiddlewareTCP {
    "apiVersion": IMiddlewareTCP["apiVersion"];
    "kind": IMiddlewareTCP["kind"];
    "metadata": IMiddlewareTCP["metadata"];
    "spec": IMiddlewareTCP["spec"];
    static apiVersion: IMiddlewareTCP["apiVersion"];
    static kind: IMiddlewareTCP["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IMiddlewareTCP>;
    constructor(data?: ModelData<IMiddlewareTCP>);
}
