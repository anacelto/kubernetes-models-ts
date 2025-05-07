import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * Federation is the Schema for the federations API
 */
export interface IFederation {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "rabbitmq.com/v1beta1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "Federation";
    "metadata"?: IObjectMeta;
    /**
     * FederationSpec defines the desired state of Federation For how to configure federation upstreams, see: https://www.rabbitmq.com/federation-reference.html.
     */
    "spec"?: {
        "ackMode"?: "on-confirm" | "on-publish" | "no-ack";
        "exchange"?: string;
        "expires"?: number;
        "maxHops"?: number;
        "messageTTL"?: number;
        /**
         * Required property; cannot be updated
         */
        "name": string;
        "prefetch-count"?: number;
        "queue"?: string;
        /**
         * Reference to the RabbitmqCluster that this federation upstream will be created in. Required property.
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
        "reconnectDelay"?: number;
        "trustUserId"?: boolean;
        /**
         * Secret contains the AMQP URI(s) for the upstream. The Secret must contain the key `uri` or operator will error. `uri` should be one or multiple uris separated by ','. Required property.
         */
        "uriSecret": {
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
        };
        /**
         * Default to vhost '/'; cannot be updated
         */
        "vhost"?: string;
    };
    /**
     * FederationStatus defines the observed state of Federation
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
         * observedGeneration is the most recent successful generation observed for this Federation. It corresponds to the Federation's generation, which is updated on mutation by the API Server.
         */
        "observedGeneration"?: number;
    };
}
/**
 * Federation is the Schema for the federations API
 */
export declare class Federation extends Model<IFederation> implements IFederation {
    "apiVersion": IFederation["apiVersion"];
    "kind": IFederation["kind"];
    "metadata"?: IFederation["metadata"];
    "spec"?: IFederation["spec"];
    "status"?: IFederation["status"];
    static apiVersion: IFederation["apiVersion"];
    static kind: IFederation["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IFederation>;
    constructor(data?: ModelData<IFederation>);
}
