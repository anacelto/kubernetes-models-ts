import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/GrafanaIntegreatlyOrgV1beta1GrafanaDashboard";

/**
 * GrafanaDashboard is the Schema for the grafanadashboards API
 */
export interface IGrafanaDashboard {
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
  "kind": "GrafanaDashboard";
  "metadata"?: IObjectMeta;
  /**
   * GrafanaDashboardSpec defines the desired state of GrafanaDashboard
   */
  "spec": {
    /**
     * Allow the Operator to match this resource with Grafanas outside the current namespace
     */
    "allowCrossNamespaceImport"?: boolean;
    /**
     * model from configmap
     */
    "configMapRef"?: {
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
     * Cache duration for models fetched from URLs
     */
    "contentCacheDuration"?: string;
    /**
     * maps required data sources to existing ones
     */
    "datasources"?: Array<{
      "datasourceName": string;
      "inputName": string;
    }>;
    /**
     * environments variables from secrets or config maps
     */
    "envFrom"?: Array<{
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
    }>;
    /**
     * environments variables as a map
     */
    "envs"?: Array<{
      "name": string;
      /**
       * Inline env value
       */
      "value"?: string;
      /**
       * Reference on value source, might be the reference on a secret or config map
       */
      "valueFrom"?: {
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
    /**
     * folder assignment for dashboard
     */
    "folder"?: string;
    /**
     * Name of a `GrafanaFolder` resource in the same namespace
     */
    "folderRef"?: string;
    /**
     * UID of the target folder for this dashboard
     */
    "folderUID"?: string;
    /**
     * grafana.com/dashboards
     */
    "grafanaCom"?: {
      "id": number;
      "revision"?: number;
    };
    /**
     * GzipJson the model's JSON compressed with Gzip. Base64-encoded when in YAML.
     */
    "gzipJson"?: string;
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
     * model json
     */
    "json"?: string;
    /**
     * Jsonnet
     */
    "jsonnet"?: string;
    /**
     * Jsonnet project build
     */
    "jsonnetLib"?: {
      "fileName": string;
      "gzipJsonnetProject": string;
      "jPath"?: Array<string>;
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
     * Manually specify the uid, overwrites uids already present in the json model.
     * Can be any string consisting of alphanumeric characters, - and _ with a maximum length of 40.
     */
    "uid"?: string;
    /**
     * model url
     */
    "url"?: string;
    /**
     * authorization options for model from url
     */
    "urlAuthorization"?: {
      "basicAuth"?: {
        /**
         * SecretKeySelector selects a key of a Secret.
         */
        "password"?: {
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
        /**
         * SecretKeySelector selects a key of a Secret.
         */
        "username"?: {
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
    };
  };
  /**
   * GrafanaDashboardStatus defines the observed state of GrafanaDashboard
   */
  "status"?: {
    /**
     * The dashboard instanceSelector can't find matching grafana instances
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
    "contentCache"?: string;
    "contentTimestamp"?: string;
    "contentUrl"?: string;
    "hash"?: string;
    /**
     * Last time the resource was synchronized with Grafana instances
     */
    "lastResync"?: string;
    "uid"?: string;
  };
}

/**
 * GrafanaDashboard is the Schema for the grafanadashboards API
 */
export class GrafanaDashboard extends Model<IGrafanaDashboard> implements IGrafanaDashboard {
  "apiVersion": IGrafanaDashboard["apiVersion"];
  "kind": IGrafanaDashboard["kind"];
  "metadata"?: IGrafanaDashboard["metadata"];
  "spec": IGrafanaDashboard["spec"];
  "status"?: IGrafanaDashboard["status"];

static apiVersion: IGrafanaDashboard["apiVersion"] = "grafana.integreatly.org/v1beta1";
static kind: IGrafanaDashboard["kind"] = "GrafanaDashboard";
static is = createTypeMetaGuard<IGrafanaDashboard>(GrafanaDashboard);

constructor(data?: ModelData<IGrafanaDashboard>) {
  super();

  this.setDefinedProps({
    apiVersion: GrafanaDashboard.apiVersion,
    kind: GrafanaDashboard.kind,
    ...data
  } as IGrafanaDashboard);
}
}


setValidateFunc(GrafanaDashboard, validate as ValidateFunc<IGrafanaDashboard>);
