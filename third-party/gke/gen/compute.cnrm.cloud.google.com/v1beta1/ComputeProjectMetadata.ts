import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ComputeCnrmCloudGoogleComV1beta1ComputeProjectMetadata";

export interface IComputeProjectMetadata {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "compute.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "ComputeProjectMetadata";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * A series of key value pairs.
     */
    "metadata": {
      [key: string]: string;
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

export class ComputeProjectMetadata extends Model<IComputeProjectMetadata> implements IComputeProjectMetadata {
  "apiVersion": IComputeProjectMetadata["apiVersion"];
  "kind": IComputeProjectMetadata["kind"];
  "metadata"?: IComputeProjectMetadata["metadata"];
  "spec": IComputeProjectMetadata["spec"];
  "status"?: IComputeProjectMetadata["status"];

static apiVersion: IComputeProjectMetadata["apiVersion"] = "compute.cnrm.cloud.google.com/v1beta1";
static kind: IComputeProjectMetadata["kind"] = "ComputeProjectMetadata";
static is = createTypeMetaGuard<IComputeProjectMetadata>(ComputeProjectMetadata);

constructor(data?: ModelData<IComputeProjectMetadata>) {
  super();

  this.setDefinedProps({
    apiVersion: ComputeProjectMetadata.apiVersion,
    kind: ComputeProjectMetadata.kind,
    ...data
  } as IComputeProjectMetadata);
}
}


setValidateFunc(ComputeProjectMetadata, validate as ValidateFunc<IComputeProjectMetadata>);
