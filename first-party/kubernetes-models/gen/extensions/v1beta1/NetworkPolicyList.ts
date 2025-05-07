import { IIoK8sApiExtensionsV1beta1NetworkPolicy } from "./NetworkPolicy";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ListMeta";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiExtensionsV1beta1NetworkPolicyList";

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyList is deprecated by networking/v1/NetworkPolicyList. Network Policy List is a list of NetworkPolicy objects.
 * @deprecated
 */
export interface INetworkPolicyList extends TypeMeta {
  "apiVersion": "extensions/v1beta1";
  /**
   * Items is a list of schema objects.
   */
  "items": Array<IIoK8sApiExtensionsV1beta1NetworkPolicy>;
  "kind": "NetworkPolicyList";
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyList is deprecated by networking/v1/NetworkPolicyList. Network Policy List is a list of NetworkPolicy objects.
 * @deprecated
 */
export class NetworkPolicyList extends Model<INetworkPolicyList> implements INetworkPolicyList {
  "apiVersion": INetworkPolicyList["apiVersion"];
  "items": Array<IIoK8sApiExtensionsV1beta1NetworkPolicy>;
  "kind": INetworkPolicyList["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: INetworkPolicyList["apiVersion"] = "extensions/v1beta1";
static kind: INetworkPolicyList["kind"] = "NetworkPolicyList";
static is = createTypeMetaGuard<INetworkPolicyList>(NetworkPolicyList);

constructor(data?: ModelData<INetworkPolicyList>) {
  super();

  this.setDefinedProps({
    apiVersion: NetworkPolicyList.apiVersion,
    kind: NetworkPolicyList.kind,
    ...data
  } as INetworkPolicyList);
}
}

setValidateFunc(NetworkPolicyList, validate as ValidateFunc<INetworkPolicyList>);

export {
  INetworkPolicyList as IIoK8sApiExtensionsV1beta1NetworkPolicyList,
  NetworkPolicyList as IoK8sApiExtensionsV1beta1NetworkPolicyList
};
