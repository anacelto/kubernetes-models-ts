import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1DaemonEndpoint";

/**
 * DaemonEndpoint contains information about a single Daemon endpoint.
 */
export interface IDaemonEndpoint {
  /**
   * Port number of the given endpoint.
   */
  "Port": number;
}

/**
 * DaemonEndpoint contains information about a single Daemon endpoint.
 */
export class DaemonEndpoint extends Model<IDaemonEndpoint> implements IDaemonEndpoint {
  "Port": number;

constructor(data?: ModelData<IDaemonEndpoint>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DaemonEndpoint, validate as ValidateFunc<IDaemonEndpoint>);

export {
  IDaemonEndpoint as IIoK8sApiCoreV1DaemonEndpoint,
  DaemonEndpoint as IoK8sApiCoreV1DaemonEndpoint
};
