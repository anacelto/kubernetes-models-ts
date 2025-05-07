import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/BigqueryCnrmCloudGoogleComV1alpha1BigQueryDatasetAccess";

export interface IBigQueryDatasetAccess {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "bigquery.cnrm.cloud.google.com/v1alpha1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "BigQueryDatasetAccess";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Immutable. Grants all resources of particular types in a particular dataset read access to the current dataset.
     */
    "dataset"?: {
      /**
       * Immutable. The dataset this entry applies to.
       */
      "dataset": {
        /**
         * Immutable. The ID of the dataset containing this table.
         */
        "datasetId": string;
        /**
         * Immutable. The ID of the project containing this table.
         */
        "projectId": string;
      };
      /**
       * Immutable. Which resources in the dataset this entry applies to. Currently, only views are supported,
       * but additional target types may be added in the future. Possible values: VIEWS.
       */
      "targetTypes": Array<string>;
    };
    /**
     * Immutable. A unique ID for this dataset, without the project name. The ID
     * must contain only letters (a-z, A-Z), numbers (0-9), or
     * underscores (_). The maximum length is 1,024 characters.
     */
    "datasetId": string;
    /**
     * Immutable. A domain to grant access to. Any users signed in with the
     * domain specified will be granted the specified access.
     */
    "domain"?: string;
    /**
     * Immutable. An email address of a Google Group to grant access to.
     */
    "groupByEmail"?: string;
    /**
     * Immutable. Some other type of member that appears in the IAM Policy but isn't a user,
     * group, domain, or special group. For example: 'allUsers'.
     */
    "iamMember"?: string;
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
     * Immutable. Optional. The routine of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Immutable. Describes the rights granted to the user specified by the other
     * member of the access object. Basic, predefined, and custom roles are
     * supported. Predefined roles that have equivalent basic roles are
     * swapped by the API to their basic counterparts, and will show a diff
     * post-create. See
     * [official docs](https://cloud.google.com/bigquery/docs/access-control).
     */
    "role"?: string;
    /**
     * Immutable. A special group to grant access to. Possible values include:
     * 
     * 
     * \* 'projectOwners': Owners of the enclosing project.
     * 
     * 
     * \* 'projectReaders': Readers of the enclosing project.
     * 
     * 
     * \* 'projectWriters': Writers of the enclosing project.
     * 
     * 
     * \* 'allAuthenticatedUsers': All authenticated BigQuery users.
     */
    "specialGroup"?: string;
    /**
     * Immutable. An email address of a user to grant access to. For example:
     * fred@example.com.
     */
    "userByEmail"?: string;
    /**
     * Immutable. A view from a different dataset to grant access to. Queries
     * executed against that view will have read access to tables in
     * this dataset. The role field is not required when this field is
     * set. If that view is updated by any user, access to the view
     * needs to be granted again via an update operation.
     */
    "view"?: {
      /**
       * Immutable. The ID of the dataset containing this table.
       */
      "datasetId": string;
      /**
       * Immutable. The ID of the project containing this table.
       */
      "projectId": string;
      /**
       * Immutable. The ID of the table. The ID must contain only letters (a-z,
       * A-Z), numbers (0-9), or underscores (_). The maximum length
       * is 1,024 characters.
       */
      "tableId": string;
    };
  };
  "status"?: {
    /**
     * If true, represents that that the iam_member in the config was translated to a different member type by the API, and is stored in state as a different member type.
     */
    "apiUpdatedMember"?: boolean;
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
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class BigQueryDatasetAccess extends Model<IBigQueryDatasetAccess> implements IBigQueryDatasetAccess {
  "apiVersion": IBigQueryDatasetAccess["apiVersion"];
  "kind": IBigQueryDatasetAccess["kind"];
  "metadata"?: IBigQueryDatasetAccess["metadata"];
  "spec": IBigQueryDatasetAccess["spec"];
  "status"?: IBigQueryDatasetAccess["status"];

static apiVersion: IBigQueryDatasetAccess["apiVersion"] = "bigquery.cnrm.cloud.google.com/v1alpha1";
static kind: IBigQueryDatasetAccess["kind"] = "BigQueryDatasetAccess";
static is = createTypeMetaGuard<IBigQueryDatasetAccess>(BigQueryDatasetAccess);

constructor(data?: ModelData<IBigQueryDatasetAccess>) {
  super();

  this.setDefinedProps({
    apiVersion: BigQueryDatasetAccess.apiVersion,
    kind: BigQueryDatasetAccess.kind,
    ...data
  } as IBigQueryDatasetAccess);
}
}


setValidateFunc(BigQueryDatasetAccess, validate as ValidateFunc<IBigQueryDatasetAccess>);
