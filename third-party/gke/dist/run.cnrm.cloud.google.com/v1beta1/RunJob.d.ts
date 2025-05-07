import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IRunJob {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "run.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "RunJob";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.
         *
         * Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected on new resources.
         * All system annotations in v1 now have a corresponding field in v2 Job.
         *
         * This field follows Kubernetes annotations' namespacing, limits, and rules.
         */
        "annotations"?: {
            [key: string]: string;
        };
        /**
         * Settings for the Binary Authorization feature.
         */
        "binaryAuthorization"?: {
            /**
             * If present, indicates to use Breakglass using this justification. If useDefault is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass.
             */
            "breakglassJustification"?: string;
            /**
             * If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled.
             */
            "useDefault"?: boolean;
        };
        /**
         * Arbitrary identifier for the API client.
         */
        "client"?: string;
        /**
         * Arbitrary version identifier for the API client.
         */
        "clientVersion"?: string;
        /**
         * The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA.
         * If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.
         *
         * For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"].
         */
        "launchStage"?: string;
        /**
         * Immutable. The location of the cloud run job.
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
         * The template used to create executions for this Job.
         */
        "template": {
            /**
             * Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.
             *
             * Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
             * All system annotations in v1 now have a corresponding field in v2 ExecutionTemplate.
             *
             * This field follows Kubernetes annotations' namespacing, limits, and rules.
             */
            "annotations"?: {
                [key: string]: string;
            };
            /**
             * Specifies the maximum desired number of tasks the execution should run at given time. Must be <= taskCount. When the job is run, if this field is 0 or unset, the maximum possible value will be used for that execution. The actual number of tasks running in steady state will be less than this number when there are fewer tasks waiting to be completed remaining, i.e. when the work left to do is less than max parallelism.
             */
            "parallelism"?: number;
            /**
             * Specifies the desired number of tasks the execution should run. Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/.
             */
            "taskCount"?: number;
            /**
             * Describes the task(s) that will be created when executing an execution.
             */
            "template": {
                /**
                 * Holds the single container that defines the unit of execution for this task.
                 */
                "containers"?: Array<{
                    /**
                     * Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell.
                     */
                    "args"?: Array<string>;
                    /**
                     * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell.
                     */
                    "command"?: Array<string>;
                    /**
                     * List of environment variables to set in the container.
                     */
                    "env"?: Array<{
                        /**
                         * Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters.
                         */
                        "name": string;
                        /**
                         * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "", and the maximum length is 32768 bytes.
                         */
                        "value"?: string;
                        /**
                         * Source for the environment variable's value.
                         */
                        "valueSource"?: {
                            /**
                             * Selects a secret and a specific version from Cloud Secret Manager.
                             */
                            "secretKeyRef"?: {
                                /**
                                 * The name of the secret in Cloud Secret Manager. Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.
                                 */
                                "secretRef": {
                                    /**
                                     * Allowed value: The `name` field of a `SecretManagerSecret` resource.
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
                                     * Allowed value: The `name` field of a `SecretManagerSecret` resource.
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
                                     * Allowed value: The `name` field of a `SecretManagerSecret` resource.
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
                                     * Allowed value: The `name` field of a `SecretManagerSecret` resource.
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
                                     * Allowed value: The `name` field of a `SecretManagerSecret` resource.
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
                                     * Allowed value: The `name` field of a `SecretManagerSecret` resource.
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
                                     * Allowed value: The `name` field of a `SecretManagerSecret` resource.
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
                                 * The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version.
                                 */
                                "versionRef": {
                                    /**
                                     * Allowed value: The `version` field of a `SecretManagerSecretVersion` resource.
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
                                     * Allowed value: The `version` field of a `SecretManagerSecretVersion` resource.
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
                                     * Allowed value: The `version` field of a `SecretManagerSecretVersion` resource.
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
                                     * Allowed value: The `version` field of a `SecretManagerSecretVersion` resource.
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
                                     * Allowed value: The `version` field of a `SecretManagerSecretVersion` resource.
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
                                     * Allowed value: The `version` field of a `SecretManagerSecretVersion` resource.
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
                                     * Allowed value: The `version` field of a `SecretManagerSecretVersion` resource.
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
                    }>;
                    /**
                     * URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images.
                     */
                    "image": string;
                    /**
                     * DEPRECATED. `liveness_probe` is deprecated. This field is not supported by the Cloud Run API. Periodic probe of container liveness. Container will be restarted if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                     * This field is not supported in Cloud Run Job currently.
                     */
                    "livenessProbe"?: {
                        /**
                         * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
                         */
                        "failureThreshold"?: number;
                        /**
                         * HTTPGet specifies the http request to perform. Exactly one of HTTPGet or TCPSocket must be specified.
                         */
                        "httpGet"?: {
                            /**
                             * Custom headers to set in the request. HTTP allows repeated headers.
                             */
                            "httpHeaders"?: Array<{
                                /**
                                 * The header field name.
                                 */
                                "name": string;
                                /**
                                 * The header field value.
                                 */
                                "value"?: string;
                            }>;
                            /**
                             * Path to access on the HTTP server. Defaults to '/'.
                             */
                            "path"?: string;
                        };
                        /**
                         * Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes.
                         */
                        "initialDelaySeconds"?: number;
                        /**
                         * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds.
                         */
                        "periodSeconds"?: number;
                        /**
                         * TCPSocket specifies an action involving a TCP port. Exactly one of HTTPGet or TCPSocket must be specified.
                         */
                        "tcpSocket"?: {
                            /**
                             * Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to 8080.
                             */
                            "port"?: number;
                        };
                        /**
                         * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes.
                         */
                        "timeoutSeconds"?: number;
                    };
                    /**
                     * Name of the container specified as a DNS_LABEL.
                     */
                    "name"?: string;
                    /**
                     * List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible.
                     *
                     * If omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on.
                     */
                    "ports"?: Array<{
                        /**
                         * Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.
                         */
                        "containerPort"?: number;
                        /**
                         * If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".
                         */
                        "name"?: string;
                    }>;
                    /**
                     * Compute Resource requirements by this container. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources.
                     */
                    "resources"?: {
                        /**
                         * Only memory and CPU are supported. Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go.
                         */
                        "limits"?: {
                            [key: string]: string;
                        };
                    };
                    /**
                     * DEPRECATED. `startup_probe` is deprecated. This field is not supported by the Cloud Run API. Startup probe of application within the container. All other probes are disabled if a startup probe is provided, until it succeeds. Container will not be added to service endpoints if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                     * This field is not supported in Cloud Run Job currently.
                     */
                    "startupProbe"?: {
                        /**
                         * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
                         */
                        "failureThreshold"?: number;
                        /**
                         * HTTPGet specifies the http request to perform. Exactly one of HTTPGet or TCPSocket must be specified.
                         */
                        "httpGet"?: {
                            /**
                             * Custom headers to set in the request. HTTP allows repeated headers.
                             */
                            "httpHeaders"?: Array<{
                                /**
                                 * The header field name.
                                 */
                                "name": string;
                                /**
                                 * The header field value.
                                 */
                                "value"?: string;
                            }>;
                            /**
                             * Path to access on the HTTP server. Defaults to '/'.
                             */
                            "path"?: string;
                        };
                        /**
                         * Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes.
                         */
                        "initialDelaySeconds"?: number;
                        /**
                         * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds.
                         */
                        "periodSeconds"?: number;
                        /**
                         * TCPSocket specifies an action involving a TCP port. Exactly one of HTTPGet or TCPSocket must be specified.
                         */
                        "tcpSocket"?: {
                            /**
                             * Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to 8080.
                             */
                            "port"?: number;
                        };
                        /**
                         * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes.
                         */
                        "timeoutSeconds"?: number;
                    };
                    /**
                     * Volume to mount into the container's filesystem.
                     */
                    "volumeMounts"?: Array<{
                        /**
                         * Path within the container at which the volume should be mounted. Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be /cloudsql. All instances defined in the Volume will be available as /cloudsql/[instance]. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run.
                         */
                        "mountPath": string;
                        /**
                         * This must match the Name of a Volume.
                         */
                        "name": string;
                    }>;
                    /**
                     * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image.
                     */
                    "workingDir"?: string;
                }>;
                /**
                 * A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek
                 */
                "encryptionKeyRef"?: {
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
                 * The execution environment being used to host this Task. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"].
                 */
                "executionEnvironment"?: string;
                /**
                 * Number of retries allowed per Task, before marking this Task failed.
                 */
                "maxRetries"?: number;
                /**
                 * Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account.
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
                 * Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout.
                 *
                 * A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
                 */
                "timeout"?: string;
                /**
                 * A list of Volumes to make available to containers.
                 */
                "volumes"?: Array<{
                    /**
                     * Ephemeral storage used as a shared volume.
                     */
                    "emptyDir"?: {
                        /**
                         * The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY"].
                         */
                        "medium"?: string;
                        /**
                         * Limit on the storage usable by this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. This field's values are of the 'Quantity' k8s type: https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir.
                         */
                        "sizeLimit"?: string;
                    };
                    /**
                     * Volume's name.
                     */
                    "name": string;
                    /**
                     * Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret.
                     */
                    "secret"?: {
                        /**
                         * Integer representation of mode bits to use on created files by default. Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.
                         */
                        "defaultMode"?: number;
                        /**
                         * If unspecified, the volume will expose a file whose name is the secret, relative to VolumeMount.mount_path. If specified, the key will be used as the version to fetch from Cloud Secret Manager and the path will be the name of the file exposed in the volume. When items are defined, they must specify a path and a version.
                         */
                        "items"?: Array<{
                            /**
                             * Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). If 0 or not set, the Volume's default mode will be used.
                             */
                            "mode"?: number;
                            /**
                             * The relative path of the secret in the container.
                             */
                            "path": string;
                            /**
                             * The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version
                             */
                            "versionRef": {
                                /**
                                 * Allowed value: The `version` field of a `SecretManagerSecretVersion` resource.
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
                                 * Allowed value: The `version` field of a `SecretManagerSecretVersion` resource.
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
                                 * Allowed value: The `version` field of a `SecretManagerSecretVersion` resource.
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
                                 * Allowed value: The `version` field of a `SecretManagerSecretVersion` resource.
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
                                 * Allowed value: The `version` field of a `SecretManagerSecretVersion` resource.
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
                                 * Allowed value: The `version` field of a `SecretManagerSecretVersion` resource.
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
                                 * Allowed value: The `version` field of a `SecretManagerSecretVersion` resource.
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
                        /**
                         * The name of the secret in Cloud Secret Manager. Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.
                         */
                        "secretRef": {
                            /**
                             * Allowed value: The `name` field of a `SecretManagerSecret` resource.
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
                             * Allowed value: The `name` field of a `SecretManagerSecret` resource.
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
                             * Allowed value: The `name` field of a `SecretManagerSecret` resource.
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
                             * Allowed value: The `name` field of a `SecretManagerSecret` resource.
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
                             * Allowed value: The `name` field of a `SecretManagerSecret` resource.
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
                             * Allowed value: The `name` field of a `SecretManagerSecret` resource.
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
                             * Allowed value: The `name` field of a `SecretManagerSecret` resource.
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
                }>;
                /**
                 * VPC Access configuration to use for this Task. For more information, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.
                 */
                "vpcAccess"?: {
                    /**
                     * Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"].
                     */
                    "egress"?: string;
                    /**
                     * Direct VPC egress settings. Currently only single network interface is supported.
                     */
                    "networkInterfaces"?: Array<{
                        /**
                         * The VPC network that the Cloud Run resource will be able to send traffic to. At least one of network or subnetwork must be specified. If both
                         * network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If network is not specified, it will be
                         * looked up from the subnetwork.
                         */
                        "networkRef"?: {
                            /**
                             * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                             * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                             * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                             * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                             * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                             * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                             * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
                         * The VPC subnetwork that the Cloud Run resource will get IPs from. At least one of network or subnetwork must be specified. If both
                         * network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If subnetwork is not specified, the
                         * subnetwork with the same name with the network will be used.
                         */
                        "subnetworkRef"?: {
                            /**
                             * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                             * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                             * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                             * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                             * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                             * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                             * Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
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
                         * Network tags applied to this Cloud Run job.
                         */
                        "tags"?: Array<string>;
                    }>;
                };
            };
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
         * The creation time.
         */
        "createTime"?: string;
        /**
         * Email address of the authenticated creator.
         */
        "creator"?: string;
        /**
         * The deletion time.
         */
        "deleteTime"?: string;
        /**
         * A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
         */
        "etag"?: string;
        /**
         * Number of executions created for this job.
         */
        "executionCount"?: number;
        /**
         * For a deleted resource, the time after which it will be permamently deleted.
         */
        "expireTime"?: string;
        /**
         * Email address of the last authenticated modifier.
         */
        "lastModifier"?: string;
        /**
         * Name of the last created execution.
         */
        "latestCreatedExecution"?: Array<{
            /**
             * Completion timestamp of the execution.
             *
             * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
             */
            "completionTime"?: string;
            /**
             * Creation timestamp of the execution.
             *
             * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
             */
            "createTime"?: string;
            /**
             * Name of the execution.
             */
            "name"?: string;
        }>;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        /**
         * Returns true if the Job is currently being acted upon by the system to bring it into the desired state.
         *
         * When a new Job is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the Job to the desired state. This process is called reconciliation. While reconciliation is in process, observedGeneration and latest_succeeded_execution, will have transient values that might mismatch the intended state: Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the state matches the Job, or there was an error, and reconciliation failed. This state can be found in terminalCondition.state.
         *
         * If reconciliation succeeded, the following fields will match: observedGeneration and generation, latest_succeeded_execution and latestCreatedExecution.
         *
         * If reconciliation failed, observedGeneration and latest_succeeded_execution will have the state of the last succeeded execution or empty for newly created Job. Additional information on the failure can be found in terminalCondition and conditions.
         */
        "reconciling"?: boolean;
        /**
         * The Condition of this Job, containing its readiness status, and detailed error information in case it did not reach the desired state.
         */
        "terminalCondition"?: Array<{
            /**
             * A reason for the execution condition.
             */
            "executionReason"?: string;
            /**
             * Last time the condition transitioned from one status to another.
             *
             * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
             */
            "lastTransitionTime"?: string;
            /**
             * Human readable message indicating details about the current status.
             */
            "message"?: string;
            /**
             * A common (service-level) reason for this condition.
             */
            "reason"?: string;
            /**
             * A reason for the revision condition.
             */
            "revisionReason"?: string;
            /**
             * How to interpret failures of this condition, one of Error, Warning, Info.
             */
            "severity"?: string;
            /**
             * State of the condition.
             */
            "state"?: string;
            /**
             * type is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/main/docs/spec/errors.md#error-conditions-and-reporting Types common to all resources include: \* "Ready": True when the Resource is ready.
             */
            "type"?: string;
        }>;
        /**
         * Server assigned unique identifier for the Execution. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.
         */
        "uid"?: string;
        /**
         * The last-modified time.
         */
        "updateTime"?: string;
    };
}
export declare class RunJob extends Model<IRunJob> implements IRunJob {
    "apiVersion": IRunJob["apiVersion"];
    "kind": IRunJob["kind"];
    "metadata"?: IRunJob["metadata"];
    "spec": IRunJob["spec"];
    "status"?: IRunJob["status"];
    static apiVersion: IRunJob["apiVersion"];
    static kind: IRunJob["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IRunJob>;
    constructor(data?: ModelData<IRunJob>);
}
