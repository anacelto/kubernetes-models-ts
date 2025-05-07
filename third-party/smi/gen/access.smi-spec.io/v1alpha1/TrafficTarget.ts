import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/AccessSmiSpecIoV1alpha1TrafficTarget";

/**
 * TrafficTarget is the Schema for the traffictargets API TrafficTarget associates a set of traffic definitions (rules) with a service identity which is allocated to a group of pods. Access is controlled via referenced TrafficSpecs and by a list of source service identities. \* If a pod which holds the referenced service identity makes a call to the destination on one of the defined routes then access   will be allowed \* Any pod which attempts to connect and is not in the defined list of sources will be denied \* Any pod which is in the defined list, but attempts to connect on a route which is not in the list of the   TrafficSpecs will be denied
 */
export interface ITrafficTarget {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "access.smi-spec.io/v1alpha1";
  /**
   * Selector is the pod or group of pods to allow ingress traffic
   */
  "destination": {
    /**
     * Kind is the type of Subject to allow ingress (ServiceAccount | Group)
     */
    "kind": string;
    /**
     * Name of the Subject, i.e. ServiceAccountName
     */
    "name": string;
    /**
     * Namespace where the Subject is deployed
     */
    "namespace"?: string;
    /**
     * Port defines a TCP port to apply the TrafficTarget to
     */
    "port"?: number;
  };
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "TrafficTarget";
  "metadata"?: IObjectMeta;
  /**
   * Sources are the pod or group of pods to allow ingress traffic
   */
  "sources": Array<{
    /**
     * Kind is the type of Subject to allow ingress (ServiceAccount | Group)
     */
    "kind": string;
    /**
     * Name of the Subject, i.e. ServiceAccountName
     */
    "name": string;
    /**
     * Namespace where the Subject is deployed
     */
    "namespace"?: string;
    /**
     * Port defines a TCP port to apply the TrafficTarget to
     */
    "port"?: number;
  }>;
  /**
   * Rules are the traffic rules to allow (HTTPRoutes | TCPRoute),
   */
  "specs": Array<{
    /**
     * Kind is the kind of TrafficSpec to allow
     */
    "kind": string;
    /**
     * Matches is a list of TrafficSpec routes to allow traffic for
     */
    "matches"?: Array<string>;
    /**
     * Name of the TrafficSpec to use
     */
    "name": string;
    /**
     * TrafficTargetStatus defines the observed state of UDPRoute
     */
    "status"?: {
    };
  }>;
}

/**
 * TrafficTarget is the Schema for the traffictargets API TrafficTarget associates a set of traffic definitions (rules) with a service identity which is allocated to a group of pods. Access is controlled via referenced TrafficSpecs and by a list of source service identities. \* If a pod which holds the referenced service identity makes a call to the destination on one of the defined routes then access   will be allowed \* Any pod which attempts to connect and is not in the defined list of sources will be denied \* Any pod which is in the defined list, but attempts to connect on a route which is not in the list of the   TrafficSpecs will be denied
 */
export class TrafficTarget extends Model<ITrafficTarget> implements ITrafficTarget {
  "apiVersion": ITrafficTarget["apiVersion"];
  "destination": ITrafficTarget["destination"];
  "kind": ITrafficTarget["kind"];
  "metadata"?: ITrafficTarget["metadata"];
  "sources": ITrafficTarget["sources"];
  "specs": ITrafficTarget["specs"];

static apiVersion: ITrafficTarget["apiVersion"] = "access.smi-spec.io/v1alpha1";
static kind: ITrafficTarget["kind"] = "TrafficTarget";
static is = createTypeMetaGuard<ITrafficTarget>(TrafficTarget);

constructor(data?: ModelData<ITrafficTarget>) {
  super();

  this.setDefinedProps({
    apiVersion: TrafficTarget.apiVersion,
    kind: TrafficTarget.kind,
    ...data
  } as ITrafficTarget);
}
}


setValidateFunc(TrafficTarget, validate as ValidateFunc<ITrafficTarget>);
