import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
/**
 * GrafanaDatasource is the Schema for the grafanadatasources API
 */
export interface IGrafanaDatasource {
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
    "kind": "GrafanaDatasource";
    "metadata"?: IObjectMeta;
    /**
     * GrafanaDatasourceSpec defines the desired state of GrafanaDatasource
     */
    "spec": {
        /**
         * Allow the Operator to match this resource with Grafanas outside the current namespace
         */
        "allowCrossNamespaceImport"?: boolean;
        "datasource": {
            "access"?: string;
            "basicAuth"?: boolean;
            "basicAuthUser"?: string;
            "database"?: string;
            /**
             * Whether to enable/disable editing of the datasource in Grafana UI
             */
            "editable"?: boolean;
            "isDefault"?: boolean;
            "jsonData"?: {};
            "name"?: string;
            /**
             * Deprecated field, it has no effect
             */
            "orgId"?: number;
            "secureJsonData"?: {};
            "type"?: string;
            /**
             * Deprecated field, use spec.uid instead
             */
            "uid"?: string;
            "url"?: string;
            "user"?: string;
        };
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
         * plugins
         */
        "plugins"?: Array<{
            "name": string;
            "version": string;
        }>;
        /**
         * How often the resource is synced, defaults to 10m0s if not set
         */
        "resyncPeriod"?: string;
        /**
         * The UID, for the datasource, fallback to the deprecated spec.datasource.uid
         * and metadata.uid. Can be any string consisting of alphanumeric characters,
         * - and _ with a maximum length of 40 +optional
         */
        "uid"?: string;
        /**
         * environments variables from secrets or config maps
         */
        "valuesFrom"?: Array<{
            "targetPath": string;
            "valueFrom": {
                /**
                 * Selects a key of a ConfigMap.
                 */
                "configMapKeyRef"?: {
                    /**
                     * The key to select.
                     */
                    "key": string;
                    /**
                     * Name of the referent.
                     * This field is effectively required, but due to backwards compatibility is
                     * allowed to be empty. Instances of this type with an empty value here are
                     * almost certainly wrong.
                     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Specify whether the ConfigMap or its key must be defined
                     */
                    "optional"?: boolean;
                };
                /**
                 * Selects a key of a Secret.
                 */
                "secretKeyRef"?: {
                    /**
                     * The key of the secret to select from.  Must be a valid secret key.
                     */
                    "key": string;
                    /**
                     * Name of the referent.
                     * This field is effectively required, but due to backwards compatibility is
                     * allowed to be empty. Instances of this type with an empty value here are
                     * almost certainly wrong.
                     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    "name"?: string;
                    /**
                     * Specify whether the Secret or its key must be defined
                     */
                    "optional"?: boolean;
                };
            };
        }>;
    };
    /**
     * GrafanaDatasourceStatus defines the observed state of GrafanaDatasource
     */
    "status"?: {
        /**
         * The datasource instanceSelector can't find matching grafana instances
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
         * Deprecated: Check status.conditions or operator logs
         */
        "lastMessage"?: string;
        /**
         * Last time the resource was synchronized with Grafana instances
         */
        "lastResync"?: string;
        "uid"?: string;
    };
}
/**
 * GrafanaDatasource is the Schema for the grafanadatasources API
 */
export declare class GrafanaDatasource extends Model<IGrafanaDatasource> implements IGrafanaDatasource {
    "apiVersion": IGrafanaDatasource["apiVersion"];
    "kind": IGrafanaDatasource["kind"];
    "metadata"?: IGrafanaDatasource["metadata"];
    "spec": IGrafanaDatasource["spec"];
    "status"?: IGrafanaDatasource["status"];
    static apiVersion: IGrafanaDatasource["apiVersion"];
    static kind: IGrafanaDatasource["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IGrafanaDatasource>;
    constructor(data?: ModelData<IGrafanaDatasource>);
}
