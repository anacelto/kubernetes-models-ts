import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IStream {
    "spec"?: {
        /**
         * A unique name for the Stream.
         */
        "name"?: string;
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
        /**
         * The description of the stream.
         */
        "description"?: string;
        /**
         * The maximum of messages per subject.
         */
        "maxMsgsPerSubject"?: number;
        /**
         * A stream mirror.
         */
        "mirror"?: {
            "name"?: string;
            "optStartSeq"?: number;
            /**
             * Time format must be RFC3339.
             */
            "optStartTime"?: string;
            "filterSubject"?: string;
            "externalApiPrefix"?: string;
            "externalDeliverPrefix"?: string;
        };
        /**
         * A stream's placement.
         */
        "placement"?: {
            "cluster"?: string;
            "tags"?: Array<string>;
        };
        /**
         * A stream's sources.
         */
        "sources"?: Array<{
            "name"?: string;
            "optStartSeq"?: number;
            /**
             * Time format must be RFC3339.
             */
            "optStartTime"?: string;
            "filterSubject"?: string;
            "externalApiPrefix"?: string;
            "externalDeliverPrefix"?: string;
        }>;
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
    "kind": "Stream";
    "metadata"?: IObjectMeta;
}
export declare class Stream extends Model<IStream> implements IStream {
    "spec"?: IStream["spec"];
    "status"?: IStream["status"];
    "apiVersion": IStream["apiVersion"];
    "kind": IStream["kind"];
    "metadata"?: IStream["metadata"];
    static apiVersion: IStream["apiVersion"];
    static kind: IStream["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IStream>;
    constructor(data?: ModelData<IStream>);
}
