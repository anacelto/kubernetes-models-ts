import { IIoK8sApimachineryPkgApisMetaV1Time } from "@kubernetes-models/apimachinery/apis/meta/v1/Time";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ContainerStateRunning";

/**
 * ContainerStateRunning is a running state of a container.
 */
export interface IContainerStateRunning {
  /**
   * Time at which the container was last (re-)started
   */
  "startedAt"?: IIoK8sApimachineryPkgApisMetaV1Time;
}

/**
 * ContainerStateRunning is a running state of a container.
 */
export class ContainerStateRunning extends Model<IContainerStateRunning> implements IContainerStateRunning {
  "startedAt"?: IIoK8sApimachineryPkgApisMetaV1Time;

constructor(data?: ModelData<IContainerStateRunning>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ContainerStateRunning, validate as ValidateFunc<IContainerStateRunning>);

export {
  IContainerStateRunning as IIoK8sApiCoreV1ContainerStateRunning,
  ContainerStateRunning as IoK8sApiCoreV1ContainerStateRunning
};
