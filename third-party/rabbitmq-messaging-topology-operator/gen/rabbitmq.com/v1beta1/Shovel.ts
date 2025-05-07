import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/RabbitmqComV1beta1Shovel";

/**
 * Shovel is the Schema for the shovels API
 */
export interface IShovel {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "rabbitmq.com/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "Shovel";
  "metadata"?: IObjectMeta;
  /**
   * ShovelSpec defines the desired state of Shovel For how to configure Shovel, see: https://www.rabbitmq.com/shovel.html.
   */
  "spec"?: {
    "ackMode"?: "on-confirm" | "on-publish" | "no-ack";
    "addForwardHeaders"?: boolean;
    "deleteAfter"?: string;
    "destAddForwardHeaders"?: boolean;
    "destAddTimestampHeader"?: boolean;
    "destAddress"?: string;
    "destApplicationProperties"?: string;
    "destExchange"?: string;
    "destExchangeKey"?: string;
    "destProperties"?: string;
    "destProtocol"?: string;
    "destPublishProperties"?: string;
    "destQueue"?: string;
    /**
     * Required property; cannot be updated
     */
    "name": string;
    "prefetchCount"?: number;
    /**
     * Reference to the RabbitmqCluster that this Shovel will be created in. Required property.
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
    "srcAddress"?: string;
    "srcDeleteAfter"?: string;
    "srcExchange"?: string;
    "srcExchangeKey"?: string;
    "srcPrefetchCount"?: number;
    "srcProtocol"?: string;
    "srcQueue"?: string;
    /**
     * Secret contains the AMQP URI(s) to configure Shovel destination and source. The Secret must contain the key `destUri` and `srcUri` or operator will error. Both fields should be one or multiple uris separated by ','. Required property.
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
   * ShovelStatus defines the observed state of Shovel
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
     * observedGeneration is the most recent successful generation observed for this Shovel. It corresponds to the Shovel's generation, which is updated on mutation by the API Server.
     */
    "observedGeneration"?: number;
  };
}

/**
 * Shovel is the Schema for the shovels API
 */
export class Shovel extends Model<IShovel> implements IShovel {
  "apiVersion": IShovel["apiVersion"];
  "kind": IShovel["kind"];
  "metadata"?: IShovel["metadata"];
  "spec"?: IShovel["spec"];
  "status"?: IShovel["status"];

static apiVersion: IShovel["apiVersion"] = "rabbitmq.com/v1beta1";
static kind: IShovel["kind"] = "Shovel";
static is = createTypeMetaGuard<IShovel>(Shovel);

constructor(data?: ModelData<IShovel>) {
  super();

  this.setDefinedProps({
    apiVersion: Shovel.apiVersion,
    kind: Shovel.kind,
    ...data
  } as IShovel);
}
}


setValidateFunc(Shovel, validate as ValidateFunc<IShovel>);
