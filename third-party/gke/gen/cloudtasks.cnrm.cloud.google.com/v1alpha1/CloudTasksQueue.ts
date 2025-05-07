import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CloudtasksCnrmCloudGoogleComV1alpha1CloudTasksQueue";

export interface ICloudTasksQueue {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "cloudtasks.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "CloudTasksQueue";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Overrides for task-level appEngineRouting. These settings apply only
     * to App Engine tasks in this queue.
     */
    "appEngineRoutingOverride"?: {
      /**
       * The host that the task is sent to.
       */
      "host"?: string;
      /**
       * App instance.
       * 
       * By default, the task is sent to an instance which is available when the task is attempted.
       */
      "instance"?: string;
      /**
       * App service.
       * 
       * By default, the task is sent to the service which is the default service when the task is attempted.
       */
      "service"?: string;
      /**
       * App version.
       * 
       * By default, the task is sent to the version which is the default version when the task is attempted.
       */
      "version"?: string;
    };
    /**
     * Immutable. The location of the queue.
     */
    "location": string;
    /**
     * The project that this resource belongs to.
     */
    "projectRef": {
      /**
       * Allowed value: The `name` field of a `Project` resource.
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & (Exclude<{
      /**
       * Allowed value: The `name` field of a `Project` resource.
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * Allowed value: The `name` field of a `Project` resource.
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }> | Exclude<{
      /**
       * Allowed value: The `name` field of a `Project` resource.
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * Allowed value: The `name` field of a `Project` resource.
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & ({
      /**
       * Allowed value: The `name` field of a `Project` resource.
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } | {
      /**
       * Allowed value: The `name` field of a `Project` resource.
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace": string;
    })>);
    /**
     * Rate limits for task dispatches.
     * 
     * The queue's actual dispatch rate is the result of:
     * 
     * \* Number of tasks in the queue
     * \* User-specified throttling: rateLimits, retryConfig, and the queue's state.
     * \* System throttling due to 429 (Too Many Requests) or 503 (Service
     *   Unavailable) responses from the worker, high error rates, or to
     *   smooth sudden large traffic spikes.
     */
    "rateLimits"?: {
      /**
       * The max burst size.
       * 
       * Max burst size limits how fast tasks in queue are processed when many tasks are
       * in the queue and the rate is high. This field allows the queue to have a high
       * rate so processing starts shortly after a task is enqueued, but still limits
       * resource usage when many tasks are enqueued in a short period of time.
       */
      "maxBurstSize"?: number;
      /**
       * The maximum number of concurrent tasks that Cloud Tasks allows to
       * be dispatched for this queue. After this threshold has been
       * reached, Cloud Tasks stops dispatching tasks until the number of
       * concurrent requests decreases.
       */
      "maxConcurrentDispatches"?: number;
      /**
       * The maximum rate at which tasks are dispatched from this queue.
       * 
       * If unspecified when the queue is created, Cloud Tasks will pick the default.
       */
      "maxDispatchesPerSecond"?: number;
    };
    /**
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Settings that determine the retry behavior.
     */
    "retryConfig"?: {
      /**
       * Number of attempts per task.
       * 
       * Cloud Tasks will attempt the task maxAttempts times (that is, if
       * the first attempt fails, then there will be maxAttempts - 1
       * retries). Must be >= -1.
       * 
       * If unspecified when the queue is created, Cloud Tasks will pick
       * the default.
       * 
       * -1 indicates unlimited attempts.
       */
      "maxAttempts"?: number;
      /**
       * A task will be scheduled for retry between minBackoff and
       * maxBackoff duration after it fails, if the queue's RetryConfig
       * specifies that the task should be retried.
       */
      "maxBackoff"?: string;
      /**
       * The time between retries will double maxDoublings times.
       * 
       * A task's retry interval starts at minBackoff, then doubles maxDoublings times,
       * then increases linearly, and finally retries retries at intervals of maxBackoff
       * up to maxAttempts times.
       */
      "maxDoublings"?: number;
      /**
       * If positive, maxRetryDuration specifies the time limit for
       * retrying a failed task, measured from when the task was first
       * attempted. Once maxRetryDuration time has passed and the task has
       * been attempted maxAttempts times, no further attempts will be
       * made and the task will be deleted.
       * 
       * If zero, then the task age is unlimited.
       */
      "maxRetryDuration"?: string;
      /**
       * A task will be scheduled for retry between minBackoff and
       * maxBackoff duration after it fails, if the queue's RetryConfig
       * specifies that the task should be retried.
       */
      "minBackoff"?: string;
    };
    /**
     * Configuration options for writing logs to Stackdriver Logging.
     */
    "stackdriverLoggingConfig"?: {
      /**
       * Specifies the fraction of operations to write to Stackdriver Logging.
       * This field may contain any value between 0.0 and 1.0, inclusive. 0.0 is the
       * default and means that no operations are logged.
       */
      "samplingRatio": number;
    };
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
  };
}

export class CloudTasksQueue extends Model<ICloudTasksQueue> implements ICloudTasksQueue {
  "apiVersion": ICloudTasksQueue["apiVersion"];
  "kind": ICloudTasksQueue["kind"];
  "metadata"?: ICloudTasksQueue["metadata"];
  "spec": ICloudTasksQueue["spec"];
  "status"?: ICloudTasksQueue["status"];

static apiVersion: ICloudTasksQueue["apiVersion"] = "cloudtasks.cnrm.cloud.google.com/v1alpha1";
static kind: ICloudTasksQueue["kind"] = "CloudTasksQueue";
static is = createTypeMetaGuard<ICloudTasksQueue>(CloudTasksQueue);

constructor(data?: ModelData<ICloudTasksQueue>) {
  super();

  this.setDefinedProps({
    apiVersion: CloudTasksQueue.apiVersion,
    kind: CloudTasksQueue.kind,
    ...data
  } as ICloudTasksQueue);
}
}


setValidateFunc(CloudTasksQueue, validate as ValidateFunc<ICloudTasksQueue>);
