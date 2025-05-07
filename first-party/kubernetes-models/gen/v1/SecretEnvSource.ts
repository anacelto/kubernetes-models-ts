import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1SecretEnvSource";

/**
 * SecretEnvSource selects a Secret to populate the environment variables with.
 * 
 * The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
 */
export interface ISecretEnvSource {
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  "name"?: string;
  /**
   * Specify whether the Secret must be defined
   */
  "optional"?: boolean;
}

/**
 * SecretEnvSource selects a Secret to populate the environment variables with.
 * 
 * The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
 */
export class SecretEnvSource extends Model<ISecretEnvSource> implements ISecretEnvSource {
  "name"?: string;
  "optional"?: boolean;

constructor(data?: ModelData<ISecretEnvSource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(SecretEnvSource, validate as ValidateFunc<ISecretEnvSource>);

export {
  ISecretEnvSource as IIoK8sApiCoreV1SecretEnvSource,
  SecretEnvSource as IoK8sApiCoreV1SecretEnvSource
};
