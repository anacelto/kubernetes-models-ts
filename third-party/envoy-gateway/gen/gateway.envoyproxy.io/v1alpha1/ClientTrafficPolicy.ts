import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/GatewayEnvoyproxyIoV1alpha1ClientTrafficPolicy";

/**
 * ClientTrafficPolicy allows the user to configure the behavior of the connection between the downstream client and Envoy Proxy listener.
 */
export interface IClientTrafficPolicy {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "gateway.envoyproxy.io/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "ClientTrafficPolicy";
  "metadata"?: IObjectMeta;
  /**
   * Spec defines the desired state of ClientTrafficPolicy.
   */
  "spec": {
    /**
     * ClientIPDetectionSettings provides configuration for determining the original client IP address for requests.
     */
    "clientIPDetection"?: {
      /**
       * CustomHeader provides configuration for determining the client IP address for a request based on a trusted custom HTTP header. This uses the the custom_header original IP detection extension. Refer to https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/http/original_ip_detection/custom_header/v3/custom_header.proto for more details.
       */
      "customHeader"?: {
        /**
         * FailClosed is a switch used to control the flow of traffic when client IP detection fails. If set to true, the listener will respond with 403 Forbidden when the client IP address cannot be determined.
         */
        "failClosed"?: boolean;
        /**
         * Name of the header containing the original downstream remote address, if present.
         */
        "name": string;
      };
      /**
       * XForwardedForSettings provides configuration for using X-Forwarded-For headers for determining the client IP address.
       */
      "xForwardedFor"?: {
        /**
         * NumTrustedHops controls the number of additional ingress proxy hops from the right side of XFF HTTP headers to trust when determining the origin client's IP address. Refer to https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_conn_man/headers#x-forwarded-for for more details.
         */
        "numTrustedHops"?: number;
      };
    };
    /**
     * EnableProxyProtocol interprets the ProxyProtocol header and adds the Client Address into the X-Forwarded-For header. Note Proxy Protocol must be present when this field is set, else the connection is closed.
     */
    "enableProxyProtocol"?: boolean;
    /**
     * HeaderSettings provides configuration for header management.
     */
    "headers"?: {
      /**
       * EnableEnvoyHeaders configures Envoy Proxy to add the "X-Envoy-" headers to requests and responses.
       */
      "enableEnvoyHeaders"?: boolean;
    };
    /**
     * HTTP1 provides HTTP/1 configuration on the listener.
     */
    "http1"?: {
      /**
       * EnableTrailers defines if HTTP/1 trailers should be proxied by Envoy.
       */
      "enableTrailers"?: boolean;
      /**
       * HTTP10 turns on support for HTTP/1.0 and HTTP/0.9 requests.
       */
      "http10"?: {
        /**
         * UseDefaultHost defines if the HTTP/1.0 request is missing the Host header, then the hostname associated with the listener should be injected into the request. If this is not set and an HTTP/1.0 request arrives without a host, then it will be rejected.
         */
        "useDefaultHost"?: boolean;
      };
      /**
       * PreserveHeaderCase defines if Envoy should preserve the letter case of headers. By default, Envoy will lowercase all the headers.
       */
      "preserveHeaderCase"?: boolean;
    };
    /**
     * HTTP3 provides HTTP/3 configuration on the listener.
     */
    "http3"?: {
    };
    /**
     * Path enables managing how the incoming path set by clients can be normalized.
     */
    "path"?: {
      /**
       * DisableMergeSlashes allows disabling the default configuration of merging adjacent slashes in the path. Note that slash merging is not part of the HTTP spec and is provided for convenience.
       */
      "disableMergeSlashes"?: boolean;
      /**
       * EscapedSlashesAction determines how %2f, %2F, %5c, or %5C sequences in the path URI should be handled. The default is UnescapeAndRedirect.
       */
      "escapedSlashesAction"?: "KeepUnchanged" | "RejectRequest" | "UnescapeAndForward" | "UnescapeAndRedirect";
    };
    /**
     * TargetRef is the name of the Gateway resource this policy is being attached to. This Policy and the TargetRef MUST be in the same namespace for this Policy to have effect and be applied to the Gateway. TargetRef
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
       * Namespace is the namespace of the referent. When unspecified, the local namespace is inferred. Even when policy targets a resource in a different namespace, it MUST only apply to traffic originating from the same namespace as the policy.
       */
      "namespace"?: string;
      /**
       * SectionName is the name of a section within the target resource. When unspecified, this targetRef targets the entire resource. In the following resources, SectionName is interpreted as the following: 
       *  \* Gateway: Listener Name \* Service: Port Name 
       *  If a SectionName is specified, but does not exist on the targeted object, the Policy must fail to attach, and the policy implementation should record a `ResolvedRefs` or similar Condition in the Policy's status.
       */
      "sectionName"?: string;
    };
    /**
     * TcpKeepalive settings associated with the downstream client connection. If defined, sets SO_KEEPALIVE on the listener socket to enable TCP Keepalives. Disabled by default.
     */
    "tcpKeepalive"?: {
      /**
       * The duration a connection needs to be idle before keep-alive probes start being sent. The duration format is Defaults to `7200s`.
       */
      "idleTime"?: string;
      /**
       * The duration between keep-alive probes. Defaults to `75s`.
       */
      "interval"?: string;
      /**
       * The total number of unacknowledged probes to send before deciding the connection is dead. Defaults to 9.
       */
      "probes"?: number;
    };
    /**
     * Timeout settings for the client connections.
     */
    "timeout"?: {
      /**
       * Timeout settings for HTTP.
       */
      "http"?: {
        /**
         * The duration envoy waits for the complete request reception. This timer starts upon request initiation and stops when either the last byte of the request is sent upstream or when the response begins.
         */
        "requestReceivedTimeout"?: string;
      };
    };
    /**
     * TLS settings configure TLS termination settings with the downstream client.
     */
    "tls"?: {
      /**
       * ALPNProtocols supplies the list of ALPN protocols that should be exposed by the listener. By default h2 and http/1.1 are enabled. Supported values are: - http/1.0 - http/1.1 - h2
       */
      "alpnProtocols"?: Array<"http/1.0" | "http/1.1" | "h2">;
      /**
       * Ciphers specifies the set of cipher suites supported when negotiating TLS 1.0 - 1.2. This setting has no effect for TLS 1.3. In non-FIPS Envoy Proxy builds the default cipher list is: - [ECDHE-ECDSA-AES128-GCM-SHA256|ECDHE-ECDSA-CHACHA20-POLY1305] - [ECDHE-RSA-AES128-GCM-SHA256|ECDHE-RSA-CHACHA20-POLY1305] - ECDHE-ECDSA-AES256-GCM-SHA384 - ECDHE-RSA-AES256-GCM-SHA384 In builds using BoringSSL FIPS the default cipher list is: - ECDHE-ECDSA-AES128-GCM-SHA256 - ECDHE-RSA-AES128-GCM-SHA256 - ECDHE-ECDSA-AES256-GCM-SHA384 - ECDHE-RSA-AES256-GCM-SHA384
       */
      "ciphers"?: Array<string>;
      /**
       * ClientValidation specifies the configuration to validate the client initiating the TLS connection to the Gateway listener.
       */
      "clientValidation"?: {
        /**
         * CACertificateRefs contains one or more references to Kubernetes objects that contain TLS certificates of the Certificate Authorities that can be used as a trust anchor to validate the certificates presented by the client. 
         *  A single reference to a Kubernetes ConfigMap or a Kubernetes Secret, with the CA certificate in a key named `ca.crt` is currently supported. 
         *  References to a resource in different namespace are invalid UNLESS there is a ReferenceGrant in the target namespace that allows the certificate to be attached.
         */
        "caCertificateRefs"?: Array<{
          /**
           * Group is the group of the referent. For example, "gateway.networking.k8s.io". When unspecified or empty string, core API group is inferred.
           */
          "group"?: string;
          /**
           * Kind is kind of the referent. For example "Secret".
           */
          "kind"?: string;
          /**
           * Name is the name of the referent.
           */
          "name": string;
          /**
           * Namespace is the namespace of the referenced object. When unspecified, the local namespace is inferred. 
           *  Note that when a namespace different than the local namespace is specified, a ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. 
           *  Support: Core
           */
          "namespace"?: string;
        }>;
      };
      /**
       * ECDHCurves specifies the set of supported ECDH curves. In non-FIPS Envoy Proxy builds the default curves are: - X25519 - P-256 In builds using BoringSSL FIPS the default curve is: - P-256
       */
      "ecdhCurves"?: Array<string>;
      /**
       * Max specifies the maximal TLS protocol version to allow The default is TLS 1.3 if this is not specified.
       */
      "maxVersion"?: "Auto" | "1.0" | "1.1" | "1.2" | "1.3";
      /**
       * Min specifies the minimal TLS protocol version to allow. The default is TLS 1.2 if this is not specified.
       */
      "minVersion"?: "Auto" | "1.0" | "1.1" | "1.2" | "1.3";
      /**
       * SignatureAlgorithms specifies which signature algorithms the listener should support.
       */
      "signatureAlgorithms"?: Array<string>;
    };
  };
  /**
   * Status defines the current status of ClientTrafficPolicy.
   */
  "status"?: {
    /**
     * Ancestors is a list of ancestor resources (usually Gateways) that are associated with the policy, and the status of the policy with respect to each ancestor. When this policy attaches to a parent, the controller that manages the parent and the ancestors MUST add an entry to this list when the controller first sees the policy and SHOULD update the entry as appropriate when the relevant ancestor is modified. 
     *  Note that choosing the relevant ancestor is left to the Policy designers; an important part of Policy design is designing the right object level at which to namespace this status. 
     *  Note also that implementations MUST ONLY populate ancestor status for the Ancestor resources they are responsible for. Implementations MUST use the ControllerName field to uniquely identify the entries in this list that they are responsible for. 
     *  Note that to achieve this, the list of PolicyAncestorStatus structs MUST be treated as a map with a composite key, made up of the AncestorRef and ControllerName fields combined. 
     *  A maximum of 16 ancestors will be represented in this list. An empty list means the Policy is not relevant for any ancestors. 
     *  If this slice is full, implementations MUST NOT add further entries. Instead they MUST consider the policy unimplementable and signal that on any related resources such as the ancestor that would be referenced here. For example, if this list was full on BackendTLSPolicy, no additional Gateways would be able to reference the Service targeted by the BackendTLSPolicy.
     */
    "ancestors": Array<{
      /**
       * AncestorRef corresponds with a ParentRef in the spec that this PolicyAncestorStatus struct describes the status of.
       */
      "ancestorRef": {
        /**
         * Group is the group of the referent. When unspecified, "gateway.networking.k8s.io" is inferred. To set the core API group (such as for a "Service" kind referent), Group must be explicitly set to "" (empty string). 
         *  Support: Core
         */
        "group"?: string;
        /**
         * Kind is kind of the referent. 
         *  There are two kinds of parent resources with "Core" support: 
         *  \* Gateway (Gateway conformance profile) \* Service (Mesh conformance profile, experimental, ClusterIP Services only) 
         *  Support for other resources is Implementation-Specific.
         */
        "kind"?: string;
        /**
         * Name is the name of the referent. 
         *  Support: Core
         */
        "name": string;
        /**
         * Namespace is the namespace of the referent. When unspecified, this refers to the local namespace of the Route. 
         *  Note that there are specific rules for ParentRefs which cross namespace boundaries. Cross-namespace references are only valid if they are explicitly allowed by something in the namespace they are referring to. For example: Gateway has the AllowedRoutes field, and ReferenceGrant provides a generic way to enable any other kind of cross-namespace reference. 
         *  <gateway:experimental:description> ParentRefs from a Route to a Service in the same namespace are "producer" routes, which apply default routing rules to inbound connections from any namespace to the Service. 
         *  ParentRefs from a Route to a Service in a different namespace are "consumer" routes, and these routing rules are only applied to outbound connections originating from the same namespace as the Route, for which the intended destination of the connections are a Service targeted as a ParentRef of the Route. </gateway:experimental:description> 
         *  Support: Core
         */
        "namespace"?: string;
        /**
         * Port is the network port this Route targets. It can be interpreted differently based on the type of parent resource. 
         *  When the parent resource is a Gateway, this targets all listeners listening on the specified port that also support this kind of Route(and select this Route). It's not recommended to set `Port` unless the networking behaviors specified in a Route must apply to a specific port as opposed to a listener(s) whose port(s) may be changed. When both Port and SectionName are specified, the name and port of the selected listener must match both specified values. 
         *  <gateway:experimental:description> When the parent resource is a Service, this targets a specific port in the Service spec. When both Port (experimental) and SectionName are specified, the name and port of the selected port must match both specified values. </gateway:experimental:description> 
         *  Implementations MAY choose to support other parent resources. Implementations supporting other types of parent resources MUST clearly document how/if Port is interpreted. 
         *  For the purpose of status, an attachment is considered successful as long as the parent resource accepts it partially. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway. 
         *  Support: Extended 
         *  <gateway:experimental>
         */
        "port"?: number;
        /**
         * SectionName is the name of a section within the target resource. In the following resources, SectionName is interpreted as the following: 
         *  \* Gateway: Listener Name. When both Port (experimental) and SectionName are specified, the name and port of the selected listener must match both specified values. \* Service: Port Name. When both Port (experimental) and SectionName are specified, the name and port of the selected listener must match both specified values. Note that attaching Routes to Services as Parents is part of experimental Mesh support and is not supported for any other purpose. 
         *  Implementations MAY choose to support attaching Routes to other resources. If that is the case, they MUST clearly document how SectionName is interpreted. 
         *  When unspecified (empty string), this will reference the entire resource. For the purpose of status, an attachment is considered successful if at least one section in the parent resource accepts it. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway. 
         *  Support: Core
         */
        "sectionName"?: string;
      };
      /**
       * Conditions describes the status of the Policy with respect to the given Ancestor.
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
       *  Controllers MUST populate this field when writing status. Controllers should ensure that entries to status populated with their ControllerName are cleaned up when they are no longer necessary.
       */
      "controllerName": string;
    }>;
  };
}

/**
 * ClientTrafficPolicy allows the user to configure the behavior of the connection between the downstream client and Envoy Proxy listener.
 */
export class ClientTrafficPolicy extends Model<IClientTrafficPolicy> implements IClientTrafficPolicy {
  "apiVersion": IClientTrafficPolicy["apiVersion"];
  "kind": IClientTrafficPolicy["kind"];
  "metadata"?: IClientTrafficPolicy["metadata"];
  "spec": IClientTrafficPolicy["spec"];
  "status"?: IClientTrafficPolicy["status"];

static apiVersion: IClientTrafficPolicy["apiVersion"] = "gateway.envoyproxy.io/v1alpha1";
static kind: IClientTrafficPolicy["kind"] = "ClientTrafficPolicy";
static is = createTypeMetaGuard<IClientTrafficPolicy>(ClientTrafficPolicy);

constructor(data?: ModelData<IClientTrafficPolicy>) {
  super();

  this.setDefinedProps({
    apiVersion: ClientTrafficPolicy.apiVersion,
    kind: ClientTrafficPolicy.kind,
    ...data
  } as IClientTrafficPolicy);
}
}


setValidateFunc(ClientTrafficPolicy, validate as ValidateFunc<IClientTrafficPolicy>);
