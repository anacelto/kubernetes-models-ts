import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/KarpenterShV1beta1NodePool";

/**
 * NodePool is the Schema for the NodePools API
 */
export interface INodePool {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "karpenter.sh/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "NodePool";
  "metadata"?: IObjectMeta;
  /**
   * NodePoolSpec is the top level nodepool specification. Nodepools
   * launch nodes in response to pods that are unschedulable. A single nodepool
   * is capable of managing a diverse set of nodes. Node properties are determined
   * from a combination of nodepool and pod scheduling constraints.
   */
  "spec": {
    /**
     * Disruption contains the parameters that relate to Karpenter's disruption logic
     */
    "disruption"?: {
      /**
       * Budgets is a list of Budgets.
       * If there are multiple active budgets, Karpenter uses
       * the most restrictive value. If left undefined,
       * this will default to one budget with a value to 10%.
       */
      "budgets"?: Array<{
        /**
         * Duration determines how long a Budget is active since each Schedule hit.
         * Only minutes and hours are accepted, as cron does not work in seconds.
         * If omitted, the budget is always active.
         * This is required if Schedule is set.
         * This regex has an optional 0s at the end since the duration.String() always adds
         * a 0s at the end.
         */
        "duration"?: string;
        /**
         * Nodes dictates the maximum number of NodeClaims owned by this NodePool
         * that can be terminating at once. This is calculated by counting nodes that
         * have a deletion timestamp set, or are actively being deleted by Karpenter.
         * This field is required when specifying a budget.
         * This cannot be of type intstr.IntOrString since kubebuilder doesn't support pattern
         * checking for int nodes for IntOrString nodes.
         * Ref: https://github.com/kubernetes-sigs/controller-tools/blob/55efe4be40394a288216dab63156b0a64fb82929/pkg/crd/markers/validation.go#L379-L388
         */
        "nodes": string;
        /**
         * Schedule specifies when a budget begins being active, following
         * the upstream cronjob syntax. If omitted, the budget is always active.
         * Timezones are not supported.
         * This field is required if Duration is set.
         */
        "schedule"?: string;
      }>;
      /**
       * ConsolidateAfter is the duration the controller will wait
       * before attempting to terminate nodes that are underutilized.
       * Refer to ConsolidationPolicy for how underutilization is considered.
       */
      "consolidateAfter"?: string;
      /**
       * ConsolidationPolicy describes which nodes Karpenter can disrupt through its consolidation
       * algorithm. This policy defaults to "WhenUnderutilized" if not specified
       */
      "consolidationPolicy"?: "WhenEmpty" | "WhenUnderutilized";
      /**
       * ExpireAfter is the duration the controller will wait
       * before terminating a node, measured from when the node is created. This
       * is useful to implement features like eventually consistent node upgrade,
       * memory leak protection, and disruption testing.
       */
      "expireAfter"?: string;
    };
    /**
     * Limits define a set of bounds for provisioning capacity.
     */
    "limits"?: {
      [key: string]: number | string;
    };
    /**
     * Template contains the template of possibilities for the provisioning logic to launch a NodeClaim with.
     * NodeClaims launched from this NodePool will often be further constrained than the template specifies.
     */
    "template": {
      "metadata"?: {
        /**
         * Annotations is an unstructured key value map stored with a resource that may be
         * set by external tools to store and retrieve arbitrary metadata. They are not
         * queryable and should be preserved when modifying objects.
         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
         */
        "annotations"?: {
          [key: string]: string;
        };
        /**
         * Map of string keys and values that can be used to organize and categorize
         * (scope and select) objects. May match selectors of replication controllers
         * and services.
         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
         */
        "labels"?: {
          [key: string]: string;
        };
      };
      /**
       * NodeClaimSpec describes the desired state of the NodeClaim
       */
      "spec": {
        /**
         * Kubelet defines args to be used when configuring kubelet on provisioned nodes.
         * They are a subset of the upstream types, recognizing not all options may be supported.
         * Wherever possible, the types and names should reflect the upstream kubelet types.
         */
        "kubelet"?: {
          /**
           * clusterDNS is a list of IP addresses for the cluster DNS server.
           * Note that not all providers may use all addresses.
           */
          "clusterDNS"?: Array<string>;
          /**
           * CPUCFSQuota enables CPU CFS quota enforcement for containers that specify CPU limits.
           */
          "cpuCFSQuota"?: boolean;
          /**
           * EvictionHard is the map of signal names to quantities that define hard eviction thresholds
           */
          "evictionHard"?: {
            [key: string]: string;
          };
          /**
           * EvictionMaxPodGracePeriod is the maximum allowed grace period (in seconds) to use when terminating pods in
           * response to soft eviction thresholds being met.
           */
          "evictionMaxPodGracePeriod"?: number;
          /**
           * EvictionSoft is the map of signal names to quantities that define soft eviction thresholds
           */
          "evictionSoft"?: {
            [key: string]: string;
          };
          /**
           * EvictionSoftGracePeriod is the map of signal names to quantities that define grace periods for each eviction signal
           */
          "evictionSoftGracePeriod"?: {
            [key: string]: string;
          };
          /**
           * ImageGCHighThresholdPercent is the percent of disk usage after which image
           * garbage collection is always run. The percent is calculated by dividing this
           * field value by 100, so this field must be between 0 and 100, inclusive.
           * When specified, the value must be greater than ImageGCLowThresholdPercent.
           */
          "imageGCHighThresholdPercent"?: number;
          /**
           * ImageGCLowThresholdPercent is the percent of disk usage before which image
           * garbage collection is never run. Lowest disk usage to garbage collect to.
           * The percent is calculated by dividing this field value by 100,
           * so the field value must be between 0 and 100, inclusive.
           * When specified, the value must be less than imageGCHighThresholdPercent
           */
          "imageGCLowThresholdPercent"?: number;
          /**
           * KubeReserved contains resources reserved for Kubernetes system components.
           */
          "kubeReserved"?: {
            [key: string]: number | string;
          };
          /**
           * MaxPods is an override for the maximum number of pods that can run on
           * a worker node instance.
           */
          "maxPods"?: number;
          /**
           * PodsPerCore is an override for the number of pods that can run on a worker node
           * instance based on the number of cpu cores. This value cannot exceed MaxPods, so, if
           * MaxPods is a lower value, that value will be used.
           */
          "podsPerCore"?: number;
          /**
           * SystemReserved contains resources reserved for OS system daemons and kernel memory.
           */
          "systemReserved"?: {
            [key: string]: number | string;
          };
        };
        /**
         * NodeClassRef is a reference to an object that defines provider specific configuration
         */
        "nodeClassRef": {
          /**
           * API version of the referent
           */
          "apiVersion"?: string;
          /**
           * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds"
           */
          "kind"?: string;
          /**
           * Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
           */
          "name": string;
        };
        /**
         * Requirements are layered with GetLabels and applied to every node.
         */
        "requirements": Array<{
          /**
           * The label key that the selector applies to.
           */
          "key": string;
          /**
           * This field is ALPHA and can be dropped or replaced at any time
           * MinValues is the minimum number of unique values required to define the flexibility of the specific requirement.
           */
          "minValues"?: number;
          /**
           * Represents a key's relationship to a set of values.
           * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
           */
          "operator": "In" | "NotIn" | "Exists" | "DoesNotExist" | "Gt" | "Lt";
          /**
           * An array of string values. If the operator is In or NotIn,
           * the values array must be non-empty. If the operator is Exists or DoesNotExist,
           * the values array must be empty. If the operator is Gt or Lt, the values
           * array must have a single element, which will be interpreted as an integer.
           * This array is replaced during a strategic merge patch.
           */
          "values"?: Array<string>;
        }>;
        /**
         * Resources models the resource requirements for the NodeClaim to launch
         */
        "resources"?: {
          /**
           * Requests describes the minimum required resources for the NodeClaim to launch
           */
          "requests"?: {
            [key: string]: number | string;
          };
        };
        /**
         * StartupTaints are taints that are applied to nodes upon startup which are expected to be removed automatically
         * within a short period of time, typically by a DaemonSet that tolerates the taint. These are commonly used by
         * daemonsets to allow initialization and enforce startup ordering.  StartupTaints are ignored for provisioning
         * purposes in that pods are not required to tolerate a StartupTaint in order to have nodes provisioned for them.
         */
        "startupTaints"?: Array<{
          /**
           * Required. The effect of the taint on pods
           * that do not tolerate the taint.
           * Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
           */
          "effect": "NoSchedule" | "PreferNoSchedule" | "NoExecute";
          /**
           * Required. The taint key to be applied to a node.
           */
          "key": string;
          /**
           * TimeAdded represents the time at which the taint was added.
           * It is only written for NoExecute taints.
           */
          "timeAdded"?: string;
          /**
           * The taint value corresponding to the taint key.
           */
          "value"?: string;
        }>;
        /**
         * Taints will be applied to the NodeClaim's node.
         */
        "taints"?: Array<{
          /**
           * Required. The effect of the taint on pods
           * that do not tolerate the taint.
           * Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
           */
          "effect": "NoSchedule" | "PreferNoSchedule" | "NoExecute";
          /**
           * Required. The taint key to be applied to a node.
           */
          "key": string;
          /**
           * TimeAdded represents the time at which the taint was added.
           * It is only written for NoExecute taints.
           */
          "timeAdded"?: string;
          /**
           * The taint value corresponding to the taint key.
           */
          "value"?: string;
        }>;
      };
    };
    /**
     * Weight is the priority given to the nodepool during scheduling. A higher
     * numerical weight indicates that this nodepool will be ordered
     * ahead of other nodepools with lower weights. A nodepool with no weight
     * will be treated as if it is a nodepool with a weight of 0.
     */
    "weight"?: number;
  };
  /**
   * NodePoolStatus defines the observed state of NodePool
   */
  "status"?: {
    /**
     * Resources is the list of resources that have been provisioned.
     */
    "resources"?: {
      [key: string]: number | string;
    };
  };
}

/**
 * NodePool is the Schema for the NodePools API
 */
export class NodePool extends Model<INodePool> implements INodePool {
  "apiVersion": INodePool["apiVersion"];
  "kind": INodePool["kind"];
  "metadata"?: INodePool["metadata"];
  "spec": INodePool["spec"];
  "status"?: INodePool["status"];

static apiVersion: INodePool["apiVersion"] = "karpenter.sh/v1beta1";
static kind: INodePool["kind"] = "NodePool";
static is = createTypeMetaGuard<INodePool>(NodePool);

constructor(data?: ModelData<INodePool>) {
  super();

  this.setDefinedProps({
    apiVersion: NodePool.apiVersion,
    kind: NodePool.kind,
    ...data
  } as INodePool);
}
}


setValidateFunc(NodePool, validate as ValidateFunc<INodePool>);
