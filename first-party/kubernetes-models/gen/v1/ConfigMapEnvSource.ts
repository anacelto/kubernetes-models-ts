import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ConfigMapEnvSource";

/**
 * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.
 * 
 * The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
 */
export interface IConfigMapEnvSource {
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  "name"?: string;
  /**
   * Specify whether the ConfigMap must be defined
   */
  "optional"?: boolean;
}

/**
 * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.
 * 
 * The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
 */
export class ConfigMapEnvSource extends Model<IConfigMapEnvSource> implements IConfigMapEnvSource {
  "name"?: string;
  "optional"?: boolean;

constructor(data?: ModelData<IConfigMapEnvSource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ConfigMapEnvSource, validate as ValidateFunc<IConfigMapEnvSource>);

export {
  IConfigMapEnvSource as IIoK8sApiCoreV1ConfigMapEnvSource,
  ConfigMapEnvSource as IoK8sApiCoreV1ConfigMapEnvSource
};
