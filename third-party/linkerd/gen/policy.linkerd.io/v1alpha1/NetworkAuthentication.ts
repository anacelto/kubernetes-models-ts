import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/PolicyLinkerdIoV1alpha1NetworkAuthentication";

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

export class NetworkAuthentication extends Model<INetworkAuthentication> implements INetworkAuthentication {
  "spec": INetworkAuthentication["spec"];
  "apiVersion": INetworkAuthentication["apiVersion"];
  "kind": INetworkAuthentication["kind"];
  "metadata"?: INetworkAuthentication["metadata"];

static apiVersion: INetworkAuthentication["apiVersion"] = "policy.linkerd.io/v1alpha1";
static kind: INetworkAuthentication["kind"] = "NetworkAuthentication";
static is = createTypeMetaGuard<INetworkAuthentication>(NetworkAuthentication);

constructor(data?: ModelData<INetworkAuthentication>) {
  super();

  this.setDefinedProps({
    apiVersion: NetworkAuthentication.apiVersion,
    kind: NetworkAuthentication.kind,
    ...data
  } as INetworkAuthentication);
}
}


setValidateFunc(NetworkAuthentication, validate as ValidateFunc<INetworkAuthentication>);
