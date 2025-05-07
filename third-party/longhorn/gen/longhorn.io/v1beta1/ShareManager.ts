import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/LonghornIoV1beta1ShareManager";

/**
 * ShareManager is where Longhorn stores share manager object.
 */
export interface IShareManager {
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
  "kind": "ShareManager";
  "metadata"?: IObjectMeta;
  "spec"?: any;
  "status"?: any;
}

/**
 * ShareManager is where Longhorn stores share manager object.
 */
export class ShareManager extends Model<IShareManager> implements IShareManager {
  "apiVersion": IShareManager["apiVersion"];
  "kind": IShareManager["kind"];
  "metadata"?: IShareManager["metadata"];
  "spec"?: IShareManager["spec"];
  "status"?: IShareManager["status"];

static apiVersion: IShareManager["apiVersion"] = "longhorn.io/v1beta1";
static kind: IShareManager["kind"] = "ShareManager";
static is = createTypeMetaGuard<IShareManager>(ShareManager);

constructor(data?: ModelData<IShareManager>) {
  super();

  this.setDefinedProps({
    apiVersion: ShareManager.apiVersion,
    kind: ShareManager.kind,
    ...data
  } as IShareManager);
}
}


setValidateFunc(ShareManager, validate as ValidateFunc<IShareManager>);
