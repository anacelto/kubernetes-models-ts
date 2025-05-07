import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/SourcesKnativeDevV1beta2PingSource";

/**
 * PingSource describes an event source with a fixed payload produced on a specified cron schedule.
 */
export interface IPingSource {
  /**
   * PingSourceSpec defines the desired state of the PingSource (from the client).
   */
  "spec"?: {
    /**
     * CloudEventOverrides defines overrides to control the output format and modifications of the event sent to the sink.
     */
    "ceOverrides"?: {
      /**
       * Extensions specify what attribute are added or overridden on the outbound event. Each `Extensions` key-value pair are set on the event as an attribute extension independently.
       */
      "extensions"?: {
        [key: string]: string;
      };
    };
    /**
     * ContentType is the media type of `data` or `dataBase64`. Default is empty.
     */
    "contentType"?: string;
    /**
     * Data is data used as the body of the event posted to the sink. Default is empty. Mutually exclusive with `dataBase64`.
     */
    "data"?: string;
    /**
     * DataBase64 is the base64-encoded string of the actual event's body posted to the sink. Default is empty. Mutually exclusive with `data`.
     */
    "dataBase64"?: string;
    /**
     * Schedule is the cron schedule. Defaults to `\* \* \* \* \*`.
     */
    "schedule"?: string;
    /**
     * Sink is a reference to an object that will resolve to a uri to use as the sink.
     */
    "sink"?: {
      /**
       * Ref points to an Addressable.
       */
      "ref"?: {
        /**
         * API version of the referent.
         */
        "apiVersion"?: string;
        /**
         * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
         */
        "kind"?: string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ This is optional field, it gets defaulted to the object holding it if left out.
         */
        "namespace"?: string;
      };
      /**
       * URI can be an absolute URL(non-empty scheme and non-empty host) pointing to the target or a relative URI. Relative URIs will be resolved using the base URI retrieved from Ref.
       */
      "uri"?: string;
    };
    /**
     * Timezone modifies the actual time relative to the specified timezone. Defaults to the system time zone. More general information about time zones: https://www.iana.org/time-zones List of valid timezone values: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
     */
    "timezone"?: string;
  };
  /**
   * PingSourceStatus defines the observed state of PingSource (from the controller).
   */
  "status"?: {
    /**
     * Annotations is additional Status fields for the Resource to save some additional State as well as convey more information to the user. This is roughly akin to Annotations on any k8s resource, just the reconciler conveying richer information outwards.
     */
    "annotations"?: {
    };
    /**
     * CloudEventAttributes are the specific attributes that the Source uses as part of its CloudEvents.
     */
    "ceAttributes"?: Array<{
      /**
       * Source is the CloudEvents source attribute.
       */
      "source"?: string;
      /**
       * Type refers to the CloudEvent type attribute.
       */
      "type"?: string;
    }>;
    /**
     * Conditions the latest available observations of a resource's current state.
     */
    "conditions"?: Array<{
      /**
       * LastTransitionTime is the last time the condition transitioned from one status to another. We use VolatileTime in place of metav1.Time to exclude this from creating equality.Semantic differences (all other things held constant).
       */
      "lastTransitionTime"?: string;
      /**
       * A human readable message indicating details about the transition.
       */
      "message"?: string;
      /**
       * The reason for the condition's last transition.
       */
      "reason"?: string;
      /**
       * Severity with which to treat failures of this type of condition. When this is not specified, it defaults to Error.
       */
      "severity"?: string;
      /**
       * Status of the condition, one of True, False, Unknown.
       */
      "status": string;
      /**
       * Type of condition.
       */
      "type": string;
    }>;
    /**
     * ObservedGeneration is the "Generation" of the Service that was last processed by the controller.
     */
    "observedGeneration"?: number;
    /**
     * SinkURI is the current active sink URI that has been configured for the Source.
     */
    "sinkUri"?: string;
  };
  "apiVersion": "sources.knative.dev/v1beta2";
  "kind": "PingSource";
  "metadata"?: IObjectMeta;
}

/**
 * PingSource describes an event source with a fixed payload produced on a specified cron schedule.
 */
export class PingSource extends Model<IPingSource> implements IPingSource {
  "spec"?: IPingSource["spec"];
  "status"?: IPingSource["status"];
  "apiVersion": IPingSource["apiVersion"];
  "kind": IPingSource["kind"];
  "metadata"?: IPingSource["metadata"];

static apiVersion: IPingSource["apiVersion"] = "sources.knative.dev/v1beta2";
static kind: IPingSource["kind"] = "PingSource";
static is = createTypeMetaGuard<IPingSource>(PingSource);

constructor(data?: ModelData<IPingSource>) {
  super();

  this.setDefinedProps({
    apiVersion: PingSource.apiVersion,
    kind: PingSource.kind,
    ...data
  } as IPingSource);
}
}


setValidateFunc(PingSource, validate as ValidateFunc<IPingSource>);
