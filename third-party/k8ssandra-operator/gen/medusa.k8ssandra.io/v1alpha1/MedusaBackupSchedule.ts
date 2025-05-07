import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/MedusaK8ssandraIoV1alpha1MedusaBackupSchedule";

/**
 * MedusaBackupSchedule is the Schema for the medusabackupschedules API
 */
export interface IMedusaBackupSchedule {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "medusa.k8ssandra.io/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "MedusaBackupSchedule";
  "metadata"?: IObjectMeta;
  /**
   * MedusaBackupScheduleSpec defines the desired state of MedusaBackupSchedule
   */
  "spec"?: {
    /**
     * BackupSpec defines the MedusaBackup to be created for this job
     */
    "backupSpec": {
      /**
       * The type of the backup: "full" or "differential"
       */
      "backupType"?: "differential" | "full";
      /**
       * The name of the CassandraDatacenter to back up
       */
      "cassandraDatacenter": string;
    };
    /**
     * Specifics if this backup task can be run concurrently with other active backup tasks. Valid values are: - "Allow": allows multiple Tasks to run concurrently on Cassandra cluster - "Forbid" (default): only a single task is executed at once The "Allow" property is only valid if all the other active Tasks have "Allow" as well.
     */
    "concurrencyPolicy"?: string;
    /**
     * CronSchedule is a cronjob format schedule for backups. Overrides any easier methods of defining the schedule
     */
    "cronSchedule": string;
    /**
     * Disabled if set ensures this job is not scheduling anything
     */
    "disabled"?: boolean;
  };
  /**
   * MedusaBackupScheduleStatus defines the observed state of MedusaBackupSchedule
   */
  "status"?: {
    /**
     * LastExecution tells when the backup was last time taken. If empty, the backup has never been taken
     */
    "lastExecution"?: string;
    /**
     * NextSchedule indicates when the next backup is going to be done
     */
    "nextSchedule"?: string;
  };
}

/**
 * MedusaBackupSchedule is the Schema for the medusabackupschedules API
 */
export class MedusaBackupSchedule extends Model<IMedusaBackupSchedule> implements IMedusaBackupSchedule {
  "apiVersion": IMedusaBackupSchedule["apiVersion"];
  "kind": IMedusaBackupSchedule["kind"];
  "metadata"?: IMedusaBackupSchedule["metadata"];
  "spec"?: IMedusaBackupSchedule["spec"];
  "status"?: IMedusaBackupSchedule["status"];

static apiVersion: IMedusaBackupSchedule["apiVersion"] = "medusa.k8ssandra.io/v1alpha1";
static kind: IMedusaBackupSchedule["kind"] = "MedusaBackupSchedule";
static is = createTypeMetaGuard<IMedusaBackupSchedule>(MedusaBackupSchedule);

constructor(data?: ModelData<IMedusaBackupSchedule>) {
  super();

  this.setDefinedProps({
    apiVersion: MedusaBackupSchedule.apiVersion,
    kind: MedusaBackupSchedule.kind,
    ...data
  } as IMedusaBackupSchedule);
}
}


setValidateFunc(MedusaBackupSchedule, validate as ValidateFunc<IMedusaBackupSchedule>);
