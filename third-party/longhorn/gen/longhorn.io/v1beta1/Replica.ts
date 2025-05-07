import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/LonghornIoV1beta1Replica";

/**
 * Replica is where Longhorn stores replica object.
 */
export interface IReplica {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "longhorn.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "Replica";
  "metadata"?: IObjectMeta;
  "spec"?: any;
  "status"?: any;
}

/**
 * Replica is where Longhorn stores replica object.
 */
export class Replica extends Model<IReplica> implements IReplica {
  "apiVersion": IReplica["apiVersion"];
  "kind": IReplica["kind"];
  "metadata"?: IReplica["metadata"];
  "spec"?: IReplica["spec"];
  "status"?: IReplica["status"];

static apiVersion: IReplica["apiVersion"] = "longhorn.io/v1beta1";
static kind: IReplica["kind"] = "Replica";
static is = createTypeMetaGuard<IReplica>(Replica);

constructor(data?: ModelData<IReplica>) {
  super();

  this.setDefinedProps({
    apiVersion: Replica.apiVersion,
    kind: Replica.kind,
    ...data
  } as IReplica);
}
}


setValidateFunc(Replica, validate as ValidateFunc<IReplica>);
