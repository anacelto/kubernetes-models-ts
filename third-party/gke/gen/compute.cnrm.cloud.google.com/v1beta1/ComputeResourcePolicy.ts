import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ComputeCnrmCloudGoogleComV1beta1ComputeResourcePolicy";

export interface IComputeResourcePolicy {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "compute.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "ComputeResourcePolicy";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Immutable. An optional description of this resource. Provide this property when you create the resource.
     */
    "description"?: string;
    /**
     * Immutable. Replication consistency group for asynchronous disk replication.
     */
    "diskConsistencyGroupPolicy"?: {
      /**
       * Immutable. Enable disk consistency on the resource policy.
       */
      "enabled": boolean;
    };
    /**
     * Immutable. Resource policy for instances used for placement configuration.
     */
    "groupPlacementPolicy"?: {
      /**
       * Immutable. The number of availability domains instances will be spread across. If two instances are in different
       * availability domain, they will not be put in the same low latency network.
       */
      "availabilityDomainCount"?: number;
      /**
       * Immutable. Collocation specifies whether to place VMs inside the same availability domain on the same low-latency network.
       * Specify 'COLLOCATED' to enable collocation. Can only be specified with 'vm_count'. If compute instances are created
       * with a COLLOCATED policy, then exactly 'vm_count' instances must be created at the same time with the resource policy
       * attached. Possible values: ["COLLOCATED"].
       */
      "collocation"?: string;
      /**
       * Immutable. Specifies the number of max logical switches.
       */
      "maxDistance"?: number;
      /**
       * Immutable. Number of VMs in this placement group. Google does not recommend that you use this field
       * unless you use a compact policy and you want your policy to work only if it contains this
       * exact number of VMs.
       */
      "vmCount"?: number;
    };
    /**
     * Immutable. Resource policy for scheduling instance operations.
     */
    "instanceSchedulePolicy"?: {
      /**
       * Immutable. The expiration time of the schedule. The timestamp is an RFC3339 string.
       */
      "expirationTime"?: string;
      /**
       * Immutable. The start time of the schedule. The timestamp is an RFC3339 string.
       */
      "startTime"?: string;
      /**
       * Immutable. Specifies the time zone to be used in interpreting the schedule. The value of this field must be a time zone name
       * from the tz database: http://en.wikipedia.org/wiki/Tz_database.
       */
      "timeZone": string;
      /**
       * Immutable. Specifies the schedule for starting instances.
       */
      "vmStartSchedule"?: {
        /**
         * Immutable. Specifies the frequency for the operation, using the unix-cron format.
         */
        "schedule": string;
      };
      /**
       * Immutable. Specifies the schedule for stopping instances.
       */
      "vmStopSchedule"?: {
        /**
         * Immutable. Specifies the frequency for the operation, using the unix-cron format.
         */
        "schedule": string;
      };
    };
    /**
     * Immutable. Region where resource policy resides.
     */
    "region": string;
    /**
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Immutable. Policy for creating snapshots of persistent disks.
     */
    "snapshotSchedulePolicy"?: {
      /**
       * Immutable. Retention policy applied to snapshots created by this resource policy.
       */
      "retentionPolicy"?: {
        /**
         * Immutable. Maximum age of the snapshot that is allowed to be kept.
         */
        "maxRetentionDays": number;
        /**
         * Immutable. Specifies the behavior to apply to scheduled snapshots when
         * the source disk is deleted. Default value: "KEEP_AUTO_SNAPSHOTS" Possible values: ["KEEP_AUTO_SNAPSHOTS", "APPLY_RETENTION_POLICY"].
         */
        "onSourceDiskDelete"?: string;
      };
      /**
       * Immutable. Contains one of an 'hourlySchedule', 'dailySchedule', or 'weeklySchedule'.
       */
      "schedule": {
        /**
         * Immutable. The policy will execute every nth day at the specified time.
         */
        "dailySchedule"?: {
          /**
           * Immutable. Defines a schedule with units measured in days. The value determines how many days pass between the start of each cycle. Days in cycle for snapshot schedule policy must be 1.
           */
          "daysInCycle": number;
          /**
           * Immutable. This must be in UTC format that resolves to one of
           * 00:00, 04:00, 08:00, 12:00, 16:00, or 20:00. For example,
           * both 13:00-5 and 08:00 are valid.
           */
          "startTime": string;
        };
        /**
         * Immutable. The policy will execute every nth hour starting at the specified time.
         */
        "hourlySchedule"?: {
          /**
           * Immutable. The number of hours between snapshots.
           */
          "hoursInCycle": number;
          /**
           * Immutable. Time within the window to start the operations.
           * It must be in an hourly format "HH:MM",
           * where HH : [00-23] and MM : [00] GMT.
           * eg: 21:00.
           */
          "startTime": string;
        };
        /**
         * Immutable. Allows specifying a snapshot time for each day of the week.
         */
        "weeklySchedule"?: {
          /**
           * Immutable. May contain up to seven (one for each day of the week) snapshot times.
           */
          "dayOfWeeks": Array<{
            /**
             * Immutable. The day of the week to create the snapshot. e.g. MONDAY Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].
             */
            "day": string;
            /**
             * Immutable. Time within the window to start the operations.
             * It must be in format "HH:MM", where HH : [00-23] and MM : [00-00] GMT.
             */
            "startTime": string;
          }>;
        };
      };
      /**
       * Immutable. Properties with which the snapshots are created, such as labels.
       */
      "snapshotProperties"?: {
        /**
         * Immutable. Creates the new snapshot in the snapshot chain labeled with the
         * specified name. The chain name must be 1-63 characters long and comply
         * with RFC1035.
         */
        "chainName"?: string;
        /**
         * Immutable. Whether to perform a 'guest aware' snapshot.
         */
        "guestFlush"?: boolean;
        /**
         * Immutable. A set of key-value pairs.
         */
        "labels"?: {
          [key: string]: string;
        };
        /**
         * Immutable. Cloud Storage bucket location to store the auto snapshot
         * (regional or multi-regional).
         */
        "storageLocations"?: Array<string>;
      };
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
    "selfLink"?: string;
  };
}

export class ComputeResourcePolicy extends Model<IComputeResourcePolicy> implements IComputeResourcePolicy {
  "apiVersion": IComputeResourcePolicy["apiVersion"];
  "kind": IComputeResourcePolicy["kind"];
  "metadata"?: IComputeResourcePolicy["metadata"];
  "spec": IComputeResourcePolicy["spec"];
  "status"?: IComputeResourcePolicy["status"];

static apiVersion: IComputeResourcePolicy["apiVersion"] = "compute.cnrm.cloud.google.com/v1beta1";
static kind: IComputeResourcePolicy["kind"] = "ComputeResourcePolicy";
static is = createTypeMetaGuard<IComputeResourcePolicy>(ComputeResourcePolicy);

constructor(data?: ModelData<IComputeResourcePolicy>) {
  super();

  this.setDefinedProps({
    apiVersion: ComputeResourcePolicy.apiVersion,
    kind: ComputeResourcePolicy.kind,
    ...data
  } as IComputeResourcePolicy);
}
}


setValidateFunc(ComputeResourcePolicy, validate as ValidateFunc<IComputeResourcePolicy>);
