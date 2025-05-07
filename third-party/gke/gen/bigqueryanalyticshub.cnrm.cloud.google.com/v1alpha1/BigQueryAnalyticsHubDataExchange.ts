import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/BigqueryanalyticshubCnrmCloudGoogleComV1alpha1BigQueryAnalyticsHubDataExchange";

export interface IBigQueryAnalyticsHubDataExchange {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "bigqueryanalyticshub.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "BigQueryAnalyticsHubDataExchange";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Description of the data exchange.
     */
    "description"?: string;
    /**
     * Human-readable display name of the data exchange. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), and must not start or end with spaces.
     */
    "displayName": string;
    /**
     * Documentation describing the data exchange.
     */
    "documentation"?: string;
    /**
     * Base64 encoded image representing the data exchange.
     */
    "icon"?: string;
    /**
     * Immutable. The name of the location this data exchange.
     */
    "location": string;
    /**
     * Email or URL of the primary point of contact of the data exchange.
     */
    "primaryContact"?: string;
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
     * Immutable. Optional. The dataExchangeId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
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
     * Number of listings contained in the data exchange.
     */
    "listingCount"?: number;
    /**
     * The resource name of the data exchange, for example:
     * "projects/myproject/locations/US/dataExchanges/123".
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class BigQueryAnalyticsHubDataExchange extends Model<IBigQueryAnalyticsHubDataExchange> implements IBigQueryAnalyticsHubDataExchange {
  "apiVersion": IBigQueryAnalyticsHubDataExchange["apiVersion"];
  "kind": IBigQueryAnalyticsHubDataExchange["kind"];
  "metadata"?: IBigQueryAnalyticsHubDataExchange["metadata"];
  "spec": IBigQueryAnalyticsHubDataExchange["spec"];
  "status"?: IBigQueryAnalyticsHubDataExchange["status"];

static apiVersion: IBigQueryAnalyticsHubDataExchange["apiVersion"] = "bigqueryanalyticshub.cnrm.cloud.google.com/v1alpha1";
static kind: IBigQueryAnalyticsHubDataExchange["kind"] = "BigQueryAnalyticsHubDataExchange";
static is = createTypeMetaGuard<IBigQueryAnalyticsHubDataExchange>(BigQueryAnalyticsHubDataExchange);

constructor(data?: ModelData<IBigQueryAnalyticsHubDataExchange>) {
  super();

  this.setDefinedProps({
    apiVersion: BigQueryAnalyticsHubDataExchange.apiVersion,
    kind: BigQueryAnalyticsHubDataExchange.kind,
    ...data
  } as IBigQueryAnalyticsHubDataExchange);
}
}


setValidateFunc(BigQueryAnalyticsHubDataExchange, validate as ValidateFunc<IBigQueryAnalyticsHubDataExchange>);
