import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * K8ssandraTask is the Schema for the k8ssandratasks API
 */
export interface IK8ssandraTask {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "control.k8ssandra.io/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "K8ssandraTask";
    "metadata"?: IObjectMeta;
    /**
     * K8ssandraTaskSpec defines the desired state of K8ssandraTask
     */
    "spec"?: {
        /**
         * Which K8ssandraCluster this task is operating on.
         */
        "cluster"?: {
            /**
             * API version of the referent.
             */
            "apiVersion"?: string;
            /**
             * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: "spec.containers{name}" (where "name" refers to the name of the container that triggered the event) or if no container name is specified "spec.containers[2]" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
             */
            "fieldPath"?: string;
            /**
             * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            "kind"?: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name"?: string;
            /**
             * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            "namespace"?: string;
            /**
             * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
             */
            "resourceVersion"?: string;
            /**
             * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
             */
            "uid"?: string;
        };
        /**
         * The names of the targeted datacenters. If omitted, will default to all DCs in spec order.
         */
        "datacenters"?: Array<string>;
        /**
         * How to handle concurrency across DCs. Valid values are: - "Forbid" (default): sequential processing. The K8ssandraTask only spawns one CassandraTask at a time, which must run to completion before the CassandraTask for the next DC is created. If any CassandraTask fails, the K8ssandraTask is marked as failed, and the remaining CassandraTasks are cancelled (i.e. never created). - "Allow": parallel processing. The K8ssandraTask spawns all CassandraTasks at once. If any CassandraTask fails, the K8ssandraTask is marked as failed, but the remaining CassandraTasks finish running.
         */
        "dcConcurrencyPolicy"?: string;
        /**
         * The characteristics of the CassandraTask that will get created for each DC.
         */
        "template"?: {
            /**
             * Specifics if this task can be run concurrently with other active tasks. Valid values are: - "Allow": allows multiple Tasks to run concurrently on Cassandra cluster - "Forbid" (default): only a single task is executed at once The "Allow" property is only valid if all the other active Tasks have "Allow" as well.
             */
            "concurrencyPolicy"?: string;
            /**
             * Jobs defines the jobs this task will execute (and their order)
             */
            "jobs"?: Array<{
                /**
                 * Arguments are additional parameters for the command
                 */
                "args"?: {
                    "end_token"?: string;
                    "jobs"?: number;
                    "keyspace_name"?: string;
                    /**
                     * NewTokens is a map of pod names to their newly-assigned tokens. Required for the move command, ignored otherwise. Pods referenced in this map must exist; any existing pod not referenced in this map will not be moved.
                     */
                    "new_tokens"?: {
                        [key: string]: string;
                    };
                    "no_snapshot"?: boolean;
                    /**
                     * Scrub arguments
                     */
                    "no_validate"?: boolean;
                    "pod_name"?: string;
                    "rack"?: string;
                    "skip_corrupted"?: boolean;
                    "source_datacenter"?: string;
                    /**
                     * Compaction arguments
                     */
                    "split_output"?: boolean;
                    "start_token"?: string;
                    "tables"?: Array<string>;
                };
                /**
                 * Command defines what is run against Cassandra pods
                 */
                "command": string;
                "name": string;
            }>;
            /**
             * RestartPolicy indicates the behavior n case of failure. Default is Never.
             */
            "restartPolicy"?: string;
            /**
             * ScheduledTime indicates the earliest possible time this task is executed. This does not necessarily equal to the time it is actually executed (if other tasks are blocking for example). If not set, the task will be executed immediately.
             */
            "scheduledTime"?: string;
            /**
             * TTLSecondsAfterFinished defines how long the completed job will kept before being cleaned up. If set to 0 the task will not be cleaned up by the cass-operator. If unset, the default time (86400s) is used.
             */
            "ttlSecondsAfterFinished"?: number;
        };
    };
    /**
     * K8ssandraTaskStatus defines the observed state of K8ssandraTask
     */
    "status"?: {
        /**
         * The number of actively running pods.
         */
        "active"?: number;
        /**
         * Represents time when the job was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. The completion time is only set when the job finishes successfully.
         */
        "completionTime"?: string;
        /**
         * The latest available observations of an object's current state. When a Job fails, one of the conditions will have type "Failed" and status true. When a Job is suspended, one of the conditions will have type "Suspended" and status true; when the Job is resumed, the status of this condition will become false. When a Job is completed, one of the conditions will have type "Complete" and status true. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
         */
        "conditions"?: Array<{
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            "lastTransitionTime": string;
            /**
             * message is a human readable message indicating details about the transition. This may be an empty string.
             */
            "message": string;
            /**
             * observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
             */
            "observedGeneration"?: number;
            /**
             * reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
             */
            "reason": string;
            /**
             * status of the condition, one of True, False, Unknown.
             */
            "status": "True" | "False" | "Unknown";
            /**
             * type of condition in CamelCase or in foo.example.com/CamelCase. --- Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be useful (see .node.status.conditions), the ability to deconflict is important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
             */
            "type": string;
        }>;
        /**
         * The individual progress of the CassandraTask in each datacenter.
         */
        "datacenters"?: {
            [key: string]: {
                /**
                 * The number of actively running pods.
                 */
                "active"?: number;
                /**
                 * Represents time when the job was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. The completion time is only set when the job finishes successfully.
                 */
                "completionTime"?: string;
                /**
                 * The latest available observations of an object's current state. When a Job fails, one of the conditions will have type "Failed" and status true. When a Job is suspended, one of the conditions will have type "Suspended" and status true; when the Job is resumed, the status of this condition will become false. When a Job is completed, one of the conditions will have type "Complete" and status true. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
                 */
                "conditions"?: Array<{
                    /**
                     * lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
                     */
                    "lastTransitionTime": string;
                    /**
                     * message is a human readable message indicating details about the transition. This may be an empty string.
                     */
                    "message": string;
                    /**
                     * observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
                     */
                    "observedGeneration"?: number;
                    /**
                     * reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
                     */
                    "reason": string;
                    /**
                     * status of the condition, one of True, False, Unknown.
                     */
                    "status": "True" | "False" | "Unknown";
                    /**
                     * type of condition in CamelCase or in foo.example.com/CamelCase. --- Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be useful (see .node.status.conditions), the ability to deconflict is important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
                     */
                    "type": string;
                }>;
                /**
                 * The number of pods which reached phase Failed.
                 */
                "failed"?: number;
                /**
                 * Represents time when the job controller started processing a job. When a Job is created in the suspended state, this field is not set until the first time it is resumed. This field is reset every time a Job is resumed from suspension. It is represented in RFC3339 form and is in UTC.
                 */
                "startTime"?: string;
                /**
                 * The number of pods which reached phase Succeeded.
                 */
                "succeeded"?: number;
            };
        };
        /**
         * The number of pods which reached phase Failed.
         */
        "failed"?: number;
        /**
         * Represents time when the job controller started processing a job. When a Job is created in the suspended state, this field is not set until the first time it is resumed. This field is reset every time a Job is resumed from suspension. It is represented in RFC3339 form and is in UTC.
         */
        "startTime"?: string;
        /**
         * The number of pods which reached phase Succeeded.
         */
        "succeeded"?: number;
    };
}
/**
 * K8ssandraTask is the Schema for the k8ssandratasks API
 */
export declare class K8ssandraTask extends Model<IK8ssandraTask> implements IK8ssandraTask {
    "apiVersion": IK8ssandraTask["apiVersion"];
    "kind": IK8ssandraTask["kind"];
    "metadata"?: IK8ssandraTask["metadata"];
    "spec"?: IK8ssandraTask["spec"];
    "status"?: IK8ssandraTask["status"];
    static apiVersion: IK8ssandraTask["apiVersion"];
    static kind: IK8ssandraTask["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IK8ssandraTask>;
    constructor(data?: ModelData<IK8ssandraTask>);
}
