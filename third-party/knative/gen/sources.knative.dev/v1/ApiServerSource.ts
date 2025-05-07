import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/SourcesKnativeDevV1ApiServerSource";

/**
 * ApiServerSource is an event source that brings Kubernetes API server events into Knative.
 */
export interface IApiServerSource {
  "spec"?: {
    /**
     * CloudEventOverrides defines overrides to control the output format and modifications of the event sent to the sink.
     */
    "ceOverrides"?: {
      /**
       * Extensions specify what attribute are added or overridden on the outbound event. Each `Extensions` key-value pair are set on the event as an attribute extension independently.
       */
      "extensions"?: {
      };
    };
    /**
     * EventMode controls the format of the event. `Reference` sends a dataref event type for the resource under watch. `Resource` send the full resource lifecycle event. Defaults to `Reference`
     */
    "mode"?: string;
    /**
     * ResourceOwner is an additional filter to only track resources that are owned by a specific resource type. If ResourceOwner matches Resources[n] then Resources[n] is allowed to pass the ResourceOwner filter.
     */
    "owner"?: {
      /**
       * APIVersion - the API version of the resource to watch.
       */
      "apiVersion"?: string;
      /**
       * Kind of the resource to watch. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      "kind"?: string;
    };
    /**
     * Resource are the resources this source will track and send related lifecycle events from the Kubernetes ApiServer, with an optional label selector to help filter.
     */
    "resources": Array<{
      /**
       * APIVersion - the API version of the resource to watch.
       */
      "apiVersion"?: string;
      /**
       * Kind of the resource to watch. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      "kind"?: string;
      /**
       * LabelSelector filters this source to objects to those resources pass the label selector. More info: http://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
       */
      "selector"?: {
        /**
         * matchExpressions is a list of label selector requirements. The requirements are ANDed.
         */
        "matchExpressions"?: Array<{
          /**
           * key is the label key that the selector applies to.
           */
          "key"?: string;
          /**
           * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
           */
          "operator"?: string;
          /**
           * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
           */
          "values"?: Array<string>;
        }>;
        /**
         * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
         */
        "matchLabels"?: {
        };
      };
    }>;
    /**
     * ServiceAccountName is the name of the ServiceAccount to use to run this source. Defaults to default if not set.
     */
    "serviceAccountName"?: string;
    /**
     * Sink is a reference to an object that will resolve to a uri to use as the sink.
     */
    "sink"?: {
      /**
       * Ref points to an Addressable.
       */
      "ref"?: {
        /**
         * API version of the referent.
         */
        "apiVersion"?: string;
        /**
         * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
         */
        "kind"?: string;
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name"?: string;
        /**
         * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ This is optional field, it gets defaulted to the object holding it if left out.
         */
        "namespace"?: string;
      };
      /**
       * URI can be an absolute URL(non-empty scheme and non-empty host) pointing to the target or a relative URI. Relative URIs will be resolved using the base URI retrieved from Ref.
       */
      "uri"?: string;
    };
    /**
     * NamespaceSelector is a label selector to capture the namespaces that should be watched by the source.
     */
    "namespaceSelector"?: {
      /**
       * matchExpressions is a list of label selector requirements. The requirements are ANDed.
       */
      "matchExpressions"?: Array<{
        /**
         * key is the label key that the selector applies to.
         */
        "key"?: string;
        /**
         * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
         */
        "operator"?: string;
        /**
         * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
         */
        "values"?: Array<string>;
      }>;
      /**
       * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
       */
      "matchLabels"?: {
      };
    };
  };
  "status"?: {
    /**
     * Annotations is additional Status fields for the Resource to save some additional State as well as convey more information to the user. This is roughly akin to Annotations on any k8s resource, just the reconciler conveying richer information outwards.
     */
    "annotations"?: {
    };
    /**
     * CloudEventAttributes are the specific attributes that the Source uses as part of its CloudEvents.
     */
    "ceAttributes"?: Array<{
      /**
       * Source is the CloudEvents source attribute.
       */
      "source"?: string;
      /**
       * Type refers to the CloudEvent type attribute.
       */
      "type"?: string;
    }>;
    /**
     * Conditions the latest available observations of a resource's current state.
     */
    "conditions"?: Array<{
      /**
       * LastTransitionTime is the last time the condition transitioned from one status to another. We use VolatileTime in place of metav1.Time to exclude this from creating equality.Semantic differences (all other things held constant).
       */
      "lastTransitionTime"?: string;
      /**
       * A human readable message indicating details about the transition.
       */
      "message"?: string;
      /**
       * The reason for the condition's last transition.
       */
      "reason"?: string;
      /**
       * Severity with which to treat failures of this type of condition. When this is not specified, it defaults to Error.
       */
      "severity"?: string;
      /**
       * Status of the condition, one of True, False, Unknown.
       */
      "status": string;
      /**
       * Type of condition.
       */
      "type": string;
    }>;
    /**
     * ObservedGeneration is the 'Generation' of the Service that was last processed by the controller.
     */
    "observedGeneration"?: number;
    /**
     * SinkURI is the current active sink URI that has been configured for the Source.
     */
    "sinkUri"?: string;
    /**
     * Namespaces show the namespaces currently watched by the ApiServerSource
     */
    "namespaces"?: Array<string>;
  };
  "apiVersion": "sources.knative.dev/v1";
  "kind": "ApiServerSource";
  "metadata"?: IObjectMeta;
}

/**
 * ApiServerSource is an event source that brings Kubernetes API server events into Knative.
 */
export class ApiServerSource extends Model<IApiServerSource> implements IApiServerSource {
  "spec"?: IApiServerSource["spec"];
  "status"?: IApiServerSource["status"];
  "apiVersion": IApiServerSource["apiVersion"];
  "kind": IApiServerSource["kind"];
  "metadata"?: IApiServerSource["metadata"];

static apiVersion: IApiServerSource["apiVersion"] = "sources.knative.dev/v1";
static kind: IApiServerSource["kind"] = "ApiServerSource";
static is = createTypeMetaGuard<IApiServerSource>(ApiServerSource);

constructor(data?: ModelData<IApiServerSource>) {
  super();

  this.setDefinedProps({
    apiVersion: ApiServerSource.apiVersion,
    kind: ApiServerSource.kind,
    ...data
  } as IApiServerSource);
}
}


setValidateFunc(ApiServerSource, validate as ValidateFunc<IApiServerSource>);
