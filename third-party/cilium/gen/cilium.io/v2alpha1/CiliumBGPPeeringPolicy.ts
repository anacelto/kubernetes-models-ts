import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CiliumIoV2alpha1CiliumBGPPeeringPolicy";

/**
 * CiliumBGPPeeringPolicy is a Kubernetes third-party resource for instructing Cilium's BGP control plane to create virtual BGP routers.
 */
export interface ICiliumBGPPeeringPolicy {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "cilium.io/v2alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "CiliumBGPPeeringPolicy";
  "metadata": IObjectMeta;
  /**
   * Spec is a human readable description of a BGP peering policy
   */
  "spec"?: {
    /**
     * NodeSelector selects a group of nodes where this BGP Peering Policy applies. 
     *  If nil this policy applies to all nodes.
     */
    "nodeSelector"?: {
      /**
       * matchExpressions is a list of label selector requirements. The requirements are ANDed.
       */
      "matchExpressions"?: Array<{
        /**
         * key is the label key that the selector applies to.
         */
        "key": string;
        /**
         * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
         */
        "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
        /**
         * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
         */
        "values"?: Array<string>;
      }>;
      /**
       * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
       */
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    /**
     * A list of CiliumBGPVirtualRouter(s) which instructs the BGP control plane how to instantiate virtual BGP routers.
     */
    "virtualRouters": Array<{
      /**
       * ExportPodCIDR determines whether to export the Node's private CIDR block to the configured neighbors.
       */
      "exportPodCIDR"?: boolean;
      /**
       * LocalASN is the ASN of this virtual router. Supports extended 32bit ASNs
       */
      "localASN": number;
      /**
       * Neighbors is a list of neighboring BGP peers for this virtual router
       */
      "neighbors": Array<{
        /**
         * PeerASN is the ASN of the peer BGP router. Supports extended 32bit ASNs
         */
        "peerASN": number;
        /**
         * PeerAddress is the IP address of the peer. This must be in CIDR notation and use a /32 to express a single host.
         */
        "peerAddress": string;
      }>;
    }>;
  };
}

/**
 * CiliumBGPPeeringPolicy is a Kubernetes third-party resource for instructing Cilium's BGP control plane to create virtual BGP routers.
 */
export class CiliumBGPPeeringPolicy extends Model<ICiliumBGPPeeringPolicy> implements ICiliumBGPPeeringPolicy {
  "apiVersion": ICiliumBGPPeeringPolicy["apiVersion"];
  "kind": ICiliumBGPPeeringPolicy["kind"];
  "metadata": ICiliumBGPPeeringPolicy["metadata"];
  "spec"?: ICiliumBGPPeeringPolicy["spec"];

static apiVersion: ICiliumBGPPeeringPolicy["apiVersion"] = "cilium.io/v2alpha1";
static kind: ICiliumBGPPeeringPolicy["kind"] = "CiliumBGPPeeringPolicy";
static is = createTypeMetaGuard<ICiliumBGPPeeringPolicy>(CiliumBGPPeeringPolicy);

constructor(data?: ModelData<ICiliumBGPPeeringPolicy>) {
  super();

  this.setDefinedProps({
    apiVersion: CiliumBGPPeeringPolicy.apiVersion,
    kind: CiliumBGPPeeringPolicy.kind,
    ...data
  } as ICiliumBGPPeeringPolicy);
}
}


setValidateFunc(CiliumBGPPeeringPolicy, validate as ValidateFunc<ICiliumBGPPeeringPolicy>);
