import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/GatewayNetworkingK8sIoV1alpha2BackendTLSPolicy";

/**
 * BackendTLSPolicy provides a way to configure how a Gateway connects to a Backend via TLS.
 */
export interface IBackendTLSPolicy {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "gateway.networking.k8s.io/v1alpha2";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "BackendTLSPolicy";
  "metadata"?: IObjectMeta;
  /**
   * Spec defines the desired state of BackendTLSPolicy.
   */
  "spec": {
    /**
     * TargetRef identifies an API object to apply the policy to. Only Services have Extended support. Implementations MAY support additional objects, with Implementation Specific support. Note that this config applies to the entire referenced resource by default, but this default may change in the future to provide a more granular application of the policy. 
     *  Support: Extended for Kubernetes Service 
     *  Support: Implementation-specific for any other resource
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
     * TLS contains backend TLS policy configuration.
     */
    "tls": {
      /**
       * CACertRefs contains one or more references to Kubernetes objects that contain a PEM-encoded TLS CA certificate bundle, which is used to validate a TLS handshake between the Gateway and backend Pod. 
       *  If CACertRefs is empty or unspecified, then WellKnownCACerts must be specified. Only one of CACertRefs or WellKnownCACerts may be specified, not both. If CACertRefs is empty or unspecified, the configuration for WellKnownCACerts MUST be honored instead. 
       *  References to a resource in a different namespace are invalid for the moment, although we will revisit this in the future. 
       *  A single CACertRef to a Kubernetes ConfigMap kind has "Core" support. Implementations MAY choose to support attaching multiple certificates to a backend, but this behavior is implementation-specific. 
       *  Support: Core - An optional single reference to a Kubernetes ConfigMap, with the CA certificate in a key named `ca.crt`. 
       *  Support: Implementation-specific (More than one reference, or other kinds of resources).
       */
      "caCertRefs"?: Array<{
        /**
         * Group is the group of the referent. For example, "gateway.networking.k8s.io". When unspecified or empty string, core API group is inferred.
         */
        "group": string;
        /**
         * Kind is kind of the referent. For example "HTTPRoute" or "Service".
         */
        "kind": string;
        /**
         * Name is the name of the referent.
         */
        "name": string;
      }>;
      /**
       * Hostname is used for two purposes in the connection between Gateways and backends: 
       *  1. Hostname MUST be used as the SNI to connect to the backend (RFC 6066). 2. Hostname MUST be used for authentication and MUST match the certificate served by the matching backend. 
       *  Support: Core
       */
      "hostname": string;
      /**
       * WellKnownCACerts specifies whether system CA certificates may be used in the TLS handshake between the gateway and backend pod. 
       *  If WellKnownCACerts is unspecified or empty (""), then CACertRefs must be specified with at least one entry for a valid configuration. Only one of CACertRefs or WellKnownCACerts may be specified, not both. 
       *  Support: Core for "System"
       */
      "wellKnownCACerts"?: "System";
    };
  };
  /**
   * Status defines the current state of BackendTLSPolicy.
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
         *   ParentRefs from a Route to a Service in the same namespace are "producer" routes, which apply default routing rules to inbound connections from any namespace to the Service. 
         *  ParentRefs from a Route to a Service in a different namespace are "consumer" routes, and these routing rules are only applied to outbound connections originating from the same namespace as the Route, for which the intended destination of the connections are a Service targeted as a ParentRef of the Route.  
         *  Support: Core
         */
        "namespace"?: string;
        /**
         * Port is the network port this Route targets. It can be interpreted differently based on the type of parent resource. 
         *  When the parent resource is a Gateway, this targets all listeners listening on the specified port that also support this kind of Route(and select this Route). It's not recommended to set `Port` unless the networking behaviors specified in a Route must apply to a specific port as opposed to a listener(s) whose port(s) may be changed. When both Port and SectionName are specified, the name and port of the selected listener must match both specified values. 
         *   When the parent resource is a Service, this targets a specific port in the Service spec. When both Port (experimental) and SectionName are specified, the name and port of the selected port must match both specified values.  
         *  Implementations MAY choose to support other parent resources. Implementations supporting other types of parent resources MUST clearly document how/if Port is interpreted. 
         *  For the purpose of status, an attachment is considered successful as long as the parent resource accepts it partially. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway. 
         *  Support: Extended 
         *  
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
 * BackendTLSPolicy provides a way to configure how a Gateway connects to a Backend via TLS.
 */
export class BackendTLSPolicy extends Model<IBackendTLSPolicy> implements IBackendTLSPolicy {
  "apiVersion": IBackendTLSPolicy["apiVersion"];
  "kind": IBackendTLSPolicy["kind"];
  "metadata"?: IBackendTLSPolicy["metadata"];
  "spec": IBackendTLSPolicy["spec"];
  "status"?: IBackendTLSPolicy["status"];

static apiVersion: IBackendTLSPolicy["apiVersion"] = "gateway.networking.k8s.io/v1alpha2";
static kind: IBackendTLSPolicy["kind"] = "BackendTLSPolicy";
static is = createTypeMetaGuard<IBackendTLSPolicy>(BackendTLSPolicy);

constructor(data?: ModelData<IBackendTLSPolicy>) {
  super();

  this.setDefinedProps({
    apiVersion: BackendTLSPolicy.apiVersion,
    kind: BackendTLSPolicy.kind,
    ...data
  } as IBackendTLSPolicy);
}
}


setValidateFunc(BackendTLSPolicy, validate as ValidateFunc<IBackendTLSPolicy>);
