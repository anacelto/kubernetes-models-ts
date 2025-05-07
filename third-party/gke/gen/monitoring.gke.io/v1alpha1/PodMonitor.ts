import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/MonitoringGkeIoV1alpha1PodMonitor";

/**
 * PodMonitor is the Schema for the podmonitors API
 */
export interface IPodMonitor {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "monitoring.gke.io/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "PodMonitor";
  "metadata"?: IObjectMeta;
  /**
   * PodMonitorSpec defines the desired state of PodMonitor
   */
  "spec": {
    /**
     * Selector to select which namespaces the Endpoints objects are discovered from.
     */
    "namespaceSelector"?: {
      /**
       * Boolean describing whether all namespaces are selected in contrast to a list restricting them.
       */
      "any"?: boolean;
      /**
       * List of namespace names.
       */
      "matchNames"?: Array<string>;
    };
    /**
     * A list of endpoints allowed as part of this PodMonitor.
     */
    "podMetricsEndpoints": Array<{
      /**
       * Interval at which metrics should be scraped
       */
      "interval"?: string;
      /**
       * MetricRelabelings are relabel configs applied to metrics returned by a scrape
       */
      "metricRelabelings"?: Array<{
        "action"?: string;
        "regex"?: string;
        "separator"?: string;
        "sourceLabels"?: Array<string>;
      }>;
      /**
       * HTTP path to scrape for metrics.
       */
      "path"?: string;
      /**
       * Name of the pod port this endpoint refers to.
       */
      "port"?: string;
      /**
       * HTTP scheme to use for scraping.
       */
      "scheme"?: string;
      /**
       * Timeout after which the scrape is ended
       */
      "scrapeTimeout"?: string;
    }>;
    /**
     * Selector to select Pod objects.
     */
    "selector": {
      /**
       * matchExpressions is a list of label selector requirements. The requirements are ANDed.
       */
      "matchExpressions"?: Array<{
        /**
         * key is the label key that the selector applies to.
         */
        "key": string;
        /**
         * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
         */
        "operator": string;
        /**
         * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
         */
        "values"?: Array<string>;
      }>;
      /**
       * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
       */
      "matchLabels"?: {
        [key: string]: string;
      };
    };
  };
  /**
   * PodMonitorStatus defines the observed state of PodMonitorStatus This struct is intended for direct use as at the field path .status. The status should tell us: \* What is the current state? \* Is it in a desired state or not? \* How long has it been in that state?
   */
  "status"?: {
    /**
     * Represents the observations of a foo's current state. Known .status.conditions.type are: "Ready"
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
     * ObjectReference contains enough information to let you inspect or modify the referred object. --- New uses of this type are discouraged because of difficulty describing its usage when embedded in APIs.  1. Ignored fields.  It includes many fields which are not generally honored.  For instance, ResourceVersion and FieldPath are both very rarely valid in actual usage.  2. Invalid usage help.  It is impossible to add specific help for individual usage.  In most embedded usages, there are particular     restrictions like, "must refer only to types A and B" or "UID not honored" or "name must be restricted".     Those cannot be well described when embedded.  3. Inconsistent validation.  Because the usages are different, the validation rules are different by usage, which makes it hard for users to predict what will happen.  4. The fields are both imprecise and overly precise.  Kind is not a precise mapping to a URL. This can produce ambiguity     during interpretation and require a REST mapping.  In most cases, the dependency is on the group,resource tuple     and the version of the actual struct is irrelevant.  5. We cannot easily change it.  Because this type is embedded in many locations, updates to this type     will affect numerous schemas.  Don't make new APIs embed an underspecified API type they do not control. Instead of using this type, create a locally provided and used type that is well-focused on your reference. For example, ServiceReferences for admission registration: https://github.com/kubernetes/api/blob/release-1.17/admissionregistration/v1/types.go#L533 .
     */
    "generatedConfigMap"?: {
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
  };
}

/**
 * PodMonitor is the Schema for the podmonitors API
 */
export class PodMonitor extends Model<IPodMonitor> implements IPodMonitor {
  "apiVersion": IPodMonitor["apiVersion"];
  "kind": IPodMonitor["kind"];
  "metadata"?: IPodMonitor["metadata"];
  "spec": IPodMonitor["spec"];
  "status"?: IPodMonitor["status"];

static apiVersion: IPodMonitor["apiVersion"] = "monitoring.gke.io/v1alpha1";
static kind: IPodMonitor["kind"] = "PodMonitor";
static is = createTypeMetaGuard<IPodMonitor>(PodMonitor);

constructor(data?: ModelData<IPodMonitor>) {
  super();

  this.setDefinedProps({
    apiVersion: PodMonitor.apiVersion,
    kind: PodMonitor.kind,
    ...data
  } as IPodMonitor);
}
}


setValidateFunc(PodMonitor, validate as ValidateFunc<IPodMonitor>);
