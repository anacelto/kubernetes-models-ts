import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
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
export declare class BackupVolume extends Model<IBackupVolume> implements IBackupVolume {
    "apiVersion": IBackupVolume["apiVersion"];
    "kind": IBackupVolume["kind"];
    "metadata"?: IBackupVolume["metadata"];
    "spec"?: IBackupVolume["spec"];
    "status"?: IBackupVolume["status"];
    static apiVersion: IBackupVolume["apiVersion"];
    static kind: IBackupVolume["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IBackupVolume>;
    constructor(data?: ModelData<IBackupVolume>);
}
