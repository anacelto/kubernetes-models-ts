import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/LonghornIoV1beta2SupportBundle";

/**
 * SupportBundle is where Longhorn stores support bundle object
 */
export interface ISupportBundle {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "longhorn.io/v1beta2";
  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "SupportBundle";
  "metadata"?: IObjectMeta;
  /**
   * SupportBundleSpec defines the desired state of the Longhorn SupportBundle
   */
  "spec"?: {
    /**
     * A brief description of the issue
     */
    "description": string;
    /**
     * The issue URL
     */
    "issueURL"?: string;
    /**
     * The preferred responsible controller node ID.
     */
    "nodeID"?: string;
  };
  /**
   * SupportBundleStatus defines the observed state of the Longhorn SupportBundle
   */
  "status"?: {
    "conditions"?: Array<{
      /**
       * Last time we probed the condition.
       */
      "lastProbeTime"?: string;
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
       * Status is the status of the condition.
       * Can be True, False, Unknown.
       */
      "status"?: string;
      /**
       * Type is the type of the condition.
       */
      "type"?: string;
    }>;
    "filename"?: string;
    "filesize"?: number;
    /**
     * The support bundle manager image
     */
    "image"?: string;
    /**
     * The support bundle manager IP
     */
    "managerIP"?: string;
    /**
     * The current responsible controller node ID
     */
    "ownerID"?: string;
    "progress"?: number;
    "state"?: string;
  };
}

/**
 * SupportBundle is where Longhorn stores support bundle object
 */
export class SupportBundle extends Model<ISupportBundle> implements ISupportBundle {
  "apiVersion": ISupportBundle["apiVersion"];
  "kind": ISupportBundle["kind"];
  "metadata"?: ISupportBundle["metadata"];
  "spec"?: ISupportBundle["spec"];
  "status"?: ISupportBundle["status"];

static apiVersion: ISupportBundle["apiVersion"] = "longhorn.io/v1beta2";
static kind: ISupportBundle["kind"] = "SupportBundle";
static is = createTypeMetaGuard<ISupportBundle>(SupportBundle);

constructor(data?: ModelData<ISupportBundle>) {
  super();

  this.setDefinedProps({
    apiVersion: SupportBundle.apiVersion,
    kind: SupportBundle.kind,
    ...data
  } as ISupportBundle);
}
}


setValidateFunc(SupportBundle, validate as ValidateFunc<ISupportBundle>);
