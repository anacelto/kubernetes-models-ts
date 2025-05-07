import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * User is the Schema for the users API.
 */
export interface IUser {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "rabbitmq.com/v1beta1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "User";
    "metadata"?: IObjectMeta;
    /**
     * Spec configures the desired state of the User object.
     */
    "spec"?: {
        /**
         * Defines a Secret used to pre-define the username and password set for this User. User objects created with this field set will not have randomly-generated credentials, and will instead import the username/password values from this Secret. The Secret must contain the keys `username` and `password` in its Data field, or the import will fail. Note that this import only occurs at creation time, and is ignored once a password has been set on a User.
         */
        "importCredentialsSecret"?: {
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
        };
        /**
         * Reference to the RabbitmqCluster that the user will be created for. This cluster must exist for the User object to be created.
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
         * List of permissions tags to associate with the user. This determines the level of access to the RabbitMQ management UI granted to the user. Omitting this field will lead to a user than can still connect to the cluster through messaging protocols, but cannot perform any management actions. For more information, see https://www.rabbitmq.com/management.html#permissions.
         */
        "tags"?: Array<"management" | "policymaker" | "monitoring" | "administrator">;
    };
    /**
     * Status exposes the observed state of the User object.
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
         * Provides a reference to a Secret object containing the user credentials.
         */
        "credentials"?: {
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
        };
        /**
         * observedGeneration is the most recent successful generation observed for this User. It corresponds to the User's generation, which is updated on mutation by the API Server.
         */
        "observedGeneration"?: number;
        /**
         * Provide rabbitmq Username
         */
        "username": string;
    };
}
/**
 * User is the Schema for the users API.
 */
export declare class User extends Model<IUser> implements IUser {
    "apiVersion": IUser["apiVersion"];
    "kind": IUser["kind"];
    "metadata"?: IUser["metadata"];
    "spec"?: IUser["spec"];
    "status"?: IUser["status"];
    static apiVersion: IUser["apiVersion"];
    static kind: IUser["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IUser>;
    constructor(data?: ModelData<IUser>);
}
