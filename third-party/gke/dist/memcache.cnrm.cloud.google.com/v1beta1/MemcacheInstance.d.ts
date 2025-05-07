import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IMemcacheInstance {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "memcache.cnrm.cloud.google.com/v1beta1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "MemcacheInstance";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * A user-visible name for the instance.
         */
        "displayName"?: string;
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
             * Output only. The time when the policy was updated.
             * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
             * resolution and up to nine fractional digits.
             */
            "updateTime"?: string;
            /**
             * Required. Maintenance window that is applied to resources covered by this policy.
             * Minimum 1. For the current version, the maximum number of weekly_maintenance_windows
             * is expected to be one.
             */
            "weeklyMaintenanceWindow": Array<{
                /**
                 * Required. The day of week that maintenance updates occur.
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
                 * Required. The length of the maintenance window, ranging from 3 hours to 8 hours.
                 * A duration in seconds with up to nine fractional digits,
                 * terminated by 's'. Example: "3.5s".
                 */
                "duration": string;
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
         * Immutable. User-specified parameters for this memcache instance.
         */
        "memcacheParameters"?: {
            /**
             * This is a unique ID associated with this set of parameters.
             */
            "id"?: string;
            /**
             * User-defined set of parameters to use in the memcache process.
             */
            "params"?: {
                [key: string]: string;
            };
        };
        /**
         * The major version of Memcached software. If not provided, latest supported version will be used.
         * Currently the latest supported major version is MEMCACHE_1_5. The minor version will be automatically
         * determined by our system based on the latest supported minor version. Default value: "MEMCACHE_1_5" Possible values: ["MEMCACHE_1_5"].
         */
        "memcacheVersion"?: string;
        /**
         * The full name of the network to connect the instance to.
         */
        "networkRef"?: {
            /**
             * Allowed value: string of the format `projects/{{project}}/global/networks/{{value}}`, where {{value}} is the `name` field of a `ComputeNetwork` resource.
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
             * Allowed value: string of the format `projects/{{project}}/global/networks/{{value}}`, where {{value}} is the `name` field of a `ComputeNetwork` resource.
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
             * Allowed value: string of the format `projects/{{project}}/global/networks/{{value}}`, where {{value}} is the `name` field of a `ComputeNetwork` resource.
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
             * Allowed value: string of the format `projects/{{project}}/global/networks/{{value}}`, where {{value}} is the `name` field of a `ComputeNetwork` resource.
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
             * Allowed value: string of the format `projects/{{project}}/global/networks/{{value}}`, where {{value}} is the `name` field of a `ComputeNetwork` resource.
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
             * Allowed value: string of the format `projects/{{project}}/global/networks/{{value}}`, where {{value}} is the `name` field of a `ComputeNetwork` resource.
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
             * Allowed value: string of the format `projects/{{project}}/global/networks/{{value}}`, where {{value}} is the `name` field of a `ComputeNetwork` resource.
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
         * Immutable. Configuration for memcache nodes.
         */
        "nodeConfig": {
            /**
             * Number of CPUs per node.
             */
            "cpuCount": number;
            /**
             * Memory size in Mebibytes for each memcache node.
             */
            "memorySizeMb": number;
        };
        /**
         * Number of nodes in the memcache instance.
         */
        "nodeCount": number;
        /**
         * Immutable. The region of the Memcache instance. If it is not provided, the provider region is used.
         */
        "region": string;
        /**
         * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
         */
        "resourceID"?: string;
        /**
         * Immutable. Zones where memcache nodes should be provisioned.  If not
         * provided, all zones will be used.
         */
        "zones"?: Array<string>;
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
         * Creation timestamp in RFC3339 text format.
         */
        "createTime"?: string;
        /**
         * Endpoint for Discovery API.
         */
        "discoveryEndpoint"?: string;
        /**
         * Output only. Published maintenance schedule.
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
         * The full version of memcached server running on this instance.
         */
        "memcacheFullVersion"?: string;
        /**
         * Additional information about the instance state, if available.
         */
        "memcacheNodes"?: Array<{
            /**
             * Hostname or IP address of the Memcached node used by the clients to connect to the Memcached server on this node.
             */
            "host"?: string;
            /**
             * Identifier of the Memcached node. The node id does not include project or location like the Memcached instance name.
             */
            "nodeId"?: string;
            /**
             * The port number of the Memcached server on this node.
             */
            "port"?: number;
            /**
             * Current state of the Memcached node.
             */
            "state"?: string;
            /**
             * Location (GCP Zone) for the Memcached node.
             */
            "zone"?: string;
        }>;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
    };
}
export declare class MemcacheInstance extends Model<IMemcacheInstance> implements IMemcacheInstance {
    "apiVersion": IMemcacheInstance["apiVersion"];
    "kind": IMemcacheInstance["kind"];
    "metadata"?: IMemcacheInstance["metadata"];
    "spec": IMemcacheInstance["spec"];
    "status"?: IMemcacheInstance["status"];
    static apiVersion: IMemcacheInstance["apiVersion"];
    static kind: IMemcacheInstance["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IMemcacheInstance>;
    constructor(data?: ModelData<IMemcacheInstance>);
}
