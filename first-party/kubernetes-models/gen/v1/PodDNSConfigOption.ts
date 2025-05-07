import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1PodDNSConfigOption";

/**
 * PodDNSConfigOption defines DNS resolver options of a pod.
 */
export interface IPodDNSConfigOption {
  /**
   * Required.
   */
  "name"?: string;
  "value"?: string;
}

/**
 * PodDNSConfigOption defines DNS resolver options of a pod.
 */
export class PodDNSConfigOption extends Model<IPodDNSConfigOption> implements IPodDNSConfigOption {
  "name"?: string;
  "value"?: string;

constructor(data?: ModelData<IPodDNSConfigOption>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodDNSConfigOption, validate as ValidateFunc<IPodDNSConfigOption>);

export {
  IPodDNSConfigOption as IIoK8sApiCoreV1PodDNSConfigOption,
  PodDNSConfigOption as IoK8sApiCoreV1PodDNSConfigOption
};
