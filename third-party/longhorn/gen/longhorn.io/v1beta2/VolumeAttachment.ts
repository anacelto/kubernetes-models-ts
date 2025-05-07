import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/LonghornIoV1beta2VolumeAttachment";

/**
 * VolumeAttachment stores attachment information of a Longhorn volume
 */
export interface IVolumeAttachment {
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
  "kind": "VolumeAttachment";
  "metadata"?: IObjectMeta;
  /**
   * VolumeAttachmentSpec defines the desired state of Longhorn VolumeAttachment
   */
  "spec"?: {
    "attachmentTickets"?: {
      [key: string]: {
        /**
         * A sequence number representing a specific generation of the desired state.
         * Populated by the system. Read-only.
         */
        "generation"?: number;
        /**
         * The unique ID of this attachment. Used to differentiate different attachments of the same volume.
         */
        "id"?: string;
        /**
         * The node that this attachment is requesting
         */
        "nodeID"?: string;
        /**
         * Optional additional parameter for this attachment
         */
        "parameters"?: {
          [key: string]: string;
        };
        "type"?: string;
      };
    };
    /**
     * The name of Longhorn volume of this VolumeAttachment
     */
    "volume": string;
  };
  /**
   * VolumeAttachmentStatus defines the observed state of Longhorn VolumeAttachment
   */
  "status"?: {
    "attachmentTicketStatuses"?: {
      [key: string]: {
        /**
         * Record any error when trying to fulfill this attachment
         */
        "conditions": Array<{
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
        /**
         * A sequence number representing a specific generation of the desired state.
         * Populated by the system. Read-only.
         */
        "generation"?: number;
        /**
         * The unique ID of this attachment. Used to differentiate different attachments of the same volume.
         */
        "id"?: string;
        /**
         * Indicate whether this attachment ticket has been satisfied
         */
        "satisfied": boolean;
      };
    };
  };
}

/**
 * VolumeAttachment stores attachment information of a Longhorn volume
 */
export class VolumeAttachment extends Model<IVolumeAttachment> implements IVolumeAttachment {
  "apiVersion": IVolumeAttachment["apiVersion"];
  "kind": IVolumeAttachment["kind"];
  "metadata"?: IVolumeAttachment["metadata"];
  "spec"?: IVolumeAttachment["spec"];
  "status"?: IVolumeAttachment["status"];

static apiVersion: IVolumeAttachment["apiVersion"] = "longhorn.io/v1beta2";
static kind: IVolumeAttachment["kind"] = "VolumeAttachment";
static is = createTypeMetaGuard<IVolumeAttachment>(VolumeAttachment);

constructor(data?: ModelData<IVolumeAttachment>) {
  super();

  this.setDefinedProps({
    apiVersion: VolumeAttachment.apiVersion,
    kind: VolumeAttachment.kind,
    ...data
  } as IVolumeAttachment);
}
}


setValidateFunc(VolumeAttachment, validate as ValidateFunc<IVolumeAttachment>);
