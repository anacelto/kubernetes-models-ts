import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/OperatorVictoriametricsComV1beta1VMAgent";

/**
 * VMAgent - is a tiny but brave agent, which helps you collect metrics from various sources and stores them in VictoriaMetrics
 * or any other Prometheus-compatible storage system that supports the remote_write protocol.
 */
export interface IVMAgent {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "operator.victoriametrics.com/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "VMAgent";
  "metadata"?: IObjectMeta;
  /**
   * VMAgentSpec defines the desired state of VMAgent
   */
  "spec"?: {
    /**
     * APIServerConfig allows specifying a host and auth methods to access apiserver.
     * If left empty, VMAgent is assumed to run inside of the cluster
     * and will discover API servers automatically and use the pod's CA certificate
     * and bearer token file at /var/run/secrets/kubernetes.io/serviceaccount/.
     */
    "aPIServerConfig"?: {
      /**
       * Authorization configures generic authorization params
       */
      "authorization"?: {
        /**
         * Reference to the secret with value for authorization
         */
        "credentials"?: {
          /**
           * The key of the secret to select from.  Must be a valid secret key.
           */
          "key": string;
          /**
           * Name of the referent.
           * This field is effectively required, but due to backwards compatibility is
           * allowed to be empty. Instances of this type with an empty value here are
           * almost certainly wrong.
           * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Specify whether the Secret or its key must be defined
           */
          "optional"?: boolean;
        };
        /**
         * File with value for authorization
         */
        "credentialsFile"?: string;
        /**
         * Type of authorization, default to bearer
         */
        "type"?: string;
      };
      /**
       * BasicAuth allow an endpoint to authenticate over basic authentication
       */
      "basicAuth"?: {
        /**
         * Password defines reference for secret with password value
         * The secret needs to be in the same namespace as scrape object
         */
        "password"?: {
          /**
           * The key of the secret to select from.  Must be a valid secret key.
           */
          "key": string;
          /**
           * Name of the referent.
           * This field is effectively required, but due to backwards compatibility is
           * allowed to be empty. Instances of this type with an empty value here are
           * almost certainly wrong.
           * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Specify whether the Secret or its key must be defined
           */
          "optional"?: boolean;
        };
        /**
         * PasswordFile defines path to password file at disk
         * must be pre-mounted
         */
        "password_file"?: string;
        /**
         * Username defines reference for secret with username value
         * The secret needs to be in the same namespace as scrape object
         */
        "username"?: {
          /**
           * The key of the secret to select from.  Must be a valid secret key.
           */
          "key": string;
          /**
           * Name of the referent.
           * This field is effectively required, but due to backwards compatibility is
           * allowed to be empty. Instances of this type with an empty value here are
           * almost certainly wrong.
           * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Specify whether the Secret or its key must be defined
           */
          "optional"?: boolean;
        };
      };
      /**
       * Bearer token for accessing apiserver.
       */
      "bearerToken"?: string;
      /**
       * File to read bearer token for accessing apiserver.
       */
      "bearerTokenFile"?: string;
      /**
       * Host of apiserver.
       * A valid string consisting of a hostname or IP followed by an optional port number
       */
      "host": string;
      /**
       * TLSConfig Config to use for accessing apiserver.
       */
      "tlsConfig"?: {
        /**
         * Stuct containing the CA cert to use for the targets.
         */
        "ca"?: {
          /**
           * ConfigMap containing data to use for the targets.
           */
          "configMap"?: {
            /**
             * The key to select.
             */
            "key": string;
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Specify whether the ConfigMap or its key must be defined
             */
            "optional"?: boolean;
          };
          /**
           * Secret containing data to use for the targets.
           */
          "secret"?: {
            /**
             * The key of the secret to select from.  Must be a valid secret key.
             */
            "key": string;
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
          };
        };
        /**
         * Path to the CA cert in the container to use for the targets.
         */
        "caFile"?: string;
        /**
         * Struct containing the client cert file for the targets.
         */
        "cert"?: {
          /**
           * ConfigMap containing data to use for the targets.
           */
          "configMap"?: {
            /**
             * The key to select.
             */
            "key": string;
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Specify whether the ConfigMap or its key must be defined
             */
            "optional"?: boolean;
          };
          /**
           * Secret containing data to use for the targets.
           */
          "secret"?: {
            /**
             * The key of the secret to select from.  Must be a valid secret key.
             */
            "key": string;
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
          };
        };
        /**
         * Path to the client cert file in the container for the targets.
         */
        "certFile"?: string;
        /**
         * Disable target certificate validation.
         */
        "insecureSkipVerify"?: boolean;
        /**
         * Path to the client key file in the container for the targets.
         */
        "keyFile"?: string;
        /**
         * Secret containing the client key file for the targets.
         */
        "keySecret"?: {
          /**
           * The key of the secret to select from.  Must be a valid secret key.
           */
          "key": string;
          /**
           * Name of the referent.
           * This field is effectively required, but due to backwards compatibility is
           * allowed to be empty. Instances of this type with an empty value here are
           * almost certainly wrong.
           * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Specify whether the Secret or its key must be defined
           */
          "optional"?: boolean;
        };
        /**
         * Used to verify the hostname for the targets.
         */
        "serverName"?: string;
      };
    };
    /**
     * AdditionalScrapeConfigs As scrape configs are appended, the user is responsible to make sure it
     * is valid. Note that using this feature may expose the possibility to
     * break upgrades of VMAgent. It is advised to review VMAgent release
     * notes to ensure that no incompatible scrape configs are going to break
     * VMAgent after the upgrade.
     */
    "additionalScrapeConfigs"?: {
      /**
       * The key of the secret to select from.  Must be a valid secret key.
       */
      "key": string;
      /**
       * Name of the referent.
       * This field is effectively required, but due to backwards compatibility is
       * allowed to be empty. Instances of this type with an empty value here are
       * almost certainly wrong.
       * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Specify whether the Secret or its key must be defined
       */
      "optional"?: boolean;
    };
    /**
     * Affinity If specified, the pod's scheduling constraints.
     */
    "affinity"?: {
    };
    /**
     * ArbitraryFSAccessThroughSMs configures whether configuration
     * based on EndpointAuth can access arbitrary files on the file system
     * of the VMAgent container e.g. bearer token files, basic auth, tls certs
     */
    "arbitraryFSAccessThroughSMs"?: {
      "deny"?: boolean;
    };
    /**
     * ClaimTemplates allows adding additional VolumeClaimTemplates for VMAgent in StatefulMode
     */
    "claimTemplates"?: Array<{
      /**
       * APIVersion defines the versioned schema of this representation of an object.
       * Servers should convert recognized schemas to the latest internal value, and
       * may reject unrecognized values.
       * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
       */
      "apiVersion"?: string;
      /**
       * Kind is a string value representing the REST resource this object represents.
       * Servers may infer this from the endpoint the client submits requests to.
       * Cannot be updated.
       * In CamelCase.
       * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      "kind"?: string;
      /**
       * Standard object's metadata.
       * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
       */
      "metadata"?: {
      };
      /**
       * spec defines the desired characteristics of a volume requested by a pod author.
       * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
       */
      "spec"?: {
        /**
         * accessModes contains the desired access modes the volume should have.
         * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
         */
        "accessModes"?: Array<string>;
        /**
         * dataSource field can be used to specify either:
         * \* An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot)
         * \* An existing PVC (PersistentVolumeClaim)
         * If the provisioner or an external controller can support the specified data source,
         * it will create a new volume based on the contents of the specified data source.
         * When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef,
         * and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified.
         * If the namespace is specified, then dataSourceRef will not be copied to dataSource.
         */
        "dataSource"?: {
          /**
           * APIGroup is the group for the resource being referenced.
           * If APIGroup is not specified, the specified Kind must be in the core API group.
           * For any other third-party types, APIGroup is required.
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
         * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty
         * volume is desired. This may be any object from a non-empty API group (non
         * core object) or a PersistentVolumeClaim object.
         * When this field is specified, volume binding will only succeed if the type of
         * the specified object matches some installed volume populator or dynamic
         * provisioner.
         * This field will replace the functionality of the dataSource field and as such
         * if both fields are non-empty, they must have the same value. For backwards
         * compatibility, when namespace isn't specified in dataSourceRef,
         * both fields (dataSource and dataSourceRef) will be set to the same
         * value automatically if one of them is empty and the other is non-empty.
         * When namespace is specified in dataSourceRef,
         * dataSource isn't set to the same value and must be empty.
         * There are three important differences between dataSource and dataSourceRef:
         * \* While dataSource only allows two specific types of objects, dataSourceRef
         *   allows any non-core object, as well as PersistentVolumeClaim objects.
         * \* While dataSource ignores disallowed values (dropping them), dataSourceRef
         *   preserves all values, and generates an error if a disallowed value is
         *   specified.
         * \* While dataSource only allows local objects, dataSourceRef allows objects
         *   in any namespaces.
         * (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
         * (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
         */
        "dataSourceRef"?: {
          /**
           * APIGroup is the group for the resource being referenced.
           * If APIGroup is not specified, the specified Kind must be in the core API group.
           * For any other third-party types, APIGroup is required.
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
           * Namespace is the namespace of resource being referenced
           * Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details.
           * (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
           */
          "namespace"?: string;
        };
        /**
         * resources represents the minimum resources the volume should have.
         * If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements
         * that are lower than previous value but must still be higher than capacity recorded in the
         * status field of the claim.
         * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
         */
        "resources"?: {
          /**
           * Limits describes the maximum amount of compute resources allowed.
           * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
           */
          "limits"?: {
            [key: string]: number | string;
          };
          /**
           * Requests describes the minimum amount of compute resources required.
           * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
           * otherwise to an implementation-defined value. Requests cannot exceed Limits.
           * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
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
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            "operator": string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            "values"?: Array<string>;
          }>;
          /**
           * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
           * map is equivalent to an element of matchExpressions, whose key field is "key", the
           * operator is "In", and the values array contains only "value". The requirements are ANDed.
           */
          "matchLabels"?: {
            [key: string]: string;
          };
        };
        /**
         * storageClassName is the name of the StorageClass required by the claim.
         * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
         */
        "storageClassName"?: string;
        /**
         * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim.
         * If specified, the CSI driver will create or update the volume with the attributes defined
         * in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName,
         * it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass
         * will be applied to the claim but it's not allowed to reset this field to empty string once it is set.
         * If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass
         * will be set by the persistentvolume controller if it exists.
         * If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be
         * set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource
         * exists.
         * More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/
         * (Alpha) Using this field requires the VolumeAttributesClass feature gate to be enabled.
         */
        "volumeAttributesClassName"?: string;
        /**
         * volumeMode defines what type of volume is required by the claim.
         * Value of Filesystem is implied when not included in claim spec.
         */
        "volumeMode"?: string;
        /**
         * volumeName is the binding reference to the PersistentVolume backing this claim.
         */
        "volumeName"?: string;
      };
      /**
       * status represents the current information/status of a persistent volume claim.
       * Read-only.
       * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
       */
      "status"?: {
        /**
         * accessModes contains the actual access modes the volume backing the PVC has.
         * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
         */
        "accessModes"?: Array<string>;
        /**
         * allocatedResourceStatuses stores status of resource being resized for the given PVC.
         * Key names follow standard Kubernetes label syntax. Valid values are either:
         * 	\* Un-prefixed keys:
         * 		- storage - the capacity of the volume.
         * 	\* Custom resources must use implementation-defined prefixed names such as "example.com/my-custom-resource"
         * Apart from above values - keys that are unprefixed or have kubernetes.io prefix are considered
         * reserved and hence may not be used.
         * 
         * ClaimResourceStatus can be in any of following states:
         * 	- ControllerResizeInProgress:
         * 		State set when resize controller starts resizing the volume in control-plane.
         * 	- ControllerResizeFailed:
         * 		State set when resize has failed in resize controller with a terminal error.
         * 	- NodeResizePending:
         * 		State set when resize controller has finished resizing the volume but further resizing of
         * 		volume is needed on the node.
         * 	- NodeResizeInProgress:
         * 		State set when kubelet starts resizing the volume.
         * 	- NodeResizeFailed:
         * 		State set when resizing has failed in kubelet with a terminal error. Transient errors don't set
         * 		NodeResizeFailed.
         * For example: if expanding a PVC for more capacity - this field can be one of the following states:
         * 	- pvc.status.allocatedResourceStatus['storage'] = "ControllerResizeInProgress"
         *      - pvc.status.allocatedResourceStatus['storage'] = "ControllerResizeFailed"
         *      - pvc.status.allocatedResourceStatus['storage'] = "NodeResizePending"
         *      - pvc.status.allocatedResourceStatus['storage'] = "NodeResizeInProgress"
         *      - pvc.status.allocatedResourceStatus['storage'] = "NodeResizeFailed"
         * When this field is not set, it means that no resize operation is in progress for the given PVC.
         * 
         * A controller that receives PVC update with previously unknown resourceName or ClaimResourceStatus
         * should ignore the update for the purpose it was designed. For example - a controller that
         * only is responsible for resizing capacity of the volume, should ignore PVC updates that change other valid
         * resources associated with PVC.
         * 
         * This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
         */
        "allocatedResourceStatuses"?: {
          [key: string]: string;
        };
        /**
         * allocatedResources tracks the resources allocated to a PVC including its capacity.
         * Key names follow standard Kubernetes label syntax. Valid values are either:
         * 	\* Un-prefixed keys:
         * 		- storage - the capacity of the volume.
         * 	\* Custom resources must use implementation-defined prefixed names such as "example.com/my-custom-resource"
         * Apart from above values - keys that are unprefixed or have kubernetes.io prefix are considered
         * reserved and hence may not be used.
         * 
         * Capacity reported here may be larger than the actual capacity when a volume expansion operation
         * is requested.
         * For storage quota, the larger value from allocatedResources and PVC.spec.resources is used.
         * If allocatedResources is not set, PVC.spec.resources alone is used for quota calculation.
         * If a volume expansion capacity request is lowered, allocatedResources is only
         * lowered if there are no expansion operations in progress and if the actual volume capacity
         * is equal or lower than the requested capacity.
         * 
         * A controller that receives PVC update with previously unknown resourceName
         * should ignore the update for the purpose it was designed. For example - a controller that
         * only is responsible for resizing capacity of the volume, should ignore PVC updates that change other valid
         * resources associated with PVC.
         * 
         * This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
         */
        "allocatedResources"?: {
          [key: string]: number | string;
        };
        /**
         * capacity represents the actual resources of the underlying volume.
         */
        "capacity"?: {
          [key: string]: number | string;
        };
        /**
         * conditions is the current Condition of persistent volume claim. If underlying persistent volume is being
         * resized then the Condition will be set to 'Resizing'.
         */
        "conditions"?: Array<{
          /**
           * lastProbeTime is the time we probed the condition.
           */
          "lastProbeTime"?: string;
          /**
           * lastTransitionTime is the time the condition transitioned from one status to another.
           */
          "lastTransitionTime"?: string;
          /**
           * message is the human-readable message indicating details about last transition.
           */
          "message"?: string;
          /**
           * reason is a unique, this should be a short, machine understandable string that gives the reason
           * for condition's last transition. If it reports "Resizing" that means the underlying
           * persistent volume is being resized.
           */
          "reason"?: string;
          "status": string;
          /**
           * PersistentVolumeClaimConditionType is a valid value of PersistentVolumeClaimCondition.Type
           */
          "type": string;
        }>;
        /**
         * currentVolumeAttributesClassName is the current name of the VolumeAttributesClass the PVC is using.
         * When unset, there is no VolumeAttributeClass applied to this PersistentVolumeClaim
         * This is an alpha field and requires enabling VolumeAttributesClass feature.
         */
        "currentVolumeAttributesClassName"?: string;
        /**
         * ModifyVolumeStatus represents the status object of ControllerModifyVolume operation.
         * When this is unset, there is no ModifyVolume operation being attempted.
         * This is an alpha field and requires enabling VolumeAttributesClass feature.
         */
        "modifyVolumeStatus"?: {
          /**
           * status is the status of the ControllerModifyVolume operation. It can be in any of following states:
           *  - Pending
           *    Pending indicates that the PersistentVolumeClaim cannot be modified due to unmet requirements, such as
           *    the specified VolumeAttributesClass not existing.
           *  - InProgress
           *    InProgress indicates that the volume is being modified.
           *  - Infeasible
           *   Infeasible indicates that the request has been rejected as invalid by the CSI driver. To
           * 	  resolve the error, a valid VolumeAttributesClass needs to be specified.
           * Note: New statuses can be added in the future. Consumers should check for unknown statuses and fail appropriately.
           */
          "status": string;
          /**
           * targetVolumeAttributesClassName is the name of the VolumeAttributesClass the PVC currently being reconciled
           */
          "targetVolumeAttributesClassName"?: string;
        };
        /**
         * phase represents the current phase of PersistentVolumeClaim.
         */
        "phase"?: string;
      };
    }>;
    /**
     * ConfigMaps is a list of ConfigMaps in the same namespace as the Application
     * object, which shall be mounted into the Application container
     * at /etc/vm/configs/CONFIGMAP_NAME folder
     */
    "configMaps"?: Array<string>;
    /**
     * ConfigReloaderExtraArgs that will be passed to  VMAuths config-reloader container
     * for example resyncInterval: "30s"
     */
    "configReloaderExtraArgs"?: {
      [key: string]: string;
    };
    /**
     * ConfigReloaderImageTag defines image:tag for config-reloader container
     */
    "configReloaderImageTag"?: string;
    /**
     * ConfigReloaderResources config-reloader container resource request and limits, https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     * if not defined default resources from operator config will be used
     */
    "configReloaderResources"?: {
      /**
       * Claims lists the names of resources, defined in spec.resourceClaims,
       * that are used by this container.
       * 
       * This is an alpha field and requires enabling the
       * DynamicResourceAllocation feature gate.
       * 
       * This field is immutable. It can only be set for containers.
       */
      "claims"?: Array<{
        /**
         * Name must match the name of one entry in pod.spec.resourceClaims of
         * the Pod where this field is used. It makes that resource available
         * inside a container.
         */
        "name": string;
      }>;
      /**
       * Limits describes the maximum amount of compute resources allowed.
       * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
       */
      "limits"?: {
        [key: string]: number | string;
      };
      /**
       * Requests describes the minimum amount of compute resources required.
       * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
       * otherwise to an implementation-defined value. Requests cannot exceed Limits.
       * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
       */
      "requests"?: {
        [key: string]: number | string;
      };
    };
    /**
     * Containers property allows to inject additions sidecars or to patch existing containers.
     * It can be useful for proxies, backup, etc.
     */
    "containers"?: Array<{
    }>;
    /**
     * DisableSelfServiceScrape controls creation of VMServiceScrape by operator
     * for the application.
     * Has priority over `VM_DISABLESELFSERVICESCRAPECREATION` operator env variable
     */
    "disableSelfServiceScrape"?: boolean;
    /**
     * Specifies the DNS parameters of a pod.
     * Parameters specified here will be merged to the generated DNS
     * configuration based on DNSPolicy.
     */
    "dnsConfig"?: {
      /**
       * A list of DNS name server IP addresses.
       * This will be appended to the base nameservers generated from DNSPolicy.
       * Duplicated nameservers will be removed.
       */
      "nameservers"?: Array<string>;
      /**
       * A list of DNS resolver options.
       * This will be merged with the base options generated from DNSPolicy.
       * Duplicated entries will be removed. Resolution options given in Options
       * will override those that appear in the base DNSPolicy.
       */
      "options"?: Array<{
        /**
         * Required.
         */
        "name"?: string;
        "value"?: string;
      }>;
      /**
       * A list of DNS search domains for host-name lookup.
       * This will be appended to the base search paths generated from DNSPolicy.
       * Duplicated search paths will be removed.
       */
      "searches"?: Array<string>;
    };
    /**
     * DNSPolicy sets DNS policy for the pod
     */
    "dnsPolicy"?: string;
    /**
     * EnforcedNamespaceLabel enforces adding a namespace label of origin for each alert
     * and metric that is user created. The label value will always be the namespace of the object that is
     * being created.
     */
    "enforcedNamespaceLabel"?: string;
    /**
     * ExternalLabels The labels to add to any time series scraped by vmagent.
     * it doesn't affect metrics ingested directly by push API's
     */
    "externalLabels"?: {
      [key: string]: string;
    };
    /**
     * ExtraArgs that will be passed to the application container
     * for example remoteWrite.tmpDataPath: /tmp
     */
    "extraArgs"?: {
      [key: string]: string;
    };
    /**
     * ExtraEnvs that will be passed to the application container
     */
    "extraEnvs"?: Array<{
      /**
       * Name of the environment variable. Must be a C_IDENTIFIER.
       */
      "name": string;
      /**
       * Variable references $(VAR_NAME) are expanded
       * using the previously defined environment variables in the container and
       * any service environment variables. If a variable cannot be resolved,
       * the reference in the input string will be unchanged. Double $$ are reduced
       * to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e.
       * "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)".
       * Escaped references will never be expanded, regardless of whether the variable
       * exists or not.
       * Defaults to "".
       */
      "value"?: string;
    }>;
    /**
     * HostAliasesUnderScore provides mapping for ip and hostname,
     * that would be propagated to pod,
     * cannot be used with HostNetwork.
     * Has Priority over hostAliases field
     */
    "host_aliases"?: Array<{
      /**
       * Hostnames for the above IP address.
       */
      "hostnames"?: Array<string>;
      /**
       * IP address of the host file entry.
       */
      "ip": string;
    }>;
    /**
     * HostAliases provides mapping for ip and hostname,
     * that would be propagated to pod,
     * cannot be used with HostNetwork.
     */
    "hostAliases"?: Array<{
      /**
       * Hostnames for the above IP address.
       */
      "hostnames"?: Array<string>;
      /**
       * IP address of the host file entry.
       */
      "ip": string;
    }>;
    /**
     * HostNetwork controls whether the pod may use the node network namespace
     */
    "hostNetwork"?: boolean;
    /**
     * IgnoreNamespaceSelectors if set to true will ignore NamespaceSelector settings from
     * scrape objects, and they will only discover endpoints
     * within their current namespace.  Defaults to false.
     */
    "ignoreNamespaceSelectors"?: boolean;
    /**
     * Image - docker image settings
     * if no specified operator uses default version from operator config
     */
    "image"?: {
      /**
       * PullPolicy describes how to pull docker image
       */
      "pullPolicy"?: string;
      /**
       * Repository contains name of docker image + it's repository if needed
       */
      "repository"?: string;
      /**
       * Tag contains desired docker image version
       */
      "tag"?: string;
    };
    /**
     * ImagePullSecrets An optional list of references to secrets in the same namespace
     * to use for pulling images from registries
     * see https://kubernetes.io/docs/concepts/containers/images/#referring-to-an-imagepullsecrets-on-a-pod
     */
    "imagePullSecrets"?: Array<{
      /**
       * Name of the referent.
       * This field is effectively required, but due to backwards compatibility is
       * allowed to be empty. Instances of this type with an empty value here are
       * almost certainly wrong.
       * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
    }>;
    /**
     * IngestOnlyMode switches vmagent into unmanaged mode
     * it disables any config generation for scraping
     * Currently it prevents vmagent from managing tls and auth options for remote write
     */
    "ingestOnlyMode"?: boolean;
    /**
     * InitContainers allows adding initContainers to the pod definition.
     * Any errors during the execution of an initContainer will lead to a restart of the Pod.
     * More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/
     */
    "initContainers"?: Array<{
    }>;
    /**
     * InlineRelabelConfig - defines GlobalRelabelConfig for vmagent, can be defined directly at CRD.
     */
    "inlineRelabelConfig"?: Array<{
      /**
       * Action to perform based on regex matching. Default is 'replace'
       */
      "action"?: string;
      /**
       * If represents metricsQL match expression (or list of expressions): '{__name__=~"foo_.\*"}'
       */
      "if"?: any;
      /**
       * Labels is used together with Match for `action: graphite`
       */
      "labels"?: {
        [key: string]: string;
      };
      /**
       * Match is used together with Labels for `action: graphite`
       */
      "match"?: string;
      /**
       * Modulus to take of the hash of the source label values.
       */
      "modulus"?: number;
      /**
       * Regular expression against which the extracted value is matched. Default is '(.\*)'
       * victoriaMetrics supports multiline regex joined with |
       * https://docs.victoriametrics.com/vmagent/#relabeling-enhancements
       */
      "regex"?: any;
      /**
       * Replacement value against which a regex replace is performed if the
       * regular expression matches. Regex capture groups are available. Default is '$1'
       */
      "replacement"?: string;
      /**
       * Separator placed between concatenated source label values. default is ';'.
       */
      "separator"?: string;
      /**
       * UnderScoreSourceLabels - additional form of source labels source_labels
       * for compatibility with original relabel config.
       * if set  both sourceLabels and source_labels, sourceLabels has priority.
       * for details https://github.com/VictoriaMetrics/operator/issues/131
       */
      "source_labels"?: Array<string>;
      /**
       * The source labels select values from existing labels. Their content is concatenated
       * using the configured separator and matched against the configured regular expression
       * for the replace, keep, and drop actions.
       */
      "sourceLabels"?: Array<string>;
      /**
       * UnderScoreTargetLabel - additional form of target label - target_label
       * for compatibility with original relabel config.
       * if set  both targetLabel and target_label, targetLabel has priority.
       * for details https://github.com/VictoriaMetrics/operator/issues/131
       */
      "target_label"?: string;
      /**
       * Label to which the resulting value is written in a replace action.
       * It is mandatory for replace actions. Regex capture groups are available.
       */
      "targetLabel"?: string;
    }>;
    /**
     * InlineScrapeConfig As scrape configs are appended, the user is responsible to make sure it
     * is valid. Note that using this feature may expose the possibility to
     * break upgrades of VMAgent. It is advised to review VMAgent release
     * notes to ensure that no incompatible scrape configs are going to break
     * VMAgent after the upgrade.
     * it should be defined as single yaml file.
     * inlineScrapeConfig: |
     *     - job_name: "prometheus"
     *       static_configs:
     *       - targets: ["localhost:9090"]
     */
    "inlineScrapeConfig"?: string;
    /**
     * InsertPorts - additional listen ports for data ingestion.
     */
    "insertPorts"?: {
      /**
       * GraphitePort listen port
       */
      "graphitePort"?: string;
      /**
       * InfluxPort listen port
       */
      "influxPort"?: string;
      /**
       * OpenTSDBHTTPPort for http connections.
       */
      "openTSDBHTTPPort"?: string;
      /**
       * OpenTSDBPort for tcp and udp listen
       */
      "openTSDBPort"?: string;
    };
    /**
     * License allows to configure license key to be used for enterprise features.
     * Using license key is supported starting from VictoriaMetrics v1.94.0.
     * See [here](https://docs.victoriametrics.com/enterprise)
     */
    "license"?: {
      /**
       * Enterprise license key. This flag is available only in [VictoriaMetrics enterprise](https://docs.victoriametrics.com/enterprise).
       * To request a trial license, [go to](https://victoriametrics.com/products/enterprise/trial)
       */
      "key"?: string;
      /**
       * KeyRef is reference to secret with license key for enterprise features.
       */
      "keyRef"?: {
        /**
         * The key of the secret to select from.  Must be a valid secret key.
         */
        "key": string;
        /**
         * Name of the referent.
         * This field is effectively required, but due to backwards compatibility is
         * allowed to be empty. Instances of this type with an empty value here are
         * almost certainly wrong.
         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Specify whether the Secret or its key must be defined
         */
        "optional"?: boolean;
      };
    };
    /**
     * LivenessProbe that will be added CRD pod
     */
    "livenessProbe"?: {
    };
    /**
     * LogFormat for VMAgent to be configured with.
     */
    "logFormat"?: "default" | "json";
    /**
     * LogLevel for VMAgent to be configured with.
     * INFO, WARN, ERROR, FATAL, PANIC
     */
    "logLevel"?: "INFO" | "WARN" | "ERROR" | "FATAL" | "PANIC";
    /**
     * MaxScrapeInterval allows limiting maximum scrape interval for VMServiceScrape, VMPodScrape and other scrapes
     * If interval is higher than defined limit, `maxScrapeInterval` will be used.
     */
    "maxScrapeInterval"?: string;
    /**
     * MinReadySeconds defines a minim number os seconds to wait before starting update next pod
     * if previous in healthy state
     * Has no effect for VLogs and VMSingle
     */
    "minReadySeconds"?: number;
    /**
     * MinScrapeInterval allows limiting minimal scrape interval for VMServiceScrape, VMPodScrape and other scrapes
     * If interval is lower than defined limit, `minScrapeInterval` will be used.
     */
    "minScrapeInterval"?: string;
    /**
     * NodeScrapeNamespaceSelector defines Namespaces to be selected for VMNodeScrape discovery.
     * Works in combination with Selector.
     * NamespaceSelector nil - only objects at VMAgent namespace.
     * Selector nil - only objects at NamespaceSelector namespaces.
     * If both nil - behaviour controlled by selectAllByDefault
     */
    "nodeScrapeNamespaceSelector"?: {
      /**
       * matchExpressions is a list of label selector requirements. The requirements are ANDed.
       */
      "matchExpressions"?: Array<{
        /**
         * key is the label key that the selector applies to.
         */
        "key": string;
        /**
         * operator represents a key's relationship to a set of values.
         * Valid operators are In, NotIn, Exists and DoesNotExist.
         */
        "operator": string;
        /**
         * values is an array of string values. If the operator is In or NotIn,
         * the values array must be non-empty. If the operator is Exists or DoesNotExist,
         * the values array must be empty. This array is replaced during a strategic
         * merge patch.
         */
        "values"?: Array<string>;
      }>;
      /**
       * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
       * map is equivalent to an element of matchExpressions, whose key field is "key", the
       * operator is "In", and the values array contains only "value". The requirements are ANDed.
       */
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    /**
     * NodeScrapeRelabelTemplate defines relabel config, that will be added to each VMNodeScrape.
     * it's useful for adding specific labels to all targets
     */
    "nodeScrapeRelabelTemplate"?: Array<{
      /**
       * Action to perform based on regex matching. Default is 'replace'
       */
      "action"?: string;
      /**
       * If represents metricsQL match expression (or list of expressions): '{__name__=~"foo_.\*"}'
       */
      "if"?: any;
      /**
       * Labels is used together with Match for `action: graphite`
       */
      "labels"?: {
        [key: string]: string;
      };
      /**
       * Match is used together with Labels for `action: graphite`
       */
      "match"?: string;
      /**
       * Modulus to take of the hash of the source label values.
       */
      "modulus"?: number;
      /**
       * Regular expression against which the extracted value is matched. Default is '(.\*)'
       * victoriaMetrics supports multiline regex joined with |
       * https://docs.victoriametrics.com/vmagent/#relabeling-enhancements
       */
      "regex"?: any;
      /**
       * Replacement value against which a regex replace is performed if the
       * regular expression matches. Regex capture groups are available. Default is '$1'
       */
      "replacement"?: string;
      /**
       * Separator placed between concatenated source label values. default is ';'.
       */
      "separator"?: string;
      /**
       * UnderScoreSourceLabels - additional form of source labels source_labels
       * for compatibility with original relabel config.
       * if set  both sourceLabels and source_labels, sourceLabels has priority.
       * for details https://github.com/VictoriaMetrics/operator/issues/131
       */
      "source_labels"?: Array<string>;
      /**
       * The source labels select values from existing labels. Their content is concatenated
       * using the configured separator and matched against the configured regular expression
       * for the replace, keep, and drop actions.
       */
      "sourceLabels"?: Array<string>;
      /**
       * UnderScoreTargetLabel - additional form of target label - target_label
       * for compatibility with original relabel config.
       * if set  both targetLabel and target_label, targetLabel has priority.
       * for details https://github.com/VictoriaMetrics/operator/issues/131
       */
      "target_label"?: string;
      /**
       * Label to which the resulting value is written in a replace action.
       * It is mandatory for replace actions. Regex capture groups are available.
       */
      "targetLabel"?: string;
    }>;
    /**
     * NodeScrapeSelector defines VMNodeScrape to be selected for scraping.
     * Works in combination with NamespaceSelector.
     * NamespaceSelector nil - only objects at VMAgent namespace.
     * Selector nil - only objects at NamespaceSelector namespaces.
     * If both nil - behaviour controlled by selectAllByDefault
     */
    "nodeScrapeSelector"?: {
      /**
       * matchExpressions is a list of label selector requirements. The requirements are ANDed.
       */
      "matchExpressions"?: Array<{
        /**
         * key is the label key that the selector applies to.
         */
        "key": string;
        /**
         * operator represents a key's relationship to a set of values.
         * Valid operators are In, NotIn, Exists and DoesNotExist.
         */
        "operator": string;
        /**
         * values is an array of string values. If the operator is In or NotIn,
         * the values array must be non-empty. If the operator is Exists or DoesNotExist,
         * the values array must be empty. This array is replaced during a strategic
         * merge patch.
         */
        "values"?: Array<string>;
      }>;
      /**
       * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
       * map is equivalent to an element of matchExpressions, whose key field is "key", the
       * operator is "In", and the values array contains only "value". The requirements are ANDed.
       */
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    /**
     * NodeSelector Define which Nodes the Pods are scheduled on.
     */
    "nodeSelector"?: {
      [key: string]: string;
    };
    /**
     * OverrideHonorLabels if set to true overrides all user configured honor_labels.
     * If HonorLabels is set in scrape objects  to true, this overrides honor_labels to false.
     */
    "overrideHonorLabels"?: boolean;
    /**
     * OverrideHonorTimestamps allows to globally enforce honoring timestamps in all scrape configs.
     */
    "overrideHonorTimestamps"?: boolean;
    /**
     * Paused If set to true all actions on the underlying managed objects are not
     * going to be performed, except for delete actions.
     */
    "paused"?: boolean;
    /**
     * PodDisruptionBudget created by operator
     */
    "podDisruptionBudget"?: {
      /**
       * An eviction is allowed if at most "maxUnavailable" pods selected by
       * "selector" are unavailable after the eviction, i.e. even in absence of
       * the evicted pod. For example, one can prevent all voluntary evictions
       * by specifying 0. This is a mutually exclusive setting with "minAvailable".
       */
      "maxUnavailable"?: number | string;
      /**
       * An eviction is allowed if at least "minAvailable" pods selected by
       * "selector" will still be available after the eviction, i.e. even in the
       * absence of the evicted pod.  So for example you can prevent all voluntary
       * evictions by specifying "100%".
       */
      "minAvailable"?: number | string;
      /**
       * replaces default labels selector generated by operator
       * it's useful when you need to create custom budget
       */
      "selectorLabels"?: {
        [key: string]: string;
      };
    };
    /**
     * PodMetadata configures Labels and Annotations which are propagated to the vmagent pods.
     */
    "podMetadata"?: {
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
       * Labels Map of string keys and values that can be used to organize and categorize
       * (scope and select) objects. May match selectors of replication controllers
       * and services.
       * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
       */
      "labels"?: {
        [key: string]: string;
      };
      /**
       * Name must be unique within a namespace. Is required when creating resources, although
       * some resources may allow a client to request the generation of an appropriate name
       * automatically. Name is primarily intended for creation idempotence and configuration
       * definition.
       * Cannot be updated.
       * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
       */
      "name"?: string;
    };
    /**
     * PodScrapeNamespaceSelector defines Namespaces to be selected for VMPodScrape discovery.
     * Works in combination with Selector.
     * NamespaceSelector nil - only objects at VMAgent namespace.
     * Selector nil - only objects at NamespaceSelector namespaces.
     * If both nil - behaviour controlled by selectAllByDefault
     */
    "podScrapeNamespaceSelector"?: {
      /**
       * matchExpressions is a list of label selector requirements. The requirements are ANDed.
       */
      "matchExpressions"?: Array<{
        /**
         * key is the label key that the selector applies to.
         */
        "key": string;
        /**
         * operator represents a key's relationship to a set of values.
         * Valid operators are In, NotIn, Exists and DoesNotExist.
         */
        "operator": string;
        /**
         * values is an array of string values. If the operator is In or NotIn,
         * the values array must be non-empty. If the operator is Exists or DoesNotExist,
         * the values array must be empty. This array is replaced during a strategic
         * merge patch.
         */
        "values"?: Array<string>;
      }>;
      /**
       * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
       * map is equivalent to an element of matchExpressions, whose key field is "key", the
       * operator is "In", and the values array contains only "value". The requirements are ANDed.
       */
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    /**
     * PodScrapeRelabelTemplate defines relabel config, that will be added to each VMPodScrape.
     * it's useful for adding specific labels to all targets
     */
    "podScrapeRelabelTemplate"?: Array<{
      /**
       * Action to perform based on regex matching. Default is 'replace'
       */
      "action"?: string;
      /**
       * If represents metricsQL match expression (or list of expressions): '{__name__=~"foo_.\*"}'
       */
      "if"?: any;
      /**
       * Labels is used together with Match for `action: graphite`
       */
      "labels"?: {
        [key: string]: string;
      };
      /**
       * Match is used together with Labels for `action: graphite`
       */
      "match"?: string;
      /**
       * Modulus to take of the hash of the source label values.
       */
      "modulus"?: number;
      /**
       * Regular expression against which the extracted value is matched. Default is '(.\*)'
       * victoriaMetrics supports multiline regex joined with |
       * https://docs.victoriametrics.com/vmagent/#relabeling-enhancements
       */
      "regex"?: any;
      /**
       * Replacement value against which a regex replace is performed if the
       * regular expression matches. Regex capture groups are available. Default is '$1'
       */
      "replacement"?: string;
      /**
       * Separator placed between concatenated source label values. default is ';'.
       */
      "separator"?: string;
      /**
       * UnderScoreSourceLabels - additional form of source labels source_labels
       * for compatibility with original relabel config.
       * if set  both sourceLabels and source_labels, sourceLabels has priority.
       * for details https://github.com/VictoriaMetrics/operator/issues/131
       */
      "source_labels"?: Array<string>;
      /**
       * The source labels select values from existing labels. Their content is concatenated
       * using the configured separator and matched against the configured regular expression
       * for the replace, keep, and drop actions.
       */
      "sourceLabels"?: Array<string>;
      /**
       * UnderScoreTargetLabel - additional form of target label - target_label
       * for compatibility with original relabel config.
       * if set  both targetLabel and target_label, targetLabel has priority.
       * for details https://github.com/VictoriaMetrics/operator/issues/131
       */
      "target_label"?: string;
      /**
       * Label to which the resulting value is written in a replace action.
       * It is mandatory for replace actions. Regex capture groups are available.
       */
      "targetLabel"?: string;
    }>;
    /**
     * PodScrapeSelector defines PodScrapes to be selected for target discovery.
     * Works in combination with NamespaceSelector.
     * NamespaceSelector nil - only objects at VMAgent namespace.
     * Selector nil - only objects at NamespaceSelector namespaces.
     * If both nil - behaviour controlled by selectAllByDefault
     */
    "podScrapeSelector"?: {
      /**
       * matchExpressions is a list of label selector requirements. The requirements are ANDed.
       */
      "matchExpressions"?: Array<{
        /**
         * key is the label key that the selector applies to.
         */
        "key": string;
        /**
         * operator represents a key's relationship to a set of values.
         * Valid operators are In, NotIn, Exists and DoesNotExist.
         */
        "operator": string;
        /**
         * values is an array of string values. If the operator is In or NotIn,
         * the values array must be non-empty. If the operator is Exists or DoesNotExist,
         * the values array must be empty. This array is replaced during a strategic
         * merge patch.
         */
        "values"?: Array<string>;
      }>;
      /**
       * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
       * map is equivalent to an element of matchExpressions, whose key field is "key", the
       * operator is "In", and the values array contains only "value". The requirements are ANDed.
       */
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    /**
     * Port listen address
     */
    "port"?: string;
    /**
     * PriorityClassName class assigned to the Pods
     */
    "priorityClassName"?: string;
    /**
     * ProbeNamespaceSelector defines Namespaces to be selected for VMProbe discovery.
     * Works in combination with Selector.
     * NamespaceSelector nil - only objects at VMAgent namespace.
     * Selector nil - only objects at NamespaceSelector namespaces.
     * If both nil - behaviour controlled by selectAllByDefault
     */
    "probeNamespaceSelector"?: {
      /**
       * matchExpressions is a list of label selector requirements. The requirements are ANDed.
       */
      "matchExpressions"?: Array<{
        /**
         * key is the label key that the selector applies to.
         */
        "key": string;
        /**
         * operator represents a key's relationship to a set of values.
         * Valid operators are In, NotIn, Exists and DoesNotExist.
         */
        "operator": string;
        /**
         * values is an array of string values. If the operator is In or NotIn,
         * the values array must be non-empty. If the operator is Exists or DoesNotExist,
         * the values array must be empty. This array is replaced during a strategic
         * merge patch.
         */
        "values"?: Array<string>;
      }>;
      /**
       * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
       * map is equivalent to an element of matchExpressions, whose key field is "key", the
       * operator is "In", and the values array contains only "value". The requirements are ANDed.
       */
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    /**
     * ProbeScrapeRelabelTemplate defines relabel config, that will be added to each VMProbeScrape.
     * it's useful for adding specific labels to all targets
     */
    "probeScrapeRelabelTemplate"?: Array<{
      /**
       * Action to perform based on regex matching. Default is 'replace'
       */
      "action"?: string;
      /**
       * If represents metricsQL match expression (or list of expressions): '{__name__=~"foo_.\*"}'
       */
      "if"?: any;
      /**
       * Labels is used together with Match for `action: graphite`
       */
      "labels"?: {
        [key: string]: string;
      };
      /**
       * Match is used together with Labels for `action: graphite`
       */
      "match"?: string;
      /**
       * Modulus to take of the hash of the source label values.
       */
      "modulus"?: number;
      /**
       * Regular expression against which the extracted value is matched. Default is '(.\*)'
       * victoriaMetrics supports multiline regex joined with |
       * https://docs.victoriametrics.com/vmagent/#relabeling-enhancements
       */
      "regex"?: any;
      /**
       * Replacement value against which a regex replace is performed if the
       * regular expression matches. Regex capture groups are available. Default is '$1'
       */
      "replacement"?: string;
      /**
       * Separator placed between concatenated source label values. default is ';'.
       */
      "separator"?: string;
      /**
       * UnderScoreSourceLabels - additional form of source labels source_labels
       * for compatibility with original relabel config.
       * if set  both sourceLabels and source_labels, sourceLabels has priority.
       * for details https://github.com/VictoriaMetrics/operator/issues/131
       */
      "source_labels"?: Array<string>;
      /**
       * The source labels select values from existing labels. Their content is concatenated
       * using the configured separator and matched against the configured regular expression
       * for the replace, keep, and drop actions.
       */
      "sourceLabels"?: Array<string>;
      /**
       * UnderScoreTargetLabel - additional form of target label - target_label
       * for compatibility with original relabel config.
       * if set  both targetLabel and target_label, targetLabel has priority.
       * for details https://github.com/VictoriaMetrics/operator/issues/131
       */
      "target_label"?: string;
      /**
       * Label to which the resulting value is written in a replace action.
       * It is mandatory for replace actions. Regex capture groups are available.
       */
      "targetLabel"?: string;
    }>;
    /**
     * ProbeSelector defines VMProbe to be selected for target probing.
     * Works in combination with NamespaceSelector.
     * NamespaceSelector nil - only objects at VMAgent namespace.
     * Selector nil - only objects at NamespaceSelector namespaces.
     * If both nil - behaviour controlled by selectAllByDefault
     */
    "probeSelector"?: {
      /**
       * matchExpressions is a list of label selector requirements. The requirements are ANDed.
       */
      "matchExpressions"?: Array<{
        /**
         * key is the label key that the selector applies to.
         */
        "key": string;
        /**
         * operator represents a key's relationship to a set of values.
         * Valid operators are In, NotIn, Exists and DoesNotExist.
         */
        "operator": string;
        /**
         * values is an array of string values. If the operator is In or NotIn,
         * the values array must be non-empty. If the operator is Exists or DoesNotExist,
         * the values array must be empty. This array is replaced during a strategic
         * merge patch.
         */
        "values"?: Array<string>;
      }>;
      /**
       * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
       * map is equivalent to an element of matchExpressions, whose key field is "key", the
       * operator is "In", and the values array contains only "value". The requirements are ANDed.
       */
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    /**
     * ReadinessGates defines pod readiness gates
     */
    "readinessGates"?: Array<{
      /**
       * ConditionType refers to a condition in the pod's condition list with matching type.
       */
      "conditionType": string;
    }>;
    /**
     * ReadinessProbe that will be added CRD pod
     */
    "readinessProbe"?: {
    };
    /**
     * RelabelConfig ConfigMap with global relabel config -remoteWrite.relabelConfig
     * This relabeling is applied to all the collected metrics before sending them to remote storage.
     */
    "relabelConfig"?: {
      /**
       * The key to select.
       */
      "key": string;
      /**
       * Name of the referent.
       * This field is effectively required, but due to backwards compatibility is
       * allowed to be empty. Instances of this type with an empty value here are
       * almost certainly wrong.
       * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Specify whether the ConfigMap or its key must be defined
       */
      "optional"?: boolean;
    };
    /**
     * RemoteWrite list of victoria metrics /some other remote write system
     * for vm it must looks like: http://victoria-metrics-single:8429/api/v1/write
     * or for cluster different url
     * https://github.com/VictoriaMetrics/VictoriaMetrics/tree/master/app/vmagent#splitting-data-streams-among-multiple-systems
     */
    "remoteWrite": Array<{
      /**
       * BasicAuth allow an endpoint to authenticate over basic authentication
       */
      "basicAuth"?: {
        /**
         * Password defines reference for secret with password value
         * The secret needs to be in the same namespace as scrape object
         */
        "password"?: {
          /**
           * The key of the secret to select from.  Must be a valid secret key.
           */
          "key": string;
          /**
           * Name of the referent.
           * This field is effectively required, but due to backwards compatibility is
           * allowed to be empty. Instances of this type with an empty value here are
           * almost certainly wrong.
           * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Specify whether the Secret or its key must be defined
           */
          "optional"?: boolean;
        };
        /**
         * PasswordFile defines path to password file at disk
         * must be pre-mounted
         */
        "password_file"?: string;
        /**
         * Username defines reference for secret with username value
         * The secret needs to be in the same namespace as scrape object
         */
        "username"?: {
          /**
           * The key of the secret to select from.  Must be a valid secret key.
           */
          "key": string;
          /**
           * Name of the referent.
           * This field is effectively required, but due to backwards compatibility is
           * allowed to be empty. Instances of this type with an empty value here are
           * almost certainly wrong.
           * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Specify whether the Secret or its key must be defined
           */
          "optional"?: boolean;
        };
      };
      /**
       * Optional bearer auth token to use for -remoteWrite.url
       */
      "bearerTokenSecret"?: {
        /**
         * The key of the secret to select from.  Must be a valid secret key.
         */
        "key": string;
        /**
         * Name of the referent.
         * This field is effectively required, but due to backwards compatibility is
         * allowed to be empty. Instances of this type with an empty value here are
         * almost certainly wrong.
         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Specify whether the Secret or its key must be defined
         */
        "optional"?: boolean;
      };
      /**
       * ForceVMProto forces using VictoriaMetrics protocol for sending data to -remoteWrite.url
       */
      "forceVMProto"?: boolean;
      /**
       * Headers allow configuring custom http headers
       * Must be in form of semicolon separated header with value
       * e.g.
       * headerName: headerValue
       * vmagent supports since 1.79.0 version
       */
      "headers"?: Array<string>;
      /**
       * InlineUrlRelabelConfig defines relabeling config for remoteWriteURL, it can be defined at crd spec.
       */
      "inlineUrlRelabelConfig"?: Array<{
        /**
         * Action to perform based on regex matching. Default is 'replace'
         */
        "action"?: string;
        /**
         * If represents metricsQL match expression (or list of expressions): '{__name__=~"foo_.\*"}'
         */
        "if"?: any;
        /**
         * Labels is used together with Match for `action: graphite`
         */
        "labels"?: {
          [key: string]: string;
        };
        /**
         * Match is used together with Labels for `action: graphite`
         */
        "match"?: string;
        /**
         * Modulus to take of the hash of the source label values.
         */
        "modulus"?: number;
        /**
         * Regular expression against which the extracted value is matched. Default is '(.\*)'
         * victoriaMetrics supports multiline regex joined with |
         * https://docs.victoriametrics.com/vmagent/#relabeling-enhancements
         */
        "regex"?: any;
        /**
         * Replacement value against which a regex replace is performed if the
         * regular expression matches. Regex capture groups are available. Default is '$1'
         */
        "replacement"?: string;
        /**
         * Separator placed between concatenated source label values. default is ';'.
         */
        "separator"?: string;
        /**
         * UnderScoreSourceLabels - additional form of source labels source_labels
         * for compatibility with original relabel config.
         * if set  both sourceLabels and source_labels, sourceLabels has priority.
         * for details https://github.com/VictoriaMetrics/operator/issues/131
         */
        "source_labels"?: Array<string>;
        /**
         * The source labels select values from existing labels. Their content is concatenated
         * using the configured separator and matched against the configured regular expression
         * for the replace, keep, and drop actions.
         */
        "sourceLabels"?: Array<string>;
        /**
         * UnderScoreTargetLabel - additional form of target label - target_label
         * for compatibility with original relabel config.
         * if set  both targetLabel and target_label, targetLabel has priority.
         * for details https://github.com/VictoriaMetrics/operator/issues/131
         */
        "target_label"?: string;
        /**
         * Label to which the resulting value is written in a replace action.
         * It is mandatory for replace actions. Regex capture groups are available.
         */
        "targetLabel"?: string;
      }>;
      /**
       * MaxDiskUsage defines the maximum file-based buffer size in bytes for -remoteWrite.url
       */
      "maxDiskUsage"?: string;
      /**
       * OAuth2 defines auth configuration
       */
      "oauth2"?: {
        /**
         * The secret or configmap containing the OAuth2 client id
         */
        "client_id": {
          /**
           * ConfigMap containing data to use for the targets.
           */
          "configMap"?: {
            /**
             * The key to select.
             */
            "key": string;
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Specify whether the ConfigMap or its key must be defined
             */
            "optional"?: boolean;
          };
          /**
           * Secret containing data to use for the targets.
           */
          "secret"?: {
            /**
             * The key of the secret to select from.  Must be a valid secret key.
             */
            "key": string;
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
          };
        };
        /**
         * The secret containing the OAuth2 client secret
         */
        "client_secret"?: {
          /**
           * The key of the secret to select from.  Must be a valid secret key.
           */
          "key": string;
          /**
           * Name of the referent.
           * This field is effectively required, but due to backwards compatibility is
           * allowed to be empty. Instances of this type with an empty value here are
           * almost certainly wrong.
           * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Specify whether the Secret or its key must be defined
           */
          "optional"?: boolean;
        };
        /**
         * ClientSecretFile defines path for client secret file.
         */
        "client_secret_file"?: string;
        /**
         * Parameters to append to the token URL
         */
        "endpoint_params"?: {
          [key: string]: string;
        };
        /**
         * OAuth2 scopes used for the token request
         */
        "scopes"?: Array<string>;
        /**
         * The URL to fetch the token from
         */
        "token_url": string;
      };
      /**
       * Timeout for sending a single block of data to -remoteWrite.url (default 1m0s)
       */
      "sendTimeout"?: string;
      /**
       * StreamAggrConfig defines stream aggregation configuration for VMAgent for -remoteWrite.url
       */
      "streamAggrConfig"?: {
        /**
         * ConfigMap with stream aggregation rules
         */
        "configmap"?: {
          /**
           * The key to select.
           */
          "key": string;
          /**
           * Name of the referent.
           * This field is effectively required, but due to backwards compatibility is
           * allowed to be empty. Instances of this type with an empty value here are
           * almost certainly wrong.
           * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Specify whether the ConfigMap or its key must be defined
           */
          "optional"?: boolean;
        };
        /**
         * Allows setting different de-duplication intervals per each configured remote storage
         */
        "dedupInterval"?: string;
        /**
         * Allow drop all the input samples after the aggregation
         */
        "dropInput"?: boolean;
        /**
         * labels to drop from samples for aggregator before stream de-duplication and aggregation
         */
        "dropInputLabels"?: Array<string>;
        /**
         * IgnoreFirstIntervals instructs to ignore first interval
         */
        "ignoreFirstIntervals"?: number;
        /**
         * IgnoreOldSamples instructs to ignore samples with old timestamps outside the current aggregation interval.
         */
        "ignoreOldSamples"?: boolean;
        /**
         * Allows writing both raw and aggregate data
         */
        "keepInput"?: boolean;
        /**
         * Stream aggregation rules
         */
        "rules"?: Array<{
          /**
           * By is an optional list of labels for grouping input series.
           * 
           * See also Without.
           * 
           * If neither By nor Without are set, then the Outputs are calculated
           * individually per each input time series.
           */
          "by"?: Array<string>;
          /**
           * DedupInterval is an optional interval for deduplication.
           */
          "dedup_interval"?: string;
          /**
           * DropInputLabels is an optional list with labels, which must be dropped before further processing of input samples.
           * 
           * Labels are dropped before de-duplication and aggregation.
           */
          "drop_input_labels"?: Array<string>;
          /**
           * FlushOnShutdown defines whether to flush the aggregation state on process termination
           * or config reload. Is `false` by default.
           * It is not recommended changing this setting, unless unfinished aggregations states
           * are preferred to missing data points.
           */
          "flush_on_shutdown"?: boolean;
          "ignore_first_intervals"?: number;
          /**
           * IgnoreOldSamples instructs to ignore samples with old timestamps outside the current aggregation interval.
           */
          "ignore_old_samples"?: boolean;
          /**
           * InputRelabelConfigs is an optional relabeling rules, which are applied on the input
           * before aggregation.
           */
          "input_relabel_configs"?: Array<{
            /**
             * Action to perform based on regex matching. Default is 'replace'
             */
            "action"?: string;
            /**
             * If represents metricsQL match expression (or list of expressions): '{__name__=~"foo_.\*"}'
             */
            "if"?: any;
            /**
             * Labels is used together with Match for `action: graphite`
             */
            "labels"?: {
              [key: string]: string;
            };
            /**
             * Match is used together with Labels for `action: graphite`
             */
            "match"?: string;
            /**
             * Modulus to take of the hash of the source label values.
             */
            "modulus"?: number;
            /**
             * Regular expression against which the extracted value is matched. Default is '(.\*)'
             * victoriaMetrics supports multiline regex joined with |
             * https://docs.victoriametrics.com/vmagent/#relabeling-enhancements
             */
            "regex"?: any;
            /**
             * Replacement value against which a regex replace is performed if the
             * regular expression matches. Regex capture groups are available. Default is '$1'
             */
            "replacement"?: string;
            /**
             * Separator placed between concatenated source label values. default is ';'.
             */
            "separator"?: string;
            /**
             * UnderScoreSourceLabels - additional form of source labels source_labels
             * for compatibility with original relabel config.
             * if set  both sourceLabels and source_labels, sourceLabels has priority.
             * for details https://github.com/VictoriaMetrics/operator/issues/131
             */
            "source_labels"?: Array<string>;
            /**
             * The source labels select values from existing labels. Their content is concatenated
             * using the configured separator and matched against the configured regular expression
             * for the replace, keep, and drop actions.
             */
            "sourceLabels"?: Array<string>;
            /**
             * UnderScoreTargetLabel - additional form of target label - target_label
             * for compatibility with original relabel config.
             * if set  both targetLabel and target_label, targetLabel has priority.
             * for details https://github.com/VictoriaMetrics/operator/issues/131
             */
            "target_label"?: string;
            /**
             * Label to which the resulting value is written in a replace action.
             * It is mandatory for replace actions. Regex capture groups are available.
             */
            "targetLabel"?: string;
          }>;
          /**
           * Interval is the interval between aggregations.
           */
          "interval": string;
          /**
           * KeepMetricNames instructs to leave metric names as is for the output time series without adding any suffix.
           */
          "keep_metric_names"?: boolean;
          /**
           * Match is a label selector (or list of label selectors) for filtering time series for the given selector.
           * 
           * If the match isn't set, then all the input time series are processed.
           */
          "match"?: any;
          /**
           * NoAlignFlushToInterval disables aligning of flushes to multiples of Interval.
           * By default flushes are aligned to Interval.
           */
          "no_align_flush_to_interval"?: boolean;
          /**
           * OutputRelabelConfigs is an optional relabeling rules, which are applied
           * on the aggregated output before being sent to remote storage.
           */
          "output_relabel_configs"?: Array<{
            /**
             * Action to perform based on regex matching. Default is 'replace'
             */
            "action"?: string;
            /**
             * If represents metricsQL match expression (or list of expressions): '{__name__=~"foo_.\*"}'
             */
            "if"?: any;
            /**
             * Labels is used together with Match for `action: graphite`
             */
            "labels"?: {
              [key: string]: string;
            };
            /**
             * Match is used together with Labels for `action: graphite`
             */
            "match"?: string;
            /**
             * Modulus to take of the hash of the source label values.
             */
            "modulus"?: number;
            /**
             * Regular expression against which the extracted value is matched. Default is '(.\*)'
             * victoriaMetrics supports multiline regex joined with |
             * https://docs.victoriametrics.com/vmagent/#relabeling-enhancements
             */
            "regex"?: any;
            /**
             * Replacement value against which a regex replace is performed if the
             * regular expression matches. Regex capture groups are available. Default is '$1'
             */
            "replacement"?: string;
            /**
             * Separator placed between concatenated source label values. default is ';'.
             */
            "separator"?: string;
            /**
             * UnderScoreSourceLabels - additional form of source labels source_labels
             * for compatibility with original relabel config.
             * if set  both sourceLabels and source_labels, sourceLabels has priority.
             * for details https://github.com/VictoriaMetrics/operator/issues/131
             */
            "source_labels"?: Array<string>;
            /**
             * The source labels select values from existing labels. Their content is concatenated
             * using the configured separator and matched against the configured regular expression
             * for the replace, keep, and drop actions.
             */
            "sourceLabels"?: Array<string>;
            /**
             * UnderScoreTargetLabel - additional form of target label - target_label
             * for compatibility with original relabel config.
             * if set  both targetLabel and target_label, targetLabel has priority.
             * for details https://github.com/VictoriaMetrics/operator/issues/131
             */
            "target_label"?: string;
            /**
             * Label to which the resulting value is written in a replace action.
             * It is mandatory for replace actions. Regex capture groups are available.
             */
            "targetLabel"?: string;
          }>;
          /**
           * Outputs is a list of output aggregate functions to produce.
           * 
           * The following names are allowed:
           * 
           * - total - aggregates input counters
           * - increase - counts the increase over input counters
           * - count_series - counts the input series
           * - count_samples - counts the input samples
           * - sum_samples - sums the input samples
           * - last - the last biggest sample value
           * - min - the minimum sample value
           * - max - the maximum sample value
           * - avg - the average value across all the samples
           * - stddev - standard deviation across all the samples
           * - stdvar - standard variance across all the samples
           * - histogram_bucket - creates VictoriaMetrics histogram for input samples
           * - quantiles(phi1, ..., phiN) - quantiles' estimation for phi in the range [0..1]
           * 
           * The output time series will have the following names:
           * 
           *   input_name:aggr_<interval>_<output>
           */
          "outputs": Array<string>;
          /**
           * Staleness interval is interval after which the series state will be reset if no samples have been sent during it.
           * The parameter is only relevant for outputs: total, total_prometheus, increase, increase_prometheus and histogram_bucket.
           */
          "staleness_interval"?: string;
          /**
           * Without is an optional list of labels, which must be excluded when grouping input series.
           * 
           * See also By.
           * 
           * If neither By nor Without are set, then the Outputs are calculated
           * individually per each input time series.
           */
          "without"?: Array<string>;
        }>;
      };
      /**
       * TLSConfig describes tls configuration for remote write target
       */
      "tlsConfig"?: {
        /**
         * Stuct containing the CA cert to use for the targets.
         */
        "ca"?: {
          /**
           * ConfigMap containing data to use for the targets.
           */
          "configMap"?: {
            /**
             * The key to select.
             */
            "key": string;
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Specify whether the ConfigMap or its key must be defined
             */
            "optional"?: boolean;
          };
          /**
           * Secret containing data to use for the targets.
           */
          "secret"?: {
            /**
             * The key of the secret to select from.  Must be a valid secret key.
             */
            "key": string;
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
          };
        };
        /**
         * Path to the CA cert in the container to use for the targets.
         */
        "caFile"?: string;
        /**
         * Struct containing the client cert file for the targets.
         */
        "cert"?: {
          /**
           * ConfigMap containing data to use for the targets.
           */
          "configMap"?: {
            /**
             * The key to select.
             */
            "key": string;
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Specify whether the ConfigMap or its key must be defined
             */
            "optional"?: boolean;
          };
          /**
           * Secret containing data to use for the targets.
           */
          "secret"?: {
            /**
             * The key of the secret to select from.  Must be a valid secret key.
             */
            "key": string;
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
          };
        };
        /**
         * Path to the client cert file in the container for the targets.
         */
        "certFile"?: string;
        /**
         * Disable target certificate validation.
         */
        "insecureSkipVerify"?: boolean;
        /**
         * Path to the client key file in the container for the targets.
         */
        "keyFile"?: string;
        /**
         * Secret containing the client key file for the targets.
         */
        "keySecret"?: {
          /**
           * The key of the secret to select from.  Must be a valid secret key.
           */
          "key": string;
          /**
           * Name of the referent.
           * This field is effectively required, but due to backwards compatibility is
           * allowed to be empty. Instances of this type with an empty value here are
           * almost certainly wrong.
           * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name"?: string;
          /**
           * Specify whether the Secret or its key must be defined
           */
          "optional"?: boolean;
        };
        /**
         * Used to verify the hostname for the targets.
         */
        "serverName"?: string;
      };
      /**
       * URL of the endpoint to send samples to.
       */
      "url": string;
      /**
       * ConfigMap with relabeling config which is applied to metrics before sending them to the corresponding -remoteWrite.url
       */
      "urlRelabelConfig"?: {
        /**
         * The key to select.
         */
        "key": string;
        /**
         * Name of the referent.
         * This field is effectively required, but due to backwards compatibility is
         * allowed to be empty. Instances of this type with an empty value here are
         * almost certainly wrong.
         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Specify whether the ConfigMap or its key must be defined
         */
        "optional"?: boolean;
      };
    }>;
    /**
     * RemoteWriteSettings defines global settings for all remoteWrite urls.
     */
    "remoteWriteSettings"?: {
      /**
       * Interval for flushing the data to remote storage. (default 1s)
       */
      "flushInterval"?: string;
      /**
       * Labels in the form 'name=value' to add to all the metrics before sending them. This overrides the label if it already exists.
       */
      "label"?: {
        [key: string]: string;
      };
      /**
       * The maximum size in bytes of unpacked request to send to remote storage
       */
      "maxBlockSize"?: number;
      /**
       * The maximum file-based buffer size in bytes at -remoteWrite.tmpDataPath
       */
      "maxDiskUsagePerURL"?: number;
      /**
       * The number of concurrent queues
       */
      "queues"?: number;
      /**
       * Whether to show -remoteWrite.url in the exported metrics. It is hidden by default, since it can contain sensitive auth info
       */
      "showURL"?: boolean;
      /**
       * Path to directory where temporary data for remote write component is stored (default vmagent-remotewrite-data)
       */
      "tmpDataPath"?: string;
      /**
       * Configures vmagent accepting data via the same multitenant endpoints as vminsert at VictoriaMetrics cluster does,
       * see [here](https://docs.victoriametrics.com/vmagent/#multitenancy).
       * it's global setting and affects all remote storage configurations
       */
      "useMultiTenantMode"?: boolean;
    };
    /**
     * ReplicaCount is the expected size of the Application.
     */
    "replicaCount"?: number;
    /**
     * Resources container resource request and limits, https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     * if not defined default resources from operator config will be used
     */
    "resources"?: {
      /**
       * Claims lists the names of resources, defined in spec.resourceClaims,
       * that are used by this container.
       * 
       * This is an alpha field and requires enabling the
       * DynamicResourceAllocation feature gate.
       * 
       * This field is immutable. It can only be set for containers.
       */
      "claims"?: Array<{
        /**
         * Name must match the name of one entry in pod.spec.resourceClaims of
         * the Pod where this field is used. It makes that resource available
         * inside a container.
         */
        "name": string;
      }>;
      /**
       * Limits describes the maximum amount of compute resources allowed.
       * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
       */
      "limits"?: {
        [key: string]: number | string;
      };
      /**
       * Requests describes the minimum amount of compute resources required.
       * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
       * otherwise to an implementation-defined value. Requests cannot exceed Limits.
       * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
       */
      "requests"?: {
        [key: string]: number | string;
      };
    };
    /**
     * The number of old ReplicaSets to retain to allow rollback in deployment or
     * maximum number of revisions that will be maintained in the Deployment revision history.
     * Has no effect at StatefulSets
     * Defaults to 10.
     */
    "revisionHistoryLimitCount"?: number;
    /**
     * RollingUpdate - overrides deployment update params.
     */
    "rollingUpdate"?: {
      /**
       * The maximum number of pods that can be scheduled above the desired number of
       * pods.
       * Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%).
       * This can not be 0 if MaxUnavailable is 0.
       * Absolute number is calculated from percentage by rounding up.
       * Defaults to 25%.
       * Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when
       * the rolling update starts, such that the total number of old and new pods do not exceed
       * 130% of desired pods. Once old pods have been killed,
       * new ReplicaSet can be scaled up further, ensuring that total number of pods running
       * at any time during the update is at most 130% of desired pods.
       */
      "maxSurge"?: number | string;
      /**
       * The maximum number of pods that can be unavailable during the update.
       * Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%).
       * Absolute number is calculated from percentage by rounding down.
       * This can not be 0 if MaxSurge is 0.
       * Defaults to 25%.
       * Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods
       * immediately when the rolling update starts. Once new pods are ready, old ReplicaSet
       * can be scaled down further, followed by scaling up the new ReplicaSet, ensuring
       * that the total number of pods available at all times during the update is at
       * least 70% of desired pods.
       */
      "maxUnavailable"?: number | string;
    };
    /**
     * RuntimeClassName - defines runtime class for kubernetes pod.
     * https://kubernetes.io/docs/concepts/containers/runtime-class/
     */
    "runtimeClassName"?: string;
    /**
     * SchedulerName - defines kubernetes scheduler name
     */
    "schedulerName"?: string;
    /**
     * ScrapeConfigNamespaceSelector defines Namespaces to be selected for VMScrapeConfig discovery.
     * Works in combination with Selector.
     * NamespaceSelector nil - only objects at VMAgent namespace.
     * Selector nil - only objects at NamespaceSelector namespaces.
     * If both nil - behaviour controlled by selectAllByDefault
     */
    "scrapeConfigNamespaceSelector"?: {
      /**
       * matchExpressions is a list of label selector requirements. The requirements are ANDed.
       */
      "matchExpressions"?: Array<{
        /**
         * key is the label key that the selector applies to.
         */
        "key": string;
        /**
         * operator represents a key's relationship to a set of values.
         * Valid operators are In, NotIn, Exists and DoesNotExist.
         */
        "operator": string;
        /**
         * values is an array of string values. If the operator is In or NotIn,
         * the values array must be non-empty. If the operator is Exists or DoesNotExist,
         * the values array must be empty. This array is replaced during a strategic
         * merge patch.
         */
        "values"?: Array<string>;
      }>;
      /**
       * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
       * map is equivalent to an element of matchExpressions, whose key field is "key", the
       * operator is "In", and the values array contains only "value". The requirements are ANDed.
       */
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    /**
     * ScrapeConfigRelabelTemplate defines relabel config, that will be added to each VMScrapeConfig.
     * it's useful for adding specific labels to all targets
     */
    "scrapeConfigRelabelTemplate"?: Array<{
      /**
       * Action to perform based on regex matching. Default is 'replace'
       */
      "action"?: string;
      /**
       * If represents metricsQL match expression (or list of expressions): '{__name__=~"foo_.\*"}'
       */
      "if"?: any;
      /**
       * Labels is used together with Match for `action: graphite`
       */
      "labels"?: {
        [key: string]: string;
      };
      /**
       * Match is used together with Labels for `action: graphite`
       */
      "match"?: string;
      /**
       * Modulus to take of the hash of the source label values.
       */
      "modulus"?: number;
      /**
       * Regular expression against which the extracted value is matched. Default is '(.\*)'
       * victoriaMetrics supports multiline regex joined with |
       * https://docs.victoriametrics.com/vmagent/#relabeling-enhancements
       */
      "regex"?: any;
      /**
       * Replacement value against which a regex replace is performed if the
       * regular expression matches. Regex capture groups are available. Default is '$1'
       */
      "replacement"?: string;
      /**
       * Separator placed between concatenated source label values. default is ';'.
       */
      "separator"?: string;
      /**
       * UnderScoreSourceLabels - additional form of source labels source_labels
       * for compatibility with original relabel config.
       * if set  both sourceLabels and source_labels, sourceLabels has priority.
       * for details https://github.com/VictoriaMetrics/operator/issues/131
       */
      "source_labels"?: Array<string>;
      /**
       * The source labels select values from existing labels. Their content is concatenated
       * using the configured separator and matched against the configured regular expression
       * for the replace, keep, and drop actions.
       */
      "sourceLabels"?: Array<string>;
      /**
       * UnderScoreTargetLabel - additional form of target label - target_label
       * for compatibility with original relabel config.
       * if set  both targetLabel and target_label, targetLabel has priority.
       * for details https://github.com/VictoriaMetrics/operator/issues/131
       */
      "target_label"?: string;
      /**
       * Label to which the resulting value is written in a replace action.
       * It is mandatory for replace actions. Regex capture groups are available.
       */
      "targetLabel"?: string;
    }>;
    /**
     * ScrapeConfigSelector defines VMScrapeConfig to be selected for target discovery.
     * Works in combination with NamespaceSelector.
     */
    "scrapeConfigSelector"?: {
      /**
       * matchExpressions is a list of label selector requirements. The requirements are ANDed.
       */
      "matchExpressions"?: Array<{
        /**
         * key is the label key that the selector applies to.
         */
        "key": string;
        /**
         * operator represents a key's relationship to a set of values.
         * Valid operators are In, NotIn, Exists and DoesNotExist.
         */
        "operator": string;
        /**
         * values is an array of string values. If the operator is In or NotIn,
         * the values array must be non-empty. If the operator is Exists or DoesNotExist,
         * the values array must be empty. This array is replaced during a strategic
         * merge patch.
         */
        "values"?: Array<string>;
      }>;
      /**
       * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
       * map is equivalent to an element of matchExpressions, whose key field is "key", the
       * operator is "In", and the values array contains only "value". The requirements are ANDed.
       */
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    /**
     * ScrapeInterval defines how often scrape targets by default
     */
    "scrapeInterval"?: string;
    /**
     * ScrapeTimeout defines global timeout for targets scrape
     */
    "scrapeTimeout"?: string;
    /**
     * Secrets is a list of Secrets in the same namespace as the Application
     * object, which shall be mounted into the Application container
     * at /etc/vm/secrets/SECRET_NAME folder
     */
    "secrets"?: Array<string>;
    /**
     * SecurityContext holds pod-level security attributes and common container settings.
     * This defaults to the default PodSecurityContext.
     */
    "securityContext"?: {
    };
    /**
     * SelectAllByDefault changes default behavior for empty CRD selectors, such ServiceScrapeSelector.
     * with selectAllByDefault: true and empty serviceScrapeSelector and ServiceScrapeNamespaceSelector
     * Operator selects all exist serviceScrapes
     * with selectAllByDefault: false - selects nothing
     */
    "selectAllByDefault"?: boolean;
    /**
     * ServiceAccountName is the name of the ServiceAccount to use to run the pods
     */
    "serviceAccountName"?: string;
    /**
     * ServiceScrapeNamespaceSelector Namespaces to be selected for VMServiceScrape discovery.
     * Works in combination with Selector.
     * NamespaceSelector nil - only objects at VMAgent namespace.
     * Selector nil - only objects at NamespaceSelector namespaces.
     * If both nil - behaviour controlled by selectAllByDefault
     */
    "serviceScrapeNamespaceSelector"?: {
      /**
       * matchExpressions is a list of label selector requirements. The requirements are ANDed.
       */
      "matchExpressions"?: Array<{
        /**
         * key is the label key that the selector applies to.
         */
        "key": string;
        /**
         * operator represents a key's relationship to a set of values.
         * Valid operators are In, NotIn, Exists and DoesNotExist.
         */
        "operator": string;
        /**
         * values is an array of string values. If the operator is In or NotIn,
         * the values array must be non-empty. If the operator is Exists or DoesNotExist,
         * the values array must be empty. This array is replaced during a strategic
         * merge patch.
         */
        "values"?: Array<string>;
      }>;
      /**
       * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
       * map is equivalent to an element of matchExpressions, whose key field is "key", the
       * operator is "In", and the values array contains only "value". The requirements are ANDed.
       */
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    /**
     * ServiceScrapeRelabelTemplate defines relabel config, that will be added to each VMServiceScrape.
     * it's useful for adding specific labels to all targets
     */
    "serviceScrapeRelabelTemplate"?: Array<{
      /**
       * Action to perform based on regex matching. Default is 'replace'
       */
      "action"?: string;
      /**
       * If represents metricsQL match expression (or list of expressions): '{__name__=~"foo_.\*"}'
       */
      "if"?: any;
      /**
       * Labels is used together with Match for `action: graphite`
       */
      "labels"?: {
        [key: string]: string;
      };
      /**
       * Match is used together with Labels for `action: graphite`
       */
      "match"?: string;
      /**
       * Modulus to take of the hash of the source label values.
       */
      "modulus"?: number;
      /**
       * Regular expression against which the extracted value is matched. Default is '(.\*)'
       * victoriaMetrics supports multiline regex joined with |
       * https://docs.victoriametrics.com/vmagent/#relabeling-enhancements
       */
      "regex"?: any;
      /**
       * Replacement value against which a regex replace is performed if the
       * regular expression matches. Regex capture groups are available. Default is '$1'
       */
      "replacement"?: string;
      /**
       * Separator placed between concatenated source label values. default is ';'.
       */
      "separator"?: string;
      /**
       * UnderScoreSourceLabels - additional form of source labels source_labels
       * for compatibility with original relabel config.
       * if set  both sourceLabels and source_labels, sourceLabels has priority.
       * for details https://github.com/VictoriaMetrics/operator/issues/131
       */
      "source_labels"?: Array<string>;
      /**
       * The source labels select values from existing labels. Their content is concatenated
       * using the configured separator and matched against the configured regular expression
       * for the replace, keep, and drop actions.
       */
      "sourceLabels"?: Array<string>;
      /**
       * UnderScoreTargetLabel - additional form of target label - target_label
       * for compatibility with original relabel config.
       * if set  both targetLabel and target_label, targetLabel has priority.
       * for details https://github.com/VictoriaMetrics/operator/issues/131
       */
      "target_label"?: string;
      /**
       * Label to which the resulting value is written in a replace action.
       * It is mandatory for replace actions. Regex capture groups are available.
       */
      "targetLabel"?: string;
    }>;
    /**
     * ServiceScrapeSelector defines ServiceScrapes to be selected for target discovery.
     * Works in combination with NamespaceSelector.
     * NamespaceSelector nil - only objects at VMAgent namespace.
     * Selector nil - only objects at NamespaceSelector namespaces.
     * If both nil - behaviour controlled by selectAllByDefault
     */
    "serviceScrapeSelector"?: {
      /**
       * matchExpressions is a list of label selector requirements. The requirements are ANDed.
       */
      "matchExpressions"?: Array<{
        /**
         * key is the label key that the selector applies to.
         */
        "key": string;
        /**
         * operator represents a key's relationship to a set of values.
         * Valid operators are In, NotIn, Exists and DoesNotExist.
         */
        "operator": string;
        /**
         * values is an array of string values. If the operator is In or NotIn,
         * the values array must be non-empty. If the operator is Exists or DoesNotExist,
         * the values array must be empty. This array is replaced during a strategic
         * merge patch.
         */
        "values"?: Array<string>;
      }>;
      /**
       * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
       * map is equivalent to an element of matchExpressions, whose key field is "key", the
       * operator is "In", and the values array contains only "value". The requirements are ANDed.
       */
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    /**
     * ServiceScrapeSpec that will be added to vmagent VMServiceScrape spec
     */
    "serviceScrapeSpec"?: {
    };
    /**
     * ServiceSpec that will be added to vmagent service spec
     */
    "serviceSpec"?: {
      /**
       * EmbeddedObjectMetadata defines objectMeta for additional service.
       */
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
         * Labels Map of string keys and values that can be used to organize and categorize
         * (scope and select) objects. May match selectors of replication controllers
         * and services.
         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
         */
        "labels"?: {
          [key: string]: string;
        };
        /**
         * Name must be unique within a namespace. Is required when creating resources, although
         * some resources may allow a client to request the generation of an appropriate name
         * automatically. Name is primarily intended for creation idempotence and configuration
         * definition.
         * Cannot be updated.
         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
         */
        "name"?: string;
      };
      /**
       * ServiceSpec describes the attributes that a user creates on a service.
       * More info: https://kubernetes.io/docs/concepts/services-networking/service/
       */
      "spec": {
      };
      /**
       * UseAsDefault applies changes from given service definition to the main object Service
       * Changing from headless service to clusterIP or loadbalancer may break cross-component communication
       */
      "useAsDefault"?: boolean;
    };
    /**
     * ShardCount - numbers of shards of VMAgent
     * in this case operator will use 1 deployment/sts per shard with
     * replicas count according to spec.replicas,
     * see [here](https://docs.victoriametrics.com/vmagent/#scraping-big-number-of-targets)
     */
    "shardCount"?: number;
    /**
     * StartupProbe that will be added to CRD pod
     */
    "startupProbe"?: {
    };
    /**
     * StatefulMode enables StatefulSet for `VMAgent` instead of Deployment
     * it allows using persistent storage for vmagent's persistentQueue
     */
    "statefulMode"?: boolean;
    /**
     * StatefulRollingUpdateStrategy allows configuration for strategyType
     * set it to RollingUpdate for disabling operator statefulSet rollingUpdate
     */
    "statefulRollingUpdateStrategy"?: string;
    /**
     * StatefulStorage configures storage for StatefulSet
     */
    "statefulStorage"?: {
      /**
       * Deprecated: subPath usage will be disabled by default in a future release, this option will become unnecessary.
       * DisableMountSubPath allows to remove any subPath usage in volume mounts.
       */
      "disableMountSubPath"?: boolean;
      /**
       * EmptyDirVolumeSource to be used by the Prometheus StatefulSets. If specified, used in place of any volumeClaimTemplate. More
       * info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir
       */
      "emptyDir"?: {
        /**
         * medium represents what type of storage medium should back this directory.
         * The default is "" which means to use the node's default medium.
         * Must be an empty string (default) or Memory.
         * More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
         */
        "medium"?: string;
        /**
         * sizeLimit is the total amount of local storage required for this EmptyDir volume.
         * The size limit is also applicable for memory medium.
         * The maximum usage on memory medium EmptyDir would be the minimum value between
         * the SizeLimit specified here and the sum of memory limits of all containers in a pod.
         * The default is nil which means that the limit is undefined.
         * More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
         */
        "sizeLimit"?: number | string;
      };
      /**
       * A PVC spec to be used by the VMAlertManager StatefulSets.
       */
      "volumeClaimTemplate"?: {
        /**
         * APIVersion defines the versioned schema of this representation of an object.
         * Servers should convert recognized schemas to the latest internal value, and
         * may reject unrecognized values.
         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
         */
        "apiVersion"?: string;
        /**
         * Kind is a string value representing the REST resource this object represents.
         * Servers may infer this from the endpoint the client submits requests to.
         * Cannot be updated.
         * In CamelCase.
         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
         */
        "kind"?: string;
        /**
         * EmbeddedMetadata contains metadata relevant to an EmbeddedResource.
         */
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
           * Labels Map of string keys and values that can be used to organize and categorize
           * (scope and select) objects. May match selectors of replication controllers
           * and services.
           * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
           */
          "labels"?: {
            [key: string]: string;
          };
          /**
           * Name must be unique within a namespace. Is required when creating resources, although
           * some resources may allow a client to request the generation of an appropriate name
           * automatically. Name is primarily intended for creation idempotence and configuration
           * definition.
           * Cannot be updated.
           * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
           */
          "name"?: string;
        };
        /**
         * Spec defines the desired characteristics of a volume requested by a pod author.
         * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
         */
        "spec"?: {
          /**
           * accessModes contains the desired access modes the volume should have.
           * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
           */
          "accessModes"?: Array<string>;
          /**
           * dataSource field can be used to specify either:
           * \* An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot)
           * \* An existing PVC (PersistentVolumeClaim)
           * If the provisioner or an external controller can support the specified data source,
           * it will create a new volume based on the contents of the specified data source.
           * When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef,
           * and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified.
           * If the namespace is specified, then dataSourceRef will not be copied to dataSource.
           */
          "dataSource"?: {
            /**
             * APIGroup is the group for the resource being referenced.
             * If APIGroup is not specified, the specified Kind must be in the core API group.
             * For any other third-party types, APIGroup is required.
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
           * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty
           * volume is desired. This may be any object from a non-empty API group (non
           * core object) or a PersistentVolumeClaim object.
           * When this field is specified, volume binding will only succeed if the type of
           * the specified object matches some installed volume populator or dynamic
           * provisioner.
           * This field will replace the functionality of the dataSource field and as such
           * if both fields are non-empty, they must have the same value. For backwards
           * compatibility, when namespace isn't specified in dataSourceRef,
           * both fields (dataSource and dataSourceRef) will be set to the same
           * value automatically if one of them is empty and the other is non-empty.
           * When namespace is specified in dataSourceRef,
           * dataSource isn't set to the same value and must be empty.
           * There are three important differences between dataSource and dataSourceRef:
           * \* While dataSource only allows two specific types of objects, dataSourceRef
           *   allows any non-core object, as well as PersistentVolumeClaim objects.
           * \* While dataSource ignores disallowed values (dropping them), dataSourceRef
           *   preserves all values, and generates an error if a disallowed value is
           *   specified.
           * \* While dataSource only allows local objects, dataSourceRef allows objects
           *   in any namespaces.
           * (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
           * (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
           */
          "dataSourceRef"?: {
            /**
             * APIGroup is the group for the resource being referenced.
             * If APIGroup is not specified, the specified Kind must be in the core API group.
             * For any other third-party types, APIGroup is required.
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
             * Namespace is the namespace of resource being referenced
             * Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details.
             * (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
             */
            "namespace"?: string;
          };
          /**
           * resources represents the minimum resources the volume should have.
           * If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements
           * that are lower than previous value but must still be higher than capacity recorded in the
           * status field of the claim.
           * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
           */
          "resources"?: {
            /**
             * Limits describes the maximum amount of compute resources allowed.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            "limits"?: {
              [key: string]: number | string;
            };
            /**
             * Requests describes the minimum amount of compute resources required.
             * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
             * otherwise to an implementation-defined value. Requests cannot exceed Limits.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
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
               * operator represents a key's relationship to a set of values.
               * Valid operators are In, NotIn, Exists and DoesNotExist.
               */
              "operator": string;
              /**
               * values is an array of string values. If the operator is In or NotIn,
               * the values array must be non-empty. If the operator is Exists or DoesNotExist,
               * the values array must be empty. This array is replaced during a strategic
               * merge patch.
               */
              "values"?: Array<string>;
            }>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            "matchLabels"?: {
              [key: string]: string;
            };
          };
          /**
           * storageClassName is the name of the StorageClass required by the claim.
           * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
           */
          "storageClassName"?: string;
          /**
           * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim.
           * If specified, the CSI driver will create or update the volume with the attributes defined
           * in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName,
           * it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass
           * will be applied to the claim but it's not allowed to reset this field to empty string once it is set.
           * If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass
           * will be set by the persistentvolume controller if it exists.
           * If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be
           * set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource
           * exists.
           * More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/
           * (Alpha) Using this field requires the VolumeAttributesClass feature gate to be enabled.
           */
          "volumeAttributesClassName"?: string;
          /**
           * volumeMode defines what type of volume is required by the claim.
           * Value of Filesystem is implied when not included in claim spec.
           */
          "volumeMode"?: string;
          /**
           * volumeName is the binding reference to the PersistentVolume backing this claim.
           */
          "volumeName"?: string;
        };
        /**
         * Status represents the current information/status of a persistent volume claim.
         * Read-only.
         * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
         */
        "status"?: {
          /**
           * accessModes contains the actual access modes the volume backing the PVC has.
           * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
           */
          "accessModes"?: Array<string>;
          /**
           * allocatedResourceStatuses stores status of resource being resized for the given PVC.
           * Key names follow standard Kubernetes label syntax. Valid values are either:
           * 	\* Un-prefixed keys:
           * 		- storage - the capacity of the volume.
           * 	\* Custom resources must use implementation-defined prefixed names such as "example.com/my-custom-resource"
           * Apart from above values - keys that are unprefixed or have kubernetes.io prefix are considered
           * reserved and hence may not be used.
           * 
           * ClaimResourceStatus can be in any of following states:
           * 	- ControllerResizeInProgress:
           * 		State set when resize controller starts resizing the volume in control-plane.
           * 	- ControllerResizeFailed:
           * 		State set when resize has failed in resize controller with a terminal error.
           * 	- NodeResizePending:
           * 		State set when resize controller has finished resizing the volume but further resizing of
           * 		volume is needed on the node.
           * 	- NodeResizeInProgress:
           * 		State set when kubelet starts resizing the volume.
           * 	- NodeResizeFailed:
           * 		State set when resizing has failed in kubelet with a terminal error. Transient errors don't set
           * 		NodeResizeFailed.
           * For example: if expanding a PVC for more capacity - this field can be one of the following states:
           * 	- pvc.status.allocatedResourceStatus['storage'] = "ControllerResizeInProgress"
           *      - pvc.status.allocatedResourceStatus['storage'] = "ControllerResizeFailed"
           *      - pvc.status.allocatedResourceStatus['storage'] = "NodeResizePending"
           *      - pvc.status.allocatedResourceStatus['storage'] = "NodeResizeInProgress"
           *      - pvc.status.allocatedResourceStatus['storage'] = "NodeResizeFailed"
           * When this field is not set, it means that no resize operation is in progress for the given PVC.
           * 
           * A controller that receives PVC update with previously unknown resourceName or ClaimResourceStatus
           * should ignore the update for the purpose it was designed. For example - a controller that
           * only is responsible for resizing capacity of the volume, should ignore PVC updates that change other valid
           * resources associated with PVC.
           * 
           * This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
           */
          "allocatedResourceStatuses"?: {
            [key: string]: string;
          };
          /**
           * allocatedResources tracks the resources allocated to a PVC including its capacity.
           * Key names follow standard Kubernetes label syntax. Valid values are either:
           * 	\* Un-prefixed keys:
           * 		- storage - the capacity of the volume.
           * 	\* Custom resources must use implementation-defined prefixed names such as "example.com/my-custom-resource"
           * Apart from above values - keys that are unprefixed or have kubernetes.io prefix are considered
           * reserved and hence may not be used.
           * 
           * Capacity reported here may be larger than the actual capacity when a volume expansion operation
           * is requested.
           * For storage quota, the larger value from allocatedResources and PVC.spec.resources is used.
           * If allocatedResources is not set, PVC.spec.resources alone is used for quota calculation.
           * If a volume expansion capacity request is lowered, allocatedResources is only
           * lowered if there are no expansion operations in progress and if the actual volume capacity
           * is equal or lower than the requested capacity.
           * 
           * A controller that receives PVC update with previously unknown resourceName
           * should ignore the update for the purpose it was designed. For example - a controller that
           * only is responsible for resizing capacity of the volume, should ignore PVC updates that change other valid
           * resources associated with PVC.
           * 
           * This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
           */
          "allocatedResources"?: {
            [key: string]: number | string;
          };
          /**
           * capacity represents the actual resources of the underlying volume.
           */
          "capacity"?: {
            [key: string]: number | string;
          };
          /**
           * conditions is the current Condition of persistent volume claim. If underlying persistent volume is being
           * resized then the Condition will be set to 'Resizing'.
           */
          "conditions"?: Array<{
            /**
             * lastProbeTime is the time we probed the condition.
             */
            "lastProbeTime"?: string;
            /**
             * lastTransitionTime is the time the condition transitioned from one status to another.
             */
            "lastTransitionTime"?: string;
            /**
             * message is the human-readable message indicating details about last transition.
             */
            "message"?: string;
            /**
             * reason is a unique, this should be a short, machine understandable string that gives the reason
             * for condition's last transition. If it reports "Resizing" that means the underlying
             * persistent volume is being resized.
             */
            "reason"?: string;
            "status": string;
            /**
             * PersistentVolumeClaimConditionType is a valid value of PersistentVolumeClaimCondition.Type
             */
            "type": string;
          }>;
          /**
           * currentVolumeAttributesClassName is the current name of the VolumeAttributesClass the PVC is using.
           * When unset, there is no VolumeAttributeClass applied to this PersistentVolumeClaim
           * This is an alpha field and requires enabling VolumeAttributesClass feature.
           */
          "currentVolumeAttributesClassName"?: string;
          /**
           * ModifyVolumeStatus represents the status object of ControllerModifyVolume operation.
           * When this is unset, there is no ModifyVolume operation being attempted.
           * This is an alpha field and requires enabling VolumeAttributesClass feature.
           */
          "modifyVolumeStatus"?: {
            /**
             * status is the status of the ControllerModifyVolume operation. It can be in any of following states:
             *  - Pending
             *    Pending indicates that the PersistentVolumeClaim cannot be modified due to unmet requirements, such as
             *    the specified VolumeAttributesClass not existing.
             *  - InProgress
             *    InProgress indicates that the volume is being modified.
             *  - Infeasible
             *   Infeasible indicates that the request has been rejected as invalid by the CSI driver. To
             * 	  resolve the error, a valid VolumeAttributesClass needs to be specified.
             * Note: New statuses can be added in the future. Consumers should check for unknown statuses and fail appropriately.
             */
            "status": string;
            /**
             * targetVolumeAttributesClassName is the name of the VolumeAttributesClass the PVC currently being reconciled
             */
            "targetVolumeAttributesClassName"?: string;
          };
          /**
           * phase represents the current phase of PersistentVolumeClaim.
           */
          "phase"?: string;
        };
      };
    };
    /**
     * StaticScrapeNamespaceSelector defines Namespaces to be selected for VMStaticScrape discovery.
     * Works in combination with NamespaceSelector.
     * NamespaceSelector nil - only objects at VMAgent namespace.
     * Selector nil - only objects at NamespaceSelector namespaces.
     * If both nil - behaviour controlled by selectAllByDefault
     */
    "staticScrapeNamespaceSelector"?: {
      /**
       * matchExpressions is a list of label selector requirements. The requirements are ANDed.
       */
      "matchExpressions"?: Array<{
        /**
         * key is the label key that the selector applies to.
         */
        "key": string;
        /**
         * operator represents a key's relationship to a set of values.
         * Valid operators are In, NotIn, Exists and DoesNotExist.
         */
        "operator": string;
        /**
         * values is an array of string values. If the operator is In or NotIn,
         * the values array must be non-empty. If the operator is Exists or DoesNotExist,
         * the values array must be empty. This array is replaced during a strategic
         * merge patch.
         */
        "values"?: Array<string>;
      }>;
      /**
       * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
       * map is equivalent to an element of matchExpressions, whose key field is "key", the
       * operator is "In", and the values array contains only "value". The requirements are ANDed.
       */
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    /**
     * StaticScrapeRelabelTemplate defines relabel config, that will be added to each VMStaticScrape.
     * it's useful for adding specific labels to all targets
     */
    "staticScrapeRelabelTemplate"?: Array<{
      /**
       * Action to perform based on regex matching. Default is 'replace'
       */
      "action"?: string;
      /**
       * If represents metricsQL match expression (or list of expressions): '{__name__=~"foo_.\*"}'
       */
      "if"?: any;
      /**
       * Labels is used together with Match for `action: graphite`
       */
      "labels"?: {
        [key: string]: string;
      };
      /**
       * Match is used together with Labels for `action: graphite`
       */
      "match"?: string;
      /**
       * Modulus to take of the hash of the source label values.
       */
      "modulus"?: number;
      /**
       * Regular expression against which the extracted value is matched. Default is '(.\*)'
       * victoriaMetrics supports multiline regex joined with |
       * https://docs.victoriametrics.com/vmagent/#relabeling-enhancements
       */
      "regex"?: any;
      /**
       * Replacement value against which a regex replace is performed if the
       * regular expression matches. Regex capture groups are available. Default is '$1'
       */
      "replacement"?: string;
      /**
       * Separator placed between concatenated source label values. default is ';'.
       */
      "separator"?: string;
      /**
       * UnderScoreSourceLabels - additional form of source labels source_labels
       * for compatibility with original relabel config.
       * if set  both sourceLabels and source_labels, sourceLabels has priority.
       * for details https://github.com/VictoriaMetrics/operator/issues/131
       */
      "source_labels"?: Array<string>;
      /**
       * The source labels select values from existing labels. Their content is concatenated
       * using the configured separator and matched against the configured regular expression
       * for the replace, keep, and drop actions.
       */
      "sourceLabels"?: Array<string>;
      /**
       * UnderScoreTargetLabel - additional form of target label - target_label
       * for compatibility with original relabel config.
       * if set  both targetLabel and target_label, targetLabel has priority.
       * for details https://github.com/VictoriaMetrics/operator/issues/131
       */
      "target_label"?: string;
      /**
       * Label to which the resulting value is written in a replace action.
       * It is mandatory for replace actions. Regex capture groups are available.
       */
      "targetLabel"?: string;
    }>;
    /**
     * StaticScrapeSelector defines PodScrapes to be selected for target discovery.
     * Works in combination with NamespaceSelector.
     * If both nil - match everything.
     * NamespaceSelector nil - only objects at VMAgent namespace.
     * Selector nil - only objects at NamespaceSelector namespaces.
     */
    "staticScrapeSelector"?: {
      /**
       * matchExpressions is a list of label selector requirements. The requirements are ANDed.
       */
      "matchExpressions"?: Array<{
        /**
         * key is the label key that the selector applies to.
         */
        "key": string;
        /**
         * operator represents a key's relationship to a set of values.
         * Valid operators are In, NotIn, Exists and DoesNotExist.
         */
        "operator": string;
        /**
         * values is an array of string values. If the operator is In or NotIn,
         * the values array must be non-empty. If the operator is Exists or DoesNotExist,
         * the values array must be empty. This array is replaced during a strategic
         * merge patch.
         */
        "values"?: Array<string>;
      }>;
      /**
       * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
       * map is equivalent to an element of matchExpressions, whose key field is "key", the
       * operator is "In", and the values array contains only "value". The requirements are ANDed.
       */
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    /**
     * StreamAggrConfig defines global stream aggregation configuration for VMAgent
     */
    "streamAggrConfig"?: {
      /**
       * ConfigMap with stream aggregation rules
       */
      "configmap"?: {
        /**
         * The key to select.
         */
        "key": string;
        /**
         * Name of the referent.
         * This field is effectively required, but due to backwards compatibility is
         * allowed to be empty. Instances of this type with an empty value here are
         * almost certainly wrong.
         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Specify whether the ConfigMap or its key must be defined
         */
        "optional"?: boolean;
      };
      /**
       * Allows setting different de-duplication intervals per each configured remote storage
       */
      "dedupInterval"?: string;
      /**
       * Allow drop all the input samples after the aggregation
       */
      "dropInput"?: boolean;
      /**
       * labels to drop from samples for aggregator before stream de-duplication and aggregation
       */
      "dropInputLabels"?: Array<string>;
      /**
       * IgnoreFirstIntervals instructs to ignore first interval
       */
      "ignoreFirstIntervals"?: number;
      /**
       * IgnoreOldSamples instructs to ignore samples with old timestamps outside the current aggregation interval.
       */
      "ignoreOldSamples"?: boolean;
      /**
       * Allows writing both raw and aggregate data
       */
      "keepInput"?: boolean;
      /**
       * Stream aggregation rules
       */
      "rules"?: Array<{
        /**
         * By is an optional list of labels for grouping input series.
         * 
         * See also Without.
         * 
         * If neither By nor Without are set, then the Outputs are calculated
         * individually per each input time series.
         */
        "by"?: Array<string>;
        /**
         * DedupInterval is an optional interval for deduplication.
         */
        "dedup_interval"?: string;
        /**
         * DropInputLabels is an optional list with labels, which must be dropped before further processing of input samples.
         * 
         * Labels are dropped before de-duplication and aggregation.
         */
        "drop_input_labels"?: Array<string>;
        /**
         * FlushOnShutdown defines whether to flush the aggregation state on process termination
         * or config reload. Is `false` by default.
         * It is not recommended changing this setting, unless unfinished aggregations states
         * are preferred to missing data points.
         */
        "flush_on_shutdown"?: boolean;
        "ignore_first_intervals"?: number;
        /**
         * IgnoreOldSamples instructs to ignore samples with old timestamps outside the current aggregation interval.
         */
        "ignore_old_samples"?: boolean;
        /**
         * InputRelabelConfigs is an optional relabeling rules, which are applied on the input
         * before aggregation.
         */
        "input_relabel_configs"?: Array<{
          /**
           * Action to perform based on regex matching. Default is 'replace'
           */
          "action"?: string;
          /**
           * If represents metricsQL match expression (or list of expressions): '{__name__=~"foo_.\*"}'
           */
          "if"?: any;
          /**
           * Labels is used together with Match for `action: graphite`
           */
          "labels"?: {
            [key: string]: string;
          };
          /**
           * Match is used together with Labels for `action: graphite`
           */
          "match"?: string;
          /**
           * Modulus to take of the hash of the source label values.
           */
          "modulus"?: number;
          /**
           * Regular expression against which the extracted value is matched. Default is '(.\*)'
           * victoriaMetrics supports multiline regex joined with |
           * https://docs.victoriametrics.com/vmagent/#relabeling-enhancements
           */
          "regex"?: any;
          /**
           * Replacement value against which a regex replace is performed if the
           * regular expression matches. Regex capture groups are available. Default is '$1'
           */
          "replacement"?: string;
          /**
           * Separator placed between concatenated source label values. default is ';'.
           */
          "separator"?: string;
          /**
           * UnderScoreSourceLabels - additional form of source labels source_labels
           * for compatibility with original relabel config.
           * if set  both sourceLabels and source_labels, sourceLabels has priority.
           * for details https://github.com/VictoriaMetrics/operator/issues/131
           */
          "source_labels"?: Array<string>;
          /**
           * The source labels select values from existing labels. Their content is concatenated
           * using the configured separator and matched against the configured regular expression
           * for the replace, keep, and drop actions.
           */
          "sourceLabels"?: Array<string>;
          /**
           * UnderScoreTargetLabel - additional form of target label - target_label
           * for compatibility with original relabel config.
           * if set  both targetLabel and target_label, targetLabel has priority.
           * for details https://github.com/VictoriaMetrics/operator/issues/131
           */
          "target_label"?: string;
          /**
           * Label to which the resulting value is written in a replace action.
           * It is mandatory for replace actions. Regex capture groups are available.
           */
          "targetLabel"?: string;
        }>;
        /**
         * Interval is the interval between aggregations.
         */
        "interval": string;
        /**
         * KeepMetricNames instructs to leave metric names as is for the output time series without adding any suffix.
         */
        "keep_metric_names"?: boolean;
        /**
         * Match is a label selector (or list of label selectors) for filtering time series for the given selector.
         * 
         * If the match isn't set, then all the input time series are processed.
         */
        "match"?: any;
        /**
         * NoAlignFlushToInterval disables aligning of flushes to multiples of Interval.
         * By default flushes are aligned to Interval.
         */
        "no_align_flush_to_interval"?: boolean;
        /**
         * OutputRelabelConfigs is an optional relabeling rules, which are applied
         * on the aggregated output before being sent to remote storage.
         */
        "output_relabel_configs"?: Array<{
          /**
           * Action to perform based on regex matching. Default is 'replace'
           */
          "action"?: string;
          /**
           * If represents metricsQL match expression (or list of expressions): '{__name__=~"foo_.\*"}'
           */
          "if"?: any;
          /**
           * Labels is used together with Match for `action: graphite`
           */
          "labels"?: {
            [key: string]: string;
          };
          /**
           * Match is used together with Labels for `action: graphite`
           */
          "match"?: string;
          /**
           * Modulus to take of the hash of the source label values.
           */
          "modulus"?: number;
          /**
           * Regular expression against which the extracted value is matched. Default is '(.\*)'
           * victoriaMetrics supports multiline regex joined with |
           * https://docs.victoriametrics.com/vmagent/#relabeling-enhancements
           */
          "regex"?: any;
          /**
           * Replacement value against which a regex replace is performed if the
           * regular expression matches. Regex capture groups are available. Default is '$1'
           */
          "replacement"?: string;
          /**
           * Separator placed between concatenated source label values. default is ';'.
           */
          "separator"?: string;
          /**
           * UnderScoreSourceLabels - additional form of source labels source_labels
           * for compatibility with original relabel config.
           * if set  both sourceLabels and source_labels, sourceLabels has priority.
           * for details https://github.com/VictoriaMetrics/operator/issues/131
           */
          "source_labels"?: Array<string>;
          /**
           * The source labels select values from existing labels. Their content is concatenated
           * using the configured separator and matched against the configured regular expression
           * for the replace, keep, and drop actions.
           */
          "sourceLabels"?: Array<string>;
          /**
           * UnderScoreTargetLabel - additional form of target label - target_label
           * for compatibility with original relabel config.
           * if set  both targetLabel and target_label, targetLabel has priority.
           * for details https://github.com/VictoriaMetrics/operator/issues/131
           */
          "target_label"?: string;
          /**
           * Label to which the resulting value is written in a replace action.
           * It is mandatory for replace actions. Regex capture groups are available.
           */
          "targetLabel"?: string;
        }>;
        /**
         * Outputs is a list of output aggregate functions to produce.
         * 
         * The following names are allowed:
         * 
         * - total - aggregates input counters
         * - increase - counts the increase over input counters
         * - count_series - counts the input series
         * - count_samples - counts the input samples
         * - sum_samples - sums the input samples
         * - last - the last biggest sample value
         * - min - the minimum sample value
         * - max - the maximum sample value
         * - avg - the average value across all the samples
         * - stddev - standard deviation across all the samples
         * - stdvar - standard variance across all the samples
         * - histogram_bucket - creates VictoriaMetrics histogram for input samples
         * - quantiles(phi1, ..., phiN) - quantiles' estimation for phi in the range [0..1]
         * 
         * The output time series will have the following names:
         * 
         *   input_name:aggr_<interval>_<output>
         */
        "outputs": Array<string>;
        /**
         * Staleness interval is interval after which the series state will be reset if no samples have been sent during it.
         * The parameter is only relevant for outputs: total, total_prometheus, increase, increase_prometheus and histogram_bucket.
         */
        "staleness_interval"?: string;
        /**
         * Without is an optional list of labels, which must be excluded when grouping input series.
         * 
         * See also By.
         * 
         * If neither By nor Without are set, then the Outputs are calculated
         * individually per each input time series.
         */
        "without"?: Array<string>;
      }>;
    };
    /**
     * TerminationGracePeriodSeconds period for container graceful termination
     */
    "terminationGracePeriodSeconds"?: number;
    /**
     * Tolerations If specified, the pod's tolerations.
     */
    "tolerations"?: Array<{
      /**
       * Effect indicates the taint effect to match. Empty means match all taint effects.
       * When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
       */
      "effect"?: string;
      /**
       * Key is the taint key that the toleration applies to. Empty means match all taint keys.
       * If the key is empty, operator must be Exists; this combination means to match all values and all keys.
       */
      "key"?: string;
      /**
       * Operator represents a key's relationship to the value.
       * Valid operators are Exists and Equal. Defaults to Equal.
       * Exists is equivalent to wildcard for value, so that a pod can
       * tolerate all taints of a particular category.
       */
      "operator"?: string;
      /**
       * TolerationSeconds represents the period of time the toleration (which must be
       * of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default,
       * it is not set, which means tolerate the taint forever (do not evict). Zero and
       * negative values will be treated as 0 (evict immediately) by the system.
       */
      "tolerationSeconds"?: number;
      /**
       * Value is the taint value the toleration matches to.
       * If the operator is Exists, the value should be empty, otherwise just a regular string.
       */
      "value"?: string;
    }>;
    /**
     * TopologySpreadConstraints embedded kubernetes pod configuration option,
     * controls how pods are spread across your cluster among failure-domains
     * such as regions, zones, nodes, and other user-defined topology domains
     * https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/
     */
    "topologySpreadConstraints"?: Array<{
    }>;
    /**
     * UpdateStrategy - overrides default update strategy.
     * works only for deployments, statefulset always use OnDelete.
     */
    "updateStrategy"?: "Recreate" | "RollingUpdate";
    /**
     * UseDefaultResources controls resource settings
     * By default, operator sets built-in resource requirements
     */
    "useDefaultResources"?: boolean;
    /**
     * UseStrictSecurity enables strict security mode for component
     * it restricts disk writes access
     * uses non-root user out of the box
     * drops not needed security permissions
     */
    "useStrictSecurity"?: boolean;
    /**
     * UseVMConfigReloader replaces prometheus-like config-reloader
     * with vm one. It uses secrets watch instead of file watch
     * which greatly increases speed of config updates
     */
    "useVMConfigReloader"?: boolean;
    /**
     * VMAgentExternalLabelName Name of vmAgent external label used to denote vmAgent instance
     * name. Defaults to the value of `prometheus`. External label will
     * _not_ be added when value is set to empty string (`""`).
     */
    "vmAgentExternalLabelName"?: string;
    /**
     * VolumeMounts allows configuration of additional VolumeMounts on the output Deployment/StatefulSet definition.
     * VolumeMounts specified will be appended to other VolumeMounts in the Application container
     */
    "volumeMounts"?: Array<{
      /**
       * Path within the container at which the volume should be mounted.  Must
       * not contain ':'.
       */
      "mountPath": string;
      /**
       * mountPropagation determines how mounts are propagated from the host
       * to container and the other way around.
       * When not set, MountPropagationNone is used.
       * This field is beta in 1.10.
       * When RecursiveReadOnly is set to IfPossible or to Enabled, MountPropagation must be None or unspecified
       * (which defaults to None).
       */
      "mountPropagation"?: string;
      /**
       * This must match the Name of a Volume.
       */
      "name": string;
      /**
       * Mounted read-only if true, read-write otherwise (false or unspecified).
       * Defaults to false.
       */
      "readOnly"?: boolean;
      /**
       * RecursiveReadOnly specifies whether read-only mounts should be handled
       * recursively.
       * 
       * If ReadOnly is false, this field has no meaning and must be unspecified.
       * 
       * If ReadOnly is true, and this field is set to Disabled, the mount is not made
       * recursively read-only.  If this field is set to IfPossible, the mount is made
       * recursively read-only, if it is supported by the container runtime.  If this
       * field is set to Enabled, the mount is made recursively read-only if it is
       * supported by the container runtime, otherwise the pod will not be started and
       * an error will be generated to indicate the reason.
       * 
       * If this field is set to IfPossible or Enabled, MountPropagation must be set to
       * None (or be unspecified, which defaults to None).
       * 
       * If this field is not specified, it is treated as an equivalent of Disabled.
       */
      "recursiveReadOnly"?: string;
      /**
       * Path within the volume from which the container's volume should be mounted.
       * Defaults to "" (volume's root).
       */
      "subPath"?: string;
      /**
       * Expanded path within the volume from which the container's volume should be mounted.
       * Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment.
       * Defaults to "" (volume's root).
       * SubPathExpr and SubPath are mutually exclusive.
       */
      "subPathExpr"?: string;
    }>;
    /**
     * Volumes allows configuration of additional volumes on the output Deployment/StatefulSet definition.
     * Volumes specified will be appended to other volumes that are generated.
     * / +optional
     */
    "volumes"?: Array<{
    }>;
  };
  /**
   * VMAgentStatus defines the observed state of VMAgent
   */
  "status"?: {
    /**
     * AvailableReplicas Total number of available pods (ready for at least minReadySeconds)
     * targeted by this VMAlert cluster.
     */
    "availableReplicas"?: number;
    /**
     * Reason defines fail reason for update process, effective only for statefulMode
     */
    "reason"?: string;
    /**
     * ReplicaCount Total number of pods targeted by this VMAgent
     */
    "replicas"?: number;
    /**
     * Selector string form of label value set for autoscaling
     */
    "selector"?: string;
    /**
     * Shards represents total number of vmagent deployments with uniq scrape targets
     */
    "shards"?: number;
    /**
     * UnavailableReplicas Total number of unavailable pods targeted by this VMAgent cluster.
     */
    "unavailableReplicas"?: number;
    /**
     * UpdateStatus defines a status for update rollout, effective only for statefulMode
     */
    "updateStatus"?: string;
    /**
     * UpdatedReplicas Total number of non-terminated pods targeted by this VMAgent
     * cluster that have the desired version spec.
     */
    "updatedReplicas"?: number;
  };
}

/**
 * VMAgent - is a tiny but brave agent, which helps you collect metrics from various sources and stores them in VictoriaMetrics
 * or any other Prometheus-compatible storage system that supports the remote_write protocol.
 */
export class VMAgent extends Model<IVMAgent> implements IVMAgent {
  "apiVersion": IVMAgent["apiVersion"];
  "kind": IVMAgent["kind"];
  "metadata"?: IVMAgent["metadata"];
  "spec"?: IVMAgent["spec"];
  "status"?: IVMAgent["status"];

static apiVersion: IVMAgent["apiVersion"] = "operator.victoriametrics.com/v1beta1";
static kind: IVMAgent["kind"] = "VMAgent";
static is = createTypeMetaGuard<IVMAgent>(VMAgent);

constructor(data?: ModelData<IVMAgent>) {
  super();

  this.setDefinedProps({
    apiVersion: VMAgent.apiVersion,
    kind: VMAgent.kind,
    ...data
  } as IVMAgent);
}
}


setValidateFunc(VMAgent, validate as ValidateFunc<IVMAgent>);
