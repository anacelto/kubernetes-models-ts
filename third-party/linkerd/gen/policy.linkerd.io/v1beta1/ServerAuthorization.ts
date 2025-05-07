import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/PolicyLinkerdIoV1beta1ServerAuthorization";

export interface IServerAuthorization {
  /**
   * Authorizes clients to communicate with Linkerd-proxied servers.
   */
  "spec": {
    /**
     * Identifies servers in the same namespace for which this authorization applies.
     * Only one of `name` or `selector` may be specified.
     */
    "server": {
      /**
       * References a `Server` instance by name
       */
      "name"?: string;
      /**
       * A label query over servers on which this authorization applies.
       */
      "selector"?: {
        "matchLabels"?: {
        };
        "matchExpressions"?: Array<{
          "key": string;
          "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
          "values"?: Array<string>;
        }>;
      };
    } & ({
      /**
       * References a `Server` instance by name
       */
      "name": string;
      /**
       * A label query over servers on which this authorization applies.
       */
      "selector"?: {
        "matchLabels"?: {
        };
        "matchExpressions"?: Array<{
          "key": string;
          "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
          "values"?: Array<string>;
        }>;
      };
    } | {
      /**
       * References a `Server` instance by name
       */
      "name"?: string;
      /**
       * A label query over servers on which this authorization applies.
       */
      "selector": {
        "matchLabels"?: {
        };
        "matchExpressions"?: Array<{
          "key": string;
          "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
          "values"?: Array<string>;
        }>;
      };
    });
    /**
     * Describes clients authorized to access a server.
     */
    "client": {
      /**
       * Limits the client IP addresses to which this authorization applies. If unset, the server chooses a default (typically, all IPs or the cluster's pod network).
       */
      "networks"?: Array<{
        "cidr": string;
        "except"?: Array<string>;
      }>;
      /**
       * Authorizes unauthenticated clients to access a server.
       */
      "unauthenticated"?: boolean;
      "meshTLS"?: {
        /**
         * Indicates that no client identity is required for communication.
         * This is mostly important for the identity controller, which must terminate TLS connections from clients that do not yet have a certificate.
         */
        "unauthenticatedTLS"?: boolean;
        /**
         * Authorizes clients with the provided proxy identity strings (as provided via MTLS)
         * The `\*` prefix can be used to match all identities in a domain. An identity string of `\*` indicates that all authentication clients are authorized.
         */
        "identities"?: Array<string>;
        /**
         * Authorizes clients with the provided proxy identity service accounts (as provided via MTLS)
         */
        "serviceAccounts"?: Array<{
          /**
           * The ServiceAccount's name.
           */
          "name": string;
          /**
           * The ServiceAccount's namespace. If unset, the authorization's namespace is used.
           */
          "namespace"?: string;
        }>;
      };
    };
  };
  "apiVersion": "policy.linkerd.io/v1beta1";
  "kind": "ServerAuthorization";
  "metadata"?: IObjectMeta;
}

export class ServerAuthorization extends Model<IServerAuthorization> implements IServerAuthorization {
  "spec": IServerAuthorization["spec"];
  "apiVersion": IServerAuthorization["apiVersion"];
  "kind": IServerAuthorization["kind"];
  "metadata"?: IServerAuthorization["metadata"];

static apiVersion: IServerAuthorization["apiVersion"] = "policy.linkerd.io/v1beta1";
static kind: IServerAuthorization["kind"] = "ServerAuthorization";
static is = createTypeMetaGuard<IServerAuthorization>(ServerAuthorization);

constructor(data?: ModelData<IServerAuthorization>) {
  super();

  this.setDefinedProps({
    apiVersion: ServerAuthorization.apiVersion,
    kind: ServerAuthorization.kind,
    ...data
  } as IServerAuthorization);
}
}


setValidateFunc(ServerAuthorization, validate as ValidateFunc<IServerAuthorization>);
