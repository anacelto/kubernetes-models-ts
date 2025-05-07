import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IMonitoringMonitoredProject {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "monitoring.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "MonitoringMonitoredProject";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Immutable. Required. The resource name of the existing Metrics Scope that will monitor this project. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}
         */
        "metricsScope": string;
        /**
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
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
         * Output only. The time when this `MonitoredProject` was created.
         */
        "createTime"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
    };
}
export declare class MonitoringMonitoredProject extends Model<IMonitoringMonitoredProject> implements IMonitoringMonitoredProject {
    "apiVersion": IMonitoringMonitoredProject["apiVersion"];
    "kind": IMonitoringMonitoredProject["kind"];
    "metadata"?: IMonitoringMonitoredProject["metadata"];
    "spec": IMonitoringMonitoredProject["spec"];
    "status"?: IMonitoringMonitoredProject["status"];
    static apiVersion: IMonitoringMonitoredProject["apiVersion"];
    static kind: IMonitoringMonitoredProject["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IMonitoringMonitoredProject>;
    constructor(data?: ModelData<IMonitoringMonitoredProject>);
}
