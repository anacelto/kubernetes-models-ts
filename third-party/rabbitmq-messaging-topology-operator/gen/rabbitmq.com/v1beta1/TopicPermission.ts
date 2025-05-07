import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/RabbitmqComV1beta1TopicPermission";

/**
 * TopicPermission is the Schema for the topicpermissions API
 */
export interface ITopicPermission {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "rabbitmq.com/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "TopicPermission";
  "metadata"?: IObjectMeta;
  /**
   * TopicPermissionSpec defines the desired state of TopicPermission
   */
  "spec"?: {
    /**
     * Permissions to grant to the user to a topic exchange; required property.
     */
    "permissions": {
      /**
       * Name of a topic exchange; required property; cannot be updated.
       */
      "exchange"?: string;
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
     * Name of an existing user; must provide user or userReference, else create/update will fail; cannot be updated.
     */
    "user"?: string;
    /**
     * Reference to an existing user.rabbitmq.com object; must provide user or userReference, else create/update will fail; cannot be updated.
     */
    "userReference"?: {
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
       */
      "name"?: string;
    };
    /**
     * Name of an existing vhost; required property; cannot be updated.
     */
    "vhost": string;
  };
  /**
   * TopicPermissionStatus defines the observed state of TopicPermission
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
     * observedGeneration is the most recent successful generation observed for this TopicPermission. It corresponds to the TopicPermission's generation, which is updated on mutation by the API Server.
     */
    "observedGeneration"?: number;
  };
}

/**
 * TopicPermission is the Schema for the topicpermissions API
 */
export class TopicPermission extends Model<ITopicPermission> implements ITopicPermission {
  "apiVersion": ITopicPermission["apiVersion"];
  "kind": ITopicPermission["kind"];
  "metadata"?: ITopicPermission["metadata"];
  "spec"?: ITopicPermission["spec"];
  "status"?: ITopicPermission["status"];

static apiVersion: ITopicPermission["apiVersion"] = "rabbitmq.com/v1beta1";
static kind: ITopicPermission["kind"] = "TopicPermission";
static is = createTypeMetaGuard<ITopicPermission>(TopicPermission);

constructor(data?: ModelData<ITopicPermission>) {
  super();

  this.setDefinedProps({
    apiVersion: TopicPermission.apiVersion,
    kind: TopicPermission.kind,
    ...data
  } as ITopicPermission);
}
}


setValidateFunc(TopicPermission, validate as ValidateFunc<ITopicPermission>);
