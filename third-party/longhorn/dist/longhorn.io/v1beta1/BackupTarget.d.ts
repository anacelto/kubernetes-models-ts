import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * BackupTarget is where Longhorn stores backup target object.
 */
export interface IBackupTarget {
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
    "kind": "BackupTarget";
    "metadata"?: IObjectMeta;
    "spec"?: any;
    "status"?: any;
}
/**
 * BackupTarget is where Longhorn stores backup target object.
 */
export declare class BackupTarget extends Model<IBackupTarget> implements IBackupTarget {
    "apiVersion": IBackupTarget["apiVersion"];
    "kind": IBackupTarget["kind"];
    "metadata"?: IBackupTarget["metadata"];
    "spec"?: IBackupTarget["spec"];
    "status"?: IBackupTarget["status"];
    static apiVersion: IBackupTarget["apiVersion"];
    static kind: IBackupTarget["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IBackupTarget>;
    constructor(data?: ModelData<IBackupTarget>);
}
