import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/GatewayEnvoyproxyIoV1alpha1SecurityPolicy";

/**
 * SecurityPolicy allows the user to configure various security settings for a Gateway.
 */
export interface ISecurityPolicy {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "gateway.envoyproxy.io/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "SecurityPolicy";
  "metadata"?: IObjectMeta;
  /**
   * Spec defines the desired state of SecurityPolicy.
   */
  "spec": {
    /**
     * BasicAuth defines the configuration for the HTTP Basic Authentication.
     */
    "basicAuth"?: {
      /**
       * The Kubernetes secret which contains the username-password pairs in htpasswd format, used to verify user credentials in the "Authorization" header. 
       *  This is an Opaque secret. The username-password pairs should be stored in the key ".htpasswd". As the key name indicates, the value needs to be the htpasswd format, for example: "user1:{SHA}hashed_user1_password". Right now, only SHA hash algorithm is supported. Reference to https://httpd.apache.org/docs/2.4/programs/htpasswd.html for more details. 
       *  Note: The secret must be in the same namespace as the SecurityPolicy.
       */
      "users": {
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
      };
    };
    /**
     * CORS defines the configuration for Cross-Origin Resource Sharing (CORS).
     */
    "cors"?: {
      /**
       * AllowCredentials indicates whether a request can include user credentials like cookies, authentication headers, or TLS client certificates.
       */
      "allowCredentials"?: boolean;
      /**
       * AllowHeaders defines the headers that are allowed to be sent with requests.
       */
      "allowHeaders"?: Array<string>;
      /**
       * AllowMethods defines the methods that are allowed to make requests.
       */
      "allowMethods"?: Array<string>;
      /**
       * AllowOrigins defines the origins that are allowed to make requests.
       */
      "allowOrigins"?: Array<string>;
      /**
       * ExposeHeaders defines the headers that can be exposed in the responses.
       */
      "exposeHeaders"?: Array<string>;
      /**
       * MaxAge defines how long the results of a preflight request can be cached.
       */
      "maxAge"?: string;
    };
    /**
     * ExtAuth defines the configuration for External Authorization.
     */
    "extAuth"?: {
      /**
       * GRPC defines the gRPC External Authorization service. Either GRPCService or HTTPService must be specified, and only one of them can be provided.
       */
      "grpc"?: {
        /**
         * BackendRef references a Kubernetes object that represents the backend server to which the authorization request will be sent. Only service Kind is supported for now.
         */
        "backendRef": {
          /**
           * Group is the group of the referent. For example, "gateway.networking.k8s.io". When unspecified or empty string, core API group is inferred.
           */
          "group"?: string;
          /**
           * Kind is the Kubernetes resource kind of the referent. For example "Service". 
           *  Defaults to "Service" when not specified. 
           *  ExternalName services can refer to CNAME DNS records that may live outside of the cluster and as such are difficult to reason about in terms of conformance. They also may not be safe to forward to (see CVE-2021-25740 for more information). Implementations SHOULD NOT support ExternalName Services. 
           *  Support: Core (Services with a type other than ExternalName) 
           *  Support: Implementation-specific (Services with type ExternalName)
           */
          "kind"?: string;
          /**
           * Name is the name of the referent.
           */
          "name": string;
          /**
           * Namespace is the namespace of the backend. When unspecified, the local namespace is inferred. 
           *  Note that when a namespace different than the local namespace is specified, a ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. 
           *  Support: Core
           */
          "namespace"?: string;
          /**
           * Port specifies the destination port number to use for this resource. Port is required when the referent is a Kubernetes Service. In this case, the port number is the service port number, not the target port. For other resources, destination port might be derived from the referent resource or this field.
           */
          "port"?: number;
        };
      };
      /**
       * HeadersToExtAuth defines the client request headers that will be included in the request to the external authorization service. Note: If not specified, the default behavior for gRPC and HTTP external authorization services is different due to backward compatibility reasons. All headers will be included in the check request to a gRPC authorization server. Only the following headers will be included in the check request to an HTTP authorization server: Host, Method, Path, Content-Length, and Authorization. And these headers will always be included to the check request to an HTTP authorization server by default, no matter whether they are specified in HeadersToExtAuth or not.
       */
      "headersToExtAuth"?: Array<string>;
      /**
       * HTTP defines the HTTP External Authorization service. Either GRPCService or HTTPService must be specified, and only one of them can be provided.
       */
      "http"?: {
        /**
         * BackendRef references a Kubernetes object that represents the backend server to which the authorization request will be sent. Only service Kind is supported for now.
         */
        "backendRef": {
          /**
           * Group is the group of the referent. For example, "gateway.networking.k8s.io". When unspecified or empty string, core API group is inferred.
           */
          "group"?: string;
          /**
           * Kind is the Kubernetes resource kind of the referent. For example "Service". 
           *  Defaults to "Service" when not specified. 
           *  ExternalName services can refer to CNAME DNS records that may live outside of the cluster and as such are difficult to reason about in terms of conformance. They also may not be safe to forward to (see CVE-2021-25740 for more information). Implementations SHOULD NOT support ExternalName Services. 
           *  Support: Core (Services with a type other than ExternalName) 
           *  Support: Implementation-specific (Services with type ExternalName)
           */
          "kind"?: string;
          /**
           * Name is the name of the referent.
           */
          "name": string;
          /**
           * Namespace is the namespace of the backend. When unspecified, the local namespace is inferred. 
           *  Note that when a namespace different than the local namespace is specified, a ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. 
           *  Support: Core
           */
          "namespace"?: string;
          /**
           * Port specifies the destination port number to use for this resource. Port is required when the referent is a Kubernetes Service. In this case, the port number is the service port number, not the target port. For other resources, destination port might be derived from the referent resource or this field.
           */
          "port"?: number;
        };
        /**
         * HeadersToBackend are the authorization response headers that will be added to the original client request before sending it to the backend server. Note that coexisting headers will be overridden. If not specified, no authorization response headers will be added to the original client request.
         */
        "headersToBackend"?: Array<string>;
        /**
         * Path is the path of the HTTP External Authorization service. If path is specified, the authorization request will be sent to that path, or else the authorization request will be sent to the root path.
         */
        "path"?: string;
      };
    };
    /**
     * JWT defines the configuration for JSON Web Token (JWT) authentication.
     */
    "jwt"?: {
      /**
       * Providers defines the JSON Web Token (JWT) authentication provider type. When multiple JWT providers are specified, the JWT is considered valid if any of the providers successfully validate the JWT. For additional details, see https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/jwt_authn_filter.html.
       */
      "providers": Array<{
        /**
         * Audiences is a list of JWT audiences allowed access. For additional details, see https://tools.ietf.org/html/rfc7519#section-4.1.3. If not provided, JWT audiences are not checked.
         */
        "audiences"?: Array<string>;
        /**
         * ClaimToHeaders is a list of JWT claims that must be extracted into HTTP request headers For examples, following config: The claim must be of type; string, int, double, bool. Array type claims are not supported
         */
        "claimToHeaders"?: Array<{
          /**
           * Claim is the JWT Claim that should be saved into the header : it can be a nested claim of type (eg. "claim.nested.key", "sub"). The nested claim name must use dot "." to separate the JSON name path.
           */
          "claim": string;
          /**
           * Header defines the name of the HTTP request header that the JWT Claim will be saved into.
           */
          "header": string;
        }>;
        /**
         * ExtractFrom defines different ways to extract the JWT token from HTTP request. If empty, it defaults to extract JWT token from the Authorization HTTP request header using Bearer schema or access_token from query parameters.
         */
        "extractFrom"?: {
          /**
           * Cookies represents a list of cookie names to extract the JWT token from.
           */
          "cookies"?: Array<string>;
          /**
           * Headers represents a list of HTTP request headers to extract the JWT token from.
           */
          "headers"?: Array<{
            /**
             * Name is the HTTP header name to retrieve the token
             */
            "name": string;
            /**
             * ValuePrefix is the prefix that should be stripped before extracting the token. The format would be used by Envoy like "{ValuePrefix}<TOKEN>". For example, "Authorization: Bearer <TOKEN>", then the ValuePrefix="Bearer " with a space at the end.
             */
            "valuePrefix"?: string;
          }>;
          /**
           * Params represents a list of query parameters to extract the JWT token from.
           */
          "params"?: Array<string>;
        };
        /**
         * Issuer is the principal that issued the JWT and takes the form of a URL or email address. For additional details, see https://tools.ietf.org/html/rfc7519#section-4.1.1 for URL format and https://rfc-editor.org/rfc/rfc5322.html for email format. If not provided, the JWT issuer is not checked.
         */
        "issuer"?: string;
        /**
         * Name defines a unique name for the JWT provider. A name can have a variety of forms, including RFC1123 subdomains, RFC 1123 labels, or RFC 1035 labels.
         */
        "name": string;
        /**
         * RecomputeRoute clears the route cache and recalculates the routing decision. This field must be enabled if the headers generated from the claim are used for route matching decisions. If the recomputation selects a new route, features targeting the new matched route will be applied.
         */
        "recomputeRoute"?: boolean;
        /**
         * RemoteJWKS defines how to fetch and cache JSON Web Key Sets (JWKS) from a remote HTTP/HTTPS endpoint.
         */
        "remoteJWKS": {
          /**
           * URI is the HTTPS URI to fetch the JWKS. Envoy's system trust bundle is used to validate the server certificate.
           */
          "uri": string;
        };
      }>;
    };
    /**
     * OIDC defines the configuration for the OpenID Connect (OIDC) authentication.
     */
    "oidc"?: {
      /**
       * The client ID to be used in the OIDC [Authentication Request](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest).
       */
      "clientID": string;
      /**
       * The Kubernetes secret which contains the OIDC client secret to be used in the [Authentication Request](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest). 
       *  This is an Opaque secret. The client secret should be stored in the key "client-secret".
       */
      "clientSecret": {
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
      };
      /**
       * The path to log a user out, clearing their credential cookies. If not specified, uses a default logout path "/logout"
       */
      "logoutPath"?: string;
      /**
       * The OIDC Provider configuration.
       */
      "provider": {
        /**
         * The OIDC Provider's [authorization endpoint](https://openid.net/specs/openid-connect-core-1_0.html#AuthorizationEndpoint). If not provided, EG will try to discover it from the provider's [Well-Known Configuration Endpoint](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfigurationResponse).
         */
        "authorizationEndpoint"?: string;
        /**
         * The OIDC Provider's [issuer identifier](https://openid.net/specs/openid-connect-discovery-1_0.html#IssuerDiscovery). Issuer MUST be a URI RFC 3986 [RFC3986] with a scheme component that MUST be https, a host component, and optionally, port and path components and no query or fragment components.
         */
        "issuer": string;
        /**
         * The OIDC Provider's [token endpoint](https://openid.net/specs/openid-connect-core-1_0.html#TokenEndpoint). If not provided, EG will try to discover it from the provider's [Well-Known Configuration Endpoint](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfigurationResponse).
         */
        "tokenEndpoint"?: string;
      };
      /**
       * The redirect URL to be used in the OIDC [Authentication Request](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest). If not specified, uses the default redirect URI "%REQ(x-forwarded-proto)%://%REQ(:authority)%/oauth2/callback"
       */
      "redirectURL"?: string;
      /**
       * The OIDC scopes to be used in the [Authentication Request](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest). The "openid" scope is always added to the list of scopes if not already specified.
       */
      "scopes"?: Array<string>;
    };
    /**
     * TargetRef is the name of the Gateway resource this policy is being attached to. This Policy and the TargetRef MUST be in the same namespace for this Policy to have effect and be applied to the Gateway.
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
  };
  /**
   * Status defines the current status of SecurityPolicy.
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
 * SecurityPolicy allows the user to configure various security settings for a Gateway.
 */
export class SecurityPolicy extends Model<ISecurityPolicy> implements ISecurityPolicy {
  "apiVersion": ISecurityPolicy["apiVersion"];
  "kind": ISecurityPolicy["kind"];
  "metadata"?: ISecurityPolicy["metadata"];
  "spec": ISecurityPolicy["spec"];
  "status"?: ISecurityPolicy["status"];

static apiVersion: ISecurityPolicy["apiVersion"] = "gateway.envoyproxy.io/v1alpha1";
static kind: ISecurityPolicy["kind"] = "SecurityPolicy";
static is = createTypeMetaGuard<ISecurityPolicy>(SecurityPolicy);

constructor(data?: ModelData<ISecurityPolicy>) {
  super();

  this.setDefinedProps({
    apiVersion: SecurityPolicy.apiVersion,
    kind: SecurityPolicy.kind,
    ...data
  } as ISecurityPolicy);
}
}


setValidateFunc(SecurityPolicy, validate as ValidateFunc<ISecurityPolicy>);
