import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ArtifactregistryCnrmCloudGoogleComV1beta1ArtifactRegistryRepository";

export interface IArtifactRegistryRepository {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "artifactregistry.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "ArtifactRegistryRepository";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Cleanup policies for this repository. Cleanup policies indicate when
     * certain package versions can be automatically deleted.
     * Map keys are policy IDs supplied by users during policy creation. They must
     * unique within a repository and be under 128 characters in length.
     */
    "cleanupPolicies"?: Array<{
      /**
       * Policy action. Possible values: ["DELETE", "KEEP"].
       */
      "action"?: string;
      /**
       * Policy condition for matching versions.
       */
      "condition"?: {
        /**
         * Match versions newer than a duration.
         */
        "newerThan"?: string;
        /**
         * Match versions older than a duration.
         */
        "olderThan"?: string;
        /**
         * Match versions by package prefix. Applied on any prefix match.
         */
        "packageNamePrefixes"?: Array<string>;
        /**
         * Match versions by tag prefix. Applied on any prefix match.
         */
        "tagPrefixes"?: Array<string>;
        /**
         * Match versions by tag status. Default value: "ANY" Possible values: ["TAGGED", "UNTAGGED", "ANY"].
         */
        "tagState"?: string;
        /**
         * Match versions by version name prefix. Applied on any prefix match.
         */
        "versionNamePrefixes"?: Array<string>;
      };
      "id": string;
      /**
       * Policy condition for retaining a minimum number of versions. May only be
       * specified with a Keep action.
       */
      "mostRecentVersions"?: {
        /**
         * Minimum number of versions to keep.
         */
        "keepCount"?: number;
        /**
         * Match versions by package prefix. Applied on any prefix match.
         */
        "packageNamePrefixes"?: Array<string>;
      };
    }>;
    /**
     * If true, the cleanup pipeline is prevented from deleting versions in this
     * repository.
     */
    "cleanupPolicyDryRun"?: boolean;
    /**
     * The user-provided description of the repository.
     */
    "description"?: string;
    /**
     * Docker repository config contains repository level configuration for the repositories of docker type.
     */
    "dockerConfig"?: {
      /**
       * The repository which enabled this flag prevents all tags from being modified, moved or deleted. This does not prevent tags from being created.
       */
      "immutableTags"?: boolean;
    };
    /**
     * Immutable. The format of packages that are stored in the repository. Supported formats
     * can be found [here](https://cloud.google.com/artifact-registry/docs/supported-formats).
     * You can only create alpha formats if you are a member of the
     * [alpha user group](https://cloud.google.com/artifact-registry/docs/supported-formats#alpha-access).
     */
    "format": string;
    /**
     * The customer managed encryption key that’s used to encrypt the
     * contents of the Repository.
     */
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
     * Immutable. The name of the location this repository is located in.
     */
    "location": string;
    /**
     * MavenRepositoryConfig is maven related repository details.
     * Provides additional configuration details for repositories of the maven
     * format type.
     */
    "mavenConfig"?: {
      /**
       * Immutable. The repository with this flag will allow publishing the same
       * snapshot versions.
       */
      "allowSnapshotOverwrites"?: boolean;
      /**
       * Immutable. Version policy defines the versions that the registry will accept. Default value: "VERSION_POLICY_UNSPECIFIED" Possible values: ["VERSION_POLICY_UNSPECIFIED", "RELEASE", "SNAPSHOT"].
       */
      "versionPolicy"?: string;
    };
    /**
     * Immutable. The mode configures the repository to serve artifacts from different sources. Default value: "STANDARD_REPOSITORY" Possible values: ["STANDARD_REPOSITORY", "VIRTUAL_REPOSITORY", "REMOTE_REPOSITORY"].
     */
    "mode"?: string;
    /**
     * Immutable. Configuration specific for a Remote Repository.
     */
    "remoteRepositoryConfig"?: {
      /**
       * Immutable. The description of the remote source.
       */
      "description"?: string;
      /**
       * Immutable. Specific settings for a Docker remote repository.
       */
      "dockerRepository"?: {
        /**
         * Immutable. Address of the remote repository. Default value: "DOCKER_HUB" Possible values: ["DOCKER_HUB"].
         */
        "publicRepository"?: string;
      };
      /**
       * Immutable. Specific settings for a Maven remote repository.
       */
      "mavenRepository"?: {
        /**
         * Immutable. Address of the remote repository. Default value: "MAVEN_CENTRAL" Possible values: ["MAVEN_CENTRAL"].
         */
        "publicRepository"?: string;
      };
      /**
       * Immutable. Specific settings for an Npm remote repository.
       */
      "npmRepository"?: {
        /**
         * Immutable. Address of the remote repository. Default value: "NPMJS" Possible values: ["NPMJS"].
         */
        "publicRepository"?: string;
      };
      /**
       * Immutable. Specific settings for a Python remote repository.
       */
      "pythonRepository"?: {
        /**
         * Immutable. Address of the remote repository. Default value: "PYPI" Possible values: ["PYPI"].
         */
        "publicRepository"?: string;
      };
    };
    /**
     * Immutable. Optional. The repositoryId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Configuration specific for a Virtual Repository.
     */
    "virtualRepositoryConfig"?: {
      /**
       * Policies that configure the upstream artifacts distributed by the Virtual
       * Repository. Upstream policies cannot be set on a standard repository.
       */
      "upstreamPolicies"?: Array<{
        /**
         * The user-provided ID of the upstream policy.
         */
        "id"?: string;
        /**
         * Entries with a greater priority value take precedence in the pull order.
         */
        "priority"?: number;
        /**
         * A reference to the repository resource, for example:
         * "projects/p1/locations/us-central1/repositories/repo1".
         */
        "repositoryRef"?: {
          /**
           * Allowed value: string of the format `projects/{{project}}/locations/{{location}}/repositories/{{value}}`, where {{value}} is the `name` field of an `ArtifactRegistryRepository` resource.
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
           * Allowed value: string of the format `projects/{{project}}/locations/{{location}}/repositories/{{value}}`, where {{value}} is the `name` field of an `ArtifactRegistryRepository` resource.
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
           * Allowed value: string of the format `projects/{{project}}/locations/{{location}}/repositories/{{value}}`, where {{value}} is the `name` field of an `ArtifactRegistryRepository` resource.
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
           * Allowed value: string of the format `projects/{{project}}/locations/{{location}}/repositories/{{value}}`, where {{value}} is the `name` field of an `ArtifactRegistryRepository` resource.
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
           * Allowed value: string of the format `projects/{{project}}/locations/{{location}}/repositories/{{value}}`, where {{value}} is the `name` field of an `ArtifactRegistryRepository` resource.
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
           * Allowed value: string of the format `projects/{{project}}/locations/{{location}}/repositories/{{value}}`, where {{value}} is the `name` field of an `ArtifactRegistryRepository` resource.
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
           * Allowed value: string of the format `projects/{{project}}/locations/{{location}}/repositories/{{value}}`, where {{value}} is the `name` field of an `ArtifactRegistryRepository` resource.
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
      }>;
    };
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
     * The time when the repository was created.
     */
    "createTime"?: string;
    /**
     * The name of the repository, for example:
     * "repo1".
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * The time when the repository was last updated.
     */
    "updateTime"?: string;
  };
}

export class ArtifactRegistryRepository extends Model<IArtifactRegistryRepository> implements IArtifactRegistryRepository {
  "apiVersion": IArtifactRegistryRepository["apiVersion"];
  "kind": IArtifactRegistryRepository["kind"];
  "metadata"?: IArtifactRegistryRepository["metadata"];
  "spec": IArtifactRegistryRepository["spec"];
  "status"?: IArtifactRegistryRepository["status"];

static apiVersion: IArtifactRegistryRepository["apiVersion"] = "artifactregistry.cnrm.cloud.google.com/v1beta1";
static kind: IArtifactRegistryRepository["kind"] = "ArtifactRegistryRepository";
static is = createTypeMetaGuard<IArtifactRegistryRepository>(ArtifactRegistryRepository);

constructor(data?: ModelData<IArtifactRegistryRepository>) {
  super();

  this.setDefinedProps({
    apiVersion: ArtifactRegistryRepository.apiVersion,
    kind: ArtifactRegistryRepository.kind,
    ...data
  } as IArtifactRegistryRepository);
}
}


setValidateFunc(ArtifactRegistryRepository, validate as ValidateFunc<IArtifactRegistryRepository>);
