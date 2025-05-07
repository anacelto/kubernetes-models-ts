import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IGKEHubFeatureMembership {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "gkehub.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "GKEHubFeatureMembership";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Config Management-specific spec.
         */
        "configmanagement"?: {
            /**
             * Binauthz configuration for the cluster.
             */
            "binauthz"?: {
                /**
                 * Whether binauthz is enabled in this cluster.
                 */
                "enabled"?: boolean;
            };
            /**
             * Config Sync configuration for the cluster.
             */
            "configSync"?: {
                "git"?: {
                    "gcpServiceAccountRef"?: {
                        /**
                         * The GCP Service Account Email used for auth when secretType is gcpServiceAccount.
                         *
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
                         * The GCP Service Account Email used for auth when secretType is gcpServiceAccount.
                         *
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
                         * The GCP Service Account Email used for auth when secretType is gcpServiceAccount.
                         *
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
                         * The GCP Service Account Email used for auth when secretType is gcpServiceAccount.
                         *
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
                         * The GCP Service Account Email used for auth when secretType is gcpServiceAccount.
                         *
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
                         * The GCP Service Account Email used for auth when secretType is gcpServiceAccount.
                         *
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
                         * The GCP Service Account Email used for auth when secretType is gcpServiceAccount.
                         *
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
                     * URL for the HTTPS proxy to be used when communicating with the Git repo.
                     */
                    "httpsProxy"?: string;
                    /**
                     * The path within the Git repository that represents the top level of the repo to sync. Default: the root directory of the repository.
                     */
                    "policyDir"?: string;
                    /**
                     * Type of secret configured for access to the Git repo. Must be one of ssh, cookiefile, gcenode, token, gcpserviceaccount or none. The validation of this is case-sensitive.
                     */
                    "secretType"?: string;
                    /**
                     * The branch of the repository to sync from. Default: master.
                     */
                    "syncBranch"?: string;
                    /**
                     * The URL of the Git repository to use as the source of truth.
                     */
                    "syncRepo"?: string;
                    /**
                     * Git revision (tag or hash) to check out. Default HEAD.
                     */
                    "syncRev"?: string;
                    /**
                     * Period in seconds between consecutive syncs. Default: 15.
                     */
                    "syncWaitSecs"?: string;
                };
                "oci"?: {
                    "gcpServiceAccountRef"?: {
                        /**
                         * The GCP Service Account Email used for auth when secret_type is gcpserviceaccount.
                         *
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
                         * The GCP Service Account Email used for auth when secret_type is gcpserviceaccount.
                         *
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
                         * The GCP Service Account Email used for auth when secret_type is gcpserviceaccount.
                         *
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
                         * The GCP Service Account Email used for auth when secret_type is gcpserviceaccount.
                         *
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
                         * The GCP Service Account Email used for auth when secret_type is gcpserviceaccount.
                         *
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
                         * The GCP Service Account Email used for auth when secret_type is gcpserviceaccount.
                         *
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
                         * The GCP Service Account Email used for auth when secret_type is gcpserviceaccount.
                         *
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
                     * The absolute path of the directory that contains the local resources. Default: the root directory of the image.
                     */
                    "policyDir"?: string;
                    /**
                     * Type of secret configured for access to the OCI Image. Must be one of gcenode, gcpserviceaccount or none. The validation of this is case-sensitive.
                     */
                    "secretType"?: string;
                    /**
                     * The OCI image repository URL for the package to sync from. e.g. LOCATION-docker.pkg.dev/PROJECT_ID/REPOSITORY_NAME/PACKAGE_NAME.
                     */
                    "syncRepo"?: string;
                    /**
                     * Period in seconds(int64 format) between consecutive syncs. Default: 15.
                     */
                    "syncWaitSecs"?: string;
                };
                /**
                 * Set to true to enable the Config Sync admission webhook to prevent drifts. If set to `false`, disables the Config Sync admission webhook and does not prevent drifts.
                 */
                "preventDrift"?: boolean;
                /**
                 * Specifies whether the Config Sync Repo is in "hierarchical" or "unstructured" mode.
                 */
                "sourceFormat"?: string;
            };
            /**
             * Hierarchy Controller configuration for the cluster.
             */
            "hierarchyController"?: {
                /**
                 * Whether hierarchical resource quota is enabled in this cluster.
                 */
                "enableHierarchicalResourceQuota"?: boolean;
                /**
                 * Whether pod tree labels are enabled in this cluster.
                 */
                "enablePodTreeLabels"?: boolean;
                /**
                 * Whether Hierarchy Controller is enabled in this cluster.
                 */
                "enabled"?: boolean;
            };
            /**
             * Policy Controller configuration for the cluster.
             */
            "policyController"?: {
                /**
                 * Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether.
                 */
                "auditIntervalSeconds"?: string;
                /**
                 * Enables the installation of Policy Controller. If false, the rest of PolicyController fields take no effect.
                 */
                "enabled"?: boolean;
                /**
                 * The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster.
                 */
                "exemptableNamespaces"?: Array<string>;
                /**
                 * Logs all denies and dry run failures.
                 */
                "logDeniesEnabled"?: boolean;
                /**
                 * Specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: ["cloudmonitoring", "prometheus"]. Default: ["cloudmonitoring", "prometheus"]
                 */
                "monitoring"?: {
                    /**
                     *  Specifies the list of backends Policy Controller will export to. Specifying an empty value `[]` disables metrics export.
                     */
                    "backends"?: Array<string>;
                };
                /**
                 * Enable or disable mutation in policy controller. If true, mutation CRDs, webhook and controller deployment will be deployed to the cluster.
                 */
                "mutationEnabled"?: boolean;
                /**
                 * Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.
                 */
                "referentialRulesEnabled"?: boolean;
                /**
                 * Installs the default template library along with Policy Controller.
                 */
                "templateLibraryInstalled"?: boolean;
            };
            /**
             * Optional. Version of ACM to install. Defaults to the latest version.
             */
            "version"?: string;
        };
        /**
         * Immutable.
         */
        "featureRef": {
            /**
             * The name of the feature
             *
             * Allowed value: The Google Cloud resource name of a `GKEHubFeature` resource (format: `projects/{{project}}/locations/{{location}}/features/{{name}}`).
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
             * The name of the feature
             *
             * Allowed value: The Google Cloud resource name of a `GKEHubFeature` resource (format: `projects/{{project}}/locations/{{location}}/features/{{name}}`).
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
             * The name of the feature
             *
             * Allowed value: The Google Cloud resource name of a `GKEHubFeature` resource (format: `projects/{{project}}/locations/{{location}}/features/{{name}}`).
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
             * The name of the feature
             *
             * Allowed value: The Google Cloud resource name of a `GKEHubFeature` resource (format: `projects/{{project}}/locations/{{location}}/features/{{name}}`).
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
             * The name of the feature
             *
             * Allowed value: The Google Cloud resource name of a `GKEHubFeature` resource (format: `projects/{{project}}/locations/{{location}}/features/{{name}}`).
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
             * The name of the feature
             *
             * Allowed value: The Google Cloud resource name of a `GKEHubFeature` resource (format: `projects/{{project}}/locations/{{location}}/features/{{name}}`).
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
             * The name of the feature
             *
             * Allowed value: The Google Cloud resource name of a `GKEHubFeature` resource (format: `projects/{{project}}/locations/{{location}}/features/{{name}}`).
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
         * Immutable. The location of the feature
         */
        "location": string;
        /**
         * Immutable.
         */
        "membershipRef": {
            /**
             * The name of the membership
             *
             * Allowed value: The Google Cloud resource name of a `GKEHubMembership` resource (format: `projects/{{project}}/locations/{{location}}/memberships/{{name}}`).
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
             * The name of the membership
             *
             * Allowed value: The Google Cloud resource name of a `GKEHubMembership` resource (format: `projects/{{project}}/locations/{{location}}/memberships/{{name}}`).
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
             * The name of the membership
             *
             * Allowed value: The Google Cloud resource name of a `GKEHubMembership` resource (format: `projects/{{project}}/locations/{{location}}/memberships/{{name}}`).
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
             * The name of the membership
             *
             * Allowed value: The Google Cloud resource name of a `GKEHubMembership` resource (format: `projects/{{project}}/locations/{{location}}/memberships/{{name}}`).
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
             * The name of the membership
             *
             * Allowed value: The Google Cloud resource name of a `GKEHubMembership` resource (format: `projects/{{project}}/locations/{{location}}/memberships/{{name}}`).
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
             * The name of the membership
             *
             * Allowed value: The Google Cloud resource name of a `GKEHubMembership` resource (format: `projects/{{project}}/locations/{{location}}/memberships/{{name}}`).
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
             * The name of the membership
             *
             * Allowed value: The Google Cloud resource name of a `GKEHubMembership` resource (format: `projects/{{project}}/locations/{{location}}/memberships/{{name}}`).
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
         * Manage Mesh Features
         */
        "mesh"?: {
            /**
             * \*\*DEPRECATED\*\* Whether to automatically manage Service Mesh control planes. Possible values: CONTROL_PLANE_MANAGEMENT_UNSPECIFIED, AUTOMATIC, MANUAL
             */
            "controlPlane"?: string;
            /**
             * Whether to automatically manage Service Mesh. Possible values: MANAGEMENT_UNSPECIFIED, MANAGEMENT_AUTOMATIC, MANAGEMENT_MANUAL
             */
            "management"?: string;
        };
        /**
         * Immutable. The Project that this resource belongs to.
         */
        "projectRef": {
            /**
             * The project of the feature
             *
             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
             * The project of the feature
             *
             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
             * The project of the feature
             *
             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
             * The project of the feature
             *
             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
             * The project of the feature
             *
             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
             * The project of the feature
             *
             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
             * The project of the feature
             *
             * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
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
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
    };
}
export declare class GKEHubFeatureMembership extends Model<IGKEHubFeatureMembership> implements IGKEHubFeatureMembership {
    "apiVersion": IGKEHubFeatureMembership["apiVersion"];
    "kind": IGKEHubFeatureMembership["kind"];
    "metadata"?: IGKEHubFeatureMembership["metadata"];
    "spec": IGKEHubFeatureMembership["spec"];
    "status"?: IGKEHubFeatureMembership["status"];
    static apiVersion: IGKEHubFeatureMembership["apiVersion"];
    static kind: IGKEHubFeatureMembership["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IGKEHubFeatureMembership>;
    constructor(data?: ModelData<IGKEHubFeatureMembership>);
}
