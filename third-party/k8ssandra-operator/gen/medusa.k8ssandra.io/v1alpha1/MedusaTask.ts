import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/MedusaK8ssandraIoV1alpha1MedusaTask";

/**
 * MedusaTask is the Schema for the MedusaTasks API
 */
export interface IMedusaTask {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "medusa.k8ssandra.io/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "MedusaTask";
  "metadata"?: IObjectMeta;
  /**
   * MedusaTaskSpec defines the desired state of MedusaTask
   */
  "spec"?: {
    /**
     * Name of the backup. Will be necessary for operations such as verify or status.
     */
    "backupName"?: string;
    /**
     * The name of the CassandraDatacenter to run the task on
     */
    "cassandraDatacenter": string;
    /**
     * Requested operation to perform.
     */
    "operation"?: "sync" | "purge" | "prepare_restore";
    /**
     * Restore key to use for the prepare_restore operation.
     */
    "restoreKey"?: string;
  };
  /**
   * MedusaTaskStatus defines the observed state of MedusaTask
   */
  "status"?: {
    "failed"?: Array<string>;
    "finishTime"?: string;
    "finished"?: Array<{
      /**
       * Number of backups that were purged. Only populated for purge tasks.
       */
      "nbBackupsPurged"?: number;
      /**
       * Number of objects/files that were purged. Only populated for purge tasks.
       */
      "nbObjectsPurged"?: number;
      /**
       * Name of the pod that ran the task. Always populated.
       */
      "podName"?: string;
      /**
       * Number of objects that couldn't be deleted due to Medusa GC grace. Only populated for purge tasks.
       */
      "totalObjectsWithinGcGrace"?: number;
      /**
       * Total size of purged files. Only populated for purge tasks.
       */
      "totalPurgedSize"?: number;
    }>;
    "inProgress"?: Array<string>;
    "startTime"?: string;
  };
}

/**
 * MedusaTask is the Schema for the MedusaTasks API
 */
export class MedusaTask extends Model<IMedusaTask> implements IMedusaTask {
  "apiVersion": IMedusaTask["apiVersion"];
  "kind": IMedusaTask["kind"];
  "metadata"?: IMedusaTask["metadata"];
  "spec"?: IMedusaTask["spec"];
  "status"?: IMedusaTask["status"];

static apiVersion: IMedusaTask["apiVersion"] = "medusa.k8ssandra.io/v1alpha1";
static kind: IMedusaTask["kind"] = "MedusaTask";
static is = createTypeMetaGuard<IMedusaTask>(MedusaTask);

constructor(data?: ModelData<IMedusaTask>) {
  super();

  this.setDefinedProps({
    apiVersion: MedusaTask.apiVersion,
    kind: MedusaTask.kind,
    ...data
  } as IMedusaTask);
}
}


setValidateFunc(MedusaTask, validate as ValidateFunc<IMedusaTask>);
