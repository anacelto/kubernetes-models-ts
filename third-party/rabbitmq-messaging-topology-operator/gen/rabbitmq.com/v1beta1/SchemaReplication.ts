import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/RabbitmqComV1beta1SchemaReplication";

/**
 * SchemaReplication is the Schema for the schemareplications API This feature requires Tanzu RabbitMQ with schema replication plugin. For more information, see: https://tanzu.vmware.com/rabbitmq and https://www.rabbitmq.com/definitions-standby.html.
 */
export interface ISchemaReplication {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "rabbitmq.com/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "SchemaReplication";
  "metadata"?: IObjectMeta;
  /**
   * SchemaReplicationSpec defines the desired state of SchemaReplication
   */
  "spec"?: {
    /**
     * endpoints should be one or multiple endpoints separated by ','. Must provide either spec.endpoints or endpoints in spec.upstreamSecret. When endpoints are provided in both spec.endpoints and spec.upstreamSecret, spec.endpoints takes precedence.
     */
    "endpoints"?: string;
    /**
     * Reference to the RabbitmqCluster that schema replication would be set for. Must be an existing cluster.
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
     * Set to fetch user credentials from K8s external secret stores to be used for schema replication.
     */
    "secretBackend"?: {
      "vault"?: {
        /**
         * Path in Vault to access a KV (Key-Value) secret with the fields username and password to be used for replication. For example "secret/data/rabbitmq/config". Optional; if not provided, username and password will come from upstreamSecret instead. Have to set either secretBackend.vault.secretPath or upstreamSecret, but not both.
         */
        "secretPath"?: string;
      };
    };
    /**
     * Defines a Secret which contains credentials to be used for schema replication. The Secret must contain the keys `username` and `password` in its Data field, or operator will error. Have to set either secretBackend.vault.secretPath or spec.upstreamSecret, but not both.
     */
    "upstreamSecret"?: {
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
       */
      "name"?: string;
    };
  };
  /**
   * SchemaReplicationStatus defines the observed state of SchemaReplication
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
 * SchemaReplication is the Schema for the schemareplications API This feature requires Tanzu RabbitMQ with schema replication plugin. For more information, see: https://tanzu.vmware.com/rabbitmq and https://www.rabbitmq.com/definitions-standby.html.
 */
export class SchemaReplication extends Model<ISchemaReplication> implements ISchemaReplication {
  "apiVersion": ISchemaReplication["apiVersion"];
  "kind": ISchemaReplication["kind"];
  "metadata"?: ISchemaReplication["metadata"];
  "spec"?: ISchemaReplication["spec"];
  "status"?: ISchemaReplication["status"];

static apiVersion: ISchemaReplication["apiVersion"] = "rabbitmq.com/v1beta1";
static kind: ISchemaReplication["kind"] = "SchemaReplication";
static is = createTypeMetaGuard<ISchemaReplication>(SchemaReplication);

constructor(data?: ModelData<ISchemaReplication>) {
  super();

  this.setDefinedProps({
    apiVersion: SchemaReplication.apiVersion,
    kind: SchemaReplication.kind,
    ...data
  } as ISchemaReplication);
}
}


setValidateFunc(SchemaReplication, validate as ValidateFunc<ISchemaReplication>);
