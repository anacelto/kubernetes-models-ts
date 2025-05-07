import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/TagsCnrmCloudGoogleComV1beta1TagsTagKey";

export interface ITagsTagKey {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "tags.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "TagsTagKey";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * User-assigned description of the TagKey. Must not exceed 256 characters.
     */
    "description"?: string;
    /**
     * Immutable. Input only. The resource name of the new TagKey's parent. Must be of the form organizations/{org_id} or projects/{project_id_or_number}.
     */
    "parent": string;
    /**
     * Immutable. Optional. A purpose cannot be changed once set.
     * 
     * A purpose denotes that this Tag is intended for use in policies of a specific policy engine, and will involve that policy engine in management operations involving this Tag. Possible values: ["GCE_FIREWALL"].
     */
    "purpose"?: string;
    /**
     * Immutable. Optional. Purpose data cannot be changed once set.
     * 
     * Purpose data corresponds to the policy system that the tag is intended for. For example, the GCE_FIREWALL purpose expects data in the following format: 'network = "<project-name>/<vpc-name>"'.
     */
    "purposeData"?: {
      [key: string]: string;
    };
    /**
     * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
     */
    "resourceID"?: string;
    /**
     * Immutable. Input only. The user friendly name for a TagKey. The short name should be unique for TagKeys within the same tag namespace.
     * 
     * The short name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between.
     */
    "shortName": string;
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
     * Output only. Creation time.
     * 
     * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     */
    "createTime"?: string;
    /**
     * The generated numeric id for the TagKey.
     */
    "name"?: string;
    /**
     * Output only. Namespaced name of the TagKey.
     */
    "namespacedName"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
    /**
     * Output only. Update time.
     * 
     * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     */
    "updateTime"?: string;
  };
}

export class TagsTagKey extends Model<ITagsTagKey> implements ITagsTagKey {
  "apiVersion": ITagsTagKey["apiVersion"];
  "kind": ITagsTagKey["kind"];
  "metadata"?: ITagsTagKey["metadata"];
  "spec": ITagsTagKey["spec"];
  "status"?: ITagsTagKey["status"];

static apiVersion: ITagsTagKey["apiVersion"] = "tags.cnrm.cloud.google.com/v1beta1";
static kind: ITagsTagKey["kind"] = "TagsTagKey";
static is = createTypeMetaGuard<ITagsTagKey>(TagsTagKey);

constructor(data?: ModelData<ITagsTagKey>) {
  super();

  this.setDefinedProps({
    apiVersion: TagsTagKey.apiVersion,
    kind: TagsTagKey.kind,
    ...data
  } as ITagsTagKey);
}
}


setValidateFunc(TagsTagKey, validate as ValidateFunc<ITagsTagKey>);
