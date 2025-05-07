import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * Configuration represents the "floating HEAD" of a linear history of Revisions. Users create new Revisions by updating the Configuration's spec. The "latest created" revision's name is available under status, as is the "latest ready" revision's name. See also: https://github.com/knative/serving/blob/main/docs/spec/overview.md#configuration
 */
export interface IConfiguration {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "serving.knative.dev/v1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "Configuration";
    "metadata"?: IObjectMeta;
    /**
     * ConfigurationSpec holds the desired state of the Configuration (from the client).
     */
    "spec"?: {
        /**
         * Template holds the latest specification for the Revision to be stamped out.
         */
        "template"?: {
            "metadata"?: {
                "annotations"?: {
                    [key: string]: string;
                };
                "finalizers"?: Array<string>;
                "labels"?: {
                    [key: string]: string;
                };
                "name"?: string;
                "namespace"?: string;
            };
            /**
             * RevisionSpec holds the desired state of the Revision (from the client).
             */
            "spec"?: {
                /**
                 * This is accessible behind a feature flag - kubernetes.podspec-affinity
                 */
                "affinity"?: {};
                /**
                 * AutomountServiceAccountToken indicates whether a service account token should be automatically mounted.
                 */
                "automountServiceAccountToken"?: boolean;
                /**
                 * ContainerConcurrency specifies the maximum allowed in-flight (concurrent) requests per container of the Revision.  Defaults to `0` which means concurrency to the application is not limited, and the system decides the target concurrency for the autoscaler.
                 */
                "containerConcurrency"?: number;
                /**
                 * List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated.
                 */
                "containers": Array<{
                    /**
                     * Arguments to the entrypoint. The container image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
                     */
                    "args"?: Array<string>;
                    /**
                     * Entrypoint array. Not executed within a shell. The container image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
                     */
                    "command"?: Array<string>;
                    /**
                     * List of environment variables to set in the container. Cannot be updated.
                     */
                    "env"?: Array<{
                        /**
                         * Name of the environment variable. Must be a C_IDENTIFIER.
                         */
                        "name": string;
                        /**
                         * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".
                         */
                        "value"?: string;
                        /**
                         * Source for the environment variable's value. Cannot be used if value is not empty.
                         */
                        "valueFrom"?: {
                            /**
                             * Selects a key of a ConfigMap.
                             */
                            "configMapKeyRef"?: {
                                /**
                                 * The key to select.
                                 */
                                "key": string;
                                /**
                                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                                 */
                                "name"?: string;
                                /**
                                 * Specify whether the ConfigMap or its key must be defined
                                 */
                                "optional"?: boolean;
                            };
                            /**
                             * This is accessible behind a feature flag - kubernetes.podspec-fieldref
                             */
                            "fieldRef"?: {};
                            /**
                             * This is accessible behind a feature flag - kubernetes.podspec-fieldref
                             */
                            "resourceFieldRef"?: {};
                            /**
                             * Selects a key of a secret in the pod's namespace
                             */
                            "secretKeyRef"?: {
                                /**
                                 * The key of the secret to select from.  Must be a valid secret key.
                                 */
                                "key": string;
                                /**
                                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                                 */
                                "name"?: string;
                                /**
                                 * Specify whether the Secret or its key must be defined
                                 */
                                "optional"?: boolean;
                            };
                        };
                    }>;
                    /**
                     * List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
                     */
                    "envFrom"?: Array<{
                        /**
                         * The ConfigMap to select from
                         */
                        "configMapRef"?: {
                            /**
                             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                             */
                            "name"?: string;
                            /**
                             * Specify whether the ConfigMap must be defined
                             */
                            "optional"?: boolean;
                        };
                        /**
                         * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
                         */
                        "prefix"?: string;
                        /**
                         * The Secret to select from
                         */
                        "secretRef"?: {
                            /**
                             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                             */
                            "name"?: string;
                            /**
                             * Specify whether the Secret must be defined
                             */
                            "optional"?: boolean;
                        };
                    }>;
                    /**
                     * Container image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.
                     */
                    "image"?: string;
                    /**
                     * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
                     */
                    "imagePullPolicy"?: string;
                    /**
                     * Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                     */
                    "livenessProbe"?: {
                        /**
                         * Exec specifies the action to take.
                         */
                        "exec"?: {
                            /**
                             * Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
                             */
                            "command"?: Array<string>;
                        };
                        /**
                         * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
                         */
                        "failureThreshold"?: number;
                        /**
                         * HTTPGet specifies the http request to perform.
                         */
                        "httpGet"?: {
                            /**
                             * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
                             */
                            "host"?: string;
                            /**
                             * Custom headers to set in the request. HTTP allows repeated headers.
                             */
                            "httpHeaders"?: Array<{
                                /**
                                 * The header field name
                                 */
                                "name": string;
                                /**
                                 * The header field value
                                 */
                                "value": string;
                            }>;
                            /**
                             * Path to access on the HTTP server.
                             */
                            "path"?: string;
                            /**
                             * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
                             */
                            "port"?: number | string;
                            /**
                             * Scheme to use for connecting to the host. Defaults to HTTP.
                             */
                            "scheme"?: string;
                        };
                        /**
                         * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                         */
                        "initialDelaySeconds"?: number;
                        /**
                         * How often (in seconds) to perform the probe.
                         */
                        "periodSeconds"?: number;
                        /**
                         * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
                         */
                        "successThreshold"?: number;
                        /**
                         * TCPSocket specifies an action involving a TCP port.
                         */
                        "tcpSocket"?: {
                            /**
                             * Optional: Host name to connect to, defaults to the pod IP.
                             */
                            "host"?: string;
                            /**
                             * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
                             */
                            "port"?: number | string;
                        };
                        /**
                         * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                         */
                        "timeoutSeconds"?: number;
                    };
                    /**
                     * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
                     */
                    "name"?: string;
                    /**
                     * List of ports to expose from the container. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Modifying this array with strategic merge patch may corrupt the data. For more information See https://github.com/kubernetes/kubernetes/issues/108255. Cannot be updated.
                     */
                    "ports"?: Array<{
                        /**
                         * Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
                         */
                        "containerPort": number;
                        /**
                         * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services.
                         */
                        "name"?: string;
                        /**
                         * Protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP".
                         */
                        "protocol"?: string;
                    }>;
                    /**
                     * Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                     */
                    "readinessProbe"?: {
                        /**
                         * Exec specifies the action to take.
                         */
                        "exec"?: {
                            /**
                             * Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
                             */
                            "command"?: Array<string>;
                        };
                        /**
                         * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
                         */
                        "failureThreshold"?: number;
                        /**
                         * HTTPGet specifies the http request to perform.
                         */
                        "httpGet"?: {
                            /**
                             * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
                             */
                            "host"?: string;
                            /**
                             * Custom headers to set in the request. HTTP allows repeated headers.
                             */
                            "httpHeaders"?: Array<{
                                /**
                                 * The header field name
                                 */
                                "name": string;
                                /**
                                 * The header field value
                                 */
                                "value": string;
                            }>;
                            /**
                             * Path to access on the HTTP server.
                             */
                            "path"?: string;
                            /**
                             * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
                             */
                            "port"?: number | string;
                            /**
                             * Scheme to use for connecting to the host. Defaults to HTTP.
                             */
                            "scheme"?: string;
                        };
                        /**
                         * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                         */
                        "initialDelaySeconds"?: number;
                        /**
                         * How often (in seconds) to perform the probe.
                         */
                        "periodSeconds"?: number;
                        /**
                         * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
                         */
                        "successThreshold"?: number;
                        /**
                         * TCPSocket specifies an action involving a TCP port.
                         */
                        "tcpSocket"?: {
                            /**
                             * Optional: Host name to connect to, defaults to the pod IP.
                             */
                            "host"?: string;
                            /**
                             * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
                             */
                            "port"?: number | string;
                        };
                        /**
                         * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
                         */
                        "timeoutSeconds"?: number;
                    };
                    /**
                     * Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                     */
                    "resources"?: {
                        /**
                         * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                         */
                        "limits"?: {
                            [key: string]: number | string;
                        };
                        /**
                         * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                         */
                        "requests"?: {
                            [key: string]: number | string;
                        };
                    };
                    /**
                     * SecurityContext defines the security options the container should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext. More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
                     */
                    "securityContext"?: {
                        /**
                         * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows.
                         */
                        "allowPrivilegeEscalation"?: boolean;
                        /**
                         * The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime. Note that this field cannot be set when spec.os.name is windows.
                         */
                        "capabilities"?: {
                            /**
                             * This is accessible behind a feature flag - kubernetes.containerspec-addcapabilities
                             */
                            "add"?: Array<string>;
                            /**
                             * Removed capabilities
                             */
                            "drop"?: Array<string>;
                        };
                        /**
                         * Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows.
                         */
                        "readOnlyRootFilesystem"?: boolean;
                        /**
                         * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
                         */
                        "runAsGroup"?: number;
                        /**
                         * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
                         */
                        "runAsNonRoot"?: boolean;
                        /**
                         * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
                         */
                        "runAsUser"?: number;
                        /**
                         * The seccomp options to use by this container. If seccomp options are provided at both the pod & container level, the container options override the pod options. Note that this field cannot be set when spec.os.name is windows.
                         */
                        "seccompProfile"?: {
                            /**
                             * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must only be set if type is "Localhost".
                             */
                            "localhostProfile"?: string;
                            /**
                             * type indicates which kind of seccomp profile will be applied. Valid options are:
                             *  Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
                             */
                            "type": string;
                        };
                    };
                    /**
                     * Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
                     */
                    "terminationMessagePath"?: string;
                    /**
                     * Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
                     */
                    "terminationMessagePolicy"?: string;
                    /**
                     * Pod volumes to mount into the container's filesystem. Cannot be updated.
                     */
                    "volumeMounts"?: Array<{
                        /**
                         * Path within the container at which the volume should be mounted.  Must not contain ':'.
                         */
                        "mountPath": string;
                        /**
                         * This must match the Name of a Volume.
                         */
                        "name": string;
                        /**
                         * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
                         */
                        "readOnly"?: boolean;
                        /**
                         * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
                         */
                        "subPath"?: string;
                    }>;
                    /**
                     * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
                     */
                    "workingDir"?: string;
                }>;
                /**
                 * This is accessible behind a feature flag - kubernetes.podspec-dnsconfig
                 */
                "dnsConfig"?: {};
                /**
                 * This is accessible behind a feature flag - kubernetes.podspec-dnspolicy
                 */
                "dnsPolicy"?: string;
                /**
                 * EnableServiceLinks indicates whether information about services should be injected into pod's environment variables, matching the syntax of Docker links. Optional: Knative defaults this to false.
                 */
                "enableServiceLinks"?: boolean;
                /**
                 * This is accessible behind a feature flag - kubernetes.podspec-hostaliases
                 */
                "hostAliases"?: Array<{}>;
                /**
                 * IdleTimeoutSeconds is the maximum duration in seconds a request will be allowed to stay open while not receiving any bytes from the user's application. If unspecified, a system default will be provided.
                 */
                "idleTimeoutSeconds"?: number;
                /**
                 * ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod
                 */
                "imagePullSecrets"?: Array<{
                    /**
                     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                     */
                    "name"?: string;
                }>;
                /**
                 * List of initialization containers belonging to the pod. Init containers are executed in order prior to containers being started. If any init container fails, the pod is considered to have failed and is handled according to its restartPolicy. The name for an init container or normal container must be unique among all containers. Init containers may not have Lifecycle actions, Readiness probes, Liveness probes, or Startup probes. The resourceRequirements of an init container are taken into account during scheduling by finding the highest request/limit for each resource type, and then using the max of of that value or the sum of the normal containers. Limits are applied to init containers in a similar fashion. Init containers cannot currently be added or removed. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/
                 */
                "initContainers"?: Array<{}>;
                /**
                 * This is accessible behind a feature flag - kubernetes.podspec-nodeselector
                 */
                "nodeSelector"?: {};
                /**
                 * This is accessible behind a feature flag - kubernetes.podspec-priorityclassname
                 */
                "priorityClassName"?: string;
                /**
                 * ResponseStartTimeoutSeconds is the maximum duration in seconds that the request routing layer will wait for a request delivered to a container to begin sending any network traffic.
                 */
                "responseStartTimeoutSeconds"?: number;
                /**
                 * This is accessible behind a feature flag - kubernetes.podspec-runtimeclassname
                 */
                "runtimeClassName"?: string;
                /**
                 * This is accessible behind a feature flag - kubernetes.podspec-schedulername
                 */
                "schedulerName"?: string;
                /**
                 * This is accessible behind a feature flag - kubernetes.podspec-securitycontext
                 */
                "securityContext"?: {};
                /**
                 * ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
                 */
                "serviceAccountName"?: string;
                /**
                 * TimeoutSeconds is the maximum duration in seconds that the request instance is allowed to respond to a request. If unspecified, a system default will be provided.
                 */
                "timeoutSeconds"?: number;
                /**
                 * This is accessible behind a feature flag - kubernetes.podspec-tolerations
                 */
                "tolerations"?: Array<{}>;
                /**
                 * This is accessible behind a feature flag - kubernetes.podspec-topologyspreadconstraints
                 */
                "topologySpreadConstraints"?: Array<{}>;
                /**
                 * List of volumes that can be mounted by containers belonging to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes
                 */
                "volumes"?: Array<{
                    /**
                     * configMap represents a configMap that should populate this volume
                     */
                    "configMap"?: {
                        /**
                         * defaultMode is optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                         */
                        "defaultMode"?: number;
                        /**
                         * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
                         */
                        "items"?: Array<{
                            /**
                             * key is the key to project.
                             */
                            "key": string;
                            /**
                             * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                             */
                            "mode"?: number;
                            /**
                             * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
                             */
                            "path": string;
                        }>;
                        /**
                         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                         */
                        "name"?: string;
                        /**
                         * optional specify whether the ConfigMap or its keys must be defined
                         */
                        "optional"?: boolean;
                    };
                    /**
                     * This is accessible behind a feature flag - kubernetes.podspec-emptydir
                     */
                    "emptyDir"?: {};
                    /**
                     * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name": string;
                    /**
                     * This is accessible behind a feature flag - kubernetes.podspec-persistent-volume-claim
                     */
                    "persistentVolumeClaim"?: {};
                    /**
                     * projected items for all in one resources secrets, configmaps, and downward API
                     */
                    "projected"?: {
                        /**
                         * defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                         */
                        "defaultMode"?: number;
                        /**
                         * sources is the list of volume projections
                         */
                        "sources"?: Array<{
                            /**
                             * configMap information about the configMap data to project
                             */
                            "configMap"?: {
                                /**
                                 * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
                                 */
                                "items"?: Array<{
                                    /**
                                     * key is the key to project.
                                     */
                                    "key": string;
                                    /**
                                     * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                                     */
                                    "mode"?: number;
                                    /**
                                     * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
                                     */
                                    "path": string;
                                }>;
                                /**
                                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                                 */
                                "name"?: string;
                                /**
                                 * optional specify whether the ConfigMap or its keys must be defined
                                 */
                                "optional"?: boolean;
                            };
                            /**
                             * downwardAPI information about the downwardAPI data to project
                             */
                            "downwardAPI"?: {
                                /**
                                 * Items is a list of DownwardAPIVolume file
                                 */
                                "items"?: Array<{
                                    /**
                                     * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
                                     */
                                    "fieldRef"?: {
                                        /**
                                         * Version of the schema the FieldPath is written in terms of, defaults to "v1".
                                         */
                                        "apiVersion"?: string;
                                        /**
                                         * Path of the field to select in the specified API version.
                                         */
                                        "fieldPath": string;
                                    };
                                    /**
                                     * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                                     */
                                    "mode"?: number;
                                    /**
                                     * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
                                     */
                                    "path": string;
                                    /**
                                     * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
                                     */
                                    "resourceFieldRef"?: {
                                        /**
                                         * Container name: required for volumes, optional for env vars
                                         */
                                        "containerName"?: string;
                                        /**
                                         * Specifies the output format of the exposed resources, defaults to "1"
                                         */
                                        "divisor"?: number | string;
                                        /**
                                         * Required: resource to select
                                         */
                                        "resource": string;
                                    };
                                }>;
                            };
                            /**
                             * secret information about the secret data to project
                             */
                            "secret"?: {
                                /**
                                 * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
                                 */
                                "items"?: Array<{
                                    /**
                                     * key is the key to project.
                                     */
                                    "key": string;
                                    /**
                                     * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                                     */
                                    "mode"?: number;
                                    /**
                                     * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
                                     */
                                    "path": string;
                                }>;
                                /**
                                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                                 */
                                "name"?: string;
                                /**
                                 * optional field specify whether the Secret or its key must be defined
                                 */
                                "optional"?: boolean;
                            };
                            /**
                             * serviceAccountToken is information about the serviceAccountToken data to project
                             */
                            "serviceAccountToken"?: {
                                /**
                                 * audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
                                 */
                                "audience"?: string;
                                /**
                                 * expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
                                 */
                                "expirationSeconds"?: number;
                                /**
                                 * path is the path relative to the mount point of the file to project the token into.
                                 */
                                "path": string;
                            };
                        }>;
                    };
                    /**
                     * secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
                     */
                    "secret"?: {
                        /**
                         * defaultMode is Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                         */
                        "defaultMode"?: number;
                        /**
                         * items If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
                         */
                        "items"?: Array<{
                            /**
                             * key is the key to project.
                             */
                            "key": string;
                            /**
                             * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
                             */
                            "mode"?: number;
                            /**
                             * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
                             */
                            "path": string;
                        }>;
                        /**
                         * optional field specify whether the Secret or its keys must be defined
                         */
                        "optional"?: boolean;
                        /**
                         * secretName is the name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
                         */
                        "secretName"?: string;
                    };
                }>;
            };
        };
    };
    /**
     * ConfigurationStatus communicates the observed state of the Configuration (from the controller).
     */
    "status"?: {
        /**
         * Annotations is additional Status fields for the Resource to save some additional State as well as convey more information to the user. This is roughly akin to Annotations on any k8s resource, just the reconciler conveying richer information outwards.
         */
        "annotations"?: {
            [key: string]: string;
        };
        /**
         * Conditions the latest available observations of a resource's current state.
         */
        "conditions"?: Array<{
            /**
             * LastTransitionTime is the last time the condition transitioned from one status to another. We use VolatileTime in place of metav1.Time to exclude this from creating equality.Semantic differences (all other things held constant).
             */
            "lastTransitionTime"?: string;
            /**
             * A human readable message indicating details about the transition.
             */
            "message"?: string;
            /**
             * The reason for the condition's last transition.
             */
            "reason"?: string;
            /**
             * Severity with which to treat failures of this type of condition. When this is not specified, it defaults to Error.
             */
            "severity"?: string;
            /**
             * Status of the condition, one of True, False, Unknown.
             */
            "status": string;
            /**
             * Type of condition.
             */
            "type": string;
        }>;
        /**
         * LatestCreatedRevisionName is the last revision that was created from this Configuration. It might not be ready yet, for that use LatestReadyRevisionName.
         */
        "latestCreatedRevisionName"?: string;
        /**
         * LatestReadyRevisionName holds the name of the latest Revision stamped out from this Configuration that has had its "Ready" condition become "True".
         */
        "latestReadyRevisionName"?: string;
        /**
         * ObservedGeneration is the 'Generation' of the Service that was last processed by the controller.
         */
        "observedGeneration"?: number;
    };
}
/**
 * Configuration represents the "floating HEAD" of a linear history of Revisions. Users create new Revisions by updating the Configuration's spec. The "latest created" revision's name is available under status, as is the "latest ready" revision's name. See also: https://github.com/knative/serving/blob/main/docs/spec/overview.md#configuration
 */
export declare class Configuration extends Model<IConfiguration> implements IConfiguration {
    "apiVersion": IConfiguration["apiVersion"];
    "kind": IConfiguration["kind"];
    "metadata"?: IConfiguration["metadata"];
    "spec"?: IConfiguration["spec"];
    "status"?: IConfiguration["status"];
    static apiVersion: IConfiguration["apiVersion"];
    static kind: IConfiguration["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IConfiguration>;
    constructor(data?: ModelData<IConfiguration>);
}
