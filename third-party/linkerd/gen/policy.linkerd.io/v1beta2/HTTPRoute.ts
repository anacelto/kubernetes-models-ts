import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/PolicyLinkerdIoV1beta2HTTPRoute";

/**
 * HTTPRoute provides a way to route HTTP requests. This includes the capability to match requests by hostname, path, header, or query param. Filters can be used to specify additional processing steps. Backends specify where matching requests should be routed.
 */
export interface IHTTPRoute {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "policy.linkerd.io/v1beta2";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "HTTPRoute";
  "metadata"?: IObjectMeta;
  /**
   * Spec defines the desired state of HTTPRoute.
   */
  "spec": {
    /**
     * Hostnames defines a set of hostname that should match against the HTTP Host header to select a HTTPRoute to process the request. This matches the RFC 1123 definition of a hostname with 2 notable exceptions: 
     *  1. IPs are not allowed. 2. A hostname may be prefixed with a wildcard label (`\*.`). The wildcard    label must appear by itself as the first label. 
     *  If a hostname is specified by both the Listener and HTTPRoute, there must be at least one intersecting hostname for the HTTPRoute to be attached to the Listener. For example: 
     *  \* A Listener with `test.example.com` as the hostname matches HTTPRoutes   that have either not specified any hostnames, or have specified at   least one of `test.example.com` or `\*.example.com`. \* A Listener with `\*.example.com` as the hostname matches HTTPRoutes   that have either not specified any hostnames or have specified at least   one hostname that matches the Listener hostname. For example,   `\*.example.com`, `test.example.com`, and `foo.test.example.com` would   all match. On the other hand, `example.com` and `test.example.net` would   not match. 
     *  Hostnames that are prefixed with a wildcard label (`\*.`) are interpreted as a suffix match. That means that a match for `\*.example.com` would match both `test.example.com`, and `foo.test.example.com`, but not `example.com`. 
     *  If both the Listener and HTTPRoute have specified hostnames, any HTTPRoute hostnames that do not match the Listener hostname MUST be ignored. For example, if a Listener specified `\*.example.com`, and the HTTPRoute specified `test.example.com` and `test.example.net`, `test.example.net` must not be considered for a match. 
     *  If both the Listener and HTTPRoute have specified hostnames, and none match with the criteria above, then the HTTPRoute is not accepted. The implementation must raise an 'Accepted' Condition with a status of `False` in the corresponding RouteParentStatus. 
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
       * Port specifies the destination port number to use for this resource. Port is required when the referent is a Kubernetes Service. In this case, the port number is the service port number, not the target port. For other resources, destination port might be derived from the referent resource or this field. 
       *  Support: Extended
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
     * Rules are a list of HTTP matchers, filters and actions.
     */
    "rules"?: Array<{
      /**
       * BackendRefs defines the backend(s) where matching requests should be sent. 
       *  Failure behavior here depends on how many BackendRefs are specified and how many are invalid. 
       *  If \*all\* entries in BackendRefs are invalid, and there are also no filters specified in this route rule, \*all\* traffic which matches this rule MUST receive a 500 status code. 
       *  See the HTTPBackendRef definition for the rules about what makes a single HTTPBackendRef invalid. 
       *  When a HTTPBackendRef is invalid, 500 status codes MUST be returned for requests that would have otherwise been routed to an invalid backend. If multiple backends are specified, and some are invalid, the proportion of requests that would otherwise have been routed to an invalid backend MUST receive a 500 status code. 
       *  For example, if two backends are specified with equal weights, and one is invalid, 50 percent of traffic must receive a 500. Implementations may choose how that 50 percent is determined. 
       *  Support: Core for Kubernetes Service 
       *  Support: Implementation-specific for any other resource 
       *  Support for weight: Core
       */
      "backendRefs"?: Array<{
        /**
         * Group is the group of the referent. For example, "gateway.networking.k8s.io". When unspecified or empty string, core API group is inferred.
         */
        "group"?: string;
        /**
         * Kind is kind of the referent. For example "HTTPRoute" or "Service". Defaults to "Service" when not specified.
         */
        "kind"?: string;
        /**
         * Name is the name of the referent.
         */
        "name": string;
        /**
         * Namespace is the namespace of the backend. When unspecified, the local namespace is inferred. 
         *  Note that when a namespace is specified, a ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. 
         *  Support: Core
         */
        "namespace"?: string;
        /**
         * Port specifies the destination port number to use for this resource. Port is required when the referent is a Kubernetes Service. In this case, the port number is the service port number, not the target port. For other resources, destination port might be derived from the referent resource or this field.
         */
        "port"?: number;
        /**
         * Weight specifies the proportion of requests forwarded to the referenced backend. This is computed as weight/(sum of all weights in this BackendRefs list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports. Weight is not a percentage and the sum of weights does not need to equal 100. 
         *  If only one backend is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend. If weight is set to 0, no traffic should be forwarded for this entry. If unspecified, weight defaults to 1. 
         *  Support for this field varies based on the context where used.
         */
        "weight"?: number;
        /**
         * Filters defined at this level should be executed if and only if the request is being forwarded to the backend defined here. 
         *  Support: Implementation-specific (For broader support of filters, use the Filters field in HTTPRouteRule.)
         */
        "filters"?: Array<{
          /**
           * RequestHeaderModifier defines a schema for a filter that modifies request headers. 
           *  Support: Core
           */
          "requestHeaderModifier"?: {
            /**
             * Add adds the given header(s) (name, value) to the request before the action. It appends to any existing values associated with the header name. 
             *  Input: GET /foo HTTP/1.1 my-header: foo 
             *  Config: add: - name: "my-header" value: "bar,baz" 
             *  Output: GET /foo HTTP/1.1 my-header: foo,bar,baz
             */
            "add"?: Array<{
              /**
               * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). 
               *  If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, "foo" and "Foo" are considered equivalent.
               */
              "name": string;
              /**
               * Value is the value of HTTP Header to be matched.
               */
              "value": string;
            }>;
            /**
             * Remove the given header(s) from the HTTP request before the action. The value of Remove is a list of HTTP header names. Note that the header names are case-insensitive (see https://datatracker.ietf.org/doc/html/rfc2616#section-4.2). 
             *  Input: GET /foo HTTP/1.1 my-header1: foo my-header2: bar my-header3: baz 
             *  Config: remove: ["my-header1", "my-header3"] 
             *  Output: GET /foo HTTP/1.1 my-header2: bar
             */
            "remove"?: Array<string>;
            /**
             * Set overwrites the request with the given header (name, value) before the action. 
             *  Input: GET /foo HTTP/1.1 my-header: foo 
             *  Config: set: - name: "my-header" value: "bar" 
             *  Output: GET /foo HTTP/1.1 my-header: bar
             */
            "set"?: Array<{
              /**
               * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). 
               *  If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, "foo" and "Foo" are considered equivalent.
               */
              "name": string;
              /**
               * Value is the value of HTTP Header to be matched.
               */
              "value": string;
            }>;
          };
          /**
           * RequestRedirect defines a schema for a filter that responds to the request with an HTTP redirection. 
           *  Support: Core
           */
          "requestRedirect"?: {
            /**
             * Hostname is the hostname to be used in the value of the `Location` header in the response. When empty, the hostname in the `Host` header of the request is used. 
             *  Support: Core
             */
            "hostname"?: string;
            /**
             * Path defines parameters used to modify the path of the incoming request. The modified path is then used to construct the `Location` header. When empty, the request path is used as-is. 
             *  Support: Extended
             */
            "path"?: {
              /**
               * ReplaceFullPath specifies the value with which to replace the full path of a request during a rewrite or redirect.
               */
              "replaceFullPath"?: string;
              /**
               * ReplacePrefixMatch specifies the value with which to replace the prefix match of a request during a rewrite or redirect. For example, a request to "/foo/bar" with a prefix match of "/foo" and a ReplacePrefixMatch of "/xyz" would be modified to "/xyz/bar". 
               *  Note that this matches the behavior of the PathPrefix match type. This matches full path elements. A path element refers to the list of labels in the path split by the `/` separator. When specified, a trailing `/` is ignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all match the prefix `/abc`, but the path `/abcd` would not. 
               *  Request Path | Prefix Match | Replace Prefix | Modified Path -------------|--------------|----------------|---------- /foo/bar     | /foo         | /xyz           | /xyz/bar /foo/bar     | /foo         | /xyz/          | /xyz/bar /foo/bar     | /foo/        | /xyz           | /xyz/bar /foo/bar     | /foo/        | /xyz/          | /xyz/bar /foo         | /foo         | /xyz           | /xyz /foo/        | /foo         | /xyz           | /xyz/ /foo/bar     | /foo         | <empty string> | /bar /foo/        | /foo         | <empty string> | / /foo         | /foo         | <empty string> | / /foo/        | /foo         | /              | / /foo         | /foo         | /              | /
               */
              "replacePrefixMatch"?: string;
              /**
               * Type defines the type of path modifier. Additional types may be added in a future release of the API. 
               *  Note that values may be added to this enum, implementations must ensure that unknown values will not cause a crash. 
               *  Unknown values here must result in the implementation setting the Accepted Condition for the Route to `status: False`, with a Reason of `UnsupportedValue`.
               */
              "type": "ReplaceFullPath" | "ReplacePrefixMatch";
            };
            /**
             * Port is the port to be used in the value of the `Location` header in the response. 
             *  If no port is specified, the redirect port MUST be derived using the following rules: 
             *  \* If redirect scheme is not-empty, the redirect port MUST be the well-known port associated with the redirect scheme. Specifically "http" to port 80 and "https" to port 443. If the redirect scheme does not have a well-known port, the listener port of the Gateway SHOULD be used. \* If redirect scheme is empty, the redirect port MUST be the Gateway Listener port. 
             *  Implementations SHOULD NOT add the port number in the 'Location' header in the following cases: 
             *  \* A Location header that will use HTTP (whether that is determined via the Listener protocol or the Scheme field) _and_ use port 80. \* A Location header that will use HTTPS (whether that is determined via the Listener protocol or the Scheme field) _and_ use port 443. 
             *  Support: Extended
             */
            "port"?: number;
            /**
             * Scheme is the scheme to be used in the value of the `Location` header in the response. When empty, the scheme of the request is used. 
             *  Scheme redirects can affect the port of the redirect, for more information, refer to the documentation for the port field of this filter. 
             *  Note that values may be added to this enum, implementations must ensure that unknown values will not cause a crash. 
             *  Unknown values here must result in the implementation setting the Accepted Condition for the Route to `status: False`, with a Reason of `UnsupportedValue`. 
             *  Support: Extended
             */
            "scheme"?: "http" | "https";
            /**
             * StatusCode is the HTTP status code to be used in response. 
             *  Note that values may be added to this enum, implementations must ensure that unknown values will not cause a crash. 
             *  Unknown values here must result in the implementation setting the Accepted Condition for the Route to `status: False`, with a Reason of `UnsupportedValue`. 
             *  Support: Core
             */
            "statusCode"?: 301 | 302;
          };
          /**
           * ResponseHeaderModifier defines a schema for a filter that modifies response headers. 
           *  Support: Extended
           */
          "responseHeaderModifier"?: {
            /**
             * Add adds the given header(s) (name, value) to the request before the action. It appends to any existing values associated with the header name. 
             *  Input: GET /foo HTTP/1.1 my-header: foo 
             *  Config: add: - name: "my-header" value: "bar,baz" 
             *  Output: GET /foo HTTP/1.1 my-header: foo,bar,baz
             */
            "add"?: Array<{
              /**
               * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). 
               *  If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, "foo" and "Foo" are considered equivalent.
               */
              "name": string;
              /**
               * Value is the value of HTTP Header to be matched.
               */
              "value": string;
            }>;
            /**
             * Remove the given header(s) from the HTTP request before the action. The value of Remove is a list of HTTP header names. Note that the header names are case-insensitive (see https://datatracker.ietf.org/doc/html/rfc2616#section-4.2). 
             *  Input: GET /foo HTTP/1.1 my-header1: foo my-header2: bar my-header3: baz 
             *  Config: remove: ["my-header1", "my-header3"] 
             *  Output: GET /foo HTTP/1.1 my-header2: bar
             */
            "remove"?: Array<string>;
            /**
             * Set overwrites the request with the given header (name, value) before the action. 
             *  Input: GET /foo HTTP/1.1 my-header: foo 
             *  Config: set: - name: "my-header" value: "bar" 
             *  Output: GET /foo HTTP/1.1 my-header: bar
             */
            "set"?: Array<{
              /**
               * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). 
               *  If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, "foo" and "Foo" are considered equivalent.
               */
              "name": string;
              /**
               * Value is the value of HTTP Header to be matched.
               */
              "value": string;
            }>;
          };
          /**
           * Type identifies the type of filter to apply. As with other API fields, types are classified into three conformance levels: 
           *  - Core: Filter types and their corresponding configuration defined by "Support: Core" in this package, e.g. "RequestHeaderModifier". All implementations must support core filters. 
           *  - Extended: Filter types and their corresponding configuration defined by "Support: Extended" in this package, e.g. "RequestMirror". Implementers are encouraged to support extended filters. 
           *  - Implementation-specific: Filters that are defined and supported by specific vendors. In the future, filters showing convergence in behavior across multiple implementations will be considered for inclusion in extended or core conformance levels. Filter-specific configuration for such filters is specified using the ExtensionRef field. `Type` should be set to "ExtensionRef" for custom filters. 
           *  Implementers are encouraged to define custom implementation types to extend the core API with implementation-specific behavior. 
           *  If a reference to a custom filter type cannot be resolved, the filter MUST NOT be skipped. Instead, requests that would have been processed by that filter MUST receive a HTTP error response. 
           *  Note that values may be added to this enum, implementations must ensure that unknown values will not cause a crash. 
           *  Unknown values here must result in the implementation setting the Accepted Condition for the Route to `status: False`, with a Reason of `UnsupportedValue`.
           */
          "type": "RequestHeaderModifier" | "ResponseHeaderModifier" | "RequestRedirect";
        }>;
      }>;
      /**
       * Filters define the filters that are applied to requests that match this rule. 
       *  The effects of ordering of multiple behaviors are currently unspecified. This can change in the future based on feedback during the alpha stage. 
       *  Conformance-levels at this level are defined based on the type of filter: 
       *  - ALL core filters MUST be supported by all implementations. - Implementers are encouraged to support extended filters. - Implementation-specific custom filters have no API guarantees across   implementations. 
       *  Specifying a core filter multiple times has unspecified or custom conformance. 
       *  All filters are expected to be compatible with each other except for the URLRewrite and RequestRedirect filters, which may not be combined. If an implementation can not support other combinations of filters, they must clearly document that limitation. In all cases where incompatible or unsupported filters are specified, implementations MUST add a warning condition to status. 
       *  Support: Core
       */
      "filters"?: Array<{
        /**
         * RequestHeaderModifier defines a schema for a filter that modifies request headers. 
         *  Support: Core
         */
        "requestHeaderModifier"?: {
          /**
           * Add adds the given header(s) (name, value) to the request before the action. It appends to any existing values associated with the header name. 
           *  Input:   GET /foo HTTP/1.1   my-header: foo 
           *  Config:   add:   - name: "my-header"     value: "bar" 
           *  Output:   GET /foo HTTP/1.1   my-header: foo   my-header: bar
           */
          "add"?: Array<{
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). 
             *  If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, "foo" and "Foo" are considered equivalent.
             */
            "name": string;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            "value": string;
          }>;
          /**
           * Remove the given header(s) from the HTTP request before the action. The value of Remove is a list of HTTP header names. Note that the header names are case-insensitive (see https://datatracker.ietf.org/doc/html/rfc2616#section-4.2). 
           *  Input:   GET /foo HTTP/1.1   my-header1: foo   my-header2: bar   my-header3: baz 
           *  Config:   remove: ["my-header1", "my-header3"] 
           *  Output:   GET /foo HTTP/1.1   my-header2: bar
           */
          "remove"?: Array<string>;
          /**
           * Set overwrites the request with the given header (name, value) before the action. 
           *  Input:   GET /foo HTTP/1.1   my-header: foo 
           *  Config:   set:   - name: "my-header"     value: "bar" 
           *  Output:   GET /foo HTTP/1.1   my-header: bar
           */
          "set"?: Array<{
            /**
             * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). 
             *  If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, "foo" and "Foo" are considered equivalent.
             */
            "name": string;
            /**
             * Value is the value of HTTP Header to be matched.
             */
            "value": string;
          }>;
        };
        /**
         * RequestRedirect defines a schema for a filter that responds to the request with an HTTP redirection. 
         *  Support: Core
         */
        "requestRedirect"?: {
          /**
           * Hostname is the hostname to be used in the value of the `Location` header in the response. When empty, the hostname of the request is used. 
           *  Support: Core
           */
          "hostname"?: string;
          /**
           * Path defines parameters used to modify the path of the incoming request. The modified path is then used to construct the `Location` header. When empty, the request path is used as-is. 
           *  Support: Extended
           */
          "path"?: {
            /**
             * ReplaceFullPath specifies the value with which to replace the full path of a request during a rewrite or redirect.
             */
            "replaceFullPath"?: string;
            /**
             * ReplacePrefixMatch specifies the value with which to replace the prefix match of a request during a rewrite or redirect. For example, a request to "/foo/bar" with a prefix match of "/foo" and a ReplacePrefixMatch of "/xyz" would be modified to "/xyz/bar". 
             *  Note that this matches the behavior of the PathPrefix match type. This matches full path elements. A path element refers to the list of labels in the path split by the `/` separator. When specified, a trailing `/` is ignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all match the prefix `/abc`, but the path `/abcd` would not. 
             *  Request Path | Prefix Match | Replace Prefix | Modified Path -------------|--------------|----------------|---------- /foo/bar     | /foo         | /xyz           | /xyz/bar /foo/bar     | /foo         | /xyz/          | /xyz/bar /foo/bar     | /foo/        | /xyz           | /xyz/bar /foo/bar     | /foo/        | /xyz/          | /xyz/bar /foo         | /foo         | /xyz           | /xyz /foo/        | /foo         | /xyz           | /xyz/ /foo/bar     | /foo         | <empty string> | /bar /foo/        | /foo         | <empty string> | / /foo         | /foo         | <empty string> | / /foo/        | /foo         | /              | / /foo         | /foo         | /              | /
             */
            "replacePrefixMatch"?: string;
            /**
             * Type defines the type of path modifier. Additional types may be added in a future release of the API. 
             *  Note that values may be added to this enum, implementations must ensure that unknown values will not cause a crash. 
             *  Unknown values here must result in the implementation setting the Accepted Condition for the Route to `status: False`, with a Reason of `UnsupportedValue`.
             */
            "type": "ReplaceFullPath" | "ReplacePrefixMatch";
          };
          /**
           * Port is the port to be used in the value of the `Location` header in the response. When empty, port (if specified) of the request is used. 
           *  Support: Extended
           */
          "port"?: number;
          /**
           * Scheme is the scheme to be used in the value of the `Location` header in the response. When empty, the scheme of the request is used. 
           *  Support: Extended
           */
          "scheme"?: "http" | "https";
          /**
           * StatusCode is the HTTP status code to be used in response. 
           *  Support: Core
           */
          "statusCode"?: 301 | 302;
        };
        /**
         * Type identifies the type of filter to apply. As with other API fields, types are classified into three conformance levels: 
         *  - Core: Filter types and their corresponding configuration defined by   "Support: Core" in this package, e.g. "RequestHeaderModifier".
         */
        "type": "RequestHeaderModifier" | "RequestRedirect";
      }>;
      /**
       * Matches define conditions used for matching the rule against incoming HTTP requests. Each match is independent, i.e. this rule will be matched if \*\*any\*\* one of the matches is satisfied. 
       *  For example, take the following matches configuration: 
       *  ``` matches: - path:     value: "/foo"   headers:   - name: "version"     value: "v2" - path:     value: "/v2/foo" ``` 
       *  For a request to match against this rule, a request must satisfy EITHER of the two conditions: 
       *  - path prefixed with `/foo` AND contains the header `version: v2` - path prefix of `/v2/foo` 
       *  See the documentation for HTTPRouteMatch on how to specify multiple match conditions that should be ANDed together. 
       *  If no matches are specified, the default is a prefix path match on "/", which has the effect of matching every HTTP request. 
       *  Proxy or Load Balancer routing configuration generated from HTTPRoutes MUST prioritize rules based on the following criteria, continuing on ties. Precedence must be given to the the Rule with the largest number of: 
       *  \* Characters in a matching non-wildcard hostname. \* Characters in a matching hostname. \* Characters in a matching path. \* Header matches. \* Query param matches. 
       *  If ties still exist across multiple Routes, matching precedence MUST be determined in order of the following criteria, continuing on ties: 
       *  \* The oldest Route based on creation timestamp. \* The Route appearing first in alphabetical order by   "{namespace}/{name}". 
       *  If ties still exist within the Route that has been given precedence, matching precedence MUST be granted to the first matching rule meeting the above criteria. 
       *  When no rules matching a request have been successfully attached to the parent a request is coming from, a HTTP 404 status code MUST be returned.
       */
      "matches"?: Array<{
        /**
         * Headers specifies HTTP request header matchers. Multiple match values are ANDed together, meaning, a request must match all the specified headers to select the route.
         */
        "headers"?: Array<{
          /**
           * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). 
           *  If multiple entries specify equivalent header names, only the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, "foo" and "Foo" are considered equivalent. 
           *  When a header is repeated in an HTTP request, it is implementation-specific behavior as to how this is represented. Generally, proxies should follow the guidance from the RFC: https://www.rfc-editor.org/rfc/rfc7230.html#section-3.2.2 regarding processing a repeated header, with special handling for "Set-Cookie".
           */
          "name": string;
          /**
           * Type specifies how to match against the value of the header. 
           *  Support: Core (Exact) 
           *  Support: Custom (RegularExpression) 
           *  Since RegularExpression HeaderMatchType has custom conformance, implementations can support POSIX, PCRE or any other dialects of regular expressions. Please read the implementation's documentation to determine the supported dialect.
           */
          "type"?: "Exact" | "RegularExpression";
          /**
           * Value is the value of HTTP Header to be matched.
           */
          "value": string;
        }>;
        /**
         * Method specifies HTTP method matcher. When specified, this route will be matched only if the request has the specified method. 
         *  Support: Extended
         */
        "method"?: "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE" | "PATCH";
        /**
         * Path specifies a HTTP request path matcher. If this field is not specified, a default prefix match on the "/" path is provided.
         */
        "path"?: {
          /**
           * Type specifies how to match against the path Value. 
           *  Support: Core (Exact, PathPrefix) 
           *  Support: Custom (RegularExpression)
           */
          "type"?: "Exact" | "PathPrefix" | "RegularExpression";
          /**
           * Value of the HTTP path to match against.
           */
          "value"?: string;
        };
        /**
         * QueryParams specifies HTTP query parameter matchers. Multiple match values are ANDed together, meaning, a request must match all the specified query parameters to select the route.
         */
        "queryParams"?: Array<{
          /**
           * Name is the name of the HTTP query param to be matched. This must be an exact string match. (See https://tools.ietf.org/html/rfc7230#section-2.7.3).
           */
          "name": string;
          /**
           * Type specifies how to match against the value of the query parameter. 
           *  Support: Extended (Exact) 
           *  Support: Custom (RegularExpression) 
           *  Since RegularExpression QueryParamMatchType has custom conformance, implementations can support POSIX, PCRE or any other dialects of regular expressions. Please read the implementation's documentation to determine the supported dialect.
           */
          "type"?: "Exact" | "RegularExpression";
          /**
           * Value is the value of HTTP query param to be matched.
           */
          "value": string;
        }>;
      }>;
    }>;
  };
  /**
   * Status defines the current state of HTTPRoute.
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
       *  Controllers MUST populate this field when writing status. Controllers should ensure that entries to status populated with their ControllerName are cleaned up when they are no longer necessary.
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
         * Port is the network port this Route targets. It can be interpreted differently based on the type of parent resource. 
         *  When the parent resource is a Gateway, this targets all listeners listening on the specified port that also support this kind of Route(and select this Route). It's not recommended to set `Port` unless the networking behaviors specified in a Route must apply to a specific port as opposed to a listener(s) whose port(s) may be changed. When both Port and SectionName are specified, the name and port of the selected listener must match both specified values. 
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
 * HTTPRoute provides a way to route HTTP requests. This includes the capability to match requests by hostname, path, header, or query param. Filters can be used to specify additional processing steps. Backends specify where matching requests should be routed.
 */
export class HTTPRoute extends Model<IHTTPRoute> implements IHTTPRoute {
  "apiVersion": IHTTPRoute["apiVersion"];
  "kind": IHTTPRoute["kind"];
  "metadata"?: IHTTPRoute["metadata"];
  "spec": IHTTPRoute["spec"];
  "status"?: IHTTPRoute["status"];

static apiVersion: IHTTPRoute["apiVersion"] = "policy.linkerd.io/v1beta2";
static kind: IHTTPRoute["kind"] = "HTTPRoute";
static is = createTypeMetaGuard<IHTTPRoute>(HTTPRoute);

constructor(data?: ModelData<IHTTPRoute>) {
  super();

  this.setDefinedProps({
    apiVersion: HTTPRoute.apiVersion,
    kind: HTTPRoute.kind,
    ...data
  } as IHTTPRoute);
}
}


setValidateFunc(HTTPRoute, validate as ValidateFunc<IHTTPRoute>);
