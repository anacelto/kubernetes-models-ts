import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ReplicationK8ssandraIoV1alpha1ReplicatedSecret";

/**
 * ReplicatedSecret is the Schema for the replicatedsecrets API
 */
export interface IReplicatedSecret {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "replication.k8ssandra.io/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "ReplicatedSecret";
  "metadata"?: IObjectMeta;
  /**
   * ReplicatedSecretSpec defines the desired state of ReplicatedSecret
   */
  "spec"?: {
    /**
     * TargetContexts indicates the target clusters to which the secrets are replicated to. If empty, no clusters are targeted
     */
    "replicationTargets"?: Array<{
      /**
       * K8sContextName defines the target cluster name as set in the ClientConfig. If left empty, current cluster is assumed
       */
      "k8sContextName"?: string;
      /**
       * TODO Implement at some point Namespace to replicate the data to in the target cluster. If left empty, current namespace is used.
       */
      "namespace"?: string;
    }>;
    /**
     * Selector defines which secrets are replicated. If left empty, all the secrets are replicated
     */
    "selector"?: {
      /**
       * matchExpressions is a list of label selector requirements. The requirements are ANDed.
       */
      "matchExpressions"?: Array<{
        /**
         * key is the label key that the selector applies to.
         */
        "key": string;
        /**
         * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
         */
        "operator": string;
        /**
         * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
         */
        "values"?: Array<string>;
      }>;
      /**
       * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
       */
      "matchLabels"?: {
        [key: string]: string;
      };
    };
  };
  /**
   * ReplicatedSecretStatus defines the observed state of ReplicatedSecret
   */
  "status"?: {
    "conditions"?: Array<{
      /**
       * Cluster
       */
      "cluster": string;
      /**
       * LastTransitionTime is the last time the condition transited from one status to another.
       */
      "lastTransitionTime"?: string;
      /**
       * Status of the replication to target cluster
       */
      "status": string;
      /**
       * Type of condition
       */
      "type": string;
    }>;
  };
}

/**
 * ReplicatedSecret is the Schema for the replicatedsecrets API
 */
export class ReplicatedSecret extends Model<IReplicatedSecret> implements IReplicatedSecret {
  "apiVersion": IReplicatedSecret["apiVersion"];
  "kind": IReplicatedSecret["kind"];
  "metadata"?: IReplicatedSecret["metadata"];
  "spec"?: IReplicatedSecret["spec"];
  "status"?: IReplicatedSecret["status"];

static apiVersion: IReplicatedSecret["apiVersion"] = "replication.k8ssandra.io/v1alpha1";
static kind: IReplicatedSecret["kind"] = "ReplicatedSecret";
static is = createTypeMetaGuard<IReplicatedSecret>(ReplicatedSecret);

constructor(data?: ModelData<IReplicatedSecret>) {
  super();

  this.setDefinedProps({
    apiVersion: ReplicatedSecret.apiVersion,
    kind: ReplicatedSecret.kind,
    ...data
  } as IReplicatedSecret);
}
}


setValidateFunc(ReplicatedSecret, validate as ValidateFunc<IReplicatedSecret>);
