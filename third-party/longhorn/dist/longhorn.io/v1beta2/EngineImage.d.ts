import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
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
    "apiVersion": "longhorn.io/v1beta2";
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "EngineImage";
    "metadata"?: IObjectMeta;
    /**
     * EngineImageSpec defines the desired state of the Longhorn engine image
     */
    "spec"?: {
        "image": string;
    };
    /**
     * EngineImageStatus defines the observed state of the Longhorn engine image
     */
    "status"?: {
        "buildDate"?: string;
        "cliAPIMinVersion"?: number;
        "cliAPIVersion"?: number;
        "conditions"?: Array<{
            /**
             * Last time we probed the condition.
             */
            "lastProbeTime"?: string;
            /**
             * Last time the condition transitioned from one status to another.
             */
            "lastTransitionTime"?: string;
            /**
             * Human-readable message indicating details about last transition.
             */
            "message"?: string;
            /**
             * Unique, one-word, CamelCase reason for the condition's last transition.
             */
            "reason"?: string;
            /**
             * Status is the status of the condition.
             * Can be True, False, Unknown.
             */
            "status"?: string;
            /**
             * Type is the type of the condition.
             */
            "type"?: string;
        }>;
        "controllerAPIMinVersion"?: number;
        "controllerAPIVersion"?: number;
        "dataFormatMinVersion"?: number;
        "dataFormatVersion"?: number;
        "gitCommit"?: string;
        "incompatible"?: boolean;
        "noRefSince"?: string;
        "nodeDeploymentMap"?: {
            [key: string]: boolean;
        };
        "ownerID"?: string;
        "refCount"?: number;
        "state"?: string;
        "version"?: string;
    };
}
/**
 * EngineImage is where Longhorn stores engine image object.
 */
export declare class EngineImage extends Model<IEngineImage> implements IEngineImage {
    "apiVersion": IEngineImage["apiVersion"];
    "kind": IEngineImage["kind"];
    "metadata"?: IEngineImage["metadata"];
    "spec"?: IEngineImage["spec"];
    "status"?: IEngineImage["status"];
    static apiVersion: IEngineImage["apiVersion"];
    static kind: IEngineImage["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IEngineImage>;
    constructor(data?: ModelData<IEngineImage>);
}
