import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface ICloudIOTDeviceRegistry {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "cloudiot.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "CloudIOTDeviceRegistry";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * List of public key certificates to authenticate devices.
         */
        "credentials"?: Array<{
            /**
             * A public key certificate format and data.
             */
            "publicKeyCertificate": {};
        }>;
        /**
         * List of configurations for event notifications, such as PubSub topics
         * to publish device events to.
         */
        "eventNotificationConfigs"?: Array<{
            /**
             * PubSub topic name to publish device events.
             */
            "pubsubTopicName": string;
            /**
             * If the subfolder name matches this string exactly, this
             * configuration will be used. The string must not include the
             * leading '/' character. If empty, all strings are matched. Empty
             * value can only be used for the last 'event_notification_configs'
             * item.
             */
            "subfolderMatches"?: string;
        }>;
        /**
         * Activate or deactivate HTTP.
         */
        "httpConfig"?: {};
        /**
         * The default logging verbosity for activity from devices in this
         * registry. Specifies which events should be written to logs. For
         * example, if the LogLevel is ERROR, only events that terminate in
         * errors will be logged. LogLevel is inclusive; enabling INFO logging
         * will also enable ERROR logging. Default value: "NONE" Possible values: ["NONE", "ERROR", "INFO", "DEBUG"].
         */
        "logLevel"?: string;
        /**
         * Activate or deactivate MQTT.
         */
        "mqttConfig"?: {};
        /**
         * Immutable.
         */
        "project"?: string;
        /**
         * Immutable. The region in which the created registry should reside.
         * If it is not provided, the provider region is used.
         */
        "region": string;
        /**
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
        /**
         * A PubSub topic to publish device state updates.
         */
        "stateNotificationConfig"?: {};
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
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
    };
}
export declare class CloudIOTDeviceRegistry extends Model<ICloudIOTDeviceRegistry> implements ICloudIOTDeviceRegistry {
    "apiVersion": ICloudIOTDeviceRegistry["apiVersion"];
    "kind": ICloudIOTDeviceRegistry["kind"];
    "metadata"?: ICloudIOTDeviceRegistry["metadata"];
    "spec": ICloudIOTDeviceRegistry["spec"];
    "status"?: ICloudIOTDeviceRegistry["status"];
    static apiVersion: ICloudIOTDeviceRegistry["apiVersion"];
    static kind: ICloudIOTDeviceRegistry["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ICloudIOTDeviceRegistry>;
    constructor(data?: ModelData<ICloudIOTDeviceRegistry>);
}
