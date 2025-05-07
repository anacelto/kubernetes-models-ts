import { IIoK8sApiAutoscalingV2MetricValueStatus } from "./MetricValueStatus";
import { IIoK8sApiAutoscalingV2MetricIdentifier } from "./MetricIdentifier";
import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IoK8sApiAutoscalingV2ExternalMetricStatus";

/**
 * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
 */
export interface IExternalMetricStatus {
  /**
   * current contains the current value for the given metric
   */
  "current": IIoK8sApiAutoscalingV2MetricValueStatus;
  /**
   * metric identifies the target metric by name and selector
   */
  "metric": IIoK8sApiAutoscalingV2MetricIdentifier;
}

/**
 * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
 */
export class ExternalMetricStatus extends Model<IExternalMetricStatus> implements IExternalMetricStatus {
  "current": IIoK8sApiAutoscalingV2MetricValueStatus;
  "metric": IIoK8sApiAutoscalingV2MetricIdentifier;

constructor(data?: ModelData<IExternalMetricStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ExternalMetricStatus, validate as ValidateFunc<IExternalMetricStatus>);

export {
  IExternalMetricStatus as IIoK8sApiAutoscalingV2ExternalMetricStatus,
  ExternalMetricStatus as IoK8sApiAutoscalingV2ExternalMetricStatus
};
