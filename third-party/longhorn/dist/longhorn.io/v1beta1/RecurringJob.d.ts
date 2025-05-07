import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * RecurringJob is where Longhorn stores recurring job object.
 */
export interface IRecurringJob {
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
    "kind": "RecurringJob";
    "metadata"?: IObjectMeta;
    "spec"?: any;
    "status"?: any;
}
/**
 * RecurringJob is where Longhorn stores recurring job object.
 */
export declare class RecurringJob extends Model<IRecurringJob> implements IRecurringJob {
    "apiVersion": IRecurringJob["apiVersion"];
    "kind": IRecurringJob["kind"];
    "metadata"?: IRecurringJob["metadata"];
    "spec"?: IRecurringJob["spec"];
    "status"?: IRecurringJob["status"];
    static apiVersion: IRecurringJob["apiVersion"];
    static kind: IRecurringJob["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IRecurringJob>;
    constructor(data?: ModelData<IRecurringJob>);
}
