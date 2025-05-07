import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/RabbitmqComV1alpha1SuperStream";

/**
 * SuperStream is the Schema for the queues API
 */
export interface ISuperStream {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "rabbitmq.com/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "SuperStream";
  "metadata"?: IObjectMeta;
  /**
   * SuperStreamSpec defines the desired state of SuperStream
   */
  "spec"?: {
    /**
     * Name of the queue; required property.
     */
    "name": string;
    /**
     * Number of partitions to create within this super stream. Defaults to '3'.
     */
    "partitions"?: number;
    /**
     * Reference to the RabbitmqCluster that the SuperStream will be created in. Required property.
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
     * Routing keys to use for each of the partitions in the SuperStream If unset, the routing keys for the partitions will be set to the index of the partitions
     */
    "routingKeys"?: Array<string>;
    /**
     * Default to vhost '/'; cannot be updated
     */
    "vhost"?: string;
  };
  /**
   * SuperStreamStatus defines the observed state of SuperStream
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
     * observedGeneration is the most recent successful generation observed for this SuperStream. It corresponds to the SuperStream's generation, which is updated on mutation by the API Server.
     */
    "observedGeneration"?: number;
    /**
     * Partitions are a list of the stream queue names which form the partitions of this SuperStream.
     */
    "partitions"?: Array<string>;
  };
}

/**
 * SuperStream is the Schema for the queues API
 */
export class SuperStream extends Model<ISuperStream> implements ISuperStream {
  "apiVersion": ISuperStream["apiVersion"];
  "kind": ISuperStream["kind"];
  "metadata"?: ISuperStream["metadata"];
  "spec"?: ISuperStream["spec"];
  "status"?: ISuperStream["status"];

static apiVersion: ISuperStream["apiVersion"] = "rabbitmq.com/v1alpha1";
static kind: ISuperStream["kind"] = "SuperStream";
static is = createTypeMetaGuard<ISuperStream>(SuperStream);

constructor(data?: ModelData<ISuperStream>) {
  super();

  this.setDefinedProps({
    apiVersion: SuperStream.apiVersion,
    kind: SuperStream.kind,
    ...data
  } as ISuperStream);
}
}


setValidateFunc(SuperStream, validate as ValidateFunc<ISuperStream>);
