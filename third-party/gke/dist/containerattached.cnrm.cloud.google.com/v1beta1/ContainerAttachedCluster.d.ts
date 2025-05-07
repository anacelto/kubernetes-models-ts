import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IContainerAttachedCluster {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "containerattached.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "ContainerAttachedCluster";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Optional. Annotations on the cluster. This field has the same
         * restrictions as Kubernetes annotations. The total size of all keys and
         * values combined is limited to 256k. Key can have 2 segments: prefix (optional)
         * and name (required), separated by a slash (/). Prefix must be a DNS subdomain.
         * Name must be 63 characters or less, begin and end with alphanumerics,
         * with dashes (-), underscores (_), dots (.), and alphanumerics between.
         */
        "annotations"?: {
            [key: string]: string;
        };
        /**
         * Configuration related to the cluster RBAC settings.
         */
        "authorization"?: {
            /**
             * Users that can perform operations as a cluster admin. A managed
             * ClusterRoleBinding will be created to grant the 'cluster-admin' ClusterRole
             * to the users. Up to ten admin users can be provided.
             *
             * For more info on RBAC, see
             * https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles.
             */
            "adminUsers"?: Array<string>;
        };
        /**
         * Binary Authorization configuration.
         */
        "binaryAuthorization"?: {
            /**
             * Configure Binary Authorization evaluation mode. Possible values: ["DISABLED", "PROJECT_SINGLETON_POLICY_ENFORCE"].
             */
            "evaluationMode"?: string;
        };
        /**
         * Policy to determine what flags to send on delete.
         */
        "deletionPolicy"?: string;
        /**
         * A human readable description of this attached cluster. Cannot be longer
         * than 255 UTF-8 encoded bytes.
         */
        "description"?: string;
        /**
         * Immutable. The Kubernetes distribution of the underlying attached cluster. Supported values:
         * "eks", "aks".
         */
        "distribution": string;
        /**
         * Fleet configuration.
         */
        "fleet": {
            /**
             * The name of the managed Hub Membership resource associated to this
             * cluster. Membership names are formatted as
             * projects/<project-number>/locations/global/membership/<cluster-id>.
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
         * Immutable. The location for the resource.
         */
        "location": string;
        /**
         * Logging configuration.
         */
        "loggingConfig"?: {
            /**
             * The configuration of the logging components.
             */
            "componentConfig"?: {
                /**
                 * The components to be enabled. Possible values: ["SYSTEM_COMPONENTS", "WORKLOADS"].
                 */
                "enableComponents"?: Array<string>;
            };
        };
        /**
         * Monitoring configuration.
         */
        "monitoringConfig"?: {
            /**
             * Enable Google Cloud Managed Service for Prometheus in the cluster.
             */
            "managedPrometheusConfig"?: {
                /**
                 * Enable Managed Collection.
                 */
                "enabled"?: boolean;
            };
        };
        /**
         * OIDC discovery information of the target cluster.
         *
         * Kubernetes Service Account (KSA) tokens are JWT tokens signed by the cluster
         * API server. This fields indicates how GCP services
         * validate KSA tokens in order to allow system workloads (such as GKE Connect
         * and telemetry agents) to authenticate back to GCP.
         *
         * Both clusters with public and private issuer URLs are supported.
         * Clusters with public issuers only need to specify the 'issuer_url' field
         * while clusters with private issuers need to provide both
         * 'issuer_url' and 'jwks'.
         */
        "oidcConfig": {
            /**
             * Immutable. A JSON Web Token (JWT) issuer URI. 'issuer' must start with 'https://'.
             */
            "issuerUrl": string;
            /**
             * Immutable. OIDC verification keys in JWKS format (RFC 7517).
             */
            "jwks"?: string;
        };
        /**
         * The platform version for the cluster (e.g. '1.23.0-gke.1').
         */
        "platformVersion": string;
        /**
         * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
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
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
    };
    "status"?: {
        /**
         * Output only. The region where this cluster runs.
         *
         * For EKS clusters, this is an AWS region. For AKS clusters,
         * this is an Azure region.
         */
        "clusterRegion"?: string;
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
         * Output only. The time at which this cluster was created.
         */
        "createTime"?: string;
        /**
         * A set of errors found in the cluster.
         */
        "errors"?: Array<{
            /**
             * Human-friendly description of the error.
             */
            "message"?: string;
        }>;
        /**
         * The Kubernetes version of the cluster.
         */
        "kubernetesVersion"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        /**
         * If set, there are currently changes in flight to the cluster.
         */
        "reconciling"?: boolean;
        /**
         * The current state of the cluster. Possible values:
         * STATE_UNSPECIFIED, PROVISIONING, RUNNING, RECONCILING, STOPPING, ERROR,
         * DEGRADED.
         */
        "state"?: string;
        /**
         * A globally unique identifier for the cluster.
         */
        "uid"?: string;
        /**
         * The time at which this cluster was last updated.
         */
        "updateTime"?: string;
        /**
         * Workload Identity settings.
         */
        "workloadIdentityConfig"?: Array<{
            /**
             * The ID of the OIDC Identity Provider (IdP) associated to
             * the Workload Identity Pool.
             */
            "identityProvider"?: string;
            /**
             * The OIDC issuer URL for this cluster.
             */
            "issuerUri"?: string;
            /**
             * The Workload Identity Pool associated to the cluster.
             */
            "workloadPool"?: string;
        }>;
    };
}
export declare class ContainerAttachedCluster extends Model<IContainerAttachedCluster> implements IContainerAttachedCluster {
    "apiVersion": IContainerAttachedCluster["apiVersion"];
    "kind": IContainerAttachedCluster["kind"];
    "metadata"?: IContainerAttachedCluster["metadata"];
    "spec": IContainerAttachedCluster["spec"];
    "status"?: IContainerAttachedCluster["status"];
    static apiVersion: IContainerAttachedCluster["apiVersion"];
    static kind: IContainerAttachedCluster["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IContainerAttachedCluster>;
    constructor(data?: ModelData<IContainerAttachedCluster>);
}
