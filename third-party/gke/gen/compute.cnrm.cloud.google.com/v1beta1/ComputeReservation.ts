import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ComputeCnrmCloudGoogleComV1beta1ComputeReservation";

export interface IComputeReservation {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "compute.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "ComputeReservation";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Immutable. An optional description of this resource.
     */
    "description"?: string;
    /**
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Reservation for instances with specific machine shapes.
     */
    "specificReservation": {
      /**
       * The number of resources that are allocated.
       */
      "count": number;
      /**
       * How many instances are in use.
       */
      "inUseCount"?: number;
      /**
       * Immutable. The instance properties for the reservation.
       */
      "instanceProperties": {
        /**
         * Immutable. Guest accelerator type and count.
         */
        "guestAccelerators"?: Array<{
          /**
           * Immutable. The number of the guest accelerator cards exposed to
           * this instance.
           */
          "acceleratorCount": number;
          /**
           * Immutable. The full or partial URL of the accelerator type to
           * attach to this instance. For example:
           * 'projects/my-project/zones/us-central1-c/acceleratorTypes/nvidia-tesla-p100'
           * 
           * If you are creating an instance template, specify only the accelerator name.
           */
          "acceleratorType": string;
        }>;
        /**
         * Immutable. The amount of local ssd to reserve with each instance. This
         * reserves disks of type 'local-ssd'.
         */
        "localSsds"?: Array<{
          /**
           * Immutable. The size of the disk in base-2 GB.
           */
          "diskSizeGb": number;
          /**
           * Immutable. The disk interface to use for attaching this disk. Default value: "SCSI" Possible values: ["SCSI", "NVME"].
           */
          "interface"?: string;
        }>;
        /**
         * Immutable. The name of the machine type to reserve.
         */
        "machineType": string;
        /**
         * Immutable. The minimum CPU platform for the reservation. For example,
         * '"Intel Skylake"'. See
         * the CPU platform availability reference](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform#availablezones)
         * for information on available CPU platforms.
         */
        "minCpuPlatform"?: string;
      };
    };
    /**
     * Immutable. When set to true, only VMs that target this reservation by name can
     * consume this reservation. Otherwise, it can be consumed by VMs with
     * affinity for any reservation. Defaults to false.
     */
    "specificReservationRequired"?: boolean;
    /**
     * Immutable. The zone where the reservation is made.
     */
    "zone": string;
  };
  "status"?: {
    /**
     * Full or partial URL to a parent commitment. This field displays for
     * reservations that are tied to a commitment.
     */
    "commitment"?: string;
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
     * Creation timestamp in RFC3339 text format.
     */
    "creationTimestamp"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    "selfLink"?: string;
    /**
     * The status of the reservation.
     */
    "status"?: string;
  };
}

export class ComputeReservation extends Model<IComputeReservation> implements IComputeReservation {
  "apiVersion": IComputeReservation["apiVersion"];
  "kind": IComputeReservation["kind"];
  "metadata"?: IComputeReservation["metadata"];
  "spec": IComputeReservation["spec"];
  "status"?: IComputeReservation["status"];

static apiVersion: IComputeReservation["apiVersion"] = "compute.cnrm.cloud.google.com/v1beta1";
static kind: IComputeReservation["kind"] = "ComputeReservation";
static is = createTypeMetaGuard<IComputeReservation>(ComputeReservation);

constructor(data?: ModelData<IComputeReservation>) {
  super();

  this.setDefinedProps({
    apiVersion: ComputeReservation.apiVersion,
    kind: ComputeReservation.kind,
    ...data
  } as IComputeReservation);
}
}


setValidateFunc(ComputeReservation, validate as ValidateFunc<IComputeReservation>);
