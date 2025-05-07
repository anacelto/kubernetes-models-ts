import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/LonghornIoV1beta2Orphan";

/**
 * Orphan is where Longhorn stores orphan object.
 */
export interface IOrphan {
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
  "kind": "Orphan";
  "metadata"?: IObjectMeta;
  /**
   * OrphanSpec defines the desired state of the Longhorn orphaned data
   */
  "spec"?: {
    /**
     * The node ID on which the controller is responsible to reconcile this orphan CR.
     */
    "nodeID"?: string;
    /**
     * The type of the orphaned data.
     * Can be "replica".
     */
    "orphanType"?: string;
    /**
     * The parameters of the orphaned data
     */
    "parameters"?: {
      [key: string]: string;
    };
  };
  /**
   * OrphanStatus defines the observed state of the Longhorn orphaned data
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
    "ownerID"?: string;
  };
}

/**
 * Orphan is where Longhorn stores orphan object.
 */
export class Orphan extends Model<IOrphan> implements IOrphan {
  "apiVersion": IOrphan["apiVersion"];
  "kind": IOrphan["kind"];
  "metadata"?: IOrphan["metadata"];
  "spec"?: IOrphan["spec"];
  "status"?: IOrphan["status"];

static apiVersion: IOrphan["apiVersion"] = "longhorn.io/v1beta2";
static kind: IOrphan["kind"] = "Orphan";
static is = createTypeMetaGuard<IOrphan>(Orphan);

constructor(data?: ModelData<IOrphan>) {
  super();

  this.setDefinedProps({
    apiVersion: Orphan.apiVersion,
    kind: Orphan.kind,
    ...data
  } as IOrphan);
}
}


setValidateFunc(Orphan, validate as ValidateFunc<IOrphan>);
