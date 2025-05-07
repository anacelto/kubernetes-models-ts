import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/LonghornIoV1beta1Setting";

/**
 * Setting is where Longhorn stores setting object.
 */
export interface ISetting {
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
  "kind": "Setting";
  "metadata"?: IObjectMeta;
  "value": string;
}

/**
 * Setting is where Longhorn stores setting object.
 */
export class Setting extends Model<ISetting> implements ISetting {
  "apiVersion": ISetting["apiVersion"];
  "kind": ISetting["kind"];
  "metadata"?: ISetting["metadata"];
  "value": ISetting["value"];

static apiVersion: ISetting["apiVersion"] = "longhorn.io/v1beta1";
static kind: ISetting["kind"] = "Setting";
static is = createTypeMetaGuard<ISetting>(Setting);

constructor(data?: ModelData<ISetting>) {
  super();

  this.setDefinedProps({
    apiVersion: Setting.apiVersion,
    kind: Setting.kind,
    ...data
  } as ISetting);
}
}


setValidateFunc(Setting, validate as ValidateFunc<ISetting>);
