import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/RabbitmqComV1beta1Policy";

/**
 * Policy is the Schema for the policies API
 */
export interface IPolicy {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "rabbitmq.com/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "Policy";
  "metadata"?: IObjectMeta;
  /**
   * PolicySpec defines the desired state of Policy https://www.rabbitmq.com/parameters.html#policies
   */
  "spec"?: {
    /**
     * What this policy applies to: 'queues', 'exchanges', or 'all'. Default to 'all'.
     */
    "applyTo"?: "queues" | "exchanges" | "all";
    /**
     * Policy definition. Required property.
     */
    "definition": {
    };
    /**
     * Required property; cannot be updated
     */
    "name": string;
    /**
     * Regular expression pattern used to match queues and exchanges, e.g. "^amq.". Required property.
     */
    "pattern": string;
    /**
     * Default to '0'. In the event that more than one policy can match a given exchange or queue, the policy with the greatest priority applies.
     */
    "priority"?: number;
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
     * Default to vhost '/'; cannot be updated
     */
    "vhost"?: string;
  };
  /**
   * PolicyStatus defines the observed state of Policy
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
     * observedGeneration is the most recent successful generation observed for this Policy. It corresponds to the Policy's generation, which is updated on mutation by the API Server.
     */
    "observedGeneration"?: number;
  };
}

/**
 * Policy is the Schema for the policies API
 */
export class Policy extends Model<IPolicy> implements IPolicy {
  "apiVersion": IPolicy["apiVersion"];
  "kind": IPolicy["kind"];
  "metadata"?: IPolicy["metadata"];
  "spec"?: IPolicy["spec"];
  "status"?: IPolicy["status"];

static apiVersion: IPolicy["apiVersion"] = "rabbitmq.com/v1beta1";
static kind: IPolicy["kind"] = "Policy";
static is = createTypeMetaGuard<IPolicy>(Policy);

constructor(data?: ModelData<IPolicy>) {
  super();

  this.setDefinedProps({
    apiVersion: Policy.apiVersion,
    kind: Policy.kind,
    ...data
  } as IPolicy);
}
}


setValidateFunc(Policy, validate as ValidateFunc<IPolicy>);
