import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IComputeNodeTemplate {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "compute.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "ComputeNodeTemplate";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Immutable. CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"].
         */
        "cpuOvercommitType"?: string;
        /**
         * Immutable. An optional textual description of the resource.
         */
        "description"?: string;
        /**
         * Immutable. Node type to use for nodes group that are created from this template.
         * Only one of nodeTypeFlexibility and nodeType can be specified.
         */
        "nodeType"?: string;
        /**
         * Immutable. Flexible properties for the desired node type. Node groups that
         * use this node template will create nodes of a type that matches
         * these properties. Only one of nodeTypeFlexibility and nodeType can
         * be specified.
         */
        "nodeTypeFlexibility"?: {
            /**
             * Immutable. Number of virtual CPUs to use.
             */
            "cpus"?: string;
            /**
             * Use local SSD.
             */
            "localSsd"?: string;
            /**
             * Immutable. Physical memory available to the node, defined in MB.
             */
            "memory"?: string;
        };
        /**
         * Immutable. Region where nodes using the node template will be created.
         * If it is not provided, the provider region is used.
         */
        "region": string;
        /**
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
        /**
         * Immutable. The server binding policy for nodes using this template. Determines
         * where the nodes should restart following a maintenance event.
         */
        "serverBinding"?: {
            /**
             * Immutable. Type of server binding policy. If 'RESTART_NODE_ON_ANY_SERVER',
             * nodes using this template will restart on any physical server
             * following a maintenance event.
             *
             * If 'RESTART_NODE_ON_MINIMAL_SERVER', nodes using this template
             * will restart on the same physical server following a maintenance
             * event, instead of being live migrated to or restarted on a new
             * physical server. This option may be useful if you are using
             * software licenses tied to the underlying server characteristics
             * such as physical sockets or cores, to avoid the need for
             * additional licenses when maintenance occurs. However, VMs on such
             * nodes will experience outages while maintenance is applied. Possible values: ["RESTART_NODE_ON_ANY_SERVER", "RESTART_NODE_ON_MINIMAL_SERVERS"].
             */
            "type": string;
        };
    };
    "status"?: {
        /**
         * Conditions represent the latest available observation of the resource's current state.
         */
        "conditions"?: Array<{
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
             * Status is the status of the condition. Can be True, False, Unknown.
             */
            "status"?: string;
            /**
             * Type is the type of the condition.
             */
            "type"?: string;
        }>;
        /**
         * Creation timestamp in RFC3339 text format.
         */
        "creationTimestamp"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        "selfLink"?: string;
    };
}
export declare class ComputeNodeTemplate extends Model<IComputeNodeTemplate> implements IComputeNodeTemplate {
    "apiVersion": IComputeNodeTemplate["apiVersion"];
    "kind": IComputeNodeTemplate["kind"];
    "metadata"?: IComputeNodeTemplate["metadata"];
    "spec": IComputeNodeTemplate["spec"];
    "status"?: IComputeNodeTemplate["status"];
    static apiVersion: IComputeNodeTemplate["apiVersion"];
    static kind: IComputeNodeTemplate["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IComputeNodeTemplate>;
    constructor(data?: ModelData<IComputeNodeTemplate>);
}
