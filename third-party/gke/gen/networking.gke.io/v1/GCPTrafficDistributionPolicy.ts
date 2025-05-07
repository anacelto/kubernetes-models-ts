import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/NetworkingGkeIoV1GCPTrafficDistributionPolicy";

/**
 * GCPTrafficDistributionPolicy contains settings that configure how traffic should
 * be distributed to its targeting service(s).
 */
export interface IGCPTrafficDistributionPolicy {
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
  "kind": "GCPTrafficDistributionPolicy";
  "metadata"?: IObjectMeta;
  /**
   * Spec defines the desired state for traffic distribution policy settings.
   */
  "spec": {
    /**
     * Default defines default policy configuration for the targeted resource.
     */
    "default"?: {
      /**
       * AutoCapacityDrain contains configurations for auto draining.
       */
      "autoCapacityDrain"?: {
        /**
         * If set to 'True', backends in a certain (cluster, zone) will be
         * drained(considered to have 0 capacity) when less than 25% of the endpoints
         * there are healthy. Default to false.
         */
        "enableAutoCapacityDrain"?: boolean;
      };
      /**
       * FailoverConfig contains configurations for failover behaviors.
       */
      "failoverConfig"?: {
        /**
         * The percentage threshold that a load balancer will begin to send traffic
         * to failover backends. When not specified, the dataplane uses its own
         * builtin default value. For Envoy the default value is 70. Proxyless gRPC
         * defaults to 50.
         */
        "failoverHealthThreshold"?: number;
      };
      /**
       * The load balancing algorithm used within the scope of the locality. This algorithm
       * affects how an individual endpoint is selected for a particular request.
       * LocalityLbAlgorithm works together with ServiceLbAlgorithm.
       * Refer to https://cloud.google.com/load-balancing/docs/service-lb-policy for a
       * more detailed explanation of how they work together.
       * Default to ROUND_ROBIN.
       */
      "localityLbAlgorithm"?: "ROUND_ROBIN" | "LEAST_REQUEST" | "RING_HASH" | "RANDOM" | "ORIGINAL_DESTINATION" | "MAGLEV" | "WEIGHTED_ROUND_ROBIN";
      /**
       * The load balancing algorithm used to determine traffic distribution weighting at
       * cluster/zone level.
       * ServiceLbAlgorithm works together with LocalityLbAlgorithm.
       * Refer to https://cloud.google.com/load-balancing/docs/service-lb-policy for a
       * more detailed explanation of how they work together.
       * Supported values: SPRAY_TO_REGION / WATERFALL_BY_ZONE / WATERFALL_BY_REGION
       * Refer to https://cloud.google.com/load-balancing/docs/service-lb-policy#lb-algos
       * explanation of the algorithms.
       * Default to WATERFALL_BY_REGION.
       */
      "serviceLbAlgorithm"?: "SPRAY_TO_REGION" | "WATERFALL_BY_ZONE" | "WATERFALL_BY_REGION";
    };
    "targetRefs": Array<{
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
    }>;
  };
  /**
   * Status provides the current state of GCPTrafficDistributionPolicy.
   */
  "status"?: {
    /**
     * Ancestors is a list of ancestor resources (usually Gateways) that are
     * associated with the policy, and the status of the policy with respect to
     * each ancestor. When this policy attaches to a parent, the controller that
     * manages the parent and the ancestors MUST add an entry to this list when
     * the controller first sees the policy and SHOULD update the entry as
     * appropriate when the relevant ancestor is modified.
     * 
     * 
     * Note that choosing the relevant ancestor is left to the Policy designers;
     * an important part of Policy design is designing the right object level at
     * which to namespace this status.
     * 
     * 
     * Note also that implementations MUST ONLY populate ancestor status for
     * the Ancestor resources they are responsible for. Implementations MUST
     * use the ControllerName field to uniquely identify the entries in this list
     * that they are responsible for.
     * 
     * 
     * Note that to achieve this, the list of PolicyAncestorStatus structs
     * MUST be treated as a map with a composite key, made up of the AncestorRef
     * and ControllerName fields combined.
     * 
     * 
     * A maximum of 16 ancestors will be represented in this list. An empty list
     * means the Policy is not relevant for any ancestors.
     * 
     * 
     * If this slice is full, implementations MUST NOT add further entries.
     * Instead they MUST consider the policy unimplementable and signal that
     * on any related resources such as the ancestor that would be referenced
     * here. For example, if this list was full on BackendTLSPolicy, no
     * additional Gateways would be able to reference the Service targeted by
     * the BackendTLSPolicy.
     */
    "ancestors": Array<{
      /**
       * AncestorRef corresponds with a ParentRef in the spec that this
       * PolicyAncestorStatus struct describes the status of.
       */
      "ancestorRef": {
        /**
         * Group is the group of the referent.
         * When unspecified, "gateway.networking.k8s.io" is inferred.
         * To set the core API group (such as for a "Service" kind referent),
         * Group must be explicitly set to "" (empty string).
         * 
         * 
         * Support: Core
         */
        "group"?: string;
        /**
         * Kind is kind of the referent.
         * 
         * 
         * There are two kinds of parent resources with "Core" support:
         * 
         * 
         * \* Gateway (Gateway conformance profile)
         * \* Service (Mesh conformance profile, ClusterIP Services only)
         * 
         * 
         * Support for other resources is Implementation-Specific.
         */
        "kind"?: string;
        /**
         * Name is the name of the referent.
         * 
         * 
         * Support: Core
         */
        "name": string;
        /**
         * Namespace is the namespace of the referent. When unspecified, this refers
         * to the local namespace of the Route.
         * 
         * 
         * Note that there are specific rules for ParentRefs which cross namespace
         * boundaries. Cross-namespace references are only valid if they are explicitly
         * allowed by something in the namespace they are referring to. For example:
         * Gateway has the AllowedRoutes field, and ReferenceGrant provides a
         * generic way to enable any other kind of cross-namespace reference.
         * 
         * 
         * <gateway:experimental:description>
         * ParentRefs from a Route to a Service in the same namespace are "producer"
         * routes, which apply default routing rules to inbound connections from
         * any namespace to the Service.
         * 
         * 
         * ParentRefs from a Route to a Service in a different namespace are
         * "consumer" routes, and these routing rules are only applied to outbound
         * connections originating from the same namespace as the Route, for which
         * the intended destination of the connections are a Service targeted as a
         * ParentRef of the Route.
         * </gateway:experimental:description>
         * 
         * 
         * Support: Core
         */
        "namespace"?: string;
        /**
         * Port is the network port this Route targets. It can be interpreted
         * differently based on the type of parent resource.
         * 
         * 
         * When the parent resource is a Gateway, this targets all listeners
         * listening on the specified port that also support this kind of Route(and
         * select this Route). It's not recommended to set `Port` unless the
         * networking behaviors specified in a Route must apply to a specific port
         * as opposed to a listener(s) whose port(s) may be changed. When both Port
         * and SectionName are specified, the name and port of the selected listener
         * must match both specified values.
         * 
         * 
         * <gateway:experimental:description>
         * When the parent resource is a Service, this targets a specific port in the
         * Service spec. When both Port (experimental) and SectionName are specified,
         * the name and port of the selected port must match both specified values.
         * </gateway:experimental:description>
         * 
         * 
         * Implementations MAY choose to support other parent resources.
         * Implementations supporting other types of parent resources MUST clearly
         * document how/if Port is interpreted.
         * 
         * 
         * For the purpose of status, an attachment is considered successful as
         * long as the parent resource accepts it partially. For example, Gateway
         * listeners can restrict which Routes can attach to them by Route kind,
         * namespace, or hostname. If 1 of 2 Gateway listeners accept attachment
         * from the referencing Route, the Route MUST be considered successfully
         * attached. If no Gateway listeners accept attachment from this Route,
         * the Route MUST be considered detached from the Gateway.
         * 
         * 
         * Support: Extended
         */
        "port"?: number;
        /**
         * SectionName is the name of a section within the target resource. In the
         * following resources, SectionName is interpreted as the following:
         * 
         * 
         * \* Gateway: Listener name. When both Port (experimental) and SectionName
         * are specified, the name and port of the selected listener must match
         * both specified values.
         * \* Service: Port name. When both Port (experimental) and SectionName
         * are specified, the name and port of the selected listener must match
         * both specified values.
         * 
         * 
         * Implementations MAY choose to support attaching Routes to other resources.
         * If that is the case, they MUST clearly document how SectionName is
         * interpreted.
         * 
         * 
         * When unspecified (empty string), this will reference the entire resource.
         * For the purpose of status, an attachment is considered successful if at
         * least one section in the parent resource accepts it. For example, Gateway
         * listeners can restrict which Routes can attach to them by Route kind,
         * namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from
         * the referencing Route, the Route MUST be considered successfully
         * attached. If no Gateway listeners accept attachment from this Route, the
         * Route MUST be considered detached from the Gateway.
         * 
         * 
         * Support: Core
         */
        "sectionName"?: string;
      };
      /**
       * Conditions describes the status of the Policy with respect to the given Ancestor.
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
      /**
       * ControllerName is a domain/path string that indicates the name of the
       * controller that wrote this status. This corresponds with the
       * controllerName field on GatewayClass.
       * 
       * 
       * Example: "example.net/gateway-controller".
       * 
       * 
       * The format of this field is DOMAIN "/" PATH, where DOMAIN and PATH are
       * valid Kubernetes names
       * (https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
       * 
       * 
       * Controllers MUST populate this field when writing status. Controllers should ensure that
       * entries to status populated with their ControllerName are cleaned up when they are no
       * longer necessary.
       */
      "controllerName": string;
    }>;
  };
}

