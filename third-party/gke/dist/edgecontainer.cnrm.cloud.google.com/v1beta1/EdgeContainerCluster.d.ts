import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IEdgeContainerCluster {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "edgecontainer.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "EdgeContainerCluster";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Immutable. RBAC policy that will be applied and managed by GEC.
         */
        "authorization": {
            /**
             * User that will be granted the cluster-admin role on the cluster, providing
             * full access to the cluster. Currently, this is a singular field, but will
             * be expanded to allow multiple admins in the future.
             */
            "adminUsers": {
                "usernameRef": {
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
            };
        };
        /**
         * The configuration of the cluster control plane.
         */
        "controlPlane"?: {
            /**
             * Immutable. Local control plane configuration.
             */
            "local"?: {
                /**
                 * Only machines matching this filter will be allowed to host control
                 * plane nodes. The filtering language accepts strings like "name=<name>",
                 * and is documented here: [AIP-160](https://google.aip.dev/160).
                 */
                "machineFilter"?: string;
                /**
                 * The number of nodes to serve as replicas of the Control Plane.
                 * Only 1 and 3 are supported.
                 */
                "nodeCount"?: number;
                /**
                 * Immutable. Name of the Google Distributed Cloud Edge zones where this node pool
                 * will be created. For example: 'us-central1-edge-customer-a'.
                 */
                "nodeLocation"?: string;
                /**
                 * Policy configuration about how user applications are deployed. Possible values: ["SHARED_DEPLOYMENT_POLICY_UNSPECIFIED", "ALLOWED", "DISALLOWED"].
                 */
                "sharedDeploymentPolicy"?: string;
            };
            /**
             * Immutable. Remote control plane configuration.
             */
            "remote"?: {
                /**
                 * Immutable. Name of the Google Distributed Cloud Edge zones where this node pool
                 * will be created. For example: 'us-central1-edge-customer-a'.
                 */
                "nodeLocation"?: string;
            };
        };
        /**
         * Remote control plane disk encryption options. This field is only used when
         * enabling CMEK support.
         */
        "controlPlaneEncryption"?: {
            /**
             * The Cloud KMS CryptoKeyVersion currently in use for protecting control
             * plane disks. Only applicable if kms_key is set.
             */
            "kmsKeyActiveVersion"?: string;
            "kmsKeyRef"?: {
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
             * Availability of the Cloud KMS CryptoKey. If not 'KEY_AVAILABLE', then
             * nodes may go offline as they cannot access their local data. This can be
             * caused by a lack of permissions to use the key, or if the key is disabled
             * or deleted.
             */
            "kmsKeyState"?: string;
            /**
             * Error status returned by Cloud KMS when using this key. This field may be
             * populated only if 'kms_key_state' is not 'KMS_KEY_STATE_KEY_AVAILABLE'.
             * If populated, this field contains the error status reported by Cloud KMS.
             */
            "kmsStatus"?: Array<{
                /**
                 * The status code, which should be an enum value of google.rpc.Code.
                 */
                "code"?: number;
                /**
                 * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
                 */
                "message"?: string;
            }>;
        };
        /**
         * The default maximum number of pods per node used if a maximum value is not
         * specified explicitly for a node pool in this cluster. If unspecified, the
         * Kubernetes default value will be used.
         */
        "defaultMaxPodsPerNode"?: number;
        /**
         * Address pools for cluster data plane external load balancing.
         */
        "externalLoadBalancerIpv4AddressPools"?: Array<string>;
        /**
         * Immutable. Fleet related configuration.
         * Fleets are a Google Cloud concept for logically organizing clusters,
         * letting you use and manage multi-cluster capabilities and apply
         * consistent policies across your systems.
         */
        "fleet": {
            /**
             * The name of the managed Hub Membership resource associated to this cluster.
             * Membership names are formatted as
             * 'projects/<project-number>/locations/global/membership/<cluster-id>'.
             */
            "membership"?: string;
            /**
             * The number of the Fleet host project where this cluster will be registered.
             */
            "projectRef": {
                /**
                 * Allowed value: string of the format `projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource.
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
                 * Allowed value: string of the format `projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource.
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
                 * Allowed value: string of the format `projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource.
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
                 * Allowed value: string of the format `projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource.
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
                 * Allowed value: string of the format `projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource.
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
                 * Allowed value: string of the format `projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource.
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
                 * Allowed value: string of the format `projects/{{value}}`, where {{value}} is the `number` field of a `Project` resource.
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
        };
        /**
         * Immutable. The location of the resource.
         */
        "location": string;
        /**
         * Cluster-wide maintenance policy configuration.
         */
        "maintenancePolicy"?: {
            /**
             * Specifies the maintenance window in which maintenance may be performed.
             */
            "window": {
                /**
                 * Represents an arbitrary window of time that recurs.
                 */
                "recurringWindow": {
                    /**
                     * An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how
                     * this window recurs. They go on for the span of time between the start and
                     * end time.
                     */
                    "recurrence"?: string;
                    /**
                     * Represents an arbitrary window of time.
                     */
                    "window"?: {
                        /**
                         * The time that the window ends. The end time must take place after the
                         * start time.
                         */
                        "endTime"?: string;
                        /**
                         * The time that the window first starts.
                         */
                        "startTime"?: string;
                    };
                };
            };
        };
        /**
         * Fleet related configuration.
         * Fleets are a Google Cloud concept for logically organizing clusters,
         * letting you use and manage multi-cluster capabilities and apply
         * consistent policies across your systems.
         */
        "networking": {
            /**
             * Immutable. All pods in the cluster are assigned an RFC1918 IPv4 address from these
             * blocks. Only a single block is supported. This field cannot be changed
             * after creation.
             */
            "clusterIpv4CidrBlocks": Array<string>;
            /**
             * Immutable. If specified, dual stack mode is enabled and all pods in the cluster are
             * assigned an IPv6 address from these blocks alongside from an IPv4
             * address. Only a single block is supported. This field cannot be changed
             * after creation.
             */
            "clusterIpv6CidrBlocks"?: Array<string>;
            /**
             * IP addressing type of this cluster i.e. SINGLESTACK_V4 vs DUALSTACK_V4_V6.
             */
            "networkType"?: string;
            /**
             * Immutable. All services in the cluster are assigned an RFC1918 IPv4 address from these
             * blocks. Only a single block is supported. This field cannot be changed
             * after creation.
             */
            "servicesIpv4CidrBlocks": Array<string>;
            /**
             * Immutable. If specified, dual stack mode is enabled and all services in the cluster are
             * assigned an IPv6 address from these blocks alongside from an IPv4
             * address. Only a single block is supported. This field cannot be changed
             * after creation.
             */
            "servicesIpv6CidrBlocks"?: Array<string>;
        };
        /**
         * The project that this resource belongs to.
         */
        "projectRef": {
            /**
             * Allowed value: The `name` field of a `Project` resource.
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
             * Allowed value: The `name` field of a `Project` resource.
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
             * Allowed value: The `name` field of a `Project` resource.
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
             * Allowed value: The `name` field of a `Project` resource.
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
             * Allowed value: The `name` field of a `Project` resource.
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
             * Allowed value: The `name` field of a `Project` resource.
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
             * Allowed value: The `name` field of a `Project` resource.
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
         * The release channel a cluster is subscribed to. Possible values: ["RELEASE_CHANNEL_UNSPECIFIED", "NONE", "REGULAR"].
         */
        "releaseChannel"?: string;
        /**
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
        /**
         * Config that customers are allowed to define for GDCE system add-ons.
         */
        "systemAddonsConfig"?: {
            /**
             * Config for the Ingress add-on which allows customers to create an Ingress
             * object to manage external access to the servers in a cluster. The add-on
             * consists of istiod and istio-ingress.
             */
            "ingress"?: {
                /**
                 * Whether Ingress is disabled.
                 */
                "disabled"?: boolean;
                /**
                 * Ingress VIP.
                 */
                "ipv4Vip"?: string;
            };
        };
        /**
         * The target cluster version. For example: "1.5.0".
         */
        "targetVersion"?: string;
    };
    "status"?: {
        /**
         * The PEM-encoded public certificate of the cluster's CA.
         */
        "clusterCaCertificate"?: string;
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
         * The control plane release version.
         */
        "controlPlaneVersion"?: string;
        /**
         * The time the cluster was created, in RFC3339 text format.
         */
        "createTime"?: string;
        /**
         * The IP address of the Kubernetes API server.
         */
        "endpoint"?: string;
        /**
         * All the maintenance events scheduled for the cluster, including the ones
         * ongoing, planned for the future and done in the past (up to 90 days).
         */
        "maintenanceEvents"?: Array<{
            /**
             * The time when the maintenance event request was created.
             */
            "createTime"?: string;
            /**
             * The time when the maintenance event ended, either successfully or not. If
             * the maintenance event is split into multiple maintenance windows,
             * end_time is only updated when the whole flow ends.
             */
            "endTime"?: string;
            /**
             * The operation for running the maintenance event. Specified in the format
             * projects/\*\/locations/\*\/operations/\*. If the maintenance event is split
             * into multiple operations (e.g. due to maintenance windows), the latest
             * one is recorded.
             */
            "operation"?: string;
            /**
             * The schedule of the maintenance event.
             */
            "schedule"?: string;
            /**
             * The time when the maintenance event started.
             */
            "startTime"?: string;
            /**
             * Indicates the maintenance event state.
             */
            "state"?: string;
            /**
             * The target version of the cluster.
             */
            "targetVersion"?: string;
            /**
             * Indicates the maintenance event type.
             */
            "type"?: string;
            /**
             * The time when the maintenance event message was updated.
             */
            "updateTime"?: string;
            /**
             * UUID of the maintenance event.
             */
            "uuid"?: string;
        }>;
        /**
         * The lowest release version among all worker nodes. This field can be empty
         * if the cluster does not have any worker nodes.
         */
        "nodeVersion"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        /**
         * The port number of the Kubernetes API server.
         */
        "port"?: number;
        /**
         * Indicates the status of the cluster.
         */
        "status"?: string;
        /**
         * The time the cluster was last updated, in RFC3339 text format.
         */
        "updateTime"?: string;
    };
}
export declare class EdgeContainerCluster extends Model<IEdgeContainerCluster> implements IEdgeContainerCluster {
    "apiVersion": IEdgeContainerCluster["apiVersion"];
    "kind": IEdgeContainerCluster["kind"];
    "metadata"?: IEdgeContainerCluster["metadata"];
    "spec": IEdgeContainerCluster["spec"];
    "status"?: IEdgeContainerCluster["status"];
    static apiVersion: IEdgeContainerCluster["apiVersion"];
    static kind: IEdgeContainerCluster["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IEdgeContainerCluster>;
    constructor(data?: ModelData<IEdgeContainerCluster>);
}
