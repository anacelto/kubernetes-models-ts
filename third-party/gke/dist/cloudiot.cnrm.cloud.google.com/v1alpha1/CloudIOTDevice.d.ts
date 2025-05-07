import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface ICloudIOTDevice {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "cloudiot.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "CloudIOTDevice";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * If a device is blocked, connections or requests from this device will fail.
         */
        "blocked"?: boolean;
        /**
         * The credentials used to authenticate this device.
         */
        "credentials"?: Array<{
            /**
             * The time at which this credential becomes invalid.
             */
            "expirationTime"?: string;
            /**
             * A public key used to verify the signature of JSON Web Tokens (JWTs).
             */
            "publicKey": {
                /**
                 * The format of the key. Possible values: ["RSA_PEM", "RSA_X509_PEM", "ES256_PEM", "ES256_X509_PEM"].
                 */
                "format": string;
                /**
                 * The key data.
                 */
                "key": string;
            };
        }>;
        /**
         * Gateway-related configuration and state.
         */
        "gatewayConfig"?: {
            /**
             * Indicates whether the device is a gateway. Possible values: ["ASSOCIATION_ONLY", "DEVICE_AUTH_TOKEN_ONLY", "ASSOCIATION_AND_DEVICE_AUTH_TOKEN"].
             */
            "gatewayAuthMethod"?: string;
            /**
             * Immutable. Indicates whether the device is a gateway. Default value: "NON_GATEWAY" Possible values: ["GATEWAY", "NON_GATEWAY"].
             */
            "gatewayType"?: string;
            /**
             * The ID of the gateway the device accessed most recently.
             */
            "lastAccessedGatewayId"?: string;
            /**
             * The most recent time at which the device accessed the gateway specified in last_accessed_gateway.
             */
            "lastAccessedGatewayTime"?: string;
        };
        /**
         * The logging verbosity for device activity. Possible values: ["NONE", "ERROR", "INFO", "DEBUG"].
         */
        "logLevel"?: string;
        /**
         * The metadata key-value pairs assigned to the device.
         */
        "metadata"?: {
            [key: string]: string;
        };
        /**
         * Immutable. The name of the device registry where this device should be created.
         */
        "registry": string;
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
         * The most recent device configuration, which is eventually sent from Cloud IoT Core to the device.
         */
        "config"?: Array<{
            /**
             * The device configuration data.
             */
            "binaryData"?: string;
            /**
             * The time at which this configuration version was updated in Cloud IoT Core.
             */
            "cloudUpdateTime"?: string;
            /**
             * The time at which Cloud IoT Core received the acknowledgment from the device,
             * indicating that the device has received this configuration version.
             */
            "deviceAckTime"?: string;
            /**
             * The version of this update.
             */
            "version"?: string;
        }>;
        /**
         * The last time a cloud-to-device config version acknowledgment was received from the device.
         */
        "lastConfigAckTime"?: string;
        /**
         * The last time a cloud-to-device config version was sent to the device.
         */
        "lastConfigSendTime"?: string;
        /**
         * The error message of the most recent error, such as a failure to publish to Cloud Pub/Sub.
         */
        "lastErrorStatus"?: Array<{
            /**
             * A list of messages that carry the error details.
             */
            "details"?: Array<{}>;
            /**
             * A developer-facing error message, which should be in English.
             */
            "message"?: string;
            /**
             * The status code, which should be an enum value of google.rpc.Code.
             */
            "number"?: number;
        }>;
        /**
         * The time the most recent error occurred, such as a failure to publish to Cloud Pub/Sub.
         */
        "lastErrorTime"?: string;
        /**
         * The last time a telemetry event was received.
         */
        "lastEventTime"?: string;
        /**
         * The last time an MQTT PINGREQ was received.
         */
        "lastHeartbeatTime"?: string;
        /**
         * The last time a state event was received.
         */
        "lastStateTime"?: string;
        /**
         * A server-defined unique numeric ID for the device.
         * This is a more compact way to identify devices, and it is globally unique.
         */
        "numId"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        /**
         * The state most recently received from the device.
         */
        "state"?: Array<{
            /**
             * The device state data.
             */
            "binaryData"?: string;
            /**
             * The time at which this state version was updated in Cloud IoT Core.
             */
            "updateTime"?: string;
        }>;
    };
}
export declare class CloudIOTDevice extends Model<ICloudIOTDevice> implements ICloudIOTDevice {
    "apiVersion": ICloudIOTDevice["apiVersion"];
    "kind": ICloudIOTDevice["kind"];
    "metadata"?: ICloudIOTDevice["metadata"];
    "spec": ICloudIOTDevice["spec"];
    "status"?: ICloudIOTDevice["status"];
    static apiVersion: ICloudIOTDevice["apiVersion"];
    static kind: ICloudIOTDevice["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ICloudIOTDevice>;
    constructor(data?: ModelData<ICloudIOTDevice>);
}
