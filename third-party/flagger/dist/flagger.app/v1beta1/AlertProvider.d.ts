import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * AlertProvider is the Schema for the AlertProvider API.
 */
export interface IAlertProvider {
    "apiVersion": "flagger.app/v1beta1";
    "kind": "AlertProvider";
    "metadata"?: IObjectMeta;
    /**
     * AlertProviderSpec defines the desired state of a AlertProvider.
     */
    "spec"?: {
        /**
         * Type of this provider
         */
        "type"?: "slack" | "msteams" | "discord" | "rocket" | "gchat";
        /**
         * Alert channel for this provider
         */
        "channel"?: string;
        /**
         * Bot username for this provider
         */
        "username"?: string;
        /**
         * Hook URL address of this provider
         */
        "address"?: string;
        /**
         * Http/s proxy of this provider
         */
        "proxy"?: string;
        /**
         * Kubernetes secret reference containing the provider address
         */
        "secretRef"?: {
            /**
             * Name of the Kubernetes secret
             */
            "name": string;
        };
    } & ({
        /**
         * Type of this provider
         */
        "type": "slack" | "msteams" | "discord" | "rocket" | "gchat";
        /**
         * Alert channel for this provider
         */
        "channel"?: string;
        /**
         * Bot username for this provider
         */
        "username"?: string;
        /**
         * Hook URL address of this provider
         */
        "address": string;
        /**
         * Http/s proxy of this provider
         */
        "proxy"?: string;
        /**
         * Kubernetes secret reference containing the provider address
         */
        "secretRef"?: {
            /**
             * Name of the Kubernetes secret
             */
            "name": string;
        };
    } | {
        /**
         * Type of this provider
         */
        "type": "slack" | "msteams" | "discord" | "rocket" | "gchat";
        /**
         * Alert channel for this provider
         */
        "channel"?: string;
        /**
         * Bot username for this provider
         */
        "username"?: string;
        /**
         * Hook URL address of this provider
         */
        "address"?: string;
        /**
         * Http/s proxy of this provider
         */
        "proxy"?: string;
        /**
         * Kubernetes secret reference containing the provider address
         */
        "secretRef": {
            /**
             * Name of the Kubernetes secret
             */
            "name": string;
        };
    });
}
/**
 * AlertProvider is the Schema for the AlertProvider API.
 */
export declare class AlertProvider extends Model<IAlertProvider> implements IAlertProvider {
    "apiVersion": IAlertProvider["apiVersion"];
    "kind": IAlertProvider["kind"];
    "metadata"?: IAlertProvider["metadata"];
    "spec"?: IAlertProvider["spec"];
    static apiVersion: IAlertProvider["apiVersion"];
    static kind: IAlertProvider["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IAlertProvider>;
    constructor(data?: ModelData<IAlertProvider>);
}
