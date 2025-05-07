import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/NetworkingGkeIoV1GCPGatewayPolicy";

/**
 * GCPGatewayPolicy provides a way to apply SSL policy and other configuration to
 * the GKE Gateway.
 */
export interface IGCPGatewayPolicy {
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
  "kind": "GCPGatewayPolicy";
  "metadata"?: IObjectMeta;
  /**
   * Spec defines the desired state of GCPGatewayPolicy.
   */
  "spec": {
    /**
     * Default defines default gateway policy configuration for the targeted resource.
     */
    "default"?: {
      "allowGlobalAccess"?: boolean;
      /**
       * Region allows to specify load balancer's region for Multi-cluster Gateway.
       */
      "region"?: string;
      "sslPolicy"?: string;
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
   * Status defines the current state of GCPGatewayPolicy.
   */
  "status"?: {
    /**
     * Conditions describe the current conditions of the GatewayPolicy.
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
 * GCPGatewayPolicy provides a way to apply SSL policy and other configuration to
 * the GKE Gateway.
 */
export class GCPGatewayPolicy extends Model<IGCPGatewayPolicy> implements IGCPGatewayPolicy {
  "apiVersion": IGCPGatewayPolicy["apiVersion"];
  "kind": IGCPGatewayPolicy["kind"];
  "metadata"?: IGCPGatewayPolicy["metadata"];
  "spec": IGCPGatewayPolicy["spec"];
  "status"?: IGCPGatewayPolicy["status"];

static apiVersion: IGCPGatewayPolicy["apiVersion"] = "networking.gke.io/v1";
static kind: IGCPGatewayPolicy["kind"] = "GCPGatewayPolicy";
static is = createTypeMetaGuard<IGCPGatewayPolicy>(GCPGatewayPolicy);

constructor(data?: ModelData<IGCPGatewayPolicy>) {
  super();

  this.setDefinedProps({
    apiVersion: GCPGatewayPolicy.apiVersion,
    kind: GCPGatewayPolicy.kind,
    ...data
  } as IGCPGatewayPolicy);
}
}


setValidateFunc(GCPGatewayPolicy, validate as ValidateFunc<IGCPGatewayPolicy>);
