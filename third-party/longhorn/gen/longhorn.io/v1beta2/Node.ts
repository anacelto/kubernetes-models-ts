import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/LonghornIoV1beta2Node";

/**
 * Node is where Longhorn stores Longhorn node object.
 */
export interface INode {
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
  "kind": "Node";
  "metadata"?: IObjectMeta;
  /**
   * NodeSpec defines the desired state of the Longhorn node
   */
  "spec"?: {
    "allowScheduling"?: boolean;
    "disks"?: {
      [key: string]: {
        "allowScheduling"?: boolean;
        "diskDriver"?: "" | "auto" | "aio";
        "diskType"?: "filesystem" | "block";
        "evictionRequested"?: boolean;
        "path"?: string;
        "storageReserved"?: number;
        "tags"?: Array<string>;
      };
    };
    "evictionRequested"?: boolean;
    "instanceManagerCPURequest"?: number;
    "name"?: string;
    "tags"?: Array<string>;
  };
  /**
   * NodeStatus defines the observed state of the Longhorn node
   */
  "status"?: {
    "autoEvicting"?: boolean;
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
    "diskStatus"?: {
      [key: string]: {
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
        "diskDriver"?: string;
        "diskName"?: string;
        "diskPath"?: string;
        "diskType"?: string;
        "diskUUID"?: string;
        "filesystemType"?: string;
        "instanceManagerName"?: string;
        "scheduledReplica"?: {
          [key: string]: number;
        };
        "storageAvailable"?: number;
        "storageMaximum"?: number;
        "storageScheduled"?: number;
      };
    };
    "region"?: string;
    "snapshotCheckStatus"?: {
      "lastPeriodicCheckedAt"?: string;
    };
    "zone"?: string;
  };
}

/**
 * Node is where Longhorn stores Longhorn node object.
 */
export class Node extends Model<INode> implements INode {
  "apiVersion": INode["apiVersion"];
  "kind": INode["kind"];
  "metadata"?: INode["metadata"];
  "spec"?: INode["spec"];
  "status"?: INode["status"];

static apiVersion: INode["apiVersion"] = "longhorn.io/v1beta2";
static kind: INode["kind"] = "Node";
static is = createTypeMetaGuard<INode>(Node);

constructor(data?: ModelData<INode>) {
  super();

  this.setDefinedProps({
    apiVersion: Node.apiVersion,
    kind: Node.kind,
    ...data
  } as INode);
}
}


setValidateFunc(Node, validate as ValidateFunc<INode>);
