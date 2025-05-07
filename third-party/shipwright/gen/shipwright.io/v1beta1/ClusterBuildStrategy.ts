import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ShipwrightIoV1beta1ClusterBuildStrategy";

/**
 * ClusterBuildStrategy is the Schema representing a strategy in the cluster scope to build images from source code.
 */
export interface IClusterBuildStrategy {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "shipwright.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "ClusterBuildStrategy";
  "metadata"?: IObjectMeta;
  /**
   * BuildStrategySpec defines the desired state of BuildStrategy
   */
  "spec"?: {
    "parameters"?: Array<{
      /**
       * Default value for a string parameter
       */
      "default"?: string;
      /**
       * Default values for an array parameter
       */
      "defaults"?: Array<string>;
      /**
       * Description on the parameter purpose
       */
      "description": string;
      /**
       * Name of the parameter
       */
      "name": string;
      /**
       * Type of the parameter. The possible types are "string" and "array", and "string" is the default.
       */
      "type"?: string;
    }>;
    /**
     * BuildStrategySecurityContext defines a UID and GID for the build that is to be used for the build strategy steps as well as for shipwright-managed steps such as the source retrieval, or the image processing. The value can be overwritten on the steps for the strategy steps. If omitted, then UID and GID from the Shipwright configuration will be used for the shipwright-managed steps.
     */
    "securityContext"?: {
      /**
       * The GID to run the entrypoint of the container process. Defaults to group specified in image metadata if unspecified. Can be overwritten by the security context on the step level.
       */
      "runAsGroup": number;
      /**
       * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. Can be overwritten by the security context on the step level.
       */
      "runAsUser": number;
    };
    "steps"?: Array<{
      /**
       * Arguments to the entrypoint. The container image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
       */
      "args"?: Array<string>;
      /**
       * Entrypoint array. Not executed within a shell. The container image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
       */
      "command"?: Array<string>;
      /**
       * List of environment variables to set in the container. Cannot be updated.
       */
      "env"?: Array<{
        /**
         * Name of the environment variable. Must be a C_IDENTIFIER.
         */
        "name": string;
        /**
         * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".
         */
        "value"?: string;
        /**
         * Source for the environment variable's value. Cannot be used if value is not empty.
         */
        "valueFrom"?: {
          /**
           * Selects a key of a ConfigMap.
           */
          "configMapKeyRef"?: {
            /**
             * The key to select.
             */
            "key": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
            /**
             * Specify whether the ConfigMap or its key must be defined
             */
            "optional"?: boolean;
          };
          /**
           * Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
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
           * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
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
          /**
           * Selects a key of a secret in the pod's namespace
           */
          "secretKeyRef"?: {
            /**
             * The key of the secret to select from.  Must be a valid secret key.
             */
            "key": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
            /**
             * Specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
          };
        };
      }>;
      /**
       * Container image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.
       */
      "image"?: string;
      /**
       * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
       */
      "imagePullPolicy"?: string;
      /**
       * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
       */
      "name": string;
      /**
       * Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
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
       * SecurityContext defines the security options the container should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext. More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
       */
      "securityContext"?: {
        /**
         * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows.
         */
        "allowPrivilegeEscalation"?: boolean;
        /**
         * The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime. Note that this field cannot be set when spec.os.name is windows.
         */
        "capabilities"?: {
          /**
           * Added capabilities
           */
          "add"?: Array<string>;
          /**
           * Removed capabilities
           */
          "drop"?: Array<string>;
        };
        /**
         * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows.
         */
        "privileged"?: boolean;
        /**
         * procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows.
         */
        "procMount"?: string;
        /**
         * Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows.
         */
        "readOnlyRootFilesystem"?: boolean;
        /**
         * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
         */
        "runAsGroup"?: number;
        /**
         * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
         */
        "runAsNonRoot"?: boolean;
        /**
         * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
         */
        "runAsUser"?: number;
        /**
         * The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
         */
        "seLinuxOptions"?: {
          /**
           * Level is SELinux level label that applies to the container.
           */
          "level"?: string;
          /**
           * Role is a SELinux role label that applies to the container.
           */
          "role"?: string;
          /**
           * Type is a SELinux type label that applies to the container.
           */
          "type"?: string;
          /**
           * User is a SELinux user label that applies to the container.
           */
          "user"?: string;
        };
        /**
         * The seccomp options to use by this container. If seccomp options are provided at both the pod & container level, the container options override the pod options. Note that this field cannot be set when spec.os.name is windows.
         */
        "seccompProfile"?: {
          /**
           * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must only be set if type is "Localhost".
           */
          "localhostProfile"?: string;
          /**
           * type indicates which kind of seccomp profile will be applied. Valid options are: 
           *  Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
           */
          "type": string;
        };
        /**
         * The Windows specific settings applied to all containers. If unspecified, the options from the PodSecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.
         */
        "windowsOptions"?: {
          /**
           * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
           */
          "gmsaCredentialSpec"?: string;
          /**
           * GMSACredentialSpecName is the name of the GMSA credential spec to use.
           */
          "gmsaCredentialSpecName"?: string;
          /**
           * HostProcess determines if a container should be run as a 'Host Process' container. This field is alpha-level and will only be honored by components that enable the WindowsHostProcessContainers feature flag. Setting this field without the feature flag will result in errors when validating the Pod. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers).  In addition, if HostProcess is true then HostNetwork must also be set to true.
           */
          "hostProcess"?: boolean;
          /**
           * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
           */
          "runAsUserName"?: string;
        };
      };
      /**
       * Pod volumes to mount into the container's filesystem. Cannot be updated.
       */
      "volumeMounts"?: Array<{
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
       * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
       */
      "workingDir"?: string;
    }>;
    "volumes"?: Array<{
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
       * Description of the Build Volume
       */
      "description"?: string;
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
          "metadata"?: {
          };
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
       * Name of the Build Volume
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
       * Indicates that this Volume can be overridden in a Build or BuildRun. Defaults to false
       */
      "overridable"?: boolean;
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
  };
  /**
   * BuildStrategyStatus defines the observed state of BuildStrategy
   */
  "status"?: {
  };
}

/**
 * ClusterBuildStrategy is the Schema representing a strategy in the cluster scope to build images from source code.
 */
export class ClusterBuildStrategy extends Model<IClusterBuildStrategy> implements IClusterBuildStrategy {
  "apiVersion": IClusterBuildStrategy["apiVersion"];
  "kind": IClusterBuildStrategy["kind"];
  "metadata"?: IClusterBuildStrategy["metadata"];
  "spec"?: IClusterBuildStrategy["spec"];
  "status"?: IClusterBuildStrategy["status"];

static apiVersion: IClusterBuildStrategy["apiVersion"] = "shipwright.io/v1beta1";
static kind: IClusterBuildStrategy["kind"] = "ClusterBuildStrategy";
static is = createTypeMetaGuard<IClusterBuildStrategy>(ClusterBuildStrategy);

constructor(data?: ModelData<IClusterBuildStrategy>) {
  super();

  this.setDefinedProps({
    apiVersion: ClusterBuildStrategy.apiVersion,
    kind: ClusterBuildStrategy.kind,
    ...data
  } as IClusterBuildStrategy);
}
}


setValidateFunc(ClusterBuildStrategy, validate as ValidateFunc<IClusterBuildStrategy>);
