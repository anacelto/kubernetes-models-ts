import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { IIoK8sApiCoreV1NodeSpec } from "./NodeSpec";
import { IIoK8sApiCoreV1NodeStatus } from "./NodeStatus";
import { ModelData, TypeMeta, createTypeMetaGuard, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1Node";

/**
 * Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd).
 */
export interface INode extends TypeMeta {
  "apiVersion": "v1";
  "kind": "Node";
  /**
   * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /**
   * Spec defines the behavior of a node. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  "spec"?: IIoK8sApiCoreV1NodeSpec;
  /**
   * Most recently observed status of the node. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  "status"?: IIoK8sApiCoreV1NodeStatus;
}

/**
 * Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd).
 */
export class Node extends Model<INode> implements INode {
  "apiVersion": INode["apiVersion"];
  "kind": INode["kind"];
  "metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
  "spec"?: IIoK8sApiCoreV1NodeSpec;
  "status"?: IIoK8sApiCoreV1NodeStatus;

static apiVersion: INode["apiVersion"] = "v1";
static kind: INode["kind"] = "Node";
static is = createTypeMetaGuard<INode>(Node);

constructor(data?: ModelData<INode>) {
  super();

  this.setDefinedProps({
    apiVersion: Node.apiVersion,
    kind: Node.kind,
    ...data
  } as INode);
}
}

setValidateFunc(Node, validate as ValidateFunc<INode>);

export {
  INode as IIoK8sApiCoreV1Node,
  Node as IoK8sApiCoreV1Node
};
