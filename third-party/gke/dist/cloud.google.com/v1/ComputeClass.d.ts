import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * ComputeClass is a way to impact Cluster Autoscaler scaling
 * decisions based on user preferences. It gives control over preference of
 * hardware to be selected by Cluster Autoscaler.
 * Given ComputeClass affects only workloads using workload separation
 * label equal to CCs name, except ComputeClass with name default
 * which will be used for workloads not specifying any preferences.
 */
export interface IComputeClass {
    /**
     * APIVersion defines the versioned schema of this representation of an object.
     * Servers should convert recognized schemas to the latest internal value, and
     * may reject unrecognized values.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "cloud.google.com/v1";
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "ComputeClass";
    "metadata"?: IObjectMeta;
    /**
     * Specification of the ComputeClass object.
     * More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status.
     */
    "spec": {
        /**
         * ActiveMigration describes settings related to active reconciliation of
         * a given ComputeClass.
         */
        "activeMigration"?: {
            /**
             * OptimizeRulePriority defines whether workloads affected by given
             * ComputeClass should be migrated to nodepool defined by higher priority rule, if possible.
             */
            "optimizeRulePriority": boolean;
        };
        /**
         * AutoscalingPolicy describes settings related to active reconciliation of
         * a given ComputeClass.
         */
        "autoscalingPolicy"?: {
            /**
             * ConsolidationDelayMinutes determines how long a node should be unneeded before it is eligible for scale down.
             * Minimum duration is 1 minute, maximum is 24 hours or 1440 minutes
             */
            "consolidationDelayMinutes"?: number;
            /**
             * ConsolidationThreshold determines resource utilization threshold below which a node can be considered for scale down.
             */
            "consolidationThreshold"?: number;
            /**
             * GPUConsolidationThreshold determines GPU resource utilization threshold below which a node can be considered for scale down.
             * Utilization calculation only cares about GPU resource for accelerator node, CPU and memory utilization will be ignored.
             */
            "gpuConsolidationThreshold"?: number;
        };
        /**
         * NodePoolAutoCreation describes the auto provisioning settings for a given
         * ComputeClass.
         */
        "nodePoolAutoCreation"?: {
            /**
             * Enabled indicates whether NodePoolAutoCreation is enabled for a given ComputeClass.
             */
            "enabled": boolean;
        };
        /**
         * Priorities is a description of user preferences to be
         * used by a given ComputeClass.
         */
        "priorities"?: Array<{
            /**
             * Gpu defines preferred GPU config for a node.
             */
            "gpu"?: {
                /**
                 * Count describes preferred count of GPUs for a node.
                 */
                "count"?: number;
                /**
                 * Type describes preferred GPU accelerator type for a node.
                 */
                "type"?: string;
            };
            /**
             * Machine family describes preferred instance family for a node. If none is specified,
             * the default autoprovisioning machine family is used.
             */
            "machineFamily"?: string;
            /**
             * MachineType defines preferred machine type for a node.
             */
            "machineType"?: string;
            /**
             * MinCores describes a minimum number of CPU cores of a node.
             */
            "minCores"?: number;
            /**
             * MinMemoryGb describes a minimum GBs of memory of a node.
             */
            "minMemoryGb"?: number;
            /**
             * Nodepools describes preference of specific, preexisting nodepools.
             */
            "nodepools"?: Array<string>;
            /**
             * Spot if set to true specifies that a node should be a spot instance, on-demand otherwise.
             */
            "spot"?: boolean;
            /**
             * Storage describes storage config of a node.
             */
            "storage"?: {
                /**
                 * BootDiskKMSKey defines a key used to encrypt the boot disk attached.
                 */
                "bootDiskKMSKey"?: string;
                /**
                 * BootDiskSize defines the size of a disk attached to node, specified in GB.
                 */
                "bootDiskSize"?: number;
                /**
                 * BootDiskType defines type of the disk attached to the node.
                 * Note that available boot disk types depend on the machine family / machine type selected.
                 * Currently supported types:
                 * \* pd-balanced
                 * \* pd-standard
                 * \* pd-ssd
                 * \* hyperdisk-balanced
                 */
                "bootDiskType"?: "pd-balanced" | "pd-standard" | "pd-ssd" | "hyperdisk-balanced";
                /**
                 * LocalSSDCount defines a number of local SSDs attached to node.
                 */
                "localSSDCount"?: number;
            };
            /**
             * Tpu defines preferred TPU config for a node.
             */
            "tpu"?: {
                /**
                 * Count describes preferred count of TPU chips for a node.
                 */
                "count"?: number;
                /**
                 * Topology describes preferred TPU topology of a node.
                 */
                "topology"?: string;
                /**
                 * Type describes preferred TPU type for a node.
                 */
                "type"?: string;
            };
        }>;
        /**
         * WhenUnsatisfiable describes autoscaler behaviour in case none
         * of the provided priorities is satisfiable.
         * Currently supported values:
         * \* ScaleUpAnyway
         * \* DoNotScaleUp
         */
        "whenUnsatisfiable": "ScaleUpAnyway" | "DoNotScaleUp";
    };
    /**
     * Status of the ComputeClass.
     */
    "status"?: {
        /**
         * Conditions represent the observations of a ComputeClass's current state.
         */
        "conditions"?: Array<{
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another.
             * This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            "lastTransitionTime": string;
            /**
             * message is a human readable message indicating details about the transition.
             * This may be an empty string.
             */
            "message": string;
            /**
             * observedGeneration represents the .metadata.generation that the condition was set based upon.
             * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
             * with respect to the current state of the instance.
             */
            "observedGeneration"?: number;
            /**
             * reason contains a programmatic identifier indicating the reason for the condition's last transition.
             * Producers of specific condition types may define expected values and meanings for this field,
             * and whether the values are considered a guaranteed API.
             * The value should be a CamelCase string.
             * This field may not be empty.
             */
            "reason": string;
            /**
             * status of the condition, one of True, False, Unknown.
             */
            "status": "True" | "False" | "Unknown";
            /**
             * type of condition in CamelCase or in foo.example.com/CamelCase.
             * ---
             * Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be
             * useful (see .node.status.conditions), the ability to deconflict is important.
             * The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
             */
            "type": string;
        }>;
    };
}
/**
 * ComputeClass is a way to impact Cluster Autoscaler scaling
 * decisions based on user preferences. It gives control over preference of
 * hardware to be selected by Cluster Autoscaler.
 * Given ComputeClass affects only workloads using workload separation
 * label equal to CCs name, except ComputeClass with name default
 * which will be used for workloads not specifying any preferences.
 */
export declare class ComputeClass extends Model<IComputeClass> implements IComputeClass {
    "apiVersion": IComputeClass["apiVersion"];
    "kind": IComputeClass["kind"];
    "metadata"?: IComputeClass["metadata"];
    "spec": IComputeClass["spec"];
    "status"?: IComputeClass["status"];
    static apiVersion: IComputeClass["apiVersion"];
    static kind: IComputeClass["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IComputeClass>;
    constructor(data?: ModelData<IComputeClass>);
}
