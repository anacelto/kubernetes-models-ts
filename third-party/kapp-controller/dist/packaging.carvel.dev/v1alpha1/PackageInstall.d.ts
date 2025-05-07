import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * A Package Install is an actual installation of a package and its underlying resources on a Kubernetes cluster. It is represented in kapp-controller by a PackageInstall CR. A PackageInstall CR must reference a Package CR.
 */
export interface IPackageInstall {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "packaging.carvel.dev/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "PackageInstall";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Canceled when set to true will stop all active changes
         */
        "canceled"?: boolean;
        /**
         * Specifies that Package should be deployed to destination cluster; by default, cluster is same as where this resource resides (optional)
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
        /**
         * When NoopDelete set to true, PackageInstall deletion should delete PackageInstall/App CR but preserve App's associated resources.
         */
        "noopDelete"?: boolean;
        /**
         * Specifies the name of the package to install (required)
         */
        "packageRef"?: {
            "refName"?: string;
            "versionSelection"?: {
                "constraints"?: string;
                "prereleases"?: {
                    "identifiers"?: Array<string>;
                };
            };
        };
        /**
         * Paused when set to true will ignore all pending changes, once it set back to false, pending changes will be applied
         */
        "paused"?: boolean;
        /**
         * Specifies service account that will be used to install underlying package contents
         */
        "serviceAccountName"?: string;
        /**
         * Controls frequency of App reconciliation in time + unit format. Always >= 30s. If value below 30s is specified, 30s will be used.
         */
        "syncPeriod"?: string;
        /**
         * Values to be included in package's templating step (currently only included in the first templating step) (optional)
         */
        "values"?: Array<{
            "secretRef"?: {
                "key"?: string;
                "name"?: string;
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
        "friendlyDescription"?: string;
        /**
         * LastAttemptedVersion specifies what version was last attempted to be installed. It does _not_ indicate it was successfully installed.
         */
        "lastAttemptedVersion"?: string;
        /**
         * Populated based on metadata.generation when controller observes a change to the resource; if this value is out of data, other status fields do not reflect latest state
         */
        "observedGeneration"?: number;
        "usefulErrorMessage"?: string;
        /**
         * TODO this is desired resolved version (not actually deployed)
         */
        "version"?: string;
    };
}
/**
 * A Package Install is an actual installation of a package and its underlying resources on a Kubernetes cluster. It is represented in kapp-controller by a PackageInstall CR. A PackageInstall CR must reference a Package CR.
 */
export declare class PackageInstall extends Model<IPackageInstall> implements IPackageInstall {
    "apiVersion": IPackageInstall["apiVersion"];
    "kind": IPackageInstall["kind"];
    "metadata"?: IPackageInstall["metadata"];
    "spec": IPackageInstall["spec"];
    "status"?: IPackageInstall["status"];
    static apiVersion: IPackageInstall["apiVersion"];
    static kind: IPackageInstall["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IPackageInstall>;
    constructor(data?: ModelData<IPackageInstall>);
}
