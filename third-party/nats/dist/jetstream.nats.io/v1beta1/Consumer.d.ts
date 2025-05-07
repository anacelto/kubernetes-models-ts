import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
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
         * Select only a specific incoming subjects, supports wildcards.
         */
        "filterSubject"?: string;
        /**
         * How messages are sent.
         */
        "replayPolicy"?: "instant" | "original";
        /**
         * What percentage of acknowledgements should be samples for observability.
         */
        "sampleFreq"?: string;
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
         * The interval used to deliver idle heartbeats for push-based consumers, in Go's time.Duration format.
         */
        "heartbeatInterval"?: string;
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
    "kind": "Consumer";
    "metadata"?: IObjectMeta;
}
export declare class Consumer extends Model<IConsumer> implements IConsumer {
    "spec"?: IConsumer["spec"];
    "status"?: IConsumer["status"];
    "apiVersion": IConsumer["apiVersion"];
    "kind": IConsumer["kind"];
    "metadata"?: IConsumer["metadata"];
    static apiVersion: IConsumer["apiVersion"];
    static kind: IConsumer["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IConsumer>;
    constructor(data?: ModelData<IConsumer>);
}
