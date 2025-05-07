import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/JetstreamNatsIoV1beta2Stream";

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
      /**
       * List of subject transforms for this mirror.
       */
      "subjectTransforms"?: Array<{
        /**
         * Source subject.
         */
        "source"?: string;
        /**
         * Destination subject.
         */
        "dest"?: string;
      }>;
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
      /**
       * List of subject transforms for this mirror.
       */
      "subjectTransforms"?: Array<{
        /**
         * Source subject.
         */
        "source"?: string;
        /**
         * Destination subject.
         */
        "dest"?: string;
      }>;
    }>;
    /**
     * Additional Stream metadata.
     */
    "metadata"?: {
      [key: string]: string;
    };
    /**
     * A list of servers for creating stream
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
     * Name of the account to which the Stream belongs.
     */
    "account"?: string;
    /**
     * Republish configuration of the stream.
     */
    "republish"?: {
      /**
       * Messages will be additionally published to that subject.
       */
      "destination"?: string;
      /**
       * Messages will be published from that subject to the destination subject.
       */
      "source"?: string;
    };
    /**
     * Sequence number from which the Stream will start.
     */
    "firstSequence"?: number;
    /**
     * Stream specific compression.
     */
    "compression"?: "s2" | "none" | "";
    /**
     * SubjectTransform is for applying a subject transform (to matching messages) when a new message is received
     */
    "subjectTransform"?: {
      /**
       * Source subject
       */
      "source"?: string;
      /**
       * Destination subject to transform into
       */
      "dest"?: string;
    };
    /**
     * When true, the managed Stream will not be deleted when the resource is deleted
     */
    "preventDelete"?: boolean;
    /**
     * When true, the managed Stream will not be updated when the resource is updated
     */
    "preventUpdate"?: boolean;
    /**
     * When true, allow higher performance, direct access to get individual messages
     */
    "allowDirect"?: boolean;
    /**
     * When true, allows the use of the Nats-Rollup header to replace all contents of a stream, or subject in a stream, with a single new message.
     */
    "allowRollup"?: boolean;
    /**
     * When true, restricts the ability to delete messages from a stream via the API. Cannot be changed once set to true.
     */
    "denyDelete"?: boolean;
    /**
     * Allows to discard messages on a subject basis.
     */
    "discardPerSubject"?: boolean;
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
  "kind": "Stream";
  "metadata"?: IObjectMeta;
}

export class Stream extends Model<IStream> implements IStream {
  "spec"?: IStream["spec"];
  "status"?: IStream["status"];
  "apiVersion": IStream["apiVersion"];
  "kind": IStream["kind"];
  "metadata"?: IStream["metadata"];

static apiVersion: IStream["apiVersion"] = "jetstream.nats.io/v1beta2";
static kind: IStream["kind"] = "Stream";
static is = createTypeMetaGuard<IStream>(Stream);

constructor(data?: ModelData<IStream>) {
  super();

  this.setDefinedProps({
    apiVersion: Stream.apiVersion,
    kind: Stream.kind,
    ...data
  } as IStream);
}
}


setValidateFunc(Stream, validate as ValidateFunc<IStream>);
