import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CiliumIoV2alpha1CiliumEndpointSlice";

/**
 * CiliumEndpointSlice contains a group of CoreCiliumendpoints.
 */
export interface ICiliumEndpointSlice {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "cilium.io/v2alpha1";
  /**
   * Endpoints is a list of coreCEPs packed in a CiliumEndpointSlice
   */
  "endpoints": Array<{
    /**
     * EncryptionSpec defines the encryption relevant configuration of a node.
     */
    "encryption"?: {
      /**
       * Key is the index to the key to use for encryption or 0 if encryption is disabled.
       */
      "key"?: number;
    };
    /**
     * IdentityID is the numeric identity of the endpoint
     */
    "id"?: number;
    /**
     * Name indicate as CiliumEndpoint name.
     */
    "name"?: string;
    /**
     * NamedPorts List of named Layer 4 port and protocol pairs which will be used in Network Policy specs. 
     *  swagger:model NamedPorts
     */
    "named-ports"?: Array<{
      /**
       * Optional layer 4 port name
       */
      "name"?: string;
      /**
       * Layer 4 port number
       */
      "port"?: number;
      /**
       * Layer 4 protocol Enum: [TCP UDP ICMP ICMPV6 ANY]
       */
      "protocol"?: string;
    }>;
    /**
     * EndpointNetworking is the addressing information of an endpoint.
     */
    "networking"?: {
      /**
       * IP4/6 addresses assigned to this Endpoint
       */
      "addressing": Array<{
        "ipv4"?: string;
        "ipv6"?: string;
      }>;
      /**
       * NodeIP is the IP of the node the endpoint is running on. The IP must be reachable between nodes.
       */
      "node"?: string;
    };
  }>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "CiliumEndpointSlice";
  "metadata": IObjectMeta;
  /**
   * Namespace indicate as CiliumEndpointSlice namespace. All the CiliumEndpoints within the same namespace are put together in CiliumEndpointSlice.
   */
  "namespace"?: string;
}

/**
 * CiliumEndpointSlice contains a group of CoreCiliumendpoints.
 */
export class CiliumEndpointSlice extends Model<ICiliumEndpointSlice> implements ICiliumEndpointSlice {
  "apiVersion": ICiliumEndpointSlice["apiVersion"];
  "endpoints": ICiliumEndpointSlice["endpoints"];
  "kind": ICiliumEndpointSlice["kind"];
  "metadata": ICiliumEndpointSlice["metadata"];
  "namespace"?: ICiliumEndpointSlice["namespace"];

static apiVersion: ICiliumEndpointSlice["apiVersion"] = "cilium.io/v2alpha1";
static kind: ICiliumEndpointSlice["kind"] = "CiliumEndpointSlice";
static is = createTypeMetaGuard<ICiliumEndpointSlice>(CiliumEndpointSlice);

constructor(data?: ModelData<ICiliumEndpointSlice>) {
  super();

  this.setDefinedProps({
    apiVersion: CiliumEndpointSlice.apiVersion,
    kind: CiliumEndpointSlice.kind,
    ...data
  } as ICiliumEndpointSlice);
}
}


setValidateFunc(CiliumEndpointSlice, validate as ValidateFunc<ICiliumEndpointSlice>);
