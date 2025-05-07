import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IAccount {
    "spec"?: {
        /**
         * A unique name for the Account.
         */
        "name"?: string;
        /**
         * A list of servers to connect.
         */
        "servers"?: Array<string>;
        /**
         * The TLS certs to be used to connect to the NATS Service.
         */
        "tls"?: {
            "secret"?: {
                /**
                 * Name of the TLS secret with the certs.
                 */
                "name"?: string;
            };
            /**
             * Filename of the Root CA of the TLS cert.
             */
            "ca"?: string;
            /**
             * Filename of the TLS cert.
             */
            "cert"?: string;
            /**
             * Filename of the TLS cert key.
             */
            "key"?: string;
        };
        /**
         * The creds to be used to connect to the NATS Service.
         */
        "creds"?: {
            "secret"?: {
                /**
                 * Name of the secret with the creds.
                 */
                "name"?: string;
            };
            /**
             * Credentials file, generated with github.com/nats-io/nsc tool.
             */
            "file"?: string;
        };
    };
    "apiVersion": "jetstream.nats.io/v1beta2";
    "kind": "Account";
    "metadata"?: IObjectMeta;
}
export declare class Account extends Model<IAccount> implements IAccount {
    "spec"?: IAccount["spec"];
    "apiVersion": IAccount["apiVersion"];
    "kind": IAccount["kind"];
    "metadata"?: IAccount["metadata"];
    static apiVersion: IAccount["apiVersion"];
    static kind: IAccount["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IAccount>;
    constructor(data?: ModelData<IAccount>);
}
