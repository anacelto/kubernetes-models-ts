import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/BigqueryCnrmCloudGoogleComV1beta1BigQueryRoutine";

export interface IBigQueryRoutine {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "bigquery.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "BigQueryRoutine";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * Input/output argument of a function or a stored procedure.
     */
    "arguments"?: Array<{
      /**
       * Defaults to FIXED_TYPE. Default value: "FIXED_TYPE" Possible values: ["FIXED_TYPE", "ANY_TYPE"].
       */
      "argumentKind"?: string;
      /**
       * A JSON schema for the data type. Required unless argumentKind = ANY_TYPE.
       * ~>\*\*NOTE\*\*: Because this field expects a JSON string, any changes to the string
       * will create a diff, even if the JSON itself hasn't changed. If the API returns
       * a different value for the same schema, e.g. it switched the order of values
       * or replaced STRUCT field type with RECORD field type, we currently cannot
       * suppress the recurring diff this causes. As a workaround, we recommend using
       * the schema as returned by the API.
       */
      "dataType"?: string;
      /**
       * Specifies whether the argument is input or output. Can be set for procedures only. Possible values: ["IN", "OUT", "INOUT"].
       */
      "mode"?: string;
      /**
       * The name of this argument. Can be absent for function return argument.
       */
      "name"?: string;
    }>;
    /**
     * The ID of the dataset containing this routine.
     */
    "datasetRef": {
      /**
       * Allowed value: The `name` field of a `BigQueryDataset` resource.
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
       * Allowed value: The `name` field of a `BigQueryDataset` resource.
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
       * Allowed value: The `name` field of a `BigQueryDataset` resource.
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
       * Allowed value: The `name` field of a `BigQueryDataset` resource.
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
       * Allowed value: The `name` field of a `BigQueryDataset` resource.
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
       * Allowed value: The `name` field of a `BigQueryDataset` resource.
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
       * Allowed value: The `name` field of a `BigQueryDataset` resource.
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
     * The body of the routine. For functions, this is the expression in the AS clause.
     * If language=SQL, it is the substring inside (but excluding) the parentheses.
     */
    "definitionBody": string;
    /**
     * The description of the routine if defined.
     */
    "description"?: string;
    /**
     * The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"].
     */
    "determinismLevel"?: string;
    /**
     * Optional. If language = "JAVASCRIPT", this field stores the path of the
     * imported JAVASCRIPT libraries.
     */
    "importedLibraries"?: Array<string>;
    /**
     * The language of the routine. Possible values: ["SQL", "JAVASCRIPT"].
     */
    "language"?: string;
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
     * Immutable. Optional. The routineId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION".
     * 
     * If absent, the return table type is inferred from definitionBody at query time in each query
     * that references this routine. If present, then the columns in the evaluated table result will
     * be cast to match the column types specificed in return table type, at query time.
     */
    "returnTableType"?: string;
    /**
     * A JSON schema for the return type. Optional if language = "SQL"; required otherwise.
     * If absent, the return type is inferred from definitionBody at query time in each query
     * that references this routine. If present, then the evaluated result will be cast to
     * the specified returned type at query time. ~>\*\*NOTE\*\*: Because this field expects a JSON
     * string, any changes to the string will create a diff, even if the JSON itself hasn't
     * changed. If the API returns a different value for the same schema, e.g. it switche
     * d the order of values or replaced STRUCT field type with RECORD field type, we currently
     * cannot suppress the recurring diff this causes. As a workaround, we recommend using
     * the schema as returned by the API.
     */
    "returnType"?: string;
    /**
     * Immutable. The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"].
     */
    "routineType"?: string;
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
     * The time when this routine was created, in milliseconds since the
     * epoch.
     */
    "creationTime"?: number;
    /**
     * The time when this routine was modified, in milliseconds since the
     * epoch.
     */
    "lastModifiedTime"?: number;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class BigQueryRoutine extends Model<IBigQueryRoutine> implements IBigQueryRoutine {
  "apiVersion": IBigQueryRoutine["apiVersion"];
  "kind": IBigQueryRoutine["kind"];
  "metadata"?: IBigQueryRoutine["metadata"];
  "spec": IBigQueryRoutine["spec"];
  "status"?: IBigQueryRoutine["status"];

static apiVersion: IBigQueryRoutine["apiVersion"] = "bigquery.cnrm.cloud.google.com/v1beta1";
static kind: IBigQueryRoutine["kind"] = "BigQueryRoutine";
static is = createTypeMetaGuard<IBigQueryRoutine>(BigQueryRoutine);

constructor(data?: ModelData<IBigQueryRoutine>) {
  super();

  this.setDefinedProps({
    apiVersion: BigQueryRoutine.apiVersion,
    kind: BigQueryRoutine.kind,
    ...data
  } as IBigQueryRoutine);
}
}


setValidateFunc(BigQueryRoutine, validate as ValidateFunc<IBigQueryRoutine>);
