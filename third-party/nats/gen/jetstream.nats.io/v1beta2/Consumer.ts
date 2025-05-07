import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/JetstreamNatsIoV1beta2Consumer";

export interface IConsumer {
  "spec"?: {
    /**
     * The name of the Stream to create the Consumer in.
     */
    "streamName"?: string;
    "deliverPolicy"?: "all" | "last" | "new" | "byStartSequence" | "byStartTime";
    "optStartSeq"?: number;
    /**
     * Time format must be RFC3339.
     */
    "optStartTime"?: string;
    /**
     * The name of the Consumer.
     */
    "durableName"?: string;
    /**
     * The subject to deliver observed messages, when not set, a pull-based Consumer is created.
     */
    "deliverSubject"?: string;
    /**
     * How messages should be acknowledged.
     */
    "ackPolicy"?: "none" | "all" | "explicit";
    /**
     * How long to allow messages to remain un-acknowledged before attempting redelivery.
     */
    "ackWait"?: string;
    "maxDeliver"?: number;
    /**
     * List of durations representing a retry time scale for NaK'd or retried messages
     */
    "backoff"?: Array<string>;
    /**
     * Select only a specific incoming subjects, supports wildcards.
     */
    "filterSubject"?: string;
    /**
     * List of incoming subjects, supports wildcards. Available since 2.10.
     */
    "filterSubjects"?: Array<string>;
    /**
     * How messages are sent.
     */
    "replayPolicy"?: "instant" | "original";
    /**
     * What percentage of acknowledgements should be samples for observability.
     */
    "sampleFreq"?: string;
    /**
     * The number of pulls that can be outstanding on a pull consumer, pulls received after this is reached are ignored.
     */
    "maxWaiting"?: number;
    /**
     * rate at which messages will be delivered to clients, expressed in bit per second.
     */
    "rateLimitBps"?: number;
    /**
     * Maximum pending Acks before consumers are paused.
     */
    "maxAckPending"?: number;
    /**
     * The name of a queue group.
     */
    "deliverGroup"?: string;
    /**
     * The description of the consumer.
     */
    "description"?: string;
    /**
     * Enables flow control.
     */
    "flowControl"?: boolean;
    /**
     * When set, only the headers of messages in the stream are delivered, and not the bodies. Additionally, Nats-Msg-Size header is added to indicate the size of the removed payload
     */
    "headersOnly"?: boolean;
    /**
     * The interval used to deliver idle heartbeats for push-based consumers, in Go's time.Duration format.
     */
    "heartbeatInterval"?: string;
    /**
     * The largest batch property that may be specified when doing a pull on a Pull Consumer.
     */
    "maxRequestBatch"?: number;
    /**
     * The maximum expires duration that may be set when doing a pull on a Pull Consumer.
     */
    "maxRequestExpires"?: string;
    /**
     * The maximum max_bytes value that maybe set when dong a pull on a Pull Consumer.
     */
    "maxRequestMaxBytes"?: number;
    /**
     * When set do not inherit the replica count from the stream but specifically set it to this amount.
     */
    "replicas"?: number;
    /**
     * Force the consumer state to be kept in memory rather than inherit the setting from the stream.
     */
    "memStorage"?: boolean;
    /**
     * Additional Consumer metadata.
     */
    "metadata"?: {
      [key: string]: string;
    };
    /**
     * A client's TLS certs and keys.
     */
    "tls"?: {
      /**
       * A client's cert filepath. Should be mounted.
       */
      "clientCert"?: string;
      /**
       * A client's key filepath. Should be mounted.
       */
      "clientKey"?: string;
      /**
       * A list of filepaths to CAs. Should be mounted.
       */
      "rootCas"?: Array<string>;
    };
    /**
     * A list of servers for creating consumer
     */
    "servers"?: Array<string>;
    /**
     * NATS user credentials for connecting to servers. Please make sure your controller has mounted the cerds on its path.
     */
    "creds"?: string;
    /**
     * NATS user NKey for connecting to servers.
     */
    "nkey"?: string;
    /**
     * Name of the account to which the Consumer belongs.
     */
    "account"?: string;
    /**
     * When true, the managed Consumer will not be deleted when the resource is deleted
     */
    "preventDelete"?: boolean;
    /**
     * When true, the managed Consumer will not be updated when the resource is updated
     */
    "preventUpdate"?: boolean;
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
  "apiVersion": "jetstream.nats.io/v1beta2";
  "kind": "Consumer";
  "metadata"?: IObjectMeta;
}

export class Consumer extends Model<IConsumer> implements IConsumer {
  "spec"?: IConsumer["spec"];
  "status"?: IConsumer["status"];
  "apiVersion": IConsumer["apiVersion"];
  "kind": IConsumer["kind"];
  "metadata"?: IConsumer["metadata"];

static apiVersion: IConsumer["apiVersion"] = "jetstream.nats.io/v1beta2";
static kind: IConsumer["kind"] = "Consumer";
static is = createTypeMetaGuard<IConsumer>(Consumer);

constructor(data?: ModelData<IConsumer>) {
  super();

  this.setDefinedProps({
    apiVersion: Consumer.apiVersion,
    kind: Consumer.kind,
    ...data
  } as IConsumer);
}
}


setValidateFunc(Consumer, validate as ValidateFunc<IConsumer>);
