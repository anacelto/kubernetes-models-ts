import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IServiceNetworkEndpointGroup {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "networking.gke.io/v1beta1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "ServiceNetworkEndpointGroup";
    "metadata"?: IObjectMeta;
    "spec"?: {};
    /**
     * ServiceNetworkEndpointGroupStatus is the status for a ServiceNetworkEndpointGroup resource
     */
    "status"?: {
        /**
         * Last time the NEG syncer syncs associated NEGs.
         */
        "conditions"?: Array<{
            /**
             * Last time the condition transitioned from one status to another.
             */
            "lastTransitionTime": string;
            /**
             * A human readable message indicating details about the transition. This field may be empty.
             */
            "message": string;
            /**
             * ObservedGeneration will not be set for ServiceNetworkEndpointGroup as the spec is empty.
             */
            "observedGeneration"?: number;
            /**
             * The reason for the condition's last transition
             */
            "reason": string;
            /**
             * Status of the condition, one of True, False, Unknown.
             */
            "status": string;
            /**
             * Type is the type of the condition.
             */
            "type": string;
        }>;
        /**
         * Last time the NEG syncer syncs associated NEGs.
         */
        "lastSyncTime"?: string;
        "networkEndpointGroups"?: Array<{
            /**
             * The unique identifier for the NEG resource in GCE API.
             */
            "id": string;
            /**
             * NetworkEndpointType: Type of network endpoints in this network endpoint group.
             */
            "networkEndpointType"?: string;
            /**
             * SelfLink is the GCE Server-defined fully-qualified URL for the GCE NEG resource
             */
            "selfLink"?: string;
        }>;
    };
}
export declare class ServiceNetworkEndpointGroup extends Model<IServiceNetworkEndpointGroup> implements IServiceNetworkEndpointGroup {
    "apiVersion": IServiceNetworkEndpointGroup["apiVersion"];
    "kind": IServiceNetworkEndpointGroup["kind"];
    "metadata"?: IServiceNetworkEndpointGroup["metadata"];
    "spec"?: IServiceNetworkEndpointGroup["spec"];
    "status"?: IServiceNetworkEndpointGroup["status"];
    static apiVersion: IServiceNetworkEndpointGroup["apiVersion"];
    static kind: IServiceNetworkEndpointGroup["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IServiceNetworkEndpointGroup>;
    constructor(data?: ModelData<IServiceNetworkEndpointGroup>);
}
