import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * HealthCheckPolicy provides a way to create and attach a HealthCheck to a BackendService with
 * the GKE implementation of the Gateway API. This policy can only be attached to a BackendService.
 */
export interface IHealthCheckPolicy {
    /**
     * APIVersion defines the versioned schema of this representation of an object.
     * Servers should convert recognized schemas to the latest internal value, and
     * may reject unrecognized values.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "networking.gke.io/v1";
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "HealthCheckPolicy";
    "metadata"?: IObjectMeta;
    /**
     * Spec defines the desired state of HealthCheckPolicy.
     */
    "spec": {
        /**
         * Default defines default policy configuration for the targeted resource.
         */
        "default"?: {
            /**
             * How often (in seconds) to send a health check.
             * If not specified, a default value of 5 seconds will be used.
             */
            "checkIntervalSec"?: number;
            /**
             * Specifies the type of the healthCheck, either TCP, HTTP, HTTPS, HTTP2 or GRPC.
             * Exactly one of the protocol-specific health check field must be specified,
             * which must match type field.
             * Config contains per protocol (i.e. HTTP, HTTPS, HTTP2, TCP, GRPC) configuration.
             * If not specified, health check type defaults to HTTP.
             */
            "config"?: {
                /**
                 * GRPC is the health check configuration of type GRPC.
                 */
                "grpcHealthCheck"?: {
                    /**
                     * The gRPC service name for the health check. This field is optional.
                     * The value of grpcServiceName has the following meanings by convention:
                     * - Empty serviceName means the overall status of all services at the backend.
                     * - Non-empty serviceName means the health of that gRPC service, as defined by
                     *   the owner of the service.
                     * The grpcServiceName can only be ASCII.
                     */
                    "grpcServiceName"?: string;
                    /**
                     * The TCP port number for the health check request. Valid values are 1 through 65535.
                     */
                    "port"?: number;
                    /**
                     * Port name as defined in InstanceGroup#NamedPort#name.
                     * If both port and portName are defined, port takes precedence.
                     */
                    "portName"?: string;
                    /**
                     * Specifies how port is selected for health checking, can be one of following values:
                     *
                     *
                     * USE_FIXED_PORT: The port number in port is used for health checking.
                     * USE_NAMED_PORT: The portName is used for health checking.
                     * USE_SERVING_PORT: For NetworkEndpointGroup, the port specified for each network endpoint
                     * is used for health checking. For other backends, the port or named port specified in the
                     * Backend Service is used for health checking.
                     *
                     *
                     * If not specified, Protocol health check follows behavior specified in port and portName fields.
                     * If neither Port nor PortName is specified, this defaults to USE_SERVING_PORT.
                     */
                    "portSpecification"?: "USE_FIXED_PORT" | "USE_NAMED_PORT" | "USE_SERVING_PORT";
                };
                /**
                 * HTTP2 is the health check configuration of type HTTP2.
                 */
                "http2HealthCheck"?: {
                    /**
                     * Host is the value of the host header in the HTTP health check request. This
                     * matches the RFC 1123 definition of a hostname with 1 notable exception that
                     * numeric IP addresses are not allowed.
                     * If not specified or left empty, the IP on behalf of which this health check is
                     * performed will be used.
                     */
                    "host"?: string;
                    /**
                     * The TCP port number for the health check request. Valid values are 1 through 65535.
                     */
                    "port"?: number;
                    /**
                     * Port name as defined in InstanceGroup#NamedPort#name.
                     * If both port and portName are defined, port takes precedence.
                     */
                    "portName"?: string;
                    /**
                     * Specifies how port is selected for health checking, can be one of following values:
                     *
                     *
                     * USE_FIXED_PORT: The port number in port is used for health checking.
                     * USE_NAMED_PORT: The portName is used for health checking.
                     * USE_SERVING_PORT: For NetworkEndpointGroup, the port specified for each network endpoint
                     * is used for health checking. For other backends, the port or named port specified in the
                     * Backend Service is used for health checking.
                     *
                     *
                     * If not specified, Protocol health check follows behavior specified in port and portName fields.
                     * If neither Port nor PortName is specified, this defaults to USE_SERVING_PORT.
                     */
                    "portSpecification"?: "USE_FIXED_PORT" | "USE_NAMED_PORT" | "USE_SERVING_PORT";
                    /**
                     * Specifies the type of proxy header to append before sending data to the backend,
                     * either NONE or PROXY_V1. If not specified, this defaults to NONE.
                     */
                    "proxyHeader"?: "NONE" | "PROXY_V1";
                    /**
                     * The request path of the HTTP health check request.
                     * If not specified or left empty, a default value of "/" is used.
                     */
                    "requestPath"?: string;
                    /**
                     * The string to match anywhere in the first 1024 bytes of the response body.
                     * If not specified or left empty, the status code determines health.
                     * The response data can only be ASCII.
                     */
                    "response"?: string;
                };
                /**
                 * HTTP is the health check configuration of type HTTP.
                 */
                "httpHealthCheck"?: {
                    /**
                     * Host is the value of the host header in the HTTP health check request. This
                     * matches the RFC 1123 definition of a hostname with 1 notable exception that
                     * numeric IP addresses are not allowed.
                     * If not specified or left empty, the IP on behalf of which this health check is
                     * performed will be used.
                     */
                    "host"?: string;
                    /**
                     * The TCP port number for the health check request. Valid values are 1 through 65535.
                     */
                    "port"?: number;
                    /**
                     * Port name as defined in InstanceGroup#NamedPort#name.
                     * If both port and portName are defined, port takes precedence.
                     */
                    "portName"?: string;
                    /**
                     * Specifies how port is selected for health checking, can be one of following values:
                     *
                     *
                     * USE_FIXED_PORT: The port number in port is used for health checking.
                     * USE_NAMED_PORT: The portName is used for health checking.
                     * USE_SERVING_PORT: For NetworkEndpointGroup, the port specified for each network endpoint
                     * is used for health checking. For other backends, the port or named port specified in the
                     * Backend Service is used for health checking.
                     *
                     *
                     * If not specified, Protocol health check follows behavior specified in port and portName fields.
                     * If neither Port nor PortName is specified, this defaults to USE_SERVING_PORT.
                     */
                    "portSpecification"?: "USE_FIXED_PORT" | "USE_NAMED_PORT" | "USE_SERVING_PORT";
                    /**
                     * Specifies the type of proxy header to append before sending data to the backend,
                     * either NONE or PROXY_V1. If not specified, this defaults to NONE.
                     */
                    "proxyHeader"?: "NONE" | "PROXY_V1";
                    /**
                     * The request path of the HTTP health check request.
                     * If not specified or left empty, a default value of "/" is used.
                     */
                    "requestPath"?: string;
                    /**
                     * The string to match anywhere in the first 1024 bytes of the response body.
                     * If not specified or left empty, the status code determines health.
                     * The response data can only be ASCII.
                     */
                    "response"?: string;
                };
                /**
                 * HTTPS is the health check configuration of type HTTPS.
                 */
                "httpsHealthCheck"?: {
                    /**
                     * Host is the value of the host header in the HTTP health check request. This
                     * matches the RFC 1123 definition of a hostname with 1 notable exception that
                     * numeric IP addresses are not allowed.
                     * If not specified or left empty, the IP on behalf of which this health check is
                     * performed will be used.
                     */
                    "host"?: string;
                    /**
                     * The TCP port number for the health check request. Valid values are 1 through 65535.
                     */
                    "port"?: number;
                    /**
                     * Port name as defined in InstanceGroup#NamedPort#name.
                     * If both port and portName are defined, port takes precedence.
                     */
                    "portName"?: string;
                    /**
                     * Specifies how port is selected for health checking, can be one of following values:
                     *
                     *
                     * USE_FIXED_PORT: The port number in port is used for health checking.
                     * USE_NAMED_PORT: The portName is used for health checking.
                     * USE_SERVING_PORT: For NetworkEndpointGroup, the port specified for each network endpoint
                     * is used for health checking. For other backends, the port or named port specified in the
                     * Backend Service is used for health checking.
                     *
                     *
                     * If not specified, Protocol health check follows behavior specified in port and portName fields.
                     * If neither Port nor PortName is specified, this defaults to USE_SERVING_PORT.
                     */
                    "portSpecification"?: "USE_FIXED_PORT" | "USE_NAMED_PORT" | "USE_SERVING_PORT";
                    /**
                     * Specifies the type of proxy header to append before sending data to the backend,
                     * either NONE or PROXY_V1. If not specified, this defaults to NONE.
                     */
                    "proxyHeader"?: "NONE" | "PROXY_V1";
                    /**
                     * The request path of the HTTP health check request.
                     * If not specified or left empty, a default value of "/" is used.
                     */
                    "requestPath"?: string;
                    /**
                     * The string to match anywhere in the first 1024 bytes of the response body.
                     * If not specified or left empty, the status code determines health.
                     * The response data can only be ASCII.
                     */
                    "response"?: string;
                };
                /**
                 * TCP is the health check configuration of type TCP.
                 */
                "tcpHealthCheck"?: {
                    /**
                     * The TCP port number for the health check request. Valid values are 1 through 65535.
                     */
                    "port"?: number;
                    /**
                     * Port name as defined in InstanceGroup#NamedPort#name.
                     * If both port and portName are defined, port takes precedence.
                     */
                    "portName"?: string;
                    /**
                     * Specifies how port is selected for health checking, can be one of following values:
                     *
                     *
                     * USE_FIXED_PORT: The port number in port is used for health checking.
                     * USE_NAMED_PORT: The portName is used for health checking.
                     * USE_SERVING_PORT: For NetworkEndpointGroup, the port specified for each network endpoint
                     * is used for health checking. For other backends, the port or named port specified in the
                     * Backend Service is used for health checking.
                     *
                     *
                     * If not specified, Protocol health check follows behavior specified in port and portName fields.
                     * If neither Port nor PortName is specified, this defaults to USE_SERVING_PORT.
                     */
                    "portSpecification"?: "USE_FIXED_PORT" | "USE_NAMED_PORT" | "USE_SERVING_PORT";
                    /**
                     * Specifies the type of proxy header to append before sending data to the backend,
                     * either NONE or PROXY_V1. If not specified, this defaults to NONE.
                     */
                    "proxyHeader"?: "NONE" | "PROXY_V1";
                    /**
                     * The application data to send once the TCP connection has been established. If not specified,
                     * this defaults to empty. If both request and response are empty, the connection establishment
                     * alone will indicate health. The request data can only be ASCII.
                     */
                    "request"?: string;
                    /**
                     * The bytes to match against the beginning of the response data.
                     * If not specified or left empty, any response will indicate health.
                     * The response data can only be ASCII.
                     */
                    "response"?: string;
                };
                /**
                 * Specifies the type of the healthCheck, either TCP, HTTP, HTTPS, HTTP2 or GRPC.
                 * Exactly one of the protocol-specific health check field must be specified,
                 * which must match type field.
                 */
                "type"?: "TCP" | "HTTP" | "HTTPS" | "HTTP2" | "GRPC";
            };
            /**
             * A so-far unhealthy instance will be marked healthy after this many consecutive successes.
             * If not specified, a default value of 2 will be used.
             */
            "healthyThreshold"?: number;
            /**
             * LogConfig configures logging on this health check.
             */
            "logConfig"?: {
                /**
                 * Enabled indicates whether or not to export health check logs. If not
                 * specified, this defaults to false, which means health check logging will be
                 * disabled.
                 */
                "enabled"?: boolean;
            };
            /**
             * How long (in seconds) to wait before claiming failure.
             * If not specified, a default value of 5 seconds will be used.
             * It is invalid for timeoutSec to have greater value than checkIntervalSec.
             */
            "timeoutSec"?: number;
            /**
             * A so-far healthy instance will be marked unhealthy after this many consecutive failures.
             * If not specified, a default value of 2 will be used.
             */
            "unhealthyThreshold"?: number;
        };
        /**
         * TargetRef identifies an API object to apply policy to.
         */
        "targetRef": {
            /**
             * Group is the group of the target resource.
             */
            "group": string;
            /**
             * Kind is kind of the target resource.
             */
            "kind": string;
            /**
             * Name is the name of the target resource.
             */
            "name": string;
            /**
             * Namespace is the namespace of the referent. When unspecified, the local
             * namespace is inferred. Even when policy targets a resource in a different
             * namespace, it MUST only apply to traffic originating from the same
             * namespace as the policy.
             */
            "namespace"?: string;
        };
    };
    /**
     * Status defines the current state of HealthCheckPolicy.
     */
    "status"?: {
        /**
         * Conditions describe the current conditions of the HealthCheckPolicy.
         */
        "conditions"?: Array<{
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another.
             * This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            "lastTransitionTime": string;
            /**
             * message is a human readable message indicating details about the transition.
             * This may be an empty string.
             */
            "message": string;
            /**
             * observedGeneration represents the .metadata.generation that the condition was set based upon.
             * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
             * with respect to the current state of the instance.
             */
            "observedGeneration"?: number;
            /**
             * reason contains a programmatic identifier indicating the reason for the condition's last transition.
             * Producers of specific condition types may define expected values and meanings for this field,
             * and whether the values are considered a guaranteed API.
             * The value should be a CamelCase string.
             * This field may not be empty.
             */
            "reason": string;
            /**
             * status of the condition, one of True, False, Unknown.
             */
            "status": "True" | "False" | "Unknown";
            /**
             * type of condition in CamelCase or in foo.example.com/CamelCase.
             * ---
             * Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be
             * useful (see .node.status.conditions), the ability to deconflict is important.
             * The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
             */
            "type": string;
        }>;
    };
}
/**
 * HealthCheckPolicy provides a way to create and attach a HealthCheck to a BackendService with
 * the GKE implementation of the Gateway API. This policy can only be attached to a BackendService.
 */
export declare class HealthCheckPolicy extends Model<IHealthCheckPolicy> implements IHealthCheckPolicy {
    "apiVersion": IHealthCheckPolicy["apiVersion"];
    "kind": IHealthCheckPolicy["kind"];
    "metadata"?: IHealthCheckPolicy["metadata"];
    "spec": IHealthCheckPolicy["spec"];
    "status"?: IHealthCheckPolicy["status"];
    static apiVersion: IHealthCheckPolicy["apiVersion"];
    static kind: IHealthCheckPolicy["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IHealthCheckPolicy>;
    constructor(data?: ModelData<IHealthCheckPolicy>);
}
