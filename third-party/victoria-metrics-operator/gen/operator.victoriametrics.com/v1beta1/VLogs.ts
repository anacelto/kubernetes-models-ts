import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/OperatorVictoriametricsComV1beta1VLogs";

/**
 * VLogs is the Schema for the vlogs API
 */
export interface IVLogs {
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
  "kind": "VLogs";
  "metadata"?: IObjectMeta;
  /**
   * VLogsSpec defines the desired state of VLogs
   */
  "spec"?: {
    /**
     * Affinity If specified, the pod's scheduling constraints.
     */
    "affinity"?: {
    };
    /**
     * ConfigMaps is a list of ConfigMaps in the same namespace as the Application
     * object, which shall be mounted into the Application container
     * at /etc/vm/configs/CONFIGMAP_NAME folder
     */
    "configMaps"?: Array<string>;
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
     * FutureRetention for the stored logs
     * Log entries with timestamps bigger than now+futureRetention are rejected during data ingestion; see https://docs.victoriametrics.com/victorialogs/#retention
     */
    "futureRetention"?: string;
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
     * InitContainers allows adding initContainers to the pod definition.
     * Any errors during the execution of an initContainer will lead to a restart of the Pod.
     * More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/
     */
    "initContainers"?: Array<{
    }>;
    /**
     * LivenessProbe that will be added CRD pod
     */
    "livenessProbe"?: {
    };
    /**
     * LogFormat for VLogs to be configured with.
     */
    "logFormat"?: "default" | "json";
    /**
     * Whether to log all the ingested log entries; this can be useful for debugging of data ingestion; see https://docs.victoriametrics.com/victorialogs/data-ingestion/
     */
    "logIngestedRows"?: boolean;
    /**
     * LogLevel for VictoriaLogs to be configured with.
     */
    "logLevel"?: "INFO" | "WARN" | "ERROR" | "FATAL" | "PANIC";
    /**
     * LogNewStreams Whether to log creation of new streams; this can be useful for debugging of high cardinality issues with log streams; see https://docs.victoriametrics.com/victorialogs/keyconcepts/#stream-fields
     */
    "logNewStreams"?: boolean;
    /**
     * MinReadySeconds defines a minim number os seconds to wait before starting update next pod
     * if previous in healthy state
     * Has no effect for VLogs and VMSingle
     */
    "minReadySeconds"?: number;
    /**
     * NodeSelector Define which Nodes the Pods are scheduled on.
     */
    "nodeSelector"?: {
      [key: string]: string;
    };
    /**
     * Paused If set to true all actions on the underlying managed objects are not
     * going to be performed, except for delete actions.
     */
    "paused"?: boolean;
    /**
     * PodMetadata configures Labels and Annotations which are propagated to the VLogs pods.
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
     * Port listen address
     */
    "port"?: string;
    /**
     * PriorityClassName class assigned to the Pods
     */
    "priorityClassName"?: string;
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
     * RemovePvcAfterDelete - if true, controller adds ownership to pvc
     * and after VLogs object deletion - pvc will be garbage collected
     * by controller manager
     */
    "removePvcAfterDelete"?: boolean;
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
     * RetentionPeriod for the stored logs
     */
    "retentionPeriod": string;
    /**
     * The number of old ReplicaSets to retain to allow rollback in deployment or
     * maximum number of revisions that will be maintained in the Deployment revision history.
     * Has no effect at StatefulSets
     * Defaults to 10.
     */
    "revisionHistoryLimitCount"?: number;
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
     * ServiceAccountName is the name of the ServiceAccount to use to run the pods
     */
    "serviceAccountName"?: string;
    /**
     * ServiceScrapeSpec that will be added to vlogs VMServiceScrape spec
     */
    "serviceScrapeSpec"?: {
    };
    /**
     * ServiceSpec that will be added to vlogs service spec
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
     * StartupProbe that will be added to CRD pod
     */
    "startupProbe"?: {
    };
    /**
     * Storage is the definition of how storage will be used by the VLogs
     * by default it`s empty dir
     */
    "storage"?: {
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
     * StorageDataPath disables spec.storage option and overrides arg for victoria-logs binary --storageDataPath,
     * its users responsibility to mount proper device into given path.
     */
    "storageDataPath"?: string;
    /**
     * StorageMeta defines annotations and labels attached to PVC for given vlogs CR
     */
    "storageMetadata"?: {
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
   * VLogsStatus defines the observed state of VLogs
   */
  "status"?: {
    /**
     * AvailableReplicas Total number of available pods (ready for at least minReadySeconds) targeted by this VLogs.
     */
    "availableReplicas"?: number;
    /**
     * Reason defines a reason in case of update failure
     */
    "reason"?: string;
    /**
     * ReplicaCount Total number of non-terminated pods targeted by this VLogs.
     */
    "replicas"?: number;
    /**
     * UpdateStatus defines a status of vlogs instance rollout
     */
    "status"?: string;
    /**
     * UnavailableReplicas Total number of unavailable pods targeted by this VLogs.
     */
    "unavailableReplicas"?: number;
    /**
     * UpdatedReplicas Total number of non-terminated pods targeted by this VLogs.
     */
    "updatedReplicas"?: number;
  };
}

/**
 * VLogs is the Schema for the vlogs API
 */
export class VLogs extends Model<IVLogs> implements IVLogs {
  "apiVersion": IVLogs["apiVersion"];
  "kind": IVLogs["kind"];
  "metadata"?: IVLogs["metadata"];
  "spec"?: IVLogs["spec"];
  "status"?: IVLogs["status"];

static apiVersion: IVLogs["apiVersion"] = "operator.victoriametrics.com/v1beta1";
static kind: IVLogs["kind"] = "VLogs";
static is = createTypeMetaGuard<IVLogs>(VLogs);

constructor(data?: ModelData<IVLogs>) {
  super();

  this.setDefinedProps({
    apiVersion: VLogs.apiVersion,
    kind: VLogs.kind,
    ...data
  } as IVLogs);
}
}


setValidateFunc(VLogs, validate as ValidateFunc<IVLogs>);
