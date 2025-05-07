import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * An ExternalWorkload describes a single workload (i.e. a deployable unit) external to the cluster that should be enrolled in the mesh.
 */
export interface IExternalWorkload {
    "apiVerson"?: string;
    "kind": "ExternalWorkload";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * meshTls describes TLS settings associated with an external workload.
         */
        "meshTls": {
            /**
             * identity of the workload. Corresponds to the identity used in the workload's certificate. It is used by peers to perform verification in the mTLS handshake.
             */
            "identity": string;
            /**
             * serverName is the name of the workload in DNS format. It is used by the workload to terminate TLS using SNI.
             */
            "serverName": string;
        };
        /**
         * ports describes a list of ports exposed by the workload
         */
        "ports"?: Array<{
            /**
             * name must be an IANA_SVC_NAME and unique within the ports set. Each named port can be referred to by services.
             */
            "name"?: string;
            "port": number;
            /**
             * protocol exposed by the port. Must be UDP or TCP. Defaults to TCP.
             */
            "protocol"?: string;
        }>;
        /**
         * workloadIPs contains a list of IP addresses that can be used to send traffic to the workload.
         */
        "workloadIPs"?: Array<{
            "ip"?: string;
        }>;
    };
    "status"?: {
        "conditions"?: Array<{
            /**
             * lastProbeTime is the last time the healthcheck endpoint was probed.
             */
            "lastProbeTime"?: string;
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another.
             */
            "lastTransitionTime"?: string;
            /**
             * status of the condition (one of True, False, Unknown)
             */
            "status"?: "True" | "False" | "Unknown";
            /**
             * type of the condition in CamelCase or in foo.example.com/CamelCase.
             */
            "type"?: string;
            /**
             * reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
             */
            "reason"?: string;
            /**
             * message is a human readable message indicating details about the transition. This may be an empty string.
             */
            "message"?: string;
        }>;
    };
    "apiVersion": "workload.linkerd.io/v1alpha1";
}
/**
 * An ExternalWorkload describes a single workload (i.e. a deployable unit) external to the cluster that should be enrolled in the mesh.
 */
export declare class ExternalWorkload extends Model<IExternalWorkload> implements IExternalWorkload {
    "apiVerson"?: IExternalWorkload["apiVerson"];
    "kind": IExternalWorkload["kind"];
    "metadata"?: IExternalWorkload["metadata"];
    "spec": IExternalWorkload["spec"];
    "status"?: IExternalWorkload["status"];
    "apiVersion": IExternalWorkload["apiVersion"];
    static apiVersion: IExternalWorkload["apiVersion"];
    static kind: IExternalWorkload["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IExternalWorkload>;
    constructor(data?: ModelData<IExternalWorkload>);
}
