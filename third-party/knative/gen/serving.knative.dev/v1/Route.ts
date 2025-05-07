import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ServingKnativeDevV1Route";

/**
 * Route is responsible for configuring ingress over a collection of Revisions. Some of the Revisions a Route distributes traffic over may be specified by referencing the Configuration responsible for creating them; in these cases the Route is additionally responsible for monitoring the Configuration for "latest ready revision" changes, and smoothly rolling out latest revisions. See also: https://github.com/knative/serving/blob/main/docs/spec/overview.md#route
 */
export interface IRoute {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "serving.knative.dev/v1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "Route";
  "metadata"?: IObjectMeta;
  /**
   * Spec holds the desired state of the Route (from the client).
   */
  "spec"?: {
    /**
     * Traffic specifies how to distribute traffic over a collection of revisions and configurations.
     */
    "traffic"?: Array<{
      /**
       * ConfigurationName of a configuration to whose latest revision we will send this portion of traffic. When the "status.latestReadyRevisionName" of the referenced configuration changes, we will automatically migrate traffic from the prior "latest ready" revision to the new one.  This field is never set in Route's status, only its spec.  This is mutually exclusive with RevisionName.
       */
      "configurationName"?: string;
      /**
       * LatestRevision may be optionally provided to indicate that the latest ready Revision of the Configuration should be used for this traffic target.  When provided LatestRevision must be true if RevisionName is empty; it must be false when RevisionName is non-empty.
       */
      "latestRevision"?: boolean;
      /**
       * Percent indicates that percentage based routing should be used and the value indicates the percent of traffic that is be routed to this Revision or Configuration. `0` (zero) mean no traffic, `100` means all traffic. When percentage based routing is being used the follow rules apply: - the sum of all percent values must equal 100 - when not specified, the implied value for `percent` is zero for that particular Revision or Configuration
       */
      "percent"?: number;
      /**
       * RevisionName of a specific revision to which to send this portion of traffic.  This is mutually exclusive with ConfigurationName.
       */
      "revisionName"?: string;
      /**
       * Tag is optionally used to expose a dedicated url for referencing this target exclusively.
       */
      "tag"?: string;
      /**
       * URL displays the URL for accessing named traffic targets. URL is displayed in status, and is disallowed on spec. URL must contain a scheme (e.g. http://) and a hostname, but may not contain anything else (e.g. basic auth, url path, etc.)
       */
      "url"?: string;
    }>;
  };
  /**
   * Status communicates the observed state of the Route (from the controller).
   */
  "status"?: {
    /**
     * Address holds the information needed for a Route to be the target of an event.
     */
    "address"?: {
      /**
       * CACerts is the Certification Authority (CA) certificates in PEM format according to https://www.rfc-editor.org/rfc/rfc7468.
       */
      "CACerts"?: string;
      /**
       * Name is the name of the address.
       */
      "name"?: string;
      "url"?: string;
    };
    /**
     * Annotations is additional Status fields for the Resource to save some additional State as well as convey more information to the user. This is roughly akin to Annotations on any k8s resource, just the reconciler conveying richer information outwards.
     */
    "annotations"?: {
      [key: string]: string;
    };
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
     * Traffic holds the configured traffic distribution. These entries will always contain RevisionName references. When ConfigurationName appears in the spec, this will hold the LatestReadyRevisionName that we last observed.
     */
    "traffic"?: Array<{
      /**
       * ConfigurationName of a configuration to whose latest revision we will send this portion of traffic. When the "status.latestReadyRevisionName" of the referenced configuration changes, we will automatically migrate traffic from the prior "latest ready" revision to the new one.  This field is never set in Route's status, only its spec.  This is mutually exclusive with RevisionName.
       */
      "configurationName"?: string;
      /**
       * LatestRevision may be optionally provided to indicate that the latest ready Revision of the Configuration should be used for this traffic target.  When provided LatestRevision must be true if RevisionName is empty; it must be false when RevisionName is non-empty.
       */
      "latestRevision"?: boolean;
      /**
       * Percent indicates that percentage based routing should be used and the value indicates the percent of traffic that is be routed to this Revision or Configuration. `0` (zero) mean no traffic, `100` means all traffic. When percentage based routing is being used the follow rules apply: - the sum of all percent values must equal 100 - when not specified, the implied value for `percent` is zero for that particular Revision or Configuration
       */
      "percent"?: number;
      /**
       * RevisionName of a specific revision to which to send this portion of traffic.  This is mutually exclusive with ConfigurationName.
       */
      "revisionName"?: string;
      /**
       * Tag is optionally used to expose a dedicated url for referencing this target exclusively.
       */
      "tag"?: string;
      /**
       * URL displays the URL for accessing named traffic targets. URL is displayed in status, and is disallowed on spec. URL must contain a scheme (e.g. http://) and a hostname, but may not contain anything else (e.g. basic auth, url path, etc.)
       */
      "url"?: string;
    }>;
    /**
     * URL holds the url that will distribute traffic over the provided traffic targets. It generally has the form http[s]://{route-name}.{route-namespace}.{cluster-level-suffix}
     */
    "url"?: string;
  };
}

/**
 * Route is responsible for configuring ingress over a collection of Revisions. Some of the Revisions a Route distributes traffic over may be specified by referencing the Configuration responsible for creating them; in these cases the Route is additionally responsible for monitoring the Configuration for "latest ready revision" changes, and smoothly rolling out latest revisions. See also: https://github.com/knative/serving/blob/main/docs/spec/overview.md#route
 */
export class Route extends Model<IRoute> implements IRoute {
  "apiVersion": IRoute["apiVersion"];
  "kind": IRoute["kind"];
  "metadata"?: IRoute["metadata"];
  "spec"?: IRoute["spec"];
  "status"?: IRoute["status"];

static apiVersion: IRoute["apiVersion"] = "serving.knative.dev/v1";
static kind: IRoute["kind"] = "Route";
static is = createTypeMetaGuard<IRoute>(Route);

constructor(data?: ModelData<IRoute>) {
  super();

  this.setDefinedProps({
    apiVersion: Route.apiVersion,
    kind: Route.kind,
    ...data
  } as IRoute);
}
}


setValidateFunc(Route, validate as ValidateFunc<IRoute>);
