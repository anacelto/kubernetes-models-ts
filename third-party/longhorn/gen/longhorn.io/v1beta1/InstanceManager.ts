import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/LonghornIoV1beta1InstanceManager";

/**
 * InstanceManager is where Longhorn stores instance manager object.
 */
export interface IInstanceManager {
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
  "kind": "InstanceManager";
  "metadata"?: IObjectMeta;
  "spec"?: any;
  "status"?: any;
}

/**
 * InstanceManager is where Longhorn stores instance manager object.
 */
export class InstanceManager extends Model<IInstanceManager> implements IInstanceManager {
  "apiVersion": IInstanceManager["apiVersion"];
  "kind": IInstanceManager["kind"];
  "metadata"?: IInstanceManager["metadata"];
  "spec"?: IInstanceManager["spec"];
  "status"?: IInstanceManager["status"];

static apiVersion: IInstanceManager["apiVersion"] = "longhorn.io/v1beta1";
static kind: IInstanceManager["kind"] = "InstanceManager";
static is = createTypeMetaGuard<IInstanceManager>(InstanceManager);

constructor(data?: ModelData<IInstanceManager>) {
  super();

  this.setDefinedProps({
    apiVersion: InstanceManager.apiVersion,
    kind: InstanceManager.kind,
    ...data
  } as IInstanceManager);
}
}


setValidateFunc(InstanceManager, validate as ValidateFunc<IInstanceManager>);
