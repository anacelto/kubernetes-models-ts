import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CloudidentityCnrmCloudGoogleComV1beta1CloudIdentityGroup";

export interface ICloudIdentityGroup {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "cloudidentity.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "CloudIdentityGroup";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * An extended description to help users determine the purpose of a Group.
     * Must not be longer than 4,096 characters.
     */
    "description"?: string;
    /**
     * The display name of the Group.
     */
    "displayName"?: string;
    /**
     * Immutable. EntityKey of the Group.
     */
    "groupKey": {
      /**
       * Immutable. The ID of the entity.
       * 
       * For Google-managed entities, the id must be the email address of an existing
       * group or user.
       * 
       * For external-identity-mapped entities, the id must be a string conforming
       * to the Identity Source's requirements.
       * 
       * Must be unique within a namespace.
       */
      "id": string;
      /**
       * Immutable. The namespace in which the entity exists.
       * 
       * If not specified, the EntityKey represents a Google-managed entity
       * such as a Google user or a Google Group.
       * 
       * If specified, the EntityKey represents an external-identity-mapped group.
       * The namespace must correspond to an identity source created in Admin Console
       * and must be in the form of 'identitysources/{identity_source_id}'.
       */
      "namespace"?: string;
    };
    /**
     * Immutable. The initial configuration options for creating a Group.
     * 
     * See the
     * [API reference](https://cloud.google.com/identity/docs/reference/rest/v1beta1/groups/create#initialgroupconfig)
     * for possible values. Default value: "EMPTY" Possible values: ["INITIAL_GROUP_CONFIG_UNSPECIFIED", "WITH_INITIAL_OWNER", "EMPTY"].
     */
    "initialGroupConfig"?: string;
    /**
     * One or more label entries that apply to the Group. Currently supported labels contain a key with an empty value.
     * 
     * Google Groups are the default type of group and have a label with a key of cloudidentity.googleapis.com/groups.discussion_forum and an empty value.
     * 
     * Existing Google Groups can have an additional label with a key of cloudidentity.googleapis.com/groups.security and an empty value added to them. This is an immutable change and the security label cannot be removed once added.
     * 
     * Dynamic groups have a label with a key of cloudidentity.googleapis.com/groups.dynamic.
     * 
     * Identity-mapped groups for Cloud Search have a label with a key of system/groups/external and an empty value.
     */
    "labels": {
      [key: string]: string;
    };
    /**
     * Immutable. The resource name of the entity under which this Group resides in the
     * Cloud Identity resource hierarchy.
     * 
     * Must be of the form identitysources/{identity_source_id} for external-identity-mapped
     * groups or customers/{customer_id} for Google Groups.
     */
    "parent": string;
    /**
     * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
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
     * The time when the Group was created.
     */
    "createTime"?: string;
    /**
     * Resource name of the Group in the format: groups/{group_id}, where group_id
     * is the unique ID assigned to the Group.
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * The time when the Group was last updated.
     */
    "updateTime"?: string;
  };
}

export class CloudIdentityGroup extends Model<ICloudIdentityGroup> implements ICloudIdentityGroup {
  "apiVersion": ICloudIdentityGroup["apiVersion"];
  "kind": ICloudIdentityGroup["kind"];
  "metadata"?: ICloudIdentityGroup["metadata"];
  "spec": ICloudIdentityGroup["spec"];
  "status"?: ICloudIdentityGroup["status"];

static apiVersion: ICloudIdentityGroup["apiVersion"] = "cloudidentity.cnrm.cloud.google.com/v1beta1";
static kind: ICloudIdentityGroup["kind"] = "CloudIdentityGroup";
static is = createTypeMetaGuard<ICloudIdentityGroup>(CloudIdentityGroup);

constructor(data?: ModelData<ICloudIdentityGroup>) {
  super();

  this.setDefinedProps({
    apiVersion: CloudIdentityGroup.apiVersion,
    kind: CloudIdentityGroup.kind,
    ...data
  } as ICloudIdentityGroup);
}
}


setValidateFunc(CloudIdentityGroup, validate as ValidateFunc<ICloudIdentityGroup>);
