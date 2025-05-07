import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/RabbitmqComV1beta1Queue";

/**
 * Queue is the Schema for the queues API
 */
export interface IQueue {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "rabbitmq.com/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "Queue";
  "metadata"?: IObjectMeta;
  /**
   * QueueSpec defines the desired state of Queue
   */
  "spec"?: {
    /**
     * Queue arguments in the format of KEY: VALUE. e.g. x-delivery-limit: 10000. Configuring queues through arguments is not recommended because they cannot be updated once set; we recommend configuring queues through policies instead.
     */
    "arguments"?: {
    };
    /**
     * when set to true, queues that have had at least one consumer before are deleted after the last consumer unsubscribes.
     */
    "autoDelete"?: boolean;
    /**
     * When set to false queues does not survive server restart.
     */
    "durable"?: boolean;
    /**
     * Name of the queue; required property.
     */
    "name": string;
    /**
     * Reference to the RabbitmqCluster that the queue will be created in. Required property.
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
    "type"?: string;
    /**
     * Default to vhost '/'
     */
    "vhost"?: string;
  };
  /**
   * QueueStatus defines the observed state of Queue
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
     * observedGeneration is the most recent successful generation observed for this Queue. It corresponds to the Queue's generation, which is updated on mutation by the API Server.
     */
    "observedGeneration"?: number;
  };
}

/**
 * Queue is the Schema for the queues API
 */
export class Queue extends Model<IQueue> implements IQueue {
  "apiVersion": IQueue["apiVersion"];
  "kind": IQueue["kind"];
  "metadata"?: IQueue["metadata"];
  "spec"?: IQueue["spec"];
  "status"?: IQueue["status"];

static apiVersion: IQueue["apiVersion"] = "rabbitmq.com/v1beta1";
static kind: IQueue["kind"] = "Queue";
static is = createTypeMetaGuard<IQueue>(Queue);

constructor(data?: ModelData<IQueue>) {
  super();

  this.setDefinedProps({
    apiVersion: Queue.apiVersion,
    kind: Queue.kind,
    ...data
  } as IQueue);
}
}


setValidateFunc(Queue, validate as ValidateFunc<IQueue>);
