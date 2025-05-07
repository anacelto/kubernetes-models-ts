import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/DialogflowcxCnrmCloudGoogleComV1alpha1DialogflowCXEntityType";

export interface IDialogflowCXEntityType {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "dialogflowcx.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "DialogflowCXEntityType";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Represents kinds of entities.
     * \* AUTO_EXPANSION_MODE_UNSPECIFIED: Auto expansion disabled for the entity.
     * \* AUTO_EXPANSION_MODE_DEFAULT: Allows an agent to recognize values that have not been explicitly listed in the entity. Possible values: ["AUTO_EXPANSION_MODE_DEFAULT", "AUTO_EXPANSION_MODE_UNSPECIFIED"].
     */
    "autoExpansionMode"?: string;
    /**
     * The human-readable name of the entity type, unique within the agent.
     */
    "displayName": string;
    /**
     * Enables fuzzy entity extraction during classification.
     */
    "enableFuzzyExtraction"?: boolean;
    /**
     * The collection of entity entries associated with the entity type.
     */
    "entities": Array<{
      /**
       * A collection of value synonyms. For example, if the entity type is vegetable, and value is scallions, a synonym could be green onions.
       * For KIND_LIST entity types: This collection must contain exactly one synonym equal to value.
       */
      "synonyms"?: Array<string>;
      /**
       * The primary value associated with this entity entry. For example, if the entity type is vegetable, the value could be scallions.
       * For KIND_MAP entity types: A canonical value to be used in place of synonyms.
       * For KIND_LIST entity types: A string that can contain references to other entity types (with or without aliases).
       */
      "value"?: string;
    }>;
    /**
     * Collection of exceptional words and phrases that shouldn't be matched. For example, if you have a size entity type with entry giant(an adjective), you might consider adding giants(a noun) as an exclusion.
     * If the kind of entity type is KIND_MAP, then the phrases specified by entities and excluded phrases should be mutually exclusive.
     */
    "excludedPhrases"?: Array<{
      /**
       * The word or phrase to be excluded.
       */
      "value"?: string;
    }>;
    /**
     * Indicates whether the entity type can be automatically expanded.
     * \* KIND_MAP: Map entity types allow mapping of a group of synonyms to a canonical value.
     * \* KIND_LIST: List entity types contain a set of entries that do not map to canonical values. However, list entity types can contain references to other entity types (with or without aliases).
     * \* KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values. Possible values: ["KIND_MAP", "KIND_LIST", "KIND_REGEXP"].
     */
    "kind": string;
    /**
     * Immutable. The language of the following fields in entityType:
     * EntityType.entities.value
     * EntityType.entities.synonyms
     * EntityType.excluded_phrases.value
     * If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.
     */
    "languageCode"?: string;
    /**
     * Immutable. The agent to create a entity type for.
     * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
     */
    "parent"?: string;
    /**
     * Indicates whether parameters of the entity type should be redacted in log. If redaction is enabled, page parameters and intent parameters referring to the entity type will be replaced by parameter name when logging.
     */
    "redact"?: boolean;
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
     * The unique identifier of the entity type.
     * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/entityTypes/<Entity Type ID>.
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class DialogflowCXEntityType extends Model<IDialogflowCXEntityType> implements IDialogflowCXEntityType {
  "apiVersion": IDialogflowCXEntityType["apiVersion"];
  "kind": IDialogflowCXEntityType["kind"];
  "metadata"?: IDialogflowCXEntityType["metadata"];
  "spec": IDialogflowCXEntityType["spec"];
  "status"?: IDialogflowCXEntityType["status"];

static apiVersion: IDialogflowCXEntityType["apiVersion"] = "dialogflowcx.cnrm.cloud.google.com/v1alpha1";
static kind: IDialogflowCXEntityType["kind"] = "DialogflowCXEntityType";
static is = createTypeMetaGuard<IDialogflowCXEntityType>(DialogflowCXEntityType);

constructor(data?: ModelData<IDialogflowCXEntityType>) {
  super();

  this.setDefinedProps({
    apiVersion: DialogflowCXEntityType.apiVersion,
    kind: DialogflowCXEntityType.kind,
    ...data
  } as IDialogflowCXEntityType);
}
}


setValidateFunc(DialogflowCXEntityType, validate as ValidateFunc<IDialogflowCXEntityType>);
