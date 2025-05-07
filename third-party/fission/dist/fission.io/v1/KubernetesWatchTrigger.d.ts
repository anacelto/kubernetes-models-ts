import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * KubernetesWatchTrigger watches kubernetes resource events and invokes functions.
 */
export interface IKubernetesWatchTrigger {
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
    "kind": "KubernetesWatchTrigger";
    "metadata": IObjectMeta;
    /**
     * KubernetesWatchTriggerSpec defines spec of KuberenetesWatchTrigger
     */
    "spec": {
        /**
         * The reference to a function for kubewatcher to invoke with
         * when receiving events.
         */
        "functionref": {
            /**
             * Function Reference by weight. this map contains function name as key and its weight
             * as the value. This is for canary upgrade purpose.
             */
            "functionweights"?: {
                [key: string]: number;
            };
            /**
             * Name of the function.
             */
            "name": string;
            /**
             * Type indicates whether this function reference is by name or selector. For now,
             * the only supported reference type is by "name".  Future reference types:
             *   \* Function by label or annotation
             *   \* Branch or tag of a versioned function
             *   \* A "rolling upgrade" from one version of a function to another
             * Available value:
             * - name
             * - function-weights
             */
            "type": string;
        };
        /**
         * Resource labels
         */
        "labelselector"?: {
            [key: string]: string;
        };
        "namespace": string;
        /**
         * Type of resource to watch (Pod, Service, etc.)
         */
        "type": string;
    };
}
/**
 * KubernetesWatchTrigger watches kubernetes resource events and invokes functions.
 */
export declare class KubernetesWatchTrigger extends Model<IKubernetesWatchTrigger> implements IKubernetesWatchTrigger {
    "apiVersion": IKubernetesWatchTrigger["apiVersion"];
    "kind": IKubernetesWatchTrigger["kind"];
    "metadata": IKubernetesWatchTrigger["metadata"];
    "spec": IKubernetesWatchTrigger["spec"];
    static apiVersion: IKubernetesWatchTrigger["apiVersion"];
    static kind: IKubernetesWatchTrigger["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IKubernetesWatchTrigger>;
    constructor(data?: ModelData<IKubernetesWatchTrigger>);
}
