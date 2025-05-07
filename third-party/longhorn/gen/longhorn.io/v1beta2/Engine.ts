import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/LonghornIoV1beta2Engine";

/**
 * Engine is where Longhorn stores engine object.
 */
export interface IEngine {
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
  "kind": "Engine";
  "metadata"?: IObjectMeta;
  /**
   * EngineSpec defines the desired state of the Longhorn engine
   */
  "spec"?: {
    "active"?: boolean;
    /**
     * Deprecated:Replaced by field `dataEngine`.
     */
    "backendStoreDriver"?: string;
    "backupVolume"?: string;
    "dataEngine"?: "v1" | "v2";
    "desireState"?: string;
    "disableFrontend"?: boolean;
    /**
     * Deprecated: Replaced by field `image`.
     */
    "engineImage"?: string;
    "frontend"?: "blockdev" | "iscsi" | "nvmf" | "";
    "image"?: string;
    "logRequested"?: boolean;
    "nodeID"?: string;
    "replicaAddressMap"?: {
      [key: string]: string;
    };
    "requestedBackupRestore"?: string;
    "requestedDataSource"?: string;
    "revisionCounterDisabled"?: boolean;
    "salvageRequested"?: boolean;
    "snapshotMaxCount"?: number;
    "snapshotMaxSize"?: string;
    "unmapMarkSnapChainRemovedEnabled"?: boolean;
    "upgradedReplicaAddressMap"?: {
      [key: string]: string;
    };
    "volumeName"?: string;
    "volumeSize"?: string;
  };
  /**
   * EngineStatus defines the observed state of the Longhorn engine
   */
  "status"?: {
    "backupStatus"?: {
      [key: string]: {
        "backupURL"?: string;
        "error"?: string;
        "progress"?: number;
        "replicaAddress"?: string;
        "snapshotName"?: string;
        "state"?: string;
      };
    };
    "cloneStatus"?: {
      [key: string]: {
        "error"?: string;
        "fromReplicaAddress"?: string;
        "isCloning"?: boolean;
        "progress"?: number;
        "snapshotName"?: string;
        "state"?: string;
      };
    };
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
    "currentImage"?: string;
    "currentReplicaAddressMap"?: {
      [key: string]: string;
    };
    "currentSize"?: string;
    "currentState"?: string;
    "endpoint"?: string;
    "instanceManagerName"?: string;
    "ip"?: string;
    "isExpanding"?: boolean;
    "lastExpansionError"?: string;
    "lastExpansionFailedAt"?: string;
    "lastRestoredBackup"?: string;
    "logFetched"?: boolean;
    "ownerID"?: string;
    "port"?: number;
    "purgeStatus"?: {
      [key: string]: {
        "error"?: string;
        "isPurging"?: boolean;
        "progress"?: number;
        "state"?: string;
      };
    };
    "rebuildStatus"?: {
      [key: string]: {
        "error"?: string;
        "fromReplicaAddress"?: string;
        "isRebuilding"?: boolean;
        "progress"?: number;
        "state"?: string;
      };
    };
    "replicaModeMap"?: {
      [key: string]: string;
    };
    /**
     * ReplicaTransitionTimeMap records the time a replica in ReplicaModeMap transitions from one mode to another (or
     * from not being in the ReplicaModeMap to being in it). This information is sometimes required by other controllers
     * (e.g. the volume controller uses it to determine the correct value for replica.Spec.lastHealthyAt).
     */
    "replicaTransitionTimeMap"?: {
      [key: string]: string;
    };
    "restoreStatus"?: {
      [key: string]: {
        "backupURL"?: string;
        "currentRestoringBackup"?: string;
        "error"?: string;
        "filename"?: string;
        "isRestoring"?: boolean;
        "lastRestored"?: string;
        "progress"?: number;
        "state"?: string;
      };
    };
    "salvageExecuted"?: boolean;
    "snapshotMaxCount"?: number;
    "snapshotMaxSize"?: string;
    "snapshots"?: {
      [key: string]: {
        "children"?: {
          [key: string]: boolean;
        };
        "created"?: string;
        "labels"?: {
          [key: string]: string;
        };
        "name"?: string;
        "parent"?: string;
        "removed"?: boolean;
        "size"?: string;
        "usercreated"?: boolean;
      };
    };
    "snapshotsError"?: string;
    "started"?: boolean;
    "storageIP"?: string;
    "unmapMarkSnapChainRemovedEnabled"?: boolean;
  };
}

/**
 * Engine is where Longhorn stores engine object.
 */
export class Engine extends Model<IEngine> implements IEngine {
  "apiVersion": IEngine["apiVersion"];
  "kind": IEngine["kind"];
  "metadata"?: IEngine["metadata"];
  "spec"?: IEngine["spec"];
  "status"?: IEngine["status"];

static apiVersion: IEngine["apiVersion"] = "longhorn.io/v1beta2";
static kind: IEngine["kind"] = "Engine";
static is = createTypeMetaGuard<IEngine>(Engine);

constructor(data?: ModelData<IEngine>) {
  super();

  this.setDefinedProps({
    apiVersion: Engine.apiVersion,
    kind: Engine.kind,
    ...data
  } as IEngine);
}
}


setValidateFunc(Engine, validate as ValidateFunc<IEngine>);
