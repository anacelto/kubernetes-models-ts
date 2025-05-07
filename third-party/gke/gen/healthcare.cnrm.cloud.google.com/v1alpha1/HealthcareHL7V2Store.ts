import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/HealthcareCnrmCloudGoogleComV1alpha1HealthcareHL7V2Store";

export interface IHealthcareHL7V2Store {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "healthcare.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "HealthcareHL7V2Store";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Immutable. Identifies the dataset addressed by this request. Must be in the format
     * 'projects/{project}/locations/{location}/datasets/{dataset}'.
     */
    "dataset": string;
    /**
     * DEPRECATED. `notification_config` is deprecated. Use `notification_configs` instead. A nested object resource.
     */
    "notificationConfig"?: {
      /**
       * The Cloud Pub/Sub topic that notifications of changes are published on. Supplied by the client.
       * PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
       * It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
       * was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
       * project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
       * Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.
       */
      "pubsubTopic": string;
    };
    /**
     * A list of notification configs. Each configuration uses a filter to determine whether to publish a
     * message (both Ingest & Create) on the corresponding notification destination. Only the message name
     * is sent as part of the notification. Supplied by the client.
     */
    "notificationConfigs"?: Array<{
      /**
       * Restricts notifications sent for messages matching a filter. If this is empty, all messages
       * are matched. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings
       * 
       * Fields/functions available for filtering are:
       * 
       * \* messageType, from the MSH-9.1 field. For example, NOT messageType = "ADT".
       * \* send_date or sendDate, the YYYY-MM-DD date the message was sent in the dataset's timeZone, from the MSH-7 segment. For example, send_date < "2017-01-02".
       * \* sendTime, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, sendTime < "2017-01-02T00:00:00-05:00".
       * \* sendFacility, the care center that the message came from, from the MSH-4 segment. For example, sendFacility = "ABC".
       * \* PatientId(value, type), which matches if the message lists a patient having an ID of the given value and type in the PID-2, PID-3, or PID-4 segments. For example, PatientId("123456", "MRN").
       * \* labels.x, a string value of the label with key x as set using the Message.labels map. For example, labels."priority"="high". The operator :\* can be used to assert the existence of a label. For example, labels."priority":\*.
       */
      "filter"?: string;
      /**
       * The Cloud Pub/Sub topic that notifications of changes are published on. Supplied by the client.
       * PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
       * It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
       * was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
       * project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
       * Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.
       * 
       * If a notification cannot be published to Cloud Pub/Sub, errors will be logged to Stackdriver.
       */
      "pubsubTopic": string;
    }>;
    /**
     * A nested object resource.
     */
    "parserConfig"?: {
      /**
       * Determines whether messages with no header are allowed.
       */
      "allowNullHeader"?: boolean;
      /**
       * JSON encoded string for schemas used to parse messages in this
       * store if schematized parsing is desired.
       */
      "schema"?: string;
      /**
       * Byte(s) to be used as the segment terminator. If this is unset, '\r' will be used as segment terminator.
       * 
       * A base64-encoded string.
       */
      "segmentTerminator"?: string;
      /**
       * Immutable. The version of the unschematized parser to be used when a custom 'schema' is not set. Default value: "V1" Possible values: ["V1", "V2", "V3"].
       */
      "version"?: string;
    };
    /**
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
  };
  "status"?: {
    /**
     * Conditions represent the latest available observation of the resource's current state.
     */
    "conditions"?: Array<{
      /**
       * Last time the condition transitioned from one status to another.
       */
      "lastTransitionTime"?: string;
      /**
       * Human-readable message indicating details about last transition.
       */
      "message"?: string;
      /**
       * Unique, one-word, CamelCase reason for the condition's last transition.
       */
      "reason"?: string;
      /**
       * Status is the status of the condition. Can be True, False, Unknown.
       */
      "status"?: string;
      /**
       * Type is the type of the condition.
       */
      "type"?: string;
    }>;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * The fully qualified name of this dataset.
     */
    "selfLink"?: string;
  };
}

export class HealthcareHL7V2Store extends Model<IHealthcareHL7V2Store> implements IHealthcareHL7V2Store {
  "apiVersion": IHealthcareHL7V2Store["apiVersion"];
  "kind": IHealthcareHL7V2Store["kind"];
  "metadata"?: IHealthcareHL7V2Store["metadata"];
  "spec": IHealthcareHL7V2Store["spec"];
  "status"?: IHealthcareHL7V2Store["status"];

static apiVersion: IHealthcareHL7V2Store["apiVersion"] = "healthcare.cnrm.cloud.google.com/v1alpha1";
static kind: IHealthcareHL7V2Store["kind"] = "HealthcareHL7V2Store";
static is = createTypeMetaGuard<IHealthcareHL7V2Store>(HealthcareHL7V2Store);

constructor(data?: ModelData<IHealthcareHL7V2Store>) {
  super();

  this.setDefinedProps({
    apiVersion: HealthcareHL7V2Store.apiVersion,
    kind: HealthcareHL7V2Store.kind,
    ...data
  } as IHealthcareHL7V2Store);
}
}


setValidateFunc(HealthcareHL7V2Store, validate as ValidateFunc<IHealthcareHL7V2Store>);
