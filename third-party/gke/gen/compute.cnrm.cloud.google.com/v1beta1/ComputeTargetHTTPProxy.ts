import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ComputeCnrmCloudGoogleComV1beta1ComputeTargetHTTPProxy";

export interface IComputeTargetHTTPProxy {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "compute.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "ComputeTargetHTTPProxy";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Immutable. An optional description of this resource.
     */
    "description"?: string;
    /**
     * Immutable. Specifies how long to keep a connection open, after completing a response,
     * while there is no matching traffic (in seconds). If an HTTP keepalive is
     * not specified, a default value (610 seconds) will be used. For Global
     * external HTTP(S) load balancer, the minimum allowed value is 5 seconds and
     * the maximum allowed value is 1200 seconds. For Global external HTTP(S)
     * load balancer (classic), this option is not available publicly.
     */
    "httpKeepAliveTimeoutSec"?: number;
    /**
     * Location represents the geographical location of the ComputeTargetHTTPProxy. Specify a region name or "global" for global resources. Reference: GCP definition of regions/zones (https://cloud.google.com/compute/docs/regions-zones/)
     */
    "location": string;
    /**
     * Immutable. This field only applies when the forwarding rule that references
     * this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.
     */
    "proxyBind"?: boolean;
    /**
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * A reference to the ComputeURLMap resource that defines the mapping
     * from URL to the BackendService.
     */
    "urlMapRef": {
      /**
       * Allowed value: The `selfLink` field of a `ComputeURLMap` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeURLMap` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeURLMap` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeURLMap` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeURLMap` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeURLMap` resource.
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
       * Allowed value: The `selfLink` field of a `ComputeURLMap` resource.
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
     * Creation timestamp in RFC3339 text format.
     */
    "creationTimestamp"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * The unique identifier for the resource.
     */
    "proxyId"?: number;
    "selfLink"?: string;
  };
}

export class ComputeTargetHTTPProxy extends Model<IComputeTargetHTTPProxy> implements IComputeTargetHTTPProxy {
  "apiVersion": IComputeTargetHTTPProxy["apiVersion"];
  "kind": IComputeTargetHTTPProxy["kind"];
  "metadata"?: IComputeTargetHTTPProxy["metadata"];
  "spec": IComputeTargetHTTPProxy["spec"];
  "status"?: IComputeTargetHTTPProxy["status"];

static apiVersion: IComputeTargetHTTPProxy["apiVersion"] = "compute.cnrm.cloud.google.com/v1beta1";
static kind: IComputeTargetHTTPProxy["kind"] = "ComputeTargetHTTPProxy";
static is = createTypeMetaGuard<IComputeTargetHTTPProxy>(ComputeTargetHTTPProxy);

constructor(data?: ModelData<IComputeTargetHTTPProxy>) {
  super();

  this.setDefinedProps({
    apiVersion: ComputeTargetHTTPProxy.apiVersion,
    kind: ComputeTargetHTTPProxy.kind,
    ...data
  } as IComputeTargetHTTPProxy);
}
}


setValidateFunc(ComputeTargetHTTPProxy, validate as ValidateFunc<IComputeTargetHTTPProxy>);
