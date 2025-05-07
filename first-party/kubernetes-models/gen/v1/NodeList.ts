import { IIoK8sApiCoreV1Node } from "./Node";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ListMeta";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1NodeList";

/**
 * NodeList is the whole list of all Nodes which have been registered with master.
 */
export interface INodeList extends TypeMeta {
  "apiVersion": "v1";
  /**
   * List of nodes
   */
  "items": Array<IIoK8sApiCoreV1Node>;
  "kind": "NodeList";
  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * NodeList is the whole list of all Nodes which have been registered with master.
 */
export class NodeList extends Model<INodeList> implements INodeList {
  "apiVersion": INodeList["apiVersion"];
  "items": Array<IIoK8sApiCoreV1Node>;
  "kind": INodeList["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: INodeList["apiVersion"] = "v1";
static kind: INodeList["kind"] = "NodeList";
static is = createTypeMetaGuard<INodeList>(NodeList);

constructor(data?: ModelData<INodeList>) {
  super();

  this.setDefinedProps({
    apiVersion: NodeList.apiVersion,
    kind: NodeList.kind,
    ...data
  } as INodeList);
}
}

setValidateFunc(NodeList, validate as ValidateFunc<INodeList>);

export {
  INodeList as IIoK8sApiCoreV1NodeList,
  NodeList as IoK8sApiCoreV1NodeList
};
