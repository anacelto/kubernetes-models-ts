import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/JetstreamNatsIoV1beta1StreamTemplate";

export interface IStreamTemplate {
  "spec"?: {
    /**
     * A unique name for the Stream Template.
     */
    "name"?: string;
    /**
     * The maximum number of Streams this Template can create, -1 for unlimited.
     */
    "maxStreams"?: number;
    /**
     * A list of subjects to consume, supports wildcards.
     */
    "subjects"?: Array<string>;
    /**
     * How messages are retained in the Stream, once this is exceeded old messages are removed.
     */
    "retention"?: "limits" | "interest" | "workqueue";
    /**
     * How many Consumers can be defined for a given Stream. -1 for unlimited.
     */
    "maxConsumers"?: number;
    /**
     * How many messages may be in a Stream, oldest messages will be removed if the Stream exceeds this size. -1 for unlimited.
     */
    "maxMsgs"?: number;
    /**
     * How big the Stream may be, when the combined stream size exceeds this old messages are removed. -1 for unlimited.
     */
    "maxBytes"?: number;
    /**
     * Maximum age of any message in the stream, expressed in Go's time.Duration format. Empty for unlimited.
     */
    "maxAge"?: string;
    /**
     * The largest message that will be accepted by the Stream. -1 for unlimited.
     */
    "maxMsgSize"?: number;
    /**
     * The storage backend to use for the Stream.
     */
    "storage"?: "file" | "memory";
    /**
     * How many replicas to keep for each message.
     */
    "replicas"?: number;
    /**
     * Disables acknowledging messages that are received by the Stream.
     */
    "noAck"?: boolean;
    /**
     * When a Stream reach it's limits either old messages are deleted or new ones are denied.
     */
    "discard"?: "old" | "new";
    /**
     * The duration window to track duplicate messages for.
     */
    "duplicateWindow"?: string;
  };
  "status"?: {
    "observedGeneration"?: number;
    "conditions"?: Array<{
      "type"?: string;
      "status"?: string;
      "lastTransitionTime"?: string;
      "reason"?: string;
      "message"?: string;
    }>;
  };
  "apiVersion": "jetstream.nats.io/v1beta1";
  "kind": "StreamTemplate";
  "metadata"?: IObjectMeta;
}

export class StreamTemplate extends Model<IStreamTemplate> implements IStreamTemplate {
  "spec"?: IStreamTemplate["spec"];
  "status"?: IStreamTemplate["status"];
  "apiVersion": IStreamTemplate["apiVersion"];
  "kind": IStreamTemplate["kind"];
  "metadata"?: IStreamTemplate["metadata"];

static apiVersion: IStreamTemplate["apiVersion"] = "jetstream.nats.io/v1beta1";
static kind: IStreamTemplate["kind"] = "StreamTemplate";
static is = createTypeMetaGuard<IStreamTemplate>(StreamTemplate);

constructor(data?: ModelData<IStreamTemplate>) {
  super();

  this.setDefinedProps({
    apiVersion: StreamTemplate.apiVersion,
    kind: StreamTemplate.kind,
    ...data
  } as IStreamTemplate);
}
}


setValidateFunc(StreamTemplate, validate as ValidateFunc<IStreamTemplate>);
