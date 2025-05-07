import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/LonghornIoV1beta2BackupTarget";

/**
 * BackupTarget is where Longhorn stores backup target object.
 */
export interface IBackupTarget {
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
  "kind": "BackupTarget";
  "metadata"?: IObjectMeta;
  /**
   * BackupTargetSpec defines the desired state of the Longhorn backup target
   */
  "spec"?: {
    /**
     * The backup target URL.
     */
    "backupTargetURL"?: string;
    /**
     * The backup target credential secret.
     */
    "credentialSecret"?: string;
    /**
     * The interval that the cluster needs to run sync with the backup target.
     */
    "pollInterval"?: string;
    /**
     * The time to request run sync the remote backup target.
     */
    "syncRequestedAt"?: string;
  };
  /**
   * BackupTargetStatus defines the observed state of the Longhorn backup target
   */
  "status"?: {
    /**
     * Available indicates if the remote backup target is available or not.
     */
    "available"?: boolean;
    /**
     * Records the reason on why the backup target is unavailable.
     */
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
    /**
     * The last time that the controller synced with the remote backup target.
     */
    "lastSyncedAt"?: string;
    /**
     * The node ID on which the controller is responsible to reconcile this backup target CR.
     */
    "ownerID"?: string;
  };
}

/**
 * BackupTarget is where Longhorn stores backup target object.
 */
export class BackupTarget extends Model<IBackupTarget> implements IBackupTarget {
  "apiVersion": IBackupTarget["apiVersion"];
  "kind": IBackupTarget["kind"];
  "metadata"?: IBackupTarget["metadata"];
  "spec"?: IBackupTarget["spec"];
  "status"?: IBackupTarget["status"];

static apiVersion: IBackupTarget["apiVersion"] = "longhorn.io/v1beta2";
static kind: IBackupTarget["kind"] = "BackupTarget";
static is = createTypeMetaGuard<IBackupTarget>(BackupTarget);

constructor(data?: ModelData<IBackupTarget>) {
  super();

  this.setDefinedProps({
    apiVersion: BackupTarget.apiVersion,
    kind: BackupTarget.kind,
    ...data
  } as IBackupTarget);
}
}


setValidateFunc(BackupTarget, validate as ValidateFunc<IBackupTarget>);
