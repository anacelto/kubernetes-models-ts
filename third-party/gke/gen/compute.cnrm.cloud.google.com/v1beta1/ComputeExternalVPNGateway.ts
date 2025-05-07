import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ComputeCnrmCloudGoogleComV1beta1ComputeExternalVPNGateway";

export interface IComputeExternalVPNGateway {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "compute.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "ComputeExternalVPNGateway";
  "metadata"?: IObjectMeta;
  "spec"?: {
    /**
     * Immutable. An optional description of this resource.
     */
    "description"?: string;
    /**
     * Immutable. A list of interfaces on this external VPN gateway.
     */
    "interface"?: Array<{
      /**
       * Immutable. The numeric ID for this interface. Allowed values are based on the redundancy type
       * of this external VPN gateway
       * \* '0 - SINGLE_IP_INTERNALLY_REDUNDANT'
       * \* '0, 1 - TWO_IPS_REDUNDANCY'
       * \* '0, 1, 2, 3 - FOUR_IPS_REDUNDANCY'.
       */
      "id"?: number;
      /**
       * Immutable. IP address of the interface in the external VPN gateway.
       * Only IPv4 is supported. This IP address can be either from
       * your on-premise gateway or another Cloud provider's VPN gateway,
       * it cannot be an IP address from Google Compute Engine.
       */
      "ipAddress"?: string;
    }>;
    /**
     * Immutable. Indicates the redundancy type of this external VPN gateway Possible values: ["FOUR_IPS_REDUNDANCY", "SINGLE_IP_INTERNALLY_REDUNDANT", "TWO_IPS_REDUNDANCY"].
     */
    "redundancyType"?: string;
    /**
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
  };
  "status"?: {
    /**
     * Conditions represent the latest available observation of the resource's current state.
     */
    "conditions"?: Array<{
      /**
       * Last time the condition transitioned from one status to another.
       */
      "lastTransitionTime"?: string;
      /**
       * Human-readable message indicating details about last transition.
       */
      "message"?: string;
      /**
       * Unique, one-word, CamelCase reason for the condition's last transition.
       */
      "reason"?: string;
      /**
       * Status is the status of the condition. Can be True, False, Unknown.
       */
      "status"?: string;
      /**
       * Type is the type of the condition.
       */
      "type"?: string;
    }>;
    /**
     * The fingerprint used for optimistic locking of this resource.  Used
     * internally during updates.
     */
    "labelFingerprint"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    "selfLink"?: string;
  };
}

export class ComputeExternalVPNGateway extends Model<IComputeExternalVPNGateway> implements IComputeExternalVPNGateway {
  "apiVersion": IComputeExternalVPNGateway["apiVersion"];
  "kind": IComputeExternalVPNGateway["kind"];
  "metadata"?: IComputeExternalVPNGateway["metadata"];
  "spec"?: IComputeExternalVPNGateway["spec"];
  "status"?: IComputeExternalVPNGateway["status"];

static apiVersion: IComputeExternalVPNGateway["apiVersion"] = "compute.cnrm.cloud.google.com/v1beta1";
static kind: IComputeExternalVPNGateway["kind"] = "ComputeExternalVPNGateway";
static is = createTypeMetaGuard<IComputeExternalVPNGateway>(ComputeExternalVPNGateway);

constructor(data?: ModelData<IComputeExternalVPNGateway>) {
  super();

  this.setDefinedProps({
    apiVersion: ComputeExternalVPNGateway.apiVersion,
    kind: ComputeExternalVPNGateway.kind,
    ...data
  } as IComputeExternalVPNGateway);
}
}


setValidateFunc(ComputeExternalVPNGateway, validate as ValidateFunc<IComputeExternalVPNGateway>);