/**
 * GCPTrafficDistributionPolicy contains settings that configure how traffic should
 * be distributed to its targeting service(s).
 */
export class GCPTrafficDistributionPolicy extends Model<IGCPTrafficDistributionPolicy> implements IGCPTrafficDistributionPolicy {
  "apiVersion": IGCPTrafficDistributionPolicy["apiVersion"];
  "kind": IGCPTrafficDistributionPolicy["kind"];
  "metadata"?: IGCPTrafficDistributionPolicy["metadata"];
  "spec": IGCPTrafficDistributionPolicy["spec"];
  "status"?: IGCPTrafficDistributionPolicy["status"];

static apiVersion: IGCPTrafficDistributionPolicy["apiVersion"] = "networking.gke.io/v1";
static kind: IGCPTrafficDistributionPolicy["kind"] = "GCPTrafficDistributionPolicy";
static is = createTypeMetaGuard<IGCPTrafficDistributionPolicy>(GCPTrafficDistributionPolicy);

constructor(data?: ModelData<IGCPTrafficDistributionPolicy>) {
  super();

  this.setDefinedProps({
    apiVersion: GCPTrafficDistributionPolicy.apiVersion,
    kind: GCPTrafficDistributionPolicy.kind,
    ...data
  } as IGCPTrafficDistributionPolicy);
}
}


setValidateFunc(GCPTrafficDistributionPolicy, validate as ValidateFunc<IGCPTrafficDistributionPolicy>);
