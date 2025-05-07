import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/JetstreamNatsIoV1beta2Account";

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

export class Account extends Model<IAccount> implements IAccount {
  "spec"?: IAccount["spec"];
  "apiVersion": IAccount["apiVersion"];
  "kind": IAccount["kind"];
  "metadata"?: IAccount["metadata"];

static apiVersion: IAccount["apiVersion"] = "jetstream.nats.io/v1beta2";
static kind: IAccount["kind"] = "Account";
static is = createTypeMetaGuard<IAccount>(Account);

constructor(data?: ModelData<IAccount>) {
  super();

  this.setDefinedProps({
    apiVersion: Account.apiVersion,
    kind: Account.kind,
    ...data
  } as IAccount);
}
}


setValidateFunc(Account, validate as ValidateFunc<IAccount>);
