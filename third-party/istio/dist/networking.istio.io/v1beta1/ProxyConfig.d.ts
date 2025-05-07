import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IProxyConfig {
    /**
     * Provides configuration for individual workloads. See more details at: https://istio.io/docs/reference/config/networking/proxy-config.html
     */
    "spec"?: {
        /**
         * The number of worker threads to run.
         */
        "concurrency"?: number;
        /**
         * Additional environment variables for the proxy.
         */
        "environmentVariables"?: {
            [key: string]: string;
        };
        /**
         * Specifies the details of the proxy image.
         */
        "image"?: {
            /**
             * The image type of the image.
             */
            "imageType"?: string;
        };
        /**
         * Optional.
         */
        "selector"?: {
            "matchLabels"?: {
                [key: string]: string;
            };
        };
    };
    "status"?: {};
    "apiVersion": "networking.istio.io/v1beta1";
    "kind": "ProxyConfig";
    "metadata"?: IObjectMeta;
}
export declare class ProxyConfig extends Model<IProxyConfig> implements IProxyConfig {
    "spec"?: IProxyConfig["spec"];
    "status"?: IProxyConfig["status"];
    "apiVersion": IProxyConfig["apiVersion"];
    "kind": IProxyConfig["kind"];
    "metadata"?: IProxyConfig["metadata"];
    static apiVersion: IProxyConfig["apiVersion"];
    static kind: IProxyConfig["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IProxyConfig>;
    constructor(data?: ModelData<IProxyConfig>);
}
