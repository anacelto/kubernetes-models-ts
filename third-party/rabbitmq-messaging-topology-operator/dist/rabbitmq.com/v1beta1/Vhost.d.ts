import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * Vhost is the Schema for the vhosts API
 */
export interface IVhost {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "rabbitmq.com/v1beta1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "Vhost";
    "metadata"?: IObjectMeta;
    /**
     * VhostSpec defines the desired state of Vhost
     */
    "spec"?: {
        /**
         * Name of the vhost; see https://www.rabbitmq.com/vhosts.html.
         */
        "name": string;
        /**
         * Reference to the RabbitmqCluster that the vhost will be created in. Required property.
         */
        "rabbitmqClusterReference": {
            /**
             * Secret contains the http management uri for the RabbitMQ cluster. The Secret must contain the key `uri`, `username` and `password` or operator will error. Have to set either name or connectionSecret, but not both.
             */
            "connectionSecret"?: {
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
            };
            /**
             * The name of the RabbitMQ cluster to reference. Have to set either name or connectionSecret, but not both.
             */
            "name"?: string;
            /**
             * The namespace of the RabbitMQ cluster to reference. Defaults to the namespace of the requested resource if omitted.
             */
            "namespace"?: string;
        };
        "tags"?: Array<string>;
        "tracing"?: boolean;
    };
    /**
     * VhostStatus defines the observed state of Vhost
     */
    "status"?: {
        "conditions"?: Array<{
            /**
             * The last time this Condition status changed.
             */
            "lastTransitionTime"?: string;
            /**
             * Full text reason for current status of the condition.
             */
            "message"?: string;
            /**
             * One word, camel-case reason for current status of the condition.
             */
            "reason"?: string;
            /**
             * True, False, or Unknown
             */
            "status": string;
            /**
             * Type indicates the scope of the custom resource status addressed by the condition.
             */
            "type": string;
        }>;
        /**
         * observedGeneration is the most recent successful generation observed for this Vhost. It corresponds to the Vhost's generation, which is updated on mutation by the API Server.
         */
        "observedGeneration"?: number;
    };
}
/**
 * Vhost is the Schema for the vhosts API
 */
export declare class Vhost extends Model<IVhost> implements IVhost {
    "apiVersion": IVhost["apiVersion"];
    "kind": IVhost["kind"];
    "metadata"?: IVhost["metadata"];
    "spec"?: IVhost["spec"];
    "status"?: IVhost["status"];
    static apiVersion: IVhost["apiVersion"];
    static kind: IVhost["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IVhost>;
    constructor(data?: ModelData<IVhost>);
}
