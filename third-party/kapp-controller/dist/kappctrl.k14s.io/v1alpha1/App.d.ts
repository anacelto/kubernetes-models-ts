import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * An App is a set of Kubernetes resources. These resources could span any number of namespaces or could be cluster-wide (e.g. CRDs). An App is represented in kapp-controller using a App CR. The App CR comprises of three main sections: spec.fetch – declare source for fetching configuration and OCI images spec.template – declare templating tool and values spec.deploy – declare deployment tool and any deploy specific configuration
 */
export interface IApp {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "kappctrl.k14s.io/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "App";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Cancels current and future reconciliations (optional; default=false)
         */
        "canceled"?: boolean;
        /**
         * Specifies that app should be deployed to destination cluster; by default, cluster is same as where this resource resides (optional; v0.5.0+)
         */
        "cluster"?: {
            /**
             * Specifies secret containing kubeconfig (required)
             */
            "kubeconfigSecretRef"?: {
                /**
                 * Specifies key that contains kubeconfig (optional)
                 */
                "key"?: string;
                /**
                 * Specifies secret name within app's namespace (required)
                 */
                "name"?: string;
            };
            /**
             * Specifies namespace in destination cluster (optional)
             */
            "namespace"?: string;
        };
        "deploy"?: Array<{
            /**
             * Use kapp to deploy resources
             */
            "kapp"?: {
                /**
                 * Configuration for delete command (optional)
                 */
                "delete"?: {
                    /**
                     * Pass through options to kapp delete (optional)
                     */
                    "rawOptions"?: Array<string>;
                };
                /**
                 * Configuration for inspect command (optional) as of kapp-controller v0.31.0, inspect is disabled by default add rawOptions or use an empty inspect config like `inspect: {}` to enable
                 */
                "inspect"?: {
                    /**
                     * Pass through options to kapp inspect (optional)
                     */
                    "rawOptions"?: Array<string>;
                };
                /**
                 * Override namespace for all resources (optional)
                 */
                "intoNs"?: string;
                /**
                 * Provide custom namespace override mapping (optional)
                 */
                "mapNs"?: Array<string>;
                /**
                 * Pass through options to kapp deploy (optional)
                 */
                "rawOptions"?: Array<string>;
            };
        }>;
        "fetch"?: Array<{
            /**
             * Uses git to clone repository
             */
            "git"?: {
                /**
                 * Skip lfs download (optional)
                 */
                "lfsSkipSmudge"?: boolean;
                /**
                 * Branch, tag, commit; origin is the name of the remote (optional)
                 */
                "ref"?: string;
                /**
                 * Specifies a strategy to resolve to an explicit ref (optional; v0.24.0+)
                 */
                "refSelection"?: {
                    "semver"?: {
                        "constraints"?: string;
                        "prereleases"?: {
                            "identifiers"?: Array<string>;
                        };
                    };
                };
                /**
                 * Secret with auth details. allowed keys: ssh-privatekey, ssh-knownhosts, username, password (optional) (if ssh-knownhosts is not specified, git will not perform strict host checking)
                 */
                "secretRef"?: {
                    /**
                     * Object is expected to be within same namespace
                     */
                    "name"?: string;
                };
                /**
                 * Grab only portion of repository (optional)
                 */
                "subPath"?: string;
                /**
                 * http or ssh urls are supported (required)
                 */
                "url"?: string;
            };
            /**
             * Uses helm fetch to fetch specified chart
             */
            "helmChart"?: {
                /**
                 * Example: stable/redis
                 */
                "name"?: string;
                "repository"?: {
                    "secretRef"?: {
                        /**
                         * Object is expected to be within same namespace
                         */
                        "name"?: string;
                    };
                    /**
                     * Repository url; scheme of oci:// will fetch experimental helm oci chart (v0.19.0+) (required)
                     */
                    "url"?: string;
                };
                "version"?: string;
            };
            /**
             * Uses http library to fetch file
             */
            "http"?: {
                /**
                 * Secret to provide auth details (optional) Secret may include one or more keys: username, password
                 */
                "secretRef"?: {
                    /**
                     * Object is expected to be within same namespace
                     */
                    "name"?: string;
                };
                /**
                 * Checksum to verify after download (optional)
                 */
                "sha256"?: string;
                /**
                 * Grab only portion of download (optional)
                 */
                "subPath"?: string;
                /**
                 * URL can point to one of following formats: text, tgz, zip http and https url are supported; plain file, tgz and tar types are supported (required)
                 */
                "url"?: string;
            };
            /**
             * Pulls content from Docker/OCI registry
             */
            "image"?: {
                /**
                 * Secret may include one or more keys: username, password, token. By default anonymous access is used for authentication.
                 */
                "secretRef"?: {
                    /**
                     * Object is expected to be within same namespace
                     */
                    "name"?: string;
                };
                /**
                 * Grab only portion of image (optional)
                 */
                "subPath"?: string;
                /**
                 * Specifies a strategy to choose a tag (optional; v0.24.0+) if specified, do not include a tag in url key
                 */
                "tagSelection"?: {
                    "semver"?: {
                        "constraints"?: string;
                        "prereleases"?: {
                            "identifiers"?: Array<string>;
                        };
                    };
                };
                /**
                 * Docker image url; unqualified, tagged, or digest references supported (required) Example: username/app1-config:v0.1.0
                 */
                "url"?: string;
            };
            /**
             * Pulls imgpkg bundle from Docker/OCI registry (v0.17.0+)
             */
            "imgpkgBundle"?: {
                /**
                 * Docker image url; unqualified, tagged, or digest references supported (required)
                 */
                "image"?: string;
                /**
                 * Secret may include one or more keys: username, password, token. By default anonymous access is used for authentication.
                 */
                "secretRef"?: {
                    /**
                     * Object is expected to be within same namespace
                     */
                    "name"?: string;
                };
                /**
                 * Specifies a strategy to choose a tag (optional; v0.24.0+) if specified, do not include a tag in url key
                 */
                "tagSelection"?: {
                    "semver"?: {
                        "constraints"?: string;
                        "prereleases"?: {
                            "identifiers"?: Array<string>;
                        };
                    };
                };
            };
            /**
             * Pulls content from within this resource; or other resources in the cluster
             */
            "inline"?: {
                /**
                 * Specifies mapping of paths to their content; not recommended for sensitive values as CR is not encrypted (optional)
                 */
                "paths"?: {
                    [key: string]: string;
                };
                /**
                 * Specifies content via secrets and config maps; data values are recommended to be placed in secrets (optional)
                 */
                "pathsFrom"?: Array<{
                    "configMapRef"?: {
                        /**
                         * Specifies where to place files found in secret (optional)
                         */
                        "directoryPath"?: string;
                        "name"?: string;
                    };
                    "secretRef"?: {
                        /**
                         * Specifies where to place files found in secret (optional)
                         */
                        "directoryPath"?: string;
                        "name"?: string;
                    };
                }>;
            };
            /**
             * Relative path to place the fetched artifacts
             */
            "path"?: string;
        }>;
        /**
         * Deletion requests for the App will result in the App CR being deleted, but its associated resources will not be deleted (optional; default=false; v0.18.0+)
         */
        "noopDelete"?: boolean;
        /**
         * Pauses _future_ reconciliation; does _not_ affect currently running reconciliation (optional; default=false)
         */
        "paused"?: boolean;
        /**
         * Specifies that app should be deployed authenticated via given service account, found in this namespace (optional; v0.6.0+)
         */
        "serviceAccountName"?: string;
        /**
         * Specifies the length of time to wait, in time + unit format, before reconciling. Always >= 30s. If value below 30s is specified, 30s will be used. (optional; v0.9.0+; default=30s)
         */
        "syncPeriod"?: string;
        "template"?: Array<{
            "cue"?: {
                /**
                 * Cue expression for single path component, can be used to unify ValuesFrom into a given field (optional)
                 */
                "inputExpression"?: string;
                /**
                 * Cue expression to output, default will export all visible fields (optional)
                 */
                "outputExpression"?: string;
                /**
                 * Explicit list of files/directories (optional)
                 */
                "paths"?: Array<string>;
                /**
                 * Provide values (optional)
                 */
                "valuesFrom"?: Array<{
                    "configMapRef"?: {
                        "name"?: string;
                    };
                    "downwardAPI"?: {
                        "items"?: Array<{
                            /**
                             * Required: Selects a field of the app: only annotations, labels, uid, name and namespace are supported.
                             */
                            "fieldPath"?: string;
                            /**
                             * Optional: Get running KappController version, defaults (empty) to retrieving the current running version.. Can be manually supplied instead.
                             */
                            "kappControllerVersion"?: {
                                "version"?: string;
                            };
                            /**
                             * Optional: Get running KubernetesAPIs from cluster, defaults (empty) to retrieving the APIs from the cluster. Can be manually supplied instead, e.g ["group/version", "group2/version2"]
                             */
                            "kubernetesAPIs"?: {
                                "groupVersions"?: Array<string>;
                            };
                            /**
                             * Optional: Get running Kubernetes version from cluster, defaults (empty) to retrieving the version from the cluster. Can be manually supplied instead.
                             */
                            "kubernetesVersion"?: {
                                "version"?: string;
                            };
                            "name"?: string;
                        }>;
                    };
                    "path"?: string;
                    "secretRef"?: {
                        "name"?: string;
                    };
                }>;
            };
            /**
             * Use helm template command to render helm chart
             */
            "helmTemplate"?: {
                /**
                 * Optional: Use kubernetes group/versions resources available in the live cluster
                 */
                "kubernetesAPIs"?: {
                    "groupVersions"?: Array<string>;
                };
                /**
                 * Optional: Get Kubernetes version, defaults (empty) to retrieving the version from the cluster. Can be manually overridden to a value instead.
                 */
                "kubernetesVersion"?: {
                    "version"?: string;
                };
                /**
                 * Set name explicitly, default is App CR's name (optional; v0.13.0+)
                 */
                "name"?: string;
                /**
                 * Set namespace explicitly, default is App CR's namespace (optional; v0.13.0+)
                 */
                "namespace"?: string;
                /**
                 * Path to chart (optional; v0.13.0+)
                 */
                "path"?: string;
                /**
                 * One or more secrets, config maps, paths that provide values (optional)
                 */
                "valuesFrom"?: Array<{
                    "configMapRef"?: {
                        "name"?: string;
                    };
                    "downwardAPI"?: {
                        "items"?: Array<{
                            /**
                             * Required: Selects a field of the app: only annotations, labels, uid, name and namespace are supported.
                             */
                            "fieldPath"?: string;
                            /**
                             * Optional: Get running KappController version, defaults (empty) to retrieving the current running version.. Can be manually supplied instead.
                             */
                            "kappControllerVersion"?: {
                                "version"?: string;
                            };
                            /**
                             * Optional: Get running KubernetesAPIs from cluster, defaults (empty) to retrieving the APIs from the cluster. Can be manually supplied instead, e.g ["group/version", "group2/version2"]
                             */
                            "kubernetesAPIs"?: {
                                "groupVersions"?: Array<string>;
                            };
                            /**
                             * Optional: Get running Kubernetes version from cluster, defaults (empty) to retrieving the version from the cluster. Can be manually supplied instead.
                             */
                            "kubernetesVersion"?: {
                                "version"?: string;
                            };
                            "name"?: string;
                        }>;
                    };
                    "path"?: string;
                    "secretRef"?: {
                        "name"?: string;
                    };
                }>;
            };
            /**
             * TODO implement jsonnet
             */
            "jsonnet"?: {};
            /**
             * Use kbld to resolve image references to use digests
             */
            "kbld"?: {
                "paths"?: Array<string>;
            };
            /**
             * TODO implement kustomize
             */
            "kustomize"?: {};
            /**
             * Use sops to decrypt \*.sops.yml files (optional; v0.11.0+)
             */
            "sops"?: {
                "age"?: {
                    /**
                     * Secret with private armored PGP private keys (required)
                     */
                    "privateKeysSecretRef"?: {
                        "name"?: string;
                    };
                };
                /**
                 * Lists paths to decrypt explicitly (optional; v0.13.0+)
                 */
                "paths"?: Array<string>;
                /**
                 * Use PGP to decrypt files (required)
                 */
                "pgp"?: {
                    /**
                     * Secret with private armored PGP private keys (required)
                     */
                    "privateKeysSecretRef"?: {
                        "name"?: string;
                    };
                };
            };
            /**
             * Use ytt to template configuration
             */
            "ytt"?: {
                /**
                 * Control metadata about input files passed to ytt (optional; v0.18.0+) see https://carvel.dev/ytt/docs/latest/file-marks/ for more details
                 */
                "fileMarks"?: Array<string>;
                /**
                 * Ignores comments that ytt doesn't recognize (optional; default=false)
                 */
                "ignoreUnknownComments"?: boolean;
                /**
                 * Specify additional files, including data values (optional)
                 */
                "inline"?: {
                    /**
                     * Specifies mapping of paths to their content; not recommended for sensitive values as CR is not encrypted (optional)
                     */
                    "paths"?: {
                        [key: string]: string;
                    };
                    /**
                     * Specifies content via secrets and config maps; data values are recommended to be placed in secrets (optional)
                     */
                    "pathsFrom"?: Array<{
                        "configMapRef"?: {
                            /**
                             * Specifies where to place files found in secret (optional)
                             */
                            "directoryPath"?: string;
                            "name"?: string;
                        };
                        "secretRef"?: {
                            /**
                             * Specifies where to place files found in secret (optional)
                             */
                            "directoryPath"?: string;
                            "name"?: string;
                        };
                    }>;
                };
                /**
                 * Lists paths to provide to ytt explicitly (optional)
                 */
                "paths"?: Array<string>;
                /**
                 * Forces strict mode https://github.com/k14s/ytt/blob/develop/docs/strict.md (optional; default=false)
                 */
                "strict"?: boolean;
                /**
                 * Provide values via ytt's --data-values-file (optional; v0.19.0-alpha.9)
                 */
                "valuesFrom"?: Array<{
                    "configMapRef"?: {
                        "name"?: string;
                    };
                    "downwardAPI"?: {
                        "items"?: Array<{
                            /**
                             * Required: Selects a field of the app: only annotations, labels, uid, name and namespace are supported.
                             */
                            "fieldPath"?: string;
                            /**
                             * Optional: Get running KappController version, defaults (empty) to retrieving the current running version.. Can be manually supplied instead.
                             */
                            "kappControllerVersion"?: {
                                "version"?: string;
                            };
                            /**
                             * Optional: Get running KubernetesAPIs from cluster, defaults (empty) to retrieving the APIs from the cluster. Can be manually supplied instead, e.g ["group/version", "group2/version2"]
                             */
                            "kubernetesAPIs"?: {
                                "groupVersions"?: Array<string>;
                            };
                            /**
                             * Optional: Get running Kubernetes version from cluster, defaults (empty) to retrieving the version from the cluster. Can be manually supplied instead.
                             */
                            "kubernetesVersion"?: {
                                "version"?: string;
                            };
                            "name"?: string;
                        }>;
                    };
                    "path"?: string;
                    "secretRef"?: {
                        "name"?: string;
                    };
                }>;
            };
        }>;
    };
    "status"?: {
        "conditions"?: Array<{
            /**
             * Human-readable message indicating details about last transition.
             */
            "message"?: string;
            /**
             * Unique, this should be a short, machine understandable string that gives the reason for condition's last transition. If it reports "ResizeStarted" that means the underlying persistent volume is being resized.
             */
            "reason"?: string;
            "status": string;
            /**
             * ConditionType represents reconciler state
             */
            "type": string;
        }>;
        "consecutiveReconcileFailures"?: number;
        "consecutiveReconcileSuccesses"?: number;
        "deploy"?: {
            "error"?: string;
            "exitCode"?: number;
            "finished"?: boolean;
            /**
             * KappDeployStatus contains the associated AppCR deployed resources
             */
            "kapp"?: {
                /**
                 * AssociatedResources contains the associated App label, namespaces and GKs
                 */
                "associatedResources"?: {
                    "groupKinds"?: Array<{
                        "group": string;
                        "kind": string;
                    }>;
                    "label"?: string;
                    "namespaces"?: Array<string>;
                };
            };
            "startedAt"?: string;
            "stderr"?: string;
            "stdout"?: string;
            "updatedAt"?: string;
        };
        "fetch"?: {
            "error"?: string;
            "exitCode"?: number;
            "startedAt"?: string;
            "stderr"?: string;
            "stdout"?: string;
            "updatedAt"?: string;
        };
        "friendlyDescription"?: string;
        "inspect"?: {
            "error"?: string;
            "exitCode"?: number;
            "stderr"?: string;
            "stdout"?: string;
            "updatedAt"?: string;
        };
        "managedAppName"?: string;
        /**
         * Populated based on metadata.generation when controller observes a change to the resource; if this value is out of data, other status fields do not reflect latest state
         */
        "observedGeneration"?: number;
        "template"?: {
            "error"?: string;
            "exitCode"?: number;
            "stderr"?: string;
            "updatedAt"?: string;
        };
        "usefulErrorMessage"?: string;
    };
}
/**
 * An App is a set of Kubernetes resources. These resources could span any number of namespaces or could be cluster-wide (e.g. CRDs). An App is represented in kapp-controller using a App CR. The App CR comprises of three main sections: spec.fetch – declare source for fetching configuration and OCI images spec.template – declare templating tool and values spec.deploy – declare deployment tool and any deploy specific configuration
 */
export declare class App extends Model<IApp> implements IApp {
    "apiVersion": IApp["apiVersion"];
    "kind": IApp["kind"];
    "metadata"?: IApp["metadata"];
    "spec": IApp["spec"];
    "status"?: IApp["status"];
    static apiVersion: IApp["apiVersion"];
    static kind: IApp["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IApp>;
    constructor(data?: ModelData<IApp>);
}
