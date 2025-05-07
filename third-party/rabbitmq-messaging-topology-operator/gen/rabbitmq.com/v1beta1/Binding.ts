import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/RabbitmqComV1beta1Binding";

/**
 * Binding is the Schema for the bindings API
 */
export interface IBinding {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "rabbitmq.com/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "Binding";
  "metadata"?: IObjectMeta;
  /**
   * BindingSpec defines the desired state of Binding
   */
  "spec"?: {
    /**
     * Cannot be updated
     */
    "arguments"?: {
    };
    /**
     * Cannot be updated
     */
    "destination"?: string;
    /**
     * Cannot be updated
     */
    "destinationType"?: "exchange" | "queue";
    /**
     * Reference to the RabbitmqCluster that the binding will be created in. Required property.
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
    "routingKey"?: string;
    /**
     * Cannot be updated
     */
    "source"?: string;
    /**
     * Default to vhost '/'; cannot be updated
     */
    "vhost"?: string;
  };
  /**
   * BindingStatus defines the observed state of Binding
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
     * observedGeneration is the most recent successful generation observed for this Binding. It corresponds to the Binding's generation, which is updated on mutation by the API Server.
     */
    "observedGeneration"?: number;
  };
}

/**
 * Binding is the Schema for the bindings API
 */
export class Binding extends Model<IBinding> implements IBinding {
  "apiVersion": IBinding["apiVersion"];
  "kind": IBinding["kind"];
  "metadata"?: IBinding["metadata"];
  "spec"?: IBinding["spec"];
  "status"?: IBinding["status"];

static apiVersion: IBinding["apiVersion"] = "rabbitmq.com/v1beta1";
static kind: IBinding["kind"] = "Binding";
static is = createTypeMetaGuard<IBinding>(Binding);

constructor(data?: ModelData<IBinding>) {
  super();

  this.setDefinedProps({
    apiVersion: Binding.apiVersion,
    kind: Binding.kind,
    ...data
  } as IBinding);
}
}


setValidateFunc(Binding, validate as ValidateFunc<IBinding>);
