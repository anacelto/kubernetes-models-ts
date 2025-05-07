import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/HealthcareCnrmCloudGoogleComV1alpha1HealthcareDICOMStore";

export interface IHealthcareDICOMStore {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "healthcare.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "HealthcareDICOMStore";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Immutable. Identifies the dataset addressed by this request. Must be in the format
     * 'projects/{project}/locations/{location}/datasets/{dataset}'.
     */
    "dataset": string;
    /**
     * A nested object resource.
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
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * To enable streaming to BigQuery, configure the streamConfigs object in your DICOM store.
     * streamConfigs is an array, so you can specify multiple BigQuery destinations. You can stream metadata from a single DICOM store to up to five BigQuery tables in a BigQuery dataset.
     */
    "streamConfigs"?: Array<{
      /**
       * BigQueryDestination to include a fully qualified BigQuery table URI where DICOM instance metadata will be streamed.
       */
      "bigqueryDestination": {
        /**
         * a fully qualified BigQuery table URI where DICOM instance metadata will be streamed.
         */
        "tableUri": string;
      };
    }>;
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

export class HealthcareDICOMStore extends Model<IHealthcareDICOMStore> implements IHealthcareDICOMStore {
  "apiVersion": IHealthcareDICOMStore["apiVersion"];
  "kind": IHealthcareDICOMStore["kind"];
  "metadata"?: IHealthcareDICOMStore["metadata"];
  "spec": IHealthcareDICOMStore["spec"];
  "status"?: IHealthcareDICOMStore["status"];

static apiVersion: IHealthcareDICOMStore["apiVersion"] = "healthcare.cnrm.cloud.google.com/v1alpha1";
static kind: IHealthcareDICOMStore["kind"] = "HealthcareDICOMStore";
static is = createTypeMetaGuard<IHealthcareDICOMStore>(HealthcareDICOMStore);

constructor(data?: ModelData<IHealthcareDICOMStore>) {
  super();

  this.setDefinedProps({
    apiVersion: HealthcareDICOMStore.apiVersion,
    kind: HealthcareDICOMStore.kind,
    ...data
  } as IHealthcareDICOMStore);
}
}


setValidateFunc(HealthcareDICOMStore, validate as ValidateFunc<IHealthcareDICOMStore>);
