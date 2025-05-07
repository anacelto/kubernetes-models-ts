import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/RedisCnrmCloudGoogleComV1beta1RedisInstance";

export interface IRedisInstance {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "redis.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "RedisInstance";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Immutable. Only applicable to STANDARD_HA tier which protects the instance
     * against zonal failures by provisioning it across two zones.
     * If provided, it must be a different zone from the one provided in
     * [locationId].
     */
    "alternativeLocationId"?: string;
    /**
     * Optional. Indicates whether OSS Redis AUTH is enabled for the
     * instance. If set to "true" AUTH is enabled on the instance.
     * Default value is "false" meaning AUTH is disabled.
     */
    "authEnabled"?: boolean;
    /**
     * Output only. AUTH String set on the instance. This field will only be populated if auth_enabled is true.
     */
    "authString"?: string;
    /**
     * The network to which the instance is connected. If left
     * unspecified, the default network will be used.
     */
    "authorizedNetworkRef"?: {
      /**
       * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
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
     * Immutable. The connection mode of the Redis instance. Default value: "DIRECT_PEERING" Possible values: ["DIRECT_PEERING", "PRIVATE_SERVICE_ACCESS"].
     */
    "connectMode"?: string;
    /**
     * Immutable. Optional. The KMS key reference that you want to use to
     * encrypt the data at rest for this Redis instance. If this is
     * provided, CMEK is enabled.
     */
    "customerManagedKeyRef"?: {
      /**
       * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
       * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
       * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
       * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
       * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
       * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
       * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
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
     * An arbitrary and optional user-provided name for the instance.
     */
    "displayName"?: string;
    /**
     * Immutable. The zone where the instance will be provisioned. If not provided,
     * the service will choose a zone for the instance. For STANDARD_HA tier,
     * instances will be created across two zones for protection against
     * zonal failures. If [alternativeLocationId] is also provided, it must
     * be different from [locationId].
     */
    "locationId"?: string;
    /**
     * Maintenance policy for an instance.
     */
    "maintenancePolicy"?: {
      /**
       * Output only. The time when the policy was created.
       * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
       * resolution and up to nine fractional digits.
       */
      "createTime"?: string;
      /**
       * Optional. Description of what this policy is for.
       * Create/Update methods return INVALID_ARGUMENT if the
       * length is greater than 512.
       */
      "description"?: string;
      /**
       * Output only. The time when the policy was last updated.
       * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
       * resolution and up to nine fractional digits.
       */
      "updateTime"?: string;
      /**
       * Optional. Maintenance window that is applied to resources covered by this policy.
       * Minimum 1. For the current version, the maximum number
       * of weekly_window is expected to be one.
       */
      "weeklyMaintenanceWindow"?: Array<{
        /**
         * Required. The day of week that maintenance updates occur.
         * 
         * - DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.
         * - MONDAY: Monday
         * - TUESDAY: Tuesday
         * - WEDNESDAY: Wednesday
         * - THURSDAY: Thursday
         * - FRIDAY: Friday
         * - SATURDAY: Saturday
         * - SUNDAY: Sunday Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].
         */
        "day": string;
        /**
         * Output only. Duration of the maintenance window.
         * The current window is fixed at 1 hour.
         * A duration in seconds with up to nine fractional digits,
         * terminated by 's'. Example: "3.5s".
         */
        "duration"?: string;
        /**
         * Required. Start time of the window in UTC time.
         */
        "startTime": {
          /**
           * Hours of day in 24 hour format. Should be from 0 to 23.
           * An API may choose to allow the value "24:00:00" for scenarios like business closing time.
           */
          "hours"?: number;
          /**
           * Minutes of hour of day. Must be from 0 to 59.
           */
          "minutes"?: number;
          /**
           * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
           */
          "nanos"?: number;
          /**
           * Seconds of minutes of the time. Must normally be from 0 to 59.
           * An API may allow the value 60 if it allows leap-seconds.
           */
          "seconds"?: number;
        };
      }>;
    };
    /**
     * Upcoming maintenance schedule.
     */
    "maintenanceSchedule"?: Array<{
      /**
       * Output only. The end time of any upcoming scheduled maintenance for this instance.
       * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
       * resolution and up to nine fractional digits.
       */
      "endTime"?: string;
      /**
       * Output only. The deadline that the maintenance schedule start time
       * can not go beyond, including reschedule.
       * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
       * resolution and up to nine fractional digits.
       */
      "scheduleDeadlineTime"?: string;
      /**
       * Output only. The start time of any upcoming scheduled maintenance for this instance.
       * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
       * resolution and up to nine fractional digits.
       */
      "startTime"?: string;
    }>;
    /**
     * Redis memory size in GiB.
     */
    "memorySizeGb": number;
    /**
     * Persistence configuration for an instance.
     */
    "persistenceConfig"?: {
      /**
       * Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used.
       * 
       * - DISABLED: 	Persistence is disabled for the instance, and any existing snapshots are deleted.
       * - RDB: RDB based Persistence is enabled. Possible values: ["DISABLED", "RDB"].
       */
      "persistenceMode"?: string;
      /**
       * Output only. The next time that a snapshot attempt is scheduled to occur.
       * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up
       * to nine fractional digits.
       * Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
       */
      "rdbNextSnapshotTime"?: string;
      /**
       * Optional. Available snapshot periods for scheduling.
       * 
       * - ONE_HOUR:	Snapshot every 1 hour.
       * - SIX_HOURS:	Snapshot every 6 hours.
       * - TWELVE_HOURS:	Snapshot every 12 hours.
       * - TWENTY_FOUR_HOURS:	Snapshot every 24 hours. Possible values: ["ONE_HOUR", "SIX_HOURS", "TWELVE_HOURS", "TWENTY_FOUR_HOURS"].
       */
      "rdbSnapshotPeriod"?: string;
      /**
       * Optional. Date and time that the first snapshot was/will be attempted,
       * and to which future snapshots will be aligned. If not provided,
       * the current time will be used.
       * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution
       * and up to nine fractional digits.
       * Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
       */
      "rdbSnapshotStartTime"?: string;
    };
    /**
     * Optional. Read replica mode. Can only be specified when trying to create the instance.
     * If not set, Memorystore Redis backend will default to READ_REPLICAS_DISABLED.
     * - READ_REPLICAS_DISABLED: If disabled, read endpoint will not be provided and the
     * instance cannot scale up or down the number of replicas.
     * - READ_REPLICAS_ENABLED: If enabled, read endpoint will be provided and the instance
     * can scale up and down the number of replicas. Possible values: ["READ_REPLICAS_DISABLED", "READ_REPLICAS_ENABLED"].
     */
    "readReplicasMode"?: string;
    /**
     * Redis configuration parameters, according to http://redis.io/topics/config.
     * Please check Memorystore documentation for the list of supported parameters:
     * https://cloud.google.com/memorystore/docs/redis/reference/rest/v1/projects.locations.instances#Instance.FIELDS.redis_configs.
     */
    "redisConfigs"?: {
      [key: string]: string;
    };
    /**
     * The version of Redis software. If not provided, latest supported
     * version will be used. Please check the API documentation linked
     * at the top for the latest valid values.
     */
    "redisVersion"?: string;
    /**
     * Immutable. The name of the Redis region of the instance.
     */
    "region": string;
    /**
     * Optional. The number of replica nodes. The valid range for the Standard Tier with
     * read replicas enabled is [1-5] and defaults to 2. If read replicas are not enabled
     * for a Standard Tier instance, the only valid value is 1 and the default is 1.
     * The valid value for basic tier is 0 and the default is also 0.
     */
    "replicaCount"?: number;
    /**
     * Immutable. The CIDR range of internal addresses that are reserved for this
     * instance. If not provided, the service will choose an unused /29
     * block, for example, 10.0.0.0/29 or 192.168.0.0/29. Ranges must be
     * unique and non-overlapping with existing subnets in an authorized
     * network.
     */
    "reservedIpRange"?: string;
    /**
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Optional. Additional IP range for node placement. Required when enabling read replicas on
     * an existing instance. For DIRECT_PEERING mode value must be a CIDR range of size /28, or
     * "auto". For PRIVATE_SERVICE_ACCESS mode value must be the name of an allocated address
     * range associated with the private service access connection, or "auto".
     */
    "secondaryIpRange"?: string;
    /**
     * Immutable. The service tier of the instance. Must be one of these values:
     * 
     * - BASIC: standalone instance
     * - STANDARD_HA: highly available primary/replica instances Default value: "BASIC" Possible values: ["BASIC", "STANDARD_HA"].
     */
    "tier"?: string;
    /**
     * Immutable. The TLS mode of the Redis instance, If not provided, TLS is disabled for the instance.
     * 
     * - SERVER_AUTHENTICATION: Client to Server traffic encryption enabled with server authentication Default value: "DISABLED" Possible values: ["SERVER_AUTHENTICATION", "DISABLED"].
     */
    "transitEncryptionMode"?: string;
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
     * The time the instance was created in RFC3339 UTC "Zulu" format,
     * accurate to nanoseconds.
     */
    "createTime"?: string;
    /**
     * The current zone where the Redis endpoint is placed.
     * For Basic Tier instances, this will always be the same as the
     * [locationId] provided by the user at creation time. For Standard Tier
     * instances, this can be either [locationId] or [alternativeLocationId]
     * and can change after a failover event.
     */
    "currentLocationId"?: string;
    /**
     * Hostname or IP address of the exposed Redis endpoint used by clients
     * to connect to the service.
     */
    "host"?: string;
    /**
     * Upcoming maintenance schedule.
     */
    "maintenanceSchedule"?: Array<{
      /**
       * Output only. The end time of any upcoming scheduled maintenance for this instance.
       * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
       * resolution and up to nine fractional digits.
       */
      "endTime"?: string;
      /**
       * Output only. The deadline that the maintenance schedule start time
       * can not go beyond, including reschedule.
       * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
       * resolution and up to nine fractional digits.
       */
      "scheduleDeadlineTime"?: string;
      /**
       * Output only. The start time of any upcoming scheduled maintenance for this instance.
       * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
       * resolution and up to nine fractional digits.
       */
      "startTime"?: string;
    }>;
    /**
     * Output only. Info per node.
     */
    "nodes"?: Array<{
      /**
       * Node identifying string. e.g. 'node-0', 'node-1'.
       */
      "id"?: string;
      /**
       * Location of the node.
       */
      "zone"?: string;
    }>;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * Output only. Cloud IAM identity used by import / export operations
     * to transfer data to/from Cloud Storage. Format is "serviceAccount:".
     * The value may change over time for a given instance so should be
     * checked before each import/export operation.
     */
    "persistenceIamIdentity"?: string;
    /**
     * The port number of the exposed Redis endpoint.
     */
    "port"?: number;
    /**
     * Output only. Hostname or IP address of the exposed readonly Redis endpoint. Standard tier only.
     * Targets all healthy replica nodes in instance. Replication is asynchronous and replica nodes
     * will exhibit some lag behind the primary. Write requests must target 'host'.
     */
    "readEndpoint"?: string;
    /**
     * Output only. The port number of the exposed readonly redis endpoint. Standard tier only.
     * Write requests should target 'port'.
     */
    "readEndpointPort"?: number;
    /**
     * List of server CA certificates for the instance.
     */
    "serverCaCerts"?: Array<{
      /**
       * The certificate data in PEM format.
       */
      "cert"?: string;
      /**
       * The time when the certificate was created.
       */
      "createTime"?: string;
      /**
       * The time when the certificate expires.
       */
      "expireTime"?: string;
      /**
       * Serial number, as extracted from the certificate.
       */
      "serialNumber"?: string;
      /**
       * Sha1 Fingerprint of the certificate.
       */
      "sha1Fingerprint"?: string;
    }>;
  };
}

export class RedisInstance extends Model<IRedisInstance> implements IRedisInstance {
  "apiVersion": IRedisInstance["apiVersion"];
  "kind": IRedisInstance["kind"];
  "metadata"?: IRedisInstance["metadata"];
  "spec": IRedisInstance["spec"];
  "status"?: IRedisInstance["status"];

static apiVersion: IRedisInstance["apiVersion"] = "redis.cnrm.cloud.google.com/v1beta1";
static kind: IRedisInstance["kind"] = "RedisInstance";
static is = createTypeMetaGuard<IRedisInstance>(RedisInstance);

constructor(data?: ModelData<IRedisInstance>) {
  super();

  this.setDefinedProps({
    apiVersion: RedisInstance.apiVersion,
    kind: RedisInstance.kind,
    ...data
  } as IRedisInstance);
}
}


setValidateFunc(RedisInstance, validate as ValidateFunc<IRedisInstance>);
