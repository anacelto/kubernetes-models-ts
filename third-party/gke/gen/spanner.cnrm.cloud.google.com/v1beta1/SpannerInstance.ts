import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/SpannerCnrmCloudGoogleComV1beta1SpannerInstance";

export interface ISpannerInstance {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "spanner.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "SpannerInstance";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Immutable. The name of the instance's configuration (similar but not
     * quite the same as a region) which defines the geographic placement and
     * replication of your databases in this instance. It determines where your data
     * is stored. Values are typically of the form 'regional-europe-west1' , 'us-central' etc.
     * In order to obtain a valid list please consult the
     * [Configuration section of the docs](https://cloud.google.com/spanner/docs/instances).
     */
    "config": string;
    /**
     * The descriptive name for this instance as it appears in UIs. Must be
     * unique per project and between 4 and 30 characters in length.
     */
    "displayName": string;
    "numNodes"?: number;
    "processingUnits"?: number;
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
     * Instance status: 'CREATING' or 'READY'.
     */
    "state"?: string;
  };
}

export class SpannerInstance extends Model<ISpannerInstance> implements ISpannerInstance {
  "apiVersion": ISpannerInstance["apiVersion"];
  "kind": ISpannerInstance["kind"];
  "metadata"?: ISpannerInstance["metadata"];
  "spec": ISpannerInstance["spec"];
  "status"?: ISpannerInstance["status"];

static apiVersion: ISpannerInstance["apiVersion"] = "spanner.cnrm.cloud.google.com/v1beta1";
static kind: ISpannerInstance["kind"] = "SpannerInstance";
static is = createTypeMetaGuard<ISpannerInstance>(SpannerInstance);

constructor(data?: ModelData<ISpannerInstance>) {
  super();

  this.setDefinedProps({
    apiVersion: SpannerInstance.apiVersion,
    kind: SpannerInstance.kind,
    ...data
  } as ISpannerInstance);
}
}


setValidateFunc(SpannerInstance, validate as ValidateFunc<ISpannerInstance>);
