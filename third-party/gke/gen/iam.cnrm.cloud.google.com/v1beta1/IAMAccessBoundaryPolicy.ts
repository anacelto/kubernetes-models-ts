import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/IamCnrmCloudGoogleComV1beta1IAMAccessBoundaryPolicy";

export interface IIAMAccessBoundaryPolicy {
  /**
   * apiVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   */
  "apiVersion": "iam.cnrm.cloud.google.com/v1beta1";
  /**
   * kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  "kind": "IAMAccessBoundaryPolicy";
  "metadata"?: IObjectMeta;
  "spec": {
    /**
     * The display name of the rule.
     */
    "displayName"?: string;
    "projectRef": {
      /**
       * Allowed value: string of the format `cloudresourcemanager.googleapis.com%2Fprojects%2F{{value}}`, where {{value}} is the `name` field of a `Project` resource.
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
       * Allowed value: string of the format `cloudresourcemanager.googleapis.com%2Fprojects%2F{{value}}`, where {{value}} is the `name` field of a `Project` resource.
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
       * Allowed value: string of the format `cloudresourcemanager.googleapis.com%2Fprojects%2F{{value}}`, where {{value}} is the `name` field of a `Project` resource.
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
       * Allowed value: string of the format `cloudresourcemanager.googleapis.com%2Fprojects%2F{{value}}`, where {{value}} is the `name` field of a `Project` resource.
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
       * Allowed value: string of the format `cloudresourcemanager.googleapis.com%2Fprojects%2F{{value}}`, where {{value}} is the `name` field of a `Project` resource.
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
       * Allowed value: string of the format `cloudresourcemanager.googleapis.com%2Fprojects%2F{{value}}`, where {{value}} is the `name` field of a `Project` resource.
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
       * Allowed value: string of the format `cloudresourcemanager.googleapis.com%2Fprojects%2F{{value}}`, where {{value}} is the `name` field of a `Project` resource.
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
     * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
     */
    "resourceID"?: string;
    /**
     * Rules to be applied.
     */
    "rules": Array<{
      /**
       * An access boundary rule in an IAM policy.
       */
      "accessBoundaryRule"?: {
        /**
         * The availability condition further constrains the access allowed by the access boundary rule.
         */
        "availabilityCondition"?: {
          /**
           * Description of the expression. This is a longer text which describes the expression,
           * e.g. when hovered over it in a UI.
           */
          "description"?: string;
          /**
           * Textual representation of an expression in Common Expression Language syntax.
           */
          "expression": string;
          /**
           * String indicating the location of the expression for error reporting,
           * e.g. a file name and a position in the file.
           */
          "location"?: string;
          /**
           * Title for the expression, i.e. a short string describing its purpose.
           * This can be used e.g. in UIs which allow to enter the expression.
           */
          "title"?: string;
        };
        /**
         * A list of permissions that may be allowed for use on the specified resource.
         */
        "availablePermissions"?: Array<string>;
        /**
         * The full resource name of a Google Cloud resource entity.
         */
        "availableResource"?: string;
      };
      /**
       * The description of the rule.
       */
      "description"?: string;
    }>;
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
     * The hash of the resource. Used internally during updates.
     */
    "etag"?: string;
    /**
     * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
     */
    "observedGeneration"?: number;
  };
}

export class IAMAccessBoundaryPolicy extends Model<IIAMAccessBoundaryPolicy> implements IIAMAccessBoundaryPolicy {
  "apiVersion": IIAMAccessBoundaryPolicy["apiVersion"];
  "kind": IIAMAccessBoundaryPolicy["kind"];
  "metadata"?: IIAMAccessBoundaryPolicy["metadata"];
  "spec": IIAMAccessBoundaryPolicy["spec"];
  "status"?: IIAMAccessBoundaryPolicy["status"];

static apiVersion: IIAMAccessBoundaryPolicy["apiVersion"] = "iam.cnrm.cloud.google.com/v1beta1";
static kind: IIAMAccessBoundaryPolicy["kind"] = "IAMAccessBoundaryPolicy";
static is = createTypeMetaGuard<IIAMAccessBoundaryPolicy>(IAMAccessBoundaryPolicy);

constructor(data?: ModelData<IIAMAccessBoundaryPolicy>) {
  super();

  this.setDefinedProps({
    apiVersion: IAMAccessBoundaryPolicy.apiVersion,
    kind: IAMAccessBoundaryPolicy.kind,
    ...data
  } as IIAMAccessBoundaryPolicy);
}
}


setValidateFunc(IAMAccessBoundaryPolicy, validate as ValidateFunc<IIAMAccessBoundaryPolicy>);
