import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/LonghornIoV1beta1EngineImage";

/**
 * EngineImage is where Longhorn stores engine image object.
 */
export interface IEngineImage {
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
  "kind": "EngineImage";
  "metadata"?: IObjectMeta;
  "spec"?: any;
  "status"?: any;
}

/**
 * EngineImage is where Longhorn stores engine image object.
 */
export class EngineImage extends Model<IEngineImage> implements IEngineImage {
  "apiVersion": IEngineImage["apiVersion"];
  "kind": IEngineImage["kind"];
  "metadata"?: IEngineImage["metadata"];
  "spec"?: IEngineImage["spec"];
  "status"?: IEngineImage["status"];

static apiVersion: IEngineImage["apiVersion"] = "longhorn.io/v1beta1";
static kind: IEngineImage["kind"] = "EngineImage";
static is = createTypeMetaGuard<IEngineImage>(EngineImage);

constructor(data?: ModelData<IEngineImage>) {
  super();

  this.setDefinedProps({
    apiVersion: EngineImage.apiVersion,
    kind: EngineImage.kind,
    ...data
  } as IEngineImage);
}
}


setValidateFunc(EngineImage, validate as ValidateFunc<IEngineImage>);
