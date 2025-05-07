import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IFrontendConfig {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "networking.gke.io/v1beta1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "FrontendConfig";
    "metadata"?: IObjectMeta;
    /**
     * FrontendConfigSpec is the spec for a FrontendConfig resource
     */
    "spec"?: {
        /**
         * HttpsRedirectConfig representing the configuration of Https redirects
         */
        "redirectToHttps"?: {
            "enabled": boolean;
            /**
             * String representing the HTTP response code Options are MOVED_PERMANENTLY_DEFAULT, FOUND, TEMPORARY_REDIRECT, or PERMANENT_REDIRECT
             */
            "responseCodeName"?: string;
        };
        "sslPolicy"?: string;
    };
    "status"?: {};
}
export declare class FrontendConfig extends Model<IFrontendConfig> implements IFrontendConfig {
    "apiVersion": IFrontendConfig["apiVersion"];
    "kind": IFrontendConfig["kind"];
    "metadata"?: IFrontendConfig["metadata"];
    "spec"?: IFrontendConfig["spec"];
    "status"?: IFrontendConfig["status"];
    static apiVersion: IFrontendConfig["apiVersion"];
    static kind: IFrontendConfig["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IFrontendConfig>;
    constructor(data?: ModelData<IFrontendConfig>);
}
