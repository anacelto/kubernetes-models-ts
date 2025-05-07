import { IIoK8sApiCoreV1ClientIPConfig } from "./ClientIPConfig";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1SessionAffinityConfig";

/**
 * SessionAffinityConfig represents the configurations of session affinity.
 */
export interface ISessionAffinityConfig {
  /**
   * clientIP contains the configurations of Client IP based session affinity.
   */
  "clientIP"?: IIoK8sApiCoreV1ClientIPConfig;
}

/**
 * SessionAffinityConfig represents the configurations of session affinity.
 */
export class SessionAffinityConfig extends Model<ISessionAffinityConfig> implements ISessionAffinityConfig {
  "clientIP"?: IIoK8sApiCoreV1ClientIPConfig;

constructor(data?: ModelData<ISessionAffinityConfig>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(SessionAffinityConfig, validate as ValidateFunc<ISessionAffinityConfig>);

export {
  ISessionAffinityConfig as IIoK8sApiCoreV1SessionAffinityConfig,
  SessionAffinityConfig as IoK8sApiCoreV1SessionAffinityConfig
};
