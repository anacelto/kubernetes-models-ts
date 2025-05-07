import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * GrafanaFolder is the Schema for the grafanafolders API
 */
export interface IGrafanaFolder {
    /**
     * APIVersion defines the versioned schema of this representation of an object.
     * Servers should convert recognized schemas to the latest internal value, and
     * may reject unrecognized values.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    "apiVersion": "grafana.integreatly.org/v1beta1";
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind": "GrafanaFolder";
    "metadata"?: IObjectMeta;
    /**
     * GrafanaFolderSpec defines the desired state of GrafanaFolder
     */
    "spec": {
        /**
         * Allow the Operator to match this resource with Grafanas outside the current namespace
         */
        "allowCrossNamespaceImport"?: boolean;
        /**
         * Selects Grafana instances for import
         */
        "instanceSelector": {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            "matchExpressions"?: Array<{
                /**
                 * key is the label key that the selector applies to.
                 */
                "key": string;
                /**
                 * operator represents a key's relationship to a set of values.
                 * Valid operators are In, NotIn, Exists and DoesNotExist.
                 */
                "operator": string;
                /**
                 * values is an array of string values. If the operator is In or NotIn,
                 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                 * the values array must be empty. This array is replaced during a strategic
                 * merge patch.
                 */
                "values"?: Array<string>;
            }>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            "matchLabels"?: {
                [key: string]: string;
            };
        };
        /**
         * Reference to an existing GrafanaFolder CR in the same namespace
         */
        "parentFolderRef"?: string;
        /**
         * UID of the folder in which the current folder should be created
         */
        "parentFolderUID"?: string;
        /**
         * Raw json with folder permissions, potentially exported from Grafana
         */
        "permissions"?: string;
        /**
         * How often the resource is synced, defaults to 10m0s if not set
         */
        "resyncPeriod"?: string;
        /**
         * Display name of the folder in Grafana
         */
        "title"?: string;
        /**
         * Manually specify the UID the Folder is created with. Can be any string consisting of alphanumeric characters, - and _ with a maximum length of 40
         */
        "uid"?: string;
    };
    /**
     * GrafanaFolderStatus defines the observed state of GrafanaFolder
     */
    "status"?: {
        /**
         * The folder instanceSelector can't find matching grafana instances
         */
        "NoMatchingInstances"?: boolean;
        /**
         * Results when synchonizing resource with Grafana instances
         */
        "conditions"?: Array<{
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another.
             * This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            "lastTransitionTime": string;
            /**
             * message is a human readable message indicating details about the transition.
             * This may be an empty string.
             */
            "message": string;
            /**
             * observedGeneration represents the .metadata.generation that the condition was set based upon.
             * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
             * with respect to the current state of the instance.
             */
            "observedGeneration"?: number;
            /**
             * reason contains a programmatic identifier indicating the reason for the condition's last transition.
             * Producers of specific condition types may define expected values and meanings for this field,
             * and whether the values are considered a guaranteed API.
             * The value should be a CamelCase string.
             * This field may not be empty.
             */
            "reason": string;
            /**
             * status of the condition, one of True, False, Unknown.
             */
            "status": "True" | "False" | "Unknown";
            /**
             * type of condition in CamelCase or in foo.example.com/CamelCase.
             */
            "type": string;
        }>;
        "hash"?: string;
        /**
         * Last time the resource was synchronized with Grafana instances
         */
        "lastResync"?: string;
    };
}
/**
 * GrafanaFolder is the Schema for the grafanafolders API
 */
export declare class GrafanaFolder extends Model<IGrafanaFolder> implements IGrafanaFolder {
    "apiVersion": IGrafanaFolder["apiVersion"];
    "kind": IGrafanaFolder["kind"];
    "metadata"?: IGrafanaFolder["metadata"];
    "spec": IGrafanaFolder["spec"];
    "status"?: IGrafanaFolder["status"];
    static apiVersion: IGrafanaFolder["apiVersion"];
    static kind: IGrafanaFolder["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IGrafanaFolder>;
    constructor(data?: ModelData<IGrafanaFolder>);
}
