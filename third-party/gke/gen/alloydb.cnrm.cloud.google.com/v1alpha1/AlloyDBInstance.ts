import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/AlloydbCnrmCloudGoogleComV1alpha1AlloyDBInstance";

export interface IAlloyDBInstance {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "alloydb.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "AlloyDBInstance";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels.
     */
    "annotations"?: {
      [key: string]: string;
    };
    /**
     * 'Availability type of an Instance. Defaults to REGIONAL for both primary and read instances.
     * Note that primary and read instances can have different availability types.
     * Only READ_POOL instance supports ZONAL type. Users can't specify the zone for READ_POOL instance.
     * Zone is automatically chosen from the list of zones in the region specified.
     * Read pool of size 1 can only have zonal availability. Read pools with node count of 2 or more
     * can have regional availability (nodes are present in 2 or more zones in a region).' Possible values: ["AVAILABILITY_TYPE_UNSPECIFIED", "ZONAL", "REGIONAL"].
     */
    "availabilityType"?: string;
    "clusterRef": {
      /**
       * Allowed value: The `name` field of an `AlloyDBCluster` resource.
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
       * Allowed value: The `name` field of an `AlloyDBCluster` resource.
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
       * Allowed value: The `name` field of an `AlloyDBCluster` resource.
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
       * Allowed value: The `name` field of an `AlloyDBCluster` resource.
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
       * Allowed value: The `name` field of an `AlloyDBCluster` resource.
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
       * Allowed value: The `name` field of an `AlloyDBCluster` resource.
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
       * Allowed value: The `name` field of an `AlloyDBCluster` resource.
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
     * Database flags. Set at instance level. \* They are copied from primary instance on read instance creation. \* Read instances can set new or override existing flags that are relevant for reads, e.g. for enabling columnar cache on a read instance. Flags set on read instance may or may not be present on primary.
     */
    "databaseFlags"?: {
      [key: string]: string;
    };
    /**
     * User-settable and human-readable display name for the Instance.
     */
    "displayName"?: string;
    /**
     * The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity.
     */
    "gceZone"?: string;
    /**
     * Immutable. The type of the instance. If the instance type is READ_POOL, provide the associated PRIMARY instance in the 'depends_on' meta-data attribute. Possible values: ["PRIMARY", "READ_POOL"].
     */
    "instanceType": string;
    /**
     * Configurations for the machines that host the underlying database engine.
     */
    "machineConfig"?: {
      /**
       * The number of CPU's in the VM instance.
       */
      "cpuCount"?: number;
    };
    /**
     * Read pool specific config. If the instance type is READ_POOL, this configuration must be provided.
     */
    "readPoolConfig"?: {
      /**
       * Read capacity, i.e. number of nodes in a read pool instance.
       */
      "nodeCount"?: number;
    };
    /**
     * Immutable. Optional. The instanceId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
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
     * Time the Instance was created in UTC.
     */
    "createTime"?: string;
    /**
     * The IP address for the Instance. This is the connection endpoint for an end-user application.
     */
    "ipAddress"?: string;
    /**
     * The name of the instance resource.
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * Set to true if the current state of Instance does not match the user's intended state, and the service is actively updating the resource to reconcile them. This can happen due to user-triggered updates or system actions like failover or maintenance.
     */
    "reconciling"?: boolean;
    /**
     * The current state of the alloydb instance.
     */
    "state"?: string;
    /**
     * The system-generated UID of the resource.
     */
    "uid"?: string;
    /**
     * Time the Instance was updated in UTC.
     */
    "updateTime"?: string;
  };
}

export class AlloyDBInstance extends Model<IAlloyDBInstance> implements IAlloyDBInstance {
  "apiVersion": IAlloyDBInstance["apiVersion"];
  "kind": IAlloyDBInstance["kind"];
  "metadata"?: IAlloyDBInstance["metadata"];
  "spec": IAlloyDBInstance["spec"];
  "status"?: IAlloyDBInstance["status"];

static apiVersion: IAlloyDBInstance["apiVersion"] = "alloydb.cnrm.cloud.google.com/v1alpha1";
static kind: IAlloyDBInstance["kind"] = "AlloyDBInstance";
static is = createTypeMetaGuard<IAlloyDBInstance>(AlloyDBInstance);

constructor(data?: ModelData<IAlloyDBInstance>) {
  super();

  this.setDefinedProps({
    apiVersion: AlloyDBInstance.apiVersion,
    kind: AlloyDBInstance.kind,
    ...data
  } as IAlloyDBInstance);
}
}


setValidateFunc(AlloyDBInstance, validate as ValidateFunc<IAlloyDBInstance>);
