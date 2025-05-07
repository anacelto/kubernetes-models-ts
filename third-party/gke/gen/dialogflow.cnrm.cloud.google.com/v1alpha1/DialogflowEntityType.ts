import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/DialogflowCnrmCloudGoogleComV1alpha1DialogflowEntityType";

export interface IDialogflowEntityType {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "dialogflow.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "DialogflowEntityType";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * The name of this entity type to be displayed on the console.
     */
    "displayName": string;
    /**
     * Enables fuzzy entity extraction during classification.
     */
    "enableFuzzyExtraction"?: boolean;
    /**
     * The collection of entity entries associated with the entity type.
     */
    "entities"?: Array<{
      /**
       * A collection of value synonyms. For example, if the entity type is vegetable, and value is scallions, a synonym
       * could be green onions.
       * For KIND_LIST entity types:
       * \* This collection must contain exactly one synonym equal to value.
       */
      "synonyms": Array<string>;
      /**
       * The primary value associated with this entity entry. For example, if the entity type is vegetable, the value
       * could be scallions.
       * For KIND_MAP entity types:
       * \* A reference value to be used in place of synonyms.
       * For KIND_LIST entity types:
       * \* A string that can contain references to other entity types (with or without aliases).
       */
      "value": string;
    }>;
    /**
     * Indicates the kind of entity type.
     * \* KIND_MAP: Map entity types allow mapping of a group of synonyms to a reference value.
     * \* KIND_LIST: List entity types contain a set of entries that do not map to reference values. However, list entity
     * types can contain references to other entity types (with or without aliases).
     * \* KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values. Possible values: ["KIND_MAP", "KIND_LIST", "KIND_REGEXP"].
     */
    "kind": string;
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
     * Format: projects/<Project ID>/agent/entityTypes/<Entity type ID>.
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class DialogflowEntityType extends Model<IDialogflowEntityType> implements IDialogflowEntityType {
  "apiVersion": IDialogflowEntityType["apiVersion"];
  "kind": IDialogflowEntityType["kind"];
  "metadata"?: IDialogflowEntityType["metadata"];
  "spec": IDialogflowEntityType["spec"];
  "status"?: IDialogflowEntityType["status"];

static apiVersion: IDialogflowEntityType["apiVersion"] = "dialogflow.cnrm.cloud.google.com/v1alpha1";
static kind: IDialogflowEntityType["kind"] = "DialogflowEntityType";
static is = createTypeMetaGuard<IDialogflowEntityType>(DialogflowEntityType);

constructor(data?: ModelData<IDialogflowEntityType>) {
  super();

  this.setDefinedProps({
    apiVersion: DialogflowEntityType.apiVersion,
    kind: DialogflowEntityType.kind,
    ...data
  } as IDialogflowEntityType);
}
}


setValidateFunc(DialogflowEntityType, validate as ValidateFunc<IDialogflowEntityType>);
