import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/LonghornIoV1beta1Engine";

/**
 * Engine is where Longhorn stores engine object.
 */
export interface IEngine {
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
  "kind": "Engine";
  "metadata"?: IObjectMeta;
  "spec"?: any;
  "status"?: any;
}

/**
 * Engine is where Longhorn stores engine object.
 */
export class Engine extends Model<IEngine> implements IEngine {
  "apiVersion": IEngine["apiVersion"];
  "kind": IEngine["kind"];
  "metadata"?: IEngine["metadata"];
  "spec"?: IEngine["spec"];
  "status"?: IEngine["status"];

static apiVersion: IEngine["apiVersion"] = "longhorn.io/v1beta1";
static kind: IEngine["kind"] = "Engine";
static is = createTypeMetaGuard<IEngine>(Engine);

constructor(data?: ModelData<IEngine>) {
  super();

  this.setDefinedProps({
    apiVersion: Engine.apiVersion,
    kind: Engine.kind,
    ...data
  } as IEngine);
}
}


setValidateFunc(Engine, validate as ValidateFunc<IEngine>);
