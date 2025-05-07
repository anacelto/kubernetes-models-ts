import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/StorageCnrmCloudGoogleComV1beta1StorageBucketAccessControl";

export interface IStorageBucketAccessControl {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "storage.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "StorageBucketAccessControl";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Reference to the bucket.
     */
    "bucketRef": {
      /**
       * Allowed value: The `name` field of a `StorageBucket` resource.
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
       * Allowed value: The `name` field of a `StorageBucket` resource.
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
       * Allowed value: The `name` field of a `StorageBucket` resource.
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
       * Allowed value: The `name` field of a `StorageBucket` resource.
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
       * Allowed value: The `name` field of a `StorageBucket` resource.
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
       * Allowed value: The `name` field of a `StorageBucket` resource.
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
       * Allowed value: The `name` field of a `StorageBucket` resource.
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
     * Immutable. The entity holding the permission, in one of the following forms:
     *   user-userId
     *   user-email
     *   group-groupId
     *   group-email
     *   domain-domain
     *   project-team-projectId
     *   allUsers
     *   allAuthenticatedUsers
     * Examples:
     *   The user liz@example.com would be user-liz@example.com.
     *   The group example@googlegroups.com would be
     *   group-example@googlegroups.com.
     *   To refer to all members of the Google Apps for Business domain
     *   example.com, the entity would be domain-example.com.
     */
    "entity": string;
    /**
     * The access permission for the entity. Possible values: ["OWNER", "READER", "WRITER"].
     */
    "role"?: string;
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
     * The domain associated with the entity.
     */
    "domain"?: string;
    /**
     * The email address associated with the entity.
     */
    "email"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class StorageBucketAccessControl extends Model<IStorageBucketAccessControl> implements IStorageBucketAccessControl {
  "apiVersion": IStorageBucketAccessControl["apiVersion"];
  "kind": IStorageBucketAccessControl["kind"];
  "metadata"?: IStorageBucketAccessControl["metadata"];
  "spec": IStorageBucketAccessControl["spec"];
  "status"?: IStorageBucketAccessControl["status"];

static apiVersion: IStorageBucketAccessControl["apiVersion"] = "storage.cnrm.cloud.google.com/v1beta1";
static kind: IStorageBucketAccessControl["kind"] = "StorageBucketAccessControl";
static is = createTypeMetaGuard<IStorageBucketAccessControl>(StorageBucketAccessControl);

constructor(data?: ModelData<IStorageBucketAccessControl>) {
  super();

  this.setDefinedProps({
    apiVersion: StorageBucketAccessControl.apiVersion,
    kind: StorageBucketAccessControl.kind,
    ...data
  } as IStorageBucketAccessControl);
}
}


setValidateFunc(StorageBucketAccessControl, validate as ValidateFunc<IStorageBucketAccessControl>);
