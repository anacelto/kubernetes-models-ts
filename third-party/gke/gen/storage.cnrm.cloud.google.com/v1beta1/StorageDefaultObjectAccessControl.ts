import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/StorageCnrmCloudGoogleComV1beta1StorageDefaultObjectAccessControl";

export interface IStorageDefaultObjectAccessControl {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "storage.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "StorageDefaultObjectAccessControl";
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
     * The entity holding the permission, in one of the following forms:
     *   \* user-{{userId}}
     *   \* user-{{email}} (such as "user-liz@example.com")
     *   \* group-{{groupId}}
     *   \* group-{{email}} (such as "group-example@googlegroups.com")
     *   \* domain-{{domain}} (such as "domain-example.com")
     *   \* project-team-{{projectId}}
     *   \* allUsers
     *   \* allAuthenticatedUsers.
     */
    "entity": string;
    /**
     * The name of the object, if applied to an object.
     */
    "object"?: string;
    /**
     * The access permission for the entity. Possible values: ["OWNER", "READER"].
     */
    "role": string;
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
     * The ID for the entity.
     */
    "entityId"?: string;
    /**
     * The content generation of the object, if applied to an object.
     */
    "generation"?: number;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * The project team associated with the entity.
     */
    "projectTeam"?: {
      /**
       * The project team associated with the entity.
       */
      "projectNumber"?: string;
      /**
       * The team. Possible values: ["editors", "owners", "viewers"].
       */
      "team"?: string;
    };
  };
}

export class StorageDefaultObjectAccessControl extends Model<IStorageDefaultObjectAccessControl> implements IStorageDefaultObjectAccessControl {
  "apiVersion": IStorageDefaultObjectAccessControl["apiVersion"];
  "kind": IStorageDefaultObjectAccessControl["kind"];
  "metadata"?: IStorageDefaultObjectAccessControl["metadata"];
  "spec": IStorageDefaultObjectAccessControl["spec"];
  "status"?: IStorageDefaultObjectAccessControl["status"];

static apiVersion: IStorageDefaultObjectAccessControl["apiVersion"] = "storage.cnrm.cloud.google.com/v1beta1";
static kind: IStorageDefaultObjectAccessControl["kind"] = "StorageDefaultObjectAccessControl";
static is = createTypeMetaGuard<IStorageDefaultObjectAccessControl>(StorageDefaultObjectAccessControl);

constructor(data?: ModelData<IStorageDefaultObjectAccessControl>) {
  super();

  this.setDefinedProps({
    apiVersion: StorageDefaultObjectAccessControl.apiVersion,
    kind: StorageDefaultObjectAccessControl.kind,
    ...data
  } as IStorageDefaultObjectAccessControl);
}
}


setValidateFunc(StorageDefaultObjectAccessControl, validate as ValidateFunc<IStorageDefaultObjectAccessControl>);
