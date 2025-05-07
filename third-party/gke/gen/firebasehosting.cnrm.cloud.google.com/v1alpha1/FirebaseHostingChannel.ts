import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/FirebasehostingCnrmCloudGoogleComV1alpha1FirebaseHostingChannel";

export interface IFirebaseHostingChannel {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "firebasehosting.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "FirebaseHostingChannel";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * The time at which the channel will be automatically deleted. If null, the channel
     * will not be automatically deleted. This field is present in the output whether it's
     * set directly or via the 'ttl' field.
     */
    "expireTime"?: string;
    /**
     * Immutable. Optional. The channelId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * The number of previous releases to retain on the channel for rollback or other
     * purposes. Must be a number between 1-100. Defaults to 10 for new channels.
     */
    "retainedReleaseCount"?: number;
    /**
     * Immutable. Required. The ID of the site in which to create this channel.
     */
    "siteId": string;
    /**
     * Immutable. Input only. A time-to-live for this channel. Sets 'expire_time' to the provided
     * duration past the time of the request. A duration in seconds with up to nine fractional
     * digits, terminated by 's'. Example: "86400s" (one day).
     */
    "ttl"?: string;
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
     * The fully-qualified resource name for the channel, in the format:
     * sites/SITE_ID/channels/CHANNEL_ID.
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class FirebaseHostingChannel extends Model<IFirebaseHostingChannel> implements IFirebaseHostingChannel {
  "apiVersion": IFirebaseHostingChannel["apiVersion"];
  "kind": IFirebaseHostingChannel["kind"];
  "metadata"?: IFirebaseHostingChannel["metadata"];
  "spec": IFirebaseHostingChannel["spec"];
  "status"?: IFirebaseHostingChannel["status"];

static apiVersion: IFirebaseHostingChannel["apiVersion"] = "firebasehosting.cnrm.cloud.google.com/v1alpha1";
static kind: IFirebaseHostingChannel["kind"] = "FirebaseHostingChannel";
static is = createTypeMetaGuard<IFirebaseHostingChannel>(FirebaseHostingChannel);

constructor(data?: ModelData<IFirebaseHostingChannel>) {
  super();

  this.setDefinedProps({
    apiVersion: FirebaseHostingChannel.apiVersion,
    kind: FirebaseHostingChannel.kind,
    ...data
  } as IFirebaseHostingChannel);
}
}


setValidateFunc(FirebaseHostingChannel, validate as ValidateFunc<IFirebaseHostingChannel>);
