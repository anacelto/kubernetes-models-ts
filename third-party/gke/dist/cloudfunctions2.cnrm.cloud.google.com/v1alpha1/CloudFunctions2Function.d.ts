import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface ICloudFunctions2Function {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "cloudfunctions2.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "CloudFunctions2Function";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Describes the Build step of the function that builds a container
         * from the given source.
         */
        "buildConfig"?: {
            /**
             * The Cloud Build name of the latest successful
             * deployment of the function.
             */
            "build"?: string;
            /**
             * User managed repository created in Artifact Registry optionally with a customer managed encryption key.
             */
            "dockerRepository"?: string;
            /**
             * The name of the function (as defined in source code) that will be executed.
             * Defaults to the resource name suffix, if not specified. For backward
             * compatibility, if function with given name is not found, then the system
             * will try to use function named "function". For Node.js this is name of a
             * function exported by the module specified in source_location.
             */
            "entryPoint"?: string;
            /**
             * User-provided build-time environment variables for the function.
             */
            "environmentVariables"?: {
                [key: string]: string;
            };
            /**
             * The runtime in which to run the function. Required when deploying a new
             * function, optional when updating an existing function.
             */
            "runtime"?: string;
            /**
             * The location of the function source code.
             */
            "source"?: {
                /**
                 * If provided, get the source from this location in a Cloud Source Repository.
                 */
                "repoSource"?: {
                    /**
                     * Regex matching branches to build.
                     */
                    "branchName"?: string;
                    /**
                     * Regex matching tags to build.
                     */
                    "commitSha"?: string;
                    /**
                     * Directory, relative to the source root, in which to run the build.
                     */
                    "dir"?: string;
                    /**
                     * Only trigger a build if the revision regex does
                     * NOT match the revision regex.
                     */
                    "invertRegex"?: boolean;
                    /**
                     * Immutable. ID of the project that owns the Cloud Source Repository. If omitted, the
                     * project ID requesting the build is assumed.
                     */
                    "projectId"?: string;
                    /**
                     * Name of the Cloud Source Repository.
                     */
                    "repoName"?: string;
                    /**
                     * Regex matching tags to build.
                     */
                    "tagName"?: string;
                };
                /**
                 * If provided, get the source from this location in Google Cloud Storage.
                 */
                "storageSource"?: {
                    /**
                     * Google Cloud Storage bucket containing the source.
                     */
                    "bucket"?: string;
                    /**
                     * Google Cloud Storage generation for the object. If the generation
                     * is omitted, the latest generation will be used.
                     */
                    "generation"?: number;
                    /**
                     * Google Cloud Storage object containing the source.
                     */
                    "object"?: string;
                };
            };
            /**
             * Name of the Cloud Build Custom Worker Pool that should be used to build the function.
             */
            "workerPool"?: string;
        };
        /**
         * User-provided description of a function.
         */
        "description"?: string;
        /**
         * An Eventarc trigger managed by Google Cloud Functions that fires events in
         * response to a condition in another service.
         */
        "eventTrigger"?: {
            /**
             * Criteria used to filter events.
             */
            "eventFilters"?: Array<{
                /**
                 * 'Required. The name of a CloudEvents attribute.
                 * Currently, only a subset of attributes are supported for filtering. Use the 'gcloud eventarc providers describe' command to learn more about events and their attributes.
                 * Do not filter for the 'type' attribute here, as this is already achieved by the resource's 'event_type' attribute.
                 */
                "attribute": string;
                /**
                 * Optional. The operator used for matching the events with the value of
                 * the filter. If not specified, only events that have an exact key-value
                 * pair specified in the filter are matched.
                 * The only allowed value is 'match-path-pattern'.
                 * [See documentation on path patterns here](https://cloud.google.com/eventarc/docs/path-patterns)'.
                 */
                "operator"?: string;
                /**
                 * Required. The value for the attribute.
                 * If the operator field is set as 'match-path-pattern', this value can be a path pattern instead of an exact value.
                 */
                "value": string;
            }>;
            /**
             * Required. The type of event to observe.
             */
            "eventType"?: string;
            /**
             * The name of a Pub/Sub topic in the same project that will be used
             * as the transport topic for the event delivery.
             */
            "pubsubTopic"?: string;
            /**
             * Describes the retry policy in case of function's execution failure.
             * Retried execution is charged as any other execution. Possible values: ["RETRY_POLICY_UNSPECIFIED", "RETRY_POLICY_DO_NOT_RETRY", "RETRY_POLICY_RETRY"].
             */
            "retryPolicy"?: string;
            /**
             * The email of the service account for this function.
             */
            "serviceAccountEmail"?: string;
            /**
             * Output only. The resource name of the Eventarc trigger.
             */
            "trigger"?: string;
            /**
             * The region that the trigger will be in. The trigger will only receive
             * events originating in this region. It can be the same
             * region as the function, a different region or multi-region, or the global
             * region. If not provided, defaults to the same region as the function.
             */
            "triggerRegion"?: string;
        };
        /**
         * Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources.
         * It must match the pattern projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}.
         */
        "kmsKeyName"?: string;
        /**
         * Immutable. The location of this cloud function.
         */
        "location": string;
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
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
        /**
         * Describes the Service being deployed.
         */
        "serviceConfig"?: {
            /**
             * Whether 100% of traffic is routed to the latest revision. Defaults to true.
             */
            "allTrafficOnLatestRevision"?: boolean;
            /**
             * The number of CPUs used in a single container instance. Default value is calculated from available memory.
             */
            "availableCpu"?: string;
            /**
             * The amount of memory available for a function.
             * Defaults to 256M. Supported units are k, M, G, Mi, Gi. If no unit is
             * supplied the value is interpreted as bytes.
             */
            "availableMemory"?: string;
            /**
             * Environment variables that shall be available during function execution.
             */
            "environmentVariables"?: {
                [key: string]: string;
            };
            /**
             * URIs of the Service deployed.
             */
            "gcfUri"?: string;
            /**
             * Available ingress settings. Defaults to "ALLOW_ALL" if unspecified. Default value: "ALLOW_ALL" Possible values: ["ALLOW_ALL", "ALLOW_INTERNAL_ONLY", "ALLOW_INTERNAL_AND_GCLB"].
             */
            "ingressSettings"?: string;
            /**
             * The limit on the maximum number of function instances that may coexist at a
             * given time.
             */
            "maxInstanceCount"?: number;
            /**
             * Sets the maximum number of concurrent requests that each instance can receive. Defaults to 1.
             */
            "maxInstanceRequestConcurrency"?: number;
            /**
             * The limit on the minimum number of function instances that may coexist at a
             * given time.
             */
            "minInstanceCount"?: number;
            /**
             * Secret environment variables configuration.
             */
            "secretEnvironmentVariables"?: Array<{
                /**
                 * Name of the environment variable.
                 */
                "key": string;
                /**
                 * Project identifier (preferrably project number but can also be the project ID) of the project that contains the secret. If not set, it will be populated with the function's project assuming that the secret exists in the same project as of the function.
                 */
                "projectId": string;
                /**
                 * Name of the secret in secret manager (not the full resource name).
                 */
                "secret": string;
                /**
                 * Version of the secret (version number or the string 'latest'). It is recommended to use a numeric version for secret environment variables as any updates to the secret value is not reflected until new instances start.
                 */
                "version": string;
            }>;
            /**
             * Secret volumes configuration.
             */
            "secretVolumes"?: Array<{
                /**
                 * The path within the container to mount the secret volume. For example, setting the mountPath as /etc/secrets would mount the secret value files under the /etc/secrets directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount path: /etc/secrets.
                 */
                "mountPath": string;
                /**
                 * Project identifier (preferrably project number but can also be the project ID) of the project that contains the secret. If not set, it will be populated with the function's project assuming that the secret exists in the same project as of the function.
                 */
                "projectId": string;
                /**
                 * Name of the secret in secret manager (not the full resource name).
                 */
                "secret": string;
                /**
                 * List of secret versions to mount for this secret. If empty, the latest version of the secret will be made available in a file named after the secret under the mount point.'.
                 */
                "versions"?: Array<{
                    /**
                     * Relative path of the file under the mount path where the secret value for this version will be fetched and made available. For example, setting the mountPath as '/etc/secrets' and path as secret_foo would mount the secret value file at /etc/secrets/secret_foo.
                     */
                    "path": string;
                    /**
                     * Version of the secret (version number or the string 'latest'). It is preferable to use latest version with secret volumes as secret value changes are reflected immediately.
                     */
                    "version": string;
                }>;
            }>;
            /**
             * Name of the service associated with a Function.
             */
            "service"?: string;
            /**
             * The email of the service account for this function.
             */
            "serviceAccountEmail"?: string;
            /**
             * The function execution timeout. Execution is considered failed and
             * can be terminated if the function is not completed at the end of the
             * timeout period. Defaults to 60 seconds.
             */
            "timeoutSeconds"?: number;
            /**
             * URI of the Service deployed.
             */
            "uri"?: string;
            /**
             * The Serverless VPC Access connector that this cloud function can connect to.
             */
            "vpcConnector"?: string;
            /**
             * Available egress settings. Possible values: ["VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED", "PRIVATE_RANGES_ONLY", "ALL_TRAFFIC"].
             */
            "vpcConnectorEgressSettings"?: string;
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
         * The environment the function is hosted on.
         */
        "environment"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        /**
         * Describes the current state of the function.
         */
        "state"?: string;
        /**
         * The last update timestamp of a Cloud Function.
         */
        "updateTime"?: string;
        /**
         * Output only. The deployed url for the function.
         */
        "url"?: string;
    };
}
export declare class CloudFunctions2Function extends Model<ICloudFunctions2Function> implements ICloudFunctions2Function {
    "apiVersion": ICloudFunctions2Function["apiVersion"];
    "kind": ICloudFunctions2Function["kind"];
    "metadata"?: ICloudFunctions2Function["metadata"];
    "spec": ICloudFunctions2Function["spec"];
    "status"?: ICloudFunctions2Function["status"];
    static apiVersion: ICloudFunctions2Function["apiVersion"];
    static kind: ICloudFunctions2Function["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ICloudFunctions2Function>;
    constructor(data?: ModelData<ICloudFunctions2Function>);
}
