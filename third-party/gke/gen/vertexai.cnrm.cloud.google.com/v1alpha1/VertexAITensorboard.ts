import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/VertexaiCnrmCloudGoogleComV1alpha1VertexAITensorboard";

export interface IVertexAITensorboard {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "vertexai.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "VertexAITensorboard";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Description of this Tensorboard.
     */
    "description"?: string;
    /**
     * User provided name of this Tensorboard.
     */
    "displayName": string;
    /**
     * Immutable. Customer-managed encryption key spec for a Tensorboard. If set, this Tensorboard and all sub-resources of this Tensorboard will be secured by this key.
     */
    "encryptionSpec"?: {
      /**
       * Immutable. The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource.
       * Has the form: projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key. The key needs to be in the same region as where the resource is created.
       */
      "kmsKeyName": string;
    };
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
     * Immutable. The region of the tensorboard. eg us-central1.
     */
    "region": string;
    /**
     * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
     */
    "resourceID"?: string;
  };
  "status"?: {
    /**
     * Consumer project Cloud Storage path prefix used to store blob data, which can either be a bucket or directory. Does not end with a '/'.
     */
    "blobStoragePathPrefix"?: string;
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
     * The timestamp of when the Tensorboard was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
     */
    "createTime"?: string;
    /**
     * Name of the Tensorboard.
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * The number of Runs stored in this Tensorboard.
     */
    "runCount"?: string;
    /**
     * The timestamp of when the Tensorboard was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
     */
    "updateTime"?: string;
  };
}

export class VertexAITensorboard extends Model<IVertexAITensorboard> implements IVertexAITensorboard {
  "apiVersion": IVertexAITensorboard["apiVersion"];
  "kind": IVertexAITensorboard["kind"];
  "metadata"?: IVertexAITensorboard["metadata"];
  "spec": IVertexAITensorboard["spec"];
  "status"?: IVertexAITensorboard["status"];

static apiVersion: IVertexAITensorboard["apiVersion"] = "vertexai.cnrm.cloud.google.com/v1alpha1";
static kind: IVertexAITensorboard["kind"] = "VertexAITensorboard";
static is = createTypeMetaGuard<IVertexAITensorboard>(VertexAITensorboard);

constructor(data?: ModelData<IVertexAITensorboard>) {
  super();

  this.setDefinedProps({
    apiVersion: VertexAITensorboard.apiVersion,
    kind: VertexAITensorboard.kind,
    ...data
  } as IVertexAITensorboard);
}
}


setValidateFunc(VertexAITensorboard, validate as ValidateFunc<IVertexAITensorboard>);
