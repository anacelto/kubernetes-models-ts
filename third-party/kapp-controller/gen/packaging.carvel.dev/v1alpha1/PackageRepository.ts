import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/PackagingCarvelDevV1alpha1PackageRepository";

/**
 * A package repository is a collection of packages and their metadata. Similar to a maven repository or a rpm repository, adding a package repository to a cluster gives users of that cluster the ability to install any of the packages from that repository.
 */
export interface IPackageRepository {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "packaging.carvel.dev/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "PackageRepository";
  "metadata"?: IObjectMeta;
  "spec": {
    "fetch": {
      /**
       * Uses git to clone repository containing package list
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
       * Uses http library to fetch file containing packages
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
       * Image url; unqualified, tagged, or digest references supported (required)
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
       * Pulls imgpkg bundle from Docker/OCI registry
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
       * Pull content from within this resource; or other resources in the cluster
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
    };
    /**
     * Paused when set to true will ignore all pending changes, once it set back to false, pending changes will be applied
     */
    "paused"?: boolean;
    /**
     * Controls frequency of PackageRepository reconciliation
     */
    "syncPeriod"?: string;
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
 * A package repository is a collection of packages and their metadata. Similar to a maven repository or a rpm repository, adding a package repository to a cluster gives users of that cluster the ability to install any of the packages from that repository.
 */
export class PackageRepository extends Model<IPackageRepository> implements IPackageRepository {
  "apiVersion": IPackageRepository["apiVersion"];
  "kind": IPackageRepository["kind"];
  "metadata"?: IPackageRepository["metadata"];
  "spec": IPackageRepository["spec"];
  "status"?: IPackageRepository["status"];

static apiVersion: IPackageRepository["apiVersion"] = "packaging.carvel.dev/v1alpha1";
static kind: IPackageRepository["kind"] = "PackageRepository";
static is = createTypeMetaGuard<IPackageRepository>(PackageRepository);

constructor(data?: ModelData<IPackageRepository>) {
  super();

  this.setDefinedProps({
    apiVersion: PackageRepository.apiVersion,
    kind: PackageRepository.kind,
    ...data
  } as IPackageRepository);
}
}


setValidateFunc(PackageRepository, validate as ValidateFunc<IPackageRepository>);
