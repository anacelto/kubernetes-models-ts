import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IDataCatalogTag {
    /**
     * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     */
    "apiVersion": "datacatalog.cnrm.cloud.google.com/v1alpha1";
    /**
     * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    "kind": "DataCatalogTag";
    "metadata"?: IObjectMeta;
    "spec": {
        /**
         * Resources like Entry can have schemas associated with them. This scope allows users to attach tags to an
         * individual column based on that schema.
         *
         * For attaching a tag to a nested column, use '.' to separate the column names. Example:
         * 'outer_column.inner_column'.
         */
        "column"?: string;
        /**
         * This maps the ID of a tag field to the value of and additional information about that field.
         * Valid field IDs are defined by the tag's template. A tag must have at least 1 field and at most 500 fields.
         */
        "fields": Array<{
            /**
             * Holds the value for a tag field with boolean type.
             */
            "boolValue"?: boolean;
            /**
             * The display name of this field.
             */
            "displayName"?: string;
            /**
             * Holds the value for a tag field with double type.
             */
            "doubleValue"?: number;
            /**
             * The display name of the enum value.
             */
            "enumValue"?: string;
            "fieldName": string;
            /**
             * The order of this field with respect to other fields in this tag. For example, a higher value can indicate
             * a more important field. The value can be negative. Multiple fields can have the same order, and field orders
             * within a tag do not have to be sequential.
             */
            "order"?: number;
            /**
             * Holds the value for a tag field with string type.
             */
            "stringValue"?: string;
            /**
             * Holds the value for a tag field with timestamp type.
             */
            "timestampValue"?: string;
        }>;
        /**
         * Immutable. The name of the parent this tag is attached to. This can be the name of an entry or an entry group. If an entry group, the tag will be attached to
         * all entries in that group.
         */
        "parent"?: string;
        /**
         * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
         */
        "resourceID"?: string;
        /**
         * Immutable. The resource name of the tag template that this tag uses. Example:
         * projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId}
         * This field cannot be modified after creation.
         */
        "template": string;
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
         * The resource name of the tag in URL format. Example:
         * projects/{project_id}/locations/{location}/entrygroups/{entryGroupId}/entries/{entryId}/tags/{tag_id} or
         * projects/{project_id}/locations/{location}/entrygroups/{entryGroupId}/tags/{tag_id}
         * where tag_id is a system-generated identifier. Note that this Tag may not actually be stored in the location in this name.
         */
        "name"?: string;
        /**
         * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
         */
        "observedGeneration"?: number;
        /**
         * The display name of the tag template.
         */
        "templateDisplayname"?: string;
    };
}
export declare class DataCatalogTag extends Model<IDataCatalogTag> implements IDataCatalogTag {
    "apiVersion": IDataCatalogTag["apiVersion"];
    "kind": IDataCatalogTag["kind"];
    "metadata"?: IDataCatalogTag["metadata"];
    "spec": IDataCatalogTag["spec"];
    "status"?: IDataCatalogTag["status"];
    static apiVersion: IDataCatalogTag["apiVersion"];
    static kind: IDataCatalogTag["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IDataCatalogTag>;
    constructor(data?: ModelData<IDataCatalogTag>);
}
