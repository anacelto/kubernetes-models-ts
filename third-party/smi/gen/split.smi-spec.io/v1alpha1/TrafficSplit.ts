import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/SplitSmiSpecIoV1alpha1TrafficSplit";

/**
 * TrafficSplit is the Schema for the trafficsplits API
 */
export interface ITrafficSplit {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "split.smi-spec.io/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "TrafficSplit";
  "metadata"?: IObjectMeta;
  /**
   * TrafficSplitSpec defines the desired state of TrafficSplit
   */
  "spec"?: {
    "backends"?: Array<{
      "service"?: string;
      "weight"?: number | string;
    }>;
    "service"?: string;
  };
  /**
   * TrafficSplitStatus defines the observed state of TrafficSplit
   */
  "status"?: {
  };
}

/**
 * TrafficSplit is the Schema for the trafficsplits API
 */
export class TrafficSplit extends Model<ITrafficSplit> implements ITrafficSplit {
  "apiVersion": ITrafficSplit["apiVersion"];
  "kind": ITrafficSplit["kind"];
  "metadata"?: ITrafficSplit["metadata"];
  "spec"?: ITrafficSplit["spec"];
  "status"?: ITrafficSplit["status"];

static apiVersion: ITrafficSplit["apiVersion"] = "split.smi-spec.io/v1alpha1";
static kind: ITrafficSplit["kind"] = "TrafficSplit";
static is = createTypeMetaGuard<ITrafficSplit>(TrafficSplit);

constructor(data?: ModelData<ITrafficSplit>) {
  super();

  this.setDefinedProps({
    apiVersion: TrafficSplit.apiVersion,
    kind: TrafficSplit.kind,
    ...data
  } as ITrafficSplit);
}
}


setValidateFunc(TrafficSplit, validate as ValidateFunc<ITrafficSplit>);
