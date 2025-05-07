import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * ContourDeployment is the schema for a Contour Deployment.
 */
export interface IContourDeployment {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "projectcontour.io/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "ContourDeployment";
    "metadata"?: IObjectMeta;
    /**
     * ContourDeploymentSpec specifies options for how a Contour instance should be provisioned.
     */
    "spec"?: {
        /**
         * Contour specifies deployment-time settings for the Contour part of the installation, i.e. the xDS server/control plane and associated resources, including things like replica count for the Deployment, and node placement constraints for the pods.
         */
        "contour"?: {
            /**
             * Deployment describes the settings for running contour as a `Deployment`.
             */
            "deployment"?: {
                /**
                 * Replicas is the desired number of replicas.
                 */
                "replicas"?: number;
                /**
                 * Strategy describes the deployment strategy to use to replace existing pods with new pods.
                 */
                "strategy"?: {
                    /**
                     * Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate. --- TODO: Update this to follow our convention for oneOf, whatever we decide it to be.
                     */
                    "rollingUpdate"?: {
                        /**
                         * The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new ReplicaSet can be scaled up further, ensuring that total number of pods running at any time during the update is at most 130% of desired pods.
                         */
                        "maxSurge"?: number | string;
                        /**
                         * The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old ReplicaSet can be scaled down further, followed by scaling up the new ReplicaSet, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods.
                         */
                        "maxUnavailable"?: number | string;
                    };
                    /**
                     * Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.
                     */
                    "type"?: string;
                };
            };
            /**
             * KubernetesLogLevel Enable Kubernetes client debug logging with log level. If unset, defaults to 0.
             */
            "kubernetesLogLevel"?: number;
            /**
             * LogLevel sets the log level for Contour Allowed values are "info", "debug".
             */
            "logLevel"?: string;
            /**
             * NodePlacement describes node scheduling configuration of Contour pods.
             */
            "nodePlacement"?: {
                /**
                 * NodeSelector is the simplest recommended form of node selection constraint and specifies a map of key-value pairs. For the pod to be eligible to run on a node, the node must have each of the indicated key-value pairs as labels (it can have additional labels as well).
                 *  If unset, the pod(s) will be scheduled to any available node.
                 */
                "nodeSelector"?: {
                    [key: string]: string;
                };
                /**
                 * Tolerations work with taints to ensure that pods are not scheduled onto inappropriate nodes. One or more taints are applied to a node; this marks that the node should not accept any pods that do not tolerate the taints.
                 *  The default is an empty list.
                 *  See https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/ for additional details.
                 */
                "tolerations"?: Array<{
                    /**
                     * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
                     */
                    "effect"?: string;
                    /**
                     * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
                     */
                    "key"?: string;
                    /**
                     * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
                     */
                    "operator"?: string;
                    /**
                     * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
                     */
                    "tolerationSeconds"?: number;
                    /**
                     * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
                     */
                    "value"?: string;
                }>;
            };
            /**
             * Deprecated: Use `DeploymentSettings.Replicas` instead.
             *  Replicas is the desired number of Contour replicas. If if unset, defaults to 2.
             *  if both `DeploymentSettings.Replicas` and this one is set, use `DeploymentSettings.Replicas`.
             */
            "replicas"?: number;
            /**
             * Compute Resources required by contour container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            "resources"?: {
                /**
                 * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.
                 *  This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.
                 *  This field is immutable. It can only be set for containers.
                 */
                "claims"?: Array<{
                    /**
                     * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
                     */
                    "name": string;
                }>;
                /**
                 * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                 */
                "limits"?: {
                    [key: string]: number | string;
                };
                /**
                 * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                 */
                "requests"?: {
                    [key: string]: number | string;
                };
            };
        };
        /**
         * Envoy specifies deployment-time settings for the Envoy part of the installation, i.e. the xDS client/data plane and associated resources, including things like the workload type to use (DaemonSet or Deployment), node placement constraints for the pods, and various options for the Envoy service.
         */
        "envoy"?: {
            /**
             * DaemonSet describes the settings for running envoy as a `DaemonSet`. if `WorkloadType` is `Deployment`,it's must be nil
             */
            "daemonSet"?: {
                /**
                 * Strategy describes the deployment strategy to use to replace existing DaemonSet pods with new pods.
                 */
                "updateStrategy"?: {
                    /**
                     * Rolling update config params. Present only if type = "RollingUpdate". --- TODO: Update this to follow our convention for oneOf, whatever we decide it to be. Same as Deployment `strategy.rollingUpdate`. See https://github.com/kubernetes/kubernetes/issues/35345
                     */
                    "rollingUpdate"?: {
                        /**
                         * The maximum number of nodes with an existing available DaemonSet pod that can have an updated DaemonSet pod during during an update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up to a minimum of 1. Default value is 0. Example: when this is set to 30%, at most 30% of the total number of nodes that should be running the daemon pod (i.e. status.desiredNumberScheduled) can have their a new pod created before the old pod is marked as deleted. The update starts by launching new pods on 30% of nodes. Once an updated pod is available (Ready for at least minReadySeconds) the old DaemonSet pod on that node is marked deleted. If the old pod becomes unavailable for any reason (Ready transitions to false, is evicted, or is drained) an updated pod is immediatedly created on that node without considering surge limits. Allowing surge implies the possibility that the resources consumed by the daemonset on any given node can double if the readiness check fails, and so resource intensive daemonsets should take into account that they may cause evictions during disruption.
                         */
                        "maxSurge"?: number | string;
                        /**
                         * The maximum number of DaemonSet pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of total number of DaemonSet pods at the start of the update (ex: 10%). Absolute number is calculated from percentage by rounding up. This cannot be 0 if MaxSurge is 0 Default value is 1. Example: when this is set to 30%, at most 30% of the total number of nodes that should be running the daemon pod (i.e. status.desiredNumberScheduled) can have their pods stopped for an update at any given time. The update starts by stopping at most 30% of those DaemonSet pods and then brings up new DaemonSet pods in their place. Once the new pods are available, it then proceeds onto other DaemonSet pods, thus ensuring that at least 70% of original number of DaemonSet pods are available at all times during the update.
                         */
                        "maxUnavailable"?: number | string;
                    };
                    /**
                     * Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is RollingUpdate.
                     */
                    "type"?: string;
                };
            };
            /**
             * Deployment describes the settings for running envoy as a `Deployment`. if `WorkloadType` is `DaemonSet`,it's must be nil
             */
            "deployment"?: {
                /**
                 * Replicas is the desired number of replicas.
                 */
                "replicas"?: number;
                /**
                 * Strategy describes the deployment strategy to use to replace existing pods with new pods.
                 */
                "strategy"?: {
                    /**
                     * Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate. --- TODO: Update this to follow our convention for oneOf, whatever we decide it to be.
                     */
                    "rollingUpdate"?: {
                        /**
                         * The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new ReplicaSet can be scaled up further, ensuring that total number of pods running at any time during the update is at most 130% of desired pods.
                         */
                        "maxSurge"?: number | string;
                        /**
                         * The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old ReplicaSet can be scaled down further, followed by scaling up the new ReplicaSet, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods.
                         */
                        "maxUnavailable"?: number | string;
                    };
                    /**
                     * Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.
                     */
                    "type"?: string;
                };
            };
            /**
             * ExtraVolumeMounts holds the extra volume mounts to add (normally used with extraVolumes).
             */
            "extraVolumeMounts"?: Array<{
                /**
                 * Path within the container at which the volume should be mounted.  Must not contain ':'.
                 */
                "mountPath": string;
                /**
                 * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
                 */
                "mountPropagation"?: string;
                /**
                 * This must match the Name of a Volume.
                 */
                "name": string;
                /**
                 * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
                 */
                "readOnly"?: boolean;
                /**
                 * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
                 */
                "subPath"?: string;
                /**
                 * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to "" (volume's root). SubPathExpr and SubPath are mutually exclusive.
                 */
                "subPathExpr"?: string;
            }>;
            /**
             * ExtraVolumes holds the extra volumes to add.
             */
            "extraVolumes"?: Array<{
                /**
                 * awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
                 */
                "awsElasticBlockStore"?: {
                    /**
                     * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore TODO: how do we prevent errors in the filesystem from compromising the machine
                     */
                    "fsType"?: string;
                    /**
                     * partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).
                     */
                    "partition"?: number;
                    /**
                     * readOnly value true will force the readOnly setting in VolumeMounts. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
                     */
                    "readOnly"?: boolean;
                    /**
                     * volumeID is unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
                     */
                    "volumeID": string;
                };
                /**
                 * azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
                 */
                "azureDisk"?: {
                    /**
                     * cachingMode is the Host Caching mode: None, Read Only, Read Write.
                     */
                    "cachingMode"?: string;
                    /**
                     * diskName is the Name of the data disk in the blob storage
                     */
                    "diskName": string;
                    /**
                     * diskURI is the URI of data disk in the blob storage
                     */
                    "diskURI": string;
                    /**
                     * fsType is Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                     */
                    "fsType"?: string;
                    /**
                     * kind expected values are Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared
                     */
                    "kind"?: string;
                    /**
                     * readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
                     */
                    "readOnly"?: boolean;
                };
                /**
                 * azureFile represents an Azure File Service mount on the host and bind mount to the pod.
                 */
                "azureFile"?: {
                    /**
                     * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
                     */
                    "readOnly"?: boolean;
                    /**
                     * secretName is the  name of secret that contains Azure Storage Account Name and Key
                     */
                    "secretName": string;
                    /**
                     * shareName is the azure share Name
                     */
                    "shareName": string;
                };
                /**
                 * cephFS represents a Ceph FS mount on the host that shares a pod's lifetime
                 */
                "cephfs"?: {
                    /**
                     * monitors is Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
                     */
                    "monitors": Array<string>;
                    /**
                     * path is Optional: Used as the mounted root, rather than the full Ceph tree, default is /
                     */
                    "path"?: string;
                    /**
                     * readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
                     */
                    "readOnly"?: boolean;
                    /**
                     * secretFile is Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
                     */
                    "secretFile"?: string;
                    /**
                     * secretRef is Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
                     */
                    "secretRef"?: {
                        /**
                         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                         */
                        "name"?: string;
                    };
                    /**
                     * user is optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
                     */
                    "user"?: string;
                };
                /**
                 * cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
                 */
                "cinder"?: {
                    /**
                     * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
                     */
                    "fsType"?: string;
                    /**
                     * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
                     */
                    "readOnly"?: boolean;
                    /**
                     * secretRef is optional: points to a secret object containing parameters used to connect to OpenStack.
                     */
                    "secretRef"?: {
                        /**
                         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                         */
                        "name"?: string;
                    };
                    /**
                     * volumeID used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
                     */
                    "volumeID": string;
                };
                /**
                 * configMap represents a configMap that should populate this volume
                 */
                "configMap"?: {
                    /**
                     * defaultMode is optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                     */
                    "defaultMode"?: number;
                    /**
                     * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
                     */
                    "items"?: Array<{
                        /**
                         * key is the key to project.
                         */
                        "key": string;
                        /**
                         * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                         */
                        "mode"?: number;
                        /**
                         * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
                         */
                        "path": string;
                    }>;
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                     */
                    "name"?: string;
                    /**
                     * optional specify whether the ConfigMap or its keys must be defined
                     */
                    "optional"?: boolean;
                };
                /**
                 * csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature).
                 */
                "csi"?: {
                    /**
                     * driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.
                     */
                    "driver": string;
                    /**
                     * fsType to mount. Ex. "ext4", "xfs", "ntfs". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.
                     */
                    "fsType"?: string;
                    /**
                     * nodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and  may be empty if no secret is required. If the secret object contains more than one secret, all secret references are passed.
                     */
                    "nodePublishSecretRef"?: {
                        /**
                         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                         */
                        "name"?: string;
                    };
                    /**
                     * readOnly specifies a read-only configuration for the volume. Defaults to false (read/write).
                     */
                    "readOnly"?: boolean;
                    /**
                     * volumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values.
                     */
                    "volumeAttributes"?: {
                        [key: string]: string;
                    };
                };
                /**
                 * downwardAPI represents downward API about the pod that should populate this volume
                 */
                "downwardAPI"?: {
                    /**
                     * Optional: mode bits to use on created files by default. Must be a Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                     */
                    "defaultMode"?: number;
                    /**
                     * Items is a list of downward API volume file
                     */
                    "items"?: Array<{
                        /**
                         * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
                         */
                        "fieldRef"?: {
                            /**
                             * Version of the schema the FieldPath is written in terms of, defaults to "v1".
                             */
                            "apiVersion"?: string;
                            /**
                             * Path of the field to select in the specified API version.
                             */
                            "fieldPath": string;
                        };
                        /**
                         * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                         */
                        "mode"?: number;
                        /**
                         * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
                         */
                        "path": string;
                        /**
                         * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
                         */
                        "resourceFieldRef"?: {
                            /**
                             * Container name: required for volumes, optional for env vars
                             */
                            "containerName"?: string;
                            /**
                             * Specifies the output format of the exposed resources, defaults to "1"
                             */
                            "divisor"?: number | string;
                            /**
                             * Required: resource to select
                             */
                            "resource": string;
                        };
                    }>;
                };
                /**
                 * emptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
                 */
                "emptyDir"?: {
                    /**
                     * medium represents what type of storage medium should back this directory. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
                     */
                    "medium"?: string;
                    /**
                     * sizeLimit is the total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir
                     */
                    "sizeLimit"?: number | string;
                };
                /**
                 * ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed.
                 *  Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity tracking are needed, c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through a PersistentVolumeClaim (see EphemeralVolumeSource for more information on the connection between this volume type and PersistentVolumeClaim).
                 *  Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod.
                 *  Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information.
                 *  A pod can use both types of ephemeral volumes and persistent volumes at the same time.
                 */
                "ephemeral"?: {
                    /**
                     * Will be used to create a stand-alone PVC to provision the volume. The pod in which this EphemeralVolumeSource is embedded will be the owner of the PVC, i.e. the PVC will be deleted together with the pod.  The name of the PVC will be `<pod name>-<volume name>` where `<volume name>` is the name from the `PodSpec.Volumes` array entry. Pod validation will reject the pod if the concatenated name is not valid for a PVC (for example, too long).
                     *  An existing PVC with that name that is not owned by the pod will \*not\* be used for the pod to avoid using an unrelated volume by mistake. Starting the pod is then blocked until the unrelated PVC is removed. If such a pre-created PVC is meant to be used by the pod, the PVC has to updated with an owner reference to the pod once the pod exists. Normally this should not be necessary, but it may be useful when manually reconstructing a broken cluster.
                     *  This field is read-only and no changes will be made by Kubernetes to the PVC after it has been created.
                     *  Required, must not be nil.
                     */
                    "volumeClaimTemplate"?: {
                        /**
                         * May contain labels and annotations that will be copied into the PVC when creating it. No other fields are allowed and will be rejected during validation.
                         */
                        "metadata"?: {};
                        /**
                         * The specification for the PersistentVolumeClaim. The entire content is copied unchanged into the PVC that gets created from this template. The same fields as in a PersistentVolumeClaim are also valid here.
                         */
                        "spec": {
                            /**
                             * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
                             */
                            "accessModes"?: Array<string>;
                            /**
                             * dataSource field can be used to specify either: \* An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) \* An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
                             */
                            "dataSource"?: {
                                /**
                                 * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
                                 */
                                "apiGroup"?: string;
                                /**
                                 * Kind is the type of resource being referenced
                                 */
                                "kind": string;
                                /**
                                 * Name is the name of resource being referenced
                                 */
                                "name": string;
                            };
                            /**
                             * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: \* While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. \* While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. \* While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
                             */
                            "dataSourceRef"?: {
                                /**
                                 * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
                                 */
                                "apiGroup"?: string;
                                /**
                                 * Kind is the type of resource being referenced
                                 */
                                "kind": string;
                                /**
                                 * Name is the name of resource being referenced
                                 */
                                "name": string;
                                /**
                                 * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
                                 */
                                "namespace"?: string;
                            };
                            /**
                             * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
                             */
                            "resources"?: {
                                /**
                                 * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.
                                 *  This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.
                                 *  This field is immutable. It can only be set for containers.
                                 */
                                "claims"?: Array<{
                                    /**
                                     * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
                                     */
                                    "name": string;
                                }>;
                                /**
                                 * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                                 */
                                "limits"?: {
                                    [key: string]: number | string;
                                };
                                /**
                                 * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                                 */
                                "requests"?: {
                                    [key: string]: number | string;
                                };
                            };
                            /**
                             * selector is a label query over volumes to consider for binding.
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
                            /**
                             * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
                             */
                            "storageClassName"?: string;
                            /**
                             * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
                             */
                            "volumeMode"?: string;
                            /**
                             * volumeName is the binding reference to the PersistentVolume backing this claim.
                             */
                            "volumeName"?: string;
                        };
                    };
                };
                /**
                 * fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
                 */
                "fc"?: {
                    /**
                     * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. TODO: how do we prevent errors in the filesystem from compromising the machine
                     */
                    "fsType"?: string;
                    /**
                     * lun is Optional: FC target lun number
                     */
                    "lun"?: number;
                    /**
                     * readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
                     */
                    "readOnly"?: boolean;
                    /**
                     * targetWWNs is Optional: FC target worldwide names (WWNs)
                     */
                    "targetWWNs"?: Array<string>;
                    /**
                     * wwids Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.
                     */
                    "wwids"?: Array<string>;
                };
                /**
                 * flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
                 */
                "flexVolume"?: {
                    /**
                     * driver is the name of the driver to use for this volume.
                     */
                    "driver": string;
                    /**
                     * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.
                     */
                    "fsType"?: string;
                    /**
                     * options is Optional: this field holds extra command options if any.
                     */
                    "options"?: {
                        [key: string]: string;
                    };
                    /**
                     * readOnly is Optional: defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
                     */
                    "readOnly"?: boolean;
                    /**
                     * secretRef is Optional: secretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.
                     */
                    "secretRef"?: {
                        /**
                         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                         */
                        "name"?: string;
                    };
                };
                /**
                 * flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running
                 */
                "flocker"?: {
                    /**
                     * datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
                     */
                    "datasetName"?: string;
                    /**
                     * datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset
                     */
                    "datasetUUID"?: string;
                };
                /**
                 * gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
                 */
                "gcePersistentDisk"?: {
                    /**
                     * fsType is filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk TODO: how do we prevent errors in the filesystem from compromising the machine
                     */
                    "fsType"?: string;
                    /**
                     * partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
                     */
                    "partition"?: number;
                    /**
                     * pdName is unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
                     */
                    "pdName": string;
                    /**
                     * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
                     */
                    "readOnly"?: boolean;
                };
                /**
                 * gitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
                 */
                "gitRepo"?: {
                    /**
                     * directory is the target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
                     */
                    "directory"?: string;
                    /**
                     * repository is the URL
                     */
                    "repository": string;
                    /**
                     * revision is the commit hash for the specified revision.
                     */
                    "revision"?: string;
                };
                /**
                 * glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md
                 */
                "glusterfs"?: {
                    /**
                     * endpoints is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
                     */
                    "endpoints": string;
                    /**
                     * path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
                     */
                    "path": string;
                    /**
                     * readOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
                     */
                    "readOnly"?: boolean;
                };
                /**
                 * hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath --- TODO(jonesdl) We need to restrict who can use host directory mounts and who can/can not mount host directories as read/write.
                 */
                "hostPath"?: {
                    /**
                     * path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
                     */
                    "path": string;
                    /**
                     * type for HostPath Volume Defaults to "" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
                     */
                    "type"?: string;
                };
                /**
                 * iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md
                 */
                "iscsi"?: {
                    /**
                     * chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication
                     */
                    "chapAuthDiscovery"?: boolean;
                    /**
                     * chapAuthSession defines whether support iSCSI Session CHAP authentication
                     */
                    "chapAuthSession"?: boolean;
                    /**
                     * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi TODO: how do we prevent errors in the filesystem from compromising the machine
                     */
                    "fsType"?: string;
                    /**
                     * initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
                     */
                    "initiatorName"?: string;
                    /**
                     * iqn is the target iSCSI Qualified Name.
                     */
                    "iqn": string;
                    /**
                     * iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
                     */
                    "iscsiInterface"?: string;
                    /**
                     * lun represents iSCSI Target Lun number.
                     */
                    "lun": number;
                    /**
                     * portals is the iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
                     */
                    "portals"?: Array<string>;
                    /**
                     * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
                     */
                    "readOnly"?: boolean;
                    /**
                     * secretRef is the CHAP Secret for iSCSI target and initiator authentication
                     */
                    "secretRef"?: {
                        /**
                         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                         */
                        "name"?: string;
                    };
                    /**
                     * targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
                     */
                    "targetPortal": string;
                };
                /**
                 * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                "name": string;
                /**
                 * nfs represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
                 */
                "nfs"?: {
                    /**
                     * path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
                     */
                    "path": string;
                    /**
                     * readOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
                     */
                    "readOnly"?: boolean;
                    /**
                     * server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
                     */
                    "server": string;
                };
                /**
                 * persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
                 */
                "persistentVolumeClaim"?: {
                    /**
                     * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
                     */
                    "claimName": string;
                    /**
                     * readOnly Will force the ReadOnly setting in VolumeMounts. Default false.
                     */
                    "readOnly"?: boolean;
                };
                /**
                 * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
                 */
                "photonPersistentDisk"?: {
                    /**
                     * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                     */
                    "fsType"?: string;
                    /**
                     * pdID is the ID that identifies Photon Controller persistent disk
                     */
                    "pdID": string;
                };
                /**
                 * portworxVolume represents a portworx volume attached and mounted on kubelets host machine
                 */
                "portworxVolume"?: {
                    /**
                     * fSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified.
                     */
                    "fsType"?: string;
                    /**
                     * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
                     */
                    "readOnly"?: boolean;
                    /**
                     * volumeID uniquely identifies a Portworx volume
                     */
                    "volumeID": string;
                };
                /**
                 * projected items for all in one resources secrets, configmaps, and downward API
                 */
                "projected"?: {
                    /**
                     * defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                     */
                    "defaultMode"?: number;
                    /**
                     * sources is the list of volume projections
                     */
                    "sources"?: Array<{
                        /**
                         * configMap information about the configMap data to project
                         */
                        "configMap"?: {
                            /**
                             * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
                             */
                            "items"?: Array<{
                                /**
                                 * key is the key to project.
                                 */
                                "key": string;
                                /**
                                 * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                                 */
                                "mode"?: number;
                                /**
                                 * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
                                 */
                                "path": string;
                            }>;
                            /**
                             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                             */
                            "name"?: string;
                            /**
                             * optional specify whether the ConfigMap or its keys must be defined
                             */
                            "optional"?: boolean;
                        };
                        /**
                         * downwardAPI information about the downwardAPI data to project
                         */
                        "downwardAPI"?: {
                            /**
                             * Items is a list of DownwardAPIVolume file
                             */
                            "items"?: Array<{
                                /**
                                 * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
                                 */
                                "fieldRef"?: {
                                    /**
                                     * Version of the schema the FieldPath is written in terms of, defaults to "v1".
                                     */
                                    "apiVersion"?: string;
                                    /**
                                     * Path of the field to select in the specified API version.
                                     */
                                    "fieldPath": string;
                                };
                                /**
                                 * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                                 */
                                "mode"?: number;
                                /**
                                 * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
                                 */
                                "path": string;
                                /**
                                 * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
                                 */
                                "resourceFieldRef"?: {
                                    /**
                                     * Container name: required for volumes, optional for env vars
                                     */
                                    "containerName"?: string;
                                    /**
                                     * Specifies the output format of the exposed resources, defaults to "1"
                                     */
                                    "divisor"?: number | string;
                                    /**
                                     * Required: resource to select
                                     */
                                    "resource": string;
                                };
                            }>;
                        };
                        /**
                         * secret information about the secret data to project
                         */
                        "secret"?: {
                            /**
                             * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
                             */
                            "items"?: Array<{
                                /**
                                 * key is the key to project.
                                 */
                                "key": string;
                                /**
                                 * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                                 */
                                "mode"?: number;
                                /**
                                 * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
                                 */
                                "path": string;
                            }>;
                            /**
                             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                             */
                            "name"?: string;
                            /**
                             * optional field specify whether the Secret or its key must be defined
                             */
                            "optional"?: boolean;
                        };
                        /**
                         * serviceAccountToken is information about the serviceAccountToken data to project
                         */
                        "serviceAccountToken"?: {
                            /**
                             * audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
                             */
                            "audience"?: string;
                            /**
                             * expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
                             */
                            "expirationSeconds"?: number;
                            /**
                             * path is the path relative to the mount point of the file to project the token into.
                             */
                            "path": string;
                        };
                    }>;
                };
                /**
                 * quobyte represents a Quobyte mount on the host that shares a pod's lifetime
                 */
                "quobyte"?: {
                    /**
                     * group to map volume access to Default is no group
                     */
                    "group"?: string;
                    /**
                     * readOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
                     */
                    "readOnly"?: boolean;
                    /**
                     * registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
                     */
                    "registry": string;
                    /**
                     * tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin
                     */
                    "tenant"?: string;
                    /**
                     * user to map volume access to Defaults to serivceaccount user
                     */
                    "user"?: string;
                    /**
                     * volume is a string that references an already created Quobyte volume by name.
                     */
                    "volume": string;
                };
                /**
                 * rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
                 */
                "rbd"?: {
                    /**
                     * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd TODO: how do we prevent errors in the filesystem from compromising the machine
                     */
                    "fsType"?: string;
                    /**
                     * image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                     */
                    "image": string;
                    /**
                     * keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                     */
                    "keyring"?: string;
                    /**
                     * monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                     */
                    "monitors": Array<string>;
                    /**
                     * pool is the rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                     */
                    "pool"?: string;
                    /**
                     * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                     */
                    "readOnly"?: boolean;
                    /**
                     * secretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                     */
                    "secretRef"?: {
                        /**
                         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                         */
                        "name"?: string;
                    };
                    /**
                     * user is the rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                     */
                    "user"?: string;
                };
                /**
                 * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
                 */
                "scaleIO"?: {
                    /**
                     * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs".
                     */
                    "fsType"?: string;
                    /**
                     * gateway is the host address of the ScaleIO API Gateway.
                     */
                    "gateway": string;
                    /**
                     * protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.
                     */
                    "protectionDomain"?: string;
                    /**
                     * readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
                     */
                    "readOnly"?: boolean;
                    /**
                     * secretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
                     */
                    "secretRef": {
                        /**
                         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                         */
                        "name"?: string;
                    };
                    /**
                     * sslEnabled Flag enable/disable SSL communication with Gateway, default false
                     */
                    "sslEnabled"?: boolean;
                    /**
                     * storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
                     */
                    "storageMode"?: string;
                    /**
                     * storagePool is the ScaleIO Storage Pool associated with the protection domain.
                     */
                    "storagePool"?: string;
                    /**
                     * system is the name of the storage system as configured in ScaleIO.
                     */
                    "system": string;
                    /**
                     * volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.
                     */
                    "volumeName"?: string;
                };
                /**
                 * secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
                 */
                "secret"?: {
                    /**
                     * defaultMode is Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                     */
                    "defaultMode"?: number;
                    /**
                     * items If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
                     */
                    "items"?: Array<{
                        /**
                         * key is the key to project.
                         */
                        "key": string;
                        /**
                         * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                         */
                        "mode"?: number;
                        /**
                         * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
                         */
                        "path": string;
                    }>;
                    /**
                     * optional field specify whether the Secret or its keys must be defined
                     */
                    "optional"?: boolean;
                    /**
                     * secretName is the name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
                     */
                    "secretName"?: string;
                };
                /**
                 * storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
                 */
                "storageos"?: {
                    /**
                     * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                     */
                    "fsType"?: string;
                    /**
                     * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
                     */
                    "readOnly"?: boolean;
                    /**
                     * secretRef specifies the secret to use for obtaining the StorageOS API credentials.  If not specified, default values will be attempted.
                     */
                    "secretRef"?: {
                        /**
                         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                         */
                        "name"?: string;
                    };
                    /**
                     * volumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace.
                     */
                    "volumeName"?: string;
                    /**
                     * volumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod's namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
                     */
                    "volumeNamespace"?: string;
                };
                /**
                 * vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
                 */
                "vsphereVolume"?: {
                    /**
                     * fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                     */
                    "fsType"?: string;
                    /**
                     * storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
                     */
                    "storagePolicyID"?: string;
                    /**
                     * storagePolicyName is the storage Policy Based Management (SPBM) profile name.
                     */
                    "storagePolicyName"?: string;
                    /**
                     * volumePath is the path that identifies vSphere volume vmdk
                     */
                    "volumePath": string;
                };
            }>;
            /**
             * LogLevel sets the log level for Envoy. Allowed values are "trace", "debug", "info", "warn", "error", "critical", "off".
             */
            "logLevel"?: string;
            /**
             * NetworkPublishing defines how to expose Envoy to a network.
             */
            "networkPublishing"?: {
                /**
                 * ExternalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's "externally-facing" addresses (NodePorts, ExternalIPs, and LoadBalancer IPs).
                 *  If unset, defaults to "Local".
                 */
                "externalTrafficPolicy"?: string;
                /**
                 * ServiceAnnotations is the annotations to add to the provisioned Envoy service.
                 */
                "serviceAnnotations"?: {
                    [key: string]: string;
                };
                /**
                 * NetworkPublishingType is the type of publishing strategy to use. Valid values are:
                 *  \* LoadBalancerService
                 *  In this configuration, network endpoints for Envoy use container networking. A Kubernetes LoadBalancer Service is created to publish Envoy network endpoints.
                 *  See: https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer
                 *  \* NodePortService
                 *  Publishes Envoy network endpoints using a Kubernetes NodePort Service.
                 *  In this configuration, Envoy network endpoints use container networking. A Kubernetes NodePort Service is created to publish the network endpoints.
                 *  See: https://kubernetes.io/docs/concepts/services-networking/service/#nodeport
                 *  NOTE: When provisioning an Envoy `NodePortService`, use Gateway Listeners' port numbers to populate the Service's node port values, there's no way to auto-allocate them.
                 *  See: https://github.com/projectcontour/contour/issues/4499
                 *  \* ClusterIPService
                 *  Publishes Envoy network endpoints using a Kubernetes ClusterIP Service.
                 *  In this configuration, Envoy network endpoints use container networking. A Kubernetes ClusterIP Service is created to publish the network endpoints.
                 *  See: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
                 *  If unset, defaults to LoadBalancerService.
                 */
                "type"?: string;
            };
            /**
             * NodePlacement describes node scheduling configuration of Envoy pods.
             */
            "nodePlacement"?: {
                /**
                 * NodeSelector is the simplest recommended form of node selection constraint and specifies a map of key-value pairs. For the pod to be eligible to run on a node, the node must have each of the indicated key-value pairs as labels (it can have additional labels as well).
                 *  If unset, the pod(s) will be scheduled to any available node.
                 */
                "nodeSelector"?: {
                    [key: string]: string;
                };
                /**
                 * Tolerations work with taints to ensure that pods are not scheduled onto inappropriate nodes. One or more taints are applied to a node; this marks that the node should not accept any pods that do not tolerate the taints.
                 *  The default is an empty list.
                 *  See https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/ for additional details.
                 */
                "tolerations"?: Array<{
                    /**
                     * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
                     */
                    "effect"?: string;
                    /**
                     * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
                     */
                    "key"?: string;
                    /**
                     * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
                     */
                    "operator"?: string;
                    /**
                     * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
                     */
                    "tolerationSeconds"?: number;
                    /**
                     * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
                     */
                    "value"?: string;
                }>;
            };
            /**
             * PodAnnotations defines annotations to add to the Envoy pods.
             */
            "podAnnotations"?: {
                [key: string]: string;
            };
            /**
             * Deprecated: Use `DeploymentSettings.Replicas` instead.
             *  Replicas is the desired number of Envoy replicas. If WorkloadType is not "Deployment", this field is ignored. Otherwise, if unset, defaults to 2.
             *  if both `DeploymentSettings.Replicas` and this one is set, use `DeploymentSettings.Replicas`.
             */
            "replicas"?: number;
            /**
             * Compute Resources required by envoy container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            "resources"?: {
                /**
                 * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.
                 *  This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.
                 *  This field is immutable. It can only be set for containers.
                 */
                "claims"?: Array<{
                    /**
                     * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
                     */
                    "name": string;
                }>;
                /**
                 * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                 */
                "limits"?: {
                    [key: string]: number | string;
                };
                /**
                 * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                 */
                "requests"?: {
                    [key: string]: number | string;
                };
            };
            /**
             * WorkloadType is the type of workload to install Envoy as. Choices are DaemonSet and Deployment. If unset, defaults to DaemonSet.
             */
            "workloadType"?: string;
        };
        /**
         * ResourceLabels is a set of labels to add to the provisioned Contour resources.
         */
        "resourceLabels"?: {
            [key: string]: string;
        };
        /**
         * RuntimeSettings is a ContourConfiguration spec to be used when provisioning a Contour instance that will influence aspects of the Contour instance's runtime behavior.
         */
        "runtimeSettings"?: {
            /**
             * Debug contains parameters to enable debug logging and debug interfaces inside Contour.
             */
            "debug"?: {
                /**
                 * Defines the Contour debug address interface.
                 *  Contour's default is "127.0.0.1".
                 */
                "address"?: string;
                /**
                 * Defines the Contour debug address port.
                 *  Contour's default is 6060.
                 */
                "port"?: number;
            };
            /**
             * EnableExternalNameService allows processing of ExternalNameServices
             *  Contour's default is false for security reasons.
             */
            "enableExternalNameService"?: boolean;
            /**
             * Envoy contains parameters for Envoy as well as how to optionally configure a managed Envoy fleet.
             */
            "envoy"?: {
                /**
                 * ClientCertificate defines the namespace/name of the Kubernetes secret containing the client certificate and private key to be used when establishing TLS connection to upstream cluster.
                 */
                "clientCertificate"?: {
                    "name": string;
                    "namespace": string;
                };
                /**
                 * Cluster holds various configurable Envoy cluster values that can be set in the config file.
                 */
                "cluster"?: {
                    /**
                     * DNSLookupFamily defines how external names are looked up When configured as V4, the DNS resolver will only perform a lookup for addresses in the IPv4 family. If V6 is configured, the DNS resolver will only perform a lookup for addresses in the IPv6 family. If AUTO is configured, the DNS resolver will first perform a lookup for addresses in the IPv6 family and fallback to a lookup for addresses in the IPv4 family. If ALL is specified, the DNS resolver will perform a lookup for both IPv4 and IPv6 families, and return all resolved addresses. When this is used, Happy Eyeballs will be enabled for upstream connections. Refer to Happy Eyeballs Support for more information. Note: This only applies to externalName clusters.
                     *  See https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto.html#envoy-v3-api-enum-config-cluster-v3-cluster-dnslookupfamily for more information.
                     *  Values: `auto` (default), `v4`, `v6`, `all`.
                     *  Other values will produce an error.
                     */
                    "dnsLookupFamily"?: string;
                };
                /**
                 * DefaultHTTPVersions defines the default set of HTTPS versions the proxy should accept. HTTP versions are strings of the form "HTTP/xx". Supported versions are "HTTP/1.1" and "HTTP/2".
                 *  Values: `HTTP/1.1`, `HTTP/2` (default: both).
                 *  Other values will produce an error.
                 */
                "defaultHTTPVersions"?: Array<string>;
                /**
                 * Health defines the endpoint Envoy uses to serve health checks.
                 *  Contour's default is { address: "0.0.0.0", port: 8002 }.
                 */
                "health"?: {
                    /**
                     * Defines the health address interface.
                     */
                    "address"?: string;
                    /**
                     * Defines the health port.
                     */
                    "port"?: number;
                };
                /**
                 * Defines the HTTP Listener for Envoy.
                 *  Contour's default is { address: "0.0.0.0", port: 8080, accessLog: "/dev/stdout" }.
                 */
                "http"?: {
                    /**
                     * AccessLog defines where Envoy logs are outputted for this listener.
                     */
                    "accessLog"?: string;
                    /**
                     * Defines an Envoy Listener Address.
                     */
                    "address"?: string;
                    /**
                     * Defines an Envoy listener Port.
                     */
                    "port"?: number;
                };
                /**
                 * Defines the HTTPS Listener for Envoy.
                 *  Contour's default is { address: "0.0.0.0", port: 8443, accessLog: "/dev/stdout" }.
                 */
                "https"?: {
                    /**
                     * AccessLog defines where Envoy logs are outputted for this listener.
                     */
                    "accessLog"?: string;
                    /**
                     * Defines an Envoy Listener Address.
                     */
                    "address"?: string;
                    /**
                     * Defines an Envoy listener Port.
                     */
                    "port"?: number;
                };
                /**
                 * Listener hold various configurable Envoy listener values.
                 */
                "listener"?: {
                    /**
                     * ConnectionBalancer. If the value is exact, the listener will use the exact connection balancer See https://www.envoyproxy.io/docs/envoy/latest/api-v2/api/v2/listener.proto#envoy-api-msg-listener-connectionbalanceconfig for more information.
                     *  Values: (empty string): use the default ConnectionBalancer, `exact`: use the Exact ConnectionBalancer.
                     *  Other values will produce an error.
                     */
                    "connectionBalancer"?: string;
                    /**
                     * DisableAllowChunkedLength disables the RFC-compliant Envoy behavior to strip the "Content-Length" header if "Transfer-Encoding: chunked" is also set. This is an emergency off-switch to revert back to Envoy's default behavior in case of failures. Please file an issue if failures are encountered. See: https://github.com/projectcontour/contour/issues/3221
                     *  Contour's default is false.
                     */
                    "disableAllowChunkedLength"?: boolean;
                    /**
                     * DisableMergeSlashes disables Envoy's non-standard merge_slashes path transformation option which strips duplicate slashes from request URL paths.
                     *  Contour's default is false.
                     */
                    "disableMergeSlashes"?: boolean;
                    /**
                     * Defines the action to be applied to the Server header on the response path. When configured as overwrite, overwrites any Server header with "envoy". When configured as append_if_absent, if a Server header is present, pass it through, otherwise set it to "envoy". When configured as pass_through, pass through the value of the Server header, and do not append a header if none is present.
                     *  Values: `overwrite` (default), `append_if_absent`, `pass_through`
                     *  Other values will produce an error. Contour's default is overwrite.
                     */
                    "serverHeaderTransformation"?: string;
                    /**
                     * TLS holds various configurable Envoy TLS listener values.
                     */
                    "tls"?: {
                        /**
                         * CipherSuites defines the TLS ciphers to be supported by Envoy TLS listeners when negotiating TLS 1.2. Ciphers are validated against the set that Envoy supports by default. This parameter should only be used by advanced users. Note that these will be ignored when TLS 1.3 is in use.
                         *  This field is optional; when it is undefined, a Contour-managed ciphersuite list will be used, which may be updated to keep it secure.
                         *  Contour's default list is: - "[ECDHE-ECDSA-AES128-GCM-SHA256|ECDHE-ECDSA-CHACHA20-POLY1305]" - "[ECDHE-RSA-AES128-GCM-SHA256|ECDHE-RSA-CHACHA20-POLY1305]" - "ECDHE-ECDSA-AES256-GCM-SHA384" - "ECDHE-RSA-AES256-GCM-SHA384"
                         *  Ciphers provided are validated against the following list: - "[ECDHE-ECDSA-AES128-GCM-SHA256|ECDHE-ECDSA-CHACHA20-POLY1305]" - "[ECDHE-RSA-AES128-GCM-SHA256|ECDHE-RSA-CHACHA20-POLY1305]" - "ECDHE-ECDSA-AES128-GCM-SHA256" - "ECDHE-RSA-AES128-GCM-SHA256" - "ECDHE-ECDSA-AES128-SHA" - "ECDHE-RSA-AES128-SHA" - "AES128-GCM-SHA256" - "AES128-SHA" - "ECDHE-ECDSA-AES256-GCM-SHA384" - "ECDHE-RSA-AES256-GCM-SHA384" - "ECDHE-ECDSA-AES256-SHA" - "ECDHE-RSA-AES256-SHA" - "AES256-GCM-SHA384" - "AES256-SHA"
                         *  Contour recommends leaving this undefined unless you are sure you must.
                         *  See: https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/transport_sockets/tls/v3/common.proto#extensions-transport-sockets-tls-v3-tlsparameters Note: This list is a superset of what is valid for stock Envoy builds and those using BoringSSL FIPS.
                         */
                        "cipherSuites"?: Array<string>;
                        /**
                         * MinimumProtocolVersion is the minimum TLS version this vhost should negotiate.
                         *  Values: `1.2` (default), `1.3`.
                         *  Other values will produce an error.
                         */
                        "minimumProtocolVersion"?: string;
                    };
                    /**
                     * Use PROXY protocol for all listeners.
                     *  Contour's default is false.
                     */
                    "useProxyProtocol"?: boolean;
                };
                /**
                 * Logging defines how Envoy's logs can be configured.
                 */
                "logging"?: {
                    /**
                     * AccessLogFormat sets the global access log format.
                     *  Values: `envoy` (default), `json`.
                     *  Other values will produce an error.
                     */
                    "accessLogFormat"?: string;
                    /**
                     * AccessLogFormatString sets the access log format when format is set to `envoy`. When empty, Envoy's default format is used.
                     */
                    "accessLogFormatString"?: string;
                    /**
                     * AccessLogJSONFields sets the fields that JSON logging will output when AccessLogFormat is json.
                     */
                    "accessLogJSONFields"?: Array<string>;
                    /**
                     * AccessLogLevel sets the verbosity level of the access log.
                     *  Values: `info` (default, meaning all requests are logged), `error` and `disabled`.
                     *  Other values will produce an error.
                     */
                    "accessLogLevel"?: string;
                };
                /**
                 * Metrics defines the endpoint Envoy uses to serve metrics.
                 *  Contour's default is { address: "0.0.0.0", port: 8002 }.
                 */
                "metrics"?: {
                    /**
                     * Defines the metrics address interface.
                     */
                    "address"?: string;
                    /**
                     * Defines the metrics port.
                     */
                    "port"?: number;
                    /**
                     * TLS holds TLS file config details. Metrics and health endpoints cannot have same port number when metrics is served over HTTPS.
                     */
                    "tls"?: {
                        /**
                         * CA filename.
                         */
                        "caFile"?: string;
                        /**
                         * Client certificate filename.
                         */
                        "certFile"?: string;
                        /**
                         * Client key filename.
                         */
                        "keyFile"?: string;
                    };
                };
                /**
                 * Network holds various configurable Envoy network values.
                 */
                "network"?: {
                    /**
                     * Configure the port used to access the Envoy Admin interface. If configured to port "0" then the admin interface is disabled.
                     *  Contour's default is 9001.
                     */
                    "adminPort"?: number;
                    /**
                     * XffNumTrustedHops defines the number of additional ingress proxy hops from the right side of the x-forwarded-for HTTP header to trust when determining the origin client’s IP address.
                     *  See https://www.envoyproxy.io/docs/envoy/v1.17.0/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto?highlight=xff_num_trusted_hops for more information.
                     *  Contour's default is 0.
                     */
                    "numTrustedHops"?: number;
                };
                /**
                 * Service holds Envoy service parameters for setting Ingress status.
                 *  Contour's default is { namespace: "projectcontour", name: "envoy" }.
                 */
                "service"?: {
                    "name": string;
                    "namespace": string;
                };
                /**
                 * Timeouts holds various configurable timeouts that can be set in the config file.
                 */
                "timeouts"?: {
                    /**
                     * ConnectTimeout defines how long the proxy should wait when establishing connection to upstream service. If not set, a default value of 2 seconds will be used.
                     *  See https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto#envoy-v3-api-field-config-cluster-v3-cluster-connect-timeout for more information.
                     */
                    "connectTimeout"?: string;
                    /**
                     * ConnectionIdleTimeout defines how long the proxy should wait while there are no active requests (for HTTP/1.1) or streams (for HTTP/2) before terminating an HTTP connection. Set to "infinity" to disable the timeout entirely.
                     *  See https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/protocol.proto#envoy-v3-api-field-config-core-v3-httpprotocoloptions-idle-timeout for more information.
                     */
                    "connectionIdleTimeout"?: string;
                    /**
                     * ConnectionShutdownGracePeriod defines how long the proxy will wait between sending an initial GOAWAY frame and a second, final GOAWAY frame when terminating an HTTP/2 connection. During this grace period, the proxy will continue to respond to new streams. After the final GOAWAY frame has been sent, the proxy will refuse new streams.
                     *  See https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-field-extensions-filters-network-http-connection-manager-v3-httpconnectionmanager-drain-timeout for more information.
                     */
                    "connectionShutdownGracePeriod"?: string;
                    /**
                     * DelayedCloseTimeout defines how long envoy will wait, once connection close processing has been initiated, for the downstream peer to close the connection before Envoy closes the socket associated with the connection.
                     *  Setting this timeout to 'infinity' will disable it, equivalent to setting it to '0' in Envoy. Leaving it unset will result in the Envoy default value being used.
                     *  See https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-field-extensions-filters-network-http-connection-manager-v3-httpconnectionmanager-delayed-close-timeout for more information.
                     */
                    "delayedCloseTimeout"?: string;
                    /**
                     * MaxConnectionDuration defines the maximum period of time after an HTTP connection has been established from the client to the proxy before it is closed by the proxy, regardless of whether there has been activity or not. Omit or set to "infinity" for no max duration.
                     *  See https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/protocol.proto#envoy-v3-api-field-config-core-v3-httpprotocoloptions-max-connection-duration for more information.
                     */
                    "maxConnectionDuration"?: string;
                    /**
                     * RequestTimeout sets the client request timeout globally for Contour. Note that this is a timeout for the entire request, not an idle timeout. Omit or set to "infinity" to disable the timeout entirely.
                     *  See https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-field-extensions-filters-network-http-connection-manager-v3-httpconnectionmanager-request-timeout for more information.
                     */
                    "requestTimeout"?: string;
                    /**
                     * StreamIdleTimeout defines how long the proxy should wait while there is no request activity (for HTTP/1.1) or stream activity (for HTTP/2) before terminating the HTTP request or stream. Set to "infinity" to disable the timeout entirely.
                     *  See https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-field-extensions-filters-network-http-connection-manager-v3-httpconnectionmanager-stream-idle-timeout for more information.
                     */
                    "streamIdleTimeout"?: string;
                };
            };
            /**
             * Gateway contains parameters for the gateway-api Gateway that Contour is configured to serve traffic.
             */
            "gateway"?: {
                /**
                 * ControllerName is used to determine whether Contour should reconcile a GatewayClass. The string takes the form of "projectcontour.io/<namespace>/contour". If unset, the gatewayclass controller will not be started. Exactly one of ControllerName or GatewayRef must be set.
                 */
                "controllerName"?: string;
                /**
                 * GatewayRef defines a specific Gateway that this Contour instance corresponds to. If set, Contour will reconcile only this gateway, and will not reconcile any gateway classes. Exactly one of ControllerName or GatewayRef must be set.
                 */
                "gatewayRef"?: {
                    "name": string;
                    "namespace": string;
                };
            };
            /**
             * GlobalExternalAuthorization allows envoys external authorization filter to be enabled for all virtual hosts.
             */
            "globalExtAuth"?: {
                /**
                 * AuthPolicy sets a default authorization policy for client requests. This policy will be used unless overridden by individual routes.
                 */
                "authPolicy"?: {
                    /**
                     * Context is a set of key/value pairs that are sent to the authentication server in the check request. If a context is provided at an enclosing scope, the entries are merged such that the inner scope overrides matching keys from the outer scope.
                     */
                    "context"?: {
                        [key: string]: string;
                    };
                    /**
                     * When true, this field disables client request authentication for the scope of the policy.
                     */
                    "disabled"?: boolean;
                };
                /**
                 * ExtensionServiceRef specifies the extension resource that will authorize client requests.
                 */
                "extensionRef"?: {
                    /**
                     * API version of the referent. If this field is not specified, the default "projectcontour.io/v1alpha1" will be used
                     */
                    "apiVersion"?: string;
                    /**
                     * Name of the referent.
                     *  More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Namespace of the referent. If this field is not specifies, the namespace of the resource that targets the referent will be used.
                     *  More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
                     */
                    "namespace"?: string;
                };
                /**
                 * If FailOpen is true, the client request is forwarded to the upstream service even if the authorization server fails to respond. This field should not be set in most cases. It is intended for use only while migrating applications from internal authorization to Contour external authorization.
                 */
                "failOpen"?: boolean;
                /**
                 * ResponseTimeout configures maximum time to wait for a check response from the authorization server. Timeout durations are expressed in the Go [Duration format](https://godoc.org/time#ParseDuration). Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h". The string "infinity" is also a valid input and specifies no timeout.
                 */
                "responseTimeout"?: string;
                /**
                 * WithRequestBody specifies configuration for sending the client request's body to authorization server.
                 */
                "withRequestBody"?: {
                    /**
                     * If AllowPartialMessage is true, then Envoy will buffer the body until MaxRequestBytes are reached.
                     */
                    "allowPartialMessage"?: boolean;
                    /**
                     * MaxRequestBytes sets the maximum size of message body ExtAuthz filter will hold in-memory.
                     */
                    "maxRequestBytes"?: number;
                    /**
                     * If PackAsBytes is true, the body sent to Authorization Server is in raw bytes.
                     */
                    "packAsBytes"?: boolean;
                };
            };
            /**
             * Health defines the endpoints Contour uses to serve health checks.
             *  Contour's default is { address: "0.0.0.0", port: 8000 }.
             */
            "health"?: {
                /**
                 * Defines the health address interface.
                 */
                "address"?: string;
                /**
                 * Defines the health port.
                 */
                "port"?: number;
            };
            /**
             * HTTPProxy defines parameters on HTTPProxy.
             */
            "httpproxy"?: {
                /**
                 * DisablePermitInsecure disables the use of the permitInsecure field in HTTPProxy.
                 *  Contour's default is false.
                 */
                "disablePermitInsecure"?: boolean;
                /**
                 * FallbackCertificate defines the namespace/name of the Kubernetes secret to use as fallback when a non-SNI request is received.
                 */
                "fallbackCertificate"?: {
                    "name": string;
                    "namespace": string;
                };
                /**
                 * Restrict Contour to searching these namespaces for root ingress routes.
                 */
                "rootNamespaces"?: Array<string>;
            };
            /**
             * Ingress contains parameters for ingress options.
             */
            "ingress"?: {
                /**
                 * Ingress Class Names Contour should use.
                 */
                "classNames"?: Array<string>;
                /**
                 * Address to set in Ingress object status.
                 */
                "statusAddress"?: string;
            };
            /**
             * Metrics defines the endpoint Contour uses to serve metrics.
             *  Contour's default is { address: "0.0.0.0", port: 8000 }.
             */
            "metrics"?: {
                /**
                 * Defines the metrics address interface.
                 */
                "address"?: string;
                /**
                 * Defines the metrics port.
                 */
                "port"?: number;
                /**
                 * TLS holds TLS file config details. Metrics and health endpoints cannot have same port number when metrics is served over HTTPS.
                 */
                "tls"?: {
                    /**
                     * CA filename.
                     */
                    "caFile"?: string;
                    /**
                     * Client certificate filename.
                     */
                    "certFile"?: string;
                    /**
                     * Client key filename.
                     */
                    "keyFile"?: string;
                };
            };
            /**
             * Policy specifies default policy applied if not overridden by the user
             */
            "policy"?: {
                /**
                 * ApplyToIngress determines if the Policies will apply to ingress objects
                 *  Contour's default is false.
                 */
                "applyToIngress"?: boolean;
                /**
                 * RequestHeadersPolicy defines the request headers set/removed on all routes
                 */
                "requestHeaders"?: {
                    "remove"?: Array<string>;
                    "set"?: {
                        [key: string]: string;
                    };
                };
                /**
                 * ResponseHeadersPolicy defines the response headers set/removed on all routes
                 */
                "responseHeaders"?: {
                    "remove"?: Array<string>;
                    "set"?: {
                        [key: string]: string;
                    };
                };
            };
            /**
             * RateLimitService optionally holds properties of the Rate Limit Service to be used for global rate limiting.
             */
            "rateLimitService"?: {
                /**
                 * Domain is passed to the Rate Limit Service.
                 */
                "domain"?: string;
                /**
                 * EnableResourceExhaustedCode enables translating error code 429 to grpc code RESOURCE_EXHAUSTED. When disabled it's translated to UNAVAILABLE
                 */
                "enableResourceExhaustedCode"?: boolean;
                /**
                 * EnableXRateLimitHeaders defines whether to include the X-RateLimit headers X-RateLimit-Limit, X-RateLimit-Remaining, and X-RateLimit-Reset (as defined by the IETF Internet-Draft linked below), on responses to clients when the Rate Limit Service is consulted for a request.
                 *  ref. https://tools.ietf.org/id/draft-polli-ratelimit-headers-03.html
                 */
                "enableXRateLimitHeaders"?: boolean;
                /**
                 * ExtensionService identifies the extension service defining the RLS.
                 */
                "extensionService": {
                    "name": string;
                    "namespace": string;
                };
                /**
                 * FailOpen defines whether to allow requests to proceed when the Rate Limit Service fails to respond with a valid rate limit decision within the timeout defined on the extension service.
                 */
                "failOpen"?: boolean;
            };
            /**
             * Tracing defines properties for exporting trace data to OpenTelemetry.
             */
            "tracing"?: {
                /**
                 * CustomTags defines a list of custom tags with unique tag name.
                 */
                "customTags"?: Array<{
                    /**
                     * Literal is a static custom tag value. Precisely one of Literal, RequestHeaderName must be set.
                     */
                    "literal"?: string;
                    /**
                     * RequestHeaderName indicates which request header the label value is obtained from. Precisely one of Literal, RequestHeaderName must be set.
                     */
                    "requestHeaderName"?: string;
                    /**
                     * TagName is the unique name of the custom tag.
                     */
                    "tagName": string;
                }>;
                /**
                 * ExtensionService identifies the extension service defining the otel-collector.
                 */
                "extensionService": {
                    "name": string;
                    "namespace": string;
                };
                /**
                 * IncludePodDetail defines a flag. If it is true, contour will add the pod name and namespace to the span of the trace. the default is true. Note: The Envoy pods MUST have the HOSTNAME and CONTOUR_NAMESPACE environment variables set for this to work properly.
                 */
                "includePodDetail"?: boolean;
                /**
                 * MaxPathTagLength defines maximum length of the request path to extract and include in the HttpUrl tag. contour's default is 256.
                 */
                "maxPathTagLength"?: number;
                /**
                 * OverallSampling defines the sampling rate of trace data. contour's default is 100.
                 */
                "overallSampling"?: string;
                /**
                 * ServiceName defines the name for the service. contour's default is contour.
                 */
                "serviceName"?: string;
            };
            /**
             * XDSServer contains parameters for the xDS server.
             */
            "xdsServer"?: {
                /**
                 * Defines the xDS gRPC API address which Contour will serve.
                 *  Contour's default is "0.0.0.0".
                 */
                "address"?: string;
                /**
                 * Defines the xDS gRPC API port which Contour will serve.
                 *  Contour's default is 8001.
                 */
                "port"?: number;
                /**
                 * TLS holds TLS file config details.
                 *  Contour's default is { caFile: "/certs/ca.crt", certFile: "/certs/tls.cert", keyFile: "/certs/tls.key", insecure: false }.
                 */
                "tls"?: {
                    /**
                     * CA filename.
                     */
                    "caFile"?: string;
                    /**
                     * Client certificate filename.
                     */
                    "certFile"?: string;
                    /**
                     * Allow serving the xDS gRPC API without TLS.
                     */
                    "insecure"?: boolean;
                    /**
                     * Client key filename.
                     */
                    "keyFile"?: string;
                };
                /**
                 * Defines the XDSServer to use for `contour serve`.
                 *  Values: `contour` (default), `envoy`.
                 *  Other values will produce an error.
                 */
                "type"?: string;
            };
        };
    };
    /**
     * ContourDeploymentStatus defines the observed state of a ContourDeployment resource.
     */
    "status"?: {
        /**
         * Conditions describe the current conditions of the ContourDeployment resource.
         */
        "conditions"?: Array<{
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            "lastTransitionTime": string;
            /**
             * message is a human readable message indicating details about the transition. This may be an empty string.
             */
            "message": string;
            /**
             * observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
             */
            "observedGeneration"?: number;
            /**
             * reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
             */
            "reason": string;
            /**
             * status of the condition, one of True, False, Unknown.
             */
            "status": "True" | "False" | "Unknown";
            /**
             * type of condition in CamelCase or in foo.example.com/CamelCase. --- Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be useful (see .node.status.conditions), the ability to deconflict is important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
             */
            "type": string;
        }>;
    };
}
/**
 * ContourDeployment is the schema for a Contour Deployment.
 */
export declare class ContourDeployment extends Model<IContourDeployment> implements IContourDeployment {
    "apiVersion": IContourDeployment["apiVersion"];
    "kind": IContourDeployment["kind"];
    "metadata"?: IContourDeployment["metadata"];
    "spec"?: IContourDeployment["spec"];
    "status"?: IContourDeployment["status"];
    static apiVersion: IContourDeployment["apiVersion"];
    static kind: IContourDeployment["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IContourDeployment>;
    constructor(data?: ModelData<IContourDeployment>);
}
