import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * TDGRPCRoute is the Schema for the Traffic Director GRPCRoute resource.
 */
export interface ITDGRPCRoute {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "net.gke.io/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "TDGRPCRoute";
    "metadata"?: IObjectMeta;
    /**
     * GRPCRouteSpec defines the desired state of GRPCRoute
     */
    "spec"?: {
        /**
         * Hostnames defines a set of hostname that should match against the GRPC Host header to select a GRPCRoute to process the request. Hostname is the fully qualified domain name of a network host, as defined by RFC 3986. Note the following deviations from the "host" part of the URI as defined in the RFC:
         *  1. IPs are not allowed. 2. The `:` delimiter is not respected because ports are not allowed.
         *  Incoming requests are matched against the hostnames before the GRPCRoute rules. If no hostname is specified, traffic is routed based on the GRPCRouteRules.
         *  Hostname can be "precise" which is a domain name without the terminating dot of a network host (e.g. "foo.example.com") or "wildcard", which is a domain name prefixed with a single wildcard label (e.g. "\*.example.com"). The wildcard character '\*' must appear by itself as the first DNS label and matches only a single label. You cannot have a wildcard label by itself (e.g. Host == "\*"). Requests will be matched against the Host field in the following order: 1. If Host is precise, the request matches this rule if    the grpc host header is equal to Host. 2. If Host is a wildcard, then the request matches this rule if    the grpc host header is to equal to the suffix    (removing the first label) of the wildcard rule.
         *  Support: Core
         */
        "hostnames"?: Array<string>;
        /**
         * ParentRefs references the resources (usually Gateways) that a Route wants to be attached to. Note that the referenced parent resource needs to allow this for the attachment to be complete. For Gateways, that means the Gateway needs to allow attachment from Routes of this kind and namespace.
         *  The only kind of parent resource with "Core" support is Gateway. This API may be extended in the future to support additional kinds of parent resources such as one of the route kinds.
         *  It is invalid to reference an identical parent more than once. It is valid to reference multiple distinct sections within the same parent resource, such as 2 Listeners within a Gateway.
         *  It is possible to separately reference multiple distinct objects that may be collapsed by an implementation. For example, some implementations may choose to merge compatible Gateway Listeners together. If that is the case, the list of routes attached to those resources should also be merged.
         */
        "parentRefs"?: Array<{
            /**
             * Group is the group of the referent.
             *  Support: Core
             */
            "group"?: string;
            /**
             * Kind is kind of the referent.
             *  Support: Core (Gateway) Support: Custom (Other Resources)
             */
            "kind"?: string;
            /**
             * Name is the name of the referent.
             *  Support: Core
             */
            "name": string;
            /**
             * Namespace is the namespace of the referent. When unspecified (or empty string), this refers to the local namespace of the Route.
             *  Support: Core
             */
            "namespace"?: string;
            /**
             * Port is the network port this Route targets. It can be interpreted differently based on the type of parent resource:
             *  \* Gateway: All listeners listening on the specified port that also support this kind of Route(and select this Route). It's not recommended to set `Port` unless the networking behaviors specified in a Route must apply to a specific port as opposed to a listener(s) whose port(s) may be changed. When both Port and SectionName are specified, the name and port of the selected listener must match both specified values.
             *  Implementations MAY choose to support other parent resources. Implementations supporting other types of parent resources MUST clearly document how/if Port is interpreted.
             *  For the purpose of status, an attachment is considered successful as long as the parent resource accepts it partially. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway.
             *  Support: Extended
             *  <gateway:experimental>
             */
            "port"?: number;
            /**
             * SectionName is the name of a section within the target resource. In the following resources, SectionName is interpreted as the following:
             *  \* Gateway: Listener Name. When both Port (experimental) and SectionName are specified, the name and port of the selected listener must match both specified values.
             *  Implementations MAY choose to support attaching Routes to other resources. If that is the case, they MUST clearly document how SectionName is interpreted.
             *  When unspecified (empty string), this will reference the entire resource. For the purpose of status, an attachment is considered successful if at least one section in the parent resource accepts it. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway.
             *  Support: Core
             */
            "sectionName"?: string;
        }>;
        /**
         * Rules are a list of GRPC matchers and actions.
         */
        "rules": Array<{
            /**
             * BackendRefs defines the backend(s) where matching requests should be sent.
             *  Support: Core for Kubernetes Service Support: Custom for any other resource
             *  Support for weight: Core
             */
            "backendRefs"?: Array<{
                /**
                 * Group is the group of the referent. For example, "networking.k8s.io". When unspecified (empty string), core API group is inferred.
                 */
                "group"?: string;
                /**
                 * Kind is kind of the referent. For example "HTTPRoute" or "Service".
                 */
                "kind"?: string;
                /**
                 * Name is the name of the referent.
                 */
                "name": string;
                /**
                 * Namespace is the namespace of the backend. When unspecified, the local namespace is inferred.
                 *  Note that when a namespace is specified, a ReferencePolicy object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferencePolicy documentation for details.
                 *  Support: Core
                 */
                "namespace"?: string;
                /**
                 * Port specifies the destination port number to use for this resource. Port is required when the referent is a Kubernetes Service. For other resources, destination port might be derived from the referent resource or this field.
                 */
                "port"?: number;
                /**
                 * Weight specifies the proportion of requests forwarded to the referenced backend. This is computed as weight/(sum of all weights in this BackendRefs list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports. Weight is not a percentage and the sum of weights does not need to equal 100.
                 *  If only one backend is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend. If weight is set to 0, no traffic should be forwarded for this entry. If unspecified, weight defaults to 1.
                 *  Support for this field varies based on the context where used.
                 */
                "weight"?: number;
            }>;
            /**
             * Matches define conditions used for matching the rule against incoming GRPC requests.
             *  If no matches are specified, the default is to match all methods.
             */
            "matches"?: Array<{
                /**
                 * Headers specifies GRPC request header matchers. Multiple match values are ANDed together, meaning, a request must match all the specified headers to select the route.
                 */
                "headers"?: Array<{
                    /**
                     * Name is the name of the GRPC Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).
                     *  If multiple entries specify equivalent header names, only the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, "foo" and "Foo" are considered equivalent.
                     *  When a header is repeated in an GRPC request, it is implementation-specific behavior as to how this is represented. Generally, proxies should follow the guidance from the RFC: https://www.rfc-editor.org/rfc/rfc7230.html#section-3.2.2 regarding processing a repeated header, with special handling for "Set-Cookie".
                     */
                    "name": string;
                    /**
                     * Type specifies how to match against the value of the header.
                     *  Support: core (Exact) Support: custom (RegularExpression, ImplementationSpecific)
                     *  Since RegularExpression PathType has custom conformance, implementations can support POSIX, PCRE or any other dialects of regular expressions. Please read the implementation's documentation to determine the supported dialect.
                     *  GRPC Header name matching MUST be case-insensitive (RFC 2616 - section 4.2).
                     */
                    "type"?: "Exact" | "RegularExpression" | "ImplementationSpecific";
                    /**
                     * Value is the value of HTTP Header to be matched.
                     *  Multiple match values are ANDed together, meaning, a request must match all the specified headers to select the route.
                     */
                    "value": string;
                }>;
                /**
                 * Method specifies A gRPC method to match against.
                 */
                "method"?: {
                    /**
                     * Method specifies name of the method to match against. If unspecified, will match all methods.
                     */
                    "method"?: string;
                    /**
                     * Service specifies name of the service to match against. If unspecified, will match all services.
                     */
                    "service"?: string;
                    /**
                     * Type specifies how to match against the name. If not specified, a default value of "EXACT" is used.
                     */
                    "type"?: "Exact" | "RegularExpression" | "ImplementationSpecific";
                };
            }>;
        }>;
    };
    /**
     * GRPCRouteStatus defines the observed state of GRPCRoute.
     */
    "status"?: {
        /**
         * Parents is a list of parent resources (usually Gateways) that are associated with the route, and the status of the route with respect to each parent. When this route attaches to a parent, the controller that manages the parent must add an entry to this list when the controller first sees the route and should update the entry as appropriate when the route or gateway is modified.
         *  Note that parent references that cannot be resolved by an implementation of this API will not be added to this list. Implementations of this API can only populate Route status for the Gateways/parent resources they are responsible for.
         *  A maximum of 32 Gateways will be represented in this list. An empty list means the route has not been attached to any Gateway.
         */
        "parents": Array<{
            /**
             * Conditions describes the status of the route with respect to the Gateway. Note that the route's availability is also subject to the Gateway's own status conditions and listener status.
             *  If the Route's ParentRef specifies an existing Gateway that supports Routes of this kind AND that Gateway's controller has sufficient access, then that Gateway's controller MUST set the "Accepted" condition on the Route, to indicate whether the route has been accepted or rejected by the Gateway, and why.
             *  A Route MUST be considered "Accepted" if at least one of the Route's rules is implemented by the Gateway.
             *  There are a number of cases where the "Accepted" condition may not be set due to lack of controller visibility, that includes when:
             *  \* The Route refers to a non-existent parent. \* The Route is of a type that the controller does not support. \* The Route is in a namespace the the controller does not have access to.
             */
            "conditions"?: Array<{
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
            }>;
            /**
             * ControllerName is a domain/path string that indicates the name of the controller that wrote this status. This corresponds with the controllerName field on GatewayClass.
             *  Example: "example.net/gateway-controller".
             *  The format of this field is DOMAIN "/" PATH, where DOMAIN and PATH are valid Kubernetes names (https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
             */
            "controllerName": string;
            /**
             * ParentRef corresponds with a ParentRef in the spec that this RouteParentStatus struct describes the status of.
             */
            "parentRef": {
                /**
                 * Group is the group of the referent.
                 *  Support: Core
                 */
                "group"?: string;
                /**
                 * Kind is kind of the referent.
                 *  Support: Core (Gateway) Support: Custom (Other Resources)
                 */
                "kind"?: string;
                /**
                 * Name is the name of the referent.
                 *  Support: Core
                 */
                "name": string;
                /**
                 * Namespace is the namespace of the referent. When unspecified (or empty string), this refers to the local namespace of the Route.
                 *  Support: Core
                 */
                "namespace"?: string;
                /**
                 * Port is the network port this Route targets. It can be interpreted differently based on the type of parent resource:
                 *  \* Gateway: All listeners listening on the specified port that also support this kind of Route(and select this Route). It's not recommended to set `Port` unless the networking behaviors specified in a Route must apply to a specific port as opposed to a listener(s) whose port(s) may be changed. When both Port and SectionName are specified, the name and port of the selected listener must match both specified values.
                 *  Implementations MAY choose to support other parent resources. Implementations supporting other types of parent resources MUST clearly document how/if Port is interpreted.
                 *  For the purpose of status, an attachment is considered successful as long as the parent resource accepts it partially. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway.
                 *  Support: Extended
                 *  <gateway:experimental>
                 */
                "port"?: number;
                /**
                 * SectionName is the name of a section within the target resource. In the following resources, SectionName is interpreted as the following:
                 *  \* Gateway: Listener Name. When both Port (experimental) and SectionName are specified, the name and port of the selected listener must match both specified values.
                 *  Implementations MAY choose to support attaching Routes to other resources. If that is the case, they MUST clearly document how SectionName is interpreted.
                 *  When unspecified (empty string), this will reference the entire resource. For the purpose of status, an attachment is considered successful if at least one section in the parent resource accepts it. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway.
                 *  Support: Core
                 */
                "sectionName"?: string;
            };
        }>;
    };
}
/**
 * TDGRPCRoute is the Schema for the Traffic Director GRPCRoute resource.
 */
export declare class TDGRPCRoute extends Model<ITDGRPCRoute> implements ITDGRPCRoute {
    "apiVersion": ITDGRPCRoute["apiVersion"];
    "kind": ITDGRPCRoute["kind"];
    "metadata"?: ITDGRPCRoute["metadata"];
    "spec"?: ITDGRPCRoute["spec"];
    "status"?: ITDGRPCRoute["status"];
    static apiVersion: ITDGRPCRoute["apiVersion"];
    static kind: ITDGRPCRoute["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ITDGRPCRoute>;
    constructor(data?: ModelData<ITDGRPCRoute>);
}
