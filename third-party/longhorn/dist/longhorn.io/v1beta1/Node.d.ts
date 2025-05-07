import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * Node is where Longhorn stores Longhorn node object.
 */
export interface INode {
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
    "kind": "Node";
    "metadata"?: IObjectMeta;
    "spec"?: any;
    "status"?: any;
}
/**
 * Node is where Longhorn stores Longhorn node object.
 */
export declare class Node extends Model<INode> implements INode {
    "apiVersion": INode["apiVersion"];
    "kind": INode["kind"];
    "metadata"?: INode["metadata"];
    "spec"?: INode["spec"];
    "status"?: INode["status"];
    static apiVersion: INode["apiVersion"];
    static kind: INode["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<INode>;
    constructor(data?: ModelData<INode>);
}
