import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IComputeHTTPHealthCheck {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "compute.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "ComputeHTTPHealthCheck";
    "metadata"?: IObjectMeta;
    "spec"?: {
        /**
         * How often (in seconds) to send a health check. The default value is 5
         * seconds.
         */
        "checkIntervalSec"?: number;
        /**
         * An optional description of this resource. Provide this property when
         * you create the resource.
         */
        "description"?: string;
        /**
         * A so-far unhealthy instance will be marked healthy after this many
         * consecutive successes. The default value is 2.
         */
        "healthyThreshold"?: number;
        /**
         * The value of the host header in the HTTP health check request. If
         * left empty (default value), the public IP on behalf of which this
         * health check is performed will be used.
         */
        "host"?: string;
        /**
         * The TCP port number for the HTTP health check request.
         * The default value is 80.
         */
        "port"?: number;
        /**
         * The request path of the HTTP health check request.
         * The default value is /.
         */
        "requestPath"?: string;
        /**
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
        /**
         * How long (in seconds) to wait before claiming failure.
         * The default value is 5 seconds.  It is invalid for timeoutSec to have
         * greater value than checkIntervalSec.
         */
        "timeoutSec"?: number;
        /**
         * A so-far healthy instance will be marked unhealthy after this many
         * consecutive failures. The default value is 2.
         */
        "unhealthyThreshold"?: number;
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
export declare class ComputeHTTPHealthCheck extends Model<IComputeHTTPHealthCheck> implements IComputeHTTPHealthCheck {
    "apiVersion": IComputeHTTPHealthCheck["apiVersion"];
    "kind": IComputeHTTPHealthCheck["kind"];
    "metadata"?: IComputeHTTPHealthCheck["metadata"];
    "spec"?: IComputeHTTPHealthCheck["spec"];
    "status"?: IComputeHTTPHealthCheck["status"];
    static apiVersion: IComputeHTTPHealthCheck["apiVersion"];
    static kind: IComputeHTTPHealthCheck["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IComputeHTTPHealthCheck>;
    constructor(data?: ModelData<IComputeHTTPHealthCheck>);
}
