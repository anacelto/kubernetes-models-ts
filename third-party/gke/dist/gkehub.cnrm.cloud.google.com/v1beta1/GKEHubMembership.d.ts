import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IGKEHubMembership {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "gkehub.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "GKEHubMembership";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Optional. How to identify workloads from this Membership. See the documentation on Workload Identity for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity
         */
        "authority"?: {
            /**
             * Optional. A JSON Web Token (JWT) issuer URI. `issuer` must start with `https://` and be a valid URL with length <2000 characters. If set, then Google will allow valid OIDC tokens from this issuer to authenticate within the workload_identity_pool. OIDC discovery will be performed on this URI to validate tokens from the issuer. Clearing `issuer` disables Workload Identity. `issuer` cannot be directly modified; it must be cleared (and Workload Identity disabled) before using a new issuer (and re-enabling Workload Identity).
             */
            "issuer"?: string;
        };
        /**
         * Description of this membership, limited to 63 characters. Must match the regex: `\*` This field is present for legacy purposes.
         */
        "description"?: string;
        /**
         * Optional. Endpoint information to reach this member.
         */
        "endpoint"?: {
            /**
             * Optional. GKE-specific information. Only present if this Membership is a GKE cluster.
             */
            "gkeCluster"?: {
                "resourceRef"?: {
                    /**
                     * Immutable. Self-link of the GCP resource for the GKE cluster. For example: //container.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster Zonal clusters are also supported.
                     *
                     * Allowed value: The `selfLink` field of a `ContainerCluster` resource.
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
                     * Immutable. Self-link of the GCP resource for the GKE cluster. For example: //container.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster Zonal clusters are also supported.
                     *
                     * Allowed value: The `selfLink` field of a `ContainerCluster` resource.
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
                     * Immutable. Self-link of the GCP resource for the GKE cluster. For example: //container.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster Zonal clusters are also supported.
                     *
                     * Allowed value: The `selfLink` field of a `ContainerCluster` resource.
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
                     * Immutable. Self-link of the GCP resource for the GKE cluster. For example: //container.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster Zonal clusters are also supported.
                     *
                     * Allowed value: The `selfLink` field of a `ContainerCluster` resource.
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
                     * Immutable. Self-link of the GCP resource for the GKE cluster. For example: //container.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster Zonal clusters are also supported.
                     *
                     * Allowed value: The `selfLink` field of a `ContainerCluster` resource.
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
                     * Immutable. Self-link of the GCP resource for the GKE cluster. For example: //container.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster Zonal clusters are also supported.
                     *
                     * Allowed value: The `selfLink` field of a `ContainerCluster` resource.
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
                     * Immutable. Self-link of the GCP resource for the GKE cluster. For example: //container.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster Zonal clusters are also supported.
                     *
                     * Allowed value: The `selfLink` field of a `ContainerCluster` resource.
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
             * Optional. The in-cluster Kubernetes Resources that should be applied for a correctly registered cluster, in the steady state. These resources: \* Ensure that the cluster is exclusively registered to one and only one Hub Membership. \* Propagate Workload Pool Information available in the Membership Authority field. \* Ensure proper initial configuration of default Hub Features.
             */
            "kubernetesResource"?: {
                /**
                 * Input only. The YAML representation of the Membership CR. This field is ignored for GKE clusters where Hub can read the CR directly. Callers should provide the CR that is currently present in the cluster during CreateMembership or UpdateMembership, or leave this field empty if none exists. The CR manifest is used to validate the cluster has not been registered with another Membership.
                 */
                "membershipCrManifest"?: string;
                /**
                 * Optional. Options for Kubernetes resource generation.
                 */
                "resourceOptions"?: {
                    /**
                     * Optional. The Connect agent version to use for connect_resources. Defaults to the latest GKE Connect version. The version must be a currently supported version, obsolete versions will be rejected.
                     */
                    "connectVersion"?: string;
                    /**
                     * Optional. Use `apiextensions/v1beta1` instead of `apiextensions/v1` for CustomResourceDefinition resources. This option should be set for clusters with Kubernetes apiserver versions <1.16.
                     */
                    "v1beta1Crd"?: boolean;
                };
            };
        };
        /**
         * Optional. An externally-generated and managed ID for this Membership. This ID may be modified after creation, but this is not recommended. The ID must match the regex: `\*` If this Membership represents a Kubernetes cluster, this value should be set to the UID of the `kube-system` namespace object.
         */
        "externalId"?: string;
        /**
         * Optional. The infrastructure type this Membership is running on. Possible values: INFRASTRUCTURE_TYPE_UNSPECIFIED, ON_PREM, MULTI_CLOUD
         */
        "infrastructureType"?: string;
        /**
         * Immutable. The location for the resource
         */
        "location": string;
        /**
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
    };
    "status"?: {
        "authority"?: {
            /**
             * Output only. An identity provider that reflects the `issuer` in the workload identity pool.
             */
            "identityProvider"?: string;
            /**
             * Output only. The name of the workload identity pool in which `issuer` will be recognized. There is a single Workload Identity Pool per Hub that is shared between all Memberships that belong to that Hub. For a Hub hosted in: {PROJECT_ID}, the workload pool format is `{PROJECT_ID}.hub.id.goog`, although this is subject to change in newer versions of this API.
             */
            "workloadIdentityPool"?: string;
        };
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
         * Output only. When the Membership was created.
         */
        "createTime"?: string;
        /**
         * Output only. When the Membership was deleted.
         */
        "deleteTime"?: string;
        "endpoint"?: {
            /**
             * Output only. Useful Kubernetes-specific metadata.
             */
            "kubernetesMetadata"?: {
                /**
                 * Output only. Kubernetes API server version string as reported by `/version`.
                 */
                "kubernetesApiServerVersion"?: string;
                /**
                 * Output only. The total memory capacity as reported by the sum of all Kubernetes nodes resources, defined in MB.
                 */
                "memoryMb"?: number;
                /**
                 * Output only. Node count as reported by Kubernetes nodes resources.
                 */
                "nodeCount"?: number;
                /**
                 * Output only. Node providerID as reported by the first node in the list of nodes on the Kubernetes endpoint. On Kubernetes platforms that support zero-node clusters (like GKE-on-GCP), the node_count will be zero and the node_provider_id will be empty.
                 */
                "nodeProviderId"?: string;
                /**
                 * Output only. The time at which these details were last updated. This update_time is different from the Membership-level update_time since EndpointDetails are updated internally for API consumers.
                 */
                "updateTime"?: string;
                /**
                 * Output only. vCPU count as reported by Kubernetes nodes resources.
                 */
                "vcpuCount"?: number;
            };
            "kubernetesResource"?: {
                /**
                 * Output only. The Kubernetes resources for installing the GKE Connect agent This field is only populated in the Membership returned from a successful long-running operation from CreateMembership or UpdateMembership. It is not populated during normal GetMembership or ListMemberships requests. To get the resource manifest after the initial registration, the caller should make a UpdateMembership call with an empty field mask.
                 */
                "connectResources"?: Array<{
                    /**
                     * Whether the resource provided in the manifest is `cluster_scoped`. If unset, the manifest is assumed to be namespace scoped. This field is used for REST mapping when applying the resource in a cluster.
                     */
                    "clusterScoped"?: boolean;
                    /**
                     * YAML manifest of the resource.
                     */
                    "manifest"?: string;
                }>;
                /**
                 * Output only. Additional Kubernetes resources that need to be applied to the cluster after Membership creation, and after every update. This field is only populated in the Membership returned from a successful long-running operation from CreateMembership or UpdateMembership. It is not populated during normal GetMembership or ListMemberships requests. To get the resource manifest after the initial registration, the caller should make a UpdateMembership call with an empty field mask.
                 */
                "membershipResources"?: Array<{
                    /**
                     * Whether the resource provided in the manifest is `cluster_scoped`. If unset, the manifest is assumed to be namespace scoped. This field is used for REST mapping when applying the resource in a cluster.
                     */
                    "clusterScoped"?: boolean;
                    /**
                     * YAML manifest of the resource.
                     */
                    "manifest"?: string;
                }>;
            };
        };
        /**
         * Output only. For clusters using Connect, the timestamp of the most recent connection established with Google Cloud. This time is updated every several minutes, not continuously. For clusters that do not use GKE Connect, or that have never connected successfully, this field will be unset.
         */
        "lastConnectionTime"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        /**
         * Output only. State of the Membership resource.
         */
        "state"?: {
            /**
             * Output only. The current state of the Membership resource. Possible values: CODE_UNSPECIFIED, CREATING, READY, DELETING, UPDATING, SERVICE_UPDATING
             */
            "code"?: string;
        };
        /**
         * Output only. Google-generated UUID for this resource. This is unique across all Membership resources. If a Membership resource is deleted and another resource with the same name is created, it gets a different unique_id.
         */
        "uniqueId"?: string;
        /**
         * Output only. When the Membership was last updated.
         */
        "updateTime"?: string;
    };
}
export declare class GKEHubMembership extends Model<IGKEHubMembership> implements IGKEHubMembership {
    "apiVersion": IGKEHubMembership["apiVersion"];
    "kind": IGKEHubMembership["kind"];
    "metadata"?: IGKEHubMembership["metadata"];
    "spec": IGKEHubMembership["spec"];
    "status"?: IGKEHubMembership["status"];
    static apiVersion: IGKEHubMembership["apiVersion"];
    static kind: IGKEHubMembership["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IGKEHubMembership>;
    constructor(data?: ModelData<IGKEHubMembership>);
}
