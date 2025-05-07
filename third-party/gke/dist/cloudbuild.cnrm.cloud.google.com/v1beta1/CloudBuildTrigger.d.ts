import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface ICloudBuildTrigger {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "cloudbuild.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "CloudBuildTrigger";
    "metadata"?: IObjectMeta;
    "spec"?: {
        /**
         * Configuration for manual approval to start a build invocation of this BuildTrigger.
         * Builds created by this trigger will require approval before they execute.
         * Any user with a Cloud Build Approver role for the project can approve a build.
         */
        "approvalConfig"?: {
            /**
             * Whether or not approval is needed. If this is set on a build, it will become pending when run,
             * and will need to be explicitly approved to start.
             */
            "approvalRequired"?: boolean;
        };
        /**
         * BitbucketServerTriggerConfig describes the configuration of a trigger that creates a build whenever a Bitbucket Server event is received.
         */
        "bitbucketServerTriggerConfig"?: {
            /**
             * Only `external` field is supported to configure the reference.
             *
             * The full resource name of the bitbucket server config. Format:
             * projects/{project}/locations/{location}/bitbucketServerConfigs/{id}.
             */
            "bitbucketServerConfigResourceRef": {
                /**
                 * Allowed value: The `name` field of a `CloudBuildBitbucketServerConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildBitbucketServerConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildBitbucketServerConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildBitbucketServerConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildBitbucketServerConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildBitbucketServerConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildBitbucketServerConfig` resource.
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
             * Key of the project that the repo is in. For example: The key for https://mybitbucket.server/projects/TEST/repos/test-repo is "TEST".
             */
            "projectKey": string;
            /**
             * Filter to match changes in pull requests.
             */
            "pullRequest"?: {
                /**
                 * Regex of branches to match.
                 * The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax.
                 */
                "branch": string;
                /**
                 * Configure builds to run whether a repository owner or collaborator need to comment /gcbrun. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"].
                 */
                "commentControl"?: string;
                /**
                 * If true, branches that do NOT match the git_ref will trigger a build.
                 */
                "invertRegex"?: boolean;
            };
            /**
             * Filter to match changes in refs like branches, tags.
             */
            "push"?: {
                /**
                 * Regex of branches to match.  Specify only one of branch or tag.
                 */
                "branch"?: string;
                /**
                 * When true, only trigger a build if the revision regex does NOT match the gitRef regex.
                 */
                "invertRegex"?: boolean;
                /**
                 * Regex of tags to match.  Specify only one of branch or tag.
                 */
                "tag"?: string;
            };
            /**
             * Slug of the repository. A repository slug is a URL-friendly version of a repository name, automatically generated by Bitbucket for use in the URL.
             * For example, if the repository name is 'test repo', in the URL it would become 'test-repo' as in https://mybitbucket.server/projects/TEST/repos/test-repo.
             */
            "repoSlug": string;
        };
        /**
         * Contents of the build template. Either a filename or build template must be provided.
         */
        "build"?: {
            /**
             * Artifacts produced by the build that should be uploaded upon successful completion of all build steps.
             */
            "artifacts"?: {
                /**
                 * A list of images to be pushed upon the successful completion of all build steps.
                 *
                 * The images will be pushed using the builder service account's credentials.
                 *
                 * The digests of the pushed images will be stored in the Build resource's results field.
                 *
                 * If any of the images fail to be pushed, the build is marked FAILURE.
                 */
                "images"?: Array<string>;
                /**
                 * A list of objects to be uploaded to Cloud Storage upon successful completion of all build steps.
                 *
                 * Files in the workspace matching specified paths globs will be uploaded to the
                 * Cloud Storage location using the builder service account's credentials.
                 *
                 * The location and generation of the uploaded objects will be stored in the Build resource's results field.
                 *
                 * If any objects fail to be pushed, the build is marked FAILURE.
                 */
                "objects"?: {
                    /**
                     * Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/".
                     *
                     * Files in the workspace matching any path pattern will be uploaded to Cloud Storage with
                     * this location as a prefix.
                     */
                    "location"?: string;
                    /**
                     * Path globs used to match files in the build's workspace.
                     */
                    "paths"?: Array<string>;
                    /**
                     * Output only. Stores timing information for pushing all artifact objects.
                     */
                    "timing"?: Array<{
                        /**
                         * End of time span.
                         *
                         * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to
                         * nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
                         */
                        "endTime"?: string;
                        /**
                         * Start of time span.
                         *
                         * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to
                         * nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
                         */
                        "startTime"?: string;
                    }>;
                };
            };
            /**
             * Secrets and secret environment variables.
             */
            "availableSecrets"?: {
                /**
                 * Pairs a secret environment variable with a SecretVersion in Secret Manager.
                 */
                "secretManager": Array<{
                    /**
                     * Environment variable name to associate with the secret. Secret environment
                     * variables must be unique across all of a build's secrets, and must be used
                     * by at least one build step.
                     */
                    "env": string;
                    "versionRef": {
                        /**
                         * Allowed value: The `name` field of a `SecretManagerSecretVersion` resource.
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
                         * Allowed value: The `name` field of a `SecretManagerSecretVersion` resource.
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
                         * Allowed value: The `name` field of a `SecretManagerSecretVersion` resource.
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
                         * Allowed value: The `name` field of a `SecretManagerSecretVersion` resource.
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
                         * Allowed value: The `name` field of a `SecretManagerSecretVersion` resource.
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
                         * Allowed value: The `name` field of a `SecretManagerSecretVersion` resource.
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
                         * Allowed value: The `name` field of a `SecretManagerSecretVersion` resource.
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
            /**
             * A list of images to be pushed upon the successful completion of all build steps.
             * The images are pushed using the builder service account's credentials.
             * The digests of the pushed images will be stored in the Build resource's results field.
             * If any of the images fail to be pushed, the build status is marked FAILURE.
             */
            "images"?: Array<string>;
            /**
             * Google Cloud Storage bucket where logs should be written. Logs file
             * names will be of the format ${logsBucket}/log-${build_id}.txt.
             */
            "logsBucketRef"?: {
                /**
                 * Allowed value: The `url` field of a `StorageBucket` resource.
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
                 * Allowed value: The `url` field of a `StorageBucket` resource.
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
                 * Allowed value: The `url` field of a `StorageBucket` resource.
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
                 * Allowed value: The `url` field of a `StorageBucket` resource.
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
                 * Allowed value: The `url` field of a `StorageBucket` resource.
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
                 * Allowed value: The `url` field of a `StorageBucket` resource.
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
                 * Allowed value: The `url` field of a `StorageBucket` resource.
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
             * Special options for this build.
             */
            "options"?: {
                /**
                 * Requested disk size for the VM that runs the build. Note that this is NOT "disk free";
                 * some of the space will be used by the operating system and build utilities.
                 * Also note that this is the minimum disk size that will be allocated for the build --
                 * the build may run with a larger disk than requested. At present, the maximum disk size
                 * is 1000GB; builds that request more than the maximum are rejected with an error.
                 */
                "diskSizeGb"?: number;
                /**
                 * Option to specify whether or not to apply bash style string operations to the substitutions.
                 *
                 * NOTE this is always enabled for triggered builds and cannot be overridden in the build configuration file.
                 */
                "dynamicSubstitutions"?: boolean;
                /**
                 * A list of global environment variable definitions that will exist for all build steps
                 * in this build. If a variable is defined in both globally and in a build step,
                 * the variable will use the build step value.
                 *
                 * The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".
                 */
                "env"?: Array<string>;
                /**
                 * Option to define build log streaming behavior to Google Cloud Storage. Possible values: ["STREAM_DEFAULT", "STREAM_ON", "STREAM_OFF"].
                 */
                "logStreamingOption"?: string;
                /**
                 * Option to specify the logging mode, which determines if and where build logs are stored. Possible values: ["LOGGING_UNSPECIFIED", "LEGACY", "GCS_ONLY", "STACKDRIVER_ONLY", "CLOUD_LOGGING_ONLY", "NONE"].
                 */
                "logging"?: string;
                /**
                 * Compute Engine machine type on which to run the build.
                 */
                "machineType"?: string;
                /**
                 * Requested verifiability options. Possible values: ["NOT_VERIFIED", "VERIFIED"].
                 */
                "requestedVerifyOption"?: string;
                /**
                 * A list of global environment variables, which are encrypted using a Cloud Key Management
                 * Service crypto key. These values must be specified in the build's Secret. These variables
                 * will be available to all build steps in this build.
                 */
                "secretEnv"?: Array<string>;
                /**
                 * Requested hash for SourceProvenance. Possible values: ["NONE", "SHA256", "MD5"].
                 */
                "sourceProvenanceHash"?: Array<string>;
                /**
                 * Option to specify behavior when there is an error in the substitution checks.
                 *
                 * NOTE this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden
                 * in the build configuration file. Possible values: ["MUST_MATCH", "ALLOW_LOOSE"].
                 */
                "substitutionOption"?: string;
                /**
                 * Global list of volumes to mount for ALL build steps
                 *
                 * Each volume is created as an empty volume prior to starting the build process.
                 * Upon completion of the build, volumes and their contents are discarded. Global
                 * volume names and paths cannot conflict with the volumes defined a build step.
                 *
                 * Using a global volume in a build with only one step is not valid as it is indicative
                 * of a build request with an incorrect configuration.
                 */
                "volumes"?: Array<{
                    /**
                     * Name of the volume to mount.
                     *
                     * Volume names must be unique per build step and must be valid names for Docker volumes.
                     * Each named volume must be used by at least two build steps.
                     */
                    "name"?: string;
                    /**
                     * Path at which to mount the volume.
                     *
                     * Paths must be absolute and cannot conflict with other volume paths on the same
                     * build step or with certain reserved volume paths.
                     */
                    "path"?: string;
                }>;
                /**
                 * Option to specify a WorkerPool for the build. Format projects/{project}/workerPools/{workerPool}
                 *
                 * This field is experimental.
                 */
                "workerPool"?: string;
            };
            /**
             * TTL in queue for this build. If provided and the build is enqueued longer than this value,
             * the build will expire and the build status will be EXPIRED.
             * The TTL starts ticking from createTime.
             * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
             */
            "queueTtl"?: string;
            /**
             * Secrets to decrypt using Cloud Key Management Service.
             */
            "secret"?: Array<{
                /**
                 * KMS crypto key to use to decrypt these envs.
                 */
                "kmsKeyRef": {
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
                 * Map of environment variable name to its encrypted value.
                 * Secret environment variables must be unique across all of a build's secrets,
                 * and must be used by at least one build step. Values can be at most 64 KB in size.
                 * There can be at most 100 secret values across all of a build's secrets.
                 */
                "secretEnv"?: {
                    [key: string]: string;
                };
            }>;
            /**
             * The location of the source files to build.
             *
             * One of 'storageSource' or 'repoSource' must be provided.
             */
            "source"?: {
                /**
                 * Location of the source in a Google Cloud Source Repository.
                 */
                "repoSource"?: {
                    /**
                     * Regex matching branches to build. Exactly one a of branch name, tag, or commit SHA must be provided.
                     * The syntax of the regular expressions accepted is the syntax accepted by RE2 and
                     * described at https://github.com/google/re2/wiki/Syntax.
                     */
                    "branchName"?: string;
                    /**
                     * Explicit commit SHA to build. Exactly one a of branch name, tag, or commit SHA must be provided.
                     */
                    "commitSha"?: string;
                    /**
                     * Directory, relative to the source root, in which to run the build.
                     * This must be a relative path. If a step's dir is specified and is an absolute path,
                     * this value is ignored for that step's execution.
                     */
                    "dir"?: string;
                    /**
                     * Only trigger a build if the revision regex does NOT match the revision regex.
                     */
                    "invertRegex"?: boolean;
                    /**
                     * ID of the project that owns the Cloud Source Repository.
                     * If omitted, the project ID requesting the build is assumed.
                     */
                    "projectId"?: string;
                    /**
                     * The desired Cloud Source Repository. If omitted, "default" is
                     * assumed.
                     */
                    "repoRef": {
                        /**
                         * Allowed value: The `name` field of a `SourceRepoRepository` resource.
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
                         * Allowed value: The `name` field of a `SourceRepoRepository` resource.
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
                         * Allowed value: The `name` field of a `SourceRepoRepository` resource.
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
                         * Allowed value: The `name` field of a `SourceRepoRepository` resource.
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
                         * Allowed value: The `name` field of a `SourceRepoRepository` resource.
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
                         * Allowed value: The `name` field of a `SourceRepoRepository` resource.
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
                         * Allowed value: The `name` field of a `SourceRepoRepository` resource.
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
                     * Substitutions to use in a triggered build. Should only be used with triggers.run.
                     */
                    "substitutions"?: {
                        [key: string]: string;
                    };
                    /**
                     * Regex matching tags to build. Exactly one a of branch name, tag, or commit SHA must be provided.
                     * The syntax of the regular expressions accepted is the syntax accepted by RE2 and
                     * described at https://github.com/google/re2/wiki/Syntax.
                     */
                    "tagName"?: string;
                };
                /**
                 * Location of the source in an archive file in Google Cloud Storage.
                 */
                "storageSource"?: {
                    /**
                     * Google Cloud Storage bucket containing the source.
                     */
                    "bucketRef": {
                        /**
                         * Allowed value: The `name` field of a `StorageBucket` resource.
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
                         * Allowed value: The `name` field of a `StorageBucket` resource.
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
                         * Allowed value: The `name` field of a `StorageBucket` resource.
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
                         * Allowed value: The `name` field of a `StorageBucket` resource.
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
                         * Allowed value: The `name` field of a `StorageBucket` resource.
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
                         * Allowed value: The `name` field of a `StorageBucket` resource.
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
                         * Allowed value: The `name` field of a `StorageBucket` resource.
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
                     * Google Cloud Storage generation for the object.
                     * If the generation is omitted, the latest generation will be used.
                     */
                    "generation"?: string;
                    /**
                     * Google Cloud Storage object containing the source.
                     * This object must be a gzipped archive file (.tar.gz) containing source to build.
                     */
                    "object": string;
                };
            };
            /**
             * The operations to be performed on the workspace.
             */
            "step": Array<{
                /**
                 * Allow this build step to fail without failing the entire build if and
                 * only if the exit code is one of the specified codes.
                 *
                 * If 'allowFailure' is also specified, this field will take precedence.
                 */
                "allowExitCodes"?: Array<number>;
                /**
                 * Allow this build step to fail without failing the entire build.
                 * If false, the entire build will fail if this step fails. Otherwise, the
                 * build will succeed, but this step will still have a failure status.
                 * Error information will be reported in the 'failureDetail' field.
                 *
                 * 'allowExitCodes' takes precedence over this field.
                 */
                "allowFailure"?: boolean;
                /**
                 * A list of arguments that will be presented to the step when it is started.
                 *
                 * If the image used to run the step's container has an entrypoint, the args
                 * are used as arguments to that entrypoint. If the image does not define an
                 * entrypoint, the first element in args is used as the entrypoint, and the
                 * remainder will be used as arguments.
                 */
                "args"?: Array<string>;
                /**
                 * Working directory to use when running this step's container.
                 *
                 * If this value is a relative path, it is relative to the build's working
                 * directory. If this value is absolute, it may be outside the build's working
                 * directory, in which case the contents of the path may not be persisted
                 * across build step executions, unless a 'volume' for that path is specified.
                 *
                 * If the build specifies a 'RepoSource' with 'dir' and a step with a
                 * 'dir',
                 * which specifies an absolute path, the 'RepoSource' 'dir' is ignored
                 * for the step's execution.
                 */
                "dir"?: string;
                /**
                 * Entrypoint to be used instead of the build step image's
                 * default entrypoint.
                 * If unset, the image's default entrypoint is used.
                 */
                "entrypoint"?: string;
                /**
                 * A list of environment variable definitions to be used when
                 * running a step.
                 *
                 * The elements are of the form "KEY=VALUE" for the environment variable
                 * "KEY" being given the value "VALUE".
                 */
                "env"?: Array<string>;
                /**
                 * Unique identifier for this build step, used in 'wait_for' to
                 * reference this build step as a dependency.
                 */
                "id"?: string;
                /**
                 * The name of the container image that will run this particular build step.
                 *
                 * If the image is available in the host's Docker daemon's cache, it will be
                 * run directly. If not, the host will attempt to pull the image first, using
                 * the builder service account's credentials if necessary.
                 *
                 * The Docker daemon's cache will already have the latest versions of all of
                 * the officially supported build steps (see https://github.com/GoogleCloudPlatform/cloud-builders
                 * for images and examples).
                 * The Docker daemon will also have cached many of the layers for some popular
                 * images, like "ubuntu", "debian", but they will be refreshed at the time
                 * you attempt to use them.
                 *
                 * If you built an image in a previous build step, it will be stored in the
                 * host's Docker daemon's cache and is available to use as the name for a
                 * later build step.
                 */
                "name": string;
                /**
                 * A shell script to be executed in the step.
                 * When script is provided, the user cannot specify the entrypoint or args.
                 */
                "script"?: string;
                /**
                 * A list of environment variables which are encrypted using
                 * a Cloud Key
                 * Management Service crypto key. These values must be specified in
                 * the build's 'Secret'.
                 */
                "secretEnv"?: Array<string>;
                /**
                 * Time limit for executing this build step. If not defined,
                 * the step has no
                 * time limit and will be allowed to continue to run until either it
                 * completes or the build itself times out.
                 */
                "timeout"?: string;
                /**
                 * Output only. Stores timing information for executing this
                 * build step.
                 */
                "timing"?: string;
                /**
                 * List of volumes to mount into the build step.
                 *
                 * Each volume is created as an empty volume prior to execution of the
                 * build step. Upon completion of the build, volumes and their contents
                 * are discarded.
                 *
                 * Using a named volume in only one step is not valid as it is
                 * indicative of a build request with an incorrect configuration.
                 */
                "volumes"?: Array<{
                    /**
                     * Name of the volume to mount.
                     *
                     * Volume names must be unique per build step and must be valid names for
                     * Docker volumes. Each named volume must be used by at least two build steps.
                     */
                    "name": string;
                    /**
                     * Path at which to mount the volume.
                     *
                     * Paths must be absolute and cannot conflict with other volume paths on
                     * the same build step or with certain reserved volume paths.
                     */
                    "path": string;
                }>;
                /**
                 * The ID(s) of the step(s) that this build step depends on.
                 *
                 * This build step will not start until all the build steps in 'wait_for'
                 * have completed successfully. If 'wait_for' is empty, this build step
                 * will start when all previous build steps in the 'Build.Steps' list
                 * have completed successfully.
                 */
                "waitFor"?: Array<string>;
            }>;
            /**
             * Substitutions data for Build resource.
             */
            "substitutions"?: {
                [key: string]: string;
            };
            /**
             * Tags for annotation of a Build. These are not docker tags.
             */
            "tags"?: Array<string>;
            /**
             * Amount of time that this build should be allowed to run, to second granularity.
             * If this amount of time elapses, work on the build will cease and the build status will be TIMEOUT.
             * This timeout must be equal to or greater than the sum of the timeouts for build steps within the build.
             * The expected format is the number of seconds followed by s.
             * Default time is ten minutes (600s).
             */
            "timeout"?: string;
        };
        /**
         * Human-readable description of the trigger.
         */
        "description"?: string;
        /**
         * Whether the trigger is disabled or not. If true, the trigger will never result in a build.
         */
        "disabled"?: boolean;
        /**
         * Path, from the source root, to a file whose contents is used for the template.
         * Either a filename or build template must be provided. Set this only when using trigger_template or github.
         * When using Pub/Sub, Webhook or Manual set the file name using git_file_source instead.
         */
        "filename"?: string;
        /**
         * A Common Expression Language string. Used only with Pub/Sub and Webhook.
         */
        "filter"?: string;
        /**
         * The file source describing the local or remote Build template.
         */
        "gitFileSource"?: {
            /**
             * Only `external` field is supported to configure the reference.
             *
             * The full resource name of the bitbucket server config. Format:
             * projects/{project}/locations/{location}/bitbucketServerConfigs/{id}.
             */
            "bitbucketServerConfigRef"?: {
                /**
                 * Allowed value: The `name` field of a `CloudBuildBitbucketServerConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildBitbucketServerConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildBitbucketServerConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildBitbucketServerConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildBitbucketServerConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildBitbucketServerConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildBitbucketServerConfig` resource.
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
             * Only `external` field is supported to configure the reference.
             *
             * The full resource name of the github enterprise config. Format:
             * projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}.
             */
            "githubEnterpriseConfigRef"?: {
                /**
                 * Allowed value: The `name` field of a `CloudBuildGithubEnterpriseConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildGithubEnterpriseConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildGithubEnterpriseConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildGithubEnterpriseConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildGithubEnterpriseConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildGithubEnterpriseConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildGithubEnterpriseConfig` resource.
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
             * The path of the file, with the repo root as the root of the path.
             */
            "path": string;
            /**
             * The type of the repo, since it may not be explicit from the repo field (e.g from a URL).
             * Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"].
             */
            "repoType": string;
            /**
             * Only `external` field is supported to configure the reference.
             *
             * The fully qualified resource name of the Repo API repository. The fully qualified resource name of the Repo API repository.
             * If unspecified, the repo from which the trigger invocation originated is assumed to be the repo from which to read the specified path.
             */
            "repositoryRef"?: {
                /**
                 * Allowed value: The `name` field of a `CloudBuildV2Repository` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildV2Repository` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildV2Repository` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildV2Repository` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildV2Repository` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildV2Repository` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildV2Repository` resource.
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
             * The branch, tag, arbitrary ref, or SHA version of the repo to use when resolving the
             * filename (optional). This field respects the same syntax/resolution as described here: https://git-scm.com/docs/gitrevisions
             * If unspecified, the revision from which the trigger invocation originated is assumed to be the revision from which to read the specified path.
             */
            "revision"?: string;
            /**
             * The URI of the repo (optional). If unspecified, the repo from which the trigger
             * invocation originated is assumed to be the repo from which to read the specified path.
             */
            "uri"?: string;
        };
        /**
         * Describes the configuration of a trigger that creates a build whenever a GitHub event is received.
         *
         * One of 'trigger_template', 'github', 'pubsub_config' or 'webhook_config' must be provided.
         */
        "github"?: {
            /**
             * Only `external` field is supported to configure the reference.
             *
             * The full resource name of the github enterprise config. Format:
             * projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}.
             */
            "enterpriseConfigResourceNameRef"?: {
                /**
                 * Allowed value: The `name` field of a `CloudBuildGithubEnterpriseConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildGithubEnterpriseConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildGithubEnterpriseConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildGithubEnterpriseConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildGithubEnterpriseConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildGithubEnterpriseConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildGithubEnterpriseConfig` resource.
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
             * Name of the repository. For example: The name for
             * https://github.com/googlecloudplatform/cloud-builders is "cloud-builders".
             */
            "name"?: string;
            /**
             * Owner of the repository. For example: The owner for
             * https://github.com/googlecloudplatform/cloud-builders is "googlecloudplatform".
             */
            "owner"?: string;
            /**
             * filter to match changes in pull requests. Specify only one of 'pull_request' or 'push'.
             */
            "pullRequest"?: {
                /**
                 * Regex of branches to match.
                 */
                "branch": string;
                /**
                 * Whether to block builds on a "/gcbrun" comment from a repository owner or collaborator. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"].
                 */
                "commentControl"?: string;
                /**
                 * If true, branches that do NOT match the git_ref will trigger a build.
                 */
                "invertRegex"?: boolean;
            };
            /**
             * filter to match changes in refs, like branches or tags. Specify only one of 'pull_request' or 'push'.
             */
            "push"?: {
                /**
                 * Regex of branches to match.  Specify only one of branch or tag.
                 */
                "branch"?: string;
                /**
                 * When true, only trigger a build if the revision regex does NOT match the git_ref regex.
                 */
                "invertRegex"?: boolean;
                /**
                 * Regex of tags to match.  Specify only one of branch or tag.
                 */
                "tag"?: string;
            };
        };
        /**
         * ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match
         * extended with support for '\*\*'.
         *
         * If ignoredFiles and changed files are both empty, then they are not
         * used to determine whether or not to trigger a build.
         *
         * If ignoredFiles is not empty, then we ignore any files that match any
         * of the ignored_file globs. If the change has no files that are outside
         * of the ignoredFiles globs, then we do not trigger a build.
         */
        "ignoredFiles"?: Array<string>;
        /**
         * Build logs will be sent back to GitHub as part of the checkrun
         * result.  Values can be INCLUDE_BUILD_LOGS_UNSPECIFIED or
         * INCLUDE_BUILD_LOGS_WITH_STATUS Possible values: ["INCLUDE_BUILD_LOGS_UNSPECIFIED", "INCLUDE_BUILD_LOGS_WITH_STATUS"].
         */
        "includeBuildLogs"?: string;
        /**
         * ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match
         * extended with support for '\*\*'.
         *
         * If any of the files altered in the commit pass the ignoredFiles filter
         * and includedFiles is empty, then as far as this filter is concerned, we
         * should trigger the build.
         *
         * If any of the files altered in the commit pass the ignoredFiles filter
         * and includedFiles is not empty, then we make sure that at least one of
         * those files matches a includedFiles glob. If not, then we do not trigger
         * a build.
         */
        "includedFiles"?: Array<string>;
        /**
         * Immutable. The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger.
         * If not specified, "global" is used.
         */
        "location"?: string;
        /**
         * PubsubConfig describes the configuration of a trigger that creates
         * a build whenever a Pub/Sub message is published.
         *
         * One of 'trigger_template', 'github', 'pubsub_config' 'webhook_config' or 'source_to_build' must be provided.
         */
        "pubsubConfig"?: {
            /**
             * Service account that will make the push request.
             */
            "serviceAccountRef"?: {
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
            /**
             * Potential issues with the underlying Pub/Sub subscription configuration.
             * Only populated on get requests.
             */
            "state"?: string;
            /**
             * Output only. Name of the subscription.
             */
            "subscription"?: string;
            /**
             * The name of the topic from which this subscription
             * is receiving messages.
             */
            "topicRef": {
                /**
                 * Allowed value: string of the format `projects/{{project}}/topics/{{value}}`, where {{value}} is the `name` field of a `PubSubTopic` resource.
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
                 * Allowed value: string of the format `projects/{{project}}/topics/{{value}}`, where {{value}} is the `name` field of a `PubSubTopic` resource.
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
                 * Allowed value: string of the format `projects/{{project}}/topics/{{value}}`, where {{value}} is the `name` field of a `PubSubTopic` resource.
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
                 * Allowed value: string of the format `projects/{{project}}/topics/{{value}}`, where {{value}} is the `name` field of a `PubSubTopic` resource.
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
                 * Allowed value: string of the format `projects/{{project}}/topics/{{value}}`, where {{value}} is the `name` field of a `PubSubTopic` resource.
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
                 * Allowed value: string of the format `projects/{{project}}/topics/{{value}}`, where {{value}} is the `name` field of a `PubSubTopic` resource.
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
                 * Allowed value: string of the format `projects/{{project}}/topics/{{value}}`, where {{value}} is the `name` field of a `PubSubTopic` resource.
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
         * The configuration of a trigger that creates a build whenever an event from Repo API is received.
         */
        "repositoryEventConfig"?: {
            /**
             * Contains filter properties for matching Pull Requests.
             */
            "pullRequest"?: {
                /**
                 * Regex of branches to match.
                 *
                 * The syntax of the regular expressions accepted is the syntax accepted by
                 * RE2 and described at https://github.com/google/re2/wiki/Syntax.
                 */
                "branch"?: string;
                /**
                 * Configure builds to run whether a repository owner or collaborator need to comment '/gcbrun'. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"].
                 */
                "commentControl"?: string;
                /**
                 * If true, branches that do NOT match the git_ref will trigger a build.
                 */
                "invertRegex"?: boolean;
            };
            /**
             * Contains filter properties for matching git pushes.
             */
            "push"?: {
                /**
                 * Regex of branches to match.
                 *
                 * The syntax of the regular expressions accepted is the syntax accepted by
                 * RE2 and described at https://github.com/google/re2/wiki/Syntax.
                 */
                "branch"?: string;
                /**
                 * If true, only trigger a build if the revision regex does NOT match the git_ref regex.
                 */
                "invertRegex"?: boolean;
                /**
                 * Regex of tags to match.
                 *
                 * The syntax of the regular expressions accepted is the syntax accepted by
                 * RE2 and described at https://github.com/google/re2/wiki/Syntax.
                 */
                "tag"?: string;
            };
            /**
             * The resource name of the Repo API resource.
             */
            "repository"?: string;
        };
        /**
         * The service account used for all user-controlled operations including
         * triggers.patch, triggers.run, builds.create, and builds.cancel.
         *
         * If no service account is set, then the standard Cloud Build service account
         * ([PROJECT_NUM]@system.gserviceaccount.com) will be used instead.
         *
         * When populating via the external field, the following format is supported:
         * projects/{PROJECT_ID}/serviceAccounts/{SERVICE_ACCOUNT_EMAIL}
         */
        "serviceAccountRef"?: {
            /**
             * Allowed value: string of the format `projects/{{project}}/serviceAccounts/{{value}}`, where {{value}} is the `email` field of an `IAMServiceAccount` resource.
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
             * Allowed value: string of the format `projects/{{project}}/serviceAccounts/{{value}}`, where {{value}} is the `email` field of an `IAMServiceAccount` resource.
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
             * Allowed value: string of the format `projects/{{project}}/serviceAccounts/{{value}}`, where {{value}} is the `email` field of an `IAMServiceAccount` resource.
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
             * Allowed value: string of the format `projects/{{project}}/serviceAccounts/{{value}}`, where {{value}} is the `email` field of an `IAMServiceAccount` resource.
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
             * Allowed value: string of the format `projects/{{project}}/serviceAccounts/{{value}}`, where {{value}} is the `email` field of an `IAMServiceAccount` resource.
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
             * Allowed value: string of the format `projects/{{project}}/serviceAccounts/{{value}}`, where {{value}} is the `email` field of an `IAMServiceAccount` resource.
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
             * Allowed value: string of the format `projects/{{project}}/serviceAccounts/{{value}}`, where {{value}} is the `email` field of an `IAMServiceAccount` resource.
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
         * The repo and ref of the repository from which to build.
         * This field is used only for those triggers that do not respond to SCM events.
         * Triggers that respond to such events build source at whatever commit caused the event.
         * This field is currently only used by Webhook, Pub/Sub, Manual, and Cron triggers.
         *
         * One of 'trigger_template', 'github', 'pubsub_config' 'webhook_config' or 'source_to_build' must be provided.
         */
        "sourceToBuild"?: {
            /**
             * Only `external` field is supported to configure the reference.
             *
             * The full resource name of the bitbucket server config. Format:
             * projects/{project}/locations/{location}/bitbucketServerConfigs/{id}.
             */
            "bitbucketServerConfigRef"?: {
                /**
                 * Allowed value: The `name` field of a `CloudBuildBitbucketServerConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildBitbucketServerConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildBitbucketServerConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildBitbucketServerConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildBitbucketServerConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildBitbucketServerConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildBitbucketServerConfig` resource.
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
             * Only `external` field is supported to configure the reference.
             *
             * The full resource name of the github enterprise config. Format:
             * projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}.
             */
            "githubEnterpriseConfigRef"?: {
                /**
                 * Allowed value: The `name` field of a `CloudBuildGithubEnterpriseConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildGithubEnterpriseConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildGithubEnterpriseConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildGithubEnterpriseConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildGithubEnterpriseConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildGithubEnterpriseConfig` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildGithubEnterpriseConfig` resource.
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
             * The branch or tag to use. Must start with "refs/" (required).
             */
            "ref": string;
            /**
             * The type of the repo, since it may not be explicit from the repo field (e.g from a URL).
             * Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"].
             */
            "repoType": string;
            /**
             * Only `external` field is supported to configure the reference.
             *
             * The qualified resource name of the Repo API repository.
             * Either uri or repository can be specified and is required.
             */
            "repositoryRef"?: {
                /**
                 * Allowed value: The `name` field of a `CloudBuildV2Repository` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildV2Repository` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildV2Repository` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildV2Repository` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildV2Repository` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildV2Repository` resource.
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
                 * Allowed value: The `name` field of a `CloudBuildV2Repository` resource.
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
             * The URI of the repo.
             */
            "uri"?: string;
        };
        /**
         * Substitutions data for Build resource.
         */
        "substitutions"?: {
            [key: string]: string;
        };
        /**
         * Tags for annotation of a BuildTrigger.
         */
        "tags"?: Array<string>;
        /**
         * Template describing the types of source changes to trigger a build.
         *
         * Branch and tag names in trigger templates are interpreted as regular
         * expressions. Any branch or tag change that matches that regular
         * expression will trigger a build.
         *
         * One of 'trigger_template', 'github', 'pubsub_config', 'webhook_config' or 'source_to_build' must be provided.
         */
        "triggerTemplate"?: {
            /**
             * Name of the branch to build. Exactly one a of branch name, tag, or commit SHA must be provided.
             * This field is a regular expression.
             */
            "branchName"?: string;
            /**
             * Explicit commit SHA to build. Exactly one of a branch name, tag, or commit SHA must be provided.
             */
            "commitSha"?: string;
            /**
             * Directory, relative to the source root, in which to run the build.
             *
             * This must be a relative path. If a step's dir is specified and
             * is an absolute path, this value is ignored for that step's
             * execution.
             */
            "dir"?: string;
            /**
             * Only trigger a build if the revision regex does NOT match the revision regex.
             */
            "invertRegex"?: boolean;
            /**
             * The Cloud Source Repository to build. If omitted, the repo with
             * name "default" is assumed.
             */
            "repoRef"?: {
                /**
                 * Allowed value: The `name` field of a `SourceRepoRepository` resource.
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
                 * Allowed value: The `name` field of a `SourceRepoRepository` resource.
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
                 * Allowed value: The `name` field of a `SourceRepoRepository` resource.
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
                 * Allowed value: The `name` field of a `SourceRepoRepository` resource.
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
                 * Allowed value: The `name` field of a `SourceRepoRepository` resource.
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
                 * Allowed value: The `name` field of a `SourceRepoRepository` resource.
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
                 * Allowed value: The `name` field of a `SourceRepoRepository` resource.
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
             * Name of the tag to build. Exactly one of a branch name, tag, or commit SHA must be provided.
             * This field is a regular expression.
             */
            "tagName"?: string;
        };
        /**
         * WebhookConfig describes the configuration of a trigger that creates
         * a build whenever a webhook is sent to a trigger's webhook URL.
         *
         * One of 'trigger_template', 'github', 'pubsub_config' 'webhook_config' or 'source_to_build' must be provided.
         */
        "webhookConfig"?: {
            /**
             * The secret required
             */
            "secretRef": {
                /**
                 * Allowed value: The `name` field of a `SecretManagerSecretVersion` resource.
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
                 * Allowed value: The `name` field of a `SecretManagerSecretVersion` resource.
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
                 * Allowed value: The `name` field of a `SecretManagerSecretVersion` resource.
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
                 * Allowed value: The `name` field of a `SecretManagerSecretVersion` resource.
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
                 * Allowed value: The `name` field of a `SecretManagerSecretVersion` resource.
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
                 * Allowed value: The `name` field of a `SecretManagerSecretVersion` resource.
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
                 * Allowed value: The `name` field of a `SecretManagerSecretVersion` resource.
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
             * Potential issues with the underlying Pub/Sub subscription configuration.
             * Only populated on get requests.
             */
            "state"?: string;
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
         * Time when the trigger was created.
         */
        "createTime"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        /**
         * The unique identifier for the trigger.
         */
        "triggerId"?: string;
    };
}
export declare class CloudBuildTrigger extends Model<ICloudBuildTrigger> implements ICloudBuildTrigger {
    "apiVersion": ICloudBuildTrigger["apiVersion"];
    "kind": ICloudBuildTrigger["kind"];
    "metadata"?: ICloudBuildTrigger["metadata"];
    "spec"?: ICloudBuildTrigger["spec"];
    "status"?: ICloudBuildTrigger["status"];
    static apiVersion: ICloudBuildTrigger["apiVersion"];
    static kind: ICloudBuildTrigger["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ICloudBuildTrigger>;
    constructor(data?: ModelData<ICloudBuildTrigger>);
}
