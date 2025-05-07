import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ComputeCnrmCloudGoogleComV1beta1ComputeTargetGRPCProxy";

export interface IComputeTargetGRPCProxy {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "compute.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "ComputeTargetGRPCProxy";
  "metadata"?: IObjectMeta;
  "spec"?: {
    /**
     * An optional description of this resource.
     */
    "description"?: string;
    /**
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * The UrlMap resource that defines the mapping from URL to the BackendService.
     * The protocol field in the BackendService must be set to GRPC.
     */
    "urlMapRef"?: {
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
    /**
     * Immutable. If true, indicates that the BackendServices referenced by
     * the urlMap may be accessed by gRPC applications without using
     * a sidecar proxy. This will enable configuration checks on urlMap
     * and its referenced BackendServices to not allow unsupported features.
     * A gRPC application must use "xds:///" scheme in the target URI
     * of the service it is connecting to. If false, indicates that the
     * BackendServices referenced by the urlMap will be accessed by gRPC
     * applications via a sidecar proxy. In this case, a gRPC application
     * must not use "xds:///" scheme in the target URI of the service
     * it is connecting to.
     */
    "validateForProxyless"?: boolean;
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
     * Fingerprint of this resource. A hash of the contents stored in
     * this object. This field is used in optimistic locking. This field
     * will be ignored when inserting a TargetGrpcProxy. An up-to-date
     * fingerprint must be provided in order to patch/update the
     * TargetGrpcProxy; otherwise, the request will fail with error
     * 412 conditionNotMet. To see the latest fingerprint, make a get()
     * request to retrieve the TargetGrpcProxy. A base64-encoded string.
     */
    "fingerprint"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    "selfLink"?: string;
    /**
     * Server-defined URL with id for the resource.
     */
    "selfLinkWithId"?: string;
  };
}

export class ComputeTargetGRPCProxy extends Model<IComputeTargetGRPCProxy> implements IComputeTargetGRPCProxy {
  "apiVersion": IComputeTargetGRPCProxy["apiVersion"];
  "kind": IComputeTargetGRPCProxy["kind"];
  "metadata"?: IComputeTargetGRPCProxy["metadata"];
  "spec"?: IComputeTargetGRPCProxy["spec"];
  "status"?: IComputeTargetGRPCProxy["status"];

static apiVersion: IComputeTargetGRPCProxy["apiVersion"] = "compute.cnrm.cloud.google.com/v1beta1";
static kind: IComputeTargetGRPCProxy["kind"] = "ComputeTargetGRPCProxy";
static is = createTypeMetaGuard<IComputeTargetGRPCProxy>(ComputeTargetGRPCProxy);

constructor(data?: ModelData<IComputeTargetGRPCProxy>) {
  super();

  this.setDefinedProps({
    apiVersion: ComputeTargetGRPCProxy.apiVersion,
    kind: ComputeTargetGRPCProxy.kind,
    ...data
  } as IComputeTargetGRPCProxy);
}
}


setValidateFunc(ComputeTargetGRPCProxy, validate as ValidateFunc<IComputeTargetGRPCProxy>);
