import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/PolicyLinkerdIoV1beta2Server";

export interface IServer {
  "spec": {
    /**
     * Selects pods in the same namespace.
     * The result of matchLabels and matchExpressions are ANDed. Selects all if empty.
     */
    "podSelector"?: {
      "matchLabels"?: {
      };
      "matchExpressions"?: Array<{
        "key": string;
        "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
        "values"?: Array<string>;
      }>;
    };
    /**
     * Selects ExternalWorkloads in the same namespace.
     * The result of matchLabels and matchExpressions are ANDed. Selects all if empty.
     */
    "externalWorkloadSelector"?: {
      "matchLabels"?: {
      };
      "matchExpressions"?: Array<{
        "key": string;
        "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
        "values"?: Array<string>;
      }>;
    };
    /**
     * A port name or number. Must exist in a pod spec.
     */
    "port": any;
    /**
     * Configures protocol discovery for inbound connections.
     * Supersedes the `config.linkerd.io/opaque-ports` annotation.
     */
    "proxyProtocol"?: string;
  } & ({
    /**
     * Selects pods in the same namespace.
     * The result of matchLabels and matchExpressions are ANDed. Selects all if empty.
     */
    "podSelector": {
      "matchLabels"?: {
      };
      "matchExpressions"?: Array<{
        "key": string;
        "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
        "values"?: Array<string>;
      }>;
    };
    /**
     * Selects ExternalWorkloads in the same namespace.
     * The result of matchLabels and matchExpressions are ANDed. Selects all if empty.
     */
    "externalWorkloadSelector"?: {
      "matchLabels"?: {
      };
      "matchExpressions"?: Array<{
        "key": string;
        "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
        "values"?: Array<string>;
      }>;
    };
    /**
     * A port name or number. Must exist in a pod spec.
     */
    "port"?: any;
    /**
     * Configures protocol discovery for inbound connections.
     * Supersedes the `config.linkerd.io/opaque-ports` annotation.
     */
    "proxyProtocol"?: string;
  } | {
    /**
     * Selects pods in the same namespace.
     * The result of matchLabels and matchExpressions are ANDed. Selects all if empty.
     */
    "podSelector"?: {
      "matchLabels"?: {
      };
      "matchExpressions"?: Array<{
        "key": string;
        "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
        "values"?: Array<string>;
      }>;
    };
    /**
     * Selects ExternalWorkloads in the same namespace.
     * The result of matchLabels and matchExpressions are ANDed. Selects all if empty.
     */
    "externalWorkloadSelector": {
      "matchLabels"?: {
      };
      "matchExpressions"?: Array<{
        "key": string;
        "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
        "values"?: Array<string>;
      }>;
    };
    /**
     * A port name or number. Must exist in a pod spec.
     */
    "port"?: any;
    /**
     * Configures protocol discovery for inbound connections.
     * Supersedes the `config.linkerd.io/opaque-ports` annotation.
     */
    "proxyProtocol"?: string;
  });
  "apiVersion": "policy.linkerd.io/v1beta2";
  "kind": "Server";
  "metadata"?: IObjectMeta;
}

export class Server extends Model<IServer> implements IServer {
  "spec": IServer["spec"];
  "apiVersion": IServer["apiVersion"];
  "kind": IServer["kind"];
  "metadata"?: IServer["metadata"];

static apiVersion: IServer["apiVersion"] = "policy.linkerd.io/v1beta2";
static kind: IServer["kind"] = "Server";
static is = createTypeMetaGuard<IServer>(Server);

constructor(data?: ModelData<IServer>) {
  super();

  this.setDefinedProps({
    apiVersion: Server.apiVersion,
    kind: Server.kind,
    ...data
  } as IServer);
}
}


setValidateFunc(Server, validate as ValidateFunc<IServer>);
