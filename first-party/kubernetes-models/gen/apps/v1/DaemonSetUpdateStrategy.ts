import { IIoK8sApiAppsV1RollingUpdateDaemonSet } from "./RollingUpdateDaemonSet";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiAppsV1DaemonSetUpdateStrategy";

/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 */
export interface IDaemonSetUpdateStrategy {
  /**
   * Rolling update config params. Present only if type = "RollingUpdate".
   */
  "rollingUpdate"?: IIoK8sApiAppsV1RollingUpdateDaemonSet;
  /**
   * Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is RollingUpdate.
   * 
   * Possible enum values:
   *  - `"OnDelete"` Replace the old daemons only when it's killed
   *  - `"RollingUpdate"` Replace the old daemons by new ones using rolling update i.e replace them on each node one after the other.
   */
  "type"?: "OnDelete" | "RollingUpdate";
}

/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 */
export class DaemonSetUpdateStrategy extends Model<IDaemonSetUpdateStrategy> implements IDaemonSetUpdateStrategy {
  "rollingUpdate"?: IIoK8sApiAppsV1RollingUpdateDaemonSet;
  "type"?: "OnDelete" | "RollingUpdate";

constructor(data?: ModelData<IDaemonSetUpdateStrategy>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DaemonSetUpdateStrategy, validate as ValidateFunc<IDaemonSetUpdateStrategy>);

export {
  IDaemonSetUpdateStrategy as IIoK8sApiAppsV1DaemonSetUpdateStrategy,
  DaemonSetUpdateStrategy as IoK8sApiAppsV1DaemonSetUpdateStrategy
};
