import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * NodeClaim is the Schema for the NodeClaims API
 */
export interface INodeClaim {
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
    "kind": "NodeClaim";
    "metadata"?: IObjectMeta;
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
    /**
     * NodeClaimStatus defines the observed state of NodeClaim
     */
    "status"?: {
        /**
         * Allocatable is the estimated allocatable capacity of the node
         */
        "allocatable"?: {
            [key: string]: number | string;
        };
        /**
         * Capacity is the estimated full capacity of the node
         */
        "capacity"?: {
            [key: string]: number | string;
        };
        /**
         * Conditions contains signals for health and readiness
         */
        "conditions"?: Array<{
            /**
             * LastTransitionTime is the last time the condition transitioned from one status to another.
             * We use VolatileTime in place of metav1.Time to exclude this from creating equality.Semantic
             * differences (all other things held constant).
             */
            "lastTransitionTime"?: string;
            /**
             * A human readable message indicating details about the transition.
             */
            "message"?: string;
            /**
             * The reason for the condition's last transition.
             */
            "reason"?: string;
            /**
             * Severity with which to treat failures of this type of condition.
             * When this is not specified, it defaults to Error.
             */
            "severity"?: string;
            /**
             * Status of the condition, one of True, False, Unknown.
             */
            "status": string;
            /**
             * Type of condition.
             */
            "type": string;
        }>;
        /**
         * ImageID is an identifier for the image that runs on the node
         */
        "imageID"?: string;
        /**
         * NodeName is the name of the corresponding node object
         */
        "nodeName"?: string;
        /**
         * ProviderID of the corresponding node object
         */
        "providerID"?: string;
    };
}
/**
 * NodeClaim is the Schema for the NodeClaims API
 */
export declare class NodeClaim extends Model<INodeClaim> implements INodeClaim {
    "apiVersion": INodeClaim["apiVersion"];
    "kind": INodeClaim["kind"];
    "metadata"?: INodeClaim["metadata"];
    "spec": INodeClaim["spec"];
    "status"?: INodeClaim["status"];
    static apiVersion: INodeClaim["apiVersion"];
    static kind: INodeClaim["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<INodeClaim>;
    constructor(data?: ModelData<INodeClaim>);
}
