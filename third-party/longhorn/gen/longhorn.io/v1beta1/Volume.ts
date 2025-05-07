import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/LonghornIoV1beta1Volume";

/**
 * Volume is where Longhorn stores volume object.
 */
export interface IVolume {
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
  "kind": "Volume";
  "metadata"?: IObjectMeta;
  "spec"?: any;
  "status"?: any;
}

/**
 * Volume is where Longhorn stores volume object.
 */
export class Volume extends Model<IVolume> implements IVolume {
  "apiVersion": IVolume["apiVersion"];
  "kind": IVolume["kind"];
  "metadata"?: IVolume["metadata"];
  "spec"?: IVolume["spec"];
  "status"?: IVolume["status"];

static apiVersion: IVolume["apiVersion"] = "longhorn.io/v1beta1";
static kind: IVolume["kind"] = "Volume";
static is = createTypeMetaGuard<IVolume>(Volume);

constructor(data?: ModelData<IVolume>) {
  super();

  this.setDefinedProps({
    apiVersion: Volume.apiVersion,
    kind: Volume.kind,
    ...data
  } as IVolume);
}
}


setValidateFunc(Volume, validate as ValidateFunc<IVolume>);
