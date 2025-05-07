import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * An EgressNetwork captures traffic to egress destinations
 */
export interface IEgressNetwork {
    "apiVerson"?: string;
    "kind": "EgressNetwork";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * This field controls the traffic policy enforced upon traffic that does not match any explicit route resources associated with an instance of this object. The values that are allowed currently are:
         *  - Allow - permits all traffic, even if it has not been
         *               explicitly described via attaching an xRoute
         *               resources.
         *  - Deny -  blocks all traffic that has not been described via
         *               attaching an xRoute resource.
         */
        "trafficPolicy": "Allow" | "Deny";
        "networks"?: Array<{
            /**
             * The CIDR of the network to be authorized.
             */
            "cidr": string;
            /**
             * A list of IP networks/addresses not to be included in the above `cidr`.
             */
            "except"?: Array<string>;
        }>;
    };
    "status"?: {
        "conditions"?: Array<{
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
    "apiVersion": "policy.linkerd.io/v1alpha1";
}
/**
 * An EgressNetwork captures traffic to egress destinations
 */
export declare class EgressNetwork extends Model<IEgressNetwork> implements IEgressNetwork {
    "apiVerson"?: IEgressNetwork["apiVerson"];
    "kind": IEgressNetwork["kind"];
    "metadata"?: IEgressNetwork["metadata"];
    "spec": IEgressNetwork["spec"];
    "status"?: IEgressNetwork["status"];
    "apiVersion": IEgressNetwork["apiVersion"];
    static apiVersion: IEgressNetwork["apiVersion"];
    static kind: IEgressNetwork["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IEgressNetwork>;
    constructor(data?: ModelData<IEgressNetwork>);
}
