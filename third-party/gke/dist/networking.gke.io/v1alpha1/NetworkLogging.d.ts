import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * NetworkLogging describes the specification used by network logging.
 */
export interface INetworkLogging {
    "metadata"?: IObjectMeta;
    /**
     * Spec is the desired configuration for network logging.
     */
    "spec"?: {
        /**
         * Cluster specifies the log options for cluster-level network logging.
         */
        "cluster"?: {
            /**
             * Allow specifies the log action for policy-allowed connections.
             */
            "allow"?: {
                /**
                 * Delegate can only be true if Log is true. Log:false, Delegate:true is invalid. If Delegate is true, logging will be controlled by the annotation of matching network policies.
                 */
                "delegate"?: boolean;
                /**
                 * Log specifies if logging is enabled or not. The default value is false.
                 */
                "log"?: boolean;
            };
            /**
             * Deny specifies the log action for policy-denied connections.
             */
            "deny"?: {
                /**
                 * Delegate can only be true if Log is true. Log:false, Delegate:true is invalid. If Delegate is true, logging will be controlled by the annotation of the pod's namespace.
                 */
                "delegate"?: boolean;
                /**
                 * Log specifies if logging is enabled or not. The default value is false.
                 */
                "log"?: boolean;
            };
        };
    };
    "apiVersion": "networking.gke.io/v1alpha1";
    "kind": "NetworkLogging";
}
/**
 * NetworkLogging describes the specification used by network logging.
 */
export declare class NetworkLogging extends Model<INetworkLogging> implements INetworkLogging {
    "metadata"?: INetworkLogging["metadata"];
    "spec"?: INetworkLogging["spec"];
    "apiVersion": INetworkLogging["apiVersion"];
    "kind": INetworkLogging["kind"];
    static apiVersion: INetworkLogging["apiVersion"];
    static kind: INetworkLogging["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<INetworkLogging>;
    constructor(data?: ModelData<INetworkLogging>);
}
