import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/LonghornIoV1beta2Snapshot";

/**
 * Snapshot is the Schema for the snapshots API
 */
export interface ISnapshot {
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
  "kind": "Snapshot";
  "metadata"?: IObjectMeta;
  /**
   * SnapshotSpec defines the desired state of Longhorn Snapshot
   */
  "spec"?: {
    /**
     * require creating a new snapshot
     */
    "createSnapshot"?: boolean;
    /**
     * The labels of snapshot
     */
    "labels"?: {
      [key: string]: string;
    };
    /**
     * the volume that this snapshot belongs to.
     * This field is immutable after creation.
     * Required
     */
    "volume": string;
  };
  /**
   * SnapshotStatus defines the observed state of Longhorn Snapshot
   */
  "status"?: {
    "checksum"?: string;
    "children"?: {
      [key: string]: boolean;
    };
    "creationTime"?: string;
    "error"?: string;
    "labels"?: {
      [key: string]: string;
    };
    "markRemoved"?: boolean;
    "ownerID"?: string;
    "parent"?: string;
    "readyToUse"?: boolean;
    "restoreSize"?: number;
    "size"?: number;
    "userCreated"?: boolean;
  };
}

/**
 * Snapshot is the Schema for the snapshots API
 */
export class Snapshot extends Model<ISnapshot> implements ISnapshot {
  "apiVersion": ISnapshot["apiVersion"];
  "kind": ISnapshot["kind"];
  "metadata"?: ISnapshot["metadata"];
  "spec"?: ISnapshot["spec"];
  "status"?: ISnapshot["status"];

static apiVersion: ISnapshot["apiVersion"] = "longhorn.io/v1beta2";
static kind: ISnapshot["kind"] = "Snapshot";
static is = createTypeMetaGuard<ISnapshot>(Snapshot);

constructor(data?: ModelData<ISnapshot>) {
  super();

  this.setDefinedProps({
    apiVersion: Snapshot.apiVersion,
    kind: Snapshot.kind,
    ...data
  } as ISnapshot);
}
}


setValidateFunc(Snapshot, validate as ValidateFunc<ISnapshot>);
