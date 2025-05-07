import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IContainerNodePool {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "container.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "ContainerNodePool";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Configuration required by cluster autoscaler to adjust the size of the node pool to the current cluster usage. To disable autoscaling, set minNodeCount and maxNodeCount to 0.
         */
        "autoscaling"?: {
            /**
             * Location policy specifies the algorithm used when scaling-up the node pool. "BALANCED" - Is a best effort policy that aims to balance the sizes of available zones. "ANY" - Instructs the cluster autoscaler to prioritize utilization of unused reservations, and reduces preemption risk for Spot VMs.
             */
            "locationPolicy"?: string;
            /**
             * Maximum number of nodes per zone in the node pool. Must be >= min_node_count. Cannot be used with total limits.
             */
            "maxNodeCount"?: number;
            /**
             * Minimum number of nodes per zone in the node pool. Must be >=0 and <= max_node_count. Cannot be used with total limits.
             */
            "minNodeCount"?: number;
            /**
             * Maximum number of all nodes in the node pool. Must be >= total_min_node_count. Cannot be used with per zone limits.
             */
            "totalMaxNodeCount"?: number;
            /**
             * Minimum number of all nodes in the node pool. Must be >=0 and <= total_max_node_count. Cannot be used with per zone limits.
             */
            "totalMinNodeCount"?: number;
        };
        "clusterRef": {
            /**
             * Allowed value: The `name` field of a `ContainerCluster` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        } & (Exclude<{
            /**
             * Allowed value: The `name` field of a `ContainerCluster` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        }, {
            /**
             * Allowed value: The `name` field of a `ContainerCluster` resource.
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        }> | Exclude<{
            /**
             * Allowed value: The `name` field of a `ContainerCluster` resource.
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        }, {
            /**
             * Allowed value: The `name` field of a `ContainerCluster` resource.
             */
            "external": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        } & ({
            /**
             * Allowed value: The `name` field of a `ContainerCluster` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
        } | {
            /**
             * Allowed value: The `name` field of a `ContainerCluster` resource.
             */
            "external"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace": string;
        })>);
        /**
         * Immutable. The initial number of nodes for the pool. In regional or multi-zonal clusters, this is the number of nodes per zone. Changing this will force recreation of the resource.
         */
        "initialNodeCount"?: number;
        /**
         * Immutable. The location (region or zone) of the cluster.
         */
        "location": string;
        /**
         * Node management configuration, wherein auto-repair and auto-upgrade is configured.
         */
        "management"?: {
            /**
             * Whether the nodes will be automatically repaired.
             */
            "autoRepair"?: boolean;
            /**
             * Whether the nodes will be automatically upgraded.
             */
            "autoUpgrade"?: boolean;
        };
        /**
         * Immutable. The maximum number of pods per node in this node pool. Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.
         */
        "maxPodsPerNode"?: number;
        /**
         * Immutable. Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.
         */
        "namePrefix"?: string;
        /**
         * Networking configuration for this NodePool. If specified, it overrides the cluster-level defaults.
         */
        "networkConfig"?: {
            /**
             * Immutable. We specify the additional node networks for this node pool using this list. Each node network corresponds to an additional interface.
             */
            "additionalNodeNetworkConfigs"?: Array<{
                /**
                 * Immutable. Name of the VPC where the additional interface belongs.
                 */
                "networkRef"?: {
                    /**
                     * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
                     */
                    "external"?: string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                     */
                    "namespace"?: string;
                } & (Exclude<{
                    /**
                     * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
                     */
                    "external"?: string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name": string;
                    /**
                     * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                     */
                    "namespace"?: string;
                }, {
                    /**
                     * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
                     */
                    "external": string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                     */
                    "namespace"?: string;
                }> | Exclude<{
                    /**
                     * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
                     */
                    "external": string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                     */
                    "namespace"?: string;
                }, {
                    /**
                     * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
                     */
                    "external": string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                     */
                    "namespace"?: string;
                } & ({
                    /**
                     * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
                     */
                    "external"?: string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name": string;
                    /**
                     * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                     */
                    "namespace"?: string;
                } | {
                    /**
                     * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
                     */
                    "external"?: string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                     */
                    "namespace": string;
                })>);
                /**
                 * Immutable. Name of the subnetwork where the additional interface belongs.
                 */
                "subnetworkRef"?: {
                    /**
                     * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
                     */
                    "external"?: string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                     */
                    "namespace"?: string;
                } & (Exclude<{
                    /**
                     * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
                     */
                    "external"?: string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name": string;
                    /**
                     * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                     */
                    "namespace"?: string;
                }, {
                    /**
                     * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
                     */
                    "external": string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                     */
                    "namespace"?: string;
                }> | Exclude<{
                    /**
                     * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
                     */
                    "external": string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                     */
                    "namespace"?: string;
                }, {
                    /**
                     * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
                     */
                    "external": string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                     */
                    "namespace"?: string;
                } & ({
                    /**
                     * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
                     */
                    "external"?: string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name": string;
                    /**
                     * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                     */
                    "namespace"?: string;
                } | {
                    /**
                     * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
                     */
                    "external"?: string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                     */
                    "namespace": string;
                })>);
            }>;
            /**
             * Immutable. We specify the additional pod networks for this node pool using this list. Each pod network corresponds to an additional alias IP range for the node.
             */
            "additionalPodNetworkConfigs"?: Array<{
                /**
                 * Immutable. The maximum number of pods per node which use this pod network.
                 */
                "maxPodsPerNode"?: number;
                /**
                 * Immutable. The name of the secondary range on the subnet which provides IP address for this pod range.
                 */
                "secondaryPodRange"?: string;
                /**
                 * Immutable. Name of the subnetwork where the additional pod network belongs.
                 */
                "subnetworkRef"?: {
                    /**
                     * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
                     */
                    "external"?: string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                     */
                    "namespace"?: string;
                } & (Exclude<{
                    /**
                     * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
                     */
                    "external"?: string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name": string;
                    /**
                     * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                     */
                    "namespace"?: string;
                }, {
                    /**
                     * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
                     */
                    "external": string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                     */
                    "namespace"?: string;
                }> | Exclude<{
                    /**
                     * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
                     */
                    "external": string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                     */
                    "namespace"?: string;
                }, {
                    /**
                     * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
                     */
                    "external": string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                     */
                    "namespace"?: string;
                } & ({
                    /**
                     * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
                     */
                    "external"?: string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name": string;
                    /**
                     * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                     */
                    "namespace"?: string;
                } | {
                    /**
                     * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
                     */
                    "external"?: string;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                     */
                    "namespace": string;
                })>);
            }>;
            /**
             * Immutable. Whether to create a new range for pod IPs in this node pool. Defaults are provided for pod_range and pod_ipv4_cidr_block if they are not specified.
             */
            "createPodRange"?: boolean;
            /**
             * Whether nodes have internal IP addresses only.
             */
            "enablePrivateNodes"?: boolean;
            /**
             * Immutable. Configuration for node-pool level pod cidr overprovision. If not set, the cluster level setting will be inherited.
             */
            "podCidrOverprovisionConfig"?: {
                "disabled": boolean;
            };
            /**
             * Immutable. The IP address range for pod IPs in this node pool. Only applicable if create_pod_range is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) to pick a specific range to use.
             */
            "podIpv4CidrBlock"?: string;
            /**
             * Immutable. The ID of the secondary range for pod IPs. If create_pod_range is true, this ID is used for the new range. If create_pod_range is false, uses an existing secondary range with this ID.
             */
            "podRange"?: string;
        };
        /**
         * Immutable. The configuration of the nodepool.
         */
        "nodeConfig"?: {
            /**
             * Immutable. Specifies options for controlling advanced machine features.
             */
            "advancedMachineFeatures"?: {
                /**
                 * Immutable. The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.
                 */
                "threadsPerCore": number;
            };
            "bootDiskKMSCryptoKeyRef"?: {
                /**
                 * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
                 */
                "external"?: string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            } & (Exclude<{
                /**
                 * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
                 */
                "external"?: string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name": string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            }, {
                /**
                 * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
                 */
                "external": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            }> | Exclude<{
                /**
                 * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
                 */
                "external": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            }, {
                /**
                 * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
                 */
                "external": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            } & ({
                /**
                 * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
                 */
                "external"?: string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name": string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            } | {
                /**
                 * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
                 */
                "external"?: string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace": string;
            })>);
            /**
             * Immutable. Configuration for the confidential nodes feature, which makes nodes run on confidential VMs. Warning: This configuration can't be changed (or added/removed) after pool creation without deleting and recreating the entire pool.
             */
            "confidentialNodes"?: {
                /**
                 * Immutable. Whether Confidential Nodes feature is enabled for all nodes in this pool.
                 */
                "enabled": boolean;
            };
            /**
             * Immutable. Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
             */
            "diskSizeGb"?: number;
            /**
             * Immutable. Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd.
             */
            "diskType"?: string;
            /**
             * Immutable. Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.
             */
            "ephemeralStorageConfig"?: {
                /**
                 * Immutable. Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD must be 375 or 3000 GB in size, and all local SSDs must share the same size.
                 */
                "localSsdCount": number;
            };
            /**
             * Immutable. Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.
             */
            "ephemeralStorageLocalSsdConfig"?: {
                /**
                 * Immutable. Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD must be 375 or 3000 GB in size, and all local SSDs must share the same size.
                 */
                "localSsdCount": number;
            };
            /**
             * Enable or disable NCCL Fast Socket in the node pool.
             */
            "fastSocket"?: {
                /**
                 * Whether or not NCCL Fast Socket is enabled.
                 */
                "enabled": boolean;
            };
            /**
             * Immutable. GCFS configuration for this node.
             */
            "gcfsConfig"?: {
                /**
                 * Immutable. Whether or not GCFS is enabled.
                 */
                "enabled": boolean;
            };
            /**
             * Immutable. List of the type and count of accelerator cards attached to the instance.
             */
            "guestAccelerator"?: Array<{
                /**
                 * Immutable. The number of the accelerator cards exposed to an instance.
                 */
                "count": number;
                /**
                 * Immutable. Configuration for auto installation of GPU driver.
                 */
                "gpuDriverInstallationConfig"?: {
                    /**
                     * Immutable. Mode for how the GPU driver is installed.
                     */
                    "gpuDriverVersion": string;
                };
                /**
                 * Immutable. Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning).
                 */
                "gpuPartitionSize"?: string;
                /**
                 * Immutable. Configuration for GPU sharing.
                 */
                "gpuSharingConfig"?: {
                    /**
                     * Immutable. The type of GPU sharing strategy to enable on the GPU node. Possible values are described in the API package (https://pkg.go.dev/google.golang.org/api/container/v1#GPUSharingConfig).
                     */
                    "gpuSharingStrategy": string;
                    /**
                     * Immutable. The maximum number of containers that can share a GPU.
                     */
                    "maxSharedClientsPerGpu": number;
                };
                /**
                 * Immutable. The accelerator type resource name.
                 */
                "type": string;
            }>;
            /**
             * Immutable. Enable or disable gvnic in the node pool.
             */
            "gvnic"?: {
                /**
                 * Immutable. Whether or not gvnic is enabled.
                 */
                "enabled": boolean;
            };
            /**
             * Immutable. The maintenance policy for the hosts on which the GKE VMs run on.
             */
            "hostMaintenancePolicy"?: {
                /**
                 * Immutable. .
                 */
                "maintenanceInterval": string;
            };
            /**
             * The image type to use for this node. Note that for a given image type, the latest version of it will be used.
             */
            "imageType"?: string;
            /**
             * Node kubelet configs.
             */
            "kubeletConfig"?: {
                /**
                 * Enable CPU CFS quota enforcement for containers that specify CPU limits.
                 */
                "cpuCfsQuota"?: boolean;
                /**
                 * Set the CPU CFS quota period value 'cpu.cfs_period_us'.
                 */
                "cpuCfsQuotaPeriod"?: string;
                /**
                 * Control the CPU management policy on the node.
                 */
                "cpuManagerPolicy": string;
                /**
                 * Controls the maximum number of processes allowed to run in a pod.
                 */
                "podPidsLimit"?: number;
            };
            /**
             * The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.
             */
            "labels"?: {
                [key: string]: string;
            };
            /**
             * Parameters that can be configured on Linux nodes.
             */
            "linuxNodeConfig"?: {
                /**
                 * The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.
                 */
                "sysctls": {
                    [key: string]: string;
                };
            };
            /**
             * Immutable. Parameters for raw-block local NVMe SSDs.
             */
            "localNvmeSsdBlockConfig"?: {
                /**
                 * Immutable. Number of raw-block local NVMe SSD disks to be attached to the node. Each local SSD is 375 GB in size.
                 */
                "localSsdCount": number;
            };
            /**
             * Immutable. The number of local SSD disks to be attached to the node.
             */
            "localSsdCount"?: number;
            /**
             * Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
             */
            "loggingVariant"?: string;
            /**
             * Immutable. The name of a Google Compute Engine machine type.
             */
            "machineType"?: string;
            /**
             * Immutable. The metadata key/value pairs assigned to instances in the cluster.
             */
            "metadata"?: {
                [key: string]: string;
            };
            /**
             * Immutable. Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.
             */
            "minCpuPlatform"?: string;
            /**
             * Immutable. Setting this field will assign instances
             * of this pool to run on the specified node group. This is useful
             * for running workloads on sole tenant nodes.
             */
            "nodeGroupRef"?: {
                /**
                 * Allowed value: The `name` field of a `ComputeNodeGroup` resource.
                 */
                "external"?: string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            } & (Exclude<{
                /**
                 * Allowed value: The `name` field of a `ComputeNodeGroup` resource.
                 */
                "external"?: string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name": string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            }, {
                /**
                 * Allowed value: The `name` field of a `ComputeNodeGroup` resource.
                 */
                "external": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            }> | Exclude<{
                /**
                 * Allowed value: The `name` field of a `ComputeNodeGroup` resource.
                 */
                "external": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            }, {
                /**
                 * Allowed value: The `name` field of a `ComputeNodeGroup` resource.
                 */
                "external": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            } & ({
                /**
                 * Allowed value: The `name` field of a `ComputeNodeGroup` resource.
                 */
                "external"?: string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name": string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            } | {
                /**
                 * Allowed value: The `name` field of a `ComputeNodeGroup` resource.
                 */
                "external"?: string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace": string;
            })>);
            /**
             * Immutable. The set of Google API scopes to be made available on all of the node VMs.
             */
            "oauthScopes"?: Array<string>;
            /**
             * Immutable. Whether the nodes are created as preemptible VM instances.
             */
            "preemptible"?: boolean;
            /**
             * Immutable. The reservation affinity configuration for the node pool.
             */
            "reservationAffinity"?: {
                /**
                 * Immutable. Corresponds to the type of reservation consumption.
                 */
                "consumeReservationType": string;
                /**
                 * Immutable. The label key of a reservation resource.
                 */
                "key"?: string;
                /**
                 * Immutable. The label values of the reservation resource.
                 */
                "values"?: Array<string>;
            };
            /**
             * The GCE resource labels (a map of key/value pairs) to be applied to the node pool.
             */
            "resourceLabels"?: {
                [key: string]: string;
            };
            /**
             * Immutable. Sandbox configuration for this node.
             */
            "sandboxConfig"?: {
                /**
                 * Type of the sandbox to use for the node (e.g. 'gvisor').
                 */
                "sandboxType": string;
            };
            "serviceAccountRef"?: {
                /**
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
                 */
                "external"?: string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            } & (Exclude<{
                /**
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
                 */
                "external"?: string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name": string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            }, {
                /**
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
                 */
                "external": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            }> | Exclude<{
                /**
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
                 */
                "external": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            }, {
                /**
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
                 */
                "external": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            } & ({
                /**
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
                 */
                "external"?: string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name": string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            } | {
                /**
                 * Allowed value: The `email` field of an `IAMServiceAccount` resource.
                 */
                "external"?: string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace": string;
            })>);
            /**
             * Immutable. Shielded Instance options.
             */
            "shieldedInstanceConfig"?: {
                /**
                 * Immutable. Defines whether the instance has integrity monitoring enabled.
                 */
                "enableIntegrityMonitoring"?: boolean;
                /**
                 * Immutable. Defines whether the instance has Secure Boot enabled.
                 */
                "enableSecureBoot"?: boolean;
            };
            /**
             * Immutable. Node affinity options for sole tenant node pools.
             */
            "soleTenantConfig"?: {
                /**
                 * Immutable. .
                 */
                "nodeAffinity": Array<{
                    /**
                     * Immutable. .
                     */
                    "key": string;
                    /**
                     * Immutable. .
                     */
                    "operator": string;
                    /**
                     * Immutable. .
                     */
                    "values": Array<string>;
                }>;
            };
            /**
             * Immutable. Whether the nodes are created as spot VM instances.
             */
            "spot"?: boolean;
            /**
             * The list of instance tags applied to all nodes.
             */
            "tags"?: Array<string>;
            /**
             * Immutable. List of Kubernetes taints to be applied to each node.
             */
            "taint"?: Array<{
                /**
                 * Immutable. Effect for taint.
                 */
                "effect": string;
                /**
                 * Immutable. Key for taint.
                 */
                "key": string;
                /**
                 * Immutable. Value for taint.
                 */
                "value": string;
            }>;
            /**
             * The workload metadata configuration for this node.
             */
            "workloadMetadataConfig"?: {
                /**
                 * Mode is the configuration for how to expose metadata to workloads running on the node.
                 */
                "mode"?: string;
                /**
                 * DEPRECATED. Deprecated in favor of mode. NodeMetadata is the configuration for how to expose metadata to the workloads running on the node.
                 */
                "nodeMetadata"?: string;
            };
        };
        /**
         * The number of nodes per instance group. This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.
         */
        "nodeCount"?: number;
        /**
         * The list of zones in which the node pool's nodes should be located. Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If unspecified, the cluster-level node_locations will be used.
         */
        "nodeLocations"?: Array<string>;
        /**
         * Immutable. Specifies the node placement policy.
         */
        "placementPolicy"?: {
            /**
             * Immutable. If set, refers to the name of a custom resource policy supplied by the user. The resource policy must be in the same project and region as the node pool. If not found, InvalidArgument error is returned.
             */
            "policyNameRef"?: {
                /**
                 * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
                 */
                "external"?: string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            } & (Exclude<{
                /**
                 * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
                 */
                "external"?: string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name": string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            }, {
                /**
                 * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
                 */
                "external": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            }> | Exclude<{
                /**
                 * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
                 */
                "external": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            }, {
                /**
                 * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
                 */
                "external": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            } & ({
                /**
                 * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
                 */
                "external"?: string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name": string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace"?: string;
            } | {
                /**
                 * Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
                 */
                "external"?: string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name"?: string;
                /**
                 * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                 */
                "namespace": string;
            })>);
            /**
             * TPU placement topology for pod slice node pool. https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies.
             */
            "tpuTopology"?: string;
            /**
             * Type defines the type of placement policy.
             */
            "type": string;
        };
        /**
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
        /**
         * Specify node upgrade settings to change how many nodes GKE attempts to upgrade at once. The number of nodes upgraded simultaneously is the sum of max_surge and max_unavailable. The maximum number of nodes upgraded simultaneously is limited to 20.
         */
        "upgradeSettings"?: {
            /**
             * Settings for BlueGreen node pool upgrade.
             */
            "blueGreenSettings"?: {
                /**
                 * Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.
                 */
                "nodePoolSoakDuration"?: string;
                /**
                 * Standard rollout policy is the default policy for blue-green.
                 */
                "standardRolloutPolicy": {
                    /**
                     * Number of blue nodes to drain in a batch.
                     */
                    "batchNodeCount"?: number;
                    /**
                     * Percentage of the blue pool nodes to drain in a batch.
                     */
                    "batchPercentage"?: number;
                    /**
                     * Soak time after each batch gets drained.
                     */
                    "batchSoakDuration"?: string;
                };
            };
            /**
             * The number of additional nodes that can be added to the node pool during an upgrade. Increasing max_surge raises the number of nodes that can be upgraded simultaneously. Can be set to 0 or greater.
             */
            "maxSurge"?: number;
            /**
             * The number of nodes that can be simultaneously unavailable during an upgrade. Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater.
             */
            "maxUnavailable"?: number;
            /**
             * Update strategy for the given nodepool.
             */
            "strategy"?: string;
        };
        "version"?: string;
    };
    "status"?: {
        /**
         * Conditions represent the latest available observation of the resource's current state.
         */
        "conditions"?: Array<{
            /**
             * Last time the condition transitioned from one status to another.
             */
            "lastTransitionTime"?: string;
            /**
             * Human-readable message indicating details about last transition.
             */
            "message"?: string;
            /**
             * Unique, one-word, CamelCase reason for the condition's last transition.
             */
            "reason"?: string;
            /**
             * Status is the status of the condition. Can be True, False, Unknown.
             */
            "status"?: string;
            /**
             * Type is the type of the condition.
             */
            "type"?: string;
        }>;
        /**
         * The resource URLs of the managed instance groups associated with this node pool.
         */
        "instanceGroupUrls"?: Array<string>;
        /**
         * List of instance group URLs which have been assigned to this node pool.
         */
        "managedInstanceGroupUrls"?: Array<string>;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        "operation"?: string;
    };
}
export declare class ContainerNodePool extends Model<IContainerNodePool> implements IContainerNodePool {
    "apiVersion": IContainerNodePool["apiVersion"];
    "kind": IContainerNodePool["kind"];
    "metadata"?: IContainerNodePool["metadata"];
    "spec": IContainerNodePool["spec"];
    "status"?: IContainerNodePool["status"];
    static apiVersion: IContainerNodePool["apiVersion"];
    static kind: IContainerNodePool["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IContainerNodePool>;
    constructor(data?: ModelData<IContainerNodePool>);
}
