import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/RabbitmqComV1beta1Exchange";

/**
 * Exchange is the Schema for the exchanges API
 */
export interface IExchange {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "rabbitmq.com/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "Exchange";
  "metadata"?: IObjectMeta;
  /**
   * ExchangeSpec defines the desired state of Exchange
   */
  "spec"?: {
    "arguments"?: {
    };
    /**
     * Cannot be updated
     */
    "autoDelete"?: boolean;
    /**
     * Cannot be updated
     */
    "durable"?: boolean;
    /**
     * Required property; cannot be updated
     */
    "name": string;
    /**
     * Reference to the RabbitmqCluster that the exchange will be created in. Required property.
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
     * Cannot be updated
     */
    "type"?: string;
    /**
     * Default to vhost '/'; cannot be updated
     */
    "vhost"?: string;
  };
  /**
   * ExchangeStatus defines the observed state of Exchange
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
     * observedGeneration is the most recent successful generation observed for this Exchange. It corresponds to the Exchange's generation, which is updated on mutation by the API Server.
     */
    "observedGeneration"?: number;
  };
}

/**
 * Exchange is the Schema for the exchanges API
 */
export class Exchange extends Model<IExchange> implements IExchange {
  "apiVersion": IExchange["apiVersion"];
  "kind": IExchange["kind"];
  "metadata"?: IExchange["metadata"];
  "spec"?: IExchange["spec"];
  "status"?: IExchange["status"];

static apiVersion: IExchange["apiVersion"] = "rabbitmq.com/v1beta1";
static kind: IExchange["kind"] = "Exchange";
static is = createTypeMetaGuard<IExchange>(Exchange);

constructor(data?: ModelData<IExchange>) {
  super();

  this.setDefinedProps({
    apiVersion: Exchange.apiVersion,
    kind: Exchange.kind,
    ...data
  } as IExchange);
}
}


setValidateFunc(Exchange, validate as ValidateFunc<IExchange>);
