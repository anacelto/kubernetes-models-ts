import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/GkebackupCnrmCloudGoogleComV1alpha1GKEBackupBackupPlan";

export interface IGKEBackupBackupPlan {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "gkebackup.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "GKEBackupBackupPlan";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Defines the configuration of Backups created via this BackupPlan.
     */
    "backupConfig"?: {
      /**
       * If True, include all namespaced resources.
       */
      "allNamespaces"?: boolean;
      /**
       * This defines a customer managed encryption key that will be used to encrypt the "config"
       * portion (the Kubernetes resources) of Backups created via this plan.
       */
      "encryptionKey"?: {
        /**
         * Google Cloud KMS encryption key. Format: projects/\*\/locations/\*\/keyRings/\*\/cryptoKeys/\*.
         */
        "gcpKmsEncryptionKey": string;
      };
      /**
       * This flag specifies whether Kubernetes Secret resources should be included
       * when they fall into the scope of Backups.
       */
      "includeSecrets"?: boolean;
      /**
       * This flag specifies whether volume data should be backed up when PVCs are
       * included in the scope of a Backup.
       */
      "includeVolumeData"?: boolean;
      /**
       * A list of namespaced Kubernetes Resources.
       */
      "selectedApplications"?: {
        /**
         * A list of namespaced Kubernetes resources.
         */
        "namespacedNames": Array<{
          /**
           * The name of a Kubernetes Resource.
           */
          "name": string;
          /**
           * The namespace of a Kubernetes Resource.
           */
          "namespace": string;
        }>;
      };
      /**
       * If set, include just the resources in the listed namespaces.
       */
      "selectedNamespaces"?: {
        /**
         * A list of Kubernetes Namespaces.
         */
        "namespaces": Array<string>;
      };
    };
    /**
     * Defines a schedule for automatic Backup creation via this BackupPlan.
     */
    "backupSchedule"?: {
      /**
       * A standard cron string that defines a repeating schedule for
       * creating Backups via this BackupPlan.
       * If this is defined, then backupRetainDays must also be defined.
       */
      "cronSchedule"?: string;
      /**
       * This flag denotes whether automatic Backup creation is paused for this BackupPlan.
       */
      "paused"?: boolean;
    };
    /**
     * Immutable. The source cluster from which Backups will be created via this BackupPlan.
     */
    "cluster": string;
    /**
     * This flag indicates whether this BackupPlan has been deactivated.
     * Setting this field to True locks the BackupPlan such that no further updates will be allowed
     * (except deletes), including the deactivated field itself. It also prevents any new Backups
     * from being created via this BackupPlan (including scheduled Backups).
     */
    "deactivated"?: boolean;
    /**
     * User specified descriptive string for this BackupPlan.
     */
    "description"?: string;
    /**
     * Immutable. The region of the Backup Plan.
     */
    "location": string;
    /**
     * The project that this resource belongs to.
     */
    "projectRef": {
      /**
       * Allowed value: The `name` field of a `Project` resource.
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & (Exclude<{
      /**
       * Allowed value: The `name` field of a `Project` resource.
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * Allowed value: The `name` field of a `Project` resource.
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }> | Exclude<{
      /**
       * Allowed value: The `name` field of a `Project` resource.
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    }, {
      /**
       * Allowed value: The `name` field of a `Project` resource.
       */
      "external": string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } & ({
      /**
       * Allowed value: The `name` field of a `Project` resource.
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name": string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
    } | {
      /**
       * Allowed value: The `name` field of a `Project` resource.
       */
      "external"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace": string;
    })>);
    /**
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * RetentionPolicy governs lifecycle of Backups created under this plan.
     */
    "retentionPolicy"?: {
      /**
       * Minimum age for a Backup created via this BackupPlan (in days).
       * Must be an integer value between 0-90 (inclusive).
       * A Backup created under this BackupPlan will not be deletable
       * until it reaches Backup's (create time + backup_delete_lock_days).
       * Updating this field of a BackupPlan does not affect existing Backups.
       * Backups created after a successful update will inherit this new value.
       */
      "backupDeleteLockDays"?: number;
      /**
       * The default maximum age of a Backup created via this BackupPlan.
       * This field MUST be an integer value >= 0 and <= 365. If specified,
       * a Backup created under this BackupPlan will be automatically deleted
       * after its age reaches (createTime + backupRetainDays).
       * If not specified, Backups created under this BackupPlan will NOT be
       * subject to automatic deletion. Updating this field does NOT affect
       * existing Backups under it. Backups created AFTER a successful update
       * will automatically pick up the new value.
       * NOTE: backupRetainDays must be >= backupDeleteLockDays.
       * If cronSchedule is defined, then this must be <= 360 \* the creation interval.].
       */
      "backupRetainDays"?: number;
      /**
       * This flag denotes whether the retention policy of this BackupPlan is locked.
       * If set to True, no further update is allowed on this policy, including
       * the locked field itself.
       */
      "locked"?: boolean;
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
     * etag is used for optimistic concurrency control as a way to help prevent simultaneous
     * updates of a backup plan from overwriting each other. It is strongly suggested that
     * systems make use of the 'etag' in the read-modify-write cycle to perform BackupPlan updates
     * in order to avoid race conditions: An etag is returned in the response to backupPlans.get,
     * and systems are expected to put that etag in the request to backupPlans.patch or
     * backupPlans.delete to ensure that their change will be applied to the same version of the resource.
     */
    "etag"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * The number of Kubernetes Pods backed up in the last successful Backup created via this BackupPlan.
     */
    "protectedPodCount"?: number;
    /**
     * The State of the BackupPlan.
     */
    "state"?: string;
    /**
     * Detailed description of why BackupPlan is in its current state.
     */
    "stateReason"?: string;
    /**
     * Server generated, unique identifier of UUID format.
     */
    "uid"?: string;
  };
}

export class GKEBackupBackupPlan extends Model<IGKEBackupBackupPlan> implements IGKEBackupBackupPlan {
  "apiVersion": IGKEBackupBackupPlan["apiVersion"];
  "kind": IGKEBackupBackupPlan["kind"];
  "metadata"?: IGKEBackupBackupPlan["metadata"];
  "spec": IGKEBackupBackupPlan["spec"];
  "status"?: IGKEBackupBackupPlan["status"];

static apiVersion: IGKEBackupBackupPlan["apiVersion"] = "gkebackup.cnrm.cloud.google.com/v1alpha1";
static kind: IGKEBackupBackupPlan["kind"] = "GKEBackupBackupPlan";
static is = createTypeMetaGuard<IGKEBackupBackupPlan>(GKEBackupBackupPlan);

constructor(data?: ModelData<IGKEBackupBackupPlan>) {
  super();

  this.setDefinedProps({
    apiVersion: GKEBackupBackupPlan.apiVersion,
    kind: GKEBackupBackupPlan.kind,
    ...data
  } as IGKEBackupBackupPlan);
}
}


setValidateFunc(GKEBackupBackupPlan, validate as ValidateFunc<IGKEBackupBackupPlan>);
