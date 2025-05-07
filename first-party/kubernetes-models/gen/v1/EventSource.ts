import { ModelData, Model, setValidateFunc } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1EventSource";

/**
 * EventSource contains information for an event.
 */
export interface IEventSource {
  /**
   * Component from which the event is generated.
   */
  "component"?: string;
  /**
   * Node name on which the event is generated.
   */
  "host"?: string;
}

/**
 * EventSource contains information for an event.
 */
export class EventSource extends Model<IEventSource> implements IEventSource {
  "component"?: string;
  "host"?: string;

constructor(data?: ModelData<IEventSource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(EventSource, validate as ValidateFunc<IEventSource>);

export {
  IEventSource as IIoK8sApiCoreV1EventSource,
  EventSource as IoK8sApiCoreV1EventSource
};
