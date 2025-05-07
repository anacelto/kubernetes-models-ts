import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * Permission is the Schema for the permissions API
 */
export interface IPermission {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "rabbitmq.com/v1beta1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "Permission";
    "metadata"?: IObjectMeta;
    /**
     * PermissionSpec defines the desired state of Permission
     */
    "spec"?: {
        /**
         * Permissions to grant to the user in the specific vhost; required property. See RabbitMQ doc for more information: https://www.rabbitmq.com/access-control.html#user-management
         */
        "permissions": {
            "configure"?: string;
            "read"?: string;
            "write"?: string;
        };
        /**
         * Reference to the RabbitmqCluster that both the provided user and vhost are. Required property.
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
        /**
         * Name of an existing user; must provide user or userReference, else create/update will fail; cannot be updated
         */
        "user"?: string;
        /**
         * Reference to an existing user.rabbitmq.com object; must provide user or userReference, else create/update will fail; cannot be updated
         */
        "userReference"?: {
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
        };
        /**
         * Name of an existing vhost; required property; cannot be updated
         */
        "vhost": string;
    };
    /**
     * PermissionStatus defines the observed state of Permission
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
         * observedGeneration is the most recent successful generation observed for this Permission. It corresponds to the Permission's generation, which is updated on mutation by the API Server.
         */
        "observedGeneration"?: number;
    };
}
/**
 * Permission is the Schema for the permissions API
 */
export declare class Permission extends Model<IPermission> implements IPermission {
    "apiVersion": IPermission["apiVersion"];
    "kind": IPermission["kind"];
    "metadata"?: IPermission["metadata"];
    "spec"?: IPermission["spec"];
    "status"?: IPermission["status"];
    static apiVersion: IPermission["apiVersion"];
    static kind: IPermission["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IPermission>;
    constructor(data?: ModelData<IPermission>);
}
