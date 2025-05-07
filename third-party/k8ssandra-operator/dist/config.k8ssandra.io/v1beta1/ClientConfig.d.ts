import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * ClientConfig is the Schema for the kubeconfigs API
 */
export interface IClientConfig {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "config.k8ssandra.io/v1beta1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "ClientConfig";
    "metadata"?: IObjectMeta;
    /**
     * ClientConfigSpec defines the desired state of KubeConfig
     */
    "spec"?: {
        /**
         * ContextName allows to override the object name for context-name. If not set, the ClientConfig.Name is used as context name
         */
        "contextName"?: string;
        /**
         * KubeConfigSecret should reference an existing secret; the actual configuration will be read from this secret's "kubeconfig" key.
         */
        "kubeConfigSecret"?: {
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
        };
    };
}
/**
 * ClientConfig is the Schema for the kubeconfigs API
 */
export declare class ClientConfig extends Model<IClientConfig> implements IClientConfig {
    "apiVersion": IClientConfig["apiVersion"];
    "kind": IClientConfig["kind"];
    "metadata"?: IClientConfig["metadata"];
    "spec"?: IClientConfig["spec"];
    static apiVersion: IClientConfig["apiVersion"];
    static kind: IClientConfig["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IClientConfig>;
    constructor(data?: ModelData<IClientConfig>);
}
