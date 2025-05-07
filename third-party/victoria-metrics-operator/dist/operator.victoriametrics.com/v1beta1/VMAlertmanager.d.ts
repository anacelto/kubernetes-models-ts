import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * VMAlertmanager represents Victoria-Metrics deployment for Alertmanager.
 */
export interface IVMAlertmanager {
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
    "kind": "VMAlertmanager";
    "metadata"?: IObjectMeta;
    /**
     * Specification of the desired behavior of the VMAlertmanager cluster. More info:
     * https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     */
    "spec": {
        /**
         * AdditionalPeers allows injecting a set of additional Alertmanagers to peer with to form a highly available cluster.
         */
        "additionalPeers"?: Array<string>;
        /**
         * Affinity If specified, the pod's scheduling constraints.
         */
        "affinity"?: {};
        /**
         * ClaimTemplates allows adding additional VolumeClaimTemplates for StatefulSet
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
            "metadata"?: {};
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
         * ClusterAdvertiseAddress is the explicit address to advertise in cluster.
         * Needs to be provided for non RFC1918 [1] (public) addresses.
         * [1] RFC1918: https://tools.ietf.org/html/rfc1918
         */
        "clusterAdvertiseAddress"?: string;
        /**
         * ClusterDomainName defines domain name suffix for in-cluster dns addresses
         * aka .cluster.local
         * used to build pod peer addresses for in-cluster communication
         */
        "clusterDomainName"?: string;
        /**
         * ConfigMaps is a list of ConfigMaps in the same namespace as the Application
         * object, which shall be mounted into the Application container
         * at /etc/vm/configs/CONFIGMAP_NAME folder
         */
        "configMaps"?: Array<string>;
        /**
         *  ConfigNamespaceSelector defines namespace selector for VMAlertmanagerConfig.
         * Works in combination with Selector.
         * NamespaceSelector nil - only objects at VMAlertmanager namespace.
         * Selector nil - only objects at NamespaceSelector namespaces.
         * If both nil - behaviour controlled by selectAllByDefault
         */
        "configNamespaceSelector"?: {
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
         * ConfigRawYaml - raw configuration for alertmanager,
         * it helps it to start without secret.
         * priority -> hardcoded ConfigRaw -> ConfigRaw, provided by user -> ConfigSecret.
         */
        "configRawYaml"?: string;
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
         * ConfigSecret is the name of a Kubernetes Secret in the same namespace as the
         * VMAlertmanager object, which contains configuration for this VMAlertmanager,
         * configuration must be inside secret key: alertmanager.yaml.
         * It must be created by user.
         * instance. Defaults to 'vmalertmanager-<alertmanager-name>'
         * The secret is mounted into /etc/alertmanager/config.
         */
        "configSecret"?: string;
        /**
         * ConfigSelector defines selector for VMAlertmanagerConfig, result config will be merged with with Raw or Secret config.
         * Works in combination with NamespaceSelector.
         * NamespaceSelector nil - only objects at VMAlertmanager namespace.
         * Selector nil - only objects at NamespaceSelector namespaces.
         * If both nil - behaviour controlled by selectAllByDefault
         */
        "configSelector"?: {
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
         * Containers property allows to inject additions sidecars or to patch existing containers.
         * It can be useful for proxies, backup, etc.
         */
        "containers"?: Array<{}>;
        /**
         * DisableNamespaceMatcher disables top route namespace label matcher for VMAlertmanagerConfig
         * It may be useful if alert doesn't have namespace label for some reason
         */
        "disableNamespaceMatcher"?: boolean;
        /**
         * DisableRouteContinueEnforce cancel the behavior for VMAlertmanagerConfig that always enforce first-level route continue to true
         */
        "disableRouteContinueEnforce"?: boolean;
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
         * EnforcedTopRouteMatchers defines label matchers to be added for the top route
         * of VMAlertmanagerConfig
         * It allows to make some set of labels required for alerts.
         * https://prometheus.io/docs/alerting/latest/configuration/#matcher
         */
        "enforcedTopRouteMatchers"?: Array<string>;
        /**
         * ExternalURL the VMAlertmanager instances will be available under. This is
         * necessary to generate correct URLs. This is necessary if VMAlertmanager is not
         * served from root of a DNS name.
         */
        "externalURL"?: string;
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
         * GossipConfig defines gossip TLS configuration for Alertmanager cluster
         */
        "gossipConfig"?: {
            /**
             * TLSClientConfig defines client TLS configuration for alertmanager
             */
            "tls_client_config"?: {
                /**
                 * CAFile defines path to the pre-mounted file with CA
                 * mutually exclusive with CASecretRef
                 */
                "ca_file"?: string;
                /**
                 * CA defines reference for secret with CA content under given key
                 * mutually exclusive with CAFile
                 */
                "ca_secret_ref"?: {
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
                 * CertFile defines path to the pre-mounted file with certificate
                 * mutually exclusive with CertSecretRef
                 */
                "cert_file"?: string;
                /**
                 * CertSecretRef defines reference for secret with certificate content under given key
                 * mutually exclusive with CertFile
                 */
                "cert_secret_ref"?: {
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
                 * Cert defines reference for secret with CA content under given key
                 * mutually exclusive with CertFile
                 */
                "insecure_skip_verify"?: boolean;
                /**
                 * KeyFile defines path to the pre-mounted file with certificate key
                 * mutually exclusive with KeySecretRef
                 */
                "key_file"?: string;
                /**
                 * Key defines reference for secret with certificate key content under given key
                 * mutually exclusive with KeyFile
                 */
                "key_secret_ref"?: {
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
                 * ServerName indicates a name of a server
                 */
                "server_name"?: string;
            };
            /**
             * TLSServerConfig defines server TLS configuration for alertmanager
             */
            "tls_server_config"?: {
                /**
                 * CertFile defines path to the pre-mounted file with certificate
                 * mutually exclusive with CertSecretRef
                 */
                "cert_file"?: string;
                /**
                 * CertSecretRef defines reference for secret with certificate content under given key
                 * mutually exclusive with CertFile
                 */
                "cert_secret_ref"?: {
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
                 * CipherSuites defines list of supported cipher suites for TLS versions up to TLS 1.2
                 * https://golang.org/pkg/crypto/tls/#pkg-constants
                 */
                "cipher_suites"?: Array<string>;
                /**
                 * Cert defines reference for secret with CA content under given key
                 * mutually exclusive with CertFile
                 * ClientAuthType defines server policy for client authentication
                 * If you want to enable client authentication (aka mTLS), you need to use RequireAndVerifyClientCert
                 * Note, mTLS is supported only at enterprise version of VictoriaMetrics components
                 */
                "client_auth_type"?: "NoClientCert" | "RequireAndVerifyClientCert";
                /**
                 * ClientCAFile defines path to the pre-mounted file with CA
                 * mutually exclusive with ClientCASecretRef
                 */
                "client_ca_file"?: string;
                /**
                 * ClientCASecretRef defines reference for secret with CA content under given key
                 * mutually exclusive with ClientCAFile
                 */
                "client_ca_secret_ref"?: {
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
                 * CurvePreferences defines elliptic curves that will be used in an ECDHE handshake, in preference order.
                 * https://golang.org/pkg/crypto/tls/#CurveID
                 */
                "curve_preferences"?: Array<string>;
                /**
                 * KeyFile defines path to the pre-mounted file with certificate key
                 * mutually exclusive with KeySecretRef
                 */
                "key_file"?: string;
                /**
                 * Key defines reference for secret with certificate key content under given key
                 * mutually exclusive with KeyFile
                 */
                "key_secret_ref"?: {
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
                 * MaxVersion maximum TLS version that is acceptable.
                 */
                "max_version"?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
                /**
                 * MinVersion minimum TLS version that is acceptable.
                 */
                "min_version"?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
                /**
                 * PreferServerCipherSuites controls whether the server selects the
                 * client's most preferred ciphersuite
                 */
                "prefer_server_cipher_suites"?: boolean;
            };
        };
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
        "initContainers"?: Array<{}>;
        /**
         * ListenLocal makes the VMAlertmanager server listen on loopback, so that it
         * does not bind against the Pod IP. Note this is only for the VMAlertmanager
         * UI, not the gossip communication.
         */
        "listenLocal"?: boolean;
        /**
         * LivenessProbe that will be added CRD pod
         */
        "livenessProbe"?: {};
        /**
         * LogFormat for VMAlertmanager to be configured with.
         */
        "logFormat"?: "logfmt" | "json";
        /**
         * Log level for VMAlertmanager to be configured with.
         */
        "logLevel"?: "debug" | "info" | "warn" | "error" | "DEBUG" | "INFO" | "WARN" | "ERROR";
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
         * PodMetadata configures Labels and Annotations which are propagated to the alertmanager pods.
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
         * PortName used for the pods and governing service.
         * This defaults to web
         */
        "portName"?: string;
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
        "readinessProbe"?: {};
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
         * Retention Time duration VMAlertmanager shall retain data for. Default is '120h',
         * and must match the regular expression `[0-9]+(ms|s|m|h)` (milliseconds seconds minutes hours).
         */
        "retention"?: string;
        /**
         * The number of old ReplicaSets to retain to allow rollback in deployment or
         * maximum number of revisions that will be maintained in the Deployment revision history.
         * Has no effect at StatefulSets
         * Defaults to 10.
         */
        "revisionHistoryLimitCount"?: number;
        /**
         * RollingUpdateStrategy defines strategy for application updates
         * Default is OnDelete, in this case operator handles update process
         * Can be changed for RollingUpdate
         */
        "rollingUpdateStrategy"?: string;
        /**
         * RoutePrefix VMAlertmanager registers HTTP handlers for. This is useful,
         * if using ExternalURL and a proxy is rewriting HTTP routes of a request,
         * and the actual ExternalURL is still true, but the server serves requests
         * under a different route prefix. For example for use with `kubectl proxy`.
         */
        "routePrefix"?: string;
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
        "securityContext"?: {};
        /**
         * SelectAllByDefault changes default behavior for empty CRD selectors, such ConfigSelector.
         * with selectAllByDefault: true and undefined ConfigSelector and ConfigNamespaceSelector
         * Operator selects all exist alertManagerConfigs
         * with selectAllByDefault: false - selects nothing
         */
        "selectAllByDefault"?: boolean;
        /**
         * ServiceAccountName is the name of the ServiceAccount to use to run the pods
         */
        "serviceAccountName"?: string;
        /**
         * ServiceScrapeSpec that will be added to vmalertmanager VMServiceScrape spec
         */
        "serviceScrapeSpec"?: {};
        /**
         * ServiceSpec that will be added to vmalertmanager service spec
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
            "spec": {};
            /**
             * UseAsDefault applies changes from given service definition to the main object Service
             * Changing from headless service to clusterIP or loadbalancer may break cross-component communication
             */
            "useAsDefault"?: boolean;
        };
        /**
         * StartupProbe that will be added to CRD pod
         */
        "startupProbe"?: {};
        /**
         * Storage is the definition of how storage will be used by the VMAlertmanager
         * instances.
         */
        "storage"?: {
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
         * Templates is a list of ConfigMap key references for ConfigMaps in the same namespace as the VMAlertmanager
         * object, which shall be mounted into the VMAlertmanager Pods.
         * The Templates are mounted into /etc/vm/templates/<configmap-name>/<configmap-key>.
         */
        "templates"?: Array<{
            /**
             * The ConfigMap key to refer to.
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
        }>;
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
        "topologySpreadConstraints"?: Array<{}>;
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
        "volumes"?: Array<{}>;
        /**
         * WebConfig defines configuration for webserver
         * https://github.com/prometheus/alertmanager/blob/main/docs/https.md
         */
        "webConfig"?: {
            /**
             * BasicAuthUsers Usernames and hashed passwords that have full access to the web server
             * Passwords must be hashed with bcrypt
             */
            "basic_auth_users"?: {
                [key: string]: string;
            };
            /**
             * HTTPServerConfig defines http server configuration for alertmanager web server
             */
            "http_server_config"?: {
                /**
                 * Headers defines list of headers that can be added to HTTP responses.
                 */
                "headers"?: {
                    [key: string]: string;
                };
                /**
                 * HTTP2 enables HTTP/2 support. Note that HTTP/2 is only supported with TLS.
                 * This can not be changed on the fly.
                 */
                "http2"?: boolean;
            };
            /**
             * TLSServerConfig defines server TLS configuration for alertmanager
             */
            "tls_server_config"?: {
                /**
                 * CertFile defines path to the pre-mounted file with certificate
                 * mutually exclusive with CertSecretRef
                 */
                "cert_file"?: string;
                /**
                 * CertSecretRef defines reference for secret with certificate content under given key
                 * mutually exclusive with CertFile
                 */
                "cert_secret_ref"?: {
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
                 * CipherSuites defines list of supported cipher suites for TLS versions up to TLS 1.2
                 * https://golang.org/pkg/crypto/tls/#pkg-constants
                 */
                "cipher_suites"?: Array<string>;
                /**
                 * Cert defines reference for secret with CA content under given key
                 * mutually exclusive with CertFile
                 * ClientAuthType defines server policy for client authentication
                 * If you want to enable client authentication (aka mTLS), you need to use RequireAndVerifyClientCert
                 * Note, mTLS is supported only at enterprise version of VictoriaMetrics components
                 */
                "client_auth_type"?: "NoClientCert" | "RequireAndVerifyClientCert";
                /**
                 * ClientCAFile defines path to the pre-mounted file with CA
                 * mutually exclusive with ClientCASecretRef
                 */
                "client_ca_file"?: string;
                /**
                 * ClientCASecretRef defines reference for secret with CA content under given key
                 * mutually exclusive with ClientCAFile
                 */
                "client_ca_secret_ref"?: {
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
                 * CurvePreferences defines elliptic curves that will be used in an ECDHE handshake, in preference order.
                 * https://golang.org/pkg/crypto/tls/#CurveID
                 */
                "curve_preferences"?: Array<string>;
                /**
                 * KeyFile defines path to the pre-mounted file with certificate key
                 * mutually exclusive with KeySecretRef
                 */
                "key_file"?: string;
                /**
                 * Key defines reference for secret with certificate key content under given key
                 * mutually exclusive with KeyFile
                 */
                "key_secret_ref"?: {
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
                 * MaxVersion maximum TLS version that is acceptable.
                 */
                "max_version"?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
                /**
                 * MinVersion minimum TLS version that is acceptable.
                 */
                "min_version"?: "TLS10" | "TLS11" | "TLS12" | "TLS13";
                /**
                 * PreferServerCipherSuites controls whether the server selects the
                 * client's most preferred ciphersuite
                 */
                "prefer_server_cipher_suites"?: boolean;
            };
        };
    };
    /**
     * Most recent observed status of the VMAlertmanager cluster.
     * Operator API itself. More info:
     * https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     */
    "status"?: {
        /**
         * Reason has non empty reason for update failure
         */
        "reason"?: string;
        /**
         * Status defines a status of object update
         */
        "updateStatus"?: string;
    };
}
/**
 * VMAlertmanager represents Victoria-Metrics deployment for Alertmanager.
 */
export declare class VMAlertmanager extends Model<IVMAlertmanager> implements IVMAlertmanager {
    "apiVersion": IVMAlertmanager["apiVersion"];
    "kind": IVMAlertmanager["kind"];
    "metadata"?: IVMAlertmanager["metadata"];
    "spec": IVMAlertmanager["spec"];
    "status"?: IVMAlertmanager["status"];
    static apiVersion: IVMAlertmanager["apiVersion"];
    static kind: IVMAlertmanager["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IVMAlertmanager>;
    constructor(data?: ModelData<IVMAlertmanager>);
}
