import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/DatacatalogCnrmCloudGoogleComV1alpha1DataCatalogTagTemplate";

export interface IDataCatalogTagTemplate {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "datacatalog.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "DataCatalogTagTemplate";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * The display name for this template.
     */
    "displayName"?: string;
    /**
     * Set of tag template field IDs and the settings for the field. This set is an exhaustive list of the allowed fields. This set must contain at least one field and at most 500 fields. The change of field_id will be resulting in re-creating of field. The change of primitive_type will be resulting in re-creating of field, however if the field is a required, you cannot update it.
     */
    "fields": Array<{
      /**
       * A description for this field.
       */
      "description"?: string;
      /**
       * The display name for this field.
       */
      "displayName"?: string;
      "fieldId": string;
      /**
       * Whether this is a required field. Defaults to false.
       */
      "isRequired"?: boolean;
      /**
       * The resource name of the tag template field in URL format. Example: projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId}/fields/{field}.
       */
      "name"?: string;
      /**
       * The order of this field with respect to other fields in this tag template.
       * A higher value indicates a more important field. The value can be negative.
       * Multiple fields can have the same order, and field orders within a tag do not have to be sequential.
       */
      "order"?: number;
      /**
       * The type of value this tag field can contain.
       */
      "type": {
        /**
         * Represents an enum type.
         *  Exactly one of 'primitive_type' or 'enum_type' must be set.
         */
        "enumType"?: {
          /**
           * The set of allowed values for this enum. The display names of the
           * values must be case-insensitively unique within this set. Currently,
           * enum values can only be added to the list of allowed values. Deletion
           * and renaming of enum values are not supported.
           * Can have up to 500 allowed values.
           */
          "allowedValues": Array<{
            /**
             * The display name of the enum value.
             */
            "displayName": string;
          }>;
        };
        /**
         * Represents primitive types - string, bool etc.
         *  Exactly one of 'primitive_type' or 'enum_type' must be set Possible values: ["DOUBLE", "STRING", "BOOL", "TIMESTAMP"].
         */
        "primitiveType"?: string;
      };
    }>;
    /**
     * This confirms the deletion of any possible tags using this template. Must be set to true in order to delete the tag template.
     */
    "forceDelete"?: boolean;
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
     * Immutable. Template location region.
     */
    "region"?: string;
    /**
     * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
     */
    "resourceID"?: string;
    /**
     * Immutable. The id of the tag template to create.
     */
    "tagTemplateId": string;
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
     * The resource name of the tag template in URL format. Example: projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId}.
     */
    "name"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class DataCatalogTagTemplate extends Model<IDataCatalogTagTemplate> implements IDataCatalogTagTemplate {
  "apiVersion": IDataCatalogTagTemplate["apiVersion"];
  "kind": IDataCatalogTagTemplate["kind"];
  "metadata"?: IDataCatalogTagTemplate["metadata"];
  "spec": IDataCatalogTagTemplate["spec"];
  "status"?: IDataCatalogTagTemplate["status"];

static apiVersion: IDataCatalogTagTemplate["apiVersion"] = "datacatalog.cnrm.cloud.google.com/v1alpha1";
static kind: IDataCatalogTagTemplate["kind"] = "DataCatalogTagTemplate";
static is = createTypeMetaGuard<IDataCatalogTagTemplate>(DataCatalogTagTemplate);

constructor(data?: ModelData<IDataCatalogTagTemplate>) {
  super();

  this.setDefinedProps({
    apiVersion: DataCatalogTagTemplate.apiVersion,
    kind: DataCatalogTagTemplate.kind,
    ...data
  } as IDataCatalogTagTemplate);
}
}


setValidateFunc(DataCatalogTagTemplate, validate as ValidateFunc<IDataCatalogTagTemplate>);
