import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/SpecsSmiSpecIoV1alpha4UDPRoute";

/**
 * UDPRoute is the Schema for the udproutes API
 */
export interface IUDPRoute {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "specs.smi-spec.io/v1alpha4";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "UDPRoute";
  "metadata"?: IObjectMeta;
  /**
   * UDPRouteSpec defines the desired state of UDPRoute
   */
  "spec"?: {
    /**
     * Route match for inbound traffic
     */
    "matches"?: {
      /**
       * Name is the name of the match for referencing in a TrafficTarget
       */
      "name"?: string;
      /**
       * Ports to allow inbound traffic on
       */
      "ports"?: Array<number>;
    };
  };
  /**
   * UDPRouteStatus defines the observed state of UDPRoute
   */
  "status"?: {
  };
}

/**
 * UDPRoute is the Schema for the udproutes API
 */
export class UDPRoute extends Model<IUDPRoute> implements IUDPRoute {
  "apiVersion": IUDPRoute["apiVersion"];
  "kind": IUDPRoute["kind"];
  "metadata"?: IUDPRoute["metadata"];
  "spec"?: IUDPRoute["spec"];
  "status"?: IUDPRoute["status"];

static apiVersion: IUDPRoute["apiVersion"] = "specs.smi-spec.io/v1alpha4";
static kind: IUDPRoute["kind"] = "UDPRoute";
static is = createTypeMetaGuard<IUDPRoute>(UDPRoute);

constructor(data?: ModelData<IUDPRoute>) {
  super();

  this.setDefinedProps({
    apiVersion: UDPRoute.apiVersion,
    kind: UDPRoute.kind,
    ...data
  } as IUDPRoute);
}
}


setValidateFunc(UDPRoute, validate as ValidateFunc<IUDPRoute>);
