import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface INetworkAuthentication {
    /**
     * NetworkAuthentication defines a list of authenticated client networks to be referenced by an `AuthorizationPolicy`. If a client connection originates from ANY of the of the provided networks, the connection is considered authenticated.
     */
    "spec": {
        "networks": Array<{
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
    "apiVersion": "policy.linkerd.io/v1alpha1";
    "kind": "NetworkAuthentication";
    "metadata"?: IObjectMeta;
}
export declare class NetworkAuthentication extends Model<INetworkAuthentication> implements INetworkAuthentication {
    "spec": INetworkAuthentication["spec"];
    "apiVersion": INetworkAuthentication["apiVersion"];
    "kind": INetworkAuthentication["kind"];
    "metadata"?: INetworkAuthentication["metadata"];
    static apiVersion: INetworkAuthentication["apiVersion"];
    static kind: INetworkAuthentication["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<INetworkAuthentication>;
    constructor(data?: ModelData<INetworkAuthentication>);
}
