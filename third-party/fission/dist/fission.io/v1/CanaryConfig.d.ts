import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * CanaryConfig is for canary deployment of two functions.
 */
export interface ICanaryConfig {
    /**
     * APIVersion defines the versioned schema of this representation of an object.
     * Servers should convert recognized schemas to the latest internal value, and
     * may reject unrecognized values.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "fission.io/v1";
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "CanaryConfig";
    "metadata": IObjectMeta;
    /**
     * CanaryConfigSpec defines the canary configuration spec
     */
    "spec": {
        /**
         * Weight increment interval, string representation of time.Duration, ex : 1m, 2h, 2d (default: "2m")
         */
        "duration"?: string;
        /**
         * FailureType refers to the type of failure
         */
        "failureType"?: string;
        /**
         * Threshold in percentage beyond which the new version of the function is considered unstable
         */
        "failurethreshold"?: number;
        /**
         * New version of the function
         */
        "newfunction": string;
        /**
         * Old stable version of the function
         */
        "oldfunction": string;
        /**
         * HTTP trigger that this config references
         */
        "trigger": string;
        /**
         * Weight increment step for function
         */
        "weightincrement"?: number;
    };
    /**
     * CanaryConfigStatus represents canary config status
     */
    "status": {
        "status": string;
    };
}
/**
 * CanaryConfig is for canary deployment of two functions.
 */
export declare class CanaryConfig extends Model<ICanaryConfig> implements ICanaryConfig {
    "apiVersion": ICanaryConfig["apiVersion"];
    "kind": ICanaryConfig["kind"];
    "metadata": ICanaryConfig["metadata"];
    "spec": ICanaryConfig["spec"];
    "status": ICanaryConfig["status"];
    static apiVersion: ICanaryConfig["apiVersion"];
    static kind: ICanaryConfig["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ICanaryConfig>;
    constructor(data?: ModelData<ICanaryConfig>);
}
