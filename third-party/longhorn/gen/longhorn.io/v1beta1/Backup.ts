import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/LonghornIoV1beta1Backup";

/**
 * Backup is where Longhorn stores backup object.
 */
export interface IBackup {
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
  "kind": "Backup";
  "metadata"?: IObjectMeta;
  "spec"?: any;
  "status"?: any;
}

/**
 * Backup is where Longhorn stores backup object.
 */
export class Backup extends Model<IBackup> implements IBackup {
  "apiVersion": IBackup["apiVersion"];
  "kind": IBackup["kind"];
  "metadata"?: IBackup["metadata"];
  "spec"?: IBackup["spec"];
  "status"?: IBackup["status"];

static apiVersion: IBackup["apiVersion"] = "longhorn.io/v1beta1";
static kind: IBackup["kind"] = "Backup";
static is = createTypeMetaGuard<IBackup>(Backup);

constructor(data?: ModelData<IBackup>) {
  super();

  this.setDefinedProps({
    apiVersion: Backup.apiVersion,
    kind: Backup.kind,
    ...data
  } as IBackup);
}
}


setValidateFunc(Backup, validate as ValidateFunc<IBackup>);
