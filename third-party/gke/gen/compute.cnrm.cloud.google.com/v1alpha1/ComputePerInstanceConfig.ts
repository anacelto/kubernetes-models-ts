import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ComputeCnrmCloudGoogleComV1alpha1ComputePerInstanceConfig";

export interface IComputePerInstanceConfig {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "compute.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "ComputePerInstanceConfig";
  "metadata"?: IObjectMeta;
  "spec": {
    "instanceGroupManagerRef": {
      /**
       * Allowed value: The `name` field of a `ComputeInstanceGroupManager` resource.
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
       * Allowed value: The `name` field of a `ComputeInstanceGroupManager` resource.
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
       * Allowed value: The `name` field of a `ComputeInstanceGroupManager` resource.
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
       * Allowed value: The `name` field of a `ComputeInstanceGroupManager` resource.
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
       * Allowed value: The `name` field of a `ComputeInstanceGroupManager` resource.
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
       * Allowed value: The `name` field of a `ComputeInstanceGroupManager` resource.
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
       * Allowed value: The `name` field of a `ComputeInstanceGroupManager` resource.
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
     * The minimal action to perform on the instance during an update.
     * Default is 'NONE'. Possible values are:
     * \* REPLACE
     * \* RESTART
     * \* REFRESH
     * \* NONE.
     */
    "minimalAction"?: string;
    /**
     * The most disruptive action to perform on the instance during an update.
     * Default is 'REPLACE'. Possible values are:
     * \* REPLACE
     * \* RESTART
     * \* REFRESH
     * \* NONE.
     */
    "mostDisruptiveAllowedAction"?: string;
    /**
     * The preserved state for this instance.
     */
    "preservedState"?: {
      /**
       * Stateful disks for the instance.
       */
      "disk"?: Array<{
        /**
         * A value that prescribes what should happen to the stateful disk when the VM instance is deleted.
         * The available options are 'NEVER' and 'ON_PERMANENT_INSTANCE_DELETION'.
         * 'NEVER' - detach the disk when the VM is deleted, but do not delete the disk.
         * 'ON_PERMANENT_INSTANCE_DELETION' will delete the stateful disk when the VM is permanently
         * deleted from the instance group. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"].
         */
        "deleteRule"?: string;
        /**
         * A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance.
         */
        "deviceName": string;
        /**
         * The mode of the disk. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"].
         */
        "mode"?: string;
        /**
         * The URI of an existing persistent disk to attach under the specified device-name in the format
         * 'projects/project-id/zones/zone/disks/disk-name'.
         */
        "source": string;
      }>;
      /**
       * Preserved external IPs defined for this instance. This map is keyed with the name of the network interface.
       */
      "externalIp"?: Array<{
        /**
         * These stateful IPs will never be released during autohealing, update or VM instance recreate operations. This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"].
         */
        "autoDelete"?: string;
        "interfaceName": string;
        /**
         * Ip address representation.
         */
        "ipAddress"?: {
          /**
           * The URL of the reservation for this IP address.
           */
          "address"?: string;
        };
      }>;
      /**
       * Preserved internal IPs defined for this instance. This map is keyed with the name of the network interface.
       */
      "internalIp"?: Array<{
        /**
         * These stateful IPs will never be released during autohealing, update or VM instance recreate operations. This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"].
         */
        "autoDelete"?: string;
        "interfaceName": string;
        /**
         * Ip address representation.
         */
        "ipAddress"?: {
          /**
           * The URL of the reservation for this IP address.
           */
          "address"?: string;
        };
      }>;
      /**
       * Preserved metadata defined for this instance. This is a list of key->value pairs.
       */
      "metadata"?: {
        [key: string]: string;
      };
    };
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
     * When true, deleting this config will immediately remove any specified state from the underlying instance.
     * When false, deleting this config will \*not\* immediately remove any state from the underlying instance.
     * State will be removed on the next instance recreation or update.
     */
    "removeInstanceStateOnDestroy"?: boolean;
    /**
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Immutable. Zone where the containing instance group manager is located.
     */
    "zone": string;
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
  };
}

export class ComputePerInstanceConfig extends Model<IComputePerInstanceConfig> implements IComputePerInstanceConfig {
  "apiVersion": IComputePerInstanceConfig["apiVersion"];
  "kind": IComputePerInstanceConfig["kind"];
  "metadata"?: IComputePerInstanceConfig["metadata"];
  "spec": IComputePerInstanceConfig["spec"];
  "status"?: IComputePerInstanceConfig["status"];

static apiVersion: IComputePerInstanceConfig["apiVersion"] = "compute.cnrm.cloud.google.com/v1alpha1";
static kind: IComputePerInstanceConfig["kind"] = "ComputePerInstanceConfig";
static is = createTypeMetaGuard<IComputePerInstanceConfig>(ComputePerInstanceConfig);

constructor(data?: ModelData<IComputePerInstanceConfig>) {
  super();

  this.setDefinedProps({
    apiVersion: ComputePerInstanceConfig.apiVersion,
    kind: ComputePerInstanceConfig.kind,
    ...data
  } as IComputePerInstanceConfig);
}
}


setValidateFunc(ComputePerInstanceConfig, validate as ValidateFunc<IComputePerInstanceConfig>);
