import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ConfigMapKeySelector";

/**
 * Selects a key from a ConfigMap.
 */
export interface IConfigMapKeySelector {
  /**
   * The key to select.
   */
  "key": string;
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  "name"?: string;
  /**
   * Specify whether the ConfigMap or its key must be defined
   */
  "optional"?: boolean;
}

/**
 * Selects a key from a ConfigMap.
 */
export class ConfigMapKeySelector extends Model<IConfigMapKeySelector> implements IConfigMapKeySelector {
  "key": string;
  "name"?: string;
  "optional"?: boolean;

constructor(data?: ModelData<IConfigMapKeySelector>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ConfigMapKeySelector, validate as ValidateFunc<IConfigMapKeySelector>);

export {
  IConfigMapKeySelector as IIoK8sApiCoreV1ConfigMapKeySelector,
  ConfigMapKeySelector as IoK8sApiCoreV1ConfigMapKeySelector
};
