import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IOSConfigPatchDeployment {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "osconfig.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "OSConfigPatchDeployment";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Immutable. Description of the patch deployment. Length of the description is limited to 1024 characters.
         */
        "description"?: string;
        /**
         * Immutable. Duration of the patch. After the duration ends, the patch times out.
         * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
         */
        "duration"?: string;
        /**
         * Immutable. VM instances to patch.
         */
        "instanceFilter": {
            /**
             * Immutable. Target all VM instances in the project. If true, no other criteria is permitted.
             */
            "all"?: boolean;
            /**
             * Immutable. Targets VM instances matching ANY of these GroupLabels. This allows targeting of disparate groups of VM instances.
             */
            "groupLabels"?: Array<{
                /**
                 * Immutable. Compute Engine instance labels that must be present for a VM instance to be targeted by this filter.
                 */
                "labels": {
                    [key: string]: string;
                };
            }>;
            /**
             * Immutable. Targets VMs whose name starts with one of these prefixes. Similar to labels, this is another way to group
             * VMs when targeting configs, for example prefix="prod-".
             */
            "instanceNamePrefixes"?: Array<string>;
            /**
             * Immutable. Targets any of the VM instances specified. Instances are specified by their URI in the 'form zones/{{zone}}/instances/{{instance_name}}',
             * 'projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}', or
             * 'https://www.googleapis.com/compute/v1/projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}'.
             */
            "instances"?: Array<string>;
            /**
             * Immutable. Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone.
             */
            "zones"?: Array<string>;
        };
        /**
         * Immutable. Schedule a one-time execution.
         */
        "oneTimeSchedule"?: {
            /**
             * Immutable. The desired patch job execution time. A timestamp in RFC3339 UTC "Zulu" format,
             * accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
             */
            "executeTime": string;
        };
        /**
         * Immutable. Patch configuration that is applied.
         */
        "patchConfig"?: {
            /**
             * Immutable. Apt update settings. Use this setting to override the default apt patch rules.
             */
            "apt"?: {
                /**
                 * Immutable. List of packages to exclude from update. These packages will be excluded.
                 */
                "excludes"?: Array<string>;
                /**
                 * Immutable. An exclusive list of packages to be updated. These are the only packages that will be updated.
                 * If these packages are not installed, they will be ignored. This field cannot be specified with
                 * any other patch configuration fields.
                 */
                "exclusivePackages"?: Array<string>;
                /**
                 * Immutable. By changing the type to DIST, the patching is performed using apt-get dist-upgrade instead. Possible values: ["DIST", "UPGRADE"].
                 */
                "type"?: string;
            };
            /**
             * Immutable. goo update settings. Use this setting to override the default goo patch rules.
             */
            "goo"?: {
                /**
                 * Immutable. goo update settings. Use this setting to override the default goo patch rules.
                 */
                "enabled": boolean;
            };
            /**
             * Immutable. Allows the patch job to run on Managed instance groups (MIGs).
             */
            "migInstancesAllowed"?: boolean;
            /**
             * Immutable. The ExecStep to run after the patch update.
             */
            "postStep"?: {
                /**
                 * Immutable. The ExecStepConfig for all Linux VMs targeted by the PatchJob.
                 */
                "linuxExecStepConfig"?: {
                    /**
                     * Immutable. Defaults to [0]. A list of possible return values that the execution can return to indicate a success.
                     */
                    "allowedSuccessCodes"?: Array<number>;
                    /**
                     * Immutable. A Cloud Storage object containing the executable.
                     */
                    "gcsObject"?: {
                        /**
                         * Immutable. Bucket of the Cloud Storage object.
                         */
                        "bucket": string;
                        /**
                         * Immutable. Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.
                         */
                        "generationNumber": string;
                        /**
                         * Immutable. Name of the Cloud Storage object.
                         */
                        "object": string;
                    };
                    /**
                     * Immutable. The script interpreter to use to run the script. If no interpreter is specified the script will
                     * be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"].
                     */
                    "interpreter"?: string;
                    /**
                     * Immutable. An absolute path to the executable on the VM.
                     */
                    "localPath"?: string;
                };
                /**
                 * Immutable. The ExecStepConfig for all Windows VMs targeted by the PatchJob.
                 */
                "windowsExecStepConfig"?: {
                    /**
                     * Immutable. Defaults to [0]. A list of possible return values that the execution can return to indicate a success.
                     */
                    "allowedSuccessCodes"?: Array<number>;
                    /**
                     * Immutable. A Cloud Storage object containing the executable.
                     */
                    "gcsObject"?: {
                        /**
                         * Immutable. Bucket of the Cloud Storage object.
                         */
                        "bucket": string;
                        /**
                         * Immutable. Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.
                         */
                        "generationNumber": string;
                        /**
                         * Immutable. Name of the Cloud Storage object.
                         */
                        "object": string;
                    };
                    /**
                     * Immutable. The script interpreter to use to run the script. If no interpreter is specified the script will
                     * be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"].
                     */
                    "interpreter"?: string;
                    /**
                     * Immutable. An absolute path to the executable on the VM.
                     */
                    "localPath"?: string;
                };
            };
            /**
             * Immutable. The ExecStep to run before the patch update.
             */
            "preStep"?: {
                /**
                 * Immutable. The ExecStepConfig for all Linux VMs targeted by the PatchJob.
                 */
                "linuxExecStepConfig"?: {
                    /**
                     * Immutable. Defaults to [0]. A list of possible return values that the execution can return to indicate a success.
                     */
                    "allowedSuccessCodes"?: Array<number>;
                    /**
                     * Immutable. A Cloud Storage object containing the executable.
                     */
                    "gcsObject"?: {
                        /**
                         * Immutable. Bucket of the Cloud Storage object.
                         */
                        "bucket": string;
                        /**
                         * Immutable. Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.
                         */
                        "generationNumber": string;
                        /**
                         * Immutable. Name of the Cloud Storage object.
                         */
                        "object": string;
                    };
                    /**
                     * Immutable. The script interpreter to use to run the script. If no interpreter is specified the script will
                     * be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"].
                     */
                    "interpreter"?: string;
                    /**
                     * Immutable. An absolute path to the executable on the VM.
                     */
                    "localPath"?: string;
                };
                /**
                 * Immutable. The ExecStepConfig for all Windows VMs targeted by the PatchJob.
                 */
                "windowsExecStepConfig"?: {
                    /**
                     * Immutable. Defaults to [0]. A list of possible return values that the execution can return to indicate a success.
                     */
                    "allowedSuccessCodes"?: Array<number>;
                    /**
                     * Immutable. A Cloud Storage object containing the executable.
                     */
                    "gcsObject"?: {
                        /**
                         * Immutable. Bucket of the Cloud Storage object.
                         */
                        "bucket": string;
                        /**
                         * Immutable. Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.
                         */
                        "generationNumber": string;
                        /**
                         * Immutable. Name of the Cloud Storage object.
                         */
                        "object": string;
                    };
                    /**
                     * Immutable. The script interpreter to use to run the script. If no interpreter is specified the script will
                     * be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"].
                     */
                    "interpreter"?: string;
                    /**
                     * Immutable. An absolute path to the executable on the VM.
                     */
                    "localPath"?: string;
                };
            };
            /**
             * Immutable. Post-patch reboot settings. Possible values: ["DEFAULT", "ALWAYS", "NEVER"].
             */
            "rebootConfig"?: string;
            /**
             * Immutable. Windows update settings. Use this setting to override the default Windows patch rules.
             */
            "windowsUpdate"?: {
                /**
                 * Immutable. Only apply updates of these windows update classifications. If empty, all updates are applied. Possible values: ["CRITICAL", "SECURITY", "DEFINITION", "DRIVER", "FEATURE_PACK", "SERVICE_PACK", "TOOL", "UPDATE_ROLLUP", "UPDATE"].
                 */
                "classifications"?: Array<string>;
                /**
                 * Immutable. List of KBs to exclude from update.
                 */
                "excludes"?: Array<string>;
                /**
                 * Immutable. An exclusive list of kbs to be updated. These are the only patches that will be updated.
                 * This field must not be used with other patch configurations.
                 */
                "exclusivePatches"?: Array<string>;
            };
            /**
             * Immutable. Yum update settings. Use this setting to override the default yum patch rules.
             */
            "yum"?: {
                /**
                 * Immutable. List of packages to exclude from update. These packages will be excluded.
                 */
                "excludes"?: Array<string>;
                /**
                 * Immutable. An exclusive list of packages to be updated. These are the only packages that will be updated.
                 * If these packages are not installed, they will be ignored. This field cannot be specified with
                 * any other patch configuration fields.
                 */
                "exclusivePackages"?: Array<string>;
                /**
                 * Immutable. Will cause patch to run yum update-minimal instead.
                 */
                "minimal"?: boolean;
                /**
                 * Immutable. Adds the --security flag to yum update. Not supported on all platforms.
                 */
                "security"?: boolean;
            };
            /**
             * Immutable. zypper update settings. Use this setting to override the default zypper patch rules.
             */
            "zypper"?: {
                /**
                 * Immutable. Install only patches with these categories. Common categories include security, recommended, and feature.
                 */
                "categories"?: Array<string>;
                /**
                 * Immutable. List of packages to exclude from update.
                 */
                "excludes"?: Array<string>;
                /**
                 * Immutable. An exclusive list of patches to be updated. These are the only patches that will be installed using 'zypper patch patch:' command.
                 * This field must not be used with any other patch configuration fields.
                 */
                "exclusivePatches"?: Array<string>;
                /**
                 * Immutable. Install only patches with these severities. Common severities include critical, important, moderate, and low.
                 */
                "severities"?: Array<string>;
                /**
                 * Immutable. Adds the --with-optional flag to zypper patch.
                 */
                "withOptional"?: boolean;
                /**
                 * Immutable. Adds the --with-update flag, to zypper patch.
                 */
                "withUpdate"?: boolean;
            };
        };
        /**
         * Immutable. A name for the patch deployment in the project. When creating a name the following rules apply:
         * \* Must contain only lowercase letters, numbers, and hyphens.
         * \* Must start with a letter.
         * \* Must be between 1-63 characters.
         * \* Must end with a number or a letter.
         * \* Must be unique within the project.
         */
        "patchDeploymentId": string;
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
         * Immutable. Schedule recurring executions.
         */
        "recurringSchedule"?: {
            /**
             * Immutable. The end time at which a recurring patch deployment schedule is no longer active.
             * A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
             */
            "endTime"?: string;
            /**
             * The time the last patch job ran successfully.
             * A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
             */
            "lastExecuteTime"?: string;
            /**
             * Immutable. Schedule with monthly executions.
             */
            "monthly"?: {
                /**
                 * Immutable. One day of the month. 1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month.
                 * Months without the target day will be skipped. For example, a schedule to run "every month on the 31st"
                 * will not run in February, April, June, etc.
                 */
                "monthDay"?: number;
                /**
                 * Immutable. Week day in a month.
                 */
                "weekDayOfMonth"?: {
                    /**
                     * Immutable. A day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].
                     */
                    "dayOfWeek": string;
                    /**
                     * Immutable. Week number in a month. 1-4 indicates the 1st to 4th week of the month. -1 indicates the last week of the month.
                     */
                    "weekOrdinal": number;
                };
            };
            /**
             * The time the next patch job is scheduled to run.
             * A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
             */
            "nextExecuteTime"?: string;
            /**
             * Immutable. The time that the recurring schedule becomes effective. Defaults to createTime of the patch deployment.
             * A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
             */
            "startTime"?: string;
            /**
             * Immutable. Time of the day to run a recurring deployment.
             */
            "timeOfDay": {
                /**
                 * Immutable. Hours of day in 24 hour format. Should be from 0 to 23.
                 * An API may choose to allow the value "24:00:00" for scenarios like business closing time.
                 */
                "hours"?: number;
                /**
                 * Immutable. Minutes of hour of day. Must be from 0 to 59.
                 */
                "minutes"?: number;
                /**
                 * Immutable. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
                 */
                "nanos"?: number;
                /**
                 * Immutable. Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
                 */
                "seconds"?: number;
            };
            /**
             * Immutable. Defines the time zone that timeOfDay is relative to. The rules for daylight saving time are
             * determined by the chosen time zone.
             */
            "timeZone": {
                /**
                 * Immutable. IANA Time Zone Database time zone, e.g. "America/New_York".
                 */
                "id": string;
                /**
                 * Immutable. IANA Time Zone Database version number, e.g. "2019a".
                 */
                "version"?: string;
            };
            /**
             * Immutable. Schedule with weekly executions.
             */
            "weekly"?: {
                /**
                 * Immutable. IANA Time Zone Database time zone, e.g. "America/New_York". Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].
                 */
                "dayOfWeek": string;
            };
        };
        /**
         * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
         */
        "resourceID"?: string;
        /**
         * Immutable. Rollout strategy of the patch job.
         */
        "rollout"?: {
            /**
             * Immutable. The maximum number (or percentage) of VMs per zone to disrupt at any given moment. The number of VMs calculated from multiplying the percentage by the total number of VMs in a zone is rounded up.
             * During patching, a VM is considered disrupted from the time the agent is notified to begin until patching has completed. This disruption time includes the time to complete reboot and any post-patch steps.
             * A VM contributes to the disruption budget if its patching operation fails either when applying the patches, running pre or post patch steps, or if it fails to respond with a success notification before timing out. VMs that are not running or do not have an active agent do not count toward this disruption budget.
             * For zone-by-zone rollouts, if the disruption budget in a zone is exceeded, the patch job stops, because continuing to the next zone requires completion of the patch process in the previous zone.
             * For example, if the disruption budget has a fixed value of 10, and 8 VMs fail to patch in the current zone, the patch job continues to patch 2 VMs at a time until the zone is completed. When that zone is completed successfully, patching begins with 10 VMs at a time in the next zone. If 10 VMs in the next zone fail to patch, the patch job stops.
             */
            "disruptionBudget": {
                /**
                 * Immutable. Specifies a fixed value.
                 */
                "fixed"?: number;
                /**
                 * Immutable. Specifies the relative value defined as a percentage, which will be multiplied by a reference value.
                 */
                "percentage"?: number;
            };
            /**
             * Immutable. Mode of the patch rollout. Possible values: ["ZONE_BY_ZONE", "CONCURRENT_ZONES"].
             */
            "mode": string;
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
         * Time the patch deployment was created. Timestamp is in RFC3339 text format.
         * A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
         */
        "createTime"?: string;
        /**
         * The last time a patch job was started by this deployment. Timestamp is in RFC3339 text format.
         * A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
         */
        "lastExecuteTime"?: string;
        /**
         * Unique name for the patch deployment resource in a project.
         * The patch deployment name is in the form: projects/{project_id}/patchDeployments/{patchDeploymentId}.
         */
        "name"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        /**
         * Time the patch deployment was last updated. Timestamp is in RFC3339 text format.
         * A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
         */
        "updateTime"?: string;
    };
}
export declare class OSConfigPatchDeployment extends Model<IOSConfigPatchDeployment> implements IOSConfigPatchDeployment {
    "apiVersion": IOSConfigPatchDeployment["apiVersion"];
    "kind": IOSConfigPatchDeployment["kind"];
    "metadata"?: IOSConfigPatchDeployment["metadata"];
    "spec": IOSConfigPatchDeployment["spec"];
    "status"?: IOSConfigPatchDeployment["status"];
    static apiVersion: IOSConfigPatchDeployment["apiVersion"];
    static kind: IOSConfigPatchDeployment["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IOSConfigPatchDeployment>;
    constructor(data?: ModelData<IOSConfigPatchDeployment>);
}
