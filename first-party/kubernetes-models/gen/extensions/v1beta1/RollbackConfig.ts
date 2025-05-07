import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiExtensionsV1beta1RollbackConfig";

/**
 * DEPRECATED.
 * @deprecated
 */
export interface IRollbackConfig {
  /**
   * The revision to rollback to. If set to 0, rollback to the last revision.
   */
  "revision"?: number;
}

/**
 * DEPRECATED.
 * @deprecated
 */
export class RollbackConfig extends Model<IRollbackConfig> implements IRollbackConfig {
  "revision"?: number;

constructor(data?: ModelData<IRollbackConfig>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(RollbackConfig, validate as ValidateFunc<IRollbackConfig>);

export {
  IRollbackConfig as IIoK8sApiExtensionsV1beta1RollbackConfig,
  RollbackConfig as IoK8sApiExtensionsV1beta1RollbackConfig
};
