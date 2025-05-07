import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * ExtensionService is the schema for the Contour extension services API. An ExtensionService resource binds a network service to the Contour API so that Contour API features can be implemented by collaborating components.
 */
export interface IExtensionService {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "projectcontour.io/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "ExtensionService";
    "metadata"?: IObjectMeta;
    /**
     * ExtensionServiceSpec defines the desired state of an ExtensionService resource.
     */
    "spec"?: {
        /**
         * The policy for load balancing GRPC service requests. Note that the `Cookie` and `RequestHash` load balancing strategies cannot be used here.
         */
        "loadBalancerPolicy"?: {
            /**
             * RequestHashPolicies contains a list of hash policies to apply when the `RequestHash` load balancing strategy is chosen. If an element of the supplied list of hash policies is invalid, it will be ignored. If the list of hash policies is empty after validation, the load balancing strategy will fall back to the default `RoundRobin`.
             */
            "requestHashPolicies"?: Array<{
                /**
                 * HashSourceIP should be set to true when request source IP hash based load balancing is desired. It must be the only hash option field set, otherwise this request hash policy object will be ignored.
                 */
                "hashSourceIP"?: boolean;
                /**
                 * HeaderHashOptions should be set when request header hash based load balancing is desired. It must be the only hash option field set, otherwise this request hash policy object will be ignored.
                 */
                "headerHashOptions"?: {
                    /**
                     * HeaderName is the name of the HTTP request header that will be used to calculate the hash key. If the header specified is not present on a request, no hash will be produced.
                     */
                    "headerName"?: string;
                };
                /**
                 * QueryParameterHashOptions should be set when request query parameter hash based load balancing is desired. It must be the only hash option field set, otherwise this request hash policy object will be ignored.
                 */
                "queryParameterHashOptions"?: {
                    /**
                     * ParameterName is the name of the HTTP request query parameter that will be used to calculate the hash key. If the query parameter specified is not present on a request, no hash will be produced.
                     */
                    "parameterName"?: string;
                };
                /**
                 * Terminal is a flag that allows for short-circuiting computing of a hash for a given request. If set to true, and the request attribute specified in the attribute hash options is present, no further hash policies will be used to calculate a hash for the request.
                 */
                "terminal"?: boolean;
            }>;
            /**
             * Strategy specifies the policy used to balance requests across the pool of backend pods. Valid policy names are `Random`, `RoundRobin`, `WeightedLeastRequest`, `Cookie`, and `RequestHash`. If an unknown strategy name is specified or no policy is supplied, the default `RoundRobin` policy is used.
             */
            "strategy"?: string;
        };
        /**
         * Protocol may be used to specify (or override) the protocol used to reach this Service. Values may be h2 or h2c. If omitted, protocol-selection falls back on Service annotations.
         */
        "protocol"?: "h2" | "h2c";
        /**
         * This field sets the version of the GRPC protocol that Envoy uses to send requests to the extension service. Since Contour always uses the v3 Envoy API, this is currently fixed at "v3". However, other protocol options will be available in future.
         */
        "protocolVersion"?: "v3";
        /**
         * Services specifies the set of Kubernetes Service resources that receive GRPC extension API requests. If no weights are specified for any of the entries in this array, traffic will be spread evenly across all the services. Otherwise, traffic is balanced proportionally to the Weight field in each entry.
         */
        "services": Array<{
            /**
             * Name is the name of Kubernetes service that will accept service traffic.
             */
            "name": string;
            /**
             * Port (defined as Integer) to proxy traffic to since a service can have multiple defined.
             */
            "port": number;
            /**
             * Weight defines proportion of traffic to balance to the Kubernetes Service.
             */
            "weight"?: number;
        }>;
        /**
         * The timeout policy for requests to the services.
         */
        "timeoutPolicy"?: {
            /**
             * Timeout for how long the proxy should wait while there is no activity during single request/response (for HTTP/1.1) or stream (for HTTP/2). Timeout will not trigger while HTTP/1.1 connection is idle between two consecutive requests. If not specified, there is no per-route idle timeout, though a connection manager-wide stream_idle_timeout default of 5m still applies.
             */
            "idle"?: string;
            /**
             * Timeout for how long connection from the proxy to the upstream service is kept when there are no active requests. If not supplied, Envoy's default value of 1h applies.
             */
            "idleConnection"?: string;
            /**
             * Timeout for receiving a response from the server after processing a request from client. If not supplied, Envoy's default value of 15s applies.
             */
            "response"?: string;
        };
        /**
         * UpstreamValidation defines how to verify the backend service's certificate
         */
        "validation"?: {
            /**
             * Name or namespaced name of the Kubernetes secret used to validate the certificate presented by the backend. The secret must contain key named ca.crt.
             */
            "caSecret": string;
            /**
             * Key which is expected to be present in the 'subjectAltName' of the presented certificate.
             */
            "subjectName": string;
        };
    };
    /**
     * ExtensionServiceStatus defines the observed state of an ExtensionService resource.
     */
    "status"?: {
        /**
         * Conditions contains the current status of the ExtensionService resource.
         *  Contour will update a single condition, `Valid`, that is in normal-true polarity.
         *  Contour will not modify any other Conditions set in this block, in case some other controller wants to add a Condition.
         */
        "conditions"?: Array<{
            /**
             * Errors contains a slice of relevant error subconditions for this object.
             *  Subconditions are expected to appear when relevant (when there is a error), and disappear when not relevant. An empty slice here indicates no errors.
             */
            "errors"?: Array<{
                /**
                 * Message is a human readable message indicating details about the transition.
                 *  This may be an empty string.
                 */
                "message": string;
                /**
                 * Reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API.
                 *  The value should be a CamelCase string.
                 *  This field may not be empty.
                 */
                "reason": string;
                /**
                 * Status of the condition, one of True, False, Unknown.
                 */
                "status": "True" | "False" | "Unknown";
                /**
                 * Type of condition in `CamelCase` or in `foo.example.com/CamelCase`.
                 *  This must be in abnormal-true polarity, that is, `ErrorFound` or `controller.io/ErrorFound`.
                 *  The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
                 */
                "type": string;
            }>;
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            "lastTransitionTime": string;
            /**
             * message is a human readable message indicating details about the transition. This may be an empty string.
             */
            "message": string;
            /**
             * observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
             */
            "observedGeneration"?: number;
            /**
             * reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
             */
            "reason": string;
            /**
             * status of the condition, one of True, False, Unknown.
             */
            "status": "True" | "False" | "Unknown";
            /**
             * type of condition in CamelCase or in foo.example.com/CamelCase. --- Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be useful (see .node.status.conditions), the ability to deconflict is important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
             */
            "type": string;
            /**
             * Warnings contains a slice of relevant warning subconditions for this object.
             *  Subconditions are expected to appear when relevant (when there is a warning), and disappear when not relevant. An empty slice here indicates no warnings.
             */
            "warnings"?: Array<{
                /**
                 * Message is a human readable message indicating details about the transition.
                 *  This may be an empty string.
                 */
                "message": string;
                /**
                 * Reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API.
                 *  The value should be a CamelCase string.
                 *  This field may not be empty.
                 */
                "reason": string;
                /**
                 * Status of the condition, one of True, False, Unknown.
                 */
                "status": "True" | "False" | "Unknown";
                /**
                 * Type of condition in `CamelCase` or in `foo.example.com/CamelCase`.
                 *  This must be in abnormal-true polarity, that is, `ErrorFound` or `controller.io/ErrorFound`.
                 *  The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
                 */
                "type": string;
            }>;
        }>;
    };
}
/**
 * ExtensionService is the schema for the Contour extension services API. An ExtensionService resource binds a network service to the Contour API so that Contour API features can be implemented by collaborating components.
 */
export declare class ExtensionService extends Model<IExtensionService> implements IExtensionService {
    "apiVersion": IExtensionService["apiVersion"];
    "kind": IExtensionService["kind"];
    "metadata"?: IExtensionService["metadata"];
    "spec"?: IExtensionService["spec"];
    "status"?: IExtensionService["status"];
    static apiVersion: IExtensionService["apiVersion"];
    static kind: IExtensionService["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IExtensionService>;
    constructor(data?: ModelData<IExtensionService>);
}
