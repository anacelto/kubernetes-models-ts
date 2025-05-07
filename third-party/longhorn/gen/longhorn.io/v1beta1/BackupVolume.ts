import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/LonghornIoV1beta1BackupVolume";

/**
 * BackupVolume is where Longhorn stores backup volume object.
 */
export interface IBackupVolume {
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
  "kind": "BackupVolume";
  "metadata"?: IObjectMeta;
  "spec"?: any;
  "status"?: any;
}

/**
 * BackupVolume is where Longhorn stores backup volume object.
 */
export class BackupVolume extends Model<IBackupVolume> implements IBackupVolume {
  "apiVersion": IBackupVolume["apiVersion"];
  "kind": IBackupVolume["kind"];
  "metadata"?: IBackupVolume["metadata"];
  "spec"?: IBackupVolume["spec"];
  "status"?: IBackupVolume["status"];

static apiVersion: IBackupVolume["apiVersion"] = "longhorn.io/v1beta1";
static kind: IBackupVolume["kind"] = "BackupVolume";
static is = createTypeMetaGuard<IBackupVolume>(BackupVolume);

constructor(data?: ModelData<IBackupVolume>) {
  super();

  this.setDefinedProps({
    apiVersion: BackupVolume.apiVersion,
    kind: BackupVolume.kind,
    ...data
  } as IBackupVolume);
}
}


setValidateFunc(BackupVolume, validate as ValidateFunc<IBackupVolume>);
