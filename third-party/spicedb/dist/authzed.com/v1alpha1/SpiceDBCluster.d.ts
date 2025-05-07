import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * SpiceDBCluster defines all options for a full SpiceDB cluster
 */
export interface ISpiceDBCluster {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "authzed.com/v1alpha1";
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "SpiceDBCluster";
    "metadata"?: IObjectMeta;
    /**
     * ClusterSpec holds the desired state of the cluster.
     */
    "spec"?: {
        /**
         * Channel is a defined series of updates that operator should follow. The operator is configured with a datasource that configures available channels and update paths. If `version` is not specified, then the operator will keep SpiceDB up-to-date with the current head of the channel. If `version` is specified, then the operator will write available updates in the status.
         */
        "channel"?: string;
        /**
         * Config values to be passed to the cluster
         */
        "config"?: {};
        /**
         * Patches is a list of patches to apply to generated resources. If multiple patches apply to the same object and field, later patches in the list take precedence over earlier ones.
         */
        "patches"?: Array<{
            /**
             * Kind targets an object by its kubernetes Kind name.
             */
            "kind"?: string;
            /**
             * Patch is an inlined representation of a structured merge patch (one that just specifies the structure and fields to be modified) or a an explicit JSON6902 patch operation.
             */
            "patch": {};
        }>;
        /**
         * SecretName points to a secret (in the same namespace) that holds secret config for the cluster like passwords, credentials, etc. If the secret is omitted, one will be generated
         */
        "secretName"?: string;
        /**
         * Version is the name of the version of SpiceDB that will be run. The version is usually a simple version string like `v1.13.0`, but the operator is configured with a data source that tells it what versions are allowed, and they may have other names. If omitted, the newest version in the head of the channel will be used. Note that the `config.image` field will take precedence over version/channel, if it is specified
         */
        "version"?: string;
    };
    /**
     * ClusterStatus communicates the observed state of the cluster.
     */
    "status"?: {
        /**
         * AvailableVersions is a list of versions that the currently running version can be updated to. Only applies if using an update channel.
         */
        "availableVersions"?: Array<{
            /**
             * Attributes is an optional set of descriptors for the update, which carry additional information like whether there will be a migration if this version is selected.
             */
            "attributes"?: Array<string>;
            /**
             * Channel is the name of the channel this version is in
             */
            "channel": string;
            /**
             * Description a human-readable description of the update.
             */
            "description"?: string;
            /**
             * Name is the identifier for this version
             */
            "name": string;
        }>;
        /**
         * Conditions for the current state of the Stack.
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
         * CurrentMigrationHash is a hash of the currently running migration target and config. If this is equal to TargetMigrationHash (and there are no conditions) then the datastore is fully migrated.
         */
        "currentMigrationHash"?: string;
        /**
         * Image is the image that is or will be used for this cluster
         */
        "image"?: string;
        /**
         * Migration is the name of the last migration applied
         */
        "migration"?: string;
        /**
         * ObservedGeneration represents the .metadata.generation that has been seen by the controller.
         */
        "observedGeneration"?: number;
        /**
         * Phase is the currently running phase (used for phased migrations)
         */
        "phase"?: string;
        /**
         * SecretHash is a digest of the last applied secret
         */
        "secretHash"?: string;
        /**
         * TargetMigrationHash is a hash of the desired migration target and config
         */
        "targetMigrationHash"?: string;
        /**
         * CurrentVersion is a description of the currently selected version from the channel, if an update channel is being used.
         */
        "version"?: {
            /**
             * Attributes is an optional set of descriptors for the update, which carry additional information like whether there will be a migration if this version is selected.
             */
            "attributes"?: Array<string>;
            /**
             * Channel is the name of the channel this version is in
             */
            "channel": string;
            /**
             * Description a human-readable description of the update.
             */
            "description"?: string;
            /**
             * Name is the identifier for this version
             */
            "name": string;
        };
    };
}
/**
 * SpiceDBCluster defines all options for a full SpiceDB cluster
 */
export declare class SpiceDBCluster extends Model<ISpiceDBCluster> implements ISpiceDBCluster {
    "apiVersion": ISpiceDBCluster["apiVersion"];
    "kind": ISpiceDBCluster["kind"];
    "metadata"?: ISpiceDBCluster["metadata"];
    "spec"?: ISpiceDBCluster["spec"];
    "status"?: ISpiceDBCluster["status"];
    static apiVersion: ISpiceDBCluster["apiVersion"];
    static kind: ISpiceDBCluster["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<ISpiceDBCluster>;
    constructor(data?: ModelData<ISpiceDBCluster>);
}
