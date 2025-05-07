import { IIoK8sApiCoreV1NodeSelectorTerm } from "./NodeSelectorTerm";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1NodeSelector";

/**
 * A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
 */
export interface INodeSelector {
  /**
   * Required. A list of node selector terms. The terms are ORed.
   */
  "nodeSelectorTerms": Array<IIoK8sApiCoreV1NodeSelectorTerm>;
}

/**
 * A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
 */
export class NodeSelector extends Model<INodeSelector> implements INodeSelector {
  "nodeSelectorTerms": Array<IIoK8sApiCoreV1NodeSelectorTerm>;

constructor(data?: ModelData<INodeSelector>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(NodeSelector, validate as ValidateFunc<INodeSelector>);

export {
  INodeSelector as IIoK8sApiCoreV1NodeSelector,
  NodeSelector as IoK8sApiCoreV1NodeSelector
};
